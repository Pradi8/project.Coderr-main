async function setHeader() {
    if (!currentUser) {
        await setCurrentUser()
    }
    setHeaderTemplate()
}

function setHeaderTemplate() {
    let headerRef = document.getElementById('head_content_right')
    if (currentUser) {
        headerRef.innerHTML = getLogedInHeaderTemplate()
    } else {
        headerRef.innerHTML = getLogedOutHeaderTemplate()
    }
}

function getCopyrightYear() { 
    document.getElementById("copyright_year").textContent =
    new Date().getFullYear();
}