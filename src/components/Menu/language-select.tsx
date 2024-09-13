'use client';
import { useState } from 'react';

export default function LanguageSelect() {
  const [language, setLanguage] = useState('pt');

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
    // Lógica para mudança de idioma
    console.log(`Idioma alterado para: ${event.target.value}`);
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      className="border bg-white text-lg font-semibold rounded-lg px-4 py-2"
    >
      <option value="pt">Português</option>
      <option value="en">English</option>
    </select>
  );
}
