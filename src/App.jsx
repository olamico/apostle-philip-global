import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./App.css";
import Card from "./Components/Card.jsx";
import Partner from "./Components/Partner.jsx";
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" bg-white text-gray-800">
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-6 shadow-md">
        {/*mobile */}
        <div>
          <img
            src="logo22.png"
            alt="logo22.png"
            className="h-8 w-auto rounded-full"
          />
        </div>
        <div>
          <p className="md:text-4xl font-semibold text-red-700">
          Apostle Philip Global Healing Ministries</p>
        </div>
        <div className="md:hidden">
          <div
            className="cursor-pointer text-4xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </div>
          <div
            className={`w-full h-screen flex flex-col items-center bg-white gap-8 font-medium text-lg justify-center absolute top-16 transition-all ease-in-out ${
              open ? "-right-0" : "-right-[100%]"
            }`}
          >
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded hover:bg-red-600 hover:text-white transition font-bold hover:scale-110 transition-transform"
            >
              Home
            </a>
            <a
              href="#crusade"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded hover:bg-red-600 hover:text-white transition font-bold hover:scale-110 transition-transform"
            >
              Crusade
            </a>

            <a
              href="#aboutUs"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded hover:bg-red-600 hover:text-white transition font-bold hover:scale-110 transition-transform"
            >
              About Us
            </a>
            <a
              href="#contactUs"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded hover:bg-red-600 hover:text-white transition font-bold hover:scale-110 transition-transform"
            >
              Contact Us
            </a>
            <a
              href="#becomeAPartner"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded hover:bg-red-600 hover:text-white transition font-bold hover:scale-110 transition-transform"
            >
              Become a Partner
            </a>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-lg text-red-700">
          <a
            href="#home"
            className="block px-4 py-2 rounded hover:bg-red-600 hover:text-white transition font-bold hover:scale-110 transition-transform"
          >
            Home
          </a>
          <a
            href="#crusade"
            className="block px-4 py-2 rounded hover:bg-red-600 hover:text-white transition font-bold hover:scale-110 transition-transform"
          >
            Crusade & Revival
          </a>

          <a
            href="#aboutUs"
            className="block px-4 py-2 rounded hover:bg-red-600 hover:text-white transition font-bold hover:scale-110 transition-transform"
          >
            About Us
          </a>
          <a
            href="#contactUs"
            className="block px-4 py-2 rounded hover:bg-red-600 hover:text-white transition font-bold hover:scale-110 transition-transform"
          >
            Contact Us
          </a>
        </nav>
      </header>
      <div>
        {/*home */}
        <section id="home">
          <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-8 gap-10">
            {/* Left Section */}
            {/* Right Section */}
            <div className="flex flex-col w-full md:w-1/2  flex justify items-center mt-10 md:mt-0 gap-4 px-10">
              <img
                src="founder.jpg"
                alt="Apostle Philip Kehinde Adeyemo"
                className="rounded-2xl shadow-2xl w-full max-w-md object-cover border-4 border-white"
              />

              <h1 className="text-2xl font-semibold text-red-500 leading-relaxed">
                Apostle Philip Kehinde Adeyemo
              </h1>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left space-y-6 pr-4">
              <img
                src="banner.jpg"
                alt="Ministry Banner"
                className="rounded-xl shadow-lg w-full max-w-lg object-cover"
              />
              <h1 className="text-2xl text-justify font-semibold text-red-500 leading-relaxed">
                Philip World Outreach & Crusades (PWOC) is a ministry dedicated
                to reaching the ends of the earth with the message of salvation,
                healing, and restoration.
              </h1>
              <div>
                {/*<div className="flex justify item-centre gap-8 mt-4">
                   <a href="www.facebook.com/apostlephilipglobal">
                    
                    <img
                      src="facebook.png"
                      alt="facebook"
                      className="rounded-full hover:text-red-600 border-2 border-blue-600 h-30 w-30 mt-6 hover:scale-110 transition-transform"
                    />
                  </a>
                  <a href="www.instagram.com/apostlephilipglobal">
                    <img
                      src="instagram.png"
                      alt="instagram"
                      className="rounded-full hover:text-red-600 border-2 border-pink-500 h-30 w-30 mt-6 hover:scale-110 transition-transform"
                    />
                  </a>
                  <a href="www.x.com/apostlephilipglobal">
                    <img
                      src="twitter.png"
                      alt="twitter"
                      className="rounded-full hover:text-red-600border-2 border-blue-400 h-30 w-30 mt-6 hover:scale-110 transition-transform"
                    />
                  </a>
                  <a href="www.youtube.com/@ApostlePhilipGlobal">
                    <img
                      src="youtube.png"
                      alt="youtube"
                      className="rounded-full border-2 border-red-600  hover:text-red-600 h-30 w-30 mt-6 hover:scale-110 transition-transform"
                    />
                  </a> 
                </div>*/}
                <div>
                  <a
                    href="#becomeAPartner"
                    className="mt-6 px-8 py-3 bg-gray-600 text-white rounded-full font-semibold shadow-md hover:bg-red-700 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                  >
                    Partnership and Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*crusade */}
        <section
          id="crusade"
          className="bg-gradient-to-br from-gray-100 via-white to-gray-200 px-8 py-16"
        >
          <h2 className="text-4xl font-bold text-center text-red-700 mb-10">
            Ministrations
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            <Card
              image="crusade.jpg"
              title="Crusade & Revival"
              subtitle="Spreading the Gospel"
              description="Dedicated ministers reaching souls across nations through crusades and revivals."
            />
            <Card
              image="crusade2.jpg"
              title="Revival"
              subtitle="Reival at TACN Ajagunsegun Lagos"
              description="Preaching the word with manifestation of HolyGhost and power."
            />
            <Card
              image="crusade3.jpg"
              title="Revival"
              subtitle="Reival at TACN Ajagunsegun Lagos"
              description="Reaching souls for Christ with great prophetic insight diging deep into the deep and secret things."
            />
            <Card
              image="crusade4.jpg"
              title="Crusade"
              subtitle="Open air Crusade"
              description="Reaching millions for christ with great power of the Holy ghost."
            />
            <Card
              image="crusade5.jpg"
              title="Crusade"
              subtitle="Crusade at Ile Oluji Ondo State"
              description="Preaching the message of Faith healing and deliverance of our Lord Jesus Christ ."
            />
            <Card
              image="crusade6.jpg"
              title=""
              subtitle="Alter call at Ile Oluji Ondo State"
              description="Alter call and prayer for people at Ile Oluji."
            />
          </div>
        </section>
        {/*Upcoming */}

        {/* about us*/}
        <div>
          <section
            id="aboutUs"
            className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-16 py-16 flex flex-col md:flex-row items-start justify-between gap-12"
          >
            {/* Left Section - Image */}

            {/* Right Section - Text */}
            <div className="w-full md:w-1/2 space-y-6 text-gray-800">
              <h2 className="text-4xl font-bold text-red-700 mb-4">About Us</h2>
              <p className="text-lg leading-relaxed">
                <strong>Founder:</strong> Apostle Philip Kehinde Adeyemo
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Ministry:</strong> Apostle Philip Global Healing
                Ministries
              </p>
              <p className="text-justify">
                Apostle Philip Kehinde Adeyemo Apostle with an Evangelistic
                Assignment Called into the office of an Apostle with a divine
                mandate to spread the Gospel, Apostle Philip Kehinde Adeyemo is
                the founder of Apostle Philip Global Healing Ministries. Guided
                by the principles of Galatians 1:1, he is driven to fulfill his
                apostolic calling.
              </p>
              <p className="text-justify">
                <h3 className="text-2xl font-semibold text-red-700 mb-2">
                  Ministry Overview
                </h3>
                Apostle Philip Global Healing Ministries is dedicated to
                spreading the message of salvation, healing, and deliverance
                through Jesus Christ. The ministry's mission is centered on
                Philip World Outreach & Healing Crusades, reaching the lost and
                equipping believers for spiritual growth.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Background and Calling</strong>
              </p>
              <p className="text-justify">
                Born on February 6th, 1991, to Overseer Emmanuel and Deaconess
                Abigail Adeyemo in Ilu Adeyemo, Ogbomosho, Oyo State, Apostle
                Philip was raised in a Christian family. He gave his life to
                Jesus Christ and was baptized in 2001 at The Apostolic Church
                Nigeria, Akandie Assembly, Ogbomosho. During his second year at
                Federal College of Education Abeokuta, Apostle Philip received
                the call to ministry in 2015. Since then, God has used him
                mightily in healings, deliverances, and soul-winning, taking him
                to various outreaches, revivals, conferences, and crusades.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Theology and Doctrine </strong>
              </p>
              <p className="text-justify">
                Apostle Philip Global Healing Ministries stands on the
                foundation of: - Salvation through the incarnation, death, and
                resurrection of Jesus Christ - Healing and miracles as
                manifestations of God's power - The second coming of Jesus
                Christ and life after death - The trinity and the gifts of the
                Holy Spirit - The teachings of Jesus Christ and the Apostles.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Personal Life</strong>
              </p>
              <p className="text-justify">
                Apostle Philip is married to Pastor Mrs. Goddey Abimbola, whom
                he wed in a traditional, court, and church wedding at The
                Redeemed Christian Church of God, Ogun Province 15, Idi-Aba
                Abeokuta, Ogun State on August 14th, 2021. God has blessed him
                with a son and a twins a boy and a girl, a beautiful family of
                five.
              </p>
              <p>
                <h3 className="text-2xl font-semibold text-red-700 mb-2">
                  Global Impact
                </h3>
              </p>
              <p className="text-justify">
                Through his ministry, Apostle Philip has touched lives globally,
                preaching the Gospel and demonstrating God's love through
                various humanitarian efforts. His dedication to spreading the
                message of hope and redemption continues to inspire and uplift
                believers worldwide.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Location:</strong> 2, Odo-Aluko, Ijegun, Lagos, Nigeria
              </p>
              <div>
                <h3 className="text-2xl font-semibold text-red-700 mb-2">
                  Mission
                </h3>
                <p className="text-lg leading-relaxed text-justify">
                  Empowering lives through the power of prayer, healing, and the
                  gospel.
                  <br />
                  Philip World Outreach & Crusades (PWOC) is a ministry
                  dedicated to reaching the ends of the earth with the message
                  of salvation, healing, and restoration. Through crusades,
                  revivals, and conferences, PWOC builds the body of Christ and
                  fosters a community of believers united in peace and harmony.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-red-700 mb-2">
                  Team
                </h3>
                <ul className="list-disc list-inside text-lg leading-relaxed">
                  <li>PWOC Evangelists</li>
                  <li>PWOC Leaders</li>
                  <li>Worship Team</li>
                  <li>Prayer Team</li>
                  <li>Logistics and Protocols</li>
                  <li>Resource and Finance</li>
                  <li>Crusade Planning Committee</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-red-700 mb-2">
                  Core Value
                </h3>
                <p className="text-lg text-justify leading-relaxed">
                  Ministering to the sick, bringing healing to their bodies,
                  souls, and spirits, and empowering them to serve God with
                  renewed health and vitality.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-red-700 mb-2">
                  Vision
                </h3>
                <p className="text-lg text-justify leading-relaxed">
                  To spread the gospel of salvation and healing to a world in
                  need, equipping believers to live victorious lives and fulfill
                  their destinies.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-end md:justify-end px-24">
              <img
                src="profile.jpg"
                alt="Profile"
                className="hidden md:flex rounded-full shadow-2xl w-80 h-120 object-cover border-4 border-white"
              />
            </div>
          </section>
        </div>
        {/*contact us */}
        
        <section
          id="contactUs"
          className="bg-gradient-to-br from-gray-100 via-white to-gray-200 px-8 py-16 text-gray-800"
        >
          <h2 className="text-4xl font-bold text-center text-red-700 mb-10">
            Contact Us
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side – Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-red-600 mb-2">
                Contact Details
              </h3>
              <p className="text-lg leading-relaxed">
                <strong>Phone:</strong> <br />
                <a
                  href="tel:+2348163344057"
                  className="hover:text-red-600 block"
                >
                  +234 816 334 4057
                </a>
                <a
                  href="tel:+2347083384206"
                  className="hover:text-red-600 block"
                >
                  +234 708 338 4206
                </a>
              </p>

              <p className="text-lg leading-relaxed">
                <strong>Gmail:</strong> <br />
                <a
                  href="mailto:adeyemokehinde54@gmail.com"
                  className="hover:text-red-600"
                >
                  adeyemokehinde54@gmail.com
                </a>
              </p>

              <p className="text-lg leading-relaxed">
                <strong>YouTube Channel:</strong> <br />
                <a
                  href="https://www.youtube.com/results?search_query=Apostle+Philip+Global+Healing+Ministries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600"
                >
                  Apostle Philip Global Healing Ministries
                </a>
              </p>
            </div>

            {/* Right Side – Social Media */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-red-600 mb-2">
                Social Media Handles
              </h3>

              <div className="flex gap-6 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    src="facebook.png"
                    alt="Facebook"
                    className="rounded-full border-2 border-blue-600 h-14 w-14 p-2 bg-white shadow-md"
                  />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    src="twitter.png"
                    alt="Twitter"
                    className="rounded-full border-2 border-blue-400 h-14 w-14 p-2 bg-white shadow-md"
                  />
                </a>
              </div>
            </div>
          </div>
          <section id="becomeAPartner" className="mt-16">
            <Partner />
          </section>
        </section>
        <footer className="bg-red-700 text-white py-6 text-center">
          <p className="text-lg font-medium">
            © {new Date().getFullYear()} Philip World Outreach & Crusades
            (PWOC). All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Designed and maintained by{" "}
            <span className="font-semibold">SoolTech</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
