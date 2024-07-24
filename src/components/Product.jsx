
const Product = ({data}) => {
    
  return (
   
 <div className="container w-full p-4 bg-white ">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 m-5">
      {data.map((elem,index) => (
        <div className="card card-compact shadow-xl m-5" key={index}>
        <figure className="flex justify-center">
          <img
            src={elem.image}
            alt={elem.pName} className="w-1/2 " />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">{elem.pName}</h2>
          <p>{elem.pDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline">{elem.price}</button>
          </div> 
        </div>
      </div>
      ))}
    </div>
   </div>

  )
}

export default Product