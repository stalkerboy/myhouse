import { Formik, FormikProps } from "formik";
import React from "react";
import { ObjectSchema } from "yup";
import { Button, Form as AntForm } from "antd";
import { IPropsLogin } from "../types/UserType";
import { InputField } from "./formik/InputFieldComponent";

interface LoginFormComponentProps {
  onSubmit: ({}: IPropsLogin) => {};
  initialValues?: IPropsLogin;
  loginSchema: ObjectSchema;
}

export const LoginFormComponent: React.FC<LoginFormComponentProps> = ({ onSubmit, loginSchema, initialValues = { email: "", password: "" } }) => {
  return (
    <div>
      <h2 style={{ fontSize: "2em", fontWeight: 700, textAlign: "center" }}>MY HOUSE</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          onSubmit(values);
          setSubmitting(false);
        }}
        validationSchema={loginSchema}
      >
        {(props: FormikProps<{ email: string; password: string }>) => (
          <AntForm onFinish={props.handleSubmit} style={{ width: 403, margin: "auto" }} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
            <h3 style={{ fontSize: "1.4em", fontWeight: 700, margin: "30px 0 10px" }}>이메일</h3>
            <InputField name="email" />
            <h3 style={{ fontSize: "1.4em", fontWeight: 700, margin: "30px 0 10px" }}>비밀번호</h3>
            <InputField name="password" type="password" />
            <AntForm.Item>
              <Button type="primary" htmlType="submit" style={{ width: 400, height: 50, margin: "0 0 10px 0", fontSize: "1.2em", fontWeight: 700 }} disabled={props.isSubmitting}>
                login
              </Button>
            </AntForm.Item>
          </AntForm>
        )}
      </Formik>
    </div>
  );
};
