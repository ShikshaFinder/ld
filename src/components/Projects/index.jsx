import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    title: "Excellence in Engineering Education",
    src: "salar_de_atacama.jpg",
  },
  {
    title: "Innovation and Research Focus",
    src: "valle_de_la_muerte.jpg",
  },
  {
    title: "Industry-Academia Collaboration",
    src: "miscani_lake.jpeg",
  },
  {
    title: "=Global Outreach and Impact",
    src: "miniques_lagoon.jpeg",
  },
];

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "top-=100px",
            end: document.body.offsetHeight - window.innerHeight - 50,
        })
    }, [])

    return (
      <div ref={container} className={styles.projects}>
        <div className={styles.projectDescription}>
          <div ref={imageContainer} className={styles.imageContainer}>
            <Image
              src={`/images/${projects[selectedProject].src}`}
              fill={true}
              alt="project image"
              priority={true}
            />
          </div>
          <div className={styles.column}>
            <p>
              L.D. College of Engineering is a premier engineering college
              located in Ahmedabad, Gujarat, India. It is affiliated with
              Gujarat Technological University and offers undergraduate and
              postgraduate programs in various engineering disciplines. LDCE has
              a long and illustrious history, dating back to its establishment
              in 1948.
            </p>
          </div>
          <div className={styles.column}>
            <p>
              The college is known for its excellent faculty, state-of-the-art
              facilities, and strong industry connections. It has produced many
              successful engineers who have made significant contributions to
              the field of engineering.
            </p>
          </div>
        </div>

        <div className={styles.projectList}>
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                onMouseOver={() => {
                  setSelectedProject(index);
                }}
                className={styles.projectEl}
              >
                <h2>{project.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    );
}
