import React from "react";
import styled from "styled-components";
import Image from "next/image";
function BlogPage({ blogData }) {
  console.log(blogData);
  return (
    <>
    <Main>
      <section className="blog-hero max-width">
        <div className="blog-text-section">
          <div className="blog-hero-text">
            <h1>{blogData.title.rendered}</h1>
            <p className="author">Writen by Craig Anderson</p>
            <div  dangerouslySetInnerHTML={{ __html: blogData.excerpt.rendered }}/>
          </div>
        </div>
        <ImageContainer>
         <Image 
         src={blogData.acf.hero_image.url}
         layout="fill"
         alt={blogData.title.rendered}
         objectFit="cover"
         />
        </ImageContainer>
      </section>

    </Main>
          <MainContent  dangerouslySetInnerHTML={{ __html: blogData.content.rendered }} />
          </>
  );
}

export default BlogPage;
const Main = styled.main`
background: var(--lightBlue);
.blog-hero {
    display: flex;
    height: 60vh;
    align-items: center; 
    justify-content: space-between;
    gap: 0 30px; 
    .blog-text-section{ 
        .author{ 
            font-size: 0.8rem; 
            margin-bottom: 10px; 
        }
        width: 50%; 
        h1{ 
            color:var(--blue);
            font-size: 2.5rem; 
            line-height: 3.5rem;
        }
    }
   
  }
`
const ImageContainer = styled.div`
position: relative; 
width:50%;
height: 100%; 

`
const MainContent=styled.section`
max-width: 900px; 
margin: 0 auto;
padding: 0 10px; 
  margin-top: 100px; 
  h2 {
    font-weight: 700;
    @media(max-width: 800px){ 
        font-size: 1.5rem; 
    }
  }
  p{ 
        margin-top: 10px; 
  }
  ul{ 
    margin-top: 5px; 
    margin-left: 30px; 
    li{ 
        color: var(--blue);
        padding: 0 0 15px 0;
        font-weight: 600;
    }
  }
  ol{ 
    margin-top: 15px; 
    margin-left: 30px; 
    li{ 
        color: var(--blue);
        padding: 0 0 15px 0;
        font-weight: 600;
    }
  }
  .wp-block-group{ 
    background-color: #F4F7FE;
    padding: 40px;
    margin-top: 50px;
    color: #053152;
    @media(max-width: 800px){ 
        padding: 10px; 
    }
    .wp-block-columns{ 
        background: white; 
        padding: 30px 20px;
        display: flex; 
        align-items: center;
        figure{ 
            margin-right: 20px;
            position: relative; 
            top: 10px; 
            @media(max-width: 800px){ 
                display: none; 
            }
        }
    }
   
  }
  h3{ 
    font-size: 1.5rem; 
    margin-top: 30px; 
    margin-bottom: -10px;
}
h4{ 
    margin-top: 20px; 
}
`