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
  if (nav.hasAttribute("data-visible")) {
    toggleNav.setAttribute("aria-expanded", true)
  } else {
    toggleNav.setAttribute("aria-expanded", false)
  }
})

// Close navbar and remove overlay when user click outside or on link
document.addEventListener("click", event => {
  if (
    event.target.className !== "header__nav" &&
    event.target.className !== "header__toggle-nav"
  ) {
    nav.removeAttribute("data-visible")
    header.removeAttribute("data-overlay")
    toggleNav.setAttribute("aria-expanded", false)
  }
})

// Close navbar and remove overlay when user resize window
new ResizeObserver(entries => {
  if (entries[0].contentRect.width >= 768) {
    nav.removeAttribute("data-visible")
    header.removeAttribute("data-overlay")
    toggleNav.setAttribute("aria-expanded", false)
  }
}).observe(document.body)
