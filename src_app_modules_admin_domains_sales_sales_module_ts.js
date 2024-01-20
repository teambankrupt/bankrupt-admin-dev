"use strict";
(self["webpackChunkbankrupt_frontend"] = self["webpackChunkbankrupt_frontend"] || []).push([["src_app_modules_admin_domains_sales_sales_module_ts"],{

/***/ 46512:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/customers/components/customer-list/customer-list.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerListComponent: () => (/* binding */ CustomerListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v3.component */ 96562);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 95170);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer-upsert/customer-upsert.component */ 30150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/customer.service */ 33002);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../components/breadcrumb/breadcrumb.component */ 43383);




















function CustomerListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("bar", true);
  }
}
function CustomerListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "Cooking your data, please wait..");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function CustomerListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "No items");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function CustomerListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, CustomerListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, CustomerListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
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
function CustomerListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function CustomerListComponent_div_9_div_1_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](1, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function CustomerListComponent_div_9_div_1_tr_25_td_3_Template(rf, ctx) {
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
function CustomerListComponent_div_9_div_1_tr_25_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r10.name.substring(0, 1).toUpperCase(), " ");
  }
}
function CustomerListComponent_div_9_div_1_tr_25_td_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 43)(1, "app-delete", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("deleteItemEvent", function CustomerListComponent_div_9_div_1_tr_25_td_17_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r16.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("requestUrl", ctx_r13.config.delEndpoint + "/" + item_r10.id);
  }
}
function CustomerListComponent_div_9_div_1_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, CustomerListComponent_div_9_div_1_tr_25_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "td")(5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, CustomerListComponent_div_9_div_1_tr_25_span_6_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "td")(8, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CustomerListComponent_div_9_div_1_tr_25_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r20);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r19.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "td", 43)(15, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CustomerListComponent_div_9_div_1_tr_25_Template_a_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r20);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r21.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](16, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](17, CustomerListComponent_div_9_div_1_tr_25_td_17_Template, 2, 1, "td", 46);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r10.name != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](item_r10.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](item_r10.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r9.config.showDeleteButton);
  }
}
function CustomerListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](5, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 29)(7, "table", 30)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](11, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, CustomerListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](14, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](16, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](18, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](20, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](22, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](23, CustomerListComponent_div_9_div_1_th_23_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](25, CustomerListComponent_div_9_div_1_tr_25_Template, 18, 7, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r5.customers.content);
  }
}
function CustomerListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 63)(1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r23.name.substring(0, 1).toUpperCase(), " ");
  }
}
function CustomerListComponent_div_9_div_2_div_1_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h6", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("By ", item_r23.created_by, "");
  }
}
function CustomerListComponent_div_9_div_2_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 60)(1, "app-delete", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("deleteItemEvent", function CustomerListComponent_div_9_div_2_div_1_div_19_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r29.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("requestUrl", ctx_r26.config.delEndpoint + "/" + item_r23.id)("look", "bx");
  }
}
function CustomerListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 50)(1, "div", 51)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, CustomerListComponent_div_9_div_2_div_1_div_3_Template, 3, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "h5", 53)(5, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CustomerListComponent_div_9_div_2_div_1_Template_a_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r33);
      const item_r23 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r32.onUpsertClick(item_r23.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, CustomerListComponent_div_9_div_2_div_1_h6_7_Template, 2, 1, "h6", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div")(11, "a", 56)(12, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "div", 58)(15, "div", 59)(16, "div", 60)(17, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function CustomerListComponent_div_9_div_2_div_1_Template_a_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r33);
      const item_r23 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r34.onUpsertClick(item_r23.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](18, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, CustomerListComponent_div_9_div_2_div_1_div_19_Template, 2, 2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r23.name != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", item_r23.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r22.config.showUserFilter && item_r23.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" ", item_r23.phone, " | ", item_r23.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r22.config.showDeleteButton);
  }
}
function CustomerListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, CustomerListComponent_div_9_div_2_div_1_Template, 20, 6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r6.customers.content);
  }
}
function CustomerListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, CustomerListComponent_div_9_div_1_Template, 26, 5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, CustomerListComponent_div_9_div_2_Template, 2, 3, "div", 23);
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
class CustomerListComponent extends _base_components_base_list_v3_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV3 {
  componentName() {
    return "CustomerListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, customerService, notifier) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.customerService = customerService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultCustomerConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.defaultFilterData;
    this.customers = _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__.defaultPage;
    if (authService.isAdmin()) {
      this.config.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.parseFilterData)(params);
      this.fetchCustomers({
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
      text: this.translations["Customers"],
      link: null,
      active: true
    }];
  }
  fetchCustomers(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.CUSTOMERS.SEARCH(params));
    this.customerService.search(key, this.config.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      console.log(meta.data.body);
      this.customers = meta.data.body;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "Customer is deleted");
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
    return _customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_5__.CustomerUpsertComponent;
  }
  static #_ = this.ɵfac = function CustomerListComponent_Factory(t) {
    return new (t || CustomerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_10__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__.NotifierService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: CustomerListComponent,
    selectors: [["app-customer-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Customers$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___1 = goog.getMsg("Customers that I've created");
        i18n_0 = MSG_EXTERNAL_msg_Customers$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AE\u09BE\u09B0 \u09A4\u09C8\u09B0\u09BF\u0995\u09C3\u09A4 \u0995\u09BE\u09B8\u09CD\u099F\u09AE\u09BE\u09B0\u0997\u09A8";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___3 = goog.getMsg("Id");
        i18n_2 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "Id";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___5 = goog.getMsg("Image");
        i18n_4 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u099B\u09AC\u09BF";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___7 = goog.getMsg("Name");
        i18n_6 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "\u09A8\u09BE\u09AE";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___9 = goog.getMsg("Phone");
        i18n_8 = MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u09AB\u09CB\u09A8";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___11 = goog.getMsg("Email");
        i18n_10 = MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u0987\u09AE\u09C7\u0987\u09B2";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___13 = goog.getMsg("Update");
        i18n_12 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS____15 = goog.getMsg("Created By");
        i18n_14 = MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS____15;
      } else {
        i18n_14 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS____17 = goog.getMsg("Delete");
        i18n_16 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS____17;
      } else {
        i18n_16 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "/assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], [1, "text-uppercase"], ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], i18n_0, [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_2, i18n_4, i18n_6, i18n_8, i18n_10, i18n_12, [4, "ngFor", "ngForOf"], i18n_14, i18n_16, [1, "avatar-sm", "mx-auto"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "bg-success", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [3, "requestUrl", "look", "deleteItemEvent"]];
    },
    template: function CustomerListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("layoutSelected", function CustomerListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("addButtonClick", function CustomerListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, CustomerListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, CustomerListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, CustomerListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("title", ctx.translations["My Customers"])("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.customers.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.customers.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("page", ctx.customers);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_12__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_14__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_15__.DeleteComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_16__.BreadcrumbComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 18340:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/customers/components/customer-select/customer-select.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerSelectComponent: () => (/* binding */ CustomerSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customer-upsert/customer-upsert.component */ 30150);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 95170);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/customer.service */ 33002);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);

















function CustomerSelectComponent_util_progress_2_Template(rf, ctx) {
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
class CustomerSelectComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  componentName() {
    return "CustomerSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, customerService, popupService) {
    super(eventBus, router, subContainer);
    this.customerService = customerService;
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
    } else if (this.items.find(c => c.label == event.label)) {
      this.selected.emit(this.selectedItem);
    } else {
      let popup = this.popupService.open(_customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_0__.CustomerUpsertComponent, {
        id: null,
        dialogUpsert: true,
        phone: event
      });
      popup.componentInstance.onCompleted.subscribe(customer => {
        console.log("customer", customer);
        this.selected.emit(customer);
      });
      popup.componentInstance.onCanceled.subscribe(() => {
        popup.close();
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.CUSTOMERS.SEARCH(params));
    this.customerService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.body.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function CustomerSelectComponent_Factory(t) {
    return new (t || CustomerSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_8__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: CustomerSelectComponent,
    selectors: [["app-customer-select"]],
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
        const MSG_EXTERNAL_label_Customer$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_SELECT_CUSTOMER_SELECT_COMPONENT_TS_1 = goog.getMsg("Customer");
        i18n_0 = MSG_EXTERNAL_label_Customer$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_SELECT_CUSTOMER_SELECT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u0995\u09BE\u09B8\u09CD\u099F\u09AE\u09BE\u09B0";
      }
      return [["for", "customer-select", 1, "visually-hidden"], i18n_0, [3, "bar", 4, "ngIf"], ["id", "customer-select", "bindLabel", "label", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "placeholder", "keyup", "ngModelChange", "change"], [3, "bar"]];
    },
    template: function CustomerSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CustomerSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ng-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function CustomerSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function CustomerSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function CustomerSelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Search Customer.."]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.items)("hideSelected", true)("multiple", false)("addTag", ctx.enableAdd)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](8, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__.ProgressComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 30150:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/customers/components/customer-upsert/customer-upsert.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerUpsertComponent: () => (/* binding */ CustomerUpsertComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v2.component */ 19870);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 95170);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/customer.service */ 33002);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _inventory_vendors_components_vendor_select_vendor_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../inventory/vendors/components/vendor-select/vendor-select.component */ 59056);















function CustomerUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "util-progress", 25);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("bar", true);
  }
}
class CustomerUpsertComponent extends _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV2 {
  constructor(eventBus, router, subContainer, route, customerService, notifier, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.customerService = customerService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultCustomerConfig;
    this.customerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("^[0-9]*$")]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
      vendor_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required])
    });
    this.selectedVendor = null;
    if (dialogData.phone != null) {
      this.customerForm.controls.phone.setValue(dialogData.phone);
    }
  }
  componentName() {
    return "CustomerUpsertComponent";
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Customers",
      link: "/admin/customers",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.CUSTOMERS.GET(exId));
    this.customerService.fetchSingle(key, this.config.searchEndpoint, exId);
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
    if (!this.customerForm.valid) {
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
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.CUSTOMERS.UPSERT(exId));
    let req = this.customerForm.value;
    this.customerService.upsert(key, req, exId);
    this.subscribe(key, null, (value, meta) => {
      this.notifier.success("Success", "Customer has been " + (exId ? "updated" : "created"));
      this.customerForm.reset();
      this.onSuccess(meta.data.body);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    this.selectedVendor = n.vendor;
    this.customerForm.controls.name.setValue(n.name);
    this.customerForm.controls.phone.setValue(n.phone);
    this.customerForm.controls.email.setValue(n.email);
    this.customerForm.controls.vendor_id.setValue(n.vendor.id);
  }
  onVendorSelected(vendor) {
    this.selectedVendor = vendor;
    this.customerForm.controls.vendor_id.setValue(vendor != null ? vendor.id : null);
  }
  static #_ = this.ɵfac = function CustomerUpsertComponent_Factory(t) {
    return new (t || CustomerUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_5__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: CustomerUpsertComponent,
    selectors: [["app-customer-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 35,
    vars: 9,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpsertCustomer$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_1 = goog.getMsg("Create/Update Customer");
        i18n_0 = MSG_EXTERNAL_label_UpsertCustomer$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u0995\u09BE\u09B8\u09CD\u099F\u09AE\u09BE\u09B0 \u09A4\u09C8\u09B0\u09BF/\u0986\u09AA\u09A1\u09C7\u099F \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_3 = goog.getMsg("Name");
        i18n_2 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09A8\u09BE\u09AE";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_5 = goog.getMsg("Phone");
        i18n_4 = MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u09AB\u09CB\u09A8";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Store$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_7 = goog.getMsg("Store");
        i18n_6 = MSG_EXTERNAL_label_Store$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u09B8\u09CD\u099F\u09CB\u09B0";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_9 = goog.getMsg("Cancel");
        i18n_8 = MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_9;
      } else {
        i18n_8 = "\u09AC\u09BE\u09A4\u09BF\u09B2";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Submit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_11 = goog.getMsg("Submit");
        i18n_10 = MSG_EXTERNAL_label_Submit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_11;
      } else {
        i18n_10 = "\u099C\u09AE\u09BE \u09A6\u09BF\u09A8";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], i18n_0, [3, "formGroup"], [1, "mb-3"], ["for", "name-input", 1, "form-label"], i18n_2, ["type", "text", "id", "name-input", "name", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["for", "phone-input", 1, "form-label"], i18n_4, [1, "error"], ["type", "text", "id", "phone-input", "name", "phone", "formControlName", "phone", 1, "form-control", 3, "placeholder"], [1, "text-danger"], ["for", "shop-input", 1, "form-label"], i18n_6, ["id", "shop-input", 3, "selectedItem", "selected"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], i18n_8, ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], i18n_10, [3, "bar"]];
    },
    template: function CustomerUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, CustomerUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "form", 7)(8, "div", 8)(9, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](10, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 8)(13, "label", 12)(14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](15, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "em", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "em", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 8)(22, "label", 17)(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](24, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "em", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "app-vendor-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selected", function CustomerUpsertComponent_Template_app_vendor_select_selected_27_listener($event) {
          return ctx.onVendorSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 20)(29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CustomerUpsertComponent_Template_button_click_29_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](31, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CustomerUpsertComponent_Template_button_click_32_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](34, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.customerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Enter Name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Enter Phone"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx.errMsg(ctx.customerForm, "phone", "required", "Phone number should be 11 characters!"), " ", ctx.errMsg(ctx.customerForm, "phone", "minLength", "Phone number should be 11 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("selectedItem", ctx.selectedVendor);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.customerForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__.ProgressComponent, _inventory_vendors_components_vendor_select_vendor_select_component__WEBPACK_IMPORTED_MODULE_8__.VendorSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 34113:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/customers/customer.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerComponent: () => (/* binding */ CustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/customer-list/customer-list.component */ 46512);


class CustomerComponent {
  static #_ = this.ɵfac = function CustomerComponent_Factory(t) {
    return new (t || CustomerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CustomerComponent,
    selectors: [["app-customer"]],
    decls: 1,
    vars: 0,
    template: function CustomerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-customer-list");
      }
    },
    dependencies: [_components_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_0__.CustomerListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 95170:
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/customers/models/config.model.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultCustomerConfig: () => (/* binding */ defaultCustomerConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/breadcrumb/breadcrumb.model */ 46405);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 43155);


let defaultCustomerConfig = {
  defaultLayout: _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.COLUMN,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  searchEndpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.CUSTOMERS.CUSTOMER_ENDPOINT,
  delEndpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.CUSTOMERS.CUSTOMER_ENDPOINT
};
let selfEndpoints = {
  endpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.CUSTOMERS.CUSTOMER_ENDPOINT,
  adminEndpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.CUSTOMERS.CUSTOMER_ENDPOINT_ADMIN
};
let selfRoutes = {
  list: "/admin/sales/customers",
  create: "/admin/sales/customers/create",
  update(id) {
    return id == null ? this.create : "/admin/sales/customers/" + id + '/update';
  }
};

/***/ }),

/***/ 33002:
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/customers/services/customer.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerService: () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 43155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class CustomerService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.CUSTOMERS.SEARCH(endpoint, params);
    this.http.get(url).subscribe(customer => {
      this.eventBusService.publish(key, customer);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, endpoint, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, endpoint, id) {
    this.http.get(_sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.CUSTOMERS.GET(endpoint, id)).subscribe(customer => {
      this.eventBusService.publish(key, customer.body);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, endpoint, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, customerReq, exId) {
    let endpoint = exId == null ? _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.CUSTOMERS.CREATE() : _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.CUSTOMERS.UPDATE(exId);
    let observable = exId == null ? this.http.post(endpoint, customerReq) : this.http.patch(endpoint, customerReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, customerReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function CustomerService_Factory(t) {
    return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: CustomerService,
    factory: CustomerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 85036:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/orders/components/add-payment/add-payment.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddPaymentComponent: () => (/* binding */ AddPaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/order.service */ 12271);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);













function AddPaymentComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "util-progress", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bar", true);
  }
}
class AddPaymentComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(eventBus, router, subContainer, orderService, notifier, dialogData) {
    super(eventBus, router, subContainer);
    this.orderService = orderService;
    this.notifier = notifier;
    this.orderId = null;
    this.dueAmount = 0;
    this.paymentAmount = 0;
    this.maxAmount = 0;
    this.onCanceled = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.onCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    console.log(dialogData);
    if (dialogData.id != null) {
      this.orderId = dialogData.id;
    }
    if (dialogData.dueAmount != null) {
      this.dueAmount = dialogData.dueAmount;
    }
    if (dialogData.paymentAmount != null) {
      this.paymentAmount = dialogData.paymentAmount;
    }
    if (dialogData.maxAmount != null) {
      this.maxAmount = dialogData.maxAmount;
    }
  }
  componentName() {
    return AddPaymentComponent.name;
  }
  ngOnInit() {
    this.loading = false;
  }
  onCancelClick() {
    this.onCanceled.emit();
  }
  onPaymentClick() {
    if (this.orderId == null || this.paymentAmount < 0 || this.paymentAmount > this.maxAmount) {
      this.notifier.show("warning", "Invalid payment amount", "Payment amount must be greater than 0 and less than due amount");
      return;
    }
    this.makePayment(this.orderId, this.paymentAmount, "STORE_PAYMENT");
  }
  makePayment(id, amount, paymentMethod) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.ORDERS.MAKE_PAYMENT(id));
    this.orderService.makePayment(key, id, amount, paymentMethod);
    this.subscribe(key, null, (value, meta) => {
      this.notifier.success("Success", "Payment has been updated");
      this.loading = false;
      this.onCompleted.emit();
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  static #_ = this.ɵfac = function AddPaymentComponent_Factory(t) {
    return new (t || AddPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_2__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_3__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_4__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_5__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AddPaymentComponent,
    selectors: [["app-add-payment"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 26,
    vars: 5,
    consts: [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "col-sm-6"], [1, "card-title", "mb-4"], [1, "row", "mb-3"], [1, "col-12", "mb-3"], ["for", "date-input", 1, "form-label"], [1, "error"], [1, "text-warning", "my-2"], ["id", "date-input", 1, "input-group"], ["type", "number", 1, "form-control", 3, "min", "max", "ngModel", "ngModelChange"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-outline-danger", "waves-effect", 3, "click"], [1, "mdi", "mdi-cancel", "font-size-16"], ["type", "submit", 1, "btn", "btn-success", "waves-effect", "waves-light", 3, "click"], [1, "mdi", "mdi-plus", "font-size-16"], [3, "bar"]],
    template: function AddPaymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AddPaymentComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Add Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 12)(18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_Template_input_ngModelChange_18_listener($event) {
          return ctx.paymentAmount = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 14)(20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddPaymentComponent_Template_button_click_20_listener() {
          return ctx.onCancelClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AddPaymentComponent_Template_button_click_23_listener() {
          return ctx.onPaymentClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Current Due Amount: ", ctx.dueAmount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", 0)("max", ctx.maxAmount)("ngModel", ctx.paymentAmount);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxValidator, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_6__.ProgressComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 73017:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/orders/components/order-list/order-list.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderListComponent: () => (/* binding */ OrderListComponent)
/* harmony export */ });
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 57813);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order-upsert/order-upsert.component */ 59628);
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/order.model */ 72551);
/* harmony import */ var _base_components_base_list_v4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v4.component */ 45095);
/* harmony import */ var _add_payment_add_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-payment/add-payment.component */ 85036);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../sales.endpoints */ 43155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/order.service */ 12271);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../components/breadcrumb/breadcrumb.component */ 43383);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);























function OrderListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("bar", true);
  }
}
function OrderListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, OrderListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, OrderListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "div", 18)(10, "div", 19)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](12, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function OrderListComponent_div_9_div_1_tr_41_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "img", 66);
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate"]("src", item_r8.order_items[0].product_image, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
  }
}
function OrderListComponent_div_9_div_1_tr_41_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r8.order_number.substring(0, 1).toUpperCase(), " ");
  }
}
function OrderListComponent_div_9_div_1_tr_41_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "span", 68)(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "small", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4, "Local");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("innerHTML", ctx_r11.customerInfo(item_r8.local_customer), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeHtml"]);
  }
}
function OrderListComponent_div_9_div_1_tr_41_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r8.customer_details.name);
  }
}
function OrderListComponent_div_9_div_1_tr_41_small_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "small", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, "Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_9_div_1_tr_41_small_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, "Partially Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_9_div_1_tr_41_small_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1, "Unpaid");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_9_div_1_tr_41_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const oi_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate3"](" ", oi_r28.product_name, " ( ", oi_r28.quantity, " x ", oi_r28.retail_price - oi_r28.discount / oi_r28.quantity, " )");
  }
}
function OrderListComponent_div_9_div_1_tr_41_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 73)(1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](2, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind2"](5, 1, item_r8.due_amount, "1.2-2"));
  }
}
function OrderListComponent_div_9_div_1_tr_41_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 60)(1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](2, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind2"](5, 1, item_r8.due_amount, "1.2-2"));
  }
}
function OrderListComponent_div_9_div_1_tr_41_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](1, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_9_div_1_tr_41_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](1, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_9_div_1_tr_41_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div")(1, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function OrderListComponent_div_9_div_1_tr_41_div_38_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r33);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r31.onFinishSaleClick(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](3, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "em", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](6, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
}
function OrderListComponent_div_9_div_1_tr_41_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function OrderListComponent_div_9_div_1_tr_41_button_42_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r36);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r34.onAddPaymentClick(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](2, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
}
function OrderListComponent_div_9_div_1_tr_41_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function OrderListComponent_div_9_div_1_tr_41_button_44_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r39);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r37.onCancelClick(item_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](2, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
}
function OrderListComponent_div_9_div_1_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "td")(4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](5, OrderListComponent_div_9_div_1_tr_41_img_5_Template, 1, 1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, OrderListComponent_div_9_div_1_tr_41_span_6_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](11, OrderListComponent_div_9_div_1_tr_41_span_11_Template, 5, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](12, OrderListComponent_div_9_div_1_tr_41_span_12_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "td")(14, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function OrderListComponent_div_9_div_1_tr_41_Template_a_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r41);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r40.onUpsertClick(item_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](17, OrderListComponent_div_9_div_1_tr_41_small_17_Template, 2, 0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](18, OrderListComponent_div_9_div_1_tr_41_small_18_Template, 2, 0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](19, OrderListComponent_div_9_div_1_tr_41_small_19_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](20, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](21, OrderListComponent_div_9_div_1_tr_41_span_21_Template, 3, 3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](22, "td")(23, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](24, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](27, "td")(28, "span", 60)(29, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](30, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](33, OrderListComponent_div_9_div_1_tr_41_span_33_Template, 6, 4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](34, OrderListComponent_div_9_div_1_tr_41_span_34_Template, 6, 4, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](35, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](36, OrderListComponent_div_9_div_1_tr_41_span_36_Template, 2, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](37, OrderListComponent_div_9_div_1_tr_41_span_37_Template, 2, 0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](38, OrderListComponent_div_9_div_1_tr_41_div_38_Template, 7, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](42, OrderListComponent_div_9_div_1_tr_41_button_42_Template, 3, 0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](44, OrderListComponent_div_9_div_1_tr_41_button_44_Template, 3, 0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r8.order_items.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r8.order_items.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](9, 21, item_r8.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r8.is_local);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !item_r8.is_local);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r8.order_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r8.due_amount === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r8.due_amount > 0 && item_r8.due_amount < item_r8.total_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r8.due_amount === item_r8.total_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", item_r8.order_items);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r8.total_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r8.paid_amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r8.due_amount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r8.due_amount == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r7.isCanceled(item_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r7.isConfirmed(item_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r7.isCanceled(item_r8) && !ctx_r7.isConfirmed(item_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r8.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r7.isCanceled(item_r8) && item_r8.due_amount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx_r7.isCanceled(item_r8));
  }
}
function OrderListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](5, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](7, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](9, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "div", 34)(11, "table", 35)(12, "thead")(13, "tr")(14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](15, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](17, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](19, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](21, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](23, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](25, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](27, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](29, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](31, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](33, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](35, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](37, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](39, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](40, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](41, OrderListComponent_div_9_div_1_tr_41_Template, 45, 23, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r5.orders.content);
  }
}
function OrderListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate"]("src", item_r43.order_items[0].product_image, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
  }
}
function OrderListComponent_div_9_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 108)(1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r43.order_number.substring(0, 1).toUpperCase(), " ");
  }
}
function OrderListComponent_div_9_div_2_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r43.local_customer == null ? null : item_r43.local_customer.name, " ");
  }
}
function OrderListComponent_div_9_div_2_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r43.customer_details.name);
  }
}
function OrderListComponent_div_9_div_2_div_1_small_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "small", 109)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](2, 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](5, 1, item_r43.updated_at), " ");
  }
}
function OrderListComponent_div_9_div_2_div_1_small_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "small", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](3, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_9_div_2_div_1_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r43.status);
  }
}
function OrderListComponent_div_9_div_2_div_1_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](1, 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 87)(1, "div", 88)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, OrderListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, OrderListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "h5", 91)(6, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function OrderListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r59);
      const item_r43 = restoredCtx.$implicit;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r58.onUpsertClick(item_r43.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "h6", 93)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](10, 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](11, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](12, OrderListComponent_div_9_div_2_div_1_span_12_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](13, OrderListComponent_div_9_div_2_div_1_span_13_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](14, "div", 0)(15, "div", 95)(16, "p", 96)(17, "small")(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](19, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](22, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](23, "div", 95)(24, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](25, OrderListComponent_div_9_div_2_div_1_small_25_Template, 6, 3, "small", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](26, OrderListComponent_div_9_div_2_div_1_small_26_Template, 6, 0, "small", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](29, "div")(30, "a", 100)(31, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](32, OrderListComponent_div_9_div_2_div_1_span_32_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](33, OrderListComponent_div_9_div_2_div_1_span_33_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](34, "div", 102)(35, "div", 103)(36, "div", 104)(37, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function OrderListComponent_div_9_div_2_div_1_Template_a_click_37_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r59);
      const item_r43 = restoredCtx.$implicit;
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r60.onCancelClick(item_r43.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](38, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](39, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](41, 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const item_r43 = ctx.$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r43.order_items.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r43.order_items.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r43.order_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r43.is_local);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !item_r43.is_local);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](22, 11, item_r43.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r43.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !item_r43.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx_r42.buildItemsStr(item_r43), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !item_r43.is_local);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r43.is_local);
  }
}
function OrderListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, OrderListComponent_div_9_div_2_div_1_Template, 42, 13, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r6.orders.content);
  }
}
function OrderListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, OrderListComponent_div_9_div_1_Template, 42, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, OrderListComponent_div_9_div_2_Template, 2, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.GRID);
  }
}
class OrderListComponent extends _base_components_base_list_v4_component__WEBPACK_IMPORTED_MODULE_6__.BaseListComponentV4 {
  componentName() {
    return "OrderListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, orderService, notifier, paymentDialog) {
    super(eventBus, router, subContainer, dialog);
    this.authService = authService;
    this.activatedRoute = activatedRoute;
    this.orderService = orderService;
    this.notifier = notifier;
    this.paymentDialog = paymentDialog;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.defaultOrderConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.defaultFilterData;
    this.orders = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    if (authService.isAdmin()) {
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfEndpoints.adminEndpoint;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.parseFilterData)(params);
      this.fetchOrders(this.authService.isAdmin(), {
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
      text: this.translations["Orders"],
      link: null,
      active: true
    }];
  }
  fetchOrders(asAdmin, params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.ORDERS.SEARCH(params));
    let url = asAdmin ? _sales_endpoints__WEBPACK_IMPORTED_MODULE_8__.SalesEndpoints.ORDERS.SEARCH_FOR_ADMIN(this.config.endpoint, params) : _sales_endpoints__WEBPACK_IMPORTED_MODULE_8__.SalesEndpoints.ORDERS.SEARCH_FOR_VENDOR(this.config.endpoint, params);
    this.orderService.search(key, url, params);
    this.subscribe(key, null, (value, meta) => {
      this.orders = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "Order is deleted");
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
    return _order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_4__.OrderUpsertComponent;
  }
  buildItemsStr(item) {
    return item.order_items.map(item => item.product_name).join(', ');
  }
  customerInfo(customer) {
    if (customer == null) return 'Walk-in-customer';else if (customer.name != null) return customer.name + '<br/>(' + customer.phone + ')';else return customer.phone;
  }
  onCancelClick(orderId) {
    if (!confirm("Are you sure you want to cancel this order?")) {
      return;
    }
    this.changeStatus(orderId, _models_order_model__WEBPACK_IMPORTED_MODULE_5__.OrderStatus.DELIVERY_FAILED);
  }
  changeStatus(orderId, status) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.ORDERS.CHANGE_ORDER_STATUS(orderId, status));
    this.orderService.changeStatus(key, orderId, status, null);
    this.subscribe(key, null, (value, meta) => {
      this.loading = false;
      this.notifier.success("Success", "Order has been canceled.");
      this.ngOnInit();
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  isCanceled(item) {
    return item.status === _models_order_model__WEBPACK_IMPORTED_MODULE_5__.OrderStatus.DELIVERY_FAILED;
  }
  isConfirmed(item) {
    return item.status === _models_order_model__WEBPACK_IMPORTED_MODULE_5__.OrderStatus.CONFIRMED;
  }
  onAddPaymentClick(order) {
    let dialogRef = this.paymentDialog.openWithConfig(_add_payment_add_payment_component__WEBPACK_IMPORTED_MODULE_7__.AddPaymentComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        id: order.id,
        dueAmount: order.due_amount,
        paymentAmount: order.due_amount,
        maxAmount: order.due_amount
      }
    });
    let component = dialogRef.componentInstance;
    component.onCanceled.subscribe(() => {
      dialogRef.close();
    });
    component.onCompleted.subscribe(() => {
      dialogRef.close();
      this.ngOnInit();
    });
  }
  onFinishSaleClick(item) {
    this.changeStatus(item.id, _models_order_model__WEBPACK_IMPORTED_MODULE_5__.OrderStatus.CONFIRMED);
  }
  static #_ = this.ɵfac = function OrderListComponent_Factory(t) {
    return new (t || OrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_9__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_10__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_11__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_12__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_13__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_14__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_12__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({
    type: OrderListComponent,
    selectors: [["app-order-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 8,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Stocks$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___5 = goog.getMsg("Stocks");
        i18n_4 = MSG_EXTERNAL_label_Stocks$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u09B8\u09CD\u099F\u0995";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_MySales$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___7 = goog.getMsg("My orders sold previously");
        i18n_6 = MSG_EXTERNAL_msg_MySales$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "\u09AA\u09C2\u09B0\u09CD\u09AC\u09C7 \u09AC\u09BF\u0995\u09CD\u09B0\u09DF \u0995\u09B0\u09BE \u0985\u09B0\u09CD\u09A1\u09BE\u09B0\u0997\u09C1\u09B2\u09CB";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___9 = goog.getMsg("Id");
        i18n_8 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "Id";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___11 = goog.getMsg("Image");
        i18n_10 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u099B\u09AC\u09BF";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Date$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___13 = goog.getMsg("Date");
        i18n_12 = MSG_EXTERNAL_label_Date$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09A4\u09BE\u09B0\u09BF\u0996";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Customer$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___15 = goog.getMsg("Customer");
        i18n_14 = MSG_EXTERNAL_label_Customer$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u0995\u09BE\u09B8\u09CD\u099F\u09AE\u09BE\u09B0";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Order$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___17 = goog.getMsg("Order");
        i18n_16 = MSG_EXTERNAL_label_Order$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u0985\u09B0\u09CD\u09A1\u09BE\u09B0";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Items$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___19 = goog.getMsg("Items");
        i18n_18 = MSG_EXTERNAL_label_Items$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u0986\u0987\u099F\u09C7\u09AE";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Total$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___21 = goog.getMsg("Total");
        i18n_20 = MSG_EXTERNAL_label_Total$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___21;
      } else {
        i18n_20 = "\u09AE\u09CB\u099F";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Paid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___23 = goog.getMsg("Paid");
        i18n_22 = MSG_EXTERNAL_label_Paid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___23;
      } else {
        i18n_22 = "\u09AA\u09B0\u09BF\u09B6\u09CB\u09A7\u09BF\u09A4";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Due$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___25 = goog.getMsg("Due");
        i18n_24 = MSG_EXTERNAL_label_Due$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___25;
      } else {
        i18n_24 = "\u09AC\u09BE\u0995\u09BF";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Status$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___27 = goog.getMsg("Status");
        i18n_26 = MSG_EXTERNAL_label_Status$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___27;
      } else {
        i18n_26 = "\u0985\u09AC\u09B8\u09CD\u09A5\u09BE";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Billed_By$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___29 = goog.getMsg("Billed by");
        i18n_28 = MSG_EXTERNAL_label_Billed_By$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___29;
      } else {
        i18n_28 = "\u09AC\u09BF\u09B2 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Payment$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___31 = goog.getMsg("Payment");
        i18n_30 = MSG_EXTERNAL_label_Payment$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___31;
      } else {
        i18n_30 = "\u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F";
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___33 = goog.getMsg("Cancel");
        i18n_32 = MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___33;
      } else {
        i18n_32 = "\u09AC\u09BE\u09A4\u09BF\u09B2";
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____35 = goog.getMsg("$");
        i18n_34 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____35;
      } else {
        i18n_34 = "\u09F3";
      }
      let i18n_36;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____37 = goog.getMsg("$");
        i18n_36 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____37;
      } else {
        i18n_36 = "\u09F3";
      }
      let i18n_38;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____39 = goog.getMsg("$");
        i18n_38 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____39;
      } else {
        i18n_38 = "\u09F3";
      }
      let i18n_40;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____41 = goog.getMsg("$");
        i18n_40 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____41;
      } else {
        i18n_40 = "\u09F3";
      }
      let i18n_42;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Canceled$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____43 = goog.getMsg("Canceled");
        i18n_42 = MSG_EXTERNAL_label_Canceled$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____43;
      } else {
        i18n_42 = "\u09AC\u09BE\u09A4\u09BF\u09B2 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_44;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Sold$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____45 = goog.getMsg("Sold");
        i18n_44 = MSG_EXTERNAL_label_Sold$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____45;
      } else {
        i18n_44 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_46;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_FinishSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____47 = goog.getMsg("Finish Sale");
        i18n_46 = MSG_EXTERNAL_label_FinishSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____47;
      } else {
        i18n_46 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09BF \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_48;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_FinishSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____49 = goog.getMsg("If you don't finish this sale, your stock will remain unchanged, this will result incorrect analysis.");
        i18n_48 = MSG_EXTERNAL_msg_FinishSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____49;
      } else {
        i18n_48 = "\n          \u098F\u0987 \u09AC\u09BF\u0995\u09CD\u09B0\u09DF\u099F\u09BF \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u0995\u09B0\u09A4\u09C7 \u0995\u09CD\u09B2\u09BF\u0995 \u0995\u09B0\u09C1\u09A8\u0964 \u09A8\u09DF\u09A4 \u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09CD\u099F\u0995 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09BF\u09A4 \u09B9\u09AC\u09C7 \u09A8\u09BE, \u098F\u099F\u09BF \u09AD\u09C1\u09B2 \u09AB\u09B2\u09BE\u09AB\u09B2 \u09A6\u09C7\u09AC\u09C7\u0964\n        ";
      }
      let i18n_50;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_AddPayment$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____51 = goog.getMsg("Add Payment");
        i18n_50 = MSG_EXTERNAL_label_AddPayment$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____51;
      } else {
        i18n_50 = "\u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_52;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____53 = goog.getMsg("Cancel");
        i18n_52 = MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____53;
      } else {
        i18n_52 = "\u09AC\u09BE\u09A4\u09BF\u09B2";
      }
      let i18n_54;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_By$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____55 = goog.getMsg("By");
        i18n_54 = MSG_EXTERNAL_label_By$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____55;
      } else {
        i18n_54 = "\u09A6\u09CD\u09AC\u09BE\u09B0\u09BE";
      }
      let i18n_56;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____57 = goog.getMsg("Created At");
        i18n_56 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____57;
      } else {
        i18n_56 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_58;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____59 = goog.getMsg("Cancel");
        i18n_58 = MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____59;
      } else {
        i18n_58 = "\u09AC\u09BE\u09A4\u09BF\u09B2";
      }
      let i18n_60;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____61 = goog.getMsg("Updated");
        i18n_60 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____61;
      } else {
        i18n_60 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_62;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____63 = goog.getMsg("Updated");
        i18n_62 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____63;
      } else {
        i18n_62 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_64;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Local$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____65 = goog.getMsg("Local");
        i18n_64 = MSG_EXTERNAL_label_Local$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____65;
      } else {
        i18n_64 = "\u09B8\u09CD\u09A5\u09BE\u09A8\u09C0\u09DF";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addBtnText", "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "/assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], ["routerLink", "/admin/sales/stocks", 1, "btn", "btn-primary", "float-end", "px-5", "mb-3", "font-size-16"], [1, "fa", "fa-cubes", "me-3"], i18n_4, [1, "card-title-desc"], i18n_6, [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, i18n_30, i18n_32, [4, "ngFor", "ngForOf"], [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], ["class", "badge bg-success", 4, "ngIf"], ["class", "badge bg-warning", 4, "ngIf"], ["class", "badge bg-danger", 4, "ngIf"], [1, "text-wrap"], [1, "me-1"], i18n_34, [1, "text", "text-success"], i18n_36, ["class", "text text-danger", 4, "ngIf"], ["class", "text text-success", 4, "ngIf"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-danger", 3, "click", 4, "ngIf"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [3, "innerHTML"], [1, "badge", "bg-info"], [1, "badge", "bg-success"], [1, "badge", "bg-warning"], [1, "badge", "bg-danger"], [1, "text", "text-danger"], i18n_38, i18n_40, i18n_42, i18n_44, [1, "btn", "btn-danger", 3, "click"], i18n_46, [1, "text-danger"], i18n_48, [1, "btn", "btn-outline-primary", 3, "click"], i18n_50, [1, "btn", "btn-outline-danger", 3, "click"], i18n_52, ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], [1, "font-size-10", "text-info"], i18n_54, [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], i18n_56, [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "bg-info", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-16"], [1, "flex-fill"], [1, "mdi", "mdi-cancel", "text-danger"], i18n_58, [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10"], i18n_60, i18n_62, i18n_64];
    },
    template: function OrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("layoutSelected", function OrderListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("addButtonClick", function OrderListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, OrderListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, OrderListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](9, OrderListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("title", ctx.translations["My Sales"])("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("addBtnText", "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.orders.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx.orders.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("page", ctx.orders);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_15__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_17__.BasicFilterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterLink, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_19__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 58818:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/orders/components/order-select/order-select.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderSelectComponent: () => (/* binding */ OrderSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order-upsert/order-upsert.component */ 59628);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/config.model */ 57813);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/order.service */ 12271);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);

















function OrderSelectComponent_util_progress_2_Template(rf, ctx) {
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
class OrderSelectComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  componentName() {
    return "OrderSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, orderService, popupService) {
    super(eventBus, router, subContainer);
    this.orderService = orderService;
    this.popupService = popupService;
    this.enableAdd = true;
    this.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_4__.selfEndpoints.endpoint;
    this.items = [];
    this.selectedItem = null;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    if (authService.isAdmin()) {
      this.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_4__.selfEndpoints.adminEndpoint;
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
    if (event == null) {
      this.selected.emit(null);
    } else if (this.items.find(c => c.order_number == event.order_number)) {
      this.selected.emit(this.selectedItem);
    } else {
      let popup = this.popupService.open(_order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_2__.OrderUpsertComponent, {
        id: null,
        dialogUpsert: true,
        title: event.title
      });
      popup.componentInstance.onCompleted.subscribe(order => {
        this.selected.emit(order);
      });
      popup.componentInstance.onCanceled.subscribe(() => {
        popup.close();
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.ORDERS.SEARCH(params));
    this.orderService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function OrderSelectComponent_Factory(t) {
    return new (t || OrderSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_8__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: OrderSelectComponent,
    selectors: [["app-order-select"]],
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
    consts: [["for", "order-select", 1, "visually-hidden"], [3, "bar", 4, "ngIf"], ["id", "order-select", "bindLabel", "order_number", "placeholder", "Search Order", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "keyup", "ngModelChange", "change"], [3, "bar"]],
    template: function OrderSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, OrderSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ng-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function OrderSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function OrderSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function OrderSelectComponent_Template_ng_select_change_3_listener($event) {
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__.ProgressComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 59628:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/orders/components/order-upsert/order-upsert.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderUpsertComponent: () => (/* binding */ OrderUpsertComponent)
/* harmony export */ });
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 57813);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/order.model */ 72551);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _utils_validation_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utils/validation.util */ 63674);
/* harmony import */ var _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v3.component */ 59890);
/* harmony import */ var _inventory_inventory_endpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../inventory/inventory.endpoints */ 82771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/order.service */ 12271);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _inventory_stocks_services_stock_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../inventory/stocks/services/stock.service */ 45789);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 11633);
/* harmony import */ var _inventory_stocks_components_stock_select_stock_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../inventory/stocks/components/stock-select/stock-select.component */ 74079);
/* harmony import */ var _customers_components_customer_select_customer_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../customers/components/customer-select/customer-select.component */ 18340);





















const _c0 = ["stockSelect"];
const _c1 = ["skuInput"];
function OrderUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "util-progress", 53);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bar", true);
  }
}
function OrderUpsertComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 1)(1, "div", 54)(2, "div", 55)(3, "div", 56)(4, "h1", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](7, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
  }
}
function OrderUpsertComponent_div_48_tr_31_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 93)(1, "em", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Only ", item_r9.availableQuantity, " is available");
  }
}
function OrderUpsertComponent_div_48_tr_31_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 79)(1, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 97)(4, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](5, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r12.calculateDiscount(item_r9));
  }
}
function OrderUpsertComponent_div_48_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td", 76)(4, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "td", 78)(7, "div", 79)(8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OrderUpsertComponent_div_48_tr_31_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const i_r10 = restoredCtx.index;
      const item_r9 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r15.onQtyChange(i_r10, item_r9.quantity - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 79)(11, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function OrderUpsertComponent_div_48_tr_31_Template_input_change_11_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const i_r10 = restoredCtx.index;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r17.onQtySetEvent(i_r10, $event));
    })("keyup", function OrderUpsertComponent_div_48_tr_31_Template_input_keyup_11_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const i_r10 = restoredCtx.index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r18.onQtySetEvent(i_r10, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, OrderUpsertComponent_div_48_tr_31_div_12_Template, 3, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 79)(14, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OrderUpsertComponent_div_48_tr_31_Template_a_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const i_r10 = restoredCtx.index;
      const item_r9 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r19.onQtyChange(i_r10, item_r9.quantity + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "td")(17, "div", 77)(18, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](19, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "td", 78)(23, "div", 79)(24, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OrderUpsertComponent_div_48_tr_31_Template_a_click_24_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const i_r10 = restoredCtx.index;
      const item_r9 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r20.onDiscountChange(i_r10, item_r9.discount - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](25, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 79)(27, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function OrderUpsertComponent_div_48_tr_31_Template_input_change_27_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const i_r10 = restoredCtx.index;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r21.onDiscountSetEvent(i_r10, $event));
    })("keyup", function OrderUpsertComponent_div_48_tr_31_Template_input_keyup_27_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const i_r10 = restoredCtx.index;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r22.onDiscountSetEvent(i_r10, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div", 79)(29, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OrderUpsertComponent_div_48_tr_31_Template_a_click_29_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const i_r10 = restoredCtx.index;
      const item_r9 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r23.onDiscountChange(i_r10, item_r9.discount + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, OrderUpsertComponent_div_48_tr_31_div_31_Template, 8, 1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "td", 89)(35, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](36, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "td")(40, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OrderUpsertComponent_div_48_tr_31_Template_button_click_40_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const i_r10 = restoredCtx.index;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r24.onDeleteItem(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](41, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](i_r10 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r9.stock.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", item_r9.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r9.quantity > item_r9.availableQuantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r9.stock.retail_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", item_r9.discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.calculateDiscount(item_r9) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r7.calculateSubtotal(item_r9));
  }
}
function OrderUpsertComponent_div_48_tr_32_strong_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "strong", 108)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](4, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "(Profit)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](6, 1, ctx_r25.calculateGrandTotal() - ctx_r25.totalUnitPrices(), "1.2-2"), " ");
  }
}
function OrderUpsertComponent_div_48_tr_32_strong_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "strong", 112)(1, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](2, 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "(Loss)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](4, 1, ctx_r26.calculateGrandTotal() - ctx_r26.totalUnitPrices(), "1.2-2"), " ");
  }
}
function OrderUpsertComponent_div_48_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "td", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "td")(3, "strong", 77)(4, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](5, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "td", 101)(9, "strong", 77)(10, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](11, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "td", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "td", 104)(17, "strong", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](18, 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, OrderUpsertComponent_div_48_tr_32_strong_22_Template, 10, 4, "strong", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, OrderUpsertComponent_div_48_tr_32_strong_23_Template, 8, 4, "strong", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r8.calculateTotal());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r8.calculateTotalDiscount());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r8.calculateGrandTotal());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r8.calculateGrandTotal() - ctx_r8.totalUnitPrices() > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r8.calculateGrandTotal() - ctx_r8.totalUnitPrices() <= 0);
  }
}
function OrderUpsertComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 1)(1, "div", 54)(2, "div", 61)(3, "div", 4)(4, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](5, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 64)(7, "table", 65)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](13, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](15, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](17, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "th")(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](20, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](25, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](27, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](29, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, OrderUpsertComponent_div_48_tr_31_Template, 42, 8, "tr", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](32, OrderUpsertComponent_div_48_tr_32_Template, 24, 5, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r4.cart);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.cart.length > 0);
  }
}
function OrderUpsertComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 37)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](2, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "input", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function OrderUpsertComponent_div_60_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r27.onPaymentAmountSet($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r5.paymentAmount);
  }
}
function OrderUpsertComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 116)(1, "div", 37)(2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](3, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 37)(6, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](7, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "input", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 37)(10, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](11, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 37)(14, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](15, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 125)(18, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](19, 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "textarea", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r6.calculateTotal());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r6.calculateTotalDiscount());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r6.calculateTotalTax());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", ctx_r6.calculateGrandTotal());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", true);
  }
}
const _c72 = function () {
  return ["/admin/sales/stocks"];
};
const _c73 = function () {
  return {
    dateInputFormat: "DD-MM-YYYY h:mm:ss a"
  };
};
class OrderUpsertComponent extends _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_4__.BaseUpsertComponentV3 {
  constructor(eventBus, router, subContainer, route, orderService, notifier, stockService, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.orderService = orderService;
    this.notifier = notifier;
    this.stockService = stockService;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.defaultOrderConfig;
    this.orderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
      local_customer: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, [])
      }),
      // cart_items: new FormArray([], Validators.required),
      date: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
      coupon_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      note: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      // extra
      customer_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      delivery_address_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      delivery_option_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      distance: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      is_local: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      payment_method: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      pickup_schedule_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, [])
    });
    this.selectedCustomer = null;
    this.selectedStock = null;
    this.selectedPaymentStatus = "PAID";
    this.paymentAmount = 0;
    this.showPaymentAmount = false;
    this.cart = [];
    if (dialogData.title != null) {
      // this.orderForm.controls.title.setValue(dialogData.title)
    }
  }
  ngOnInit() {
    super.ngOnInit();
  }
  componentName() {
    return "OrderUpsertComponent";
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Orders",
      link: "/admin/orders",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.ORDERS.GET(exId));
    this.orderService.fetchSingle(key, exId);
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
    if (!this.orderForm.valid) {
      return;
    }
    let req = this.orderForm.value;
    req.cart_items = this.cart.map(item => {
      return {
        stock_id: item.stock.id,
        quantity: item.quantity,
        discount: item.discount
      };
    });
    req.delivery_option_id = 1;
    req.payment_method = "STORE_PAYMENT";
    req.is_local = true;
    let customer = this.orderForm.controls.local_customer.value;
    // if phone isn't entered, customer is not needed
    if (customer.phone == null) {
      req.local_customer = null;
    } else {
      if (!_utils_validation_util__WEBPACK_IMPORTED_MODULE_3__.ValidationUtil.isValidPhone(customer.phone)) {
        this.notifier.warning("Invalid phone number", "Please enter a valid phone number");
        return;
      }
      req.local_customer = customer;
    }
    // If order isn't fully paid, then must select a customer
    if (this.selectedPaymentStatus !== 'PAID' && req.local_customer == null) {
      this.notifier.warning("Customer is required", "Unpaid order must have a customer. This will help you track the payment and get paid later on.", () => {}, 10000);
      return;
    }
    this.upsert(this.exId, req);
  }
  onStockSelected(stock) {
    if (stock == null) {
      return;
    }
    let item = {
      stock: stock,
      quantity: 1,
      availableQuantity: stock.quantity,
      discount: stock.discount_percentage
    };
    let existingIndex = this.cart.findIndex(c => c.stock.id == stock.id);
    console.log(existingIndex);
    if (existingIndex >= 0) {
      this.cart[existingIndex].quantity += 1;
    } else {
      this.cart.push(item);
    }
    this.stockSelect.clear();
  }
  getConfig() {
    return this.config;
  }
  getListPageRoute() {
    return _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfRoutes.list;
  }
  upsert(exId, req) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.ORDERS.UPSERT(exId));
    this.orderService.upsert(key, req, exId);
    this.subscribe(key, null, (value, meta) => {
      this.notifier.success("Success", "Order has been " + (exId ? "updated" : "created"));
      this.orderForm.reset();
      let orders = meta.data;
      orders.forEach(order => {
        this.resolvePayment(order);
      });
      this.cleanUpPageAndPrepareForNextOrder();
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  makePayment(id, amount, paymentMethod, onSuccess = () => {}) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.ORDERS.MAKE_PAYMENT(id));
    this.orderService.makePayment(key, id, amount, paymentMethod);
    this.subscribe(key, null, (value, meta) => {
      // this.notifier.success("Success", "Payment has been updated")
      this.loading = false;
      onSuccess();
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    // this.orderForm.controls.title.setValue(n.title)
    // this.orderForm.controls.description.setValue(n.description)
    // this.orderForm.controls.image.setValue(n.image == null ? null : n.image)
  }
  onCustomerSelected(customer) {
    this.selectedCustomer = customer;
    if (customer == null) {
      return;
    }
    this.orderForm.controls.local_customer.controls.name.setValue(customer.name);
    this.orderForm.controls.local_customer.controls.phone.setValue(customer.phone);
    this.orderForm.controls.local_customer.controls.email.setValue(customer.email);
  }
  onDeleteItem(index) {
    this.cart.splice(index, 1);
  }
  onQtyChange(index, qty) {
    let item = this.cart[index];
    item.quantity = qty;
    if (item.quantity < 1) {
      this.cart.splice(index, 1);
    }
  }
  onQtySetEvent(i, event) {
    let qty = event.target.value;
    this.onQtyChange(i, parseInt(qty));
  }
  onDiscountChange(index, discount) {
    if (discount < 0) discount = 0;
    if (discount > 100) discount = 100;
    this.cart[index].discount = discount;
  }
  onDiscountSetEvent(i, event) {
    let discountStr = event.target.value;
    if (discountStr == "") discountStr = "0";
    let discount = parseInt(discountStr);
    if (isNaN(discount)) discount = 0;
    this.onDiscountChange(i, discount);
  }
  calculateSubtotal(item, withDiscount = true) {
    let price = item.stock.retail_price * item.quantity;
    if (!withDiscount) {
      return price;
    }
    let discount = price * item.discount / 100;
    return price - discount;
  }
  calculateTotalDiscount() {
    return this.cart.reduce((a, b) => a + this.calculateDiscount(b), 0);
  }
  totalUnitPrices() {
    return this.cart.reduce((a, b) => a + b.stock.avg_unit_price * b.quantity, 0);
  }
  calculateDiscount(item) {
    return item.stock.retail_price * item.quantity * item.discount / 100;
  }
  calculateTotal() {
    return this.cart.reduce((a, b) => a + this.calculateSubtotal(b, false), 0);
  }
  calculateGrandTotal() {
    return this.cart.reduce((a, b) => a + this.calculateSubtotal(b, true), 0);
  }
  calculateTotalTax() {
    return 0;
  }
  onPaymentStatusSelected(event) {
    this.selectedPaymentStatus = event.target.value;
    switch (this.selectedPaymentStatus) {
      case "PAID":
        this.paymentAmount = this.calculateGrandTotal();
        break;
      case "PARTIALLY_PAID":
        this.paymentAmount = Math.round(this.calculateGrandTotal() / 2);
        break;
      case "UNPAID":
        this.paymentAmount = 0;
        break;
    }
    this.showPaymentAmount = this.selectedPaymentStatus === 'PARTIALLY_PAID';
    console.log(typeof this.selectedPaymentStatus);
  }
  onPaymentAmountSet(event) {
    let amountStr = event.target.value;
    if (amountStr == "") amountStr = "0";
    let amount = parseInt(amountStr);
    if (amount < 0) amount = 0;
    if (amount > this.calculateGrandTotal()) amount = this.calculateGrandTotal();
    this.paymentAmount = amount;
    console.log(this.paymentAmount);
  }
  resolvePayment(order) {
    if (this.selectedPaymentStatus === 'PAID') {
      this.makePayment(order.id, this.calculateGrandTotal(), 'STORE_PAYMENT');
    } else if (this.selectedPaymentStatus === 'PARTIALLY_PAID') {
      this.makePayment(order.id, this.paymentAmount, 'STORE_PAYMENT', () => {
        this.confirmOrder(order.id);
      });
    } else if (this.selectedPaymentStatus === 'UNPAID') {
      this.confirmOrder(order.id);
    }
  }
  confirmOrder(orderId) {
    this.loading = true;
    let status = _models_order_model__WEBPACK_IMPORTED_MODULE_2__.OrderStatus.CONFIRMED;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.ORDERS.CHANGE_ORDER_STATUS(orderId, status));
    this.orderService.changeStatus(key, orderId, status, null);
    this.subscribe(key, null, (value, meta) => {
      this.loading = false;
      // this.notifier.success("Success", "Order has been confirmed")
    });

    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  cleanUpPageAndPrepareForNextOrder() {
    this.cart = [];
    this.selectedCustomer = null;
    this.orderForm.controls.date.setValue(new Date());
    this.selectedPaymentStatus = "PAID";
    this.paymentAmount = 0;
  }
  onClear() {
    let confirmed = confirm('Are you sure you want to clear all items?');
    if (confirmed) {
      this.cart = [];
    }
  }
  selectBySku(sku) {
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.STOCKS.GET_BY_SKU(sku));
    this.stockService.fetchBySku(key, _inventory_inventory_endpoints__WEBPACK_IMPORTED_MODULE_5__.InventoryEndpoints.STOCKS.STOCK_ENDPOINT_V2, sku);
    this.subscribe(key, null, (value, meta) => {
      let stock = meta.data;
      this.onStockSelected(stock);
      this.skuInput.nativeElement.value = '';
    });
  }
  onSkuEntered(event) {
    let sku = event.target.value;
    this.selectBySku(sku);
  }
  static #_ = this.ɵfac = function OrderUpsertComponent_Factory(t) {
    return new (t || OrderUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_8__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_9__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_inventory_stocks_services_stock_service__WEBPACK_IMPORTED_MODULE_10__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: OrderUpsertComponent,
    selectors: [["app-order-upsert"]],
    viewQuery: function OrderUpsertComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.stockSelect = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.skuInput = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]],
    decls: 70,
    vars: 14,
    consts: function () {
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreateSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_3 = goog.getMsg("Create a Sale");
        i18n_2 = MSG_EXTERNAL_label_CreateSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09BF \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_MyStocks$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_5 = goog.getMsg("My Stocks");
        i18n_4 = MSG_EXTERNAL_label_MyStocks$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u0986\u09AE\u09BE\u09B0 \u09B8\u09CD\u099F\u0995";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_AllSales$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_7 = goog.getMsg("All Sales");
        i18n_6 = MSG_EXTERNAL_label_AllSales$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u09B8\u0995\u09B2 \u09AC\u09BF\u0995\u09CD\u09B0\u09BF";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Customer$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_9 = goog.getMsg("Customer");
        i18n_8 = MSG_EXTERNAL_label_Customer$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_9;
      } else {
        i18n_8 = "\u0995\u09BE\u09B8\u09CD\u099F\u09AE\u09BE\u09B0";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Date$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_11 = goog.getMsg("Date");
        i18n_10 = MSG_EXTERNAL_label_Date$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_11;
      } else {
        i18n_10 = "\u09A4\u09BE\u09B0\u09BF\u0996";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_searchStock$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_13 = goog.getMsg("Search Stock");
        i18n_12 = MSG_EXTERNAL_label_searchStock$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_13;
      } else {
        i18n_12 = "\u09B8\u09CD\u099F\u0995 \u0996\u09C1\u0981\u099C\u09C1\u09A8";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Date$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_15 = goog.getMsg("SKU");
        i18n_14 = MSG_EXTERNAL_label_Date$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_15;
      } else {
        i18n_14 = "\u09A4\u09BE\u09B0\u09BF\u0996";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_PaymentStatus$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_17 = goog.getMsg("Payment Status");
        i18n_16 = MSG_EXTERNAL_PaymentStatus$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_17;
      } else {
        i18n_16 = "\u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F\u09C7\u09B0 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Paid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_19 = goog.getMsg("Paid");
        i18n_18 = MSG_EXTERNAL_label_Paid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_19;
      } else {
        i18n_18 = "\u09AA\u09B0\u09BF\u09B6\u09CB\u09A7\u09BF\u09A4";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_PartiallyPaid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_21 = goog.getMsg("Partially Paid");
        i18n_20 = MSG_EXTERNAL_label_PartiallyPaid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_21;
      } else {
        i18n_20 = "\u0986\u0982\u09B6\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u09AA\u09B0\u09BF\u09B6\u09CB\u09A7\u09BF\u09A4";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Unpaid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_23 = goog.getMsg("Unpaid");
        i18n_22 = MSG_EXTERNAL_label_Unpaid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_23;
      } else {
        i18n_22 = "\u0985\u09AA\u09B0\u09BF\u09B6\u09CB\u09A7\u09BF\u09A4";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Clear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_25 = goog.getMsg("Clear");
        i18n_24 = MSG_EXTERNAL_label_Clear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_25;
      } else {
        i18n_24 = "\u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_AddItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__27 = goog.getMsg(" Add items to sell ");
        i18n_26 = MSG_EXTERNAL_msg_AddItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__27;
      } else {
        i18n_26 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09BF\u09B0 \u099C\u09A8\u09CD\u09AF \u0986\u0987\u099F\u09C7\u09AE \u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_CartItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__29 = goog.getMsg("Cart Items");
        i18n_28 = MSG_EXTERNAL_CartItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__29;
      } else {
        i18n_28 = "\u0995\u09BE\u09B0\u09CD\u099F\u09C7\u09B0 \u0986\u0987\u099F\u09C7\u09AE";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_ProductName$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__31 = goog.getMsg("Product Name");
        i18n_30 = MSG_EXTERNAL_label_ProductName$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__31;
      } else {
        i18n_30 = "\u09AA\u09A3\u09CD\u09AF\u09C7\u09B0 \u09A8\u09BE\u09AE";
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Quantity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__33 = goog.getMsg("Quantity");
        i18n_32 = MSG_EXTERNAL_label_Quantity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__33;
      } else {
        i18n_32 = "\u09AA\u09B0\u09BF\u09AE\u09BE\u09A3";
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Price$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__35 = goog.getMsg("Price");
        i18n_34 = MSG_EXTERNAL_label_Price$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__35;
      } else {
        i18n_34 = "\u09AE\u09C2\u09B2\u09CD\u09AF";
      }
      let i18n_36;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Discount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__37 = goog.getMsg("Discount");
        i18n_36 = MSG_EXTERNAL_label_Discount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__37;
      } else {
        i18n_36 = "\u09A1\u09BF\u09B8\u0995\u09BE\u0989\u09A8\u09CD\u099F";
      }
      let i18n_38;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Tax$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__39 = goog.getMsg("Tax");
        i18n_38 = MSG_EXTERNAL_label_Tax$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__39;
      } else {
        i18n_38 = "\u099F\u09CD\u09AF\u09BE\u0995\u09CD\u09B8";
      }
      let i18n_40;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Subtotal$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__41 = goog.getMsg("Subtotal");
        i18n_40 = MSG_EXTERNAL_label_Subtotal$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__41;
      } else {
        i18n_40 = "\u09B8\u09BE\u09AC\u099F\u09CB\u099F\u09BE\u09B2";
      }
      let i18n_42;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__43 = goog.getMsg("Delete");
        i18n_42 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__43;
      } else {
        i18n_42 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_44;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___45 = goog.getMsg("$");
        i18n_44 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___45;
      } else {
        i18n_44 = "\u09F3";
      }
      let i18n_46;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___47 = goog.getMsg("$");
        i18n_46 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___47;
      } else {
        i18n_46 = "\u09F3";
      }
      let i18n_48;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____49 = goog.getMsg("$");
        i18n_48 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____49;
      } else {
        i18n_48 = "\u09F3";
      }
      let i18n_50;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___51 = goog.getMsg("$");
        i18n_50 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___51;
      } else {
        i18n_50 = "\u09F3";
      }
      let i18n_52;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___53 = goog.getMsg("$");
        i18n_52 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___53;
      } else {
        i18n_52 = "\u09F3";
      }
      let i18n_54;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___55 = goog.getMsg("$");
        i18n_54 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___55;
      } else {
        i18n_54 = "\u09F3";
      }
      let i18n_56;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____57 = goog.getMsg("$");
        i18n_56 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____57;
      } else {
        i18n_56 = "\u09F3";
      }
      let i18n_58;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____59 = goog.getMsg("$");
        i18n_58 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____59;
      } else {
        i18n_58 = "\u09F3";
      }
      let i18n_60;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_PaymentAmount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__61 = goog.getMsg("Payment Amount");
        i18n_60 = MSG_EXTERNAL_label_PaymentAmount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__61;
      } else {
        i18n_60 = "\u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F\u09C7\u09B0 \u09AA\u09B0\u09BF\u09AE\u09BE\u09A3";
      }
      let i18n_62;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_TotalPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__63 = goog.getMsg("Total Price");
        i18n_62 = MSG_EXTERNAL_label_TotalPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__63;
      } else {
        i18n_62 = "\u09AE\u09CB\u099F \u09AE\u09C2\u09B2\u09CD\u09AF";
      }
      let i18n_64;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_TotalDiscount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__65 = goog.getMsg("Total Discount");
        i18n_64 = MSG_EXTERNAL_label_TotalDiscount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__65;
      } else {
        i18n_64 = "\u09AE\u09CB\u099F \u09A1\u09BF\u09B8\u0995\u09BE\u0989\u09A8\u09CD\u099F";
      }
      let i18n_66;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Tax$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__67 = goog.getMsg("Tax");
        i18n_66 = MSG_EXTERNAL_label_Tax$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__67;
      } else {
        i18n_66 = "\u099F\u09CD\u09AF\u09BE\u0995\u09CD\u09B8";
      }
      let i18n_68;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_GrandTotal$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__69 = goog.getMsg("Grand Total");
        i18n_68 = MSG_EXTERNAL_label_GrandTotal$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__69;
      } else {
        i18n_68 = "\u09B8\u09B0\u09CD\u09AC\u09AE\u09CB\u099F";
      }
      let i18n_70;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Note$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__71 = goog.getMsg("Note");
        i18n_70 = MSG_EXTERNAL_label_Note$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_ADMIN_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__71;
      } else {
        i18n_70 = "\u09A8\u09CB\u099F";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-3"], [1, "col-sm-6"], [1, "card-title", "mb-4"], i18n_2, [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-outline-info", "waves-effect", 3, "routerLink"], [1, "mdi", "mdi-barcode", "font-size-16", "me-2"], i18n_4, [1, "btn", "btn-outline-primary", "waves-effect", 3, "click"], [1, "mdi", "mdi-truck-delivery", "font-size-16", "me-2"], i18n_6, [3, "formGroup"], [1, "col-sm-6", "mb-3"], ["for", "customer-input", 1, "form-label"], i18n_8, ["id", "customer-input", 3, "selectedItem", "selected"], ["for", "date-input", 1, "form-label"], i18n_10, [1, "error"], ["id", "date-input", 1, "input-group"], ["bsDatepicker", "", "id", "toDate", "formControlName", "date", 1, "form-control", 3, "bsConfig"], [1, "col-sm-8", "mb-3"], ["for", "stock-select", 1, "form-label"], i18n_12, ["id", "stock-select", 3, "selectedItem", "selected"], ["stockSelect", ""], [1, "col-sm-4", "mb-3"], i18n_14, ["id", "sku-input", 1, "input-group"], ["placeholder", "Enter SKU", "type", "text", "autofocus", "", 1, "form-control", 3, "change"], ["skuInput", ""], ["class", "row", 4, "ngIf"], [1, "col-6", "col-sm-3", "col-md-2", "mb-3"], i18n_16, [1, "form-select", "font-size-16", 3, "change"], ["value", "PAID"], i18n_18, ["value", "PARTIALLY_PAID"], i18n_20, ["value", "UNPAID"], i18n_22, ["class", "col-6 col-sm-3 col-md-2 mb-3", 4, "ngIf"], ["class", "row visually-hidden", 4, "ngIf"], ["type", "button", 1, "btn", "btn-lg", "btn-outline-danger", "waves-effect", 3, "click"], [1, "mdi", "mdi-cancel", "d-block", "font-size-16"], i18n_24, ["type", "button", 1, "btn", "btn-lg", "btn-success", "waves-effect", "waves-light", 3, "ngClass", "click"], [1, "mdi", "mdi-sale", "d-block", "font-size-16"], [3, "bar"], [1, "col-12"], [1, "col-lg-12", "py-5", "my-3", "background-image-container"], [1, "text-center"], [1, "display-2", "fw-medium"], [1, "bx", "bx-cart-alt", "text-primary", "display-3"], [1, "text-primary"], i18n_26, [1, "card", "shadow-sm"], [1, "card-title-desc"], i18n_28, [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-bordered", "table-condensed"], i18n_30, i18n_32, i18n_34, i18n_36, [1, "mdi", "mdi-percent", "text-warning-emphasis", "ms-1"], i18n_38, i18n_40, i18n_42, [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "text-wrap"], [1, "font-size-16"], [1, "row", "align-items-center", "min-width-column"], [1, "col-sm-auto"], ["href", "javascript: void(0);", 1, "text-muted", "font-size-24", 3, "click"], [1, "mdi", "mdi-minus-circle", "text-danger"], ["min", "1", "max", "10000", "type", "number", 1, "form-control", "num-input", "font-size-16", 3, "value", "change", "keyup"], ["class", "mt-2", 4, "ngIf"], [1, "mdi", "mdi-plus-circle", "text-success"], [1, "me-1"], i18n_44, ["min", "0", "max", "100", "type", "number", 1, "form-control", "num-input", "font-size-16", 3, "value", "change", "keyup"], ["class", "col-sm-auto", 4, "ngIf"], [1, "font-size-16", "text-success"], i18n_46, ["type", "button", 1, "btn", "btn-danger", "btn-sm", "waves-effect", "waves-light", 3, "click"], [1, "mdi", "mdi-trash-can"], [1, "mt-2"], [1, "text", "text-danger"], ["href", "javascript: void(0);", 1, "text-muted", "font-size-16"], [1, "mdi", "mdi-equal"], [1, "font-size-16", "ms-2"], i18n_48, ["colspan", "3", 1, "text-end"], i18n_50, [1, "text-secondary", "text-decoration-line-through"], i18n_52, [1, "text-end"], [1, "font-size-16", "text-bg-success"], i18n_54, ["class", "text-success", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-success"], [1, "mdi", "mdi-plus", "font-size-16"], [1, "mx-1"], i18n_56, [1, "text-danger"], i18n_58, i18n_60, ["type", "number", 1, "form-control", "form-control-lg", 3, "value", "change"], [1, "row", "visually-hidden"], i18n_62, ["type", "text", 1, "form-control", "text-bg-info", "font-size-16", 3, "disabled", "value"], i18n_64, ["type", "text", 1, "form-control", "text-bg-warning", "font-size-16", 3, "disabled", "value"], i18n_66, ["type", "text", 1, "form-control", "text-bg-secondary", "font-size-16", 3, "disabled", "value"], i18n_68, ["type", "text", 1, "form-control", "text-bg-success", "font-size-16", 3, "disabled", "value"], [1, "col-sm-3", "col-md-4", "mb-3"], i18n_70, ["rows", "3", "formControlName", "note", 1, "form-control"]];
    },
    template: function OrderUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, OrderUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](8, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 6)(10, "div", 9)(11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](14, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OrderUpsertComponent_Template_button_click_15_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](18, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "form", 16)(20, "div", 1)(21, "div", 17)(22, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](23, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "app-customer-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function OrderUpsertComponent_Template_app_customer_select_selected_24_listener($event) {
          return ctx.onCustomerSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 17)(26, "label", 21)(27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](28, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "em", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](32, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "div", 1)(34, "div", 26)(35, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](36, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "app-stock-select", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function OrderUpsertComponent_Template_app_stock_select_selected_37_listener($event) {
          return ctx.onStockSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "div", 31)(40, "label", 21)(41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](42, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 33)(44, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function OrderUpsertComponent_Template_input_change_44_listener($event) {
          return ctx.onSkuEntered($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](47, OrderUpsertComponent_div_47_Template, 8, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](48, OrderUpsertComponent_div_48_Template, 33, 2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "div", 1)(50, "div", 37)(51, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](52, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function OrderUpsertComponent_Template_select_change_53_listener($event) {
          return ctx.onPaymentStatusSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](55, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](57, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](59, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](60, OrderUpsertComponent_div_60_Template, 4, 1, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](61, OrderUpsertComponent_div_61_Template, 21, 8, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "div", 9)(63, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OrderUpsertComponent_Template_button_click_63_listener() {
          return ctx.onClear();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](64, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](66, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function OrderUpsertComponent_Template_button_click_67_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](68, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](69, " Complete Sale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](12, _c72));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.orderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("selectedItem", ctx.selectedCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](13, _c73));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("selectedItem", ctx.selectedStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.cart.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.cart.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.showPaymentAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.cart.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx.cart.length > 0 && ctx.orderForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__.ProgressComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__.BsDatepickerInputDirective, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _inventory_stocks_components_stock_select_stock_select_component__WEBPACK_IMPORTED_MODULE_12__.StockSelectComponent, _customers_components_customer_select_customer_select_component__WEBPACK_IMPORTED_MODULE_13__.CustomerSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe],
    styles: [".background-image-container[_ngcontent-%COMP%] {\n  \n\n  background-image: url(\"/assets/img/background.svg\");\n  background-size: cover; \n\n  background-position: center center; \n\n  \n\n}\n\n.num-input[_ngcontent-%COMP%] {\n  min-width: 50px;\n  font-weight: bold;\n  max-width: 150px;\n}\n\n.min-width-column[_ngcontent-%COMP%] {\n  min-width: 250px;\n  max-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi9kb21haW5zL3NhbGVzL29yZGVycy9jb21wb25lbnRzL29yZGVyLXVwc2VydC9vcmRlci11cHNlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5REFBQTtFQUNBLG1EQUFBO0VBQ0Esc0JBQUEsRUFBQSx5Q0FBQTtFQUNBLGtDQUFBLEVBQUEsaUVBQUE7RUFDQSxvREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWltYWdlLWNvbnRhaW5lciB7XG4gIC8qIFNwZWNpZnkgdGhlIGltYWdlIFVSTCBhbmQgb3RoZXIgcHJvcGVydGllcyBhcyBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnN2ZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBBZGp1c3QgdGhlIGJhY2tncm91bmQgc2l6ZSBhcyBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgLyogQ2VudGVyIHRoZSBiYWNrZ3JvdW5kIGltYWdlIGJvdGggaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5ICovXG4gIC8qIEFkZCBhbnkgb3RoZXIgc3R5bGVzIHlvdSB3YW50IGZvciB0aGUgY29udGFpbmVyICovXG59XG5cbi5udW0taW5wdXR7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5taW4td2lkdGgtY29sdW1uIHtcbiAgbWluLXdpZHRoOiAyNTBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 57813:
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/orders/models/config.model.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOrderConfig: () => (/* binding */ defaultOrderConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/breadcrumb/breadcrumb.model */ 46405);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 43155);


let defaultOrderConfig = {
  defaultLayout: _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.COLUMN,
  upsertOnDialog: false,
  showUserFilter: false,
  showDeleteButton: true,
  endpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ORDERS.ORDER_ENDPOINT,
  delEndpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ORDERS.ORDER_ENDPOINT
};
let selfEndpoints = {
  endpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ORDERS.ORDER_ENDPOINT,
  adminEndpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ORDERS.ORDER_ENDPOINT_ADMIN
};
let selfRoutes = {
  list: "/admin/sales/orders",
  create: "/admin/sales/orders/create",
  update(id) {
    return id == null ? this.create : "/admin/sales/orders/" + id + '/update';
  }
};

/***/ }),

/***/ 72551:
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/orders/models/order.model.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderStatus: () => (/* binding */ OrderStatus),
/* harmony export */   PaymentStatus: () => (/* binding */ PaymentStatus)
/* harmony export */ });
var PaymentStatus;
(function (PaymentStatus) {
  PaymentStatus["UNPAID"] = "UNPAID";
  PaymentStatus["PARTIALLY_PAID"] = "PARTIALLY_PAID";
  PaymentStatus["PAID"] = "PAID";
  PaymentStatus["NOT_APPLICABLE"] = "NOT_APPLICABLE";
})(PaymentStatus || (PaymentStatus = {}));
var OrderStatus;
(function (OrderStatus) {
  OrderStatus["PENDING"] = "PENDING";
  OrderStatus["PROCESSING"] = "PROCESSING";
  OrderStatus["CANCELLED"] = "CANCELLED";
  OrderStatus["CONFIRMED"] = "CONFIRMED";
  OrderStatus["SHIPPED"] = "SHIPPED";
  OrderStatus["DELIVERED"] = "DELIVERED";
  OrderStatus["DELIVERY_FAILED"] = "DELIVERY_FAILED";
  OrderStatus["NOT_APPLICABLE"] = "NOT_APPLICABLE";
})(OrderStatus || (OrderStatus = {}));

/***/ }),

/***/ 54097:
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/orders/order.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderComponent: () => (/* binding */ OrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/order-list/order-list.component */ 73017);


class OrderComponent {
  static #_ = this.ɵfac = function OrderComponent_Factory(t) {
    return new (t || OrderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: OrderComponent,
    selectors: [["app-order"]],
    decls: 1,
    vars: 0,
    template: function OrderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-order-list");
      }
    },
    dependencies: [_components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_0__.OrderListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 12271:
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/orders/services/order.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderService: () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 43155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class OrderService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, url, params) {
    // let url = SalesEndpoints.ORDERS.SEARCH(endpoint, params)
    this.http.get(url).subscribe(order => {
      this.eventBusService.publish(key, order);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, url, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, id) {
    this.http.get(_sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ORDERS.GET(id)).subscribe(order => {
      this.eventBusService.publish(key, order);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, orderReq, exId) {
    let endpoint = exId == null ? _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ORDERS.CREATE() : _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ORDERS.UPDATE(exId);
    let observable = exId == null ? this.http.post(endpoint, orderReq) : this.http.patch(endpoint, orderReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, orderReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  makePayment(key, orderId, amount, paymentMethod) {
    let endpoint = _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ORDERS.MAKE_PAYMENT(orderId, {
      amount: amount,
      pay_with: paymentMethod
    });
    this.http.get(endpoint).subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.makePayment(key, orderId, amount, paymentMethod);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  changeStatus(key, orderId, status, note = null) {
    let endpoint = _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ORDERS.CHANGE_STATUS(orderId, {
      order_id: orderId,
      status: status,
      note: note
    });
    this.http.patch(endpoint, {}).subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.changeStatus(key, orderId, status, note);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function OrderService_Factory(t) {
    return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: OrderService,
    factory: OrderService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 43155:
/*!****************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/sales.endpoints.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesEndpoints: () => (/* binding */ SalesEndpoints)
/* harmony export */ });
/* harmony import */ var _base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../base/endpoints/base.endpoint */ 92495);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ 20553);


class SalesEndpoints extends _base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint {
  static #_ = this.ORDERS = {
    ORDER_ENDPOINT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/orders',
    ORDER_ENDPOINT_ADMIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/admin/orders',
    SEARCH_FOR_VENDOR(endpoint, params) {
      return endpoint.concat("/vendor-orders").concat(_base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params));
    },
    SEARCH_FOR_ADMIN(endpoint, params) {
      return endpoint.concat(_base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params));
    },
    CREATE() {
      return this.ORDER_ENDPOINT;
    },
    GET(id) {
      return this.ORDER_ENDPOINT + '/' + id;
    },
    UPDATE(id) {
      return this.ORDER_ENDPOINT + '/' + id;
    },
    MAKE_PAYMENT(id, params) {
      return this.ORDER_ENDPOINT + '/' + id + '/pay' + _base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params);
    },
    CHANGE_STATUS(id, params) {
      return this.ORDER_ENDPOINT + '/' + id + '/change-status' + _base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params);
    }
  };
  static #_2 = this.CUSTOMERS = {
    CUSTOMER_ENDPOINT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v2/customers',
    CUSTOMER_ENDPOINT_ADMIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v2/admin/customers',
    SEARCH(endpoint, params) {
      return endpoint.concat(_base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint.toParamString(params));
    },
    CREATE() {
      return this.CUSTOMER_ENDPOINT;
    },
    GET(endpoint, id) {
      return endpoint + '/' + id;
    },
    UPDATE(id) {
      return this.CUSTOMER_ENDPOINT + '/' + id;
    }
  };
}

/***/ }),

/***/ 30253:
/*!*************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/sales.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesModule: () => (/* binding */ SalesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/modules/utility/utility.module */ 7151);
/* harmony import */ var _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/modules/cms/cms.module */ 68709);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);
/* harmony import */ var _users_user_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/user.module */ 98847);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 11633);
/* harmony import */ var _orders_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders/order.component */ 54097);
/* harmony import */ var _orders_components_order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders/components/order-upsert/order-upsert.component */ 59628);
/* harmony import */ var _orders_components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders/components/order-list/order-list.component */ 73017);
/* harmony import */ var _sales_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sales.route */ 47818);
/* harmony import */ var _admin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../admin.module */ 33083);
/* harmony import */ var _orders_components_order_select_order_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orders/components/order-select/order-select.component */ 58818);
/* harmony import */ var _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../inventory/inventory.module */ 22451);
/* harmony import */ var _customers_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customers/customer.component */ 34113);
/* harmony import */ var _customers_components_customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customers/components/customer-upsert/customer-upsert.component */ 30150);
/* harmony import */ var _customers_components_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customers/components/customer-list/customer-list.component */ 46512);
/* harmony import */ var _customers_components_customer_select_customer_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customers/components/customer-select/customer-select.component */ 18340);
/* harmony import */ var _orders_components_add_payment_add_payment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orders/components/add-payment/add-payment.component */ 85036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 61699);




















class SalesModule {
  static #_ = this.ɵfac = function SalesModule_Factory(t) {
    return new (t || SalesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
    type: SalesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_0__.UtilityModule, _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_1__.CmsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _users_user_module__WEBPACK_IMPORTED_MODULE_2__.UserModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__.BsDatepickerModule, _sales_route__WEBPACK_IMPORTED_MODULE_6__.SalesRoute, _admin_module__WEBPACK_IMPORTED_MODULE_7__.AdminModule, _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_9__.InventoryModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](SalesModule, {
    declarations: [_orders_order_component__WEBPACK_IMPORTED_MODULE_3__.OrderComponent, _orders_components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_5__.OrderListComponent, _orders_components_order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_4__.OrderUpsertComponent, _orders_components_order_select_order_select_component__WEBPACK_IMPORTED_MODULE_8__.OrderSelectComponent, _customers_customer_component__WEBPACK_IMPORTED_MODULE_10__.CustomerComponent, _customers_components_customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_11__.CustomerUpsertComponent, _customers_components_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_12__.CustomerListComponent, _customers_components_customer_select_customer_select_component__WEBPACK_IMPORTED_MODULE_13__.CustomerSelectComponent, _orders_components_add_payment_add_payment_component__WEBPACK_IMPORTED_MODULE_14__.AddPaymentComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_0__.UtilityModule, _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_1__.CmsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _users_user_module__WEBPACK_IMPORTED_MODULE_2__.UserModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__.BsDatepickerModule, _sales_route__WEBPACK_IMPORTED_MODULE_6__.SalesRoute, _admin_module__WEBPACK_IMPORTED_MODULE_7__.AdminModule, _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_9__.InventoryModule]
  });
})();

/***/ }),

/***/ 47818:
/*!************************************************************!*\
  !*** ./src/app/modules/admin/domains/sales/sales.route.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesRoute: () => (/* binding */ SalesRoute)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _orders_order_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders/order.component */ 54097);
/* harmony import */ var _orders_components_order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders/components/order-upsert/order-upsert.component */ 59628);
/* harmony import */ var _customers_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers/customer.component */ 34113);
/* harmony import */ var _customers_components_customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers/components/customer-upsert/customer-upsert.component */ 30150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







const routes = [{
  path: "orders",
  component: _orders_order_component__WEBPACK_IMPORTED_MODULE_0__.OrderComponent
}, {
  path: "orders/:id",
  component: _orders_components_order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_1__.OrderUpsertComponent
}, {
  path: "orders/create",
  component: _orders_components_order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_1__.OrderUpsertComponent
}, {
  path: "customers",
  component: _customers_customer_component__WEBPACK_IMPORTED_MODULE_2__.CustomerComponent
}, {
  path: "customers/:id",
  component: _customers_components_customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_3__.CustomerUpsertComponent
}, {
  path: "customers/create",
  component: _customers_components_customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_3__.CustomerUpsertComponent
}];
class SalesRoute {
  static #_ = this.ɵfac = function SalesRoute_Factory(t) {
    return new (t || SalesRoute)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: SalesRoute
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SalesRoute, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_admin_domains_sales_sales_module_ts.js.map