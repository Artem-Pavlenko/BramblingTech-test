export function fetchUsers(file) {
    let users
    const rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = async function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            users = JSON.parse(rawFile.responseText);
            console.log('users : ', users);
            return await JSON.parse(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

export const requestUsers = async () => {
    fetch('http://localhost:3000/data.json')
        .then(response => response.json())
        .then(res => {
            return res
        })
}