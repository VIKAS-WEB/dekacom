import React from "react";
import Image from "next/image";

const Listavis = ({ avisData }) => {
  const calculateTimeDifference = (date) => {
    const currentDate = new Date();
    const timeDifference = currentDate - date;
    const secondsDifference = Math.abs(timeDifference) / 1000;
    const minutesDifference = secondsDifference / 60;
    const hoursDifference = minutesDifference / 60;
    const daysDifference = hoursDifference / 24;
    const yearsDifference = daysDifference / 365;

    if (secondsDifference < 60) {
      return `${Math.floor(secondsDifference)} seconds ago`;
    } else if (minutesDifference < 60) {
      return `${Math.floor(minutesDifference)} minutes ago`;
    } else if (hoursDifference < 24) {
      return `${Math.floor(hoursDifference)} hours ago`;
    } else if (daysDifference < 365) {
      return `${Math.floor(daysDifference)} days ago`;
    } else {
      return `${Math.floor(yearsDifference)} years ago`;
    }
  };

  if (!avisData || !avisData[0]) {
    return (
      <p className="text-xl">
        Soyez le premier à laisser votre avis sur ce coupon
      </p>
    );
  }
  return (
    <>
      {avisData &&
        avisData.map((avisItem, index) => {
          let cleanedText = avisItem.text;

          if (avisItem.text && typeof avisItem.text === "string") {
            cleanedText = avisItem.text;
          }

          const timeDifference = calculateTimeDifference(
            new Date(avisItem.date)
          );

          return (
            <div key={index} className="mt-3">
              <div className="mt-5">
                <div className="flex flex-row items-center">
                  <div className="font-normal items-center flex gap-1">
                    <div>
                      <p className=" text-lg"> {avisItem.author}</p>
                    </div>
                    <div>
                      <p className=" font-medium">
                        {avisItem.department_code !== null &&
                        avisItem.department_code !== "" &&
                        avisItem.department_name !== null &&
                        avisItem.department_name !== "" ? (
                          <>
                            (
                            {`${avisItem.department_code} - ${avisItem.department_name}`}
                            )
                          </>
                        ) : null}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#B3B3B3] text-sm font-normal">
                        {timeDifference}
                      </p>
                    </div>
                    <div className="ml-1 bg-[#f4fbfb] px-2 py-1 flex items-center">
                      <Image
                        src="/assets/img/star_filled.svg"
                        className="w-4 mr-2"
                        width={16}
                        height={16}
                        alt="star"
                      />
                      <span className="text-[#B3B3B3] text-sm font-semibold">
                        {avisItem.vote}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  {" "}
                  <div dangerouslySetInnerHTML={{ __html: cleanedText }} />
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Listavis;
