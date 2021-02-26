import "./styles.css";
import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import MyComponent from "./Component";

interface Values {
  email: string;
  password: string;
}

// Added validation for email and password
const FormSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

export default function App() {
  // useSelector to read the state in functional component
  const formData = useSelector((state) => state.formData);
  // dispatch the actions
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>22 February 2021</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>[Display state values here]</h3>
      {formData.email}
      <br />
      {formData.password}

      <MyComponent />
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={FormSchema} // schema validation of formik
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          // dispatching the  data
          dispatch({ type: "POST_DATA_SUCCESS", formData: values });
        }}
      >
        {({ submitForm, isSubmitting }) => (
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
              className="button-style"
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
    </div>
  );
}
