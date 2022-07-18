import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleBtnFeedback = name => {
        this.setState(prevState => ({
                [name]: prevState[name] + 1,       
        }))
    }
  
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return (good + neutral + bad);
    }
  
    countPositiveFeedbackPercentage = () => {
      const { good } = this.state;
      const totalFeedback = this.countTotalFeedback();

      const positiveFeedback = Math.round((good / totalFeedback) * 100)
      return (positiveFeedback ? positiveFeedback : 0)
    }
    
    render() {
      const { good, neutral, bad } = this.state;
      return (
        <>
          <Section title='Please leave feedback'>
            <FeedbackOptions 
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleBtnFeedback}
            />
          </Section>
          <Section title='Statistics'>
            {this.countTotalFeedback() > 0 ? 
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
              :
              <Notification
                message='There is no feedback' />
            }
          </Section>
        </>
      )
    }
}

