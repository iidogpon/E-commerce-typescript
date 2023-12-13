import { ChangeEvent, FC } from "react";

interface SearchInputProps {
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: FC<SearchInputProps> = ({
  onBlur,
  value,
  onChange,
}) => {
  return (
    <input
      className="wh-full pl-[20px] rounded-full focus:outline-none"
      type="text"
      placeholder="Search..."
      autoFocus
      onBlur={onBlur}
      value={value}
      onChange={onChange}
    />
  );
};
