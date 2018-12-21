import { connect } from 'react-redux';
import * as actions from '../Actions/FormAction';
import * as actionsBlog from '../Actions/BlogAction';

import FormComponent from "../../../ReduxReactExercise/src/Components/FormComponent";

const mapStateToProps = (state) => {
    return {
        name: state.FormReducer.name,
        surname: state.FormReducer.surname,
    };
};

const mapDispatchToProps = (dispatch) => {
        return {
        changeValueName: (event) => {
            dispatch(actions.changeValueName(event));
        },
        changeValueSurname: (event) => {
            dispatch(actions.changeValueSurname(event));
        },
        buttonClicked: () => {
            dispatch(actions.buttonClicked());
        },
        buttonClickedTopics: (event) => {
            dispatch(actions.buttonClickedTopics(event))
        },
        asyncCall: (requestBody) => {
            dispatch(actionsBlog.asyncCall(requestBody))
        }
    }
}

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FormComponent);

export default FormContainer
