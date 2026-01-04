import React from "react";

export default function Spinner({ size = 36, color = "#ff8c00" }) {
  const style = {
    width: size,
    height: size,
    border: `${Math.max(3, Math.round(size / 8))}px solid ${color}33`,
    borderTop: `${Math.max(3, Math.round(size / 8))}px solid ${color}`,
    borderRadius: "50%",
    animation: "nn-spin 0.9s linear infinite",
  };

  return (
    <>
      <div style={style} aria-hidden="true" />
      <style>{`
        @keyframes nn-spin { to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
}