import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

// const classNamehandler = (staticClassName, conditionalClassName) => {
//     if (conditionalClassName.is - invalid != "")
//         return staticClassName + " is-invalid";
// }


const InputdryCode = ({
    type,
    id,
    value,
    onChange,
    label,
    error
}) => {
    return (
        <div className="form-group">
            <label className="control-label" htmlFor={id}>{label}</label>
            <input
                type={type} className={classnames('form-control', {
                    'is-invalid': error
                })}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
            />
            <div class="invalid-feedback">
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
    error: PropTypes.string.isRequired,
}

export default InputdryCode;