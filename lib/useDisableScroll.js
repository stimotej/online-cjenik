import { useEffect } from "react";

const useDisableScroll = (disabled) => {
  useEffect(() => {
    var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

    function preventDefault(e) {
      e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
      }
    }

    var supportsPassive = false;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            supportsPassive = true;
          },
        })
      );
    } catch (e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

    function disableScroll() {
      window.addEventListener("DOMMouseScroll", preventDefault, false);
      window.addEventListener(wheelEvent, preventDefault, wheelOpt);
      window.addEventListener("touchmove", preventDefault, wheelOpt);
      window.addEventListener("keydown", preventDefaultForScrollKeys, false);
    }

    function enableScroll() {
      window.removeEventListener("DOMMouseScroll", preventDefault, false);
      window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
      window.removeEventListener("touchmove", preventDefault, wheelOpt);
      window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
    }

    if (disabled) disableScroll();
    else enableScroll();

    return () => {
      enableScroll();
    };
  }, [disabled]);
};

export default useDisableScroll;
