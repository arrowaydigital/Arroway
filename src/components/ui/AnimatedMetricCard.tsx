import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimatedMetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  color?: string;
  animationDelay?: number;
}

export function AnimatedMetricCard({ 
  icon, 
  value, 
  label, 
  description, 
  color = "from-blue-500 to-blue-600",
  animationDelay = 0
}: AnimatedMetricCardProps) {
  const [count, setCount] = useState(0);
  const [suffix, setSuffix] = useState("");
  
  // Extract numeric value and suffix for animation
  useEffect(() => {
    const numValue = parseFloat(value.replace(/[^\d.-]/g, ''));
    const textSuffix = value.replace(/[\d.-]/g, '');
    setSuffix(textSuffix);
    
    let start = 0;
    const increment = numValue / 40; // Divide animation into 40 steps
    const timer = setInterval(() => {
      start += increment;
      if (start >= numValue) {
        setCount(numValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20 + (animationDelay * 50)); // Delay each card slightly
    
    return () => clearInterval(timer);
  }, [value, animationDelay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden group relative"
    >

      <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">
        {Number.isInteger(parseFloat(value.replace(/[^\d.-]/g, ''))) ? Math.floor(count) : count.toFixed(1)}{suffix}
      </div>
      <div className="text-lg font-semibold text-gray-800 mb-1">
        {label}
      </div>
      <div className="text-sm text-gray-600">{description}</div>
    </motion.div>
  );
}