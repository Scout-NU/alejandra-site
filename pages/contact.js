import { getContactPage, getNavigation, getFooter } from '../lib/api';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/Contact';

export default function ContactPage({
  contactPageData,
  navigationData,
  footerData,
}) {
  return (
    <>
      <Navigation navigationData={navigationData} />
      <Contact contactPageData={contactPageData} />
      <Footer footerData={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const contactPageData = await getContactPage();
  const footerData = await getFooter();
  const navigationData = await getNavigation();

  return {
    props: {
      contactPageData,
      footerData,
      navigationData,
    },
  };
}
