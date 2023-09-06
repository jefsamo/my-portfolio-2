import "./reachMe.css";
import RightLogo from "/arrow-right.png";

const ReachMe = () => {
  return (
    <div
      className="reach-me"
      onClick={() => (window.location = "mailto:shopeyinwale@gmail.com")}
    >
      <div className="inner-reach">
        <div className="reach-left">
          <p className="p-reach">Reach out to me</p>
          <p className="p-email">Hi@shopeyinwale@gmail.com</p>
        </div>
        <div className="reach-right">
          <img src={RightLogo} alt="Right arrow" />
        </div>
      </div>
    </div>
  );
};

export default ReachMe;
