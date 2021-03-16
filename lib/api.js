import Prismic from "prismic-javascript";

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
const client = Prismic.client(REF_API_URL);

export async function getHomePage() {
  const { data } = await client.getSingle("home_page");
  return data;
}

export async function getStories() {
  const stories = await client.query(
    Prismic.Predicates.at("document.type", "story")
  );
  return stories.results;
}

export async function getStory(uid) {
  const story = await client.getByUID("story", uid);
  return story.data;
}

export async function getAuthorTestimonies(ids) {
  const authorTestimonies = await client.getByIDs(ids);
  const results = authorTestimonies.results.map((item) => {
    return {
      author_testimony: item.data.author_testimony,
      author_name: item.data.author_name,
      author_info: item.data.author_info,
    };
  });

  return results;
}

