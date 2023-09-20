const RateCalculator = () => {
    return(
        <>
            <section id="portfolio" class="portfolio-area portfolio-four" style="background-color: #124990;">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 order-2 delay-3m" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="500" style="background-color: #fff !important; padding:4%; border-radius: 10px;">
                            <div class="center-card">
                                <section class="card_transaction">
                                    <div class="wrappers">
                                        <div class="card-wrap">
                                            <div class="header-top">
                                                <img src="assets/images/png/calculator.png" class="img-responsive img-cal" alt="calculator" />

                                                <div class="ml-3">
                                                    <h4>Rate Calculator</h4>
                                                    <p>Get card currency equivalent in naira</p>
                                                </div>
                                            </div>

                                            <div style="margin-top: 40px;">
                                                <form class="mt-4">
                                                    <div class="input bordered">
                                                    <label class="form-label">Select Digital Asset</label>
                                                    <select class="form-control" id="card" name="card">
                                                        <option  disabled>Digital Asset</option>
                                                    </select>
                                                    </div>

                                                    <div class="mt-3">
                                                    <label>Card Type</label>
                                                    <select
                                                        class="form-control"
                                                        id="card_type"
                                                        name="card_type"

                                                    >
                                                        <option  disabled>Card Type</option>
                                                    </select>

                                                    <div  class="invalid-feedback">
                                                        <div>Please select the type of card</div>
                                                    </div>
                                                    </div>

                                                    <div class="mt-3">
                                                    <label>Select Country / Currency</label>
                                                    <select
                                                        class="form-control"
                                                        id="country"
                                                        name="country"
                                                    >
                                                        <option disabled>Country</option>
                                                    </select>

                                                    </div>

                                                    <div class="mt-3">
                                                    <label>What's the value of the card</label>
                                                    <input type="number" class="form-control" placeholder="Card Value" formControlName="card_value" />
                                                    </div>

                                                    <div>
                                                    <div class="mb-3 mt-3">
                                                        Rate:
                                                        <span style="font-weight: bolder;"> 3232</span>
                                                    </div>

                                                    <div style="margin-bottom: 3px; font-size: 18px;">
                                                        Payout:
                                                        <span style="font-weight: bolder;">#322</span>
                                                    </div>

                                                    <button type="submit" class="btn btn-primary_">Confirm & Proceed</button> 
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div> 

                        <div class="col-md-6 order-1 mb-3 justify-content-center animate__animated  animate__fadeIn delay-2m" style="align-self: center;">
                            <div class="align-items-center">
                                <div class="section-title text-center pb-10" style="vertical-align: middle; color: white;">
                                    <h3 class="title" style="color: #fff !important;">Check Out Our Rates</h3>

                                    <p class="text" style="color: #fff !important;">
                                        We offer you the very best rates, which changes dynamically as market prices vary. You have the flexibility to choose from a variety of our different cards and their different prices.
                                    </p>

                                    <p class="text" style="color: #fff !important;">
                                        <strong>Please note: </strong> Our prices are not fixed to these rates, as they change based on market ranges.
                                    </p>
                                </div> 
                            </div>
                        </div> 
                    </div>
                </div> 
            </section>
        </>
    )
}

export default RateCalculator