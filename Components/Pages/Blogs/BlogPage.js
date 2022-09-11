import React from 'react'

function BlogPage() {
  return (
  <div>
<section className="blog-hero">
    <div className="blog-text-section">
       <div className="blog-hero-text">
           <h1>Why do we need Safety Management System?</h1>
           <p className="author">Writen by Craig Anderson</p>
           <p>Discover how Safety Managment System can help workplace health and safety.</p>
       </div>
    </div>
    <div className="blog-hero-img">
        <img src="<?php echo get_theme_file_uri('/images/blog-hero-img.png'); ?>" alt=""/>
    </div>
</section>

<main>
    <div className="blog-content-wrapper">

       
       <section className="blog-first-section">
           <h2>SMS Reporting and The Fishermans “Magic Sunnies”</h2>
           <p>For those that know anything about trout fishing, a critical piece of equipment for the fisherman are the polarized sunglasses.  To have any chance of success, a trout fisherman needs to spot the fish before the fish spots him (or her), and without the polarizing action of the glasses, he will be peering into the river in vain and will only see the reflecting surface of the water.  There may or may not be any trout present in the river, however the fisherman will never know until he puts on his magic sunnies.</p>
           <p>In this article, we're going to discuss:</p>
           <ul>
               <li><a href="/">&#9679; What is a Safety Management Software?</a></li>
               <li><a href="/">&#9679; How does it work?</a></li>
               <li><a href="/">&#9679; Two key features to maximize reporting?</a></li>
           </ul>
       </section>

       
       <section className="blog-second-section">
           <div className="heading">
              <img src="<?php echo get_theme_file_uri('/images/logo.png'); ?>" alt="">
              <h2>What is a Safety Management Software?</h2>
           </div>
           <p>Safety Management software enables companies to improve workplace health and safety by identifying and managing safety risks, tracking nonconformances, assigning corrective and preventive actions, providing the tools for employee training and injury recordkeeping.</p>
       </section>

       
       <section className="blog-third-section">
           <div className="heading">
              <img src="<?php echo get_theme_file_uri('/images/logo.png'); ?>" alt=""/>
              <h2>How does it work?</h2>
           </div>
           <ul>
              <li><a href="/">1. Shit Happens</a></li>
              <li><a href="/">2. Reporting is a good thing</a></li>
           </ul>
       </section>


       <section className="shit-happens">
          <ul>
             <li>
                <a href="/"><h3>1. Shit Happens</h3></a>
                <p>The first thing that management staff and business owners need to accept is a deep and fundamental principle in life, that “shit happens”.  No matter how good your systems are, or how well trained your staff are, shit still happens, all the time – at least as long as people are involved.</p>
            </li>
             <li>
                <a href="/"><h3>2. Reporting is a Good Thing</h3></a>
                <p>Secondly, its important to get your head around the fact that reporting of issues and incidents is actually a healthy function (i.e. the more reports the better).  So often in the past it has been seen (at least wherever I have worked) to be a negative thing – you only put in an incident report when you really stuffed up!
                   Given our two principles above that shit happens, and reporting is a good thing, it follows that the reporting system in our business can be a fantastic way to tell management all the stuff that is going on at the grass roots level.
                   To me, the crux of an effective SMS System is how it assists and encourages reporting from staff and/or other people in the business.  It is usually those people who really know what is going on – not management, so when you have a system that allows and encourages free reporting, you now have a system that works just like the fishermans magic sunnies – you have visibility through the surface layer into the depths of the river.  And with visibility, you now have the ability to do something about all those issues that are happening out there all of the time.</p>
            </li>
          </ul>
          <h4>If I had to pick two key features of an SMS System to maximise reporting, what would they be?</h4>
       </section>

       
       <section className="blog-fifth-section">
           <div className="heading">
              <img src="<?php echo get_theme_file_uri('/images/logo.png'); ?>" alt=""/>
              <h2>Two key features to maximize reporting</h2>
           </div>
           <ul>
              <li><a href="/">1. Simplicity of Reporting</a></li>
              <li><a href="/">2. Management Buy-In</a></li>
           </ul>
       </section>


       <section className="simple-reporting">
          <ul>
             <li>
                <a href="/"><h3>1. Simplicity of Reporting</h3></a>
                <p>I have found this is critical.  Companies I have been involved with over the years have often had reporting systems that are so difficult to use that they effectively discourage staff to report.  Having to find a form, print it off, fill in multiple fields, rate the various risk levels, send it to some manager somewhere etc etc is not a fun thing to do for anyone.  So it tends not to get done at all.  In contrast, if we make it incredibly simple to report, it gets done.  And to be simple these days, it has to be online and easily accessible from any computer or phone.  Also the questions asked need to be minimal.  I like to only ask one question: “What Happened?”.  The concept is lets get the report in, and we can get more details later if required.</p>
            </li>
             <li>
                <a href="/"><h3>2. Management Buy-In</h3></a>
                <p>Simply put, management need to accept that staff  make mistakes intentionally, therefore staff should not be judged or punished when they admit to making mistakes, and reporting of issues and incidents should be actively encouraged.  The reality is that many (if not most) mistakes are made due to systems or procedural flaws that can be improved with the knowledge gained from the issue or incident report.
                   A good SMS Software package can really assist with getting your reporting system humming.  It can make reporting simple to do, and just as importantly it can make getting the information out at the other end effortless.  This doesnt mean you need a complicated system though …. for most of us we never use 90% of the features of many computer systems.  Something that covers the basic SMS requirements is pretty much all that many businesses need – reporting, managing hazards, business changes/projects, and generating reports/graphs of the information submitted.
                   When you get these critical factors right, you will see your reporting levels soar.  With soaring reporting, those magic sunnies really start doing their job.  Visibility becomes clear, and with clear visibility, you can now deal with stuff that has always been happening – you just probably werent aware of it before.</p>
            </li>
          </ul>
       </section>


       <div className="book-demo-btn">
          <a href="/" className="primary-btn">book a demo</a>
       </div>

    </div>
</main>
</div>
  )
}

export default BlogPage