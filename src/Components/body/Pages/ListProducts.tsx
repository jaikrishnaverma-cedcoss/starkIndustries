import React from "react";

const ListProducts = ({ table, state, objKey, setState }: any) => {
  // delete list row
  const deleteThis = (i: number) => {
    if (Array.isArray(state[objKey]) && objKey !== "settings")
      state[objKey].splice(i, 1);
    else if (objKey === "settings")
      state[objKey] = {
        Default_Price: "1000",
        Default_Stocks: "400",
        Default_zip_code: "1233",
        Default_Title: "true",
      };
    setState({ ...state });
  };

  if (!Array.isArray(table)) {
    let obj: any = {};
    Object.entries(table).forEach((x: [string, unknown]): void => {
      obj[x[0]] = x[1];
    });
    table = [obj];
  }
  return (
    <div className="d-flex flex-wrap justify-content-center  p-4 tabdiv">
      <table className="table table-striped table-hover border">
        <thead>
          <tr>
            {table.length > 0 ? <th>id</th> : <th>No Data Available</th>}
            {table.length > 0 &&
              Object.keys(table[table.length - 1]).map((x) => (
                <th scope="col">{x.replaceAll("_", " ")}</th>
              ))}
            {table.length > 0 && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {table.length > 0 &&
            table.map((row: any, i: number) => {
              return (
                <tr>
                  <td>{i}</td>
                  {Object.keys(row).map((val: string) => (
                    <td>{row[val]}</td>
                  ))}
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteThis(i)}
                    >
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListProducts;
