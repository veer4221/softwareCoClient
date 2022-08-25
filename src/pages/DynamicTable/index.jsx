import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DynamicTable from "../../components/DynamicTabel";
import "./style.scss";
import { DemoTableColumns, ResData } from "./Table";
const DynamicTablePage = () => {
  console.log("DemoTableColumns", DemoTableColumns);
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <>
        <div className="row">
          <div className="col-12 d-flex justify-content-between pt-3">
            <h3 style={{ color: "#ebe5e5b5" }}>Products List</h3>

            <button
              className="btn add-btn"
              onClick={() => navigate(`/en/addProduct`)}
            >
              Add Product{" "}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="container-fluid">
              <div className="row " style={{ margin: "0", padding: "0" }}>
                <DynamicTable
                  tableData={{
                    columns: DemoTableColumns,
                    rows: ResData,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default DynamicTablePage;
