import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import wriwerIcon from "../img/external.svg";
import Spinner from "./Spinner/Spinner";

const DashbordNavbar = () => {
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

  const totalVotedVoter = voters.filter(
    (voter) => voter.viter_status === true
  ).length;

  const totalUnVotedVoter = voters.filter(
    (voter) => voter.viter_status === false
  ).length;
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 gap-4">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
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
            </button>
          </div>
        </div>

        <div className="tabs">
          <Link
            to={"/dashboard/voters-info"}
            className="tab tab-lifted tab-active"
          >
            All Voters
          </Link>
          <Link to={"/dashboard/voted-voter"} className="tab tab-lifted ">
            {" "}
            Voted Voter{" "}
          </Link>
          <Link
            to={"/dashboard/unvoted-voter"}
            className="tab tab-lifted tab-active"
          >
            UnVoted Voter
          </Link>
        </div>

        <ul className="steps">
          <li data-content={totalVoter} className="step step-warning ">
            Total
          </li>
          <li data-content={totalVotedVoter} className="step step-success">
            Voted
          </li>
          <li data-content={totalUnVotedVoter} className="step step-error">
            UnVoted
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <label
          htmlFor="my-drawer-2"
          className=" lg:hidden relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40  focus:ring-blue-300  focus:ring  focus:outline-none"
        >
          <img
            className="h-5 w-5"
            src={wriwerIcon}
            alt="Girl in a jacket"
          ></img>
        </label>

        <Link to={"/"} className="btn btn-ghost ">
          Go-Home
        </Link>
      </div>
    </div>
  );
};

export default DashbordNavbar;
