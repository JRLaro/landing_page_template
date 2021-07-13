import React, { Fragment } from "react";
// import { VideoBg } from "../Hero/styledHero";
import Video from "../../video/video3.mp4";
import {
  Container,
  FormWrap,
  Icon,
  Form,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormButton,
    Text,
  VideoBg
} from "./styledLogin";

const Login = () => {
  return (
    <Fragment>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      <Container>
          <FormWrap>
            <Icon to="/"> logo</Icon>
            <FormContent>
              <Form action="#">
                <FormH1> Login to your account</FormH1>
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput type="email" required />
                <FormLabel htmlFor="for">Password</FormLabel>
                <FormInput type="password" required />
                <FormButton type="submit"> Login</FormButton>
                <Text> Forgot Password?</Text>
              </Form>
            </FormContent>
          </FormWrap>
      </Container>
    </Fragment>
  );
};

export default Login;
