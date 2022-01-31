import PropTypes from "prop-types";

// Global Card Component with card class styles applied
function Card({ children, reverse }) {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}

// Default prop for Card styling
Card.defaultProps = {
  reverse: false,
};

// Prop types for Card
Card.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
export default Card;
