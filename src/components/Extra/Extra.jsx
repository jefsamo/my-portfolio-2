import ReachMe from "../ReachMe/ReachMe";
import NakedArrow from "/naked_arrow.png";
import "./extra.css";

const Extra = () => {
  return (
    <div className="extra">
      <div className="extra-left">
        <div className="name-card">
          <div className="name-card-content">
            <p className="firstname">Olawale</p>
            <p className="lastname">Shopeyin</p>
          </div>
        </div>
        <div className="extra-bottom">
          <div className="extra-bottom-inner">
            <img src={NakedArrow} alt="" className="naked" />
            <p className="bottom-p">
              {"<Back-end Engineer>"}
              My work spans a total of 3 years, across a couple of disciplines
              like , front-end engineering, Back-end engineering, Solidity and
              Engineering itself, for as long as I can remember I always wanted
              to build things.
            </p>
          </div>
          <p className="skill-luck">
            {"<Skill + Luck>"} I’ve been lucky enough to build things with some
            of the most creative minds across the world, minds who are great at
            many things across many disciplines.
          </p>
        </div>
      </div>
      <div className="extra-right">
        <div className="box">
          <ReachMe />
          <br />
          {/* <ReachMe /> */}
        </div>
      </div>
    </div>
  );
};

export default Extra;
