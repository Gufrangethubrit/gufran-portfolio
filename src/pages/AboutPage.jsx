import { About } from "../components/About/About";
import { Faq } from "../components/Faq/Faq";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";

export const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="About Me" />
      <About />
      <Faq />
    </>
  );
};
