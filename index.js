// <=====================SEARCH=====================>
const searchButton = document.getElementById('search-button');
      searchClose = document.getElementById('search-close');
      searchContent = document.getElementById('search-content');
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search') 
    })
}
if(searchClose){
    searchClose.addEventListener('click', ()=>{
        searchContent.classList.remove('show-search')
    })
}

// <=====================CATEGORY=====================>
const category = document.getElementById('categorization');
      dropdown = document.getElementById('category')
      category.addEventListener('click', (event) => {
        dropdown.classList.toggle('open-menu');
        event.stopPropagation();
      });
      document.addEventListener('click', () => {
        dropdown.classList.remove('open-menu');
      });
      dropdown.addEventListener('click', (event) => {
        event.stopPropagation();
      });

// <=====================LOGIN FORM=====================>
const loginButton = document.getElementById('login-button')
      loginClose = document.getElementById('login-close')
      loginContent = document.getElementById('login-content')
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

// <=====================SECTION SCROLL=====================>
document.addEventListener("DOMContentLoaded", () => {
    // Get the elements
    const homeLink = document.getElementById("home-link");
    const featuredLink = document.getElementById("featured-link");
    const homeSection = document.getElementById("home-section");
    const featuredSection = document.getElementById("discount");
    const testimonalsection = document.getElementById("testimonal-section");
    const testimonalLink = document.getElementById("testimonal-link");
    // Scroll to Home
    homeLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    // Scroll to Featured
    featuredLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      featuredSection.scrollIntoView({ behavior: "smooth" });
    });
    testimonalLink.addEventListener("click", (event) => {
        event.preventDefault();
        testimonalsection.scrollIntoView({ behavior: "smooth" })
    })
  });
  

