import React, { useState } from 'react';
import './App.css';

const LAWS_DATA = [
  {
    number: 1,
    name: "The Law of the Lid",
    subtitle: "How Well You Lead Determines How Well You Succeed",
    questions: [
      "When faced with a challenge, my first thought is, Who can I enlist to help? not What can I do?",
      "When my team, department, or organization fails to achieve an objective, my first assumption is that it's because of a leadership issue.",
      "I believe that developing my leadership skills will increase my effectiveness dramatically."
    ]
  },
  {
    number: 2,
    name: "The Law of Influence",
    subtitle: "The True Measure of Leadership Is Influence—Nothing More, Nothing Less",
    questions: [
      "I rely on influence rather than on my position or title to get others to follow me or do what I want them to do.",
      "During discussions or brainstorming settings, people often ask for my advice.",
      "I rely on my relationships with others rather than organizational systems and procedures to get things done."
    ]
  },
  {
    number: 3,
    name: "The Law of Process",
    subtitle: "Leadership Develops Daily, Not in a Day",
    questions: [
      "I have a concrete, specific plan for personal growth that I engage in weekly.",
      "I have found experts and mentors for key areas of my life with whom I engage on a regular basis.",
      "To promote my professional growth, I have read at least six books (or taken at least one worthwhile class or listened to twelve or more audio lessons) per year for the last three years."
    ]
  },
  {
    number: 4,
    name: "The Law of Navigation",
    subtitle: "Anyone Can Steer the Ship, but It Takes a Leader to Chart the Course",
    questions: [
      "I spot problems, obstacles, and trends that will impact the outcome of initiatives the organization puts into place.",
      "I can clearly see a pathway for the implementation of a vision, including not only the process but also the people and resources needed.",
      "I am asked to plan initiatives for my team, department, or organization."
    ]
  },
  {
    number: 5,
    name: "The Law of Addition",
    subtitle: "Leaders Add Value by Serving Others",
    questions: [
      "Rather than being annoyed when team members have issues preventing them from doing their jobs effectively, I see the issues as an opportunity to serve and mentor those people.",
      "I clear away obstacles and look for ways to make things better for the people I lead.",
      "I find great personal satisfaction in making other people become more successful."
    ]
  },
  {
    number: 6,
    name: "The Law of Solid Ground",
    subtitle: "Trust Is the Foundation of Leadership",
    questions: [
      "The people I work with confide in me regarding sensitive issues and future plans.",
      "When I tell people in the organization that I will do something, they can count on me to follow through.",
      "I avoid undermining others or talking behind their backs."
    ]
  },
  {
    number: 7,
    name: "The Law of Respect",
    subtitle: "People Naturally Follow Better Leaders Than Themselves",
    questions: [
      "People are naturally drawn to me and often want to work with me just to spend time with me.",
      "People I work with gladly take my suggestions and follow my direction.",
      "I make courageous decisions and take personal risks to benefit my team members even if there is no benefit to me."
    ]
  },
  {
    number: 8,
    name: "The Law of Intuition",
    subtitle: "Leaders Evaluate Everything with a Leadership Bias",
    questions: [
      "I can easily gauge morale, whether in a room full of people, on a team, or in the greater organization.",
      "I often take the right action as a leader even if I cannot explain why.",
      "I can read situations and sense trends without having to gather a lot of hard evidence."
    ]
  },
  {
    number: 9,
    name: "The Law of Magnetism",
    subtitle: "Who You Are Is Who You Attract",
    questions: [
      "I am satisfied with the caliber of people who report to me.",
      "I expect the people I attract to be similar to me in values, skills, and leadership ability.",
      "I recognize that no personnel process can improve the quality of people I recruit compared to improving myself."
    ]
  },
  {
    number: 10,
    name: "The Law of Connection",
    subtitle: "Leaders Touch a Heart Before They Ask for a Hand",
    questions: [
      "When I am new to a team, one of the first things I try to do is to develop a personal connection with everyone.",
      "I know the stories, hopes, and dreams of the people I lead.",
      "I avoid asking people to help accomplish the vision until we have built a relationship that goes beyond the nuts and bolts of our work together."
    ]
  },
  {
    number: 11,
    name: "The Law of the Inner Circle",
    subtitle: "Those Closest to You Determine the Level of Your Success",
    questions: [
      "I am strategic and highly selective about which people are closest to me personally and professionally.",
      "I regularly rely on key people in my life to help accomplish my goals.",
      "I believe that 50 percent or more of the credit for my accomplishments goes to the people on my team."
    ]
  },
  {
    number: 12,
    name: "The Law of Empowerment",
    subtitle: "Only Secure Leaders Give Power to Others",
    questions: [
      "No matter how talented the people who work for me, I don't feel threatened by them.",
      "It is my regular practice to give people I lead the authority to make decisions and take risks.",
      "I genuinely celebrate when someone from my team is recognized by others or promoted to a higher position."
    ]
  },
  {
    number: 13,
    name: "The Law of the Picture",
    subtitle: "People Do What People See",
    questions: [
      "If I observe an undesirable action or quality in team members, I check to make sure I'm not guilty of it myself before addressing it with them.",
      "I am continually working to make sure my values, words, and actions are consistent with one another.",
      "I do what I should rather than what I want because I am conscious that I am setting an example for others."
    ]
  },
  {
    number: 14,
    name: "The Law of Buy-In",
    subtitle: "People Buy into the Leader, Then the Vision",
    questions: [
      "I recognize that a lack of credibility in leaders can be as harmful to an organization as a lack of vision from leaders.",
      "When members of my team don't follow my direction, I examine whether I have a credibility problem before assuming they have a compliance problem.",
      "Even when my ideas are not great, my people tend to give me the benefit of the doubt and work with me."
    ]
  },
  {
    number: 15,
    name: "The Law of Victory",
    subtitle: "Leaders Find Ways for the Team to Win",
    questions: [
      "When I lead a team, I feel ultimate responsibility for whether it achieves its goals.",
      "I am continually looking for ways to help members of the team achieve victory.",
      "I make personal sacrifices to help ensure victory for my team, department, or organization."
    ]
  },
  {
    number: 16,
    name: "The Law of the Big Mo",
    subtitle: "Momentum Is a Leader's Best Friend",
    questions: [
      "I am aware of the morale of my team and take responsibility for trying to keep it high.",
      "Whenever I make a major leadership decision, I consider how that decision will impact momentum in my team, department, or organization.",
      "I initiate specific actions with the purpose of generating momentum when introducing something new or controversial."
    ]
  },
  {
    number: 17,
    name: "The Law of Priorities",
    subtitle: "Leaders Understand That Activity Is Not Necessarily Accomplishment",
    questions: [
      "I avoid tasks that do not require my personal leadership, don't have a tangible return, or don't reward me personally.",
      "I set aside time daily, monthly, and yearly to plan my upcoming schedule and activities based on my priorities.",
      "I delegate any task for which a team member can be at least 80 percent as effective as I could be doing it."
    ]
  },
  {
    number: 18,
    name: "The Law of Sacrifice",
    subtitle: "A Leader Must Give Up to Go Up",
    questions: [
      "I know making trade-offs is a natural part of leadership growth, and I make sacrifices to become a better leader as long as they don't violate my values.",
      "I expect to give more than my followers do in order to accomplish the vision.",
      "I will focus on responsibilities and give up my rights to reach my potential as a leader."
    ]
  },
  {
    number: 19,
    name: "The Law of Timing",
    subtitle: "When to Lead Is As Important As What to Do and Where to Go",
    questions: [
      "I expend as much effort figuring out the timing for an initiative as I do the strategy.",
      "When I know the timing is right for an initiative, I will launch it rather than waiting while trying to develop the ideal strategy.",
      "I can sense whether people are ready for an idea."
    ]
  },
  {
    number: 20,
    name: "The Law of Explosive Growth",
    subtitle: "To Add Growth, Lead Followers—To Multiply, Lead Leaders",
    questions: [
      "I believe that I can grow my organization more rapidly by developing leaders than by any other method.",
      "I spend a significant amount of time every week investing in the development of the top 20 percent of my leaders.",
      "I would rather see leaders I develop succeed on their own than keep them with me so that I can keep mentoring them."
    ]
  },
  {
    number: 21,
    name: "The Law of Legacy",
    subtitle: "A Leader's Lasting Value Is Measured by Succession",
    questions: [
      "I possess a strong sense of why I am in my job and why I am leading.",
      "In each position I've held, I have identified people who can carry on after me, and I have invested in them.",
      "One of my strongest motivations is to leave any team I lead better than I found it."
    ]
  }
];

const RATING_LABELS = {
  0: "Never",
  1: "Rarely",
  2: "Occasionally",
  3: "Always"
};

function App() {
  const [managerName, setManagerName] = useState('');
  const [evaluationDate, setEvaluationDate] = useState('');
  const [responses, setResponses] = useState({});

  const handleResponseChange = (lawNumber, questionIndex, value) => {
    setResponses(prev => ({
      ...prev,
      [`${lawNumber}-${questionIndex}`]: parseInt(value)
    }));
  };

  const isFormComplete = () => {
    if (!managerName || !evaluationDate) return false;
    const totalQuestions = LAWS_DATA.length * 3;
    return Object.keys(responses).length === totalQuestions;
  };

  const getCompletionPercentage = () => {
    const totalQuestions = LAWS_DATA.length * 3;
    const answered = Object.keys(responses).length;
    return Math.round((answered / totalQuestions) * 100);
  };

  const generatePDFContent = () => {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>21 Laws of Leadership Evaluation - ${managerName}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Poppins', sans-serif;
      padding: 40px;
      color: #1f2937;
      line-height: 1.6;
    }
    
    .header {
      text-align: center;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 3px solid #1e40af;
    }
    
    .header h1 {
      color: #1e40af;
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    
    .manager-info {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin-top: 20px;
      font-size: 16px;
    }
    
    .manager-info div {
      font-weight: 600;
    }
    
    .manager-info span {
      color: #ff6b35;
      font-weight: 400;
    }
    
    .law-section {
      margin-bottom: 30px;
      page-break-inside: avoid;
    }
    
    .law-header {
      background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .law-header-left {
      flex: 1;
    }
    
    .law-score {
      background: rgba(255, 255, 255, 0.2);
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 24px;
      font-weight: 700;
      min-width: 60px;
      text-align: center;
    }
    
    .law-number {
      font-size: 14px;
      font-weight: 600;
      opacity: 0.9;
    }
    
    .law-name {
      font-size: 20px;
      font-weight: 700;
      margin: 5px 0;
    }
    
    .law-subtitle {
      font-size: 14px;
      font-style: italic;
      opacity: 0.9;
    }
    
    .questions {
      padding: 0 20px;
    }
    
    .question-item {
      margin-bottom: 15px;
      padding: 12px;
      background: #f9fafb;
      border-radius: 8px;
      border-left: 4px solid #ff6b35;
    }
    
    .question-label {
      font-weight: 600;
      color: #1e40af;
      margin-bottom: 5px;
    }
    
    .question-text {
      margin-bottom: 8px;
      color: #374151;
    }
    
    .answer {
      display: inline-block;
      background: linear-gradient(135deg, #ff6b35 0%, #ff8c61 100%);
      color: white;
      padding: 6px 16px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 14px;
    }
    
    .scale-reference {
      background: #e0e7ff;
      padding: 15px;
      border-radius: 10px;
      margin-bottom: 30px;
      text-align: center;
    }
    
    .scale-reference h3 {
      color: #1e40af;
      margin-bottom: 10px;
      font-size: 18px;
    }
    
    .scale-items {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }
    
    .scale-item {
      font-weight: 600;
      color: #374151;
    }
    
    @media print {
      body {
        padding: 20px;
      }
      
      .law-section {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>21 Laws of Leadership Evaluation</h1>
    <div class="manager-info">
      <div>Manager: <span>${managerName}</span></div>
      <div>Date: <span>${evaluationDate}</span></div>
    </div>
  </div>
  
  <div class="scale-reference">
    <h3>Rating Scale Reference</h3>
    <div class="scale-items">
      <div class="scale-item">0 = Never</div>
      <div class="scale-item">1 = Rarely</div>
      <div class="scale-item">2 = Occasionally</div>
      <div class="scale-item">3 = Always</div>
    </div>
  </div>

  ${LAWS_DATA.map(law => {
    // Calculate total score for this law
    const lawScore = law.questions.reduce((total, question, idx) => {
      return total + (responses[`${law.number}-${idx}`] || 0);
    }, 0);
    
    return `
    <div class="law-section">
      <div class="law-header">
        <div class="law-header-left">
          <div class="law-number">Law ${law.number}</div>
          <div class="law-name">${law.name}</div>
          <div class="law-subtitle">${law.subtitle}</div>
        </div>
        <div class="law-score">${lawScore}</div>
      </div>
      <div class="questions">
        ${law.questions.map((question, idx) => {
          const response = responses[`${law.number}-${idx}`];
          return `
            <div class="question-item">
              <div class="question-label">Question ${String.fromCharCode(97 + idx)})</div>
              <div class="question-text">${question}</div>
              <div class="answer">Response: ${RATING_LABELS[response]}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  }).join('')}
</body>
</html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `21-laws-evaluation-${managerName.replace(/\s+/g, '-')}-${evaluationDate}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert('HTML file downloaded! Open it in your browser and use Print to PDF (Ctrl+P or Cmd+P) to create a PDF version.');
  };

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>21 Laws of Leadership</h1>
          <p className="subtitle">Manager Evaluation</p>
        </header>

        <div className="info-card">
          <h2>Manager Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="managerName">Manager Name</label>
              <input
                type="text"
                id="managerName"
                value={managerName}
                onChange={(e) => setManagerName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="evaluationDate">Evaluation Date</label>
              <input
                type="date"
                id="evaluationDate"
                value={evaluationDate}
                onChange={(e) => setEvaluationDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="scale-card">
          <h3>Rating Scale</h3>
          <div className="scale-grid">
            {Object.entries(RATING_LABELS).map(([value, label]) => (
              <div key={value} className="scale-item">
                <span className="scale-value">{value}</span>
                <span className="scale-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="progress-card">
          <div className="progress-info">
            <span>Evaluation Progress</span>
            <span className="progress-percentage">{getCompletionPercentage()}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${getCompletionPercentage()}%` }}
            />
          </div>
        </div>

        <div className="laws-container">
          {LAWS_DATA.map((law) => (
            <div key={law.number} className="law-card">
              <div className="law-header">
                <div className="law-number">Law {law.number}</div>
                <h2 className="law-name">{law.name}</h2>
                <p className="law-subtitle">{law.subtitle}</p>
              </div>
              
              <div className="questions-container">
                {law.questions.map((question, idx) => {
                  const responseKey = `${law.number}-${idx}`;
                  return (
                    <div key={idx} className="question-block">
                      <div className="question-label">
                        Question {String.fromCharCode(97 + idx)})
                      </div>
                      <div className="question-text">{question}</div>
                      <div className="rating-options">
                        {[0, 1, 2, 3].map((value) => (
                          <label 
                            key={value} 
                            className={`rating-option ${responses[responseKey] === value ? 'selected' : ''}`}
                          >
                            <input
                              type="radio"
                              name={responseKey}
                              value={value}
                              checked={responses[responseKey] === value}
                              onChange={(e) => handleResponseChange(law.number, idx, e.target.value)}
                            />
                            <span className="rating-value">{value}</span>
                            <span className="rating-label">{RATING_LABELS[value]}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="action-card">
          <button
            className="download-button"
            onClick={generatePDFContent}
            disabled={!isFormComplete()}
          >
            {isFormComplete() 
              ? '📄 Download Evaluation Report (HTML)' 
              : `⚠️ Complete all questions to download (${getCompletionPercentage()}%)`
            }
          </button>
          {isFormComplete() && (
            <p className="download-instructions">
              After downloading, open the HTML file in your browser and use <strong>Print to PDF</strong> (Ctrl+P or Cmd+P) to save as PDF.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

