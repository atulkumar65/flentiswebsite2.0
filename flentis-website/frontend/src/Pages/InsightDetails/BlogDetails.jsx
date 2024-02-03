import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InsightTags from "../../Components/UI/InsightTags";
// import '../../assets/css/BlogDetails.css';
import './Blogs.css';

const BlogDetails = () => {
  const { url_link } = useParams();
  const [blogdata, setBlogData] = useState({});
  const [tags, setTags] = useState([]);
  const [authImage, setAuthImage] = useState("");
  const [bannerImage, setBannerImage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/insights/" + url_link)
      .then((response) => response.json())
      .then((data) => {
        setBlogData(data[0]);
        setTags( data[0].tags.split(","));
        setAuthImage(data[0].author_image.slice(1));
        setBannerImage(data[0].banner_image.slice(1));
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
                  <p id="blogTime" className="mb-0" />
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
              <div className="insight-details-content" id="content2"></div>
            </div>
            <div
              id="bannerContainer2"
              className="col-xl-10 mx-auto text-center py-xl-5 py-3 wow fadeInUp"
              data-wow-delay="700ms"
            ></div>
          </div>
          <div className="row blog-content">
            <div className="col-xl-12 wow fadeInUp" data-wow-delay="100ms">
              <div className="insight-details-top-section text-center pe-0">
                <h2 id="headline">headline</h2>
                <p id="subheadline">subheadline</p>
                <br />
              </div>
            </div>
            <div className="col-xl-12" id="content3"></div>
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
                        src="https://www.newflentiswebsite.flentisdemo.com/assets/images/share-post-social-icon/facebook.png"
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
                        src="https://www.newflentiswebsite.flentisdemo.com/assets/images/share-post-social-icon/twitter.png"
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
                        src="https://www.newflentiswebsite.flentisdemo.com/assets/images/share-post-social-icon/linkedin.png"
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
                src="https://www.newflentiswebsite.flentisdemo.com/assets/images/share-post-img.png"
                className="img-fluid"
                alt="n/a"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-100 call-to-action-creative toe-page highlighter">
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
      </section>
    </>
  );
};

export default BlogDetails;
