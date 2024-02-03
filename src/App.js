import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Quiz from "./Component/quiz";
import Timer from "./Component/Timer";
import Start from "./Component/Start";
// import data from "./Component/data";

const App = () => {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stopTime, setStopTime] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Who developed ReactJS and when ?",
      answers: [
        {
          text: "Jordan Mike, 2012",
          correct: false,
        },
        {
          text: "Jordan Walke, 2013",
          correct: true,
        },
        {
          text: "Tim Lee, 2009",
          correct: false,
        },
        {
          text: "Jordan Lee, 2007",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who developed AngularJS and when ?",
      answers: [
        {
          text: "Misko Hevery and Adam Abrons, 2010",
          correct: true,
        },
        {
          text: "Jordan Walke, 2013",
          correct: false,
        },
        {
          text: "Timee Pee, 2009",
          correct: false,
        },
        {
          text: "Jordan Lee, 2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who developed JavaScript and when ?",
      answers: [
        {
          text: "Misko Hevery and Adam Abrons, 2010",
          correct: false,
        },
        {
          text: "Jordan Walke, 2013",
          correct: false,
        },
        {
          text: "Timee Pee, 2009",
          correct: false,
        },
        {
          text: "Brendan Eich, 1995",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who developed Java and when ?",
      answers: [
        {
          text: "James Gosling, 1995",
          correct: true,
        },
        {
          text: "Jordan Walke, 2013",
          correct: false,
        },
        {
          text: "Timee Pee, 2009",
          correct: false,
        },
        {
          text: "Brendan Eich, 1995",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who developed Bootstrap and when ?",
      answers: [
        {
          text: "James Gosling, 1995",
          correct: false,
        },
        {
          text: "Jordan Walke, 2013",
          correct: false,
        },
        {
          text: "Mark Otto and Jacob Thornton, 2010",
          correct: true,
        },
        {
          text: "Brendan Eich, 1995",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who developed HTML and when ?",
      answers: [
        {
          text: "James Gosling, 1995",
          correct: false,
        },
        {
          text: "Tim Berners-Lee, 1991",
          correct: true,
        },
        {
          text: "Mark Otto and Jacob Thornton, 2010",
          correct: false,
        },
        {
          text: "Brendan Eich, 1995",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who developed CSS and when ?",
      answers: [
        {
          text: "James Gosling, 1995",
          correct: false,
        },
        {
          text: "Tim Berners-Lee, 1991",
          correct: false,
        },
        {
          text: "Mark Otto and Jacob Thornton, 2010",
          correct: false,
        },
        {
          text: " Håkon Wium Lie, 1994",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Who developed C and when ?",
      answers: [
        {
          text: "Dennis Ritchie, 1972",
          correct: true,
        },
        {
          text: "Tim Berners-Lee, 1991",
          correct: false,
        },
        {
          text: "Mark Otto and Jacob Thornton, 2010",
          correct: false,
        },
        {
          text: " Håkon Wium Lie, 1994",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who developed C++ and when ?",
      answers: [
        {
          text: "Dennis Ritchie, 1972",
          correct: false,
        },
        {
          text: "Bjarne Stroustrup , 1983",
          correct: true,
        },
        {
          text: "Mark Otto and Jacob Thornton, 2010",
          correct: false,
        },
        {
          text: " Håkon Wium Lie, 1994",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who developed SQL and when ?",
      answers: [
        {
          text: "Dennis Ritchie, 1972",
          correct: false,
        },
        {
          text: "Bjarne Stroustrup , 1983",
          correct: false,
        },
        {
          text: "Mark Otto and Jacob Thornton, 2010",
          correct: false,
        },
        {
          text: " Raymond Boyce and Donald Chamberlain, 1970",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Who developed NodeJS and when ?",
      answers: [
        {
          text: "Ryan Dahl , 2009",
          correct: true,
        },
        {
          text: "Bjarne Stroustrup , 1983",
          correct: false,
        },
        {
          text: "Mark Otto and Jacob Thornton, 2010",
          correct: false,
        },
        {
          text: " Raymond Boyce and Donald Chamberlain, 1970",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who developed TypeScript and when ?",
      answers: [
        {
          text: "Ryan Dahl , 2009",
          correct: false,
        },
        {
          text: "Bjarne Stroustrup , 1983",
          correct: false,
        },
        {
          text: "Anders Hejlsberg, 2010",
          correct: true,
        },
        {
          text: " Raymond Boyce and Donald Chamberlain, 1970",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who developed GIT and when ?",
      answers: [
        {
          text: "Linus Torvalds , 2005",
          correct: true,
        },
        {
          text: "Bjarne Stroustrup , 1983",
          correct: false,
        },
        {
          text: "Anders Hejlsberg, 2010",
          correct: false,
        },
        {
          text: " Raymond Boyce and Donald Chamberlain, 1970",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who developed AWS and when ?",
      answers: [
        {
          text: "Linus Torvalds , 2005",
          correct: false,
        },
        {
          text: "Andy Jassy , 2006",
          correct: true,
        },
        {
          text: "Anders Hejlsberg, 2010",
          correct: false,
        },
        {
          text: " Raymond Boyce and Donald Chamberlain, 1970",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who developed AI and when ?",
      answers: [
        {
          text: "John McCarthy , 1956",
          correct: true,
        },
        {
          text: "Andy Jassy , 2006",
          correct: false,
        },
        {
          text: "Anders Hejlsberg, 2010",
          correct: false,
        },
        {
          text: " Raymond Boyce and Donald Chamberlain, 1970",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stopTime ? (
              <h1 className="timeStop"> You Earned: {earned} </h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setStopTime={setStopTime}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    setStopTime={setStopTime}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="money">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemName">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
      {/* <div className="main">
        {stopTime ? (<h1 className="timeStop"> You Earned: {earned} </h1>) :
        (
          <>
          <div className="top">
          <div className="timer"><Timer setStopTime = {setStopTime} questionNumber = {questionNumber} /></div>
        </div>
        <div className="bottom">
          <Quiz
            data={data}
            setStopTime={setStopTime}
            setQuestionNumber={setQuestionNumber}
            questionNumber={questionNumber}
          />
        </div>
        </>
        )}
      </div>
      <div className="money">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemName">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default App;
