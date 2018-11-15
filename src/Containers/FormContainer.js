import { connect } from 'react-redux';
import * as actions from '../Actions/FormAction';
import FormComponent from "../Components/FormComponent";

const mapStateToProps = (state) => {
    return {
        name: state.FormReducer.name,
        surname: state.FormReducer.surname
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
        buttonClicked: (event) => {
            dispatch(actions.buttonClicked(event))
        },
        buttonClickedTopics: (event) => {
            dispatch(actions.buttonClickedTopics(event))
        },
    };
};

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FormComponent);

export default FormContainer;
