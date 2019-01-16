var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    picture: 'https://www.pambazuka.org/sites/default/files/styles/flexslider_full/public/field/image/EW_Harry-Potter_Featured.jpg?itok=XphMvnG2'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    picture: 'https://static.antyweb.pl/wp-content/uploads/2018/11/23075023/krol-lew-2019-1420x670.jpg'
  },
  {
    id: 3,
    title: 'Sami Swoi',
    desc: 'Film o dwóch zwaśnionych rodach z kresów',
    picture: 'https://ssl-gfx.filmweb.pl/ph/11/13/1113/64278.2.jpg'
  },
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key:movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src:movie.picture})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app'));
