import React from "react";

export const InsightCard = ({ data }) => {
  let insightURl = `/insights/${data.insight_type.toLowerCase()}/${data.url_link}`;
  let insightImageURl = "https://www.flentis.com" + data.banner_image.slice(1);
  let insightTitle = data.title;
  let insightDesc = data.meta_description;
  let insightTags = data.tags.split(",");
  var errImage = '/assets/images/BlogImages/Announcing Reasons that will Make You Try this Direct Sourcing Recruitment Platform.png';
  const [imgValid, setImgValid] = React.useState(true);

  var image = new Image();
  image.src = insightImageURl;
  image.onerror = () => {
    console.log('image doesn t exist');
    setImgValid(false);
  }

  return (
    <>
      <div
        className="col-xl-4 col-12 wow fadeInUp animated"
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
              src={!imgValid ? errImage : insightImageURl}
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
  let mytag = props.tag.toString().trim().charAt(0).toUpperCase() + props.tag.toString().trim().slice(1);
  return (
    <span className="badge rounded-pill" style={{ marginRight: 10 }}>
      {mytag}
    </span>
  );
};
