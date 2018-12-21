import React from 'react';

class MediaRepo extends React.Component{

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section style={{marginLeft: '250px', marginTop: '100px'}}>
                <input type="file" id="files" name="files" onChange={this.props.handleFileSelect} />
                <br/>
                <object data={this.props.files} width="800" height="400"/>
            </section>
        );
    }
}

export default MediaRepo;

