import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <header class="tech-header header">
        <div class="container-fluid">
          <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="tech-index.html">
              <img src="images/version/tech-logo.png" alt="" />
            </a>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link" href="tech-index.html">
                    Home
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="tech-category-01.html">
                    Gadgets
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="tech-category-02.html">
                    Videos
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="tech-category-03.html">
                    Reviews
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="tech-contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
