import React, { useState } from "react";

const JobForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState({ what: "", where: "" });

  const handleInput = (e) =>
    setQuery({ ...query, [e.target.name]: e.target.value });

  return (
    <div className="text-center">
      <form
        className="py-8"
        onSubmit={(e) => {
          handleSubmit(query);
          e.preventDefault();
        }}
      >
        <div className="flex flex-col items-stretch justify-center md:flex-row md:items-center">
          <input
            type="text"
            name="what"
            value={query.what}
            placeholder="Job e.g. software"
            onChange={handleInput}
            className="border border-purple-400 focus:border-purple-500  rounded placeholder-purple-400 p-2 m-2 align-middle"
          ></input>

          <input
            type="text"
            name="where"
            value={query.where}
            placeholder="location e.g. London"
            onChange={handleInput}
            className="border border-purple-400 focus:border-purple-500 rounded placeholder-purple-400 p-2 m-2 align-middle"
          ></input>

          <button
            className="rounded bg-purple-400 ring-2 ring-purple-300 hover:bg-purple-500 px-10 py-2 m-2"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
