document.addEventListener('DOMContentLoaded', () => {
    //loadUsersInTable("http://localhost:8080/api/user", document.querySelector('#tableUsers'));
    //loadUsersInTable("http://localhost:8080/api/user", document.querySelector('#tableUsers'));
    //alert("DOM loaded!");
});

async function loadUsersInTable(url, table) {
    const tableBody = table.querySelector('#bodyUsers');
    const response = await fetch(url);
    const data = await response.json();

//    Clear the table
    tableBody.innerHTML = "";

//    Populate the body of table
    let temp = "";
    data.forEach((user) => {
        temp += "<tr>";
        temp += "<td class=\"border-left-0\">" + user.id + "</td>";
        temp += "<td>" + user.name + "</td>";
        temp += "<td>" + user.surname + "</td>";
        temp += "<td>" + user.age + "</td>";
        temp += "<td>" + user.email + "</td>";
        temp += "<td class=\"border-left-0\">" + user.id + "</td></tr>";
    });

    data.forEach((user) => {
        temp += "<tr>";
        temp += "<td class=\"border-left-0\">" + user.id + "</td>";
        temp += "<td>" + user.name + "</td>";
        temp += "<td>" + user.surname + "</td>";
        temp += "<td>" + user.age + "</td>";
        temp += "<td>" + user.email + "</td>";
        temp += "<td class=\"border-left-0\">" + user.id + "</td></tr>";
    });
    document.getElementById('bodyUsers').innerHTML = temp;
}

loadUsersInTable("http://localhost:8080/api/user", document.querySelector('#tableUsers'));
