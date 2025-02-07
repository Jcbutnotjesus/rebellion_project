import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Drawer.css";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
  previousUrl: string;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  item,
  previousUrl,
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
  };

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
              Close
            </button>
            <h2>{item.name !== undefined ? item.name : item.title}</h2>
            <p>{JSON.stringify(item, null, 2)}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
