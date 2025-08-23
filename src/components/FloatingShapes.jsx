import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes = () => {
    const shapes = [
        { id: 1, size: 'w-8 h-8', color: 'bg-purple-500/20', delay: 0 },
        { id: 2, size: 'w-6 h-6', color: 'bg-pink-500/30', delay: 2 },
        { id: 3, size: 'w-10 h-10', color: 'bg-blue-500/20', delay: 4 },
        { id: 4, size: 'w-4 h-4', color: 'bg-purple-400/40', delay: 1.5 },
        { id: 5, size: 'w-12 h-12', color: 'bg-pink-400/15', delay: 3.5 },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {shapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    className={`absolute rounded-full ${shape.size} ${shape.color} blur-sm`}
                    initial={{ 
                        x: Math.random() * window.innerWidth,
                        y: window.innerHeight + 100
                    }}
                    animate={{
                        x: [
                            Math.random() * window.innerWidth,
                            Math.random() * window.innerWidth,
                            Math.random() * window.innerWidth
                        ],
                        y: [
                            window.innerHeight + 100,
                            Math.random() * window.innerHeight,
                            -100
                        ]
                    }}
                    transition={{
                        duration: 15 + Math.random() * 10,
                        repeat: Infinity,
                        delay: shape.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingShapes;
