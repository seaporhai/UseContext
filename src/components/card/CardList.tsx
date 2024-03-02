import React, { useContext, useState } from "react";
import { Card } from "./Card";
import { UserContexts } from "@/Context/UserContext";

const CardList = () => {
  const { users } = useContext(UserContexts);

  return (
    <div>
      {users.map((item, index) => (
        <Card
          id={item.id}
          name={item.username}
          key={item.id || index}
          image={item.profile}
          // onSelectCard={onSelectCard}
          // selectCard={selectCard}
          // onDeleteCard={onDeleteCard}
        ></Card>
      ))}
    </div>
  );
};

export { CardList };
