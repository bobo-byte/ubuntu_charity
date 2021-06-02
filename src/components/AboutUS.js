import React from "react";
import CustomNavigationBar from "./CustomNavigationBar";
import "./assets/css/about.css";

export default () => {
  return (
    <div>
      <CustomNavigationBar />
      <h2
        id="contact_us"
        className="contactHeading text-center"
        style={{
          color: "black",
          textTransform: "uppercase",
          fontSize: "60px",
          marginTop: "60px",
          fontWeight: "300!important"
        }}
      >
        <strong>About</strong> Us
      </h2>

      <p className="text-center p-3 lead text-muted italic">
        <em>
          We are a non-profit charity organisation that aims to provide a
          sustainable helping hand.
        </em>
      </p>

      <p className="text-left p-3 lead">As the saying goes:</p>
      <blockquote class="text-center blockquote">
        <p class="mb-0">
          <mark>
            ‘‘Give a man a fish and you feed him for a day; teach a man to fish
            and you feed him for a lifetime’’
          </mark>
        </p>
      </blockquote>

      <p className="text-center p-3 lead">
        Our charity <span className="text"> aims </span> to give countries aid
        that will last them a <span className="text">lifetime</span>, such as
        assisting with crops, providing mental health awareness staring with
        children in schools, assisting those with disabilities, building schools
        and hospitals, bringing those communities{" "}
        <span className="text"> together </span> and therefore making them{" "}
        <span className="text"> stronger. </span>
      </p>

      <p className="text-center display-4 lead ">We are not limited!!</p>

      <p className="text-center lead">
        Our work doesn’t rule out basic needs such as food, clean water and
        shelter.
      </p>

      <p className="text-center lead">
        We promise to be as <span className="text"> transparent </span> as
        possible.
      </p>

      <p className="text-center p-3 lead">
        Ubuntu’s work isn’t complete until the continent realises its
        <span className="text"> wealth </span> and uses it to gain back its
        <span className="text"> strength.</span>
      </p>
    </div>
  );
};
