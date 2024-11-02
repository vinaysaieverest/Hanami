export type Ttypecard = {

  id:number,
  image: string;
  name: string;
  price: string;
  rating: string;
  discount:number;
  isavailable:boolean;
  isnew:boolean;
  isAddedToCartFromHome:boolean;
  isAddedToCartFromProduct:boolean;
  isAddedToWishList:boolean;
  isInOffers:boolean;
  updateCart?:Function;
  // handleAddToCartHome: Function
  handleAddToWishList:Function
  handleProduct?:Function
  // handleAddToWishList?: () => void;
};

export type Htype = {
  logo: string;
  // search: string;
  login: string;
  noOfCartItem:number;
  setSearch:Function
}