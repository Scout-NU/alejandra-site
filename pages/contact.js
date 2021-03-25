import { getContactPage, getNavigation, getFooter, getBoxLink } from "../lib/api";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { H1, P } from "../style/typography";
import { getString } from "../lib/richText";
import BoxLink from "../components/BoxLink";

export default function ContactPage({ contactPageData, navigationData, footerData, boxLink1Data }) {
  const {
    contact_page_title: contactPageTitle,
    contact_page_description: contactPageDescription,
  } = contactPageData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      <H1>{getString(contactPageTitle)}</H1>
      <P>{getString(contactPageDescription)}</P>
      <BoxLink boxLinkData={boxLink1Data} />
      <Footer footerData={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const contactPageData = await getContactPage();
  const footerData = await getFooter();
  const navigationData = await getNavigation();
  const boxLink1Data = await getBoxLink(contactPageData.box_link_1.id);

  return {
    props: {
      contactPageData,
      footerData,
      navigationData,
      boxLink1Data
    },
  };
}
