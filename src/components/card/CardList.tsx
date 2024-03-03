import React, { useContext, useState } from "react";
import { Card } from "./Card";
import { UserContexts } from "@/Context/UserContext";
interface CardListProps {
  search: string;
}
const CardList: React.FC<CardListProps> = ({ search }) => {
  const { users } = useContext(UserContexts);

  return (
    <div>
      {users
        .filter((user) => {
          return search.trim() === ""
            ? user : user.name &&
            user.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((item, index) => (
          <React.Fragment key={index}>
            {" "}
            <Card
              item={item}
              id={item.id}
              name={item.username}
              key={item.id || index}
              image={item.profile}
            // onSelectCard={onSelectCard}
            // selectCard={selectCard}
            // onDeleteCard={onDeleteCard}
            ></Card>
          </React.Fragment>
        ))}
    </div>
  );
};

export { CardList };
