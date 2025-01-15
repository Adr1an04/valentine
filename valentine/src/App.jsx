import React, { useState } from 'react';
import { Heart, PartyPopper } from 'lucide-react';
import videoFile from './assets/elgatogif.mp4';
import memeAudio from './assets/meme.mp4';
import valentineImage from './assets/us.jpeg';

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

            {/* Main Section */}
            <main className="flex-1 flex justify-center items-center min-h-[60vh]">
                {answer === 'yes' ? (
                    <div className="text-center">
                        <div className="flex justify-center space-x-4 mb-8">
                            {[...Array(5)].map((_, i) => (
                                <PartyPopper
                                    key={i}
                                    className={`text-pink-500 animate-bounce`}
                                    style={{animationDelay: `${i * 0.2}s`}}
                                    size={60}
                                />
                            ))}
                        </div>
                        <h2 className="text-3xl font-bold text-pink-600 mb-4">
                            This is so epic I love you!
                        </h2>

                        <div className="mb-8">
                            <audio
                                src={memeAudio}
                                autoPlay
                                loop
                                className="absolute top-0 left-0 w-0 h-0"
                            />
                        </div>

                        <div className="mb-8 w-full max-w-[500px] mx-auto">
                            <video
                                src={videoFile}
                                alt="Celebration"
                                className="w-full h-auto rounded-lg object-cover"
                                autoPlay
                                loop
                                muted
                            />
                        </div>

                        <div className="flex justify-center space-x-4">
                            {[...Array(3)].map((_, i) => (
                                <Heart
                                    key={i}
                                    className="text-pink-500 animate-pulse"
                                    size={48}
                                    fill="currentColor"
                                />
                            ))}
                        </div>
                    </div>
                ) : (

                    <div className="text-center">
                        <div className="mb-8">
                            <img
                                src={valentineImage}
                                alt="Valentine Image"
                                className="mx-auto mb-4 rounded-lg"
                                style={{ width: '300px', height: '300px' }}
                            />
                        </div>
                        <div>
                            <Heart className="inline-block text-pink-500 animate-pulse" size={64} fill="currentColor"/>
                            <Heart className="inline-block text-pink-500 animate-pulse" size={64} fill="currentColor"/>
                            <Heart className="inline-block text-pink-500 animate-pulse" size={64} fill="currentColor"/>
                            <Heart className="inline-block text-pink-500 animate-pulse" size={64} fill="currentColor"/>
                            <Heart className="inline-block text-pink-500 animate-pulse" size={64} fill="currentColor"/>

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
