import React from 'react'
import { Avatar, Blockquote } from "flowbite-react";
import { getQuotes } from '../services/services.goals/getQuotes';
import { useEffect, useState } from 'react';

export function QuotesGoals() {
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        const fetchQuotes = async () => {
            const quotesData = await getQuotes();
            setQuotes(quotesData);
        };

        fetchQuotes();
    }, []);

    return (
        <div>
            {quotes.map((quote) => (
                <figure key={quote.id} className="mx-auto p-5 max-w-screen-md text-center shadow-2xl">
                    <svg className="w-10 h-10 mx-auto mb-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                    <Blockquote>
                        <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
                            "{quote.frase}"
                        </p>
                    </Blockquote>
                    <figcaption className="mt-6 flex items-center justify-center space-x-3">
                        <Avatar rounded size="xs" img={quote.foto_autor} alt="profile picture" />
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <cite className="pr-3 font-medium text-gray-900 dark:text-white">{quote.autor}</cite>
                        </div>
                    </figcaption>
                </figure>
            ))}
        </div>
    );
}