import React, { useEffect, useState } from "react";
import Input from "../../components/forms/Input";

interface OtpInputProps {
  isOtp?: any;
  placeholder: string;
  onSendOTP: () => void;
  otpValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: any;
}

const OtpInput: React.FC<OtpInputProps> = ({
  isOtp,
  placeholder,
  onSendOTP,
  otpValue,
  onChange,
  error,
}) => {
  const [timer, setTimer] = useState(15);
  const [isTimerActive, setIsTimerActive] = useState(false);

  // Start countdown timer after OTP is sent
  useEffect(() => {
    if (isOtp && !isTimerActive) {
      setIsTimerActive(true); // Start the timer when OTP is sent
    }

    if (isTimerActive && timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      // Cleanup interval on unmount or when timer ends
      return () => clearInterval(intervalId);
    }

    if (timer === 0) {
      setIsTimerActive(false);
    }
  }, [isOtp, isTimerActive, timer]);

  const handleSendOTP = () => {
    onSendOTP();
    setTimer(15); // Reset timer to 15 seconds
    setIsTimerActive(true); // Start the countdown
  };

  return (
    <>
      <div>
        <Input
          type="number"
          placeholder={placeholder}
          value={otpValue}
          onChange={onChange}
          maxLength={6}
          error={error}
        />
        <div className="flex flex-col items-end">
          {isTimerActive ? (
            <>
              <div className="flex flex-col items-center">
                <span className="font-poppins text-xs font-medium text-b-blue text-center">
                  {timer}s
                </span>
                <span className="font-poppins text-xs font-medium text-gray-500">
                  Re-send OTP
                </span>
              </div>
            </>
          ) : (
            <span
              onClick={handleSendOTP}
              className="font-poppins text-xs font-medium text-b-blue cursor-pointer"
            >
              Send OTP
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default OtpInput;
