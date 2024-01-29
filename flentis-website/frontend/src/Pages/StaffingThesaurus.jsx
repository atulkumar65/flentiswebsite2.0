import React from 'react'

const StaffingThesaurus = () => {

    const allBtnStyle = {
        // display: "inline-block",
        // color: "white",
        backgroundColor: "#d8d4d5",
        // padding: "5px 24px",
        // disabled: true,
        // borderRadius: '2.2rem',
        // marginRight: "10px",
        // fontFamily: "Arial"
    };

    return (
        <>
            <div className='py-100 pb-4  position-relative' style={{ backgroundColor: "#4557f7" }}>
                <div className="container flashcards-search-section ">
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
                            <div
                                className="headings text-center text-white wow fadeInUp"
                                data-wow-delay="400ms"
                            >
                                <h2>Staffing &amp; Recruiting Flashcards</h2>
                                <p className=" text-white">
                                    Staffing, similar to many industries, has a myriad of proprietary
                                    terms and acronyms. We have compiled this helpful flashcards
                                    <span className="d-lg-block d-inline">
                                        including our own definitions as well as terms from the staffing
                                        lexicon compiled by Staffing Industry Analysts.
                                    </span>
                                </p>
                                <div className="px-70 position-relative search-box-section">
                                    <div className="search-icon">
                                        <i className="fa fa-search" aria-hidden="true" />
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control search-box"
                                        id="exampleFormControlInput1"
                                        placeholder="search definitions of hiring terms..."
                                        oninput="searchCard();"
                                    />
                                    <div className="a-to-z-section wow fadeInUp" data-wow-delay="600ms">
                                        <span className="page-item active" aria-current="page">
                                            <a href="" className="page-link d-inline-block all-button me-4">
                                                {/* style={{ backgroundColor: '#d8d4d5 !important' }} */}
                                                All
                                            </a>
                                        </span>
                                        <nav className="d-inline-block" aria-label="...">
                                            <ul className="pagination pagination-sm">
                                                <li className="page-item">
                                                    <a href="#_A" className="page-link">
                                                        A
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_B">
                                                        B
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_C">
                                                        C
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_D">
                                                        D
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_E">
                                                        E
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_F">
                                                        F
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_G">
                                                        G
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_H">
                                                        H
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_I">
                                                        I
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_J">
                                                        J
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_K">
                                                        K
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_L">
                                                        L
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_M">
                                                        M
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_N">
                                                        N
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_O">
                                                        O
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_P">
                                                        P
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_Q">
                                                        Q
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_R">
                                                        R
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_S">
                                                        S
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_T">
                                                        T
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_U">
                                                        U
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_V">
                                                        V
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_W">
                                                        W
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#_Y">
                                                        Y
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link border-0" href="#_Z">
                                                        Z
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            {/* end of col */}
                        </div>
                    </div>
                    {/* end of row */}
                    {/* <div className="flashcards-search-section-shapes">
                    <ul>
                        <li className="fss-shapes-1 wow fadeInUp" data-wow-delay="400ms">
                            <img
                                src="assets/images/flash-card-imgs/flashcards-search-shape-left.png"
                                className="img-fluid"
                            />
                        </li>
                        <li className="fss-shapes-2 wow fadeInUp" data-wow-delay="600ms">
                            <img
                                src="assets/images/flash-card-imgs/flashcards-search-shape-right.png"
                                className="img-fluid"
                            />
                        </li>
                        <li className="fss-shapes-3 wow fadeInUp" data-wow-delay="900ms">
                            <img
                                src="assets/images/flash-card-imgs/roket-girl.png"
                                className="img-fluid"
                            />
                        </li>
                        <li className="fss-shapes-4 wow fadeInRight" data-wow-delay="1200ms">
                            <img
                                src="assets/images/flash-card-imgs/a-to-z.png"
                                className="img-fluid"
                            />
                        </li>
                    </ul>
                </div> */}
                </div>
            </div>
            {/* end of container */}


        </>
    )
}

export default StaffingThesaurus
