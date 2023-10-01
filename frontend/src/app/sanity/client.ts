import { SanityClient, createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
const client: SanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID, //put your project id here
  dataset: 'production',
  apiVersion: "2023-06-18",
  useCdn: false //up to date data-->false
});
const builder: ImageUrlBuilder = imageUrlBuilder(client)
export function urlFor(source: SanityImageSource): ImageUrlBuilder {
  return builder.image(source)
}
export default client;
