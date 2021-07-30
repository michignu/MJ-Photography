import { motion } from 'framer-motion';
import React from 'react';

const Modal = ({selectedImage, setSelectedImage}) => {
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop'))
        setSelectedImage(null);
    }
    return (
        <motion.div className="backdrop" onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        >
            <img src={selectedImage} alt="large image" />
        </motion.div>
    )
}

export default Modal;