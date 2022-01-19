const endPoint = 'https://flynn.boolean.careers/exercises/api/array/music';

window.addEventListener('load', addMusic);

function addMusic() {
	axios
		.get(endPoint)
		.then((response) => {
			addMusicFromResponse(response);
		})
		.catch((error) => {
			console.log(error);
		});
}

function addMusicFromResponse(response) {
	let musica = response.data.response;
	console.log(response.data);

	for (let i = 0; i < musica.length; i++) {
		let img = document.createElement('img');
		console.log(musica[i].author);

		let imgUrl = musica[i].poster;
		img.src = imgUrl;
		let titleOb = musica[i].title;
		let yearOb = musica[i].year;
		let authorOb = musica[i].author;

		let card = document.createElement('div');
		card.className = 'card';
		let poster = document.createElement('div');
		poster.className = 'poster';
		let title = document.createElement('div');
		title.className = 'title';
		let year = document.createElement('div');
		year.className = 'year';
		const container = document.querySelector('.container');
		let card_name = document.createElement('div');
		card_name.className = 'card-name';
		let author = document.createElement('author');
		author.className = 'author';

		container.appendChild(card);
		card.appendChild(poster);
		poster.appendChild(img);
		card.appendChild(card_name);
		card_name.appendChild(title);
		card_name.appendChild(year);
		card.appendChild(author);
		title.append(titleOb);
		year.append(yearOb);
		author.append(authorOb);
	}
}
