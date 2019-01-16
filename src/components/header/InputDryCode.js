import React from 'react';
import PropTypes from 'prop-types';

const InputdryCode = ({
    type,
    id,
    value,
    onChange,
    label
}) => {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                type={type} className="form-control"
                id={id}
                name={id}
                value={value}
                onChange={onChange} />
        </div>
    );
}
InputdryCode.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default InputdryCode;