import { connect } from 'react-redux';
import * as actionsForm from '../Actions/FormAction';
import * as actionsSurvey from '../Actions/SurveyAction';
import SurveyComponent from "../Components/Survey/SurveyComponent";

const mapStateToProps = (state) => {
    return {
        name: state.FormReducer.name,
        selection: state.SurveyReducer.selectedValue,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeValueName: (event) => {
            dispatch(actionsForm.changeValueName(event));
        },

        saveSelectValue: (event) => {
            dispatch(actionsSurvey.saveSelectValue(event));
        },
    };
};

const SurveyContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SurveyComponent);

export default SurveyContainer;
