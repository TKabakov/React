import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import FeedbackForm from './FeedbackForm';

descibe('Feedback Form', () => {
  
  test('User is able to submit the form if the score is lower than 5 and additional feedback is provided ', () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    fireEvent.change(score);
    fireEvent.change(comment);

    expect(handleSubmit).toHaveBeenCalledWith ({
      score,
      comment,
    });
  });

  test('User is able to submit the form if the score is higher than 5, without additional feedback', () => {
    const score = "9";
    const comment = "";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    fireEvent.change(score);
    fireEvent.change(comment);

    expect(handleSubmit).toHaveBeenCalledWith ({
      score,
      comment,
    });
  });
});

