import courses1 from "@/assets/images/courses-1.jpg";
import courses2 from "@/assets/images/courses-2.jpg";
import courses3 from "@/assets/images/courses-3.jpg";

export const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const categoriesData = [
  {
    name: "Business & Finance",
    slug: "business",
    courses: [
      {
        id: 101,
        title: "Affiliate Marketing",
        price: 55,
        oldPrice: 60,
        rating: 4.8,
        students: "5+",
        curriculum: 1,
        tag: "Marketing",
        image: courses1,
      },
      {
        id: 102,
        title: "Financial Modeling",
        price: 75,
        oldPrice: 90,
        rating: 4.5,
        students: "10+",
        curriculum: 2,
        tag: "Finance",
        image: courses2,
      },
      {
        id: 103,
        title: "Financial Modeling-another",
        price: 75,
        oldPrice: 90,
        rating: 4.5,
        students: "10+",
        curriculum: 2,
        tag: "Finance",
        image: courses3,
      },
    ],
  },
  {
    name: "Computer Science",
    slug: "cs",
    courses: [
      {
        id: 201,
        title: "Python Programming",
        price: 99,
        oldPrice: 120,
        rating: 4.9,
        students: "20+",
        curriculum: 3,
        tag: "Programming",
        image: courses3,
      },
      {
        id: 202,
        title: "Data Structures",
        price: 85,
        oldPrice: 100,
        rating: 4.7,
        students: "15+",
        curriculum: 2,
        tag: "CS",
        image: courses1,
      },
    ],
  },
  { name: "Design", slug: "design", courses: [] },
  { name: "English Learning", slug: "english", courses: [] },
  { name: "Fundamental Marketing", slug: "fmarketing", courses: [] },
  { name: "Geometry & Math", slug: "math", courses: [] },
  { name: "Marketing", slug: "marketing", courses: [] },
  { name: "Personal Development", slug: "dev", courses: [] },
  { name: "Programming", slug: "prog", courses: [] },
];

export const categoriesDataShort = [
  {
    name: "Business & Finance",
    slug: "business",
    courses: [
      {
        id: 101,
        title: "Affiliate Marketing",
        price: 55,
        oldPrice: 60,
        rating: 4.8,
        students: "5+",
        curriculum: 1,
        tag: "Marketing",
        image: courses1,
      },
      {
        id: 102,
        title: "Investment Strategy",
        price: 75,
        oldPrice: 90,
        rating: 4.5,
        students: "10+",
        curriculum: 2,
        tag: "Finance",
        image: courses2,
      },
    ],
  },
  {
    name: "Fundamental Marketing",
    slug: "fmarketing",
    courses: [
      {
        id: 201,
        title: "SEO Essentials",
        price: 45,
        oldPrice: 50,
        rating: 4.6,
        students: "7+",
        curriculum: 1,
        tag: "SEO",
        image: courses3,
      },
    ],
  },
  {
    name: "Computer Science",
    slug: "cs",
    courses: [
      {
        id: 301,
        title: "Web Development",
        price: 120,
        oldPrice: 150,
        rating: 4.9,
        students: "15+",
        curriculum: 4,
        tag: "WebDev",
        image: courses1,
      },
      {
        id: 302,
        title: "Data Structures",
        price: 110,
        oldPrice: 130,
        rating: 4.7,
        students: "12+",
        curriculum: 3,
        tag: "CS",
        image: courses2,
      },
      {
        id: 303,
        title: "Network Security",
        price: 90,
        oldPrice: 100,
        rating: 4.6,
        students: "8+",
        curriculum: 2,
        tag: "Security",
        image: courses3,
      },
    ],
  },
];
