import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Drawer.css";
import { motion, AnimatePresence } from "framer-motion";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, item }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!item) {
      onClose();
      navigate(-1); // Navigate to the previous page
    }
  }, [item, onClose, navigate]);

  const handleClose = () => {
    onClose();
    navigate(-1); // Navigate to the previous page
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
            <h2>{item.name}</h2>
            <p>{JSON.stringify(item, null, 2)}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
