import React from 'react';
import PropTypes from 'prop-types';
import './css/main.css'
import './css/util.css'
/*
import './images/icons/favicon.ico'
import './vendor/bootstrap/css/bootstrap.min.css'
import './vendor/animate/animate.css'
import './vendor/css-hamburgers/hamburgers.min.css'
import './vendor/animsition/css/animsition.min.css'
import './vendor/select2/select2.min.css'
import  './vendor/daterangepicker/daterangepicker.css'
import './fonts/font-awesome-4.7.0/css/font-awesome.css'
*/

const propTypes = {
    name: PropTypes.string.isRequired,
    changeValueName: PropTypes.func.isRequired,
    saveSelectValue: PropTypes.func,
};

const SurveyComponent = ({changeValueName, name, selection, saveSelectValue,}) => {
    return(<div className="container-contact100">
            <div className="wrap-contact100">
                <form className="contact100-form validate-form">
                    <span className="contact100-form-title">
                        Say Hello!
                    </span>
                    <div className="wrap-input100 validate-input" data-validate="Name is required">
                        <span className="label-input100">Your Name</span>
                        <input className="input100" type="text" onChange={changeValueName} value={name}></input>
                        <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <span className="label-input100">Email</span>
                        <input className="input100" type="text" name="email" placeholder="Enter your email addess"></input>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 input100-select">
                        <span className="label-input100">Needed Services</span>
                        <div>
                            <span className="contact100-form-title">
                                Value: {selection}
                            </span>
                            <select className="selection-2" name="service" onChange = {saveSelectValue}>
                                <option value="Choose Services">Choose Services</option>
                                <option value="Online Store">Online Store</option>
                                <option value="eCommerce Bussiness">eCommerce Bussiness</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                                <option value="Online Services">Online Services</option>
                            </select>
                        </div>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 input100-select">
                        <span className="label-input100">Budget</span>
                        <div>
                            <select className="selection-2" name="budget">
                                <option>Select Budget</option>
                                <option>1500 $</option>
                                <option>2000 $</option>
                                <option>2500 $</option>
                            </select>
                        </div>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Message is required">
                        <span className="label-input100">Message</span>
                        <textarea className="input100" name="message" placeholder="Your message here..."></textarea>
                        <span className="focus-input100"></span>
                    </div>

                    <div className="container-contact100-form-btn">
                        <div className="wrap-contact100-form-btn">
                            <div className="contact100-form-bgbtn"></div>
                            <button className="contact100-form-btn">
                                <span>
                                    Submit
                                    <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

SurveyComponent.propTypes = propTypes;

export default SurveyComponent;
