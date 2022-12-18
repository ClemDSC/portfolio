import { useState, useEffect } from 'react';

export default function SkillList({ words }) {
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setCurrentWord(words[index]);
      index = (index + 1) % words.length;
    }, 3000);

    return () => clearInterval(interval);
  }, [words]);

  return <h2 className="bg-white font-[Montserrat Alternates] text-3xl mx-2 mt-6">{currentWord}</h2>;
}
