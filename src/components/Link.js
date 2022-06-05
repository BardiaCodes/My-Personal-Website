import React from "react";

export default function Link({ title, link }) {
  return (
    <div style={{ marginTop: "3px" }}>
      <a href={link} target="_blank">
        {title}
      </a>
    </div>
  );
}
