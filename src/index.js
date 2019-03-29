/**
 * Send http request to specific end point
 * @param {string} url - The end point url to be requested
 * @param {object} [setting={}] - Setting for ajax
 * @param {stirng} [setting.method='GET'] - ajax method
 */
function ajax (url, setting = {}) {
    if (typeof url !== 'string' || url.length <= 0) return;

    const method = {
        POST: 'POST',
        GET: 'GET',
        PUT: 'PUT',
        DELETE: 'DELETE'
    };
    const settingMethod = setting.method = setting.method || method.GET;
    const fetch = window.fetch;
    const XMLHttpRequest = window.XMLHttpRequest;
    const GET = method.GET;
    const POST = method.POST;

    if (fetch) {
        switch (settingMethod) {
        case GET:
            fetch(url);
            break;
        case POST:
            const option = {
                method: settingMethod,
                mode: ''
            };

            const crossDomain = setting.crossDomain;
            if (typeof crossDomain === 'boolean') {
                option.mode = crossDomain ? 'cors' : 'no-cors';
            } else {
                option.mode = url.indexOf(window.location.hostname) < 0 ?
                    'cors' : 'no-cors';
            }

            fetch(url, option);
            break;
        }
    } else if (XMLHttpRequest) {
        const httpReqeust = new XMLHttpRequest();

        switch (settingMethod) {
        case GET:
            httpReqeust.open(settingMethod, url);
            break;
        case POST:
            break;
        }

        httpReqeust.send();
    } else {
        const firstScriptTag = document.getElementsByTagName('script')[0];
        const imgTag = document.createElement('img');

        imgTag.style.display = 'none';
        imgTag.src = url;

        firstScriptTag.parentNode.insertBefore(imgTag, firstScriptTag);
    }
}

export default ajax;

