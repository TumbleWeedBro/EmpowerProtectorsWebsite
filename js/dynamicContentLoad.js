window.onload = () => {
    document.getElementById('body').classList.remove('sub_page');
    loadContent('./components/home.html', 'content-body');
    loadContent('./components/footer.html', 'content-footer');
    loadContent('./components/nav.html', 'content-nav');
}

document.addEventListener('click', e => {
    const link = e.target.closest('.nav-link');
    if (link) {
        const name = link.dataset.page;

        // Toggle sub_page class
        const body = document.getElementById('body');
        if (name === 'home') {
            body.classList.remove('sub_page');
        } else {
            body.classList.add('sub_page');
        }

        // Switch active class
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        link.closest('.nav-item')?.classList.add('active');

        // Load content
        loadContent(`./components/${name}.html`, 'content-body');
        loadContent('./components/footer.html', 'content-footer');
        loadContent('./components/nav.html', 'content-nav');
    }
});


function loadContent(filePath, placeholderId){
    fetch(filePath)
    .then(response => {
        if (!response.ok) throw new Error('Could not load $(filePath)');
        return response.text();
    })
    .then(html => {
        document.getElementById(placeholderId).innerHTML = html;
    })
    .catch(error => {
        console.error(error);
        document.getElementById(placeholderId).innerHTML = "<p>Error loading content</p>"
    });
}
