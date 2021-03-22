import { renderRichText } from "../lib/richText";
import { getAboutPage, getNavigation, getFooter, getBoxLink } from "../lib/api";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BoxLink from "../components/BoxLink";

export default function AboutPage({ aboutPageData, navigationData, footerData, boxLink1Data }) {
  const {
    about_page_title: aboutPageTitle,
    camaryn_image: camarynImage,
    camaryn_title: camarynTitle,
    camaryn_text: camarynText,
    the_alleyway_image: theAlleywayImage,
    the_alleyway_text: theAlleywayText,
    the_alleyway_title: theAlleywayTitle,
    values_title: valuesTitle,
    values_description: valuesDescription,
    values,
  } = aboutPageData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      {renderRichText(aboutPageTitle)}
      {renderRichText(theAlleywayTitle)}
      <img src={theAlleywayImage.url} alt={theAlleywayImage.alt} />
      {renderRichText(theAlleywayText)}
      {renderRichText(camarynTitle)}
      <img src={camarynImage.url} alt={camarynImage.alt} />
      {renderRichText(camarynText)}
      {renderRichText(valuesTitle)}
      {renderRichText(valuesDescription)}
      {values.map((v) => (
        <a>
          {v.value[0].text}
          <br />
        </a>
      ))}
      <BoxLink boxLinkData={boxLink1Data} />
      <Footer footerData={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const aboutPageData = await getAboutPage();
  const footerData = await getFooter();
  const navigationData = await getNavigation();
  const boxLink1Data = await getBoxLink(aboutPageData.box_link_1.id);

  return {
    props: {
      aboutPageData,
      footerData,
      navigationData,
      boxLink1Data,
    },
  };
}
