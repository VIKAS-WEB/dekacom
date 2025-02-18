import React from "react";

const UserEconomieListe = ({ data }) => {
  const actions = data;

  let totPoints = 0;

  return (
    <section>
      <table className="w-full text-left my-10">
        <tbody>
          <tr className="bg-[#3ACCE1] text-white">
            <th className="p-4">Action</th>
            <th className="p-4">Description</th>
            <th className="p-4">Points</th>
          </tr>

          {actions.map((action, index) => {
            totPoints = totPoints + Number(action.point);
            return (
              <tr className="even:bg-[#3ACCE1]/20" key={index}>
                <td className="p-4">{action.name}</td>
                <td className="p-4">{action.description}</td>
                <td className="p-4">{action.point}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex flex-row justify-end">
        <div className="bg-gray-100 p-2 rounded-full right-0 w-fit">
          Vos points : <b>{totPoints} points</b>
        </div>
      </div>
    </section>
  );
};

export default UserEconomieListe;
