import React from 'react';
import NewsCard from './NewsCard';
import { mockNews } from '../data/mockData';

const NewsFeed = () => {
  return (
    <div className="news-feed-container scroll-container">
      {mockNews.map((news) => (
        <div key={news.id} className="news-feed-item-wrapper">
          <NewsCard news={news} />
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
