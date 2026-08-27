import { motion } from 'framer-motion';

export default function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <motion.div
                    className="h-16 w-16 rounded-full border-4 border-[#1E8A8A] border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Loading text with dots animation */}
                <div className="flex items-center gap-1 text-[#1E8A8A] font-medium text-lg">
                    Loading
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                    >
                        .
                    </motion.span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    >
                        .
                    </motion.span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                    >
                        .
                    </motion.span>
                </div>
            </div>
        </div>
    );
}