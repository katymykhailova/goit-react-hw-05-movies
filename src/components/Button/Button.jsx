import { IconButton } from './Button.styled';
import PropTypes from 'prop-types';

function Button({ children, type, onClick, ...allyProps }) {
  return (
    <IconButton type="button" onClick={onClick} {...allyProps}>
      {children}
    </IconButton>
  );
}

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default Button;
