var one = new Vue({
  el: "#app",
  data: {
    selected: 0,
    contacts: [{
        name: 'Modular',
        icon: 'fas fa-server',
        description: 'Composed in pseudo-Latin language which more or less corresponds.'
      },
      {
        name: 'Responsive',
        icon: 'far fa-caret-square-up',
        description: 'Composed in pseudo-Latin language which more or less corresponds.'
      },
      {
        name: 'Customizable',
        icon: 'far fa-plus-square',
        description: 'Composed in pseudo-Latin language which more or less corresponds.'
      },
      {
        name: 'Scalable',
        icon: 'fas fa-expand-arrows-alt',
        description: 'Composed in pseudo-Latin language which more or less corresponds.'
      },
    ],
    quickstart: ["npm", "nuget", "spm", "github"],
  },
});

var two = new Vue({
  el: "#appFooter",
  data: {
    company: [{
        name: "About Us",
        url: "https://www.google.it",
      },
      {
        name: "Services",
        url: "#",
      },
      {
        name: "Team",
        url: "#",
      },
      {
        name: "Pricing",
        url: "#",
      },
      {
        name: "Project",
        url: "#",
      },
      {
        name: "Careers",
        url: "#",
      },
      {
        name: "Blog",
        url: "#",
      },
      {
        name: "Login",
        url: "#",
      },
    ],
    links: [{
        name: "Terms of Services",
        url: "#",
      },
      {
        name: "Privacy Policy",
        url: "#",
      },
      {
        name: "Documentation",
        url: "#",
      },
      {
        name: "Changelog",
        url: "#",
      },
      {
        name: "Componentss",
        url: "#",
      },
    ]
  },
});
