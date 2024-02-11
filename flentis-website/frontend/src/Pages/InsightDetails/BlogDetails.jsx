import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InsightTags from "../../Components/UI/InsightTags";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
// import '../../assets/css/BlogDetails.css';
import './Blogs.css';

const BlogDetails = () => {
  const { url_link } = useParams();
  let serverURL = process.env.REACT_APP_API_BASE_URL;
  const [blogdata, setBlogData] = useState({});
  const [tags, setTags] = useState([]);
  const [authImage, setAuthImage] = useState("");
  const [blogTime, setBlogTime] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    fetch(`${serverURL}/insights/${url_link}`)
      .then((response) => response.json())
      .then((data) => {
        console.log((data[0]));
        console.log((data[0].content3));
        setBlogData(data[0]);
        setTags(data[0].tags.split(","));
        setAuthImage(data[0].author_image.slice(1));
        setBannerImage(data[0].banner_image.slice(1));
        setBlogTime(data[0].blog_time)
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <section
        className="py-100 position-relative insight-page"
        style={{ backgroundColor: "#f8f9fd" }}
      >
        <div className="container-fluid px-150 insight-details-page">
          <div className="row">
            <div
              className="col-xl-8 pt-lg-5 pt-3 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="filters-badges">
                {tags.map((tag, i) => (
                  <InsightTags key={i} tag={tag} />
                ))}
              </div>
              <div className="insight-details-top-section">
                <h2>{blogdata.title}</h2>
                <p
                  className="blue-link"
                  dangerouslySetInnerHTML={{ __html: blogdata.content1 }}
                ></p>
              </div>
              <div className="d-flex align-items-center blog-author">
                <div className="flex-shrink-0" id="authorImageContainer">
                  <img
                    src={authImage}
                    alt="author_image"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <p id="author" className="mb-0">
                    {blogdata.author_name}
                  </p>
                  <p id="blogTime" className="mb-0">{blogTime} minutes to read</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 pt-4 wow fadeInRight"
              data-wow-delay="400ms"
            >
              <div id="bannerContainer1">
                <img
                  src={bannerImage}
                  alt="banner_image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-100 pt-0 position-relative insight-page"
        style={{ backgroundColor: "#f8f9fd" }}
      >
        <div className="container insight-details-page">
          <div className="row">
            <div className="col-xl-12 ">
              <div className="insight-details-content blue-link" id="content2" dangerouslySetInnerHTML={{ __html: blogdata.content2 }}></div>
            </div>
            <div
              id="bannerContainer2"
              className="col-xl-10 mx-auto text-center py-xl-5 py-3 wow fadeInUp"
              data-wow-delay="700ms"
            ></div>
          </div>
          <div className="row blog-content">
            <div className="col-xl-12 blue-link" id="content3" dangerouslySetInnerHTML={{ __html: blogdata.content3 }}></div>
          </div>
          <div className="row mt-5 share-post-section">
            <div
              className="col-lg-6 insight-page border-top wow fadeInLeft"
              data-wow-delay="200ms"
            >
              <div className="filter-results">
                <h3>
                  Share this <span>post</span>
                </h3>
              </div>
              <div
                className="share-social-icons"
                style={{ padding: "15px 0 15px 25px !important" }}
              >
                <ul>
                  <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a onclick="fbshareCurrentPage()">
                      <img
                        src="https://www.flentis.com/assets/images/share-post-social-icon/facebook.png"
                        className="img-fluid"
                        style={{ height: 35, width: 35 }}
                        alt="facebook"
                      />
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a onclick="twitterShareCurrentPage()">
                      <img
                        src="https://www.flentis.com/assets/images/share-post-social-icon/twitter.png"
                        className="img-fluid"
                        style={{ height: 35, width: 35 }}
                        alt="twitter"
                      />
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a onclick="linkedInShareCurrentPage()">
                      <img
                        src="https://www.flentis.com/assets/images/share-post-social-icon/linkedin.png"
                        className="img-fluid"
                        style={{ height: 35, width: 35 }}
                        alt="linkedin"
                      />
                    </a>
                  </li>
                  <li className="ps-3">
                    <p style={{ fontSize: 25 }}>+ 1,023 shared this </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-6 text-end wow fadeInRight"
              data-wow-delay="400ms"
            >
              <img
                src="https://www.flentis.com/assets/images/share-post-img.png"
                className="img-fluid"
                alt="n/a"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-100 call-to-action-creative toe-page highlighter">
        <div className="container-fluid px-150">
          <div className="row">
            <div className="col-lg-12 col-12 mx-auto fill-in-the-blanks-form-section">
              <div className="hcwhy-section position-relative">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="content ">
                      <div
                        className=" wow fadeInUp fill-in-the-blanks-form"
                        data-wow-delay="400ms"
                      >
                        <form
                          method="post"
                          action="./testing-blog-title?op=testing-blog-title"
                          id="ctl00"
                          className="hcwhy-section-ml"
                        ></form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      <section className="py-100 call-to-action-creative toe-page">
        <div className="container-fluid px-150">
          <div className="row">
            <div className="col-lg-12 col-12 mx-auto fill-in-the-blanks-form-section">
              <div className="hcwhy-section position-relative">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="content ">
                      <div
                        className=" wow fadeInUp fill-in-the-blanks-form animated animated"
                        data-wow-delay="400ms"
                        style={{
                          visibility: "visible",
                          animationDelay: "400ms",
                          animationName: "fadeInUp"
                        }}
                      >
                        <form
                          method="post"
                          action=""
                          id="ctl00"
                          className="hcwhy-section-ml"
                          data-hs-cf-bound="true"
                        >
                          <p style={{ marginLeft: 20 }}>
                            I am
                            <input
                              name="ctl00$MainContent$txtRdName"
                              type="text"
                              id="txtRdName"
                              className="w-25 fitb-form"
                              autoComplete="on"
                              onkeypress=" return allowOnlyLetters(event,this);"
                              placeholder="(name)"
                            />
                            from
                            <input
                              name="ctl00$MainContent$txtRdCompany"
                              type="text"
                              id="txtRdCompany"
                              autoComplete="on"
                              className="w-25 fitb-form"
                              placeholder="(company)"
                            />
                            looking for
                            <select
                              name="ctl00$MainContent$txtRdSelect"
                              id="txtRdSelect"
                              className="w-25 fitb-form"
                            >
                              <option selected="selected" value="">
                                (select)
                              </option>
                              <option
                                value="More Information About Your VMS"
                                className="text-lg-start"
                              >
                                More Information About Your VMS
                              </option>
                              <option value="Product Demo" className="text-lg-start">
                                Product Demo
                              </option>
                              <option
                                value="MSP Partnership"
                                className="text-lg-start"
                              >
                                MSP Partnership
                              </option>
                              <option
                                value="Staffing Agency Partnership"
                                className="text-lg-start"
                              >
                                Staffing Agency Partnership
                              </option>
                              <option value="Other" className="text-lg-start">
                                Other
                              </option>
                            </select>
                            Please book a meeting on
                            {/* <input
                              name="ctl00$MainContent$txtRdDate"
                              id="txtRdDate"
                              autoComplete="on"
                              type="datepicker"
                              className="w-25 fitb-form"
                              placeholder="(dd-mm-yyyy)"
                              onfocus="(this.type='date')"
                              onblur="(this.type='text')"
                              min="2024-02-06"
                            /> */}
                            <DatePicker wrapperClassName="fitb-form" className="fitb-form" selected={startDate} onChange={(date) => setStartDate(date)}  />
                            &nbsp;&nbsp; . Contact me on
                            <input
                              name="ctl00$MainContent$txtRdPhn"
                              maxLength={11}
                              id="txtRdPhn"
                              autoComplete="on"
                              type="tel"
                              onkeypress="return isNumberKey(event)"
                              className="w-25 fitb-form number-mr"
                              placeholder="(1-212-456-7890)"
                              style={{ marginRight: "10px !important" }}
                            />
                            and send me an invite at
                            <input
                              name="ctl00$MainContent$txtRdEmail"
                              type="text"
                              id="txtRdEmail"
                              autoComplete="on"
                              className="w-25 fitb-form"
                              placeholder="(email address)"
                            />
                          </p>
                          <div className="mt-lg-5" style={{ marginLeft: 20 }}>
                            <a
                              onclick="return InsightDetailsValidationEvent();"
                              id="MainContent_LinkButton1"
                              className="btn btn-light learn-more-btn-white"
                              href="javascript:__doPostBack('ctl00$MainContent$LinkButton1','')"
                            >
                              Submit
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fitb-shapes">
                  <ul>
                    <li
                      className="fitb-shapes-1 wow fadeInUp animated animated"
                      data-wow-delay="300ms"
                      style={{
                        visibility: "visible",
                        animationDelay: "300ms",
                        animationName: "fadeInUp"
                      }}
                    >
                      <img
                        src="https://www.flentis.com/assets/images/insight-img/fill-in-the-blank-shape-1.png"
                        className="img-fluid"
                      />
                    </li>
                    <li
                      className="fitb-shapes-2 wow fadeInLeft animated animated"
                      data-wow-delay="500ms"
                      style={{
                        visibility: "visible",
                        animationDelay: "500ms",
                        animationName: "fadeInLeft"
                      }}
                    >
                      <img
                        src="https://www.flentis.com/assets/images/insight-img/fill-in-the-blank-shape-2.png"
                        className="img-fluid"
                      />
                    </li>
                    <li
                      className="fitb-shapes-3 wow fadeInLeft animated animated"
                      data-wow-delay="700ms"
                      style={{
                        visibility: "visible",
                        animationDelay: "700ms",
                        animationName: "fadeInLeft"
                      }}
                    >
                      <img
                        src="https://www.flentis.com/assets/images/insight-img/fill-in-the-blank-hand.png"
                        className="img-fluid"
                      />
                    </li>
                    <li
                      className="fitb-shapes-4 wow fadeInRight animated animated"
                      data-wow-delay="900ms"
                      style={{
                        visibility: "visible",
                        animationDelay: "900ms",
                        animationName: "fadeInRight"
                      }}
                    >
                      <img
                        src="https://www.flentis.com/assets/images/insight-img/fill-in-the-blank-coffee.png"
                        className="img-fluid"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* end of col */}
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </section>








    </>
  );
};

export default BlogDetails;
