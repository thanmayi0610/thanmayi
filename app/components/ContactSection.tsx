
"use client";

import { useState } from "react";
import Container from "./Container";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { PiXLogoThin } from "react-icons/pi"; // for X (formerly Twitter)

export default function ContactSection() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="Contact" className="py-20  text-center">
      <Container>
        {/* Contact Pill that toggles details */}
        {/* <span
          className="inline-block bg-gray-700 text-white px-3 py-1 rounded-full text-sm mb-4 cursor-pointer hover:bg-gray-600 transition"
          onClick={() => setShowDetails(!showDetails)}
        > */}
        <span
  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold px-5 py-2 rounded-full text-sm mb-6 cursor-pointer shadow-lg hover:scale-105 transform transition duration-200 ease-in-out"
  onClick={() => setShowDetails(!showDetails)}
>

          Contact
        </span>

        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">
          Want to chat or collaborate or discuss a project? Email me at{" "}
          <a
            href="mailto:hello@prakashpun.me"
            className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold"
          >
            hello@prakashpun.me
          </a>{" "}
          or message me on{" "}
          <a
            href="https://linkedin.com/in/prakash--pun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold"
          >
            LinkedIn
          </a>{" "}
          and I’ll respond as quick as possible.
        </p>

        {/* Show the detailed contact list when toggled */}
        {showDetails && (
          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-6">Contact</h3>
            <div className="flex flex-col gap-4 items-center text-lg">
              <a
                href="mailto:hello@prakashpun.me"
                className="flex items-center gap-3 hover:text-blue-500"
              >
                <HiOutlineMail size={20} />
                hello@prakashpun.me
              </a>

              <a
                href="https://linkedin.com/in/prakash--pun"
                target="_blank"
                className="flex items-center gap-3 hover:text-blue-500"
              >
                <FaLinkedin size={20} />
                @prakash--pun
              </a>

              <a
                href="https://twitter.com/prakash__pun"
                target="_blank"
                className="flex items-center gap-3 hover:text-blue-500"
              >
                <PiXLogoThin size={20} />
                @prakash__pun
              </a>

              <a
                href="https://github.com/prakash-pun"
                target="_blank"
                className="flex items-center gap-3 hover:text-blue-500"
              >
                <FaGithub size={20} />
                @prakash-pun
              </a>

              <a
                href="https://instagram.com/prakash__pun"
                target="_blank"
                className="flex items-center gap-3 hover:text-blue-500"
              >
                <FaInstagram size={20} />
                @prakash__pun
              </a>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
