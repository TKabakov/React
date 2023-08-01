import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import FeedbackForm from './FeedbackForm';

descibe('Feedback Form', () => {
  
  test('Submission is diabled, if score is lower than 5 and there is no feedback', () => {
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: "4" }});

    const linkElement = screen.getByText(/Score:/);
  expect(linkElement).toBeInTheDocument();
  });
});

