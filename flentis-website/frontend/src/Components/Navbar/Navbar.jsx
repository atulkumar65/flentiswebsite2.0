import React from 'react'

const Navbar = () => {
    return (
        <div style={{ overflowX: 'hidden !important'}} data-bs-spy="scroll" data-bs-target="#navbarExample" data-anm=".anm">
            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript>
                <iframe title="gtmFrame" src="https://www.googletagmanager.com/ns.html?id=GTM-WMT44BZ" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
            </noscript>

            {/* <!-- Navigation --> */}
            <nav id="navbarExample" className="navbar navbar-expand-lg fixed-top navbar-light ruby-menu-demo-header" aria-label="Main navigation">
                <div className="container-fluid px-150 ruby-wrapper">

                    {/* <!-- Image Logo --> */}
                    <a className="navbar-brand logo-image" href="/">
                        <img src="/assets/images/Final-Logo.png" alt="Vendor Management software" className="img-fluid" /></a>

                    <button className="navbar-toggler p-0 border-0 c-hamburger c-hamburger--htx visible-xs" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mx-auto navbar-nav-scroll ruby-menu">
                            <li className="ruby-menu-mega"><a href="/solutions">Solutions</a>
                                <div className="ruby-grid ruby-grid-lined">
                                    <div className="ruby-row justify-content-center">
                                        <div className="ruby-col-6 h-100">
                                            <div className="ruby-column-section h-100 pe-lg-5">
                                                <a href="/types-of-employment">
                                                    <h3 className="ruby-list-heading">Types of Employment </h3>
                                                </a>
                                                <p className="ruby-list-description">Navigate the ever-evolving world of employment with FlentisPRO.</p>
                                                <ul>
                                                    <li><a href="/types-of-employment#ft">- Full-time Employees</a></li>
                                                    <li><a href="/types-of-employment#pt">- Part-time Employees</a></li>
                                                    <li><a href="/types-of-employment#cw">- Contract Workers</a></li>
                                                    <li><a href="/types-of-employment#ic">- Independent Contractors</a></li>
                                                    <li><a href="/types-of-employment#tw">- Temporary Worker</a></li>
                                                    <li><a href="/types-of-employment#ode">- On-Demand Employees</a></li>
                                                    <li><a href="/types-of-employment#ttpw">- Temp-to-Perm Workers</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="ruby-col-6 hidden-md h-100">
                                            <div className="ruby-column-section h-100">
                                                <a href="/workforce-management-solutions">
                                                    <h3 className="ruby-list-heading">Workforce Management Solutions</h3>
                                                </a>
                                                <p className="ruby-list-description">Drive operational efficiency with the future of workforce management solutions.</p>
                                                <ul>
                                                    <li><a href="/workforce-management-solutions#ttm">- Total Talent Management</a></li>
                                                    <li><a href="/workforce-management-solutions#dms">- Demand Management</a></li>
                                                    <li><a href="/workforce-management-solutions#dss">- Direct Sourcing</a></li>
                                                    <li><a href="/workforce-management-solutions#sps">- Strategic Partnership</a></li>
                                                    <li><a href="/workforce-management-solutionshvrs">- High Volume Recruitment</a></li>
                                                    <li><a href="/workforce-management-solutions#ewms">- Extended Workforce Management</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="ruby-dropdown-toggle"></span></li>

                            <li className="ruby-menu-mega"><a href='/'>Partners</a>
                                <div className="ruby-grid ruby-grid-lined">
                                    <div className="ruby-row justify-content-center">
                                        <div className="ruby-col-6">
                                            <a href="/msp">
                                                <h3 className="ruby-list-heading">MSP</h3>
                                                <p className="ruby-list-description border-0">Streamline your MSP operations and elevate client satisfaction with FlentisPRO.</p>
                                            </a>
                                        </div>
                                        <div className="ruby-col-6 hidden-md">
                                            <a href="/staffing">
                                                <h3 className="ruby-list-heading">Staffing Agency</h3>
                                                <p className="ruby-list-description border-0">Find opportunities, manage placements, and improve client relationships.</p>
                                            </a>
                                        </div>
                                        <div className="ruby-col-6 hidden-md">
                                            <a href="/flentispro-vms-partners">
                                                <h3 className="ruby-list-heading">Collaborators</h3>
                                                <p className="ruby-list-description border-0">Stay competitive, provide unmatched client services, and accelerate your growth.</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <span className="ruby-dropdown-toggle"></span>
                            </li>

                            <li className="ruby-menu-mega"><a href="/why">Why Us</a>
                                <div className="ruby-grid ruby-grid-lined">
                                    <div className="ruby-row justify-content-center">
                                        <div className="ruby-col-6">
                                            <div className="mt-3">
                                                <a href="/why#platform">
                                                    <h3 className="ruby-list-heading">Customizable Platform</h3>
                                                    <p className="ruby-list-description border-0">Gain process control with an agile VMS solution tailored to your needs.</p>
                                                </a>
                                            </div>

                                            <div className="mt-3">
                                                <a href="/why#friendly">
                                                    <h3 className="ruby-list-heading">User-Friendly Interface</h3>
                                                    <p className="ruby-list-description border-0">Experience ease of use and enhanced user satisfaction with FlentisPRO.</p>
                                                </a>
                                            </div>

                                            <div className="mt-3">
                                                <a href="/why#analytics">
                                                    <h3 className="ruby-list-heading">Reporting and Analytics</h3>
                                                    <p className="ruby-list-description border-0">Leverage the robust reporting and analytics with forecasting capabilities.</p>
                                                </a>
                                            </div>

                                            <div className="mt-3">
                                                <a href="/why">
                                                    <h3 className="ruby-list-heading">Integration</h3>
                                                    <p className="ruby-list-description border-0">Achieve data synchronization with the collaborative technology ecosystem.</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ruby-col-6 hidden-md">
                                            <div className="mt-3">
                                                <a href="/why">
                                                    <h3 className="ruby-list-heading">Fast Implementation</h3>
                                                    <p className="ruby-list-description border-0">Rapid deployment of FlentisPRO VMS paces up workforce efficiency.</p>
                                                </a>
                                            </div>

                                            <div className="mt-3">
                                                <a href="/why">
                                                    <h3 className="ruby-list-heading">Scalability & Growth Support</h3>
                                                    <p className="ruby-list-description border-0">Future-proof your recruitment process to meet real-time market demands.</p>
                                                </a>
                                            </div>

                                            <div className="mt-3">
                                                <a href="/why">
                                                    <h3 className="ruby-list-heading">Return on Investment</h3>
                                                    <p className="ruby-list-description border-0">Maximize cost savings, minimize risks, expedite time-to-fill, and foster higher ROI.</p>
                                                </a>
                                            </div>

                                            <div className="mt-3">
                                                <a href="/why">
                                                    <h3 className="ruby-list-heading">Candidate Experience</h3>
                                                    <p className="ruby-list-description border-0">Attract top talent with a candidate-centric approach imposing positive employer brand.</p>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <span className="ruby-dropdown-toggle"></span></li>
                            <li className="ruby-menu-mega"><a href="/insight">Insight</a>
                                <div className="ruby-grid ruby-grid-lined">
                                    <div className="ruby-row justify-content-center">
                                        <div className="ruby-col-6">
                                            <div className="mt-3">
                                                <a href="/insight?type=blog">
                                                    <h3 className="ruby-list-heading">Blog</h3>
                                                    <p className="ruby-list-description border-0">Freshly brewed ideas, valuable insights, and staffing industry information here.</p>
                                                </a>
                                            </div>

                                            <div className="mt-3">
                                                <a href="/insight?type=case_study">
                                                    <h3 className="ruby-list-heading">Case Study</h3>
                                                    <p className="ruby-list-description border-0">A record of the transformative and inspiring journey of our clientele.</p>
                                                </a>
                                            </div>

                                            <div className="mt-3">
                                                <a href="/insight?type=whitepaper">
                                                    <h3 className="ruby-list-heading">Whitepaper</h3>
                                                    <p className="ruby-list-description border-0">Explore the thought leadership on workforce management with FlentisPRO.</p>
                                                </a>
                                            </div>

                                            <div className="mt-3">
                                                <a href="/insight?type=e-book">
                                                    <h3 className="ruby-list-heading">e-book</h3>
                                                    <p className="ruby-list-description border-0">Practical guidance for driving growth by managing the staffing process.</p>
                                                </a>
                                            </div>

                                            <div className="mt-3">
                                                <a href="/insight?type=webinar">
                                                    <h3 className="ruby-list-heading">Webinar</h3>
                                                    <p className="ruby-list-description border-0">Watch #FlentisTuneIn episodes for unique perspectives & insights.</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="ruby-col-6 hidden-md">
                                            <div className="mt-3">
                                                <a href="/insight?type=announcement">
                                                    <h3 className="ruby-list-heading">Announcements</h3>
                                                    <p className="ruby-list-description border-0">Be first to know about the exciting updates, new features, and partnerships.</p>
                                                </a>
                                            </div>

                                            <div className="mt-3">
                                                <a href="/insight?type=infographics">
                                                    <h3 className="ruby-list-heading">Infographics</h3>
                                                    <p className="ruby-list-description border-0">Simplifying and visualizing key concepts, data, and industry trends.</p>
                                                </a>
                                            </div>

                                            <div className="mt-3">
                                                <a href="/insight?type=videos">
                                                    <h3 className="ruby-list-heading">Videos</h3>
                                                    <p className="ruby-list-description border-0">Offering dynamic feeds with compelling videos, and dynamic data insights.</p>
                                                </a>
                                            </div>
                                            <div className="mt-3">
                                                <a href="/staffing-thesaurus">
                                                    <h3 className="ruby-list-heading">Staffing Thesaurus</h3>
                                                    <p className="ruby-list-description border-0">Become a Staffing and Recruitment Connoisseur with our Flashcards.</p>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <span className="ruby-dropdown-toggle"></span></li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                        </ul>
                        <span className="nav-item">

                            <a className="btn btn-primary blue-bg custm-btn me-3" href="/flentispro">FlentisPro</a>

                        </span>
                    </div>
                    {/* <!-- end of navbar-collapse --> */}

                </div>
            </nav>
        </div>
    )
}

export default Navbar
