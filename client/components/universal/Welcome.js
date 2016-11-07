import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Welcome extends Component{
  render() {
    return (
      <div className="welcome-wrapper">
        <div id="banner">
          <h1>Quiltio</h1>
          <h2>Connect:Better</h2>
          <p>An incubator like no other.</p>
        </div>
        <div className="container-fluid welcome">
          <div className="callouts-header">
            <h2>Designed for university communities</h2>
          </div>
          <div className="callouts-paragraph">
            <p>Quiltio is founded on the belief that universities create the perfect environment for innovative collaborations to tackle the greatest challenges facing society.  The challenge, however, lies in bridging the gap between the different disciplines’ approaches, resources, and connections both in academia and in the real world.</p>
            <p>Like a quilt, a great company is the combination of multiple pieces; Quiltio stitches those pieces together, provides a sense of direction and security for entrepreneurial minded individuals, and connects the disparate resources and people necessary for a thriving ecosystem.</p>
          </div>
          <div className="callouts">
            <div className="callout">
              <i className="fa fa-icon-asterisk" aria-hidden="true"></i>
              <h3>Collect</h3>
              <p>We identify and collect the stakeholders and resources in the university ecosystem. From curious students to seasoned alumni investors, from simple industry insights  to year-long intensive programs.</p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4  col-lg-4">
              <div className="callout">
                <i className="fa fa-icon-asterisk" aria-hidden="true"></i>
                <h3>Collect</h3>
                <p>We identify and collect the stakeholders and resources in the university ecosystem. From curious students to seasoned alumni investors, from simple industry insights  to year-long intensive programs.</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4  col-lg-4">
              <div className="callout">
                <i className="fa fa-icon-asterisk" aria-hidden="true"></i>
                <h3>Curate</h3>
                <p>We then identify and collect the different user’s needs, and based on those, we present the resources that best match the needs.</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4  col-lg-4">
              <div className="callout">
                <i className="fa fa-icon-asterisk" aria-hidden="true"></i>
                <h3>Connect</h3>
                <p>We then provide opportunities to streamline connections to different resources and individuals on the platform through search features, messaging platform, and shared events attending.</p>
              </div>
            </div>
          </div>
          <div className="pillars">
            <h1>The 5 Pillars of Quiltio</h1>
            <h2>Inspire. Think. Start. Scale. Fund.</h2>
            <p>These are the pillars of key friction points that innovative endeavors face.</p>
            <p>We catalyze these areas to increase the quantity and speed at which endeavors move through these stages.</p>
            <div className="col-xs-12 col-sm-12 col-md-4  col-lg-4">
              <div className="pillar">
                <h3>Inspire to do. Inspire to think bigger. Inspire other.</h3>
                <p>Quiltio inspires to think big by showcasing university research and knowledge of the major issues facing the world, from emerging market needs to climate change, we expand the awareness of the community, especially those with business and engineering minds.  Quiltio also inspires to create the change we want to see in the world, regardless of how seemingly big or small the change is by providing step by step guidance of what events to do, classes to take, people to talk to next.</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4  col-lg-4">
              <div className="pillar">
                <h3>Think about solutions. Think you can. Think like an entrepreneur.</h3>
                <p>Quiltio enables innovative thinking and problem solving on how to take a seemingly hopeless situation or impossibly challenging product to develop and break it down into consumable, achievable steps, to analyze the endeavor from all angles and assess the feasibility.  We direct you to events, classes, clubs, and programs designed to help you think and innovate.</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4  col-lg-4">
              <div className="pillar">
                <h3>Start your own. Start to join. Start to build.</h3>
                <p>Quiltio helps all stakeholders start, join, or mentor those with great ideas begin their endeavors through online introductions, offline events, and on campus resources.</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4  col-lg-4">
              <div className="pillar">
                <h3>Scale your product. Scale your team. Scale your impact.</h3>
                <p>Rapid development and growth has its own unique sets of challenges, and Quiltio understands this.  Not all startups have the same needs.  With our proprietary learning algorithm, we help match the unique needs to the specialized resources on and off campus, from niche programs to alumni experts.</p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4  col-lg-4">
              <div className="pillar">
                <h3>Fund a Quiltio startup. Fund your startup.</h3>
                <p>Quiltio facilitates both startups looking for funds and alumni and investors looking to fund the greatest startups.  Our insights generated help filter those ready for funding from those that still have a bit more work to do before making the ask.</p>
              </div>
            </div>
          </div>
          <div id="signup">
            <h1>Paint the Picture of What You Want the World To Be</h1>
            <p>Share your passion for the change you wish to see.</p>
            <p>Create the solution to the problem you’re passionate about.</p>
            <p>Join a team solving that problem that keeps you up at night.</p>
            <p>Mentor the next generation of innovators.</p>
            <p>Fund the future.</p>
            <Link to={"/signup"}><button className="btn-global">Sign Up</button></Link>
          </div>
        </div>
      </div>
    )
  }
}
