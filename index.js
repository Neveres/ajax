(function (exports) {
/**
 * Send http request to specific end point
 * @param {string} url - The end point url to be requested
 * @param {object} [setting={}] - Setting for ajax
 * @param {stirng} [setting.method='GET'] - ajax method
 * @param {object} [handlers={}] - Handlers for ajax
 */
    function ajax (url, setting, handlers) {
        if (typeof url !== 'string' || url.length <= 0) return;

        if (arguments.length === 2) {
            if (typeof setting.success === 'function') {
                handlers = setting;
                setting = {};
            }
        }

        setting = setting || {};

        const method = {
            POST: 'POST',
            GET: 'GET',
            PUT: 'PUT',
            DELETE: 'DELETE'
        };
        const settingMethod = (setting.method = setting.method || method.GET);
        const fetch = window.fetch;
        const XMLHttpRequest = window.XMLHttpRequest;
        const GET = method.GET;
        const POST = method.POST;
        const FUNCTION = 'function';

        setting.mechanism = setting.mechanism || 'fetch';
        if (fetch && setting.mechanism === 'fetch') {
            switch (settingMethod) {
            case GET:
                fetch(url)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        if (typeof handlers.success === FUNCTION) {
                            handlers.success(data);
                        }
                    })
                    .catch(function (err) {
                        if (typeof setting.error === FUNCTION) {
                            handlers.error(err);
                        }
                    });
                break;
            case POST:
                const option = {
                    method: settingMethod,
                    headers: setting.headers,
                    mode: '',
                    body: setting.data
                };

                const crossDomain = setting.crossDomain;
                if (typeof crossDomain === 'boolean') {
                    option.mode = crossDomain ? 'cors' : 'no-cors';
                } else {
                    option.mode =
          url.indexOf(window.location.hostname) < 0 ? 'cors' : 'no-cors';
                }

                fetch(url, option)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        if (typeof handlers.success === FUNCTION) {
                            handlers.success(data);
                        }
                    })
                    .catch(function (err) {
                        if (typeof setting.error === FUNCTION) {
                            handlers.error(err);
                        }
                    });
                break;
            }
        } else if (XMLHttpRequest || setting.mechanism === 'XMLHttpRequest') {
            const httpReqeust = new XMLHttpRequest();

            switch (settingMethod) {
            case GET:
                httpReqeust.onreadystatechange = function () {
                    if (typeof handlers.success === FUNCTION
                        && httpReqeust.readyState == XMLHttpRequest.DONE ) {
                        handlers.success(httpReqeust.responseText);
                    }
                };
                httpReqeust.open(settingMethod, url);
                httpReqeust.send();
                break;
            case POST:
                httpReqeust.onreadystatechange = function () {
                    if (typeof handlers.success === FUNCTION
                    && httpReqeust.readyState == XMLHttpRequest.DONE ) {
                        handlers.success(httpReqeust.responseText);
                    }
                };
                httpReqeust.open(settingMethod, url);
                httpReqeust.send(setting.data);
                break;
            }
        } else {
            const firstScriptTag = document.getElementsByTagName('script')[0];
            const imgTag = document.createElement('img');

            imgTag.style.display = 'none';
            imgTag.src = url;

            firstScriptTag.parentNode.insertBefore(imgTag, firstScriptTag);
        }
    }

    exports.ajax = ajax;
})(window);

