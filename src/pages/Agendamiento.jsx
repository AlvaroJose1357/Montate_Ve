import React, { useState } from "react";
import { FaRegHandPointDown } from "react-icons/fa";
import { MdOutlineWavingHand } from "react-icons/md";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import workshopImage from "../img/workshopImage.jpg"


function Agendamiento() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBike, setSelectedBike] = useState(null);
  const [showServiceOptions, setShowServiceOptions] = useState(false);
  const [showBikeOptions, setShowBikeOptions] = useState(false);
  const [dropdownIcon, setDropdownIcon] = useState(<BiChevronDown size={20} />);
  const [bikeDropdownIcon, setBikeDropdownIcon] = useState(
    <BiChevronDown size={20} />
  );
  const [selectedDate, setSelectedDate] = useState("");
  const [newBike, setNewBike] = useState("");
  const [bikes, setBikes] = useState([]);

  const handleSelectService = (service) => {
    setSelectedService(service);
    setShowServiceOptions(false);
    setDropdownIcon(<BiChevronDown size={20} />);
  };

  const handleSelectBike = (bike) => {
    setSelectedBike(bike);
    setShowBikeOptions(false);
    setBikeDropdownIcon(<BiChevronDown size={20} />);
  };

  const toggleServiceOptions = () => {
    setShowServiceOptions(!showServiceOptions);
    setDropdownIcon(
      showServiceOptions ? (
        <BiChevronDown size={20} />
      ) : (
        <BiChevronUp size={20} />
      )
    );
  };

  const toggleBikeOptions = () => {
    setShowBikeOptions(!showBikeOptions);
    setBikeDropdownIcon(
      showBikeOptions ? <BiChevronDown size={20} /> : <BiChevronUp size={20} />
    );
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleNewBikeChange = (event) => {
    setNewBike(event.target.value);
  };

  const handleAddBike = () => {
    if (newBike) {
      setSelectedBike(newBike);
      setBikes([...bikes, newBike]);
      setNewBike("");
    }
  };

  return (
    <section className="grid grid-cols-2 w-full max-h-full">
      <div className="bg-slate-50 md:col-span-1 flex items-center justify-center p-8">
        <img
          src={workshopImage}
          alt="Taller de Citas"
          className="max-w-full max-h-full"
        />
      </div>
      <div className="bg-slate-50 md:col-span-1 flex items-start justify-center p-8">
        <div className="flex flex-col justify-between">
          <h1 className="text-5xl font-bold mb-8">
            <span className="text-indigo-600 flex items-center">
              <MdOutlineWavingHand /> ¡Hola!
            </span>
            Ya puedes realizar tu agendamiento.
          </h1>
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              Pide tu cita aquí <FaRegHandPointDown />
            </h2>
            <div className="w-72 font-bold">
              <div
                className="bg-white w-full p-2 flex items-center justify-between rounded cursor-pointer"
                onClick={toggleServiceOptions}
              >
                {selectedService || "Seleccione tipo de servicio"}
                {dropdownIcon}
              </div>
              {showServiceOptions && (
                <ul className="bg-white mt-2">
                  <li
                    className={`p-2 text-sm ${
                      selectedService === "Mantenimiento básico"
                        ? "bg-slate-400 text-white"
                        : "hover:bg-slate-400 hover:text-white"
                    }`}
                    onClick={() => handleSelectService("Mantenimiento básico")}
                  >
                    Mantenimiento básico
                  </li>
                  <li
                    className={`p-2 text-sm ${
                      selectedService === "Mantenimiento general"
                        ? "bg-slate-400 text-white"
                        : "hover:bg-slate-400 hover:text-white"
                    }`}
                    onClick={() => handleSelectService("Mantenimiento general")}
                  >
                    Mantenimiento general
                  </li>
                  <li
                    className={`p-2 text-sm ${
                      selectedService === "Mantenimiento completo"
                        ? "bg-slate-400 text-white"
                        : "hover:bg-slate-400 hover:text-white"
                    }`}
                    onClick={() =>
                      handleSelectService("Mantenimiento completo")
                    }
                  >
                    Mantenimiento completo
                  </li>
                </ul>
              )}
            </div>
            <div className="w-72 font-bold">
              <div
                className="bg-white w-full p-2 flex items-center justify-between rounded cursor-pointer"
                onClick={toggleBikeOptions}
              >
                {selectedBike || "Seleccione su bicicleta"}
                {bikeDropdownIcon}
              </div>
              {showBikeOptions && (
                <ul className="bg-white mt-2">
                  <li
                    className={`p-2 text-sm ${
                      selectedBike === "Opción 1"
                        ? "bg-slate-400 text-white"
                        : "hover:bg-slate-400 hover:text-white"
                    }`}
                    onClick={() => handleSelectBike("Bicleta cross")}
                  >
                    Bicleta cross
                  </li>
                  <li
                    className={`p-2 text-sm ${
                      selectedBike === "Opción 2"
                        ? "bg-slate-400 text-white"
                        : "hover:bg-slate-400 hover:text-white"
                    }`}
                    onClick={() => handleSelectBike("Bicicleta storage")}
                  >
                    Bicicleta storage
                  </li>
                  {bikes.map((bike) => (
                    <li
                      key={bike}
                      className={`p-2 text-sm ${
                        selectedBike === bike
                          ? "bg-slate-400 text-white"
                          : "hover:bg-slate-400 hover:text-white"
                      }`}
                      onClick={() => handleSelectBike(bike)}
                    >
                      {bike}
                    </li>
                  ))}
                  <li
                    className={`p-2 text-sm ${
                      selectedBike === "Agregar nueva bicicleta"
                        ? "bg-slate-400 text-white"
                        : "hover:bg-slate-400 hover:text-white"
                    }`}
                    onClick={() => handleSelectBike("Agregar nueva bicicleta")}
                  >
                    Agregar nueva bicicleta
                  </li>
                </ul>
              )}
            </div>
            <div className="w-72">
              {selectedBike === "Agregar nueva bicicleta" && (
                <div>
                  <input
                    type="text"
                    className="border border-gray-400 p-2 rounded w-full mb-2"
                    placeholder="Nombre de la bicicleta"
                    value={newBike}
                    onChange={handleNewBikeChange}
                  />
                  <button
                    className="bg-indigo-600 text-white rounded p-2 hover:bg-indigo-400"
                    onClick={handleAddBike}
                  >
                    Agregar
                  </button>
                </div>
              )}
            </div>
            <div className="w-72">
              <input
                type="datetime-local"
                className="border border-gray-400 p-2 rounded w-full"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Agendamiento;