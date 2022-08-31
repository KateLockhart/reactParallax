import "./styles/normalise.css";
import "./styles/main_styles.css";

function App() {
  return (
    <div className="main_container">
      <div className="section1">
        <img
          src="./images/space.png"
          alt="Star filled dark night sky."
          className="space"
        />
        <img
          src="./images/earth.png"
          alt="Planet earth with a tilt showing Europe and Africa."
          className="earth"
        />
        <img
          src="./images/planet.png"
          alt="A planet resembling a simplified Saturn."
          className="planet"
        />
        <img
          src="./images/rocket.png"
          alt="A playful representation of a space rocket."
          className="rocket"
        />
        <img
          src="./images/satellite.png"
          alt="A space satellite in orbit."
          className="satellite"
        />
      </div>

      <div className="section2">
        <svg
          className="svg_curve_top"
          xmlns="http://www.w3.org/2000/svg"
          fill="orange"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,100 C65,93 76,10 100,100" />
        </svg>

        <div className="section2_container">
          <div className="left_side"></div>
          <div className="right_side"></div>
        </div>

        <svg
          className="svg_curve_bottom"
          xmlns="http://www.w3.org/2000/svg"
          fill="orange"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C65,20 90,5 100,0" />
        </svg>
      </div>

      <div className="section3">
        <div className="contacts">
          <div className="contact_section"></div>
          <div className="contact_section"></div>
          <div className="contact_section"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
