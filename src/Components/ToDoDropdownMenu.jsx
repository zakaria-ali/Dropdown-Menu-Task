import React, { useCallback, useState } from 'react'

export default function ToDoDropdownMenu({ children }) {
    const [isOpen, setIsOpen] = useState(false); //In order to display or hide menu items

    const toggleMenu = useCallback(() => {//To memoizes the function. This can help prevent unnecessary function re-creation on each render, which can be a performance optimization.
      setIsOpen(!isOpen);
    }, [isOpen]);
  
    return (
      <div className="dropdown-menu">
        <button onClick={toggleMenu} className="dropdown-button">Show Me The Tasks...!</button>
        {isOpen && children}
      </div>
    );
}
