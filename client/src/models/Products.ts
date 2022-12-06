import { Categories } from './Categories';
import { Colours } from './Colours';
import { Size } from './Size';
export type Product = {
  id: string;
  productName: string;
  description: string;
  quantityInStock: number;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
  ProductImgs: {
    ProductId: string;
    id: string;
    date: Date;
    imgUrl: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
  Size:Size[];
  Colours:Colours[];
  Categories:Categories[]
};
