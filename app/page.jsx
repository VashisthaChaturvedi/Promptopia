import React from 'react'
import Feed from '@components/Feed';
const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="text-center head_text">Discover and Share</h1>
      <br className="max-md:hidden" />
          <span className="orange_gradient text-center head_text">AI Powered Prompts</span>
          <p className='desc text-center'>Promptopia is an open-source AI prompting tool for modern world to discover, create ans share creative prompts</p>
        <Feed/>
      </section>
  );
}

export default page