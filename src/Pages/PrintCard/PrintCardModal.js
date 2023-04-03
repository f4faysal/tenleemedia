import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import React from "react";
import Barcode from "react-barcode";

const PrintCardModal = () => {
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <div className="flex justify-center items-center h-56">
            <Barcode className="" value="barcode-example" />;
          </div>

          <button className="btn btn-outline hover:text-white">
            {" "}
            <ArrowDownTrayIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrintCardModal;
