import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
const client = createClient({
  projectId: "", //put your project id here--
  dataset: "production",
  apiVersion: "2023-06-28",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default client;
