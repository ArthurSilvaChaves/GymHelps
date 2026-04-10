const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;

        // document.querySelectorAll(".accordion-content").forEach(c => {
        //     if (c != content) c.classList.remove("active");
        // });

        content.classList.toggle("active");
    })
})