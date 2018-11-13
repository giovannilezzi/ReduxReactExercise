import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../Actions'

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

const mapDispatchToProps = {
    getPosts: fetchPosts
}

Button = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)

export default Button;
