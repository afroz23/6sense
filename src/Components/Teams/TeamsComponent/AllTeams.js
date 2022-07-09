import Card from "./Card";
import "./Common.css";
export default function AllTeams({ selectedTeams, teams, active }) {
  return (
    <div className="all">
      <div className="main-header">
        <div className="left-text">{active} Teams</div>
        <div className="right-text">
          Showing {selectedTeams.length} out of {teams.length} teams
        </div>
      </div>
      <div className="teams">
        {selectedTeams.map((item) => {
          return (
            <Card
              id={item.id}
              campaigns_count={item.campaigns_count}
              created_at={item.created_at}
              description={item.description}
              image={item.image}
              is_archived={item.is_archived}
              favoriteImage={
                item.is_favorited
                  ? "/Images/star_active.svg"
                  : "/Images/star_default.svg"
              }
              leads_count={item.leads_count}
              name={item.name}
            />
          );
        })}
      </div>
    </div>
  );
}
