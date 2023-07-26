import LargeRoom from "./room.js";

// length, width, height, windows, doorSize, doorType, floorType, doorClosed, wallColor
const myRoom = new LargeRoom(
  "My Room",
  20,
  15,
  20,
  2,
  7,
  "wooden",
  "carpet",
  true,
  "beige"
);

const content = `
    <h1 class="largeroom__name">My Room</h1>
    <ul class="largeroom__features">
      <li class="largeroom__length">Length:<span> ${myRoom.length}</span></li>
      <li class="largeroom__width">Width:<span> ${myRoom.width}</span></li>
      <li class="largeroom__height">Height:<span> ${myRoom.height}</span></li>
      <li class="largeroom__windows">Windows:<span> ${myRoom.windows}</span></li>
      <li class="largeroom__door">Door size:<span> ${myRoom.door.Size} inches</span></li>
      <li class="largeroom__type">Door Type:<span> ${myRoom.door.Type}</span></li>
      <li class="largeroom__floor">Floor type:<span> ${myRoom.floorType}</span></li>
      <li class="largeroom__door">Door status:<span> ${myRoom.doorClosed}</span></li>
      <li class="largeroom__wall">Wall Color:<span> ${myRoom.wallColor}</span></li>
    </ul>
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("largeroom");
newArticle.setAttribute("id", "myroom");
newArticle.innerHTML = content;

main.append(newArticle);

/**
 * Add a navigation section to the DOM
 */
const navContent = `
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Backpacks</a></li>
  <li><a href="#">Other things</a></li>
  <li><a href="#">Contact</a></li>
`;

const mainNav = document.createElement("nav");
mainNav.classList.add("main-navigation");
const navList = document.createElement("ul");
navList.innerHTML = navContent;
mainNav.append(navList);

document.querySelector(".siteheader").append(mainNav);
