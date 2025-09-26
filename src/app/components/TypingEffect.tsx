'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type TypingEffectProps = {
  staticText: string;
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export const TypingEffect = ({ staticText, words, typingSpeed = 100, deletingSpeed = 50, delayBetweenWords = 2000 }: TypingEffectProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(word.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length);
        }
      } else {
        setText(word.substring(0, text.length + 1));
        if (text.length === word.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <h1 className="text-4xl md:text-5xl lg:text-7xl/[72px] font-bold text-gray-900 leading-tight w-full">
      {staticText} <span className="text-4xl md:text-5xl lg:text-7xl text-[#ff6e6e]">{text}</span>
      <motion.span 
        className="ml-1 text-[#ff6e6e]"
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        |
      </motion.span>
    </h1>
  );
}