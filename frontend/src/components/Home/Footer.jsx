import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaVoicemail,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-500 text-white py-5 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center flex-row w-full">
            <div className="md:ml-6 md:flex md:space-x-10">
              <Link
                to="/"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-md font-medium text-gray-100 hover:text-blue-300"
              >
                ExpTracker.ann.in 💲 <small> © Copyright! - Aniket</small>{" "}
              </Link>

              <Link
                to="https://github.com/AniketKatre/"
                target="_blank"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-blue-200 hover:text-blue-600"
              >
                <FaGithub className="text-red-100 text-2xl" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/aniket-katre-752465149/"
                target="_blank"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-blue-200 hover:text-blue-600"
              >
                <FaLinkedin className="text-red-100 text-2xl" />
              </Link>
              <Link
                to="https://www.instagram.com/annie_jb_/"
                target="_blank"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-blue-200 hover:text-blue-600"
              >
                <FaInstagram className="text-red-100 text-2xl" />
              </Link>
              <Link
                to="mailto:katreaniket3@gmail.com"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-blue-200 hover:text-blue-600"
              >
                <FaMailBulk className="text-red-100 text-2xl" />
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-2">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="mt-3">
            Join us now and start managing your expenses like a pro!
          </p>
          <Link to="/register">
            <button className="mt-4 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
              Sign Up For Free
            </button>
          </Link>
          <p className="mt-3"> ExpTracker.ann.in || katreaniket3@gmail.com </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
