"use strict";
exports.__esModule = true;
var express = require("express");
var socketio = require("socket.io");
var http = require("http");
var app = express();
var server = http.createServer(app);
var io = socketio(server);
app.use(express.static('./public'));
app.get('/messages', function (req, res) {
    console.log(req.query);
    res.send('Messages will be here!');
});
io.on('connection', function (socket) {
    console.log('connected to our socket');
    socket.on('message', function (message) {
        console.log(message);
    });
});
exports["default"] = {
    start: function (port) {
        server.listen(port, function () {
            console.log("OUR APP IS RUNNING ON PORT:: " + port);
        });
    }
};
//# sourceMappingURL=app.js.map