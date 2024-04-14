"use client";

import { ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export const GoUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <Button
        variant="accent"
        size="icon"
        className="shadow-md"
        onClick={scrollToTop}
      >
        <ChevronUp size={16} />
      </Button>
    )
  );
};
