import React from 'react';
import './ContentRow.css';
import { motion } from 'framer-motion';

const ContentRow = ({ title, data, Component, isLargeRow }) => {
    return (
        <div className="row" id={title} style={{ scrollMarginTop: '100px' }}>
            <h2 className="row__title">{title}</h2>
            
            <div className="row__posters">
                {data.map((item) => (
                    <Component key={item.id} item={item} isLargeRow={isLargeRow} />
                ))}
            </div>
        </div>
    );
};

export default ContentRow;
