const HttpMethods = {
    get: "GET",
};

//fetch api

export class HttpService {
    static get(url) {
        const request = HttpService.createRequest();
        request.open(HttpMethods.get, url);

        return HttpService.toPromiseAndSend(request);
    }

    static toPromiseAndSend(request) {
        return new Promise(init);

        function init(resolve, reject) {
            request.onreadystatechange = () => {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        setTimeout(() => resolve(request.responseText), 400)
                    } else {
                        reject("Error loading page\n");
                    }
                }
            };
            request.send();
        }
    }

    static createRequest() {
        return new XMLHttpRequest();
    }
}
