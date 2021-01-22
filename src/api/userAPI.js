
export const requestUsers = async () => {
   return fetch('http://localhost:3000/data.json')
        .then(response => response.json())
        .then(res =>  res)
}

// export function getUsers(file) {
//     const rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = async function () {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             let users = JSON.parse(rawFile.responseText);
//             console.log('users : ', users);
//             //
//         }
//     }
//     rawFile.send(null);
// }