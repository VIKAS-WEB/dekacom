"use client";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

import Modal from "@/app/components/Modal/Modal";
import DeleteAcoountYes from "./DeleteAcoountYes";
import Link from "next/link";

export default function ModalDelete({ children }) {
  const searchParams = useSearchParams();
  const dialogRef = useRef(null);
  const showDialog = searchParams.get("showDialog");

  // const router = useRouter()

  const [openModalPass, setOpenModalPass] = useState(false);

  useEffect(() => {
    if (showDialog === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  // const closeDialog = () => {
  //   dialogRef.current?.close();
  //   router.push('/profil-consommateur')
  // }

  // const clickOk = () => {
  //   closeDialog();
  //   router.push('/profil-consommateur')
  // }

  const dialog =
    showDialog === "y" ? (
      <dialog
        ref={dialogRef}
        className="fixed mx-auto  z-10  rounded-xl max-w-3xl backdrop:bg-gray-800/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white max-w-fit rounded-3xl shadow p-5 transition-all lg:max-w-md w-full ${
            open ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
        >
          <div className="header-modal flex flex-row justify-between items-center">
            <div className="flex flex-row">
              <img
                src="../../images/logo.png"
                alt="SmartReduc"
                width={30}
                className="mr-2"
              />
              SmartReduc
            </div>
            <Link href="/profil-consommateur">
              {" "}
              <AiOutlineClose />{" "}
            </Link>
          </div>

          <div className="px-5 pb-6">
            {children}
            <div className="flex flex-row justify-end mt-2">
              <Link
                href="/profil-consommateur"
                className="bg-[#3ACCE1] py-2 px-4 rounded-full border-none text-white mr-3 font-normal"
              >
                NON
              </Link>

              <div>
                <button
                  className="bg-[#3ACCE1] py-2 px-4 rounded-full border-none text-white"
                  onClick={() => setOpenModalPass(true)}
                >
                  OUI
                </button>
              </div>
            </div>
          </div>
        </div>

        <Modal open={openModalPass} onClose={() => setOpenModalPass(false)}>
          <DeleteAcoountYes />
        </Modal>
      </dialog>
    ) : null;

  return dialog;
}
