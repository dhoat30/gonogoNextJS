import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

function SEO({ seo }) {
    const router = useRouter()

    return (
        <Head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-35JTPJVTX9"></script>
<script dangerouslySetInnerHTML ={{__html:`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-35JTPJVTX9');`}}/>
            <title>{seo.title}</title>
            <meta name="description"
                content={seo.description}>
            </meta>

            {/* open graph meta */}
            <meta property="og:title" content={`${seo.title}`} key="ogtitle" />
            <meta property="og:description" content={ seo.description}
                key="ogdesc" />
            <meta property="og:url" content={`https://gonogosafety.com${router.asPath}`} key="ogurl" />
            <meta property="og:image" content={seo.imageSrc} key="ogimage" />
            <meta property="og:site_name" content={"Be Inspired"} key="ogsitename" />


        </Head>
    )
}

export default SEO
