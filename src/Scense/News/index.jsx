import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import NEWS_API from '../../Constant/NewsJSON';
import NewsCard from './Components/NewsCard';

import './style.css';

class News extends React.Component {

    state = {
        articles: [],
    };

    componentDidMount() {
        this.setState({ 
            articles: NEWS_API.articles,
         });
    }

    render() {
        const { articles } = this.state;
        console.log('-->', articles)
        return(
            <div className="news-card-container">
            {
                articles.map(({ ...newsInsidesItems }) => (
                    <NewsCard { ...newsInsidesItems } />
                ))
            }
            </div>
        );
    }
}

export default News;

