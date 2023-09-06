import ReachMe from "../ReachMe/ReachMe";
import "./tools.css";
import { Howl } from "howler";

const Tools = () => {
  const playSound = () => {
    var sound = new Howl({
      src: ["shopeyin.m4a"],
    });

    sound.play();
    console.log("Clicked");
  };
  return (
    <div className="tools">
      <div className="tool-item-normal">
        <div className="item-normal-content">
          <h1 className="tool-name">
            Olawale <span className="surname">Shopeyin</span>
          </h1>
          <p className="tool-title">Back-end Engineer</p>
          <p className="description">
            A passionate software engineer with over 3 years of experience. I
            like to build things from behind the scenes and I like working with
            designers and developers alike.
          </p>
        </div>
        <div className="pronunciation">
          <p className="pro">
            Pronounced ~ <span className="pronounced">Show-kpe-yin</span>
            <span className="speaker" onClick={playSound}>
              🔉
            </span>
          </p>
        </div>
      </div>
      <div className="tool-item">
        <div className="tool-item-content-1">
          <div className="tool-item-dark"></div>
          <div className="tool-item-inner-content">
            <p className="p-tool-item">Lagos, NG</p>
            <p className="p-2">
              Lagos is a pretty crazy place, good thing I hardly step out.
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
            <p>Express.js</p>
            <p>Postgres</p>
            <p>Node.js</p>
            <p>Docker</p>
          </div>
          <div className="right-skills">
            <p>Typescript</p>
            <p>Nest.js</p>
            <p>MongoDB</p>
            <p>GraphQL</p>
            <p>AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
