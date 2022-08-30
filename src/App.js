import "./styles/normalise.css";
import "./styles/main_styles.css";

function App() {
  return (
    <div className="main_container">
      <div className="section1"></div>

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

      <div className="section3"></div>
    </div>
  );
}

export default App;
