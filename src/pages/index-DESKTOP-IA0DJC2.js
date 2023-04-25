import Head from "next/head";
import { useState } from "react";
import Image from "next/image";

//define an animation for h1 where it moves in from the top and fades in when the page loads, and the duration is  2sec
const h1Animation = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 5,
    },
  },
};
export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const style = {
    opacity: isHovered ? 1 : 0.0,

    top: isHovered ? 0 : 100,
  };

  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const style2 = {
    opacity: isHovered2 ? 1 : 0.0,

    top: isHovered2 ? 0 : 100,
  };

  return (
    <div>
      <Head>
        <title>Kade`s Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container">
        <div id="wholemiddle">
          <h1 style={h1Animation}>Kade`s Portfolio</h1>
          <div
            className="CMPSClasses"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h2 className="CMPSListTitle">MY CMPS CLASSES</h2>
            <div className="ClassList" style={style}>
              <ul>
                <li>
                  CMPS 161 -ALGORITHM DESIGN AND IMPLEMENTATION I
                  <ul>
                    <li>
                      Basic concepts of computer programming, problem solving,
                      algorithm development, and program coding using a
                      high-level, block-structured language.
                    </li>
                  </ul>
                </li>
                <li>
                  CMPS 235 - WEBSITE DESIGN AND CONSTRUCTION
                  <ul>
                    <li>
                      Design and construction of websites using modern website
                      design software tools. Includes tools for creation of
                      HTML/XHTML, visual elements, and inclusion of turn-key
                      interactive and dynamic components. Also covers selection
                      and use of typical website hosting services.
                    </li>
                  </ul>
                </li>

                <li className="CMPS1">
                  CMPS 257 -DISCRETE STRUCTURE
                  <ul>
                    <li>
                      Introduction to discrete structures of computing. Topics
                      include sets, relations, functions, digraphs, matrices,
                      recursion, partially ordered sets, Boolean Algebra,
                      artificial languages, and finite state machines.
                    </li>
                  </ul>
                </li>
                <li className="CMPS2">
                  CMPS 280 - ALGORITHM DESIGN AND IMPLEMENTATION II
                  <ul>
                    <li>
                      An intensive capstone of the material covered in Computer
                      Science 161 and an introduction to elementary data
                      structures, searches, simple and complex sorts, and
                      objects.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="SocialMedia"
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <h2 className="SocialMediaTitle">CONNECT WITH ME</h2>
          <div className="SocialMediaList" style={style2}>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/kade-stanford-257917273/">
                <Image
                  id="linkd"
                  alt=""
                  src="/images/LinkedIn_icon.png"
                  width={50}
                  height={50}
                /> Click here to check out my LinkedIn Profile
                </a>
              </li>
              <li>
                <a href="https://github.com/KadeStanford">
                  <Image
                  alt=""
                  id="github"
                  src="/images/github.png"
                  width={50}
                  height={50}
                /> Click here to check out my GitHub Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
