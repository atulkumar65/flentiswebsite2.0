import React from "react";

export const InsightCard = ({ data }) => {
  let insightURl = `/insights/${data.insight_type.toLowerCase()}/${
    data.url_link
  }`;
  let insightImageURl = "https://www.flentis.com" + data.banner_image.slice(1);
  let insightTitle = data.title;
  let insightDesc = data.meta_description;
  let insightTags = data.tags.split(" ");
  return (
    <>
      <div
        className="col-xl-4 col-12 wow fadeInUp animated animated"
        data-wow-delay="500ms"
        style={{
          visibility: "visible",
          animationDelay: "500ms",
          animationName: "fadeInUp",
        }}
      >
        <a style={{ cursor: "pointer" }} href={insightURl}>
          <div className="filter-results-data">
            <img
              src={insightImageURl}
              className="img-fluid"
              style={{ borderRadius: 5 }}
              alt="VMS in Recruiting"
            />
            <div className="filters-badges mt-4">
              {insightTags.map((tag, i) => (
                <InsightTags key={i} tag={tag} />
              ))}
            </div>
            <div className="filter-results-titles">
              <h4 className="py-3">{insightTitle}</h4>
              <div id="description-content">
                <p dir="ltr">{insightDesc}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

const InsightTags = (props) => {
  let tag = props.tag; //?.charAt(0).ToUpperCase() + props.tag?.slice(1);
  return (
    <span className="badge rounded-pill" style={{ marginRight: 10 }}>
      {tag}
    </span>
  );
};
