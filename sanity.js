import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = await sanityClient({
  projectId: "t57bgjnz",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

export const urlFor = (source) => imageUrlBuilder(client).image(source);
export default client;
