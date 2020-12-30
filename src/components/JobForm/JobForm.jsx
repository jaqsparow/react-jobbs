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
        <div className="grid grid-cols-3 gap-2 m-auto">
          <div className="col-span-6 md:col-span-1  ">
            <input
              type="text"
              name="what"
              value={query.what}
              placeholder="Job e.g. software"
              onChange={handleInput}
              className="border border-purple-400 rounded placeholder-purple-400 p-2"
            ></input>
          </div>
          <div className="col-span-6 md:col-span-1 ">
            <input
              type="text"
              name="where"
              value={query.where}
              placeholder="location e.g. London"
              onChange={handleInput}
              className="border border-purple-400 rounded placeholder-purple-400 p-2"
            ></input>
          </div>
          <div className="col-span-6 md:col-span-1">
            <button
              className="rounded bg-purple-400 ring-2 ring-purple-300 hover:bg-purple-500 px-20 py-2"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
