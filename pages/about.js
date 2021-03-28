import { getAboutPage, getNavigation, getFooter, getValues } from "../lib/api";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { H1, H2, H3, P } from "../style/typography";
import { getString } from "../lib/richText";
import Value from "../components/Value";

export default function AboutPage({ aboutPageData, navigationData, footerData, valuesData }) {
  const {
    about_page_title: aboutPageTitle,
    about_page_description: aboutPageDescription, 
    camaryn_image: camarynImage,
    camaryn_title: camarynTitle,
    camaryn_text: camarynText,
    the_alleyway_image: theAlleywayImage,
    the_alleyway_text: theAlleywayText,
    the_alleyway_title: theAlleywayTitle,
    our_mission_title: ourMissionTitle,
    our_mission_description: ourMissionDescription,
    values_title: valuesTitle,
    values_description: valuesDescription,
    camaryns_resources_title: camarynsResourcesTitle, 
    camaryns_resources_description: camarynsResourcesDescription,
    more_resources_title: moreResourcesTitle,
    top_quote: topQuote, 
    bottom_quote: bottomQuote 
  } = aboutPageData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      <H1>{getString(aboutPageTitle)}</H1>
      <P>{getString(aboutPageDescription)}</P>
      <H2>{getString(camarynTitle)}</H2>
      <img src={camarynImage.url} alt={camarynImage.alt} />
      <P>{getString(camarynText)}</P>
      <H3>{getString(camarynsResourcesTitle)}</H3>
      <P>{getString(camarynsResourcesDescription)}</P>
      <H3>{getString(moreResourcesTitle)}</H3>
      <P>{getString(topQuote)}</P>
      <H2>{getString(theAlleywayTitle)}</H2>
      <img src={theAlleywayImage.url} alt={theAlleywayImage.alt} />
      <P>{getString(theAlleywayText)}</P>
      <H3>{getString(ourMissionTitle)}</H3>
      <P>{getString(ourMissionDescription)}</P>
      <H2>{getString(valuesTitle)}</H2>
      <H3>{getString(valuesDescription)}</H3>
      {
        valuesData.map((v) => (
            <Value key={v.id} valueData={v.data}/>
        ))
      }
      <P>{getString(bottomQuote)}</P>
      <Footer footerData={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const aboutPageData = await getAboutPage();
  console.log(aboutPageData)
  const footerData = await getFooter();
  const navigationData = await getNavigation();
  const valuesData = await getValues();

  return {
    props: {
      aboutPageData,
      footerData,
      navigationData,
      valuesData
    },
  };
}
