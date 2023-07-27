/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./Contact.css";

export default () => {
  return (
    <>
      <div id="contact">
        <main>
          <form className="form">
            <input
              className="message-name"
              placeholder="enter with your name"
              type="text"
            />
            <input
              className="message-email"
              placeholder="enter with a valid email"
              type="text"
            />
            <textarea
              className="textarea"
              placeholder="enter with your message"
              cols="100"
              rows="10"
            ></textarea>
            <input className="button" placeholder="Submit" type="submit" />
          </form>
        </main>
        <div className="socialMidia">
          <div>
            <a
              target="_blank"
              href="https://wa.me//5511983724377?text=Ola%20Matheus%20vamos%20conectar?%20"
              rel="noreferrer"
            >
              <img
                src="https://img.freepik.com/icones-gratis/whatsapp_318-566768.jpg"
                alt="chat on whatsapp"
                width="80"
                height="auto"
              />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/dev-matheus-oliveira/"
              rel="noreferrer"
            >
              <img
                width="80"
                height="auto"
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="Linkedin"
              />
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://github.com/1DevMatheus"
              rel="noreferrer"
            >
              <img
                width="80"
                height="auto"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
