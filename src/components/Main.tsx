import React, { useEffect } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoginSignup from "../auth_components/LoginSignup";
import { deleteFunc, setAll, updateProductstock } from "../features/Slice";
import { dataHubType } from "../types/types";
import Body from "./body/Body";
import AddProduct from "./body/Pages/AddProduct";
import Dashboard from "./body/Pages/Dashboard";
import DataTables from "./body/Pages/DataTables";
import ErrorPage from "./body/Pages/ErrorPage";
import Home from "./landing_pages/Home";

const Main = () => {
  const dataHub: dataHubType = useSelector((state: dataHubType) => state);
  const dispatch = useDispatch();
  
  //check data exist in local storage or not 
  useEffect(() => {
    if (localStorage.getItem("ecomm") != null) {
      let x: string | null = localStorage.getItem("ecomm");
      if (x != null)
        dispatch(
          setAll({ users: JSON.parse(x).users, session: JSON.parse(x).session })
        );
    }
  }, []);

  // update localstorage when redux state change
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("ecomm", JSON.stringify(dataHub));
    }, 100);
  }, [dataHub]);

  const role = dataHub.session ? dataHub.session.role : false;


  return (
    <>
    {/* routes declare here */}
        <ProSidebarProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Auth" element={<LoginSignup />} />
            <Route path="Dashboard" element={<Body />}>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route
                path="Add_Product"
                element={
                  role && (role === "Admin" || role === "Manager") ? (
                    <AddProduct
                      inputs={dataHub.panelView.forms.product}
                      objKey="products"
                    />
                  ) : (
                    <ErrorPage errors="You are not authorized for this Page" />
                  )
                }
              />
              <Route
                path="List_Products"
                element={
                  <DataTables
                    table={dataHub.products.map((x) => {
                      return {
                        id: x.id.toString(),
                        title: x.title,
                        description: x.description,
                        price: x.price,
                        tags: "",
                        brand: x.brand,
                        stock: x.stock,
                        images: x.images,
                        category: x.category,
                      };
                    })}
                    title="Products"
                    subTitle=""
                    deletor={
                      role && role === "Admin"
                        ? (i: number) => {
                            dispatch(deleteFunc({ key: "products", index: i }));
                          }
                        : false
                    }
                    counter={(index: number, x: any, type = "inc")=>{dispatch(updateProductstock({index,stock:(type=="inc")?x.stock+1:x.stock-1}))}}
                  />
                }
              />
              <Route
                path="Add_Users"
                element={
                  role && role === "Admin" ? (
                    <AddProduct
                      inputs={dataHub.panelView.forms.users}
                      objKey="users"
                    />
                  ) : (
                    <ErrorPage errors="You are not authorized for this Page" />
                  )
                }
              />
              <Route
                path="Manage_Users"
                element={
                  <DataTables
                    table={dataHub.users.filter((x) => x.role !== "Admin")}
                    title="Users"
                    subTitle=""
                    deletor={
                      role && role === "Admin"
                        ? (i: number) => {
                            dispatch(deleteFunc({ key: "users", index: i }));
                          }
                        : false
                    }
                  />
                }
              />
              <Route
                path="*"
                element={
                  <ErrorPage errors="This Option is in development phase." />
                }
              />
            </Route>
          </Routes>
        </ProSidebarProvider>

    </>
  );
};

export default Main;
