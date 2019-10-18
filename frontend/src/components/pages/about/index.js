import React from "react";
import styled from "styled-components";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

const Container = styled.div`
  max-width: 800px;
  padding: 0 10px;
`;

function About() {
  return (
    <>
      <Container>
        <Header />
        <h1>About</h1>
        <p>
          We specialise in chatbots, automated services and digital assistants,
          for B2C and B2B markets. As the numbers above demonstrate, chatbots
          and automation is becoming increasingly more powerful, useful and cost
          effective.
        </p>
        <h2>Direct to consumer</h2>
        <p>
          Using our tailored insights and delivery, you can easily connect with
          your customers to achieve one, or multiple objectives:
        </p>
        <ul>
          <li>Generate pre-qualified leads</li>
          <li>Provide 24/7 customer support</li>
        </ul>
        <h2>Business &amp; management</h2>
        <p>
          Bots can be used to automate repatative tasks, answer FAQs and
          increase productivity at work. A few examples include:
        </p>
        <ul>
          <li>
            HR and Administration such as holiday booking, timesheets &amp;
            lunch orders
          </li>
          <li>Employee onboarding and new starter assistance</li>
          <li>Engagement surveys and questionnaires</li>
          <li>CRM integration, expenses and appraisals</li>
        </ul>
        <h2>Agencies</h2>
        <p>
          We also provide a white-lable service for agencies that have a great
          idea but aren't sure how to execute it. We've developed chatbots,
          digital assistants and automated services across the globe including
          congresses, high profile public events and cycle meetings.
        </p>
        <Footer />
      </Container>
    </>
  );
}

export default About;
