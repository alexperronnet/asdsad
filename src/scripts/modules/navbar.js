// Get DOM elements
const header = document.querySelector(".header")
const toggleNav = document.querySelector(".header__toggle-nav")
const nav = document.querySelector(".header__nav")
const navLinks = document.getElementsByClassName("header__nav-link")

// Prevent tabindex when link is active
for (const navLink of navLinks) {
  navLink.hasAttribute("data-active") && (navLink.tabIndex = -1)
}

// Manage toggling navbar
const togglegNav = () => {
  nav.toggleAttribute("data-visible")
  header.toggleAttribute("data-overlay")
}

// Manage closing navbar
const closeNav = () => {
  nav.removeAttribute("data-visible")
  header.removeAttribute("data-overlay")
  toggleNav.setAttribute("aria-expanded", false)
}

// Open navbar
toggleNav.addEventListener("click", () => {
  togglegNav()

  // Indicate if the control is expanded or collapsed
  nav.hasAttribute("data-visible")
    ? (toggleNav.ariaExpanded = true)
    : (toggleNav.ariaExpanded = false)
})

// Close navbar when user click outside or on link
document.addEventListener("click", event => {
  event.target.className !== "header__nav" &&
  event.target.className !== "header__toggle-nav"
    ? closeNav()
    : null
})

// Close navbar when user press ESC key
document.addEventListener("keydown", event => {
  nav.hasAttribute("data-visible") && event.keyCode === 27 ? closeNav() : null
})

// Close navbar when user resize window
new ResizeObserver(entries => {
  entries[0].contentRect.width >= 76 && closeNav()
}).observe(document.body)
