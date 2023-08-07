import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { NFTContext } from "../context/NFTcontext";
import images from "../assets";
import axios from "axios";

const NFTCard = ({ nft, onProfilePage }) => {
  const { nftCurrency } = useContext(NFTContext);
  const router = useRouter();

  const handleClaim = async () => {
    const response = await axios.get(
      "https://sheet.best/api/sheets/9369f753-2129-497a-8a6a-205601812052"
    );
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const currentWalletAddress = accounts[0];
    const FilterWalletAddreses = await response?.data?.filter((data) => {
      const dataWalletAddress = data?.Wallet_Address?.toLowerCase();
      const currentAddressLowerCase = currentWalletAddress?.toLowerCase();
      return dataWalletAddress === currentAddressLowerCase;
    });

    if (FilterWalletAddreses.length === 0) {
      router.push("/register");
    } else {
      router.push({ pathname: "/nft-details", query: nft });
    }
  };

  return (
    <div className="flex-1 flex-wrap min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 bg-white rounded-xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2 shadow-md">
      <div className="relative w-full h-52 sm:h-36 minmd:h-60 minlg:h-300 rounded-2xl overflow-hidden">
        <Image
          src={nft.image || images[`nft${nft.i}`]}
          layout="fill"
          objectFit="cover"
          alt="nft_image"
        />
      </div>

      <div className="flex flex-col mt-3">
        <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">
          {nft.name}
        </p>
        <div className="flexBetween mt-1 minlg:mt-3 flex-row xs:flex-col xs:items-start xs:mt-3">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xs minlg:text-lg">
            {nft.price} <span className="normal">{nftCurrency}</span>
          </p>
        </div>
        <button
          btnName="Claim"
          btnType="outline"
          className={`nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white mt-2 rounded-xl`}
          onClick={handleClaim}
        >
          Claim
        </button>
      </div>
    </div>
  );
};

export default NFTCard;
