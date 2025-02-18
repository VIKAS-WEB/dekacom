import axios from "axios";
import { revalidatePath } from "next/cache";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCircleXmark } from "react-icons/fa6";

const DeleteAcoountYes = () => {
  const [validation, setValidation] = useState(false);
  const [reason, setReason] = useState("");
  const router = useRouter();

  const token = window.localStorage.getItem("token");

  const deleteUser = async () => {
    await axios.post("/api/usersDelete", {
      token,
      reason,
    });

    setValidation(true);

    setTimeout(() => {
      window.localStorage.clear();
      router.replace("/");
      router.refresh();
    }, "3000");

    // setOpenModal(false);
    // router.refresh();
  };

  return (
    <>
      <div className="form p-6 text-left">
        <div>
          <h3 className="text-xl font-bold "> Vous aller nous manquer ! </h3>
          <p className="font-bold">
            Nous sommes navrés de vous voir nous quitter, pourriez-vous nous
            doner plus de précisions sur la raison de votre départ ?
          </p>
        </div>

        <form action={deleteUser}>
          <div>
            <div className="flex flex-row max-w-sm:flex-row items-center justify-between border border-gray-400 rounded-md ">
              <textarea
                name=""
                id=""
                rows="2"
                className="rounded-lg border p-3 w-full"
                onChange={(event) => {
                  setReason(event.target.value);
                }}
                value={reason}
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full border my-2 font-bold text-center text-white rounded-full p-2 bg-[#000000] uppercase"
            >
              Envoyer le message
            </button>
          </div>
        </form>

        {validation == true ? (
          <label className=" bg-red-800 text-white rounded-md p-2 text-sm flex flex-row justify-center items-center">
            <FaCircleXmark className="text-white mx-2" /> Votre compte a été
            supprimé
          </label>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DeleteAcoountYes;
