/* Theme variables */
const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

/* Color variables */
const toggleColors = document.getElementById('toggle-colors');
const rootStyles = document.documentElement.style;

/* Language variables */
const flagsElement = document.getElementById('flags');
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJSON = await fetch(`./languages/${language}.json`);
    const json = await requestJSON.json();

    for (const texts of textsToChange ) {
        const section = texts.dataset.section
        const value = texts.dataset.value
        texts.innerHTML = json[section][value]
    }
    
};


/* Change color theme */
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    if(toggleIcon.textContent == "light_mode") {
        toggleIcon.textContent = "dark_mode"
        toggleText.textContent = "Dark Mode"
        document.getElementById('blue-color').style.display = "none";
        document.getElementById('purple-color').style.display = "none";
        document.getElementById('green-color').style.display = "block";
        document.getElementById('yellow-color').style.display = "block";
    } else {
        toggleIcon.textContent = "light_mode"
        toggleText.textContent = "Light Mode"
        document.getElementById('blue-color').style.display = "block";
        document.getElementById('purple-color').style.display = "block";
        document.getElementById('green-color').style.display = "none";
        document.getElementById('yellow-color').style.display = "none";
    }
})

/* Change primary color */
toggleColors.addEventListener('click', (e) => {
    rootStyles.setProperty('--primary-color', e.target.dataset.color)
})

/* Language translator */
flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})


/* Set default colors */
document.body.addEventListener('load', setColors)

function setColors() {
    document.getElementById('green-color').style.display = "none";
    document.getElementById('yellow-color').style.display = "none";
    document.getElementById('blue-color').style.display = "block";
    document.getElementById('purple-color').style.display = "block";
}
