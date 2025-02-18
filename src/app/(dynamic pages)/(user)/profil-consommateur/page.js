"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import UpdatedSuccessfully from "./components/UpdatedSuccessfully";
import DeleteAccount from "./components/DeleteAccount";

const ProfilConsommateur = () => {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [spcategories, setSpcategories] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredDepartments, setFilteredDepartments] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [passwordVal, setPasswordVal] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const [citiesRes, countriesRes, departmentsRes, spcRes, userRes] =
          await Promise.all([
            axios.get("/api/cities"),
            axios.get("/api/countries"),
            axios.get("/api/departments"),
            axios.get("/api/spc"),
            axios.post("/api/usersDetails", {
              token: localStorage.getItem("token") || "",
            }),
          ]);
        setCities(citiesRes.data);
        setCountries(countriesRes.data);
        setDepartments(departmentsRes.data);
        setSpcategories(spcRes.data);
        if (userRes.data) {
          setUserDetails(userRes.data);
          filterLocationData(userRes.data, citiesRes.data, departmentsRes.data);
        } else {
          localStorage.clear();
          router.replace("/");
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filterLocationData = (userDetails, allCities, allDepartments) => {
    const userCountry = userDetails.country || 1;
    const userDepartment = userDetails.department || "59";

    setFilteredDepartments(
      allDepartments.filter((dep) => dep.country_id == userCountry)
    );
    setFilteredCities(
      allCities.filter((city) => city.department_code == userDepartment)
    );
  };

  const handleDepartmentChange = (event) => {
    setFilteredDepartments(
      departments.filter((dep) => dep.country_id == event.target.value)
    );
  };

  const handleCityChange = (event) => {
    setFilteredCities(
      cities.filter((city) => city.department_code === event.target.value)
    );
  };

  const handleUpdate = async (data) => {
    const token = localStorage.getItem("token");
    const formData = Object.fromEntries(data.entries());

    const { password, passwordConfirmation } = formData;
    if (
      password &&
      (password !== passwordConfirmation || password.length < 8)
    ) {
      setPasswordVal(
        password.length < 8
          ? "* Minimum 8 caractères"
          : "* Les mots de passe ne correspondent pas"
      );
      return;
    }

    try {
      await axios.post("/api/userUpdate", { ...formData, token });
      router.push("/profil-consommateur?showDialog=s");
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">Chargement...</div>
    );
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(new FormData(e.target));
        }}
      >
        <div className="p-3 my-5 gender">
          <h1>Votre identité</h1>
          <p>
            <b>Civilité</b>
          </p>
          <div className="flex space-x-2 mt-2">
            <input
              type="radio"
              name="gender"
              id="monsieur"
              value="M"
              defaultChecked={userDetails.gender === "M"}
              className="hidden"
            />
            <label
              htmlFor="monsieur"
              className="label-gender border px-5 py-2 rounded-full text-[#000000] border-[#000000]"
            >
              Monsieur
            </label>

            <input
              type="radio"
              name="gender"
              id="madame"
              value="F"
              defaultChecked={userDetails.gender === "F"}
              className="hidden"
            />
            <label
              htmlFor="madame"
              className="label-gender border px-5 py-2 rounded-full text-[#000000] border-[#000000]"
            >
              Madame
            </label>
          </div>
        </div>

        {/* Remaining form fields */}
        <div className="flex flex-col md:flex-row justify-between w-full my-5">
          <div className="w-full p-3">
            <label className="text-sm font-semibold">Nom</label>
            <input
              name="firstname"
              defaultValue={userDetails.firstname}
              placeholder="Votre Nom"
              type="text"
              className="py-2 px-3 w-full outline-0 border rounded-full focus:border-[#3ACCE1]"
            />
          </div>
          <div className="w-full p-3">
            <label className="text-sm font-semibold">Prénom</label>
            <input
              name="name"
              defaultValue={userDetails.name}
              placeholder="Votre Prénom"
              type="text"
              className="py-2 px-3 w-full outline-0 border rounded-full focus:border-[#3ACCE1]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full my-5">
          <div className="w-full p-3">
            <label className="text-sm font-semibold">Pseudo</label>
            <input
              name="login"
              defaultValue={userDetails.login}
              placeholder="Votre Pseudo"
              type="text"
              className="py-2 px-3 w-full outline-0 border rounded-full focus:border-[#3ACCE1]"
            />
          </div>

          <div className="w-full p-3">
            <label className="text-sm font-semibold">
              Catégorie sociaux professionnelle
            </label>

            <select
              id="spc"
              name="spc"
              defaultValue={userDetails.spc}
              className="px-3 border rounded-full hover:ring-[#3ACCE1] focus:ring-[#3ACCE1] focus:border-[#3ACCE1] block w-full p-2.5 dark:focus:ring-[#3ACCE1] dark:focus:border-[#3ACCE1]"
            >
              {spcategories.map((cat, key) => {
                return (
                  <optgroup
                    className="hover:bg-[#3ACCE1] font-semibold"
                    label={cat.spc_name}
                    key={key}
                  >
                    {cat.subcategories.map((sub) => (
                      <option
                        className="hover:bg-[#3ACCE1]"
                        key={sub.spc_id}
                        value={sub.spc_id}
                      >
                        {sub.spc_name}
                      </option>
                    ))}
                  </optgroup>
                );
              })}
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full p-3">
            <label className="text-sm font-semibold">Date de Naissance</label>
            <input
              id="birthday"
              name="birthday"
              defaultValue={userDetails.date_birth}
              placeholder="Votre date de Naissance"
              type="date"
              className="py-2 px-3 w-full outline-0 border rounded-full focus:border-[#3ACCE1]"
            />
          </div>

          <div className="w-full p-3"></div>
        </div>
        {/* Country and Department Select */}
        <div className="flex flex-col md:flex-row justify-between w-full my-5">
          <div className="w-full p-3">
            <label htmlFor="countries" className="text-sm font-semibold">
              Pays
            </label>
            <select
              id="countries"
              name="country"
              defaultValue={userDetails.country || "1"}
              onChange={handleDepartmentChange}
              className="w-full py-2 px-3 border rounded-full hover:ring-[#3ACCE1] focus:ring-[#3ACCE1]"
            >
              <option value="" disabled>
                Choisissez un pays
              </option>
              {countries.map((country) => (
                <option key={country.country_id} value={country.country_id}>
                  {country.country_name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full p-3">
            <label htmlFor="department" className="text-sm font-semibold">
              Département
            </label>
            <select
              id="department"
              name="department"
              defaultValue={userDetails.department || "59"}
              onChange={handleCityChange}
              className="w-full py-2 px-3 border rounded-full hover:ring-[#3ACCE1] focus:ring-[#3ACCE1]"
            >
              <option value="" disabled>
                Choisissez un département
              </option>
              {filteredDepartments.map((dep) => (
                <option key={dep.department_code} value={dep.department_code}>
                  {dep.department_name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full my-5">
          <div className="w-full p-3">
            <label htmlFor="city" className="text-sm font-semibold">
              Ville
            </label>
            <select
              id="city"
              name="city"
              defaultValue={userDetails.city || "59"}
              className="w-full py-2 px-3 border rounded-full hover:ring-[#3ACCE1] focus:ring-[#3ACCE1]"
            >
              <option value="" disabled>
                Choisissez une ville
              </option>
              {filteredCities.map((city) => (
                <option key={city.city_id} value={city.city_id}>
                  {city.city_name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full p-3">
            <label className="text-sm font-semibold">Code postal</label>
            <input
              id="zipcode"
              name="zipcode"
              defaultValue={userDetails.zipcode}
              placeholder="Code postal"
              type="text"
              className="py-2 px-3 w-full outline-0 border rounded-full focus:border-[#3ACCE1]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full my-5">
          {/* <div className="w-full p-3">
            <label className="text-sm font-semibold">Adresse Postal</label>
            <input
              name="address"
              defaultValue={userDetails[0].$.address}
              placeholder="Votre Adresse"
              type="text"
              className="py-2 px-3 w-full outline-0 border rounded-full focus:border-[#3ACCE1]"
            />
          </div> */}

          <div className="w-full p-3">
            <label className="text-sm font-semibold">Numero de téléphone</label>
            <input
              name="phone"
              defaultValue={userDetails.phone}
              placeholder="Votre Numero de téléphone"
              type="text"
              className="py-2 px-3 w-full outline-0 border rounded-full focus:border-[#3ACCE1]"
            />
          </div>

          <div className="w-full p-3">
            <label className="text-sm font-semibold">
              Email associé à ce compte
            </label>
            <input
              name="email"
              defaultValue={userDetails.email}
              placeholder="Votre Email"
              type="text"
              className="py-2 px-3 w-full outline-0 border rounded-full focus:border-[#3ACCE1]"
            />
          </div>
        </div>

        <div className="flex-col md:flex-row justify-between w-full my-5 hidden">
          <div className="w-full p-3">
            <label className="text-sm font-semibold">
              Votre code de parrinage
            </label>
            <input
              name="codeparrinage"
              disabled
              placeholder="Votre code : 0000XX"
              type="text"
              className="py-2 px-3 w-full outline-0 border rounded-full font-semibold"
            />
          </div>

          <div className="w-full p-3"></div>
        </div>

        {/* <div className="flex flex-col md:flex-row justify-between w-full my-5">
          <div className="w-full p-3">
            <div className="flex flex-row justify-between items-end">
              <div>
                <label className="text-sm font-semibold">
                  Vos habitudes de consommation
                </label>
                <input
                  name="consommation"
                  placeholder="habitudes de consommation"
                  type="text"
                  className="py-2 px-3 w-3/4  outline-0 border rounded-full focus:border-[#3ACCE1]"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">En Ajouter</label>
                <button className="py-2 px-3 w-20 border rounded-full ">
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="w-full p-3">
            <div className="flex flex-row justify-between items-end">
              <div>
                <label className="text-sm font-semibold">
                  Vos enseignes préférées
                </label>
                <input
                  name="enseignes"
                  placeholder="Vos enseignes préférées"
                  type="text"
                  className="py-2 px-3 w-3/4  outline-0 border rounded-full focus:border-[#3ACCE1]"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">En Ajouters</label>
                <button className="py-2 px-3 w-20 border rounded-full ">
                  +
                </button>
              </div>
            </div>
          </div>
        </div> */}

        <div className="flex flex-col md:flex-row justify-between w-full my-5">
          <div className="w-full p-3">
            <label className="text-sm font-semibold">Mot de passe</label>
            <input
              name="password"
              type="password"
              placeholder="Entrez votre mot de passe"
              className="py-2 px-3 w-full outline-0 border rounded-full focus:border-[#3ACCE1]"
            />
            <span className="text-red-500 text-sm">{passwordVal}</span>
          </div>
          <div className="w-full p-3">
            <label className="text-sm font-semibold">
              Confirmation mot de passe
            </label>
            <input
              name="passwordConfirmation"
              type="password"
              placeholder="Confirmez votre mot de passe"
              className="py-2 px-3 w-full outline-0 border rounded-full focus:border-[#3ACCE1]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center w-full my-10">
          <div className="p-3">
            <button
              type="submit"
              className="hover:bg-[#3ACCE1] border border-[#3ACCE1] font-semibold rounded-full hover:text-white px-5 py-2 ease-in-out duration-300 mx-auto"
            >
              Mettre à jour mon profil
            </button>
          </div>

          <div className="p-3 w-fit">
            <Link href="/profil-consommateur?showDialog=y">
              <div className="hover:bg-[#3ACCE1] border border-[#3ACCE1] font-semibold rounded-full hover:text-white px-5 py-2 ease-in-out duration-300 w-auto mx-auto text-center">
                Supprimer mon compte
              </div>
            </Link>
          </div>
        </div>

        <div className="my-10">
          <Link
            href="/"
            className="flex flex-row items-center font-semibold max-w-3xl:text-xs"
          >
            <FaArrowLeft className="mr-3" /> Retour à la page d{"'"}accueil
          </Link>
        </div>
      </form>
      <UpdatedSuccessfully />
      <DeleteAccount />
    </>
  );
};

export default ProfilConsommateur;
