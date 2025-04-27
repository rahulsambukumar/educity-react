import React from "react";
import "./Contact.css";
import message_icon from "../../assets/mail.png";
import mail_icon from "../../assets/email.png";
import location_icon from "../../assets/location.png";
import phone_icon from "../../assets/phone-call.png";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "38d8d5e3-8675-46fc-87d2-c363921d963c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a message <img src={message_icon} />
          </h3>
          <p>
            We would love to hear from you! If you have any questions, need
            assistance, or would like more information, please feel free to
            reach out.
          </p>
          <ul>
            <li>
              <img src={mail_icon} />
              Contat@Educity.com
            </li>
            <li>
              <img src={phone_icon} />
              +1 (555) 123-4567
            </li>
            <li>
              <img src={location_icon} />
              Edu University Avenue, Woburn House, Tavistock Square, London
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name:</label>
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="enter your mobile number"
              required
            />
            <label>Write your message here</label>
            <textarea name="message" id="" cols="" rows="6" required></textarea>
            <button type="submit" className="btn dark-btn">
              Submit now
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
}

export default Contact;
