import React from 'react';

const FormInputLabel = ({ label, placeholder, id }) => {
    return (
        <form>
            <label className="form-label" htmlFor={id}>{label}</label><br />
            <input className="background" type="text" id={id} name={id} placeholder={placeholder}/><br />
        </form>
    );
};

export default FormInputLabel;