import React from "react";

const createNewArticlePage = () => {
  return (
    <div className='mt-12 ml-56 flex flex-row justify-start'>
      <h1 className="text-[28px] leading-[32px] mb-6">Create new Article</h1>
      <button
        type="submit"
        className="btn ml-8"
      >
        Publish Article
      </button>
    </div>
  )
}
export default createNewArticlePage;