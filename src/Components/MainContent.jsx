import React from 'react';
import './MainContent.css'
import data from '../databaseDemo/data.js';
import {useState, useEffect, useContext} from 'react'
import Category from './Category.jsx';
import ListQuestions from './ListQuestions.jsx';
const allTopics = ['all', ...new Set(data.map((item) => item.topic))];
const MainContent = ({ category }) => {
     const [questions, setQuestions] = useState([]);
     const [topics, setTopics] = useState(allTopics);
     
      useEffect(() => {
          setQuestions(data);
         
       }, []);


       const filterQuestions = (topic)=>{
        if (topic === 'all') {
          setQuestions(data);
          return;
        }
        const newQuestions = data.filter((question)=> question.topic===topic)
        setQuestions(newQuestions)
      }
   
  
    return (
      <div className="maincontent">
               <div className="maincontent-left">
                   <h1>Quiz Category</h1>
                <Category filterQuestions={filterQuestions} topics={topics}></Category>  
               </div>

        <div className="maincontent-right">
             <ListQuestions questions={questions}></ListQuestions>
        </div>
      </div>
    );
};

export default MainContent;