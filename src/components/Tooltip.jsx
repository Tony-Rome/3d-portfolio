import {useRef, useState} from "react";

const Tooltip = ({ children }) => {

    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState(0);
    const wrapperRef = useRef(null);

    return (
      <div
          ref={wrapperRef}
          className="contact-wrapper"
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
      >

      </div>
    );

}

export default Tooltip;