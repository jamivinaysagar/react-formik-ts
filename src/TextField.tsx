import React from "react";
import TextField from "@material-ui/core/TextField";
import { useField, Field } from "formik";

interface Values {}
const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)

  console.log("Vinay-->", props);
  const [field, meta] = useField(props);
  return (
    <>
      <Field component={TextField} name="email" type="email" label="Email" />
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default MyTextInput;
