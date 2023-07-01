import Cards from "../components/Cards";
import client from "../sanity/client";

const Tutorials = async () => {
  const res = await client.fetch(`*[_type == "tutorials"] `);
  // console.log(res);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto" bis_skin_checked={1}>
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-center text-gray-900">
          Popular Tutorials
        </h1>
        <div
          class="h-1 w-20 bg-indigo-500 rounded text-center mx-auto"
          bis_skin_checked="1"
        ></div>
        <div className="flex flex-wrap -m-4 mt-10" bis_skin_checked={1}>
          {res.map((val) => {
            return (
              <Cards
                views={val.views}
                comments={val.comments}
                description={val.description}
                title={val.title}
                img={val.image}
              />
            );
          })}

          {/* <Cards />
          <Cards /> */}
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
