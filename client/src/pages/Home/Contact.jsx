import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

export default function Contact() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  const user = {
    name: "Alireza Ghanbari",
    age: 20,
    email: "alirezaghanbari.dev@gmail.com",
    mobile: "+989385229846",
    country: "Iran",
  };
  return (
    <div>
      <SectionTitle title="Contact" />

      <div className="flex py-10 sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(contact).map((key) => (
            <p key={key} className="ml-3 text-tertiary">
              <span className="text-tertiary">"{key}"</span> :  {" "}
              <span className="text-tertiary"> "{contact[key]}"</span>
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>

        <div className="h-[500px]">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483599-2912016.png?f=webp" alt="contact us" />
        </div>
      </div>
    </div>
  );
}
