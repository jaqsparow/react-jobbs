import React from "react";
import CountUp from "react-countup";

const JobList = ({ jobs, data, count, country }) => {
  if (!count) {
    return "";
  }
  return (
    <div>
      <div className="m-2 text-3xl">
        <h2>
          <CountUp start={0} end={count} duration={2} separator="," />
          {` ${data.what} jobs found in ${data.where || country.name}`}
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

export default JobList;
