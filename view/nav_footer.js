
var myNav = $("#nav_footer");

// Create a <style> element and add the CSS styles to it
const style = document.createElement('style');
style.innerHTML = `
.navigation ul {
  list-style: none; 
  padding: 0; 
}

.navigation ul li {
  width: 100%; 
  box-sizing: border-box; 
  align-items: center;
}

.invisible {
  left: -999px;
  overflow: hidden;
  position: absolute;
  top: -999px;
}

.align {
  display: grid;
  place-items: center;
}
:root {
  --body-background-color: #82a8ee;
  --body-color: #97adc6;
}

a {
  color: inherit;
  outline: 0;
}

.icons {
  display: none;
}

.icon {
  block-size: 1em;
  display: inline-block;
  fill: currentcolor;
  inline-size: 1em;
  vertical-align: middle;
}

.icon--2x {
  font-size: 2rem;
}

svg {
  max-inline-size: 100%;
}

:root {
  --navigation-background-color: #f0f6ff;
  --navigation-border-radius: 0.25em;

  --navigation-anchor-padding: 1.5em;
}

.navigation {
  background-color: var(--navigation-background-color);
  border-radius: var(--navigation-border-radius);
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.3);
}

.navigation ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.navigation a {
  display: block;
  padding: var(--navigation-anchor-padding);
  position: relative;
  text-decoration: none;
}

.navigation a:focus::after,
.navigation a:hover::after {
  opacity: 1;
}

.navigation a::after {
  block-size: 100%;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.3);
  content: '';
  inline-size: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity 0.3s;
}

.navigation--inline ul {
  display: flex;
}

@media screen and (min-width: 1024px) {
  .nav-foot-tab {
    display: none !important;
  }
}`;
document.head.appendChild(style);
// Create a <div> to hold the navigation HTML
const navigationContainer = document.createElement('div');
navigationContainer.innerHTML = `
<!-- nav -->
  <nav class="navigation navigation--inline fixed-bottom nav-foot-tab">
    <ul class="text-secondary">
      <li class="text-center">
        <a href="#">
          <svg class="icon icon--2x">
            <use xlink:href="#icon-home" />
          </svg>
          <span class="invisible">Home</span>
        </a>
      </li>
      <li class="text-center">
        <a href="#">
          <svg class="icon icon--2x">
            <use xlink:href="#icon-search" />
          </svg>
          <span class="invisible">Search</span>
        </a>
      </li>
      <li class="text-center">
        <a href="#">
          <svg class="icon icon--2x">
            <use xlink:href="#icon-cart" />
          </svg>
          <span class="invisible">Products</span>
        </a>
      </li>
      <li class="text-center">
        <a href="#">
          <svg class="icon icon--2x">
            <use xlink:href="#icon-bell" />
          </svg>
          <span class="invisible">Notifications</span>
        </a>
      </li>
      <li class="text-center">
        <a href="#">
          <svg class="icon icon--2x">
            <use xlink:href="#icon-user" />
          </svg>
          <span class="invisible">Profile</span>
        </a>
      </li>
    </ul>
  </nav>

  <svg xmlns="http://www.w3.org/2000/svg" class="icons">
    <symbol id="icon-bell" viewBox="0 0 92 92">
      <path d="M84 71.5c-6.7 0-9.3-3.9-9.3-28.4 0-19.2-8.7-31.2-23.7-33v-6.2c0-2.2-1.8-4-4-4s-4 1.8-4 4v6c-16 1.3-25.3 13.5-25.3 33.1 0 24.5-2.9 28.4-9.7 28.4-2.1.1-4 1.6-4 3.8 0 2.3 1.8 3.8 4 3.8h26c.3 3 1.2 6.7 3.6 9.3 2.1 2.3 4.9 3.6 8.2 3.6 3.3 0 6.1-1.4 8.2-3.6 2.5-2.7 3.5-6.3 3.9-9.3h26.1c2.2 0 4-1.5 4-3.8 0-2.2-1.8-3.7-4-3.7zm-35.8 11.4c-.4.4-1 1-2.4 1-1.3 0-1.9-.6-2.3-1-.7-.9-1.2-1.9-1.4-3.9h7.8999999999999995c-.4 2-.9 3-1.8 3.9zm-1.6-11.9h-24.8c3.7-7 3.7-17.9 3.7-28.1 0-16.3 7.1-24.9 19.9-24.9h1.1c12.8 0 19.9 8.6 19.9 24.9 0 10.2 0 21.1 3.7 28.1h-23.5zm14.2-35.5c.1 1.9-1.4 3.6-3.3 3.7h-.2c-1.8 0-3.4-1.4-3.5-3.3-.3-4.5-3.8-6.1-4.2-6.3-1.8-.8-2.6-2.8-1.9-4.6.7-1.8 2.7-2.6 4.5-1.9.4.2 8.1 3.4 8.6 12.4z" />
    </symbol>
    <symbol id="icon-cart" viewBox="0 0 92 92">
      <path d="M91.8 27.3l-10.7 33.7c-.8 2.4-2.9 4-5.4 4h-41.3c-2.4 0-4.7-1.5-5.5-3.7l-15.8-42.3h-9.1c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9c1.7 0 3.2 1.1 3.8 2.7l16.3 43.3h38l8.5-27h-47.1c-2.2 0-4-1.8-4-4s1.8-4 4-4h52.6c1.3 0 2.5.7 3.2 1.7.8 1 1 2.4.6 3.6zm-55.4 43c-1.7 0-3.4.7-4.6 1.9-1.2 1.2-1.9 2.9-1.9 4.6 0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zm35.9 0c-1.7 0-3.4.7-4.6 1.9s-1.9 2.9-1.9 4.6c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9z" />
    </symbol>
    <symbol id="icon-home" viewBox="0 0 92 92">
      <path d="M88 49c-1 0-2-.4-2.8-1.1l-39.2-38.3-39.2 38.3c-1.6 1.5-4.1 1.5-5.7-.1-1.5-1.6-1.5-4.1.1-5.7l42-41c1.6-1.5 4-1.5 5.6 0l42 41c1.6 1.5 1.6 4.1.1 5.7-.8.8-1.9 1.2-2.9 1.2zm-8.8 39v-39.1c0-2.2-1.8-4-4-4s-4 1.8-4 4v35.1h-12.5v-21.4c0-2.9-2.4-5.3-5.3-5.3h-14.8c-2.9 0-5.3 2.4-5.3 5.3v21.4h-12.5v-35.1c0-2.2-1.8-4-4-4s-4 1.8-4 4v39.1c0 2.2 1.8 4 4 4h20.5c2.2 0 4-1.8 4-4v-22.7h9.5v22.7c0 2.2 1.8 4 4 4h20.5c2.2 0 3.9-1.8 3.9-4z" />
    </symbol>
    <symbol id="icon-search" viewBox="0 0 92 92">
      <path d="M57.8 2.2c-17.1 0-31 14.1-31 31.3 0 7.3 2.5 13.9 6.6 19.3l-29.4 29.8c-1.7 1.8-1.7 4.6 0 6.3.9.9 2 1.3 3.1 1.3 1.2 0 2.3-.4 3.2-1.3l29.4-29.8c5.1 3.7 11.3 5.8 18 5.8 17.1 0 31-14.1 31-31.3s-13.8-31.4-30.9-31.4zm0 54.8c-12.7 0-23-10.5-23-23.4 0-12.9 10.3-23.4 23-23.4s23 10.5 23 23.4c0 12.9-10.3 23.4-23 23.4zm15.5-23c-.2 1.7-1.7 3-3.4 3h-.5c-1.9-.3-3.2-2-3-3.9.7-5.2-5.1-7.9-5.4-8-1.7-.8-2.5-2.9-1.7-4.6s2.8-2.5 4.6-1.8c.4.1 10.8 4.9 9.4 15.3zm-7.3 7.6c.7.7 1.2 1.8 1.2 2.8 0 1.1-.4 2.1-1.2 2.8-.7.7-1.8 1.2-2.8 1.2-1 0-2.1-.4-2.8-1.2-.7-.7-1.2-1.8-1.2-2.8 0-1 .4-2.1 1.2-2.8.7-.7 1.8-1.2 2.8-1.2 1 0 2 .4 2.8 1.2z" />
    </symbol>
    <symbol id="icon-user" viewBox="0 0 92 92">
      <path d="M46 57.1c14.8 0 26.9-12.1 26.9-27 0-15-12.1-27.1-26.9-27.1s-26.9 12.1-26.9 27c0 15 12.1 27.1 26.9 27.1zm0-46.1c10.4 0 18.9 8.5 18.9 19s-8.5 19-18.9 19-18.9-8.5-18.9-19 8.5-19 18.9-19zm12.5 48.7c-1.3-.4-2.8-.1-3.8.8l-8.7 7.4-8.7-7.4c-1.1-.9-2.5-1.2-3.8-.8-5.6 1.8-33.5 11.4-33.5 25.3 0 2.2 1.8 4 4 4h84c2.2 0 4-1.8 4-4 0-13.9-27.9-23.5-33.5-25.3zm-48.4 21.3c4.4-4.7 15-9.9 23.8-12.9l9.5 8.1c1.5 1.3 3.7 1.3 5.2 0l9.5-8.1c8.8 3.1 19.4 8.3 23.8 12.9h-71.8z" />
    </symbol>
  </svg>
  <!-- nav -->`;

// Append the navigation HTML to the document body
myNav.append(navigationContainer);
// document.body.appendChild(navigationContainer);
