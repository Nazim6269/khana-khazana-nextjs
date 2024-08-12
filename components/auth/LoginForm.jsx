'use client';

import { loginAction } from '@/actions';
import { useAuth } from '@/hooks/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LoginForm = () => {
  const [error, setError] = useState('');
  const router = useRouter();
  const { setAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const foundUser = await loginAction(formData);

      if (foundUser) {
        setAuth(foundUser);
        router.push('/');
      } else {
        setError('Please provide valid credentials');
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      {}
      <button
        type="submit"
        className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
      >
        Login
      </button>
      <p className="text-center text-xs text-gray-600">Or</p>

      <Link
        href="/register"
        className="underline text-sm mx-auto block text-gray-600 mt-4 text-center"
      >
        Create New Account
      </Link>
    </form>
  );
};

export default LoginForm;
