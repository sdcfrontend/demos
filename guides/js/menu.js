export default async function (root) {
  const button = document.querySelector('[data-role="menu-button"]');
  const menu = document.querySelector('[data-role="menu"]');

  button.onclick = function () {
    let open = this.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', !open);
    menu.setAttribute('aria-hidden', !!open);
  }
}
