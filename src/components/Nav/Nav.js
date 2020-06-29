import React, { Component } from "react";
import "./Nav.css";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { mnuShow: false };
    this.closeMnu = this.closeMnu.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", () => {
      this.closeMnu();
    });

    Events.scrollEvent.register("end", function () {});
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  toggleShow() {
    this.setState({ mnuShow: !this.state.mnuShow });
  }

  closeMnu() {
    if (this.state.mnuShow) {
      this.setState({ mnuShow: false });
    }
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${this.props.navBarShrink}`}
        id="mainNav"
      >
        <div className="container">
          <a
            onClick={this.scrollToTop.bind(this)}
            className="navbar-brand js-scroll-trigger"
            href="#page-top"
          >
            Nathan Blanchard
          </a>
          <button
            onClick={this.toggleShow.bind(this)}
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >&#9776;</button>
          {this.state.mnuShow ? (
            <div className="drop" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="nav-link js-scroll-trigger"
                    to="projects"
                    spy={true}
                    smooth="easeInOutQuart"
                    duration={1000}
                  >
                    Web Development
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="nav-link js-scroll-trigger"
                    to="writing"
                    spy={true}
                    smooth="easeInOutQuart"
                    duration={1000}
                  >
                    Writing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="nav-link js-scroll-trigger"
                    to="teaching"
                    spy={true}
                    smooth="easeInOutQuart"
                    duration={1000}
                  >
                    Teaching
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="nav-link js-scroll-trigger"
                    to="contact"
                    spy={true}
                    smooth="easeInOutQuart"
                    duration={1000}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </nav>
    );
  }
}
export default Nav;
