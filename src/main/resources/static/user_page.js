// document.addEventListener('DOMContentLoaded', () => {
//     //loadUsersInTable("http://localhost:8080/api/user", document.querySelector('#tableUsers'));
//     //loadUsersInTable("http://localhost:8080/api/user", document.querySelector('#tableUsers'));
//     //alert("DOM loaded!");
// });

async function loadUsersInTable(url, table) {
    const tableBody = table.querySelector('#bodyUsers');
    const tableHead = table.querySelector('#headUsers');

    try {
        const response = await fetch(url);
        const data = await response.json();

        //Create tableHead
        let head = "";
        head += "<tr>";
        head += "<th class='border-left-0'>ID</th>";
        head += "<th>First Name</th>";
        head += "<th>LastName</th>";
        head += "<th>Age</th>";
        head += "<th>Email</th>";
        head += "<th class='border-right-0'>Role</th>";
        head += "</tr>";

        document.getElementById("headUsers").innerHTML = head;

        //Clear the table
        tableBody.innerHTML = "";

        //Populate the body of table
        let row = "";
        data.forEach((user) => {
            row += "<tr>";
            row += "<td class='border-left-0'>" + user.id + "</td>";
            row += "<td>" + user.name + "</td>";
            row += "<td>" + user.surname + "</td>";
            row += "<td>" + user.age + "</td>";
            row += "<td>" + user.email + "</td>";
            row += "<td class='border-right-0'>";
            user.roles.forEach((role) => {
                row += "<span>" + role.role.substring(5) + " " + "</span>";
            });
            row += "</td></tr>";
        });
        document.getElementById('bodyUsers').innerHTML = row;
    } catch (e) {
        console.log(e);
    }
}

loadUsersInTable("http://localhost:8080/api/user", document.querySelector('#tableUsers'));
