import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import history from "../history";
import * as actions from '../Actions/BlogAction'


class FormComponent extends React.Component{

    constructor(props) {
        super(props);
    }

    /*
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing: false
        }
        console.log(data)
        this.props.dispatch(
            actions.handleSubmit(data)
        )
        this.getTitle.value = '';
        this.getMessage.value = '';
    }*/
    // per forza così..Se faccio call(e){...} da errore
    call = (e) => {
        e.preventDefault();
        //var url = 'http://localhost:3001/blog'
        const requestBody = {
            Id: 1,
            Name: this.props.name,
            Surname: this.getMessage.value
        }
        this.props.dispatch(
            actions.asyncCall(requestBody)
        )
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

export default connect() (FormComponent);

