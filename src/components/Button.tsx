import React from "react";

type ButtonProps = {
  onClick: () => void;
  loading: boolean;
};

const Button: React.FC<ButtonProps> = ({ onClick, loading, children }) => {
  return (
    <button className="button" onClick={onClick} disabled={loading}>
      {children}
    </button>
  );
};

export default Button;
