export const projects = [
  {
    title: "Wedding Website",
    subtitle: "Database Interaction",
    description:
      "An ongoing wedding website project that demonstrates responsive design, user input handling with RSVPs, and data security, with the invitation list locked \
      behind a Heroku configuration variable. Built using Flask, HTML, CSS, and D3.js, with MongoDB Atlas hosting the invitations list and the guest messages. \
      Next steps include reformatting the home page and adding questions to the RSVP.",
    image: "./wedding.gif",
    link: "https://brendan-grace-wedding.herokuapp.com/",
  },
  {
    title: "Bookclub Website",
    subtitle: "Responsive Web Design",
    description:
      "A small project created for a book club I am involved in that allows us to post our reviews. Displays the books that have been read, book reviews, and the book list \
      which will be used for future selections. Built using Flask, HTML, CSS, and D3.js, with MongoDB Atlas used as a database for book reviews and suggestions. Further \
      development will include a profiles page and average group ratings for books on the home page.",
    image: "./bookclub.gif",
    link: "https://zbookclub.herokuapp.com/",
  },
];

export const visualizations = [
  {
    title: 'Belly Button Biodiversity',
    subtitle: 'Plotly Visualizations',
    description: "This was a project that focused on learning how to make visualizations using JavaScript's Plotly library. Looking back at it, I would much \
      rather make this type of visualization using D3 but I appreciate the simplicity Plotly provided in initially learning JavaScript visualization methods.",
    image: "./visualizationGifs/bellyButton.gif",
    link: 'https://github.com/jacobdv/biodiversity'
  },
  {
    title: 'Earthquakes',
    subtitle: 'Leaflet Mapping',
    description: "This map displays my first use of Leaflet.js to map real-time data. I find Leaflet.js to be extremely straightforward and easy to use, though \
      I do not find that I need mapping often in personal projects. I hope to use this more in the future.",
    image: "./visualizationGifs/earthquakes.gif",
    link: 'https://github.com/jacobdv/usgs-earthquakes'
  },
  {
    title: 'Median Income and Age',
    subtitle: 'Plotly Visualizations',
    description: "I remember being so proud and excited when I first built this - it was my first interactive project where elements moved on the page! There \
      are definitely pieces of this code that look clunky now but it works and I know how I would make it cleaner now.",
    image: "./visualizationGifs/income.gif",
    link: 'https://github.com/jacobdv/data-journalism'
  },
  {
    title: 'High Speed Internet Access',
    subtitle: 'Plotly Visualizations',
    description: "These visualizations are two of the smoothest I built in the bootcamp. The map displays datapoints for all US cities with a population over 5000, \
      changing color and radius based on the data. The scatterplot loads smoothly and has tooltips that update accurately.",
    image: "./visualizationGifs/internetAccess.gif",
    link: 'https://github.com/jacobdv/snuffleupagusses'
  },
  {
    title: "NCAA DI Men's Basketball",
    subtitle: 'Plotly Visualizations',
    description: "This is the first web visualization of my ongoing NCAA project. It uses HTML and CSS to display graphs created in Pandas with Matplotlib. This is a project \
      that I look forward to improving upon now that I am confident with JavaScript and visualization methods such as D3.js.",
    image: "./visualizationGifs/ncaaOriginal.gif",
    link: 'https://jacobdv.github.io/web-ncaa/'
  }
]

// export const testimonials = [
//   {
//     quote:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//     name: "Jesse Hicks",
//     company: "Zoozle",
//   },
//   {
//     quote:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
//     image: "https://randomuser.me/api/portraits/men/94.jpg",
//     name: "Ruben Alvarez",
//     company: "Dooble.io",
//   },
// ];

export const skills = [
  'JavaScript',
  'D3',
  'HTML',
  'CSS',
  'Python',
  'Pandas',
];
