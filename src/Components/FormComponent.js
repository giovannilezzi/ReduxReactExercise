import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


const propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    changeValueName: PropTypes.func.isRequired,
    changeValueSurname: PropTypes.func.isRequired,
    buttonClicked: PropTypes.func.isRequired,
    fetchPosts: PropTypes.func
};

const FormComponent = ({ name, surname, changeValueName, changeValueSurname,buttonClicked}) => (
    <div>
        <div style={{ marginBottom: '5px' }}>Value: {name + surname}</div>
        <div>
            <label>
                Change me:
                <input
                    type="text"
                    name="form"
                    value={name}
                    onChange={changeValueName}
                />
                <input
                    type="text"
                    name="form"
                    value={surname}
                    onChange={changeValueSurname}
                />
            </label>
            <Button id ="app" bsStyle="danger" name="Button" onClick={buttonClicked}>Go to APP</Button>

            <Button id="imm" bsStyle="info" name="Button" onClick={buttonClicked}> Immagine </Button>

        </div>
    </div>
);

FormComponent.propTypes = propTypes;

export default FormComponent;
