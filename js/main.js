let url = new URL(window.location.href);
const page = url.searchParams.get('page');

const routes = {
    'inicial': home,
}

// let content = notFound();

if (page === null) {
    content = home();
} else if (routes[page]) {
    content = routes[page]();
}

document.getElementById('root').innerHTML = content;