const WebSocket = require('ws');

var socket = new WebSocket("ws://3.68.29.16:9001");
socket.onopen = function (event) {
    setInterval(() => {
        socket.send("{'p': {'x': 23.232, 'x': 23.232, 'x': 23.232},'p': {'x': 23.232, 'x': 23.232, 'x': 23.232},'p': {'x': 23.232, 'x': 23.232, 'x': 23.232}}");
    }, 33);
};

socket.onmessage = function (event) {
    console.log(event.data);
}

socket.onerror = function (err) {
    console.log(err);
}