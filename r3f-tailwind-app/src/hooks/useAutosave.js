/**
 * useAutosave — Automatically saves the room state to the source code (roomTemplates.js)
 * whenever the room dimensions or furniture array changes.
 */
import { useEffect } from 'react';
import useStore from '../store/useStore';

export default function useAutosave() {
  const room = useStore((s) => s.room);
  const furniture = useStore((s) => s.furniture);
  const currentTemplate = useStore((s) => s.currentTemplate);
  const setSaveStatus = useStore((s) => s.setSaveStatus);

  useEffect(() => {
    if (!currentTemplate || furniture.length === 0) return;

    setSaveStatus('saving');
    const timer = setTimeout(async () => {
      try {
        const response = await fetch('/api/save-room', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            templateId: currentTemplate,
            room,
            furniture,
          }),
        });

        if (response.ok) {
          setSaveStatus('saved');
          setTimeout(() => setSaveStatus('idle'), 2000);
        } else {
          console.error('Failed to save to source code');
          setSaveStatus('idle');
        }
      } catch (error) {
        console.error('Error during source code persistence:', error);
        setSaveStatus('idle');
      }
    }, 1500); // 1.5s debounce to avoid thrashing during continuous sliding/dragging

    return () => clearTimeout(timer);
  }, [room, furniture, currentTemplate, setSaveStatus]);
}
