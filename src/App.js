import React, { useState, useEffect } from "react";
import { Logo, JobList, JobForm } from "./components";
import { fetchJobs, fetchCountry } from "./api";

export default function App() {
  const [query, setQuery] = useState({ what: "", where: "" });
  const [count, setCount] = useState(0);
  const [jobs, setJobs] = useState({});
  const [country, setCountry] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setCountry(await fetchCountry());
    };
    fetchAPI();
  }, []);

  const handleSubmit = async (data1) => {
    const { results, count } = await fetchJobs(country, data1);
    setJobs(results);
    setCount(count);
    setQuery(data1);
  };

  return (
    <div className="sm:mx-w-sm md:mx-w-lg max-w-4xl p-4 mx-auto">
      <Logo />
      <JobForm handleSubmit={handleSubmit} />
      <JobList jobs={jobs} data={query} count={count} country={country} />
    </div>
  );
}
