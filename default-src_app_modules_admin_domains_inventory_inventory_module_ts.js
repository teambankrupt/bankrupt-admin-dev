"use strict";
(self["webpackChunkbankrupt_frontend"] = self["webpackChunkbankrupt_frontend"] || []).push([["default-src_app_modules_admin_domains_inventory_inventory_module_ts"],{

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
/* harmony import */ var _modules_admin_components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/admin/components/breadcrumb/breadcrumb.model */ 46405);
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
    this.Layout = _modules_admin_components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__.Layout;
    this.StringUtil = _utils_string_util__WEBPACK_IMPORTED_MODULE_2__.StringUtil;
    this.breadcrumbItems = [];
    this.layout = _modules_admin_components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_1__.Layout.GRID;
    this.breadcrumbItems = this.getBreadcrumbItems();
  }
  ngOnInit() {
    let key = this.getConfig().endpoint;
    let layout = _services_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService.retrieve(key);
    if (layout != null) {
      this.layout = parseInt(layout);
    } else {
      this.layout = this.getConfig().defaultLayout;
    }
    this.initialize();
  }
  onLayoutSelected(layout) {
    this.layout = layout;
    _services_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService.put(this.getConfig().endpoint, this.layout.toString());
  }
  openUpsertComponent(id) {
    let upsertComponent = this.getUpsertComponent();
    if (upsertComponent == null) {
      return;
    }
    this.popup.open(upsertComponent, {
      id: id
    });
    this.popup.onCompleted.subscribe(result => {
      this.ngOnInit();
      if (result != null) {
        this.onUpsertSuccess(result);
      }
      console.log("onSuccess. closing dialog");
    });
    this.popup.onCanceled.subscribe(() => {
      console.log("onCanceled. closing dialog");
    });
  }
  onUpsertClick(id) {
    if (this.getConfig().upsertOnDialog) {
      this.openUpsertComponent(id);
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
      animation: [(0,_animations_component_animation__WEBPACK_IMPORTED_MODULE_3__.slideIn)('onGrid', 'left'), (0,_animations_component_animation__WEBPACK_IMPORTED_MODULE_3__.slideIn)('onColumn', 'right')]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _animations_component_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations/component.animation */ 98743);
/* harmony import */ var _modules_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/subscription-container.service */ 86945);









class BaseUpsertComponentV3 extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(eventBus, router, subContainer, route, dialogData) {
    super(eventBus, router, subContainer);
    this.route = route;
    this.dialogData = dialogData;
    this.breadcrumbItems = [];
    this.onCanceled = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.onCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.filterData = null;
    this.exId = null;
    this.dialogUpsert = false;
    this.breadcrumbItems = this.getBreadcrumbItems();
    this.dialogUpsert = dialogData.dialogUpsert != null;
  }
  ngOnInit() {
    this.loading = false;
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
    return new (t || BaseUpsertComponentV3)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: BaseUpsertComponentV3,
    selectors: [["ng-component"]],
    outputs: {
      onCanceled: "onCanceled",
      onCompleted: "onCompleted"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
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

/***/ 30991:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/attributes/attribute.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributeComponent: () => (/* binding */ AttributeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_attribute_list_attribute_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/attribute-list/attribute-list.component */ 11109);


class AttributeComponent {
  static #_ = this.ɵfac = function AttributeComponent_Factory(t) {
    return new (t || AttributeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AttributeComponent,
    selectors: [["app-attribute"]],
    decls: 1,
    vars: 0,
    template: function AttributeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-attribute-list");
      }
    },
    dependencies: [_components_attribute_list_attribute_list_component__WEBPACK_IMPORTED_MODULE_0__.AttributeListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 11109:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/attributes/components/attribute-list/attribute-list.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributeListComponent: () => (/* binding */ AttributeListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v2.component */ 92159);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 4540);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _attribute_upsert_attribute_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../attribute-upsert/attribute-upsert.component */ 78479);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_attribute_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/attribute.service */ 11459);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../components/breadcrumb/breadcrumb.component */ 43383);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);






















function AttributeListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "util-progress", 8);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("bar", true);
  }
}
function AttributeListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Cooking your data, please wait..");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function AttributeListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "No items");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function AttributeListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 0)(3, "div", 11)(4, "div", 12)(5, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, AttributeListComponent_div_8_h4_7_Template, 2, 0, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, AttributeListComponent_div_8_h4_8_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 17)(10, "div", 18)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function AttributeListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function AttributeListComponent_div_9_div_1_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function AttributeListComponent_div_9_div_1_tr_27_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.created_by);
  }
}
function AttributeListComponent_div_9_div_1_tr_27_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 32)(1, "app-delete", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function AttributeListComponent_div_9_div_1_tr_27_td_22_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r14.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r12.config.delEndpoint + "/" + item_r10.id);
  }
}
function AttributeListComponent_div_9_div_1_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, AttributeListComponent_div_9_div_1_tr_27_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "td")(5, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AttributeListComponent_div_9_div_1_tr_27_Template_a_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r18);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r17.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "td")(12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](14, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "td")(16, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "td", 32)(20, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AttributeListComponent_div_9_div_1_tr_27_Template_a_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r18);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r19.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, AttributeListComponent_div_9_div_1_tr_27_td_22_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r9.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.priority_level);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](14, 8, item_r10.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 10, item_r10.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r9.config.showDeleteButton);
  }
}
function AttributeListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Attributes that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 28)(7, "table", 29)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, AttributeListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18, "Priority Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](20, "Created At");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](22, "Last Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](24, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](25, AttributeListComponent_div_9_div_1_th_25_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](27, AttributeListComponent_div_9_div_1_tr_27_Template, 23, 12, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r5.attributes.content);
  }
}
function AttributeListComponent_div_9_div_2_div_1_h6_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h6", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("By ", item_r21.created_by, "");
  }
}
function AttributeListComponent_div_9_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 57)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 1, item_r21.updated_at), " ");
  }
}
function AttributeListComponent_div_9_div_2_div_1_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function AttributeListComponent_div_9_div_2_div_1_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 53)(1, "app-delete", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function AttributeListComponent_div_9_div_2_div_1_div_34_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r28.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r25.config.delEndpoint + "/" + item_r21.id)("look", "bx");
  }
}
function AttributeListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "div", 26)(3, "div", 40)(4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "h5", 42)(7, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AttributeListComponent_div_9_div_2_div_1_Template_a_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r31.onUpsertClick(item_r21.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, AttributeListComponent_div_9_div_2_div_1_h6_9_Template, 2, 1, "h6", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 0)(11, "div", 45)(12, "p", 46)(13, "small")(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div", 45)(20, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, AttributeListComponent_div_9_div_2_div_1_small_21_Template, 6, 3, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, AttributeListComponent_div_9_div_2_div_1_small_22_Template, 6, 0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "div")(26, "a", 49)(27, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "div", 51)(30, "div", 52)(31, "div", 53)(32, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AttributeListComponent_div_9_div_2_div_1_Template_a_click_32_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r33.onUpsertClick(item_r21.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](34, AttributeListComponent_div_9_div_2_div_1_div_34_Template, 2, 2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r21.name.substring(0, 1).toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r21.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r20.config.showUserFilter && item_r21.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 9, item_r21.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r21.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r21.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r20.StringUtil.takeOnly(item_r21.description, 50, true), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r21.priority_level);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r20.config.showDeleteButton);
  }
}
function AttributeListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, AttributeListComponent_div_9_div_2_div_1_Template, 35, 11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r6.attributes.content);
  }
}
function AttributeListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, AttributeListComponent_div_9_div_1_Template, 28, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, AttributeListComponent_div_9_div_2_Template, 2, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "app-pagination", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("page", ctx_r2.attributes);
  }
}
class AttributeListComponent extends _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV2 {
  componentName() {
    return "AttributeListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, attributeService, notifier) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.attributeService = attributeService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultAttributeConfig;
    this.attributes = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    if (authService.isAdmin()) {
      this.config.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__.InventoryEndpoints.ATTRIBUTES.ATTRIBUTE_ENDPOINT;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      let filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__.parseFilterData)(params);
      this.fetchAttributes({
        q: filterData.query,
        username: filterData.username,
        from_date: filterData.fromDate,
        to_date: filterData.toDate,
        page: filterData.page,
        size: filterData.size
      });
    });
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Attributes",
      link: null,
      active: true
    }];
  }
  fetchAttributes(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.ATTRIBUTES.SEARCH(params));
    this.attributeService.search(key, this.config.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.attributes = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "Attribute is deleted");
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
      params: {}
    };
  }
  getUpsertComponent() {
    return _attribute_upsert_attribute_upsert_component__WEBPACK_IMPORTED_MODULE_5__.AttributeUpsertComponent;
  }
  static #_ = this.ɵfac = function AttributeListComponent_Factory(t) {
    return new (t || AttributeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_attribute_service__WEBPACK_IMPORTED_MODULE_11__.AttributeService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__.NotifierService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: AttributeListComponent,
    selectors: [["app-attribute-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]],
    decls: 10,
    vars: 6,
    consts: [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "/assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], [1, "text-uppercase"], ["class", "row", 4, "ngIf"], [3, "page"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], [4, "ngFor", "ngForOf"], ["href", "javascript: void(0);", 3, "click"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "bg-success", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "font-size-10", "text-info"], [1, "font-size-10"], [3, "requestUrl", "look", "deleteItemEvent"]],
    template: function AttributeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("layoutSelected", function AttributeListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("addButtonClick", function AttributeListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, AttributeListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, AttributeListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, AttributeListComponent_div_9_Template, 4, 3, "div", 7);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("title", "Attributes")("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.attributes.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.attributes.empty);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78479:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/attributes/components/attribute-upsert/attribute-upsert.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributeUpsertComponent: () => (/* binding */ AttributeUpsertComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v2.component */ 19870);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 4540);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_attribute_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/attribute.service */ 11459);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);














function AttributeUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "util-progress", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("bar", true);
  }
}
class AttributeUpsertComponent extends _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV2 {
  constructor(eventBus, router, subContainer, route, attributeService, notifier, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.attributeService = attributeService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultAttributeConfig;
    this.attributeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3)]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(20)]),
      priority_level: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(1, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(10)])
    });
  }
  componentName() {
    return "AttributeUpsertComponent";
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Attributes",
      link: "/admin/attributes",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.ATTRIBUTES.GET(exId));
    this.attributeService.fetchSingle(key, exId);
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
    if (!this.attributeForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  getConfig() {
    return this.config;
  }
  getListPageRoute() {
    return _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.list;
  }
  upsert(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.ATTRIBUTES.UPSERT(exId));
    // @ts-ignore
    this.attributeService.upsert(key, this.attributeForm.value, exId);
    this.subscribe(key, null, (value, meta) => {
      this.loading = false;
      let message = "Attribute has been " + (exId ? "updated" : "created");
      this.notifier.success("Success", message);
      this.attributeForm.reset();
      if (this.config.upsertOnDialog) {
        this.onCompleted.emit(meta.data);
      } else {
        this.navigate(_models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.list, value => {
          this.notifier.success("Success!", message);
        });
      }
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    this.attributeForm.controls.name.setValue(n.name);
    this.attributeForm.controls.description.setValue(n.description);
    this.attributeForm.controls.priority_level.setValue(n.priority_level);
  }
  static #_ = this.ɵfac = function AttributeUpsertComponent_Factory(t) {
    return new (t || AttributeUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_attribute_service__WEBPACK_IMPORTED_MODULE_5__.AttributeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: AttributeUpsertComponent,
    selectors: [["app-attribute-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 33,
    vars: 7,
    consts: [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "mb-3"], ["for", "title-input", 1, "form-label"], [1, "error"], ["type", "text", "id", "title-input", "placeholder", "Enter Name", "name", "name", "formControlName", "name", 1, "form-control"], [1, "text-danger"], ["for", "description", 1, "form-label"], ["id", "description", "placeholder", "Enter Description", "rows", "5", "name", "description", "formControlName", "description", 1, "form-control"], ["type", "number", "id", "priority_level", "placeholder", "Priority Level", "name", "priority_level", "formControlName", "priority_level", 1, "form-control"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], [3, "bar"]],
    template: function AttributeUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, AttributeUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Create/Update Attribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "form", 6)(8, "div", 7)(9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "em", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 7)(17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 7)(23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Priority Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 15)(29, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AttributeUpsertComponent_Template_button_click_29_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AttributeUpsertComponent_Template_button_click_31_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.attributeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.attributeForm, "name", "minLength", "Title should be at least 4 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.attributeForm, "description", "minLength", "Description should be at least 20 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.attributeForm, "priority_level", "min", "Priority must be between 0 to 10"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.attributeForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__.ProgressComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4540:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/attributes/models/config.model.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAttributeConfig: () => (/* binding */ defaultAttributeConfig),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/breadcrumb/breadcrumb.model */ 46405);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);


let defaultAttributeConfig = {
  defaultLayout: _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.COLUMN,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  searchEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.ATTRIBUTES.ATTRIBUTE_ENDPOINT,
  delEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.ATTRIBUTES.ATTRIBUTE_ENDPOINT
};
let selfRoutes = {
  list: "/admin/attributes",
  create: "/admin/attributes/create",
  update(id) {
    return id == null ? this.create : "/admin/attributes/" + id + '/update';
  }
};

/***/ }),

/***/ 11459:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/attributes/services/attribute.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributeService: () => (/* binding */ AttributeService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class AttributeService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.ATTRIBUTES.SEARCH(endpoint, params);
    this.http.get(url).subscribe(attribute => {
      this.eventBusService.publish(key, attribute);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, endpoint, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, id) {
    this.http.get(_inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.ATTRIBUTES.GET(id)).subscribe(attribute => {
      this.eventBusService.publish(key, attribute);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, attributeReq, exId) {
    let endpoint = exId == null ? _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.ATTRIBUTES.CREATE() : _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.ATTRIBUTES.UPDATE(exId);
    let observable = exId == null ? this.http.post(endpoint, attributeReq) : this.http.patch(endpoint, attributeReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, attributeReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function AttributeService_Factory(t) {
    return new (t || AttributeService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: AttributeService,
    factory: AttributeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 35177:
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/brands/brand.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandComponent: () => (/* binding */ BrandComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/brand-list/brand-list.component */ 70027);


class BrandComponent {
  static #_ = this.ɵfac = function BrandComponent_Factory(t) {
    return new (t || BrandComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BrandComponent,
    selectors: [["app-brand"]],
    decls: 1,
    vars: 0,
    template: function BrandComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-brand-list");
      }
    },
    dependencies: [_components_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_0__.BrandListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 70027:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/brands/components/brand-list/brand-list.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandListComponent: () => (/* binding */ BrandListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v2.component */ 92159);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 41470);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _brand_upsert_brand_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../brand-upsert/brand-upsert.component */ 49107);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/brand.service */ 67210);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../components/breadcrumb/breadcrumb.component */ 43383);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);






















function BrandListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("bar", true);
  }
}
function BrandListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function BrandListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function BrandListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, BrandListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, BrandListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 18)(10, "div", 19)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function BrandListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function BrandListComponent_div_9_div_1_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function BrandListComponent_div_9_div_1_tr_27_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.created_by);
  }
}
function BrandListComponent_div_9_div_1_tr_27_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r10.name.substring(0, 1).toUpperCase(), " ");
  }
}
function BrandListComponent_div_9_div_1_tr_27_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "img", 52);
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", item_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}
function BrandListComponent_div_9_div_1_tr_27_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 47)(1, "app-delete", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function BrandListComponent_div_9_div_1_tr_27_td_24_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r18.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r14.config.delEndpoint + "/" + item_r10.id);
  }
}
function BrandListComponent_div_9_div_1_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, BrandListComponent_div_9_div_1_tr_27_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "td")(5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, BrandListComponent_div_9_div_1_tr_27_span_6_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, BrandListComponent_div_9_div_1_tr_27_img_7_Template, 1, 1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "td")(9, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function BrandListComponent_div_9_div_1_tr_27_Template_a_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r22);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r21.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "td")(14, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](16, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "td")(18, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](20, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "td", 47)(22, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function BrandListComponent_div_9_div_1_tr_27_Template_a_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r22);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r23.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](23, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](24, BrandListComponent_div_9_div_1_tr_27_td_24_Template, 2, 1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r9.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r10.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r10.image != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r9.StringUtil.takeOnly(item_r10.description, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](16, 9, item_r10.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](20, 11, item_r10.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r9.config.showDeleteButton);
  }
}
function BrandListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](5, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 31)(7, "table", 32)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](11, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, BrandListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](14, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](16, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](18, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](20, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](22, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](24, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](25, BrandListComponent_div_9_div_1_th_25_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](27, BrandListComponent_div_9_div_1_tr_27_Template, 25, 13, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r5.brands.content);
  }
}
function BrandListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", item_r25.image, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}
function BrandListComponent_div_9_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 71)(1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r25.name.substring(0, 1).toUpperCase(), " ");
  }
}
function BrandListComponent_div_9_div_2_div_1_h6_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h6", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("By ", item_r25.created_by, "");
  }
}
function BrandListComponent_div_9_div_2_div_1_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 73)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](2, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 1, item_r25.updated_at), " ");
  }
}
function BrandListComponent_div_9_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function BrandListComponent_div_9_div_2_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 75)(1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function BrandListComponent_div_9_div_2_div_1_div_26_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r39);
      const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r37.onUpsertClick(item_r25.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function BrandListComponent_div_9_div_2_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 75)(1, "app-delete", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function BrandListComponent_div_9_div_2_div_1_div_27_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r40.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r32.config.delEndpoint + "/" + item_r25.id)("look", "bx");
  }
}
function BrandListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, BrandListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, BrandListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "h5", 59)(6, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function BrandListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const item_r25 = restoredCtx.$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r43.onUpsertClick(item_r25.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, BrandListComponent_div_9_div_2_div_1_h6_8_Template, 2, 1, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 0)(10, "div", 62)(11, "p", 63)(12, "small")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](14, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](17, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "div", 62)(19, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, BrandListComponent_div_9_div_2_div_1_small_20_Template, 6, 3, "small", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, BrandListComponent_div_9_div_2_div_1_small_21_Template, 6, 0, "small", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "div", 67)(25, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](26, BrandListComponent_div_9_div_2_div_1_div_26_Template, 3, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](27, BrandListComponent_div_9_div_2_div_1_div_27_Template, 2, 2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r25.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r25.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r25.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r24.config.showUserFilter && item_r25.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](17, 10, item_r25.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r25.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r25.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r24.StringUtil.takeOnly(item_r25.description, 50, true), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r24.config.showUpdateButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r24.config.showDeleteButton);
  }
}
function BrandListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, BrandListComponent_div_9_div_2_div_1_Template, 28, 12, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r6.brands.content);
  }
}
function BrandListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, BrandListComponent_div_9_div_1_Template, 28, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, BrandListComponent_div_9_div_2_Template, 2, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.GRID);
  }
}
class BrandListComponent extends _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV2 {
  componentName() {
    return "BrandListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, brandService, notifier) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.brandService = brandService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultBrandConfig;
    this.brands = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    if (authService.isAdmin()) {
      this.config.showUpdateButton = true;
      this.config.showDeleteButton = true;
      this.config.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__.InventoryEndpoints.BRANDS.BRAND_ENDPOINT_ADMIN;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      let filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__.parseFilterData)(params);
      this.fetchBrands({
        q: filterData.query,
        username: filterData.username,
        from_date: filterData.fromDate,
        to_date: filterData.toDate,
        page: filterData.page,
        size: filterData.size
      });
    });
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: this.translations["Brands"],
      link: null,
      active: true
    }];
  }
  fetchBrands(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.BRANDS.SEARCH(params));
    this.brandService.search(key, this.config.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.brands = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "Brand is deleted");
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
      params: {}
    };
  }
  getUpsertComponent() {
    return _brand_upsert_brand_upsert_component__WEBPACK_IMPORTED_MODULE_5__.BrandUpsertComponent;
  }
  static #_ = this.ɵfac = function BrandListComponent_Factory(t) {
    return new (t || BrandListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_brand_service__WEBPACK_IMPORTED_MODULE_11__.BrandService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__.NotifierService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: BrandListComponent,
    selectors: [["app-brand-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Brands$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___5 = goog.getMsg("Available Brands");
        i18n_4 = MSG_EXTERNAL_msg_Brands$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u09AC\u09CD\u09B0\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1 \u09B8\u09AE\u09C2\u09B9";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___7 = goog.getMsg("Id");
        i18n_6 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "Id";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___9 = goog.getMsg("Image");
        i18n_8 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u099B\u09AC\u09BF";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___11 = goog.getMsg("Title");
        i18n_10 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___13 = goog.getMsg("Description");
        i18n_12 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___15 = goog.getMsg("Created At");
        i18n_14 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___17 = goog.getMsg("Last Updated");
        i18n_16 = MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u09B8\u09B0\u09CD\u09AC\u09B6\u09C7\u09B7 \u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___19 = goog.getMsg("Update");
        i18n_18 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS____21 = goog.getMsg("Created By");
        i18n_20 = MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS____21;
      } else {
        i18n_20 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS____23 = goog.getMsg("Delete");
        i18n_22 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS____23;
      } else {
        i18n_22 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS____25 = goog.getMsg("Created At");
        i18n_24 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS____25;
      } else {
        i18n_24 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_updatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS_____27 = goog.getMsg("Updated");
        i18n_26 = MSG_EXTERNAL_label_updatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS_____27;
      } else {
        i18n_26 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "/assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], i18n_4, [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, [4, "ngFor", "ngForOf"], i18n_20, i18n_22, [1, "avatar-sm", "mx-auto"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], i18n_24, [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [1, "font-size-10"], i18n_26, [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], [3, "requestUrl", "look", "deleteItemEvent"]];
    },
    template: function BrandListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("layoutSelected", function BrandListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("addButtonClick", function BrandListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, BrandListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, BrandListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, BrandListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("title", ctx.translations["Brands"])("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.brands.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.brands.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("page", ctx.brands);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 73019:
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/brands/components/brand-select/brand-select.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandSelectComponent: () => (/* binding */ BrandSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _brand_upsert_brand_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../brand-upsert/brand-upsert.component */ 49107);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/brand.service */ 67210);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);

















function BrandSelectComponent_util_progress_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "util-progress", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bar", true);
  }
}
const _c2 = function () {
  return {
    standalone: true
  };
};
class BrandSelectComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  componentName() {
    return "BrandSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, brandService, popupService) {
    super(eventBus, router, subContainer);
    this.brandService = brandService;
    this.popupService = popupService;
    this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_3__.InventoryEndpoints.BRANDS.BRAND_ENDPOINT;
    this.items = [];
    this.selectedItem = null;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    if (authService.isAdmin()) {
      this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_3__.InventoryEndpoints.BRANDS.BRAND_ENDPOINT_ADMIN;
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
    let query = _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__.TextUtility.removeSpecialCharacters(event.target?.value);
    if (query.length > 2) {
      this.search({
        page: 0,
        size: 10,
        q: query
      });
    }
  }
  onSelected(event) {
    if (this.items.find(c => c.name == event.name)) {
      this.selected.emit(this.selectedItem);
    } else {
      let popup = this.popupService.open(_brand_upsert_brand_upsert_component__WEBPACK_IMPORTED_MODULE_4__.BrandUpsertComponent, {
        id: null,
        name: event.name
      });
      popup.componentInstance.onCompleted.subscribe(brand => {
        this.selected.emit(brand);
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.BRANDS.SEARCH(params));
    this.brandService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function BrandSelectComponent_Factory(t) {
    return new (t || BrandSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_brand_service__WEBPACK_IMPORTED_MODULE_8__.BrandService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: BrandSelectComponent,
    selectors: [["app-brand-select"]],
    inputs: {
      searchEndpoint: "searchEndpoint",
      selectedItem: "selectedItem"
    },
    outputs: {
      selected: "selected"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 9,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Brand$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_SELECT_BRAND_SELECT_COMPONENT_TS_1 = goog.getMsg("Brand");
        i18n_0 = MSG_EXTERNAL_label_Brand$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_SELECT_BRAND_SELECT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09AC\u09CD\u09B0\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1";
      }
      return [["for", "autoSizingInput2", 1, "visually-hidden"], i18n_0, [3, "bar", 4, "ngIf"], ["id", "autoSizingInput2", "bindLabel", "name", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "placeholder", "keyup", "ngModelChange", "change"], [3, "bar"]];
    },
    template: function BrandSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, BrandSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ng-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function BrandSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function BrandSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function BrandSelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Search Brand"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.items)("hideSelected", true)("multiple", false)("addTag", true)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](8, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__.ProgressComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 49107:
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/brands/components/brand-upsert/brand-upsert.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandUpsertComponent: () => (/* binding */ BrandUpsertComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v2.component */ 19870);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 41470);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/brand.service */ 67210);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/cms/files/components/filepicker/filepicker.component */ 7247);















function BrandUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "util-progress", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("bar", true);
  }
}
class BrandUpsertComponent extends _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV2 {
  constructor(eventBus, router, subContainer, route, brandService, notifier, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.brandService = brandService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultBrandConfig;
    this.brandForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(3)]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(10)]),
      image: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null)
    });
    if (dialogData.name != null) {
      this.brandForm.controls.name.setValue(dialogData.name);
    }
  }
  componentName() {
    return "BrandUpsertComponent";
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Brands",
      link: "/admin/brands",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.BRANDS.GET(exId));
    this.brandService.fetchSingle(key, exId);
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
    if (!this.brandForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  onImgUploaded(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.brandForm.controls.image.setValue(images[0].image_url);
    }
  }
  getExImages() {
    let image = this.brandForm.controls.image.value;
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
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.BRANDS.UPSERT(exId));
    // @ts-ignore
    this.brandService.upsert(key, this.brandForm.value, exId);
    this.subscribe(key, null, (value, meta) => {
      this.loading = false;
      let message = "Brand has been " + (exId ? "updated" : "created");
      this.notifier.success("Success", message);
      this.brandForm.reset();
      if (this.config.upsertOnDialog) {
        this.onCompleted.emit(meta.data);
      } else {
        this.navigate(_models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.list, value => {
          this.notifier.success("Success!", message);
        });
      }
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    this.brandForm.controls.name.setValue(n.name);
    this.brandForm.controls.description.setValue(n.description);
    this.brandForm.controls.image.setValue(n.image == null ? null : n.image);
  }
  static #_ = this.ɵfac = function BrandUpsertComponent_Factory(t) {
    return new (t || BrandUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_brand_service__WEBPACK_IMPORTED_MODULE_5__.BrandService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: BrandUpsertComponent,
    selectors: [["app-brand-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 31,
    vars: 12,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpsertBrand$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_UPSERT_BRAND_UPSERT_COMPONENT_TS_1 = goog.getMsg("Create/Update Brand");
        i18n_0 = MSG_EXTERNAL_label_UpsertBrand$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_UPSERT_BRAND_UPSERT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09AC\u09CD\u09B0\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1 \u09A4\u09C8\u09B0\u09BF/\u0986\u09AA\u09A1\u09C7\u099F \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_UPSERT_BRAND_UPSERT_COMPONENT_TS_3 = goog.getMsg("Name");
        i18n_2 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_UPSERT_BRAND_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09A8\u09BE\u09AE";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_UPSERT_BRAND_UPSERT_COMPONENT_TS_5 = goog.getMsg("Description");
        i18n_4 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_UPSERT_BRAND_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_UPSERT_BRAND_UPSERT_COMPONENT_TS_7 = goog.getMsg("Cancel");
        i18n_6 = MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_UPSERT_BRAND_UPSERT_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u09AC\u09BE\u09A4\u09BF\u09B2";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Submit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_UPSERT_BRAND_UPSERT_COMPONENT_TS_9 = goog.getMsg("Submit");
        i18n_8 = MSG_EXTERNAL_label_Submit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_UPSERT_BRAND_UPSERT_COMPONENT_TS_9;
      } else {
        i18n_8 = "\u099C\u09AE\u09BE \u09A6\u09BF\u09A8";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], i18n_0, [3, "formGroup"], [1, "mb-3"], ["for", "title-input", 1, "form-label"], i18n_2, [1, "error"], ["type", "text", "id", "title-input", "name", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], [1, "text-danger"], ["for", "description", 1, "form-label"], i18n_4, ["id", "description", "rows", "5", "name", "description", "formControlName", "description", 1, "form-control", 3, "placeholder"], [3, "title", "multiSelect", "existingImages", "required", "onUploaded"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], i18n_6, ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], i18n_8, [3, "bar"]];
    },
    template: function BrandUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, BrandUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "form", 7)(8, "div", 8)(9, "label", 9)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 8)(18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](19, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "app-file-picker", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onUploaded", function BrandUpsertComponent_Template_app_file_picker_onUploaded_23_listener($event) {
          return ctx.onImgUploaded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrandUpsertComponent_Template_button_click_25_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](27, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function BrandUpsertComponent_Template_button_click_28_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](30, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.brandForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Enter Name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.brandForm, "name", "minLength", "Name should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Enter Description"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.brandForm, "description", "minLength", "Description should be at least 10 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", ctx.translations["Image"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("multiSelect", false)("existingImages", ctx.getExImages())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.brandForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__.ProgressComponent, _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_8__.FilePickerComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 41470:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/brands/models/config.model.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultBrandConfig: () => (/* binding */ defaultBrandConfig),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/breadcrumb/breadcrumb.model */ 46405);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);


let defaultBrandConfig = {
  defaultLayout: _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.GRID,
  upsertOnDialog: true,
  showUserFilter: false,
  showUpdateButton: false,
  showDeleteButton: false,
  searchEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.BRANDS.BRAND_ENDPOINT,
  delEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.BRANDS.BRAND_ENDPOINT
};
let selfRoutes = {
  list: "/admin/brands",
  create: "/admin/brands/create",
  update(id) {
    return id == null ? this.create : "/admin/brands/" + id + '/update';
  }
};

/***/ }),

/***/ 67210:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/brands/services/brand.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandService: () => (/* binding */ BrandService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class BrandService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.BRANDS.SEARCH(endpoint, params);
    this.http.get(url).subscribe(brand => {
      this.eventBusService.publish(key, brand);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, endpoint, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, id) {
    this.http.get(_inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.BRANDS.GET(id)).subscribe(brand => {
      this.eventBusService.publish(key, brand);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, brandReq, exId) {
    let endpoint = exId == null ? _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.BRANDS.CREATE() : _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.BRANDS.UPDATE(exId);
    let observable = exId == null ? this.http.post(endpoint, brandReq) : this.http.patch(endpoint, brandReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, brandReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function BrandService_Factory(t) {
    return new (t || BrandService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: BrandService,
    factory: BrandService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5014:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/categories/category.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryComponent: () => (/* binding */ CategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/category-list/category-list.component */ 74529);


class CategoryComponent {
  static #_ = this.ɵfac = function CategoryComponent_Factory(t) {
    return new (t || CategoryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CategoryComponent,
    selectors: [["app-category"]],
    decls: 1,
    vars: 0,
    template: function CategoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-category-list");
      }
    },
    dependencies: [_components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_0__.CategoryListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 74529:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/categories/components/category-list/category-list.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryListComponent: () => (/* binding */ CategoryListComponent)
/* harmony export */ });
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 62642);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category-upsert/category-upsert.component */ 12134);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _base_components_base_list_v4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v4.component */ 45095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/category.service */ 44120);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../components/breadcrumb/breadcrumb.component */ 43383);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);






















function CategoryListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("bar", true);
  }
}
function CategoryListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function CategoryListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function CategoryListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, CategoryListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, CategoryListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 18)(10, "div", 19)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function CategoryListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function CategoryListComponent_div_9_div_1_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function CategoryListComponent_div_9_div_1_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function CategoryListComponent_div_9_div_1_tr_28_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r11.created_by);
  }
}
function CategoryListComponent_div_9_div_1_tr_28_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 47)(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CategoryListComponent_div_9_div_1_tr_28_td_21_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r18);
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r16.onUpsertClick(item_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function CategoryListComponent_div_9_div_1_tr_28_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 47)(1, "app-delete", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function CategoryListComponent_div_9_div_1_tr_28_td_22_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r19.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r14.config.delEndpoint + "/" + item_r11.id);
  }
}
function CategoryListComponent_div_9_div_1_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, CategoryListComponent_div_9_div_1_tr_28_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "td")(7, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CategoryListComponent_div_9_div_1_tr_28_Template_a_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r23);
      const item_r11 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r22.onCategoryClick(item_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "td")(14, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](16, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "td")(18, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](20, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, CategoryListComponent_div_9_div_1_tr_28_td_21_Template, 3, 0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, CategoryListComponent_div_9_div_1_tr_28_td_22_Template, 2, 1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", item_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r11.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r11.parent_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](16, 10, item_r11.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](20, 12, item_r11.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.config.showUpdateButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.config.showDeleteButton);
  }
}
function CategoryListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](5, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 31)(7, "table", 32)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](11, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, CategoryListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](14, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](16, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](18, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](20, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](22, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](24, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](25, CategoryListComponent_div_9_div_1_th_25_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](26, CategoryListComponent_div_9_div_1_th_26_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](28, CategoryListComponent_div_9_div_1_tr_28_Template, 23, 14, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showUpdateButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r5.categories.content);
  }
}
function CategoryListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", item_r25.image, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}
function CategoryListComponent_div_9_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 69)(1, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r25.name.substring(0, 1).toUpperCase(), " ");
  }
}
function CategoryListComponent_div_9_div_2_div_1_h6_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h6", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("By ", item_r25.created_by, "");
  }
}
function CategoryListComponent_div_9_div_2_div_1_h6_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h6", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("Parent: ", item_r25.parent_name, "");
  }
}
function CategoryListComponent_div_9_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 73)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](2, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 1, item_r25.updated_at), " ");
  }
}
function CategoryListComponent_div_9_div_2_div_1_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](3, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function CategoryListComponent_div_9_div_2_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 76)(1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CategoryListComponent_div_9_div_2_div_1_div_27_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r41);
      const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r39.onUpsertClick(item_r25.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function CategoryListComponent_div_9_div_2_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 76)(1, "app-delete", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function CategoryListComponent_div_9_div_2_div_1_div_28_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r42.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r33.config.delEndpoint + "/" + item_r25.id)("look", "bx");
  }
}
function CategoryListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 52)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CategoryListComponent_div_9_div_2_div_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r46);
      const item_r25 = restoredCtx.$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r45.onCategoryClick(item_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, CategoryListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, CategoryListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "h5", 56)(6, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function CategoryListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r46);
      const item_r25 = restoredCtx.$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r47.onCategoryClick(item_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, CategoryListComponent_div_9_div_2_div_1_h6_8_Template, 2, 1, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, CategoryListComponent_div_9_div_2_div_1_h6_9_Template, 2, 1, "h6", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 0)(11, "div", 60)(12, "p", 61)(13, "small")(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](15, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div", 60)(20, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, CategoryListComponent_div_9_div_2_div_1_small_21_Template, 6, 3, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, CategoryListComponent_div_9_div_2_div_1_small_22_Template, 6, 0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "div", 65)(26, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](27, CategoryListComponent_div_9_div_2_div_1_div_27_Template, 3, 0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](28, CategoryListComponent_div_9_div_2_div_1_div_28_Template, 2, 2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r25.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r25.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r25.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r24.config.showUserFilter && item_r25.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r25.parent_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 11, item_r25.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r25.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r25.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r24.StringUtil.takeOnly(item_r25.description, 50, true), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r24.config.showUpdateButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r24.config.showDeleteButton);
  }
}
function CategoryListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, CategoryListComponent_div_9_div_2_div_1_Template, 29, 13, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r6.categories.content);
  }
}
function CategoryListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, CategoryListComponent_div_9_div_1_Template, 29, 6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, CategoryListComponent_div_9_div_2_Template, 2, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.GRID);
  }
}
class CategoryListComponent extends _base_components_base_list_v4_component__WEBPACK_IMPORTED_MODULE_6__.BaseListComponentV4 {
  componentName() {
    return "CategoryListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, categoryService, notifier) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.categoryService = categoryService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.defaultCategoryConfig;
    this.categories = _base_models_IPage__WEBPACK_IMPORTED_MODULE_1__.defaultPage;
    if (authService.isAdmin()) {
      this.config.endpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_5__.InventoryEndpoints.CATEGORIES.CATEGORY_ENDPOINT_ADMIN;
      this.config.endpointV2 = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_5__.InventoryEndpoints.CATEGORIES.CATEGORY_ENDPOINT_ADMIN_V2;
      this.config.showDeleteButton = true;
      this.config.showUpdateButton = true;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      let filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.parseFilterData)(params);
      let parentId = params['parent_id'] ? parseInt(params['parent_id']) : null;
      this.fetchCategories({
        q: filterData.query,
        parent_id: parentId,
        username: filterData.username,
        from_date: filterData.fromDate,
        to_date: filterData.toDate,
        page: filterData.page,
        size: filterData.size
      });
    });
  }
  getBreadcrumbItems() {
    return this.breadcrumbItems;
  }
  fetchCategories(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.PRODUCT_CATEGORIES.SEARCH(params));
    this.categoryService.search(key, this.config.endpointV2, params);
    this.subscribe(key, null, (value, meta) => {
      this.categories = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  getMultipleByIds(ids) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.CATEGORIES.GET_MULTIPLE(ids));
    this.categoryService.fetchMultiple(key, ids);
    this.subscribe(key, null, (value, meta) => {
      let categories = meta.data;
      let breadcrumbItems = [{
        text: "Categories",
        link: _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfRoutes.list,
        active: false
      }];
      categories.map(category => {
        // map label to breadcrumb item
        breadcrumbItems.push({
          text: category.name,
          link: _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfRoutes.getChildren(category.id),
          active: false
        });
      });
      this.breadcrumbItems = breadcrumbItems;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "Category is deleted");
      this.ngOnInit();
    }
  }
  getConfig() {
    return this.config;
  }
  getRoutes() {
    return {
      create: _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfRoutes.create,
      update: id => _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfRoutes.update(id),
      params: {}
    };
  }
  getUpsertComponent() {
    return _category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_4__.CategoryUpsertComponent;
  }
  onCategoryClick(item) {
    this.navigateByUrl(_models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfRoutes.getChildren(item.id), then => {
      this.getMultipleByIds(item.absolute_path.split(':').map(id => parseInt(id)));
    });
  }
  static #_ = this.ɵfac = function CategoryListComponent_Factory(t) {
    return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_11__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__.NotifierService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: CategoryListComponent,
    selectors: [["app-category-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_MyCategories$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___5 = goog.getMsg("Categories that I've created");
        i18n_4 = MSG_EXTERNAL_msg_MyCategories$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u0986\u09AE\u09BE\u09B0 \u09A4\u09C8\u09B0\u09BF\u0995\u09C3\u09A4 \u0995\u09CD\u09AF\u09BE\u099F\u09C7\u0997\u09B0\u09BF\u0997\u09C1\u09B2\u09CB";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___7 = goog.getMsg("Id");
        i18n_6 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "Id";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___9 = goog.getMsg("Image");
        i18n_8 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u099B\u09AC\u09BF";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___11 = goog.getMsg("Name");
        i18n_10 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u09A8\u09BE\u09AE";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___13 = goog.getMsg("Description");
        i18n_12 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Parent$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___15 = goog.getMsg("Parent");
        i18n_14 = MSG_EXTERNAL_label_Parent$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09AA\u09CD\u09AF\u09BE\u09B0\u09C7\u09A8\u09CD\u099F";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___17 = goog.getMsg("Created At");
        i18n_16 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___19 = goog.getMsg("Last Updated");
        i18n_18 = MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u09B8\u09B0\u09CD\u09AC\u09B6\u09C7\u09B7 \u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____21 = goog.getMsg("Created By");
        i18n_20 = MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____21;
      } else {
        i18n_20 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____23 = goog.getMsg("Update");
        i18n_22 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____23;
      } else {
        i18n_22 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____25 = goog.getMsg("Delete");
        i18n_24 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____25;
      } else {
        i18n_24 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____27 = goog.getMsg("Created At");
        i18n_26 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____27;
      } else {
        i18n_26 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS_____29 = goog.getMsg("Updated");
        i18n_28 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS_____29;
      } else {
        i18n_28 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS_____31 = goog.getMsg("Updated");
        i18n_30 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS_____31;
      } else {
        i18n_30 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "/assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], i18n_4, [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, [4, "ngFor", "ngForOf"], i18n_20, i18n_22, i18n_24, ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], ["href", "javascript: void(0);", 3, "click"], ["style", "width: 100px", 4, "ngIf"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center", 3, "click"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], ["class", "font-size-10 text-primary", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], i18n_26, [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "font-size-10", "text-info"], [1, "font-size-10", "text-primary"], [1, "font-size-10"], i18n_28, i18n_30, [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], [3, "requestUrl", "look", "deleteItemEvent"]];
    },
    template: function CategoryListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("layoutSelected", function CategoryListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("addButtonClick", function CategoryListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, CategoryListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, CategoryListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, CategoryListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("title", ctx.translations["Categories"])("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.categories.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.categories.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("page", ctx.categories);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 95081:
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/categories/components/category-select/category-select.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategorySelectComponent: () => (/* binding */ CategorySelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category-upsert/category-upsert.component */ 12134);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/category.service */ 44120);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);
















function CategorySelectComponent_util_progress_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "util-progress", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("bar", true);
  }
}
const _c2 = function () {
  return {
    standalone: true
  };
};
class CategorySelectComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  componentName() {
    return "CategorySelectComponent";
  }
  constructor(eventBus, router, subContainer, categoryService, popupService) {
    super(eventBus, router, subContainer);
    this.categoryService = categoryService;
    this.popupService = popupService;
    this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_3__.InventoryEndpoints.CATEGORIES.CATEGORY_ENDPOINT_V2;
    this.categories = [];
    this.selectedItem = null;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_3__.InventoryEndpoints.CATEGORIES.CATEGORY_ENDPOINT_ADMIN_V2;
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
    let query = _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_2__.TextUtility.removeSpecialCharacters(event.target?.value);
    if (query.length > 2) {
      this.search({
        page: 0,
        size: 10,
        q: query
      });
    }
  }
  onSelected(event) {
    if (this.categories.find(c => c.name == event.name)) {
      this.selected.emit(this.selectedItem);
    } else {
      let popup = this.popupService.open(_category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_4__.CategoryUpsertComponent, {
        id: null,
        name: event.name
      });
      popup.componentInstance.onCompleted.subscribe(category => {
        this.selected.emit(category);
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.CATEGORIES.SEARCH_CATEGORIES_FOR_FILTER());
    this.categoryService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.categories = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function CategorySelectComponent_Factory(t) {
    return new (t || CategorySelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_7__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_8__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: CategorySelectComponent,
    selectors: [["app-category-select"]],
    inputs: {
      searchEndpoint: "searchEndpoint",
      selectedItem: "selectedItem"
    },
    outputs: {
      selected: "selected"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 9,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Category$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_SELECT_CATEGORY_SELECT_COMPONENT_TS_1 = goog.getMsg("Category");
        i18n_0 = MSG_EXTERNAL_label_Category$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_SELECT_CATEGORY_SELECT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u0995\u09CD\u09AF\u09BE\u099F\u09BE\u0997\u09B0\u09BF";
      }
      return [["for", "autoSizingInput2", 1, "visually-hidden"], i18n_0, [3, "bar", 4, "ngIf"], ["id", "autoSizingInput2", "bindLabel", "name", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "placeholder", "keyup", "ngModelChange", "change"], [3, "bar"]];
    },
    template: function CategorySelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, CategorySelectComponent_util_progress_2_Template, 1, 1, "util-progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ng-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function CategorySelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function CategorySelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function CategorySelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Search Category.."]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("items", ctx.categories)("hideSelected", true)("multiple", false)("addTag", true)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](8, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_9__.ProgressComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 12134:
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/categories/components/category-upsert/category-upsert.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryUpsertComponent: () => (/* binding */ CategoryUpsertComponent)
/* harmony export */ });
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 62642);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v3.component */ 59890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/category.service */ 44120);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);











function CategoryUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "util-progress", 32);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bar", true);
  }
}
class CategoryUpsertComponent extends _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_2__.BaseUpsertComponentV3 {
  constructor(eventBus, router, subContainer, route, categoryService, notifier, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.categoryService = categoryService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.defaultCategoryConfig;
    this.selectedParent = null;
    this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(3)]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', []),
      parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
      image: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null),
      update_attributes_for_children: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(false)
    });
    if (dialogData.name != null) {
      this.categoryForm.controls.name.setValue(dialogData.name);
    }
  }
  componentName() {
    return "CategoryUpsertComponent";
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Categorys",
      link: "/admin/categorys",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.PRODUCT_CATEGORIES.GET(exId));
    this.categoryService.fetchSingle(key, exId);
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
    if (!this.categoryForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  onImgUploaded(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.categoryForm.controls.image.setValue(images[0].image_url);
    }
  }
  getExImages() {
    let image = this.categoryForm.controls.image.value;
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
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.PRODUCT_CATEGORIES.UPSERT(exId));
    // @ts-ignore
    this.categoryService.upsert(key, this.categoryForm.value, exId);
    this.subscribe(key, null, (value, meta) => {
      this.categoryForm.reset();
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
    this.categoryForm.controls.name.setValue(n.name);
    this.categoryForm.controls.description.setValue(n.description);
    this.categoryForm.controls.parent_id.setValue(n.parent == null ? null : n.parent.id);
    this.categoryForm.controls.image.setValue(n.image == null ? null : n.image);
  }
  onParentSelected(parent) {
    this.selectedParent = parent;
    this.categoryForm.controls.parent_id.setValue(parent == null ? null : parent.id);
  }
  static #_ = this.ɵfac = function CategoryUpsertComponent_Factory(t) {
    return new (t || CategoryUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_5__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: CategoryUpsertComponent,
    selectors: [["app-category-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 40,
    vars: 13,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpsertCategory$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_UPSERT_CATEGORY_UPSERT_COMPONENT_TS_1 = goog.getMsg("Create/Update Category");
        i18n_0 = MSG_EXTERNAL_label_UpsertCategory$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_UPSERT_CATEGORY_UPSERT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u0995\u09CD\u09AF\u09BE\u099F\u09BE\u0997\u09B0\u09BF \u09A4\u09C8\u09B0\u09BF/\u0986\u09AA\u09A1\u09C7\u099F \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_UPSERT_CATEGORY_UPSERT_COMPONENT_TS_3 = goog.getMsg("Name");
        i18n_2 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_UPSERT_CATEGORY_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09A8\u09BE\u09AE";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Parent$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_UPSERT_CATEGORY_UPSERT_COMPONENT_TS_5 = goog.getMsg("Parent");
        i18n_4 = MSG_EXTERNAL_label_Parent$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_UPSERT_CATEGORY_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u09AA\u09CD\u09AF\u09BE\u09B0\u09C7\u09A8\u09CD\u099F";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_UPSERT_CATEGORY_UPSERT_COMPONENT_TS_7 = goog.getMsg("Description");
        i18n_6 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_UPSERT_CATEGORY_UPSERT_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdateAttrForChild$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_UPSERT_CATEGORY_UPSERT_COMPONENT_TS_9 = goog.getMsg(" Update Attributes for children ");
        i18n_8 = MSG_EXTERNAL_label_UpdateAttrForChild$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_UPSERT_CATEGORY_UPSERT_COMPONENT_TS_9;
      } else {
        i18n_8 = "\u09B8\u09A8\u09CD\u09A4\u09BE\u09A8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0986\u09AA\u09A1\u09C7\u099F \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_UPSERT_CATEGORY_UPSERT_COMPONENT_TS_11 = goog.getMsg("Cancel");
        i18n_10 = MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_UPSERT_CATEGORY_UPSERT_COMPONENT_TS_11;
      } else {
        i18n_10 = "\u09AC\u09BE\u09A4\u09BF\u09B2";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Submit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_UPSERT_CATEGORY_UPSERT_COMPONENT_TS_13 = goog.getMsg("Submit");
        i18n_12 = MSG_EXTERNAL_label_Submit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_UPSERT_CATEGORY_UPSERT_COMPONENT_TS_13;
      } else {
        i18n_12 = "\u099C\u09AE\u09BE \u09A6\u09BF\u09A8";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], i18n_0, [3, "formGroup"], [1, "row", "mb-3"], [1, "col-6", "col-sm-6"], ["for", "title-input", 1, "form-label"], i18n_2, [1, "error"], ["type", "text", "id", "title-input", "name", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], [1, "text-danger"], ["for", "parent", 1, "form-label"], i18n_4, ["id", "parent", 3, "searchEndpoint", "selectedItem", "selected"], [1, "mb-3"], ["for", "description", 1, "form-label"], i18n_6, ["id", "description", "rows", "5", "name", "description", "formControlName", "description", 1, "form-control", 3, "placeholder"], [3, "title", "multiSelect", "existingImages", "required", "onUploaded"], [1, "form-check"], ["type", "checkbox", "id", "gridCheck", "name", "update_attributes_for_children", "formControlName", "update_attributes_for_children", 1, "form-check-input"], ["for", "gridCheck", 1, "form-check-label"], i18n_8, [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], i18n_10, ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], i18n_12, [3, "bar"]];
    },
    template: function CategoryUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, CategoryUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form", 7)(8, "div", 8)(9, "div", 9)(10, "label", 10)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](12, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "em", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 9)(19, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](20, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "app-category-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function CategoryUpsertComponent_Template_app_category_select_selected_21_listener($event) {
          return ctx.onParentSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 18)(23, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](24, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "app-file-picker", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onUploaded", function CategoryUpsertComponent_Template_app_file_picker_onUploaded_26_listener($event) {
          return ctx.onImgUploaded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 8)(28, "div", 18)(29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](32, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 27)(34, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CategoryUpsertComponent_Template_button_click_34_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](36, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CategoryUpsertComponent_Template_button_click_37_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](39, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.categoryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Enter Name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.categoryForm, "name", "minLength", "Name should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("searchEndpoint", ctx.config.endpointV2)("selectedItem", ctx.selectedParent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Enter Description"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", ctx.translations["Image"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("multiSelect", false)("existingImages", ctx.getExImages())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.categoryForm.valid ? "" : "disabled");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 62642:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/categories/models/config.model.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultCategoryConfig: () => (/* binding */ defaultCategoryConfig),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/breadcrumb/breadcrumb.model */ 46405);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);


let defaultCategoryConfig = {
  defaultLayout: _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.COLUMN,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: false,
  showUpdateButton: false,
  endpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.CATEGORIES.CATEGORY_ENDPOINT,
  endpointV2: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.CATEGORIES.CATEGORY_ENDPOINT_V2,
  delEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.CATEGORIES.CATEGORY_ENDPOINT
};
let selfRoutes = {
  list: "/admin/inventory/categories",
  getChildren(id) {
    return "/admin/inventory/categories?parent_id=" + id;
  },
  create: "/admin/inventory/categories/create",
  update(id) {
    return id == null ? this.create : "/admin/inventory/categories/" + id + '/update';
  }
};

/***/ }),

/***/ 44120:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/categories/services/category.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryService: () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class CategoryService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.CATEGORIES.SEARCH(endpoint, params);
    this.http.get(url).subscribe(categories => {
      this.eventBusService.publish(key, categories.body);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, endpoint, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, id) {
    this.http.get(_inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.CATEGORIES.GET(id)).subscribe(category => {
      this.eventBusService.publish(key, category);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchMultiple(key, ids) {
    this.http.get(_inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.CATEGORIES.GET_MULTIPLE(ids)).subscribe(label => {
      this.eventBusService.publish(key, label);
    }, error => {
      this.handleError(error, auth => {
        this.fetchMultiple(key, ids);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, categoryReq, exId) {
    let endpoint = exId == null ? _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.CATEGORIES.CREATE() : _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.CATEGORIES.UPDATE(exId);
    let observable = exId == null ? this.http.post(endpoint, categoryReq) : this.http.patch(endpoint, categoryReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, categoryReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function CategoryService_Factory(t) {
    return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: CategoryService,
    factory: CategoryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 34900:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/filterableattributes/components/filterableattribute-list/filterableattribute-list.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterableAttributeListComponent: () => (/* binding */ FilterableAttributeListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v2.component */ 92159);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 90231);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _filterableattribute_upsert_filterableattribute_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filterableattribute-upsert/filterableattribute-upsert.component */ 14381);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_filterableattribute_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/filterableattribute.service */ 66501);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../components/breadcrumb/breadcrumb.component */ 43383);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);






















function FilterableAttributeListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("bar", true);
  }
}
function FilterableAttributeListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, "No items");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 17)(10, "div", 18)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
  }
}
function FilterableAttributeListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function FilterableAttributeListComponent_div_9_div_1_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function FilterableAttributeListComponent_div_9_div_1_tr_27_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r8.created_by);
  }
}
function FilterableAttributeListComponent_div_9_div_1_tr_27_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 29)(1, "app-delete", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function FilterableAttributeListComponent_div_9_div_1_tr_27_td_22_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r12.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r10.config.delEndpoint + "/" + item_r8.id);
  }
}
function FilterableAttributeListComponent_div_9_div_1_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, FilterableAttributeListComponent_div_9_div_1_tr_27_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "td")(5, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function FilterableAttributeListComponent_div_9_div_1_tr_27_Template_a_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r16);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r15.onUpsertClick(item_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "td")(12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](14, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "td")(16, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "td", 29)(20, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function FilterableAttributeListComponent_div_9_div_1_tr_27_Template_a_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r16);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r17.onUpsertClick(item_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, FilterableAttributeListComponent_div_9_div_1_tr_27_td_22_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r7.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r8.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r8.values.join(", "));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](14, 8, item_r8.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 10, item_r8.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r7.config.showDeleteButton);
  }
}
function FilterableAttributeListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 21)(2, "div", 22)(3, "div", 23)(4, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "FilterableAttributes that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 25)(7, "table", 26)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, FilterableAttributeListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18, "Values");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](20, "Created At");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](22, "Last Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](24, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](25, FilterableAttributeListComponent_div_9_div_1_th_25_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](27, FilterableAttributeListComponent_div_9_div_1_tr_27_Template, 23, 12, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r3.loading ? "loading" : "loaded")("@onColumn", ctx_r3.layout == ctx_r3.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r3.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r3.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r3.filterableAttributes.content);
  }
}
function FilterableAttributeListComponent_div_9_div_2_div_1_h6_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h6", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("By ", item_r19.created_by, "");
  }
}
function FilterableAttributeListComponent_div_9_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 54)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 1, item_r19.updated_at), " ");
  }
}
function FilterableAttributeListComponent_div_9_div_2_div_1_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function FilterableAttributeListComponent_div_9_div_2_div_1_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 50)(1, "app-delete", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function FilterableAttributeListComponent_div_9_div_2_div_1_div_34_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r26.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r23.config.delEndpoint + "/" + item_r19.id)("look", "bx");
  }
}
function FilterableAttributeListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 35)(1, "div", 36)(2, "div", 23)(3, "div", 37)(4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "h5", 39)(7, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function FilterableAttributeListComponent_div_9_div_2_div_1_Template_a_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r30);
      const item_r19 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r29.onUpsertClick(item_r19.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, FilterableAttributeListComponent_div_9_div_2_div_1_h6_9_Template, 2, 1, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 0)(11, "div", 42)(12, "p", 43)(13, "small")(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div", 42)(20, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, FilterableAttributeListComponent_div_9_div_2_div_1_small_21_Template, 6, 3, "small", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, FilterableAttributeListComponent_div_9_div_2_div_1_small_22_Template, 6, 0, "small", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "div")(26, "a", 46)(27, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "div", 48)(30, "div", 49)(31, "div", 50)(32, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function FilterableAttributeListComponent_div_9_div_2_div_1_Template_a_click_32_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r30);
      const item_r19 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r31.onUpsertClick(item_r19.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](34, FilterableAttributeListComponent_div_9_div_2_div_1_div_34_Template, 2, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r19.name.substring(0, 1).toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r19.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r18.config.showUserFilter && item_r19.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 9, item_r19.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r19.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r19.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r19.values.join(", "), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r19.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r18.config.showDeleteButton);
  }
}
function FilterableAttributeListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, FilterableAttributeListComponent_div_9_div_2_div_1_Template, 35, 11, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r4.loading ? "loading" : "loaded")("@onGrid", ctx_r4.layout == ctx_r4.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r4.filterableAttributes.content);
  }
}
function FilterableAttributeListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, FilterableAttributeListComponent_div_9_div_1_Template, 28, 5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, FilterableAttributeListComponent_div_9_div_2_Template, 2, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.GRID);
  }
}
class FilterableAttributeListComponent extends _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV2 {
  componentName() {
    return "FilterableAttributeListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, filterableAttributeService, notifier) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.filterableAttributeService = filterableAttributeService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultFilterableAttributeConfig;
    this.filterableAttributes = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    if (authService.isAdmin()) {
      this.config.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__.InventoryEndpoints.FILTERABLEATTRIBUTES.FILTERABLEATTRIBUTE_ENDPOINT_ADMIN;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      let filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__.parseFilterData)(params);
      this.fetchFilterableAttributes({
        q: filterData.query,
        username: filterData.username,
        from_date: filterData.fromDate,
        to_date: filterData.toDate,
        page: filterData.page,
        size: filterData.size
      });
    });
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "FilterableAttributes",
      link: null,
      active: true
    }];
  }
  fetchFilterableAttributes(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.FILTERABLEATTRIBUTES.SEARCH(params));
    this.filterableAttributeService.search(key, this.config.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.filterableAttributes = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "FilterableAttribute is deleted");
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
      params: {}
    };
  }
  getUpsertComponent() {
    return _filterableattribute_upsert_filterableattribute_upsert_component__WEBPACK_IMPORTED_MODULE_5__.FilterableAttributeUpsertComponent;
  }
  static #_ = this.ɵfac = function FilterableAttributeListComponent_Factory(t) {
    return new (t || FilterableAttributeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_filterableattribute_service__WEBPACK_IMPORTED_MODULE_11__.FilterableAttributeService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__.NotifierService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: FilterableAttributeListComponent,
    selectors: [["app-filterableattribute-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], [1, "text-uppercase"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "/assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], [4, "ngFor", "ngForOf"], ["href", "javascript: void(0);", 3, "click"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "bg-success", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "font-size-10", "text-info"], [1, "font-size-10"], [3, "requestUrl", "look", "deleteItemEvent"]],
    template: function FilterableAttributeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("layoutSelected", function FilterableAttributeListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("addButtonClick", function FilterableAttributeListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, FilterableAttributeListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, FilterableAttributeListComponent_div_8_Template, 13, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, FilterableAttributeListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("title", "FilterableAttributes")("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.filterableAttributes.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.filterableAttributes.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("page", ctx.filterableAttributes);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 20756:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/filterableattributes/components/filterableattribute-select/f-attribute-select.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FAttributeSelectComponent: () => (/* binding */ FAttributeSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _filterableattribute_upsert_filterableattribute_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filterableattribute-upsert/filterableattribute-upsert.component */ 14381);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_filterableattribute_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/filterableattribute.service */ 66501);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);

















function FAttributeSelectComponent_util_progress_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "util-progress", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bar", true);
  }
}
const _c2 = function () {
  return {
    standalone: true
  };
};
class FAttributeSelectComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  componentName() {
    return "FAttributeSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, filterableAttributeService, popupService) {
    super(eventBus, router, subContainer);
    this.filterableAttributeService = filterableAttributeService;
    this.popupService = popupService;
    this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_3__.InventoryEndpoints.FILTERABLEATTRIBUTES.FILTERABLEATTRIBUTE_ENDPOINT;
    this.items = [];
    this.selectedItem = null;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    if (authService.isAdmin()) {
      this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_3__.InventoryEndpoints.FILTERABLEATTRIBUTES.FILTERABLEATTRIBUTE_ENDPOINT_ADMIN;
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
    let query = _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__.TextUtility.removeSpecialCharacters(event.target?.value);
    if (query.length > 2) {
      this.search({
        page: 0,
        size: 10,
        q: query
      });
    }
  }
  onSelected(event) {
    if (this.items.find(item => item.name == event.name)) {
      this.selected.emit(this.selectedItem);
    } else {
      let popup = this.popupService.open(_filterableattribute_upsert_filterableattribute_upsert_component__WEBPACK_IMPORTED_MODULE_4__.FilterableAttributeUpsertComponent, {
        id: null,
        name: event.name,
        dialogUpsert: true
      });
      popup.componentInstance.onCompleted.subscribe(fa => {
        this.selected.emit(fa);
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.FILTERABLEATTRIBUTES.SEARCH(params));
    this.filterableAttributeService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function FAttributeSelectComponent_Factory(t) {
    return new (t || FAttributeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_filterableattribute_service__WEBPACK_IMPORTED_MODULE_8__.FilterableAttributeService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: FAttributeSelectComponent,
    selectors: [["app-fa-select"]],
    inputs: {
      searchEndpoint: "searchEndpoint",
      selectedItem: "selectedItem"
    },
    outputs: {
      selected: "selected"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 9,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_FilterAttr$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_FILTERABLEATTRIBUTES_COMPONENTS_FILTERABLEATTRIBUTE_SELECT_F_ATTRIBUTE_SELECT_COMPONENT_TS_1 = goog.getMsg("Filter Attribute");
        i18n_0 = MSG_EXTERNAL_label_FilterAttr$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_FILTERABLEATTRIBUTES_COMPONENTS_FILTERABLEATTRIBUTE_SELECT_F_ATTRIBUTE_SELECT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09AB\u09BF\u09B2\u09CD\u099F\u09BE\u09B0 \u098F\u099F\u09CD\u09B0\u09BF\u09AC\u09BF\u0989\u099F";
      }
      return [["for", "autoSizingInput2", 1, "visually-hidden"], i18n_0, [3, "bar", 4, "ngIf"], ["id", "autoSizingInput2", "bindLabel", "name", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "placeholder", "keyup", "ngModelChange", "change"], [3, "bar"]];
    },
    template: function FAttributeSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, FAttributeSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ng-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function FAttributeSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function FAttributeSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function FAttributeSelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Search Attributes.."]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.items)("hideSelected", true)("multiple", false)("addTag", true)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](8, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__.ProgressComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 14381:
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/filterableattributes/components/filterableattribute-upsert/filterableattribute-upsert.component.ts ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterableAttributeUpsertComponent: () => (/* binding */ FilterableAttributeUpsertComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v2.component */ 19870);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 90231);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_filterableattribute_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/filterableattribute.service */ 66501);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);















function FilterableAttributeUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "util-progress", 21);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("bar", true);
  }
}
function FilterableAttributeUpsertComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 25)(4, "a", 26)(5, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function FilterableAttributeUpsertComponent_div_31_Template_i_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r4.removeValue(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const control_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", control_r2)("id", "value_" + i_r3);
  }
}
class FilterableAttributeUpsertComponent extends _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV2 {
  get valuesArrayControls() {
    return this.filterableAttributeForm.get('values').controls.filter(control => control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl);
  }
  addValueControl(value) {
    const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(value, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
    this.filterableAttributeForm.get('values').push(control);
  }
  removeValue(index) {
    const valuesArray = this.filterableAttributeForm.get('values');
    valuesArray.removeAt(index); // Remove control at the specified index
  }

  constructor(eventBus, router, subContainer, route, filterableAttributeService, notifier, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.filterableAttributeService = filterableAttributeService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultFilterableAttributeConfig;
    this.filterableAttributeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(3)]),
      code: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(3)]),
      values: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArray([], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required)
    });
    if (dialogData.name != null) {
      this.filterableAttributeForm.controls.name.setValue(dialogData.name);
      this.filterableAttributeForm.controls.code.setValue(_common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__.TextUtility.codify(dialogData.name));
    }
  }
  componentName() {
    return "FilterableAttributeUpsertComponent";
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "FilterableAttributes",
      link: "/admin/filterableattributes",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  ngOnInit() {
    super.ngOnInit();
    /*
    update form `code` when `name` changes
    */
    this.filterableAttributeForm.controls.name.valueChanges.subscribe(value => {
      if (value == null) return;
      this.filterableAttributeForm.controls.code.setValue(_common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__.TextUtility.codify(value));
    });
    /*
    Add a default value control
     */
    if (this.exId == null) {
      this.addValueControl('');
      this.addValueControl('');
    }
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.FILTERABLEATTRIBUTES.GET(exId));
    this.filterableAttributeService.fetchSingle(key, exId);
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
    if (!this.filterableAttributeForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  getConfig() {
    return this.config;
  }
  getListPageRoute() {
    return _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.list;
  }
  upsert(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.FILTERABLEATTRIBUTES.UPSERT(exId));
    // @ts-ignore
    this.filterableAttributeService.upsert(key, this.filterableAttributeForm.value, exId);
    this.subscribe(key, null, (value, meta) => {
      this.filterableAttributeForm.reset();
      this.onSuccess(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    this.filterableAttributeForm.controls.name.setValue(n.name);
    this.filterableAttributeForm.controls.code.setValue(n.code);
    n.values.forEach(value => {
      this.addValueControl(value);
    });
  }
  static #_ = this.ɵfac = function FilterableAttributeUpsertComponent_Factory(t) {
    return new (t || FilterableAttributeUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_5__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_filterableattribute_service__WEBPACK_IMPORTED_MODULE_6__.FilterableAttributeService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_7__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: FilterableAttributeUpsertComponent,
    selectors: [["app-filterableattribute-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 40,
    vars: 7,
    consts: [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "row", "mb-3"], [1, "col-6"], ["for", "name-input", 1, "form-label"], [1, "error"], ["type", "text", "id", "name-input", "placeholder", "Enter Name", "name", "name", "formControlName", "name", 1, "form-control"], [1, "text-danger"], ["type", "text", "id", "code-input", "placeholder", "Enter Code", "name", "code", "formControlName", "code", 1, "form-control"], ["formArrayName", "values"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-info", 3, "click"], [1, "mdi", "mdi-plus", "font-size-16"], [1, "d-flex", "flex-wrap", "gap-3", "mt-2", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], [3, "bar"], [1, "row", "mb-2"], [1, "col-11"], ["type", "text", "placeholder", "Enter value", 1, "form-control", 3, "formControl", "id"], [1, "col-1", "d-flex", "align-items-center", "justify-content-center"], ["href", "javascript: void(0);"], [1, "bx", "bx-x-circle", "text-danger", "font-size-20", 3, "click"]],
    template: function FilterableAttributeUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, FilterableAttributeUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Create/Update FilterableAttribute");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "form", 6)(8, "div", 7)(9, "div", 8)(10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 8)(18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 14)(26, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Enter Values");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, FilterableAttributeUpsertComponent_div_31_Template, 6, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function FilterableAttributeUpsertComponent_Template_button_click_32_listener() {
          return ctx.addValueControl("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 18)(36, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function FilterableAttributeUpsertComponent_Template_button_click_36_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function FilterableAttributeUpsertComponent_Template_button_click_38_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.filterableAttributeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.filterableAttributeForm, "name", "minLength", "Name should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.filterableAttributeForm, "code", "minLength", "Code should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.valuesArrayControls);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.filterableAttributeForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArrayName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__.ProgressComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 51134:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/filterableattributes/filterableattribute.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterableAttributeComponent: () => (/* binding */ FilterableAttributeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_filterableattribute_list_filterableattribute_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/filterableattribute-list/filterableattribute-list.component */ 34900);


class FilterableAttributeComponent {
  static #_ = this.ɵfac = function FilterableAttributeComponent_Factory(t) {
    return new (t || FilterableAttributeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FilterableAttributeComponent,
    selectors: [["app-filterableattribute"]],
    decls: 1,
    vars: 0,
    template: function FilterableAttributeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-filterableattribute-list");
      }
    },
    dependencies: [_components_filterableattribute_list_filterableattribute_list_component__WEBPACK_IMPORTED_MODULE_0__.FilterableAttributeListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 90231:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/filterableattributes/models/config.model.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultFilterableAttributeConfig: () => (/* binding */ defaultFilterableAttributeConfig),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/breadcrumb/breadcrumb.model */ 46405);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);


let defaultFilterableAttributeConfig = {
  defaultLayout: _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.COLUMN,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  searchEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.FILTERABLEATTRIBUTES.FILTERABLEATTRIBUTE_ENDPOINT,
  delEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.FILTERABLEATTRIBUTES.FILTERABLEATTRIBUTE_ENDPOINT
};
let selfRoutes = {
  list: "/admin/filterable-attributes",
  create: "/admin/filterable-attributes/create",
  update(id) {
    return id == null ? this.create : "/admin/filterable-attributes/" + id + '/update';
  }
};

/***/ }),

/***/ 66501:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/filterableattributes/services/filterableattribute.service.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterableAttributeService: () => (/* binding */ FilterableAttributeService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class FilterableAttributeService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.FILTERABLEATTRIBUTES.SEARCH(endpoint, params);
    this.http.get(url).subscribe(filterableAttribute => {
      this.eventBusService.publish(key, filterableAttribute);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, endpoint, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, id) {
    this.http.get(_inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.FILTERABLEATTRIBUTES.GET(id)).subscribe(filterableAttribute => {
      this.eventBusService.publish(key, filterableAttribute);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, filterableAttributeReq, exId) {
    let endpoint = exId == null ? _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.FILTERABLEATTRIBUTES.CREATE() : _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.FILTERABLEATTRIBUTES.UPDATE(exId);
    let observable = exId == null ? this.http.post(endpoint, filterableAttributeReq) : this.http.patch(endpoint, filterableAttributeReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, filterableAttributeReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function FilterableAttributeService_Factory(t) {
    return new (t || FilterableAttributeService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: FilterableAttributeService,
    factory: FilterableAttributeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 82771:
/*!************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/inventory.endpoints.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryEndpoints: () => (/* binding */ InventoryEndpoints)
/* harmony export */ });
/* harmony import */ var _base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../base/endpoints/base.endpoint */ 92495);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ 20553);


class InventoryEndpoints extends _base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint {
  static #_ = this.CATEGORIES = {
    CATEGORY_ENDPOINT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/categories',
    CATEGORY_ENDPOINT_V2: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v2/categories',
    CATEGORY_ENDPOINT_ADMIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/categories',
    CATEGORY_ENDPOINT_ADMIN_V2: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v2/categories',
    SEARCH(endpoint, params) {
      return endpoint.concat(_base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params));
    },
    CREATE() {
      return this.CATEGORY_ENDPOINT;
    },
    GET(id) {
      return this.CATEGORY_ENDPOINT + '/' + id;
    },
    GET_MULTIPLE(ids) {
      return this.CATEGORY_ENDPOINT + '/multiple/by-ids?ids=' + ids.join(',');
    },
    UPDATE(id) {
      return this.CATEGORY_ENDPOINT + '/' + id;
    }
  };
  static #_2 = this.ATTRIBUTES = {
    ATTRIBUTE_ENDPOINT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/attributes',
    ATTRIBUTE_ENDPOINT_ADMIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/admin/attributes',
    SEARCH(endpoint, params) {
      return endpoint.concat(_base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params));
    },
    CREATE() {
      return this.ATTRIBUTE_ENDPOINT;
    },
    GET(id) {
      return this.ATTRIBUTE_ENDPOINT + '/' + id;
    },
    UPDATE(id) {
      return this.ATTRIBUTE_ENDPOINT + '/' + id;
    }
  };
  static #_3 = this.FILTERABLEATTRIBUTES = {
    FILTERABLEATTRIBUTE_ENDPOINT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/filterable-attributes',
    FILTERABLEATTRIBUTE_ENDPOINT_ADMIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/filterable-attributes',
    SEARCH(endpoint, params) {
      return endpoint.concat(_base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params));
    },
    CREATE() {
      return this.FILTERABLEATTRIBUTE_ENDPOINT;
    },
    GET(id) {
      return this.FILTERABLEATTRIBUTE_ENDPOINT + '/' + id;
    },
    UPDATE(id) {
      return this.FILTERABLEATTRIBUTE_ENDPOINT + '/' + id;
    }
  };
  static #_4 = this.BRANDS = {
    BRAND_ENDPOINT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/brands',
    BRAND_ENDPOINT_ADMIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/brands',
    SEARCH(endpoint, params) {
      return endpoint.concat(_base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params));
    },
    CREATE() {
      return this.BRAND_ENDPOINT;
    },
    GET(id) {
      return this.BRAND_ENDPOINT + '/' + id;
    },
    UPDATE(id) {
      return this.BRAND_ENDPOINT + '/' + id;
    }
  };
  static #_5 = this.VARIATIONS = {
    VARIATION_ENDPOINT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/variations',
    VARIATION_ENDPOINT_ADMIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/variations',
    SEARCH(endpoint, params) {
      return endpoint.concat(_base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params));
    },
    CREATE() {
      return this.VARIATION_ENDPOINT;
    },
    GET(id) {
      return this.VARIATION_ENDPOINT + '/' + id;
    },
    UPDATE(id) {
      return this.VARIATION_ENDPOINT + '/' + id;
    }
  };
  static #_6 = this.PRODUCTS = {
    PRODUCT_ENDPOINT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/products',
    PRODUCT_ENDPOINT_V2: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v2/products',
    PRODUCT_ENDPOINT_ADMIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/products',
    PRODUCT_ENDPOINT_ADMIN_V2: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v2/admin/products',
    SEARCH(endpoint, params) {
      return endpoint.concat(_base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params));
    },
    CREATE(endpoint) {
      return endpoint;
    },
    GET(endpoint, id) {
      return endpoint + '/' + id;
    },
    UPDATE(endpoint, id) {
      return endpoint + '/' + id;
    },
    APPROVE(endpoint, id, approved) {
      return endpoint + '/' + id + "/approve?approved=" + approved;
    }
  };
  static #_7 = this.PRODUCTSPECIFICATIONS = {
    PRODUCTSPECIFICATION_ENDPOINT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/productspecifications',
    PRODUCTSPECIFICATION_ENDPOINT_ADMIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/productspecifications',
    SEARCH(endpoint, params) {
      return endpoint.concat(_base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params));
    },
    CREATE() {
      return this.PRODUCTSPECIFICATION_ENDPOINT;
    },
    GET(id) {
      return this.PRODUCTSPECIFICATION_ENDPOINT + '/' + id;
    },
    UPDATE(id) {
      return this.PRODUCTSPECIFICATION_ENDPOINT + '/' + id;
    }
  };
  static #_8 = this.STOCKS = {
    STOCK_ENDPOINT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/stocks',
    STOCK_ENDPOINT_V2: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v2/stocks',
    STOCK_ENDPOINT_ADMIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/stocks',
    STOCK_ENDPOINT_ADMIN_V2: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v2/admin/stocks',
    SEARCH(endpoint, params) {
      return endpoint.concat(_base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params));
    },
    CREATE() {
      return this.STOCK_ENDPOINT_V2;
    },
    GET(endpoint, id) {
      return endpoint + '/' + id;
    },
    GET_BY_SKU(endpoint, sku) {
      return endpoint + '/by-sku/' + sku;
    },
    UPDATE(id) {
      return this.STOCK_ENDPOINT_V2 + '/' + id;
    }
  };
  static #_9 = this.VENDORS = {
    VENDOR_ENDPOINT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/vendors',
    VENDOR_ENDPOINT_V2: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v2/vendors',
    VENDOR_ENDPOINT_ADMIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/vendors',
    VENDOR_ENDPOINT_ADMIN_V2: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v2/admin/vendors',
    SEARCH(endpoint, params) {
      return endpoint.concat(_base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params));
    },
    MY_VENDORS(endpoint, params) {
      return endpoint.concat("/my-vendors").concat(_base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params));
    },
    CREATE() {
      return this.VENDOR_ENDPOINT;
    },
    GET(id) {
      return this.VENDOR_ENDPOINT_V2 + '/' + id;
    },
    TOGGLE_APPROVAL(id, approved) {
      return this.VENDOR_ENDPOINT + '/' + id + '/approve?approved=' + approved;
    },
    UPDATE(id) {
      return this.VENDOR_ENDPOINT + '/' + id;
    },
    SEARCH_CUSTOMERS(params) {
      return this.VENDOR_ENDPOINT_V2 + '/my-vendors/search-customers'.concat(_base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params));
    }
  };
}

/***/ }),

/***/ 22451:
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/inventory.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryModule: () => (/* binding */ InventoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _inventory_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory.route */ 79568);
/* harmony import */ var _categories_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories/category.component */ 5014);
/* harmony import */ var _categories_components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/components/category-list/category-list.component */ 74529);
/* harmony import */ var _categories_components_category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/components/category-upsert/category-upsert.component */ 12134);
/* harmony import */ var _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/modules/utility/utility.module */ 7151);
/* harmony import */ var _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/modules/cms/cms.module */ 68709);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _categories_components_category_select_category_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories/components/category-select/category-select.component */ 95081);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);
/* harmony import */ var _attributes_components_attribute_list_attribute_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./attributes/components/attribute-list/attribute-list.component */ 11109);
/* harmony import */ var _attributes_components_attribute_upsert_attribute_upsert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attributes/components/attribute-upsert/attribute-upsert.component */ 78479);
/* harmony import */ var _attributes_attribute_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attributes/attribute.component */ 30991);
/* harmony import */ var _filterableattributes_components_filterableattribute_list_filterableattribute_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filterableattributes/components/filterableattribute-list/filterableattribute-list.component */ 34900);
/* harmony import */ var _filterableattributes_components_filterableattribute_upsert_filterableattribute_upsert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filterableattributes/components/filterableattribute-upsert/filterableattribute-upsert.component */ 14381);
/* harmony import */ var _filterableattributes_filterableattribute_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filterableattributes/filterableattribute.component */ 51134);
/* harmony import */ var _brands_brand_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./brands/brand.component */ 35177);
/* harmony import */ var _brands_components_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./brands/components/brand-list/brand-list.component */ 70027);
/* harmony import */ var _brands_components_brand_upsert_brand_upsert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./brands/components/brand-upsert/brand-upsert.component */ 49107);
/* harmony import */ var _variations_variation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./variations/variation.component */ 17809);
/* harmony import */ var _variations_components_variation_list_variation_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./variations/components/variation-list/variation-list.component */ 49441);
/* harmony import */ var _variations_components_variation_upsert_variation_upsert_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./variations/components/variation-upsert/variation-upsert.component */ 22447);
/* harmony import */ var _products_product_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./products/product.component */ 57670);
/* harmony import */ var _products_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./products/components/product-list/product-list.component */ 37113);
/* harmony import */ var _products_components_product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./products/components/product-upsert/product-upsert.component */ 66033);
/* harmony import */ var _brands_components_brand_select_brand_select_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./brands/components/brand-select/brand-select.component */ 73019);
/* harmony import */ var _variations_components_variation_select_variation_select_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./variations/components/variation-select/variation-select.component */ 93049);
/* harmony import */ var _filterableattributes_components_filterableattribute_select_f_attribute_select_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./filterableattributes/components/filterableattribute-select/f-attribute-select.component */ 20756);
/* harmony import */ var _productspecifications_productspecification_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./productspecifications/productspecification.component */ 10900);
/* harmony import */ var _productspecifications_components_productspecification_list_productspecification_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./productspecifications/components/productspecification-list/productspecification-list.component */ 99585);
/* harmony import */ var _productspecifications_components_productspecification_upsert_productspecification_upsert_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./productspecifications/components/productspecification-upsert/productspecification-upsert.component */ 73981);
/* harmony import */ var _products_components_product_filter_item_product_select_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./products/components/product-filter-item/product-select.component */ 60206);
/* harmony import */ var _stocks_stock_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./stocks/stock.component */ 88096);
/* harmony import */ var _stocks_components_stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./stocks/components/stock-list/stock-list.component */ 84721);
/* harmony import */ var _stocks_components_stock_upsert_stock_upsert_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./stocks/components/stock-upsert/stock-upsert.component */ 64383);
/* harmony import */ var _stocks_components_stock_select_stock_select_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./stocks/components/stock-select/stock-select.component */ 74079);
/* harmony import */ var _vendors_vendor_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./vendors/vendor.component */ 10789);
/* harmony import */ var _vendors_components_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./vendors/components/vendor-list/vendor-list.component */ 67123);
/* harmony import */ var _vendors_components_vendor_upsert_vendor_upsert_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./vendors/components/vendor-upsert/vendor-upsert.component */ 30497);
/* harmony import */ var _vendors_components_vendor_select_vendor_select_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./vendors/components/vendor-select/vendor-select.component */ 59056);
/* harmony import */ var _admin_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../admin.module */ 33083);
/* harmony import */ var _users_user_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../users/user.module */ 98847);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 11633);
/* harmony import */ var _stocks_components_stock_select_stock_label_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./stocks/components/stock-select/stock-label.pipe */ 24365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../common/modules/cms/files/components/filepicker/filepicker.component */ 7247);

















































class InventoryModule {
  static #_ = this.ɵfac = function InventoryModule_Factory(t) {
    return new (t || InventoryModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵdefineNgModule"]({
    type: InventoryModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_43__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_44__.ReactiveFormsModule, _inventory_route__WEBPACK_IMPORTED_MODULE_0__.InventoryRoute, _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_4__.UtilityModule, _admin_module__WEBPACK_IMPORTED_MODULE_37__.AdminModule, _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_5__.CmsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_45__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_44__.FormsModule, _users_user_module__WEBPACK_IMPORTED_MODULE_38__.UserModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_46__.BsDatepickerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵsetNgModuleScope"](InventoryModule, {
    declarations: [_categories_category_component__WEBPACK_IMPORTED_MODULE_1__.CategoryComponent, _categories_components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__.CategoryListComponent, _categories_components_category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_3__.CategoryUpsertComponent, _categories_components_category_select_category_select_component__WEBPACK_IMPORTED_MODULE_6__.CategorySelectComponent, _attributes_components_attribute_list_attribute_list_component__WEBPACK_IMPORTED_MODULE_7__.AttributeListComponent, _attributes_components_attribute_upsert_attribute_upsert_component__WEBPACK_IMPORTED_MODULE_8__.AttributeUpsertComponent, _attributes_attribute_component__WEBPACK_IMPORTED_MODULE_9__.AttributeComponent, _filterableattributes_components_filterableattribute_list_filterableattribute_list_component__WEBPACK_IMPORTED_MODULE_10__.FilterableAttributeListComponent, _filterableattributes_components_filterableattribute_upsert_filterableattribute_upsert_component__WEBPACK_IMPORTED_MODULE_11__.FilterableAttributeUpsertComponent, _filterableattributes_filterableattribute_component__WEBPACK_IMPORTED_MODULE_12__.FilterableAttributeComponent, _brands_brand_component__WEBPACK_IMPORTED_MODULE_13__.BrandComponent, _brands_components_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_14__.BrandListComponent, _brands_components_brand_upsert_brand_upsert_component__WEBPACK_IMPORTED_MODULE_15__.BrandUpsertComponent, _variations_variation_component__WEBPACK_IMPORTED_MODULE_16__.VariationComponent, _variations_components_variation_list_variation_list_component__WEBPACK_IMPORTED_MODULE_17__.VariationListComponent, _variations_components_variation_upsert_variation_upsert_component__WEBPACK_IMPORTED_MODULE_18__.VariationUpsertComponent, _products_product_component__WEBPACK_IMPORTED_MODULE_19__.ProductComponent, _products_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_20__.ProductListComponent, _products_components_product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_21__.ProductUpsertComponent, _products_components_product_filter_item_product_select_component__WEBPACK_IMPORTED_MODULE_28__.ProductSelectComponent, _brands_components_brand_select_brand_select_component__WEBPACK_IMPORTED_MODULE_22__.BrandSelectComponent, _variations_components_variation_select_variation_select_component__WEBPACK_IMPORTED_MODULE_23__.VariationSelectComponent, _filterableattributes_components_filterableattribute_select_f_attribute_select_component__WEBPACK_IMPORTED_MODULE_24__.FAttributeSelectComponent, _productspecifications_productspecification_component__WEBPACK_IMPORTED_MODULE_25__.ProductSpecificationComponent, _productspecifications_components_productspecification_list_productspecification_list_component__WEBPACK_IMPORTED_MODULE_26__.ProductSpecificationListComponent, _productspecifications_components_productspecification_upsert_productspecification_upsert_component__WEBPACK_IMPORTED_MODULE_27__.ProductSpecificationUpsertComponent, _stocks_stock_component__WEBPACK_IMPORTED_MODULE_29__.StockComponent, _stocks_components_stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_30__.StockListComponent, _stocks_components_stock_upsert_stock_upsert_component__WEBPACK_IMPORTED_MODULE_31__.StockUpsertComponent, _stocks_components_stock_select_stock_select_component__WEBPACK_IMPORTED_MODULE_32__.StockSelectComponent, _vendors_vendor_component__WEBPACK_IMPORTED_MODULE_33__.VendorComponent, _vendors_components_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_34__.VendorListComponent, _vendors_components_vendor_upsert_vendor_upsert_component__WEBPACK_IMPORTED_MODULE_35__.VendorUpsertComponent, _vendors_components_vendor_select_vendor_select_component__WEBPACK_IMPORTED_MODULE_36__.VendorSelectComponent, _stocks_components_stock_select_stock_label_pipe__WEBPACK_IMPORTED_MODULE_39__.StockLabelPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_43__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_44__.ReactiveFormsModule, _inventory_route__WEBPACK_IMPORTED_MODULE_0__.InventoryRoute, _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_4__.UtilityModule, _admin_module__WEBPACK_IMPORTED_MODULE_37__.AdminModule, _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_5__.CmsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_45__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_44__.FormsModule, _users_user_module__WEBPACK_IMPORTED_MODULE_38__.UserModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_46__.BsDatepickerModule],
    exports: [_stocks_components_stock_select_stock_select_component__WEBPACK_IMPORTED_MODULE_32__.StockSelectComponent, _vendors_components_vendor_select_vendor_select_component__WEBPACK_IMPORTED_MODULE_36__.VendorSelectComponent]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵsetComponentScope"](_categories_components_category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_3__.CategoryUpsertComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_43__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_43__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_44__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_44__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_44__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_44__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_44__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_44__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_44__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_40__.ProgressComponent, _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_41__.FilePickerComponent, _categories_components_category_select_category_select_component__WEBPACK_IMPORTED_MODULE_6__.CategorySelectComponent], []);

/***/ }),

/***/ 79568:
/*!********************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/inventory.route.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryRoute: () => (/* binding */ InventoryRoute)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _categories_components_category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories/components/category-upsert/category-upsert.component */ 12134);
/* harmony import */ var _categories_components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories/components/category-list/category-list.component */ 74529);
/* harmony import */ var _common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/modules/auth/services/auth-guard.service */ 99538);
/* harmony import */ var _attributes_attribute_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes/attribute.component */ 30991);
/* harmony import */ var _attributes_components_attribute_upsert_attribute_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes/components/attribute-upsert/attribute-upsert.component */ 78479);
/* harmony import */ var _filterableattributes_filterableattribute_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filterableattributes/filterableattribute.component */ 51134);
/* harmony import */ var _filterableattributes_components_filterableattribute_upsert_filterableattribute_upsert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filterableattributes/components/filterableattribute-upsert/filterableattribute-upsert.component */ 14381);
/* harmony import */ var _brands_brand_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./brands/brand.component */ 35177);
/* harmony import */ var _brands_components_brand_upsert_brand_upsert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./brands/components/brand-upsert/brand-upsert.component */ 49107);
/* harmony import */ var _variations_variation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./variations/variation.component */ 17809);
/* harmony import */ var _variations_components_variation_upsert_variation_upsert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./variations/components/variation-upsert/variation-upsert.component */ 22447);
/* harmony import */ var _products_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/product.component */ 57670);
/* harmony import */ var _products_components_product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products/components/product-upsert/product-upsert.component */ 66033);
/* harmony import */ var _productspecifications_productspecification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./productspecifications/productspecification.component */ 10900);
/* harmony import */ var _productspecifications_components_productspecification_list_productspecification_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./productspecifications/components/productspecification-list/productspecification-list.component */ 99585);
/* harmony import */ var _productspecifications_components_productspecification_upsert_productspecification_upsert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./productspecifications/components/productspecification-upsert/productspecification-upsert.component */ 73981);
/* harmony import */ var _stocks_stock_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./stocks/stock.component */ 88096);
/* harmony import */ var _stocks_components_stock_upsert_stock_upsert_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stocks/components/stock-upsert/stock-upsert.component */ 64383);
/* harmony import */ var _vendors_vendor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vendors/vendor.component */ 10789);
/* harmony import */ var _vendors_components_vendor_upsert_vendor_upsert_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vendors/components/vendor-upsert/vendor-upsert.component */ 30497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 61699);























const routes = [{
  path: "categories",
  component: _categories_components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__.CategoryListComponent
}, {
  path: "categories/:id",
  component: _categories_components_category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_0__.CategoryUpsertComponent
}, {
  path: "categories/create",
  component: _categories_components_category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_0__.CategoryUpsertComponent
}, {
  path: 'attributes',
  component: _attributes_attribute_component__WEBPACK_IMPORTED_MODULE_3__.AttributeComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'attributes/create',
  component: _attributes_components_attribute_upsert_attribute_upsert_component__WEBPACK_IMPORTED_MODULE_4__.AttributeUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'attributes/:id/update',
  component: _attributes_components_attribute_upsert_attribute_upsert_component__WEBPACK_IMPORTED_MODULE_4__.AttributeUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'filterable-attributes',
  component: _filterableattributes_filterableattribute_component__WEBPACK_IMPORTED_MODULE_5__.FilterableAttributeComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'filterable-attributes/create',
  component: _filterableattributes_components_filterableattribute_upsert_filterableattribute_upsert_component__WEBPACK_IMPORTED_MODULE_6__.FilterableAttributeUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'filterable-attributes/:id/update',
  component: _filterableattributes_components_filterableattribute_upsert_filterableattribute_upsert_component__WEBPACK_IMPORTED_MODULE_6__.FilterableAttributeUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'brands',
  component: _brands_brand_component__WEBPACK_IMPORTED_MODULE_7__.BrandComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'brands/create',
  component: _brands_components_brand_upsert_brand_upsert_component__WEBPACK_IMPORTED_MODULE_8__.BrandUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'brands/:id/update',
  component: _brands_components_brand_upsert_brand_upsert_component__WEBPACK_IMPORTED_MODULE_8__.BrandUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'variations',
  component: _variations_variation_component__WEBPACK_IMPORTED_MODULE_9__.VariationComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'variations/create',
  component: _variations_components_variation_upsert_variation_upsert_component__WEBPACK_IMPORTED_MODULE_10__.VariationUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'variations/:id/update',
  component: _variations_components_variation_upsert_variation_upsert_component__WEBPACK_IMPORTED_MODULE_10__.VariationUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'products',
  component: _products_product_component__WEBPACK_IMPORTED_MODULE_11__.ProductComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'products/create',
  component: _products_components_product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_12__.ProductUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'products/:id/update',
  component: _products_components_product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_12__.ProductUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'product-specifications',
  component: _productspecifications_productspecification_component__WEBPACK_IMPORTED_MODULE_13__.ProductSpecificationComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'product-specifications/create',
  component: _productspecifications_components_productspecification_list_productspecification_list_component__WEBPACK_IMPORTED_MODULE_14__.ProductSpecificationListComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'product-specifications/:id/update',
  component: _productspecifications_components_productspecification_upsert_productspecification_upsert_component__WEBPACK_IMPORTED_MODULE_15__.ProductSpecificationUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'stocks',
  component: _stocks_stock_component__WEBPACK_IMPORTED_MODULE_16__.StockComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'stocks/create',
  component: _stocks_components_stock_upsert_stock_upsert_component__WEBPACK_IMPORTED_MODULE_17__.StockUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'stocks/:id/update',
  component: _stocks_components_stock_upsert_stock_upsert_component__WEBPACK_IMPORTED_MODULE_17__.StockUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'vendors',
  component: _vendors_vendor_component__WEBPACK_IMPORTED_MODULE_18__.VendorComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'vendors/create',
  component: _vendors_components_vendor_upsert_vendor_upsert_component__WEBPACK_IMPORTED_MODULE_19__.VendorUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'vendors/:id/update',
  component: _vendors_components_vendor_upsert_vendor_upsert_component__WEBPACK_IMPORTED_MODULE_19__.VendorUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}];
class InventoryRoute {
  static #_ = this.ɵfac = function InventoryRoute_Factory(t) {
    return new (t || InventoryRoute)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
    type: InventoryRoute
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](InventoryRoute, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule]
  });
})();

/***/ }),

/***/ 60206:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/products/components/product-filter-item/product-select.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSelectComponent: () => (/* binding */ ProductSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/product.model */ 42712);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-upsert/product-upsert.component */ 66033);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/product.service */ 51492);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);


















function ProductSelectComponent_util_progress_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "util-progress", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("bar", true);
  }
}
const _c2 = function () {
  return {
    standalone: true
  };
};
class ProductSelectComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  componentName() {
    return "ProductSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, productService, dialogService) {
    super(eventBus, router, subContainer);
    this.productService = productService;
    this.dialogService = dialogService;
    this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_4__.InventoryEndpoints.PRODUCTS.PRODUCT_ENDPOINT_V2;
    this.items = [];
    this.selectedItem = null;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    if (authService.isAdmin()) {
      this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_4__.InventoryEndpoints.PRODUCTS.PRODUCT_ENDPOINT_ADMIN_V2;
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
    let query = _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__.TextUtility.removeSpecialCharacters(event.target?.value);
    if (query.length > 2) {
      this.search({
        page: 0,
        size: 10,
        q: query
      });
    }
  }
  onSelected(event) {
    // this.selected.emit(this.selectedItem)
    if (this.items.find(c => c.name == event.name)) {
      this.selected.emit(this.selectedItem);
    } else {
      let dialogRef = this.dialogService.open(_product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_5__.ProductUpsertComponent, {
        id: null,
        name: event.name,
        dialogUpsert: true
      });
      let component = dialogRef.componentInstance;
      component.onCompleted.subscribe(product => {
        this.selected.emit((0,_models_product_model__WEBPACK_IMPORTED_MODULE_3__.toProductBrief)(product));
      });
      component.onCanceled.subscribe(() => {
        dialogRef.close();
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.PRODUCTS_V2.SEARCH(params));
    this.productService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function ProductSelectComponent_Factory(t) {
    return new (t || ProductSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_9__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: ProductSelectComponent,
    selectors: [["app-product-select"]],
    inputs: {
      searchEndpoint: "searchEndpoint",
      selectedItem: "selectedItem"
    },
    outputs: {
      selected: "selected"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 8,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Product$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_FILTER_ITEM_PRODUCT_SELECT_COMPONENT_TS_1 = goog.getMsg("Product");
        i18n_0 = MSG_EXTERNAL_label_Product$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_FILTER_ITEM_PRODUCT_SELECT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09AA\u09A3\u09CD\u09AF";
      }
      return [["for", "autoSizingInput2", 1, "visually-hidden"], i18n_0, [3, "bar", 4, "ngIf"], ["id", "autoSizingInput2", "bindLabel", "name", "placeholder", "Search Products", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "keyup", "ngModelChange", "change"], [3, "bar"]];
    },
    template: function ProductSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ProductSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ng-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function ProductSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function ProductSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function ProductSelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.items)("hideSelected", true)("multiple", false)("addTag", true)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](7, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__.ProgressComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 37113:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/products/components/product-list/product-list.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListComponent: () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v2.component */ 92159);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 50913);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-upsert/product-upsert.component */ 66033);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/product.service */ 51492);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../components/breadcrumb/breadcrumb.component */ 43383);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);






















function ProductListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("bar", true);
  }
}
function ProductListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ProductListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, ProductListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 18)(10, "div", 19)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function ProductListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_9_div_1_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_9_div_1_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_9_div_1_tr_32_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r11.created_by, " ");
  }
}
function ProductListComponent_div_9_div_1_tr_32_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "img", 56);
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", item_r11.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}
function ProductListComponent_div_9_div_1_tr_32_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r11.name.substring(0, 1).toUpperCase(), " ");
  }
}
function ProductListComponent_div_9_div_1_tr_32_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "i", 58);
  }
}
function ProductListComponent_div_9_div_1_tr_32_td_26_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ProductListComponent_div_9_div_1_tr_32_td_26_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r25);
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r23.onApproveClick(item_r11.id, !item_r11.approved));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_9_div_1_tr_32_td_26_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ProductListComponent_div_9_div_1_tr_32_td_26_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r28);
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r26.onApproveClick(item_r11.id, !item_r11.approved));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_9_div_1_tr_32_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ProductListComponent_div_9_div_1_tr_32_td_26_a_1_Template, 2, 0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, ProductListComponent_div_9_div_1_tr_32_td_26_a_2_Template, 2, 0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r11.approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r11.approved);
  }
}
function ProductListComponent_div_9_div_1_tr_32_td_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 53)(1, "app-delete", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function ProductListComponent_div_9_div_1_tr_32_td_30_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r30.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r17.config.delEndpoint + "/" + item_r11.id);
  }
}
function ProductListComponent_div_9_div_1_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, ProductListComponent_div_9_div_1_tr_32_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "td")(5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, ProductListComponent_div_9_div_1_tr_32_img_6_Template, 1, 1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ProductListComponent_div_9_div_1_tr_32_span_7_Template, 2, 1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, ProductListComponent_div_9_div_1_tr_32_i_11_Template, 1, 0, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ProductListComponent_div_9_div_1_tr_32_Template_a_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      const item_r11 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r33.onUpsertClick(item_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "td")(19, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](21, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "td")(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](25, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](26, ProductListComponent_div_9_div_1_tr_32_td_26_Template, 3, 2, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "td", 53)(28, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ProductListComponent_div_9_div_1_tr_32_Template_a_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r34);
      const item_r11 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r35.onUpsertClick(item_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](30, ProductListComponent_div_9_div_1_tr_32_td_30_Template, 2, 1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r11.images.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r11.images.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r10.getCategoryNames(item_r11.categories));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r11.approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r11.brand.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r11.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](21, 14, item_r11.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](25, 16, item_r11.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.config.showApproveButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", item_r11.approved ? "btn-outline-warning disabled" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.config.showDeleteButton && !item_r11.approved);
  }
}
function ProductListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](5, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 31)(7, "table", 32)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](11, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, ProductListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](14, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](16, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](18, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](20, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](22, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](24, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](26, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](27, ProductListComponent_div_9_div_1_th_27_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](29, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](30, ProductListComponent_div_9_div_1_th_30_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](31, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](32, ProductListComponent_div_9_div_1_tr_32_Template, 31, 18, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showApproveButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r5.products.content);
  }
}
function ProductListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", item_r37.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}
function ProductListComponent_div_9_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 87)(1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r37.name.substring(0, 1).toUpperCase(), " ");
  }
}
function ProductListComponent_div_9_div_2_div_1_h6_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h6", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" By ", item_r37.created_by, "");
  }
}
function ProductListComponent_div_9_div_2_div_1_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 89)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](2, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 1, item_r37.updated_at), " ");
  }
}
function ProductListComponent_div_9_div_2_div_1_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](3, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_9_div_2_div_1_label_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", c_r49.name, " ");
  }
}
function ProductListComponent_div_9_div_2_div_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 83)(1, "app-delete", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function ProductListComponent_div_9_div_2_div_1_div_32_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r50.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r44.config.delEndpoint + "/" + item_r37.id)("look", "bx");
  }
}
function ProductListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 66)(1, "div", 67)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, ProductListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, ProductListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "h5", 70)(6, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ProductListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const item_r37 = restoredCtx.$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r53.onUpsertClick(item_r37.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, ProductListComponent_div_9_div_2_div_1_h6_8_Template, 2, 1, "h6", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "h6", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "div", 0)(12, "div", 74)(13, "p", 75)(14, "small")(15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](16, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](19, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "div", 74)(21, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, ProductListComponent_div_9_div_2_div_1_small_22_Template, 6, 3, "small", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](23, ProductListComponent_div_9_div_2_div_1_small_23_Template, 6, 0, "small", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "div")(25, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](26, ProductListComponent_div_9_div_2_div_1_label_26_Template, 2, 1, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "div", 81)(28, "div", 82)(29, "div", 83)(30, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ProductListComponent_div_9_div_2_div_1_Template_a_click_30_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const item_r37 = restoredCtx.$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r55.onUpsertClick(item_r37.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](31, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](32, ProductListComponent_div_9_div_2_div_1_div_32_Template, 2, 2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r37.images.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r37.images.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r37.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r36.config.showUserFilter && item_r37.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r37.brand.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](19, 10, item_r37.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r37.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r37.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", item_r37.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r36.config.showDeleteButton);
  }
}
function ProductListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ProductListComponent_div_9_div_2_div_1_Template, 33, 12, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r6.products.content);
  }
}
function ProductListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ProductListComponent_div_9_div_1_Template, 33, 6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, ProductListComponent_div_9_div_2_Template, 2, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.GRID);
  }
}
class ProductListComponent extends _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV2 {
  componentName() {
    return "ProductListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, productService, notifier) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.productService = productService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultProductConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__.defaultFilterData;
    this.products = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    if (authService.isAdmin()) {
      this.config.showApproveButton = true;
      this.config.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__.InventoryEndpoints.PRODUCTS.PRODUCT_ENDPOINT_ADMIN_V2;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__.parseFilterData)(params);
      this.fetchProducts({
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
      text: this.translations["Products"],
      link: null,
      active: true
    }];
  }
  getCategoryNames(categories) {
    return categories.map(c => c.name).join(", ");
  }
  fetchProducts(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.PRODUCTS_V2.SEARCH(params));
    this.productService.search(key, this.config.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.products = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "Product is deleted");
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
      params: (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__.toParams)(this.filterData)
    };
  }
  getUpsertComponent() {
    return _product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_5__.ProductUpsertComponent;
  }
  onApproveClick(id, approved) {
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.PRODUCTS_V2.APPROVE(id));
    this.productService.approve(key, this.config.searchEndpoint, id, approved);
    this.subscribe(key, null, (value, meta) => {
      this.notifier.success("Success", "Product is approved");
      this.ngOnInit();
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error("Error", meta.data.error.message);
    });
  }
  static #_ = this.ɵfac = function ProductListComponent_Factory(t) {
    return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_11__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__.NotifierService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: ProductListComponent,
    selectors: [["app-product-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_MyProducts$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___5 = goog.getMsg("Products that I've created");
        i18n_4 = MSG_EXTERNAL_msg_MyProducts$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u0986\u09AE\u09BE\u09B0 \u09A4\u09C8\u09B0\u09BF\u0995\u09C3\u09A4 \u09AA\u09A3\u09CD\u09AF\u0997\u09C1\u09B2\u09CB";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___7 = goog.getMsg("Id");
        i18n_6 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "Id";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___9 = goog.getMsg("Image");
        i18n_8 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u099B\u09AC\u09BF";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Category$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___11 = goog.getMsg("Category");
        i18n_10 = MSG_EXTERNAL_label_Category$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u0995\u09CD\u09AF\u09BE\u099F\u09BE\u0997\u09B0\u09BF";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___13 = goog.getMsg("Title");
        i18n_12 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Brand$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___15 = goog.getMsg("Brand");
        i18n_14 = MSG_EXTERNAL_label_Brand$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09AC\u09CD\u09B0\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Weight$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___17 = goog.getMsg("Weight");
        i18n_16 = MSG_EXTERNAL_label_Weight$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u0993\u099C\u09A8";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___19 = goog.getMsg("Created At");
        i18n_18 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___21 = goog.getMsg("Last Updated");
        i18n_20 = MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___21;
      } else {
        i18n_20 = "\u09B8\u09B0\u09CD\u09AC\u09B6\u09C7\u09B7 \u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___23 = goog.getMsg("Update");
        i18n_22 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___23;
      } else {
        i18n_22 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____25 = goog.getMsg("Created By");
        i18n_24 = MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____25;
      } else {
        i18n_24 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Approve$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____27 = goog.getMsg("Approve");
        i18n_26 = MSG_EXTERNAL_label_Approve$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____27;
      } else {
        i18n_26 = "\u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09A8";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____29 = goog.getMsg("Delete");
        i18n_28 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____29;
      } else {
        i18n_28 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_createdAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____31 = goog.getMsg("Created At");
        i18n_30 = MSG_EXTERNAL_label_createdAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____31;
      } else {
        i18n_30 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_updatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS_____33 = goog.getMsg("Updated");
        i18n_32 = MSG_EXTERNAL_label_updatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS_____33;
      } else {
        i18n_32 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS_____35 = goog.getMsg("Updated");
        i18n_34 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS_____35;
      } else {
        i18n_34 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "/assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], i18n_4, [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, [4, "ngFor", "ngForOf"], i18n_24, i18n_26, i18n_28, [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], [1, "text-wrap"], ["class", "bx bx-check-circle text-success", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], ["style", "width: 100px", 4, "ngIf"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-warning", "btn-sm", "edit", 3, "ngClass", "click"], [1, "fas", "fa-pencil-alt"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "bx", "bx-check-circle", "text-success"], ["class", "btn btn-outline-warning btn-sm edit", "title", "Edit", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-success btn-sm edit", "title", "Edit", 3, "click", 4, "ngIf"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-check-circle"], ["title", "Edit", 1, "btn", "btn-outline-success", "btn-sm", "edit", 3, "click"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "font-size-10", "text-primary"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], i18n_30, [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], ["class", "badge bg-primary font-size-11 m-1", 4, "ngFor", "ngForOf"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [1, "font-size-10"], i18n_32, i18n_34, [1, "badge", "bg-primary", "font-size-11", "m-1"], [3, "requestUrl", "look", "deleteItemEvent"]];
    },
    template: function ProductListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("layoutSelected", function ProductListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("addButtonClick", function ProductListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ProductListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, ProductListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, ProductListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("title", ctx.translations["All Products"])("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.products.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.products.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("page", ctx.products);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 66033:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/products/components/product-upsert/product-upsert.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductUpsertComponent: () => (/* binding */ ProductUpsertComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v2.component */ 19870);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 50913);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _base_endpoints_iparams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../base/endpoints/iparams */ 58674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/product.service */ 51492);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/editor/editor.component */ 16265);
/* harmony import */ var _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/cms/files/components/filepicker/filepicker.component */ 7247);
/* harmony import */ var _categories_components_category_select_category_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../categories/components/category-select/category-select.component */ 95081);
/* harmony import */ var _brands_components_brand_select_brand_select_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../brands/components/brand-select/brand-select.component */ 73019);
/* harmony import */ var _filterableattributes_components_filterableattribute_select_f_attribute_select_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../filterableattributes/components/filterableattribute-select/f-attribute-select.component */ 20756);























function ProductUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "util-progress", 32);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("bar", true);
  }
}
function ProductUpsertComponent_em_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "em", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function ProductUpsertComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 35)(5, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ProductUpsertComponent_div_34_Template_a_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r7);
      const item_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r6.removeCategory(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](6, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](item_r5.name);
  }
}
function ProductUpsertComponent_em_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "em", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function ProductUpsertComponent_div_40_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r10 = ctx.$implicit;
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", v_r10)("selected", item_r8.value === v_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](v_r10);
  }
}
function ProductUpsertComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 34)(1, "div", 39)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 39)(5, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function ProductUpsertComponent_div_40_Template_select_change_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r13);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r12.onValueSelected(item_r8.attr, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](7, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, ProductUpsertComponent_div_40_option_8_Template, 2, 3, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 39)(10, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ProductUpsertComponent_div_40_Template_a_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r13);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r14.removeSpecification(item_r8.attr));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](11, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](item_r8.attr.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", item_r8.attr.values);
  }
}
class ProductUpsertComponent extends _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV2 {
  constructor(eventBus, router, subContainer, route, authService, productService, notifier, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.productService = productService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultProductConfig;
    this.selectedCategories = [];
    this.selectedBrand = null;
    this.specifications = [];
    this.selectedVariations = [];
    this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.minLength(3)]),
      slug: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.minLength(3)]),
      brand_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', []),
      category_ids: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl([], [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]),
      variant_ids: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl([], []),
      specifications: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(new Map(), []),
      images: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl([]),
      weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null),
      approved: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(false),
      frozen_item: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(false)
    });
    if (authService.isAdmin()) {
      this.config.getEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_4__.InventoryEndpoints.PRODUCTS.PRODUCT_ENDPOINT_ADMIN_V2;
    }
    if (dialogData.name != null) {
      this.productForm.controls.name.setValue(dialogData.name);
    }
  }
  componentName() {
    return "ProductUpsertComponent";
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Products",
      link: "/admin/products",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  ngOnInit() {
    super.ngOnInit();
    this.productForm.controls.name.valueChanges.subscribe(value => {
      this.productForm.controls.slug.setValue(_common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__.TextUtility.slugify(value) + "_" + _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__.TextUtility.randomString(5));
    });
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.PRODUCTS_V2.GET(exId));
    this.productService.fetchSingle(key, this.config.getEndpoint, exId);
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
    if (!this.productForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  onImgUploaded(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.productForm.controls.images.setValue(images.map(i => i.image_url));
    }
  }
  getExImages() {
    let images = this.productForm.controls.images.value;
    return images?.map(img => {
      return {
        image_url: img,
        thumb_url: img
      };
    });
  }
  getConfig() {
    return this.config;
  }
  getListPageRoute() {
    return _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.list;
  }
  upsert(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.PRODUCTS_V2.UPSERT(exId));
    let req = {
      name: this.productForm.controls.name.value,
      slug: this.productForm.controls.slug.value,
      brand_id: this.productForm.controls.brand_id.value,
      description: this.productForm.controls.description.value,
      category_ids: this.productForm.controls.category_ids.value,
      variant_ids: this.productForm.controls.variant_ids.value,
      images: this.productForm.controls.images.value,
      weight: this.productForm.controls.weight.value,
      approved: this.productForm.controls.approved.value,
      frozen_item: this.productForm.controls.frozen_item.value,
      action: null,
      specifications: (0,_base_endpoints_iparams__WEBPACK_IMPORTED_MODULE_5__.mapToParams)(this.productForm.controls.specifications.value)
    };
    this.productService.upsert(key, _inventory_endpoints__WEBPACK_IMPORTED_MODULE_4__.InventoryEndpoints.PRODUCTS.PRODUCT_ENDPOINT, req, exId);
    this.subscribe(key, null, (value, meta) => {
      this.loading = false;
      let message = "Product has been " + (exId ? "updated" : "created");
      this.notifier.success("Success", message);
      this.productForm.reset();
      this.onSuccess(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    this.selectedBrand = n.brand;
    this.selectedCategories = n.categories;
    this.selectedVariations = n.variations;
    this.specifications = n.specifications.map(s => {
      return {
        attr: s.filterable_attribute,
        value: s.value
      };
    });
    this.productForm.controls.name.setValue(n.name);
    this.productForm.controls.slug.setValue(n.slug);
    this.productForm.controls.brand_id.setValue(n.brand.id);
    this.productForm.controls.description.setValue(n.description);
    this.productForm.controls.category_ids.setValue(n.categories.map(c => c.id));
    this.productForm.controls.variant_ids.setValue(n.variations.map(v => v.id));
    this.productForm.controls.specifications.setValue(this.specificationsToMap(this.specifications));
    this.productForm.controls.images.setValue(n.images);
    this.productForm.controls.weight.setValue(n.weight);
    this.productForm.controls.approved.setValue(n.approved);
    this.productForm.controls.frozen_item.setValue(n.frozen_item);
  }
  onCategorySelected(category) {
    // if category is null or already selected, return
    if (category == null || this.selectedCategories.find(c => c.id == category.id)) {
      return;
    }
    this.selectedCategories.push(category);
    this.productForm.controls.category_ids.setValue(this.selectedCategories.map(c => c.id));
  }
  onBrandSelected(brand) {
    this.selectedBrand = brand;
    this.productForm.controls.brand_id.setValue(this.selectedBrand == null ? null : this.selectedBrand.id);
  }
  onFaSelected(attr) {
    if (attr == null || this.specifications.find(s => s.attr.id == attr.id)) {
      return;
    }
    this.specifications.push({
      attr: attr,
      value: null
    });
  }
  onVariationSelected(variation) {
    if (variation == null || variation.id == null || this.selectedVariations.find(v => v.id == variation.id)) {
      return;
    }
    this.selectedVariations.push(variation);
    this.productForm.controls.variant_ids.setValue(this.selectedVariations.map(v => v.id));
  }
  removeCategory(item) {
    this.selectedCategories = this.selectedCategories.filter(c => c.id != item.id);
    this.productForm.controls.category_ids.setValue(this.selectedCategories.map(c => c.id));
  }
  removeVariation(item) {
    this.selectedVariations = this.selectedVariations.filter(v => v.id != item.id);
    this.productForm.controls.variant_ids.setValue(this.selectedVariations.map(v => v.id));
  }
  onValueSelected(fa, event) {
    this.specifications = this.specifications.map(s => {
      if (s.attr.id == fa.id) {
        s.value = event.target.value;
      }
      return s;
    });
    this.updateControlValue();
  }
  removeSpecification(item) {
    this.specifications = this.specifications.filter(s => s.attr.id != item.id);
    this.updateControlValue();
  }
  updateControlValue() {
    this.productForm.controls.specifications.setValue(this.specificationsToMap(this.specifications));
  }
  specificationsToMap(specs) {
    return specs.reduce((acc, obj) => {
      if (obj.value !== null) {
        acc.set(obj.attr.code, obj.value);
      }
      return acc;
    }, new Map());
  }
  static #_ = this.ɵfac = function ProductUpsertComponent_Factory(t) {
    return new (t || ProductUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_9__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_10__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: ProductUpsertComponent,
    selectors: [["app-product-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]],
    decls: 55,
    vars: 18,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpsertProduct$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_1 = goog.getMsg("Create/Update Product");
        i18n_0 = MSG_EXTERNAL_label_UpsertProduct$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09AA\u09A3\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF/\u0986\u09AA\u09A1\u09C7\u099F \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_3 = goog.getMsg("Name");
        i18n_2 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09A8\u09BE\u09AE";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Brand$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_5 = goog.getMsg("Brand");
        i18n_4 = MSG_EXTERNAL_label_Brand$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u09AC\u09CD\u09B0\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Category$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_7 = goog.getMsg("Category");
        i18n_6 = MSG_EXTERNAL_label_Category$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u0995\u09CD\u09AF\u09BE\u099F\u09BE\u0997\u09B0\u09BF";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Specifications$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_9 = goog.getMsg("Specifications");
        i18n_8 = MSG_EXTERNAL_label_Specifications$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_9;
      } else {
        i18n_8 = "\u09AC\u09C8\u09B6\u09BF\u09B7\u09CD\u099F\u09CD\u09AF\u0997\u09C1\u09B2\u09CB";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_11 = goog.getMsg("Description");
        i18n_10 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_11;
      } else {
        i18n_10 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_13 = goog.getMsg("Cancel");
        i18n_12 = MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_13;
      } else {
        i18n_12 = "\u09AC\u09BE\u09A4\u09BF\u09B2";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Submit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_15 = goog.getMsg("Submit");
        i18n_14 = MSG_EXTERNAL_label_Submit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS_15;
      } else {
        i18n_14 = "\u099C\u09AE\u09BE \u09A6\u09BF\u09A8";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_BrandRequired$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS__17 = goog.getMsg(" Must select a Brand! ");
        i18n_16 = MSG_EXTERNAL_msg_BrandRequired$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS__17;
      } else {
        i18n_16 = "\u09AC\u09CD\u09B0\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8!";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_CategoryRequired$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS__19 = goog.getMsg(" Must select a category! ");
        i18n_18 = MSG_EXTERNAL_msg_CategoryRequired$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS__19;
      } else {
        i18n_18 = "\u0995\u09CD\u09AF\u09BE\u099F\u09BE\u0997\u09B0\u09BF \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8!";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_ChooseValue$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS__21 = goog.getMsg("Choose Value");
        i18n_20 = MSG_EXTERNAL_label_ChooseValue$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_UPSERT_PRODUCT_UPSERT_COMPONENT_TS__21;
      } else {
        i18n_20 = "\u09AE\u09BE\u09A8 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], i18n_0, [3, "formGroup"], [1, "col-sm-6", "mb-3"], ["for", "name-input", 1, "form-label"], i18n_2, [1, "error"], ["type", "text", "id", "name-input", "name", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], [1, "text-danger"], i18n_4, [3, "selectedItem", "selected"], ["class", "text-danger", 4, "ngIf"], i18n_6, ["class", "row my-2 py-2 mx-0 bg-info-subtle", 4, "ngFor", "ngForOf"], [1, "col-sm-6"], ["for", "specification", 1, "form-label"], i18n_8, [1, "mb-3"], ["for", "description", 1, "form-label"], i18n_10, ["id", "description", "formControlName", "description"], [3, "title", "multiSelect", "existingImages", "required", "onUploaded"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], i18n_12, ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], i18n_14, [3, "bar"], i18n_16, [1, "row", "my-2", "py-2", "mx-0", "bg-info-subtle"], [1, "col-6"], ["href", "javascript: void(0);", 3, "click"], [1, "mdi", "mdi-close-circle-outline", "text-danger", "float-end"], i18n_18, [1, "col-4"], ["id", "specification", "aria-label", "Specification", 1, "form-select", 3, "change"], i18n_20, [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]];
    },
    template: function ProductUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, ProductUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "form", 7)(8, "div", 1)(9, "div", 8)(10, "label", 9)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](12, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 8)(19, "label", 9)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](21, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "app-brand-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selected", function ProductUpsertComponent_Template_app_brand_select_selected_24_listener($event) {
          return ctx.onBrandSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](25, ProductUpsertComponent_em_25_Template, 2, 0, "em", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "div", 1)(27, "div", 8)(28, "label", 9)(29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](30, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](32, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](33, "app-category-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selected", function ProductUpsertComponent_Template_app_category_select_selected_33_listener($event) {
          return ctx.onCategorySelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](34, ProductUpsertComponent_div_34_Template, 7, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](35, ProductUpsertComponent_em_35_Template, 2, 0, "em", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](36, "div", 19)(37, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](38, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](39, "app-fa-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selected", function ProductUpsertComponent_Template_app_fa_select_selected_39_listener($event) {
          return ctx.onFaSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](40, ProductUpsertComponent_div_40_Template, 12, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](41, "div", 22)(42, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](43, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](44, "app-editor", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](45, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](47, "app-file-picker", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("onUploaded", function ProductUpsertComponent_Template_app_file_picker_onUploaded_47_listener($event) {
          return ctx.onImgUploaded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "div", 27)(49, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ProductUpsertComponent_Template_button_click_49_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](51, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](52, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ProductUpsertComponent_Template_button_click_52_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](54, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Enter Name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.productForm, "name", "minLength", "Name should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("selectedItem", ctx.selectedBrand);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.productForm.controls.brand_id.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("selectedItem", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.selectedCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.productForm.controls.category_ids.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("selectedItem", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.specifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.productForm, "description", "minLength", "Description should be at least 20 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("title", ctx.translations["Images"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("multiSelect", true)("existingImages", ctx.getExImages())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", ctx.productForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__.ProgressComponent, _common_modules_utility_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_12__.EditorComponent, _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_13__.FilePickerComponent, _categories_components_category_select_category_select_component__WEBPACK_IMPORTED_MODULE_14__.CategorySelectComponent, _brands_components_brand_select_brand_select_component__WEBPACK_IMPORTED_MODULE_15__.BrandSelectComponent, _filterableattributes_components_filterableattribute_select_f_attribute_select_component__WEBPACK_IMPORTED_MODULE_16__.FAttributeSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50913:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/products/models/config.model.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultProductConfig: () => (/* binding */ defaultProductConfig),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/breadcrumb/breadcrumb.model */ 46405);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);


let defaultProductConfig = {
  defaultLayout: _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.COLUMN,
  upsertOnDialog: false,
  showUserFilter: false,
  showDeleteButton: true,
  showApproveButton: false,
  searchEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTS.PRODUCT_ENDPOINT_V2,
  delEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTS.PRODUCT_ENDPOINT_V2,
  getEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTS.PRODUCT_ENDPOINT_V2
};
let selfRoutes = {
  list: "/admin/inventory/products",
  create: "/admin/inventory/products/create",
  update(id) {
    return id == null ? this.create : "/admin/inventory/products/" + id + '/update';
  }
};

/***/ }),

/***/ 42712:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/products/models/product.model.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toProductBrief: () => (/* binding */ toProductBrief)
/* harmony export */ });
function toProductBrief(n) {
  return {
    id: n.id,
    created_at: n.created_at,
    updated_at: n.updated_at,
    created_by: n.created_by,
    name: n.name,
    brand: {
      id: n.brand_id,
      name: n.brand_name,
      description: "",
      image: "",
      created_at: new Date(),
      updated_at: new Date(),
      created_by: ""
    },
    images: n.images,
    categories: n.category_ids.map((id, i) => {
      return {
        id: id,
        name: n.category_names[i]
      };
    }),
    weight: n.weight,
    approved: n.approved
  };
}

/***/ }),

/***/ 57670:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/products/product.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductComponent: () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/product-list/product-list.component */ 37113);


class ProductComponent {
  static #_ = this.ɵfac = function ProductComponent_Factory(t) {
    return new (t || ProductComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProductComponent,
    selectors: [["app-product"]],
    decls: 1,
    vars: 0,
    template: function ProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-product-list");
      }
    },
    dependencies: [_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 51492:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/products/services/product.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class ProductService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTS.SEARCH(endpoint, params);
    this.http.get(url).subscribe(products => {
      this.eventBusService.publish(key, products.body);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, endpoint, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, endpoint, id) {
    this.http.get(_inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTS.GET(endpoint, id)).subscribe(product => {
      this.eventBusService.publish(key, product.body);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, endpoint, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, endpoint, productReq, exId) {
    let url = exId == null ? _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTS.CREATE(endpoint) : _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTS.UPDATE(endpoint, exId);
    let observable = exId == null ? this.http.post(url, productReq) : this.http.patch(url, productReq);
    console.log(productReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, endpoint, productReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  approve(key, endpoint, id, approved) {
    let url = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTS.APPROVE(endpoint, id, approved);
    this.http.patch(url, {}).subscribe(res => {
      this.eventBusService.publish(key, res.body);
    }, err => {
      this.handleError(err, auth => {
        this.approve(key, endpoint, id, approved);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function ProductService_Factory(t) {
    return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ProductService,
    factory: ProductService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 99585:
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/productspecifications/components/productspecification-list/productspecification-list.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSpecificationListComponent: () => (/* binding */ ProductSpecificationListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v2.component */ 92159);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 56353);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _productspecification_upsert_productspecification_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../productspecification-upsert/productspecification-upsert.component */ 73981);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_productspecification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/productspecification.service */ 403);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../components/breadcrumb/breadcrumb.component */ 43383);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);






















function ProductSpecificationListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("bar", true);
  }
}
function ProductSpecificationListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Cooking your data, please wait..");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ProductSpecificationListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "No items");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ProductSpecificationListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ProductSpecificationListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, ProductSpecificationListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 18)(10, "div", 19)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function ProductSpecificationListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ProductSpecificationListComponent_div_9_div_1_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ProductSpecificationListComponent_div_9_div_1_tr_33_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.created_by);
  }
}
function ProductSpecificationListComponent_div_9_div_1_tr_33_td_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 34)(1, "app-delete", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function ProductSpecificationListComponent_div_9_div_1_tr_33_td_30_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r14.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r12.config.delEndpoint + "/" + item_r10.id);
  }
}
function ProductSpecificationListComponent_div_9_div_1_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, ProductSpecificationListComponent_div_9_div_1_tr_33_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "td")(5, "div", 31)(6, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "td")(9, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ProductSpecificationListComponent_div_9_div_1_tr_33_Template_a_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r18);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r17.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "td")(20, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](22, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "td")(24, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](26, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "td", 34)(28, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ProductSpecificationListComponent_div_9_div_1_tr_33_Template_a_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r18);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r19.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](30, ProductSpecificationListComponent_div_9_div_1_tr_33_td_30_Template, 2, 1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r9.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r10.filterable_attribute.name.substring(0, 1).toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r10.product_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.filterable_attribute.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.filterable_attribute.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.filterable_attribute.values.join(","));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](22, 11, item_r10.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](26, 13, item_r10.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r9.config.showDeleteButton);
  }
}
function ProductSpecificationListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "ProductSpecifications that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 28)(7, "table", 29)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, ProductSpecificationListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "Product ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18, "Attribute");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](20, "Attribute Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](22, "Attribute Values");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](24, "Spec. Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](26, "Created At");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](28, "Last Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](30, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](31, ProductSpecificationListComponent_div_9_div_1_th_31_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](33, ProductSpecificationListComponent_div_9_div_1_tr_33_Template, 31, 15, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r5.productSpecifications.content);
  }
}
function ProductSpecificationListComponent_div_9_div_2_div_1_h6_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h6", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" By ", item_r21.created_by, "");
  }
}
function ProductSpecificationListComponent_div_9_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 60)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 1, item_r21.updated_at), " ");
  }
}
function ProductSpecificationListComponent_div_9_div_2_div_1_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ProductSpecificationListComponent_div_9_div_2_div_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 54)(1, "app-delete", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function ProductSpecificationListComponent_div_9_div_2_div_1_div_37_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r28.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r25.config.delEndpoint + "/" + item_r21.id)("look", "bx");
  }
}
const _c0 = function (a1) {
  return ["/admin/inventory/products", a1, "update"];
};
function ProductSpecificationListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "div", 26)(3, "div", 42)(4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "h5", 43)(7, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ProductSpecificationListComponent_div_9_div_2_div_1_Template_a_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r31.onUpsertClick(item_r21.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, ProductSpecificationListComponent_div_9_div_2_div_1_h6_9_Template, 2, 1, "h6", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 0)(11, "div", 46)(12, "p", 47)(13, "small")(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div", 46)(20, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, ProductSpecificationListComponent_div_9_div_2_div_1_small_21_Template, 6, 3, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, ProductSpecificationListComponent_div_9_div_2_div_1_small_22_Template, 6, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "div")(26, "a", 50)(27, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "div", 52)(30, "div", 53)(31, "div", 54)(32, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](34, "div", 54)(35, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ProductSpecificationListComponent_div_9_div_2_div_1_Template_a_click_35_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r33.onUpsertClick(item_r21.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](36, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](37, ProductSpecificationListComponent_div_9_div_2_div_1_div_37_Template, 2, 2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r21.filterable_attribute.name.substring(0, 1).toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r21.filterable_attribute.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r20.config.showUserFilter && item_r21.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 10, item_r21.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r21.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r21.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r21.filterable_attribute.values.join(","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r21.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](12, _c0, item_r21.product_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r20.config.showDeleteButton);
  }
}
function ProductSpecificationListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ProductSpecificationListComponent_div_9_div_2_div_1_Template, 38, 14, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r6.productSpecifications.content);
  }
}
function ProductSpecificationListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ProductSpecificationListComponent_div_9_div_1_Template, 34, 5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, ProductSpecificationListComponent_div_9_div_2_Template, 2, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.GRID);
  }
}
class ProductSpecificationListComponent extends _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV2 {
  componentName() {
    return "ProductSpecificationListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, productSpecificationService, notifier) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.productSpecificationService = productSpecificationService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultProductSpecificationConfig;
    this.productSpecifications = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    if (authService.isAdmin()) {
      this.config.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__.InventoryEndpoints.PRODUCTSPECIFICATIONS.PRODUCTSPECIFICATION_ENDPOINT_ADMIN;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      let filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__.parseFilterData)(params);
      this.fetchProductSpecifications({
        q: filterData.query,
        username: filterData.username,
        from_date: filterData.fromDate,
        to_date: filterData.toDate,
        page: filterData.page,
        size: filterData.size
      });
    });
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "ProductSpecifications",
      link: null,
      active: true
    }];
  }
  fetchProductSpecifications(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.PRODUCTSPECIFICATIONS.SEARCH(params));
    this.productSpecificationService.search(key, this.config.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.productSpecifications = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "ProductSpecification is deleted");
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
      params: {}
    };
  }
  getUpsertComponent() {
    return _productspecification_upsert_productspecification_upsert_component__WEBPACK_IMPORTED_MODULE_5__.ProductSpecificationUpsertComponent;
  }
  static #_ = this.ɵfac = function ProductSpecificationListComponent_Factory(t) {
    return new (t || ProductSpecificationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_productspecification_service__WEBPACK_IMPORTED_MODULE_11__.ProductSpecificationService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__.NotifierService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: ProductSpecificationListComponent,
    selectors: [["app-productspecification-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "/assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], [1, "text-uppercase"], ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "avatar-sm", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], ["href", "javascript: void(0);", 3, "click"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "bg-primary", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], ["href", "javascript: void(0);", 3, "routerLink"], [1, "bx", "bxl-product-hunt", "text-primary"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "font-size-10", "text-info"], [1, "font-size-10"], [3, "requestUrl", "look", "deleteItemEvent"]],
    template: function ProductSpecificationListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("layoutSelected", function ProductSpecificationListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("addButtonClick", function ProductSpecificationListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, ProductSpecificationListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, ProductSpecificationListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, ProductSpecificationListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("title", "ProductSpecifications")("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.productSpecifications.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.productSpecifications.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("page", ctx.productSpecifications);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterLink, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 73981:
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/productspecifications/components/productspecification-upsert/productspecification-upsert.component.ts ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSpecificationUpsertComponent: () => (/* binding */ ProductSpecificationUpsertComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v2.component */ 19870);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 56353);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_productspecification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/productspecification.service */ 403);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _products_components_product_filter_item_product_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../products/components/product-filter-item/product-select.component */ 60206);
/* harmony import */ var _filterableattributes_components_filterableattribute_select_f_attribute_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../filterableattributes/components/filterableattribute-select/f-attribute-select.component */ 20756);
















function ProductSpecificationUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "util-progress", 15);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("bar", true);
  }
}
function ProductSpecificationUpsertComponent_div_18_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", v_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", v_r3, " ");
  }
}
function ProductSpecificationUpsertComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 7)(1, "label", 16)(2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ProductSpecificationUpsertComponent_div_18_option_5_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.selectedAttr == null ? null : ctx_r1.selectedAttr.values);
  }
}
class ProductSpecificationUpsertComponent extends _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV2 {
  constructor(eventBus, router, subContainer, route, productSpecificationService, notifier, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.productSpecificationService = productSpecificationService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultProductSpecificationConfig;
    this.selectedAttr = null;
    this.selectedProduct = null;
    this.specificationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
      product_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      filterable_attribute_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      value: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required])
    });
  }
  componentName() {
    return "ProductSpecificationUpsertComponent";
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "ProductSpecifications",
      link: "/admin/productspecifications",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.PRODUCTSPECIFICATIONS.GET(exId));
    this.productSpecificationService.fetchSingle(key, exId);
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
    if (!this.specificationForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  getConfig() {
    return this.config;
  }
  getListPageRoute() {
    return _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.list;
  }
  upsert(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.PRODUCTSPECIFICATIONS.UPSERT(exId));
    // @ts-ignore
    this.productSpecificationService.upsert(key, this.specificationForm.value, exId);
    this.subscribe(key, null, (value, meta) => {
      this.loading = false;
      let message = "ProductSpecification has been " + (exId ? "updated" : "created");
      this.notifier.success("Success", message);
      this.specificationForm.reset();
      if (this.config.upsertOnDialog) {
        this.onCompleted.emit(meta.data);
      } else {
        this.navigate(_models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.list, value => {
          this.notifier.success("Success!", message);
        });
      }
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    this.selectedAttr = n.filterable_attribute;
    // TODO: get product info from server
    // this.selectedProduct = n.product_id
    this.specificationForm.controls.product_id.setValue(n.product_id);
    this.specificationForm.controls.filterable_attribute_id.setValue(n.filterable_attribute_id);
    this.specificationForm.controls.value.setValue(n.value);
  }
  onAttrSelected(attr) {
    this.selectedAttr = attr;
    this.specificationForm.controls.filterable_attribute_id.setValue(attr?.id == null ? null : attr.id);
  }
  onProductSelected(product) {
    this.selectedProduct = product;
    this.specificationForm.controls.product_id.setValue(product?.id == null ? null : product.id);
  }
  static #_ = this.ɵfac = function ProductSpecificationUpsertComponent_Factory(t) {
    return new (t || ProductSpecificationUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_productspecification_service__WEBPACK_IMPORTED_MODULE_5__.ProductSpecificationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: ProductSpecificationUpsertComponent,
    selectors: [["app-productspecification-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
    decls: 24,
    vars: 7,
    consts: [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "mb-3"], ["for", "spec-key"], [3, "selectedItem", "selected"], ["id", "spec-key", 3, "selectedItem", "selected"], ["class", "mb-3", 4, "ngIf"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], [3, "bar"], ["for", "spec-value"], ["id", "spec-value", "aria-label", "Value", "formControlName", "value", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function ProductSpecificationUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, ProductSpecificationUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Create/Update ProductSpecification");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "form", 6)(8, "div", 7)(9, "label", 8)(10, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Select Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "app-product-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selected", function ProductSpecificationUpsertComponent_Template_app_product_select_selected_12_listener($event) {
          return ctx.onProductSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 7)(14, "label", 8)(15, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Attribute/Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "app-fa-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selected", function ProductSpecificationUpsertComponent_Template_app_fa_select_selected_17_listener($event) {
          return ctx.onAttrSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, ProductSpecificationUpsertComponent_div_18_Template, 6, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 12)(20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductSpecificationUpsertComponent_Template_button_click_20_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductSpecificationUpsertComponent_Template_button_click_22_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.specificationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("selectedItem", ctx.selectedProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("selectedItem", ctx.selectedAttr);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.selectedAttr != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.specificationForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__.ProgressComponent, _products_components_product_filter_item_product_select_component__WEBPACK_IMPORTED_MODULE_8__.ProductSelectComponent, _filterableattributes_components_filterableattribute_select_f_attribute_select_component__WEBPACK_IMPORTED_MODULE_9__.FAttributeSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 56353:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/productspecifications/models/config.model.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultProductSpecificationConfig: () => (/* binding */ defaultProductSpecificationConfig),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/breadcrumb/breadcrumb.model */ 46405);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);


let defaultProductSpecificationConfig = {
  defaultLayout: _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.GRID,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  searchEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTSPECIFICATIONS.PRODUCTSPECIFICATION_ENDPOINT,
  delEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTSPECIFICATIONS.PRODUCTSPECIFICATION_ENDPOINT
};
let selfRoutes = {
  list: "/admin/product-specifications",
  create: "/admin/product-specifications/create",
  update(id) {
    return id == null ? this.create : "/admin/product-specifications/" + id + '/update';
  }
};

/***/ }),

/***/ 10900:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/productspecifications/productspecification.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSpecificationComponent: () => (/* binding */ ProductSpecificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_productspecification_list_productspecification_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/productspecification-list/productspecification-list.component */ 99585);


class ProductSpecificationComponent {
  static #_ = this.ɵfac = function ProductSpecificationComponent_Factory(t) {
    return new (t || ProductSpecificationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProductSpecificationComponent,
    selectors: [["app-product-specification"]],
    decls: 1,
    vars: 0,
    template: function ProductSpecificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-productspecification-list");
      }
    },
    dependencies: [_components_productspecification_list_productspecification_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductSpecificationListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 403:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/productspecifications/services/productspecification.service.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSpecificationService: () => (/* binding */ ProductSpecificationService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class ProductSpecificationService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTSPECIFICATIONS.SEARCH(endpoint, params);
    this.http.get(url).subscribe(productSpecification => {
      this.eventBusService.publish(key, productSpecification);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, endpoint, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, id) {
    this.http.get(_inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTSPECIFICATIONS.GET(id)).subscribe(productSpecification => {
      this.eventBusService.publish(key, productSpecification);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, productSpecificationReq, exId) {
    let endpoint = exId == null ? _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTSPECIFICATIONS.CREATE() : _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTSPECIFICATIONS.UPDATE(exId);
    let observable = exId == null ? this.http.post(endpoint, productSpecificationReq) : this.http.patch(endpoint, productSpecificationReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, productSpecificationReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function ProductSpecificationService_Factory(t) {
    return new (t || ProductSpecificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ProductSpecificationService,
    factory: ProductSpecificationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 84721:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/stocks/components/stock-list/stock-list.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockListComponent: () => (/* binding */ StockListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 90337);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _stock_upsert_stock_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stock-upsert/stock-upsert.component */ 64383);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _base_components_base_list_v3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v3.component */ 96562);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/stock.service */ 45789);
/* harmony import */ var _vendors_services_vendor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../vendors/services/vendor.service */ 77405);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../components/breadcrumb/breadcrumb.component */ 43383);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);

























function StockListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("bar", true);
  }
}
function StockListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "Cooking your data, please wait..");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function StockListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "No items");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function StockListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, StockListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, StockListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 18)(10, "div", 19)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](12, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function StockListComponent_div_9_div_1_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](1, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function StockListComponent_div_9_div_1_tr_40_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "img", 67);
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("src", item_r9.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
  }
}
function StockListComponent_div_9_div_1_tr_40_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r9.product.name.substring(0, 1).toUpperCase(), " ");
  }
}
function StockListComponent_div_9_div_1_tr_40_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r9.variation.name);
  }
}
function StockListComponent_div_9_div_1_tr_40_div_37_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](4, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("Until: ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](4, 1, item_r9.discount_valid_until), "");
  }
}
function StockListComponent_div_9_div_1_tr_40_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "strong", 69)(5, "strong", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](6, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "sub", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, StockListComponent_div_9_div_1_tr_40_div_37_small_12_Template, 5, 3, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("- ", item_r9.discount_percentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](8, 4, ctx_r13.getDiscountedRetailPrice(item_r9), "1.2-2"), "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](11, 7, item_r9.retail_price, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r9.discount_valid_until);
  }
}
function StockListComponent_div_9_div_1_tr_40_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 60)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](3, 1, item_r9.retail_price, "1.2-2"));
  }
}
function StockListComponent_div_9_div_1_tr_40_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 74)(1, "strong", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](2, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](5, 1, ctx_r15.getDiscountedRetailPrice(item_r9) - item_r9.avg_unit_price, "1.2-2"));
  }
}
function StockListComponent_div_9_div_1_tr_40_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 76)(1, "strong", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](2, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](5, 1, ctx_r16.getDiscountedRetailPrice(item_r9) - item_r9.avg_unit_price, "1.2-2"));
  }
}
function StockListComponent_div_9_div_1_tr_40_td_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td", 78)(1, "app-delete", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("deleteItemEvent", function StockListComponent_div_9_div_1_tr_40_td_46_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r27.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("requestUrl", ctx_r17.config.delEndpoint + "/" + item_r9.id);
  }
}
function StockListComponent_div_9_div_1_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "td")(4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](5, StockListComponent_div_9_div_1_tr_40_img_5_Template, 1, 1, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, StockListComponent_div_9_div_1_tr_40_span_6_Template, 2, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "td")(8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function StockListComponent_div_9_div_1_tr_40_Template_a_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r31);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r30.onCopyClick(item_r9.sku));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](13, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](16, StockListComponent_div_9_div_1_tr_40_span_16_Template, 4, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "td", 56)(24, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function StockListComponent_div_9_div_1_tr_40_Template_button_click_24_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r31);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r32.onUpsertClick(item_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "span", 58)(26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](28, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "td")(30, "span", 60)(31, "strong", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](32, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](35, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](37, StockListComponent_div_9_div_1_tr_40_div_37_Template, 13, 10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](38, StockListComponent_div_9_div_1_tr_40_span_38_Template, 4, 4, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](40, StockListComponent_div_9_div_1_tr_40_span_40_Template, 6, 4, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](41, StockListComponent_div_9_div_1_tr_40_span_41_Template, 6, 4, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](42, "td")(43, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](45, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](46, StockListComponent_div_9_div_1_tr_40_td_46_Template, 2, 1, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r9.product.images.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r9.product.images.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r9.sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r9.product.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r9.variation);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r9.brand.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r8.categoriesToString(item_r9.product.categories), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", item_r9.quantity > 0 ? "text-success" : "text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r9.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](35, 17, item_r9.avg_unit_price, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r8.getDiscount(item_r9) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r8.getDiscount(item_r9) <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r9.retail_price < item_r9.avg_unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r9.retail_price >= item_r9.avg_unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](45, 20, item_r9.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r8.config.showDeleteButton);
  }
}
const _c34 = function () {
  return ["/admin/sales/orders"];
};
const _c35 = function () {
  return ["/admin/sales/orders/create"];
};
function StockListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "div", 27)(5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](8, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](10, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](12, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, "Stocks that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "div", 35)(16, "table", 36)(17, "thead")(18, "tr")(19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](20, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](22, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](24, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](26, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](28, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](30, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](32, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18nStart"](34, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](37, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](38, StockListComponent_div_9_div_1_th_38_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](40, StockListComponent_div_9_div_1_tr_40_Template, 47, 22, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](6, _c34));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](7, _c35));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r5.stocks.content);
  }
}
function StockListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("src", item_r34.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
  }
}
function StockListComponent_div_9_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 101)(1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r34.product.name.substring(0, 1).toUpperCase(), " ");
  }
}
function StockListComponent_div_9_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "small", 102)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](5, 1, item_r34.updated_at), " ");
  }
}
function StockListComponent_div_9_div_2_div_1_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "small", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function StockListComponent_div_9_div_2_div_1_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 96)(1, "app-delete", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("deleteItemEvent", function StockListComponent_div_9_div_2_div_1_div_34_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r43.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("requestUrl", ctx_r39.config.delEndpoint + "/" + item_r34.id)("look", "bx");
  }
}
function StockListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 81)(1, "div", 82)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, StockListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, StockListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "h5", 85)(6, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function StockListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r47);
      const item_r34 = restoredCtx.$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r46.onUpsertClick(item_r34.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "h6", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 0)(11, "div", 88)(12, "p", 89)(13, "small")(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](18, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "div", 88)(20, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](21, StockListComponent_div_9_div_2_div_1_small_21_Template, 6, 3, "small", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](22, StockListComponent_div_9_div_2_div_1_small_22_Template, 6, 0, "small", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "div")(26, "a", 92)(27, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "div", 94)(30, "div", 95)(31, "div", 96)(32, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function StockListComponent_div_9_div_2_div_1_Template_a_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r48.onUpsertClick(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](33, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](34, StockListComponent_div_9_div_2_div_1_div_34_Template, 2, 2, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r34 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r34.product.images.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r34.product.images.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r34.product.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r34.brand.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](18, 10, item_r34.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r34.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !item_r34.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r33.categoriesToString(item_r34.product.categories), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r34.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r33.config.showDeleteButton);
  }
}
function StockListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, StockListComponent_div_9_div_2_div_1_Template, 35, 12, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r6.stocks.content);
  }
}
function StockListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, StockListComponent_div_9_div_1_Template, 41, 8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, StockListComponent_div_9_div_2_Template, 2, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.GRID);
  }
}
class StockListComponent extends _base_components_base_list_v3_component__WEBPACK_IMPORTED_MODULE_7__.BaseListComponentV3 {
  componentName() {
    return "StockListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, stockService, vendorService, notifier, locale) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.stockService = stockService;
    this.vendorService = vendorService;
    this.notifier = notifier;
    this.locale = locale;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.defaultStockConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.defaultFilterData;
    this.stocks = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    // vendors: IVendor[] = []
    this.extraFields = [{
      name: 'vendor_id',
      type: 'dropdown',
      placeholder: 'Select Store',
      label: 'Store',
      value: null,
      options: []
    }];
    if (authService.isAdmin()) {
      this.config.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_5__.InventoryEndpoints.STOCKS.STOCK_ENDPOINT_ADMIN_V2;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.parseFilterData)(params);
      let vendorId = this.filterData.extra['vendor_id'];
      this.fetchMyVendors({}, vendorId => {});
      this.fetchStocks({
        vendor_id: vendorId,
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
      text: this.translations["Stocks"],
      link: null,
      active: true
    }];
  }
  fetchStocks(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.STOCKS.SEARCH(params));
    this.stockService.search(key, this.config.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.stocks = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "Stock is deleted");
      this.ngOnInit();
    }
  }
  getConfig() {
    return this.config;
  }
  getRoutes() {
    return {
      create: _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfRoutes.create,
      update: id => _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfRoutes.update(id),
      params: (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.toParams)(this.filterData)
    };
  }
  getUpsertComponent() {
    return _stock_upsert_stock_upsert_component__WEBPACK_IMPORTED_MODULE_4__.StockUpsertComponent;
  }
  onCopyClick(sku) {
    _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_6__.TextUtility.copyToClipboard(sku);
    this.notifier.info("Copied", "SKU has been copied to clipboard");
  }
  getDiscountedRetailPrice(item) {
    return item.retail_price - this.getDiscount(item);
  }
  getDiscount(stock) {
    if (stock.discount_valid_until == null || new Date(stock.discount_valid_until).getTime() > new Date().getTime()) {
      return stock.retail_price * (stock.discount_percentage / 100);
    } else {
      return 0;
    }
  }
  categoriesToString(categories) {
    return categories.map(category => category.name).join(', ');
  }
  fetchMyVendors(params = {}, block) {
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.VENDORS.MY_VENDORS(params));
    this.vendorService.myVendors(key, this.config.vendorEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      let vendors = meta.data;
      this.extraFields = [{
        name: 'vendor_id',
        type: 'dropdown',
        label: 'Vendor',
        placeholder: 'Select Store',
        value: null,
        options: vendors.map(v => {
          return {
            label: v.name,
            value: v.id
          };
        })
      }];
    });
  }
  static #_ = this.ɵfac = function StockListComponent_Factory(t) {
    return new (t || StockListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_8__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_9__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_11__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_12__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_vendors_services_vendor_service__WEBPACK_IMPORTED_MODULE_13__.VendorService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_14__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_21__.LOCALE_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
    type: StockListComponent,
    selectors: [["app-stock-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 9,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Orders$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___1 = goog.getMsg("Orders");
        i18n_0 = MSG_EXTERNAL_label_Orders$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0985\u09B0\u09CD\u09A1\u09BE\u09B0";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Sell$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___3 = goog.getMsg("Sell");
        i18n_2 = MSG_EXTERNAL_label_Sell$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09BF";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___5 = goog.getMsg("Id");
        i18n_4 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "Id";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___7 = goog.getMsg("Image");
        i18n_6 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "\u099B\u09AC\u09BF";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Sku$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___9 = goog.getMsg("SKU");
        i18n_8 = MSG_EXTERNAL_label_Sku$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "SKU";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_ProductName$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___11 = goog.getMsg("Product Name");
        i18n_10 = MSG_EXTERNAL_label_ProductName$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u09AA\u09A3\u09CD\u09AF\u09C7\u09B0 \u09A8\u09BE\u09AE";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Quantity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___13 = goog.getMsg("Quantity");
        i18n_12 = MSG_EXTERNAL_label_Quantity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09AA\u09B0\u09BF\u09AE\u09BE\u09A3";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_AvgUnitPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___15 = goog.getMsg("Avg Unit Price");
        i18n_14 = MSG_EXTERNAL_label_AvgUnitPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u0997\u09DC \u0995\u09CD\u09B0\u09DF \u09AE\u09C2\u09B2\u09CD\u09AF";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_RetailPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___17 = goog.getMsg("Retail Price");
        i18n_16 = MSG_EXTERNAL_label_RetailPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09DF \u09AE\u09C2\u09B2\u09CD\u09AF";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_ProfitPerSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___19 = goog.getMsg("Profit Per Sale / {$lineBreak}Loss per sale", {
          "lineBreak": "\uFFFD#35\uFFFD\uFFFD/#35\uFFFD"
        }, {
          original_code: {
            "lineBreak": "<br/>"
          }
        });
        i18n_18 = MSG_EXTERNAL_label_ProfitPerSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u09AA\u09CD\u09B0\u09A4\u09BF \u09AC\u09BF\u0995\u09CD\u09B0\u09DF\u09C7\u09B0 \u09B2\u09BE\u09AD / \u0995\u09CD\u09B7\u09A4\u09BF";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___21 = goog.getMsg("Last Updated");
        i18n_20 = MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___21;
      } else {
        i18n_20 = "\u09B8\u09B0\u09CD\u09AC\u09B6\u09C7\u09B7 \u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____23 = goog.getMsg("Delete");
        i18n_22 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____23;
      } else {
        i18n_22 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_DateInput$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____25 = goog.getMsg("Copy");
        i18n_24 = MSG_EXTERNAL_label_DateInput$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____25;
      } else {
        i18n_24 = "\u0995\u09AA\u09BF";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____27 = goog.getMsg("$");
        i18n_26 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____27;
      } else {
        i18n_26 = "\u09F3";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____29 = goog.getMsg("$");
        i18n_28 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____29;
      } else {
        i18n_28 = "\u09F3";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____31 = goog.getMsg("$");
        i18n_30 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____31;
      } else {
        i18n_30 = "\u09F3";
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____33 = goog.getMsg("$");
        i18n_32 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____33;
      } else {
        i18n_32 = "\u09F3";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addBtnText", "extraFields", "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "/assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], [1, "text-uppercase"], ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-wrap", "gap-3", "mb-3", "float-end"], [1, "btn", "btn-outline-primary", "waves-effect", "font-size-16", 3, "routerLink"], [1, "mdi", "mdi-truck-delivery", "me-2"], i18n_0, ["type", "submit", 1, "btn", "btn-primary", "px-5", "waves-effect", "waves-light", "font-size-16", 3, "routerLink"], [1, "mdi", "mdi-sale", "me-2"], i18n_2, [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_4, i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, [4, "ngFor", "ngForOf"], i18n_22, [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["href", "javascript: void(0);", 1, "font-size-10", 3, "click"], i18n_24, [1, "text-wrap"], [1, "badge", "bg-info", "font-size-10", "m-1"], [1, "badge", "text-info", "font-size-10", "m-1"], [1, "align-content-center"], [1, "btn", "btn-outline-success", 3, "click"], [1, "badge", "font-size-16", 3, "ngClass"], [1, "mdi", "mdi-plus-circle", "font-size-16"], [1, "badge", "text-info", "font-size-16"], [1, "me-1"], i18n_26, ["class", "badge text-info font-size-16", 4, "ngIf"], ["class", "badge text-danger font-size-16", 4, "ngIf"], ["class", "badge text-success font-size-16", 4, "ngIf"], ["style", "width: 100px", 4, "ngIf"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "text-warning", "font-size-16"], i18n_28, [1, "text-primary", "text-decoration-line-through"], ["class", "font-size-10 mt-3", 4, "ngIf"], [1, "font-size-10", "mt-3"], [1, "badge", "text-danger", "font-size-16"], i18n_30, [1, "badge", "text-success", "font-size-16"], i18n_32, [2, "width", "100px"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], [1, "badge", "badge-soft-primary", "font-size-10", "text-info"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "bg-success", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], ["href", "javascript: void(0);", 3, "click"], [1, "bx", "bx-plus-circle", "text-success"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10"], [3, "requestUrl", "look", "deleteItemEvent"]];
    },
    template: function StockListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("layoutSelected", function StockListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("addButtonClick", function StockListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, StockListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, StockListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, StockListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("title", ctx.translations["Products in Stock"])("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("addBtnText", "+ Add Product")("extraFields", ctx.extraFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.stocks.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.stocks.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("page", ctx.stocks);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterLink, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_15__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_17__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_18__.DeleteComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_19__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DecimalPipe, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_20__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 24365:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/stocks/components/stock-select/stock-label.pipe.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockLabelPipe: () => (/* binding */ StockLabelPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class StockLabelPipe {
  transform(item) {
    return item.variation ? `${item.product.name} - ${item.variation.name}` : item.product.name;
  }
  static #_ = this.ɵfac = function StockLabelPipe_Factory(t) {
    return new (t || StockLabelPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "stockLabel",
    type: StockLabelPipe,
    pure: true
  });
}

/***/ }),

/***/ 74079:
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/stocks/components/stock-select/stock-select.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockSelectComponent: () => (/* binding */ StockSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _stock_upsert_stock_upsert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stock-upsert/stock-upsert.component */ 64383);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/stock.service */ 45789);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);

















const _c0 = ["stockSelect"];
function StockSelectComponent_util_progress_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "util-progress", 5);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bar", true);
  }
}
const _c3 = function () {
  return {
    standalone: true
  };
};
class StockSelectComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  componentName() {
    return "StockSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, stockService, popupService) {
    super(eventBus, router, subContainer);
    this.stockService = stockService;
    this.popupService = popupService;
    this.stockSelect = null;
    this.enableAdd = true;
    this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_4__.InventoryEndpoints.STOCKS.STOCK_ENDPOINT_V2;
    this.items = [];
    this.selectedItem = null;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    if (authService.isAdmin()) {
      this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_4__.InventoryEndpoints.STOCKS.STOCK_ENDPOINT_ADMIN_V2;
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
    this.stockSelect?.clearModel();
  }
  searchForEvent(event) {
    let query = _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__.TextUtility.removeSpecialCharacters(event.target?.value);
    if (query.length > 2) {
      this.search({
        page: 0,
        size: 10,
        q: query
      });
    }
  }
  onSelected(event) {
    if (this.items.find(c => c.label == event.label)) {
      this.selected.emit(this.selectedItem);
    } else {
      let popup = this.popupService.open(_stock_upsert_stock_upsert_component__WEBPACK_IMPORTED_MODULE_2__.StockUpsertComponent, {
        id: null,
        title: event.title
      });
      popup.componentInstance.onCompleted.subscribe(stock => {
        this.selected.emit(stock);
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.STOCKS.SEARCH(params));
    this.stockService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function StockSelectComponent_Factory(t) {
    return new (t || StockSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_8__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: StockSelectComponent,
    selectors: [["app-stock-select"]],
    viewQuery: function StockSelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.stockSelect = _t.first);
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
    vars: 9,
    consts: function () {
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Stock$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_SELECT_STOCK_SELECT_COMPONENT_TS_2 = goog.getMsg("Stock");
        i18n_1 = MSG_EXTERNAL_label_Stock$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_SELECT_STOCK_SELECT_COMPONENT_TS_2;
      } else {
        i18n_1 = "\u09B8\u09CD\u099F\u0995";
      }
      return [["for", "stock-select", 1, "visually-hidden"], i18n_1, [3, "bar", 4, "ngIf"], ["id", "stock-select", "bindLabel", "label", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "placeholder", "keyup", "ngModelChange", "change"], ["stockSelect", ""], [3, "bar"]];
    },
    template: function StockSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, StockSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ng-select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function StockSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function StockSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function StockSelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Search Stock.."]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.items)("hideSelected", false)("multiple", false)("addTag", ctx.enableAdd)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](8, _c3));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__.ProgressComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 64383:
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/stocks/components/stock-upsert/stock-upsert.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockUpsertComponent: () => (/* binding */ StockUpsertComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v2.component */ 19870);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 90337);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/stock.service */ 45789);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 11633);
/* harmony import */ var _products_components_product_filter_item_product_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../products/components/product-filter-item/product-select.component */ 60206);
/* harmony import */ var _variations_components_variation_select_variation_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../variations/components/variation-select/variation-select.component */ 93049);
/* harmony import */ var _vendors_components_vendor_select_vendor_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../vendors/components/vendor-select/vendor-select.component */ 59056);


















function StockUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "util-progress", 63);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bar", true);
  }
}
function StockUpsertComponent_em_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "em", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function StockUpsertComponent_em_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "em", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function StockUpsertComponent_util_progress_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "util-progress", 63);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bar", true);
  }
}
const _c38 = function () {
  return {
    dateInputFormat: "DD-MM-YYYY h:mm:ss a"
  };
};
class StockUpsertComponent extends _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV2 {
  constructor(eventBus, router, subContainer, route, stockService, notifier, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.stockService = stockService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultStockConfig;
    this.stockForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
      vendor_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      product_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      supplier_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, []),
      variation_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, []),
      quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      unit_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      retail_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      discount_percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, []),
      discount_valid_until: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, []),
      cashback_percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, []),
      cashback_valid_until: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null, [])
    });
    this.selectedVendor = null;
    this.selectedSupplier = null;
    this.selectedProduct = null;
    this.selectedVariation = null;
  }
  componentName() {
    return "StockUpsertComponent";
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Stocks",
      link: "/admin/stocks",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.STOCKS.GET(exId));
    this.stockService.fetchSingle(key, this.config.searchEndpoint, exId);
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
  currentDate() {
    return new Date();
  }
  onSubmit() {
    console.log(this.stockForm.value);
    if (!this.stockForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  getConfig() {
    return this.config;
  }
  getListPageRoute() {
    return _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.list;
  }
  upsert(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.STOCKS.UPSERT(exId));
    let req = this.stockForm.value;
    this.stockService.upsert(key, req, exId);
    this.subscribe(key, null, (value, meta) => {
      let message = "Stock has been " + (exId ? "updated" : "created");
      this.notifier.success("Success", message);
      this.stockForm.reset();
      this.onSuccess(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    this.selectedVendor = n.vendor;
    this.selectedProduct = n.product;
    this.selectedVariation = n.variation;
    this.stockForm.controls.vendor_id.setValue(n.vendor_id);
    this.stockForm.controls.product_id.setValue(n.product_id);
    this.stockForm.controls.variation_id.setValue(n.variation_id);
    // set prices by default
    this.stockForm.controls.unit_price.setValue(n.avg_unit_price == null ? 0 : Math.round(n.avg_unit_price));
    this.stockForm.controls.retail_price.setValue(n.retail_price);
    this.stockForm.controls.discount_percentage.setValue(n.discount_percentage);
    this.stockForm.controls.discount_valid_until.setValue(n.discount_valid_until == null ? null : n.discount_valid_until);
    this.stockForm.controls.cashback_percentage.setValue(n.cashback_percentage);
    this.stockForm.controls.cashback_valid_until.setValue(n.cashback_valid_until == null ? null : n.cashback_valid_until);
  }
  onVendorSelected(vendor) {
    this.selectedVendor = vendor;
    this.stockForm.controls.vendor_id.setValue(vendor == null ? null : vendor.id);
  }
  onSupplierSelected(vendor) {
    this.selectedSupplier = vendor;
    this.stockForm.controls.supplier_id.setValue(vendor == null ? null : vendor.id);
  }
  onProductSelected(product) {
    console.log(product);
    this.selectedProduct = product;
    this.stockForm.controls.product_id.setValue(product == null ? null : product.id);
  }
  onVariationSelected(variation) {
    this.selectedVariation = variation;
    this.stockForm.controls.variation_id.setValue(variation == null ? null : variation.id);
  }
  static #_ = this.ɵfac = function StockUpsertComponent_Factory(t) {
    return new (t || StockUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_5__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: StockUpsertComponent,
    selectors: [["app-stock-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 113,
    vars: 27,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_AddStock$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_1 = goog.getMsg("Add Stock");
        i18n_0 = MSG_EXTERNAL_label_AddStock$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09B8\u09CD\u099F\u0995/\u09AE\u09BE\u09B2\u09BE\u09AE\u09BE\u09B2 \u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_StoreInfo$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_3 = goog.getMsg("Store Information");
        i18n_2 = MSG_EXTERNAL_label_StoreInfo$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09B8\u09CD\u099F\u09CB\u09B0\u09C7\u09B0 \u09A4\u09A5\u09CD\u09AF";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_SelectShop$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_5 = goog.getMsg("Select Store");
        i18n_4 = MSG_EXTERNAL_label_SelectShop$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u09B8\u09CD\u099F\u09CB\u09B0 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_ProductInfo$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_7 = goog.getMsg("Product Information");
        i18n_6 = MSG_EXTERNAL_label_ProductInfo$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u09AA\u09A3\u09CD\u09AF\u09C7\u09B0 \u09A4\u09A5\u09CD\u09AF";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_SelectProduct$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_9 = goog.getMsg("Select Product{$startEmphasisedText}*{$closeEmphasisedText}", {
          "startEmphasisedText": "\uFFFD#34\uFFFD",
          "closeEmphasisedText": "\uFFFD/#34\uFFFD"
        }, {
          original_code: {
            "startEmphasisedText": "<em\n                      class=\"error\">",
            "closeEmphasisedText": "</em>"
          }
        });
        i18n_8 = MSG_EXTERNAL_label_SelectProduct$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_9;
      } else {
        i18n_8 = "\u09AA\u09A3\u09CD\u09AF \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_SelectVariation$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_11 = goog.getMsg("Select Variation");
        i18n_10 = MSG_EXTERNAL_label_SelectVariation$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_11;
      } else {
        i18n_10 = "\u09AD\u09C7\u09B0\u09BF\u09DF\u09C7\u09B6\u09A8 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_StockInfo$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_13 = goog.getMsg("Stock Information");
        i18n_12 = MSG_EXTERNAL_label_StockInfo$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_13;
      } else {
        i18n_12 = "\u09B8\u09CD\u099F\u0995\u09C7\u09B0 \u09A4\u09A5\u09CD\u09AF";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Quantity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_15 = goog.getMsg("Quantity");
        i18n_14 = MSG_EXTERNAL_label_Quantity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_15;
      } else {
        i18n_14 = "\u09AA\u09B0\u09BF\u09AE\u09BE\u09A3";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UnitPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_17 = goog.getMsg("Unit Price");
        i18n_16 = MSG_EXTERNAL_label_UnitPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_17;
      } else {
        i18n_16 = "\u0995\u09CD\u09B0\u09DF \u09AE\u09C2\u09B2\u09CD\u09AF";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_RetailPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_19 = goog.getMsg("Retail Price");
        i18n_18 = MSG_EXTERNAL_label_RetailPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_19;
      } else {
        i18n_18 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09DF \u09AE\u09C2\u09B2\u09CD\u09AF";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_DiscountInfo$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_21 = goog.getMsg("Discount Information");
        i18n_20 = MSG_EXTERNAL_label_DiscountInfo$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_21;
      } else {
        i18n_20 = "\u09A1\u09BF\u09B8\u0995\u09BE\u0989\u09A8\u09CD\u099F\u09C7\u09B0 \u09A4\u09A5\u09CD\u09AF";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_DiscountPercentage$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_23 = goog.getMsg("Discount (%)");
        i18n_22 = MSG_EXTERNAL_label_DiscountPercentage$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_23;
      } else {
        i18n_22 = "\u09A1\u09BF\u09B8\u0995\u09BE\u0989\u09A8\u09CD\u099F (%)";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_DiscountValidity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_25 = goog.getMsg("Discount Validity");
        i18n_24 = MSG_EXTERNAL_label_DiscountValidity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_25;
      } else {
        i18n_24 = "\u09A1\u09BF\u09B8\u0995\u09BE\u0989\u09A8\u09CD\u099F\u09C7\u09B0 \u09AC\u09C8\u09A7\u09A4\u09BE";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CashbackPercentage$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_27 = goog.getMsg("Cashback (%)");
        i18n_26 = MSG_EXTERNAL_label_CashbackPercentage$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_27;
      } else {
        i18n_26 = "\u0995\u09CD\u09AF\u09BE\u09B6\u09AC\u09CD\u09AF\u09BE\u0995 (%)";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CashbackValidity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_29 = goog.getMsg("Cashback Validity");
        i18n_28 = MSG_EXTERNAL_label_CashbackValidity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_29;
      } else {
        i18n_28 = "\u0995\u09CD\u09AF\u09BE\u09B6\u09AC\u09CD\u09AF\u09BE\u0995\u09C7\u09B0 \u09AD\u09CD\u09AF\u09BE\u09B2\u09BF\u09A1\u09BF\u099F\u09BF";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_31 = goog.getMsg("Cancel");
        i18n_30 = MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_31;
      } else {
        i18n_30 = "\u09AC\u09BE\u09A4\u09BF\u09B2";
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_AddStock$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_33 = goog.getMsg("Add Stock");
        i18n_32 = MSG_EXTERNAL_label_AddStock$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS_33;
      } else {
        i18n_32 = "\u09B8\u09CD\u099F\u0995/\u09AE\u09BE\u09B2\u09BE\u09AE\u09BE\u09B2 \u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_SelectShop$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS__35 = goog.getMsg(" Please select your shop. ");
        i18n_34 = MSG_EXTERNAL_msg_SelectShop$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS__35;
      } else {
        i18n_34 = "\u09A6\u09DF\u09BE \u0995\u09B0\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09CD\u099F\u09CB\u09B0 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8\u0964";
      }
      let i18n_36;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_SelectProduct$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS__37 = goog.getMsg(" Please select a product. ");
        i18n_36 = MSG_EXTERNAL_msg_SelectProduct$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_UPSERT_STOCK_UPSERT_COMPONENT_TS__37;
      } else {
        i18n_36 = "\u09A6\u09DF\u09BE \u0995\u09B0\u09C7 \u09AA\u09A3\u09CD\u09AF \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8\u0964";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], i18n_0, [3, "formGroup"], [1, "card-header", "bg-transparent", "border-primary"], [1, "my-0", "text-primary"], [1, "mdi", "mdi-store", "me-3", "me-3"], i18n_2, [1, "card-body", "shadow-sm"], [1, "mb-3"], ["for", "vendor_id-input", 1, "form-label", "col-form-label-lg"], i18n_4, [1, "error"], ["id", "vendor_id-input", 3, "selectedItem", "selected"], ["class", "text-danger", 4, "ngIf"], [1, "card", "my-3"], [1, "mdi", "mdi-package-variant", "me-3"], i18n_6, [1, "col-sm-6", "col-md-6", "mb-3"], i18n_8, ["id", "product_id-input", 3, "selectedItem", "selected"], ["for", "variation_id-input", 1, "form-label", "col-form-label-lg"], i18n_10, ["id", "variation_id-input", 3, "selectedItem", "selected"], [1, "row", "my-3"], [1, "col-sm-6"], [1, "mdi", "mdi-barcode-scan", "me-3"], i18n_12, ["for", "quantity-input", 1, "form-label"], i18n_14, ["type", "text", "id", "quantity-input", "name", "quantity", "formControlName", "quantity", 1, "form-control", "form-control-lg", 3, "placeholder", "ngClass"], [1, "text-danger"], ["for", "unit_price-input", 1, "form-label"], i18n_16, ["type", "text", "id", "unit_price-input", "name", "unit_price", "formControlName", "unit_price", 1, "form-control", "form-control-lg", 3, "placeholder", "ngClass"], ["for", "retail_price-input", 1, "form-label"], i18n_18, ["type", "text", "id", "retail_price-input", "name", "retail_price", "formControlName", "retail_price", 1, "form-control", "form-control-lg", 3, "placeholder", "ngClass"], [1, "mdi", "mdi-tag-off", "me-3"], i18n_20, ["for", "discount-input", 1, "form-label"], i18n_22, ["type", "text", "id", "discount-input", "name", "discount_percentage", "formControlName", "discount_percentage", 1, "form-control", "form-control-lg", 3, "placeholder"], ["for", "discount_valid_until-input", 1, "form-label"], i18n_24, [1, "input-group"], ["bsDatepicker", "", "id", "discount_valid_until-input", "formControlName", "discount_valid_until", 1, "form-control", "form-control-lg", 3, "bsConfig", "minDate"], ["for", "cashback_percentage-input", 1, "form-label"], i18n_26, ["type", "text", "id", "cashback_percentage-input", "name", "cashback_percentage", "formControlName", "cashback_percentage", 1, "form-control", "form-control-lg", 3, "placeholder"], ["for", "cashback_valid_until-input", 1, "form-label"], i18n_28, ["bsDatepicker", "", "id", "cashback_valid_until-input", "formControlName", "cashback_valid_until", 1, "form-control", "form-control-lg", 3, "bsConfig", "minDate"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], i18n_30, ["type", "submit", 1, "btn", "btn-success", "waves-effect", "waves-light", 3, "ngClass", "click"], [1, "mdi", "mdi-content-save", "d-block", "font-size-16"], i18n_32, [3, "bar"], i18n_34, i18n_36];
    },
    template: function StockUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, StockUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "form", 7)(8, "div", 3)(9, "div", 8)(10, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](13, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "label", 14)(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](18, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "em", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "app-vendor-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selected", function StockUpsertComponent_Template_app_vendor_select_selected_21_listener($event) {
          return ctx.onVendorSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](22, StockUpsertComponent_em_22_Template, 2, 0, "em", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 19)(24, "div", 8)(25, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](28, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 12)(30, "div", 1)(31, "div", 22)(32, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18nStart"](33, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](34, "em", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "app-product-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selected", function StockUpsertComponent_Template_app_product_select_selected_35_listener($event) {
          return ctx.onProductSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, StockUpsertComponent_em_36_Template, 2, 0, "em", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div", 22)(38, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](39, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "app-variation-select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selected", function StockUpsertComponent_Template_app_variation_select_selected_40_listener($event) {
          return ctx.onVariationSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 28)(42, "div", 29)(43, "div", 3)(44, "div", 8)(45, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](46, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](48, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "div", 12)(50, "div", 13)(51, "label", 32)(52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](53, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "em", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](56, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "em", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "div", 13)(60, "label", 36)(61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](62, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "em", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](64, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](65, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "em", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "div", 13)(69, "label", 39)(70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](71, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "em", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](73, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](74, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](75, "em", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "div", 29)(78, "div", 3)(79, "div", 8)(80, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](81, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](83, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "div", 12)(85, "div", 13)(86, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](87, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](88, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "div", 13)(90, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](91, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](93, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](94, "div", 13)(95, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](96, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](97, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "div", 13)(99, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](100, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](101, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](102, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](103, StockUpsertComponent_util_progress_103_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "div", 57)(105, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function StockUpsertComponent_Template_button_click_105_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](107, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](108, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function StockUpsertComponent_Template_button_click_108_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](109, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](110, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](112, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.stockForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("selectedItem", ctx.selectedVendor);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedVendor == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("selectedItem", ctx.selectedProduct);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.selectedProduct == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("selectedItem", ctx.selectedVariation);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Enter Quantity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx.stockForm.controls.quantity.value == null ? "bg-warning-subtle" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.stockForm, "quantity", "required", "Quantity is required!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Unit Price"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx.stockForm.controls.unit_price.value == null ? "bg-warning-subtle" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.stockForm, "unit_price", "required", "Unit price is required!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Enter Retail Price"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx.stockForm.controls.retail_price.value == null ? "bg-warning-subtle" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.stockForm, "retail_price", "required", "Retail price is required!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Enter Discount"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](25, _c38))("minDate", ctx.currentDate());
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Enter Cashback (%)"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](26, _c38))("minDate", ctx.currentDate());
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", ctx.stockForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__.ProgressComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__.BsDatepickerInputDirective, _products_components_product_filter_item_product_select_component__WEBPACK_IMPORTED_MODULE_8__.ProductSelectComponent, _variations_components_variation_select_variation_select_component__WEBPACK_IMPORTED_MODULE_9__.VariationSelectComponent, _vendors_components_vendor_select_vendor_select_component__WEBPACK_IMPORTED_MODULE_10__.VendorSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 90337:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/stocks/models/config.model.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultStockConfig: () => (/* binding */ defaultStockConfig),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/breadcrumb/breadcrumb.model */ 46405);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);


let defaultStockConfig = {
  defaultLayout: _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.COLUMN,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: false,
  searchEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.STOCKS.STOCK_ENDPOINT_V2,
  delEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.STOCKS.STOCK_ENDPOINT,
  vendorEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VENDORS.VENDOR_ENDPOINT_V2
};
let selfRoutes = {
  list: "/admin/inventory/stocks",
  create: "/admin/inventory/stocks/create",
  update(id) {
    return id == null ? this.create : "/admin/inventory/stocks/" + id + '/update';
  }
};

/***/ }),

/***/ 45789:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/stocks/services/stock.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockService: () => (/* binding */ StockService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class StockService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.STOCKS.SEARCH(endpoint, params);
    this.http.get(url).subscribe(stock => {
      this.eventBusService.publish(key, stock);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, endpoint, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, endpoint, id) {
    this.http.get(_inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.STOCKS.GET(endpoint, id)).subscribe(stock => {
      this.eventBusService.publish(key, stock);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, endpoint, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchBySku(key, endpoint, sku) {
    this.http.get(_inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.STOCKS.GET_BY_SKU(endpoint, sku)).subscribe(stock => {
      this.eventBusService.publish(key, stock.body);
    }, error => {
      this.handleError(error, auth => {
        this.fetchBySku(key, endpoint, sku);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, stockReq, exId) {
    let endpoint = exId == null ? _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.STOCKS.CREATE() : _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.STOCKS.UPDATE(exId);
    let observable = exId == null ? this.http.post(endpoint, stockReq) : this.http.patch(endpoint, stockReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, stockReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function StockService_Factory(t) {
    return new (t || StockService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: StockService,
    factory: StockService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 88096:
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/stocks/stock.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockComponent: () => (/* binding */ StockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/stock-list/stock-list.component */ 84721);


class StockComponent {
  static #_ = this.ɵfac = function StockComponent_Factory(t) {
    return new (t || StockComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StockComponent,
    selectors: [["app-stock"]],
    decls: 1,
    vars: 0,
    template: function StockComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-stock-list");
      }
    },
    dependencies: [_components_stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_0__.StockListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 49441:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/variations/components/variation-list/variation-list.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariationListComponent: () => (/* binding */ VariationListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v2.component */ 92159);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 84968);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _variation_upsert_variation_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../variation-upsert/variation-upsert.component */ 22447);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_variation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/variation.service */ 13668);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../components/breadcrumb/breadcrumb.component */ 43383);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);






















function VariationListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("bar", true);
  }
}
function VariationListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VariationListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VariationListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, VariationListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, VariationListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 18)(10, "div", 19)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function VariationListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VariationListComponent_div_9_div_1_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VariationListComponent_div_9_div_1_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VariationListComponent_div_9_div_1_tr_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r11.created_by);
  }
}
function VariationListComponent_div_9_div_1_tr_26_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "img", 48);
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", item_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}
function VariationListComponent_div_9_div_1_tr_26_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r11.name.substring(0, 1).toUpperCase(), " ");
  }
}
function VariationListComponent_div_9_div_1_tr_26_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 50)(1, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VariationListComponent_div_9_div_1_tr_26_td_21_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r22);
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r20.onUpsertClick(item_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}
function VariationListComponent_div_9_div_1_tr_26_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 50)(1, "app-delete", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function VariationListComponent_div_9_div_1_tr_26_td_22_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r23.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r16.config.delEndpoint + "/" + item_r11.id);
  }
}
function VariationListComponent_div_9_div_1_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, VariationListComponent_div_9_div_1_tr_26_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "td")(5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, VariationListComponent_div_9_div_1_tr_26_img_6_Template, 1, 1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, VariationListComponent_div_9_div_1_tr_26_span_7_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "td")(9, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VariationListComponent_div_9_div_1_tr_26_Template_a_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r27);
      const item_r11 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r26.onUpsertClick(item_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "td")(14, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](16, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "td")(18, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](20, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, VariationListComponent_div_9_div_1_tr_26_td_21_Template, 3, 0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, VariationListComponent_div_9_div_1_tr_26_td_22_Template, 2, 1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r11.image != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r11.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r10.StringUtil.takeOnly(item_r11.description, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](16, 10, item_r11.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](20, 12, item_r11.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.config.showUpdateButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.config.showDeleteButton);
  }
}
function VariationListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](5, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 31)(7, "table", 32)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](11, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, VariationListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](14, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](16, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](18, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](20, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](22, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](23, VariationListComponent_div_9_div_1_th_23_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](24, VariationListComponent_div_9_div_1_th_24_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](26, VariationListComponent_div_9_div_1_tr_26_Template, 23, 14, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showUpdateButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r5.variations.content);
  }
}
function VariationListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", item_r29.image, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}
function VariationListComponent_div_9_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 73)(1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r29.name.substring(0, 1).toUpperCase(), " ");
  }
}
function VariationListComponent_div_9_div_2_div_1_h6_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h6", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" By ", item_r29.created_by, "");
  }
}
function VariationListComponent_div_9_div_2_div_1_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 75)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](2, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 1, item_r29.updated_at), " ");
  }
}
function VariationListComponent_div_9_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](3, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VariationListComponent_div_9_div_2_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 69)(1, "app-delete", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function VariationListComponent_div_9_div_2_div_1_div_29_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r40.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r35.config.delEndpoint + "/" + item_r29.id)("look", "bx");
  }
}
function VariationListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, VariationListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, VariationListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "h5", 59)(6, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VariationListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const item_r29 = restoredCtx.$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r43.onUpsertClick(item_r29.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, VariationListComponent_div_9_div_2_div_1_h6_8_Template, 2, 1, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 0)(10, "div", 62)(11, "p", 63)(12, "small")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](14, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](17, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "div", 62)(19, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, VariationListComponent_div_9_div_2_div_1_small_20_Template, 6, 3, "small", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, VariationListComponent_div_9_div_2_div_1_small_21_Template, 6, 0, "small", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "div", 67)(25, "div", 68)(26, "div", 69)(27, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VariationListComponent_div_9_div_2_div_1_Template_a_click_27_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r44);
      const item_r29 = restoredCtx.$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r45.onUpsertClick(item_r29.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](29, VariationListComponent_div_9_div_2_div_1_div_29_Template, 2, 2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r29.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r29.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r29.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r28.config.showUserFilter && item_r29.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](17, 9, item_r29.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r29.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r29.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r28.StringUtil.takeOnly(item_r29.description, 50, true), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r28.config.showDeleteButton);
  }
}
function VariationListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, VariationListComponent_div_9_div_2_div_1_Template, 30, 11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r6.variations.content);
  }
}
function VariationListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, VariationListComponent_div_9_div_1_Template, 27, 6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, VariationListComponent_div_9_div_2_Template, 2, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.GRID);
  }
}
class VariationListComponent extends _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV2 {
  componentName() {
    return "VariationListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, variationService, notifier) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.variationService = variationService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultVariationConfig;
    this.variations = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    if (authService.isAdmin()) {
      this.config.showUpdateButton = true;
      this.config.showDeleteButton = true;
      this.config.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__.InventoryEndpoints.VARIATIONS.VARIATION_ENDPOINT_ADMIN;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      let filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__.parseFilterData)(params);
      this.fetchVariations({
        q: filterData.query,
        username: filterData.username,
        from_date: filterData.fromDate,
        to_date: filterData.toDate,
        page: filterData.page,
        size: filterData.size
      });
    });
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: this.translations["Variations"],
      link: null,
      active: true
    }];
  }
  fetchVariations(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.VARIATIONS.SEARCH(params));
    this.variationService.search(key, this.config.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.variations = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "Variation is deleted");
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
      params: {}
    };
  }
  getUpsertComponent() {
    return _variation_upsert_variation_upsert_component__WEBPACK_IMPORTED_MODULE_5__.VariationUpsertComponent;
  }
  static #_ = this.ɵfac = function VariationListComponent_Factory(t) {
    return new (t || VariationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_variation_service__WEBPACK_IMPORTED_MODULE_11__.VariationService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__.NotifierService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: VariationListComponent,
    selectors: [["app-variation-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_AvailableVariations$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___5 = goog.getMsg("Variations that I've created");
        i18n_4 = MSG_EXTERNAL_msg_AvailableVariations$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u09AD\u09BF\u09A8\u09CD\u09A8\u09A4\u09BE \u09AF\u09BE \u0986\u09AE\u09BF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C7\u099B\u09BF";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___7 = goog.getMsg("Id");
        i18n_6 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "Id";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___9 = goog.getMsg("Image");
        i18n_8 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u099B\u09AC\u09BF";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___11 = goog.getMsg("Name");
        i18n_10 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u09A8\u09BE\u09AE";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___13 = goog.getMsg("Description");
        i18n_12 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___15 = goog.getMsg("Created At");
        i18n_14 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___17 = goog.getMsg("Last Updated");
        i18n_16 = MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u09B8\u09B0\u09CD\u09AC\u09B6\u09C7\u09B7 \u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____19 = goog.getMsg("Created By");
        i18n_18 = MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____19;
      } else {
        i18n_18 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____21 = goog.getMsg("Update");
        i18n_20 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____21;
      } else {
        i18n_20 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____23 = goog.getMsg("Delete");
        i18n_22 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____23;
      } else {
        i18n_22 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____25 = goog.getMsg("Created At");
        i18n_24 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____25;
      } else {
        i18n_24 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS_____27 = goog.getMsg("Updated");
        i18n_26 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS_____27;
      } else {
        i18n_26 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS_____29 = goog.getMsg("Updated");
        i18n_28 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS_____29;
      } else {
        i18n_28 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "/assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], i18n_4, [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, [4, "ngFor", "ngForOf"], i18n_18, i18n_20, i18n_22, [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], ["style", "width: 100px", 4, "ngIf"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], i18n_24, [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [1, "font-size-10"], i18n_26, i18n_28, [3, "requestUrl", "look", "deleteItemEvent"]];
    },
    template: function VariationListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("layoutSelected", function VariationListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("addButtonClick", function VariationListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, VariationListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, VariationListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, VariationListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("title", ctx.translations["Variations"])("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.variations.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.variations.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("page", ctx.variations);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 93049:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/variations/components/variation-select/variation-select.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariationSelectComponent: () => (/* binding */ VariationSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _variation_upsert_variation_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../variation-upsert/variation-upsert.component */ 22447);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_variation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/variation.service */ 13668);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);

















function VariationSelectComponent_util_progress_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "util-progress", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bar", true);
  }
}
const _c2 = function () {
  return {
    standalone: true
  };
};
class VariationSelectComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  componentName() {
    return "VariationSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, variationService, popupService) {
    super(eventBus, router, subContainer);
    this.variationService = variationService;
    this.popupService = popupService;
    this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_3__.InventoryEndpoints.VARIATIONS.VARIATION_ENDPOINT;
    this.items = [];
    this.selectedItem = null;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    if (authService.isAdmin()) {
      this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_3__.InventoryEndpoints.VARIATIONS.VARIATION_ENDPOINT_ADMIN;
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
    let query = _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__.TextUtility.removeSpecialCharacters(event.target?.value);
    if (query.length > 2) {
      this.search({
        page: 0,
        size: 10,
        q: query
      });
    }
  }
  onSelected(event) {
    if (this.items.find(c => c.name == event.name)) {
      this.selected.emit(this.selectedItem);
    } else {
      let popup = this.popupService.open(_variation_upsert_variation_upsert_component__WEBPACK_IMPORTED_MODULE_4__.VariationUpsertComponent, {
        id: null,
        name: event.name
      });
      popup.componentInstance.onCompleted.subscribe(variation => {
        this.selected.emit(variation);
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.VARIATIONS.SEARCH(params));
    this.variationService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function VariationSelectComponent_Factory(t) {
    return new (t || VariationSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_variation_service__WEBPACK_IMPORTED_MODULE_8__.VariationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: VariationSelectComponent,
    selectors: [["app-variation-select"]],
    inputs: {
      searchEndpoint: "searchEndpoint",
      selectedItem: "selectedItem"
    },
    outputs: {
      selected: "selected"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 9,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Variation$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_SELECT_VARIATION_SELECT_COMPONENT_TS_1 = goog.getMsg("Variation");
        i18n_0 = MSG_EXTERNAL_label_Variation$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_SELECT_VARIATION_SELECT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09AD\u09BF\u09A8\u09CD\u09A8\u09A4\u09BE";
      }
      return [["for", "autoSizingInput2", 1, "visually-hidden"], i18n_0, [3, "bar", 4, "ngIf"], ["id", "autoSizingInput2", "bindLabel", "name", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "placeholder", "keyup", "ngModelChange", "change"], [3, "bar"]];
    },
    template: function VariationSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, VariationSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ng-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function VariationSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function VariationSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function VariationSelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Search Variations.."]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.items)("hideSelected", true)("multiple", false)("addTag", true)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](8, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__.ProgressComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 22447:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/variations/components/variation-upsert/variation-upsert.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariationUpsertComponent: () => (/* binding */ VariationUpsertComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v2.component */ 19870);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 84968);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_variation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/variation.service */ 13668);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/cms/files/components/filepicker/filepicker.component */ 7247);















function VariationUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "util-progress", 22);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("bar", true);
  }
}
class VariationUpsertComponent extends _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV2 {
  constructor(eventBus, router, subContainer, route, variationService, notifier, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.variationService = variationService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultVariationConfig;
    this.variationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(3)]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(10)]),
      image: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null)
    });
    if (dialogData.name != null) {
      this.variationForm.controls.name.setValue(dialogData.name);
    }
  }
  componentName() {
    return "VariationUpsertComponent";
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Variations",
      link: "/admin/variations",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.VARIATIONS.GET(exId));
    this.variationService.fetchSingle(key, exId);
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
    if (!this.variationForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  onImgUploaded(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.variationForm.controls.image.setValue(images[0].image_url);
    }
  }
  getExImages() {
    let image = this.variationForm.controls.image.value;
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
  /*
  - Add this to EventKey class and delete it afterward
     static VARIATIONS = {
      UPSERT(exId: number | null): string {
        return 'variations:upsert:' + exId
      },
      GET(exId: number): string {
        return 'variations:get-single:' + exId
      }
    }
  */
  upsert(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.VARIATIONS.UPSERT(exId));
    // @ts-ignore
    this.variationService.upsert(key, this.variationForm.value, exId);
    this.subscribe(key, null, (value, meta) => {
      this.loading = false;
      let message = "Variation has been " + (exId ? "updated" : "created");
      this.notifier.success("Success", message);
      this.variationForm.reset();
      if (this.config.upsertOnDialog) {
        this.onCompleted.emit(meta.data);
      } else {
        this.navigate(_models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.list, value => {
          this.notifier.success("Success!", message);
        });
      }
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    this.variationForm.controls.name.setValue(n.name);
    this.variationForm.controls.description.setValue(n.description);
    this.variationForm.controls.image.setValue(n.image == null ? null : n.image);
  }
  static #_ = this.ɵfac = function VariationUpsertComponent_Factory(t) {
    return new (t || VariationUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_variation_service__WEBPACK_IMPORTED_MODULE_5__.VariationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: VariationUpsertComponent,
    selectors: [["app-variation-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 31,
    vars: 12,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_UPSERT_VARIATION_UPSERT_COMPONENT_TS_1 = goog.getMsg("Name");
        i18n_0 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_UPSERT_VARIATION_UPSERT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09A8\u09BE\u09AE";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_UPSERT_VARIATION_UPSERT_COMPONENT_TS_3 = goog.getMsg("Description");
        i18n_2 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_UPSERT_VARIATION_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_UPSERT_VARIATION_UPSERT_COMPONENT_TS_5 = goog.getMsg("Cancel");
        i18n_4 = MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_UPSERT_VARIATION_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u09AC\u09BE\u09A4\u09BF\u09B2";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Submit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_UPSERT_VARIATION_UPSERT_COMPONENT_TS_7 = goog.getMsg("Submit");
        i18n_6 = MSG_EXTERNAL_label_Submit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_UPSERT_VARIATION_UPSERT_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u099C\u09AE\u09BE \u09A6\u09BF\u09A8";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "mb-3"], ["for", "name-input", 1, "form-label"], i18n_0, [1, "error"], ["type", "text", "id", "name-input", "name", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], [1, "text-danger"], ["for", "description", 1, "form-label"], i18n_2, ["id", "description", "rows", "5", "name", "description", "formControlName", "description", 1, "form-control", 3, "placeholder"], [3, "title", "multiSelect", "existingImages", "required", "onUploaded"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], i18n_4, ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], i18n_6, [3, "bar"]];
    },
    template: function VariationUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, VariationUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Create/Update Variation");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "form", 6)(8, "div", 7)(9, "label", 8)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 7)(18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](19, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "app-file-picker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onUploaded", function VariationUpsertComponent_Template_app_file_picker_onUploaded_23_listener($event) {
          return ctx.onImgUploaded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 17)(25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function VariationUpsertComponent_Template_button_click_25_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](27, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function VariationUpsertComponent_Template_button_click_28_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](30, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.variationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Enter Name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.variationForm, "name", "minLength", "Name should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Enter Description"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.variationForm, "description", "minLength", "Description should be at least 10 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", ctx.translations["Image"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("multiSelect", false)("existingImages", ctx.getExImages())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.variationForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__.ProgressComponent, _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_8__.FilePickerComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 84968:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/variations/models/config.model.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultVariationConfig: () => (/* binding */ defaultVariationConfig),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/breadcrumb/breadcrumb.model */ 46405);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);


let defaultVariationConfig = {
  defaultLayout: _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.GRID,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: false,
  showUpdateButton: false,
  searchEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VARIATIONS.VARIATION_ENDPOINT,
  delEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VARIATIONS.VARIATION_ENDPOINT
};
let selfRoutes = {
  list: "/admin/inventory/variations",
  create: "/admin/inventory/variations/create",
  update(id) {
    return id == null ? this.create : "/admin/inventory/variations/" + id + '/update';
  }
};

/***/ }),

/***/ 13668:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/variations/services/variation.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariationService: () => (/* binding */ VariationService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class VariationService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VARIATIONS.SEARCH(endpoint, params);
    this.http.get(url).subscribe(variation => {
      this.eventBusService.publish(key, variation);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, endpoint, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, id) {
    this.http.get(_inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VARIATIONS.GET(id)).subscribe(variation => {
      this.eventBusService.publish(key, variation);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, variationReq, exId) {
    let endpoint = exId == null ? _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VARIATIONS.CREATE() : _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VARIATIONS.UPDATE(exId);
    let observable = exId == null ? this.http.post(endpoint, variationReq) : this.http.patch(endpoint, variationReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, variationReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function VariationService_Factory(t) {
    return new (t || VariationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: VariationService,
    factory: VariationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 17809:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/variations/variation.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariationComponent: () => (/* binding */ VariationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_variation_list_variation_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/variation-list/variation-list.component */ 49441);


class VariationComponent {
  static #_ = this.ɵfac = function VariationComponent_Factory(t) {
    return new (t || VariationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: VariationComponent,
    selectors: [["app-variation"]],
    decls: 1,
    vars: 0,
    template: function VariationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-variation-list");
      }
    },
    dependencies: [_components_variation_list_variation_list_component__WEBPACK_IMPORTED_MODULE_0__.VariationListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 67123:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/vendors/components/vendor-list/vendor-list.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VendorListComponent: () => (/* binding */ VendorListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v2.component */ 92159);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 75734);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _vendor_upsert_vendor_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vendor-upsert/vendor-upsert.component */ 30497);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_vendor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/vendor.service */ 77405);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../components/breadcrumb/breadcrumb.component */ 43383);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);






















function VendorListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("bar", true);
  }
}
function VendorListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Cooking your data, please wait..");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "No items");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, VendorListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, VendorListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 18)(10, "div", 19)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function VendorListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_div_9_div_1_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_div_9_div_1_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_div_9_div_1_tr_26_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r11.created_by);
  }
}
function VendorListComponent_div_9_div_1_tr_26_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "img", 40);
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", item_r11.logo, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}
function VendorListComponent_div_9_div_1_tr_26_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r11.name.substring(0, 1).toUpperCase(), " ");
  }
}
function VendorListComponent_div_9_div_1_tr_26_td_19_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_div_9_div_1_tr_26_td_19_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_div_9_div_1_tr_26_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VendorListComponent_div_9_div_1_tr_26_td_19_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r24);
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r22.toggleApproval(item_r11.id, !item_r11.approved));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, VendorListComponent_div_9_div_1_tr_26_td_19_a_1_Template, 2, 0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, VendorListComponent_div_9_div_1_tr_26_td_19_a_2_Template, 2, 0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r11.approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r11.approved);
  }
}
function VendorListComponent_div_9_div_1_tr_26_td_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 36)(1, "app-delete", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function VendorListComponent_div_9_div_1_tr_26_td_23_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r26.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r16.config.delEndpoint + "/" + item_r11.id);
  }
}
function VendorListComponent_div_9_div_1_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, VendorListComponent_div_9_div_1_tr_26_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "td")(5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, VendorListComponent_div_9_div_1_tr_26_img_6_Template, 1, 1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, VendorListComponent_div_9_div_1_tr_26_span_7_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "td")(9, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VendorListComponent_div_9_div_1_tr_26_Template_a_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r30);
      const item_r11 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r29.onUpsertClick(item_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "td")(12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](14, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "td")(16, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](19, VendorListComponent_div_9_div_1_tr_26_td_19_Template, 3, 2, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "td", 36)(21, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VendorListComponent_div_9_div_1_tr_26_Template_a_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r30);
      const item_r11 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r31.onUpsertClick(item_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](23, VendorListComponent_div_9_div_1_tr_26_td_23_Template, 2, 1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r11.logo != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r11.logo == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](14, 9, item_r11.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 11, item_r11.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.config.showApprovalButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r10.config.showDeleteButton);
  }
}
function VendorListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Vendors that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 28)(7, "table", 29)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, VendorListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18, "Created At");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](20, "Last Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, VendorListComponent_div_9_div_1_th_21_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](23, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](24, VendorListComponent_div_9_div_1_th_24_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](26, VendorListComponent_div_9_div_1_tr_26_Template, 24, 13, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showApprovalButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r5.vendors.content);
  }
}
function VendorListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", item_r33.logo, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}
function VendorListComponent_div_9_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 71)(1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r33.name.substring(0, 1).toUpperCase(), " ");
  }
}
function VendorListComponent_div_9_div_2_div_1_h6_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h6", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("By ", item_r33.created_by, "");
  }
}
function VendorListComponent_div_9_div_2_div_1_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 73)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 1, item_r33.updated_at), " ");
  }
}
function VendorListComponent_div_9_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_div_9_div_2_div_1_label_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_div_9_div_2_div_1_label_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Not Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_div_9_div_2_div_1_div_31_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "i", 78);
  }
}
function VendorListComponent_div_9_div_2_div_1_div_31_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "i", 79);
  }
}
function VendorListComponent_div_9_div_2_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 67)(1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VendorListComponent_div_9_div_2_div_1_div_31_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r51);
      const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r49.toggleApproval(item_r33.id, !item_r33.approved));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, VendorListComponent_div_9_div_2_div_1_div_31_i_2_Template, 1, 0, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, VendorListComponent_div_9_div_2_div_1_div_31_i_3_Template, 1, 0, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r33.approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r33.approved);
  }
}
function VendorListComponent_div_9_div_2_div_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 67)(1, "app-delete", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function VendorListComponent_div_9_div_2_div_1_div_32_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r53.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r42.config.delEndpoint + "/" + item_r33.id)("look", "bx");
  }
}
function VendorListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, VendorListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, VendorListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "h5", 55)(6, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VendorListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r57);
      const item_r33 = restoredCtx.$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r56.onUpsertClick(item_r33.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, VendorListComponent_div_9_div_2_div_1_h6_8_Template, 2, 1, "h6", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 0)(10, "div", 58)(11, "p", 59)(12, "small")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](17, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "div", 58)(19, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, VendorListComponent_div_9_div_2_div_1_small_20_Template, 6, 3, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, VendorListComponent_div_9_div_2_div_1_small_21_Template, 6, 0, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "div")(23, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](24, VendorListComponent_div_9_div_2_div_1_label_24_Template, 2, 0, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](25, VendorListComponent_div_9_div_2_div_1_label_25_Template, 2, 0, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "div", 65)(27, "div", 66)(28, "div", 67)(29, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VendorListComponent_div_9_div_2_div_1_Template_a_click_29_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r57);
      const item_r33 = restoredCtx.$implicit;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r58.onUpsertClick(item_r33.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](30, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](31, VendorListComponent_div_9_div_2_div_1_div_31_Template, 4, 2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](32, VendorListComponent_div_9_div_2_div_1_div_32_Template, 2, 2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r33.logo);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r33.logo == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r33.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r32.config.showUserFilter && item_r33.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](17, 11, item_r33.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r33.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r33.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r33.approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r33.approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r32.config.showApprovalButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r32.config.showDeleteButton);
  }
}
function VendorListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, VendorListComponent_div_9_div_2_div_1_Template, 33, 13, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r6.vendors.content);
  }
}
function VendorListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, VendorListComponent_div_9_div_1_Template, 27, 6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, VendorListComponent_div_9_div_2_Template, 2, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.GRID);
  }
}
class VendorListComponent extends _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV2 {
  componentName() {
    return "VendorListComponent";
  }
  /*
    - Use endoints in AdminEndpoint class and delete it afterward
     ```
       static VENDORS = {
          VENDOR_ENDPOINT: environment.base_url + '/api/v1/vendors',
          VENDOR_ENDPOINT_ADMIN: environment.base_url + '/api/v1/admin/vendors',
          SEARCH(endpoint: string, params: IParams) {
            return endpoint.concat(BaseEndpoint.toParamString(params));
          },
          CREATE(): string {
            return this.VENDOR_ENDPOINT
          },
          GET(id: number): string {
            return this.VENDOR_ENDPOINT + '/' + id
          },
          UPDATE(id: number): string {
            return this.VENDOR_ENDPOINT + '/' + id
          },
        }
      ```
   */
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, vendorService, notifier) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.vendorService = vendorService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultVendorConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.defaultFilterData;
    this.vendors = _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__.defaultPage;
    if (authService.isAdmin()) {
      this.config.showApprovalButton = true;
      this.config.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__.InventoryEndpoints.VENDORS.VENDOR_ENDPOINT_ADMIN_V2;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.parseFilterData)(params);
      this.fetchVendors({
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
      text: "Vendors",
      link: null,
      active: true
    }];
  }
  fetchVendors(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.VENDORS.SEARCH(params));
    this.vendorService.search(key, this.config.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.vendors = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "Vendor is deleted");
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
    return _vendor_upsert_vendor_upsert_component__WEBPACK_IMPORTED_MODULE_5__.VendorUpsertComponent;
  }
  toggleApproval(id, approved) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.VENDORS.TOGGLE_APPROVAL(id));
    this.vendorService.toggleApproval(key, id, approved);
    this.subscribe(key, null, (value, meta) => {
      this.loading = false;
      this.notifier.success("Success", "Vendor is " + (approved ? "approved" : "disapproved"));
      this.ngOnInit();
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error("Error", meta.data.error.message);
    });
  }
  static #_ = this.ɵfac = function VendorListComponent_Factory(t) {
    return new (t || VendorListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_vendor_service__WEBPACK_IMPORTED_MODULE_11__.VendorService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__.NotifierService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: VendorListComponent,
    selectors: [["app-vendor-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "/assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], [1, "text-uppercase"], ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], ["style", "width: 100px", 3, "click", 4, "ngIf"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [2, "width", "100px", 3, "click"], ["class", "btn btn-outline-success btn-sm edit", "title", "Edit", 4, "ngIf"], ["class", "btn btn-outline-danger btn-sm edit", "title", "Edit", 4, "ngIf"], ["title", "Edit", 1, "btn", "btn-outline-success", "btn-sm", "edit"], [1, "fas", "fa-check"], ["title", "Edit", 1, "btn", "btn-outline-danger", "btn-sm", "edit"], [1, "fas", "fa-heart-broken"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], ["class", "badge bg-success font-size-11 m-1", 4, "ngIf"], ["class", "badge bg-warning font-size-11 m-1", 4, "ngIf"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [1, "font-size-10"], [1, "badge", "bg-success", "font-size-11", "m-1"], [1, "badge", "bg-warning", "font-size-11", "m-1"], ["title", "Approve", "class", "bx bx-check-circle text-success", 4, "ngIf"], ["title", "Unapprove", "class", "bx bx-x-circle text-warning", 4, "ngIf"], ["title", "Approve", 1, "bx", "bx-check-circle", "text-success"], ["title", "Unapprove", 1, "bx", "bx-x-circle", "text-warning"], [3, "requestUrl", "look", "deleteItemEvent"]],
    template: function VendorListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("layoutSelected", function VendorListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("addButtonClick", function VendorListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, VendorListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, VendorListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, VendorListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("title", "Vendors")("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.vendors.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.vendors.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("page", ctx.vendors);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 59056:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/vendors/components/vendor-select/vendor-select.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VendorSelectComponent: () => (/* binding */ VendorSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _vendor_upsert_vendor_upsert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendor-upsert/vendor-upsert.component */ 30497);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../inventory.endpoints */ 82771);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_vendor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/vendor.service */ 77405);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);

















function VendorSelectComponent_util_progress_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "util-progress", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("bar", true);
  }
}
const _c2 = function () {
  return {
    standalone: true
  };
};
class VendorSelectComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  componentName() {
    return "VendorSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, vendorService, popupService) {
    super(eventBus, router, subContainer);
    this.authService = authService;
    this.vendorService = vendorService;
    this.popupService = popupService;
    this.enableAdd = false;
    this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_4__.InventoryEndpoints.VENDORS.VENDOR_ENDPOINT_V2;
    this.items = [];
    this.selectedItem = null;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    if (authService.isAdmin()) {
      this.enableAdd = true;
      this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_4__.InventoryEndpoints.VENDORS.VENDOR_ENDPOINT_ADMIN_V2;
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
    let query = _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__.TextUtility.removeSpecialCharacters(event.target?.value);
    if (query.length > 2) {
      this.search({
        page: 0,
        size: 10,
        q: query
      });
    }
  }
  onSelected(event) {
    if (this.items.find(c => c.name == event.name)) {
      this.selected.emit(this.selectedItem);
    } else {
      let dialogRef = this.popupService.open(_vendor_upsert_vendor_upsert_component__WEBPACK_IMPORTED_MODULE_2__.VendorUpsertComponent, {
        id: null,
        title: event.title,
        dialogUpsert: true
      });
      let component = dialogRef.componentInstance;
      component.onCompleted.subscribe(vendor => {
        this.selected.emit(vendor);
      });
      component.onCanceled.subscribe(() => {
        dialogRef.close();
      });
    }
  }
  search(params) {
    let admin = this.authService.isAdmin();
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.VENDORS.SEARCH(params) + _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__.TextUtility.randomString(5));
    if (admin) {
      this.vendorService.search(key, this.searchEndpoint, params);
    } else {
      this.vendorService.myVendors(key, this.searchEndpoint, params);
    }
    this.subscribe(key, null, (value, meta) => {
      if (admin) {
        this.items = meta.data.content;
      } else {
        this.items = meta.data;
      }
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function VendorSelectComponent_Factory(t) {
    return new (t || VendorSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_vendor_service__WEBPACK_IMPORTED_MODULE_8__.VendorService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: VendorSelectComponent,
    selectors: [["app-vendor-select"]],
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
    vars: 9,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Store$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VENDORS_COMPONENTS_VENDOR_SELECT_VENDOR_SELECT_COMPONENT_TS_1 = goog.getMsg("Store");
        i18n_0 = MSG_EXTERNAL_label_Store$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_INVENTORY_VENDORS_COMPONENTS_VENDOR_SELECT_VENDOR_SELECT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09B8\u09CD\u099F\u09CB\u09B0";
      }
      return [["for", "vendor-select", 1, "visually-hidden"], i18n_0, [3, "bar", 4, "ngIf"], ["id", "vendor-select", "bindLabel", "name", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "placeholder", "keyup", "ngModelChange", "change"], [3, "bar"]];
    },
    template: function VendorSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, VendorSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ng-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function VendorSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function VendorSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function VendorSelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Search Store.."]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.items)("hideSelected", true)("multiple", false)("addTag", ctx.enableAdd)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](8, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__.ProgressComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 30497:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/vendors/components/vendor-upsert/vendor-upsert.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VendorUpsertComponent: () => (/* binding */ VendorUpsertComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v2.component */ 19870);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 75734);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_vendor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/vendor.service */ 77405);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _geo_locationtypes_services_locationtype_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../geo/locationtypes/services/locationtype.service */ 5375);
/* harmony import */ var _geo_locations_services_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geo/locations/services/location.service */ 47579);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/editor/editor.component */ 16265);
/* harmony import */ var _geo_locations_components_location_select_location_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geo/locations/components/location-select/location-select.component */ 80046);
/* harmony import */ var _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../common/modules/cms/files/components/filepicker/filepicker.component */ 7247);
/* harmony import */ var _users_users_components_user_select_user_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../users/users/components/user-select/user-select.component */ 25635);




















function VendorUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "util-progress", 66);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bar", true);
  }
}
function VendorUpsertComponent_div_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 67)(1, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "app-location-select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function VendorUpsertComponent_div_129_Template_app_location_select_selected_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const locMap_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r4.onLocationSelected($event, locMap_r3.type));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const locMap_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("for", locMap_r3.type.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](locMap_r3.type.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("preload", locMap_r3.type.parent_id == null)("items", locMap_r3.locations)("selectedItem", locMap_r3.selectedLocation);
  }
}
function VendorUpsertComponent_em_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "em", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " Location is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
class VendorUpsertComponent extends _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV2 {
  constructor(eventBus, router, subContainer, route, vendorService, notifier, locationTypeService, locationService, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.vendorService = vendorService;
    this.notifier = notifier;
    this.locationTypeService = locationTypeService;
    this.locationService = locationService;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultVendorConfig;
    this.vendorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(3)]),
      type: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('GENERAL', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
      commission_percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max(100)]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(10)]),
      logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
      banner: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null),
      owner_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      supplier: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(false, []),
      flagship: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(false, []),
      authorized_dealer: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(false, []),
      ecommerce_activated: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(false, []),
      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      account_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      account_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      bank_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      branch_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      routing: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      // open_schedules: new FormControl<IOpenSchedule[]>([],[]),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
        address_line_one: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
        address_line_two: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
        altitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
        latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
        longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
        title: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
        zip_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
        location_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, [])
      })
    });
    this.selectedOwner = null;
    this.locations = [];
    if (dialogData.title != null) {
      this.vendorForm.controls.name.setValue(dialogData.name);
    }
  }
  componentName() {
    return "VendorUpsertComponent";
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Vendors",
      link: "/admin/vendors",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  ngOnInit() {
    super.ngOnInit();
    this.fetchLocationTypes({
      page: 0,
      size: 100,
      q: null
    });
  }
  initialize(exId) {
    this.loading = true;
    this.fetchEx(exId);
  }
  onSubmit() {
    if (!this.vendorForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  onLogoPicked(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.vendorForm.controls.logo.setValue(images[0].image_url);
    }
  }
  onBannerPicked(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.vendorForm.controls.banner.setValue(images[0].image_url);
    }
  }
  getExLogo() {
    let image = this.vendorForm.controls.logo.value;
    if (image == null) {
      return [];
    }
    return [{
      image_url: image,
      thumb_url: image
    }];
  }
  getExBanner() {
    let image = this.vendorForm.controls.banner.value;
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
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.VENDORS.UPSERT(exId));
    // @ts-ignore
    this.vendorService.upsert(key, this.vendorForm.value, exId);
    this.subscribe(key, null, (value, meta) => {
      this.notifier.success("Success", "Vendor has been " + (exId ? "updated" : "created"));
      this.vendorForm.reset();
      this.onSuccess(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    this.vendorForm.controls.name.setValue(n.name);
    this.vendorForm.controls.type.setValue(n.type);
    this.vendorForm.controls.commission_percentage.setValue(n.commission_percentage);
    this.vendorForm.controls.description.setValue(n.description);
    this.vendorForm.controls.logo.setValue(n.logo == null ? null : n.logo);
    this.vendorForm.controls.banner.setValue(n.banner == null ? null : n.banner);
    this.vendorForm.controls.owner_id.setValue(n.owner == null ? null : n.owner.id);
    this.vendorForm.controls.supplier.setValue(n.supplier);
    this.vendorForm.controls.flagship.setValue(n.flagship);
    this.vendorForm.controls.authorized_dealer.setValue(n.authorized_dealer);
    this.vendorForm.controls.ecommerce_activated.setValue(n.ecommerce_activated);
    this.vendorForm.controls.phone.setValue(n.phone);
    this.vendorForm.controls.account_name.setValue(n.account_name);
    this.vendorForm.controls.account_number.setValue(n.account_number);
    this.vendorForm.controls.bank_name.setValue(n.bank_name);
    this.vendorForm.controls.branch_name.setValue(n.branch_name);
    this.vendorForm.controls.routing.setValue(n.routing);
    this.vendorForm.controls.address.controls.address_line_one.setValue(n.address.address_line_one);
    this.vendorForm.controls.address.controls.address_line_two.setValue(n.address.address_line_two);
    this.vendorForm.controls.address.controls.altitude.setValue(n.address.altitude);
    this.vendorForm.controls.address.controls.latitude.setValue(n.address.latitude);
    this.vendorForm.controls.address.controls.longitude.setValue(n.address.longitude);
    this.vendorForm.controls.address.controls.title.setValue(n.address.title);
    this.vendorForm.controls.address.controls.zip_code.setValue(n.address.zip_code);
    this.vendorForm.controls.address.controls.location_id.setValue(n.address.location_id);
    this.selectedOwner = n.owner;
    /*
    Set the selected locations to the dynamic location form fields
     */
    new Map(Object.entries(n.address.locations_tree)).forEach((location, typeCode) => {
      let type = this.locations.find(l => l.type.code == typeCode)?.type;
      if (type != null) {
        this.onLocationSelected(location, type);
      }
    });
  }
  fetchEx(exId) {
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.VENDORS.GET(exId));
    this.vendorService.fetchSingle(key, exId);
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
  fetchLocationTypes(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.LOCATIONTYPES.SEARCH(params));
    this.locationTypeService.search(key, this.config.locationTypeEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      let locationTypes = meta.data.content;
      locationTypes.sort((a, b) => {
        return a.level - b.level;
      });
      this.locations = locationTypes.map(type => {
        return {
          type: type,
          locations: [],
          selectedLocation: null
        };
      });
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  fetchChildLocations(params, onLoaded) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.LOCATIONS.SEARCH(params));
    this.locationService.searchChildren(key, this.config.locationEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      let locations = meta.data.content;
      onLoaded(locations);
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onLocationSelected(location, type) {
    /*
     *  Set the selected location
     *  Unset all selected locations for other types where type.level > selectedType.level
     */
    this.locations = this.locations.map(l => {
      if (l.type.id == type.id) {
        return {
          ...l,
          selectedLocation: location
        };
      } else {
        if (l.type.level > type.level) {
          return {
            ...l,
            selectedLocation: null
          };
        }
        return l;
      }
    });
    console.log('selected location', this.locations);
    /*
    Set the location id in the form where level is the highest
     */
    let sortedAndFiltered = this.locations.filter(l => l.selectedLocation != null).sort((a, b) => {
      return b.type.level - a.type.level;
    });
    console.log('sorted and filtered', sortedAndFiltered);
    if (sortedAndFiltered.length > 0) {
      let selectedLocation = sortedAndFiltered[0].selectedLocation;
      this.vendorForm.controls.address.controls.location_id.setValue(selectedLocation == null ? null : selectedLocation.id);
    }
    console.log('selected location in control', this.vendorForm.controls.address.controls.location_id.value);
    if (location != null) {
      this.fetchChildLocations({
        page: 0,
        size: 100,
        q: null,
        parent_id: location.id
      }, locations => {
        if (locations.length == 0) {
          return;
        }
        let childLocationTypeId = locations[0].type_id;
        this.locations = this.locations.map(l => {
          if (l.type.id == childLocationTypeId) {
            return {
              ...l,
              locations: locations
            };
          } else {
            return l;
          }
        });
      });
    }
  }
  onOwnerSelected(user) {
    this.selectedOwner = user;
    this.vendorForm.controls.owner_id.setValue(user == null ? null : user.id);
  }
  static #_ = this.ɵfac = function VendorUpsertComponent_Factory(t) {
    return new (t || VendorUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_vendor_service__WEBPACK_IMPORTED_MODULE_5__.VendorService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_geo_locationtypes_services_locationtype_service__WEBPACK_IMPORTED_MODULE_7__.LocationTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_geo_locations_services_location_service__WEBPACK_IMPORTED_MODULE_8__.LocationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: VendorUpsertComponent,
    selectors: [["app-vendor-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]],
    decls: 136,
    vars: 18,
    consts: [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "mb-4"], [1, "card-name"], [1, "text-warning"], [1, "error"], [3, "formGroup"], [1, "col-sm-6", "col-lg-3", "mb-3"], ["for", "name-input", 1, "form-label"], ["type", "text", "id", "name-input", "placeholder", "Enter Name", "name", "name", "formControlName", "name", 1, "form-control"], [1, "text-danger"], [1, "col-6", "col-sm-6", "col-lg-3", "mb-3"], ["for", "type-input", 1, "form-label"], ["id", "type-input", "formControlName", "type", 1, "form-select"], ["value", "GENERAL"], ["value", "RESTAURANT"], ["for", "owner-input", 1, "form-label"], ["id", "owner-input", 3, "selectedItem", "selected"], ["for", "comm-input", 1, "form-label"], ["type", "text", "id", "comm-input", "placeholder", "Enter Commission", "name", "commission_percentage", "formControlName", "commission_percentage", 1, "form-control"], [1, "col-6", "mb-3"], [1, "form-label"], ["title", "Logo", 3, "multiSelect", "existingImages", "required", "onUploaded"], ["title", "Banner", 3, "multiSelect", "existingImages", "required", "onUploaded"], [1, "mb-3"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description"], [1, "row", "col-12"], [1, "col-sm-6"], [1, "form-check", "form-check-primary", "form-checkbox-outline", "mb-3"], ["type", "checkbox", "id", "supplier", "formControlName", "supplier", 1, "form-check-input"], ["for", "supplier", 1, "form-check-label"], ["type", "checkbox", "id", "flagship", "formControlName", "flagship", 1, "form-check-input"], ["for", "flagship", 1, "form-check-label"], ["type", "checkbox", "id", "authorized_dealer", "formControlName", "authorized_dealer", 1, "form-check-input"], ["for", "authorized_dealer", 1, "form-check-label"], ["type", "checkbox", "id", "ecommerce_activated", "formControlName", "ecommerce_activated", 1, "form-check-input"], ["for", "ecommerce_activated", 1, "form-check-label"], [1, "row", "col-sm-6"], [1, "col-6", "col-md-6", "mb-3"], ["for", "account_name-input", 1, "form-label"], ["type", "text", "id", "account_name-input", "placeholder", "Account Name", "name", "account_name", "formControlName", "account_name", 1, "form-control"], ["for", "account_number-input", 1, "form-label"], ["type", "text", "id", "account_number-input", "placeholder", "Account Number", "name", "account_number", "formControlName", "account_number", 1, "form-control"], [1, "col-md-6", "mb-3"], ["for", "bank_name-input", 1, "form-label"], ["type", "text", "id", "bank_name-input", "placeholder", "Bank Name", "name", "bank_name", "formControlName", "bank_name", 1, "form-control"], ["for", "branch_name-input", 1, "form-label"], ["type", "text", "id", "branch_name-input", "placeholder", "Branch Name", "name", "branch_name", "formControlName", "branch_name", 1, "form-control"], ["for", "routing-input", 1, "form-label"], ["type", "text", "id", "routing-input", "placeholder", "Routing", "name", "routing", "formControlName", "routing", 1, "form-control"], ["formGroupName", "address"], [1, "section"], [1, "col-sm-6", "mb-3"], ["for", "addr1-input", 1, "form-label"], ["type", "text", "id", "addr1-input", "placeholder", "Enter Address Line 1", "name", "address_line_one", "formControlName", "address_line_one", 1, "form-control"], ["for", "address_line_two-input", 1, "form-label"], ["type", "text", "id", "address_line_two-input", "placeholder", "Enter Address Line 2", "name", "address_line_two", "formControlName", "address_line_two", 1, "form-control"], ["class", "col-6 col-sm-6 mb-3", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], [3, "bar"], [1, "col-6", "col-sm-6", "mb-3"], [1, "form-label", 3, "for"], [3, "preload", "items", "selectedItem", "selected"]],
    template: function VendorUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, VendorUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Create/Update Vendor");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "em", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, " Form fields with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "em", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, " are required. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "form", 9)(14, "div", 1)(15, "div", 10)(16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "em", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "div", 14)(24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "em", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "select", 16)(29, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32, "Restaurant");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 14)(36, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37, "Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "app-user-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function VendorUpsertComponent_Template_app_user_select_selected_38_listener($event) {
          return ctx.onOwnerSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](39, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 10)(41, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "Commission");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "em", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](45, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "div", 1)(49, "div", 23)(50, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51, "Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "em", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "app-file-picker", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onUploaded", function VendorUpsertComponent_Template_app_file_picker_onUploaded_54_listener($event) {
          return ctx.onLogoPicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "div", 23)(56, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](57, "Banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "app-file-picker", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onUploaded", function VendorUpsertComponent_Template_app_file_picker_onUploaded_58_listener($event) {
          return ctx.onBannerPicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "div", 27)(60, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "em", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](63, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](64, "app-editor", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "div", 30)(68, "div", 31)(69, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](70, "Vendor Flags");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](72, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](74, "Vendor is a supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](76, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](77, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](78, "Flagship Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](80, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](82, "Vendor is an authorized Dealer");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](84, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](85, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](86, "Ecommerce Activated");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](87, "div", 41)(88, "div", 1)(89, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](90, "Bank Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](91, "div", 42)(92, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](93, "Account Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](94, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](95, "div", 42)(96, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](97, "Account Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](98, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](99, "div", 47)(100, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](101, "Bank Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](102, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](103, "div", 42)(104, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](105, "Branch Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](106, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](107, "div", 42)(108, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](109, "Routing");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](110, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](111, "div", 54)(112, "section", 55)(113, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](114, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](115, "div", 1)(116, "div", 56)(117, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](118, "Address Line 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](119, "em", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](120, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](121, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](122, "em", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](124, "div", 56)(125, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](126, "Address Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](127, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](128, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](129, VendorUpsertComponent_div_129_Template, 4, 5, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](130, VendorUpsertComponent_em_130_Template, 2, 0, "em", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](131, "div", 63)(132, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function VendorUpsertComponent_Template_button_click_132_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](133, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](134, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function VendorUpsertComponent_Template_button_click_134_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](135, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.vendorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.vendorForm, "name", "minLength", "Name should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.vendorForm, "type", "required", "Must select a type!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("selectedItem", ctx.selectedOwner);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.vendorForm, "commission_percentage", "minLength", "Name should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("multiSelect", true)("existingImages", ctx.getExLogo())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("multiSelect", true)("existingImages", ctx.getExBanner())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.vendorForm, "description", "minLength", "Description should be at least 10 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.vendorForm.controls.address, "address_line_one", "required", "This field is required!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.locations);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.vendorForm.controls.address.controls.location_id.value == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx.vendorForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_9__.ProgressComponent, _common_modules_utility_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_10__.EditorComponent, _geo_locations_components_location_select_location_select_component__WEBPACK_IMPORTED_MODULE_11__.LocationSelectComponent, _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_12__.FilePickerComponent, _users_users_components_user_select_user_select_component__WEBPACK_IMPORTED_MODULE_13__.UserSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 75734:
/*!********************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/vendors/models/config.model.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultVendorConfig: () => (/* binding */ defaultVendorConfig),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/breadcrumb/breadcrumb.model */ 46405);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);
/* harmony import */ var _admin_endpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../admin.endpoint */ 16032);



let defaultVendorConfig = {
  defaultLayout: _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.GRID,
  upsertOnDialog: false,
  showUserFilter: false,
  showDeleteButton: true,
  searchEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VENDORS.VENDOR_ENDPOINT,
  delEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VENDORS.VENDOR_ENDPOINT,
  locationTypeEndpoint: _admin_endpoint__WEBPACK_IMPORTED_MODULE_2__.AdminEndpoint.LOCATIONTYPES.LOCATIONTYPE_ENDPOINT,
  locationEndpoint: _admin_endpoint__WEBPACK_IMPORTED_MODULE_2__.AdminEndpoint.LOCATIONS.LOCATION_ENDPOINT,
  showApprovalButton: false
};
let selfRoutes = {
  list: "/admin/inventory/vendors",
  create: "/admin/inventory/vendors/create",
  update(id) {
    return id == null ? this.create : "/admin/inventory/vendors/" + id + '/update';
  }
};

/***/ }),

/***/ 77405:
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/vendors/services/vendor.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VendorService: () => (/* binding */ VendorService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class VendorService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VENDORS.SEARCH(endpoint, params);
    this.http.get(url).subscribe(vendor => {
      this.eventBusService.publish(key, vendor.body);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, endpoint, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  myVendors(key, endpoint, params = {}) {
    let url = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VENDORS.MY_VENDORS(endpoint, params);
    this.http.get(url).subscribe(vendor => {
      this.eventBusService.publish(key, vendor);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, endpoint, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  searchCustomers(key, params) {
    let url = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VENDORS.SEARCH_CUSTOMERS(params);
    this.http.get(url).subscribe(customers => {
      this.eventBusService.publish(key, customers);
    }, error => {
      this.handleError(error, auth => {
        this.searchCustomers(key, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, id) {
    this.http.get(_inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VENDORS.GET(id)).subscribe(vendor => {
      this.eventBusService.publish(key, vendor.body);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  toggleApproval(key, id, approved) {
    this.http.patch(_inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VENDORS.TOGGLE_APPROVAL(id, approved), {}).subscribe(vendor => {
      this.eventBusService.publish(key, vendor);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, vendorReq, exId) {
    let endpoint = exId == null ? _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VENDORS.CREATE() : _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.VENDORS.UPDATE(exId);
    let observable = exId == null ? this.http.post(endpoint, vendorReq) : this.http.patch(endpoint, vendorReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, vendorReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function VendorService_Factory(t) {
    return new (t || VendorService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: VendorService,
    factory: VendorService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 10789:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/admin/domains/inventory/vendors/vendor.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VendorComponent: () => (/* binding */ VendorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/vendor-list/vendor-list.component */ 67123);


class VendorComponent {
  static #_ = this.ɵfac = function VendorComponent_Factory(t) {
    return new (t || VendorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: VendorComponent,
    selectors: [["app-vendor"]],
    decls: 1,
    vars: 0,
    template: function VendorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-vendor-list");
      }
    },
    dependencies: [_components_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_0__.VendorListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_admin_domains_inventory_inventory_module_ts.js.map