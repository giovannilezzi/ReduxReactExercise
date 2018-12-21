import React from 'react';

class ListBlog extends React.Component{

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.asyncCallAllBlogs()
    }

    render() {
        let listItems = ""
        if (this.props.blogs && !this.props.isLoading) {
            listItems =
                this.props.blogs.map((blog) =>
                    <li key={blog.Id}>
                        {blog.Corpo + blog.Titolo}
                    </li>
                )
        }
        else
            listItems = <h3 className="loading-indicator">Loading ...</h3>

        return (
            <div>
                {listItems}
            </div>
        )
    }
}

export default ListBlog;

