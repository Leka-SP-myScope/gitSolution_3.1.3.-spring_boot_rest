// async function getCurrentUser(url) {
//     try {
//         const response = await fetch(url);
//         const dataUser = await response.json();
//
//         console.log(dataUser);
//
//         dataUser.forEach((user) => {
//             console.log(user.email);
//             //console.log(user.roles[user].role);
//         });
//     } catch (e) {
//         console.log(e);
//     }
// }


let currentUser = "";

async function getCurrentUser(urlUser) {
    let response = await fetch(urlUser);
    if (response.ok) {
        currentUser = await response.json();
        console.log("CurrentUser: = " + currentUser);
        return currentUser;
    } else {
        alert("HTTP error:" + response.status);
    }

    console.log(currentUser);
}

console.log(currentUser.toString());
console.log(typeof currentUser);
getCurrentUser("http://localhost:8080/api/currentUser");

async function loadHeader(url, header) {
    //let currentUser = getCurrentUser(url);
    // let response = await fetch("http://localhost:8080/api/currentUser");
    // if (response.ok) {
    //     let currentUser = await response.json();
    // } else {
    //     alert("HTTP error:" + response.status);
    // }
    //
    console.log(currentUser);



    let userEmail = typeof currentUser;
    console.log(userEmail);

    //let userRole = currentUser.roles[0].role;
    //console.log(userRole);

    //const currentUser = await fetch("http://localhost:8080/api/currentUser");
    //const user = await currentUser.json();
    //console.log(currentUser.email);
    //console.log(currentUser.role);

    //let user = JSON.parse(currentUser);
    //console.log(JSON.parse(currentUser));
    //alert(currentUser);

    // currentUser.forEach((user) => {
    //     console.log(user.email);
    // });


    try {
        const response = await fetch(url);
        const data = await response.json();

        let head = "";
        head += "<nav class='navbar navbar-light navbar-expand-md navigation-clean'>";
        head += "<div class='container-fluid'>";
        head += "<div class='container my-nav-container1'>";
        //head += "<b><label class='text-lowercase text-center text-light' id='email-nav' th:text='${#authentication.getPrincipal().getEmail()}'>admin@mail.ru</label></b>";
        head += "<b><label class='text-lowercase text-center text-light' id='email-nav'>" +  currentUser.email + "</label></b>";
        head += "<label class='text-center' id='text'>with roles:</label>";
        head += "<label class='text-uppercase text-left' id='role-nav' text='${#authentication.getPrincipal().getUsername()}'>admin</label></div>";
        head += "<button data-toggle='collapse' class='navbar-toggler' data-target=''#navcol-1'><span class='sr-only'>Toggle navigation</span><span class='navbar-toggler-icon'></span></button>";
        head += "<div class='collapse navbar-collapse' id='navcol-1'>";
        head += "<ul class='navbar-nav ml-auto'>";
        head += "<li class='nav-item'><a class='nav-link text-center text-secondary my-nav-link-logout' href='/login'>Logout</a></li></ul></div></div></nav></div>";
        header.innerHTML = head;
    } catch (e) {
        console.log(e);
    }
}

//getCurrentUser("http://localhost:8080/api/currentUser");
loadHeader("http://localhost:8080/api/user", document.querySelector('#header'));

