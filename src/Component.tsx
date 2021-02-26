import TextField from "@material-ui/core/TextField";
import { FormikProps, withFormik } from "formik";

export interface MyComponentProps {
  name: string;
  error: object;
}

const MyComponent = (props: MyComponentProps) => {
  return (
    <>
      <div>Input goes here</div>
    </>
  );
};

export default MyComponent;
