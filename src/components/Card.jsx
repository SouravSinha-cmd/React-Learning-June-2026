import {Bookmark} from "lucide-react";

const Card = () => {

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
          <span>Amazon</span>
          <h2>Job Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="btn btn--badge-small">
            Part Time
          </button>
        </div>
        
      </div>
    </>
  );
}

export default Card;