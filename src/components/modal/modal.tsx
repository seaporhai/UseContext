import { ReactNode, useContext, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../button";
import FloatingButton from "@/components/button/FloatingButton";
import { UserContexts } from "@/Context/UserContext";
interface ModalProps {
  children?: ReactNode;
  selectCard?: string;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const { selectCard } = useContext(UserContexts);

  return (
    <>
      {/* Floating Button */}
      <FloatingButton
        onClick={() => setIsShowModal(true)}
        position="bottom-left"
      >
        {selectCard ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
            />
          </svg>
        )}
      </FloatingButton>
      {isShowModal && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed bg-gray-500 text-white shadow-lg top-0 right-0 w-full max-w-xl h-screen p-5"
          >
            <button
              onClick={() => setIsShowModal((sideBar) => !sideBar)}
              className="bg-red-400 text-white h-8 w-8 block mb-2 rounded-full"
            >
              &times;
            </button>
            <div>{children}</div>
          </motion.div>
          {/* <div>
            <Button
              onClick={() => setIsShowModal((sideBar) => !sideBar)}
              className="bg-red-500 text-white h-10 w-10 absolute block mb-2 rounded-full "
            >
              &times;
            </Button>
            {children}
          </div> */}
        </>
      )}
    </>
  );
};

export { Modal };
