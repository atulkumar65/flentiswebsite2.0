import React from 'react'

const Footer = () => {
    return (
        <div>

            <footer className="footer-section py-100 pb-5 position-relative" style={{ background: '#f3f6fd' }}>
                <div className="container-fluid px-150">
                    <div className="row">
                        <div className="col-lg-3 col-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-section-1">
                                <img src="/assets/images/Final-Logo.png" alt="Vendor Management software" className="img-fluid w-50 footer-logo" />
                                <p>
                                    Flentis Corporation is your trusted partner in delivering exceptional VMS technology to manage and procure your contingent workforce.
                                </p>

                                <ul className="social-footer-icon">

                                    <li><a href="https://twitter.com/ProFlentis"><i className="fa-brands fa-twitter" aria-hidden="true" style={{ color: 'white' }}></i></a></li>
                                    <li className="facebook"><a href="https://www.facebook.com/flentispro/"><i className="fa-brands fa-facebook-f" aria-hidden="true" style={{ color: 'white' }}></i></a></li>
                                    <li><a href="https://www.instagram.com/flentispro/"><i className="fa-brands fa-instagram" aria-hidden="true" style={{ color: 'white' }}></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/flentis-pro/"><i className="fa-brands fa-linkedin-in" aria-hidden="true" style={{ color: 'white' }}></i></a></li>
                                    <li><a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=sm@flentis.com"><i className="fa-regular fa-envelope" aria-hidden="true" style={{ color: 'white' }}></i></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCHnLyoke9ALL5_2svD0wL-w"><i className="fa-brands fa-youtube" aria-hidden="true" style={{ color: 'white' }}></i></a></li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 col-sm-4 wow fadeInUp" data-wow-delay="500ms">
                            <div className="footer-section-1 sponsored-by footer-menu">
                                <div className="row">
                                    <ul>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/solutions">Solutions</a></li>
                                        <li><a href="/insight">Insight</a></li>
                                        <li><a href="/staffing-thesaurus">Staffing Thesaurus</a></li>
                                        <li><a href="/insight?type=webinar">Webinar</a></li>
                                        <li><a href="/flentispro?tab=pills-four-tab">What's New</a></li>
                                        <li><a href="/insight?type=case_study">Case Study</a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 col-sm-4 wow fadeInUp" data-wow-delay="700ms">
                            <div className="footer-section-1 sponsored-by footer-menu">
                                <div className="row">
                                    <ul>
                                        <li><a href="https://www.flentis.com/landing-page-5">Speak to an Expert</a></li>
                                        <li><a href="/flentispro">FlentisPro Features</a></li>
                                        <li><a href="/support">Support</a></li>
                                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                                        <li><a href="/faq">FAQs</a></li>
                                        <li><a href="/career">Career</a></li>
                                        <li><a href="/terms-conditions">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 col-sm-4 wow fadeInUp" data-wow-delay="900ms">
                            <div className="footer-section-1 sponsored-by">
                                <div className="row">
                                    <div className="footer-heading">
                                        <h4>USA</h4>
                                    </div>
                                    <p className="pb-lg-5 pe-lg-4">
                                        <span className="fw-bold text-blue">Address:</span> 3523 45th St S #100,<br />
                                        Fargo, North Dakota 58104
                                    </p>
                                    <p className="pb-lg-5"><span className="fw-bold text-blue">Phone:</span><a href="tel:1-888-541-5551"> +1 (888) 541-5551 </a></p>
                                    <p className="pb-lg-5"><span className="fw-bold text-blue">Email:</span><a href="mailto:info@flentis.com" > info@flentis.com </a></p>
                                </div>

                                <div className="row">
                                    <div className="footer-heading">
                                        <h4>Canada</h4>
                                    </div>
                                    <p className="pb-lg-5"><span className="fw-bold text-blue">Address:</span> #260-5975 Whittle Road, Mississauga, Ontario L4Z3N1</p>
                                    <p className="pb-lg-5"><span className="fw-bold text-blue">Phone:</span><a href="tel:1-888-541-5551"> +1 (888) 541-5551 </a></p>
                                    <p className="pb-lg-5"><span className="fw-bold text-blue">Email:</span><a href="mailto:info@flentis.com"> support@flentis.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 d-flex flex-column justify-content-center">
                            <div className="associated-name text-lg-end text-center">
                                <h4>Associated with</h4>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="mobile-associated-logo">
                                <img src="/assets/images/associated/mobile-associated.png" alt="Workforce Management Solutions" className="img-fluid" />
                            </div>
                            <div className="footer-section-1 associated-logo web-associated-logo text-center">

                                <img src="/assets/images/associated/web-associated.png" alt="Workforce Management Software" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Copyright --> */}
                <div className="copyright" style={{ background: '#f3f6fd' }} >
                    <div className="container-fluid px-150">
                        <div className="row">

                            <div className="col-lg-12 col-md-12 col-sm-12 text-center wow fadeInRight" data-wow-delay="300ms">
                                <p className="p-small">All copyrights reserved by Flentis Corporation</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-tree">
                    <div className=" wow fadeInUp" data-wow-delay="300ms">
                        <img src="/assets/images/form-tree.png" alt="FlentisPRO VMS Partners" className="img-fluid" />
                    </div>
                </div>
            </footer>

            <div className="high-lighter-overlay"></div>
            <a id="myBtn" data-bs-toggle="modal" data-bs-target="#requestdemo">
                <img src="/assets/images/Hootie_Icon.png" alt="alternative"/>
                    Request Demo
            </a>

        </div>
    )
}

export default Footer
