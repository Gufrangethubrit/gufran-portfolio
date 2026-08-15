import { Experience } from "../components/Experience/Experience";
import { Faq } from "../components/Faq/Faq";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";

export const ExperiencePage = () => {
  return (
    <>
      <Breadcrumb pageName="Experience" />
      <Experience />
      <Faq />
    </>
  );
};
