import { getAboutPage, getNavigation, getFooter, getValues, getBoxLink } from "../lib/api";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { H1, H2, H3, P } from "../style/typography";
import { getString } from "../lib/richText";
import Value from "../components/Value";
import BoxLink from "../components/BoxLink";

export default function AboutPage({ aboutPageData, navigationData, footerData, valuesData, boxLink1Data }) {
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
  } = aboutPageData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      <H1>{getString(aboutPageTitle)}</H1>
      <H2>{getString(theAlleywayTitle)}</H2>
      <img src={theAlleywayImage.url} alt={theAlleywayImage.alt} />
      <P>{getString(theAlleywayText)}</P>
      <H2>{getString(camarynTitle)}</H2>
      <img src={camarynImage.url} alt={camarynImage.alt} />
      <P>{getString(camarynText)}</P>
      <H2>{getString(valuesTitle)}</H2>
      <H3>{getString(valuesDescription)}</H3>
{
        valuesData.map((v) => (
            <Value key={v.id} valueData={v.data}/>
        ))
      }
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
  const valuesData = await getValues();

  return {
    props: {
      aboutPageData,
      footerData,
      navigationData,
      boxLink1Data,
      valuesData
    },
  };
}
