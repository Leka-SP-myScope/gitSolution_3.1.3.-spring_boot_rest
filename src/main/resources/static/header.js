async function loadHeader(url, header) {

    try {
        const responseUser = await fetch(url);
        const currentUser = await responseUser.json();

        let head = "";
        head += "<nav class='navbar navbar-light navbar-expand-md navigation-clean'>";
        head += "<div class='container-fluid'>";
        head += "<div class='container my-nav-container1'>";
        head += "<b><label class='text-lowercase text-center text-light' id='email-nav'>" + currentUser.email + "" +
            "</label></b>";
        head += "<label class='text-center' id='text'>with roles:</label>";
        head += "<label class='text-uppercase text-left' id='role-nav'>" + currentUser.username + "</label></div>";
        head += "<button data-toggle='collapse' class='navbar-toggler' data-target=''#navcol-1'><span class='sr-only'>" +
            "Toggle navigation</span><span class='navbar-toggler-icon'></span></button>";
        head += "<div class='collapse navbar-collapse' id='navcol-1'>";
        head += "<ul class='navbar-nav ml-auto'>";
        head += "<li class='nav-item'><a class='nav-link text-center text-secondary my-nav-link-logout' href='/login'>" +
            "Logout</a></li></ul></div></div></nav></div>";
        header.innerHTML = head;
    } catch (e) {
        console.log(e);
    }
}

loadHeader("http://localhost:8080/api/currentUser", document.querySelector('#header'));