import { useEffect, useState } from "react";

export const useZindex = () => {
    const [zindex, setZindex] = useState(0);

    var mutationObserver = new MutationObserver((mutations) => {
      getZindex();
    });

    mutationObserver.observe(document.documentElement, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
      attributeOldValue: true,
      characterDataOldValue: true
    });

    useEffect(()=>{
      return () => mutationObserver.disconnect();
    },[])

    const getZindex = () => {
      const elements = document.getElementsByTagName('*');
      var maxZindex = 0;
      for (var i = 0; i < elements.length; i++) {
        var z = Number.parseInt(
          document.defaultView
            .getComputedStyle(elements[i], null)
            .getPropertyValue("z-index"),
          0
        );
        z > maxZindex ?? (maxZindex = z);
      }
      zindex < maxZindex ?? setZindex(maxZindex);
      return maxZindex;
    } 
    
    return zindex;
}
