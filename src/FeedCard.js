import RightArrowSmall from "./assets/images/rightArrowSmall.svg";
import Comment from "./assets/images/comment.svg"
const FeedCard = ({ details }) => {
  return (
    <div className="cardContainer">
      <div className="header">
        <div className="left">
          <img src={details.profile} className="profile" />
          <div className="name">
            <div className="text">{details.name}</div>
            <div className="title">{details.title}</div>
          </div>
        </div>

        <div className="right">
          <div className="unitComment">Unit 1 Comment</div>
          <div className="arrowContainer">
            <img src={RightArrowSmall} className="arrowRight" />
          </div>
        </div>
      </div>

      <div className="content">
        <div className="feedDesc">
          {details.feedImage && (
            <img src={details.feedImage} className="feedImg" />
          )}
          <div className="text">{details.details}</div>
        </div>

        <div className="footer">
            <div className="comment">
            <img src={Comment} className="icon" />
            <div className="text">{details.comments} Comments</div>
            </div>

            <div className="time">
             {details.timeline} Days ago
            </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
