import React from "react";
import "../App.css";
export default function Subheader({ children, variant }) {
  return (
    <>
      {variant == "small" && (
        <div className={["subttile", "smallSubtitle"]}>{children}</div>
      )}
      {variant != "small" && <div className="subtitle">{children}</div>}
    </>
  );
}
