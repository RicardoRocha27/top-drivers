"use client";

import { AiOutlineWhatsApp } from "react-icons/ai";
import { Button } from "../ui/button";

const WhatsappButton = () => {
  return (
    <Button
      variant="whatsapp"
      size="icon"
      className="shadow-md"
      onClick={() => window.open(`https://wa.me/966513221`)}
    >
      <AiOutlineWhatsApp size={20} className="text-foreground" />
    </Button>
  );
};

export default WhatsappButton;
