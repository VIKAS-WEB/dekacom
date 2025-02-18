"use client";
import axios from "axios";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Autocomplete, Select, TextField } from "@mui/material";

const Contact = () => {
  const [captcha, setCaptcha] = useState(null);
  const [gender, setGender] = useState("Madame");
  const [familyName, setFamilyName] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [department, setDepartment] = useState(null);
  const [description, setDescription] = useState(null);
  const [message, setMessage] = useState(null);
  const [disabledSend, setDisabledSend] = useState(false);

  const departments = [
    "Ain",
    "Aisne",
    "Allier",
    "Alpes-Maritimes",
    "Alpes-de-Haute-Provence",
    "Ardèche",
    "Ardennes",
    "Ariège",
    "Aube",
    "Aude",
    "Aveyron",
    "Bas-Rhin",
    "Bouches-du-Rhône",
    "Calvados",
    "Cantal",
    "Charente",
    "Charente-Maritime",
    "Cher",
    "Corrèze",
    "Corse-du-Sud",
    "Côte-d'Or",
    "Côtes-d'Armor",
    "Creuse",
    "Deux-Sèvres",
    "Dordogne",
    "Doubs",
    "Drôme",
    "Essonne",
    "Eure",
    "Eure-et-Loir",
    "Finistère",
    "Gard",
    "Gers",
    "Gironde",
    "Guadeloupe",
    "Guyane",
    "Haut-Rhin",
    "Haute-Corse",
    "Haute-Garonne",
    "Haute-Loire",
    "Haute-Marne",
    "Haute-Saône",
    "Haute-Savoie",
    "Haute-Vienne",
    "Hautes-Alpes",
    "Hautes-Pyrénées",
    "Hauts-de-Seine",
    "Hérault",
    "Île de Clipperton",
    "Ille-et-Vilaine",
    "Indre",
    "Indre-et-Loire",
    "Isère",
    "Jura",
    "La Réunion",
    "Landes",
    "Loir-et-Cher",
    "Loire",
    "Loire-Atlantique",
    "Loiret",
    "Lot",
    "Lot-et-Garonne",
    "Lozère",
    "Maine-et-Loire",
    "Manche",
    "Marne",
    "Martinique",
    "Mayenne",
    "Mayotte",
    "Meurthe-et-Moselle",
    "Meuse",
    "Morbihan",
    "Moselle",
    "Nièvre",
    "Nord",
    "Nouvelle-Calédonie",
    "Oise",
    "Orne",
    "Paris",
    "Pas-de-Calais",
    "Polynésie française",
    "Puy-de-Dôme",
    "Pyrénées-Atlantiques",
    "Pyrénées-Orientales",
    "Rhône",
    "Saint-Barthélemy",
    "Saint-Martin",
    "Saint-Pierre-et-Miquelon",
    "Saône-et-Loire",
    "Sarthe",
    "Savoie",
    "Seine-Maritime",
    "Seine-Saint-Denis",
    "Seine-et-Marne",
    "Somme",
    "Tarn",
    "Tarn-et-Garonne",
    "Terres australes et antarctiques françaises",
    "Territoire de Belfort",
    "Val-d'Oise",
    "Val-de-Marne",
    "Var",
    "Vaucluse",
    "Vendée",
    "Vienne",
    "Vosges",
    "Wallis et Futuna",
    "Yonne",
    "Yvelines",
  ];
  function isValidEmail(e) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e)) {
      setEmail(e);
    } else setEmail(null);
  }
  function isValidPhone(p) {
    const phoneRegex = /^\+?\d{5,}$/;
    if (phoneRegex.test(p)) {
      setPhone(p);
    } else setPhone(null);
  }
  const sendContactForm = async (event) => {
    try {
      event.preventDefault();

      if (!captcha) {
        toast.error("Merci de confirmer que vous n'êtes pas un robot");
        return;
      }

      if (!email) {
        toast.error("Veuillez fournir une adresse e-mail valide.");
        return;
      }

      if (!phone) {
        toast.error("Veuillez fournir un numéro de téléphone valide.");
        return;
      }

      if (!department) {
        toast.error("Veuillez sélectionner un département valide");
        return;
      }
      if (!message) {
        toast.error(
          "Merci d'écrire votre message avant d'envoyer le formulaire"
        );
        return;
      }
      setDisabledSend(true);
      const contact = await axios.post("/api/contact", {
        gender: gender,
        familyName: familyName,
        firstName: firstName,
        email: email,
        phone: phone,
        department: department,
        message: message,
      });

      toast.success("Message envoyé avec succès");
      setDisabledSend(false);
    } catch (error) {
      toast.error("Quelque chose s'est mal passé");
      setDisabledSend(false);
    }
  };

  const handleChange = (value) => {
    setDepartment(value);
  };
  const filterOptions = (options, { inputValue }) => {
    return options.filter((option) =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  return (
    <div className="container mx-auto my-20">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
      <div className="entete max-w-5xl mx-auto">
        <h2 className="text-2xl text-[#6ecbe0] font-semibold text-center">
          Contactez-nous
        </h2>
        <p className="text-center font-semibold md:text-2xl">
          Vous n{"'"}avez pas trouvé de réponse à vos questions ?
        </p>
        <hr className="my-4" />
        <p className="text-center">
          Pour toutes demandes d{"'"}information complémentaire ou toutes
          remarques, vous pouvez nous envoyer votre message en remplissant le
          formulaire de contact ci-dessous
        </p>
      </div>

      <div className="form max-w-5xl shadow-2xl p-3 md:p-10 mx-auto my-10">
        <form>
          <div className="my-3 flex flex-row">
            <label className="label-check mr-4">
              Madame
              <input
                type="radio"
                className=""
                id="Madame"
                name="genre"
                value="Madame"
                checked={gender === "Madame"}
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              />
              <span className="checkmark"></span>
            </label>

            <label className="label-check mr-4">
              Monsieur
              <input
                type="radio"
                className=""
                id="Monsieur"
                name="genre"
                value="Monsieur"
                checked={gender === "Monsieur"}
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="my-3 flex flex-row">
            <div className="w-1/2 p-3">
              <label className="text-xs text-gray-400">Nom</label>
              <div className="flex flex-row max-w-sm:flex-row items-center justify-between ">
                <input
                  name="nom"
                  placeholder="Votre nom"
                  type="text"
                  value={familyName}
                  onChange={(event) => {
                    setFamilyName(event.target.value);
                  }}
                  className="py-2 px-3 w-full outline-0 border border-b-gray-400  focus:bg-[#000000]/10 focus:border-b-[#000000]ease-in-out duration-500"
                />
              </div>
            </div>

            <div className="w-1/2 p-3">
              <label className="text-xs text-gray-400">Prénom</label>
              <div className="flex flex-row max-w-sm:flex-row items-center justify-between">
                <input
                  name="prénom"
                  placeholder="Votre prénom"
                  type="text"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                  className="py-2 px-3 w-full outline-0 border border-b-gray-400  focus:bg-[#000000]/10 focus:border-b-[#000000]ease-in-out duration-500"
                />
              </div>
            </div>
          </div>

          <div className="my-3 p-3">
            <label className="text-xs text-gray-400">Adresse E-mail</label>
            <div className="flex flex-row max-w-sm:flex-row items-center justify-between">
              <input
                name="email"
                placeholder="Adresse mail"
                type="email"
                value={email}
                onChange={(event) => {
                  isValidEmail(event.target.value);
                }}
                className="py-2 px-3 w-full outline-0 border border-b-gray-400  focus:bg-[#000000]/10 focus:border-b-[#000000]ease-in-out duration-500"
              />
            </div>
          </div>

          <div className="my-3 p-3">
            <label className="text-xs text-gray-400">Téléphone</label>
            <div className="flex flex-row max-w-sm:flex-row items-center justify-between">
              <input
                name="telephone"
                placeholder="Votre numéro de téléphone"
                type="text"
                value={phone}
                onChange={(event) => {
                  isValidPhone(event.target.value);
                }}
                className="py-2 px-3 w-full outline-0 border border-b-gray-400  focus:bg-[#000000]/10 focus:border-b-[#000000]ease-in-out duration-500"
              />
            </div>
          </div>

          {/* <div className="my-3 p-3">
            <label className="text-xs text-gray-400">Vous êtes ?</label>
            <div className="flex flex-row max-w-sm:flex-row items-center justify-between">
              <input
                name="user"
                placeholder="Vous êtes ?"
                type="text"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                className="py-2 px-3 w-full outline-0 border border-b-gray-400  focus:bg-[#000000]/10 focus:border-b-[#000000]ease-in-out duration-500"
              />
            </div>
          </div> */}

          <div className="my-3 p-3">
            <label className="text-xs text-gray-400">Département</label>
            <div className="flex flex-row max-w-sm:flex-row items-center justify-between">
              <Autocomplete
                options={departments}
                filterOptions={filterOptions}
                onChange={(event, value) => setDepartment(value)}
                className="w-full"
                renderInput={(params) => <TextField {...params} />}
              />
              {/* <input
                name="departement"
                placeholder="Votre département"
                type="text"
                value={department}
                onChange={(event) => {
                  setDepartment(event.target.value);
                }}
                className="py-2 px-3 w-full outline-0 border border-b-gray-400  focus:bg-[#000000]/10 focus:border-b-[#000000]ease-in-out duration-500"
              /> */}
            </div>
          </div>

          <div className="my-3 p-3">
            <label className="text-xs text-gray-400">Votre message</label>
            <div className="flex flex-row max-w-sm:flex-row items-center justify-between">
              <textarea
                name="Votre message"
                placeholder="Votre message"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                className="py-2 px-3 w-full outline-0 border border-b-gray-400  focus:bg-[#000000]/10 focus:border-b-[#000000]"
              ></textarea>
            </div>
          </div>

          <div className="my-3">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_LOCAL_SITE_KEY}
              onChange={setCaptcha}
              hl="fr"
            />
          </div>
          <div className="text-center md:text-left">
            <button
              className={`my-2 font-bold text-center text-white p-4 uppercase rounded-full md:rounded-none ${
                disabledSend ? "bg-gray-400 cursor-not-allowed" : "bg-[#000000]"
              }`}
              disabled={disabledSend}
              onClick={sendContactForm}
            >
              {"S'enregistrer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
