import React from "react";
import { useSelector } from "react-redux";
import { dataHubType } from "../../../Types/types";
import { MyDoughnutChart } from "../assets/MyDoughnutChart";
import { MyLineChart } from "../assets/MyLineChart";
import { MyRadarChart } from "../assets/MyRadarChart";
import { product } from "./Products";
const Dashboard = () => {
  const dataHub = useSelector((state: dataHubType) => state);
  return (
    <div className="col-12 d-flex flex-wrap justify-content-between">
      <div className="col-12 col-md-8 d-flex flex-wrap align-content-start justify-content-between">
        <div className="col-12 col-md-6 mb-2 pe-md-3">
          <div className="card border-0 shadow-lg ">
            <div className="card-body p-3 mb-2  ">
              <div className="d-flex justify-content-between">
                <p className="card-title fs-5 n-blue">
                  Sales
                  <small className="text-secondary mx-1 fs-6">
                    | Today
                  </small>{" "}
                </p>
                <small className="text-secondary mx-1 fs-6">...</small>
              </div>
              <div className="d-flex ">
                <div className="col-4 text-white">
                  <button
                    className="fs-2 mainIcon rounded-circle"
                    style={{ color: "#4154f1", backgroundColor: "#f6f6fe" }}
                  >
                    <i className="bi bi-cart"></i>
                  </button>
                </div>
                <div className="col-8 ps-1">
                  <h2 className="n-blue">
                    {dataHub.users.reduce(
                      (total: any, item: any) =>
                        total +
                        (Array.isArray(item.cart) && item.cart.length > 0
                          ? item.cart.reduce(
                              (itemTotal: any, prd: any) =>
                                itemTotal + prd.price * prd.Quantity,
                              0
                            )
                          : 0),
                      0
                    )}
                  </h2>
                  <span className="text-secondary">
                    <span
                      className="me-2 text-success"
                      style={{ fontWeight: "500" }}
                    >
                      12%{" "}
                    </span>{" "}
                    increase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 mb-2 pe-md-2">
          <div className="card border-0 shadow-lg ">
            <div className="card-body p-3 mb-2">
              <div className="d-flex justify-content-between">
                <p className="card-title fs-5 n-blue">
                  Revenue
                  <small className="text-secondary mx-1 fs-6">
                    | This Month
                  </small>{" "}
                </p>
                <small className="text-secondary mx-1 fs-6">...</small>
              </div>
              <div className="d-flex ">
                <div className="col-4 text-white">
                  <button
                    className="fs-2 mainIcon rounded-circle"
                    style={{
                      color: "rgb(64 193 89)",
                      backgroundColor: "rgb(227 255 236)",
                    }}
                  >
                    <i className="bi bi-currency-dollar"></i>
                  </button>
                </div>
                <div className="col-8">
                  <h2 className="n-blue">
                    {dataHub.users.reduce(
                      (total: any, item: any) =>
                        total +
                        (Array.isArray(item.cart) && item.cart.length > 0
                          ? item.cart.reduce(
                              (itemTotal: any, prd: any) =>
                                itemTotal + prd.price * prd.Quantity,
                              0
                            )
                          : 0),
                      0
                    ) / 10}
                  </h2>
                  <span className="text-secondary">
                    <span
                      className="me-2 text-success"
                      style={{ fontWeight: "500" }}
                    >
                      12%{" "}
                    </span>{" "}
                    increase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12  mb-2 pe-md-2">
          <div className="card border-0 shadow-lg mt-2">
            <div className="card-body p-3 mb-2  ">
              <div className="d-flex justify-content-between">
                <p className="card-title fs-5 n-blue">
                  Customers
                  <small className="text-secondary mx-1 fs-6">
                    | This Year
                  </small>{" "}
                </p>
                <small className="text-secondary mx-1 fs-6">...</small>
              </div>
              <div className="d-flex pb-2 pt-1">
                <div className="p-1 me-5 text-white">
                  <button
                    className="fs-2 mainIcon rounded-circle"
                    style={{
                      color: "rgb(241 134 65)",
                      backgroundColor: "rgb(255 235 209)",
                    }}
                  >
                    <i className="bi bi-people"></i>
                  </button>
                </div>
                <div className=" ps-1">
                  <h2 className="n-blue">
                    {dataHub.users.reduce((total, data) => {
                      return data.role == "User" ? total + 1 : total;
                    }, 0)}
                  </h2>
                  <span className="text-secondary">
                    <span
                      className="me-2 text-danger"
                      style={{ fontWeight: "500" }}
                    >
                      12%{" "}
                    </span>{" "}
                    increase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cart Graph */}
        <div className="col-12  mb-2 pe-md-2">
          <div className="card border-0 shadow-lg mt-2">
            <div className="card-title p-3 pb-0">
              <div className="d-flex justify-content-between">
                <p className="card-title fs-5 n-blue">
                  Reports
                  <small className="text-secondary mx-1 fs-6">
                    | Today
                  </small>{" "}
                </p>
                <small className="text-secondary mx-1 fs-6">...</small>
              </div>
            </div>
            <div className="card-body p-3 pt-0">
              <div className="w-100">
                <MyLineChart />
              </div>
            </div>
          </div>
        </div>

        {/* Table card */}
        <div className="col-12  mb-2 pe-md-2">
          <div className="card border-0 shadow-lg mt-2">
            <div className="card-title p-3 pb-0">
              <div className="d-flex justify-content-between">
                <p className="card-title fs-5 n-blue">
                  Recent Sales
                  <small className="text-secondary mx-1 fs-6">
                    | Today
                  </small>{" "}
                </p>
                <small className="text-secondary mx-1 fs-6">...</small>
              </div>
            </div>
            <div className="card-body p-3 pt-0">
              <div className="w-100">
                <table id="exampleTable" className="w-100 table my-2">
                  <thead>
                    <tr className="bg-light p-2">
                      <th>#</th>
                      <th>Customer</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>#2457</th>
                      <td className="">Brandon jcob</td>
                      <td className="text-primary"> At praesentium minu</td>
                      <td className="fw-light">$64</td>
                      <td>
                        <span className="badge bg-success">Approved</span>
                      </td>
                    </tr>
                    <tr>
                      <th>#1457</th>
                      <td>Brandon jcob</td>
                      <td className="text-primary"> At praesentium minu</td>
                      <td className="fw-light">$64</td>
                      <td>
                        <span className="badge bg-warning">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <th>#0457</th>
                      <td>Brandon jcob</td>
                      <td className="text-primary"> At praesentium minu</td>
                      <td className="fw-light">$64</td>
                      <td>
                        <span className="badge bg-danger">Rejected</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Table card */}
        <div className="col-12  mb-2 pe-md-2">
          <div className="card border-0 shadow-lg mt-2">
            <div className="card-title p-3 pb-0">
              <div className="d-flex justify-content-between">
                <p className="card-title fs-5 n-blue">
                  Top Selling
                  <small className="text-secondary mx-1 fs-6">
                    | Today
                  </small>{" "}
                </p>
                <small className="text-secondary mx-1 fs-6">...</small>
              </div>
            </div>
            <div className="card-body p-3 pt-0">
              <div className="w-100">
                <table className="w-100 table my-2">
                  <thead>
                    <tr className="bg-light p-2">
                      <th>Preview</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Sold</th>
                      <th>Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((x, i) => (
                      <tr key={"2" + x.toString() + i}>
                        <th>
                          <img src={x.img} style={{ width: "60px" }} alt="" />
                        </th>
                        <td className="text-primary fw-bolder">{x.product}</td>
                        <td>{x.price}</td>
                        <th className="fw-bold">{x.sold}</th>
                        <td>{x.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-4  ps-md-2">
        <div className="card col-12 border-0 shadow-lg  mb-3 pe-md-2">
          <div className="card-title p-3 mb-2">
            <div className="d-flex justify-content-between">
              <p className="card-title fs-5 n-blue">
                Recent Activity
                <small className="text-secondary mx-1 fs-6">| Today</small>{" "}
              </p>
              <small className="text-secondary mx-1 fs-6">...</small>
            </div>

            <div className="d-flex ">
              <ul className="list-group border-0 mt-3 col-12">
                {[
                  "bg-success",
                  "bg-danger",
                  "bg-primary",
                  "bg-warning",
                  "bg-secondary",
                  "bg-dark",
                ].map((x, i) => (
                  <li
                    key={i + x.toString() + "5"}
                    className="mine-li border-0 p-0 list-group-item d-flex justify-content-between align-items-start"
                  >
                    <small className="greyLight fw-normal my-0 col-2 pe-0 pb-3">
                      32 min
                    </small>
                    <div
                      className="d-flex flex-column align-items-center"
                      style={{ height: "100%", width: "5px" }}
                    >
                      <span
                        className={`badge my-0 ${x} rounded-circle `}
                        style={{ padding: "6.4px" }}
                      >
                        {" "}
                      </span>
                    </div>
                    <p className="fw-light text-dark my-0 col-8 px-1 pb-3">
                      Quia quae reru{" "}
                      <span className="fw-bold text-dark">
                        explicabo officiis{" "}
                      </span>{" "}
                      beatae
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* radarChart */}
        <div className="card col-12 border-0 shadow-lg  mb-3 pe-md-2">
          <div className="card-title p-3 mb-2">
            <div className="d-flex justify-content-between">
              <p className="card-title fs-5 n-blue">
                Budget Report
                <small className="text-secondary mx-1 fs-6">
                  | This Month
                </small>{" "}
              </p>
              <small className="text-secondary mx-1 fs-6">...</small>
            </div>

            <div className="d-flex  justify-content-center">
              <MyRadarChart />
            </div>
          </div>
        </div>

        {/* Dougnut cart */}
        <div className="card col-12 border-0 shadow-lg  mb-3 pe-md-2">
          <div className="card-title p-3 mb-2">
            <div className="d-flex justify-content-between">
              <p className="card-title fs-5 n-blue">
                Website Traffic
                <small className="text-secondary mx-1 fs-6">| Today</small>{" "}
              </p>
              <small className="text-secondary mx-1 fs-6">...</small>
            </div>

            <div className="d-flex justify-content-center">
              <MyDoughnutChart />
            </div>
          </div>
        </div>

        {/* news section */}
        <div className="card col-12 border-0 shadow-lg  mb-3 pe-md-2">
          <div className="card-title p-3 mb-2">
            <div className="d-flex justify-content-between">
              <p className="card-title fs-5 n-blue">
                News & Updates
                <small className="text-secondary mx-1 fs-6">| Today</small>{" "}
              </p>
              <small className="text-secondary mx-1 fs-6">...</small>
            </div>

            <div className="d-flex justify-content-center">
              <div className="list-group w-100">
                {product.map((x, i) => (
                  <a
                    key={"4_" + i + x.toString()}
                    href="#"
                    className="p-0 mb-3 border-0 list-group-item list-group-item-action d-flex justify-content-between"
                    aria-current="true"
                  >
                    <div className="col-3">
                      <img
                        className=" rounded"
                        style={{ width: "80px", height: "100%" }}
                        src={x.img}
                      ></img>
                    </div>

                    <div className="col-8">
                      <div className="d-flex w-100 justify-content-between"></div>
                      <p className="mb-1 n-blue">Some placeholder.</p>
                      <small className="text-secondary fw-normal">
                        Sit recusandae non aspernatur laboriosam. Quia sed ut
                        harum...
                      </small>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
