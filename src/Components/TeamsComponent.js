import { useState } from "react";
import Profile from "./Profile/Profile";
import "./TeamsComponent.css";
import Data from "../Data.json";
import Teams from "./Teams/Team";
import Activity from "./Teams/TeamsComponent/Activity";
import AllTeams from "./Teams/TeamsComponent/AllTeams";

export default function TeamsComponent() {
  const [active, setActive] = useState("all");
  let selectedTeams = [];
  if (active === "all") {
    selectedTeams = Data.teams;
  } else if (active === "favorites") {
    selectedTeams = Data.teams.filter((team) => team.is_favorited);
  } else {
    selectedTeams = Data.teams.filter((team) => team.is_archived);
  }

  return (
    <div className="parent-component">
      <Profile currentUser={Data.current_user} />
      <Teams active={active} setActive={setActive} teams={Data} />
      <div className="containerClass">
        <AllTeams
          teams={Data.teams}
          active={active}
          selectedTeams={selectedTeams}
        />
        <Activity activities={Data.activities} />
      </div>
    </div>
  );
}
