"use client";
import Image from "next/image";
import React from "react";
import "./MainHomeResponsive.css";

const footerStyle: React.CSSProperties = {
  gridRowStart: 3,
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

const linkStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  fontSize: "1.5rem",
  padding: "0.5rem 1rem",
  textDecoration: "none",
  cursor: "pointer",
  transition: "text-decoration 0.2s",
};

const imageStyle: React.CSSProperties = {
  borderRadius: "9999px",
};

const FooterHome = () => (
  <footer style={footerStyle}>
    <a
      style={linkStyle}
      href="https://github.com/Jennga"
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
      onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
    >
      <Image
        aria-hidden
        src="/flor.jpg"
        alt="File icon"
        width={40}
        height={40}
        style={imageStyle}
      />
      GitHub: Jennga
    </a>
    <a
      style={linkStyle}
      href="https://www.linkedin.com/in/jennifer-galv%C3%A1n-bejarano-b68467318/"
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
      onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
    >
      <Image
        aria-hidden
        src="/linkedin.jpg"
        alt="linkedin"
        width={40}
        height={40}
        style={imageStyle}
      />
      LinkedIn
    </a>
  </footer>
);

export default FooterHome;