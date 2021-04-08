import {
  getContactPage,
  getNavigation,
  getFooter,
  getBoxLink,
} from '../lib/api';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/Contact';

export default function ContactPage({
  contactPageData,
  navigationData,
  footerData,
  boxLink1Data,
}) {
  return (
    <>
      {/* <Navigation navigationData={navigationData} /> */}
      <Contact contactPageData={contactPageData} boxLinkData={boxLink1Data} />
      {/* <Footer footerData={footerData} /> */}
    </>
  );
}

export async function getStaticProps() {
  const contactPageData = await getContactPage();
  const boxLink1Data = await getBoxLink(contactPageData.box_link_1.id);
  const footerData = await getFooter();
  const navigationData = await getNavigation();
  return {
    props: {
      contactPageData,
      footerData,
      navigationData,
      boxLink1Data,
    },
  };
}
