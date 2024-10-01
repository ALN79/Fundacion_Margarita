import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from "framer-motion";
import { CardGoals } from '../components/CardGoals';
import { QuotesGoals } from '../components/QuotesGoals';
import { Link } from 'react-router-dom';

export function GoalsPage() {

    return (
        <div className="min-h-screen">
            <Header />
            <motion.div className="bg-yellow-400 flex justify-center shadow-lg">
                <h1 className="text-5xl text-white p-4">CAUSAS</h1>
                <Link to={"/upload-goals"}>Subir tu Causa</Link>
            </motion.div>

            <div className="relative place-items-center flex-grow grid grid-cols-3 grid-rows-3 gap-3 my-4">
                <div className="relative w-4/5 bg-yellow-400 rounded-xl"><QuotesGoals/></div>

                <div className="w-fit h-fit bg-yellow-400 rounded-xl"><CardGoals/></div>
                <div className="w-fit h-fit bg-yellow-400 rounded-xl"><CardGoals/></div>
                <div className="w-fit h-fit bg-yellow-400 rounded-xl"><CardGoals/></div>
                <div className="w-fit h-fit  bg-yellow-400 rounded-xl"><CardGoals/></div>
                <div className="w-fit h-fit bg-yellow-400 rounded-xl"><CardGoals/></div>
                <div className="w-fit h-fit  bg-yellow-400 rounded-xl"><CardGoals/></div>
                <div className="w-fit h-fit  bg-yellow-400 rounded-xl"><CardGoals/></div>

                <div className="relative w-4/5 bg-yellow-400 rounded-xl"><QuotesGoals/></div>
            </div>
        <Footer/>
        </div>
    );
}
