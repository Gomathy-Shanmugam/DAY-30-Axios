import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Homepage() {
  return (
    <div className="home">
      
      <Navbar />
      <section id="about">
        <div className="container-fluid mt-4 ">

          <div className="row g-2 m-3">
            <h1 className="heading p-2">
              Welcome to my Database Management System
            </h1>
            <ul className="text g-4 ">
              <li className="text mb-3">
                My User Data Management System is designed to help you
                efficiently manage and organize your user data. Whether you're a
                small business or a large enterprise, My system provides the
                tools you need to streamline your data management processes.
              </li>
              <li className="text mb-3">
                With My responsive menu toggling system, accessing and
                navigating through your data is seamless across all devices.
                Whether you're on a desktop, tablet, or smartphone, you'll have
                easy access to the information you need.
              </li>
            </ul>
            <h1 className="heading">Key Features</h1>
            <ul className="text mb-3">
              <li className="text mb-3">
                This system allows you to manage user data efficiently. You can
                create, delete, and update user information seamlessly.
              </li>

              <li className="text mb-3">
                To get started, use the Navbar to navigate between Home,
                Dashboard, and Create pages.
              </li>
              <li className="text mb-3">
                {" "}
                If you have any questions or need assistance, feel free to reach
                out to My support team at{" "}
                <a href="https://mail.google.com/mail/u/0/">
                  gomathy17012002@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Homepage;
