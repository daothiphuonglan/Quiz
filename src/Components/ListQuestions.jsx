import React from 'react';
import {useState} from 'react'
import './ListQuestion.css'
import { TiTick } from "react-icons/ti"
import { AiOutlineClose } from "react-icons/ai";
const ListQuestions = ({questions}) => {
    const [selectedOptions, setSelectedOptions] = useState({});
  const [feedbacks, setFeedbacks] = useState({});

  const handleOptionChange = (questionId, optionId) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: optionId,
    });
  };

  const checkAnswer = (questionId) => {
    const currentAnswer = questions.find((question) => question.id === questionId).correctAnswerId;
    const selectedOption = selectedOptions[questionId];

    if (selectedOption === currentAnswer) {
      setFeedbacks({
        ...feedbacks,
        [questionId]: <TiTick />,
      });
    } else {
        setFeedbacks({
          ...feedbacks,
          [questionId]: <AiOutlineClose />,
        });
      }
    };
  
    return (
      <div className="list_questions">
        {questions.map((question) => (
          <div key={question.id}>
            <h2>{question.question}</h2>
            <form>
              {question.options.map((option) => (
                <div key={option.id}>
                  <input
                    type="radio"
                    name={`answer_${question.id}`}
                    id={option.id}value={option.id}
                    onChange={() => handleOptionChange(question.id, option.id)}
                  />
                  {option.text}
                  <br />
                </div>
              ))}
              <button className="btn-check" type="button" onClick={() => checkAnswer(question.id)}>
                Kiểm tra
              </button>
              <div className="feedback">{feedbacks[question.id]}</div>
            </form>
          </div>
        ))}
      </div>
    );
};

export default ListQuestions;