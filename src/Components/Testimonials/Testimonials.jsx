import React from "react";
import "./Testimonials.css";
import left_arrow from "../../assets/left-chevron.png";
import right_arrow from "../../assets/chevron.png";
import student from "../../assets/student.jpg";
import student_3 from "../../assets/student3.jpg";
import student_4 from "../../assets/student4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
function Testimonials() {
  const slider = useRef();
  let tx = -2;
  function slideForward() {
    if (tx == -2) {
      tx -= 33;
    } else if (tx == -35) {
      tx -= 34;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  function slideBackward() {
    if (tx == -35) {
      tx = -2;
    } else if (tx == -69) {
      tx = -35;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <>
      <div className="testimonials">
        <img
          src={left_arrow}
          alt=""
          className="left-btn"
          onClick={slideBackward}
        />
        <img
          src={right_arrow}
          alt=""
          className="right-btn"
          onClick={slideForward}
        />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={student_3} />
                  <div>
                    <h3>William Jackson</h3>
                    <span>Educity,USA</span>
                  </div>
                </div>
                <p>
                  Studying at Educity has been one of the most transformative
                  experiences of my life. The professors are not only
                  knowledgeable but genuinely invested in our success. The
                  campus environment is vibrant and inclusive, and I've made
                  friendships and memories that will last a lifetime. Through
                  hands-on projects, internships, and support from the career
                  center, I feel more confident than ever about my future.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={student} />
                  <div>
                    <h3>Aditi Sharama</h3>
                    <span>Educity,USA</span>
                  </div>
                </div>
                <p>
                  As an international student, I was nervous about adjusting to
                  a new country and academic system, but Educity made the
                  transition so smooth. The support I received from the
                  International Student Office, along with the welcoming
                  community on campus, made me feel at home right away. The
                  diverse culture here has enriched my learning experience.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={student_4} />
                  <div>
                    <h3>Jennifer Nickolas</h3>
                    <span>Educity,USA</span>
                  </div>
                </div>
                <p>
                  I came to Educity with a passion for sustainability, and I
                  have been able to nurture that passion through both my
                  coursework and extracurricular activities. The professors are
                  experts in their fields, and the student-led sustainability
                  initiatives have allowed me to apply what I have learned to
                  real-world challenges. This college has truly helped me
                  develop not only as a student but also as a leader who is
                  ready to make a difference in the world.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Testimonials;
