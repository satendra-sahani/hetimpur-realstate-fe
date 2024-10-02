import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/components/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div"> // Use HTMLMotionProps for compatibility
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div"> // Use HTMLMotionProps here too
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  HTMLMotionProps<"h3"> // Specify HTMLMotionProps for "h3"
>(({ className, ...props }, ref) => (
  <motion.h3
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  HTMLMotionProps<"p"> // Use HTMLMotionProps for "p"
>(({ className, ...props }, ref) => (
  <motion.p
    ref={ref}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div"> // Use HTMLMotionProps for "div"
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className={cn("p-6 pt-0", className)}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div"> // Use HTMLMotionProps for "div"
>(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
