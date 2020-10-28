import React from "react";
import { Formik, FormikProps } from "formik";
import { loginSchema } from "../../schema/user";
import { InputField } from "../../components/InputField";
import { Form as AntForm, Button } from "antd";
import { getUser } from "../../api/user";
import Center from "../../components/Center";

const Login = () => {
  const onFinish = (values: { email: string; password: string }) => {
    console.log("Success:", values);
    getUser(values.email, values.password);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Center>
      <div style={{margin : "100px 0"}}>
        <h2 style={{fontSize : "2em", fontWeight : 700, textAlign : "center"}}>MY HOUSE</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            setTimeout(() => {
              onFinish(values);
              setSubmitting(false);
            }, 1000);
          }}
          validationSchema={loginSchema}
        >
          {(props: FormikProps<{ email: string; password: string }>) => (
            <AntForm onFinish={props.handleSubmit} onFinishFailed={onFinishFailed} style={{ width: 403, margin: "auto" }} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
              <h3 style={{fontSize : "1.4em", fontWeight : 700, margin : "30px 0 10px"}}>이메일</h3>
              <InputField name="email"/>
              <h3 style={{fontSize : "1.4em", fontWeight : 700, margin : "30px 0 10px"}}>비밀번호</h3>
              <InputField name="password" type="password"/>
              <AntForm.Item>
                <Button type="primary" htmlType="submit" style={{ width: 400, height: 50, margin: "0 0 10px 0", fontSize : "1.2em", fontWeight : 700}} disabled={props.isSubmitting}>
                  login
                </Button>
              </AntForm.Item>
            </AntForm>
          )}
        </Formik>
      </div>
    </Center>
  );
};

export default Login;
