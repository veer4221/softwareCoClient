import React, { useState } from "react";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { imageCellBTN_OBJ } from "../../../../utils/staticObjects";
const ImageCell = ({ row, column }) => {
  const [imgHeight, setImgHeight] = useState(100);
  const [imgWidth, setImgWidth] = useState(100);
  //   const data =
  const onZoomInOutBtnClick = (btn) => {
    // alert(   );
    switch (btn.slug) {
      case "w-zoom-in":
        return setImgWidth(imgWidth + 10);
      case "w-zoom-out":
        return setImgWidth(imgWidth - 10);
      case "h-zoom-in":
        return setImgHeight(imgHeight + 10);
      case "h-zoom-out":
        return setImgHeight(imgHeight - 10);
    }
  };
  return (
    <td>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">H</div>
              </div>
              {imageCellBTN_OBJ?.heightBtn.map((btn) => (
                <div className="row" onClick={() => onZoomInOutBtnClick(btn)}>
                  <div className="col-12">{btn.icon}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-8 d-flex justify-content-center"
            style={{
              height: `${imgHeight + 10}px`,
              width: `${imgWidth + 10}px`,
            }}
          >
            <img
              src={row[`${column?.property}`]}
              height={`${imgHeight.toString()}px`}
              width={`${imgWidth.toString()}px`}
            />
          </div>
          <div className="col-2">
            <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">W</div>
              </div>
              {imageCellBTN_OBJ?.widthBtn.map((btn) => (
                <div className="row" onClick={() => onZoomInOutBtnClick(btn)}>
                  <div className="col-12">{btn.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </td>
  );
};

export default ImageCell;
