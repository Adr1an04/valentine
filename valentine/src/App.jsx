import React, { useState } from 'react';
import { Heart, PartyPopper } from 'lucide-react';

const App = () => {
    const [answer, setAnswer] = useState(null);

    const handleYes = () => {
        setAnswer('yes');
    };

    const handleNo = () => {
        // FOREVER NO
        const button = document.getElementById('noButton');
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 100);
        button.style.position = 'absolute';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    };

    return (
        <div className="bg-pink-50 text-gray-800 font-sans min-h-screen flex flex-col">

            <header className="text-center py-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-600">
                    {answer === 'yes' ? "My beautiful girl <3" : "Estefanie...."}
                </h1>
            </header>

            {/* Main Section */}
            <main className="flex-1 flex justify-center items-center min-h-[60vh]">
                {answer === 'yes' ? (
                    //YAY
                    <div className="text-center">
                        <div className="flex justify-center space-x-4 mb-8">
                            {[...Array(5)].map((_, i) => (
                                <PartyPopper
                                    key={i}
                                    className={`text-pink-500 animate-bounce`}
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                    size={48}
                                />
                            ))}
                        </div>
                        <h2 className="text-3xl font-bold text-pink-600 mb-4">
                            This is so epic I love you!
                        </h2>
                        <div className="flex justify-center space-x-4">
                            {[...Array(3)].map((_, i) => (
                                <Heart
                                    key={i}
                                    className="text-pink-500 animate-pulse"
                                    size={32}
                                    fill="currentColor"
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    // Proposal View
                    <div className="text-center">
                        <div className="mb-8">
                            <Heart className="inline-block text-pink-500 animate-pulse" size={64} fill="currentColor" />
                        </div>
                        <h2 className="text-3xl font-bold text-pink-600 mb-8">
                            Will You Be My Valentine?
                        </h2>
                        <div className="space-x-4 flex justify-center">
                            <button
                                onClick={handleYes}
                                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-bold transform hover:scale-110 transition-transform"
                            >
                                Yes 💖
                            </button>
                            <button
                                id="noButton"
                                onMouseEnter={handleNo}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-8 py-3 rounded-full font-bold transform transition-transform"
                            >
                                No 😢
                            </button>
                        </div>
                    </div>
                )}
            </main>


            <footer className="bg-pink-600 text-white text-center py-4 w-full">
                <p className="font-semibold text-xl">Rizz</p>
            </footer>
        </div>
    );
};

export default App;
