import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Icon1 from "../../img/website.svg";
import Icon2 from "../../img/graphic.svg";
import Icon3 from "../../img/ux-ui.svg";
import { Container, H1, H2, Wrapper, Card, Icon, P } from "./styledServices";

const Services = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <Container id="services">
      <H1>Our Services</H1>
      <Wrapper>
        <Card data-aos="flip-up">
          <Icon src={Icon1} />
          <H2>Website / App </H2>
          <P>
            We build can build your website, designed and tailored to your
            specific needs.
          </P>
        </Card>
        <Card data-aos="flip-down" duration="5000">
          <Icon src={Icon2} />
          <H2>Graphic Design</H2>
          <P>
            Have an idea for a business, but need a logo? We can help you create
            your logo
          </P>
        </Card>
        <Card data-aos="flip-up">
          <Icon src={Icon3} />
          <H2>UX / UI Design</H2>
          <P>
            Already own a website, but it's a little outdated? No problem, we
            can help you.
          </P>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Services;
