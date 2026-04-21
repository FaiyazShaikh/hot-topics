const container = document.querySelector('#container');
const links = document.querySelectorAll('.nav-links a');
let url = 'partials/home.html';

const loadContent = (urlFeed) => {
    fetch(urlFeed)
        .then(res => res.text())
        .then(data => {
            container.innerHTML = data;
        })
        .catch(err => console.log(err));
};

// Initial load
loadContent(url);

const selectContent = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    loadContent(href);
};

links.forEach(link => link.addEventListener('click', selectContent));