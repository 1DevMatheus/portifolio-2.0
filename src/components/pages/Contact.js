import React from "react";

  import './Contact.css'

export default () => {
  return (
    <> 
      
      <div id="contact">
        <main>
          <form className="form">
            <input className="message-name" placeholder="enter with your name" type="text" />
            <input className='message-email'  placeholder="enter with a valid email" type="text" />
            <textarea
            className="textarea"
              placeholder="enter with your message"
              cols="100"
              rows="10"
            ></textarea>
            <input className="button" placeholder="Submit" type="submit" />
          </form>
        </main>
      </div>
    </>
  );
};
