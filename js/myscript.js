var vm = new Vue({
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
    quickstart: ["npm", "nuget", "spm", "github"]
  },
  methods: {},
});
