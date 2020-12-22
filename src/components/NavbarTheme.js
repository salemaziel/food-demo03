import React from "react";

const NavbarTheme = (props) => {
  return (
    <>
      {/* main bar */}
      <div
        className="tm-navbar"
        data-uk-sticky
        style={{
          position: "sticky",
          /*top: "0px",*/
          right: "0",
          left: "0",
          zIndex: "5",
        }}
      >
        <nav className="tm-navbar-container uk-flex uk-flex-space-between uk-margin-large-right">
          {/* small logo */}
          <div className="tm-nav-logo-small">
            <a className="tm-logo-small" href="index.html">
              <img
                src="https://res.cloudinary.com/dexdumfqy/image/upload/v1608597423/viadelweb/logo-stuff/logo_c66qvi.png"
                width={70}
                height={65}
                alt="demo"
              />
            </a>
          </div>
          {/* main menu */}
          <div className="tm-nav uk-hidden-small">
            <ul className="uk-navbar-nav uk-hidden-small">
              {/* home menu  */}
              <li className="uk-parent uk-active" data-uk-dropdown>
                <a href="index.html">Home</a>
                <div className="uk-dropdown uk-dropdown-navbar uk-dropdown-width-1">
                  <div className="uk-grid uk-dropdown-grid">
                    <div className="uk-width-1-1">
                      <ul className="uk-nav uk-nav-navbar">
                        <li>
                          <a href="index.html">Default Layout</a>
                        </li>
                        <li>
                          <a href="full-slider-layout.html">
                            Full Slider Layout
                          </a>
                        </li>
                        <li>
                          <a href="one-page-layout.html">One Page Layout</a>
                        </li>
                        <li>
                          <a href="boxed-layout.html">Boxed Layout</a>
                        </li>
                        <li>
                          <a href="video-layout.html">Video Layout</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* features menu */}
              <li className="uk-parent" data-uk-dropdown>
                <a href="#">Theme</a>
                <div className="uk-dropdown uk-dropdown-navbar uk-dropdown-width-1">
                  <div className="uk-grid uk-dropdown-grid">
                    <div className="uk-width-1-1">
                      <ul className="uk-nav uk-nav-navbar">
                        <li>
                          <a href="module-layouts.html">Module Layouts</a>
                        </li>
                        <li className="uk-parent">
                          <a href="#">Page Layouts</a>
                          <ul className="uk-nav-sub">
                            <li>
                              <a href="full-content.html">Full Content</a>
                            </li>
                            <li>
                              <a href="left-content.html">Left + Content</a>
                            </li>
                            <li>
                              <a href="content-right.html">Content + Right</a>
                            </li>
                            <li>
                              <a href="left-content-right.html">
                                Left + Content + Right
                              </a>
                            </li>
                            <li>
                              <a href="content-left-right.html">
                                Content + Left + Right
                              </a>
                            </li>
                            <li>
                              <a href="left-right-content.html">
                                Left + Right + Content
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="uikit-elements.html">UIkit Elements</a>
                        </li>
                        <li>
                          <a href="color-styles.html">Color styles</a>
                        </li>
                        <li>
                          <a href="rtl-language-support.html">
                            RTL Language Support
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* menu menu  */}
              <li className="uk-parent" data-uk-dropdown>
                <a href="menu.html">
                  <i className="uk-icon-cutlery" />
                  Menu
                </a>
                <div className="uk-dropdown uk-dropdown-navbar uk-dropdown-width-1">
                  <div className="uk-grid uk-dropdown-grid">
                    <div className="uk-width-1-1">
                      <ul className="uk-nav uk-nav-navbar">
                        <li>
                          <a href="menu.html">Classic menu</a>
                        </li>
                        <li>
                          <a href="modern-menu.html">Modern menu</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* Events menu */}
              <li>
                <a href="events.html">Events</a>
              </li>
              {/* elements menu */}
              <li className="uk-parent" data-uk-dropdown>
                <a href="#">Elements</a>
                <div className="uk-dropdown uk-dropdown-navbar uk-dropdown-width-3">
                  <div className="uk-grid uk-dropdown-grid">
                    {/* first dropdown column */}
                    <div className="uk-width-1-3">
                      <ul className="uk-nav uk-nav-navbar">
                        <li>
                          <a href="elements-typography.html">Typography</a>
                        </li>
                        <li>
                          <a href="elements-column-blocks.html">
                            Column Blocks
                          </a>
                        </li>
                        <li>
                          <a href="elements-buttons.html">Buttons</a>
                        </li>
                        <li>
                          <a href="elements-dropdowns.html">Dropdowns</a>
                        </li>
                        <li>
                          <a href="elements-alerts.html">Alerts &amp; Badges</a>
                        </li>
                        <li>
                          <a href="elements-panels.html">Panels</a>
                        </li>
                        <li>
                          <a href="elements-accordion.html">
                            Accordion &amp; Toggles
                          </a>
                        </li>
                        <li>
                          <a href="elements-tooltips.html">Tooltips</a>
                        </li>
                      </ul>
                    </div>
                    {/* second dropdown column */}
                    <div className="uk-width-1-3">
                      <ul className="uk-nav uk-nav-navbar">
                        <li>
                          <a href="elements-progress.html">Progress Bar</a>
                        </li>
                        <li>
                          <a href="elements-tabs.html">Tabs</a>
                        </li>
                        <li>
                          <a href="elements-tables.html">Tables</a>
                        </li>
                        <li>
                          <a href="elements-images.html">Images</a>
                        </li>
                        <li>
                          <a href="elements-modal-box.html">Modal Box</a>
                        </li>
                        <li>
                          <a href="elements-lightbox.html">Lightbox</a>
                        </li>
                        <li>
                          <a href="elements-slideshow.html">Slideshow</a>
                        </li>
                        <li>
                          <a href="elements-dynamic-grid.html">Dynamic Grid</a>
                        </li>
                      </ul>
                    </div>
                    {/* third dropdown column */}
                    <div className="uk-width-1-3">
                      <ul className="uk-nav uk-nav-navbar">
                        <li>
                          <a href="elements-animation.html">Animation</a>
                        </li>
                        <li>
                          <a href="elements-menus.html">Menus</a>
                        </li>
                        <li>
                          <a href="elements-slider.html">Slider</a>
                        </li>
                        <li>
                          <a href="elements-parallax.html">Parallax</a>
                        </li>
                        <li>
                          <a href="elements-icons.html">Icons</a>
                        </li>
                        <li>
                          <a href="elements-cards.html">Cards</a>
                        </li>
                        <li>
                          <a href="elements-audio-video.html">Audio/Video</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* Pages menu */}
              <li className="uk-parent" data-uk-dropdown>
                <a href="#">Pages</a>
                <div className="uk-dropdown uk-dropdown-navbar uk-dropdown-width-1">
                  <div className="uk-grid uk-dropdown-grid">
                    <div className="uk-width-1-1">
                      <ul className="uk-nav uk-nav-navbar">
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="our-staff.html">Our Staff</a>
                        </li>
                        <li>
                          <a href="testimonials.html">Testimonials</a>
                        </li>
                        <li>
                          <a href="our-pricing.html">Our pricing</a>
                        </li>
                        <li className="uk-parent">
                          <a href="#">Gallery</a>
                          <ul className="uk-nav-sub">
                            <li>
                              <a href="3-column-gallery.html">
                                3 Column Gallery
                              </a>
                            </li>
                            <li>
                              <a href="4-column-gallery.html">
                                4 Column Gallery
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-category.html">
                                Portfolio Category
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="faqs.html">FAQs</a>
                        </li>
                        <li>
                          <a href="404.html">404 Error page</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* Blog menu */}
              <li>
                <a href="blog.html">Blog</a>
              </li>
              {/* Contact us menu */}
              <li>
                <a href="contact-us.html">Contact Us</a>
              </li>
            </ul>
          </div>
          {/* offcanvas nav icon */}
          <a
            href="#offcanvas"
            className="uk-navbar-toggle uk-visible-small"
            data-uk-offcanvas
          />
        </nav>
      </div>
    </>
  );
};

export default NavbarTheme;
