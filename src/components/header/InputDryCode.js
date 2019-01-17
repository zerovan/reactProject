import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames'

const InputdryCode = ({
    type,
    id,
    value,
    onChange,
    label,
    error
}) => {

    let style = "";
    if (error === undefined)
        style = "form-control";
    else
        style = "form-control is-invalid";
    // console.log("error: " + error);
    // console.log("classNamevar: " + classNamevar);

    return (
        <div className="form-group">
            <label className="control-label" htmlFor={id}>{label}</label>
            <input
                type={type} className={style}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
            />
            <div className="invalid-feedback">
                {error}
            </div>

        </div>
    );
}
InputdryCode.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    // error: PropTypes.string.isRequired,
}

export default InputdryCode;