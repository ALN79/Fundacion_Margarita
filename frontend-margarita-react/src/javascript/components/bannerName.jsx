import React from "react";
import { motion } from "framer-motion";
export function BannerName({ username }) {
  return (
    <div className="w-full bg-yellow-400 py-4">
      <motion.h1
        className="text-white text-5xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.05 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          ¡Bienvenido {username}!
        </motion.span>
      </motion.h1>
    </div>
  );
}
