const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");
const menuBackdrop = document.querySelector(".menu-backdrop");
const themeToggle = document.querySelector(".theme-toggle");

// Abrir y cerrar el menú de navegación
function setMenu(open) {
    if (!menuToggle || !siteMenu || !menuBackdrop) return;

    // Actualizar el estado accesible del botón
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute(
        "aria-label",
        open ? "Cerrar menú de navegación" : "Abrir menú de navegación"
    );

    // Actualizar el texto visible del botón
    const menuLabel = menuToggle.querySelector(".menu-toggle-label");
    if (menuLabel) {
        menuLabel.textContent = open ? "CERRAR" : "MENÚ";
    }

    // Mostrar u ocultar el menú y el fondo
    siteMenu.hidden = !open;
    menuBackdrop.hidden = !open;

    // Evitar el desplazamiento de la página cuando el menú está abierto
    document.body.classList.toggle("menu-open", open);
}

// Evento del botón del menú
menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
});

// Cerrar el menú al pulsar el fondo
menuBackdrop?.addEventListener("click", () => {
    setMenu(false);
});

// Cerrar el menú al seleccionar un enlace
siteMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        setMenu(false);
    });
});

// Cerrar el menú al pulsar Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenu(false);
    }
});

// Cambiar entre tema oscuro y claro
themeToggle?.setAttribute("aria-pressed", String(
    document.body.classList.contains("light-theme")
));

themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const lightMode = document.body.classList.contains("light-theme");

    themeToggle.setAttribute("aria-pressed", String(lightMode));
    themeToggle.setAttribute(
        "aria-label",
        lightMode ? "Activar tema oscuro" : "Activar tema claro"
    );
    themeToggle.setAttribute(
        "title",
        lightMode ? "Activar tema oscuro" : "Activar tema claro"
    );
});

// Actualizar automáticamente el año del pie de página
const year = document.querySelector("#current-year");

if (year) {
    year.textContent = new Date().getFullYear();
}
