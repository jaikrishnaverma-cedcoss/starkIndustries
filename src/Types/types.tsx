
export type dataHubType = {
  panelView: panelViewType
  products: productsType[]
  placeOrders: placeOrderType[]
  users: userTypes[]
  session:userTypes | ''
};

export type panelViewType = {
  sidebarElements: sidebarElementsType[];
  forms: formsType;
};

export type sidebarElementsType = {
  ul: string;
  icons: string;
  li: string[];
};

export type formsType = {
  product: formDataType[];
  order: formDataType[];
  users:formDataType[]
};

export type formDataType = {
  name: string;
  type: string;
  data?: string[];
  required?: boolean;
};

export type productsType = {
  id:string  
  title: string;
  description: string;
  price: number;
  tags: string;
  stock: number;
  images:string[]|string;
  discountPercentage?:number,
  rating?: number;
  brand: string;
  category: string;
};

export type placeOrderType = {
  Customer_Name: string;
  Customer_Address: string;
  Zip: string;
  Product: string;
  Quantity: number;
};

export type userTypes = {
  id: string;
  name: string;
  role:'Admin'|'Manager'|'User',
  email: string;
  password: string;
  cart:cartTypes[]|[]
};

export type cartTypes={
id:string  
title: string;
description: string;
price: number;
images:string[]|string
Quantity: number;
Total:number;
}

