import ActionTypes from "./ActionTypes";
import axios from "axios";
import history from "../history";

function encode64(e) {
    var binaryData = e.target.result;
    console.log(binaryData)
    //Converting Binary Data to base 64
    var base64String = window.btoa(binaryData);
    return base64String
}

function decode64(base64String) {
    var image = window.atob(base64String)
    return image
}

export const receivedResponse = (obj) => ({
    type: ActionTypes.RECEIVE_RESPONSE,
    payload: {
        newValue: obj
    },
});

export const file = (obj) => ({
    type: ActionTypes.FILE,
    payload: {
        newValue: obj
    },
});

function saveImage(requestBody, f) {
    console.log("save Image")
    var url = 'http://localhost:3001/saveImage'
    return function (dispatch) {
        console.log("sono nel dispatch")
        dispatch(file(f))
        axios.post(url, JSON.stringify(requestBody))
            .then((result) => {
                const response = result.data;
                const obj = response.Response
                history.push('/Blog')
            })
            .catch((err) => {
                console.log("Errore: " + err.response.data)
            })
    };
}

export function handleFileSelect(evt) {
    var f = evt.target.files[0]; // FileList object
    console.log(f)
    var reader = new FileReader();
    var requestBody = null
    var loaded = false
    // Closure to capture the file information.
    reader.onload = (function (f) {
        return function (e) {
        /*
        var binaryData = e.target.result;
        console.log(binaryData)
        //Converting Binary Data to base 64
        var base64String = window.btoa(binaryData);
        //showing file converted to base64
        document.getElementById('base64')
            .value = base64String;
        console.log(base64String)*/
        var base64String = encode64(e)
        //var image = window.atob(base64String)
        //var image = decode64(base64String)
        requestBody = {
            Name:f.name,
            File: base64String
        }
        //console.log(image)
        saveImage(requestBody, f)
    };
    })(f)
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
}
