import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import './style.css';

const NewsCard = ({ author, title, description, urlToImage }) => (
    <div className="news-card">
        <div className="image-container">
            <img alt="no image" src={urlToImage} width="100%" />
        </div>
        <div className="news-title-container">
            <h4>{title}</h4>
        </div>
        <div className="author-container">
            by <i>{author}</i>
        </div>
        <div className="description-conainer">
            {description}
        </div>
    </div>
);

export default NewsCard;