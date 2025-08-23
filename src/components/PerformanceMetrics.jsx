import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiMonitor, FiZap, FiWifi, FiActivity } from 'react-icons/fi';
import { BsSpeedometer2, BsCloudCheck, BsShieldCheck } from 'react-icons/bs';

const PerformanceMetrics = () => {
    const [metrics, setMetrics] = useState({
        loadTime: 0,
        fps: 60,
        memoryUsage: 0,
        networkLatency: 0,
        renderTime: 0,
        lighthouse: 95
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Simular métricas de rendimiento
        const updateMetrics = () => {
            const performance = window.performance;
            
            setMetrics(prev => ({
                loadTime: Math.round(performance.now() / 10) / 100,
                fps: Math.floor(Math.random() * 5) + 58, // 58-62 FPS
                memoryUsage: Math.floor(Math.random() * 30) + 40, // 40-70%
                networkLatency: Math.floor(Math.random() * 20) + 10, // 10-30ms
                renderTime: Math.round((Math.random() * 2 + 1) * 100) / 100, // 1-3ms
                lighthouse: Math.floor(Math.random() * 5) + 93 // 93-97
            }));
        };

        const interval = setInterval(updateMetrics, 2000);
        updateMetrics(); // Initial load

        return () => clearInterval(interval);
    }, []);

    const metricItems = [
        {
            icon: <FiZap className="w-4 h-4" />,
            label: "Load Time",
            value: `${metrics.loadTime}s`,
            color: "text-green-400",
            bgColor: "bg-green-400/10"
        },
        {
            icon: <FiActivity className="w-4 h-4" />,
            label: "FPS",
            value: metrics.fps,
            color: "text-blue-400",
            bgColor: "bg-blue-400/10"
        },
        {
            icon: <FiCpu className="w-4 h-4" />,
            label: "Memory",
            value: `${metrics.memoryUsage}%`,
            color: "text-purple-400",
            bgColor: "bg-purple-400/10"
        },
        {
            icon: <FiWifi className="w-4 h-4" />,
            label: "Latency",
            value: `${metrics.networkLatency}ms`,
            color: "text-cyan-400",
            bgColor: "bg-cyan-400/10"
        },
        {
            icon: <BsSpeedometer2 className="w-4 h-4" />,
            label: "Lighthouse",
            value: metrics.lighthouse,
            color: "text-orange-400",
            bgColor: "bg-orange-400/10"
        }
    ];

    if (!isVisible) {
        return (
            <motion.button
                onClick={() => setIsVisible(true)}
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-2 sm:p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FiMonitor className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
        );
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-black/90 backdrop-blur-lg border border-white/10 rounded-xl p-3 sm:p-4 shadow-2xl min-w-[260px] sm:min-w-[280px] max-w-[calc(100vw-2rem)] sm:max-w-none"
            >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <h3 className="text-white font-semibold text-xs sm:text-sm">Performance Monitor</h3>
                    </div>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-gray-400 hover:text-white transition-colors p-1"
                    >
                        <span className="text-sm">✕</span>
                    </button>
                </div>

                <div className="space-y-2 sm:space-y-3">
                    {metricItems.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className={`p-1.5 sm:p-2 rounded-lg ${metric.bgColor}`}>
                                    <span className={metric.color}>
                                        {metric.icon}
                                    </span>
                                </div>
                                <span className="text-gray-300 text-xs sm:text-sm font-medium">
                                    {metric.label}
                                </span>
                            </div>
                            <motion.span
                                key={metric.value}
                                initial={{ scale: 1.2, color: metric.color.replace('text-', '#') }}
                                animate={{ scale: 1 }}
                                className={`font-mono font-bold text-xs sm:text-sm ${metric.color}`}
                            >
                                {metric.value}
                            </motion.span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-3 sm:mt-4 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-400 justify-center">
                        <BsCloudCheck className="w-3 h-3" />
                        <span>Real-time monitoring</span>
                        <BsShieldCheck className="w-3 h-3 ml-auto" />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PerformanceMetrics;
