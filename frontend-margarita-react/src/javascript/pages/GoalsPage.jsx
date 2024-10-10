import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { CardGoals } from "../components/CardGoals";
import { QuotesGoals } from "../components/QuotesGoals";
import { Link } from "react-router-dom";

export function GoalsPage() {
    return (
        <div className="min-h-screen bg-custom-bg-2 ">
            <Header />
            <div className="bg-yellow-400 flex flex-col sm:flex-row justify-center items-center shadow-lg">
                <motion.h1 
                    className="text-3xl sm:text-5xl text-white p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, staggerChildren: 0.05 }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        CAUSAS
                    </motion.span>
                </motion.h1>
            </div>

            <div className="relative place-items-center flex-grow grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-3 my-4">
                <div className="relative w-4/5 bg-yellow-400 rounded-xl sm:col-span-1">
                    <QuotesGoals />
                </div>

                <div className="w-fit h-fit bg-yellow-400 rounded-xl">
                    <CardGoals />
                </div>
                <div className="w-fit h-fit bg-yellow-400 rounded-xl">
                    <CardGoals />
                </div>
                <div className="w-fit h-fit bg-yellow-400 rounded-xl">
                    <CardGoals />
                </div>
                <div className="w-fit h-fit bg-yellow-400 rounded-xl">
                    <CardGoals />
                </div>
                <div className="w-fit h-fit bg-yellow-400 rounded-xl">
                    <CardGoals />
                </div>
                <div className="w-fit h-fit bg-yellow-400 rounded-xl">
                    <CardGoals />
                </div>
                <div className="w-fit h-fit bg-yellow-400 rounded-xl">
                    <CardGoals />
                </div>

                <div className="relative w-4/5 bg-yellow-400 rounded-xl sm:col-span-1">
                    <QuotesGoals />
                </div>
            </div>
            <Link to={"/upload-goals"} className="mb-4 sm:mb-0 sm:ml-4">
                <motion.div
                    className="fixed bottom-8 right-8 bg-yellow-300 text-black hover:bg-yellow-500 hover:transform hover:text-white hover:scale-105 transition-all p-6 rounded-full shadow-lg flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg
                        className="w-8 h-8"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                </motion.div>
            </Link>
            <Footer />
        </div>
    );
}
