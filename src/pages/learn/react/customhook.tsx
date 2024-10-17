import { useState, useEffect } from "react";

function useWindowSize() {
   const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
   });

   useEffect(() => {
      const handleResize = () => {
         setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
         });
      };

      window.addEventListener("resize", handleResize);

      // Dọn dẹp sự kiện khi component unmount
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   return windowSize;
}

export default useWindowSize;

// Sử dụng Custom Hook
export const WindowSizeComponent: React.FC = () => {
   const { width, height } = useWindowSize();

   return (
      <div>
         <p>Window width: {width}px</p>
         <p>Window height: {height}px</p>
      </div>
   );
};
