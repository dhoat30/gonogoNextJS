import React, { useContext, useEffect, useState } from "react";
import Header from "./UI/Header/Header";
import { useRouter } from "next/router";

import VideoContext from "../Store/video-context";
import Overlay from "./UI/Overlay/Overlay";
import Footer from "./UI/Footer/Footer";
import LoadingAnimation from "./UI/LoadingAnimation/LoadingAnimation";
import FooterArrow from "./UI/Footer/FooterArrow/FooterArrow";
function Layout(props) {
  // console.log(props.children.props.allModulesData)
  //get video contex for youtube modal
 
console.log(props)
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  let reverseModulesData = []
  if(props.children.props.allModulesData){ 
    reverseModulesData = [...props.children.props.allModulesData].reverse()

  }
  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    <div>
      <Header
        logo={
          props.children.props.contactData &&
          props.children.props.contactData.logo
        }
        allModulesData={reverseModulesData}
        allBlogData={props.children.props.allBlogData}
      />
      <main>{props.children}</main>

     
     
      {loading && (
        <>
          <Overlay />
          <LoadingAnimation />
        </>
      )}
      <FooterArrow/> 
      <Footer    allModulesData={reverseModulesData} contactData={props.children.props.contactData && props.children.props.contactData}/>
    </div>
  );
}

export default Layout;
