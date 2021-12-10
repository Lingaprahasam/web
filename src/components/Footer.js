import React from "react";
import { Row } from "react-bootstrap";
import FooterContent from "./FooterContent";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <>
      <Row>
        {/* Right */}
        <SocialMedia />
      </Row>

      <Row>
        <FooterContent />
      </Row>
    </>
  );
};
export default Footer;
