import { renderRichText } from "../lib/richText";
import {
  getAuthorTestimonies,
  getFrequentlyAnsweredQuestions,
  getStoryInquiryPage,
  getNavigation,
  getFooter,
  getBoxLink,
} from "../lib/api";
import AuthorTestimony from "../components/AuthorTestimony";
import QuestionAnswer from "../components/QuestionAnswer";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BoxLink from "../components/BoxLink";

export default function StoryInquiryPage({
  storyInquiryPageData,
  authorTestimonies,
  questionsAndAnswers,
  navigationData,
  footerData,
  boxLink1Data,
  boxLink2Data,
}) {
  const {
    story_submission_title: storySubmissionTitle,
    story_submission_description: storySubmissionDescription,
    submission_guidelines_subtitle: submissionGuidelinesSubtitle,
    submission_guidelines_description: submissionGuidelinesDescription,
    faq_title: faqTitle,
    author_testimony_title: authorTestimonyTitle,
    donation_resources_subtitle: donationResourcesSubtitle,
  } = storyInquiryPageData;

  return (
    <>
      <Navigation navigationData={navigationData} />
      {renderRichText(storySubmissionTitle)}
      {renderRichText(storySubmissionDescription)}
      {renderRichText(submissionGuidelinesSubtitle)}
      {renderRichText(submissionGuidelinesDescription)}
      {renderRichText(donationResourcesSubtitle)}
      {renderRichText(authorTestimonyTitle)}
      {authorTestimonies.map((item) => {
        return <AuthorTestimony key={item.author_info.id} authorTestimonyData={item} />;
      })}
      {renderRichText(faqTitle)}
      {questionsAndAnswers.map((item) => {
        return <QuestionAnswer key={item.id} questionAnswerData={item} />;
      })}
      <BoxLink boxLinkData={boxLink1Data} />
      <BoxLink boxLinkData={boxLink2Data} />
      <Footer footerData={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const storyInquiryPageData = await getStoryInquiryPage();
  const authorTestimoniesIds = storyInquiryPageData.author_testimonies.map((item) => {
    return item.author_testimony.id;
  });
  const authorTestimonies = await getAuthorTestimonies(authorTestimoniesIds);

  const faqsIds = storyInquiryPageData.questions_and_answers.map((item) => {
    return item.question_and_answer.id;
  });
  const questionsAndAnswers = await getFrequentlyAnsweredQuestions(faqsIds);

  const footerData = await getFooter();
  const navigationData = await getNavigation();
  const boxLink1Data = await getBoxLink(storyInquiryPageData.box_link_1.id);
  const boxLink2Data = await getBoxLink(storyInquiryPageData.box_link_2.id);

  return {
    props: {
      storyInquiryPageData,
      authorTestimonies,
      questionsAndAnswers,
      footerData,
      navigationData,
      boxLink1Data,
      boxLink2Data
    },
  };
}
