import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Title from "../Components/Title";

const Contact = () => {
  return (
    <div>
      <div className="title">
        <Title title={"Contact Me"} span={"Contact Me"} />
      </div>
      <div className="ContactPage">
        <div className="map-sec">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3971.5830733047214!2d7.541366320565636!3d5.480023797688296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1622123363053!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sec">
          <ContactItem icon={phone} text1={"+2347038098380"} title={"Phone"} />
          <ContactItem
            icon={email}
            text1={"ebubeagwaze@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Umudike, Umuahia, Abia State."}
            title={"Location"}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
