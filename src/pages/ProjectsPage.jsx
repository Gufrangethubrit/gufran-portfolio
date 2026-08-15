import { Work } from "../components/Work/Work";
import { Faq } from "../components/Faq/Faq";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";

export const ProjectsPage = () => {
  return (
    <>
      <Breadcrumb pageName="Projects" />
      <Work />
      <Faq />
    </>
  );
};
