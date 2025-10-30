// Toast Notification Management
let toastTimeout

function showToast() {
  const toast = document.getElementById("toastNotification")
  if (toast) {
    toast.style.transform = "translateY(0)"

    // Auto-hide after 10 seconds
    toastTimeout = setTimeout(() => {
      closeToast()
    }, 10000)
  }
}

function closeToast() {
  const toast = document.getElementById("toastNotification")
  if (toast) {
    toast.style.transform = "translateY(100%)"
    clearTimeout(toastTimeout)
  }
}

// Login Modal Management
function openLoginModal() {
  const modal = document.getElementById("loginModal")
  if (modal) {
    modal.classList.remove("hidden")
  }
}

function closeLoginModal() {
  const modal = document.getElementById("loginModal")
  if (modal) {
    modal.classList.add("hidden")
  }
}

// Close modal when clicking outside
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("loginModal")
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeLoginModal()
      }
    })
  }

  // Show toast after 2 seconds
  setTimeout(() => {
    showToast()
  }, 2000)

  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = "smooth"
})

// Button event listeners
document.addEventListener("DOMContentLoaded", () => {
  const joinButtons = document.querySelectorAll("button")
  joinButtons.forEach((button) => {
    if (button.textContent.includes("JOIN NOW")) {
      button.addEventListener("click", openLoginModal)
    }
  })
})
