"use client";
import React, { useState, useEffect } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Calendar = ({ couponData, hourData, setopenModalRes }) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = window.localStorage.getItem("token");
      setToken(storedToken || "");
    }
  }, []);
  const coupon_id = couponData.coupon.coupon_id;

  const shop_id = couponData.coupon.trademark.shops[0].id;
  const [selectedTime, setSelectedTime] = useState("");
  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const morningStartTime = hourData[0].schedule[0].$.am_begin;

  const morningEndTime = hourData[0].schedule[0].$.am_end;

  const morningDuration = parseInt(hourData[0].schedule[0].$.duration, 10);

  const afternoonStartTime = hourData[0].schedule[0].$.pm_begin;

  const afternoonEndTime = hourData[0].schedule[0].$.pm_end;

  const afternoonDuration = parseInt(hourData[0].schedule[0].$.duration, 10);

  function generateTimeSlots(startTime, endTime, duration, closed) {
    const timeSlots = [];
    let currentTime = startTime;

    while (currentTime < endTime) {
      timeSlots.push({
        time: currentTime,
        closed: closed,
      });
      const [hours, minutes, seconds] = currentTime.split(":").map(Number);
      const newMinutes = minutes + duration;
      const newHours = hours + Math.floor(newMinutes / 60);

      currentTime = `${String(newHours).padStart(2, "0")}:${String(
        newMinutes % 60
      ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    return timeSlots;
  }

  const today = new Date();

  const [selectedDate, setSelectedDate] = useState(
    today.toISOString().split("T")[0]
  );
  const [selectedDateName, setSelectedDateName] = useState("");
  const [prevClickedCell, setPrevClickedCell] = useState(null);
  const [popupZIndex, setPopupZIndex] = useState(5);
  const [containerZIndex, setContainerZIndex] = useState(2);
  useEffect(() => {
    const options = { weekday: "long" };
    const dayName = Intl.DateTimeFormat("en-US", options).format(
      new Date(selectedDate)
    );
    setSelectedDateName(dayName);
  }, [selectedDate]);
  useEffect(() => {
    var choosenDate = selectedDateName.toLocaleLowerCase();
    const morningTimeSlots = generateTimeSlots(
      morningStartTime,
      morningEndTime,
      morningDuration,
      hourData[0].closing[0].$[choosenDate + "_am"] === "1"
    );
    const afternoonTimeSlots = generateTimeSlots(
      afternoonStartTime,
      afternoonEndTime,
      afternoonDuration,
      hourData[0].closing[0].$[choosenDate + "_pm"] === "1"
    );

    setAfternoonTime(
      afternoonTimeSlots.map((time) => {
        return { time: time.time.substr(0, 5), closed: time.closed };
      })
    );
    setMorningTime(
      morningTimeSlots.map((time) => {
        return { time: time.time.substr(0, 5), closed: time.closed };
      })
    );
  }, [selectedDateName]);
  const handleDayClick = (info) => {
    const clickedDate = info.dateStr;
    setSelectedDate(clickedDate);
    setSelectedTime("");
    const dateCell = info.dayEl;
    const prevDateCell = prevClickedCell;
    if (prevDateCell) {
      prevDateCell.classList.remove("my-selected-date");
    }

    dateCell.classList.add("my-selected-date");

    setPrevClickedCell(dateCell);
  };
  const isButtonDisabled =
    !coupon_id || !selectedDate || !selectedTime || !shop_id;

  const makeReservation = async () => {
    if (isButtonDisabled) {
      return;
    }
    try {
      await axios.post("/api/reservation", {
        coupon_id: coupon_id,
        date: selectedDate,
        hour: selectedTime,
        shop_id: shop_id,
        token: window.localStorage.getItem("token"),
      });
      toast.success(
        "Votre demande a bien été prise en compte, vous serez contacté rapidement pour confirmer la réservation."
      );
    } catch (error) {
      toast.error(
        "Une erreur s'est passée dans l'ajout de votre  réservation veuillez choisir un autre horaire."
      );
    }
  };

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [morningTime, setMorningTime] = useState([]);
  const [afternoonTime, setAfternoonTime] = useState([]);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
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
      <div className="flex items-center justify-center">
        <div className="mx-auto">
          <div className=" relative">
            <div className="mt-3 mx-auto" style={{ zIndex: containerZIndex }}>
              <Fullcalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                  start: "prev",
                  center: "title",
                  end: "next",
                }}
                dateClick={handleDayClick}
                firstDay={1}
              />
              {/* <div className="text-center">
                                {isPopupVisible && (
                                    <div className="popup absolute top-0 w-[90%] lg:w-3/5  md:w-3/4 m-auto p-3 bg-white shadow-md rounded-md left-0 right-0"
                                        style={{ zIndex: popupZIndex }}>
                                        <div className="popup-content">
                                            <button className=" text-right block" onClick={closePopup}>&#x2716;</button>
                                            <img src="/assets/img/reservation.jpg" className=" w-80 mx-auto" alt="reservation" />
                                            <p className="mt-2 text-center text-[#3ACCE1] text-md">Succès! Réservation confirmée</p>
                                        </div>
                                    </div>
                                )}
                            </div> */}
              <div className="mt-6 pb-4 md:pb-0 lg:pb-0 md:mt0 lg:mt-0 rounded-t-[50px] lg:rounded-none lg:shadow-none  border lg:border-none  px-8 shadow-md">
                <div className="mt-4 md:mt-2 lg:mt-2 mb-2">
                  <div className=" font-medium text-lg text-black">
                    Disponibilité horaire :
                  </div>
                </div>
                <div className=" space-y-4">
                  <div className="grid grid-cols-5 gap-1">
                    {morningTime.map((time, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (!time.closed) {
                            handleTimeSelection(time.time);
                          }
                        }}
                        className={
                          time.time === selectedTime
                            ? "bg-[#3ACCE1] p-1 text-white"
                            : time.closed
                            ? "text-gray-400 cursor-default p-1"
                            : "text-[#0C233C] p-1"
                        }
                      >
                        {time.time}
                      </button>
                    ))}
                    {afternoonTime.map((time, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (!time.closed) {
                            handleTimeSelection(time.time);
                          }
                        }}
                        className={
                          time.time === selectedTime
                            ? "bg-[#3ACCE1] p-1 text-white"
                            : time.closed
                            ? "text-gray-400 cursor-default p-1"
                            : "text-[#0C233C] p-1"
                        }
                      >
                        {time.time}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="text-center mt-3">
                  <button
                    className={`inline ${
                      isButtonDisabled
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#FFA631]"
                    } rounded-full py-3 text-white w-full`}
                    disabled={isButtonDisabled}
                    onClick={makeReservation}
                  >
                    Valider la réservation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
