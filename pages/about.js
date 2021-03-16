import { renderRichText } from "../lib/richText";
import { getAboutPage } from "../lib/api";

export default function AboutPage({ aboutPageData }) {
  const {
    about_page_title: aboutPageTitle,
    camaryn_image: camarynImage,
    camaryn_title: camarynTitle,
    camaryn_text: camarynText,
    the_alleyway_image: theAlleywayImage,
    the_alleyway_text: theAlleywayText,
    the_alleyway_title: theAlleywayTitle,
  } = aboutPageData;
  return (
    <>
      {renderRichText(aboutPageTitle)}
      {renderRichText(theAlleywayTitle)}
      <img src={theAlleywayImage.url} alt={theAlleywayImage.alt} />
      {renderRichText(theAlleywayText)}
      {renderRichText(camarynTitle)}
      <img src={camarynImage.url} alt={camarynImage.alt} />
      {renderRichText(camarynText)}
    </>
  );
}

export async function getStaticProps() {
  const aboutPageData = await getAboutPage();

  return {
    props: {
      aboutPageData,
    },
  };
}
