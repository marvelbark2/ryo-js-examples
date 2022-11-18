import type { WebSocket } from "uwebsockets.js";
export default {
    open: (ws: WebSocket) => {
        console.log('A WebSocket connected!');
    },
    message: (ws: WebSocket, message: string, isBinary: boolean) => {
        /* Ok is false if backpressure was built up, wait for drain */
        let ok = ws.send(message, isBinary);
    },
}