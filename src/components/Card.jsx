import {Bookmark} from "lucide-react";

const Card = ({item}) => {

  console.log(item);

  return (
    <>
      <div className="card">
        <div className="top-area">
          <img src="https://images.pexels.com/photos/35409424/pexels-photo-35409424.jpeg" alt="" />

          <button className="btn btn--save-small">
            Save 
            <Bookmark />
          </button>
        </div>

        <div className="center">
          <span>{item.companyName}</span>
          <h2>{item.jobTitle}</h2>
          <p>{item.description}</p>
          <button className="btn btn--badge-small">{item.type}</button>
        </div>
      </div>
    </>
  );
}

export default Card;