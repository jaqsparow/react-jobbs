import React, { useState } from "react";

const JobForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState({ what: "", where: "" });

  const handleInput = (e) =>
    setQuery({ ...query, [e.target.name]: e.target.value });

  return (
    <div className="text-center">
      <form
        className=" py-8"
        onSubmit={(e) => {
          handleSubmit(query);
          e.preventDefault();
        }}
      >
        <input
          type="text"
          name="what"
          value={query.what}
          placeholder="Job e.g. software"
          onChange={handleInput}
          className="border border-purple-400 rounded p-1 m-1 placeholder-purple-400"
        ></input>
        <input
          type="text"
          name="where"
          value={query.where}
          placeholder="location e.g. London"
          onChange={handleInput}
          className="border border-purple-400 rounded p-1 m-1 placeholder-purple-400"
        ></input>
        <button
          className="rounded bg-purple-400 ring-2 ring-purple-300
       hover:bg-purple-500 py-0.5 px-4 m-1 "
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default JobForm;
