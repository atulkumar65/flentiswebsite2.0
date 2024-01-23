import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InsightCardStatic from "../Components/UI/InsightCardStatic";
import PillButtons from '../Components/UI/PillButtons';
import { InsightCard } from '../Components/UI/InsightCard';
const Insights = () => {
  let { type } = useParams() || null;
  const alltypes = ['All', 'Blog', 'Case Study', 'Webinar', 'Infographics', 'Video', 'E-book', 'Whitepaper', 'Announcement'];

  const [searchInput, setSearchInput] = useState('');
  const [insightType, setInsightType] = useState(type || 'All');
  const [cardData, setCardData] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
  };

  const handlePill = (itype) => {
    setInsightType(itype);
  }

  useEffect(()=>{
    fetch('http://localhost:5000/insights') 
      .then(response => response.json())
      .then(data => {
        setCardData(data);
        console.log(data);
        console.log(cardData);
      })
      .catch(error => console.error('Error:', error));
  },[])

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
                    href="/staffing-thesaurus.aspx"
                    className="btn btn-outline-primary mb-3 flashcard-btn"
                  >
                    Flashcards
                  </a>
                </div>
              </form>
            </div>
            <>
              <PillButtons
                insightType={insightType}
                alltypes={alltypes}
                onValuechange={handlePill}
              />
              <p>{insightType}</p>
            </>
          </div>
        </div>
        <div className="announcement-img wow fadeInUp" data-wow-delay="300ms">
          <p>
            <img src="/assets/images/announcement-img.png" className="" alt="n/a"/>
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
            {/* All the cards go inside to this container */}
            {/* <InsightCardStatic /> */}
            {
              cardData.map((card) => (
                <InsightCard key={card.id} data={card} />
              ))
            }
          </div>
          <div
            className="col-xl-12 text-center mt-xl-5 wow fadeInUp animated animated"
            data-wow-delay="200ms"
            style={{ visibility: "visible", animationDelay: "200ms" }}
          >
            <button
              type="submit"
              id="btnLoadMore"
              className="btn btn-primary view-more-btn ml-sm-0"
              // onClick="loadMore()"
            >
              View more
            </button>
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
            {/* section for recommended articles */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Insights;