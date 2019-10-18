import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Chat = React.lazy(() => import("./components/pages/chat/"));
const About = React.lazy(() => import("./components/pages/about/"));
const Blog = React.lazy(() => import("./components/pages/blog/"));

function Main() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Chat} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </Suspense>
    </>
  );
}

export default Main;
