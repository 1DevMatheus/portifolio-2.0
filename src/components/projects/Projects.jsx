/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import Aos from "aos";
import "aos/dist/aos.css";

import "./Projects.css";

export default () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  var projects = [
    {
      id: 1,
      name: "Natural Museum Web Site",
      technologies: "HTML5 & CSS3",
      execTime: "2 Hours",
      img: "https://ik.imagekit.io/wwd7wv4ro/projects_images/Museu.png?updatedAt=1685811275105",
      URL: "https://museu-nacional1.netlify.app/",
    },
    {
      id: 2,
      name: "Blog Unes",
      technologies: "HTML6 & CSS3",
      execTime: "2 Hours",
      img: "https://ik.imagekit.io/wwd7wv4ro/projects_images/Projeto-unes.png?updatedAt=1685811280437",
      URL: "https://universidade-unes.netlify.app/",
    },
    {
      id: 3,
      name: "Hotel Chalé",
      technologies: "HTML5 & CSS3",
      execTime: "2 Hours",
      img: "https://ik.imagekit.io/wwd7wv4ro/projects_images/hotel_chale.png?updatedAt=1685811275038",
      URL: "https://hotel-chale.netlify.app/",
    },
    {
      id: 4,
      name: "Calculator with Vanilla Javascript",
      technologies: "JavaScript & Bootstrap 4",
      execTime: "4 Hours",
      img: "https://ik.imagekit.io/wwd7wv4ro/projects_images/Sem_t%C3%ADtulo.png?updatedAt=1685811279959",
      URL: "https://1devmatheus.github.io/Portifolio1DevMatheus/calculadora.html",
    },
    {
      id: 5,
      name: 'Mini Game "Mata-Mosquito" ',
      technologies: "Javascript, HTML5 & CSS3",
      execTime: "8 Hours",
      img: "https://ik.imagekit.io/wwd7wv4ro/projects_images/app-MataMosquito.png?updatedAt=1685811275024",
      URL: "https://app-mata-mosquito.netlify.app/",
    },
    {
      id: 6,
      name: "Rick And Morty Wiki",
      technologies: "HTML, CSS, JavaScript Vanilla",
      execTime: "22 hours",
      img: "https://ik.imagekit.io/wwd7wv4ro/projects_images/projeto-rick-and-morty.png?updatedAt=1690494282695",
      URL: "https://rickandmorty-project-one.vercel.app/",
    },
    {
      id: 7,
      name: "Coming soon",
      technologies: "Coming soon",
      execTime: "Coming sson",
      img: "https://dks.pt/wp-content/uploads/2015/07/coming-soon.jpg",
      URL: "Coming soon",
    },
  ];

  return (
    <>
      {projects.map((projects) => (
        <Card data-aos="flip-left" className="card hidden">
          <CardContent className="card-projects">
            <Typography variant="h5" component="div">
              {projects.name}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Used Technologies: {projects.technologies}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Exec Time: {projects.execTime}
            </Typography>
            <CardMedia
              className="project-img"
              component="img"
              image={projects.img}
              alt="Project image"
            />
            <CardActions>
              <a
                className="project-link"
                href={projects.URL}
                target="_blank"
                rel="noreferrer"
              >
                Visit the project
              </a>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
