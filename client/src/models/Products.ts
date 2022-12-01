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
};
