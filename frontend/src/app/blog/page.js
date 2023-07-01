import Link from "next/link";
import client from "../sanity/client";

const BlogCards = ({ title, description, slug, date }) => {
  return (
    <div
      className="py-8 flex flex-wrap md:flex-nowrap bg-white shadow-sm w-[80%] px-8 my-5"
      bis_skin_checked={1}
    >
      <div
        className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"
        bis_skin_checked={1}
      >
        <span className="font-semibold title-font text-gray-700">Next.js</span>
        <span className="mt-1 text-gray-500 text-sm">{date}</span>
      </div>
      <div className="md:flex-grow" bis_skin_checked={1}>
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed">{description}</p>
        <Link
          className="text-indigo-500 inline-flex items-center mt-4"
          href={"blog/" + slug}
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const Blog = async () => {
  const res = await client.fetch(`*[_type == "blogs"] `);
  // console.log(res);
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-[#f3f4f6]">
      <div className="container px-5 py-24 mx-auto" bis_skin_checked={1}>
        <div className="-my-8 divide-y-2 divide-gray-100" bis_skin_checked={1}>
          {res.map((val) => {
            return (
              <BlogCards
                title={val.title}
                description={val.description}
                slug={val.slug.current}
                date={val._createdAt}
              />
            );
          })}
          {/*          
          <BlogCards />
          <BlogCards /> */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
