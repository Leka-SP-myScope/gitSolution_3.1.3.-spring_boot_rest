//const test1 = document.querySelector('.thead-light tr th');

//test1.insertAdjacentText("About new USER");

document.addEventListener('DOMContentLoaded', () => {
    loadUsersInTable("http://localhost:8080/api/user", document.querySelector('#tableUsers'));
    alert("DOM loaded!");

});

async function loadUsersInTable(url, table) {
    const tableBody = table.querySelector('#bodyUsers');
    const response = await fetch(url);
    const data = await response.json();

//    Clear the table
    tableBody.innerHTML = "";

//    Populate the bodies
    for(const row of data) {
        const rowElement = document.createElement('<tr>');
        for (const cellText of row) {
            const cellElement = document.createElement('<td>');
            cellElement.textContent = cellText;
            rowElement.appendChild(cellElement);
        }
        tableBody.appendChild(rowElement);
    }

    // data.forEach((x) => {
    //     const rowElement = document.createElement('<tr>');
    //
    //
    // })
}

// fetch("http://localhost:8080/api/user")
// .then(response => {
//     if (response.ok) {
//         response.json().then(data => {
//             if (data.length > 0) {
//                 console.log(data);
//                 let temp = "";
//                 data.forEach((x) => {
//                     temp += "<tr>";
//                     temp += "<td class=\"border-left-0\">" + x.id + "</td>";
//                     temp += "<td>" + x.name + "</td>";
//                     temp += "<td>" + x.surname + "</td>";
//                     temp += "<td>" + x.age + "</td>";
//                     temp += "<td>" + x.email + "</td>";
//                     temp += "<td class=\"border-left-0\">" + x.id + "</td></tr>";
//                 });
//                 document.getElementById("bodyUsers").innerText = temp;
//             } else {
//                 console.log('Request failed with response ' + response.status + ': ' + response.statusText);
//             }
//         })
//     }
// });

loadUsersInTable("http://localhost:8080/api/user", document.querySelector('#tableUsers'));
