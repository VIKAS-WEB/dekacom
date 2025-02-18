import React from "react";
import ModalSuccess from "./ModalSuccess";

import { FaCircleCheck } from "react-icons/fa6";

const UpdatedSuccessfully = () => {
  return (
    <ModalSuccess>
      <div className="p-4 text-center">
        <div>
          <h3 className="font-bold  text-[#3ACCE1]">
            les informations sont modifiées avec succès
          </h3>
          <br />
          <FaCircleCheck className=" text-[#3ACCE1] text-5xl mx-auto" />
        </div>
      </div>
    </ModalSuccess>
  );
};

export default UpdatedSuccessfully;
