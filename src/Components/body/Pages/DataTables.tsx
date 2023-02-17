import React from "react";
import SimpleSlider from "../../Extras/SimpleSlider";

const DataTables = ({ table, title, subTitle, deletor, counter }: any) => {
  if (!Array.isArray(table)) {
    let obj: any = {};
    Object.entries(table).forEach((x: [string, unknown]): void => {
      obj[x[0]] = x[1];
    });
    table = [obj];
  }
  return (
    <div
      className="d-flex flex-wrap justify-content-center p-1 p-md-4 "
      style={{ minWidth: "70%" }}
    >
      <div className="col-12  mb-2 pe-md-2">
        <div className="card border-0 shadow-lg mt-2">
          <div className="card-title p-3 pb-0">
            <div className="d-flex justify-content-between">
              <p className="card-title fs-5 n-blue">
                {title}
                <small className="text-secondary mx-1 fs-6">
                  {subTitle && " | " + subTitle}
                </small>{" "}
              </p>
              <small className="text-secondary mx-1 fs-6">...</small>
            </div>
          </div>
          <div className="card-body pt-0 p-0 p-md-3">
            <div className="w-100">
              <table className="w-100 table my-2" id="exampleTable">
                <thead>
                  <tr>
                    {table.length < 1 && (
                      <th>
                        <img
                          src="cart1.png"
                          style={{ maxWidth: "100%" }}
                          alt=""
                        />
                      </th>
                    )}
                    {table.length > 0 &&
                      Object.keys(table[table.length - 1]).map((x) => (
                        <th scope="col">
                          {x.replaceAll("_", " ").charAt(0).toUpperCase() +
                            x.replaceAll("_", " ").slice(1)}
                        </th>
                      ))}
                    {table.length > 0 && deletor && <th>Action</th>}
                  </tr>
                </thead>
                <tbody>
                  {table.length > 0 &&
                    table.map((row: any, i: number) => {
                      return (
                        <tr>
                          {Object.keys(row).map((val: string) => {
                            if (Array.isArray(row[val])) {
                              return (
                                <td>
                                  {val === "image" || val === "images" ? (
                                    <SimpleSlider arr={row[val]} />
                                  )  :(
                                    row[val].map((element: any) => (
                                     (typeof element =='string')? <p>{element}</p>:
                                     <p>{row[val].length} items in {val}</p>
                                    ))
                                  )}
                                </td>
                              );
                            } else
                              return (val === "Quantity"||val === "stock") ? (
                                <td>
                                  <div className="capsule w-100 rounded">
                                    <span className="d-flex align-items-center justify-content-center">
                                      <i
                                        onClick={() => counter(i, row, "dec")}
                                        className="bi bi-dash-square text-dark  fs-5"
                                      ></i>
                                      <span className="mx-1 fs-6">
                                        {row[val]}
                                      </span>
                                      <i
                                        onClick={() => counter(i, row)}
                                        className="bi bi-plus-square text-dark fs-5"
                                      ></i>
                                    </span>
                                  </div>
                                </td>
                              ) : (
                                <td>{row[val]}</td>
                              );
                          })}
                          {deletor && (
                            <td>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => deletor(i)}
                              >
                                <i className="bi bi-trash-fill"></i>
                              </button>
                            </td>
                          )}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTables;
