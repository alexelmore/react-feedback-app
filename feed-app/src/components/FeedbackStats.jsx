import PropTypes from "prop-types";

// FeedbackStats component
function FeedbackStats({ feedback }) {
  // Function to calculate feedback average

  let average =
    feedback.reduce((a, b) => {
      return a + b.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackStats;
