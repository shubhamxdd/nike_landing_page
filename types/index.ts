export interface buttonTypes {
  label: string;
  iconURL: any;
  //   update iconurl type
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
