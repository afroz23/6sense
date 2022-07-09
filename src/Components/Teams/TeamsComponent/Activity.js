import "./Common.css";
export default function Activity({ activities }) {
  return (
    <div className="activity">
      <p className="activityText">Activity</p>
      <div className="border"></div>
      {activities.map((item) => {
        return (
          <div key={item.id} className="person">
            <img src={item.person.avatar} alt="" className="avatar" />
            <div className="details">
              <div>
                <span className="bold">{item.person.name}</span>{" "}
                <span>{item.action.slice(0, item.action.indexOf("_"))}</span>{" "}
                {item.action.slice(0, item.action.indexOf("_")) === "added" &&
                  "new leads to "}
                {item.action.slice(0, item.action.indexOf("_")) ===
                  "archived" && "the team "}
                <span className="bold">{item.target}</span>{" "}
                {item.action.slice(0, item.action.indexOf("_")) ===
                  "increased " && "quota"}
              </div>
              <div className="time">{item.created_at}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
