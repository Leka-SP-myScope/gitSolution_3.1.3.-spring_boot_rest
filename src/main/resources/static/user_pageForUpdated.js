//const test1 = document.querySelector('.thead-light tr th');

//test1.insertAdjacentText("About new USER");

fetch("http://localhost:8080/api/user")
.then(response => {
    if (response.ok) {
        response.json().then(data => {
            if (data.length > 0) {
                console.log(data);
                let temp = "";
                data.forEach((x) => {
                    temp += "<tr>";
                    temp += "<td class=\"border-left-0\">" + x.id + "</td>";
                    temp += "<td>" + x.name + "</td>";
                    temp += "<td>" + x.surname + "</td>";
                    temp += "<td>" + x.age + "</td>";
                    temp += "<td>" + x.email + "</td>";
                    temp += "<td class=\"border-left-0\">" + x.id + "</td></tr>";
                });
                document.getElementById("data").innerText = temp;
            } else {
                console.log('Request failed with response ' + response.status + ': ' + response.statusText);
            }
        })
    }
});
