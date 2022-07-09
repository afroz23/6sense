import "./Card.css";
export default function Card({
  id,
  name,
  leads_count,
  favoriteImage,
  is_archived,
  image,
  description,
  created_at,
  campaigns_count,
}) {
  return (
    <div key={id} className="card">
      <div className="header">
        <div className="header-child">
          <img src={image} alt="" className="left" />
          <div className="right">
            <div className="name">{name}</div>
            <div className="created_at">{created_at}</div>
          </div>
        </div>
        <img src={favoriteImage} alt="" className="star" />
      </div>
      <div>
        <div className="description">
          {description.slice(0, 85)} {description.length > 85 ? "...." : ""}
        </div>
      </div>
      <div className="border"></div>
      <div className="bottom">
        <div className="conversations">
          <img src="/Images/icon-conversations-small.svg" alt="" />
          <div>{campaigns_count} Campaigns</div>
        </div>
        <div className="leads">
          <img src="/Images/icon-leads-small.svg" alt="" />
          <div>{leads_count} Leads</div>
        </div>
      </div>
    </div>
  );
}
