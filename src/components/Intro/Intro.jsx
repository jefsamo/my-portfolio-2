import Block from "../Block/Block";
import "./intro.css";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="intro-top">
          <h1 className="name">Wale Shopeyin</h1>
          <Block />
          <h1 className="title">Software</h1>
        </div>
        <div className="intro-second">
          <h2 className="talks">
            Engineer. Who works at the edge of user satisfaction and brand
            ambitions.
            <Block />
          </h2>
        </div>
      </div>
    </>
  );
};

export default Intro;
