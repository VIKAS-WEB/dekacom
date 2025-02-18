"use client";

import ModalDelete from "./ModalDelete";

const DeleteAccount = () => {
  return (
    <ModalDelete>
      <div className="form p-6 text-left">
        <div>
          <h3 className="text-xl font-bold "> Supprimer mon compte </h3>
          <p className="font-normal">
            vous êtes sur le point de supprimer votre compte personnel sur
            SmartReduc, êtes-vous certains de vouloir supprimer votre compte ?
          </p>
          <p>
            <b>
              Cette action entrainera la perte de vos points de fidélité cumulés
              jusqu{"'"}à aujourd{"'"}hui
            </b>
          </p>
        </div>
      </div>
    </ModalDelete>
  );
};

export default DeleteAccount;
