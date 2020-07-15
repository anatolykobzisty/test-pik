import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({ id, className, label, error, ...attrs }) => {
  const classes = classNames('input', className, { error });

  return (
    <div className="input-field">
      <input name={id} id={id} className={classes} {...attrs} />
      {label && (
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      )}
      {error && <span className="message-error">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  label: '',
  error: '',
};

export default Input;
