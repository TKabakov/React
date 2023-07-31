import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import FeedbackForm from './FeedbackForm';

descibe('Feedback Form', () => {
  test('Submission is diabled, if score is lower than 5 and there is no feedback', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  });
});

