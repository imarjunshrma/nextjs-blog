import client from "@/app/sanity/client";
import { PortableText } from "@portabletext/react";
const BlogContent = async (context) => {
  const id = context.params.id;
  console.log(id);
  const res = await client.fetch(
    `*[_type == "blogs" && slug.current=="${id}" ]{blogeDscription}`
  );
  console.log(res);
  return <PortableText value={res[0].blogeDscription} />;
};

export default BlogContent;
