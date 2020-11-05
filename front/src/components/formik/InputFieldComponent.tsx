import * as React from "react";
import { Form, Input } from "antd";
import { useField } from "formik";

const FormItem = Form.Item;

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  type?: string;
};

export const InputField: React.FC<InputFieldProps> = ({ type, ...props }) => {
  const [field, meta, spec] = useField(props);
  // const [form] = Form.useForm();

  const Comp = type === "password" ? Input.Password : Input;
  const errorMsg = meta.touched && meta.error;

  const onClick = () => {
    spec.setTouched(true);
  };

  return (
    <FormItem help={errorMsg} validateStatus={errorMsg ? "error" : undefined}>
      <Comp id={field.name} onChange={field.onChange} onClick={onClick} style={{ width: "400px", height: "40px" }} />
    </FormItem>
  );
};
