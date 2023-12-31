import { MouseEventHandler } from "react";

export interface ICustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit" | "reset";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface ICustomeFilterProps {
  title: string;
  options: OptionProps[];
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface ISearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface ICarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  model?: string;
  year?: number;
  fuel?: string;
  limit: number;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
