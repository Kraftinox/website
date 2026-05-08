// Create a central animation configuration object
// Each key represents a route (page path)
// Each value is an array of animation functions to run on that route

// Pure DOM manipulation — no GSAP dependency
const buttonTextAnim = () => {
    document.querySelectorAll<HTMLElement>(".tp-btn-anim .tp-btn-text").forEach((el) => {
        if (el.classList.contains("btn-animated")) return;

        el.classList.add("btn-animated");

        const text = el.textContent?.trim() || "";
        el.innerHTML = "";

        const block = document.createElement("div");
        block.classList.add("btn-anim__block");

        [...text].forEach((char) => {
            const span = document.createElement("span");
            span.className = "btn-anim__letter";
            span.textContent = char === " " ? "\u00A0" : char;
            block.appendChild(span);
        });

        el.appendChild(block);
        el.appendChild(block.cloneNode(true));
    });
};

export const animationConfig: Record<string, (() => void)[]> = {
    "/":    [buttonTextAnim],
    "/ro":  [buttonTextAnim],
    "/en":  [buttonTextAnim],
};