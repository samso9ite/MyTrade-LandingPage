const Testimonial = () => {
    return(
        <>
           <section id="testimonial" class="testimonial-area">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-xl-5 col-lg-6">
                    <div class="testimonial-left-content mt-45">
                        <h6 class="sub-title">Testimonials</h6>
                        <h4 class="title">What Clients Say <br /> About Us</h4>
                        <ul class="testimonial-line">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <p class="text">
                            We are very fortunate to have formed excellent partnerships with many of our clients. <br /> <br /> And we’ve formed more than just
                            working relationships with them; we have formed true friendships. Here’s what they’re saying about us.
                        </p>
                    </div> 
                </div>

                <div class="col-lg-6">
                    <div class="testimonial-right-content mt-50">
                        <div class="quota">
                            <i class="lni lni-quotation"></i>
                        </div>

                        <div class="testimonial-content-wrapper testimonial-active">
                            <div class="single-testimonial">
                                <div class="testimonial-text">
                                    <p class="text"> I just wanted to share a quick note and let you know that you guys do a really good job. It’s really great how easy your websites are to update and manage.</p>
                                </div>
                                <div class="testimonial-author d-sm-flex justify-content-between">
                                    <div class="author-info d-flex align-items-center">
                                        <div class="author-image">
                                            <img src='assets/img/svg/user-avatar.svg' alt="author" />
                                        </div>
                                        <div class="author-name media-body">
                                            <h5 class="name"> Mr. Ade </h5>
                                        </div>
                                    </div>
                                    <div class="author-review">
                                        <ul class="star">
                                            <li>
                                                <i class="lni lni-star-filled"></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div> 
    </section>
        </>
    )
}

export default Testimonial;