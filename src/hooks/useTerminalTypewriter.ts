import { useState, useEffect } from 'react';

interface TerminalLine {
  key: string;
  value: string | number | string[];
  delay: number;
}

export function useTerminalTypewriter(lines: TerminalLine[], typingSpeed = 30) {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const isComplete = currentLineIndex >= lines.length;

  useEffect(() => {
    if (isComplete) {
      return;
    }

    const currentLine = lines[currentLineIndex];
    
    // Convert value to string representation
    const valueString = Array.isArray(currentLine.value) 
      ? `[${currentLine.value.map(v => `"${v}"`).join(', ')}]`
      : typeof currentLine.value === 'string'
      ? `"${currentLine.value}"`
      : String(currentLine.value);

    if (currentCharIndex < valueString.length) {
      const timer = setTimeout(() => {
        setCurrentCharIndex(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, { ...currentLine, value: valueString }]);
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [currentCharIndex, currentLineIndex, lines, typingSpeed, isComplete]);

  return { displayedLines, isComplete };
}
