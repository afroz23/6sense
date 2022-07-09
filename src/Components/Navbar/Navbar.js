import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="images">
          <img src="/Images/sw-logo-white.svg" alt="" className="image" />
          <img src="/Images/icon-campaign.svg" alt="" className="image" />
          <img
            src="/Images/icon-teams.svg"
            alt=""
            className="image activeIcon"
          />
          <img src="/Images/icon-leads.svg" alt="" className="image" />
          <img src="/Images/icon-reports.svg" alt="" className="image" />
        </div>
        <img src="/Images/icon-help.svg" alt="" className="image help" />
      </div>
    </div>
  );
}
