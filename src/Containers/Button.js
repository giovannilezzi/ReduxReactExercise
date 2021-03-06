import React from 'react'
import { connect } from 'react-redux'
import * as action from '../Actions/AsyncAction'


let Button = ({ getPosts, channel }) => (
    <button
        onClick={() => { getPosts(channel) }}
        className="btn btn-primary btn-lg btn-block" >
        Receive Info
    </button>

);

const mapStateToProps = (state) => ({
    channel: state.ChannelsReducer.channel
})

const mapDispatchToProps = (dispatch) => ({
    getPosts: (channel) => {
        dispatch(action.fetchPosts(channel));
    }
})

Button = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)

export default Button
