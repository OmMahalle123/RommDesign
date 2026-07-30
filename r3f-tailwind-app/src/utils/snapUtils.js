/**
 * Snap Utilities — grid snapping, rotation snapping, wall/floor snapping.
 */

/**
 * Snap a value to the nearest grid increment.
 */
export function snapToGrid(value, gridSize) {
  if (!gridSize || gridSize <= 0) return value;
  return Math.round(value / gridSize) * gridSize;
}

/**
 * Snap a position [x, y, z] to a grid.
 */
export function snapPositionToGrid(position, gridSize) {
  return [
    snapToGrid(position[0], gridSize),
    position[1], // Y is handled by snapToFloor
    snapToGrid(position[2], gridSize),
  ];
}

/**
 * Snap a rotation angle to the nearest snap angle.
 */
export function snapRotation(angle, snapAngle) {
  if (!snapAngle || snapAngle <= 0) return angle;
  return Math.round(angle / snapAngle) * snapAngle;
}

/**
 * Ensure furniture sits on the floor (Y >= snapHeight).
 */
export function snapToFloor(position, snapHeight = 0) {
  return [position[0], Math.max(snapHeight, position[1]), position[2]];
}

/**
 * Clamp position within room boundaries.
 * Room is centered at origin, so bounds are ±width/2 and ±depth/2.
 */
export function clampToRoom(position, roomWidth, roomDepth, margin = 0.2) {
  const halfW = roomWidth / 2 - margin;
  const halfD = roomDepth / 2 - margin;
  return [
    Math.max(-halfW, Math.min(halfW, position[0])),
    position[1],
    Math.max(-halfD, Math.min(halfD, position[2])),
  ];
}

/**
 * Apply all snapping rules to a position.
 */
export function applySnapping(position, options = {}) {
  const {
    snapEnabled = true,
    gridSize = 0.25,
    snapHeight = 0,
    roomWidth = 10,
    roomDepth = 10,
  } = options;

  let pos = [...position];

  if (snapEnabled && gridSize > 0) {
    pos = snapPositionToGrid(pos, gridSize);
  }

  pos = snapToFloor(pos, snapHeight);
  pos = clampToRoom(pos, roomWidth, roomDepth);

  return pos;
}
