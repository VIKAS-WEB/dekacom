import React, { useState } from "react";

import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

import {
  AiOutlineUser,
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { FaGoogle, FaSquareFacebook } from "react-icons/fa6";
import Modal from "../Modal/Modal";

import Inscription from "../Inscription/Inscription";
import PasswordRec from "../PasswordRec/PasswordRec";
import axios from "axios";
import { useRouter } from "next/navigation";

const Connection = (props) => {
  const router = useRouter();

  const { openModal, setOpenModal } = props;

  const [openModalPass, setOpenModalPass] = useState(false);

  const [openModalInscription, setOpenModalInscription] = useState(false);

  // form states

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // form states Validation

  const [emailVal, setEmailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");

  const [validation, setValidation] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeMail = (event) => {
    setEmail(event.target.value);
    setEmailVal("");
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setPasswordVal("");
  };

  const clearMailField = () => setEmail("");

  // function login

  const signIn = async () => {
    if (email == "") {
      setEmailVal("* ce champ est obligatoire");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailVal("* invalide email");
    }

    if (password == "") {
      setPasswordVal("* ce champ est obligatoire");
    } else if (password.length < 8) {
      setPasswordVal("* Minimum 8 caractères");
    }

    if (emailVal === "" && passwordVal === "") {
      const response = await axios.post("/api/signIn", {
        email,
        password,
      });
      const user = response.data;
      if (user.token == undefined) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, "3000");
      } else if (user != undefined) {
        window.localStorage.setItem("token", "Bearer " + user.token);
        setError(false);
        setValidation(true);

        setTimeout(() => {
          setValidation(false);
          setOpenModal(false);
          router.refresh();
        }, "3000");
      }
    }
  };

  return (
    <>
      <div className="form p-3 text-left">
        <div>
          <h3 className="text-2xl font-bold ">Connexion</h3>
          <p className="font-semibold">
            Connectez-vous à votre espace personnel
          </p>
        </div>

        <div>
          <div className="Email py-1">
            <label className="text-xs text-gray-400">Votre Email</label>
            <div className="flex flex-row max-w-sm:flex-row items-center justify-between border border-gray-400 rounded-md ">
              <input
                name="email"
                placeholder="Entrer votre Email"
                type="email"
                onChange={handleChangeMail}
                value={email}
                className="py-1 px-2 w-full outline-0 rounded-md text-sm"
              />

              <button
                className="focus:outline-none p-1"
                type="button"
                onClick={clearMailField}
              >
                <AiOutlineCloseCircle className="text-xl text-[#3ACCE1] pointer-events-none" />
              </button>
            </div>
            <label className="validation text-red-500 text-xs">
              {emailVal}
            </label>
          </div>

          <div className="password py-1">
            <label className="text-xs text-gray-400">Mot de passe</label>
            <div className="flex flex-row max-w-sm:flex-row items-center justify-between border border-gray-400 rounded-md">
              <input
                name="password"
                value={password}
                onChange={handleChangePassword}
                placeholder="Entrer votre mot de passe"
                type={isVisible ? "text" : "password"}
                className="py-1 px-2 w-full outline-0 rounded-md text-sm"
              />

              <button
                className="focus:outline-none p-1"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <AiFillEyeInvisible className="text-xl text-[#3ACCE1] pointer-events-none" />
                ) : (
                  <AiFillEye className="text-xl text-[#3ACCE1] text-default-400 pointer-events-none" />
                )}
              </button>
            </div>
            <label className="validation text-red-500 text-xs">
              {passwordVal}
            </label>
          </div>

          <div className="flex items-center justify-between text-xs py-2">
            <div>
              <label className="flex label-check flex-row items-center mr-4">
                <input
                  type="checkbox"
                  className=""
                  id="rememberme"
                  name="rememberme"
                />
                Se souvenir de moi
                <span className="checkmark"></span>
              </label>
            </div>
            <div>
              <button onClick={() => setOpenModalPass(true)}>
                Mot de passe oublié ?
              </button>
            </div>
          </div>

          <div className="flex flex-row max-w-sm:flex-row items-center justify-between rounded-md cursor-pointer  ">
            <button
              className="w-full border my-2 text-center text-white rounded-full p-2 bg-[#000000] uppercase"
              onClick={signIn}
            >
              Connexion
            </button>
          </div>

          <div className="my-2 text-xs">
            <center>
              <p>
                <a href="#" onClick={() => setOpenModalInscription(true)}>
                  {"Vous n'avez pas de compte? S'inscrire!"}
                </a>
              </p>
            </center>
          </div>

          {/**** Validation ****/}

          {validation == true ? (
            <label className=" bg-green-600 text-white rounded-md p-2 text-sm flex flex-row justify-center items-center">
              <FaCircleCheck className="text-white mx-2" /> Vous vous êtes
              connecté
            </label>
          ) : (
            ""
          )}

          {error == true ? (
            <label className=" bg-red-600 text-white rounded-md p-2 text-sm flex flex-row justify-center items-center">
              <FaCircleXmark className="text-white mx-2" /> Vous n{"'"}etes pas
              autorisé
            </label>
          ) : (
            ""
          )}
        </div>
      </div>

      <Modal open={openModalPass} onClose={() => setOpenModalPass(false)}>
        <PasswordRec />
      </Modal>

      <Modal
        open={openModalInscription}
        onClose={() => setOpenModalInscription(false)}
      >
        <Inscription setOpenModal={setOpenModalInscription} />
      </Modal>
    </>
  );
};

export default Connection;
