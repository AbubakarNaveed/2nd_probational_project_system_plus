import React, { useState } from "react";
import Burger from "@images/burger.svg";
import Exit from "@images/exit.svg";
import Button from "@components/Generals/button";
import Logo from "@images/logo2.png";
import Plus from "@images/plus.svg";
import UserPic from "@images/sidebarUser.png";

import { linksData } from "./sidebarData";

const sidebar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const handleLinkClick = (id) => {
    setActiveLink(id);
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        overflowY: "auto",
        padding: "24px 16px",
        borderRight: "1px solid #dcdee6",
        background: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "32px",
        alignItems: "center",
        backgroundColor: "#fff",
        overflowX: "hidden",
      }}
    >
      <div className="contentSection">
        <div
          className="d-flex align-items-center justify-content-center "
          style={{ gap: "16px", width: "100%" }}
        >
          <button
            style={{
              border: "1px #DCDEE6 solid",
              background: "#fff",

              padding: "4px",
              borderRadius: "4px",
            }}
          >
            <img
              src={Burger}
              style={{ height: "20px", width: "20px", marginTop: "-2px" }}
            />
          </button>
          <img src={Logo} style={{ height: "20px", width: "160px" }} />
        </div>
        <div className="d-flex justify-content-center align-items-center w-100">
          <Button text={"Create Trips"} size="16px" icon={Plus} />
        </div>
        <div className="linksContainer">
          <div className="linkSection">
            <h1 style={{ marginLeft: "2px" }}>Overview</h1>
            <div>
              {linksData["Overview"].map((link) => (
                <a
                  key={link.id}
                  className={link.id === activeLink ? "active" : ""}
                  onClick={() => handleLinkClick(link.id)}
                >
                  <img src={link.icon} />
                  <p>{link.text}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="linkSection">
            <h1 style={{ marginLeft: "2px" }}> ADD RESOURCES</h1>
            <div>
              {linksData["Resources"].map((link) => {
                if (link.id === 7) {
                  return (
                    <a
                      key={link.id}
                      className={link.id === activeLink ? "active" : ""}
                      onClick={() => handleLinkClick(link.id)}
                    >
                      <img src={link.icon} />
                      <p>
                        Service<span style={{ color: "transparent" }}>-</span>
                        Providers
                      </p>
                    </a>
                  );
                } else {
                  return (
                    <a
                      key={link.id}
                      className={link.id === activeLink ? "active" : ""}
                      onClick={() => handleLinkClick(link.id)}
                    >
                      <img src={link.icon} />
                      <p>{link.text}</p>
                    </a>
                  );
                }
              })}
            </div>
          </div>
          <div className="linkSection">
            <h1 style={{ marginLeft: "2px" }}>Overview</h1>
            <div>
              {linksData["User"].map((link) => (
                <a
                  key={link.id}
                  className={link.id === activeLink ? "active" : ""}
                  onClick={() => handleLinkClick(link.id)}
                >
                  <img src={link.icon} />
                  <p>{link.text}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="profileSection">
        <img src={UserPic} />
        <p>Adam Johson </p>
        <button>
          <img src={Exit} style={{ height: "16px", width: "16px" }} />
        </button>
      </div>
    </div>
  );
};

export default sidebar;
