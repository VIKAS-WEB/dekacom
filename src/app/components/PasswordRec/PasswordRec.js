import React, { useState } from "react";

import axios from "axios";
import { redirect, useRouter } from "next/navigation";

import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { replace, truncate } from "lodash";
import { revalidatePath } from "next/cache";

const PasswordRec = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [validation, setValidation] = useState(false);

  const [emailValidation, setEmailValidation] = useState(false);

  const [emailVal, setEmailVal] = useState("");

  const handleChangeMail = (event) => {
    setEmail(event.target.value);
    setEmailVal("");
  };

  const sendPassword = async () => {
    if (email == "") {
      setEmailVal("* ce champ est obligatoire");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailVal("* invalide email");
    }

    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      email != ""
    ) {
      try {
        const response = await axios.post("/api/usersPassword", {
          email,
        });

        if (response.data) {
          setValidation(true);

          setTimeout(() => {
            setValidation(false);
            redirect("/", "replace");
          }, "3000");
        } else if (response.data != "") {
          setEmailValidation(true);
          setTimeout(() => {
            setEmailValidation(false);
          }, "2000");
        }
      } catch (e) {
        setEmailValidation(true);
        setTimeout(() => {
          setEmailValidation(false);
        }, "2000");
      }
    }
  };

  return (
    <>
      <div className="form p-3 text-left">
        <div>
          <h3 className="text-xl font-bold ">Mot de passe oublié ?</h3>
          <p className="font-semibold">
            Si vous avez oublié votre mot de passe, nous vous en adressons un
            nouveau par email
          </p>
        </div>

        <form action={sendPassword}>
          <div className="Email py-1">
            <label className="text-xs text-gray-400">Votre Email</label>
            <div className="flex flex-row max-w-sm:flex-row items-center justify-between border border-gray-400 rounded-md ">
              <input
                name="email"
                onChange={handleChangeMail}
                placeholder="Entrer votre Email"
                type="text"
                className="py-1 px-2 w-full outline-0 rounded-md text-sm"
              />
            </div>
            <label className="validation text-red-500 text-xs">
              {emailVal}
            </label>
          </div>

          <div>
            <button className="w-full border my-2 text-xs md:text-sm text-center text-white rounded-full p-2 bg-[#3ACCE1] uppercase">
              Réinitialiser le mot de passe
            </button>
          </div>

          {validation == true ? (
            <label className=" bg-green-600 text-white rounded-md p-2 text-sm flex flex-row justify-center items-center">
              <FaCircleCheck className="text-white mx-2" /> Nouveau mot de passe
              envoyé
            </label>
          ) : (
            ""
          )}

          {emailValidation == true ? (
            <label className=" bg-red-600 text-white rounded-md p-2 text-sm flex flex-row justify-center items-center">
              <FaCircleXmark className="text-white mx-2" /> invalide email
            </label>
          ) : (
            ""
          )}
        </form>
      </div>
    </>
  );
};

export default PasswordRec;
