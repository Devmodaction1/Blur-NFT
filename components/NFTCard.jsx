import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router"; // Import the useRouter hook

import { NFTContext } from "../context/NFTcontext";
import images from "../assets";

const NFTCard = ({ nft, onProfilePage }) => {
  const { nftCurrency } = useContext(NFTContext);
  const router = useRouter(); // Initialize the useRouter hook

  const handleClaim = () => {
    console.log("RUN");
    router.push({ pathname: "/nft-details", query: nft }); // Navigate to "/nft-details" with nft object as query parameter
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

// import { useContext } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import { NFTContext } from "../context/NFTcontext";
// import images from "../assets";
// import { shortenAddress } from "../utils/shortendAddress";
// import Button from "./Button";

// const NFTCard = ({ nft, onProfilePage }) => {
//   console.log("🚀 ~ file: NFTCard.jsx:10 ~ NFTCard ~ nft:", nft);
//   const { nftCurrency } = useContext(NFTContext);

//   return (
//     // <Link href={{ pathname: "/nft-details", query: nft }}>
//     <div className="flex-1 flex-wrap min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 bg-white rounded-xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer shadow-md">
//       <div className="relative w-full h-52 sm:h-36 minmd:h-60 minlg:h-300 rounded-2xl overflow-hidden">
//         <Image
//           src={nft.image || images[`nft${nft.i}`]}
//           layout="fill"
//           objectFit="cover"
//           alt="nft_image"
//         />
//       </div>

//       <div className="flex flex-col mt-3">
//         <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">
//           {nft.name}
//         </p>
//         <div className="flexBetween mt-1 minlg:mt-3 flex-row xs:flex-col xs:items-start xs:mt-3">
//           <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xs minlg:text-lg">
//             {nft.price} <span className="normal">{nftCurrency}</span>
//           </p>
//         </div>
//         {/* <Link
//           href={{ pathname: "/nft-details", query: nft }}
//           // className={`nft-gradient text-sm minlg:text-lg py-2 m px-6 minlg:px-8 font-poppins font-semibold text-white `}
//         > */}
//         <Button
//           btnName="Claim"
//           btnType="outline"
//           classStyles=" mt-2 rounded-xl"
//           onClick={{ pathname: "/nft-details", query: nft }}
//         />
//         {/* </Link> */}
//       </div>
//     </div>
//   );
// };

// export default NFTCard;
