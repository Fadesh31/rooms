class LargeRoom {
    constructor(
        length,
        width,
        height, 
        windows,
        doorSize,
        doorType,
        floorType,
        doorClosed,
        wallColor
    ) {
      this.length = length;
      this.width = width;
      this.height = height;
      this.windows = windows;
      this.door = {
        doorSize: doorSize,
        doorType: doorType;
      };
      this.floorType = floorType;
      this.doorClosed = doorClosed;
      this.wallColor = wallColor;
    }
    toggledoor(doorStatus) {
      this.doorClosed = doorStatus;
    }
    newFloorType() {
      this.floorType = floor
    }
  }
 
export default LargeRoom;
