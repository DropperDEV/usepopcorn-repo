import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code === key) {
          action();
        }
      }
      return document.addEventListener("keydown", callback);
    },
    [action, key]
  );
}
