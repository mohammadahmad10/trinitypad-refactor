"use client";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function Card() {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        // initial={false}
        // animate={{ x: 100 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 1.02 }}
        className="card bg-base-100 max-w-96 w-full shadow-xl "
        variants={cardVariants}
      >
        <figure>
          <Image src="/Image.jpg" alt="card image" width={500} height={500} />
        </figure>
        <div className="card-body bg-neutral rounded-b-2xl">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              {/* <span className="loading loading-spinner "></span> */}
              Buy Now
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
