import RightArrowSmall from "./assets/images/rightArrowSmall.svg";
import Comment from "./assets/images/comment.svg"
const FeedCard = ({ details }) => {
  return (
    <div className="cardContainer">
      <div className="header">
        <div className="leftElement">
          <img src={details.profile} className="profile" alt="logo" />
          <div className="name">
            <div className="text">{details.name}</div>
            <div className="title">{details.title}</div>
          </div>
        </div>

        <div className="rightElement">
          <div className="unitComment">Unit 1 Comment</div>
          <div className="arrowContainer">
            <img src={RightArrowSmall} className="arrowRight" alt="logo" />
          </div>
        </div>
      </div>

      <div className="content">
        <div className="feedDesc">
          {details.feedImage && (
            <img src={details.feedImage} className="feedImg" alt="logo" />
          )}
          <div className="text">{details.details} <b>Read More.</b></div>
        </div>

        <div className="footer">
            <div className="comment">
            <img src={Comment} className="icon"  alt="logo"/>
            <div className="text">{details.comments} Comments</div>
            </div>

            <div className="time">
            ●  {details.timeline} Days ago
            </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
