import {useEffect, useState} from "react";

export const useMediaBreakpoint = () => {
  const calculateBP = () => ({
    isMobile: window?.matchMedia('(max-width:767px)').matches,
    isTablet: window?.matchMedia('(min-width:768px) and (max-width:1023px)').matches,
    isDesktop: window?.matchMedia('(min-width:1024px)').matches,
  });

  const [breakpoints, setBreakpoints] = useState(calculateBP());
  const updateBreakpoints = () => setBreakpoints(calculateBP())

  useEffect(() => {
    window.addEventListener('resize', updateBreakpoints);
    return () => window.removeEventListener('resize', updateBreakpoints)
  }, []);

  return {...breakpoints};
}

export default useMediaBreakpoint;