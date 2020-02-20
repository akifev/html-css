const guineaPigs = [
  {
    id: 0,
    imgSrc:
      'https://images.unsplash.com/photo-1512087499053-023f060e2cea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    name: 'Дима',
    description: '1.5 года, Очень любит обниматься'
  },
  {
    id: 1,
    imgSrc:
      'https://images.unsplash.com/photo-1512483652399-7a1f99aa0dd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
    name: 'Альберт',
    description: '2 года, Настоящий мачо'
  },
  {
    id: 2,
    imgSrc:
      'https://images.unsplash.com/photo-1526346093155-a601c2cbe917?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    name: 'Пупа и Лупа',
    description: 'По 3 года, Ищут третьего'
  },
  {
    id: 3,
    imgSrc:
      'https://images.unsplash.com/photo-1558360370-c828347734d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1394&q=80',
    name: 'Алекс',
    description: '3.5 года, Очень стеснительный'
  }
];

class PigTinder {
  constructor() {
    this.guineaPig = guineaPigs[Math.floor(Math.random() * guineaPigs.length)];
    this.renderGuineaPig = this.renderGuineaPig.bind(this);
    this.getGuineaPig = this.getGuineaPig.bind(this);
  }

  renderGuineaPig() {
    document.querySelector('#image').attributes.src.value = this.guineaPig.imgSrc;
    document.querySelector('#name').innerHTML = this.guineaPig.name;
    document.querySelector('#description').innerHTML = this.guineaPig.description;
  }

  getGuineaPig() {
    const newGuineaPig = guineaPigs[Math.floor(Math.random() * guineaPigs.length)];
    if (newGuineaPig.id === this.getGuineaPig.id) {
      this.getGuineaPig();
    } else {
      this.guineaPig = newGuineaPig;
      this.renderGuineaPig();
    }
  }
}

function onStart() {
  const app = new PigTinder();
  app.getGuineaPig();
  document.querySelectorAll('.action').forEach(node => {
    node.addEventListener('click', () => {
      app.getGuineaPig();
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  onStart();
});
