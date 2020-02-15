const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// native module
const path = require("path");

// compression
const compression = require("compression");

const enforce = require("express-sslify");

// if we're in development or testing
if (process.env.NODE_ENV !== "production") require("dotenv").config();

// bring in stripe here because stripe key is stored inside the dotenv library and it's instantiated just above this
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // this returns a function, expects an argument (1st one) is the stripe secret key

// instantiate a new express application
const app = express();
const port = process.env.PORT || 5000;

// compressiong app
app.use(compression());

// redirect HTTP to HTTPS
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// make sure that any requests' body tags are processed and convert it to json
app.use(bodyParser.json());
// url strings are getting in and we're passing out - do not contain spaces or symbols, etc
app.use(bodyParser.urlencoded({ extended: true }));

// CORS!!!!
app.use(cors());

// deploying it to production
if (process.env.NODE_ENV === "production") {
  // serve all static files in the build
  app.use(express.static(path.join(__dirname, "client/build")));

  // need to specify what route we want to serve it at
  // any route
  app.get("*", function(req, res) {
    // send static files (HTML, CSS, JS)
    res.sendFile(path.join(__dirname, "client/build", "index.html")); // give them index.html file which will contain all the frontend code
  });
}

// listen to the port specified above
app.listen(port, error => {
  if (error) throw error;
  console.log(`Server running on port: ${port}`);
});

// give them serviceworker when the server looks for serviceWorker.js
app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

// payment post api
app.post("/payment", (req, res) => {
  // values we get from stripe token
  const body = {
    // token id
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };

  // making the charge
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    // second argument is a callback that represents the req, res that we get back from the stripe API call
    // use the response object to tell the actual clientside whether the charge was successful or not
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
