import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Retrieve the list of blog posts from Contentful
const getBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: 'clumsiesTryingStuff',
  });

  return response.items;
};

// Retrieve the list of blog posts from Contentful
const getProduct = async (id: string) => {
  const response = await client.getEntry('LBSiYZM6XdFbQTyz0kRwn');

  return response;
};

export { getBlogPosts, getProduct };
