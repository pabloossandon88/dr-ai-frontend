type LabelProps = {
    text: string;
  };
  
  const Label = ({ text }: LabelProps) => {
    return (
      <label className="block text-sm font-medium text-teal-700">
        {text}
      </label>
    );
  };
  
  export default Label;