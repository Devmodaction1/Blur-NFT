import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { NFTContext } from "../context/NFTcontext";

export default function Register({ classStyles, setActive, router }) {
  const [showModal, setShowModal] = useState(false);
  const [register, setRegister] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    wallet_address: "",
    message: "",
  });

  const handleSubmit = async () => {
    const data = {
      Name: userData.name,
      Email: userData.email,
      Wallet_Address: userData.wallet_address,
      Message: userData.message,
    };
    try {
      await axios.post(
        "https://sheet.best/api/sheets/9369f753-2129-497a-8a6a-205601812052",
        data
      );
      setRegister(true);
      setShowModal(false);
    } catch (err) {
      console.log(err, "data submit error line:27");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {!register ? (
        <>
          <button
            onClick={() => setShowModal(true)}
            className={`nft-gradient text-sm minlg:text-lg py-3 mx-2 px-6 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`}
          >
            <p className="text-sm font-medium leading-none text-white">
              Register
            </p>
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            setActive("");
            router.push("/create-nft");
          }}
          className={`nft-gradient text-sm minlg:text-lg py-3 mx-2 px-6 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`}
        >
          <p className="text-sm font-medium leading-none text-white">
            Create NFT
          </p>
        </button>
      )}
      {showModal ? (
        <div className="justify-center mt-8 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
          <div className="relative mx-auto my-6 w-96">
            <div className="border-0  rounded-lg shadow-lg relative flex flex-col w-full dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1 outline-none focus:outline-none">
              <div className="relative p-6 flex-auto">
                <div>
                  <label
                    htmlFor="name"
                    className="text-white text-sm font-bold leading-tight tracking-normal"
                  >
                    Name
                  </label>
                  <div className="relative mb-5 mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={handleInputChange}
                      className="text-white focus:outline-none focus:border focus:border-yellow-700 font-normal w-full h-10 flex items-center pl-3 pr-10 text-sm border-gray-300 rounded border"
                      placeholder="Enter your name"
                    />
                  </div>
                  <label
                    htmlFor="personEmail"
                    className="text-white text-sm font-bold leading-tight tracking-normal"
                  >
                    Email
                  </label>
                  <div className="relative mb-5 mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleInputChange}
                      className="text-white focus:outline-none focus:border focus:border-yellow-700 font-normal w-full h-10 flex items-center pl-3 pr-10 text-sm border-gray-300 rounded border"
                      placeholder="Enter your email"
                    />
                  </div>
                  <label
                    htmlFor="wallet_address"
                    className="text-white text-sm font-bold leading-tight tracking-normal"
                  >
                    Wallet Address
                  </label>
                  <div className="relative mb-5 mt-2">
                    <input
                      id="wallet_address"
                      name="wallet_address"
                      type="text"
                      onChange={handleInputChange}
                      className="text-white focus:outline-none focus:border focus:border-yellow-700 font-normal w-full h-10 flex items-center pl-3 pr-10 text-sm border-gray-300 rounded border"
                      placeholder="Enter your address"
                    />
                  </div>
                  <label
                    htmlFor="message"
                    className="text-white text-sm font-bold leading-tight tracking-normal"
                  >
                    Message
                  </label>
                  <div className="relative mb-5 mt-2">
                    <input
                      id="message"
                      name="message"
                      type="text"
                      onChange={handleInputChange}
                      className="text-white focus:outline-none focus:border focus:border-yellow-700 font-normal w-full h-10 flex items-center pl-3 pr-10 text-sm border-gray-300 rounded border"
                      placeholder="Enter message"
                    />
                  </div>

                  <div className="flex justify-between items-center gap-4">
                    <button
                      onClick={handleSubmit}
                      className={`nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`}
                    >
                      Submit
                    </button>
                    {/* <h1 className="text-red-800">ERROR</h1> */}
                  </div>
                </div>
                <div
                  onClick={() => setShowModal(false)}
                  className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    className="icon icon-tabler icon-tabler-x"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
