import React from "react";
import "./About.css";
import students from "../../assets/students.jpg";
function About() {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={students} alt="" />
        </div>
        <div className="about-right">
          <h3>About University</h3>
          <h2>Nurturing Tommorow's Leaders Today</h2>
          <p>
            At Educity, we believe education is the foundation for a brighter
            future. Established with a passion for learning and a commitment to
            excellence, we offer high-quality academic programs designed to
            inspire, challenge, and empower students of all ages.
          </p>
          <p>
            Our mission is to provide a learning environment that nurtures
            curiosity, encourages critical thinking, and promotes personal
            growth.
          </p>
          <p>
            Our educators are more than just teachers—they are mentors, guides,
            and role models. With a blend of experience, subject expertise, and
            a passion for teaching, they work closely with students to ensure
            students achieve their academic goals.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
