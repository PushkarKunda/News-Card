import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewsCard = ({ news }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="news-card-container">
      <motion.div
        className="news-card"
      >
        <div className="thumbnail-container">
          <img src={news.thumbnail} alt={news.headline} className="thumbnail" />
          <div className="gradient-overlay"></div>
        </div>

        <div className="content-container">
          <div className="meta">
            <span className="source">{news.source}</span>
            <span className="dot">•</span>
            <span className="timestamp">{news.timestamp}</span>
          </div>

          <h2 className="headline">{news.headline}</h2>

          <button
            className="read-more-btn"
            onClick={() => setIsExpanded(true)}
          >
            Read More
          </button>
        </div>
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="detailed-view-overlay"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="detailed-view-content">
              <button className="close-btn" onClick={() => setIsExpanded(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="detailed-meta">
                <span className="source">{news.source}</span>
                <span className="dot">•</span>
                <span className="timestamp">{news.timestamp}</span>
              </div>

              <h2 className="detailed-headline">{news.headline}</h2>
              <img src={news.thumbnail} alt={news.headline} className="detailed-thumbnail" />
              <p className="detailed-text">{news.content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsCard;
