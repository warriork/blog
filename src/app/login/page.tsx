'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from "@/utils/auth";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const accessToken = await login(email, password);
      localStorage.setItem('accessToken', accessToken);
      console.log('Access Token:', accessToken);
      router.push('/');
    } catch (error) {
      setError(error.message || 'Login failed, please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-start justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg mt-16 w-full max-w-sm">
        <h1 className="text-[28px] leading-[32px] mb-6">Log In</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[16px]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="me@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-[16px]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="ml-auto h-9 text-white text-[16px] leading-[24px] w-[69px] bg-background-primary py-1 px-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isLoading}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;