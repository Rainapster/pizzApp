export interface Pizza {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
}

export interface SetCartItemProps {
  item: Pizza,
  add?:boolean,
  remove?:boolean
}