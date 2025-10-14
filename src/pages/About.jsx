// src/components/AboutPage.jsx
import React from "react";
import { motion } from "framer-motion";
// Assuming 'useTranslation' is imported from 'react-i18next'
import { useTranslation } from "react-i18next";

import aboutHero from "/images/aboutHero.svg";
import teamImg from "/images/team.svg";
import quizPng from "/images/quiz.svg";
import connectPng from "/images/connect.svg";
import brain from "/images/brain.svg";

// --- Framer Motion Animation Variants (Left as is) ---
const fadeIn = (direction = "up", delay = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, delay },
    },
  };
  return variants;
};

const floatingVariants = {
  animate: {
    y: [0, 20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
// ----------------------------------------------------

const AboutPage = () => {
  // 1. Initialize useTranslation hook
  const { t } = useTranslation(); // Using 'about' as the namespace

  return (
    <div className="relative bg-gradient-to-b from-[#1c1240] via-[#2a1e55] to-[#3b2a78] text-white min-h-screen overflow-hidden">
      {/* === Animated Gradient Background Orbs === (Left as is) */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-600/40 blur-3xl rounded-full"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-40 right-10 w-80 h-80 bg-pink-500/30 blur-3xl rounded-full"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-500/30 blur-3xl rounded-full"
        variants={floatingVariants}
        animate="animate"
      />

      {/* === Hero Section === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeIn("up")}
        className="relative flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-6 md:px-20 z-10"
      >
        <motion.div
          style={{ zIndex: 1 }}
          className="md:w-1/2 text-center md:text-left"
          variants={fadeIn("right", 0.2)}
        >
          {/* Translation Key: hero.title */}
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            {t("hero.title")}
          </h1>
          {/* Translation Key: hero.subtitle */}
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            {t("hero.subtitle")}
          </p>
          {/* Translation Key: hero.button */}
          <a
            href="/test"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            {t("hero.button")} 🚀
          </a>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          variants={fadeIn("left", 0.3)}
          drag
          whileDrag={{ color: "red" }}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        >
          {/* Translation Key: hero.imageAlt */}
          <img
            src={aboutHero}
            alt={t("hero.imageAlt")}
            className="w-full max-w-md mx-auto drop-shadow-2xl"
            style={{ pointerEvents: "none", zIndex: 0 }}
          />
        </motion.div>
      </motion.section>

      {/* === What We Do === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeIn("up")}
        className="relative py-16 px-6 md:px-20 bg-[#25194b]/60 rounded-3xl mx-5 my-8 shadow-xl backdrop-blur-sm border border-purple-500/20 z-10"
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.img
            src={brain}
            alt={t("whatWeDo.imageAlt")}
            className="w-60 hover:scale-110 transition-all duration-300"
            variants={fadeIn("right")}
          />
          <motion.div variants={fadeIn("left", 0.3)}>
            {/* Translation Key: whatWeDo.title */}
            <h2 className="text-3xl font-bold mb-4 text-purple-300">
              🧠 {t("whatWeDo.title")}
            </h2>
            {/* Translation Key: whatWeDo.intro */}
            <p className="text-gray-200 leading-relaxed">
              {t("whatWeDo.intro")}
            </p>
            <ul className="mt-3 space-y-2 text-gray-300 text-left">
              {/* Translation Keys: whatWeDo.list1, list2, etc. */}
              <li>• {t("whatWeDo.list1")}</li>
              <li>• {t("whatWeDo.list2")}</li>
              <li>• {t("whatWeDo.list3")}</li>
              <li>• {t("whatWeDo.list4")}</li>
              <li>• {t("whatWeDo.list5")}</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* === Why Choose Us === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeIn("up")}
        className="relative py-16 px-6 md:px-20 flex flex-col md:flex-row-reverse items-center gap-10 z-10"
      >
        {/* Translation Key: whyChooseUs.imageAlt */}
        <motion.img
          src={quizPng}
          alt={t("whyChooseUs.imageAlt")}
          className="w-60 hover:rotate-6 hover:scale-110 transition-all duration-300"
          variants={fadeIn("left")}
        />
        <motion.div variants={fadeIn("right", 0.3)}>
          {/* Translation Key: whyChooseUs.title */}
          <h2 className="text-3xl font-bold mb-4 text-pink-300">
            💡 {t("whyChooseUs.title")}
          </h2>
          {/* Translation Key: whyChooseUs.intro */}
          <p className="text-gray-200 leading-relaxed">
            {t("whyChooseUs.intro")}
          </p>
          <ul className="mt-3 space-y-2 text-gray-300 text-left">
            {/* Translation Keys: whyChooseUs.list1, list2, etc. */}
            <li>✅ {t("whyChooseUs.list1")}</li>
            <li>✅ {t("whyChooseUs.list2")}</li>
            <li>✅ {t("whyChooseUs.list3")}</li>
            <li>✅ {t("whyChooseUs.list4")}</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* === Our Team Section === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeIn("up")}
        className="relative py-16 px-6 md:px-20 bg-[#1f153d]/80 flex flex-col md:flex-row items-center gap-10 rounded-3xl mx-5 my-8 z-10"
      >
        {/* Translation Key: ourTeam.imageAlt */}
        <motion.img
          src={teamImg}
          alt={t("ourTeam.imageAlt")}
          className="w-60 md:w-80 hover:scale-105 transition-all duration-300"
          variants={fadeIn("right")}
        />
        <motion.div variants={fadeIn("left", 0.3)}>
          {/* Translation Key: ourTeam.title */}
          <h2 className="text-3xl font-bold mb-4 text-blue-300">
            👩‍💻 {t("ourTeam.title")}
          </h2>
          {/* Translation Key: ourTeam.description */}
          <p className="text-gray-300 max-w-xl">{t("ourTeam.description")}</p>
        </motion.div>
      </motion.section>

      {/* === Connect Section === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeIn("up")}
        className="relative py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 z-10"
      >
        {/* Translation Key: connect.imageAlt */}
        <motion.img
          src={connectPng}
          alt={t("connect.imageAlt")}
          className="w-48 md:w-70 hover:scale-110 transition-transform duration-300"
          variants={fadeIn("left")}
        />
        <motion.div
          className="text-center md:text-left"
          variants={fadeIn("right", 0.3)}
        >
          {/* Translation Key: connect.title */}
          <h2 className="text-3xl font-bold mb-3 text-green-300">
            💬 {t("connect.title")}
          </h2>
          {/* Translation Key: connect.description1 */}
          <p className="text-gray-300">{t("connect.description1")}</p>
          <p className="mt-3">
            {/* Translation Key: connect.emailLabel (using string concatenation for clarity) */}
            📧 <strong>{t("connect.emailLabel")}</strong>
          </p>
          {/* Translation Key: connect.socialLabel */}
          <p>🌐 {t("connect.socialLabel")}</p>
        </motion.div>
      </motion.section>

      {/* === Footer === */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeIn("up")}
        className="relative py-10 border-t border-purple-500/20 text-center text-gray-400 z-10"
      >
        {/* Translation Key: footer.thanks */}
        <p>{t("footer.thanks")}</p>
        {/* Translation Key: footer.copyright */}
        <p className="mt-2 text-sm">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </p>
      </motion.footer>
    </div>
  );
};

export default AboutPage;
