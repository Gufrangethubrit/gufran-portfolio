import { Services } from "../components/Services/Services";
import { Faq } from "../components/Faq/Faq";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";

export const ServicesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Services" />
      <Services />
      <Faq />
    </>
  );
};
