import Link from "next/link";
// import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchTutorials } from "../sanity/api";
interface Props {
  description: string,
  title: string,
  slug: string,
  createdAt: string,
  id: string
}
const Items = (props: Props) => {
  return (
    <div className="py-8 w-[80%] w-flex flex-wrap md:flex-nowrap bg-[white] my-4 px-5 rounded-sm shadow-sm" >
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col" >
        <span className="font-semibold title-font text-gray-700">NEXT js</span>
        <span className="mt-1 text-gray-500 text-sm">{props.createdAt.slice(0, 10)}</span>
      </div>
      <div className="md:flex-grow" >
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{props.title}</h2>
        <p className="leading-relaxed">{props.description}</p>
        <Link className="text-indigo-500 inline-flex items-center mt-4" href={`/blog/${props.slug}`}>Learn More
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

const Blog = async () => {
  const res = await fetchTutorials(`*[_type == "blogs"]`)
  // console.log(res)
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden bg-[#f3f4f6]">
        <div className="py-10 mx-auto container px-5" >
          <div className="-my-8 divide-y-2 divide-gray-100" >
            {
              res.map((val: any, index: number) => {
                return (
                  <Items description={val.description} title={val.title} slug={val.slug.current} createdAt={val._createdAt} id={val.id}
                    key={index}
                  />
                )
              })
            }
          </div>
        </div>
      </section>

    </>
  )
};

export default Blog;
