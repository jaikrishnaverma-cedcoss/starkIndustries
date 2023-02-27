import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import usePrimaryKey from "../../../custom_hooks/usePrimaryKey";
import { pushData } from "../../../features/Slice";
import { dataHubType } from "../../../types/types";

type MySetting = {
  keyGenerator: (lists: any) => string | undefined;
};
// this component can be use dynamically to generate forms=>select,input,radio etc with the help of forms dataset 
const AddProduct = ({ inputs, objKey }: any) => {
  const [formData, updateFormData] = useState({});
  const [select, setSelect] = useState<boolean>(false);
  const dataHub: dataHubType = useSelector((state: dataHubType) => state);
  const dispatch = useDispatch();

  //custom hook for keys to handle default obj values
  const { keyGenerator }: MySetting = usePrimaryKey();

  // handle all input changes
  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (e) => {
    if (e.currentTarget.name === "images" || e.currentTarget.name === "image") {
      let val = e.currentTarget.value.split(" ");
      updateFormData({
        ...formData,
        [e.currentTarget.name]: val,
      });
    } else {
      updateFormData({
        ...formData,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    }
  };

  // checkbox toggler for checkbox input values
  const HandleCheck: React.ChangeEventHandler<
    HTMLSelectElement | HTMLInputElement
  > = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: select ? "false" : "true",
    });
    setSelect(!select);
  };

  // object map for check with hook
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      pushData({
        key: objKey,
        data: { id: keyGenerator(dataHub.products), ...formData },
      })
    );
    e.currentTarget.reset();
  };

  return (
    <>
      <form
        onSubmit={formHandler}
        style={{ width: "100%" }}
        className="d-flex flex-wrap justify-content-center  p-4 "
      >
        <div
          className="d-flex flex-wrap justify-content-between"
          style={{ maxWidth: "700px" }}
        >
          {inputs.map((x: any, i: number) => (
            <div key={JSON.stringify(x)+i} className="m-1 col-5" style={{ minWidth: "290px" }}>
              <label htmlFor="exampleInputEmail1" className="form-label">
                {x.name.replaceAll("_", " ").charAt(0).toUpperCase() +
                  x.name.replaceAll("_", " ").slice(1)}
                {""}
              </label>
              {x.type === "textarea" ? (
                <textarea
                  required={x.required}
                  name={x.name}
                  onChange={handleChange}
                  className="form-control"
                  id={x.name + i}
                  placeholder={`Enter ${x.name}...`}
                  aria-describedby={`about ${x.name} `}
                ></textarea>
              ) : x.type === "select" ? (
                <select
                  required={x.required}
                  name={x.name}
                  className="form-select"
                  onChange={handleChange}
                  aria-label="Default select example"
                >
                  {x.data.length > 0 ? (
                    ["", ...x.data].map((x: any) => (
                      <option value={x}>{x === "" ? "select any" : x}</option>
                    ))
                  ) : (
                    <option value="">No product Available</option>
                  )}
                </select>
              ) : x.type === "radio" ? (
                <div className="form-check form-switch">
                  <input
                    name={x.name}
                    key={formData.toString()}
                    onChange={HandleCheck}
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckChecked"
                    checked={select}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    {x.span.replaceAll("_", " ")}
                  </label>
                </div>
              ) : (
                <input
                  required={x.required}
                  name={x.name}
                  onChange={handleChange}
                  type={x.type}
                  className="form-control"
                  id={x.name + i}
                  aria-describedby={`about ${x.name} `}
                  placeholder={`Enter ${x.name}`}
                />
              )}
              {(x.name === "images" || x.name === "image") && (
                <div id="emailHelp" className="form-text">
                  Enter images links with single space seperated.
                </div>
              )}
            </div>
          ))}
          <div className="col-12 d-flex justify-content-end" style={{ maxWidth: "700px" }}>
          <button type="submit" className="btn btn-primary my-3 ms-2 ">
            Submit
          </button>
        </div>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
