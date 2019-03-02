import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Features = () => {
  return (
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          What is night night?
        </h2>
        <p className="lead grey-text w-responsive mx-auto mb-5">
          Night Night is a simple program that allows you to put your website to sleep at bedtime, encouraging your users to go to bed, better supporting their health, wellbeing, and happiness.
        </p>
        <MDBRow>
          <MDBCol md="4">
            <MDBIcon far icon="question-circle" size="3x" className="blue-text" />
            <h5 className="font-weight-bold my-4">Why should I put my website to sleep?</h5>
            <p className="grey-text mb-md-0 mb-5">
            As technology creators we tend to build websites that delight, engage, inform, and optimize for profit. Unfortunately, sometimes the “success” of the experience can also hurt the people that use these websites, and negatively impact other aspects of their lives, like their finances, relationships, and health.
            </p>
            <p className="grey-text mb-md-0 mb-5">One of these negative impacts of websites is when their use gets in the way of people’s sleep. Sleep debt is a major problem in the western world, and has a lot of negative global health impacts. Helping others get enough sleep is one of the best things you can do to improve their quality of life!</p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="hands-helping" size="3x" className="cyan-text" />
            <h5 className="font-weight-bold my-4">Benefits</h5>
            <p className="grey-text mb-md-0 mb-5">
            By putting your website to sleep at bedtime with night night you can do your part to improve the lives of people that use your website. And by taking universal responsibility for the impact of your website on others, you are taking a small step to improve the world we live in.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <MDBIcon icon="code" size="3x" className="red-text" />
            <h5 className="font-weight-bold my-4">How night night works</h5>
            <p className="grey-text mb-md-0 mb-5">
            night night allows your website to run normally throughout the day. Then, looking at the time on your website visitors computer, it will put the website to sleep at bedtime. The sleep page will also let users continue on to the site if they have something they just can’t wait for. Because night night takes into account the individuals user time, the site will work anywhere in the world and in any time zone.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default Features;