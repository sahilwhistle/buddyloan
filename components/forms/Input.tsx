interface InputProps {
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  error?: any;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  type,
  error,
  maxLength,
}) => {
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value;
    if (type === "number" && maxLength && inputValue.length > maxLength) {
      return; // Prevent further input if maxLength is exceeded
    }
    onChange(e);
  };
  return (
    <div className="relative w-full mb-4">
      <input
        type={type}
        className={`w-full h-[47.47px] border-[1px] px-3 poppins rounded-[12px] ${
          error ? "border-red-500" : "border-[#47B6F2]"
        } outline-none focus:ring-0 text-black`}
        placeholder=""
        value={value}
        onChange={handleInputChange}
        maxLength={maxLength} // Restrict input length
      />
      <label className="absolute top-0 left-3 px-1 text-[#47B6F2] bg-white transform -translate-y-1/2 pointer-events-none">
        {placeholder}
      </label>

      {/* Error */}
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
