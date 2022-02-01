import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

// FeedbackItem Component
function FeedbackItem({ data }) {
  const { deleteFeedBackItem } = useContext(FeedbackContext);
  const handleDeleteItem = (id) => {
    deleteFeedBackItem(id);
  };
  return (
    <Card reverse={false}>
      <div className="num-display">{data.rating}</div>
      <button className="close">
        <FaTimes color="purple" onClick={() => handleDeleteItem(data.id)} />
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
