import { Fragment } from "react";
import Landing from "../components/Landing";
import Features from "../components/Features";
import Productive from "../components/Productive";
import Testimonials from "../components/Testimonials";
import GetStarted from "../components/GetStarted";
function Home() {
  return( 
  <Fragment>
    <Landing />
    <Features />
    <Productive />
    <Testimonials />
    <GetStarted />
  </Fragment>
  );
}

export default Home
