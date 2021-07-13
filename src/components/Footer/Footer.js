import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinkTitle, FooterLinkWrapper, FooterWrapper, SocialMedia,
  SocialMediaIconLinks,
  SocialMediaIcons, SocialMediaLogo, SocialMediaWrapper, WebsiteRights
} from "./styledFooter";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
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
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialMediaLogo to="/">logo</SocialMediaLogo>
            <WebsiteRights> J.Laro © {year} All rights reserved.</WebsiteRights>
            <SocialMediaIcons>
              <SocialMediaIconLinks
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialMediaIconLinks>
              <SocialMediaIconLinks
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialMediaIconLinks>
              <SocialMediaIconLinks
                href="https://www.youtube.com/"
                target="_blank"
                aria-label="YouTube"
              >
                <FaYoutube />
              </SocialMediaIconLinks>
              <SocialMediaIconLinks
                href="https://www.twitter.com/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialMediaIconLinks>
              <SocialMediaIconLinks
                href="https://www.linkedin.com/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialMediaIconLinks>
            </SocialMediaIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
