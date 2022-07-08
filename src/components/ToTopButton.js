import { useEffect } from "react";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function ToTopButton() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      {
        window.scrollY > 400 ? setShowTopBtn(true) : setShowTopBtn(false);
      }
    });
  }, []);

  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="to-top-btn">
      {" "}
      {showTopBtn && (
        <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
      )}{" "}
    </div>
  );
}
export default ToTopButton;
