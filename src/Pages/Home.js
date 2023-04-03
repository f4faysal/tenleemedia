import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../Components/Button/PrimaryButton";
import Spinner from "../Components/Spinner/Spinner";

const Home = () => {
  const {
    data: voters = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["voters"],
    queryFn: () =>
      fetch(`https://voting-server-side-f4faysal.vercel.app/voters`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const totalVoter = voters.length;

  const totalVotedVoters = voters.filter(
    (voter) => voter.viter_status === true
  ).length;

  const totalVotedVoter =
    (voters.filter((voter) => voter.viter_status === true).length * 100) /
    totalVoter;

  const totalUnVotedVoter =
    (voters.filter((voter) => voter.viter_status === false).length * 100) /
    totalVoter;

  return (
    <div className="hero min-h-screen bg-base-100 ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="flex flex-col md:flex-row justify-evenly lg:w-1/2 gap-4 ">
          <div
            className="radial-progress bg-green-100 text-green-600 text-2xl"
            style={{
              "--value": ``,
              "--size": "12rem",
              "--thickness": "10px",
            }}
          >
            Total casting {totalVotedVoters}
          </div>

          <div
            className="radial-progress bg-red-100 text-red-800 "
            style={{
              "--value": `${totalUnVotedVoter}`,
              "--size": "12rem",
              "--thickness": "13px",
            }}
          >
            Owing Vote {totalUnVotedVoter} %
          </div>

          <div
            className="radial-progress bg-green-100 text-green-600"
            style={{
              "--value": `${totalVotedVoter}`,
              "--size": "12rem",
              "--thickness": "15px",
            }}
          >
            Total Vote {totalVotedVoter} %
          </div>
        </div>

        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold w-full ">
            Total {totalVoter}
          </h1>
          <p className="py-6 ">
            {`The total ${totalVoter} registered voters 2023. Custom voter identification and checking the presence of all Bangladeshi votes in Italy`}
          </p>

          <PrimaryButton classes=" flex px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100">
            <Link className="px-4" to={"/dashboard/search-voter-status"}>
              Search Voter Status{" "}
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
