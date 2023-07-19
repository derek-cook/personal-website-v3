"use client";
import { useCompletion } from "ai/react";

export default function Home() {
  const { completion, input, isLoading, handleInputChange, handleSubmit } =
    useCompletion({
      api: "/api/qa",
    });

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Ask about my experience</label>
        <input
          placeholder="Tell me about a time..."
          type="text"
          onChange={handleInputChange}
          value={input}
        />
      </form>
      {isLoading ? <p>loading</p> : <p>{completion}</p>}
    </div>
  );
}
