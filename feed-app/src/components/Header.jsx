import PropTypes from "prop-types";

// Header Component
function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// Default Prop for title
Header.defaultProps = {
  text: "Feeedback UI",
  bgColor: "rgba(0,0,0.4)",
  textColor: "#ff6a95",
};

// Prop types
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
