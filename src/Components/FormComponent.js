import React from 'react';
import { Button } from 'react-bootstrap';
import history from "../history";


class FormComponent extends React.Component{

    call = (e) => {
        e.preventDefault();
        const requestBody = {
            Name: this.getTitle.value,
            Surname: this.getMessage.value
        }
        this.props.asyncCall(requestBody)
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
            <div className="navbar">
                <h2 className="center ">Post It</h2>
            </div>
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form className="form" onSubmit={this.call} >
                    <input required type="text" ref={(input) => this.getTitle = input}
                           placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                              cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        </div>

        )
    }
}

export default FormComponent;

