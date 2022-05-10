import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const statIncrease = e => {
    const { name } = e.currentTarget;
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
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onFeedback={statIncrease}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   statIncrease = ({ target }) => {
//     const { name } = target;
//     this.setState(prevState => {
//       return { [name]: prevState[name] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const { good } = this.state;
//     return Math.round((good / total) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage();
//     return (
//       <>
//         <Section title="Please leave your feedback">
//           <FeedbackOptions
//             options={['Good', 'Neutral', 'Bad']}
//             onFeedback={this.statIncrease}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               percentage={percentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
