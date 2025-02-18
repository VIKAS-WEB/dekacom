import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

const Inscription = ({ setOpenModal }) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // form states

  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [codeParrain, setCodeParrain] = useState("");

  // form states Validation

  const [validation, setValidation] = useState(false);
  const [error, setError] = useState(false);
  const [errorPseudo, setErrorPseudo] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const [loginVal, setLoginVal] = useState("");
  const [nameVal, setNameVal] = useState("");
  const [firstnameVal, setFirstnameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [captcha, setCaptcha] = useState(null);

  // form set data

  const handleChangeLogin = (event) => {
    setLogin(event.target.value);
    setLoginVal("");
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
    setNameVal("");
  };

  const handleChangeFirstname = (event) => {
    setFirstname(event.target.value);
    setFirstnameVal("");
  };

  const handleChangePEmail = (event) => {
    setEmail(event.target.value);
    setEmailVal("");
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setPasswordVal("");
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangeCodeParrain = (event) => {
    setCodeParrain(event.target.value);
  };

  const clearMailField = () => setEmail("");

  const signIn = async () => {
    if (login == "") {
      setLoginVal("* ce champ est obligatoire");
    }

    if (name == "") {
      setNameVal("* ce champ est obligatoire");
    }

    if (firstname == "") {
      setFirstnameVal("* ce champ est obligatoire");
    }

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

    if (
      loginVal == "" &&
      nameVal == "" &&
      firstnameVal == "" &&
      emailVal == "" &&
      passwordVal == ""
    ) {
      if (captcha) {
        const response = await axios.post("/api/register", {
          login,
          email,
          password,
          name,
          firstname,
          gender,
          codeParrain,
        });

        if (response.status === 200 && response.data.user_id) {
          setError(false);
          setValidation(true);
          setTimeout(() => {
            setOpenModal(false);
            router.refresh();
          }, "3000");
        }
        // else if (response.data.code[0] == 14) {
        //   setErrorPseudo(true);
        //   setTimeout(() => {
        //     setErrorPseudo(false);
        //   }, "3000");
        // } else if (response.data.code[0] == 8) {
        //   setErrorEmail(true);
        //   setTimeout(() => {
        //     setErrorEmail(false);
        //   }, "3000");
        // }
        else {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, "3000");
        }
      } else alert("Erreur: " + "Merci de cocher, je ne suis pas un robot.");
    }
  };

  return (
    <>
      <div className="form p-3 text-left">
        <div>
          <h3 className="text-2xl font-bold ">Inscription</h3>
          <p className="font-semibold">
            Connectez-vous à votre espace personnel
          </p>
        </div>

        <form action={signIn}>
          <div className="py-1 m-1">
            <label className="text-xs text-gray-400">Votre Pseudo</label>
            <div className="flex flex-row max-w-sm:flex-row items-center justify-between border border-gray-400 rounded-md ">
              <input
                name="login"
                placeholder="Votre Pseudo"
                type="text"
                onChange={handleChangeLogin}
                className="py-1 px-2 w-full outline-0 rounded-md text-sm"
              />
            </div>
            <label className="validation text-red-500 text-xs">
              {loginVal}
            </label>
          </div>

          <div className="py-1 flex flex-row">
            <div className="basis-1/2 m-1">
              <label className="text-xs text-gray-400">Votre Prénom</label>
              <div className="flex flex-row max-w-sm:flex-row items-center justify-between border border-gray-400 rounded-md ">
                <input
                  name="name"
                  placeholder="votre prénom"
                  type="text"
                  onChange={handleChangeName}
                  className="py-1 px-2 w-full outline-0 rounded-md text-sm"
                />
              </div>
              <label className="validation text-red-500 text-xs">
                {nameVal}
              </label>
            </div>

            <div className="basis-1/2 m-1">
              <label className="text-xs text-gray-400">Votre nom</label>
              <div className="flex flex-row max-w-sm:flex-row items-center justify-between border border-gray-400 rounded-md ">
                <input
                  name="firstname"
                  placeholder="votre Nom"
                  type="text"
                  onChange={handleChangeFirstname}
                  className="py-1 px-2 w-full outline-0 rounded-md text-sm"
                />
              </div>
              <label className="validation text-red-500 text-xs">
                {firstnameVal}
              </label>
            </div>
          </div>

          <div className="Email py-1 m-1">
            <label className="text-xs text-gray-400">Votre Email</label>
            <div className="flex flex-row max-w-sm:flex-row items-center justify-between border border-gray-400 rounded-md ">
              <input
                name="email"
                placeholder="Entrer votre Email"
                type="text"
                onChange={handleChangePEmail}
                className="py-1 px-2 w-full outline-0 rounded-md text-sm"
              />
            </div>
            <label className="validation text-red-500 text-xs">
              {emailVal}
            </label>
          </div>

          <div className="password py-1 m-1">
            <label className="text-xs text-gray-400">Votre mot de passe</label>
            <div className="flex flex-row max-w-sm:flex-row items-center justify-between border border-gray-400 rounded-md">
              <input
                name="password"
                placeholder="Mot de passe"
                type={isVisible ? "text" : "password"}
                onChange={handleChangePassword}
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

          <div className="gender py-1">
            <label className="text-xs text-gray-400">Votre genre</label>

            <div className="Py-1 flex flex-row text-xs">
              <label className="label-check mr-4">
                Madame
                <input
                  defaultChecked
                  type="radio"
                  className=""
                  id="Madame"
                  name="gender"
                  value="F"
                  onChange={handleChangeGender}
                />
                <span className="checkmark"></span>
              </label>

              <label className="label-check mr-4">
                Monsieur
                <input
                  type="radio"
                  className=""
                  id="Monsieur"
                  name="gender"
                  value="M"
                  onChange={handleChangeGender}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>

          {/* <div className="py-1 m-1">
            <label className="text-xs text-gray-400">Code de parrainage</label>
            <div className="flex flex-row max-w-sm:flex-row items-center justify-between border border-gray-400 rounded-md ">
              <input
                name="codeParrain"
                placeholder="code parrain"
                type="text"
                onChange={handleChangeCodeParrain}
                className="py-1 px-2 w-full outline-0 rounded-md text-sm"
              />
            </div>
          </div> */}

          {/* <div className="my-2 text-sm">
            <center>-- veuillez cocher le case ci-dessous --</center>
            <div>recaptcha</div>
          </div> */}
          <div className="my-2">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_LOCAL_SITE_KEY}
              onChange={setCaptcha}
              hl="fr"
            />
          </div>

          <div className="my-2 text-xs">
            <label className="label-check">
              j{"'"}ai lu et j{"'"}accepte{" "}
              <Link href="#"> la charte d{"'"}utilisation </Link>
              <input
                type="checkbox"
                className=" mr-1"
                id="charte"
                name="charte"
              />
              <span className="checkmark"></span>
            </label>
          </div>

          <div>
            <button className="w-full border my-2 font-bold text-base text-center text-white rounded-full p-2 bg-[#000000] uppercase">
              {"S'enregistrer"}
            </button>
          </div>
        </form>

        {validation == true ? (
          <label className=" bg-green-600 text-white rounded-md p-2 text-sm flex flex-row justify-center items-center">
            <FaCircleCheck className="text-white mx-2" /> Vous êtes inscrit
          </label>
        ) : (
          ""
        )}

        {errorPseudo == true ? (
          <label className=" bg-red-600 text-white rounded-md p-2 text-sm flex flex-row justify-center items-center">
            <FaCircleXmark className="text-white mx-2" /> pseudo déjà utilisé
          </label>
        ) : (
          ""
        )}

        {errorEmail == true ? (
          <label className=" bg-red-600 text-white rounded-md p-2 text-sm flex flex-row justify-center items-center">
            <FaCircleXmark className="text-white mx-2" /> Email déjà utilisé
          </label>
        ) : (
          ""
        )}

        {error == true ? (
          <label className=" bg-red-600 text-white rounded-md p-2 text-sm flex flex-row justify-center items-center">
            <FaCircleXmark className="text-white mx-2" /> Essaie à nouveau
          </label>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Inscription;
