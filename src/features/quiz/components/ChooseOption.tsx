import Button from "../../../components/Button";
import { ChooseOptionProps } from "../../../interfaces";
const ChooseOption: React.FC<ChooseOptionProps> = ({
  options,
  correctAnswer,
  selectedAnswer,
  quizSubmitted,
  question,
  onChooseOption,
}) => {
  const handleOptionSelection = (selectedOption?: string) => {
    if (selectedOption) {
      onChooseOption(question, selectedOption);
    }
  };

  return (
    <div className="choose-option-container">
      {options.map((option, index) => (
        <Button
          key={option}
          id={`selectBtn${index}`}
          label={option}
          disabled={quizSubmitted}
          quizSubmitted={quizSubmitted}
          isCorrectAnswer={option === correctAnswer}
          isActive={selectedAnswer === option}
          onClick={handleOptionSelection}
        />
      ))}
    </div>
  );
};

export default ChooseOption;
