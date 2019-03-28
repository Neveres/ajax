/**
 * Send http request to specific end point
 * @param {string} endPoint - The end point to be requested
 * @param {object} setting - Setting for ajax
 * @param {stirng} [setting.method=GET] - ajax method
 */
function ajax (endPoint, setting) {
    if (typeof endPoint !== 'string') return;

    setting = setting = {};
    const method = {
        POST: 'POST',
        GET: 'GET'
    };
    const settingMethod = setting.method = setting.method || method.GET;

    switch (settingMethod) {
    case method.GET:
        const firstScriptNode = document.getElementsByTagName('script')[0];
        const imgTag = document.createElement('img');

        imgTag.style.display = 'none';
        imgTag.src = endPoint;

        firstScriptNode.parentNode.insertBefore(imgTag, firstScriptNode);
        break;
    case method.POST:
        break;
    }
}

export default ajax;

