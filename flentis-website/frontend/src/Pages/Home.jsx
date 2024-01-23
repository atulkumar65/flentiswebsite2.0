import '../assets/css/Home.css'
import { IndexValidationEvent, IndexValidationEvent2 } from '../assets/js/Home'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async';

const Home = () => {

  const handleSubmitClick = (e) => {
    e.preventDefault();
    IndexValidationEvent();
    IndexValidationEvent2();
  }

  const [pageDescription, setPageDescription] = useState('');

  useEffect(() => {
   setPageDescription('Flentis Corp, a VMS company, brings vendor management to ease by procuring and managing a contingent workforce using the best VMS technology.');
  }, []);

  return (
    <div>
      <Helmet>
        <title>Vendor Management | VMS Company | Flentis</title>
        <link rel="canonical" href="https://www.flentis.com/" />
        <meta name="description" content={pageDescription} />
      </Helmet>
      {/* ------------------------ Home Page -------------------------------- */}

      <section className="">
        <div className="cookies-wrapper" id="cookie-banner" style={{ display: 'none' }}>
          <div className="cookies">
            <div className="cookies-message">
              <p>We use cookies to analyze site performance and deliver personalized content. By clicking “Agree” you consent to the storing of cookies. You can revoke your consent at any time. Learn more about this in our <a href="https://pitch.com/privacy-policy" className="text-decoration-underline" style={{ color: '#4557f7' }}>privacy policy</a>.</p>
            </div>
            <div className="cookie-actions">
              <button className="button cookies-options light" data-show="cookie-options"><span className="background"></span><span className="body">More options</span></button>
              <button className="button gradient-blue" data-accept-cookies="all"><span className="background"></span><span className="body">Agree</span></button>
            </div>
          </div>
        </div>
        <div className="header-scroll-trigger"></div>
        <div className="header-container">
        </div>
        <div className="home-hero home-hero--dragging-done">
          <div className="home-hero__subtext" style={{ opacity: '1' }}>
            <h1>The Gateway of Streamlined Staffing Solutions with our Intelligent FlentisPRO Vendor Management System.</h1>
            <div className="header-buttons">
              <a className="btn btn-primary  blue-bg custm-btn" href="#reqDemoContainer">Request Demo </a>
              <a className="btn btn-outline-primary custm-btn" href="/flentispro">Learn More </a>
            </div>
          </div>
          <div className="home-hero__interaction">
            <div className="home-hero__headline page-heading" style={{ transform: 'translate(0em, -2.5em) scale(1)' }}>
              <span className="home-hero__headline-line home-hero__editor-1">Evolution of</span>
              <span className="home-hero__headline-line home-hero__editor-2">Hiring Technology

              </span>
              <div role="presentation" className="live-cursor home-hero__editor-1 video speaking">
                <svg className="live-cursor__pointer">
                  <use href="#symbol-live-cursor" xlinkHref="#symbol-live-cursor"></use>
                </svg>
                <div className="live-cursor__video-wrapper">
                  <img alt="Person talking in Pitch" src="assets/images/HeaderCursor_left.jpg" />
                  <video className="live-cursor__video" loop="loop" muted playsinline="playsinline" poster="assets/images/HeaderCursor_left.jpg" preload="metadata">
                  </video>
                </div>
              </div>
              <div role="presentation" className="live-cursor home-hero__editor-2 video speaking">
                <svg className="live-cursor__pointer">
                  <use href="#symbol-live-cursor" xlinkHref="#symbol-live-cursor"></use>
                </svg>
                <div className="live-cursor__video-wrapper">
                  <img alt="Person talking in Pitch" src="assets/images/HeaderCursor_right.jpg" />
                  <video className="live-cursor__video" loop="loop" muted playsinline="playsinline" poster="assets/images/HeaderCursor_right.jpg" preload="metadata">
                  </video>
                </div>
              </div>
            </div>
            <img alt="Best Vendor Management System" className="home-hero__ui loaded" height="736" onload="this.classList.add(&#39;loaded&#39;)" sizes="96vw, (min-width: 960px) calc(75vw + 15rem), (min-width: 1800px) 1500px" src="assets/images/dashboard.png" />
          </div>
          <span className="home-hero__duration"></span>
        </div>

        <div className="banner-main-animate banner-main-gradient">
          <ul className="animate-items">
            <li>
              <img src="assets/images/hand-2.png" alt="leaf" /></li>
            <li>
              <img src="assets/images/media/banner/main/rabar.png" data-parallax='{"y": 200, "x": 100}' alt="leaf" /></li>
            <li>
              <img src="assets/images/media/banner/main/angle.png" data-parallax='{ "x": -200, "rotateZ": 360}' alt="leaf" /></li>
            <li>
              <img src="assets/images/media/banner/main/leaf3.png" data-parallax='{"y": 100, "x": 100}' alt="leaf" /></li>
            <li>
              <img src="assets/images/media/banner/main/box.png" data-parallax='{"y": -200, "x": -100, "rotateZ": 360}' alt="leaf" /></li>
          </ul>
        </div>
      </section>
      {/* <!-- Details 1 --> */}
      <section className="py-100 pt-4 position-relative">
        <div className="container-fluid px-150">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="headings text-center">
                <h6>DISCOVER OUR SOLUTIONS</h6>
                <h2>Architects of Your Business Growth Accelerator</h2>
                <p>
                  Flentis, as a VMS company, understands the root causes of business and market deficits in providing comprehensive staffing and recruiting
                  software solutions. That’s where the industry’s best minds with 50+ years in the Human Resource industry came together to design and engineer
                  a top-notch platform, FlentisPRO for you.
                </p>
              </div>
            </div>
            {/* <!-- end of col --> */}
          </div>
          {/* <!-- end of row --> */}
          <div className="row justify-content-center py-100 mt-5 pb-0">
            <div className="d-lg-flex align-items-start business-growth-tab-section">
              <div className="col-lg-5 col-12">
                <div className="row">
                  <div className="col-lg-9 mx-auto">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </div>
                      <div className="flex-grow-1 ms-3 wow fadeInUp " data-wow-delay="300ms">
                        <h4>Analytical Visibility</h4>
                        <p>As problem-solvers, we take pride in catering the best recruitment software to you with a detail-oriented yet crystal-clear process workflow that aids you in taking control of your hands.</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </div>
                      <div className="flex-grow-1 ms-3 wow fadeInUp " data-wow-delay="600ms">
                        <h4>Agile Methodlogies</h4>
                        <p>Our techies work tirelessly to keep this recruiting technology true to your business needs using the latest software and solving your perplexing problems on our platform.</p>
                      </div>
                    </div>
                    <div className="d-flex ">
                      <div className="flex-shrink-0">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </div>
                      <div className="flex-grow-1 ms-3 wow fadeInUp " data-wow-delay="900ms">
                        <h4>Improved Hire Time</h4>
                        <p>FlentisPRO VMS is easy to use and enables hiring managers, MSPs, HRs, vendors, and candidates to power through the recruitment process efficiently.</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="header-buttons ms-lg-5 ps-lg-4">
                        <a className="btn btn-primary blue-bg custm-btn" href="#reqDemoContainer">Request Demo </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-12 mt--100 position-relative">
                <div className="">
                  <div className="laptop-pointer-img">
                    <ul>
                      <li className="laptop-pointer-shape1 wow fadeInLeft " data-wow-delay="400ms">
                        <img src="assets/images/laptop-point-1.png" alt="Vendor Management System" className="img-fluid anm" data-speed-x="3" data-speed-y="3" /></li>
                      <li className="laptop-pointer-shape2 wow fadeInLeft" data-wow-delay="800ms">
                        <img src="assets/images/laptop-point-2.png" alt="Vendor Management software" className="img-fluid anm" data-speed-x="3" data-speed-y="3" /></li>
                      <li className="laptop-pointer-shape3 wow fadeInLeft" data-wow-delay="1200ms">
                        <img src="assets/images/laptop-point-3.png" alt="Workforce Management Solutions" className="img-fluid anm" data-speed-x="3" data-speed-y="3" /></li>
                      <li className="laptop-pointer-shape4 wow fadeInLeft" data-wow-delay="1600ms">
                        <img src="assets/images/laptop-point-4.png" alt="Workforce Management Software" className="img-fluid anm" data-speed-x="3" data-speed-y="3" /></li>
                      <li className="laptop-pointer-shape5 wow fadeInLeft" data-wow-delay="2000ms">
                        <img src="assets/images/laptop-point-5.png" alt="VMS" className="img-fluid anm" data-speed-x="3" data-speed-y="3" /></li>
                    </ul>
                  </div>
                </div>
                <div className="text-center anm" data-speed-x="2" data-speed-y="2">
                  <img src="assets/images/Laptop-img.jpg" alt="VMS company" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end of container --> */}
      </section>
      {/* <!-- end of basic-1 -->
      <!-- end of details 1 -->
      <!-- Details 1 --> */}
      <section className="py-100 position-relative bg-grey ">
        <div className="container-fluid px-150">
          <div className="bg-shapes even-better">
            <ul>
              <li className="even-better-shape1 wow fadeInLeft " data-wow-delay="400ms">
                <img src="assets/images/hand-1.png" alt="Best Vendor Management System" className="img-fluid anm" data-speed-y="2" /></li>
              <li className="even-better-shape2 wow fadeInLeft" data-wow-delay="800ms">
                <img src="assets/images/ball.png" alt="Vendor Management System" className="img-fluid anm" data-speed-x="2" data-speed-y="2" /></li>
              <li className="even-better-shape3 wow fadeInLeft " data-wow-delay="400ms">
                <img src="assets/images/rabar.png" data-parallax='{"y": 100, "x": 100}' alt="leaf" /></li>
              <li className="even-better-shape6 wow fadeInLeft" data-wow-delay="800ms">
                <img src="assets/images/angle.png" data-parallax='{ "Y": -200, "rotateZ": 270}' alt="leaf" /></li>
              <li className="even-better-shape5 wow fadeInLeft" data-wow-delay="800ms">
                <img src="assets/images/box.png" data-parallax='{ "x": -100, "rotateZ": 270}' alt="leaf" /></li>
              <li className="even-better-shape4 wow fadeInLeft" data-wow-delay="1600ms">
                <img src="assets/images/file-manager.png" alt="Vendor Management software" className="img-fluid anm" data-speed-x="2" data-speed-y="2" /></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="headings text-center">
                <h2>Just A New VMS? <span className="text-blue">Even Better</span> </h2>
                <p>
                  FlentisPRO is a “Tried, Tested & Testified” recruiting management software that does more than usual.
                  Our clients choose us over others not just for our new features but for owning a product with One Million+ Built Hours that improvised the existing technology for a seamless user experience.
                </p>
              </div>
            </div>
            {/* <!-- end of col --> */}
          </div>
          {/* <!-- end of row --> */}
          <div className="row py-100 pb-0">
            <div className="col-lg-12 mx-auto">
              <div className="row">
                <div className="col-lg-6 col-12 pe-lg-5 position-relative vms-boxes">
                  <div className="vms-box-section wow fadeInUp light-yellow-bg" data-wow-delay="600ms">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-4">
                        <img src="assets/images/Payroll.png" alt="..." />
                      </div>
                      <div className="flex-grow-1 ms-3 text-section">
                        <h5>Vendor Management System </h5>
                        <p>With our white-label VMS, automating the error-prone processes is like a jackpot. White-label your VMS and launch into the market fully equipped. We serve all industries including healthcare.</p>
                        <div className="">
                          <a href="/flentispro"><u>Read More</u></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 ps-lg-5 position-relative vms-boxes">
                  <div className="vms-box-section wow fadeInUp light-red-bg" data-wow-delay="200ms">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-4">
                        <img src="assets/images/application-tracking-system.png" alt="..." />
                      </div>
                      <div className="flex-grow-1 ms-3 text-section">
                        <h5>Supplier Management </h5>
                        <p>FlentisPRO VMS simplifies the vendor onboarding process, making it effortless from the get-go. Our platform allows you to efficiently oversee your suppliers' pool and evaluate their overall performance.</p>
                        <div className="">
                          <a href="/flentispro"><u>Read More</u></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 pe-lg-5 position-relative vms-boxes">
                  <div className="vms-box-section light-green-2-bg wow fadeInUp" data-wow-delay="1200ms">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-4">
                        <img src="assets/images/Timesheet.png" alt="..." />
                      </div>
                      <div className="flex-grow-1 ms-3 text-section">
                        <h5>Timesheet and Expense Management</h5>
                        <p>
                          Attendance tracking was always challenging. But now create your approval flow with just a few clicks.
                          Our timesheet & expense management tool is the most advanced functionality in the market. Every user loves it!
                        </p>
                        <div className="">
                          <a href="/flentispro"><u>Read More</u></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 ps-lg-5 position-relative vms-boxes">
                  <div className="vms-box-section light-purple-2-bg wow fadeInUp" data-wow-delay="1600ms">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-4">
                        <img src="assets/images/calendar-scheduler.png" alt="..." />
                      </div>
                      <div className="flex-grow-1 ms-3 text-section">
                        <h5>Comprehensive Onboarding & Offboarding</h5>
                        <p>
                          Total talent management solution begins with finding the right candidate at the right time and ends with gaining the trust of the workers even when they’re departing from the assignment.
                          True success with FlentisPRO VMS!
                        </p>
                        <div className="">
                          <a href="/flentispro"><u>Read More</u></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 pe-lg-5 position-relative vms-boxes">
                  <div className="vms-box-section light-purple-bg wow fadeInUp" data-wow-delay="1000ms">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-4">
                        <img src="assets/images/document-credential-management.png" alt="..." />
                      </div>
                      <div className="flex-grow-1 ms-3 text-section">
                        <h5>Document and Compliance Management </h5>
                        <p>
                          From supplier to employee documentation, FlentisPRO VMS takes out the hassle of compliance tracking, document storage, and retrieval.
                          Meet regulatory requirements confidently and hire your staff effortlessly.
                        </p>
                        <div className="">
                          <a href="/flentispro"><u>Read More</u></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 ps-lg-5 position-relative vms-boxes">
                  <div className="vms-box-section light-green-bg wow fadeInUp" data-wow-delay="800ms">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-4">
                        <img src="assets/images/learning-management-system.png" alt="..." />
                      </div>
                      <div className="flex-grow-1 ms-3 text-section">
                        <h5>Predictive & Custom Reporting</h5>
                        <p>
                          The power of data-driven process workflow is now here to revolutionize how the recruitment industry works.
                          Ask FlentisPRO for anything and it’ll provide you with deep-dive insights that’ll make decision-making risk-free.
                        </p>
                        <div className="">
                          <a href="/flentispro"><u>Read More</u></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 pe-lg-5 position-relative vms-boxes">
                  <div className="vms-box-section light-green-3-bg wow fadeInUp" data-wow-delay="1400ms">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-4">
                        <img src="assets/images/built-in-video-conferencing.png" alt="..." />
                      </div>
                      <div className="flex-grow-1 ms-3 text-section">
                        <h5>Third-Party Tech Integration</h5>
                        <p>
                          We promise a delicacy of HR technology and not just a one-course meal (platform!) With plug-and-play open API infrastructure,
                          we connect your enterprise solutions to our VMS for a full tech-stack experience.
                        </p>
                        <div className="">
                          <a href="/flentispro"><u>Read More</u></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 ps-lg-5 position-relative vms-boxes">
                  <div className="vms-box-section light-blue-bg wow fadeInUp " data-wow-delay="400ms">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-4">
                        <img src="assets/images/talent.png" alt="..." />
                      </div>
                      <div className="flex-grow-1 ms-3 text-section">
                        <h5>Talent Pool and Candidate Engagement </h5>
                        <p>
                          Sourcing candidates shouldn’t be halfway through the process.
                          Now built your personal talent pool and provide them with an engaged candidate experience. Let’s talk about a quick, efficient, and clutter-free solution!
                        </p>
                        <div className="">
                          <a href="/flentispro"><u>Read More</u></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end of container --> */}
      </section>
      {/* <!-- end of basic-1 -->

      <!-- Services --> */}
      <section id="" className="py-100">
        <div className="container-fluid px-150 logo-section">
          <div className="row">
            <div className="col-lg-12 pb-4 px-lg-5 pb-5">
              <div className="headings text-center">
                <h2>Trust Is <span className="text-blue">Earned</span> </h2>
                <p>Compliant with Industry Standards and Associations</p>
              </div>
            </div>
            {/* <!-- end of col --> */}
          </div>
          {/* <!-- end of row --> */}
          <div className="row justify-content-between companies-trusting-logos px-lg-5">
            <div className="col-lg-2 col-6 trusted-logo">
              <img className="img-fluid" src="assets/images/Logos/camscnewlogo.png" alt="logo" />
            </div>
            {/* <!-- end of col --> */}
            <div className="col-lg-2 col-6 trusted-logo">
              <img className="img-fluid" src="assets/images/Logos/2.png" alt="logo" />
            </div>
            {/* <!-- end of col --> */}
            <div className="col-lg-2 col-6 trusted-logo">
              <img className="img-fluid" src="assets/images/Logos/3.png" alt="logo" />
            </div>
            {/* <!-- end of col --> */}
            <div className="col-lg-2 col-6 trusted-logo">
              <img className="img-fluid" src="assets/images/Logos/4.png" alt="logo" />
            </div>
            {/* <!-- end of col --> */}
            <div className="col-lg-2 col-6 trusted-logo">
              <img className="img-fluid" src="assets/images/Logos/5.png" alt="logo" />
            </div>
            {/* <!-- end of col --> */}
          </div>
          {/* <!-- end of row --> */}
        </div>
        {/* <!-- end of container --> */}
      </section>
      {/* <!-- end of cards-1 -->
      <!-- end of services -->
      <!-- Details 2 --> */}
      <form runat="server">
        <section className="py-100 call-to-action-creative" id="reqDemoContainer">
          <div className="container-fluid px-150">
            <div className="row">
              <div className="col-lg-12 col-12 mx-auto fill-in-the-blanks-form-section">
                <div className="hcwhy-section position-relative">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="content ">
                        <div className=" wow fadeInUp fill-in-the-blanks-form" data-wow-delay="400ms">
                          <p>
                            I am
                            <input autoCompleteType="FirstName" autoComplete="on" onkeypress=" return allowOnlyLetters(event,this);" ID="txtRdName" name="name" className="w-25 fitb-form" placeholder="(name)"></input>
                            from
                            <input autoComplete="on" autoCompleteType="Company" className="w-25 fitb-form" name="organisation" ID="txtRdCompany" placeholder="(company)"></input>
                            looking for
                            
                            <select name="selectPurpose" id="txtRdSelect" className="w-30 fitb-form">
                              <option className="text-lg-start" Value="More Information About Your VMS">More Information About Your VMS</option>
                              <option className="text-lg-start" Value="Product Demo">Product Demo</option>
                              <option className="text-lg-start" Value="MSP Partnership">MSP Partnership</option>
                              <option className="text-lg-start" Value="Staffing Agency Partnership">Staffing Agency Partnership</option>
                              <option className="text-lg-start" Value="Other">Other</option>
                            </select>.
                            Please book a meeting on
                            <input autoComplete="on" name="date" type="text" ID="txtRdDate" className="w-25 fitb-form" placeholder="(dd-mm-yyyy)" onfocus="(this.type='date')" onblur="(this.type='text')"></input>&nbsp;&nbsp; . Contact me on
                            <input type="tel" onkeypress="return isNumberKey(event)" autoComplete="on" name="phone" ID="txtRdPhn" className="w-25 fitb-form number-mr" maxlength="11" placeholder="(1-212-456-7890)"></input>
                            and send me an invite at
                            <input autoCompleteType="Email" autoComplete="on" className="w-25 fitb-form" ID="txtRdEmail" placeholder="(email address)" runat="server"></input>
                          </p>

                          <div className="mt-lg-5">
                            <button className="btn btn-light learn-more-btn-white" ID="Button1" onClick={handleSubmitClick}>Submit</button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hcwhy-shapes">
                    <ul>
                      <li className="hcwhy-shapes-1 wow fadeInUp" data-wow-delay="300ms">
                        <img src="assets/images/buble-shape-bg.png" alt="Workforce Management Solutions" className="img-fluid" /></li>
                      <li className="hcwhy-shapes-3 wow fadeInLeft" data-wow-delay="1200ms">
                        <img src="assets/images/cup-img.png" alt="Workforce Management Software" className="img-fluid" /></li>
                      <li className="hcwhy-shapes-5 wow bounceInUp" data-wow-delay="2000ms">
                        <img src="assets/images/how-can-we-help-you-img.png" alt="VMS" className="img-fluid" /></li>
                      <li className="hcwhy-shapes-6 wow fadeInRight" data-wow-delay="2400ms">
                        <img src="assets/images/paper-airplane.png" alt="VMS company" className="img-fluid" /></li>
                    </ul>
                  </div>
                </div>
                {/* <!-- end of col --> */}
              </div>
              {/* <!-- end of col --> */}
            </div>
            {/* <!-- end of row --> */}
          </div>
          {/* <!-- end of container --> */}
        </section>
        {/* <!-- end of basic-2 -->
        <!-- end of details 2 -->
        <!--==========================-->
        <!--=         CountUp        =-->
        <!--==========================--> */}
        <div id="countdown-community">
          <div className="container">

            {/* <!-- /.sectiob-heading --> */}
            <div className="comminity-countup-wrapper row counter">
              <div className="comminity-count-item col-lg-3 col-12">
                <div className="fun-fact color-one wow fadeInUp" data-wow-delay="0.3s">
                  <div className="count-icon-container">

                  </div>
                  {/* <!-- /.icon-box --> */}
                  <div className="count-up">
                    <h4 className=""><span className="counter-count count">58374</span> </h4>
                  </div>
                  <div>
                    <ul className="ps-0 mt-2">
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="FlentisPRO VMS Partners" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="FlentisPRO VMS" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="Best Vendor Management System" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="Vendor Management System" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="Vendor Management software" className="img-fluid" /></li>
                    </ul>
                  </div>
                  <p className="count-name">Contingent Staff Appointed since 2017</p>
                </div>

              </div>
              {/* <!-- /.comminity-count-item --> */}
              <div className="comminity-count-item col-lg-3 col-12">
                <div className="fun-fact color-two wow fadeInUp" data-wow-delay="0.5s">
                  <div className="count-icon-container">

                  </div>
                  {/* <!-- /.icon-box --> */}
                  <div className="count-up">
                    <h4 className="">$<span className="counter-count count"> 400</span>M+</h4>
                  </div>
                  <div>
                    <ul className="ps-0 mt-2">
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="Workforce Management Solutions" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="Workforce Management Software" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="VMS" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="VMS company" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="Best Vendor Management System" className="img-fluid" /></li>
                    </ul>
                  </div>
                  <p className="count-name">Acquisition Budget Spend via FlentisPRO</p>
                </div>

              </div>
              {/* <!-- /.comminity-count-item --> */}
              <div className="comminity-count-item col-lg-3 col-12">
                <div className="fun-fact color-three wow fadeInUp" data-wow-delay="0.7s">
                  <div className="count-icon-container">

                  </div>
                  {/* <!-- /.icon-box --> */}
                  <div className="count-up">
                    <h4 className=""><span className="counter-count count">100450</span>+</h4>
                  </div>
                  <div>
                    <ul className="ps-0 mt-2">
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="Vendor Management System" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="Vendor Management software" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="Workforce Management Solutions" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="Workforce Management Software" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="VMS" className="img-fluid" /></li>
                    </ul>
                  </div>
                  <p className="count-name">
                    Candidate Applications<br />
                    Submitted
                  </p>
                </div>
                {/* <!-- /.fun-fact --> */}
              </div>
              {/* <!-- /.comminity-count-item --> */}
              <div className="comminity-count-item col-lg-3 col-12">
                <div className="fun-fact color-four wow fadeInUp" data-wow-delay="0.9s">
                  <div className="count-icon-container">

                  </div>
                  {/* <!-- /.icon-box --> */}
                  <div className="count-up">
                    <h4 className=""><span className="counter-count count">100</span>+</h4>
                  </div>
                  <div>
                    <ul className="ps-0 mt-2">
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="VMS company" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="FlentisPRO VMS Partners" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="FlentisPRO VMS" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="Best Vendor Management System" className="img-fluid" /></li>
                      <li className="d-inline-block">
                        <img src="assets/images/rating-star.png" alt="Vendor Management System" className="img-fluid" /></li>
                    </ul>
                  </div>
                  <p className="count-name">
                    Language Preferences<br />
                    Available
                  </p>
                </div>
                {/* <!-- /.fun-fact --> */}
              </div>
              {/* <!-- /.comminity-count-item --> */}
            </div>
            {/* <!-- /.creative-countup-wrapper --> */}
          </div>
          {/* <!-- /.container --> */}
          <svg xmlns="http://www.w3.org/2000/svg" className="smile-two" data-parallax='{"y": 50}' width="250px" height="250px">
            <path fillRule="evenodd" fill="rgb(239, 239, 239)" d="M125.000,249.999 C56.075,249.999 -0.000,193.924 -0.000,124.999 C-0.000,56.074 56.075,-0.001 125.000,-0.001 C193.926,-0.001 250.000,56.074 250.000,124.999 C250.000,193.924 193.925,249.999 125.000,249.999 ZM200.620,43.160 C180.733,24.770 154.158,13.513 125.000,13.513 C63.526,13.513 13.514,63.525 13.514,124.999 C13.514,143.622 18.110,161.189 26.218,176.637 C31.542,186.780 38.379,196.010 46.433,204.019 C66.601,224.073 94.378,236.485 125.000,236.485 C186.473,236.485 236.486,186.473 236.486,124.999 C236.486,107.801 232.570,91.501 225.585,76.940 C219.445,64.144 210.931,52.694 200.620,43.160 ZM124.761,194.254 C121.851,194.254 118.932,194.090 116.009,193.753 C93.238,191.126 72.186,178.018 59.694,158.686 L71.044,151.350 C81.367,167.326 98.755,178.159 117.558,180.328 C141.686,183.111 165.782,171.735 178.955,151.350 L190.306,158.686 C175.960,180.884 150.905,194.254 124.761,194.254 ZM167.794,110.641 C160.331,110.641 154.281,104.591 154.281,97.127 C154.281,89.664 160.331,83.613 167.794,83.613 C175.258,83.613 181.308,89.664 181.308,97.127 C181.308,104.591 175.258,110.641 167.794,110.641 ZM84.178,110.641 C76.715,110.641 70.665,104.591 70.665,97.127 C70.665,89.664 76.715,83.613 84.178,83.613 C91.642,83.613 97.692,89.664 97.692,97.127 C97.692,104.591 91.642,110.641 84.178,110.641 Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="smile-one" data-parallax='{"y": -70}' width="630px" height="630px">
            <path fillRule="evenodd" fill="rgb(239, 239, 239)" d="M315.000,629.999 C141.309,629.999 -0.000,488.688 -0.000,314.998 C-0.000,141.307 141.309,-0.002 315.000,-0.002 C488.693,-0.002 630.000,141.307 630.000,314.998 C630.000,488.688 488.690,629.999 315.000,629.999 ZM505.562,108.764 C455.447,62.420 388.479,34.052 315.000,34.052 C160.086,34.052 34.054,160.084 34.054,314.998 C34.054,361.927 45.637,406.198 66.070,445.125 C79.485,470.686 96.715,493.945 117.011,514.129 C167.835,564.664 237.832,595.942 315.000,595.942 C469.913,595.942 595.945,469.911 595.945,314.998 C595.945,271.658 586.076,230.582 568.474,193.891 C553.002,161.642 531.546,132.789 505.562,108.764 ZM314.398,489.520 C307.065,489.520 299.710,489.106 292.343,488.257 C234.961,481.638 181.908,448.604 150.429,399.888 L179.030,381.403 C205.046,421.662 248.864,448.962 296.247,454.426 C357.049,461.442 417.770,432.774 450.967,381.403 L479.570,399.888 C443.419,455.829 380.280,489.520 314.398,489.520 ZM422.842,278.815 C404.034,278.815 388.787,263.569 388.787,244.761 C388.787,225.953 404.034,210.707 422.842,210.707 C441.650,210.707 456.897,225.953 456.897,244.761 C456.897,263.569 441.650,278.815 422.842,278.815 ZM212.129,278.815 C193.322,278.815 178.075,263.569 178.075,244.761 C178.075,225.953 193.322,210.707 212.129,210.707 C230.937,210.707 246.184,225.953 246.184,244.761 C246.184,263.569 230.937,278.815 212.129,278.815 Z" />
          </svg>
        </div>
        {/* <!-- /#countdown --> */}
        {/* <!-- Invitation --> */}
        <div className="basic-3 d-none">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <h2>Find the right influencer for your product</h2>
                  <p className="p-large">Eu convallis arcu ultrices in. Mauris ornare libero et pharetra hendrerit. Curabitur elementum lectus quis vioc tellus</p>
                  <a className="btn-solid-lg" href="#contact">Get free quote</a>
                </div>
                {/* <!-- end of text-container --> */}
              </div>
              {/* <!-- end of col --> */}
            </div>
            {/* <!-- end of row --> */}
          </div>
          {/* <!-- end of container --> */}
        </div>
        {/* <!-- end of basic-3 --> */}

        <section className="testimonials-two" style={{ background: '#f6f6f6' }}>
          <div className="blog-bg">
            <ul>
              <li className="blog-shape-1">
                <img src="assets/images/blog-lining-bg.png" className="" alt="Vendor Management software" /></li>
              <li className="blog-shape-2">
                <img src="assets/images/blog-right-shape.png" className="" alt="Workforce Management Solutions" /></li>
              <li className="blog-shape-3">
                <img src="assets/images/blog-boy.png" className="wow fadeInLeft" alt="Workforce Management Software" /></li>
            </ul>
          </div>
          <div className="container">
            <div className="section-heading-two">
              <h3 className="subtitle">WHAT'S NEW?</h3>
              <h2 className="section-title">Flentis Brings Freshly Brewed Industry Insight For You</h2>
              {/* <!-- Slider Nav --> */}
              <div className="nav-control">
                <div className="gp-nav-prev">
                  <i className="fa fa-angle-left"></i>
                </div>
                <div className="gp-nav-next">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
              {/* <!-- /.nav-control --> */}
            </div>
          </div>
          {/* <!-- /.container --> */}
          <div className="testimonial-overflow-wrap">
            <div className="container">
              <div className="testimonial-inner">
                <div className="swiper-container wow fadeInRight" id="testimonial-two" data-breakpoints='{"1440": {"slidesPerView": 4, "spaceBetween": 50}, "1680": {"slidesPerView": 4, "spaceBetween": 50}, "1280": {"slidesPerView": 4, "spaceBetween": 50},  "1024": {"slidesPerView": 2, "spaceBetween": 50}, "768": {"slidesPerView": 2, "spaceBetween": 40}, "320": {"slidesPerView": 1, "spaceBetween": 20}}'>
                  <div className="swiper-wrapper" id="carousel-blogs" >
                    <div className="swiper-slide">
                      <div className="testimonial-two">
                        <div className="testmonial-info">
                          <img src="assets/images/insight-details-blank-img.png" className="img-fluid" alt='' />
                        </div>
                        {/* <!-- /.testmonial-info --> */}
                        <div className="testi-content">
                          <h4 className="blog-title">7 Reasons To Choose VMS Platform Post-COVID </h4>

                        </div>
                        {/* <!-- /.testi-content -->                                         */}
                      </div>
                      {/* <!-- /.testimonial --> */}
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-two">
                        <div className="testmonial-info">
                          <img src="assets/images/insight-details-blank-img.png" className="img-fluid" alt=''/>
                        </div>
                        {/* <!-- /.testmonial-info --> */}
                        <div className="testi-content">
                          <h4 className="blog-title">How Can A Vendor Management System Affect Your Revenues?</h4>


                        </div>
                        {/* <!-- /.testi-content -->                                         */}
                      </div>
                      {/* <!-- /.testimonial --> */}
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-two">
                        <div className="testmonial-info">
                          <img src="assets/images/insight-details-blank-img.png" className="img-fluid" alt='' />
                        </div>
                        {/* <!-- /.testmonial-info --> */}
                        <div className="testi-content">
                          <h4 className="blog-title">What Challenges Do Organization Face In Vendor Management?</h4>


                        </div>
                        {/* <!-- /.testi-content -->                                         */}
                      </div>
                      {/* <!-- /.testimonial --> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /.testimonial-inner --> */}
            </div>
            {/* <!-- /.container --> */}
          </div>
          {/* <!-- /.testimonial-overflow-wrap --> */}
        </section>

        <section className="py-100">
          <div className="container-fluid px-150">
            <div className="row">
              <div className="col-lg-9 mx-auto inquiries-form-section position-relative">
                <div className="row">
                  <div className="col-lg-6 pe-lg-5">
                    <div className="go-live-section">
                      <h3>Go Live: Watch<span className="d-lg-block d-inline-block"> <span className="text-blue">FlentisPRO</span> In Action</span> </h3>
                      <h6>Knowledge is the compass that leads you to the destination</h6>
                      <p>
                        While many of our clients face similar business challenges, no two businesses are alike.
                        A well-built VMS platform is only as good as the plan put in place to operationalize it.
                        We recognize that every business is unique and requires a customized strategic roadmap.
                      </p>
                      <p>
                        We’re here to present you with the best way to manage your vendor management processes. Book yourself a slot with our VMS experts.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 ps-lg-5 justify-content-center d-flex flex-column">
                    <div className="inquiries-heading">
                      <video poster="assets/images/MicrosoftTeams-image.png" src="assets/videos/Comp%201_1.mp4" controls="controls" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Details 2 --> */}
        <section className="py-100 pt-5 position-relative">
          <div className="container-fluid px-150">
            <div className="bg-background"></div>
            <div className="row">
              <div className="col-lg-12 col-12 mx-auto">
                <div className="subscribe-newsletter hcwhy-section position-relative ">
                  <div className="row">
                    <div className="col-lg-7 mx-auto text-center">
                      <div className="content ">
                        <h4 className="wow fadeInUp" data-wow-delay="500ms">Subscribe to Our <span className="text-yellow">Newsletter</span></h4>
                        <p className="wow fadeInUp px-lg-5 mb-5" data-wow-delay="700ms">We empower clients to grow their businesses based on the effective<span className="d-lg-block d-inline-block"> use of our VMS technology</span></p>
                        <div className="position-relative">
                          <div className="">
                            <input autoComplete="on" className="newsletter-form-cutom form-control " name="txtSubscribe" ID="txtSubscribe" placeholder="Enter your email"></input>
                          </div>
                          <p className="mt-5 mb-0">
                            Your information is 100% secure. We don't do spam!
                            <img src="assets/images/happy-emoji.png" alt="Workforce Management Solutions" className="img-fluid" />
                          </p>
                          <div className="wow fadeInUp subscribe-btn" data-wow-delay="900ms">
                            <button className="btn btn-light learn-more-btn-white" onClick="return ValidationEventSubscribe()" ID="btnSubscribe">Subscribe</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="newsletter-shapes">
                    <ul>
                      <li className="newsletter-shapes-1 wow fadeInUp" data-wow-delay="300ms">
                        <img src="assets/images/bell-icon.png" alt="Workforce Management Software" className="img-fluid" /></li>
                      <li className="newsletter-shapes-2 wow fadeInUp" data-wow-delay="800ms">
                        <img src="assets/images/subscribe-newsletter-circle.png" alt="FlentisPRO VMS" className="img-fluid" /></li>
                      <li className="newsletter-shapes-3 wow fadeInLeft" data-wow-delay="1200ms">
                        <img src="assets/images/subscribe-newsletter-circle-2.png" alt="VMS company" className="img-fluid" /></li>
                      <li className="newsletter-shapes-4  wow fadeInUp" data-wow-delay="1600ms">
                        <img src="assets/images/newslatter-box.png" alt="Best Vendor Management System" className="img-fluid" /></li>
                      <li className="newsletter-shapes-5 wow bounceInUp" data-wow-delay="2000ms">
                        <img src="assets/images/newslatter-boy.png" alt="Vendor Management System" className="img-fluid" /></li>
                    </ul>
                  </div>
                </div>
                {/* <!-- end of col --> */}
              </div>
              {/* <!-- end of col --> */}
            </div>
            {/* <!-- end of row --> */}
          </div>
          {/* <!-- end of container --> */}
        </section>
      </form>
      {/* <!-- end of basic-2 --> */}
      {/* <!-- end of details 2 --> */}




      {/* -------------------------------------------------------------------- */}
    </div>
  )
}

export default Home;
