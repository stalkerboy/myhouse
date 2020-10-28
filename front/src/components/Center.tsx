import React, { FC, ReactNode } from "react";

type PropTypes = {
  children: ReactNode;
};

const Center: FC<PropTypes> = ({ children }) => {
  return (
    <div
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};
export default Center;
