import React from "react";
import { useNavigate } from "react-router-dom";
import "./Drawer.css";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, item }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate("/");
  };

  if (!isOpen) return null;

  return (
    <div className="drawer">
      <div className="drawer-content">
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
        <h2>{item.name}</h2>
        <p>{JSON.stringify(item, null, 2)}</p>
      </div>
    </div>
  );
};

export default Drawer;
