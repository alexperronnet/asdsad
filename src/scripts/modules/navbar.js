// Get DOM elements
const header = document.querySelector(".header")
const toggleNav = document.querySelector(".header__toggle-nav")
const nav = document.querySelector(".header__nav")
const navLinks = document.getElementsByClassName("header__nav-link")

// Prevent tabindex when link is active
for (const navLink of navLinks) {
  navLink.hasAttribute("data-active") && (navLink.tabIndex = -1)
}

toggleNav.addEventListener("click", () => {
  // Toggle responsive navbar and overlay
  nav.toggleAttribute("data-visible")
  header.toggleAttribute("data-overlay")

  // Indicate if the control is expanded or collapsed
  nav.hasAttribute("data-visible")
    ? toggleNav.setAttribute("aria-expanded", true)
    : toggleNav.setAttribute("aria-expanded", false)
})

// Manage closing navbar
const closeNav = () => {
  nav.removeAttribute("data-visible")
  header.removeAttribute("data-overlay")
  toggleNav.setAttribute("aria-expanded", false)
}

// Close navbar and remove overlay when user click outside or on link
header.addEventListener("click", event => {
  event.target.className !== "header__nav" &&
  event.target.className !== "header__toggle-nav"
    ? closeNav()
    : null
})

// Close navbar and remove overlay when user press ESC
header.addEventListener("keydown", event => {
  nav.hasAttribute("data-visible") && event.keyCode === 27 ? closeNav() : null
})

// Close navbar and remove overlay when user resize window
new ResizeObserver(entries => {
  if (entries[0].contentRect.width >= 768) {
    closeNav()
  }
}).observe(document.body)
