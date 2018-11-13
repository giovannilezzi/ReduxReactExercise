import React from 'react'
import { connect } from 'react-redux'
import  NewsItem  from '../Components/NewsItem';

let TopNews = ({ channels, loading }) => {
    let topNews = "";
    console.log("Canale " + channels)

    if (channels) {
        console.log("if");
        topNews = channels.map((article, index) =>
            (
                <div key={`${index}`} className="row">
                    <NewsItem article={channels[index]} />
                </div>
            )
        )
    }
    if (loading) {
        topNews = <h3 className="loading-indicator">Loading ...</h3>
    }

    return (
        <div>
            {topNews}
        </div>
    )
}

const mapStateToProps = (state) => ({
    channels: state.ChannelsReducer.json,
    loading: state.ChannelsReducer.loading
})

TopNews = connect(
    mapStateToProps,
    null
)(TopNews)

export default TopNews;

