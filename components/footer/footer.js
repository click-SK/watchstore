class Footer{
    render() {
        let htmlFooter = '';

            htmlFooter += `
            <footer>
                 <div class="footer__top">
                    <div class="footer__top_nav footer__creen-min">
                        <div class="footer__top_h3">Katalog</div>
                        <div class="footer__top_item">
                            <h4>Men's Watch</h4>
                            <h4>Ladies Watch</h4>
                            <h4>Smart watch</h4>
                            <h4>Sports watch</h4>
                        </div>
                    </div>
                    <div class="footer__top_nav footer__creen-min">
                        <div class="footer__top_h3">Information</div>
                        <div class="footer__top_item">
                            <h4>Blog</h4>
                            <h4>About Us</h4>
                            <h4>Payment and delivery</h4>
                            <h4>Exchange and return</h4>
                        </div>
                    </div>
                    <div class="footer__top_nav">
                        <div class="footer__top_h3">Additional</div>
                        <div class="footer__top_item">
                            <h4>Profile</h4>
                            <h4>Orders</h4>
                            <h4>Partners</h4>
                            <h4>Login for partners</h4>
                        </div>
                    </div>
                    <div class="footer__top_nav">
                        <div class="footer__top_h3">Connect with us</div>
                        <div class="footer__top_item">
                            <h4>(000) 000-00-00</h4>
                            <h4>(000) 000-00-00</h4>
                            <h4>(000) 000-00-00</h4>
                            <h4>xxx@mail.com</h4>
                        </div>
                    </div>
                </div>
                <div class="footer_middle">
                    <div class="footer__mid_logo">GO-Time</div>
                </div>
                <div class="footer_bot">
                    <p class="footer__bot_watch-store">© 2012-2022 "GO-Time" watch store. All rights reserved.</p>
                    <div class="footer__bot_social">  </div>
                </div>
                
            </footer> `
        ;

        ROOT_FOOTER.innerHTML = htmlFooter;
    }
}

const footerPage = new Footer();
footerPage.render();

// <div class="footer__backgraund"></div>//