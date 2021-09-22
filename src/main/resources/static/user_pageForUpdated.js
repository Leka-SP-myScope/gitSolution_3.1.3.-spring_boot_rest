document.addEventListener('DOMContentLoaded', () => {
    //loadUsersInTable("http://localhost:8080/api/user", document.querySelector('#tableUsers'));
    //loadUsersInTable("http://localhost:8080/api/user", document.querySelector('#tableUsers'));
    //alert("DOM loaded!");
});

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

//    Clear the table
        tableBody.innerHTML = "";

//    Populate the body of table
        let row = "";

        console.log(data);
        console.log(data[2].roles[0].role);
        console.log(data[2].roles[0].role);

        //Working loop-1
        // for (let i = 0; i < data.length; i++) {
        //     row += "<tr>";
        //     row += "<td class='border-left-0'>" + data[i].id + "</td>";
        //     row += "<td>" + data[i].name + "</td>";
        //     row += "<td>" + data[i].surname + "</td>";
        //     row += "<td>" + data[i].age + "</td>";
        //     row += "<td>" + data[i].email + "</td>";
        //     row += "<td class='border-right-0'>" + data[i].roles[0].role.substring(5) + "</td></tr>";
        // }

        //Working loop-2
        // for (let user of data) {
        //     row += "<tr>";
        //     row += "<td class='border-left-0'>" + user.id + "</td>";
        //     row += "<td>" + user.name + "</td>";
        //     row += "<td>" + user.surname + "</td>";
        //     row += "<td>" + user.age + "</td>";
        //     row += "<td>" + user.email + "</td>";
        //     row += "<td class='border-right-0'>" + user.roles[0].role.substring(5) + "</td></tr>";
        // }

        //Working loop-3
        // data.forEach((user) => {
        //     row += "<tr>";
        //     row += "<td class='border-left-0'>" + user.id + "</td>";
        //     row += "<td>" + user.name + "</td>";
        //     row += "<td>" + user.surname + "</td>";
        //     row += "<td>" + user.age + "</td>";
        //     row += "<td>" + user.email + "</td>";
        //     row += "<td class='border-right-0'>" + user.roles[0].role.substring(5) + "</td></tr>";
        // });

        //Working loop-4
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
