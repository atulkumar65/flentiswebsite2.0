import React from 'react'

const InsightCardStatic = (props) => {
  const { data } = props;

  return (
    <div>
      <div
        className="col-xl-4 col-12 wow fadeInUp animated animated"
        data-wow-delay="500ms"
        style={{
          visibility: "visible",
          animationDelay: "500ms",
          animationName: "fadeInUp",
        }}
      >
        <a
          style={{ cursor: "pointer" }}
          href="/insight/case-study/vms-in-recruiting-a-manufacturer-saves-time-on-hiring"
        >
          <div className="filter-results-data">
            <img
              src="https://www.flentis.com/assets/images/BlogImages/MicrosoftTeams-image%20(14).png"
              className="img-fluid"
              style={{ borderRadius: 5 }}
              alt="VMS in Recruiting"
            />
            <div className="filters-badges mt-4">
              <span className="badge rounded-pill" style={{ marginRight: 10 }}>
                VMS in Recruiting
              </span>
              <span className="badge rounded-pill" style={{ marginRight: 10 }}>
                VMS
              </span>
            </div>
            <div className="filter-results-titles">
              <h4 className="py-3">
                VMS in Recruiting: A Manufacturer Saves Time on Hiring
              </h4>
              <div id="description-content">
                <p dir="ltr">
                  A leading manufacturer of homeware appliances in the USA
                  evaluated FlentisPRO.{" "}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default InsightCardStatic;
