(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\r\n    background-image: url('https://www.google.com/search?q=nature+pictures&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi6sbGY4abiAhVwh-AKHWQqBEkQ_AUIDigB&biw=1536&bih=706#imgrc=nYJQfRu5GDnPfM:')\r\n}\r\n#sideNav{\r\n    text-align: center;\r\n    position: fixed;\r\n    padding-top: 8em;\r\n    /* top: 0;\r\n    left: 0; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 25%;\r\n    height: 100vh;\r\n}\r\n.para{\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n  \r\n}\r\n.navbar-collapse{\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n.bg-primary {\r\n    background-color: #5038bd!important;\r\n}\r\n.img-profile{\r\n    height:8em;\r\n    width:8em;\r\n    border-radius:50%;\r\n}\r\n.scroll-link{\r\n    color:white;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjtjQUNVO0lBR1YsYUFBYTtJQUliLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUlJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3d3dy5nb29nbGUuY29tL3NlYXJjaD9xPW5hdHVyZStwaWN0dXJlcyZzb3VyY2U9bG5tcyZ0Ym09aXNjaCZzYT1YJnZlZD0wYWhVS0V3aTZzYkdZNGFiaUFoVndoLUFLSFdRcUJFa1FfQVVJRGlnQiZiaXc9MTUzNiZiaWg9NzA2I2ltZ3JjPW5ZSlFmUnU1R0RuUGZNOicpXHJcbn1cclxuI3NpZGVOYXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBwYWRkaW5nLXRvcDogOGVtO1xyXG4gICAgLyogdG9wOiAwO1xyXG4gICAgbGVmdDogMDsgKi9cclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLnBhcmF7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIFxyXG59XHJcbi5uYXZiYXItY29sbGFwc2V7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYmctcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTAzOGJkIWltcG9ydGFudDtcclxufVxyXG4uaW1nLXByb2ZpbGV7XHJcbiAgICBoZWlnaHQ6OGVtO1xyXG4gICAgd2lkdGg6OGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbn1cclxuLnNjcm9sbC1saW5re1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<!-- <app-header></app-header> -->\r\n<div class=\"fluid-container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\" id=\"sideNav\">\r\n        <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">\r\n          <span>Nithish Peddi</span>\r\n          <span class=\"d-none d-lg-block\">\r\n            <img class=\"img-fluid img-profile\" src=\"../assets/images/profile1.jpg\" alt=\"\">\r\n          </span>\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav flex-column\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link scroll-link\" href=\"#about\">About</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link scroll-link\" href=\"#experience\">Experience</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link scroll-link\" href=\"#education\">Education</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link scroll-link\" target=\"_blank\" href=\"https://nithishwebtech.blogspot.com/\">Blog Post</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link scroll-link\" href=\"#interests\">Interests</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link scroll-link\" href=\"#contacts\">Contacts</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n    <div class=\"col-md-9\">\r\n      <main class=\"main-container\">\r\n        <div class=\"container-fluid p-0 back-imag\">\r\n          <section class=\"resume-section back-imag p-3 p-lg-5 d-flex align-items-center\" id=\"about\">\r\n            <div class=\"w-100\" id=\"about\">\r\n              <h4 class=\"Intro\">Introduction:</h4>\r\n              <p class=\"para\">Hi... I'm <b>Nithish Peddi</b>. I am from India.\r\n                I spent most of my childhood experiencing the growth in internet and technology. The curiosity to learn\r\n                new technologies made me complete my under-graduation in\r\n                Computer Science.\r\n                My dream to become a software engineer and to contribute to the real time world by learning advanced\r\n                technologies made me get a Masters degree in\r\n                computer science in the United States.\r\n              </p>\r\n\r\n              <p class=\"para\"> <br>\r\n                Experienced and motivated web developer with 3 plus years of working experience in different domains.\r\n                Enthusiastic to learn new technologies and get updated with dynamic client side frameworks and\r\n                libraries. I\r\n                Deliver Responsive, compatible ,\r\n                secured user interface along with W3C standards, ADA compliance to provide intuitive, consistent user\r\n                interface.</p>\r\n\r\n            </div>\r\n          </section>\r\n\r\n          <hr class=\"m-0\">\r\n\r\n          <section class=\"resume-section p-3 p-lg-5 d-flex justify-content-center\" id=\"experience\">\r\n            <div class=\"w-100\">\r\n              <h4 class=\"mb-5\">Experience</h4>\r\n\r\n              <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\r\n                <div class=\"resume-content\">\r\n                  <h5 class=\"mb-0\">Web Developer</h5>\r\n                  <div class=\"subheading mb-3\">CVS Health</div>\r\n                  <ul style=\"list-style-type: none\">\r\n                    <li>\r\n                      <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Worked on Design and Development of\r\n                      Angular 5 Single Page Applications (Health Domain) using Agile\r\n                      methodology.<br>\r\n                    </li>\r\n                    <li><i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Implemented the Central Login\r\n                      Authentication and Authorization for multiple applications having\r\n                      common landing page.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Worked on Implementation of OAuth\r\n                      2.0 Token based SSO(Single Sign On).<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Used MVC design patterns in\r\n                      implementing web applications.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Developed reusable\r\n                      components/libraries to be hosted in private repository within CVS health network.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Used TFS (Team Foundation Server)\r\n                      to track the user stories and defects.<br></li>\r\n                    <li><i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Used Jenkins and PCF cloud for\r\n                      maintenance, continues Integration and deployment.<br></li>\r\n                    <li><i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Used the Ng2Smart table for the\r\n                      users to see the large vliume of data with Pagination, Sorting,\r\n                      Filtering\r\n                      and Searching.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Implemented socket programming\r\n                      using stomp js library for pill/drug image verification.<br></li>\r\n                    <li><i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Integrated the data from various\r\n                      back-end services like TIBCO, Java and external application.<br></li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"resume-date text-md-right\">\r\n                  <span class=\"text-primary\">Nov 2017 - Present</span>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\r\n                <div class=\"resume-content\">\r\n                  <h5 class=\"mb-0\">Web Developer</h5>\r\n                  <div class=\"subheading mb-3\">Microsoft</div>\r\n                  <ul style=\"list-style-type: none\">\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Worked with UX Design teams for\r\n                      prototyping UI deliverable, such as wire-frames, flowcharts,\r\n                      screen mock-ups, and interface design specifications.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Used identity providers for login,\r\n                      that will be authenticated via Azure Active Directory\r\n                      (policies) and authorized via Users Security Group.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Application is build to display the\r\n                      devices complex data showing hierarchy of data with\r\n                      multiple cascading accordions.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Have given role based access to the\r\n                      users to view, edit and delete the devices information.</li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Implemented Angular 2 concepts-\r\n                      lazy loading, dependency injection , single responsibility,\r\n                      routing , Interpolation etc..<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Used Karma for Unit testing and\r\n                      Jasmine framework to enhance the test script.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Worked with AZURE cloud platforms\r\n                      for configuring , deployments and maintenance.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Used Bulma light weight framework\r\n                      to achieve 100% responsiveness.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Used Reactive Extensions (Rxjs) for\r\n                      asynchronous data streams with Observable.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Used Web pack 3 build tool , which\r\n                      improves performance of the application.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Worked on web storage such as\r\n                      Session Storage and Local Storage.</li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"resume-date text-md-right\">\r\n                  <span class=\"text-primary\">May 2017 - Oct 2017</span>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\r\n                <div class=\"resume-content\">\r\n                  <h5 class=\"mb-0\">Software Engineer Intern</h5>\r\n                  <div class=\"subheading mb-3\">Positronic IO</div>\r\n                  <ul>\r\n                    <li><i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Used Bootstrap 3 library to quickly\r\n                      build project UI and AngularJS framework to associate\r\n                      HTML elements to models.<br></li>\r\n                    <li><i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Worked with QA team on daily basis\r\n                      in fixing the reported bugs/defects and checking cross\r\n                      platform compatibility.<br></li>\r\n                    <li><i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Successfully performed the RESTful\r\n                      API’s Integration using JSON.<br></li>\r\n                    <li><i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Developed custom directive factories\r\n                      and services in Angular JS.<br></li>\r\n                    <li><i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Generated reports that summarized\r\n                      the network flow, performance, service time and crash\r\n                      reports of the websites.<br></li>\r\n                    <li><i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Worked on debugging JavaScript and\r\n                      html code with Firefox, Chrome and IE.<br></li>\r\n                    <li><i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Implemented OAuth 2.0 authentication\r\n                      using Google API client library.<br></li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"resume-date text-md-right\">\r\n                  <span class=\"text-primary\">Jan 2017 - May 2017</span>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between\">\r\n                <div class=\"resume-content\">\r\n                  <h5 class=\"mb-0\">Inforica Pvt. Ltd</h5>\r\n                  <div class=\"subheading mb-3\">Junior UI Developer</div>\r\n                  <ul>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Coordinated with BA group for\r\n                      better understanding of functional requirements. Analyzed\r\n                      and gathered the business requirements.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Developed web pages with\r\n                      functionalities like login, sign up, forget password, email, filters\r\n                      using JavaScript, JQuery.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Designed, developed and updated\r\n                      user interface web forms using CSS3, Dreamweaver and\r\n                      JavaScript.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Implemented Accordions, Drop\r\n                      downs, Pop up Screens using jQuery and other 3rd party libraries upon\r\n                      user request.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Learned to understand the\r\n                      Document Object Model (DOM), Browser Object Model (BOM) and Web\r\n                      Standards.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Involved In writing SQL\r\n                      Queries, fixed bugs and provided support services for the application.<br></li>\r\n                    <li> <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i> Implemented session\r\n                      cookies to store user info and keep track of the website activity<br></li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"resume-date text-md-right\">\r\n                  <span class=\"text-primary\">June 2014 - Nov 2015</span>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </section>\r\n\r\n          <hr class=\"m-0\">\r\n\r\n          <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"education\">\r\n            <div class=\"w-100\">\r\n              <h4 class=\"mb-5\">Education</h4>\r\n\r\n              <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between mb-5\">\r\n                <div class=\"resume-content\">\r\n                  <h5 class=\"mb-0\">University of Central Missouri</h5>\r\n                  <div class=\"subheading mb-3\">Masters in Computer Science</div>\r\n                  <p>GPA: 3.8</p>\r\n                </div>\r\n                <div class=\"resume-date text-md-right\">\r\n                  <span class=\"text-primary\">Jan 2016 - May 2017</span>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"resume-item d-flex flex-column flex-md-row justify-content-between\">\r\n                <div class=\"resume-content\">\r\n                  <h5 class=\"mb-0\">JNTU Hyderabad</h5>\r\n                  <div class=\"subheading mb-3\">Bachelor of technology</div>\r\n                  <div> Major - Computer Science</div>\r\n                  <p>GPA: 3.56</p>\r\n                </div>\r\n                <div class=\"resume-date text-md-right\">\r\n                  <span class=\"text-primary\">Aug 2010 - June 2014</span>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </section>\r\n\r\n          <hr class=\"m-0\">\r\n\r\n          <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"skills\">\r\n            <div class=\"w-100\">\r\n              <h4 class=\"mb-5\">Skills</h4>\r\n\r\n              <div class=\"subheading mb-3\">Programming Languages &amp; Tools</div>\r\n              <ul class=\"list-inline dev-icons\">\r\n                <li class=\"list-inline-item\">\r\n                  <i class=\"fa fa-html5\">HTML5</i>\r\n                </li>\r\n                <li class=\"list-inline-item\">\r\n                  <i class=\"fa fa-css3-alt\">CSS3</i>\r\n                </li>\r\n                <li class=\"list-inline-item\">\r\n                  <i class=\"fa fa-js-square\">JavaScript</i>\r\n                </li>\r\n                <li class=\"list-inline-item\">\r\n                  <i class=\"fa fa-angular\">Angular</i>\r\n                </li>\r\n                <li class=\"list-inline-item\">\r\n                  <i class=\"fa fa-react\">React</i>\r\n                </li>\r\n                <li class=\"list-inline-item\">\r\n                  <i class=\"fa fa-node-js\">Node.js</i>\r\n                </li>\r\n                <li class=\"list-inline-item\">\r\n                  <i class=\"fa fa-sass\"></i>\r\n                </li>\r\n                <li class=\"list-inline-item\">\r\n                  <i class=\"fa fa-less\"></i>\r\n                </li>\r\n                <li class=\"list-inline-item\">\r\n                  <i class=\"fa fa-wordpress\"></i>\r\n                </li>\r\n                <li class=\"list-inline-item\">\r\n                  <i class=\"fa fa-gulp\"></i>\r\n                </li>\r\n                <li class=\"list-inline-item\">\r\n                  <i class=\"fa fa-grunt\"></i>\r\n                </li>\r\n                <li class=\"list-inline-item\">\r\n                  <i class=\"fa fa-npm\">NPM</i>\r\n                </li>\r\n              </ul>\r\n\r\n              <div class=\"subheading mb-3\">Workflow</div>\r\n              <ul class=\"fa-ul mb-0\">\r\n                <li>\r\n                  <i class=\"fa-li fa fa-check\"></i>\r\n                  Mobile-First, Responsive Design</li>\r\n                <li>\r\n                  <i class=\"fa-li fa fa-check\"></i>\r\n                  Cross Browser Testing &amp; Debugging</li>\r\n                <li>\r\n                  <i class=\"fa-li fa fa-check\"></i>\r\n                  Cross Functional Teams</li>\r\n                <li>\r\n                  <i class=\"fa-li fa fa-check\"></i>\r\n                  Agile Development &amp; Scrum</li>\r\n              </ul>\r\n            </div>\r\n          </section>\r\n\r\n          <hr class=\"m-0\">\r\n\r\n          <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"interests\">\r\n            <div class=\"w-100\">\r\n              <h4 class=\"mb-5\">Interests</h4>\r\n              <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid\r\n                skier\r\n                and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free\r\n                climbing, and\r\n                kayaking.</p>\r\n              <p class=\"mb-0\">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television\r\n                shows,\r\n                I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology\r\n                advancements\r\n                in the front-end web development world.</p>\r\n            </div>\r\n          </section>\r\n\r\n          <hr class=\"m-0\">\r\n\r\n          <section class=\"resume-section p-3 p-lg-5 d-flex align-items-center\" id=\"awards\">\r\n            <!-- <div class=\"w-100\">\r\n                  <h2 class=\"mb-5\">Awards &amp; Certifications</h2>\r\n                  <ul class=\"fa-ul mb-0\">\r\n                    <li>\r\n                      <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n                      Google Analytics Certified Developer</li>\r\n                    <li>\r\n                      <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n                      Mobile Web Specialist - Google Certification</li>\r\n                    <li>\r\n                      <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n                      1<sup>st</sup>\r\n                      Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>\r\n                    <li>\r\n                      <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n                      1<sup>st</sup>\r\n                      Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>\r\n                    <li>\r\n                      <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n                      2<sup>nd</sup>\r\n                      Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>\r\n                    <li>\r\n                      <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n                      1<sup>st</sup>\r\n                      Place - James Buchanan High School - Hackathon 2006</li>\r\n                    <li>\r\n                      <i class=\"fa-li fa fa-trophy text-warning\"></i>\r\n                      3<sup>rd</sup>\r\n                      Place - James Buchanan High School - Hackathon 2005</li>\r\n                  </ul>\r\n                </div> -->\r\n            <div class=\"social-icons\" id=\"contacts\">\r\n              <a href=\"https://www.linkedin.com/in/nithishpeddi58/\">\r\n                <i class=\"fa fa-linkedin-in\"></i>\r\n              </a>\r\n              <a href=\"https://github.com/nithishpeddi\">\r\n                <i class=\"fa fa-github\"></i>\r\n              </a>\r\n              <a href=\"https://twitter.com/nithishpeddi58\">\r\n                <i class=\"fa fa-twitter\"></i>\r\n              </a>\r\n              <a href=\"#\">\r\n                <i class=\"fa fa-facebook-f\"></i>\r\n              </a>\r\n            </div>\r\n\r\n            <address>\r\n              Jefferson Avenue,\r\n              Cincinnati,\r\n              OH, 45220.\r\n              Mobile: Prefer linkedin to Reach Me.\r\n              <a href=\"mailto:nithish.ui@outlook.com\">nithish@outlook.com</a>\r\n            </address>\r\n\r\n\r\n            <p>\r\n              <!-- 01)Knowledge and interest in computer systems and the latest technologies\r\n                  02)The ability to learn new technologies quickly\r\n                  03)An analytical mind\r\n                  04)The ability to communicate complex procedures to other colleagues\r\n                  05)Commercial and business awareness\r\n                  06)Good communication skills – both written and verbal\r\n                  07)Attention to detail and desire to probe further into data -->\r\n\r\n            </p>\r\n          </section>\r\n\r\n        </div>\r\n\r\n\r\n      </main>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<app-footer></app-footer>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'myportfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark flex-column\">\n    <!-- <a class=\"navbar-brand\" href=\"#\">Home</a> -->\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link active\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        <a class=\"nav-item nav-link\" href=\"#\">Resume</a>\n        <a class=\"nav-item nav-link\" href=\"#\">Portfolio</a>\n        <a class=\"nav-item nav-link \" href=\"#\">Contact</a>\n        <a class=\"nav-item nav-link \" href=\"#\">About Me</a>\n      </div>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\NITHI\Desktop\portfolioGit\myPortfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map