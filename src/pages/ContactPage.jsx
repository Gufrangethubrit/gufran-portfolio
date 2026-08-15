import { Contact } from "../components/Contact/Contact";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";

export const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Me" />
      <Contact />
    </>
  );
};
