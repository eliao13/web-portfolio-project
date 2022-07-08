const projectsData = [
  {
    title: "Movie Database",
    shortSummary:
      "The Movie Database Project allowed users to view movies, search movies, and favourite movies to their favourite list.",
    sampleImage: "/assets/image/movie-sample-image.jpg",
    link: "https://www.evanwliao.com/movie-database/",
    singleProject: [
      {
        title: "Movie Database",
        responsiveSampleImage: "/assets/image/movie-sample-image.jpg",
        skills: ["React", "Sass"],
        tools: ["Adobexd", "Adobephotoshop", "Github"],
        timeline: "1 month",
        team: "Collaboration of 4 team members",
        role: "Developer/designer",
        liveSiteLink: "https://www.evanwliao.com/movie-database/",
        githubLink: "https://github.com/eliao13/movie-database-project",
        overview:
          "MovieCentral is a movie database project where users are able to browse movies, search movies, and add movies to their favourite list. This project was a team project built using React and Sass. The movie data was pulled from TMDB API. The design of this project was based on my movie database mock-up design.",
        development: [
          {
            title: "Carousel Hero Banner",
            content:
              "Hero banner showcases the top 3 upcoming movies that are pulled from the TMDB API. The carousel itself is automatic and is infinite loop. The carousel is also swipeable for mobile and tablet users. For desktop users, the carousel pauses when the mouse is over the carousel.",
            screenshot: "/assets/image/movie-carousel-function.gif",
          },
          {
            title: "Search Feature",
            content:
              "The search feature dynamically displays a maximum of 10 movie results if the search is valid. The search results are provided with the release years to differentiate movies with the same names.",
            screenshot: "/assets/image/movie-search-function.gif",
          },
          {
            title: "Add to Favourite Feature",
            content:
              "This feature allows users to add any movies to their favourites list by pressing on the heart icon on the home page, single movie page, or favourites page. The users are also able to remove any movie from their favourites list anywhere in the site as well. The favourites list is saved in the local storage.",
            screenshot: "/assets/image/movie-favourite-function.gif",
          },
          {
            title: "Takeaways",
            content:
              "The most challenging part about this project was the add to favourite feature. It involved use react-redux and going into local storage to add, remove, or retrieve movies for the favourites list.\nThrough developing this project, I learned more about the foundation of React and Sass, and how gained more experience working as a team using GitHub.",
          },
        ],
        design: [
          {
            title: "Movie database mockup",
            screenshot: "/assets/image/movie-desktop-ss.jpg",
          },
          {
            title: "Movie database mockup",
            screenshot: "/assets/image/movie-desktop-ss-2.jpg",
          },
          {
            title: "Movie database mockup",
            screenshot: "/assets/image/movie-mobile-ss-2.jpg",
          },
          {
            title: "Movie database mockup",
            screenshot: "/assets/image/movie-mobile-ss-2.jpg",
          },
        ],
      },
    ],
  },
  {
    title: "Capstone Project",
    shortSummary:
      "The Capstone Project was to setup a WooCommerce store where users can shop for outdoor equipment, such as hiking shoes, tents, and sleeping bags.",
    sampleImage: "/assets/image/capstone-sample-image.jpg",
    link: "https://getoutdoors.bcitwebdeveloper.ca/",
    singleProject: [
      {
        title: "Capstone Project",
        responsiveSampleImage: "/assets/image/capstone-sample-image.jpg",
        skills: ["Wordpress", "Woocommerce", "Php", "Sass"],
        tools: ["Adobexd", "Github"],
        timeline: "1 month",
        team: "Collaboration of 4 team members",
        role: "Developer/designer",
        liveSiteLink: "https://getoutdoors.bcitwebdeveloper.ca/",
        githubLink: "https://github.com/",
        overview:
          "Get Outdoors was a WooCommerce store that sells outdoor equipment for various outdoor activities and provides workshops on outdoor related topics. Goal of the capstone project was to develop an online store for Get Outdoors, where users were able to perform various actions, such as view store details, view workshop details, purchase products and ship it to Canada or USA or pick up locally.",
        development: [
          {
            title: "Planning",
            content:
              "This capstone project was a team project that involved a bigger planning process compared to other projects in the BCIT program. Part of this process was creating several documentations that included memorandum of understanding, project management & communication plan, website content plan & information architecture, wireframe, and site development plan.",
            screenshot: "/assets/image/capstone-site-map.jpg",
          },
          {
            title: "Development Process",
            content:
              "The development process for this capstone project was separated into functional website and styling. Building a functional website involved implementing all the plugins that our team planned to use and outputting the plugins correctly onto the web application. The process of building a functional website also involved checking for proper semantics for every element in the web application and making sure all the functions work. Styling part of this project involved splitting the tasks into reuseable parts and all the other parts.",
          },
          {
            title: "Takeaways",
            content:
              "This capstone project was fun and I gained great experience working in a team environment. I learned a lot working in a team environment including collaborating using project management tool, having daily meetings, and having effective communications within the team.",
          },
        ],
        design: [
          {
            title: "Capstone project wireframe",
            screenshot: "/assets/image/capstone-wireframe-ss.jpg",
          },
          {
            title: "Capstone project wireframe",
            screenshot: "/assets/image/capstone-wireframe-ss-2.jpg",
          },
        ],
      },
    ],
  },
  {
    title: "Portfolio Project",
    shortSummary:
      "A personal portfolio that showcases my skills, my front end web developer journey, and my previous works.",
    sampleImage: "/assets/image/portfolio-sample-image.jpg",
    link: "https://www.evanwliao.com/",
    singleProject: [
      {
        title: "Portfolio Project",
        responsiveSampleImage: "/assets/image/portfolio-sample-image.jpg",
        skills: ["React", "Sass"],
        tools: ["Adobexd", "Github"],
        timeline: "1 month",
        team: "Myself",
        role: "Developer/designer",
        liveSiteLink: "https://www.evanwliao.com/",
        githubLink: "https://github.com/",
        overview:
          "Portfolio project was developed to showcase my skills as a developer. This project was developed using React and Sass. Wireframes were done through Figma and high fidelity mockup was done through Adobe XD.",
        development: [
          {
            title: "Planning",
            content:
              "Before starting the development of the portfolio, a content plan was made to layout all the content that is going to be included in each section of the web application. The content plan helped me stay organized in the development process.",
            screenshot: "/assets/image/portfolio-content-plan.jpg",
          },
          {
            title: "Accordion Feature",
            content:
              "Through implementing the accordion feature, I learned how to use and customize React libraries, such as Material UI. Using accordions allow me to display more content, while not having the page extend too long.",
            screenshot: "/assets/image/portfolio-accordion.gif",
          },
          {
            title: "Moveable Cards",
            content:
              "Moveable cards allows interaction between the user and the web application. The cards design is also an interesting and fun way of presenting content.",
            screenshot: "/assets/image/portfolio-card.gif",
          },
          {
            title: "Takeaways",
            content:
              "Overall, I had fun making the portfolio project. I wanted to design my portfolio to mimick writing on a notebook. I also gained a lot of experience in React and SASS while developing the portfolio, including implementing different React libraries and customizing the components to fit my theme. ",
          },
        ],
        design: [
          {
            title: "Portfolio database wireframe",
            screenshot: "/assets/image/portfolio-wireframe-ss.jpg",
          },
          {
            title: "Portfolio database wireframe",
            screenshot: "/assets/image/portfolio-wireframe-ss-2.jpg",
          },
          {
            title: "Portfolio database wireframe",
            screenshot: "/assets/image/portfolio-wireframe-ss-3.jpg",
          },
          {
            title: "Portfolio database mockup",
            screenshot: "/assets/image/portfolio-mockup-ss.jpg",
          },
          {
            title: "Portfolio database mockup",
            screenshot: "/assets/image/portfolio-mockup-ss-2.jpg",
          },
          {
            title: "Portfolio database mockup",
            screenshot: "/assets/image/portfolio-mockup-ss-3.jpg",
          },
        ],
      },
    ],
  },
];

export default projectsData;
