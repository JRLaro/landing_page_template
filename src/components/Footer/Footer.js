import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinks,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./styledFooter";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinks>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/login">Home</FooterLink>
              <FooterLink to="/login">Testimonials</FooterLink>
              <FooterLink to="/login">Careers</FooterLink>
              <FooterLink to="/login">Privacy</FooterLink>
              <FooterLink to="/login">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/login">Contact</FooterLink>
              <FooterLink to="/login">Support</FooterLink>
              <FooterLink to="/login">Destinations</FooterLink>
              <FooterLink to="/login">Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinks>
      </FooterWrapper>
      <FooterWrapper>
        <FooterLinks>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/login">Submit</FooterLink>
              <FooterLink to="/login">Ambassadors</FooterLink>
              <FooterLink to="/login">Careers</FooterLink>
              <FooterLink to="/login">Agency</FooterLink>
              <FooterLink to="/login">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/login">Instagram</FooterLink>
              <FooterLink to="/login">Facebook</FooterLink>
              <FooterLink to="/login">Youtube</FooterLink>
              <FooterLink to="/login">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinks>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
