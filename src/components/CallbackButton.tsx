import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CallbackModal from "@/components/CallbackModal";

interface CallbackButtonProps {
  variant?: "default" | "outline" | "ghost" | "light";
  size?: "default" | "sm" | "lg";
  className?: string;
  label?: string;
}

const CallbackButton = ({
  variant = "outline",
  size = "lg",
  className,
  label = "Заказать звонок",
}: CallbackButtonProps) => {
  const [open, setOpen] = useState(false);

  const styles =
    variant === "light"
      ? "bg-primary-foreground/10 border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm"
      : variant === "outline"
      ? "border-2 border-primary/40 text-primary hover:bg-primary/10 bg-transparent"
      : variant === "ghost"
      ? "text-primary hover:bg-primary/10"
      : "gradient-emerald border-0 text-primary-foreground";

  return (
    <>
      <Button
        size={size}
        onClick={() => setOpen(true)}
        className={cn("rounded-xl transition-all duration-300", styles, className)}
      >
        <Phone className="mr-2 h-4 w-4" />
        {label}
      </Button>
      <CallbackModal open={open} onOpenChange={setOpen} />
    </>
  );
};

export default CallbackButton;
