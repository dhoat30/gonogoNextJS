async function getMenu(menuID) {
    let response
    await fetch(`${process.env.url}/wp-json/webduel/v1/menu?id=${menuID}`)
        .then(res => res.json())
        .then(res => response = res)
        .catch(err => response = err)
    return response
}

export default getMenu