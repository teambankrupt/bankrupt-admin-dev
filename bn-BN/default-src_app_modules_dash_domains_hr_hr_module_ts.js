"use strict";
(self["webpackChunkbankrupt_frontend"] = self["webpackChunkbankrupt_frontend"] || []).push([["default-src_app_modules_dash_domains_hr_hr_module_ts"],{

/***/ 82794:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/hr/employees/components/employee-list/employee-list.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeListComponent: () => (/* binding */ EmployeeListComponent)
/* harmony export */ });
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 70194);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _employee_upsert_employee_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employee-upsert/employee-upsert.component */ 37562);
/* harmony import */ var _organizations_components_org_base_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../organizations/components/org-base-list.component */ 75801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/employee.service */ 18249);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);






















function EmployeeListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("bar", true);
  }
}
function EmployeeListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function EmployeeListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function EmployeeListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, EmployeeListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, EmployeeListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
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
function EmployeeListComponent_div_9_div_1_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function EmployeeListComponent_div_9_div_1_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function EmployeeListComponent_div_9_div_1_tr_33_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "img", 52);
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", item_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}
function EmployeeListComponent_div_9_div_1_tr_33_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r10.name.substring(0, 1).toUpperCase(), " ");
  }
}
const _c26 = function (a1) {
  return ["/dash/organizations", a1, "update"];
};
function EmployeeListComponent_div_9_div_1_tr_33_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td")(1, "a", 54)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](2, _c26, item_r10.org_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.org_name);
  }
}
function EmployeeListComponent_div_9_div_1_tr_33_td_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 48)(1, "app-delete", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function EmployeeListComponent_div_9_div_1_tr_33_td_30_Template_app_delete_deleteItemEvent_1_listener($event) {
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
function EmployeeListComponent_div_9_div_1_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "td")(4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, EmployeeListComponent_div_9_div_1_tr_33_img_5_Template, 1, 1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, EmployeeListComponent_div_9_div_1_tr_33_span_6_Template, 2, 1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "td")(8, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function EmployeeListComponent_div_9_div_1_tr_33_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r22);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r21.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, EmployeeListComponent_div_9_div_1_tr_33_td_10_Template, 4, 4, "td", 7);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "td", 48)(28, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function EmployeeListComponent_div_9_div_1_tr_33_Template_a_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r22);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r23.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](30, EmployeeListComponent_div_9_div_1_tr_33_td_30_Template, 2, 1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r10.image != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r10.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r9.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r10.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r9.StringUtil.takeOnly(item_r10.description, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](22, 12, item_r10.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](26, 14, item_r10.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r9.config.showDeleteButton);
  }
}
function EmployeeListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Employees that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 30)(7, "table", 31)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](13, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](15, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, EmployeeListComponent_div_9_div_1_th_16_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](18, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](20, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](22, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](24, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](26, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](28, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](30, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](31, EmployeeListComponent_div_9_div_1_th_31_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](33, EmployeeListComponent_div_9_div_1_tr_33_Template, 31, 16, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r5.employees.content);
  }
}
function EmployeeListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", item_r25.image, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}
function EmployeeListComponent_div_9_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 76)(1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r25.name.substring(0, 1).toUpperCase(), " ");
  }
}
function EmployeeListComponent_div_9_div_2_div_1_h6_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h6", 77)(1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](2, _c26, item_r25.org_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r25.org_name, " ");
  }
}
function EmployeeListComponent_div_9_div_2_div_1_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 78)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "Updated");
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
function EmployeeListComponent_div_9_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function EmployeeListComponent_div_9_div_2_div_1_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 72)(1, "app-delete", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function EmployeeListComponent_div_9_div_2_div_1_div_33_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r36.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r31.config.delEndpoint + "/" + item_r25.id)("look", "bx");
  }
}
function EmployeeListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 57)(1, "div", 58)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, EmployeeListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, EmployeeListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "h5", 61)(6, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function EmployeeListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r40);
      const item_r25 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r39.onUpsertClick(item_r25.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, EmployeeListComponent_div_9_div_2_div_1_h6_8_Template, 3, 4, "h6", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 0)(10, "div", 64)(11, "p", 65)(12, "small")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](17, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "div", 64)(19, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, EmployeeListComponent_div_9_div_2_div_1_small_20_Template, 6, 3, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, EmployeeListComponent_div_9_div_2_div_1_small_21_Template, 6, 0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "div")(25, "a", 68)(26, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](28, "div", 70)(29, "div", 71)(30, "div", 72)(31, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function EmployeeListComponent_div_9_div_2_div_1_Template_a_click_31_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r40);
      const item_r25 = restoredCtx.$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r41.onUpsertClick(item_r25.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](33, EmployeeListComponent_div_9_div_2_div_1_div_33_Template, 2, 2, "div", 74);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r24.config.showUserFilter && item_r25.org_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](17, 10, item_r25.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r25.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !item_r25.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r24.StringUtil.takeOnly(item_r25.description, 50, true), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r25.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r24.config.showDeleteButton);
  }
}
function EmployeeListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, EmployeeListComponent_div_9_div_2_div_1_Template, 34, 12, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r6.employees.content);
  }
}
function EmployeeListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, EmployeeListComponent_div_9_div_1_Template, 34, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, EmployeeListComponent_div_9_div_2_Template, 2, 3, "div", 25);
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
class EmployeeListComponent extends _organizations_components_org_base_list_component__WEBPACK_IMPORTED_MODULE_5__.BaseListComponentForOrg {
  componentName() {
    return "EmployeeListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, employeeService, notifier, orgService) {
    super(eventBus, router, subContainer, dialog, orgService);
    this.activatedRoute = activatedRoute;
    this.employeeService = employeeService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.defaultEmployeeConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.defaultFilterData;
    this.employees = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    if (authService.isAdmin()) {
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfEndpoints.adminEndpoint;
      this.config.showUserFilter = true;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.parseFilterData)(params);
      this.onOrgLoaded(orgId => {
        this.fetchEmployees({
          q: this.filterData.query,
          username: this.filterData.username,
          from_date: this.filterData.fromDate,
          to_date: this.filterData.toDate,
          page: this.filterData.page,
          size: this.filterData.size,
          org_id: orgId
        });
      });
    });
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Employees",
      link: null,
      active: true
    }];
  }
  fetchEmployees(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.EMPLOYEES.SEARCH(params));
    this.employeeService.search(key, this.config.endpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.employees = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "Employee is deleted");
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
    return _employee_upsert_employee_upsert_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeUpsertComponent;
  }
  static #_ = this.ɵfac = function EmployeeListComponent_Factory(t) {
    return new (t || EmployeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_10__.EmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_12__.OrganizationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
    type: EmployeeListComponent,
    selectors: [["app-employee-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___5 = goog.getMsg("Image");
        i18n_4 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u099B\u09AC\u09BF";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___7 = goog.getMsg("Name");
        i18n_6 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "\u09A8\u09BE\u09AE";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___9 = goog.getMsg("Title");
        i18n_8 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___11 = goog.getMsg("Phone");
        i18n_10 = MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u09AB\u09CB\u09A8";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___13 = goog.getMsg("Email");
        i18n_12 = MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u0987\u09AE\u09C7\u0987\u09B2";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___15 = goog.getMsg("Description");
        i18n_14 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___17 = goog.getMsg("Created At");
        i18n_16 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___19 = goog.getMsg("Last Updated");
        i18n_18 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___21 = goog.getMsg("Update");
        i18n_20 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS___21;
      } else {
        i18n_20 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Organization$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS____23 = goog.getMsg("Organization");
        i18n_22 = MSG_EXTERNAL_label_Organization$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS____23;
      } else {
        i18n_22 = "\u09AA\u09CD\u09B0\u09A4\u09BF\u09B7\u09CD\u09A0\u09BE\u09A8";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS____25 = goog.getMsg("Delete");
        i18n_24 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_LIST_EMPLOYEE_LIST_COMPONENT_TS____25;
      } else {
        i18n_24 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_4, i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, [4, "ngFor", "ngForOf"], i18n_22, i18n_24, [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], ["href", "javascript:void(0);", 3, "routerLink"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "bg-success", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [1, "font-size-10"], [3, "requestUrl", "look", "deleteItemEvent"]];
    },
    template: function EmployeeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("layoutSelected", function EmployeeListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("addButtonClick", function EmployeeListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, EmployeeListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, EmployeeListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, EmployeeListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("title", "Employees")("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.employees.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.employees.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("page", ctx.employees);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterLink, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 29413:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/hr/employees/components/employee-select/employee-select.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeSelectComponent: () => (/* binding */ EmployeeSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _employee_upsert_employee_upsert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../employee-upsert/employee-upsert.component */ 37562);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 70194);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _organizations_components_org_base_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../organizations/components/org-base-select.component */ 37339);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/employee.service */ 18249);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);


















function EmployeeSelectComponent_util_progress_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "util-progress", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("bar", true);
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
class EmployeeSelectComponent extends _organizations_components_org_base_select_component__WEBPACK_IMPORTED_MODULE_4__.BaseComponentForOrg {
  componentName() {
    return "EmployeeSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, employeeService, popupService, orgService) {
    super(eventBus, router, subContainer, orgService);
    this.employeeService = employeeService;
    this.popupService = popupService;
    this.enableAdd = true;
    this.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.endpoint;
    this.items = [];
    this.selectedItem = null;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    if (authService.isAdmin()) {
      this.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
  }
  ngOnInit() {
    this.onOrgLoaded(orgId => {
      this.loading = false;
      this.search({
        page: 0,
        size: 10,
        q: null,
        org_id: orgId
      });
    });
  }
  searchForEvent(event) {
    let query = _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_2__.TextUtility.removeSpecialCharacters(event.target?.value);
    if (query.length > 2) {
      this.search({
        page: 0,
        size: 10,
        q: query,
        org_id: this.orgId
      });
    }
  }
  onSelected(event) {
    if (event == null) {
      this.selected.emit(null);
    } else if (this.items.find(c => c.title == event.title)) {
      this.selected.emit(this.selectedItem);
    } else {
      let popup = this.popupService.open(_employee_upsert_employee_upsert_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeUpsertComponent, {
        id: null,
        dialogUpsert: true,
        title: event.title
      });
      popup.componentInstance.onCompleted.subscribe(employee => {
        this.selected.emit(employee);
      });
      popup.componentInstance.onCanceled.subscribe(() => {
        popup.close();
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.EMPLOYEES.SEARCH(params));
    this.employeeService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function EmployeeSelectComponent_Factory(t) {
    return new (t || EmployeeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_8__.EmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_10__.OrganizationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: EmployeeSelectComponent,
    selectors: [["app-employee-select"]],
    inputs: {
      enableAdd: "enableAdd",
      searchEndpoint: "searchEndpoint",
      selectedItem: "selectedItem"
    },
    outputs: {
      selected: "selected"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 8,
    consts: [["for", "employee-select", 1, "visually-hidden"], [3, "bar", 4, "ngIf"], ["id", "employee-select", "bindLabel", "name", "placeholder", "Search Employee", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "keyup", "ngModelChange", "change"], [3, "bar"]],
    template: function EmployeeSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, EmployeeSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ng-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function EmployeeSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function EmployeeSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function EmployeeSelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.items)("hideSelected", true)("multiple", false)("addTag", ctx.enableAdd)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](7, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__.ProgressComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 37562:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/hr/employees/components/employee-upsert/employee-upsert.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeUpsertComponent: () => (/* binding */ EmployeeUpsertComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v3.component */ 59890);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 70194);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/employee.service */ 18249);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _users_users_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../users/users/services/user.service */ 16925);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/cms/files/components/filepicker/filepicker.component */ 7247);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _organizations_components_organization_select_organization_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../organizations/components/organization-select/organization-select.component */ 17851);
/* harmony import */ var _users_users_components_user_select_user_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../users/users/components/user-select/user-select.component */ 1998);




















function EmployeeUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "util-progress", 32);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bar", true);
  }
}
function EmployeeUpsertComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 1)(1, "div", 7)(2, "label", 33)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](4, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "em", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "app-organization-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function EmployeeUpsertComponent_div_50_Template_app_organization_select_selected_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r3.onOrgSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 7)(9, "label", 36)(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](11, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "em", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "app-user-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function EmployeeUpsertComponent_div_50_Template_app_user_select_selected_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r5.onUserSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("selectedItem", ctx_r1.selectedOrg);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("selectedItem", ctx_r1.selectedUser);
  }
}
function EmployeeUpsertComponent_div_51_em_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "em")(1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r6.checkUsernameResponse.available ? "text-success" : "text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r6.checkUsernameResponse.reason);
  }
}
function EmployeeUpsertComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 39)(1, "div", 7)(2, "label", 40)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](4, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "em", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function EmployeeUpsertComponent_div_51_Template_input_keyup_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r7.onUsernameChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, EmployeeUpsertComponent_div_51_em_8_Template, 3, 2, "em", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 7)(10, "label", 44)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](12, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "em", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "em", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.checkUsernameResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r2.errMsg(ctx_r2.employeeForm.controls.user, "password", "minLength", "Password should be between 6 to 30 characters!"), " ");
  }
}
class EmployeeUpsertComponent extends _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV3 {
  constructor(eventBus, router, subContainer, route, employeeService, orgService, userService, notifier, authService, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.employeeService = employeeService;
    this.orgService = orgService;
    this.userService = userService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultEmployeeConfig;
    this.selectedOrg = null;
    this.selectedUser = null;
    this.employeeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(3)]),
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(3)]),
      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, []),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.email]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(''),
      image: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null),
      organization_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(-1),
      user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(-1),
      user: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
        // name: new FormControl('', [Validators.required]),
        username: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(3)]),
        // phone: new FormControl('', []),
        // email: new FormControl('', [Validators.email]),
        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.maxLength(30)]),
        role_names: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl([], [])
      })
    });
    this.isAdmin = false;
    this.isUpdate = false;
    this.checkUsernameResponse = null;
    if (authService.isAdmin()) {
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
      this.isAdmin = true;
    }
    if (dialogData.title != null) {
      this.employeeForm.controls.title.setValue(dialogData.title);
    }
  }
  componentName() {
    return EmployeeUpsertComponent.name;
  }
  ngOnInit() {
    super.ngOnInit();
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.ORGANIZATIONS.GET_MY_ORG());
    this.orgService.fetchMyOrgs(key);
    this.subscribe(key, null, (value, meta) => {
      this.selectedOrg = meta.data[0];
      this.employeeForm.controls.organization_id.setValue(this.selectedOrg == null ? -1 : this.selectedOrg.id);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      console.log(error);
    });
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Employees",
      link: "/dash/employees",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    this.isUpdate = exId != null;
    if (this.isUpdate) {
      const userFormGroup = this.employeeForm.get('user');
      userFormGroup.removeControl('username');
      userFormGroup.removeControl('password');
    }
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.EMPLOYEES.GET(exId));
    this.employeeService.fetchSingle(key, this.config.endpoint, exId);
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
    if (!this.employeeForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  onImgUploaded(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.employeeForm.controls.image.setValue(images[0].image_url);
    }
  }
  getExImages() {
    let image = this.employeeForm.controls.image.value;
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
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.EMPLOYEES.UPSERT(exId));
    let req;
    if (exId == null) {
      req = this.employeeForm.value;
      req.user.name = req.name;
      req.user.phone = req.phone;
      req.user.email = req.email;
      req.user.role_names = ['Salesman'];
    } else {
      req = this.employeeForm.value;
    }
    this.employeeService.upsert(key, this.config.endpoint, req, exId);
    this.subscribe(key, null, (value, meta) => {
      this.notifier.success("Success", "Employee has been " + (exId ? "updated" : "created"));
      this.employeeForm.reset();
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
    this.selectedUser = n.user;
    this.employeeForm.controls.name.setValue(n.name);
    this.employeeForm.controls.title.setValue(n.title);
    this.employeeForm.controls.description.setValue(n.description);
    this.employeeForm.controls.phone.setValue(n.phone);
    this.employeeForm.controls.email.setValue(n.email);
    this.employeeForm.controls.image.setValue(n.image == null ? null : n.image);
    this.employeeForm.controls.organization_id.setValue(n.organization.id);
    this.employeeForm.controls.user_id.setValue(n.user.id);
  }
  onOrgSelected($event) {
    this.selectedOrg = $event;
    this.employeeForm.controls.organization_id.setValue(this.selectedOrg == null ? -1 : this.selectedOrg.id);
  }
  onUserSelected($event) {
    this.selectedUser = $event;
    this.employeeForm.controls.user_id.setValue(this.selectedUser == null ? -1 : this.selectedUser.id);
  }
  onUsernameChange(event) {
    let username = event.target.value;
    if (username.length < 3) {
      return;
    }
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.USERS.CHECK_USERNAME({
      username: username
    }));
    this.userService.checkUsername(key, username);
    this.subscribe(key, null, (value, meta) => {
      this.checkUsernameResponse = meta.data;
      // set form control invalid if not available
      if (!this.checkUsernameResponse?.available) {
        this.employeeForm.controls.user.get('username')?.setErrors({
          invalid: true
        });
      } else {
        this.employeeForm.controls.user.get('username')?.setErrors(null);
      }
    });
  }
  static #_ = this.ɵfac = function EmployeeUpsertComponent_Factory(t) {
    return new (t || EmployeeUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_5__.EmployeeService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_6__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_users_users_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_8__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: EmployeeUpsertComponent,
    selectors: [["app-employee-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]],
    decls: 57,
    vars: 15,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS_1 = goog.getMsg("Name");
        i18n_0 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09A8\u09BE\u09AE";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS_3 = goog.getMsg("Title");
        i18n_2 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS_5 = goog.getMsg("Phone");
        i18n_4 = MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u09AB\u09CB\u09A8";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS_7 = goog.getMsg("Email");
        i18n_6 = MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u0987\u09AE\u09C7\u0987\u09B2";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS_9 = goog.getMsg("Description");
        i18n_8 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS_9;
      } else {
        i18n_8 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Organization$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS__11 = goog.getMsg("Organization");
        i18n_10 = MSG_EXTERNAL_label_Organization$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS__11;
      } else {
        i18n_10 = "\u09AA\u09CD\u09B0\u09A4\u09BF\u09B7\u09CD\u09A0\u09BE\u09A8";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_User$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS__13 = goog.getMsg("User");
        i18n_12 = MSG_EXTERNAL_label_User$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS__13;
      } else {
        i18n_12 = "\u0987\u0989\u099C\u09BE\u09B0";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Username$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS__15 = goog.getMsg("Username");
        i18n_14 = MSG_EXTERNAL_label_Username$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS__15;
      } else {
        i18n_14 = "\u0987\u0989\u099C\u09BE\u09B0\u09A8\u09C7\u09AE";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Password$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS__17 = goog.getMsg("Password");
        i18n_16 = MSG_EXTERNAL_label_Password$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_HR_EMPLOYEES_COMPONENTS_EMPLOYEE_UPSERT_EMPLOYEE_UPSERT_COMPONENT_TS__17;
      } else {
        i18n_16 = "\u09AA\u09BE\u09B8\u0993\u09DF\u09BE\u09B0\u09CD\u09A1";
      }
      return [["xmlns", "http://www.w3.org/1999/html", 3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "mb-3", "col-md-6"], ["for", "name-input", 1, "form-label"], i18n_0, [1, "error"], ["type", "text", "id", "name-input", "placeholder", "Enter Name", "name", "name", "formControlName", "name", 1, "form-control"], [1, "text-danger"], ["for", "title-input", 1, "form-label"], i18n_2, ["type", "text", "id", "title-input", "placeholder", "Enter Title", "name", "title", "formControlName", "title", 1, "form-control"], ["for", "phone-input", 1, "form-label"], i18n_4, ["type", "text", "id", "phone-input", "placeholder", "Enter Phone", "name", "phone", "formControlName", "phone", 1, "form-control"], ["for", "email-input", 1, "form-label"], i18n_6, ["type", "text", "id", "email-input", "placeholder", "Enter Email", "name", "email", "formControlName", "email", 1, "form-control"], [1, "mb-3"], ["for", "description", 1, "form-label"], i18n_8, ["id", "description", "placeholder", "Enter Description", "rows", "5", "name", "description", "formControlName", "description", 1, "form-control"], [3, "title", "multiSelect", "existingImages", "required", "onUploaded"], ["class", "row", 4, "ngIf"], ["class", "row bg-warning-subtle py-1 my-2", "formGroupName", "user", 4, "ngIf"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], ["xmlns", "http://www.w3.org/1999/html", 3, "bar"], ["for", "organization", 1, "form-label"], i18n_10, ["id", "organization", 3, "selectedItem", "selected"], ["for", "user", 1, "form-label"], i18n_12, ["id", "user", 3, "selectedItem", "selected"], ["formGroupName", "user", 1, "row", "bg-warning-subtle", "py-1", "my-2"], ["for", "username-input", 1, "form-label"], i18n_14, ["type", "text", "id", "username-input", "placeholder", "Enter Username", "name", "username", "formControlName", "username", 1, "form-control", 3, "keyup"], [4, "ngIf"], ["for", "password-input", 1, "form-label"], i18n_16, ["type", "text", "id", "password-input", "placeholder", "Enter Password", "name", "password", "formControlName", "password", 1, "form-control"], [3, "ngClass"]];
    },
    template: function EmployeeUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, EmployeeUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Create/Update Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "form", 6)(8, "div", 1)(9, "div", 7)(10, "label", 8)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 7)(19, "label", 13)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](21, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 1)(28, "div", 7)(29, "label", 16)(30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](31, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 7)(36, "label", 19)(37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](38, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](39, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "div", 22)(43, "label", 23)(44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](45, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](46, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "app-file-picker", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onUploaded", function EmployeeUpsertComponent_Template_app_file_picker_onUploaded_49_listener($event) {
          return ctx.onImgUploaded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](50, EmployeeUpsertComponent_div_50_Template, 15, 2, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](51, EmployeeUpsertComponent_div_51_Template, 18, 2, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "div", 29)(53, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EmployeeUpsertComponent_Template_button_click_53_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EmployeeUpsertComponent_Template_button_click_55_listener() {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.employeeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.employeeForm, "name", "minLength", "Name should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.employeeForm, "title", "minLength", "Title should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.employeeForm, "phone", "minLength", "Phone should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.employeeForm, "email", "minLength", "Email should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.employeeForm, "description", "minLength", "Description should be at least 20 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", ctx.translations["Image"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("multiSelect", false)("existingImages", ctx.getExImages())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.isUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx.employeeForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_10__.FilePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__.ProgressComponent, _organizations_components_organization_select_organization_select_component__WEBPACK_IMPORTED_MODULE_12__.OrganizationSelectComponent, _users_users_components_user_select_user_select_component__WEBPACK_IMPORTED_MODULE_13__.UserSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 90028:
/*!*************************************************************************!*\
  !*** ./src/app/modules/dash/domains/hr/employees/employee.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeComponent: () => (/* binding */ EmployeeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/employee-list/employee-list.component */ 82794);


class EmployeeComponent {
  static #_ = this.ɵfac = function EmployeeComponent_Factory(t) {
    return new (t || EmployeeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: EmployeeComponent,
    selectors: [["app-employee"]],
    decls: 1,
    vars: 0,
    template: function EmployeeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-employee-list");
      }
    },
    dependencies: [_components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 70194:
/*!**************************************************************************!*\
  !*** ./src/app/modules/dash/domains/hr/employees/models/config.model.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultEmployeeConfig: () => (/* binding */ defaultEmployeeConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/modules/generic/breadcrumb/breadcrumb.model */ 97989);
/* harmony import */ var _hr_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hr.endpoints */ 65878);


let selfEndpoints = {
  endpoint: _hr_endpoints__WEBPACK_IMPORTED_MODULE_1__.HrEndpoints.EMPLOYEES.EMPLOYEE_ENDPOINT,
  adminEndpoint: _hr_endpoints__WEBPACK_IMPORTED_MODULE_1__.HrEndpoints.EMPLOYEES.EMPLOYEE_ENDPOINT_ADMIN
};
let defaultEmployeeConfig = {
  defaultLayout: _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.GRID,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  endpoint: selfEndpoints.endpoint,
  delEndpoint: selfEndpoints.endpoint
};
let selfRoutes = {
  list: "/dash/employees",
  create: "/dash/employees/create",
  update(id) {
    return id == null ? this.create : "/dash/employees/" + id + '/update';
  }
};

/***/ }),

/***/ 18249:
/*!********************************************************************************!*\
  !*** ./src/app/modules/dash/domains/hr/employees/services/employee.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeService: () => (/* binding */ EmployeeService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _hr_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hr.endpoints */ 65878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class EmployeeService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _hr_endpoints__WEBPACK_IMPORTED_MODULE_1__.HrEndpoints.EMPLOYEES.SEARCH(endpoint, params);
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
    this.http.get(_hr_endpoints__WEBPACK_IMPORTED_MODULE_1__.HrEndpoints.EMPLOYEES.GET(endpoint, id)).subscribe(data => {
      this.eventBusService.publish(key, data.body);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, endpoint, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, endpoint, employeeReq, exId) {
    let url = exId == null ? _hr_endpoints__WEBPACK_IMPORTED_MODULE_1__.HrEndpoints.EMPLOYEES.CREATE(endpoint) : _hr_endpoints__WEBPACK_IMPORTED_MODULE_1__.HrEndpoints.EMPLOYEES.UPDATE(endpoint, exId);
    let observable = exId == null ? this.http.post(url, employeeReq) : this.http.patch(url, employeeReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res.body);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, endpoint, employeeReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function EmployeeService_Factory(t) {
    return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: EmployeeService,
    factory: EmployeeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 65878:
/*!*********************************************************!*\
  !*** ./src/app/modules/dash/domains/hr/hr.endpoints.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HrEndpoints: () => (/* binding */ HrEndpoints)
/* harmony export */ });
/* harmony import */ var _base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../base/endpoints/base.endpoint */ 92495);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ 20553);


class HrEndpoints extends _base_endpoints_base_endpoint__WEBPACK_IMPORTED_MODULE_0__.BaseEndpoint {
  static #_ = this.EMPLOYEES = {
    EMPLOYEE_ENDPOINT: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/employees',
    EMPLOYEE_ENDPOINT_ADMIN: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.base_url + '/api/v1/admin/employees',
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
    }
  };
}

/***/ }),

/***/ 24848:
/*!******************************************************!*\
  !*** ./src/app/modules/dash/domains/hr/hr.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HrModule: () => (/* binding */ HrModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ht_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ht.route */ 75518);
/* harmony import */ var _employees_employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees/employee.component */ 90028);
/* harmony import */ var _employees_components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employees/components/employee-list/employee-list.component */ 82794);
/* harmony import */ var _employees_components_employee_upsert_employee_upsert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees/components/employee-upsert/employee-upsert.component */ 37562);
/* harmony import */ var _employees_components_employee_select_employee_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees/components/employee-select/employee-select.component */ 29413);
/* harmony import */ var _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/modules/cms/cms.module */ 68709);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/modules/utility/utility.module */ 7151);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);
/* harmony import */ var _common_modules_generic_generic_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/modules/generic/generic.module */ 44044);
/* harmony import */ var _dash_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dash.module */ 42298);
/* harmony import */ var _users_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../users/user.module */ 27459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);














class HrModule {
  static #_ = this.ɵfac = function HrModule_Factory(t) {
    return new (t || HrModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: HrModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ht_route__WEBPACK_IMPORTED_MODULE_0__.HrRoute, _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_5__.CmsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_6__.UtilityModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule, _common_modules_generic_generic_module__WEBPACK_IMPORTED_MODULE_7__.GenericModule, _dash_module__WEBPACK_IMPORTED_MODULE_8__.DashModule, _users_user_module__WEBPACK_IMPORTED_MODULE_9__.UserModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](HrModule, {
    declarations: [_employees_employee_component__WEBPACK_IMPORTED_MODULE_1__.EmployeeComponent, _employees_components_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeListComponent, _employees_components_employee_upsert_employee_upsert_component__WEBPACK_IMPORTED_MODULE_3__.EmployeeUpsertComponent, _employees_components_employee_select_employee_select_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeSelectComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ht_route__WEBPACK_IMPORTED_MODULE_0__.HrRoute, _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_5__.CmsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_6__.UtilityModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule, _common_modules_generic_generic_module__WEBPACK_IMPORTED_MODULE_7__.GenericModule, _dash_module__WEBPACK_IMPORTED_MODULE_8__.DashModule, _users_user_module__WEBPACK_IMPORTED_MODULE_9__.UserModule],
    exports: [_employees_components_employee_select_employee_select_component__WEBPACK_IMPORTED_MODULE_4__.EmployeeSelectComponent]
  });
})();

/***/ }),

/***/ 75518:
/*!*****************************************************!*\
  !*** ./src/app/modules/dash/domains/hr/ht.route.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HrRoute: () => (/* binding */ HrRoute)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _employees_employee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees/employee.component */ 90028);
/* harmony import */ var _employees_components_employee_upsert_employee_upsert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees/components/employee-upsert/employee-upsert.component */ 37562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);





const routes = [{
  path: 'employees',
  component: _employees_employee_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeComponent
}, {
  path: 'employees/create',
  component: _employees_employee_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeComponent
}, {
  path: 'employees/:id/update',
  component: _employees_components_employee_upsert_employee_upsert_component__WEBPACK_IMPORTED_MODULE_1__.EmployeeUpsertComponent
}];
class HrRoute {
  static #_ = this.ɵfac = function HrRoute_Factory(t) {
    return new (t || HrRoute)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: HrRoute
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HrRoute, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_dash_domains_hr_hr_module_ts.js.map