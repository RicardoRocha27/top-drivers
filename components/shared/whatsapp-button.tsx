"use client";

import { AiOutlineWhatsApp } from "react-icons/ai";
import { Button } from "../ui/button";

const WhatsappButton = () => {
  return (
    <Button
      variant="whatsapp"
      size="icon"
      className="shadow-md"
      // TODO: CHANGE MOBILE NUMBER
      onClick={() => window.open(`https://wa.me/999999999`)}
    >
      <AiOutlineWhatsApp size={20} className="text-foreground" />
    </Button>
  );
};

export default WhatsappButton;
