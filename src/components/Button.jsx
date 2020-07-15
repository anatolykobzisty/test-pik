import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, onClick, className, disabled, active, ...attrs }) => {
  const onClickAction = (event) => (disabled ? event.preventDefault() : onClick(event));
  const classes = classNames('btn', className, { active });

  return (
    <button className={classes} disabled={disabled} onClick={onClickAction} {...attrs}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: 'Default button',
  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
};

export default Button;
