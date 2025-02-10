import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Drawer.css";
import DrawerDetails from "../DrawerDetails/DrawerDetails.tsx";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
  previousUrl: string;
  setPreviousUrl: (url: string) => void;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  item,
  previousUrl,
  setPreviousUrl,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!item) {
      onClose();
      navigate(previousUrl);
    }
  }, [item, onClose, navigate, previousUrl]);

  const handleClose = () => {
    onClose();
    navigate(previousUrl);
    setPreviousUrl("/");
  };

  const { type } = useParams<{ type: string }>();

  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="drawer"
        >
          <div className="drawer-content">
            <button className="close-button" onClick={handleClose}>
              Fermer
            </button>
            <h2>{item.name !== undefined ? item.name : item.title}</h2>
            <DrawerDetails data={item} type={type || ""} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
