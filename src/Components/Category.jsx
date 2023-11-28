import React from 'react';
import './Category.css'
const Category = ({topics,filterQuestions}) => {
    return (
        <div className="btn-cate">
            {topics.map((topic, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterQuestions(topic)}
          >
            {topic}
          </button>
        );
      })}
        </div>
    );
};

export default Category;