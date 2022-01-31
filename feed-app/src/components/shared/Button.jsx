import PropTypes from "prop-types";

// Shared Button Component
function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
}

// Default Props
Button.defaultProps = {
  type: "submit",
  version: "primary",
  isDisabled: false,
};

// Prop types
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
