import PropTypes from "prop-types";
import Card from "./shared/Card";
// FeedbackItem Component
function FeedbackItem({ data }) {
  return (
    <Card reverse={false}>
      <div className="num-display">{data.rating}</div>
      <div className="text-display">{data.text}</div>
    </Card>
  );
}

// Prop types for FeedbackItem Component
FeedbackItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FeedbackItem;
