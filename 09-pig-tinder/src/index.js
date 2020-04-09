const guineaPigs = [
  {
    id: 0,
    imgSrc:
      'https://images.unsplash.com/photo-1512087499053-023f060e2cea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    name: 'Алексей',
    description: '1.5 года, Очень любит обниматься'
  },
  {
    id: 1,
    imgSrc:
      'https://images.unsplash.com/photo-1512483652399-7a1f99aa0dd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
    name: 'Иван',
    description: '2 года, Настоящий мачо'
  },
  {
    id: 2,
    imgSrc:
      'https://images.unsplash.com/photo-1526346093155-a601c2cbe917?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    name: 'Артём и Вова',
    description: 'По 3 года, Ищут третьего'
  },
  {
    id: 3,
    imgSrc:
      'https://images.unsplash.com/photo-1558360370-c828347734d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1394&q=80',
    name: 'Велик',
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

function swipe(action) {
  const pig = document.getElementById('image');

  switch (action) {
    case 'left': {
      pig.style.transform = `translateX(-500%) translateY(0%) rotate(-180deg)`;
      break;
    }
    case 'up': {
      pig.style.transform = `translateX(0) translateY(-1000%)`;
      break;
    }
    case 'right': {
      pig.style.transform = `translateX(500%) translateY(0%) rotate(180deg)`;
      break;
    }
  }

  setTimeout(function() {
    pig.style.transform = `translate(-50%, -50%)`;
  }, 700);
}

function onStart() {
  const app = new PigTinder();
  app.getGuineaPig();
  document.getElementById('like').addEventListener('click', () => {
    swipe('left');
    setTimeout(function() {
      app.getGuineaPig();
    }, 500);
  });
  document.getElementById('star').addEventListener('click', () => {
    swipe('up');
    setTimeout(function() {
      app.getGuineaPig();
    }, 500);
  });
  document.getElementById('skip').addEventListener('click', () => {
    swipe('right');
    setTimeout(function() {
      app.getGuineaPig();
    }, 500);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  onStart();
});
