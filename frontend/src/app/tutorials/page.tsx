import Cards from "../components/Card";
import { fetchTutorials } from "../sanity/api";



const Tutorials =async () => {
  const res=await fetchTutorials(`*[_type == "tutorials"]`)
  return (
    <>
  <section className="text-gray-600 body-font ">
  <div className="container px-5  mx-auto" >
    <div className="text-center mb-20" >
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Popular Tutorials</h1>
      <div className="flex mt-6 justify-center" >
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"  />
      </div>
    </div>
    <div className="container px-5 mx-auto" >
    <div className="flex flex-wrap -m-4" >
      {
        res.map((val:any)=>{
          const {id,url,image, comments_no,views,description,category,title}=val
          return <Cards id={id} url={url} image={image} comments_no={comments_no} views={views} 
          description={description} category={category} title={title}/>
  })
      }
    
    </div>
  </div>
  </div>
</section>

    
    
    </>
  )
};

export default Tutorials;
