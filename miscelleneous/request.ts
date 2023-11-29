

export async function makeRequest(url: string, method: string, data: object){
    //used to make an http request and returns json
    if (method === 'GET'){
        const res = await fetch(url, {method: method})
        return await res.json()
    }else {
        const res = await fetch(url, {method: method, body: JSON.stringify(data)})
        return await res.json()
    }
}
