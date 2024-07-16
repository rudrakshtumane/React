import {useState} from 'react'

const Form = () => {


const [email, setEmail] =useState('');
const [password, setPassword] =useState('');

const send = {email: email, password: password}
console.log(send);

const handleSubmit = (e) => {
    e.preventDefault();
    
}


  return (
    <>
    <div className="container w-[400px] place-content-center justify-center mx-[540px] border border-sky-500 p-5" >
        <h1 className="text-[50px] text-center m-5">Login</h1>
    
<label className="input input-bordered flex items-center gap-2 mb-4 ">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow " placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
</label>

<label className="input input-bordered flex items-center gap-2 mb-4 ">
 
  <input type="text" className="grow" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
</label>
<button className="btn btn-accent w-[358px] mb-5" onClick={handleSubmit}>Submit</button>
</div>
    </>
  )
}

export default Form