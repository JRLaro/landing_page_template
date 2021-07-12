import React from "react";
import Icon1 from '../../img/website.svg'
import Icon2 from '../../img/graphic.svg'
import Icon3 from '../../img/ux-ui.svg'
import {ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP} from './styledServices'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Website / App </ServicesH2>
          <ServicesP>Services Paragraph</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Graphic Design</ServicesH2>
          <ServicesP>Services Paragraph</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>UX / UI Design</ServicesH2>
          <ServicesP>User Interface | User Interface</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;