import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import RateCalculator from "../components/RateCalculator"
import Testimonial from "../components/Testimonial"

const Home = () => {

    return(
        <>
        <NavBar />
            <section id="home" class="slider_area">
                <div id="carouselThree" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselThree" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselThree" data-slide-to="1"></li>
                        <li data-target="#carouselThree" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="slider-content">
                                            <h1 class="title">Digital Trade Made Easy.</h1>
                                            <p class="text">With a blink, you trade and get paid. Trading at your convenince is our motto, and we deliver this whenever, wherever.</p>
                                            <ul class="slider-btn rounded-buttons">
                                                <li><a class="main-btn rounded-one">GET STARTED</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div class="slider-image-box d-none d-lg-flex align-items-end">
                                <div class="slider-image"> 
                                    <img src="assets/images/carousel/slider1.png" alt="Hero" style={{marginTop:'-30px'}} />
                                </div> 
                            </div>
                        </div> 

                        <div class="carousel-item">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="slider-content">
                                            <h1 class="title">Crafted to make you Profit.</h1>
                                            <p class="text">We give the best exchange/sale rates, all at your convenience. Trade with us and get the best deals.</p>
                                            <ul class="slider-btn rounded-buttons">
                                                <li><a class="main-btn rounded-one" >GET STARTED</a></li>
                                            </ul>
                                        </div> 
                                    </div>
                                </div> 
                            </div> 
                            <div class="slider-image-box d-none d-lg-flex align-items-end">
                                <div class="slider-image">
                                    <img src="assets/images/carousel/winner.png" alt="Hero" />
                                </div> 
                            </div> 
                        </div> 

                        <div class="carousel-item">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="slider-content">
                                            <h1 class="title">Instant Transactions, No Delays.</h1>
                                            <p class="text">Allow us to do the work, while you sit back and relax. And you get your profit within no time at all.</p>
                                            <ul class="slider-btn rounded-buttons">
                                                <li><a class="main-btn rounded-one">GET STARTED</a></li>
                                            
                                            </ul>
                                        </div> 
                                    </div>
                                </div> 
                            </div>
                            <div class="slider-image-box d-none d-lg-flex align-items-end">
                                <div class="slider-image">
                                    <img src="assets/images/carousel/bitcoin_new-.png" alt="Hero"  style={{marginTop:'-35rem !important'}} />
                                </div> 
                            </div>
                        </div> 
                    </div>

                    <a class="carousel-control-prev" href="#carouselThree" role="button" data-slide="prev">
                        <i class="lni lni-arrow-left"></i>
                    </a>
                    <a class="carousel-control-next" href="#carouselThree" role="button" data-slide="next">
                        <i class="lni lni-arrow-right"></i>
                    </a>
                </div>
            </section>

            <section id="services" class="features-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-10">
                            <div class="section-title text-center pb-10">
                                <h3 class="title">Services We Provide</h3>
                                <p class="text">Stop wasting time, looking for the perfect trading platform, with the best exchange rates, and fastest transaction times, we are here to do all that and more. Your Happiness is guaranteed!</p>
                            </div> 
                        </div>
                    </div> 
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-7 col-sm-9" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div class="single-features mt-40">
                                <div class="features-title-icon d-flex justify-content-between">
                                    <h4 class="features-title"><a>Trade BTC, Altcoin..</a></h4>
                                    <div class="features-icon">
                                        <i class="fab fa-bitcoin"></i>
                                        <img class="shape" src="assets/images/template-images/f-shape-1.svg" alt="Shape" />
                                    </div>
                                </div>
                                <div class="features-content">
                                    <p class="text">Trading of all digital currencies are supported. Just indicate what type of coin you want to exchange, the amount, and confirm the amount. After confirmation, and approval, your coin will appear in your wallet.</p>
                                    <a  class="features-btn">LEARN MORE</a>
                                </div>
                            </div> 
                        </div>

                        <div class="col-lg-4 col-md-7 col-sm-9" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div class="single-features mt-40">
                                <div class="features-title-icon d-flex justify-content-between">
                                    <h4 class="features-title"><a href="#">Redeem Cards</a></h4>
                                    <div class="features-icon">
                                        <i class="lni lni-credit-cards"></i>
                                        <img class="shape" src="assets/images/template-images/f-shape-1.svg" alt="Shape" /> 
                                    </div>
                                </div>
                                <div class="features-content">
                                    <p class="text">Redeem your gift cards, within the blink of an eye. Just upload the card, enter and confirm the value of your card, and submit it. After approval, we would give the best rate and credit you immediately.</p>
                                    <a class="features-btn">LEARN MORE</a>
                                </div>
                            </div> 
                        </div>

                        <div class="col-lg-4 col-md-7 col-sm-9" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                            <div class="single-features mt-40">
                                <div class="features-title-icon d-flex justify-content-between">
                                    <h4 class="features-title"><a href="#">Mail <br /> Transfer</a></h4>
                                    <div class="features-icon">
                                        <i class="fas fa-money-check-alt"></i>
                                        <img class="shape" src="assets/images/template-images/f-shape-1.svg" alt="Shape" /> 
                                    </div>
                                </div>
                                <div class="features-content">
                                    <p class="text">Log in and navigate to Pay Bills and People, then select Pay People, and go to Send Money. Enter the recipient's name, email address or mobile phone number, memo, and the amount to send. Hit “Send Money” to complete the transaction.</p>
                                    <a class="features-btn" >LEARN MORE</a>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div> 
            </section>

            <section id="portfolio" class="portfolio-area portfolio-four pb-100" style={{backgroundColor: 'white'}}>
                <div class="container">
                    <div class="row justify-content-center row animate__animated  animate__fadeIn delay-1m">
                        <div class="col-lg-6 col-md-10">
                            <div class="section-title text-center pb-10">
                                <h3 class="title">Buy & Sell Giftcards</h3>
                                <p class="text">Stop wasting time and energy in trading and exchanging. We provide the best of user experience. Our trading platform is simple and easy to use, all designed to work at your comfort.</p>
                            </div> 
                        </div>
                    </div> 
                    <div class="row mt-5" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                        <div class="col-12 text-center">
                            <img src="assets/images/template-images/giftcards.png" class="img-responsive service-img" alt="" />
                        </div>
                    </div> 
                </div> 
            </section>

            <RateCalculator />
            <section id="about" class="about-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="faq-content mt-45">
                                <div class="about-title">
                                    <h4 class="title mt-3">Frequently Asked Questions <br/> About Our Services</h4>
                                </div>
                                <div class="about-accordion">
                                    <div class="accordion" id="accordionExample">
                                        <div class="card">
                                            <div class="card-header" id="headingOne">
                                                <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">What is MyTrade?</a>
                                            </div>
            
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <p class="text">
                                                        MyTrade is a simple designed exchange platform, that solely focuses on helping customer, buy or sell their digital assets, with utmost comfort.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingTwo">
                                                <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseTwo"
                                                    aria-expanded="false" aria-controls="collapseTwo">How Easy Is It To Trade?</a>
                                            </div>
                                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <p class="text">
                                                        Our platform is built to be extremely usable and flexible. Easy enough for a noob without extra knowledge how to trade or buy. All you have to do is, simply login to your dashboard, go to the coins section and provide the needed information. Once you submit, our response is just a few seconds away.
                                                    </p>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="card">
                                            <div class="card-header" id="headingThree">
                                                <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseThree"
                                                    aria-expanded="false" aria-controls="collapseThree">Can I Buy Airtime & Data From My Wallet?</a>
                                            </div>
                                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <p class="text">
                                                        Yes, With MyTrade, it's extremely easy, fast and reliable. All you have to do is login to your account, and top up your
                                                        wallet if you need to. Then scroll down to the purchase airtime / data section, enter the value and submit.
                                                    </p>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="card">
                                            <div class="card-header" id="headingFore">
                                                <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseFore"
                                                    aria-expanded="false" aria-controls="collapseFore">What Are Your Days & Hours Of Operation?</a>
                                            </div>
                                            <div id="collapseFore" class="collapse" aria-labelledby="headingFore"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <p class="text">All services on our platform are 100% operational, 24 / 7, all week and year. We are here to give you the best experience you can ever have. Your reliance on us, is our utmost objective.</p>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="card">
                                            <div class="card-header" id="headingFive">
                                                <a href="#" class="collapsed" data-toggle="collapse" data-target="#collapseFive"
                                                    aria-expanded="false" aria-controls="collapseFive">What Are Altcoins?</a>
                                            </div>
                                            <div id="collapseFive" class="collapse" aria-labelledby="headingFive"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <p class="text">
                                                        Altcoins most important characteristic is that they are decentralized. No single institution controls the bitcoin network.
                                                        It is maintained by a group of volunteer coders, and run by an open network of dedicated computers spread around the
                                                        world. This attracts individuals and groups that are uncomfortable with the control that banks or government
                                                        institutions have over their money.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="col-lg-7" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
                            <div class="about-image mt-50">
                                <img src="assets/images/carousel/faq_new.png" alt="about" />
                            </div> 
                        </div>
                    </div> 
                </div> 
            </section>
            <Testimonial />
            <Footer/>
        </>
    )
}

export default Home