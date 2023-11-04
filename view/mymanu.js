var local_name = '362049dad35d9cef427de57d206b8071'; //FollowTheMoney
// mynavbar
var myNav = $("#mynavbar");

var nav_code = '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">';
    nav_code += '<a href="../index.html"><img src="../img/static/my-logo-gold.png" alt="Girl in a jacket" class="mr-3" style="max-height: 54px;"></img></a>';
    nav_code += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#responsive2" aria-controls="responsive2" aria-expanded="false" aria-label="Toggle navigation">';
    nav_code += '<span class="navbar-toggler-icon"></span>';
    nav_code += '</button>';
    nav_code += '<div class="collapse navbar-collapse" id="responsive2">'; 
    nav_code += '<a class="navbar-brand" href="welcome.html">My Block</a>';
    nav_code += '<a class="navbar-brand" href="portfolio.html">Portfolio</a>';
    
    nav_code += '<ul class="navbar-nav mr-auto mt-2 mt-lg-0">';
    nav_code += '<li class="nav-item dropdown">';
    nav_code += '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown link</a>';
    nav_code += '<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">';
    nav_code += '<a class="dropdown-item" href="#">Action</a>';
    nav_code += '<a class="dropdown-item" href="#">Another action</a>';
    nav_code += '<a class="dropdown-item" href="#">Something else here</a>';
    nav_code += '</div>';
    nav_code += '</li>';
    nav_code += '</ul>';

    nav_code += '<div>';
    nav_code += '<ul class="navbar-nav mr-auto mt-2 mt-lg-0">';
    nav_code += '<li class="nav-item dropdown">';
    nav_code += '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+localStorage.getItem(local_name)+'</a>';
    nav_code += '<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">';
    nav_code += '<a class="dropdown-item" href="#">Action</a>';
    nav_code += '<a class="dropdown-item" href="#">Another action</a>';
    nav_code += '<a id="user_log_out" class="dropdown-item" href="#"><i class="fa fa-sign-out text-danger" aria-hidden="true"></i>Logout</a>';
    nav_code += '</div>';
    nav_code += '</li>';
    nav_code += '</ul>';
    nav_code += '</div>';

    nav_code += '</div>';
    nav_code += '</nav>';

    myNav.append(nav_code);


    $("#user_log_out").click(function(){
      localStorage.clear();
      window.location.href = 'login.html';
    });

    
        
        
      
