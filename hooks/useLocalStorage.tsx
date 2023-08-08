import { useEffect } from "react";

export default function useLocalStorage(key) {
  let restaurants;
  useEffect(() => {
    // fetch data from local storage
    if (typeof window !== "undefined") {
      restaurants = localStorage.getItem(key);
    }
  }, [restaurants]);

  return [restaurants];
}
