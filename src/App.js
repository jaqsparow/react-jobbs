import React, { useState, useEffect } from "react";
import { Logo, JobList, JobForm } from "./components";
import { fetchData } from "./api";

export default function App() {
  const [query, setQuery] = useState({ what: "", where: "" });
  const [count, setCount] = useState(0);
  const [jobs, setJobs] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const { results, count } = await fetchData(query);
      setJobs(results);
      setCount(count);
    };

    fetchAPI();
  }, [query]);

  const handleSubmit = (data1) => {
    setQuery(data1);
  };
  return (
    <div className="sm:mx-w-sm md:mx-w-lg max-w-4xl p-4 mx-auto">
      <Logo />
      <JobForm handleSubmit={handleSubmit} />
      <JobList jobs={jobs} data={query} count={count} />
    </div>
  );
}
