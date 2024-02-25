// Parsing params in url
function getUrlParam(param) {
    let slices = window.location.href.split('?');
    if (slices[1]) {
        let searchString = slices[1];
        let params = searchString.split('&');
        for (let i = 0; i <= params.length - 1; i++) {
            let v = params[i];
            let arr = v.split('=');
            if (arr[0] && arr[0] === param) {
                return arr[1];
            }
        }
    }
    return false;
}