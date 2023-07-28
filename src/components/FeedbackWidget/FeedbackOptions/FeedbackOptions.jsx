import { Btn, BtnWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      <Btn onClick={() => onLeaveFeedback('good')}>Good</Btn>
      <Btn onClick={() => onLeaveFeedback('neutral')}>Neutral</Btn>
      <Btn onClick={() => onLeaveFeedback('bad')}>Bad</Btn>
    </BtnWrapper>
  );
};
