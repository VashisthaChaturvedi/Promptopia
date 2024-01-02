"use client";
import Link from "next/link";
import { useState } from "react";

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}) => {
  const [val, setVal] = useState("");
  return (
    <section className="w-full max-w-full flex-center flex-col">
      <h1 className="head_text  center">
        <span className="blue_gradient">{type} Post</span>{" "}
      </h1>
      <p className="desc  max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination rn wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            placeholder="Your Amazing AI prompt"
            rows={5}
            onChange={(e) => {
              setPost({ ...post, prompt: e.target.value });
              console.log(post);
            }}
            required
            className="form_textarea"
            value={post.prompt}
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag {` `}
          </span>
          <span className="font-normal"> #product,#webdevelopment,#idea</span>

          <input
            placeholder="Tags(#webdev,#machinelearning...)"
            onChange={(e) => {
              setPost({ ...post, tag: e.target.value });
              console.log(post);
            }}
            required
            className="form_input"
            value={post.tag}
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            <button className="">Cancel</button>
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 bg-primary-orange rounded-full text-white">
            {submitting ? `${type}ing...` : `${type}`}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
