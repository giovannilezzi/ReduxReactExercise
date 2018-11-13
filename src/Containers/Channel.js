import React from 'react'
import { connect } from 'react-redux'
import { getChannel} from '../Actions'

let Channel = ({ channelName, channelString, onClick, active }) => (
    <div  className=" col-lg-2 col-md-4 col-sm-6 ">
        <div className="channel-button" onClick={onClick}
             style={{ backgroundColor: active === channelString ? 'orange' : '' }}>
            <p>{channelName}</p>
        </div>
    </div>
)


const mapStateToProps = (state) => ({
    active: state.ChannelsReducer.channel
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        console.log('ciao');
        dispatch(getChannel(ownProps.channelString));
    }
})

Channel = connect(
    mapStateToProps,
    mapDispatchToProps
)(Channel)

export default Channel;
