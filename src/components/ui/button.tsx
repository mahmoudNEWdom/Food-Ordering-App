import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 overflow-hidden relative disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:cursor-pointer",
  {
    variants: {
      variant: {
        // Core variants with enhanced animations
        default:
          "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 ",
        
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg hover:shadow-destructive/30 active:bg-destructive/80 before:absolute before:inset-0 before:border-2 before:border-destructive-foreground/0 hover:before:border-destructive-foreground/20 before:rounded-full before:scale-[1.08] hover:before:scale-100 before:transition-all before:duration-300",
        
        outline:
          "border border-input bg-background hover:border-primary hover:text-primary active:bg-accent/20 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 hover:after:h-full after:bg-primary/5 after:transition-all after:duration-300 after:-z-10 hover:shadow-sm",
        
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-[1.03] active:scale-100 active:bg-secondary/70 transition-all duration-300 hover:shadow-md hover:shadow-secondary/10",
        
        ghost:
          "hover:bg-accent/5 hover:text-accent-foreground active:bg-accent/20 before:absolute before:bottom-0 before:left-[10%] before:right-[10%] before:h-[2px] before:bg-current before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:ease-out hover:shadow-sm",
        
        link: 
          "text-primary p-0 after:absolute after:bg-primary after:h-[2px] after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:transition-all after:duration-300 hover:text-primary/80 active:text-primary/70",

        // Essential semantic variants
        success:
          "bg-emerald-500 text-white hover:bg-emerald-600 active:bg-emerald-700 hover:shadow-md hover:shadow-emerald-500/25 hover:-translate-y-0.5 active:translate-y-0 after:absolute after:h-1 after:bg-white/20 after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:transition-all after:duration-300",
        
        // Primary special variants
        gradient:
          "bg-gradient-to-r from-primary to-blue-500 text-white hover:shadow-lg hover:shadow-primary/20 hover:from-primary hover:to-indigo-500 hover:scale-[1.03] active:scale-100 after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-r after:from-transparent after:to-white/20 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-11 rounded-full px-8 text-base",
        icon: "size-10 p-2 hover:rotate-6 hover:scale-105 active:rotate-3 active:scale-100 transition-transform",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type IconType = React.ElementType | React.ReactNode;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: IconType;
  iconPosition?: "left" | "right";
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  icon,
  iconPosition = "left",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  
  // Helper to render the icon
  const renderIcon = () => {
    if (!icon) return null;
    
    // If icon is a React element, return it directly
    if (React.isValidElement(icon)) {
      return icon;
    }
    
    // If icon is a component type, render it
    const IconComponent = icon as React.ElementType;
    return <IconComponent />;
  };

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {icon && iconPosition === "left" && renderIcon()}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && renderIcon()}
    </Comp>
  );
}

export { Button, buttonVariants }
