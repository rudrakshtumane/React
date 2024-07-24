// import React from 'react'
// import img from '../assets/images/casino.jpg'
const Home = () => {
  return (
    <>
    <div className="hero bg-black min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgBbYvUza8PmLjza9XM7piOoxsFFy61xX9g&s"
      className="max-w-sm rounded-lg shadow w-1/2" />
    <div>
      <h1 className="text-5xl font-bold">Welcome!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </>
  ) 
}

export default Home