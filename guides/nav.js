export default function (el) {
  el.insertAdjacentHTML('afterend', `<nav class="nav" role="navigation">
  <div class="wrap wrap-wide">
    <div class="nav-body">
      <h1>CORE Styleguide</h1>
      <button class="nav-button" aria-expanded="false" aria-controls="menu" data-role="menu-button">
        <span data-role="open" aria-hidden="true"><svg viewBox="0 0 38 23" xmlns="http://www.w3.org/2000/svg">
            <path d="m36.5 3h-35a1.5 1.5 0 0 1 0-3h35a1.5 1.5 0 0 1 0 3z" fill="#4a4a4a" />
            <path d="m36.5 23h-35a1.5 1.5 0 0 1 0-3h35a1.5 1.5 0 0 1 0 3z" fill="#4a4a4a" />
            <path d="m32.5 13h-28a1.5 1.5 0 0 1 0-3h28a1.5 1.5 0 0 1 0 3z" fill="#9f9f9f" /></svg></span>
        <span data-role="close" aria-hidden="true"><svg viewBox="0 0 27.75 27.75"
            xmlns="http://www.w3.org/2000/svg">
            <g fill="#4a4a4a">
              <path
                d="m26.25 27.75a1.49 1.49 0 0 1 -1.06-.44l-24.75-24.75a1.5 1.5 0 0 1 2.12-2.12l24.75 24.75a1.49 1.49 0 0 1 0 2.12 1.51 1.51 0 0 1 -1.06.44z" />
              <path
                d="m1.5 27.75a1.51 1.51 0 0 1 -1.06-.44 1.49 1.49 0 0 1 0-2.12l24.75-24.75a1.5 1.5 0 0 1 2.12 2.12l-24.75 24.75a1.51 1.51 0 0 1 -1.06.44z" />
            </g>
          </svg></span>
      </button>
      <div class="nav-items" id="menu" data-role="menu" aria-hidden="true">
        <ul>
          <li class="nav-item"><a class="nav-item-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-item-link" href="color.html">Colour</a></li>
          <li class="nav-item"><a class="nav-item-link" href="typography.html">Typography</a></li>
          <li class="nav-item"><a class="nav-item-link" href="spacing.html">Spacing</a></li>
          <li class="nav-item"><a class="nav-item-link" href="atoms.html">Atoms</a></li>
          <!-- <li class="nav-item"><a class="nav-item-link" href="#">Accessibility</a></li> -->
        </ul>
      </div>
    </div>
  </div>
</nav>
`)
}