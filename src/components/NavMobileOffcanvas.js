import React from 'react'

const NavOffCanvas = (props) => {
    return(
        <>
{/* offcanvas menu */}
<div id="offcanvas" className="uk-offcanvas">
  <div className="uk-offcanvas-bar uk-offcanvas-bar-flip">
    <ul className="uk-nav uk-nav-parent-icon uk-nav-offcanvas" data-uk-nav>
      {/* Home menu */}
      <li className="uk-parent uk-active"><a href="index.html">Home</a>
        <ul className="uk-nav-sub">
          <li><a href="index.html">Default Layout</a></li>
          <li><a href="full-slider-layout.html">Full Slider Layout</a></li>
          <li><a href="one-page-layout.html">One Page Layout</a></li>
          <li><a href="boxed-layout.html">Boxed Layout</a></li>
          <li><a href="video-layout.html">Video Layout</a></li>
        </ul>
      </li>
      {/* Theme menu */}
      <li className="uk-parent"><a href="#">Theme</a>
        <ul className="uk-nav-sub">
          <li><a href="module-layouts.html">Module Layouts</a></li>
          <li className="uk-parent"><a href="#">Page Layouts</a>
            <ul>
              <li><a href="full-content.html">Full Content</a></li>
              <li><a href="left-content.html">Left + Content</a></li>
              <li><a href="content-right.html">Content + Right</a></li>
              <li><a href="left-content-right.html">Left + Content + Right</a></li>
              <li><a href="content-left-right.html">Content + Left + Right</a></li>
              <li><a href="left-right-content.html">Left + Right + Content</a></li>
            </ul>
          </li>
          <li><a href="uikit-elements.html">UIkit Elements</a></li>
          <li><a href="color-styles.html">Color styles</a></li>
          <li><a href="rtl-language-support.html">RTL Language Support</a></li>
        </ul>
      </li>
      {/* Menu menu */}
      <li className="uk-parent"><a href="menu.html"><i className="uk-icon-cutlery" /> Menu</a>
        <ul className="uk-nav-sub">
          <li><a href="menu.html">Classic menu</a></li>
          <li><a href="modern-menu.html">Modern menu</a></li>
        </ul>
      </li>
      {/* Events menu */}
      <li><a href="events.html">Events</a></li>
      {/* Elements menu */}
      <li className="uk-parent"><a href="#">Elements</a>
        <ul className="uk-nav-sub">
          <li><a href="elements-typography.html">Typography</a></li>
          <li><a href="elements-column-blocks.html">Column Blocks</a></li>
          <li><a href="elements-buttons.html">Buttons</a></li>
          <li><a href="elements-dropdowns.html">Dropdowns</a></li>
          <li><a href="elements-alerts.html">Alerts &amp; Badges</a></li>
          <li><a href="elements-panels.html">Panels</a></li>
          <li><a href="elements-accordion.html">Accordion &amp; Toggles</a></li>
          <li><a href="elements-tooltips.html">Tooltips</a></li>
          <li><a href="elements-progress.html">Progress Bar</a></li>
          <li><a href="elements-tabs.html">Tabs</a></li>
          <li><a href="elements-tables.html">Tables</a></li>
          <li><a href="elements-images.html">Images</a></li>
          <li><a href="elements-modal-box.html">Modal Box</a></li>
          <li><a href="elements-lightbox.html">Lightbox</a></li>
          <li><a href="elements-slideshow.html">Slideshow</a></li>
          <li><a href="elements-dynamic-grid.html">Dynamic Grid</a></li>
          <li><a href="elements-animation.html">Animation</a></li>
          <li><a href="elements-menus.html">Menus</a></li>
          <li><a href="elements-slider.html">Slider</a></li>
          <li><a href="elements-parallax.html">Parallax</a></li>
          <li><a href="elements-icons.html">Icons</a></li>
          <li><a href="elements-cards.html">Cards</a></li>            
        </ul>
      </li>
      {/* Pages menu */}
      <li className="uk-parent"><a href="#">Pages</a>
        <ul className="uk-nav-sub">
          <li><a href="about-us.html">About Us</a></li>
          <li><a href="our-staff.html">Our Staff</a></li>
          <li><a href="testimonials.html">Testimonials</a></li>
          <li><a href="our-pricing.html">Our pricing</a></li>
          <li className="uk-parent"><a href="#">Gallery</a>
            <ul>
              <li><a href="3-column-gallery.html">3 Column Gallery</a></li>
              <li><a href="4-column-gallery.html">4 Column Gallery</a></li>
              <li><a href="portfolio-category.html">Portfolio Category</a></li>
            </ul>
          </li>
          <li><a href="faqs.html">FAQs</a></li>
          <li><a href="404.html">404 Error page</a></li>
        </ul>
      </li>
      {/* Blog menu */}
      <li><a href="blog.html">Blog</a></li>
      {/* Contact us menu */}
      <li><a href="contact-us.html">Contact Us</a></li>
    </ul>
  </div>
</div>

        </>
    )
}

export default NavOffCanvas