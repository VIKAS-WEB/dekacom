"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRef, useEffect, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

export default function ModalSuccess({ children }) {
  const searchParams = useSearchParams();
  const dialogRef = useRef(null);
  const showDialog = searchParams.get("showDialog");

  useEffect(() => {
    if (showDialog === "s") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  //   const closeDialog = () => {
  //     dialogRef.current?.close();
  //     router.push('/profil-consommateur')
  //   }

  //   const clickOk = () => {
  //     closeDialog();
  //     router.push('/profil-consommateur')
  //   }

  const dialog =
    showDialog === "s" ? (
      <dialog
        ref={dialogRef}
        className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 max-w-3xl  rounded-xl backdrop:bg-gray-800/50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white max-w-fit rounded-3xl shadow p-5 transition-all lg:max-w-md w-full ${
            open ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
        >
          <div className="header-modal flex flex-row justify-between items-center">
            <div className="flex flex-row">
              <Image
                src="/../../images/logo.png"
                alt="SmartReduc"
                width={30}
                height={30}
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
            <div className="flex flex-row justify-center mt-2">
              <Link
                href="/profil-consommateur"
                className="bg-[#3ACCE1] py-2 px-4 rounded-full border-none text-white mr-3 text-center w-full max-w-[150px] font-normal"
              >
                OK
              </Link>
            </div>
          </div>
        </div>
      </dialog>
    ) : null;

  return dialog;
}
