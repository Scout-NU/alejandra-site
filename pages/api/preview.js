import Prismic from 'prismic-javascript';
import { client, REF_API_URL, API_TOKEN } from '../../lib/api';

function linkResolver(doc) {
  if (doc.type === 'story') {
    return `/story/${doc.uid}`;
  } else if (doc.type === 'archive') {
    return `/archive/date/1`;
  } else {
    return `/${doc.uid}`;
  }
}
const Client = (req = null) =>
  Prismic.client(REF_API_URL, createClientOptions(req, API_TOKEN));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
export default async function preview(req, res) {
  const { token: ref, documentId } = req.query;
  const redirectUrl = await Client(req)
    .getPreviewResolver(ref, documentId)
    .resolve(linkResolver, '/');

  if (!redirectUrl) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  res.setPreviewData({ ref });

  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectUrl}" />
    <script>window.location.href = '${redirectUrl}'</script>
    </head>`,
  );
  res.end('Preview mode enabled');
}
