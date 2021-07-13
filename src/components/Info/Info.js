import React, { Fragment } from "react";
import { Button } from "../Button/Button";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Col1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  Col2,
  ImgWrap,
  Img,
} from "./styledInfo";

const Info = ({
  id,
  lightBg,
  topLine,
  img,
  headLine,
  darkText,
  lightText,
  buttonLabel,
  alt,
  desc,
  imgStart,
  primary,
  dark
}) => {
  return (
    <Fragment>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={!imgStart}>
            <Col1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{desc}</Subtitle>
                <BtnWrapper>
                  <Button to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 'true' : 'false'} dark={dark ? "true" : 'false'}>
                    {buttonLabel}
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </Col1>
            <Col2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Col2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </Fragment>
  );
};

export default Info;
