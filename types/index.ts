export interface buttonTypes {
  label: string;
  iconURL?: any;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  hoverClass?: string;
}

export interface shoeCardTypes {
  imgURL: any;
  changeBigShoeImage: (arg0: any) => void;
  bigShoeImage: any;
}

export interface popularProductCardTypes {
  name: string;
  price: string;
  imgURL: any;
  rating: number;
}

export interface ServiceCardProps {
  imgURL: any;
  label: string;
  subtext: string;
}

export interface ReviewCardProps {
  imgURL: any;
  customerName: string;
  rating: number;
  feedback: string;
}

export interface NavProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}
export interface ShoeCardModalProps {
  imgURL: any;
  price: string;
  name: string;
  rating: number;
  isOpen: any;
  setIsOpen: any;
  openModal: any;
  closeModal: any;
}
