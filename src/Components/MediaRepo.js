import React from 'react';
import Dropzone from 'react-dropzone';
import Request from 'superagent';
import axios from 'axios';
import $ from 'jquery';

class MediaRepo extends React.Component{

    constructor(props) {
        super(props)
        console.log(this.props)
    }

    getBase64() {
        const reader = new FileReader();
        reader.onload = (function ()
            {
                return function (e)
                {
                    var binaryData = e.target.result;
                    console.log(binaryData)
                    //Converting Binary Data to base 64
                    var base64String = window.btoa(binaryData);
                    //showing file converted to base64
                    document.getElementById('base64')
                        .value = base64String;
                    console.log(base64String)
                    var image = window.atob(base64String)
                    console.log(image)
                };
        });
    }

    /*
    handleFileSelect(evt)
    {
        var f = evt.target.files[0]; // FileList object
        console.log(f)
        var reader = new FileReader();
        var requestBody = null
        var loaded = false
        // Closure to capture the file information.
        reader.onload = (function (f)
        {return function (e)
            {
                var binaryData = e.target.result;
                console.log(binaryData)
                //Converting Binary Data to base 64
                var base64String = window.btoa(binaryData);
                //showing file converted to base64
                document.getElementById('base64')
                    .value = base64String;
                console.log(base64String)
                var image = window.atob(base64String)
                requestBody = {
                    Name:f.name,
                    File: base64String
                }
                this.props.dispatch(actions.asyncCall(requestBody))
                console.log(image)
                console.log(requestBody)
                loaded = true
            };
        })(f)
        // Read in the image file as a data URL.
        reader.readAsBinaryString(f);
    }
    */
    onDrop = (event) => {
        var files = event.target.files[0]
        var reader = new FileReader();
        var requestBody = null
        reader.onload = (function ()
        {
            return function (e)
            {
                var binaryData = e.target.result;
                //Converting Binary Data to base 64
                this.base64String = window.btoa(binaryData);
                //showing file converted to base64
                console.log(this.base64String)
                requestBody = {
                    Name:files[0].name,
                    File: this.base64String
                }
                alert('File converted to base64 successfuly!\nCheck in Textarea');
                console.log(requestBody)

            };
        })();
        // Read in the image file as a data URL.
        var url = 'http://localhost:3001/saveImage'
        //var objArr = [];

        //objArr.push({"name": files[0].name});

        //JSON obj
        //formData.append('objArr', JSON.stringify( objArr ))
        //for (var pair of formData.entries()) {
           // console.log(pair[0]+ ', ' + pair[1]);
       // }
        $.ajax({
            url: url,
            type:"POST",
            processData:false,
            contentType: false,
            data: JSON.stringify(requestBody),
            success: function (data) {
                console.log(data)
                alert(data);
            }
        });
        console.log(files)
    }

    render() {
        return (
            <section style={{marginLeft: '250px', marginTop: '100px'}}>
                <input type="file" id="files" name="files" onChange={this.props.handleFileSelect} />
                <br/>
                <textarea id="base64" rows="5"></textarea>
            </section>
        );
    }
}

export default MediaRepo;

