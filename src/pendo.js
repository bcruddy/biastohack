export const API_KEY = 'fd05c549-cce0-45c6-54eb-861442190eb3';
export const agentUrl = `https://pendo-dev-static.storage.googleapis.com/agent/static/${API_KEY}/pendo.js`;

export function install () {
    (function (p, e, n, d, o) {
        var v, w, x, y, z; o = p[d] = p[d] || {}; o._q = [];
        v = ['initialize', 'identify', 'updateOptions', 'pageLoad']; for (w = 0, x = v.length; w < x; ++w)(function (m) {
            o[m] = o[m] || function () {o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0)));};
        })(v[w]);
        y = e.createElement(n);
        y.async = !0;
        y.src = agentUrl;
        z = e.getElementsByTagName(n)[0]; z.parentNode.insertBefore(y, z);
    })(window, document, 'script', 'pendo');
}

export function initialize (visitorId, accountId) {
    window.pendo.initialize({
        visitor: {
            id: visitorId
        },
        account: {
            id: accountId
        },
        sanitizeUrl (url) {
            return url.replace(/http:\/\/localhost:[\d]+/, 'https://biastohack.com')
        }
    });
}

export function update (options) {
    window.pendo.updateOptions(options);
}
