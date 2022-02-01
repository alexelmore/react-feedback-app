import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

// FeedbackItem Component
function FeedbackItem({ data }) {
  const { deleteFeedBackItem, editFeedBackItem } = useContext(FeedbackContext);

  return (
    <Card reverse={false}>
      <div className="num-display">{data.rating}</div>
      <button onClick={() => deleteFeedBackItem(data.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedBackItem(data)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{data.text}</div>
    </Card>
  );
}

// Prop types for FeedbackItem Component
FeedbackItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FeedbackItem;
