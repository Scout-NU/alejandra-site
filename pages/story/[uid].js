import {
  getAuthorInfo,
  getStories,
  getStory,
  getNavigation,
  getFooter,
} from '../../lib/api';
import { renderRichText } from '../../lib/richText';
import SliceZone from '../../components/storySlices/sliceZone/SliceZone';
import AuthorInfo from '../../components/authorInfo/AuthorInfo';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import { H1 } from '../../style/typography';
import { getString } from '../../lib/richText';

export default function Story({
  storyData,
  authorInfo,
  navigationData,
  footerData,
}) {
  const { story_title: storyTitle, story_date: storyDate, body } = storyData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      <article>
        <H1>{getString(storyTitle)}</H1>
        <AuthorInfo authorInfo={authorInfo} />
        <SliceZone sliceZone={body} />
      </article>
      <Footer footerData={footerData} />
    </>
  );
}

export async function getStaticPaths() {
  const stories = await getStories();
  const paths = stories.map((story) => ({
    params: {
      uid: story.uid,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const storyData = await getStory(params.uid);
  const authorInfo = await getAuthorInfo(storyData.author_info.id);
  const footerData = await getFooter();
  const navigationData = await getNavigation();

  return {
    props: {
      storyData,
      authorInfo,
      footerData,
      navigationData,
    },
  };
}
