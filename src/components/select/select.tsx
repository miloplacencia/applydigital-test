import { useState } from "react";
import { OPTIONS_LIST } from "../../constants";

// Components
import { ChevronDown } from "../icons/chevron-down";
import { AngularIcon } from "../icons/angular";
import { VueIcon } from "../icons/vuejs";
import { ReactIcon } from "../icons/reactjs";

// Styles
import "./select.css";

export type ValueOptions = (typeof OPTIONS_LIST)[number]["value"];

// Types
type SelectOption = Readonly<{
  value: ValueOptions;
  label: string;
}>;

export type SelectType = {
  onChange: (value: ValueOptions) => void;
  value?: ValueOptions;
  options: Readonly<SelectOption[]>;
};

const IconComponent = ({ icon }: { icon: ValueOptions }) => {
  switch (icon) {
    case "angular":
      return <AngularIcon width="1.5rem" height="1.5rem" />;
    case "vuejs":
      return <VueIcon width="1.5rem" height="1.5rem" />;
    case "reactjs":
      return <ReactIcon width="1.5rem" height="1.5rem" />;
    default:
      return null;
  }
};

/**
 *
 * @param param0
 * @returns
 */
export default function Select({ onChange, value, options }: SelectType) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleSelect = (option: SelectOption) => {
    onChange(option.value);
    toggleOpen();
  };

  const activeOption = options.find((option) => option.value === value);

  return (
    <div className="select-container">
      <button onClick={toggleOpen}>
        <span>
          {activeOption && <IconComponent icon={activeOption?.value} />}
          <span>{activeOption?.label || "Select your news"}</span>
        </span>
        <ChevronDown height={20} width={20} />
      </button>

      <ul className={isOpen ? "active" : ""}>
        {options?.map((option) => (
          <li key={option.value}>
            <button onClick={() => handleSelect(option)}>
              <IconComponent icon={option.value} />
              <span>{option.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
