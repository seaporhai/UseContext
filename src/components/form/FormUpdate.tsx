/* eslint-disable @next/next/no-img-element */
import { UserContexts, UserModel } from "@/Context/UserContext";
import React, { useContext, useState } from "react";

const FormUpdate = () => {
  const { users, selectCard, updateUser } = useContext(UserContexts);

  const selectedUser = users.find(
    (user) => user.id === selectCard
  ) as UserModel;

  const [user, setUser] = useState({
    username: selectedUser.username,
    profile: selectedUser.profile,
  });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser(user, selectCard);
  };

  // Get the value from the input fields:
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleOnUploadFile = (e: React.ChangeEvent<HTMLInputElement | HTMLFormElement>) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser((prevUser) => {
        return {
          ...prevUser,
          profile: imageUrl,
        };
      });
    }
  };

  const handleRemoveFile = () => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        profile: "",
      };
    });
  };

  return (
    <form className=" flex flex-col items-center" onSubmit={handleOnSubmit}>
      <label htmlFor="name" className="text-gray-500">
        Name:
      </label>
      <input
        className="text-black border  w-[300px] rounded-md border-black m-2 focus:ring-2 outline-none px-2"
        type="text"
        id="name"
        name="username"
        defaultValue={selectedUser.username}
        value={user.username}
        onChange={handleOnChange}
      />
      <br />

      <label htmlFor="image" className="text-gray-500">
        Image:
      </label>
      {selectedUser.profile ? (
        <>
          <div className="relative w-[200px] mr-[260px] ">
            <img src={selectedUser.profile} alt="profile" />
          </div>
          <button
            className="py-2 px-4 rounded-xl bg-red-500 mt-7   "
            onClick={handleRemoveFile}
          >
            Delete image
          </button>
        </>
      ) : (
        <input
          className="border rounded-md border-[red] m-2"
          type="file"
          accept="image/*"
          name="profile"
          onChange={handleOnUploadFile}
        />
      )}
      <br />

      <div>
        <button className="bg-green-400 px-4 py-2 rounded-xl  w-32 mt-8  ">
          Update
        </button>
      </div>
    </form>
  );
};

export { FormUpdate };
