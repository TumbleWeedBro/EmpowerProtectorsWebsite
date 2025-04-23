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
