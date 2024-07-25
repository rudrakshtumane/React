import { useState } from 'react';
import Toast from './Toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toast, setToast] = useState({ message: '', type: '', show: false });
  const navigate = useNavigate();

  let userData = localStorage.getItem('user');
  userData = JSON.parse(userData);

  const handleSubmit = () => {
    if (email === userData["email"] && password === userData["password"]) {
      navigate('/Product');
      showToast('Login successful!', 'success');
    } else {
      showToast('Invalid credentials', 'error');
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type, show: true });
    setTimeout(() => setToast({ ...toast, show: false }), 5000);
  };

  return (
    <>
      <div className="container mx-auto p-4 max-w-md border border-sky-500 rounded-lg mt-24">
        <h1 className="text-4xl text-center m-5">Login</h1>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mb-4">
          <input
            type="password"
            className="grow"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="btn btn-accent w-full mb-5" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
    </>
  );
};

export default Login;
