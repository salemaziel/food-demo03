import React from "react";

const ToTopScroller = () => (
  <>
    <div className="uk-sticky-placeholder">
      <div className="uk-sticky-placeholder" style={{ height: 0, margin: 0 }}>
        <div
          data-uk-smooth-scroll
          data-uk-sticky="{top:-500}"
          style={{ margin: 0 }}
        >
          <a className="tm-totop-scroller uk-animation-slide-bottom" href="#" />
        </div>
      </div>
    </div>
  </>
);

export default ToTopScroller;
