import { connect } from 'react-redux';
import * as actions from '../Actions/BlogAction';
import ListBlog from "../Components/ListBlog";

const mapStateToProps = (state) => {
    return {
        blogs: state.BlogReducer.blogs,
        isLoading: state.BlogReducer.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        asyncCallAllBlogs: () => {
            dispatch(actions.asyncCallAllBlogs());
        }
    }
}

const ListBlogContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListBlog);

export default ListBlogContainer
