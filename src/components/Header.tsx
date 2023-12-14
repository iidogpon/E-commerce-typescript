import { ChangeEvent, FC, useState } from "react";
import { Link } from "react-router-dom";
import { MenuButton } from "@/components/button";
import { SearchInput } from "@/components/input";

interface HeaderProps {
  onMenuButtonClick: () => void;
}

const Header: FC<HeaderProps> = ({ onMenuButtonClick }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleSearchActive = () => setIsSearchActive((prevState) => !prevState);
  const handleInputvalue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (!e.target.value) {
      setIsSearchActive(false);
    }
  };

  return (
    <header className="w-full h-[50px] mt-[20px]">
      <ul className="grid grid-cols-3 sm:grid-cols-3 mx-[7.8px] sm:mx-[15px]">
        <li
          className={`flex items-center gap-[20px] ${
            isSearchActive && "hidden"
          }`}
        >
          <MenuButton
            size={40}
            className="rounded-full"
            handleEventClick={onMenuButtonClick}
          >
            <img
              className="w-[20px] sm:w-[30px]"
              src="./src/assets/menu.svg"
              alt="Menu"
            />
          </MenuButton>
          <Link
            to="/"
            className="text-[20px] sm:text-[30px] font-mono font-bold"
          >
            Store
          </Link>
        </li>
        <li className="wh-full hidden sm:block">
          <div className="wh-full flex-center border-2 rounded-full">
            <SearchInput />
          </div>
        </li>
        <li
          className={`flex justify-end items-center gap-[10px] ${
            isSearchActive ? "col-span-4 w-full" : "col-span-2"
          } sm:col-span-1`}
        >
          <MenuButton
            className={`sm:hidden ${isSearchActive ? "w-full" : ""}`}
            handleEventClick={toggleSearchActive}
          >
            {isSearchActive ? (
              <div className="w-full h-[40px] pr-[10px] rounded-full border-2 flex">
                <SearchInput
                  onBlurHandler={handleInputvalue}
                  valueHandler={inputValue}
                  onChangeHandler={handleInputvalue}
                />
                <img className="w-[15px]" src="./src/assets/searchbar.svg" />
              </div>
            ) : (
              <img
                className="w-[20px]"
                src="./src/assets/search.svg"
                alt="Search"
              />
            )}
          </MenuButton>
          <MenuButton>
            <img
              className={`${isSearchActive && "hidden"} w-[20px]`}
              src="./src/assets/cart.svg"
              alt="Cart"
            />
          </MenuButton>
          <MenuButton>
            <img
              className={`${isSearchActive && "hidden"} w-[20px]`}
              src="./src/assets/person.svg"
              alt="Profile"
            />
          </MenuButton>
        </li>
      </ul>
    </header>
  );
};

export default Header;
