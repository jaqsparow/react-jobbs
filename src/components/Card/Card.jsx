import React, { useState } from "react";
import CountUp from "react-countup";

const Card = ({ jobs, data, count, handleSubmit }) => {
  //console.log(props)
  const [query, setQuery] = useState({ what: "", where: "" });

  if (!count) {
    return "loading..please wait...";
  }

  const handleInput = (e) =>
    setQuery({ ...query, [e.target.name]: e.target.value });

  return (
    <div className="sm:mx-w-sm md:mx-w-lg max-w-4xl p-4 mx-auto">
      <div className="text-center py-4">
        <div className="inline text-9xl transition duration-300 ease-in-out hover:text-purple-400">
          <a href="/">Jobbs</a>
        </div>
        <div className="inline text-2xl text-purple-700">.info</div>

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
      <div className="m-2 text-3xl">
        <h2>
          <CountUp start={0} end={count} duration={2} separator="," />
          {` ${data.what} jobs found in ${data.where}`}
        </h2>
      </div>
      <ol className="space-y-4">
        {!jobs ||
          jobs.map((job, index) => {
            return (
              <li key={index} className="block p-4 border bg-gray-100">
                <div className="space-x-4">
                  <div className="inline-block text-purple-600 text-xl">
                    <div dangerouslySetInnerHTML={{ __html: job.title }}></div>
                  </div>
                  <div className="inline-block italic">{`Location: ${job.location.display_name}`}</div>
                </div>

                <div className="text-md py-2 font-sans text-justify">
                  <div
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  ></div>
                  <a
                    href={job.redirect_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-purple-400 ring-2 ring-purple-300
                    hover:bg-purple-500 py-0.5 px-4 m-1 "
                  >
                    Apply job
                  </a>
                </div>
                <p>{`Company: ${job.company.display_name}`}</p>
                <p>{`Posted On: ${job.created.substring(0, 10)}`}</p>
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default Card;
