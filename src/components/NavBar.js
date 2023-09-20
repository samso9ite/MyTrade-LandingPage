const NavBar = () => {
    return(
        <section class="navbar-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-lg">
                       
                        <a class="navbar-brand" href="#">
                            <img src="assets/images/logo/logo.svg" alt="Logo" width="30%" />
                        </a>
                        
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTwo" aria-controls="navbarTwo" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="toggler-icon"></span>
                            <span class="toggler-icon"></span>
                            <span class="toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse sub-menu-bar" id="navbarTwo">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item active"><a class="page-scroll" href="#home">Home</a></li>
                                <li class="nav-item"><a class="page-scroll" href="#about">FAQ</a></li>
                                <li class="nav-item"><a class="page-scroll" href="#contact">Privacy </a></li>
                                <li class="nav-item"><a class="page-scroll" href="#contact">T&C</a></li>
                            </ul>
                        </div>
                        
                        <div class="navbar-btn d-none d-sm-inline-block">
                            <ul>
                                <li><a class="solid" href="#">Login</a></li>
                            </ul>
                        </div>
                    </nav> 
                </div>
            </div> 
        </div> 
    </section>

    )
}

export default NavBar;