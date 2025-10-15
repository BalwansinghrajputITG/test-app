import React from "react";
import TournamentSideBar from "../Components/TournamentSideBar";
import TournamentHeroPage from "../Components/tournamentHeroPage";

function TournamentPage() {
  return (
    <>
      <div className="relative flex">
        <TournamentSideBar />
        <TournamentHeroPage />
      </div>
    </>
  );
}

export default TournamentPage;
