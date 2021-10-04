
import WebSocket from 'ws';
const url = 'wss://ws6.blitzortung.org:3000/'
const ws = new WebSocket(url)
let ws_sendTimer


ws.onopen = function () {
    ws.send('{"time":5}');
    /* ws_sendTimer = setInterval(function () {
        ws.send('{92}');
    }, 60000); */
}


ws.onmessage = function (evt) {
    const Strike = JSON.parse(evt.data)
    if (Strike.delay > 8) {

        console.log('Strike:', Strike.delay)
    }
    // console.log('Strike:', Strike.lon)
}
