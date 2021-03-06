import React from "react";
import GoToTop from "../../component/GoToTop";

export default function Footer() {
  return (
    <div>
      <footer>
        {/* Footer-top-widget */}
        <div className="container d-none d-lg-block mb-3">
          <div className="row">
            <div className="col-wd-3 col-lg-4">
              <div className="widget-column">
                <div className="border-bottom border-color-1 mb-5">
                  <h3 className="section-title section-title__sm mb-0 pb-2 font-size-18">
                    Featured Products
                  </h3>
                </div>
                <ul className="list-unstyled products-group">
                  <li className="product-item product-item__list row no-gutters mb-6 remove-divider">
                    <div className="col-auto">
                      <a
                        href="../shop/single-product-fullwidth.html"
                        className="d-block width-75 text-center"
                      >
                        <img
                          className="img-fluid"
                          src="img/75X75/img1.jpg"
                          alt="Image Description"
                        />
                      </a>
                    </div>
                    <div className="col pl-4 d-flex flex-column">
                      <h5 className="product-item__title mb-0">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="text-blue font-weight-bold"
                        >
                          Purple Wireless Headphones Solo 2 HD
                        </a>
                      </h5>
                      <div className="prodcut-price mt-auto">
                        <div className="font-size-15">$1149.00</div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item product-item__list row no-gutters mb-6 remove-divider">
                    <div className="col-auto">
                      <a
                        href="../shop/single-product-fullwidth.html"
                        className="d-block width-75 text-center"
                      >
                        <img
                          className="img-fluid"
                          src="img/75X75/img2.jpg"
                          alt="Image Description"
                        />
                      </a>
                    </div>
                    <div className="col pl-4 d-flex flex-column">
                      <h5 className="product-item__title mb-0">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="text-blue font-weight-bold"
                        >
                          Powerbank 1130 mAh Blue
                        </a>
                      </h5>
                      <div className="prodcut-price mt-auto">
                        <div className="font-size-15">$210.00</div>
                      </div>
                    </div>
                  </li>
                  <li className="product-item product-item__list row no-gutters mb-6 remove-divider">
                    <div className="col-auto">
                      <a
                        href="../shop/single-product-fullwidth.html"
                        className="d-block width-75 text-center"
                      >
                        <img
                          className="img-fluid"
                          src="img/75X75/img3.jpg"
                          alt="Image Description"
                        />
                      </a>
                    </div>
                    <div className="col pl-4 d-flex flex-column">
                      <h5 className="product-item__title mb-0">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="text-blue font-weight-bold"
                        >
                          Nerocool EN52377 Dead Silence Gaming Cube Case
                        </a>
                      </h5>
                      <div className="prodcut-price mt-auto">
                        <div className="font-size-15">$180.00</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-wd-3 col-lg-4">
              <div className="border-bottom border-color-1 mb-5">
                <h3 className="section-title section-title__sm mb-0 pb-2 font-size-18">
                  Onsale Products
                </h3>
              </div>
              <ul className="list-unstyled products-group">
                <li className="product-item product-item__list row no-gutters mb-6 remove-divider">
                  <div className="col-auto">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      className="d-block width-75 text-center"
                    >
                      <img
                        className="img-fluid"
                        src="img/75X75/img4.jpg"
                        alt="Image Description"
                      />
                    </a>
                  </div>
                  <div className="col pl-4 d-flex flex-column">
                    <h5 className="product-item__title mb-0">
                      <a
                        href="../shop/single-product-fullwidth.html"
                        className="text-blue font-weight-bold"
                      >
                        Yellow Earphones Waterproof with Bluetooth
                      </a>
                    </h5>
                    <div className="prodcut-price mt-auto flex-horizontal-center">
                      <ins className="font-size-15 text-decoration-none">
                        $110.00
                      </ins>
                      <del className="font-size-12 text-gray-9 ml-2">
                        $250.00
                      </del>
                    </div>
                  </div>
                </li>
                <li className="product-item product-item__list row no-gutters mb-6 remove-divider">
                  <div className="col-auto">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      className="d-block width-75 text-center"
                    >
                      <img
                        className="img-fluid"
                        src="img/75X75/img5.jpg"
                        alt="Image Description"
                      />
                    </a>
                  </div>
                  <div className="col pl-4 d-flex flex-column">
                    <h5 className="product-item__title mb-0">
                      <a
                        href="../shop/single-product-fullwidth.html"
                        className="text-blue font-weight-bold"
                      >
                        Camera C430W 4k Waterproof
                      </a>
                    </h5>
                    <div className="prodcut-price mt-auto flex-horizontal-center">
                      <ins className="font-size-15 text-decoration-none">
                        $899.00
                      </ins>
                      <del className="font-size-12 text-gray-9 ml-2">
                        $1200.00
                      </del>
                    </div>
                  </div>
                </li>
                <li className="product-item product-item__list row no-gutters mb-6 remove-divider">
                  <div className="col-auto">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      className="d-block width-75 text-center"
                    >
                      <img
                        className="img-fluid"
                        src="img/75X75/img6.jpg"
                        alt="Image Description"
                      />
                    </a>
                  </div>
                  <div className="col pl-4 d-flex flex-column">
                    <h5 className="product-item__title mb-0">
                      <a
                        href="../shop/single-product-fullwidth.html"
                        className="text-blue font-weight-bold"
                      >
                        Smartphone 6S 32GB LTE
                      </a>
                    </h5>
                    <div className="prodcut-price mt-auto flex-horizontal-center">
                      <ins className="font-size-15 text-decoration-none">
                        $2100.00
                      </ins>
                      <del className="font-size-12 text-gray-9 ml-2">
                        $3299.00
                      </del>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-wd-3 col-lg-4">
              <div className="border-bottom border-color-1 mb-5">
                <h3 className="section-title section-title__sm mb-0 pb-2 font-size-18">
                  Top Rated Products
                </h3>
              </div>
              <ul className="list-unstyled products-group">
                <li className="product-item product-item__list row no-gutters mb-6 remove-divider">
                  <div className="col-auto">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      className="d-block width-75 text-center"
                    >
                      <img
                        className="img-fluid"
                        src="img/75X75/img7.jpg"
                        alt="Image Description"
                      />
                    </a>
                  </div>
                  <div className="col pl-4 d-flex flex-column">
                    <h5 className="product-item__title mb-0">
                      <a
                        href="../shop/single-product-fullwidth.html"
                        className="text-blue font-weight-bold"
                      >
                        Smartwatch 2.0 LTE Wifi Waterproof
                      </a>
                    </h5>
                    <div className="text-warning mb-2">
                      <small className="fas fa-star" />
                      <small className="fas fa-star" />
                      <small className="fas fa-star" />
                      <small className="fas fa-star" />
                      <small className="fas fa-star" />
                    </div>
                    <div className="prodcut-price mt-auto">
                      <div className="font-size-15">$725.00</div>
                    </div>
                  </div>
                </li>
                <li className="product-item product-item__list row no-gutters mb-6 remove-divider">
                  <div className="col-auto">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      className="d-block width-75 text-center"
                    >
                      <img
                        className="img-fluid"
                        src="img/75X75/img8.jpg"
                        alt="Image Description"
                      />
                    </a>
                  </div>
                  <div className="col pl-4 d-flex flex-column">
                    <h5 className="product-item__title mb-0">
                      <a
                        href="../shop/single-product-fullwidth.html"
                        className="text-blue font-weight-bold"
                      >
                        22Mps Camera 6200U with 500GB SDcard
                      </a>
                    </h5>
                    <div className="text-warning mb-2">
                      <small className="fas fa-star" />
                      <small className="fas fa-star" />
                      <small className="fas fa-star" />
                      <small className="fas fa-star" />
                      <small className="far fa-star text-muted" />
                    </div>
                    <div className="prodcut-price mt-auto">
                      <div className="font-size-15">$2999.00</div>
                    </div>
                  </div>
                </li>
                <li className="product-item product-item__list row no-gutters mb-6 remove-divider">
                  <div className="col-auto">
                    <a
                      href="../shop/single-product-fullwidth.html"
                      className="d-block width-75 text-center"
                    >
                      <img
                        className="img-fluid"
                        src="img/75X75/img9.jpg"
                        alt="Image Description"
                      />
                    </a>
                  </div>
                  <div className="col pl-4 d-flex flex-column">
                    <h5 className="product-item__title mb-0">
                      <a
                        href="../shop/single-product-fullwidth.html"
                        className="text-blue font-weight-bold"
                      >
                        Full Color LaserJet Pro M452dn
                      </a>
                    </h5>
                    <div className="text-warning mb-2">
                      <small className="fas fa-star" />
                      <small className="fas fa-star" />
                      <small className="fas fa-star" />
                      <small className="fas fa-star" />
                      <small className="far fa-star text-muted" />
                    </div>
                    <div className="prodcut-price mt-auto">
                      <div className="font-size-15">$439.00</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-wd-3 d-none d-wd-block">
              <a href="../shop/shop.html" className="d-block">
                <img
                  className="img-fluid"
                  src="img/330X360/img1.jpg"
                  alt="Image Description"
                />
              </a>
            </div>
          </div>
        </div>
        {/* End Footer-top-widget */}
        {/* Footer-newsletter */}
        <div className="bg-primary py-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-md-3 mb-lg-0">
                <div className="row align-items-center">
                  <div className="col-auto flex-horizontal-center">
                    <i className="ec ec-newsletter font-size-40" />
                    <h2 className="font-size-20 mb-0 ml-3">
                      Sign up to Newsletter
                    </h2>
                  </div>
                  <div className="col my-4 my-md-0">
                    <h5 className="font-size-15 ml-4 mb-0">
                      ...and receive{" "}
                      <strong>$20 coupon for first shopping.</strong>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                {/* Subscribe Form */}
                <form className="js-validate js-form-message">
                  <label className="sr-only" htmlFor="subscribeSrEmail">
                    Email address
                  </label>
                  <div className="input-group input-group-pill">
                    <input
                      type="email"
                      className="form-control border-0 height-40"
                      name="email"
                      id="subscribeSrEmail"
                      placeholder="Email address"
                      aria-label="Email address"
                      aria-describedby="subscribeButton"
                      required
                      data-msg="Please enter a valid email address."
                    />
                    <div className="input-group-append">
                      <button
                        type="submit"
                        className="btn btn-dark btn-sm-wide height-40 py-2"
                        id="subscribeButton"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
                {/* End Subscribe Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End Footer-newsletter */}
        {/* Footer-bottom-widgets */}
        <div className="pt-8 pb-4 bg-gray-13">
          <div className="container mt-1">
            <div className="row">
              <div className="col-lg-5">
                <div className="mb-6">
                  <a href="#" className="d-inline-block">
                    <svg
                      version="1.1"
                      x="0px"
                      y="0px"
                      width="156px"
                      height="37px"
                      viewBox="0 0 175.748 42.52"
                      enableBackground="new 0 0 175.748 42.52"
                    >
                      <ellipse
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#FDD700"
                        cx="170.05"
                        cy="36.341"
                        rx="5.32"
                        ry="5.367"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#333E48"
                        d="M30.514,0.71c-0.034,0.003-0.066,0.008-0.056,0.056
                                  C30.263,0.995,29.876,1.181,29.79,1.5c-0.148,0.548,0,1.568,0,2.427v36.459c0.265,0.221,0.506,0.465,0.725,0.734h6.187
                                  c0.2-0.25,0.423-0.477,0.669-0.678V1.387C37.124,1.185,36.9,0.959,36.701,0.71H30.514z M117.517,12.731
                                  c-0.232-0.189-0.439-0.64-0.781-0.734c-0.754-0.209-2.039,0-3.121,0h-3.176V4.435c-0.232-0.189-0.439-0.639-0.781-0.733
                                  c-0.719-0.2-1.969,0-3.01,0h-3.01c-0.238,0.273-0.625,0.431-0.725,0.847c-0.203,0.852,0,2.399,0,3.725
                                  c0,1.393,0.045,2.748-0.055,3.725h-6.41c-0.184,0.237-0.629,0.434-0.725,0.791c-0.178,0.654,0,1.813,0,2.765v2.766
                                  c0.232,0.188,0.439,0.64,0.779,0.733c0.777,0.216,2.109,0,3.234,0c1.154,0,2.291-0.045,3.176,0.057v21.277
                                  c0.232,0.189,0.439,0.639,0.781,0.734c0.719,0.199,1.969,0,3.01,0h3.01c1.008-0.451,0.725-1.889,0.725-3.443
                                  c-0.002-6.164-0.047-12.867,0.055-18.625h6.299c0.182-0.236,0.627-0.434,0.725-0.79c0.176-0.653,0-1.813,0-2.765V12.731z
                                  M135.851,18.262c0.201-0.746,0-2.029,0-3.104v-3.104c-0.287-0.245-0.434-0.637-0.781-0.733c-0.824-0.229-1.992-0.044-2.898,0
                                  c-2.158,0.104-4.506,0.675-5.74,1.411c-0.146-0.362-0.451-0.853-0.893-0.96c-0.693-0.169-1.859,0-2.842,0h-2.842
                                  c-0.258,0.319-0.625,0.42-0.725,0.79c-0.223,0.82,0,2.338,0,3.443c0,8.109-0.002,16.635,0,24.381
                                  c0.232,0.189,0.439,0.639,0.779,0.734c0.707,0.195,1.93,0,2.955,0h3.01c0.918-0.463,0.725-1.352,0.725-2.822V36.21
                                  c-0.002-3.902-0.242-9.117,0-12.473c0.297-4.142,3.836-4.877,8.527-4.686C135.312,18.816,135.757,18.606,135.851,18.262z
                                  M14.796,11.376c-5.472,0.262-9.443,3.178-11.76,7.056c-2.435,4.075-2.789,10.62-0.501,15.126c2.043,4.023,5.91,7.115,10.701,7.9
                                  c6.051,0.992,10.992-1.219,14.324-3.838c-0.687-1.1-1.419-2.664-2.118-3.951c-0.398-0.734-0.652-1.486-1.616-1.467
                                  c-1.942,0.787-4.272,2.262-7.134,2.145c-3.791-0.154-6.659-1.842-7.524-4.91h19.452c0.146-2.793,0.22-5.338-0.279-7.563
                                  C26.961,15.728,22.503,11.008,14.796,11.376z M9,23.284c0.921-2.508,3.033-4.514,6.298-4.627c3.083-0.107,4.994,1.976,5.685,4.627
                                  C17.119,23.38,12.865,23.38,9,23.284z M52.418,11.376c-5.551,0.266-9.395,3.142-11.76,7.056
                                  c-2.476,4.097-2.829,10.493-0.557,15.069c1.997,4.021,5.895,7.156,10.646,7.957c6.068,1.023,11-1.227,14.379-3.781
                                  c-0.479-0.896-0.875-1.742-1.393-2.709c-0.312-0.582-1.024-2.234-1.561-2.539c-0.912-0.52-1.428,0.135-2.23,0.508
                                  c-0.564,0.262-1.223,0.523-1.672,0.676c-4.768,1.621-10.372,0.268-11.537-4.176h19.451c0.668-5.443-0.419-9.953-2.73-13.037
                                  C61.197,13.388,57.774,11.12,52.418,11.376z M46.622,23.343c0.708-2.553,3.161-4.578,6.242-4.686
                                  c3.08-0.107,5.08,1.953,5.686,4.686H46.622z M160.371,15.497c-2.455-2.453-6.143-4.291-10.869-4.064
                                  c-2.268,0.109-4.297,0.65-6.02,1.524c-1.719,0.873-3.092,1.957-4.234,3.217c-2.287,2.519-4.164,6.004-3.902,11.007
                                  c0.248,4.736,1.979,7.813,4.627,10.326c2.568,2.439,6.148,4.254,10.867,4.064c4.457-0.18,7.889-2.115,10.199-4.684
                                  c2.469-2.746,4.012-5.971,3.959-11.063C164.949,21.134,162.732,17.854,160.371,15.497z M149.558,33.952
                                  c-3.246-0.221-5.701-2.615-6.41-5.418c-0.174-0.689-0.26-1.25-0.4-2.166c-0.035-0.234,0.072-0.523-0.045-0.77
                                  c0.682-3.698,2.912-6.257,6.799-6.547c2.543-0.189,4.258,0.735,5.52,1.863c1.322,1.182,2.303,2.715,2.451,4.967
                                  C157.789,30.669,154.185,34.267,149.558,33.952z M88.812,29.55c-1.232,2.363-2.9,4.307-6.13,4.402
                                  c-4.729,0.141-8.038-3.16-8.025-7.563c0.004-1.412,0.324-2.65,0.947-3.726c1.197-2.061,3.507-3.688,6.633-3.612
                                  c3.222,0.079,4.966,1.708,6.632,3.668c1.328-1.059,2.529-1.948,3.9-2.99c0.416-0.315,1.076-0.688,1.227-1.072
                                  c0.404-1.031-0.365-1.502-0.891-2.088c-2.543-2.835-6.66-5.377-11.704-5.137c-6.02,0.288-10.218,3.697-12.484,7.846
                                  c-1.293,2.365-1.951,5.158-1.729,8.408c0.209,3.053,1.191,5.496,2.619,7.508c2.842,4.004,7.385,6.973,13.656,6.377
                                  c5.976-0.568,9.574-3.936,11.816-8.354c-0.141-0.271-0.221-0.604-0.336-0.902C92.929,31.364,90.843,30.485,88.812,29.55z"
                      ></path>
                    </svg>
                  </a>
                </div>
                <div className="mb-4">
                  <div className="row no-gutters">
                    <div className="col-auto">
                      <i className="ec ec-support text-primary font-size-56" />
                    </div>
                    <div className="col pl-3">
                      <div className="font-size-13 font-weight-light">
                        Got questions? Call us 24/7!
                      </div>
                      <a
                        href="tel:+80080018588"
                        className="font-size-20 text-gray-90"
                      >
                        (800) 8001-8588,{" "}
                      </a>
                      <a
                        href="tel:+0600874548"
                        className="font-size-20 text-gray-90"
                      >
                        (0600) 874 548
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <h6 className="mb-1 font-weight-bold">Contact info</h6>
                  <address className>
                    17 Princess Road, London, Greater London NW1 8JR, UK
                  </address>
                </div>
                <div className="my-4 my-md-4">
                  <ul className="list-inline mb-0 opacity-7">
                    <li className="list-inline-item mr-0">
                      <a
                        className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle"
                        href="#"
                      >
                        <span className="fab fa-facebook-f btn-icon__inner" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a
                        className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle"
                        href="#"
                      >
                        <span className="fab fa-google btn-icon__inner" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a
                        className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle"
                        href="#"
                      >
                        <span className="fab fa-twitter btn-icon__inner" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a
                        className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle"
                        href="#"
                      >
                        <span className="fab fa-github btn-icon__inner" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-12 col-md mb-4 mb-md-0">
                    <h6 className="mb-3 font-weight-bold">Find it Fast</h6>
                    {/* List Group */}
                    <ul className="list-group list-group-flush list-group-borderless mb-0 list-group-transparent">
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../shop/product-categories-5-column-sidebar.html"
                        >
                          Laptops &amp; Computers
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../shop/product-categories-5-column-sidebar.html"
                        >
                          Cameras &amp; Photography
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../shop/product-categories-5-column-sidebar.html"
                        >
                          Smart Phones &amp; Tablets
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../shop/product-categories-5-column-sidebar.html"
                        >
                          Video Games &amp; Consoles
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../shop/product-categories-5-column-sidebar.html"
                        >
                          TV &amp; Audio
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../shop/product-categories-5-column-sidebar.html"
                        >
                          Gadgets
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../shop/product-categories-5-column-sidebar.html"
                        >
                          Car Electronic &amp; GPS
                        </a>
                      </li>
                    </ul>
                    {/* End List Group */}
                  </div>
                  <div className="col-12 col-md mb-4 mb-md-0">
                    {/* List Group */}
                    <ul className="list-group list-group-flush list-group-borderless mb-0 list-group-transparent mt-md-6">
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../shop/product-categories-5-column-sidebar.html"
                        >
                          Printers &amp; Ink
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../shop/product-categories-5-column-sidebar.html"
                        >
                          Software
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../shop/product-categories-5-column-sidebar.html"
                        >
                          Office Supplies
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../shop/product-categories-5-column-sidebar.html"
                        >
                          Computer Components
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../shop/product-categories-5-column-sidebar.html"
                        >
                          Accesories
                        </a>
                      </li>
                    </ul>
                    {/* End List Group */}
                  </div>
                  <div className="col-12 col-md mb-4 mb-md-0">
                    <h6 className="mb-3 font-weight-bold">Customer Care</h6>
                    {/* List Group */}
                    <ul className="list-group list-group-flush list-group-borderless mb-0 list-group-transparent">
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../shop/my-account.html"
                        >
                          My Account
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../shop/track-your-order.html"
                        >
                          Order Tracking
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../shop/wishlist.html"
                        >
                          Wish List
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../home/terms-and-conditions.html"
                        >
                          Customer Service
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../home/terms-and-conditions.html"
                        >
                          Returns / Exchange
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../home/faq.html"
                        >
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a
                          className="list-group-item list-group-item-action"
                          href="../home/terms-and-conditions.html"
                        >
                          Product Support
                        </a>
                      </li>
                    </ul>
                    {/* End List Group */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer-bottom-widgets */}
        {/* Footer-copy-right */}
        <div className="bg-gray-14 py-2">
          <div className="container">
            <div className="flex-center-between d-block d-md-flex">
              <div className="mb-3 mb-md-0">
                ©{" "}
                <a href="#" className="font-weight-bold text-gray-90">
                  Electro
                </a>{" "}
                - All rights Reserved
              </div>
              <div className="text-md-right">
                <span className="d-inline-block bg-white border rounded p-1">
                  <img
                    className="max-width-5"
                    src="img/100X60/img1.jpg"
                    alt="Image Description"
                  />
                </span>
                <span className="d-inline-block bg-white border rounded p-1">
                  <img
                    className="max-width-5"
                    src="img/100X60/img2.jpg"
                    alt="Image Description"
                  />
                </span>
                <span className="d-inline-block bg-white border rounded p-1">
                  <img
                    className="max-width-5"
                    src="img/100X60/img3.jpg"
                    alt="Image Description"
                  />
                </span>
                <span className="d-inline-block bg-white border rounded p-1">
                  <img
                    className="max-width-5"
                    src="img/100X60/img4.jpg"
                    alt="Image Description"
                  />
                </span>
                <span className="d-inline-block bg-white border rounded p-1">
                  <img
                    className="max-width-5"
                    src="img/100X60/img5.jpg"
                    alt="Image Description"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer-copy-right */}
      </footer>
      {/* ========== END FOOTER ========== */}
      {/* ========== SECONDARY CONTENTS ========== */}
      {/* Account Sidebar Navigation */}
      <aside
        id="sidebarContent"
        className="u-sidebar u-sidebar__lg"
        aria-labelledby="sidebarNavToggler"
      >
        <div className="u-sidebar__scroller">
          <div className="u-sidebar__container">
            <div className="js-scrollbar u-header-sidebar__footer-offset pb-3">
              {/* Toggle Button */}
              <div className="d-flex align-items-center pt-4 px-7">
                <button
                  type="button"
                  className="close ml-auto"
                  aria-controls="sidebarContent"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-unfold-event="click"
                  data-unfold-hide-on-scroll="false"
                  data-unfold-target="#sidebarContent"
                  data-unfold-type="css-animation"
                  data-unfold-animation-in="fadeInRight"
                  data-unfold-animation-out="fadeOutRight"
                  data-unfold-duration={500}
                >
                  <i className="ec ec-close-remove" />
                </button>
              </div>
              {/* End Toggle Button */}
              {/* Content */}
              <div className="js-scrollbar u-sidebar__body">
                <div className="u-sidebar__content u-header-sidebar__content">
                  <form className="js-validate">
                    {/* Login */}
                    <div id="login" data-target-group="idForm">
                      {/* Title */}
                      <header className="text-center mb-7">
                        <h2 className="h4 mb-0">Welcome Back!</h2>
                        <p>Login to manage your account.</p>
                      </header>
                      {/* End Title */}
                      {/* Form Group */}
                      <div className="form-group">
                        <div className="js-form-message js-focus-state">
                          <label className="sr-only" htmlFor="signinEmail">
                            Email
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="signinEmailLabel"
                              >
                                <span className="fas fa-user" />
                              </span>
                            </div>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="signinEmail"
                              placeholder="Email"
                              aria-label="Email"
                              aria-describedby="signinEmailLabel"
                              required
                              data-msg="Please enter a valid email address."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Form Group */}
                      {/* Form Group */}
                      <div className="form-group">
                        <div className="js-form-message js-focus-state">
                          <label className="sr-only" htmlFor="signinPassword">
                            Password
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="signinPasswordLabel"
                              >
                                <span className="fas fa-lock" />
                              </span>
                            </div>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              id="signinPassword"
                              placeholder="Password"
                              aria-label="Password"
                              aria-describedby="signinPasswordLabel"
                              required
                              data-msg="Your password is invalid. Please try again."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Form Group */}
                      <div className="d-flex justify-content-end mb-4">
                        <a
                          className="js-animation-link small link-muted"
                          href="javascript:;"
                          data-target="#forgotPassword"
                          data-link-group="idForm"
                          data-animation-in="slideInUp"
                        >
                          Forgot Password?
                        </a>
                      </div>
                      <div className="mb-2">
                        <button
                          type="submit"
                          className="btn btn-block btn-sm btn-primary transition-3d-hover"
                        >
                          Login
                        </button>
                      </div>
                      <div className="text-center mb-4">
                        <span className="small text-muted">
                          Do not have an account?
                        </span>
                        <a
                          className="js-animation-link small text-dark"
                          href="javascript:;"
                          data-target="#signup"
                          data-link-group="idForm"
                          data-animation-in="slideInUp"
                        >
                          Signup
                        </a>
                      </div>
                      <div className="text-center">
                        <span className="u-divider u-divider--xs u-divider--text mb-4">
                          OR
                        </span>
                      </div>
                      {/* Login Buttons */}
                      <div className="d-flex">
                        <a
                          className="btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1"
                          href="#"
                        >
                          <span className="fab fa-facebook-square mr-1" />
                          Facebook
                        </a>
                        <a
                          className="btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0"
                          href="#"
                        >
                          <span className="fab fa-google mr-1" />
                          Google
                        </a>
                      </div>
                      {/* End Login Buttons */}
                    </div>
                    {/* Signup */}
                    <div
                      id="signup"
                      style={{ display: "none", opacity: 0 }}
                      data-target-group="idForm"
                    >
                      {/* Title */}
                      <header className="text-center mb-7">
                        <h2 className="h4 mb-0">Welcome to Electro.</h2>
                        <p>Fill out the form to get started.</p>
                      </header>
                      {/* End Title */}
                      {/* Form Group */}
                      <div className="form-group">
                        <div className="js-form-message js-focus-state">
                          <label className="sr-only" htmlFor="signupEmail">
                            Email
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="signupEmailLabel"
                              >
                                <span className="fas fa-user" />
                              </span>
                            </div>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="signupEmail"
                              placeholder="Email"
                              aria-label="Email"
                              aria-describedby="signupEmailLabel"
                              required
                              data-msg="Please enter a valid email address."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Input */}
                      {/* Form Group */}
                      <div className="form-group">
                        <div className="js-form-message js-focus-state">
                          <label className="sr-only" htmlFor="signupPassword">
                            Password
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="signupPasswordLabel"
                              >
                                <span className="fas fa-lock" />
                              </span>
                            </div>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              id="signupPassword"
                              placeholder="Password"
                              aria-label="Password"
                              aria-describedby="signupPasswordLabel"
                              required
                              data-msg="Your password is invalid. Please try again."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Input */}
                      {/* Form Group */}
                      <div className="form-group">
                        <div className="js-form-message js-focus-state">
                          <label
                            className="sr-only"
                            htmlFor="signupConfirmPassword"
                          >
                            Confirm Password
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="signupConfirmPasswordLabel"
                              >
                                <span className="fas fa-key" />
                              </span>
                            </div>
                            <input
                              type="password"
                              className="form-control"
                              name="confirmPassword"
                              id="signupConfirmPassword"
                              placeholder="Confirm Password"
                              aria-label="Confirm Password"
                              aria-describedby="signupConfirmPasswordLabel"
                              required
                              data-msg="Password does not match the confirm password."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Input */}
                      <div className="mb-2">
                        <button
                          type="submit"
                          className="btn btn-block btn-sm btn-primary transition-3d-hover"
                        >
                          Get Started
                        </button>
                      </div>
                      <div className="text-center mb-4">
                        <span className="small text-muted">
                          Already have an account?
                        </span>
                        <a
                          className="js-animation-link small text-dark"
                          href="javascript:;"
                          data-target="#login"
                          data-link-group="idForm"
                          data-animation-in="slideInUp"
                        >
                          Login
                        </a>
                      </div>
                      <div className="text-center">
                        <span className="u-divider u-divider--xs u-divider--text mb-4">
                          OR
                        </span>
                      </div>
                      {/* Login Buttons */}
                      <div className="d-flex">
                        <a
                          className="btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1"
                          href="#"
                        >
                          <span className="fab fa-facebook-square mr-1" />
                          Facebook
                        </a>
                        <a
                          className="btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0"
                          href="#"
                        >
                          <span className="fab fa-google mr-1" />
                          Google
                        </a>
                      </div>
                      {/* End Login Buttons */}
                    </div>
                    {/* End Signup */}
                    {/* Forgot Password */}
                    <div
                      id="forgotPassword"
                      style={{ display: "none", opacity: 0 }}
                      data-target-group="idForm"
                    >
                      {/* Title */}
                      <header className="text-center mb-7">
                        <h2 className="h4 mb-0">Recover Password.</h2>
                        <p>
                          Enter your email address and an email with
                          instructions will be sent to you.
                        </p>
                      </header>
                      {/* End Title */}
                      {/* Form Group */}
                      <div className="form-group">
                        <div className="js-form-message js-focus-state">
                          <label className="sr-only" htmlFor="recoverEmail">
                            Your email
                          </label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span
                                className="input-group-text"
                                id="recoverEmailLabel"
                              >
                                <span className="fas fa-user" />
                              </span>
                            </div>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="recoverEmail"
                              placeholder="Your email"
                              aria-label="Your email"
                              aria-describedby="recoverEmailLabel"
                              required
                              data-msg="Please enter a valid email address."
                              data-error-class="u-has-error"
                              data-success-class="u-has-success"
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Form Group */}
                      <div className="mb-2">
                        <button
                          type="submit"
                          className="btn btn-block btn-sm btn-primary transition-3d-hover"
                        >
                          Recover Password
                        </button>
                      </div>
                      <div className="text-center mb-4">
                        <span className="small text-muted">
                          Remember your password?
                        </span>
                        <a
                          className="js-animation-link small"
                          href="javascript:;"
                          data-target="#login"
                          data-link-group="idForm"
                          data-animation-in="slideInUp"
                        >
                          Login
                        </a>
                      </div>
                    </div>
                    {/* End Forgot Password */}
                  </form>
                </div>
              </div>
              {/* End Content */}
            </div>
          </div>
        </div>
      </aside>
      {/* End Account Sidebar Navigation */}
      {/* ========== END SECONDARY CONTENTS ========== */}
      {/* Go to Top */}
      <GoToTop />
      {/* End Go to Top */}
    </div>
  );
}
