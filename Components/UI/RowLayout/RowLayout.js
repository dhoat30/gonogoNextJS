import React from 'react'

function RowLayout({title, content, images}) {
    console.log(images)
  return (
    
<section className="issues-first-section">
   <div className="row-container">
      <div className="issues-first-section-text">
       <h3>{title}</h3>
       <div dangerouslySetInnerHTML={{ __html: content }}/>
      </div>
      <div className="issues-first-section-img">
       <img src="<?php echo get_theme_file_uri('images/interconnected-diagram.svg'); ?>" alt="" />
      </div>
   </div>
</section>
  )
}

export default RowLayout