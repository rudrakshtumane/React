import {useState} from 'react'
import Toast from './Toast';
import {useNavigate} from 'react-router-dom'


const Registration = () => {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({ message: '', type: '', show: false });

 const navigate = useNavigate()

  const payLoad = {userName,email,password};

const handleSubmit = (event) => {
      event.preventDefault();
    if(userName !== "" && email !== "" && password !== ""){
        showToast('Registration Successful!', 'success');
         localStorage.setItem('user', JSON.stringify(payLoad))
      
        console.log("userData from localStorage", payLoad);
      navigate('/login')
    }
    else{
        showToast('Invalid credentials', 'error');
    }   
}   


const showToast = (message, type) => {
    setToast({ message, type, show: true });
    setTimeout(() => setToast({ ...toast, show: false }), 5000);
  };




  return (
    <>
    <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold ml-10">Register now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" placeholder="Username" className="input input-bordered" required onChange={(e) => setUserName(e.target.value)} />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required  onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required   onChange={(e) => setPassword(e.target.value)}/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" onClick={handleSubmit}>Register</button>
        </div>
      </form>
    </div>
  </div>
</div>

{toast.show && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ ...toast, show: false })} />}
    </> 
  )
}

export default Registration