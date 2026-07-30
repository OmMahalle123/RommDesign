/**
 * Drag and Drop Hook — enables sidebar-to-canvas furniture placement.
 *
 * Usage:
 *   In sidebar: set draggable with data-registry-id attribute
 *   In canvas wrapper: use onDragOver/onDrop handlers
 */
import { useCallback } from 'react';
import useStore from '../store/useStore';

/**
 * Hook for making sidebar items draggable.
 */
export function useDragSource(registryId) {
  const onDragStart = useCallback(
    (e) => {
      e.dataTransfer.setData('text/plain', registryId);
      e.dataTransfer.effectAllowed = 'copy';
    },
    [registryId]
  );

  return { onDragStart, draggable: true };
}

/**
 * Hook for the canvas drop target.
 */
export function useDropTarget() {
  const onDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }, []);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    const registryId = e.dataTransfer.getData('text/plain');
    if (!registryId) return;

    // Place furniture at center of room; user can drag it afterward
    useStore.getState().addFurniture(registryId, [0, 0, 0]);
  }, []);

  return { onDragOver, onDrop };
}
