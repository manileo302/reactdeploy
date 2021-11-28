import PropTypes from "prop-types";

const ButtonComponent = ({ color, text,onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};
ButtonComponent.defaultProps = {
  color: "steelblue",
};
ButtonComponent.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick:PropTypes.func,
};
export default ButtonComponent;
