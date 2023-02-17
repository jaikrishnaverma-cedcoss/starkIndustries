import { dataHubType } from "../Types/types";
import { filteredData } from "./productJSON";

export const initialState:dataHubType = {
  panelView: {
    sidebarElements: [
      {
        ul: "Add Product",
        icons: "bi bi-menu-button-wide",
        li: ["Alerts", "Accordian", "Badges", "Buttons", "Cards"],
      },
      {
        ul: "List Products",
        icons: "bi bi-menu-button-wide",
        li: ["Alerts", "Accordian", "Badges", "Buttons", "Cards"],
      },
      {
        ul: "Add Users",
        icons: "bi bi-journal-text",
        li: ["Alerts", "Accordian", "Badges", "Buttons", "Cards"],
      },
      {
        ul: "Manage Users",
        icons: "bi bi-journal-text",
        li: ["Alerts", "Accordian", "Badges", "Buttons", "Cards"],
      },
      // {
      //   ul: "Place Order",
      //   icons: "bi bi-journal-text",
      //   li: ["Alerts", "Accordian", "Badges", "Buttons", "Cards"],
      // },
      // {
      //   ul: "List Order",
      //   icons: "bi bi-menu-button-wide",
      //   li: ["Alerts", "Accordian", "Badges", "Buttons", "Cards"],
      // },
      // {
      //   ul: "Add Setting",
      //   icons: "bi bi-bar-chart",
      //   li: ["Alerts", "Accordian", "Badges", "Buttons", "Cards"],
      // },
      // {
      //   ul: "List Setting",
      //   icons: "bi bi-menu-button-wide",
      //   li: ["Alerts", "Accordian", "Badges", "Buttons", "Cards"],
      // },
    ],
    forms: {
      product: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "price", type: "number" },
        { name: "tags", type: "text" },
        { name: "stock", type: "text" },
        { name: "brand", type: "text" },
        { name: "category", type: "text" },
        { name: "images", type: "text", required: true },
      ],
      order: [
        { name: "Customer_Name", type: "text", required: true },
        { name: "Customer_Address", type: "textarea", required: true },
        { name: "Zip", type: "number", required: false },
        { name: "Product", type: "select", data: [], required: true },
        { name: "Quantity", type: "number", required: true },
      ],
      users:[
        { name: "name", type: "text", required: true },
        { name: "role", type: "select",data:['Admin','Manager','User'], required: true },
        { name: "email", type: "email", required: true },
        { name: "password", type: "password", required: true },
      ]
    },
  },

  products: filteredData(),
  placeOrders: [
    {
      Customer_Name: "4564654",
      Customer_Address: "64564565466",
      Zip: "546543",
      Product: "6565",
      Quantity: 5465,
    },
  ],
  users:[
  {  
    id: '1',
    name: 'jai verma',
    role:'Admin',
    email: 'jai@gmail.com',
    password: '2222',
    cart:[]
  }
  ],
  session:""
};
