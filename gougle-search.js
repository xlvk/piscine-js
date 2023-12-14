async function queryServers(serverName, q) {
    let url1 = '/' + serverName + "?q=" + q
    let url2 = '/' + serverName + "_backup?q=" + q
    let a = getJSON(url1)
    let b = getJSON(url2)

    return await Promise.race([a, b])
}


async function gougleSearch(q) {
    var timeout = new Promise((resolve) =>
        setTimeout(resolve, 80, Error('timeout'))
    );
    var web = queryServers('web', q),
        image = queryServers('image', q),
        video = queryServers('video', q);

    // get the check if timeout beats the requests
    const res = await Promise.race([timeout, Promise.all([web, image, video])]);
    if (res instanceof Error) {
        throw res;
    }
    return { image: res[1], video: res[2], web: res[0] };
}