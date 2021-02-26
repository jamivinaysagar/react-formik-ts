import "./styles.css";
import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import MyComponent from "./Component";
import MyTextInput from "./TextField";
interface Values {
  email: string;
  password: string;
}
const FormSchema = Yup.object().shape({
  password: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required")
});
export default function App() {
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>22 February 2021</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>[Display state values here]</h3>
      {formData.email}
      <br />
      {formData.password}
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={FormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          dispatch({ type: "POST_DATA_SUCCESS", formData: values });
        }}
      >
        {({ submitForm, isSubmitting, errors, touched }) => (
          <Form>
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
            />
            <br />
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password"
            />
            {isSubmitting && <LinearProgress />}
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>

      {/* <MyComponent /> */}
      {/* <MyTextInput /> */}
    </div>
  );
}
