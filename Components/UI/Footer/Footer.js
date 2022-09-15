import React from "react";
import Link from "next/link";
import styled from 'styled-components'
import FooterLinkColumn from "./FooterLinkColumns/FooterLinkColumn";
import linksData from "./linksData";
function Footer({ allModulesData }) {

  if(!allModulesData){ 
    return
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
  const extraLinks = linksData[0].links.map((data, index)=> {
   
    return (
      <FooterLinkColumn 
      key={index}
      slug={data.slug}
      title={data.title}
      /> 
    );
  })

  return (
    <FooterStyle >
      <div className="site-footer max-width">
        <div className="newsletter">
          <span className="footer_head_text">Subscribe to our newsletter</span>
          <form action="" className="subscription-area">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <button type="submit" className="primary-btn">
              Subscribe
            </button>
          </form>
          <div className="follow-us">
            <span className="footer_head_text">Follow Us</span>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="solutions">
          <span className="footer_head_text">Solutions</span>
          <ul>{modulesLinks}</ul>
        </div>
        <div className="links">
          <span className="footer_head_text">Links</span>
          <ul>
            {extraLinks}
          </ul>
        </div>
        <div className="legal">
          <span className="footer_head_text">Legal</span>
          
        </div>
      </div>

      <div className="copyright">
        <div className="copyright-text">
          <p>Copyright © 2022 GonoGo | Build By Webduel</p>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
const FooterStyle = styled.footer`
background: #F6F6F6; 
`