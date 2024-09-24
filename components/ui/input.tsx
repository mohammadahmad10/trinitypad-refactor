import { cn } from "@/lib/utils";
import React from "react";

interface PrimaryInputProps {
  value: string;
  setValue: (val: string) => void;
  placeholder: string;
  className?: string;
}
const PrimaryInput = ({
  value,
  setValue,
  placeholder,
  className,
}: PrimaryInputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      className={cn("px-4 py-3 rounded-[20px] w-full text-black", className)}
    />
  );
};

export default PrimaryInput;
