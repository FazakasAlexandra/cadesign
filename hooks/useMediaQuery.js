import { useEffect, useState } from "react";

export const useMediaQuery = (width) => {
  if(typeof window !== 'undefined') {
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      setIsMobile(deviceWidth <= width);
    }, [deviceWidth])

    const handleWindowSizeChange = () => {
      setDeviceWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);

    return isMobile;
  }
}
