import React, { useState } from "react";
import Button from "./Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className="flex justify-center items-center max-w-[1000px]; mx-auto ">
      <div>
        <div className="flex  gap-8">
          <Button
            icon={<MdMessage className="text-xl" />}
            text="VIA SUPPORT CHAT"
          />
          <Button icon={<FaPhoneAlt className="text-xl" />} text="VIA CALL" />
        </div>
        <Button
          isOutline={true}
          icon={<MdEmail className="text-xl" />}
          text="VIA EMAIL FORM"
        />

        <form onSubmit={onSubmit}>
          <div className="flex flex-col w-full mt-4 relative">
            <label
              htmlFor="name"
              className="absolute top-[-12px] left-3 px-[10px] bg-white text-sm"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border-2 border-black h-10 px-2"
            />
          </div>
          <div className="flex flex-col w-full mt-4 relative">
            <label
              htmlFor="email"
              className="absolute top-[-12px] left-3 px-[10px] bg-white text-sm"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="border-2 border-black h-10 px-2"
            />
          </div>
          <div className="flex flex-col w-full mt-4 relative">
            <label
              htmlFor="text"
              className="absolute top-[-12px] left-3 px-[10px] bg-white text-sm"
            >
              Text
            </label>
            <textarea
              name="text"
              className="border-2 border-black h-24 px-2 py-2"
            />
          </div>
          <div className="flex justify-end ">
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>
            <table className="border-2 border-black px-4 py-2 w-full flex flex-col mt-4">
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{email}</td>
                </tr>
                <tr>
                  <td>Text:</td>
                  <td>{text}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
      <div>
        <img
          src="../public/Images/contact.svg"
          alt="Contact-image"
          className="max-h-[557px]
        "
        />
      </div>
    </section>
  );
};

export default ContactForm;
