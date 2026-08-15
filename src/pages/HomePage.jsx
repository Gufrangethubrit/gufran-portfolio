/** @format */

import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Skills } from "../components/Skills/Skills";
import { Experience } from "../components/Experience/Experience";
import { Work } from "../components/Work/Work";
import { Education } from "../components/Education/Education";
import { Faq } from "../components/Faq/Faq";
import { Contact } from "../components/Contact/Contact";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Education />
      <Faq />
      <Contact />
    </>
  );
};
