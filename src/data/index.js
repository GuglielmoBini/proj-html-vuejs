// array dati

// link navbar
const navLinks = [
  {
    text: "home",
    url: "#",
    isNew: false,
  },
  {
    text: "about",
    url: "#",
    isNew: false,
  },
  {
    text: "prices",
    url: "#",
    isNew: false,
  },
  {
    text: "courses",
    url: "#",
    isNew: true,
  },
  {
    text: "locations",
    url: "#",
    isNew: false,
  },
  {
    text: "blog",
    url: "#",
    isNew: false,
  },
];

// corsi auto

const carCourses = [
  {
    src: "./src/assets/img/courses/courses-passplus.jpg",
    course: "Pass Plus",
  },
  {
    src: "./src/assets/img/courses/course-intensive.jpg",
    course: "Intensive Course",
  },
  {
    src: "./src/assets/img/courses/courses-instructor.jpg",
    course: "Instructors",
  },
];

// rating

const ratings = [
  {
    rate: "95%",
    type: "PASS RATE",
  },
  {
    rate: "100%",
    type: "REFERRAL RATE",
  },
  {
    rate: "0%",
    type: "ACCIDENT RATE",
  },
];

// istruttori
const instructors = [
  {
    name: "Mike Hart",
    src: "./src/assets/img/instructors/instructor-mikehart-600x381.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    highlighted: false,
  },
  {
    name: "John Smith",
    src: "./src/assets/img/instructors/instructor-johnsmith-600x381.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    highlighted: true,
  },
  {
    name: "Angela Hart",
    src: "./src/assets/img/instructors/instructor-angelahart-600x381.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    highlighted: false,
  },
];

// testimonials
const testimonialsInfo = [
  {
    name: "Sophia Jones",
    src: "./src/assets/img/testimonials/testimonial-sophia.png",
    text: "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.",
  },
  {
    name: "Kelly Johnson",
    src: "./src/assets/img/testimonials/testimonial-kelly.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, tempora soluta! Id dolores modi omnis! Delectus excepturi aut veritatis quibusdam voluptatem esse?",
  },
  {
    name: "Kate Lewis",
    src: "./src/assets/img/testimonials/testimonial-kate.png",
    text: "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.",
  },
  {
    name: "Harold Green",
    src: "./src/assets/img/testimonials/testimonial-harold.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, tempora soluta! Id dolores modi omnis! Delectus excepturi aut veritatis quibusdam voluptatem esse?",
  },
  {
    name: "Grant Harvey",
    src: "./src/assets/img/testimonials/testimonial-grant.png",
    text: "Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.",
  },
];

const latestNews = [
  {
    title: "What Car to Start With?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "February 7th, 2019",
    comments: "3 Comments",
    src: "./src/assets/img/latest/blog-choosecar-700x441.jpg",
  },
  {
    title: "Avada Driving School Expanding",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "February 18th, 2019",
    comments: "5 Comments",
    src: "./src/assets/img/latest/blogpost-10and2-700x441.jpg",
  },
];

// corsi footer
const courses = [
  "Pass Plus",
  "Intensive Course",
  "Automatic",
  "Instructor Training",
];

export {
  navLinks,
  carCourses,
  ratings,
  instructors,
  testimonialsInfo,
  latestNews,
  courses,
};
