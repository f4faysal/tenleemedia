// import React from 'react';
// import DashbordNavbar from '../../Components/DashbordNavbar';

// const VotedVoter = () => {
//     return (
//         <div>
//              <DashbordNavbar></DashbordNavbar>
//             Voted Voter
//         </div>
//     );
// };

// export default VotedVoter;


import { useQuery } from "@tanstack/react-query";
import React from "react";
import DashbordNavbar from "../../Components/DashbordNavbar";
import Spinner from "../../Components/Spinner/Spinner";
import PrintCardModal from "../PrintCard/PrintCardModal";

import VoterTable from "./VoterTable";

const VotedVoter = () => {
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

  voters.sort((a, b) => a.voter_id - b.voter_id);

  console.log(voters);

  return (
    <>
      <DashbordNavbar></DashbordNavbar>

      <div className="overflow-x-auto">
        <table className="table w-full table-auto border-collapse border border-slate-400">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Addresh</th>
              <th>Barth</th>
              <th>voter_id</th>
              <th>gender</th>
              <th>viter_status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {voters.filter(voter => voter.viter_status === true).map((voter, i) => (
              <VoterTable voter={voter} key={i}></VoterTable>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Addresh</th>
              <th>Barth</th>
              <th>voter_id</th>
              <th>gender</th>
              <th>viter_status</th>
              <th></th>
            </tr>
          </tfoot>
        </table>

        <PrintCardModal></PrintCardModal>
      </div>
    </>
  );
};

export default VotedVoter;
