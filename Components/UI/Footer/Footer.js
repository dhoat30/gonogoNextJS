import React from "react";
import Link from "next/link";
import styled from 'styled-components'
function Footer({ allModulesData }) {
  if(!allModulesData){ 
    return
  }
  const modulesSubmenu = allModulesData.map((data) => {
    return (
      <li key={data.id}>
        <Link href={`/modules/${data.slug}`} passHref>
          <a dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
        </Link>
      </li>
    );
  });

  return (
    <Section >
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
          <ul>{modulesSubmenu}</ul>
        </div>
        <div className="links">
          <span className="footer_head_text">Links</span>
          <ul>
            {/* <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Book A Demo</a>
            </li>
            <li>
              <a href="/">Get A Quote</a>
            </li> */}
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
    </Section>
  );
}

export default Footer;
const Section = styled.section`
background: #F6F6F6; 
`