"use client";

import React from "react";
import { motion } from "framer-motion";

export interface RelationChartProps {
  className?: string;
}

export default function RelationChart({ className = "" }: RelationChartProps) {
  return (
    <motion.div
      className={`w-full max-w-[1200px] mx-auto overflow-hidden bg-transparent rounded-lg p-8 flex justify-center items-center ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full h-full bg-transparent flex justify-center items-center">
        <img
          src="/relation-chart.png"
          alt="关系图组件"
          className="w-[80%] h-auto object-contain blur-[1px]"
        />
      </div>
    </motion.div>
  );
}
