import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";
const data = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#about",
    text: "about",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];
const socialLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",
    classN: "fab fa-facebook",
  },
  {
    id: 1,
    href: "https://www.twitter.com",
    classN: "fab fa-twitter",
  },
  {
    id: 1,
    href: "https://www.twitter.com",
    classN: "fab fa-squarespace",
  },
];

const tour = [
  {
    id: 1,
    img: img1,
    tourDate: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    days: 6,
    amount: 2100,
  },
  {
    id: 2,
    img: img2,
    tourDate: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "indonesia",
    days: 11,
    amount: 1400,
  },
  {
    id: 3,
    img: img3,
    tourDate: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "hong kong",
    days: 8,
    amount: 5600,
  },
  {
    id: 4,
    img: img4,
    tourDate: "december 5th, 2019",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "kenya",
    days: 20,
    amount: 3300,
  },
];

export { data, socialLinks, tour };
