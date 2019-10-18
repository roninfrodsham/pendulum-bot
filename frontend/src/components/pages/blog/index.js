import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

const Container = styled.div`
  max-width: 800px;
  padding: 0 10px;
`;

function About() {
  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pendulum AI - Chatbot and AI knowledge base</title>
        <link rel="canonical" href="" />
      </Helmet>
      <Header />
      <h1>What is a Chatbot?</h1>
      <p>
        If you look up the definition of the word ‘chatbot’, you get the below
        description:
      </p>
      <p>
        <strong>
          chatbot
          <br />
          ˈtʃatbɒt/
        </strong>
        <br />
        <i>noun</i>
      </p>
      <p>
        <strong>
          "a computer program designed to simulate conversation with human
          users, especially over the Internet"
        </strong>
      </p>
      <p>
        That definition alone is vague and can cover many types of computer
        programmes that sparsely converse with the end user. You could argue
        that some of the old text-based games such as Adventure or Zork are
        chatbots. These programmes have a type of conversation with the end
        user, but in a closed capacity - so can they really be considered
        ‘chatbots’?
      </p>
      <p>
        These Interactive Fiction applications have been around since the 60's
        where 'ELIZA' paved the way for human-computer interaction and
        kick-started machine learning and artificial intelligence beyond the
        work completed by Alan Turing in the 50's. Since Turing published his
        famous article "Computing Machinery and Intelligence", computing power,
        understanding and cost has significantly changed into the landscape we
        have today. This has opened the door to the rise of the modern chatbot.
      </p>
      <h2>Chatbots today</h2>
      <p>
        In simple terms, a Chatbot is really no more than an i/o interface
        (text/speech), and an application that processes that information. The
        application part is where all the magic happens; it’s the brain.
        Examples include Dialogflow, Microsoft LUIS, Wit.ai and IBM Cloud
        (Watson). These all use machine learning and NLP to power their systems,
        which give developers instant access to cutting edge technology without
        doing the heavy lifting.
      </p>
      <p>
        There is a 3rd part to the way chatbots work, and that is a connection
        to an existing system or 'business logic' - imagine if you could talk to
        Siri, but she couldn’t perform any of that actions you want her to?
        Imagine trying to book a flight with a travel agent and you can’t?
        Chatbots need to be able to carry out the actions they are designed to
        do.
      </p>
      <h2>Why did they become popular?</h2>
      <p>
        A quick search of Google Trends for the term "chatbot", you'll see a
        notable moment in the March/April of 2016. This is when Facebook
        launched a Bot platform through Facebook Messenger that included an API
        for developers, marketers and entrepreneurs to use for their own needs.
      </p>

      <p>
        When Facebook launched this platform, it connected the millions of users
        from across the world into one place. Suddenly the thought of developing
        and executing a chatbot wasn’t just limited to those custom widgets you
        see on websites, or custom integrations costing thousands to develop. It
        was a simple solution to a common problem: accessibility.
      </p>
      <h2>What they look like</h2>
      <p>
        The integrations available today are vast, and don’t just stop at
        Facebook. Twitter, Slack, Viber, Skype, Kik, Alexa, Google Home etc. are
        all interfaces and are direct access points to customers or potential
        customers. People are using these platforms daily, so there’s no need to
        create a new space for them to converse with your brand.
      </p>
      <p>
        Chatbots have different places to live, the execution of them is still
        really in its infancy, and you can argue that some 'chatbots' are not
        chatbots at all. Without going into too much detail (we’ll cover this in
        a future post), there a several different types of 'chatbot' out there;
        'utility', '3rd space', 'conditional logic' or 'assistant' chatbots. The
        lines sometime blur between each, but some consider an auto-responder on
        Twitter to be a ‘chatbot’, which broadens the spectrum even further.
      </p>
      <p>
        As the earlier definition suggests, a Chatbot uses conversation to
        interact with the user. Fancy decision trees or 'flows' are barely
        conversational; the bot tells you some information, gives you a couple
        of choices to respond with, and you move further down the flow, until
        (hopefully) you reach the end and achieve what you wanted. In this case,
        there’s no real conversation going on. Of all the chatbots on the
        market, this type of bot is the most popular as flows can be defined and
        programmed to the Nth degree. There are pros and cons to this, but most
        decision makers and developers find this as the 'go-to' execution.
      </p>
      <h2>Future of chatbots</h2>
      <p>
        If the input (conversation) is poor or doesn't make clear sense, the
        chatbot will fall over. Humans are very good at picking up mistakes,
        filling in the gaps and making assumptions of what people really mean
        when they talk/text. Through the use of Machine Learning, chatbot
        services will be able to start to fill in those gaps more efficiently
        and correctly. This is where developments in Artificial Intelligence and
        Machine Learning will add the most value.
      </p>
      <p>
        Even though chatbots are still finding their feet, it only takes a
        single, well executed and popular bot to take it to the mainstream. I
        think
      </p>
      <Footer />
    </Container>
  );
}

export default About;
