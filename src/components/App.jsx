import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      
      case 'bad':
        setBad(bad + 1);
        break;
      
      default:
        return;
    }
  }
   
  const total = good + neutral + bad;
  
    const countPositiveFeedbackPercentage = () => {
      const positiveFeedback = Math.round((good / total) * 100)
      return (positiveFeedback ? positiveFeedback : 0)
    }
    

      return (
        <>
          <Section title='Please leave feedback'>
            <FeedbackOptions 
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={handleBtnFeedback}
            />
          </Section>
          <Section title='Statistics'>
            {total > 0 ? 
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={countPositiveFeedbackPercentage()}
              />
              :
              <Notification
                message='There is no feedback' />
            }
          </Section>
        </>
      )
}

