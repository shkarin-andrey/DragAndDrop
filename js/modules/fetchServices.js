const fetchServices = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
    const response = await fetch(url, {
        method,
        headers,
        body
    })
        .then(data => data.json())
    
    return response
}

export default fetchServices