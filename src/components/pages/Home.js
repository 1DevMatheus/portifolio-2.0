import React, { useEffect, useState } from "react";
import "./Home.css";
import { Switch } from "@mui/material";
import Projects from "../projects/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "./Contact";

export default () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [checked, setChecked] = useState(true);


  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (checked === true) {
      document.getElementById("section-1").className = "darkMode";
      document.getElementById("typing").className = "typing-welcome-dark";
    } else {
      document.getElementById("section-1").className = "ligthMode";
      document.getElementById("typing").className = "typing-welcome-ligth";
    }
  };

  return (
    <>
      <div className="container-home">
        <div id="section-1" className="section-1 ligthMode">
        
          <div>
            <div id="typing" className="typing-welcome-ligth">
              <p>Welcome to my world.</p>
            </div>
            <div id="typing-secondary" className="make-forMe">
              <p>all made with love for me :D</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="svg-home"
          >
            <svg
              id="aae639f8-3f99-481c-8e95-642b378dff3b"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              width="665.76"
              height="682.89"
              viewBox="0 0 865.76 682.89"
            >
              <path
                d="M635.64,658.13c-.47,4.7-2.12,9.11-6.82,11.88-3.14,1.85-7.59,3-14,2.89-15.94-.21-45.93-11.61-45.93-11.61l-28.07-15.52,14.6-23.1,4-6.27,10.32,2.32s8.55,4.84,17.14,8.7,29.47,4.71,36.82,10.62S636.44,650.38,635.64,658.13Z"
                fill="#0071f2"
                data-primary="true"
              />

              <path
                d="M635.64,658.13c-.47,4.7-2.12,9.11-6.82,11.88a21,21,0,0,0-.79-14c-3.13-7-13.34-13.25-26.77-14.28s-23.69-7.31-29.07-10.12c-4.2-2.18-13.06-6.94-16.75-8.92l4-6.27,10.32,2.32s8.55,4.84,17.14,8.7,29.47,4.71,36.82,10.62S636.44,650.38,635.64,658.13Z"
                fill="#fff"
              />

              <g
                id="a2b2da29-4050-4119-9158-f2a69ec2cfe1"
                data-name="freepik--background-simple--inject-21"
              >
                <path
                  d="M746.69,273.35c-76.44-130.91-283.76-84.29-326.1-148C398.9,92.84,374.64,55,339.45,35.35,305.91,16.53,267,9.93,233.11,12.41,112,21.27,60.71,129.6,84,248.56,115,407.24,255.68,569.34,422.78,570.47c87.41.66,170.93-30.7,236.32-74.82l1.46-1C726,450.15,805.05,373.29,746.69,273.35Z"
                  fill="#fff"
                />
              </g>

              <g
                id="f494eb9d-e6bb-4b37-b62b-fe0009c62710"
                data-name="freepik--Lines--inject-21"
              >
                <path
                  d="M154.21,281.61h-8.5A34.39,34.39,0,0,0,111.32,316V504.71a34.39,34.39,0,0,0,34.39,34.39H262.32a34.39,34.39,0,0,0,34.39-34.39h0"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.1"
                  stroke-dasharray="4.41"
                />

                <path
                  d="M287.21,103.55V66.27a21.06,21.06,0,0,1,21-21.06H459.86a21.06,21.06,0,0,1,21.06,21.06h0"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.1"
                  stroke-dasharray="4.41"
                />
              </g>

              <path
                d="M706.75,153.55V435.92A34.81,34.81,0,0,1,672,470.73H175.32a34.81,34.81,0,0,1-34.8-34.81V153.55a18.49,18.49,0,0,1,.11-2.44,34.79,34.79,0,0,1,34.69-32.37H672a34.77,34.77,0,0,1,34.68,32.43A22.89,22.89,0,0,1,706.75,153.55Z"
                fill="#ccc"
              />

              <path
                d="M157.46,164.15H691.59V425A32.61,32.61,0,0,1,659,457.6H190.09A32.62,32.62,0,0,1,157.47,425V164.15h0Z"
                fill="#fff"
              />

              <path
                d="M706.64,151.17h-566a34.79,34.79,0,0,1,34.69-32.37H672A34.78,34.78,0,0,1,706.64,151.17Z"
                fill="#bcbec0"
              />

              <path
                d="M210.18,134.92a6.17,6.17,0,1,1-6.16-6.16,6.16,6.16,0,0,1,6.16,6.16Z"
                fill="#ff605c"
              />

              <path
                d="M236.24,134.92a6.16,6.16,0,1,1-6.16-6.16,6.16,6.16,0,0,1,6.16,6.16Z"
                fill="#ffbd44"
              />

              <circle cx="256.14" cy="134.92" r="6.16" fill="#00ca4e" />

              <path
                d="M691.59,164.15V425A32.61,32.61,0,0,1,659,457.6H190.09a32.61,32.61,0,0,1-32-26.28v-.09a32.24,32.24,0,0,1-.59-6.27V164.15Z"
                fill="#fff"
                stroke="#000"
                stroke-miterlimit="10"
              />

              <path
                d="M691.09,204.49a32.81,32.81,0,0,0-7.25-3l-2.93-13.09H668.46l-2.9,13.09a31.92,31.92,0,0,0-7.28,3L647,197.29l-8.8,8.77,7.07,11.24a31.89,31.89,0,0,0-3,7.28l-13.1,2.9v12.45l13.1,2.93a31.66,31.66,0,0,0,3,7.31l-7.19,11.32,8.81,8.8,11.31-7.2a31.61,31.61,0,0,0,7.26,3l2.91,13.08h12.41l2.91-13.08a32.84,32.84,0,0,0,7.25-3l.58.38v-59.3ZM674.72,250a16.09,16.09,0,1,1,16.09-16.08h0A16.07,16.07,0,0,1,674.73,250Z"
                fill="#494949"
              />

              <path
                d="M466.68,217.11V190.86l-27.59-6.13a71.25,71.25,0,0,0-6.28-15.32l3.34-5.26H305.84l3.21,5.12a67.57,67.57,0,0,0-6.27,15.3l-27.61,6.15V217l27.61,6.17a68.74,68.74,0,0,0,6.27,15.43l-15.16,23.85,18.58,18.57,23.84-15.18a69.58,69.58,0,0,0,15.32,6.35l6.15,27.52H384l6.18-27.59a69.47,69.47,0,0,0,15.28-6.35L429.27,281l18.57-18.56-15.07-23.86A72,72,0,0,0,439,223.27ZM371,237.91A33.92,33.92,0,1,1,405,204,33.92,33.92,0,0,1,371,237.91Z"
                fill="#494949"
              />

              <path
                d="M459.08,366.31a43.21,43.21,0,0,0,1.27-9.87l15-7.84-4.14-15.19-16.91.78a42.7,42.7,0,0,0-6.07-7.84l5-16.17-13.64-7.84-11.42,12.45a44.56,44.56,0,0,0-9.83-1.25l-7.84-15-15.18,4.13.8,16.92a42.27,42.27,0,0,0-7.84,6.07l-16.18-5-7.84,13.63,12.54,11.4a40.8,40.8,0,0,0-1.24,9.83l-15,7.84,4.14,15.18,16.93-.8a39.67,39.67,0,0,0,6,7.84l-5,16.09,13.65,7.84,11.36-12.35a41,41,0,0,0,9.86,1.24l7.84,15,15.18-4.13-.67-14.45-.11-2.48a41.8,41.8,0,0,0,7.93-6.07l16.17,5,6.68-11.67,1.13-2Zm-35.86,9.22a20.39,20.39,0,1,1,14.23-25.08.57.57,0,0,0,0,.14,20.4,20.4,0,0,1-14.27,24.94Z"
                fill="#494949"
              />

              <path
                d="M611.33,267l1.21-7.3-7.39-3a19.27,19.27,0,0,0-1-4.55l5.31-5.92-4.3-6-7.33,3.11a19.5,19.5,0,0,0-4-2.45l-.43-7.95-7.3-1.21-3,7.35a20.27,20.27,0,0,0-4.54,1.07l-5.93-5.32-6,4.31,3.11,7.32a20.48,20.48,0,0,0-2.22,3.45c-.08.17-.17.34-.24.51l-7.95.44-1.21,7.29,1.19.48,6.19,2.5a19.51,19.51,0,0,0,1.06,4.53l-5.33,6,4.31,6,7.33-3.12a19.73,19.73,0,0,0,3.95,2.48l.41,7.91,7.3,1.21,3-7.3a19.31,19.31,0,0,0,4.55-1.07L598,283l6-4.31-3.12-7.33a19.24,19.24,0,0,0,2.5-4Zm-20.46-.33a9.55,9.55,0,1,1,2.19-13.33h0a9.56,9.56,0,0,1-2.21,13.33Z"
                fill="#494949"
              />

              <rect
                x="165.5"
                y="238.63"
                width="205.12"
                height="268.17"
                rx="20.56"
                fill="#000"
              />

              <rect
                x="165.5"
                y="238.63"
                width="205.12"
                height="268.17"
                rx="20.56"
                opacity="0.2"
              />

              <path
                d="M389.7,279.45V506.5a20.55,20.55,0,0,1-20.54,20.57h-164A20.56,20.56,0,0,1,184.6,506.5h0v-227a20.56,20.56,0,0,1,20.55-20.56h164a20.55,20.55,0,0,1,20.55,20.56Z"
                fill="#fff"
              />

              <path
                d="M389.7,279.45V291.6H184.6V279.45a20.56,20.56,0,0,1,20.55-20.56h164a20.55,20.55,0,0,1,20.55,20.56Z"
                fill="#bcbec0"
              />

              <rect
                x="203.89"
                y="305.68"
                width="50.46"
                height="8.47"
                fill="#ff0000"
              />

              <rect
                x="203.89"
                y="381.56"
                width="50.46"
                height="8.47"
                fill="#ff0000"
              />

              <rect
                x="203.89"
                y="450.38"
                width="50.46"
                height="8.47"
                fill="#ff0000"
              />

              <rect
                x="203.89"
                y="326.65"
                width="143.31"
                height="6.21"
                fill="#44fc"
              />

              <rect
                x="203.89"
                y="338.52"
                width="117.47"
                height="6.05"
                fill="#44fc"
              />

              <rect
                x="203.89"
                y="350.2"
                width="132.85"
                height="6.05"
                fill="#ffc600"
              />

              <rect
                x="203.89"
                y="361.87"
                width="132.85"
                height="6.05"
                fill="#000"
              />

              <rect
                x="203.89"
                y="395.46"
                width="143.31"
                height="6.21"
                fill="ffc600"
              />

              <rect
                x="203.89"
                y="407.33"
                width="117.47"
                height="6.05"
                fill="#44fc"
              />

              <rect
                x="203.89"
                y="419.01"
                width="132.85"
                height="6.05"
                fill="#44fc"
              />

              <rect
                x="203.89"
                y="471.01"
                width="143.31"
                height="6.21"
                fill="#000"
              />

              <rect
                x="203.89"
                y="482.9"
                width="117.47"
                height="6.05"
                fill="#ffc600"
              />

              <rect
                x="203.89"
                y="494.58"
                width="132.85"
                height="6.05"
                fill="#44fc"
              />

              <path
                d="M620.87,101.44v91.77a24.51,24.51,0,0,1-24.51,24.51H385a24.5,24.5,0,0,1-24.52-24.49V101.44A24.54,24.54,0,0,1,385,76.92H596.34A24.52,24.52,0,0,1,620.87,101.44Z"
                fill="#ccc"
              />

              <path
                d="M620.87,101.44v2.11H360.46v-2.11A24.54,24.54,0,0,1,385,76.92H596.34A24.52,24.52,0,0,1,620.87,101.44Z"
                fill="#bcbec0"
              />

              <path
                d="M398.72,94.62a3.76,3.76,0,1,1,0-5.32h0A3.77,3.77,0,0,1,398.72,94.62Z"
                fill="#ff605c"
              />

              <path
                d="M416.16,94.62a3.76,3.76,0,1,1,0-5.32h0A3.77,3.77,0,0,1,416.16,94.62Z"
                fill="#ffbd44"
              />

              <path
                d="M433.6,94.62a3.76,3.76,0,1,1,0-5.32h0A3.78,3.78,0,0,1,433.6,94.62Z"
                fill="#00ca4e"
              />

              <rect
                x="377.06"
                y="120.42"
                width="85.12"
                height="73.58"
                fill="#fff"
                stroke-dasharray="4.41"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.1"
                stroke="#44fc"
              />

              <rect
                x="475.33"
                y="120.42"
                width="97.96"
                height="5.17"
                fill="#44fc"
              />

              <rect
                x="475.33"
                y="131.13"
                width="75.15"
                height="5.16"
                fill="#44fc"
              />

              <rect
                x="475.33"
                y="141.79"
                width="111.89"
                height="5.22"
                fill="#44fc"
              />

              <rect
                x="475.33"
                y="152.19"
                width="95.28"
                height="5.22"
                fill="#44fc"
              />

              <rect
                x="569.84"
                y="329.2"
                width="68.39"
                height="48.6"
                rx="10.24"
                fill="#ccc"
              />

              <path
                d="M591,363.3a.39.39,0,0,1-.27-.1l-12.22-10.82a.43.43,0,0,1-.14-.35.41.41,0,0,1,.2-.31l13.15-8.25a.41.41,0,1,1,.44.7l-12.69,7.95,11.81,10.46a.41.41,0,0,1-.28.72Z"
                fill="#000"
              />

              <path
                d="M615.86,364.08a.39.39,0,0,1-.31-.14.4.4,0,0,1,.05-.58l11.4-9.71L613.82,345a.41.41,0,0,1-.12-.57.42.42,0,0,1,.57-.12l13.64,8.94a.42.42,0,0,1,.19.32.44.44,0,0,1-.14.34L616.13,364A.44.44,0,0,1,615.86,364.08Z"
                fill="#000"
              />

              <path
                d="M598.3,370.29a.25.25,0,0,1-.12,0,.4.4,0,0,1-.27-.51l9.7-30.46a.41.41,0,0,1,.52-.26.4.4,0,0,1,.27.51L598.69,370A.4.4,0,0,1,598.3,370.29Z"
                fill="#000"
              />

              <path
                d="M497.12,634.9s-45.47,13-51.83,15.29c-5.77,2-21.42,7.53-33.16,5.82a25.41,25.41,0,0,1-3.36-.72c-11.9-3.55-17.25-6.86-18.82-14.34s4.36-13,10.07-16.52,36.67-7.22,36.67-7.22l7.48,2.2h0Z"
                fill="#0071f2"
                data-primary="true"
              />

              <path
                d="M412.13,656a25.41,25.41,0,0,1-3.36-.72c-11.9-3.55-17.25-6.86-18.82-14.34s4.36-13,10.07-16.52,36.67-7.22,36.67-7.22l7.48,2.2c-6.78,3.13-32,4.84-37.5,8s-8.15,9.13-4.91,17.25C403.5,648.9,408.15,653.06,412.13,656Z"
                fill="#fff"
              />

              <path
                d="M578.75,407.19l-47.5-18.07-.6-.23s.17-1.26.31-3.14c.3-3.79.46-10-1.33-12.06-2.65-3.13-10.15-.5-17.47-3.86s-20.86,2.65-20.86,2.65-9.78-1.8-14.11,5.26c-2.19,5.69-1.44,14.11-1.44,14.11l-.9.32c-5.66,2.11-36.45,13.7-43,18.36-7.2,5.1-15.17,57.42-17.72,72.79s-7.11,29.22-4.8,34.5,35.39,30.77,54.43,37.34,86.55,4.7,86.55,4.7,1.09-.29,3-.92c11.42-3.67,51.93-18.82,73.43-54.38C626.86,504.62,606,436.36,578.75,407.19Zm-128.34,88c-3.5,2.48-1.57,12.07-1.57,12.07l-5.94-5.23,14.92-36.71,6.37,28.22S453.9,492.75,450.41,495.21Zm119.43,23.32c-1.65.84,4.7-16.8,1.69-20.8s-12.09-3.62-12.09-3.62l.77-4.81,5.38-27.6,1.79-2.12s18.47,31.66,21.78,42.83C589.16,502.44,569,518.53,569.84,518.53Z"
                fill="#0071f2"
                data-primary="true"
              />

              <path
                d="M578.75,407.19l-47.5-18.07-.6-.23s.17-1.26.31-3.14l-1,6.16-7,9.54a193,193,0,0,1,21.95,9.66,19.25,19.25,0,0,1,10,19.19l-8.75,74.88L542.6,547.7l10.84,11.24c11.41-3.67,51.92-18.82,73.42-54.38C626.86,504.62,606,436.36,578.75,407.19Zm-8.91,111.34c-1.65.84,4.7-16.8,1.69-20.8s-12.09-3.62-12.09-3.62l.77-4.81,5.38-27.6,1.79-2.12s18.47,31.66,21.78,42.83C589.16,502.44,569,518.53,569.84,518.53Z"
                opacity="0.2"
              />

              <path
                d="M467.34,497.73,460,473.05s-13.25-45.18-22.33-56.31L440,448.51s-7.84,37.95-15,49.22-8.76,14.12,0,14.12,30.11,17,30.11,17l-1.64-14.12Zm-18.61,9.55-5.94-5.23,14.92-36.71,6.37,28.22s-10.22-.77-13.72,1.7S448.73,507.28,448.73,507.28Z"
                opacity="0.2"
              />

              <path
                d="M567.39,459.58s17.33,25.61,21.77,42.86"
                fill="none"
                stroke="#263238"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.1"
              />

              <path
                d="M507.22,421.77a2.78,2.78,0,1,1-2.77-2.77h0a2.76,2.76,0,0,1,2.77,2.74Z"
                opacity="0.2"
              />

              <path
                d="M555.87,569.52H460.21a2.24,2.24,0,0,1-2.24-2.24h0a2.24,2.24,0,0,1,2.24-2.24h95.66a2.24,2.24,0,0,1,2.24,2.24h0A2.24,2.24,0,0,1,555.87,569.52Z"
                fill="#263238"
              />

              <path
                d="M559.22,562,572,501.81a6.39,6.39,0,0,0-4.92-7.59,6.8,6.8,0,0,0-1.35-.14H454a6.41,6.41,0,0,0-6.4,6.4,6.55,6.55,0,0,0,.13,1.25l11.49,58.21a6.39,6.39,0,0,0,6.13,5.16l87.49,2A6.42,6.42,0,0,0,559.22,562Z"
                fill="#d1d3d4"
              />

              <path
                d="M518.42,528.83a8.93,8.93,0,1,1-8.92-8.94,8.92,8.92,0,0,1,8.92,8.94Z"
                fill="#000"
              />

              <path
                d="M549.25,500.25H536a.42.42,0,1,1,0-.83h13.28a.42.42,0,0,1,0,.83Z"
                fill="#000"
                data-secondary="true"
              />

              <path
                d="M523,500.25H472.53a.42.42,0,0,1,0-.83H523a.42.42,0,0,1,0,.83Z"
                fill="#000"
                data-secondary="true"
              />

              <path
                d="M559.44,626l-10.19,26.76s-26-6.56-59.29-13.38c-34.83-7.14-71.2-16.37-90.06-49.48-2.29-4-3.83-8.79-2.75-13.31,2.72-11.43,17.6-14.54,27.4-15.68a179.56,179.56,0,0,1,18.55-1c3.14,0,13.56-1.71,16.09.16a73.59,73.59,0,0,0,12.09,7.17c5.57,2.36,86.83-2.12,86.83-2.12a29.05,29.05,0,0,0,2.55-9.77c12.79-6.49,42.34-12,54.89-9.55C635.2,549.53,646.66,561,644.48,573S598.9,617.23,559.44,626Z"
                fill="#2f2e41"
                data-secondary="true"
              />

              <path
                d="M559.44,626l-10.19,26.76s-26-6.56-59.29-13.38c-34.83-7.14-71.2-16.37-90.06-49.48-2.29-4-3.83-8.79-2.75-13.31,2.72-11.43,17.6-14.54,27.4-15.68a179.56,179.56,0,0,1,18.55-1c3.14,0,13.56-1.71,16.09.16a73.59,73.59,0,0,0,12.09,7.17c5.57,2.36,86.83-2.12,86.83-2.12a29.05,29.05,0,0,0,2.55-9.77c12.79-6.49,42.34-12,54.89-9.55C635.2,549.53,646.66,561,644.48,573S598.9,617.23,559.44,626Z"
                fill="#2f2e41"
                data-secondary="true"
              />

              <path
                d="M559.44,626.38l-.1,0c-.25-.06-25-6.73-45.06-20.25-3.25-2.2-6.42-4.48-9.49-6.68C488.9,588,473.9,577.24,450.44,580a.41.41,0,0,1-.1-.82c23.78-2.77,38.91,8.1,54.93,19.61,3.06,2.2,6.23,4.47,9.47,6.66,19.91,13.45,44.56,20.08,44.81,20.14a.42.42,0,0,1,.29.51A.43.43,0,0,1,559.44,626.38Z"
                fill="#2f2e41"
                data-secondary="true"
              />

              <path
                d="M509.89,603a.41.41,0,0,1-.12-.81c11.1-3.19,19.52-9.8,28.43-16.81,1.26-1,2.52-2,3.8-3a220.49,220.49,0,0,1,34.7-22.81.42.42,0,0,1,.56.17.41.41,0,0,1-.17.56A219.43,219.43,0,0,0,542.51,583c-1.28,1-2.54,2-3.8,3-9,7.06-17.46,13.72-28.71,17Z"
                fill="#2f2e41"
                data-secondary="true"
              />

              <path
                d="M484.84,360.56l1.37,15a18,18,0,0,0,18,16.4h0a18,18,0,0,0,18-17l.76-13.38Z"
                fill="#000"
              />

              <path
                d="M485.16,364.08l.87,9.49s17.21,18.83,36.5-4.61Z"
                fill="#f7a48b"
              />

              <ellipse
                cx="505"
                cy="333.72"
                rx="31.31"
                ry="42.52"
                fill="#f9b499"
              />

              <ellipse
                cx="469.78"
                cy="328.04"
                rx="7.47"
                ry="12.45"
                transform="translate(-63.21 117.73) rotate(-13.39)"
                fill="#f9b499"
              />

              <ellipse
                cx="533.31"
                cy="325.89"
                rx="7.47"
                ry="12.45"
                fill="#f9b499"
              />

              <path
                d="M473.69,337.2a8.81,8.81,0,0,0,5.59-3.29,13.78,13.78,0,0,0,1.57-5,59,59,0,0,0,.87-10.1,14.09,14.09,0,0,1,.36-3.94,10.36,10.36,0,0,1,2.14-3.5c2.21-2.6,4.89-4.79,7-7.49a12.56,12.56,0,0,0,3.13-9.41,43,43,0,0,0,35.24,9.11c11.21-2.2,21.95-12,20.65-24.39a10,10,0,0,0-7.84-8.59c-5.53-1.38-10.51,1.57-15.52,3.47-9.15,3.45-18.1-2.48-27.34-3.47-7.84-.86-17.61.13-21.72,8,0,0-14.11,1.67-20.38,13.33s5.6,27.81,5.6,27.81,4.7-5.77,10.86,5.89Z"
                fill="#000"
                data-secondary="true"
              />

              <path
                d="M526.65,299.64s-4.29,19.14,6.92,28.4c0,0,2.46-5.75,4.93-7.16a19.44,19.44,0,0,0-2-21.24C528.25,288.51,526.65,299.64,526.65,299.64Z"
                fill="#000"
                data-secondary="true"
              />

              <g opacity="0.2">
                <path
                  d="M470.19,307.94h0a.4.4,0,0,1-.38-.44c.36-5.31,3.27-10.66,8-14.68s10.7-6.19,16.1-5.71A111.51,111.51,0,0,1,505.77,289c9.38,1.87,18.22,3.62,27.43-.13a17.51,17.51,0,0,0,10.74-11.15.42.42,0,0,1,.52-.27.42.42,0,0,1,.27.52,18.35,18.35,0,0,1-11.23,11.67c-9.42,3.84-18.81,2-27.89.17a113.43,113.43,0,0,0-11.83-1.91c-5.19-.47-10.83,1.55-15.48,5.52s-7.35,9-7.7,14.11A.4.4,0,0,1,470.19,307.94Z"
                  fill="#fff"
                />
              </g>

              <g opacity="0.2">
                <path
                  d="M463.83,305h0a.41.41,0,0,1-.4-.43,23.74,23.74,0,0,1,14.36-20.88.42.42,0,0,1,.54.22.41.41,0,0,1-.21.54,22.92,22.92,0,0,0-13.87,20.15A.42.42,0,0,1,463.83,305Z"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
        <hr />
        <section id="section-3">
          <div className="about-me-container">
            <main className="about-me">
            <h2>A litlle about me</h2>
              <div data-aos="fade-right" className="print-1">
                <img
                  src="https://ik.imagekit.io/wwd7wv4ro/projects_images/code.png?updatedAt=1685988162173"
                  alt="about me image"
                />
                <div className="text-about-me">
                 <p> I'm Matheus, and I have many dreams!</p> <p> The biggest one is
                  becoming a great Devoloper! </p> <p> And be an inspiration to my
                  family! </p>
                </div>
              </div>
              <div data-aos="fade-left" className='print-2'>
                <img src="https://ik.imagekit.io/wwd7wv4ro/projects_images/code1.png?updatedAt=1685991479290" alt="about me image" />
                <div className='text-about-me-2'>
                  <p>Always seching be better and dyscovery new things</p>
                   <p> Love the americando culture, I want live im NY one day </p>
                   <p>My plan is to do my wedding there, "but don't tell my wife" </p>
                </div>
              </div>
            </main>
            <div className='tech-icons-container'>
              <h2>Technologies whren I known</h2>
              
              <div className='tech-icons'>
                <img data-aos="flip-left"  data-aos-duration="1200" data-aos-delay="500" src="https://ik.imagekit.io/wwd7wv4ro/programminf_icons/java.png?updatedAt=1685995513996" alt="java icon" />
                <img data-aos="flip-left"  data-aos-duration="1300" data-aos-delay="600" src="https://ik.imagekit.io/wwd7wv4ro/programminf_icons/python.png?updatedAt=1685995514077" alt="Python icon" />
                <img data-aos="flip-left"  data-aos-duration="1400" data-aos-delay="700" src="https://ik.imagekit.io/wwd7wv4ro/programminf_icons/javascript.png?updatedAt=1685995513987" alt="Javascript icon" />
                <img data-aos="flip-left"  data-aos-duration="1500" data-aos-delay="800" src="https://ik.imagekit.io/wwd7wv4ro/programminf_icons/typescript.png?updatedAt=1685995513990" alt="Typescript icon" />
                <img data-aos="flip-left"  data-aos-duration="1600" data-aos-delay="900" src="https://ik.imagekit.io/wwd7wv4ro/programminf_icons/html-5.png?updatedAt=1685995513970" alt="HTML5 icon" />
                <img data-aos="flip-left"  data-aos-duration="1700" data-aos-delay="1000" src="https://ik.imagekit.io/wwd7wv4ro/programminf_icons/css.png?updatedAt=1685995513964" alt="CSS3 icon" />
                <img data-aos="flip-left"  data-aos-duration="1800" data-aos-delay="1100" src="https://ik.imagekit.io/wwd7wv4ro/programminf_icons/mysql__1_.png?updatedAt=1685995513838" alt="MySQL icon" />
                <img data-aos="flip-left"  data-aos-duration="1900" data-aos-delay="1200" src="https://ik.imagekit.io/wwd7wv4ro/programminf_icons/React-icon.svg.png?updatedAt=1685995514334" alt="React icon" />
                <img data-aos="flip-left"  data-aos-duration="2000" data-aos-delay="1300" src="https://ik.imagekit.io/wwd7wv4ro/programminf_icons/68747470733a2f2f7061676570726f2e636f2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323032302f30332f72656163742d6e61746976652d6c6f676f2d333234783337352e706e67.webp?updatedAt=1685997367414" alt="React Native icon" />

                  
              </div>
            </div>
          </div>
        </section>
        <hr />
        <div id="section-2" className="section-2">
          <div data-aos="fade-up" className="title-sec-2">
            <h1>All my projects</h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            className="painel-projects"
          >
            <div className="projects">
              <Projects />
            </div>
          </div>
        </div>
      <div id='contact'>
              <h2 data-aos="fade-up" >Contact me</h2>
              <div data-aos="fade-up"> <Contact /></div>
      </div>
      </div>
    </>
  );
};
