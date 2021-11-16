async function loadUsersInTableAllUsers(url, table) {
    const tableBody = table.querySelector('#bodyAllUsers');
    const tableBodyNewUser = table.querySelector('#bodyNewUser');
    const tableHead = table.querySelector('#headAllUsers');

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
        head += "<th>Role</th>";
        head += "<th>Edit</th>";
        head += "<th class='border-right-0'>Delete</th>";
        head += "</tr>";

        document.getElementById("headAllUsers").innerHTML = head;

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
            row += "<td>";
            user.roles.forEach((role) => {
                row += "<span>" + role.role.substring(5) + " " + "</span>";
            });
            //row += "<td>" + "<button id='btnEditModal' class='btn btn-info' type='button'>Edit</button>" + user.id + "</td>";
            row += "<td>" + "<button id='btnEditModal' class='btn btn-info' type='button'>Edit</button>" + "</td>";
            row += "<td class='border-right-0'>" + "<button id='btnDeleteModal' class='btn btn-danger' type='button'>Delete</button>" + "</td>";
            row += "</td></tr>";
        });
        document.getElementById('bodyAllUsers').innerHTML = row;

        //Populate the body of tableNewUser
        let rowNewUser = "";
        rowNewUser += "<tr>";
        rowNewUser += "<td id='panel-add-new-user'>";
        rowNewUser += "<div class='col-4 offset-4'>";
        rowNewUser += "<div class='row'>";
        rowNewUser += "<div class='col'>";
        rowNewUser += "<form class='text-center' action='/admin/users' method='post'>" +
            "<div class='form-group'><label id='labelFirstName' for='name'><strong>First name</strong></label><input class='form-control' type='text' id='name' name='name' placeholder='First name' required=''></div>" +
            "<div class='form-group'><label id='labelLastName' for='surname'><strong>Last name</strong></label><input class='form-control' type='text' id='surname' name='surname' placeholder='Last name' required=''></div>" +
            "<div class='form-group'><label id='labelAge' for='age'><strong>Age</strong></label><input class='form-control' type='number' id='age' name='age' placeholder='Age' required=''></div>" +
            "<div class='form-group'><label id='labelEmail' for='email'><strong>Email</strong></label><input class='form-control' type='email' id='email' placeholder='Email' name='email' required=''></div>" +
            "<div class='form-group'><label id='password' for='password'><strong>Password</strong></label><input class='form-control' type='password' id='password1' name='password' placeholder='Password' required=''></div>" +
            "<div class='form-group'><label id='role' for='role'><strong>Role</strong></label><select class='form-control' multiple='multiple' name='rolesNameList'>" +
            "<option>ADMIN</option> " +
            "<option>USER" +
            "</option></select></div>" +
            "<button class='btn btn-success' type='submit'>Add new user</button>" +
            "</form>";
        rowNewUser += "</div></div></div></td></tr>";
        document.getElementById('bodyNewUser').innerHTML = rowNewUser;
    } catch (e) {
        console.log(e);
    }
}

async function loadUsersInTable(url, table) {
    const tableBody = table.querySelector('#bodyAboutUser');
    const tableHead = table.querySelector('#headAboutUser');

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

        document.getElementById("headAboutUser").innerHTML = head;

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
        document.getElementById('bodyAboutUser').innerHTML = row;
    } catch (e) {
        console.log(e);
    }
}
const buttonDelete = document.querySelector('#btnDeleteModal');
function deleteUsersInTable(url, table) {
    //const tableBody = table.querySelector('#bodyAllUsers');

    //const buttonDelete = document.querySelector('#btnDeleteModal');
    //const url1 = "http://localhost:8080/api/users/";

    function deleteUser() {
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => location.reload());
    }
    buttonDelete.addEventListener('click', deleteUser);

    // try {
    //     // const response = await fetch(url);
    //     // const data = await response.json();
    //
    //     //Create button DELETE
    //
    //     const buttonDelete = document.querySelector('#btnDeleteModal');
    //     //const url1 = "http://localhost:8080/api/users/";
    //
    //     function deleteUser() {
    //         fetch(url, {
    //             method: 'DELETE',
    //         })
    //             .then(res => res.json())
    //             .then(() => location.reload());
    //     }
    //     buttonDelete.addEventListener('click', deleteUser);
    // } catch (e) {
    //     console.log(e);
    // }
}




loadUsersInTable("http://localhost:8080/api/users", document.querySelector('#tableAboutUser'));
loadUsersInTableAllUsers("http://localhost:8080/api/users", document.querySelector('#tableAllUsers'));
deleteUsersInTable("http://localhost:8080/api/users/25", document.querySelector('#tableAllUsers'));