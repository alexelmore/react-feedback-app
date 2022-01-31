import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
// FeedbackList Component
function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <h2>There is no feedback at this time</h2>;
  } else {
  }
  return (
    <div className="feedback-list">
      {feedback.map((data) => (
        <FeedbackItem key={data.id} data={data} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
