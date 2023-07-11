import LargeRoom from "./Largeroom";

// length, width, height, windows, doorSize, doorType, floorType, doorClosed, wallColor
const myRoom = new LargeRoom(
    20,
    15,
    20,
    2,
    7,
    "wooden",
    "carpet",
    True,
    "beige"
);
console.log(myRoom);

const livingRoom = new LargeRoom(
    30,
    25,
    20,
    2,
    8,
    "iron",
    "tile",
    False,
    "white"
);
console.log(livingRoom);
