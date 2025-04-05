// import { Container } from "postcss";

import Branding from "./components/Branding";
import CallToAction from "./components/CallToAction";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Header/>
      <Hero/> 
      <Branding/>
      <Features/>
      <CallToAction/>
      <CallToAction minify/>
    </div>
  );
};

export default App;
