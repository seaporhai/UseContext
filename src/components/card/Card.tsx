"use client";
import React, { ReactNode, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { MyContextProvider } from "@/Context/context";

import { UserContexts } from "@/Context/UserContext";

interface CardProps {
  id: string;
  image: string;
  name: string;
  selectCard: string | null;
  onSelectCard: React.Dispatch<React.SetStateAction<string>>;
  onDeleteCard: React.Dispatch<React.SetStateAction<string>>;
}
const Card: React.FC<CardProps> = ({ id, name, image }: CardProps) => {
  const { selectCard, setSelectCard, handleDeleteUser } =
    useContext(UserContexts);


  return (
    //Card
    <div
      onClick={() => {
        // Unselect Card
        if (selectCard === id) {
          setSelectCard("");
        } else {
          setSelectCard(id);
        }
        // Select Card
      }}
      className={
        selectCard === id
          ? "flex justify-between items-center w-[800px] ml-[300px] bg-[#929292] text-white  mt-5 p-2 border border-[#954dd3] rounded-lg shadow-xl "
          : "flex justify-between items-start w-[600px] bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-purple-600  m-auto mt-5 ml-[400px] p-2 border border-[#5a5858] rounded-lg hover:ml-[300px] hover:w-[800px] shadow-xl"
      }
    >
      <div className="flex flex-row justify-center gap-2 ">
        <div className="flex flex-auto">
          <Image
            src={image}
            width={90}
            height={90}
            className="border rounded-full"
            alt="User's Photo"
          ></Image>
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <p className="text-lg font-semibold text-[#33363F] font-sans ">
            {name}
          </p>

          <Link
            href={`/${name}`}
            className="text-xs font-normal border text-slate-600 hover:text-white opacity-[60%] font-sans p-1 hover:bg-gray-400 rounded-lg text-center"
          >
            Preveiw
          </Link>
        </div>
      </div>
      <div>
        <button
          onClick={(e) => {
            handleDeleteUser(id)
            e.stopPropagation()
          }}
          className="bg-red-600 rounded-md w-[60px] "
        >
          close
        </button>
      </div>
    </div>
  );
};
export { Card }
