import React from "react";
import Link from "next/link";
import styled from "styled-components";
import FooterLinkColumn from "./FooterLinkColumns/FooterLinkColumn";
import linksData from "./linksData";
import SubscriberForm from "../Forms/SubscriberForm";
import Image from 'next/image'
function Footer({ allModulesData, contactData }) {
  console.log(contactData)
  if ( contactData.social_media.length < 1 || !allModulesData) {
    return;
  }

  const modulesLinks = allModulesData.map((data) => {
    return (
      <FooterLinkColumn
        key={data.id}
        slug={`/modules/${data.slug}`}
        title={data.title.rendered}
      />
    );
  });

  // extra links
  const extraLinks = linksData.links.map((data, index) => {
    return <FooterLinkColumn key={index} slug={data.slug} title={data.title} />;
  });

  // extra links
  const legalLinks = linksData.legal.map((data, index) => {
    return <FooterLinkColumn key={index} slug={data.slug} title={data.title} />;
  });

  // social media 
  const socialMedia = contactData.social_media.map((data, index)=> { 
    return(
      <a href={data.social_media_link}  key={index} target="_blank" rel="noreferrer">
        <Image src={data.social_media_icon.url}
        alt="social media icon"
        width="35px"
        height="35px"
        layout="fixed"
        /> 
      </a>
    )

  })

  return (
    <FooterStyle>
      <div className="site-footer max-width">
        <div className="newsletter">
          <h6 className="footer_head_text">Subscribe to our newsletter</h6>
          <SubscriberForm
            emailRouteUrl={`${process.env.url}/wp-json/webduel/v1/subscription-form`}
            formName="Subscription Form"
            emailTo="designer@webduel.co.nz"
            cta="Subscribe"
          />
          <div className="follow-us">
            <h6 className="footer_head_text">Follow Us</h6>
            <div className="icons">
              {socialMedia}
            </div>
          </div>
        </div>
        <div className="solutions">
          <h6 className="footer_head_text">Solutions</h6>
          <ul>{modulesLinks}</ul>
        </div>
        <div className="links">
          <h6 className="footer_head_text">Links</h6>
          <ul>{extraLinks}</ul>
        </div>
        <div className="legal">
          <h6 className="footer_head_text">Legal</h6>
          <ul>{legalLinks}</ul>
        </div>
      </div>

      <div className="copyright">
        <div className="copyright-text">
          <p>Copyright © 2022 GonoGo | Build By WebDuel</p>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
const FooterStyle = styled.footer`
  background: #f6f6f6;
`;
