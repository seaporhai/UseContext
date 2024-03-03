"use client"
import { getLocalStorage, setLocalStorage } from "@/utils/localstrorage";
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react";

export interface UserModel {
  name: any;
  id: string;
  username: string;
  profile: string | null;
}

export interface UserInput {
  username: string;
  profile: string | null;
}

interface UserContextProps {
  users: UserModel[];
  selectCard: string;
  setUsers: Dispatch<SetStateAction<UserModel[]>>;
  setSelectCard: Dispatch<SetStateAction<string>>;
  addNewUser: (user: UserInput) => void;
  updateUser: (user: UserInput, selectCard: string) => void;
  handleDeleteUser: (id: string) => void;
}

export const UserContexts = createContext<UserContextProps>({
  users: [],
  selectCard: "",
  setUsers: () => { },
  setSelectCard: () => { },
  addNewUser: () => { },
  updateUser: () => { },
  handleDeleteUser: () => { },
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<UserModel[]>([]);

  const [selectCard, setSelectCard] = useState(""); //store id of selected card

  const addNewUser = (user: UserInput) => {
    const newId = Math.random().toString(36).substring(2, 8);
    const newUser = { ...user, id: newId };
    setUsers((prev) => {
      const newAllUsers = [...prev, newUser];

      setLocalStorage("users", newAllUsers);
      return newAllUsers;
    });
  };

  const updateUser = (user: UserInput, selectCard: string) => {

    const myuser = setUsers((prevUsers) =>
      prevUsers.map((item) =>
        item.id === selectCard ? { ...item, ...user } : item
      )
    );
    setLocalStorage("users", myuser);
    return myuser;

  };


  const handleDeleteUser = (id: string) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setLocalStorage("users", updatedUsers);
    setUsers(updatedUsers);
  };

  useEffect(() => {
    const userStorage = getLocalStorage("users") ? getLocalStorage("users") : [];
    setUsers(userStorage);
  }, []);

  const contextValue: UserContextProps = {
    users,
    setUsers,
    selectCard,
    setSelectCard,
    addNewUser,
    updateUser,
    handleDeleteUser,
  };

  return <UserContexts.Provider value={contextValue}>{children}</UserContexts.Provider>;
};

export { UserProvider };
