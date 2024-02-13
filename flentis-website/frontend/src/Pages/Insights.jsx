import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PillButtons from "../Components/UI/PillButtons";
import { InsightCard } from "../Components/UI/InsightCard";
import { ThreeCircles } from 'react-loader-spinner';

const Insights = () => {
  const serverURL = process.env.REACT_APP_API_BASE_URL;
  let { type } = useParams() || 'all';
  type = type ? type.replace("_", " ") : '';
  const alltypes = [
    "All",
    "Blog",
    "Case Study",
    "Webinar",
    "Infographics",
    "Video",
    "E-book",
    "Whitepaper",
    "Announcement",
  ];
  const [searchInput, setSearchInput] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [insightType, setInsightType] = useState(type || "All");
  const [cardData, setCardData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [allLength, setAllLength] = useState(0);
  const [offsetValue, setOffsetValue] = useState(0);
  const [cardDataRecommended, setCardDataRecommended] = useState([]);

  const handleSearchInputChange = (event) => {
    let searchQuery = event.target.value;
    console.log(searchQuery);
    setSearchInput(searchQuery);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(searchInput.trim().length);
    if (searchInput.trim().length > 0) console.log(searchInput);
  };

  const handlePill = (itype) => {
    // setInsightType(itype);
    // setShowLoader(true);
    // setOffsetValue(0);
    window.location = "/insight/"+ itype.replace(" ", "_").toLowerCase();
  };

  const handleViewMoreClick = () => {
    let offsetVal = offsetValue + 6;
    let server_url = `${serverURL}/getInsights/${insightType}/${offsetVal}`;
    // alert(server_url);
    fetch(server_url).then((data) => data.json())
      .then((res) => {
        let cardsLength = cardData.length + res.length;
        setCardData((prev) => prev.concat(res));
        setDataLength(allLength - cardsLength);
        setOffsetValue(prev => prev + 6);
      })
  }
  // useEffect to set insight type to "all" when component mounts
  useEffect(() => {
    setInsightType(type || "all");
    setShowLoader(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(`${serverURL}/blogsCount/${insightType}`);
    Promise.all([
      fetch(`${serverURL}/blogsCount/${insightType}`).then((data) => data.json()),
      fetch(`${serverURL}/getInsights/${insightType}/0` ).then((data) => data.json()),
      fetch(`${serverURL}/getInsightsAll`).then((data) => data.json())
    ]).then((values) => {
      setAllLength(values[0][0].count);
      setCardData(values[1]);
      setDataLength(values[0][0].count % values[1].length);
      setCardDataRecommended(values[2].slice(0, 3));
      setShowLoader(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [insightType])

  return (
    <>
      <section
        className=" py-100 pb-5 position-relative insight-page"
        style={{ backgroundColor: "#f8f9fd" }}
      >
        <div className="container-fluid px-150 ">
          <div
            className="row border-bottom pb-5 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="col-xl-12">
              <div className="insight-top-search-section">
                <h1>
                  <span className="d-xl-block">
                    <span className="font-bold typed-text">
                      <span
                        className="cursor typing"
                        style={{ color: "#4557f7" }}
                      />
                    </span>
                    <b className="">We’re FlentisPro.</b> See our
                    <br />
                    thoughts, stories and ideas.
                  </span>
                </h1>
              </div>
            </div>
            <div
              className="col-xl-8 pt-lg-5 pt-3 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <form
                onSubmit={handleSearch}
                className="row insight-search-box position-relative "
              >
                <div className="row insight-search-box position-relative ">
                  <div className="col-xl-5 ">
                    <input
                      type="text"
                      className="form-control search-input"
                      id="txtSearch"
                      placeholder="Enter Your Search Term"
                      onChange={handleSearchInputChange}
                    />
                  </div>
                  <div className="col-xl-3">
                    <button
                      onClick={handleSearch}
                      className="btn btn-primary mb-3 search-btn"
                    >
                      Search
                    </button>
                  </div>
                  <div className="col col-xl-3 col-12 text-lg-start text-center">
                    <a
                      href="/staffing-thesaurus"
                      className="btn btn-outline-primary mb-3 flashcard-btn"
                    >
                      Flashcards
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <>
              <PillButtons
                insightType={insightType}
                alltypes={alltypes}
                onValuechange={handlePill}
              />
              {/* <p>{insightType}</p> */}
            </>
          </div>
        </div>
        <div className="announcement-img wow fadeInUp" data-wow-delay="300ms">
          <p>
            <img
              src="/assets/images/announcement-img.png"
              className=""
              alt="n/a"
            />
          </p>
        </div>
      </section>
      <section
        className="py-100 pt-0 position-relative insight-page border-bottom"
        style={{ backgroundColor: "#f8f9fd" }}
      >
        <div className="container-fluid px-150">
          <div className="row">
            <div className="col-xl-12 ">
              <div
                className="filter-results wow fadeInLeft animated animated"
                data-wow-delay="400ms"
                style={{ visibility: "visible", animationDelay: "400ms" }}
              >
                <h3>
                  Get started with our <span>Insightful Content</span>
                </h3>
                <p>
                  <i>Check out our extensive library</i>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4" id="card-container">
            {
              showLoader ? <div className="col-12">
                <ThreeCircles visible={true}
                  height="100"
                  width="50%"
                  color="#4557f7"
                  ariaLabel="three-circles-loading"
                  wrapperStyle={{ top: "50%", left: "50%", position: "absolute" }}
                  wrapperClass="" />
              </div> : cardData.map((card) => (
                <InsightCard key={card.id} data={card} />
              ))
            }
          </div>
          <div
            className="col-xl-12 text-center mt-xl-5 wow fadeInUp animated animated"
            data-wow-delay="200ms"
            style={{ visibility: "visible", animationDelay: "200ms" }}
          >
            {
              (dataLength > 0 && !showLoader) ? (<button
                type="submit"
                id="btnLoadMore"
                className="btn btn-primary view-more-btn ml-sm-0"
                onClick={handleViewMoreClick}
              >
                View more
              </button>) : <></>
            }
          </div>
        </div>
      </section>
      <section
        className="py-100 pt-5 position-relative insight-page"
        style={{ backgroundColor: "#f8f9fd" }}
      >
        <div className="container-fluid px-150">
          <div className="row">
            <div className="col-xl-12 ">
              <div className="filter-results">
                <h3>
                  <span>Recommended</span>
                </h3>
              </div>
            </div>
          </div>
          <div
            className="row mt-5 insight-recommended-section"
            id="recommendedSection"
          >
            {cardDataRecommended.map((card) => (
              <InsightCard key={card.id} data={card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Insights;
