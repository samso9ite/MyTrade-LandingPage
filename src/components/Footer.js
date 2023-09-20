const Footer = () => {
    return(
        
     <section class="footer-area footer-dark">
     <div class="container">
         <div class="row justify-content-center">
             <div class="col-lg-6">
                 <div class="footer-logo text-center">
                     <a class="mt-10" href="index.html"><img src="assets/images/logo/logo.png" width="50%" alt="Logo"/></a>
                 </div> 
                 <ul class="social text-center mt-20">
                     <li><a href="https://facebook.com/mytrade_ng" target="_blank" style={{textDecoration: 'none', marginRight: '10px'}}>
                         <img src="assets/img/png/facebook.png" width="32px" height="32px" alt="" />
                     </a></li>
                     <li>
                     <a href="https://instagram.com/mytradenigeria" target="_blank" style={{textDecoration: 'none', marginRight: '10px'}}>
                         <img src="assets/img/png/instagram.png" width="32px" height="32px" alt="" />
                     </a></li>
         
                     <li><a href="https://twitter.com/mytrade_ng" target="_blank" style={{textDecoration: 'none', marginRight: '10px'}}>
                         <img src="assets/img/png/twitter.png" width="32px" height="32px" alt="" />
                     </a></li>
         
                     <li><a href="https://api.whatsapp.com/send?phone=+2348175052683" target="_blank" style={{textDecoration: 'none', marginRight: '10px'}}>
                         <img src="assets/img/png/whatsapp.png" width="32px" height="32px" alt="" />
                     </a></li>
                 </ul> 
                 <div class="footer-support text-center">
                     <span class="number">+234 706 2946 447</span>
                     <span class="mail">info@mytrade.ng</span>
                 </div>
                 <div class="copyright text-center mt-15">
                     <p class="text">Designed by <a href="https://samso9te.com.ng" rel="nofollow">Samso9te Digitals</a></p>
                 </div>
             </div>
         </div>
     </div>
 </section>

    )
}

export default Footer;