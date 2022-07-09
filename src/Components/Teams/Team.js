import "./Team.css";
export default function Teams({ teams, active, setActive }) {
  const handleClick = (e) => {
    const { name, value } = e.target;
  };
  return (
    <div className="container">
      <div className="newTeam-container">
        <div className="left-section">
          <img src="/Images/icon-companies.svg" alt="" className="teamsIcon" />
          <div className="teamsText">Teams</div>
        </div>
        <div className="newTeam">
          <img src="/Images/Shape.svg" alt="" className="plus" />
          <div className="create-text">CREATE NEW TEAMS</div>
        </div>
      </div>

      <div className="tabSection">
        <div className="tabs">
          <div
            className={`tab ${active === "all" ? "active" : ""}`}
            onClick={() => setActive("all")}
          >
            All
          </div>
          <div
            className={`tab ${active === "favorites" ? "active" : ""}`}
            onClick={() => setActive("favorites")}
          >
            Favorites
          </div>
          <div
            className={`tab ${active === "archived" ? "active" : ""}`}
            onClick={() => setActive("archived")}
          >
            Archived
          </div>
        </div>
        <div className="search">
          <img src="/Images/icon-search.svg" alt="" className="searchIcon" />
          <input
            placeholder="Search team name..."
            className="input"
            onChange={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
