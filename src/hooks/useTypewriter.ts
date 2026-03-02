import { useState, useEffect } from 'react';

export function useTypewriter(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            if (isDeleting) {
                setText(fullText.substring(0, text.length - 1));
            } else {
                setText(fullText.substring(0, text.length + 1));
            }

            let timeout = isDeleting ? deletingSpeed : typingSpeed;

            if (!isDeleting && text === fullText) {
                timeout = pauseTime;
                setIsDeleting(true);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum((prev) => prev + 1);
                timeout = 500;
            }

            timer = setTimeout(handleTyping, timeout);
        };

        timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

    return text;
}
