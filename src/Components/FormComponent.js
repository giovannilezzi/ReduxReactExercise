import React from 'react';
import { Button } from 'react-bootstrap';
import history from "../history";

class FormComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    getProps() {
        console.log(this.props)
        return this.props
    }

    render() {
        return (
        <div>
            <div style={{ marginBottom: '5px' }}>Value: {this.props.name + " " +this.props.surname}</div>
            <div>
                <label>
                    Change me:
                    <input
                        type="text"
                        name="form"
                        value={this.props.name}
                        onChange={this.props.changeValueName}
                    />
                    <input
                        type="text"
                        name="form"
                        value={this.props.surname}
                        onChange={this.props.changeValueSurname}
                    />
                </label>
                <Button id ="app" bsStyle="danger" name="Button" onClick={this.props.buttonClicked}>Go to APP</Button>

                <Button id="imm" bsStyle="info" name="Button" onClick={this.props.buttonClickedTopics}> Go to Topics </Button>

                <Button id="imm" bsStyle="info" name="Button" onClick={() => { history.push('/APP') }}> Prova </Button>

            </div>
        </div>
        ) ;
    }
}

export default FormComponent;
