import { useEffect, useRef } from "react";
import ReachMe from "../ReachMe/ReachMe";
import "./tools.css";

const Tools = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const a = new Audio("/shopeyin.m4a");
    a.preload = "auto";
    audioRef.current = a;
    return () => {
      a.pause();
      audioRef.current = null;
    };
  }, []);

  const handlePlay = async () => {
    try {
      await audioRef.current.play();
    } catch (err) {
      console.error("Playback failed:", err);
    }
  };
  return (
    <div className="tools">
      <div className="tool-item-normal">
        <div className="item-normal-content">
          <h1 className="tool-name">
            Olawale <span className="surname">Shopeyin</span>
          </h1>
          <p className="tool-title">Software Developer</p>
          <p className="description">
            A passionate software developer with over 1 year(s) of experience. I
            like to build things from behind the scenes and I like working with
            designers and developers alike.
          </p>
        </div>
        <div className="pronunciation">
          <p className="pro">
            Pronounced ~ <span className="pronounced">Show-kpe-yin</span>
            <span className="speaker" onClick={handlePlay}>
              🔉
            </span>
          </p>
        </div>
      </div>
      <div className="tool-item">
        <div className="tool-item-content-1">
          <div className="tool-item-dark"></div>
          <div className="tool-item-inner-content">
            <p className="p-tool-item">London, UK</p>
            <p className="p-2">
              I used to reside in Lagos but I currently live in London.
            </p>
          </div>
        </div>
        <ReachMe />
      </div>
      <div className="tool-item-normal-2">
        <h2>Languages/Frameworks/DB</h2>
        <div className="skills">
          <div className="left-skills">
            <p>Javascript</p>
            <p>C#</p>
            <p>MySQL</p>
            <p>Node.js</p>
            <p>.NET Core</p>
          </div>
          <div className="right-skills">
            <p>Typescript</p>
            <p>Nest.js</p>
            <p>MongoDB</p>
            <p>Java</p>
            <p>AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
