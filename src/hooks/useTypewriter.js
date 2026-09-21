import { useEffect, useState } from 'react';
import { TYPE_SPEED, DELETE_SPEED, HOLD_TIME } from '../data/profile';

// Cycles through `words`, typing and deleting each one, terminal-style.
// Shared by the desktop and mobile Profile views so the hero behaves
// identically even though the two render completely different markup.
export default function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [phase, setPhase] = useState('typing'); // 'typing' | 'holding' | 'deleting'

  useEffect(() => {
    const current = words[wordIndex];
    let timeoutId;

    if (phase === 'typing') {
      if (typedText.length < current.length) {
        timeoutId = setTimeout(() => setTypedText(current.slice(0, typedText.length + 1)), TYPE_SPEED);
      } else {
        timeoutId = setTimeout(() => setPhase('holding'), HOLD_TIME);
      }
    } else if (phase === 'holding') {
      timeoutId = setTimeout(() => setPhase('deleting'), 400);
    } else if (phase === 'deleting') {
      if (typedText.length > 0) {
        timeoutId = setTimeout(() => setTypedText(current.slice(0, typedText.length - 1)), DELETE_SPEED);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typedText, phase, wordIndex]);

  return typedText;
}
