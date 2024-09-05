import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Save the Grove Again Information Session- Planting the Seed",
    paragraph:
      "Join us for an information session for the Save the Grove Again campaign.",
    image: "/images/blog/lawn-sign.jpg",
    author: {
      name: "Lacey ??",
      image: "/images/blog/author-01.png",
      designation: "Title?",
    },
    tags: ["event"],
    publishDate: "2024-09-05",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
