import React, { useState } from "react";

const createNewArticlePage = () => {
  const [title, setTitle] = useState("");
  return (
    <form  className='pl-56 pt-12'>
      <div className='flex flex-row justify-start'>
        <h1 className="text-[28px] leading-[32px] mb-6">Create new Article</h1>
        <button
          type="submit"
          className="btn ml-8"
        >
          Publish Article
        </button>
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block text-[16px]">
          Email
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="My first article"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

    </form>
  )
}
export default createNewArticlePage;