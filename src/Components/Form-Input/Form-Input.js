import React from "react";
import "./Form-Input.scss";
import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from "./Form-Input-Styled";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {/* trigger shrink animation whenever a user types anything in */}
      {label ? (
        <FormInputLabel
          className={`${otherProps.value.length} ? "shrink" : ""}
          form-input-label`}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
