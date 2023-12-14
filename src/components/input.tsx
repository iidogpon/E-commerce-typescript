import { ChangeEvent, FC } from "react";

interface SearchInputProps {
  onBlurHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
  valueHandler?: string;
  onChangeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: FC<SearchInputProps> = ({
  onBlurHandler,
  valueHandler,
  onChangeHandler,
}) => {
  return (
    <input
      className="wh-full pl-[20px] rounded-full focus:outline-none"
      type="text"
      placeholder="Search..."
      autoFocus
      onBlur={onBlurHandler}
      value={valueHandler}
      onChange={onChangeHandler}
    />
  );
};
