import React, { useState } from 'react';
import Icons from './Icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import googleLogo from '../images/images.png';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'user@example.com' && password === 'password123') {
      alert('Signed in successfully!');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-black mb-6">Sign In</h2>

        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}

        <div className="mb-4 flex flex-col gap-4">
          <button
            className="w-full py-2 px-4 text-black rounded-md flex items-center justify-center gap-2 border border-gray-300 hover:border-black focus:ring-2 focus:ring-black focus:ring-opacity-50"
          >
            <img 
              src={googleLogo} 
              alt="Google" 
              className="w-6 h-6"
            />
            Sign in with Google
          </button>
          <button
  className="w-full py-2 px-4 text-black rounded-md flex items-center justify-center gap-2 border border-gray-300 hover:border-black focus:ring-2 focus:ring-black focus:ring-opacity-50"
>
  <FontAwesomeIcon icon={faApple} className="text-[30px]" />
  Sign in with Apple
</button>

        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-start">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-700 focus:border-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='name@company.com'
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 text-start">Password</label>
            <input
              type="password"
              id="password"
              placeholder='Enter password'
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black-500 focus:border-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-white text-black rounded-md border border-gray-300 hover:bg-[#2A2E34] hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 transition-colors duration-300 ease-out"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center text-[16px]">
          <span className="text-gray-500 mr-1">Don't have an account?</span>
          <a href="/signup" className="text-gray-700 hover:underline">Sign up</a>
        </div>
        <Icons />
      </div>
    </div>
  );
};

export default SignInPage;
