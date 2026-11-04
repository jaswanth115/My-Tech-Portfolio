import React from 'react';
import './ContentRow.css';

const ContentRow = ({ title, data, Component, isLargeRow, expandable, sectionId }) => {
    return (
        <div className="row" id={sectionId || title} style={{ scrollMarginTop: '100px' }}>
            <h2 className="row__title">{title}</h2>
            
            <div className="row__posters">
                {data.map((item) => (
                    <Component key={item.id} item={item} isLargeRow={isLargeRow} expandable={expandable} />
                ))}
            </div>
        </div>
    );
};

export default ContentRow;
