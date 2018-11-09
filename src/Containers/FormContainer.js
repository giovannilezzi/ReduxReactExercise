import { connect } from 'react-redux';
import * as actions from '../Actions';
import FormComponent from "../Components/FormComponent";

const mapStateToProps = (state) => {
    return {
        name: state.ChangeValue.name,
        surname: state.ChangeValue.surname
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
    };
};

const FormContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FormComponent);

export default FormContainer;
