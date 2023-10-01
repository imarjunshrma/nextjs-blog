import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Cards from './components/Card';
import { fetchTutorials } from './sanity/api';
export default async function Home() {
  const res = await fetchTutorials(`*[_type == "tutorials"]`)
  res.length = 3; //latest 3 blogs

  return (
    <>
      <HeroSection />
      <div className="popular-courses text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h3 className='text-3xl font-medium title-font text-gray-900 mb-4 text-center'>Popular Videoes</h3>
          <div className="flex mt-1 justify-center" >
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>

        </div>
        <div className="container px-5 mx-auto" >
          <div className="flex flex-wrap -m-4" >

            {
              res.map((val: any, index: number) => {
                const { id, url, image, comments_no, views, description, category, title } = val
                return <Cards id={id} url={url} image={image} comments_no={comments_no} views={views}
                  description={description} category={category} title={title} key={index} />
              })
            }
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto" >
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-4 text-center">Testimonials</h1>
          <div className="flex mt-1 mb-12 justify-center" >
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
          <div className="flex flex-wrap -m-4" >
            <div className="p-4 md:w-1/2 w-full" >
              <div className="h-full bg-gray-100 p-8 rounded" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6">
                  Unique Coder has been a game-changer for me in my coding journey. Their blog is a treasure trove of valuable insights, tutorials, and resources that have significantly improved my skills. The articles are well-written, engaging, and cover a wide range of topics. Thanks to Unique Coder, I've been able to tackle complex coding challenges with confidence and stay updated with the latest trends in the tech industry. I highly recommend their blog to anyone looking to enhance their coding abilities.</p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col">
                    <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full" >
              <div className="h-full bg-gray-100 p-8 rounded" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6">Finding Unique Coder's tech blog was a turning point in my career. The content they provide is exceptional, and it's evident that the writers possess a deep understanding of the subject matter. The tutorials are comprehensive, easy to follow, and have helped me master various programming languages. What sets Unique Coder apart is their ability to explain complex concepts in a simple and accessible manner. Thanks to them, I've been able to level up my coding skills and take on more challenging projects. I'm grateful for their valuable contributions to the coding community.</p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col">
                    <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                    <span className="text-gray-500 text-sm">DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
