"use strict";
(self["webpackChunkbankrupt_frontend"] = self["webpackChunkbankrupt_frontend"] || []).push([["default-src_app_modules_dash_domains_blog_blogposts_components_blogpost-list_blogpost-list_co-6325ed"],{

/***/ 45095:
/*!***********************************************************!*\
  !*** ./src/app/base/components/base-list-v4.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseListComponentV4: () => (/* binding */ BaseListComponentV4)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.component */ 58637);
/* harmony import */ var _modules_common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/common/modules/generic/breadcrumb/breadcrumb.model */ 97989);
/* harmony import */ var _utils_string_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/string.util */ 57613);
/* harmony import */ var _animations_component_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/component.animation */ 98743);
/* harmony import */ var _services_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage/localstorage.service */ 33108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/subscription-container.service */ 86945);
/* harmony import */ var _modules_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/common/modules/utility/components/popup/dialog.service */ 48675);










class BaseListComponentV4 extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(eventBus, router, subContainer, popup) {
    super(eventBus, router, subContainer);
    this.popup = popup;
    this.Layout = _modules_common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__.Layout;
    this.StringUtil = _utils_string_util__WEBPACK_IMPORTED_MODULE_2__.StringUtil;
    this.breadcrumbItems = [];
    this.layout = _modules_common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__.Layout.GRID;
    this.breadcrumbItems = this.getBreadcrumbItems();
  }
  ngOnInit() {
    let key = this.getConfig().endpoint;
    _services_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService.retrieveAsync(key, layout => {
      if (layout != null) {
        this.layout = parseInt(layout);
      } else {
        this.layout = this.getConfig().defaultLayout;
      }
      this.initialize();
    });
  }
  onLayoutSelected(layout) {
    this.layout = layout;
    _services_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService.put(this.getConfig().endpoint, this.layout.toString());
  }
  openUpsertComponent(id, edit = true) {
    let upsertComponent = this.getUpsertComponent();
    if (upsertComponent == null) {
      return;
    }
    this.popup.open(upsertComponent, {
      id: id,
      edit: edit
    });
    this.popup.onCompleted.subscribe(result => {
      setTimeout(() => {
        this.ngOnInit();
      }, 100);
      if (result != null) {
        this.onUpsertSuccess(result);
      }
      console.log("onSuccess. closing dialog");
    });
    this.popup.onCanceled.subscribe(() => {
      console.log("onCanceled. closing dialog");
    });
  }
  onUpsertClick(id, edit = true) {
    if (this.getConfig().upsertOnDialog) {
      this.openUpsertComponent(id, edit);
    } else {
      let routes = this.getRoutes();
      if (routes == null) {
        return;
      }
      let route = id == null ? routes.create : routes.update(id);
      this.router.navigate([route], {
        queryParams: id != null ? routes.params : {}
      });
    }
  }
  onUpsertSuccess(result) {
    console.log("onUpsertSuccess", result);
    // kept empty for override
  }
  static #_ = this.ɵfac = function BaseListComponentV4_Factory(t) {
    return new (t || BaseListComponentV4)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_modules_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_7__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: BaseListComponentV4,
    selectors: [["ng-component"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 0,
    vars: 0,
    template: function BaseListComponentV4_Template(rf, ctx) {},
    encapsulation: 2,
    data: {
      animation: [(0,_animations_component_animation__WEBPACK_IMPORTED_MODULE_3__.slideInBlurry)('onGrid', 'left'), (0,_animations_component_animation__WEBPACK_IMPORTED_MODULE_3__.slideInBlurry)('onColumn', 'right')]
    }
  });
}

/***/ }),

/***/ 59890:
/*!*************************************************************!*\
  !*** ./src/app/base/components/base-upsert-v3.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseUpsertComponentV3: () => (/* binding */ BaseUpsertComponentV3)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.component */ 58637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _animations_component_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations/component.animation */ 98743);
/* harmony import */ var _modules_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage/localstorage.service */ 33108);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _services_subscription_container_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/subscription-container.service */ 86945);










class BaseUpsertComponentV3 extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(eventBus, router, subContainer, route, dialogData) {
    super(eventBus, router, subContainer);
    this.route = route;
    this.dialogData = dialogData;
    this.breadcrumbItems = [];
    this.onCanceled = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.filterData = null;
    this.exId = null;
    this.dialogUpsert = false;
    this.selectedOrgId = null;
    this.breadcrumbItems = this.getBreadcrumbItems();
    this.dialogUpsert = dialogData.dialogUpsert != null;
  }
  ngOnInit() {
    this.loading = false;
    this.initOrg(() => {
      this.route.queryParams.subscribe(params => {
        this.filterData = (0,_modules_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.parseFilterData)(params);
      });
      this.route.paramMap.subscribe(paramMap => {
        let exId = paramMap.get('id');
        if (exId == null) exId = this.dialogData?.id;
        if (exId != null) {
          let parsed = parseInt(exId);
          if (!isNaN(parsed)) {
            this.exId = parsed;
            this.initialize(this.exId);
          }
        }
      });
    });
  }
  initOrg(fn) {
    _services_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService.retrieveAsync("selectedOrg", orgStr => {
      let org = orgStr != undefined ? JSON.parse(orgStr) : null;
      if (org != null) {
        this.selectedOrgId = org.id;
      }
      fn();
    });
  }
  navigateToListPage(then = null) {
    this.router.navigate([this.getListPageRoute()], {
      queryParams: this.filterData == null ? null : (0,_modules_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.toParams)(this.filterData)
    }).then(then);
  }
  onSuccess(result) {
    this.loading = false;
    if (this.dialogUpsert || this.getConfig().upsertOnDialog) {
      this.onCompleted.emit(result);
    } else {
      this.navigateToListPage();
    }
  }
  onCancel() {
    if (this.dialogUpsert || this.getConfig().upsertOnDialog) {
      this.onCanceled.emit();
    } else {
      this.navigate(this.getListPageRoute(), value => {});
    }
  }
  static #_ = this.ɵfac = function BaseUpsertComponentV3_Factory(t) {
    return new (t || BaseUpsertComponentV3)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_5__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: BaseUpsertComponentV3,
    selectors: [["ng-component"]],
    outputs: {
      onCanceled: "onCanceled",
      onCompleted: "onCompleted"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 0,
    vars: 0,
    template: function BaseUpsertComponentV3_Template(rf, ctx) {},
    encapsulation: 2,
    data: {
      animation: [(0,_animations_component_animation__WEBPACK_IMPORTED_MODULE_1__.hingeInFromTop)("loaded")]
    }
  });
}

/***/ }),

/***/ 77485:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/common/modules/generic/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreadcrumbComponent: () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumb.model */ 97989);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);





function BreadcrumbComponent_li_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.text);
  }
}
function BreadcrumbComponent_li_11_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BreadcrumbComponent_li_11_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onItemClick(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](item_r1.link != null ? "text-primary" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.text, " ");
  }
}
function BreadcrumbComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BreadcrumbComponent_li_11_span_1_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BreadcrumbComponent_li_11_a_2_Template, 2, 4, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("breadcrumb-item ", item_r1.active ? "active" : "muted", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r1.active);
  }
}
class BreadcrumbComponent {
  onLayoutSelected(layout) {
    this.layout = layout;
    this.layoutSelected.emit(layout);
  }
  constructor(router) {
    this.router = router;
    this.title = "";
    this.breadcrumbItems = [];
    this.layout = _breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.COLUMN;
    this.layoutSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.Layout = _breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout;
  }
  onItemClick(item) {
    if (item.link) {
      this.router.navigateByUrl(item.link, {
        state: {
          breadcrumb: item
        }
      });
    }
  }
  static #_ = this.ɵfac = function BreadcrumbComponent_Factory(t) {
    return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BreadcrumbComponent,
    selectors: [["app-breadcrumb"]],
    inputs: {
      title: "title",
      breadcrumbItems: "breadcrumbItems",
      layout: "layout"
    },
    outputs: {
      layoutSelected: "layoutSelected"
    },
    decls: 12,
    vars: 8,
    consts: [[1, "page-title-box", "d-sm-flex", "align-items-center", "justify-content-between"], [1, "mb-sm-0", "font-size-18"], [1, "center"], ["href", "javascript: void(0);", 3, "click"], [1, "bx", "bxs-grid-alt", "font-size-20"], [1, "bx", "bx-columns", "font-size-20"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [3, "class", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["href", "javascript: void(0);", 3, "class", "click", 4, "ngIf"]],
    template: function BreadcrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BreadcrumbComponent_Template_a_click_4_listener() {
          return ctx.onLayoutSelected(ctx.Layout.GRID);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BreadcrumbComponent_Template_a_click_7_listener() {
          return ctx.onLayoutSelected(ctx.Layout.COLUMN);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BreadcrumbComponent_li_11_Template, 3, 5, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.layout === ctx.Layout.GRID ? "text-primary" : "text-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.layout === ctx.Layout.COLUMN ? "text-primary" : "text-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.breadcrumbItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 92484:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/blog/blogposts/components/blogpost-list/blogpost-list.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogPostListComponent: () => (/* binding */ BlogPostListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v4.component */ 45095);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 57461);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _blogpost_upsert_blogpost_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blogpost-upsert/blogpost-upsert.component */ 52055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_blogpost_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/blogpost.service */ 48482);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);




















function BlogPostListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("bar", true);
  }
}
function BlogPostListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogPostListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogPostListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, BlogPostListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, BlogPostListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 18)(10, "div", 19)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function BlogPostListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogPostListComponent_div_9_div_1_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogPostListComponent_div_9_div_1_tr_29_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](item_r10.created_by);
  }
}
function BlogPostListComponent_div_9_div_1_tr_29_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "img", 57);
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("src", item_r10.featured_image, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
  }
}
function BlogPostListComponent_div_9_div_1_tr_29_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r10.title.substring(0, 1).toUpperCase(), " ");
  }
}
function BlogPostListComponent_div_9_div_1_tr_29_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogPostListComponent_div_9_div_1_tr_29_small_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](2, 1, item_r10.updated_at, "medium"));
  }
}
function BlogPostListComponent_div_9_div_1_tr_29_label_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "Published");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogPostListComponent_div_9_div_1_tr_29_label_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "Unpublished");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogPostListComponent_div_9_div_1_tr_29_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogPostListComponent_div_9_div_1_tr_29_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r27);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r25.onTogglePublish(item_r10.id, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogPostListComponent_div_9_div_1_tr_29_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogPostListComponent_div_9_div_1_tr_29_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r30);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r28.onTogglePublish(item_r10.id, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogPostListComponent_div_9_div_1_tr_29_td_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 53)(1, "app-delete", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("deleteItemEvent", function BlogPostListComponent_div_9_div_1_tr_29_td_35_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r31.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("requestUrl", ctx_r20.config.delEndpoint + "/" + item_r10.id);
  }
}
function BlogPostListComponent_div_9_div_1_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, BlogPostListComponent_div_9_div_1_tr_29_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "td")(5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, BlogPostListComponent_div_9_div_1_tr_29_img_6_Template, 1, 1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, BlogPostListComponent_div_9_div_1_tr_29_span_7_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "td")(9, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogPostListComponent_div_9_div_1_tr_29_Template_a_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r35);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r34.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "td")(16, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](17, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](23, BlogPostListComponent_div_9_div_1_tr_29_small_23_Template, 2, 0, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](25, BlogPostListComponent_div_9_div_1_tr_29_small_25_Template, 3, 4, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "td")(27, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](28, BlogPostListComponent_div_9_div_1_tr_29_label_28_Template, 2, 0, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, BlogPostListComponent_div_9_div_1_tr_29_label_29_Template, 2, 0, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](30, BlogPostListComponent_div_9_div_1_tr_29_button_30_Template, 2, 0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](31, BlogPostListComponent_div_9_div_1_tr_29_button_31_Template, 2, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "td", 53)(33, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogPostListComponent_div_9_div_1_tr_29_Template_a_click_33_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r35);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r36.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](34, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](35, BlogPostListComponent_div_9_div_1_tr_29_td_35_Template, 2, 1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r9.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r10.featured_image != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r10.featured_image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r10.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](item_r10.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r9.StringUtil.takeOnly(item_r10.content.hashtags.join(","), 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](21, 15, item_r10.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r10.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r10.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r10.published);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !item_r10.published);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !item_r10.published);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r10.published);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r9.config.showDeleteButton);
  }
}
function BlogPostListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5, "BlogPosts that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 30)(7, "table", 31)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](11, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, BlogPostListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](14, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](16, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](18, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](20, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](22, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](24, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](26, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](27, BlogPostListComponent_div_9_div_1_th_27_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, BlogPostListComponent_div_9_div_1_tr_29_Template, 36, 18, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r5.blogPosts.content);
  }
}
function BlogPostListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("src", item_r38.featured_image, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeUrl"]);
  }
}
function BlogPostListComponent_div_9_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 89)(1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r38.title.substring(0, 1).toUpperCase(), " ");
  }
}
function BlogPostListComponent_div_9_div_2_div_1_h6_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h6", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" By ", item_r38.created_by, "");
  }
}
function BlogPostListComponent_div_9_div_2_div_1_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "small", 91)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](2, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](5, 1, item_r38.updated_at, "medium"), " ");
  }
}
function BlogPostListComponent_div_9_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "small", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](3, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogPostListComponent_div_9_div_2_div_1_label_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "Published");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogPostListComponent_div_9_div_2_div_1_label_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "label", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "Unpublished");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function BlogPostListComponent_div_9_div_2_div_1_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 85)(1, "app-delete", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("deleteItemEvent", function BlogPostListComponent_div_9_div_2_div_1_div_33_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r51.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("requestUrl", ctx_r46.config.delEndpoint + "/" + item_r38.id)("look", "bx");
  }
}
function BlogPostListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 68)(1, "div", 69)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, BlogPostListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, BlogPostListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "h5", 72)(6, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogPostListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r55);
      const item_r38 = restoredCtx.$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r54.onUpsertClick(item_r38.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, BlogPostListComponent_div_9_div_2_div_1_h6_8_Template, 2, 1, "h6", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 0)(10, "div", 75)(11, "p", 76)(12, "small")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](14, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 75)(19, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](20, BlogPostListComponent_div_9_div_2_div_1_small_20_Template, 6, 4, "small", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](21, BlogPostListComponent_div_9_div_2_div_1_small_21_Template, 6, 0, "small", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "div")(25, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](26, BlogPostListComponent_div_9_div_2_div_1_label_26_Template, 2, 0, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](27, BlogPostListComponent_div_9_div_2_div_1_label_27_Template, 2, 0, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "div", 83)(29, "div", 84)(30, "div", 85)(31, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function BlogPostListComponent_div_9_div_2_div_1_Template_a_click_31_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r55);
      const item_r38 = restoredCtx.$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r56.onUpsertClick(item_r38.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](32, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](33, BlogPostListComponent_div_9_div_2_div_1_div_33_Template, 2, 2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r38 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r38.featured_image);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r38.featured_image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r38.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r37.config.showUserFilter && item_r38.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](17, 11, item_r38.created_at, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r38.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !item_r38.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r37.StringUtil.takeOnly(item_r38.content.hashtags.join(","), 50, true), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r38.published);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !item_r38.published);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r37.config.showDeleteButton);
  }
}
function BlogPostListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, BlogPostListComponent_div_9_div_2_div_1_Template, 34, 14, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r6.blogPosts.content);
  }
}
function BlogPostListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, BlogPostListComponent_div_9_div_1_Template, 30, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, BlogPostListComponent_div_9_div_2_Template, 2, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.GRID);
  }
}
class BlogPostListComponent extends _base_components_base_list_v4_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV4 {
  componentName() {
    return BlogPostListComponent.name;
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, blogPostService, notifier) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.blogPostService = blogPostService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultBlogPostConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.defaultFilterData;
    this.blogPosts = _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__.defaultPage;
    if (authService.isAdmin()) {
      this.config.showUserFilter = true;
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.parseFilterData)(params);
      this.fetchBlogPosts({
        q: this.filterData.query,
        username: this.filterData.username,
        from_date: this.filterData.fromDate,
        to_date: this.filterData.toDate,
        page: this.filterData.page,
        size: this.filterData.size
      });
    });
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "BlogPosts",
      link: null,
      active: true
    }];
  }
  fetchBlogPosts(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.BLOGPOSTS.SEARCH(params));
    this.blogPostService.search(key, this.config.endpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.blogPosts = meta.data;
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
      create: _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.create,
      update: id => _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.update(id),
      params: (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.toParams)(this.filterData)
    };
  }
  getUpsertComponent() {
    return _blogpost_upsert_blogpost_upsert_component__WEBPACK_IMPORTED_MODULE_5__.BlogPostUpsertComponent;
  }
  onTogglePublish(blogId, publish) {
    let message = "Are you sure you want to " + (publish ? "publish" : "unpublish") + " this blog post?";
    if (!confirm(message)) return;
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.BLOGS.PUBLISH(blogId));
    this.blogPostService.publish(key, this.config.endpoint, blogId, publish);
    this.subscribe(key, null, (value, meta) => {
      let blog = meta.data;
      this.notifier.success("Success", "Successfully published blog: " + blog.title);
      this.loading = false;
      this.initialize();
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.error.message);
      this.initialize();
    });
  }
  static #_ = this.ɵfac = function BlogPostListComponent_Factory(t) {
    return new (t || BlogPostListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_blogpost_service__WEBPACK_IMPORTED_MODULE_10__.BlogPostService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__.NotifierService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: BlogPostListComponent,
    selectors: [["app-blogpost-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___5 = goog.getMsg("Id");
        i18n_4 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u0986\u0987\u09A1\u09BF";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___7 = goog.getMsg("Image");
        i18n_6 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "\u099B\u09AC\u09BF";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___9 = goog.getMsg("Title");
        i18n_8 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Slug$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___11 = goog.getMsg("Slug");
        i18n_10 = MSG_EXTERNAL_label_Slug$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u09B8\u09CD\u09B2\u09BE\u0997";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___13 = goog.getMsg("Description");
        i18n_12 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___15 = goog.getMsg("Date");
        i18n_14 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Status$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___17 = goog.getMsg("Status");
        i18n_16 = MSG_EXTERNAL_label_Status$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u0985\u09AC\u09B8\u09CD\u09A5\u09BE";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___19 = goog.getMsg("Update");
        i18n_18 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS____21 = goog.getMsg("Created By");
        i18n_20 = MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS____21;
      } else {
        i18n_20 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS____23 = goog.getMsg("Delete");
        i18n_22 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS____23;
      } else {
        i18n_22 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS____25 = goog.getMsg("Created");
        i18n_24 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS____25;
      } else {
        i18n_24 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS_____27 = goog.getMsg("Updated");
        i18n_26 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS_____27;
      } else {
        i18n_26 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Publish$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS_____29 = goog.getMsg(" Publish ");
        i18n_28 = MSG_EXTERNAL_label_Publish$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS_____29;
      } else {
        i18n_28 = "\u09AA\u09BE\u09AC\u09B2\u09BF\u09B6 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Unpublish$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS_____31 = goog.getMsg(" Unpublish ");
        i18n_30 = MSG_EXTERNAL_label_Unpublish$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS_____31;
      } else {
        i18n_30 = "\u0986\u09A8\u09AA\u09BE\u09AC\u09B2\u09BF\u09B6 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS____33 = goog.getMsg("Created");
        i18n_32 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS____33;
      } else {
        i18n_32 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS_____35 = goog.getMsg("Updated");
        i18n_34 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS_____35;
      } else {
        i18n_34 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_36;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS_____37 = goog.getMsg("Updated");
        i18n_36 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_LIST_BLOGPOST_LIST_COMPONENT_TS_____37;
      } else {
        i18n_36 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_4, i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, [4, "ngFor", "ngForOf"], i18n_20, i18n_22, [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], i18n_24, [1, "mb-2"], ["class", "badge bg-success font-size-11", 4, "ngIf"], ["class", "badge bg-warning font-size-11", 4, "ngIf"], ["type", "button", "class", "btn btn-success", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-warning", 3, "click", 4, "ngIf"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], i18n_26, [1, "badge", "bg-success", "font-size-11"], [1, "badge", "bg-warning", "font-size-11"], ["type", "button", 1, "btn", "btn-success", 3, "click"], i18n_28, ["type", "button", 1, "btn", "btn-warning", 3, "click"], i18n_30, [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], i18n_32, [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], ["class", "badge bg-success font-size-11 m-1", 4, "ngIf"], ["class", "badge bg-warning font-size-11 m-1", 4, "ngIf"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [1, "font-size-10"], i18n_34, i18n_36, [1, "badge", "bg-success", "font-size-11", "m-1"], [1, "badge", "bg-warning", "font-size-11", "m-1"], [3, "requestUrl", "look", "deleteItemEvent"]];
    },
    template: function BlogPostListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("layoutSelected", function BlogPostListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("addButtonClick", function BlogPostListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, BlogPostListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, BlogPostListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, BlogPostListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("title", "BlogPosts")("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.blogPosts.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.blogPosts.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("page", ctx.blogPosts);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_12__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_14__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_15__.DeleteComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_16__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 52055:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/blog/blogposts/components/blogpost-upsert/blogpost-upsert.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogPostUpsertComponent: () => (/* binding */ BlogPostUpsertComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v3.component */ 59890);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 57461);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_blogpost_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/blogpost.service */ 48482);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/editor/editor.component */ 16265);
/* harmony import */ var _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/cms/files/components/filepicker/filepicker.component */ 7247);
/* harmony import */ var _blogs_components_blog_select_blog_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../blogs/components/blog-select/blog-select.component */ 65209);
/* harmony import */ var _postcategories_components_postcategory_select_postcategory_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../postcategories/components/postcategory-select/postcategory-select.component */ 55704);




















const _c0 = ["categorySelect"];
function BlogPostUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "util-progress", 33);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bar", true);
  }
}
function BlogPostUpsertComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 35)(5, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BlogPostUpsertComponent_div_51_Template_a_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r4.removeCategory(item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r3.name);
  }
}
class BlogPostUpsertComponent extends _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV3 {
  constructor(eventBus, router, subContainer, route, blogPostService, notifier, authService, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.blogPostService = blogPostService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultBlogPostConfig;
    this.selectedBlog = null;
    this.selectedCategories = [];
    this.blogPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.maxLength(255)]),
      slug: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.maxLength(255)]),
      featured_image: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null),
      blog_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
      hashtags: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl([]),
      label_ids: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl([]),
      category_ids: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl([]),
      content: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
        content: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(10)])
      })
    });
    if (authService.isAdmin()) {
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
    if (dialogData.title != null) {
      this.blogPostForm.controls.title.setValue(dialogData.title);
    }
  }
  ngOnInit() {
    super.ngOnInit();
    /*
      - Update slug when title is changed
      - Only during create, not during update as slug should be kept same as it'll be used in url
       */
    if (this.exId === null) {
      this.blogPostForm.controls.title.valueChanges.subscribe(value => {
        if (value == null) return;
        this.blogPostForm.controls.slug.setValue(_common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__.TextUtility.slugify(value));
      });
    }
  }
  componentName() {
    return BlogPostUpsertComponent.name;
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "BlogPosts",
      link: "/dash/blogposts",
      active: false
    }, {
      text: this.translations["Upsert"],
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.BLOGPOSTS.GET(exId));
    this.blogPostService.fetchSingle(key, this.config.endpoint, exId);
    this.subscribe(key, null, (value, meta) => {
      this.loading = false;
      this.populateForm(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      console.log(error);
      this.loading = false;
    });
  }
  onSubmit() {
    if (!this.blogPostForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  onImgUploaded(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.blogPostForm.controls.featured_image.setValue(images[0].image_url);
    }
  }
  getExImages() {
    let image = this.blogPostForm.controls.featured_image.value;
    if (image == null) {
      return [];
    }
    return [{
      image_url: image,
      thumb_url: image
    }];
  }
  getConfig() {
    return this.config;
  }
  getListPageRoute() {
    return _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.list;
  }
  upsert(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.BLOGPOSTS.UPSERT(exId));
    let req = this.blogPostForm.value;
    req.hashtags = _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__.TextUtility.extractHashtagsWithoutSymbols(req.content.content);
    console.log("hashtags", req.hashtags);
    this.blogPostService.upsert(key, this.config.endpoint, req, exId);
    this.subscribe(key, null, (value, meta) => {
      this.notifier.success("Success", "BlogPost has been " + (exId ? "updated" : "created"));
      this.blogPostForm.reset();
      this.onSuccess(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.error.message);
    });
  }
  populateForm(n) {
    this.selectedBlog = n.blog;
    this.selectedCategories = n.categories;
    this.blogPostForm.controls.title.setValue(n.title);
    this.blogPostForm.controls.slug.setValue(n.slug);
    this.blogPostForm.controls.featured_image.setValue(n.featured_image);
    this.blogPostForm.controls.blog_id.setValue(n.blog.id);
    this.blogPostForm.controls.content.setValue({
      content: n.content.content
    });
    this.blogPostForm.controls.label_ids.setValue(n.labels.map(l => {
      return l.id;
    }));
    this.blogPostForm.controls.hashtags.setValue(n.content.hashtags);
    this.blogPostForm.controls.category_ids.setValue(n.categories.map(c => {
      return c.id;
    }));
  }
  onCategorySelected(category) {
    // if category is null or already selected, return
    if (category == null || this.selectedCategories.find(c => c.id == category.id)) {
      return;
    }
    this.selectedCategories.push(category);
    this.blogPostForm.controls.category_ids.setValue(this.selectedCategories.map(c => c.id));
  }
  removeCategory(category) {
    this.selectedCategories = this.selectedCategories.filter(c => c.id != category.id);
    this.blogPostForm.controls.category_ids.setValue(this.selectedCategories.map(c => c.id));
  }
  onBlogSelected(blog) {
    this.selectedBlog = blog;
    this.blogPostForm.controls.blog_id.setValue(blog?.id ?? null);
    this.selectedCategories = [];
    this.categorySelect.clear();
    this.categorySelect.search({
      page: 0,
      size: 10,
      blog_id: blog?.id
    });
  }
  static #_ = this.ɵfac = function BlogPostUpsertComponent_Factory(t) {
    return new (t || BlogPostUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_5__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_blogpost_service__WEBPACK_IMPORTED_MODULE_6__.BlogPostService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_7__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: BlogPostUpsertComponent,
    selectors: [["app-blogpost-upsert"]],
    viewQuery: function BlogPostUpsertComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.categorySelect = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]],
    decls: 57,
    vars: 14,
    consts: function () {
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_UPSERT_BLOGPOST_UPSERT_COMPONENT_TS_2 = goog.getMsg("Title");
        i18n_1 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_UPSERT_BLOGPOST_UPSERT_COMPONENT_TS_2;
      } else {
        i18n_1 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Slug$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_UPSERT_BLOGPOST_UPSERT_COMPONENT_TS_4 = goog.getMsg("Slug");
        i18n_3 = MSG_EXTERNAL_label_Slug$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_UPSERT_BLOGPOST_UPSERT_COMPONENT_TS_4;
      } else {
        i18n_3 = "\u09B8\u09CD\u09B2\u09BE\u0997";
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Content$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_UPSERT_BLOGPOST_UPSERT_COMPONENT_TS_6 = goog.getMsg("Content");
        i18n_5 = MSG_EXTERNAL_label_Content$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_UPSERT_BLOGPOST_UPSERT_COMPONENT_TS_6;
      } else {
        i18n_5 = "\u09AC\u09BF\u09B7\u09AF\u09BC\u09AC\u09B8\u09CD\u09A4\u09C1";
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Blog$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_UPSERT_BLOGPOST_UPSERT_COMPONENT_TS_8 = goog.getMsg("Blog");
        i18n_7 = MSG_EXTERNAL_label_Blog$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_UPSERT_BLOGPOST_UPSERT_COMPONENT_TS_8;
      } else {
        i18n_7 = "\u09AC\u09CD\u09B2\u0997";
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Category$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_UPSERT_BLOGPOST_UPSERT_COMPONENT_TS_10 = goog.getMsg("Category");
        i18n_9 = MSG_EXTERNAL_label_Category$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGPOSTS_COMPONENTS_BLOGPOST_UPSERT_BLOGPOST_UPSERT_COMPONENT_TS_10;
      } else {
        i18n_9 = "\u0995\u09CD\u09AF\u09BE\u099F\u09BE\u0997\u09B0\u09BF";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "row", "mb-3"], [1, "col-md-6"], ["for", "title-input", 1, "form-label"], i18n_1, [1, "error"], ["type", "text", "id", "title-input", "placeholder", "Enter Title", "name", "title", "formControlName", "title", 1, "form-control"], [1, "text-danger"], ["for", "slug-input", 1, "form-label"], i18n_3, ["type", "text", "id", "slug-input", "placeholder", "Enter Slug", "name", "slug", "formControlName", "slug", 1, "form-control"], ["formGroupName", "content", 1, "mb-3"], ["for", "content", 1, "form-label"], i18n_5, ["id", "content", "formControlName", "content"], [3, "title", "multiSelect", "existingImages", "required", "onUploaded"], ["for", "blog", 1, "form-label"], i18n_7, ["id", "blog", 3, "selectedItem", "selected"], ["for", "categorySelect", 1, "form-label"], i18n_9, ["id", "categorySelect", 3, "selectedItem", "selected"], ["categorySelect", ""], ["class", "row my-2 py-2 mx-0 bg-info-subtle", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], [3, "bar"], [1, "row", "my-2", "py-2", "mx-0", "bg-info-subtle"], [1, "col-6"], ["href", "javascript: void(0);", 3, "click"], [1, "mdi", "mdi-close-circle-outline", "text-danger", "float-end"]];
    },
    template: function BlogPostUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, BlogPostUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Create/Update Blog Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "form", 6)(8, "div", 7)(9, "div", 8)(10, "label", 9)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](12, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 8)(19, "label", 14)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 17)(28, "label", 18)(29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](30, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](33, "app-editor", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "app-file-picker", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onUploaded", function BlogPostUpsertComponent_Template_app_file_picker_onUploaded_36_listener($event) {
          return ctx.onImgUploaded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "div", 7)(38, "div", 8)(39, "label", 22)(40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](41, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](43, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "app-blog-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function BlogPostUpsertComponent_Template_app_blog_select_selected_44_listener($event) {
          return ctx.onBlogSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "div", 8)(46, "label", 25)(47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](48, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "app-postcategory-select", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function BlogPostUpsertComponent_Template_app_postcategory_select_selected_49_listener($event) {
          return ctx.onCategorySelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](51, BlogPostUpsertComponent_div_51_Template, 7, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "div", 30)(53, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BlogPostUpsertComponent_Template_button_click_53_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function BlogPostUpsertComponent_Template_button_click_55_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](56, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.blogPostForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.blogPostForm, "title", "minLength", "Title should be between 3-355 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.blogPostForm, "slug", "minLength", "Slug should be between 3-355 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.blogPostForm, "content", "minLength", "Content should be at least 20 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", ctx.translations["FeaturedImage"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("multiSelect", false)("existingImages", ctx.getExImages())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("selectedItem", ctx.selectedBlog);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("selectedItem", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.selectedCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx.blogPostForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_9__.ProgressComponent, _common_modules_utility_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_10__.EditorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupName, _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_11__.FilePickerComponent, _blogs_components_blog_select_blog_select_component__WEBPACK_IMPORTED_MODULE_12__.BlogSelectComponent, _postcategories_components_postcategory_select_postcategory_select_component__WEBPACK_IMPORTED_MODULE_13__.PostCategorySelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 57461:
/*!****************************************************************************!*\
  !*** ./src/app/modules/dash/domains/blog/blogposts/models/config.model.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultBlogPostConfig: () => (/* binding */ defaultBlogPostConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _dash_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../dash.endpoint */ 91006);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/modules/generic/breadcrumb/breadcrumb.model */ 97989);


let selfEndpoints = {
  endpoint: _dash_endpoint__WEBPACK_IMPORTED_MODULE_0__.DashEndpoint.BLOGPOSTS.BLOGPOST_ENDPOINT,
  adminEndpoint: _dash_endpoint__WEBPACK_IMPORTED_MODULE_0__.DashEndpoint.BLOGPOSTS.BLOGPOST_ENDPOINT_ADMIN
};
let defaultBlogPostConfig = {
  defaultLayout: _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__.Layout.GRID,
  upsertOnDialog: false,
  showUserFilter: false,
  showDeleteButton: true,
  endpoint: selfEndpoints.endpoint,
  delEndpoint: selfEndpoints.endpoint
};
let selfRoutes = {
  list: "/dash/blog/blogposts",
  create: "/dash/blog/blogposts/create",
  update(id) {
    return id == null ? this.create : "/dash/blog/blogposts/" + id + '/update';
  }
};

/***/ }),

/***/ 48482:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/dash/domains/blog/blogposts/services/blogpost.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogPostService: () => (/* binding */ BlogPostService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _dash_endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../dash.endpoint */ 91006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class BlogPostService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.BLOGPOSTS.SEARCH(endpoint, params);
    this.http.get(url).subscribe(data => {
      this.eventBusService.publish(key, data.body);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, endpoint, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, endpoint, id) {
    this.http.get(_dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.BLOGPOSTS.GET(endpoint, id)).subscribe(data => {
      this.eventBusService.publish(key, data.body);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, endpoint, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSinglePublic(key, blogSlug, postSlug) {
    this.http.get(_dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.BLOGPOSTS.GET_PUBLIC(_dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.BLOGPOSTS.BLOGPOST_ENDPOINT_PUBLIC, blogSlug, postSlug)).subscribe(data => {
      this.eventBusService.publish(key, data.body);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSinglePublic(key, blogSlug, postSlug);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, endpoint, blogPostReq, exId) {
    let url = exId == null ? _dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.BLOGPOSTS.CREATE(endpoint) : _dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.BLOGPOSTS.UPDATE(endpoint, exId);
    let observable = exId == null ? this.http.post(url, blogPostReq) : this.http.patch(url, blogPostReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res.body);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, endpoint, blogPostReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  publish(key, endpoint, blogpostId, publish) {
    let url = _dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.BLOGPOSTS.PUBLISH(endpoint, blogpostId, {
      published: publish
    });
    this.http.patch(url, null).subscribe(res => {
      this.eventBusService.publish(key, res.body);
    }, err => {
      this.handleError(err, auth => {
        this.publish(key, endpoint, blogpostId, publish);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function BlogPostService_Factory(t) {
    return new (t || BlogPostService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: BlogPostService,
    factory: BlogPostService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 65209:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/blog/blogs/components/blog-select/blog-select.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogSelectComponent: () => (/* binding */ BlogSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _blog_upsert_blog_upsert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blog-upsert/blog-upsert.component */ 86395);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 28899);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/blog.service */ 56018);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);

















function BlogSelectComponent_util_progress_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "util-progress", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bar", true);
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
class BlogSelectComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  componentName() {
    return "BlogSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, blogService, popupService) {
    super(eventBus, router, subContainer);
    this.blogService = blogService;
    this.popupService = popupService;
    this.enableAdd = true;
    this.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.endpoint;
    this.items = [];
    this.selectedItem = null;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    if (authService.isAdmin()) {
      this.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
  }
  ngOnInit() {
    this.loading = false;
    this.search({
      page: 0,
      size: 10,
      q: null
    });
  }
  searchForEvent(event) {
    let query = _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__.TextUtility.removeSpecialCharacters(event.target?.value);
    if (query.length > 2) {
      this.search({
        page: 0,
        size: 10,
        q: query
      });
    }
  }
  onSelected(event) {
    if (event == null) {
      this.selected.emit(null);
    } else if (this.items.find(c => c.title == event.title)) {
      this.selected.emit(this.selectedItem);
    } else {
      let popup = this.popupService.open(_blog_upsert_blog_upsert_component__WEBPACK_IMPORTED_MODULE_0__.BlogUpsertComponent, {
        id: null,
        dialogUpsert: true,
        title: event.title
      });
      popup.componentInstance.onCompleted.subscribe(blog => {
        this.selected.emit(blog);
      });
      popup.componentInstance.onCanceled.subscribe(() => {
        popup.close();
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.BLOGS.SEARCH(params));
    this.blogService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      if (this.items.length == 1) {
        this.selected.emit(this.items[0]);
      }
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function BlogSelectComponent_Factory(t) {
    return new (t || BlogSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_8__.BlogService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: BlogSelectComponent,
    selectors: [["app-blog-select"]],
    inputs: {
      enableAdd: "enableAdd",
      searchEndpoint: "searchEndpoint",
      selectedItem: "selectedItem"
    },
    outputs: {
      selected: "selected"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 8,
    consts: [["for", "blog-select", 1, "visually-hidden"], [3, "bar", 4, "ngIf"], ["id", "blog-select", "bindLabel", "title", "placeholder", "Search Blog", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "keyup", "ngModelChange", "change"], [3, "bar"]],
    template: function BlogSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, BlogSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ng-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function BlogSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function BlogSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function BlogSelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.items)("hideSelected", true)("multiple", false)("addTag", ctx.enableAdd)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](7, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__.ProgressComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 86395:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/blog/blogs/components/blog-upsert/blog-upsert.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogUpsertComponent: () => (/* binding */ BlogUpsertComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v3.component */ 59890);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 28899);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/blog.service */ 56018);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/cms/files/components/filepicker/filepicker.component */ 7247);
/* harmony import */ var _mdm_organizations_components_organization_select_organization_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../mdm/organizations/components/organization-select/organization-select.component */ 24371);

















function BlogUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "util-progress", 25);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bar", true);
  }
}
class BlogUpsertComponent extends _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV3 {
  constructor(eventBus, router, subContainer, route, blogService, notifier, authService, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.blogService = blogService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultBlogConfig;
    this.selectedOrg = null;
    this.blogForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(3)]),
      subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(10)]),
      logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null),
      header_image: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null),
      org_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required])
    });
    if (authService.isAdmin()) {
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
    if (dialogData.title != null) {
      this.blogForm.controls.title.setValue(dialogData.title);
    }
  }
  componentName() {
    return BlogUpsertComponent.name;
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Blogs",
      link: "/dash/blogs",
      active: false
    }, {
      text: this.translations["Upsert"],
      link: null,
      active: true
    }];
  }
  onOrgSelected($event) {
    this.selectedOrg = $event;
    this.blogForm.controls.org_id.setValue(this.selectedOrg == null ? -1 : this.selectedOrg.id);
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.BLOGS.GET(exId));
    this.blogService.fetchSingle(key, this.config.endpoint, exId);
    this.subscribe(key, null, (value, meta) => {
      this.loading = false;
      this.populateForm(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      console.log(error);
      this.loading = false;
    });
  }
  onSubmit() {
    if (!this.blogForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  onLogoUploaded(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.blogForm.controls.logo.setValue(images[0].image_url);
    }
  }
  onBannerUploaded(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.blogForm.controls.header_image.setValue(images[0].image_url);
    }
  }
  getExLogo() {
    let image = this.blogForm.controls.logo.value;
    if (image == null) {
      return [];
    }
    return [{
      image_url: image,
      thumb_url: image
    }];
  }
  getExBanner() {
    let image = this.blogForm.controls.header_image.value;
    if (image == null) {
      return [];
    }
    return [{
      image_url: image,
      thumb_url: image
    }];
  }
  getConfig() {
    return this.config;
  }
  getListPageRoute() {
    return _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.list;
  }
  upsert(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.BLOGS.UPSERT(exId));
    let req = this.blogForm.value;
    this.blogService.upsert(key, this.config.endpoint, req, exId);
    this.subscribe(key, null, (value, meta) => {
      this.notifier.success("Success", "Blog has been " + (exId ? "updated" : "created"));
      this.blogForm.reset();
      this.onSuccess(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    this.selectedOrg = n.organization;
    this.blogForm.controls.title.setValue(n.title);
    this.blogForm.controls.subtitle.setValue(n.subtitle);
    this.blogForm.controls.logo.setValue(n.logo == null ? null : n.logo);
    this.blogForm.controls.header_image.setValue(n.header_image == null ? null : n.header_image);
    this.blogForm.controls.org_id.setValue(n.organization.id);
  }
  static #_ = this.ɵfac = function BlogUpsertComponent_Factory(t) {
    return new (t || BlogUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_5__.BlogService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: BlogUpsertComponent,
    selectors: [["app-blog-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 42,
    vars: 15,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGS_COMPONENTS_BLOG_UPSERT_BLOG_UPSERT_COMPONENT_TS_1 = goog.getMsg("Title");
        i18n_0 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGS_COMPONENTS_BLOG_UPSERT_BLOG_UPSERT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Organization$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGS_COMPONENTS_BLOG_UPSERT_BLOG_UPSERT_COMPONENT_TS_3 = goog.getMsg("Organization");
        i18n_2 = MSG_EXTERNAL_label_Organization$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGS_COMPONENTS_BLOG_UPSERT_BLOG_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09AA\u09CD\u09B0\u09A4\u09BF\u09B7\u09CD\u09A0\u09BE\u09A8";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Subtitle$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGS_COMPONENTS_BLOG_UPSERT_BLOG_UPSERT_COMPONENT_TS_5 = goog.getMsg("Subtitle");
        i18n_4 = MSG_EXTERNAL_label_Subtitle$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_BLOGS_COMPONENTS_BLOG_UPSERT_BLOG_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u09B8\u09BE\u09AC\u099F\u09BE\u0987\u099F\u09C7\u09B2";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "col-md-6", "mb-3"], ["for", "title-input", 1, "form-label"], i18n_0, [1, "error"], ["type", "text", "id", "title-input", "placeholder", "Enter Title", "name", "title", "formControlName", "title", 1, "form-control"], [1, "text-danger"], [1, "mb-3", "col-md-6"], ["for", "organization", 1, "form-label"], i18n_2, ["id", "organization", 3, "selectedItem", "selected"], [1, "mb-3"], ["for", "subtitle-input", 1, "form-label"], i18n_4, ["type", "text", "id", "subtitle-input", "placeholder", "Enter Subtitle", "name", "subtitle", "formControlName", "subtitle", 1, "form-control"], [1, "col-lg-6", 3, "title", "multiSelect", "existingImages", "required", "onUploaded"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], [3, "bar"]];
    },
    template: function BlogUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, BlogUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Create/Update Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "form", 6)(8, "div", 1)(9, "div", 7)(10, "label", 8)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 13)(19, "label", 14)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "app-organization-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selected", function BlogUpsertComponent_Template_app_organization_select_selected_24_listener($event) {
          return ctx.onOrgSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 17)(26, "label", 18)(27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](28, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](31, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 1)(35, "app-file-picker", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onUploaded", function BlogUpsertComponent_Template_app_file_picker_onUploaded_35_listener($event) {
          return ctx.onLogoUploaded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "app-file-picker", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onUploaded", function BlogUpsertComponent_Template_app_file_picker_onUploaded_36_listener($event) {
          return ctx.onBannerUploaded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div", 22)(38, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BlogUpsertComponent_Template_button_click_38_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BlogUpsertComponent_Template_button_click_40_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.blogForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.blogForm, "title", "minLength", "Title should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("selectedItem", ctx.selectedOrg);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.blogForm, "subtitle", "minLength", "Subtitle should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("title", ctx.translations["Logo"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("multiSelect", false)("existingImages", ctx.getExLogo())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("title", ctx.translations["BannerImage"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("multiSelect", false)("existingImages", ctx.getExBanner())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx.blogForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__.ProgressComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_9__.FilePickerComponent, _mdm_organizations_components_organization_select_organization_select_component__WEBPACK_IMPORTED_MODULE_10__.OrganizationSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 28899:
/*!************************************************************************!*\
  !*** ./src/app/modules/dash/domains/blog/blogs/models/config.model.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultBlogConfig: () => (/* binding */ defaultBlogConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _dash_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../dash.endpoint */ 91006);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/modules/generic/breadcrumb/breadcrumb.model */ 97989);


let selfEndpoints = {
  endpoint: _dash_endpoint__WEBPACK_IMPORTED_MODULE_0__.DashEndpoint.BLOGS.BLOG_ENDPOINT,
  adminEndpoint: _dash_endpoint__WEBPACK_IMPORTED_MODULE_0__.DashEndpoint.BLOGS.BLOG_ENDPOINT_ADMIN
};
let defaultBlogConfig = {
  defaultLayout: _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__.Layout.GRID,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  endpoint: selfEndpoints.endpoint,
  delEndpoint: selfEndpoints.endpoint
};
let selfRoutes = {
  list: "/dash/blogs",
  create: "/dash/blogs/create",
  update(id) {
    return id == null ? this.create : "/dash/blogs/" + id + '/update';
  }
};

/***/ }),

/***/ 55704:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/blog/postcategories/components/postcategory-select/postcategory-select.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostCategorySelectComponent: () => (/* binding */ PostCategorySelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _postcategory_upsert_postcategory_upsert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../postcategory-upsert/postcategory-upsert.component */ 67743);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 41384);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_postcategory_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/postcategory.service */ 69949);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);

















const _c0 = ["categorySelect"];
function PostCategorySelectComponent_util_progress_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "util-progress", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bar", true);
  }
}
const _c1 = function () {
  return {
    standalone: true
  };
};
class PostCategorySelectComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  componentName() {
    return PostCategorySelectComponent.name;
  }
  constructor(eventBus, router, subContainer, authService, postCategoryService, popupService) {
    super(eventBus, router, subContainer);
    this.postCategoryService = postCategoryService;
    this.popupService = popupService;
    this.categorySelect = null;
    this.enableAdd = true;
    this.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.endpoint;
    this.items = [];
    this.selectedItem = null;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    if (authService.isAdmin()) {
      this.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
  }
  ngOnInit() {
    this.loading = false;
    this.search({
      page: 0,
      size: 10,
      q: null
    });
  }
  clear() {
    this.categorySelect?.clearModel();
  }
  searchForEvent(event) {
    let query = _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__.TextUtility.removeSpecialCharacters(event.target?.value);
    if (query.length > 2) {
      this.search({
        page: 0,
        size: 10,
        q: query
      });
    }
  }
  onSelected(event) {
    if (event == null) {
      this.selected.emit(null);
    } else if (this.items.find(c => c.name == event.name)) {
      this.selected.emit(this.selectedItem);
    } else {
      let popup = this.popupService.open(_postcategory_upsert_postcategory_upsert_component__WEBPACK_IMPORTED_MODULE_0__.PostCategoryUpsertComponent, {
        id: null,
        dialogUpsert: true,
        title: event.title
      });
      popup.componentInstance.onCompleted.subscribe(postcategory => {
        this.selected.emit(postcategory);
      });
      popup.componentInstance.onCanceled.subscribe(() => {
        popup.close();
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.POST_CATEGORIES.SEARCH(params));
    this.postCategoryService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function PostCategorySelectComponent_Factory(t) {
    return new (t || PostCategorySelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_postcategory_service__WEBPACK_IMPORTED_MODULE_8__.PostCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: PostCategorySelectComponent,
    selectors: [["app-postcategory-select"]],
    viewQuery: function PostCategorySelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.categorySelect = _t.first);
      }
    },
    inputs: {
      enableAdd: "enableAdd",
      searchEndpoint: "searchEndpoint",
      selectedItem: "selectedItem"
    },
    outputs: {
      selected: "selected"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 5,
    vars: 8,
    consts: [["for", "categorySelect", 1, "visually-hidden"], [3, "bar", 4, "ngIf"], ["id", "categorySelect", "bindLabel", "name", "placeholder", "Search Category", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "keyup", "ngModelChange", "change"], ["categorySelect", ""], [3, "bar"]],
    template: function PostCategorySelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "PostCategory");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, PostCategorySelectComponent_util_progress_2_Template, 1, 1, "util-progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ng-select", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function PostCategorySelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function PostCategorySelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function PostCategorySelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.items)("hideSelected", true)("multiple", false)("addTag", ctx.enableAdd)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](7, _c1));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__.ProgressComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 67743:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/blog/postcategories/components/postcategory-upsert/postcategory-upsert.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostCategoryUpsertComponent: () => (/* binding */ PostCategoryUpsertComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v3.component */ 59890);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 41384);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_postcategory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/postcategory.service */ 69949);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);












function PostCategoryUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "util-progress", 28);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("bar", true);
  }
}
class PostCategoryUpsertComponent extends _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV3 {
  constructor(eventBus, router, subContainer, route, postCategoryService, notifier, authService, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.postCategoryService = postCategoryService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultPostCategoryConfig;
    this.selectedParent = null;
    this.selectedBlog = null;
    this.postCategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3)]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', []),
      image: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
      blog_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])
    });
    if (authService.isAdmin()) {
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
    if (dialogData.title != null) {
      this.postCategoryForm.controls.name.setValue(dialogData.title);
    }
  }
  componentName() {
    return PostCategoryUpsertComponent.name;
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "PostCategorys",
      link: "/dash/postcategorys",
      active: false
    }, {
      text: this.translations["Upsert"],
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.POST_CATEGORIES.GET(exId));
    this.postCategoryService.fetchSingle(key, this.config.endpoint, exId);
    this.subscribe(key, null, (value, meta) => {
      this.loading = false;
      this.populateForm(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      console.log(error);
      this.loading = false;
    });
  }
  onSubmit() {
    if (!this.postCategoryForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  onImgUploaded(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.postCategoryForm.controls.image.setValue(images[0].image_url);
    }
  }
  getExImages() {
    let image = this.postCategoryForm.controls.image.value;
    if (image == null) {
      return [];
    }
    return [{
      image_url: image,
      thumb_url: image
    }];
  }
  getConfig() {
    return this.config;
  }
  getListPageRoute() {
    return _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.list;
  }
  upsert(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.POST_CATEGORIES.UPSERT(exId));
    let req = this.postCategoryForm.value;
    this.postCategoryService.upsert(key, this.config.endpoint, req, exId);
    this.subscribe(key, null, (value, meta) => {
      this.notifier.success("Success", "PostCategory has been " + (exId ? "updated" : "created"));
      this.postCategoryForm.reset();
      this.onSuccess(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    this.selectedParent = n.parent;
    this.selectedBlog = n.blog;
    this.postCategoryForm.controls.name.setValue(n.name);
    this.postCategoryForm.controls.description.setValue(n.description);
    this.postCategoryForm.controls.image.setValue(n.image == null ? null : n.image);
    this.postCategoryForm.controls.parent_id.setValue(n.parent?.id ?? null);
    this.postCategoryForm.controls.blog_id.setValue(n.blog.id);
  }
  onPostCategorySelected(category) {
    this.selectedParent = category;
    this.postCategoryForm.controls.parent_id.setValue(category?.id ?? null);
  }
  onBlogSelected(blog) {
    this.selectedBlog = blog;
    this.postCategoryForm.controls.blog_id.setValue(blog?.id ?? null);
  }
  static #_ = this.ɵfac = function PostCategoryUpsertComponent_Factory(t) {
    return new (t || PostCategoryUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_postcategory_service__WEBPACK_IMPORTED_MODULE_5__.PostCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: PostCategoryUpsertComponent,
    selectors: [["app-postcategory-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 43,
    vars: 12,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_POSTCATEGORIES_COMPONENTS_POSTCATEGORY_UPSERT_POSTCATEGORY_UPSERT_COMPONENT_TS_1 = goog.getMsg("Name");
        i18n_0 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_POSTCATEGORIES_COMPONENTS_POSTCATEGORY_UPSERT_POSTCATEGORY_UPSERT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09A8\u09BE\u09AE";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_POSTCATEGORIES_COMPONENTS_POSTCATEGORY_UPSERT_POSTCATEGORY_UPSERT_COMPONENT_TS_3 = goog.getMsg("Description");
        i18n_2 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_POSTCATEGORIES_COMPONENTS_POSTCATEGORY_UPSERT_POSTCATEGORY_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_SelectCategory$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_POSTCATEGORIES_COMPONENTS_POSTCATEGORY_UPSERT_POSTCATEGORY_UPSERT_COMPONENT_TS_5 = goog.getMsg("Select Category");
        i18n_4 = MSG_EXTERNAL_label_SelectCategory$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_POSTCATEGORIES_COMPONENTS_POSTCATEGORY_UPSERT_POSTCATEGORY_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u0995\u09CD\u09AF\u09BE\u099F\u09C7\u0997\u09B0\u09BF \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_SelectBlog$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_POSTCATEGORIES_COMPONENTS_POSTCATEGORY_UPSERT_POSTCATEGORY_UPSERT_COMPONENT_TS_7 = goog.getMsg("Select Blog");
        i18n_6 = MSG_EXTERNAL_label_SelectBlog$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_BLOG_POSTCATEGORIES_COMPONENTS_POSTCATEGORY_UPSERT_POSTCATEGORY_UPSERT_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u09AC\u09CD\u09B2\u0997 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09C1\u09A8";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "mb-3"], ["for", "name-input", 1, "form-label"], i18n_0, [1, "error"], ["type", "text", "id", "name-input", "placeholder", "Enter Name", "name", "name", "formControlName", "name", 1, "form-control"], [1, "text-danger"], ["for", "description", 1, "form-label"], i18n_2, ["id", "description", "placeholder", "Enter Description", "rows", "5", "name", "description", "formControlName", "description", 1, "form-control"], [3, "title", "multiSelect", "existingImages", "required", "onUploaded"], [1, "row", "mb-3"], [1, "col-md-6"], ["for", "parent", 1, "form-label"], i18n_4, ["id", "parent", 3, "selectedItem", "selected"], ["for", "blog", 1, "form-label", "col-md-6"], i18n_6, ["id", "blog", 3, "selectedItem", "selected"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], [3, "bar"]];
    },
    template: function PostCategoryUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, PostCategoryUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Create/Update PostCategory");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "form", 6)(8, "div", 7)(9, "label", 8)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 7)(18, "label", 13)(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](20, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "app-file-picker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onUploaded", function PostCategoryUpsertComponent_Template_app_file_picker_onUploaded_24_listener($event) {
          return ctx.onImgUploaded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 17)(26, "div", 18)(27, "label", 19)(28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](29, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "app-postcategory-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selected", function PostCategoryUpsertComponent_Template_app_postcategory_select_selected_30_listener($event) {
          return ctx.onPostCategorySelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 18)(32, "label", 22)(33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](34, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "app-blog-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selected", function PostCategoryUpsertComponent_Template_app_blog_select_selected_37_listener($event) {
          return ctx.onBlogSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 25)(39, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PostCategoryUpsertComponent_Template_button_click_39_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PostCategoryUpsertComponent_Template_button_click_41_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.postCategoryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.postCategoryForm, "name", "minLength", "Name should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.postCategoryForm, "description", "minLength", "Description should be at least 20 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", ctx.translations["Image"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("multiSelect", false)("existingImages", ctx.getExImages())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectedItem", ctx.selectedParent);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectedItem", ctx.selectedBlog);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.postCategoryForm.valid ? "" : "disabled");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 41384:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/dash/domains/blog/postcategories/models/config.model.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultPostCategoryConfig: () => (/* binding */ defaultPostCategoryConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _dash_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../dash.endpoint */ 91006);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/modules/generic/breadcrumb/breadcrumb.model */ 97989);


let selfEndpoints = {
  endpoint: _dash_endpoint__WEBPACK_IMPORTED_MODULE_0__.DashEndpoint.POST_CATEGORIES.POSTCATEGORY_ENDPOINT,
  adminEndpoint: _dash_endpoint__WEBPACK_IMPORTED_MODULE_0__.DashEndpoint.POST_CATEGORIES.POSTCATEGORY_ENDPOINT_ADMIN
};
let defaultPostCategoryConfig = {
  defaultLayout: _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__.Layout.GRID,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  endpoint: selfEndpoints.endpoint,
  delEndpoint: selfEndpoints.endpoint
};
let selfRoutes = {
  list: "/dash/post-categories",
  create: "/dash/post-categories/create",
  update(id) {
    return id == null ? this.create : "/dash/post-categories/" + id + '/update';
  }
};

/***/ }),

/***/ 69949:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/blog/postcategories/services/postcategory.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PostCategoryService: () => (/* binding */ PostCategoryService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _dash_endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../dash.endpoint */ 91006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class PostCategoryService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.POST_CATEGORIES.SEARCH(endpoint, params);
    this.http.get(url).subscribe(data => {
      this.eventBusService.publish(key, data.body);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, endpoint, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  getTopHashtags(key, blogSlug) {
    let url = _dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.BLOGPOSTS.GET_TOP_HASHTAGS(blogSlug);
    this.http.get(url).subscribe(data => {
      this.eventBusService.publish(key, data);
    }, error => {
      this.handleError(error, auth => {
        this.getTopHashtags(key, blogSlug);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, endpoint, id) {
    this.http.get(_dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.POST_CATEGORIES.GET(endpoint, id)).subscribe(data => {
      this.eventBusService.publish(key, data.body);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, endpoint, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, endpoint, postCategoryReq, exId) {
    let url = exId == null ? _dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.POST_CATEGORIES.CREATE(endpoint) : _dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.POST_CATEGORIES.UPDATE(endpoint, exId);
    let observable = exId == null ? this.http.post(url, postCategoryReq) : this.http.patch(url, postCategoryReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res.body);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, endpoint, postCategoryReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function PostCategoryService_Factory(t) {
    return new (t || PostCategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: PostCategoryService,
    factory: PostCategoryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 24371:
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/mdm/organizations/components/organization-select/organization-select.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationSelectComponent: () => (/* binding */ OrganizationSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _organization_upsert_organization_upsert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../organization-upsert/organization-upsert.component */ 4327);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 46165);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_organization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/organization.service */ 37245);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);

















function OrganizationSelectComponent_util_progress_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "util-progress", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bar", true);
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
class OrganizationSelectComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  componentName() {
    return OrganizationSelectComponent.name;
  }
  constructor(eventBus, router, subContainer, authService, organizationService, popupService) {
    super(eventBus, router, subContainer);
    this.organizationService = organizationService;
    this.popupService = popupService;
    this.enableAdd = true;
    this.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.endpoint;
    this.items = [];
    this.selectedItem = null;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    if (authService.isAdmin()) {
      this.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
  }
  ngOnInit() {
    this.loading = false;
    this.search({
      page: 0,
      size: 10,
      q: null
    });
  }
  searchForEvent(event) {
    let query = _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__.TextUtility.removeSpecialCharacters(event.target?.value);
    if (query.length > 2) {
      this.search({
        page: 0,
        size: 10,
        q: query
      });
    }
  }
  onSelected(event) {
    if (event == null) {
      this.selected.emit(null);
    } else if (this.items.find(c => c.name == event.name)) {
      this.selected.emit(this.selectedItem);
    } else {
      let popup = this.popupService.open(_organization_upsert_organization_upsert_component__WEBPACK_IMPORTED_MODULE_0__.OrganizationUpsertComponent, {
        id: null,
        dialogUpsert: true,
        name: event.name
      });
      popup.componentInstance.onCompleted.subscribe(organization => {
        console.log("emitting", organization);
        this.selected.emit(organization);
      });
      popup.componentInstance.onCanceled.subscribe(() => {
        popup.close();
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.ORGANIZATIONS.SEARCH(params));
    this.organizationService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function OrganizationSelectComponent_Factory(t) {
    return new (t || OrganizationSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_organization_service__WEBPACK_IMPORTED_MODULE_8__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: OrganizationSelectComponent,
    selectors: [["app-organization-select"]],
    inputs: {
      enableAdd: "enableAdd",
      searchEndpoint: "searchEndpoint",
      selectedItem: "selectedItem"
    },
    outputs: {
      selected: "selected"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 8,
    consts: [["for", "organization-select", 1, "visually-hidden"], [3, "bar", 4, "ngIf"], ["id", "organization-select", "bindLabel", "name", "placeholder", "Search Organization", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "keyup", "ngModelChange", "change"], [3, "bar"]],
    template: function OrganizationSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, OrganizationSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ng-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function OrganizationSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function OrganizationSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function OrganizationSelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.items)("hideSelected", true)("multiple", false)("addTag", ctx.enableAdd)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](7, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__.ProgressComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4327:
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/mdm/organizations/components/organization-upsert/organization-upsert.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationUpsertComponent: () => (/* binding */ OrganizationUpsertComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v2.component */ 19870);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 46165);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _organization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../organization.component */ 39968);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_organization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/organization.service */ 37245);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _users_users_components_user_select_user_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../users/users/components/user-select/user-select.component */ 1998);
/* harmony import */ var _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/cms/files/components/filepicker/filepicker.component */ 7247);


















function OrganizationUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "util-progress", 40);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("bar", true);
  }
}
class OrganizationUpsertComponent extends _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV2 {
  constructor(eventBus, router, subContainer, route, organizationService, notifier, auth, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.organizationService = organizationService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultOrganizationConfig;
    this.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.endpoint;
    this.selectedUser = null;
    this.organizationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
      logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null),
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.minLength(3)]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(100)]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(""),
      type: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]),
      active: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(false),
      owner_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required])
    });
    if (dialogData.name != null) {
      this.organizationForm.controls.name.setValue(dialogData.name);
    }
    if (auth.isAdmin()) {
      this.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
  }
  componentName() {
    return _organization_component__WEBPACK_IMPORTED_MODULE_2__.OrganizationComponent.name;
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Organizations",
      link: "/dash/organizations",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.ORGANIZATIONS.GET(exId));
    this.organizationService.fetchSingle(key, this.endpoint, exId);
    this.subscribe(key, null, (value, meta) => {
      this.loading = false;
      this.populateForm(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      console.log(error);
      this.loading = false;
    });
  }
  onSubmit() {
    if (!this.organizationForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  onImgUploaded(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.organizationForm.controls.logo.setValue(images[0].image_url);
    }
  }
  getExImages() {
    let image = this.organizationForm.controls.logo.value;
    if (image == null) {
      return [];
    }
    return [{
      image_url: image,
      thumb_url: image
    }];
  }
  getConfig() {
    return this.config;
  }
  getListPageRoute() {
    return _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.list;
  }
  upsert(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.ORGANIZATIONS.UPSERT(exId));
    let req = this.organizationForm.value;
    this.organizationService.upsert(key, req, exId);
    this.subscribe(key, null, (value, meta) => {
      this.notifier.success("Success", "Organization has been " + (exId ? "updated" : "created"));
      this.organizationForm.reset();
      this.onSuccess(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    this.selectedUser = n.owner;
    this.organizationForm.controls.logo.setValue(n.logo);
    this.organizationForm.controls.name.setValue(n.name);
    this.organizationForm.controls.description.setValue(n.description);
    this.organizationForm.controls.type.setValue(n.type);
    this.organizationForm.controls.active.setValue(n.active);
    this.organizationForm.controls.owner_id.setValue(n.owner.id);
    this.organizationForm.controls.email.setValue(n.email);
  }
  onUserSelected($event) {
    this.selectedUser = $event;
    this.organizationForm.controls.owner_id.setValue(this.selectedUser == null ? null : this.selectedUser.id);
  }
  static #_ = this.ɵfac = function OrganizationUpsertComponent_Factory(t) {
    return new (t || OrganizationUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_5__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_organization_service__WEBPACK_IMPORTED_MODULE_6__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_7__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: OrganizationUpsertComponent,
    selectors: [["app-organization-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
    decls: 68,
    vars: 14,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_MDM_ORGANIZATIONS_COMPONENTS_ORGANIZATION_UPSERT_ORGANIZATION_UPSERT_COMPONENT_TS_1 = goog.getMsg("Name");
        i18n_0 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_MDM_ORGANIZATIONS_COMPONENTS_ORGANIZATION_UPSERT_ORGANIZATION_UPSERT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09A8\u09BE\u09AE";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Type$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_MDM_ORGANIZATIONS_COMPONENTS_ORGANIZATION_UPSERT_ORGANIZATION_UPSERT_COMPONENT_TS_3 = goog.getMsg("Type");
        i18n_2 = MSG_EXTERNAL_label_Type$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_MDM_ORGANIZATIONS_COMPONENTS_ORGANIZATION_UPSERT_ORGANIZATION_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09A7\u09B0\u09A8";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_MDM_ORGANIZATIONS_COMPONENTS_ORGANIZATION_UPSERT_ORGANIZATION_UPSERT_COMPONENT_TS_5 = goog.getMsg("Email");
        i18n_4 = MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_MDM_ORGANIZATIONS_COMPONENTS_ORGANIZATION_UPSERT_ORGANIZATION_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u0987\u09AE\u09C7\u0987\u09B2";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_MDM_ORGANIZATIONS_COMPONENTS_ORGANIZATION_UPSERT_ORGANIZATION_UPSERT_COMPONENT_TS_7 = goog.getMsg("Description");
        i18n_6 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_MDM_ORGANIZATIONS_COMPONENTS_ORGANIZATION_UPSERT_ORGANIZATION_UPSERT_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_SelectOwner$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_MDM_ORGANIZATIONS_COMPONENTS_ORGANIZATION_UPSERT_ORGANIZATION_UPSERT_COMPONENT_TS_9 = goog.getMsg("Select Owner");
        i18n_8 = MSG_EXTERNAL_label_SelectOwner$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_MDM_ORGANIZATIONS_COMPONENTS_ORGANIZATION_UPSERT_ORGANIZATION_UPSERT_COMPONENT_TS_9;
      } else {
        i18n_8 = "\u09AE\u09BE\u09B2\u09BF\u0995\u09BE\u09A8\u09BE";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "mb-3", "col-md-5"], ["for", "name-input", 1, "form-label"], i18n_0, [1, "error"], ["type", "text", "id", "name-input", "placeholder", "Enter Name", "name", "name", "formControlName", "name", 1, "form-control"], [1, "text-danger"], [1, "mb-3", "col-md-2"], ["for", "type", 1, "form-label"], i18n_2, ["id", "type", "name", "type", "formControlName", "type", 1, "form-select"], ["value", "PROPRIETARY"], ["value", "PARTNERSHIP"], ["value", "PUBLIC_LIMITED"], ["value", "PRIVATE_LIMITED"], ["value", "LIMITED_LIABILITY"], ["for", "email-input", 1, "form-label"], i18n_4, ["type", "email", "id", "email-input", "placeholder", "Enter Email", "name", "email", "formControlName", "email", 1, "form-control"], [1, "mb-3"], ["for", "description", 1, "form-label"], i18n_6, ["id", "description", "placeholder", "Enter Description", "rows", "5", "name", "description", "formControlName", "description", 1, "form-control"], [3, "title", "multiSelect", "existingImages", "required", "onUploaded"], [1, "mb-3", "mt-4", "col-md-6"], [1, "form-check", "form-check-primary", "form-checkbox-outline", "mb-3"], ["type", "checkbox", "id", "active", "formControlName", "active", 1, "form-check-input"], ["for", "active", 1, "form-check-label"], ["for", "owner", 1, "form-label"], i18n_8, ["id", "owner", 3, "selectedItem", "label", "selected"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], [3, "bar"]];
    },
    template: function OrganizationUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, OrganizationUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Create/Update Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "form", 6)(8, "div", 1)(9, "div", 7)(10, "label", 8)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 13)(19, "label", 14)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "select", 16)(25, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "Proprietary");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "Partnership");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "Public Limited");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "Private Limited");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "Limited Liability");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "div", 7)(38, "label", 22)(39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](40, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](41, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "div", 25)(45, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](46, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](47, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "app-file-picker", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onUploaded", function OrganizationUpsertComponent_Template_app_file_picker_onUploaded_50_listener($event) {
          return ctx.onImgUploaded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "div", 30)(52, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](53, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](55, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "div", 25)(57, "label", 34)(58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](59, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](61, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "app-user-select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selected", function OrganizationUpsertComponent_Template_app_user_select_selected_62_listener($event) {
          return ctx.onUserSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "div", 37)(64, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OrganizationUpsertComponent_Template_button_click_64_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function OrganizationUpsertComponent_Template_button_click_66_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.organizationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.organizationForm, "name", "minLength", "Name should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.organizationForm, "type", "required", "Type is required!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.organizationForm, "email", "invalid", "Email is invalid!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.organizationForm, "description", "minLength", "Description should be at least 20 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("title", ctx.translations["Logo"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("multiSelect", false)("existingImages", ctx.getExImages())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("selectedItem", ctx.selectedUser)("label", "Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx.organizationForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_9__.ProgressComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _users_users_components_user_select_user_select_component__WEBPACK_IMPORTED_MODULE_10__.UserSelectComponent, _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_11__.FilePickerComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 46165:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/dash/domains/mdm/organizations/models/config.model.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOrganizationConfig: () => (/* binding */ defaultOrganizationConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/modules/generic/breadcrumb/breadcrumb.model */ 97989);
/* harmony import */ var _dash_endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../dash.endpoint */ 91006);


let defaultOrganizationConfig = {
  defaultLayout: _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.GRID,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  searchEndpoint: _dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.ORGANIZATIONS.ORGANIZATION_ENDPOINT,
  delEndpoint: _dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.ORGANIZATIONS.ORGANIZATION_ENDPOINT
};
let selfEndpoints = {
  endpoint: _dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.ORGANIZATIONS.ORGANIZATION_ENDPOINT,
  adminEndpoint: _dash_endpoint__WEBPACK_IMPORTED_MODULE_1__.DashEndpoint.ORGANIZATIONS.ORGANIZATION_ENDPOINT_ADMIN
};
let selfRoutes = {
  list: "/dash/organizations",
  create: "/dash/organizations/create",
  update(id) {
    return id == null ? this.create : "/dash/organizations/" + id + '/update';
  }
};

/***/ }),

/***/ 39968:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/dash/domains/mdm/organizations/organization.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationComponent: () => (/* binding */ OrganizationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class OrganizationComponent {
  static #_ = this.ɵfac = function OrganizationComponent_Factory(t) {
    return new (t || OrganizationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: OrganizationComponent,
    selectors: [["app-organization"]],
    decls: 1,
    vars: 0,
    template: function OrganizationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-organization-list");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 77442:
/*!*************************************************************!*\
  !*** ./src/app/modules/dash/domains/users/user.endpoint.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserEndpoints: () => (/* binding */ UserEndpoints)
/* harmony export */ });
/* harmony import */ var _base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../base/endpoints/base.endpoint */ 92495);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);



class UserEndpoints extends _base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint {
  constructor() {
    super();
  }
  static #_ = this.USERS = {
    USER_ENDPOINT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/users',
    USER_ENDPOINT_ADMIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/admin/users',
    SEARCH(endpoint, params) {
      return endpoint.concat(_base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params));
    },
    CREATE() {
      return this.USER_ENDPOINT;
    },
    GET(endpoint, id) {
      return endpoint + '/' + id;
    },
    CHECK_USERNAME(params) {
      return _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + "/api/v1/public/register/check-username" + _base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params);
    },
    UPDATE(id) {
      return this.USER_ENDPOINT + '/' + id;
    }
  };
  static #_2 = this.ɵfac = function UserEndpoints_Factory(t) {
    return new (t || UserEndpoints)();
  };
  static #_3 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: UserEndpoints,
    factory: UserEndpoints.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1998:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/users/users/components/user-select/user-select.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSelectComponent: () => (/* binding */ UserSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _user_upsert_user_upsert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-upsert/user-upsert.component */ 60783);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 28502);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user.service */ 16925);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);

















function UserSelectComponent_util_progress_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "util-progress", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bar", true);
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
class UserSelectComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  componentName() {
    return "UserSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, userService, popupService) {
    super(eventBus, router, subContainer);
    this.userService = userService;
    this.popupService = popupService;
    this.enableAdd = true;
    this.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.endpoint;
    this.items = [];
    this.label = "User";
    this.selectedItem = null;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    if (authService.isAdmin()) {
      this.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
  }
  ngOnInit() {
    this.loading = false;
    this.search({
      page: 0,
      size: 10,
      q: null
    });
  }
  searchForEvent(event) {
    let query = _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__.TextUtility.removeSpecialCharacters(event.target?.value);
    if (query.length > 2) {
      this.search({
        page: 0,
        size: 10,
        q: query
      });
    }
  }
  onSelected(event) {
    if (event == null) {
      this.selected.emit(null);
    } else if (this.items.find(c => c.name == event.name)) {
      this.selected.emit(this.selectedItem);
    } else {
      let popup = this.popupService.open(_user_upsert_user_upsert_component__WEBPACK_IMPORTED_MODULE_0__.UserUpsertComponent, {
        id: null,
        title: event.title
      });
      popup.componentInstance.onCompleted.subscribe(user => {
        this.selected.emit(user);
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.USERS.SEARCH(params));
    this.userService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function UserSelectComponent_Factory(t) {
    return new (t || UserSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: UserSelectComponent,
    selectors: [["app-user-select"]],
    inputs: {
      enableAdd: "enableAdd",
      searchEndpoint: "searchEndpoint",
      label: "label",
      selectedItem: "selectedItem"
    },
    outputs: {
      selected: "selected"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 9,
    consts: [["for", "user-select", 1, "visually-hidden"], [3, "bar", 4, "ngIf"], ["id", "user-select", "bindLabel", "label", "placeholder", "Search User", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "keyup", "ngModelChange", "change"], [3, "bar"]],
    template: function UserSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, UserSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ng-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function UserSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function UserSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function UserSelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.items)("hideSelected", true)("multiple", false)("addTag", ctx.enableAdd)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](8, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__.ProgressComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 60783:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/users/users/components/user-upsert/user-upsert.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserUpsertComponent: () => (/* binding */ UserUpsertComponent)
/* harmony export */ });
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 28502);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v3.component */ 59890);
/* harmony import */ var _user_endpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../user.endpoint */ 77442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user.service */ 16925);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/cms/files/components/filepicker/filepicker.component */ 7247);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);

















function UserUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "util-progress", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bar", true);
  }
}
class UserUpsertComponent extends _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_2__.BaseUpsertComponentV3 {
  constructor(eventBus, router, subContainer, route, userService, notifier, authService, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.userService = userService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.defaultUserConfig;
    this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(3)]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.minLength(20)]),
      image: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null)
    });
    if (dialogData.title != null) {
      this.userForm.controls.title.setValue(dialogData.title);
    }
    if (authService.isAdmin()) {
      this.config.endpoint = _user_endpoint__WEBPACK_IMPORTED_MODULE_3__.UserEndpoints.USERS.USER_ENDPOINT_ADMIN;
    }
  }
  componentName() {
    return "UserUpsertComponent";
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Users",
      link: "/dash/users",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.USERS.GET(exId));
    this.userService.fetchSingle(key, this.config.endpoint, exId);
    this.subscribe(key, null, (value, meta) => {
      this.loading = false;
      this.populateForm(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      console.log(error);
      this.loading = false;
    });
  }
  onSubmit() {
    if (!this.userForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  onImgUploaded(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.userForm.controls.image.setValue(images[0].image_url);
    }
  }
  getExImages() {
    let image = this.userForm.controls.image.value;
    if (image == null) {
      return [];
    }
    return [{
      image_url: image,
      thumb_url: image
    }];
  }
  getConfig() {
    return this.config;
  }
  getListPageRoute() {
    return _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfRoutes.list;
  }
  upsert(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.USERS.UPSERT(exId));
    // @ts-ignore
    this.userService.upsert(key, this.userForm.value, exId);
    this.subscribe(key, null, (value, meta) => {
      this.loading = false;
      let message = "User has been " + (exId ? "updated" : "created");
      this.notifier.success("Success", message);
      this.userForm.reset();
      if (this.config.upsertOnDialog) {
        this.onCompleted.emit(meta.data);
      } else {
        this.navigateToListPage();
      }
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    // this.userForm.controls.title.setValue(n.title)
    // this.userForm.controls.description.setValue(n.description)
    // this.userForm.controls.image.setValue(n.image == null ? null : n.image)
  }
  static #_ = this.ɵfac = function UserUpsertComponent_Factory(t) {
    return new (t || UserUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_5__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_7__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: UserUpsertComponent,
    selectors: [["app-user-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 28,
    vars: 10,
    consts: [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "mb-3"], ["for", "title-input", 1, "form-label"], [1, "error"], ["type", "text", "id", "title-input", "placeholder", "Enter Title", "name", "title", "formControlName", "title", 1, "form-control"], [1, "text-danger"], ["for", "description", 1, "form-label"], ["id", "description", "placeholder", "Enter Description", "rows", "5", "name", "description", "formControlName", "description", 1, "form-control"], [3, "title", "multiSelect", "existingImages", "required", "onUploaded"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], [3, "bar"]],
    template: function UserUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, UserUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Create/Update User");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "form", 6)(8, "div", 7)(9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "em", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "div", 7)(17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "app-file-picker", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onUploaded", function UserUpsertComponent_Template_app_file_picker_onUploaded_22_listener($event) {
          return ctx.onImgUploaded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 15)(24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserUpsertComponent_Template_button_click_24_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserUpsertComponent_Template_button_click_26_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.userForm, "title", "minLength", "Title should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.userForm, "description", "minLength", "Description should be at least 20 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("title", ctx.translations["Image"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("multiSelect", false)("existingImages", ctx.getExImages())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx.userForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_9__.FilePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__.ProgressComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 28502:
/*!*************************************************************************!*\
  !*** ./src/app/modules/dash/domains/users/users/models/config.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultUserConfig: () => (/* binding */ defaultUserConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/modules/generic/breadcrumb/breadcrumb.model */ 97989);
/* harmony import */ var _user_endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user.endpoint */ 77442);


let defaultUserConfig = {
  defaultLayout: _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.GRID,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  endpoint: _user_endpoint__WEBPACK_IMPORTED_MODULE_1__.UserEndpoints.USERS.USER_ENDPOINT,
  delEndpoint: _user_endpoint__WEBPACK_IMPORTED_MODULE_1__.UserEndpoints.USERS.USER_ENDPOINT
};
let selfEndpoints = {
  endpoint: _user_endpoint__WEBPACK_IMPORTED_MODULE_1__.UserEndpoints.USERS.USER_ENDPOINT,
  adminEndpoint: _user_endpoint__WEBPACK_IMPORTED_MODULE_1__.UserEndpoints.USERS.USER_ENDPOINT_ADMIN
};
let selfRoutes = {
  list: "/dash/users",
  create: "/dash/users/create",
  update(id) {
    return id == null ? this.create : "/dash/users/" + id + '/update';
  }
};

/***/ }),

/***/ 16925:
/*!***************************************************************************!*\
  !*** ./src/app/modules/dash/domains/users/users/services/user.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _user_endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user.endpoint */ 77442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class UserService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _user_endpoint__WEBPACK_IMPORTED_MODULE_1__.UserEndpoints.USERS.SEARCH(endpoint, params);
    this.http.get(url).subscribe(user => {
      this.eventBusService.publish(key, user);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, endpoint, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, endpoint, id) {
    this.http.get(_user_endpoint__WEBPACK_IMPORTED_MODULE_1__.UserEndpoints.USERS.GET(endpoint, id)).subscribe(user => {
      this.eventBusService.publish(key, user);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, endpoint, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, userReq, exId) {
    let endpoint = exId == null ? _user_endpoint__WEBPACK_IMPORTED_MODULE_1__.UserEndpoints.USERS.CREATE() : _user_endpoint__WEBPACK_IMPORTED_MODULE_1__.UserEndpoints.USERS.UPDATE(exId);
    let observable = exId == null ? this.http.post(endpoint, userReq) : this.http.patch(endpoint, userReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, userReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  checkUsername(key, username) {
    this.http.get(_user_endpoint__WEBPACK_IMPORTED_MODULE_1__.UserEndpoints.USERS.CHECK_USERNAME({
      username: username
    })).subscribe(res => {
      this.eventBusService.publish(key, res);
    }, error => {
      this.handleError(error, auth => {
        this.checkUsername(key, username);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function UserService_Factory(t) {
    return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_dash_domains_blog_blogposts_components_blogpost-list_blogpost-list_co-6325ed.js.map