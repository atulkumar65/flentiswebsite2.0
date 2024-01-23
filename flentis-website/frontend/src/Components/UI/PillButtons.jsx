import React from 'react'

const PillButtons = ({ insightType, alltypes, onValuechange }) => {
    const handlePillClick = (itype) => {
        onValuechange(itype);
    };

    return (
        <div id="filterTagsContainer" className="col-xl-5 pt-4 insight-filters wow fadeInUp">
            {alltypes.map((itype, i) => (
                <button
                    href="#"
                    key={i}
                    name={itype}
                    className={itype.toLocaleLowerCase() === insightType.toLocaleLowerCase() ? "badge rounded-pill active" : "badge rounded-pill"}
                    onClick={() => handlePillClick(itype)}
                >
                    {itype}
                </button>
            ))}
        </div>
    );
};

export default PillButtons
