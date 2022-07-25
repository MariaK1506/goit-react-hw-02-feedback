import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = option => {
    // const buttonKey = event.target.textContent;
    // console.log(key);

    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.keys(this.state).reduce(
      (total, value) => total + this.state[value],
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <GlobalStyle />

        <Section title="Please leave feddback">
          <Container>
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleFeedback}
            ></FeedbackOptions>
          </Container>
        </Section>
        <Section title="Statistics">
          <Container>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            ></Statistics>
          </Container>
        </Section>
      </>
    );
  }
}
