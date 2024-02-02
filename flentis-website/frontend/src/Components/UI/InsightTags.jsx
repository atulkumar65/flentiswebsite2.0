import React from 'react';

const InsightTags = (props) => {
  let mytag =
    props.tag.toString().trim().charAt(0).toUpperCase() +
    props.tag.toString().trim().slice(1);
  return (
    <span className="badge rounded-pill" style={{ marginRight: 10 }}>
      {mytag}
    </span>
  );
};

export default InsightTags