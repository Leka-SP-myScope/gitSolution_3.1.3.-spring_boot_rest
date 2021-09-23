// alert("It's Header");

let header = document.getElementById("header");
    let head = "";
    head += "<nav class='navbar navbar-light navbar-expand-md navigation-clean'>";
    head += "<div class='container-fluid'>";
    head += "<div class='container my-nav-container1'>";
    head += "<b><label class='text-lowercase text-center text-light' id='email-nav' th:text='${#authentication.getPrincipal().getEmail()}'>admin@mail.ru</label></b>";
    head += "<label class='text-center' id='text'>with roles:</label>";
    head += "<label class='text-uppercase text-left' id='role-nav' text='${#authentication.getPrincipal().getUsername()}'>admin</label></div>";
    head += "<button data-toggle='collapse' class='navbar-toggler' data-target=''#navcol-1'><span class='sr-only'>Toggle navigation</span><span class='navbar-toggler-icon'></span></button>";
    head += "<div class='collapse navbar-collapse' id='navcol-1'>";
    head += "<ul class='navbar-nav ml-auto'>";
    head += "<li class='nav-item'><a class='nav-link text-center text-secondary my-nav-link-logout' href='/login'>Logout</a></li></ul></div></div></nav></div>";




header.innerHTML = head + "This is a header!";


// <div th:fragment="header" th:remove="tag">
//     <nav class="navbar navbar-light navbar-expand-md navigation-clean">
//     <div class="container-fluid">
//          <div class="container my-nav-container1">
//                  <b><label class="text-lowercase text-center text-light" id="email-nav" for="email" th:text="${#authentication.getPrincipal().getEmail()}">user@mail.ru</label></b>
//                 <label class="text-center" id="text">with roles:</label>
//                  <label class="text-uppercase text-left" id="role-nav" for="role" th:text="${#authentication.getPrincipal().getUsername()}">user</label>
//          </div>
//          <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
//              <div class="collapse navbar-collapse" id="navcol-1">
//                  <ul class="navbar-nav ml-auto">
//                      <li class="nav-item"><a class="nav-link text-center text-secondary my-nav-link-logout" href="/login">Logout</a></li>
//                  </ul>
//              </div>
//          </div>
//      </nav>
// </div>