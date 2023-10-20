import React from 'react';

export default function ToDoMenuItem({ children, onClick }) {
    return ( <div className={"menu-item"} onClick={onClick}>
    {children}
  </div>)
  }
