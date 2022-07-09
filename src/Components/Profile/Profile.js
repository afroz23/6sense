import "./Profile.css";

export default function Profile({ currentUser }) {
  return (
    <div className="profile">
      <div className="teamSection">
        <div className="userName">{currentUser.name}</div>
        <div className="border-between"></div>
        <div className="teamsText">Teams</div>
      </div>
      <div className="profileSection">
        <div className="notification">
          <img
            src="/images/icon-mail.svg"
            alt="mail"
            className="notificationImage"
          />
          <div className="badge">{currentUser.notifications_count}</div>
        </div>
        <div className="nameSection">Hello, {currentUser.name}</div>
        <img className="avatar" src={currentUser.avatar} alt="avatar" />
      </div>
    </div>
  );
}
