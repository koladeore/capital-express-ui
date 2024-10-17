// Get modal and buttons
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("policyModal");
const closeModalBtns = document.querySelectorAll(".closeModalBtn");

// Open modal on button click
openModalBtn.addEventListener("click", () => {
    modal.classList.add("active");
});

// Close modal when clicking on close buttons
closeModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.classList.remove("active");
    });
});

// Close modal when clicking outside of modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

// Get BrownCard modal and buttons
const brownCardBtn = document.getElementById("brownCardBtn");
const brownCardModal = document.getElementById("brownCardModal");
const closeBrownCardBtns = document.querySelectorAll(".closeBrownCardModal");

// Open BrownCard modal on button click
brownCardBtn.addEventListener("click", () => {
    brownCardModal.classList.add("active");
});

// Close BrownCard modal when clicking on close buttons
closeBrownCardBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        brownCardModal.classList.remove("active");
    });
});

// Close BrownCard modal when clicking outside of modal content
window.addEventListener("click", (e) => {
    if (e.target === brownCardModal) {
        brownCardModal.classList.remove("active");
    }
});

