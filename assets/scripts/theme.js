const root = document.documentElement;
const btn = document.getElementById('theme-toggle');

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const isDark = theme === 'dark';
    btn.textContent = isDark ? '☀' : '☾';
    btn.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    localStorage.setItem('theme', theme);
}

applyTheme(root.getAttribute('data-theme') || 'light');

btn.addEventListener('click', () => {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});
