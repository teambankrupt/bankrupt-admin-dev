"use strict";
(self["webpackChunkbankrupt_frontend"] = self["webpackChunkbankrupt_frontend"] || []).push([["src_app_modules_blog_blog_module_ts"],{

/***/ 10927:
/*!*********************************************!*\
  !*** ./src/app/modules/blog/blog.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogModule: () => (/* binding */ BlogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _layout_blog_layout_blog_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/blog-layout/blog-layout.component */ 76220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _layout_blog_header_blog_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/blog-header/blog-header.component */ 4410);
/* harmony import */ var _layout_blog_footer_blog_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/blog-footer/blog-footer.component */ 71567);
/* harmony import */ var _layout_left_nav_blog_left_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/left-nav/blog-left-nav.component */ 45063);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _blog_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog.route */ 86588);
/* harmony import */ var _domains_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domains/home/home.component */ 73621);
/* harmony import */ var _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/modules/utility/utility.module */ 7151);
/* harmony import */ var _domains_blogposts_blogpost_public_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domains/blogposts/blogpost-public.component */ 21395);
/* harmony import */ var _domains_blogpost_detail_blogpost_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domains/blogpost-detail/blogpost-detail.component */ 38287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);













class BlogModule {
  static #_ = this.ɵfac = function BlogModule_Factory(t) {
    return new (t || BlogModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: BlogModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _blog_route__WEBPACK_IMPORTED_MODULE_4__.BlogRoute, _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_6__.UtilityModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](BlogModule, {
    declarations: [_layout_blog_layout_blog_layout_component__WEBPACK_IMPORTED_MODULE_0__.BlogLayoutComponent, _layout_blog_header_blog_header_component__WEBPACK_IMPORTED_MODULE_1__.BlogHeaderComponent, _layout_blog_footer_blog_footer_component__WEBPACK_IMPORTED_MODULE_2__.BlogFooterComponent, _layout_left_nav_blog_left_nav_component__WEBPACK_IMPORTED_MODULE_3__.BlogLeftNavComponent, _domains_home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent, _domains_blogposts_blogpost_public_component__WEBPACK_IMPORTED_MODULE_7__.BlogpostPublicComponent, _domains_blogpost_detail_blogpost_detail_component__WEBPACK_IMPORTED_MODULE_8__.BlogpostDetailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _blog_route__WEBPACK_IMPORTED_MODULE_4__.BlogRoute, _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_6__.UtilityModule]
  });
})();

/***/ }),

/***/ 86588:
/*!********************************************!*\
  !*** ./src/app/modules/blog/blog.route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogRoute: () => (/* binding */ BlogRoute)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _domains_blogposts_blogpost_public_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domains/blogposts/blogpost-public.component */ 21395);
/* harmony import */ var _domains_blogpost_detail_blogpost_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domains/blogpost-detail/blogpost-detail.component */ 38287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);





const routes = [{
  path: ':slug/posts',
  component: _domains_blogposts_blogpost_public_component__WEBPACK_IMPORTED_MODULE_0__.BlogpostPublicComponent
}, {
  path: ':slug/categories/:categorySlug/posts',
  component: _domains_blogposts_blogpost_public_component__WEBPACK_IMPORTED_MODULE_0__.BlogpostPublicComponent
}, {
  path: ':slug/hashtags/:hashtag/posts',
  component: _domains_blogposts_blogpost_public_component__WEBPACK_IMPORTED_MODULE_0__.BlogpostPublicComponent
}, {
  path: ':slug/posts/:postSlug',
  component: _domains_blogpost_detail_blogpost_detail_component__WEBPACK_IMPORTED_MODULE_1__.BlogpostDetailComponent
}];
class BlogRoute {
  static #_ = this.ɵfac = function BlogRoute_Factory(t) {
    return new (t || BlogRoute)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: BlogRoute
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BlogRoute, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 38287:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/blog/domains/blogpost-detail/blogpost-detail.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogpostDetailComponent: () => (/* binding */ BlogpostDetailComponent)
/* harmony export */ });
/* harmony import */ var _dash_domains_blog_blogposts_components_blogpost_list_blogpost_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../dash/domains/blog/blogposts/components/blogpost-list/blogpost-list.component */ 92484);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../base/components/base.component */ 58637);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _dash_domains_blog_blogposts_services_blogpost_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../dash/domains/blog/blogposts/services/blogpost.service */ 48482);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/modules/utility/pipes/readable-date.pipe */ 92770);
/* harmony import */ var _common_modules_utility_pipes_hashtag_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/modules/utility/pipes/hashtag.pipe */ 46352);













const _c0 = function (a1, a3) {
  return ["/blog/", a1, "hashtags", a3, "posts"];
};
function BlogpostDetailComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](2, _c0, ctx_r0.blogSlug, h_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", h_r2, " ");
  }
}
function BlogpostDetailComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("src", ctx_r1.blogPost == null ? null : ctx_r1.blogPost.featured_image, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
class BlogpostDetailComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  componentName() {
    return _dash_domains_blog_blogposts_components_blogpost_list_blogpost_list_component__WEBPACK_IMPORTED_MODULE_0__.BlogPostListComponent.name;
  }
  constructor(eventBus, router, subContainer, activatedRoute, notifier, blogpostService, seoTitle, seoMeta) {
    super(eventBus, router, subContainer);
    this.activatedRoute = activatedRoute;
    this.notifier = notifier;
    this.blogpostService = blogpostService;
    this.seoTitle = seoTitle;
    this.seoMeta = seoMeta;
    this.blogSlug = null;
    this.postSlug = null;
    this.blogPost = null;
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(pathVariables => {
      this.blogSlug = pathVariables.get('slug');
      this.postSlug = pathVariables.get('postSlug');
      this.fetchBlogPosts(this.blogSlug, this.postSlug, post => {
        this.blogPost = post;
        this.resolveSeo(post);
      });
    });
  }
  fetchBlogPosts(blogSlug, postSlug, then) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.BLOGPOSTS.GET_DETAILS(postSlug));
    this.blogpostService.fetchSinglePublic(key, blogSlug, postSlug);
    this.subscribe(key, null, (value, meta) => {
      then(meta.data);
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.error.message);
    });
  }
  getCategoryNames(post) {
    if (post == null || post.categories.length === 0) return "Uncategorized";
    return post.categories.map(c => {
      return c.name;
    }).join(", ");
  }
  resolveSeo(post) {
    if (post == null) {
      console.log("Post null");
      return;
    }
    super.initSeoItems(this.seoTitle, this.seoMeta, post.title, post.content.content, [post.content.hashtags.join(",")], null, null, post.featured_image, this.getPermalink());
  }
  static #_ = this.ɵfac = function BlogpostDetailComponent_Factory(t) {
    return new (t || BlogpostDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_5__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_dash_domains_blog_blogposts_services_blogpost_service__WEBPACK_IMPORTED_MODULE_6__.BlogPostService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Meta));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: BlogpostDetailComponent,
    selectors: [["app-blogpost-detail"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 47,
    vars: 15,
    consts: [[1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "pt-3"], [1, "row", "justify-content-center"], [1, "col-xl-8"], [1, "text-center"], [1, "mb-4"], ["href", "javascript: void(0);", "class", "badge bg-light font-size-12 me-2", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "text-muted", "mb-4"], [1, "mdi", "mdi-calendar", "me-1"], [1, "col-sm-4"], [1, "text-muted", "mb-2"], [1, "font-size-15"], [1, "mt-4", "mt-sm-0"], ["class", "my-5", 4, "ngIf"], [1, "mt-4"], [1, "text-muted", "font-size-16"], [3, "innerHTML"], ["href", "javascript: void(0);", 1, "badge", "bg-light", "font-size-12", "me-2", 3, "routerLink"], [1, "bx", "bx-hash", "align-middle", "text-muted", "me-1"], [1, "my-5"], ["alt", "", 1, "img-thumbnail", "mx-auto", "d-block", 3, "src"]],
    template: function BlogpostDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div")(8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, BlogpostDetailComponent_a_10_Template, 3, 5, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "readableDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 7)(19, "div", 0)(20, "div", 12)(21, "div")(22, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 12)(27, "div", 15)(28, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Published At");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](32, "readableDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 12)(34, "div", 15)(35, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "Post by");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](39, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, BlogpostDetailComponent_div_40_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 17)(43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](45, "hashtagV2");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](46, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        let tmp_7_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.blogPost == null ? null : ctx.blogPost.content == null ? null : ctx.blogPost.content.hashtags);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.blogPost == null ? null : ctx.blogPost.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 8, ctx.blogPost == null ? null : ctx.blogPost.created_at), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.getCategoryNames(ctx.blogPost));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](32, 10, ctx.blogPost == null ? null : ctx.blogPost.published_at));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.blogPost == null ? null : ctx.blogPost.created_by);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.blogPost == null ? null : ctx.blogPost.featured_image);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](45, 12, (tmp_7_0 = ctx.blogPost == null ? null : ctx.blogPost.content == null ? null : ctx.blogPost.content.content) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "", "/#/blog/" + ctx.blogSlug + "/hashtags/:hashtag:/posts"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_7__.ReadableDatePipe, _common_modules_utility_pipes_hashtag_pipe__WEBPACK_IMPORTED_MODULE_8__.HashtagPipeV2],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 21395:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/blog/domains/blogposts/blogpost-public.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogpostPublicComponent: () => (/* binding */ BlogpostPublicComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../base/components/base-list-v4.component */ 45095);
/* harmony import */ var _dash_domains_blog_blogposts_models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../dash/domains/blog/blogposts/models/config.model */ 57461);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _dash_domains_blog_blogposts_components_blogpost_list_blogpost_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../dash/domains/blog/blogposts/components/blogpost-list/blogpost-list.component */ 92484);
/* harmony import */ var _dash_dash_endpoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../dash/dash.endpoint */ 91006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _dash_domains_blog_blogposts_services_blogpost_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../dash/domains/blog/blogposts/services/blogpost.service */ 48482);
/* harmony import */ var _dash_domains_blog_postcategories_services_postcategory_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../dash/domains/blog/postcategories/services/postcategory.service */ 69949);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/modules/utility/pipes/readable-date.pipe */ 92770);




















function BlogpostPublicComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "util-progress", 39);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("bar", true);
  }
}
function BlogpostPublicComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "All Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogpostPublicComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r2.findCategoryName(ctx_r2.categorySlug));
  }
}
function BlogpostPublicComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("#", ctx_r3.hashtag, "");
  }
}
function BlogpostPublicComponent_div_16_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogpostPublicComponent_div_16_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h4", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogpostPublicComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "div", 1)(3, "div", 42)(4, "div", 43)(5, "h1", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](6, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, BlogpostPublicComponent_div_16_h4_7_Template, 2, 0, "h4", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, BlogpostPublicComponent_div_16_h4_8_Template, 2, 0, "h4", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 10)(10, "div", 48)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r4.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r4.loading);
  }
}
function BlogpostPublicComponent_div_17_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("src", post_r12.featured_image, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
  }
}
const _c4 = function (a1, a3) {
  return ["/blog", a1, "posts", a3];
};
function BlogpostPublicComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "h5")(4, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](8, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, BlogpostPublicComponent_div_17_div_1_div_9_Template, 2, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 57)(11, "ul", 61)(12, "li", 62)(13, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](14, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](16, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "div")(18, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19, "Read more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](20, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const post_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](10, _c4, ctx_r11.blogSlug, post_r12.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](post_r12.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](8, 8, post_r12.published_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", post_r12.featured_image);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](13, _c4, ctx_r11.blogSlug, post_r12.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", post_r12.created_by, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("innerHTML", post_r12.content.content, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](16, _c4, ctx_r11.blogSlug, post_r12.slug));
  }
}
function BlogpostPublicComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, BlogpostPublicComponent_div_17_div_1_Template, 21, 19, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r5.blogPosts.content);
  }
}
const _c5 = function (a1, a3) {
  return ["/blog/", a1, "categories", a3, "posts"];
};
function BlogpostPublicComponent_li_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "li")(1, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cat_r16 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](2, _c5, ctx_r6.blogSlug, cat_r16.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", cat_r16.name, "");
  }
}
const _c6 = function (a1, a3) {
  return ["/blog/", a1, "hashtags", a3, "posts"];
};
function BlogpostPublicComponent_a_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const hashtag_r17 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](3, _c6, ctx_r7.blogSlug, hashtag_r17.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", hashtag_r17.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](hashtag_r17.count);
  }
}
function BlogpostPublicComponent_a_119_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const post_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("src", post_r18.featured_image, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
  }
}
function BlogpostPublicComponent_a_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "a", 72)(1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, BlogpostPublicComponent_a_119_div_2_Template, 2, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 75)(4, "h5", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const post_r18 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](4, _c4, ctx_r8.blogSlug, post_r18.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", post_r18.featured_image);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](post_r18.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](post_r18.published_at);
  }
}
class BlogpostPublicComponent extends _base_components_base_list_v4_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV4 {
  componentName() {
    return _dash_domains_blog_blogposts_components_blogpost_list_blogpost_list_component__WEBPACK_IMPORTED_MODULE_5__.BlogPostListComponent.name;
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, blogPostService, postCategoryService, notifier) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.blogPostService = blogPostService;
    this.postCategoryService = postCategoryService;
    this.notifier = notifier;
    this.config = _dash_domains_blog_blogposts_models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultBlogPostConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.defaultFilterData;
    this.blogPosts = _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__.defaultPage;
    this.topPosts = _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__.defaultPage;
    this.categories = _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__.defaultPage;
    this.topHashtags = [];
    this.blogSlug = null;
    this.categorySlug = null;
    this.hashtag = null;
    if (authService.isAdmin()) {
      this.config.showUserFilter = true;
      this.config.endpoint = _dash_domains_blog_blogposts_models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _dash_domains_blog_blogposts_models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
  }
  initialize() {
    this.activatedRoute.paramMap.subscribe(pathVariables => {
      this.activatedRoute.queryParams.subscribe(params => {
        this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.parseFilterData)(params);
        this.blogSlug = pathVariables.get('slug');
        this.categorySlug = pathVariables.get('categorySlug');
        this.hashtag = pathVariables.get('hashtag');
        let p = {
          q: this.filterData.query,
          from_date: this.filterData.fromDate,
          to_date: this.filterData.toDate,
          page: this.filterData.page,
          size: this.filterData.size,
          sort_by: this.filterData.sort_by,
          sort_direction: this.filterData.sort_direction
        };
        if (this.categorySlug != null) {
          this.fetchBlogPostsForCategory(this.blogSlug, this.categorySlug, p);
        } else if (this.hashtag != null) {
          this.fetchBlogPostsForHashtag(this.blogSlug, this.hashtag, p);
        } else {
          this.fetchBlogPosts(this.blogSlug, p, result => {
            this.blogPosts = result;
          });
        }
        // Fetch Top Blogposts
        this.fetchBlogPosts(this.blogSlug, {
          ...p,
          q: '',
          size: 5,
          sort_by: 'viewCount',
          sort_direction: 'DESC'
        }, result => {
          this.topPosts = result;
        });
        this.fetchCategories(this.blogSlug, {
          ...p,
          sort_by: 'id',
          sort_direction: 'ASC'
        });
        this.fetchHashtags(this.blogSlug);
      });
    });
  }
  findCategoryName(slug) {
    return this.categories.content.find(c => {
      return c.slug == slug;
    })?.name ?? "Uncategorized";
  }
  getBreadcrumbItems() {
    return [];
  }
  fetchBlogPosts(blogSlug, params, onResult) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.BLOGPOSTS.SEARCH(params));
    this.blogPostService.search(key, _dash_dash_endpoint__WEBPACK_IMPORTED_MODULE_6__.DashEndpoint.BLOGPOSTS.BLOGPOST_ENDPOINT_PUBLIC_ALL(blogSlug), params);
    this.subscribe(key, null, (value, meta) => {
      onResult(meta.data);
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.error.message);
    });
  }
  fetchBlogPostsForCategory(blogSlug, categorySlug, params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.BLOGPOSTS.SEARCH_BY_CATEGORY(categorySlug, params));
    this.blogPostService.search(key, _dash_dash_endpoint__WEBPACK_IMPORTED_MODULE_6__.DashEndpoint.BLOGPOSTS.BLOGPOST_BY_CATEGORY(blogSlug, categorySlug), params);
    this.subscribe(key, null, (value, meta) => {
      this.blogPosts = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.error.message);
    });
  }
  fetchBlogPostsForHashtag(blogSlug, hashtag, params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.BLOGPOSTS.SEARCH_BY_HASHTAG(hashtag, params));
    this.blogPostService.search(key, _dash_dash_endpoint__WEBPACK_IMPORTED_MODULE_6__.DashEndpoint.BLOGPOSTS.BLOGPOST_BY_HASHTAG(blogSlug, hashtag), params);
    this.subscribe(key, null, (value, meta) => {
      this.blogPosts = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.error.message);
    });
  }
  fetchCategories(blogSlug, params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.POST_CATEGORIES.SEARCH_PUBLIC(params));
    this.postCategoryService.search(key, _dash_dash_endpoint__WEBPACK_IMPORTED_MODULE_6__.DashEndpoint.POST_CATEGORIES.POST_CATEGORY_ENDPOINT_PUBLIC(blogSlug), params);
    this.subscribe(key, null, (value, meta) => {
      this.categories = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.error.message);
    });
  }
  fetchHashtags(blogSlug) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.BLOGPOSTS.GET_TOP_HASHTAGS(blogSlug));
    this.postCategoryService.getTopHashtags(key, blogSlug);
    this.subscribe(key, null, (value, meta) => {
      this.topHashtags = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "BlogPost is deleted");
      this.ngOnInit();
    }
  }
  getConfig() {
    return this.config;
  }
  getRoutes() {
    return {
      create: _dash_domains_blog_blogposts_models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.create,
      update: id => _dash_domains_blog_blogposts_models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.update(id),
      params: (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.toParams)(this.filterData)
    };
  }
  getUpsertComponent() {
    return null;
  }
  onSearch(event) {
    const inputElement = event.target;
    const value = inputElement.value;
    this.fetchBlogPosts(this.blogSlug, {
      q: value,
      size: 10
    }, result => {
      this.blogPosts = result;
    });
  }
  onPageChanged(params) {}
  static #_ = this.ɵfac = function BlogpostPublicComponent_Factory(t) {
    return new (t || BlogpostPublicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_dash_domains_blog_blogposts_services_blogpost_service__WEBPACK_IMPORTED_MODULE_11__.BlogPostService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_dash_domains_blog_postcategories_services_postcategory_service__WEBPACK_IMPORTED_MODULE_12__.PostCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_13__.NotifierService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: BlogpostPublicComponent,
    selectors: [["app-blogpost-public"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]],
    decls: 121,
    vars: 10,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_BLOG_DOMAINS_BLOGPOSTS_BLOGPOST_PUBLIC_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_BLOG_DOMAINS_BLOGPOSTS_BLOGPOST_PUBLIC_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_BLOG_DOMAINS_BLOGPOSTS_BLOGPOST_PUBLIC_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_BLOG_DOMAINS_BLOGPOSTS_BLOGPOST_PUBLIC_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-9", "col-lg-8"], [1, "card"], ["role", "tablist", 1, "nav", "nav-tabs", "nav-tabs-custom", "justify-content-center", "pt-2"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "#all-post", "role", "tab", 1, "nav-link", "active"], [4, "ngIf"], [1, "tab-content", "p-4"], ["id", "all-post", "role", "tabpanel", 1, "tab-pane", "active"], [1, "row", "justify-content-center"], [1, "col-xl-12"], ["class", "account-pages my-2", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "my-4"], [3, "page"], ["id", "archive", "role", "tabpanel", 1, "tab-pane"], [1, "col-xl-8"], [1, "mt-5"], [1, "d-flex", "flex-wrap"], [1, "me-2"], [1, "ms-auto"], [1, "badge", "badge-soft-success", "badge-pill", "float-end", "ms-1", "font-size-12"], [1, "mt-2"], [1, "list-group", "list-group-flush"], ["href", "blog-details.html", 1, "list-group-item", "text-muted"], [1, "mdi", "mdi-circle-medium", "me-1"], [1, "col-xl-3", "col-lg-4"], [1, "card-body", "p-4"], [1, "search-box"], [1, "text-muted"], [1, "position-relative"], ["type", "text", "placeholder", "Search...", 1, "form-control", "rounded", "bg-light", "border-light", 3, "keyup.enter"], [1, "mdi", "mdi-magnify", "search-icon"], [1, "list-unstyled", "fw-medium"], [4, "ngFor", "ngForOf"], ["href", "javascript: void(0);", "class", "text-muted py-2 d-block", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "text-muted", "mb-2"], ["href", "javascript: void(0);", "class", "list-group-item text-muted py-3 px-2", 3, "routerLink", 4, "ngFor", "ngForOf"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "col-xl-4 col-lg-6", 4, "ngFor", "ngForOf"], [1, "col-xl-4", "col-lg-6"], [1, "card", "p-1", "border", "shadow-sm"], [1, "p-3"], ["href", "javascript:void(0);", 1, "text-dark", 3, "routerLink"], [1, "text-muted", "mb-0"], ["class", "position-relative", 4, "ngIf"], [1, "list-inline"], [1, "list-inline-item", "me-3"], ["href", "javascript: void(0);", 1, "text-muted", 3, "routerLink"], [1, "bx", "bx-user-circle", "align-middle", "text-muted", "me-1"], [3, "innerHTML"], ["href", "javascript: void(0);", 1, "text-primary", 3, "routerLink"], [1, "mdi", "mdi-arrow-right"], ["alt", "", 1, "img-thumbnail", 3, "src"], ["href", "javascript: void(0);", 1, "text-muted", "py-2", "d-block", 3, "routerLink"], [1, "mdi", "mdi-chevron-right", "me-1"], [1, "bx", "bx-hash", "me-1"], ["href", "javascript: void(0);", 1, "list-group-item", "text-muted", "py-3", "px-2", 3, "routerLink"], [1, "d-flex", "align-items-center"], ["class", "flex-shrink-0 me-3", 4, "ngIf"], [1, "flex-grow-1", "overflow-hidden"], [1, "font-size-13", "text-truncate"], [1, "mb-0", "text-truncate"], [1, "flex-shrink-0", "me-3"], ["alt", "", 1, "avatar-md", "h-auto", "d-block", "rounded", 3, "src"]];
    },
    template: function BlogpostPublicComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, BlogpostPublicComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ul", 4)(5, "li", 5)(6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, BlogpostPublicComponent_span_7_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, BlogpostPublicComponent_span_8_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, BlogpostPublicComponent_span_9_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div")(13, "div", 10)(14, "div", 11)(15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](16, BlogpostPublicComponent_div_16_Template, 13, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](17, BlogpostPublicComponent_div_17_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](18, "hr", 14)(19, "app-pagination", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "div", 16)(21, "div")(22, "div", 10)(23, "div", 17)(24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25, "Archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "div", 18)(27, "div", 19)(28, "div", 20)(29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](30, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "div", 21)(32, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](33, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](34, "hr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "div", 24)(36, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](37, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](38, " Beautiful Day with Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](39, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](40, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](41, " Drawing a sketch");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](42, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](43, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](44, " Project discussion with team");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](45, "div", 18)(46, "div", 19)(47, "div", 20)(48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](49, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](50, "div", 21)(51, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](52, "06");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](53, "hr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](54, "div", 24)(55, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](56, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](57, " Coffee with Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](58, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](59, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](60, " Neque porro quisquam est");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](61, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](62, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](63, " Quis autem vel eum iure");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](64, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](65, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](66, " Cras mi eu turpis");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](67, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](68, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](69, " Drawing a sketch");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](70, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](71, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](72, " Project discussion with team");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](73, "div", 18)(74, "div", 19)(75, "div", 20)(76, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](77, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](78, "div", 21)(79, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](80, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](81, "hr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](82, "div", 24)(83, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](84, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](85, " Beautiful Day with Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](86, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](87, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](88, " Drawing a sketch");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](89, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](90, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](91, " Project discussion with team");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](92, "div", 27)(93, "div", 3)(94, "div", 28)(95, "div", 29)(96, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](97, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](98, "div", 31)(99, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("keyup.enter", function BlogpostPublicComponent_Template_input_keyup_enter_99_listener($event) {
          return ctx.onSearch($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](100, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](101, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](102, "div")(103, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](104, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](105, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](106, BlogpostPublicComponent_li_106_Template, 4, 5, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](107, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](108, "div")(109, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](110, "Top Hashtags");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](111, "ul", 34)(112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](113, BlogpostPublicComponent_a_113_Template, 5, 6, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](114, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](115, "div")(116, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](117, "Popular Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](118, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](119, BlogpostPublicComponent_a_119_Template, 8, 7, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](120, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.categorySlug === null && ctx.hashtag === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.categorySlug !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.hashtag !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.blogPosts.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.blogPosts.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("page", ctx.blogPosts);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.categories.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.topHashtags);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.topPosts.content);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterLink, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_14__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__.PaginationComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_16__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 73621:
/*!*************************************************************!*\
  !*** ./src/app/modules/blog/domains/home/home.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../base/components/base-list-v4.component */ 45095);
/* harmony import */ var _dash_domains_blog_blogposts_models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../dash/domains/blog/blogposts/models/config.model */ 57461);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _dash_domains_blog_blogposts_components_blogpost_list_blogpost_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dash/domains/blog/blogposts/components/blogpost-list/blogpost-list.component */ 92484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _blogposts_blogpost_public_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blogposts/blogpost-public.component */ 21395);












class HomeComponent extends _base_components_base_list_v4_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV4 {
  componentName() {
    return _dash_domains_blog_blogposts_components_blogpost_list_blogpost_list_component__WEBPACK_IMPORTED_MODULE_3__.BlogPostListComponent.name;
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, notifier) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.notifier = notifier;
    this.config = _dash_domains_blog_blogposts_models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultBlogPostConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.defaultFilterData;
    this.blogSlug = null;
    if (authService.isAdmin()) {
      this.config.showUserFilter = true;
      this.config.endpoint = _dash_domains_blog_blogposts_models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _dash_domains_blog_blogposts_models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.parseFilterData)(params);
      this.blogSlug = this.activatedRoute.snapshot.params["slug"];
    });
  }
  getBreadcrumbItems() {
    return [];
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "BlogPost is deleted");
      this.ngOnInit();
    }
  }
  getConfig() {
    return this.config;
  }
  getRoutes() {
    return {
      create: _dash_domains_blog_blogposts_models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.create,
      update: id => _dash_domains_blog_blogposts_models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.update(id),
      params: (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.toParams)(this.filterData)
    };
  }
  getUpsertComponent() {
    return null;
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_5__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_7__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_8__.NotifierService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
    decls: 1,
    vars: 0,
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-blogpost-public");
      }
    },
    dependencies: [_blogposts_blogpost_public_component__WEBPACK_IMPORTED_MODULE_9__.BlogpostPublicComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_blog_blog_module_ts.js.map