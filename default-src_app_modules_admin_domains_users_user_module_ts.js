"use strict";
(self["webpackChunkbankrupt_frontend"] = self["webpackChunkbankrupt_frontend"] || []).push([["default-src_app_modules_admin_domains_users_user_module_ts"],{

/***/ 98594:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/users/pages/activity-log/activity-log.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityLogComponent: () => (/* binding */ ActivityLogComponent)
/* harmony export */ });
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/models/IPage */ 76542);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/utility/time.utility */ 62739);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_activity_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/activity-log.service */ 45642);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);
















function ActivityLogComponent_util_progress_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "util-progress", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("bar", true);
  }
}
function ActivityLogComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](17, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](20, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](u_r2.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](u_r2.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](u_r2.user_agent);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](u_r2.ip);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](u_r2.request_method);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](u_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](u_r2.total_visitors);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](17, 9, u_r2.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](20, 11, u_r2.updated_at));
  }
}
class ActivityLogComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_4__.BaseComponent {
  constructor(notifier, eventBus, router, subContainer, activatedRoute, activityLogService) {
    super(eventBus, router, subContainer);
    this.notifier = notifier;
    this.activatedRoute = activatedRoute;
    this.activityLogService = activityLogService;
    this.size = 10;
    this.page = 1;
    this.activityLogs = _base_models_IPage__WEBPACK_IMPORTED_MODULE_0__.defaultPage;
    this.username = null;
    this.created_from = new Date();
    this.created_to = new Date();
  }
  componentName() {
    return "ActivityLogComponent";
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let from = params['from_date'];
      let to = params['to_date'];
      let page = params['page'];
      let size = params['size'];
      if (from != null && to != null) {
        this.created_from = moment__WEBPACK_IMPORTED_MODULE_1__(from).toDate();
        this.created_to = moment__WEBPACK_IMPORTED_MODULE_1__(to).toDate();
      } else {
        this.created_from = _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_2__.TimeUtility.getDayStart(new Date(0));
        this.created_to = _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_2__.TimeUtility.getDayEnd(new Date());
      }
      this.searchActivityLogs({
        username: this.username,
        from_date: _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_2__.TimeUtility.getDayStart(this.created_from),
        to_date: _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_2__.TimeUtility.getDayEnd(this.created_to),
        page: page,
        size: size
      });
    });
  }
  searchActivityLogs(params) {
    // console.log(this.username)
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.REQUEST_CREDENTIALS.ADMIN_SEARCH_LOCKOUTS());
    this.activityLogService.search(key, params);
    this.subscribe(key, null, (value, meta) => {
      this.activityLogs = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.log(meta.data);
    });
  }
  static #_ = this.ɵfac = function ActivityLogComponent_Factory(t) {
    return new (t || ActivityLogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_5__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_activity_log_service__WEBPACK_IMPORTED_MODULE_8__.ActivityLogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: ActivityLogComponent,
    selectors: [["app-activity-log"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]],
    decls: 44,
    vars: 3,
    consts: [[1, "row"], [3, "bar", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "table-responsive"], [1, "table", "table-responsive", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], [4, "ngFor", "ngForOf"], [3, "page"], [3, "bar"]],
    template: function ActivityLogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ActivityLogComponent_util_progress_1_Template, 1, 1, "util-progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Activity Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Activity logs for users");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "app-basic-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 7)(11, "table", 8)(12, "thead")(13, "tr")(14, "th")(15, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "USER ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "th")(18, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "USERNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "th")(21, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "USER AGENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "th")(24, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "IP");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "th")(27, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "R. METHOD");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "th")(30, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "th")(33, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "TOTAL VISITORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "th")(36, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "CREATED AT");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "th")(39, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "LAST UPDATED");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](42, ActivityLogComponent_tr_42_Template, 21, 13, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](43, "app-pagination", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.activityLogs == null ? null : ctx.activityLogs.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("page", ctx.activityLogs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_9__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_11__.BasicFilterComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_12__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 70187:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/users/pages/request-credentials/request-credentials.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestCredentialsComponent: () => (/* binding */ RequestCredentialsComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/modules/utility/time.utility */ 62739);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_req_cred_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/req-cred.service */ 57699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 11633);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../common/modules/utility/components/progress/progress.component */ 26973);















function RequestCredentialsComponent_util_progress_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "util-progress", 22);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("bar", true);
  }
}
function RequestCredentialsComponent_tr_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const credentials_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.ip);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.user_agent_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.forwarded_for_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.authorization_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.cookie_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.referer_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.x_frame_options_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.content_type_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.origin_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.x_http_method_override_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.content_security_policy_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.accept_charset_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.accept_datetime_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.accept_encoding_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.accept_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.accept_language_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.access_control_allow_credentials_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.access_control_allow_headers_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.access_control_allow_methods_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.access_control_allow_origin_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.access_control_expose_headers_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.access_control_max_age_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.access_control_request_headers_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.access_control_request_method_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.authorization_info_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.cache_control_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.connection_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.content_encoding_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.content_length_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.dnt_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.forward_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.host_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.if_modified_since_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.if_none_match_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.if_range_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.if_unmodified_since_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.max_forwards_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.pragma_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.proxy_authorization_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.range_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.te_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.upgrade_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.via_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.warning_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.x_forwarded_for_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.x_forwarded_host_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.x_forwarded_proto_header);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](credentials_r2.x_requested_with_header);
  }
}
const _c0 = function () {
  return {
    dateInputFormat: "DD-MM-YYYY h:mm:ss a"
  };
};
const _c1 = function () {
  return {
    standalone: true
  };
};
class RequestCredentialsComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
  constructor(notifier, eventBus, router, subContainer, activatedRoute, reqCredService) {
    super(eventBus, router, subContainer);
    this.notifier = notifier;
    this.activatedRoute = activatedRoute;
    this.reqCredService = reqCredService;
    this.size = 10;
    this.page = 1;
    this.created_from = new Date();
    this.created_to = new Date();
  }
  componentName() {
    return "RequestCredentialsComponent";
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      let from = params['from_date'];
      let to = params['to_date'];
      if (from != null && to != null) {
        this.created_from = moment__WEBPACK_IMPORTED_MODULE_0__(from).toDate();
        this.created_to = moment__WEBPACK_IMPORTED_MODULE_0__(to).toDate();
      } else {
        this.created_from = new Date(0);
        this.created_to = new Date();
      }
    });
    this.searchRequestCredentials({
      created_from: this.created_from == null ? this.created_from : _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_1__.TimeUtility.getDayStart(this.created_from),
      created_to: this.created_to == null ? this.created_to : _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_1__.TimeUtility.getDayEnd(this.created_to),
      page: 0,
      size: this.size
    });
  }
  onFilterClick() {
    this.searchRequestCredentials({
      created_from: _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_1__.TimeUtility.getDayStart(this.created_from),
      created_to: _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_1__.TimeUtility.getDayEnd(this.created_to),
      page: 0,
      size: this.size
    });
  }
  searchRequestCredentials(params) {
    // console.log(this.username)
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.REQUEST_CREDENTIALS.ADMIN_SEARCH_LOCKOUTS());
    this.reqCredService.search(key, params);
    this.subscribe(key, null, (value, meta) => {
      this.requestCredentials = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.log(meta.data);
    });
  }
  onPageChanged(event) {
    this.searchRequestCredentials({
      created_from: this.created_from,
      created_to: this.created_to,
      page: event.pageIndex,
      size: this.size
    });
  }
  filterForToday() {
    this.created_from = _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_1__.TimeUtility.getDayStart(new Date());
    this.created_to = _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_1__.TimeUtility.getDayEnd(new Date());
    this.searchRequestCredentials({
      created_from: this.created_from,
      created_to: this.created_to,
      page: 0,
      size: this.size
    });
  }
  clearFilter() {
    this.created_from = _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_1__.TimeUtility.getDayStart(new Date(0));
    this.created_to = _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_1__.TimeUtility.getDayEnd(new Date());
    this.searchRequestCredentials({
      created_from: this.created_from,
      created_to: this.created_to,
      page: 0,
      size: this.size
    });
  }
  static #_ = this.ɵfac = function RequestCredentialsComponent_Factory(t) {
    return new (t || RequestCredentialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_4__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_req_cred_service__WEBPACK_IMPORTED_MODULE_7__.ReqCredService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: RequestCredentialsComponent,
    selectors: [["app-activity-log"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 138,
    vars: 16,
    consts: [[1, "row"], [3, "bar", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-title-desc"], [1, "row", "gy-2", "gx-3", "mb-3", "align-items-center"], [1, "col-sm-auto"], ["type", "submit", 1, "btn", "btn-info", "w-md", 3, "click"], ["for", "fromDate", 1, "visually-hidden"], [1, "input-group"], ["bsDatepicker", "", "id", "fromDate", 1, "form-control", 3, "bsConfig", "ngModel", "ngModelOptions", "maxDate", "ngModelChange"], ["for", "toDate", 1, "visually-hidden"], ["bsDatepicker", "", "id", "toDate", 1, "form-control", 3, "bsConfig", "ngModel", "ngModelOptions", "minDate", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "w-md", 3, "click"], ["type", "submit", 1, "btn", "btn-warning", "w-md", 3, "click"], [1, "table-responsive"], [1, "table", "table-responsive", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "col-lg-12", "grid-margin", "stretch-card"], ["aria-label", "Select page", 3, "length", "pageSize", "page"], [3, "bar"]],
    template: function RequestCredentialsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, RequestCredentialsComponent_util_progress_1_Template, 1, 1, "util-progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Lockouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "List of lockouts that happened to the users because of failed login.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "form", 7)(10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RequestCredentialsComponent_Template_button_click_11_listener() {
          return ctx.filterForToday();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 8)(14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 11)(17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RequestCredentialsComponent_Template_input_ngModelChange_17_listener($event) {
          return ctx.created_from = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 8)(19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 11)(22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RequestCredentialsComponent_Template_input_ngModelChange_22_listener($event) {
          return ctx.created_to = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 8)(24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RequestCredentialsComponent_Template_button_click_24_listener() {
          return ctx.onFilterClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 8)(27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RequestCredentialsComponent_Template_button_click_27_listener() {
          return ctx.clearFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 17)(30, "table", 18)(31, "thead")(32, "tr")(33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "IP");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "User Agent Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "X Forwarded For Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44, "Authorization Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Cookie Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "Referer Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "X Frame Options Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "Content Type Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "Origin Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "X HTTP Method Override Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "Content Security Policy Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "Accept Charset Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "Accept Datetime Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "Accept Encoding Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "Accept Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "Accept Language Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "Access Control Allow Credentials Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, "Access Control Allow Headers Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](74, "Access Control Allow Methods Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "Access Control Allow Origin Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78, "Access Control Expose Headers Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](80, "Access Control Max Age Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](82, "Access Control Request Headers Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "Access Control Request Method Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86, "Authorization Info Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](88, "Cache Control Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90, "Connection Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](92, "Content Encoding Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94, "Content Length Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](96, "DNT Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](98, "Forward Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](100, "Forwarded For Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](102, "Host Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](104, "If Modified Since Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](105, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](106, "If None Match Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](108, "If Range Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](109, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](110, "If Unmodified Since Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](112, "Max Forwards Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](114, "Pragma Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](116, "Proxy Authorization Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](118, "Range Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](120, "TE Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](122, "Upgrade Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](124, "Via Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](125, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](126, "Warning Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](128, "X Forwarded Host Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](129, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](130, "X Forwarded Proto Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](131, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](132, "X Requested With Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](134, RequestCredentialsComponent_tr_134_Template, 101, 50, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "div", 20)(136, "div", 3)(137, "mat-paginator", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("page", function RequestCredentialsComponent_Template_mat_paginator_page_137_listener($event) {
          return ctx.onPageChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](12, _c0))("ngModel", ctx.created_from)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](13, _c1))("maxDate", ctx.created_to);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](14, _c0))("ngModel", ctx.created_to)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](15, _c1))("minDate", ctx.created_from);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.requestCredentials == null ? null : ctx.requestCredentials.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("length", ctx.requestCredentials == null ? null : ctx.requestCredentials.totalElements)("pageSize", ctx.requestCredentials == null ? null : ctx.requestCredentials.size);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_12__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__.ProgressComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 80261:
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/domains/users/pages/users/users.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersComponent: () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _users_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../users/components/user-list/user-list.component */ 28084);


class UsersComponent {
  static #_ = this.ɵfac = function UsersComponent_Factory(t) {
    return new (t || UsersComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UsersComponent,
    selectors: [["app-users"]],
    decls: 1,
    vars: 0,
    template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-user-list");
      }
    },
    dependencies: [_users_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__.UserListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 45642:
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin/domains/users/services/activity-log.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityLogService: () => (/* binding */ ActivityLogService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../base/services/base.service */ 91547);
/* harmony import */ var _webapp_web_app_endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webapp/web-app.endpoint */ 81259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/eventbus/event-bus.service */ 50030);







class ActivityLogService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBus) {
    super(authService, notifier);
    this.http = http;
    this.eventBus = eventBus;
  }
  search(key, params) {
    this.http.get(_webapp_web_app_endpoint__WEBPACK_IMPORTED_MODULE_1__.WebAppEndpoint.ACTIVITY_LOGS.ADMIN_SEARCH(params)).subscribe(res => {
      this.eventBus.publish(key, res);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, params);
      }, err => {
        this.eventBus.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function ActivityLogService_Factory(t) {
    return new (t || ActivityLogService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ActivityLogService,
    factory: ActivityLogService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 57699:
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/domains/users/services/req-cred.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReqCredService: () => (/* binding */ ReqCredService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../base/services/base.service */ 91547);
/* harmony import */ var _webapp_web_app_endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../webapp/web-app.endpoint */ 81259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/eventbus/event-bus.service */ 50030);







class ReqCredService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBus) {
    super(authService, notifier);
    this.http = http;
    this.eventBus = eventBus;
  }
  search(key, params) {
    this.http.get(_webapp_web_app_endpoint__WEBPACK_IMPORTED_MODULE_1__.WebAppEndpoint.REQUEST_CREDENTIALS.ADMIN_SEARCH_LOCKOUTS(params)).subscribe(res => {
      this.eventBus.publish(key, res);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, params);
      }, err => {
        this.eventBus.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function ReqCredService_Factory(t) {
    return new (t || ReqCredService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ReqCredService,
    factory: ReqCredService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 27597:
/*!**************************************************************!*\
  !*** ./src/app/modules/admin/domains/users/user.endpoint.ts ***!
  \**************************************************************/
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
    GET(id) {
      return this.USER_ENDPOINT + '/' + id;
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

/***/ 98847:
/*!************************************************************!*\
  !*** ./src/app/modules/admin/domains/users/user.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserModule: () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/modules/utility/utility.module */ 7151);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 11633);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _pages_activity_log_activity_log_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/activity-log/activity-log.component */ 98594);
/* harmony import */ var _user_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.route */ 21039);
/* harmony import */ var _pages_request_credentials_request_credentials_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/request-credentials/request-credentials.component */ 70187);
/* harmony import */ var _users_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/user.component */ 38996);
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/users/users.component */ 80261);
/* harmony import */ var _users_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/components/user-list/user-list.component */ 28084);
/* harmony import */ var _users_components_user_upsert_user_upsert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/components/user-upsert/user-upsert.component */ 32668);
/* harmony import */ var _users_components_user_select_user_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/components/user-select/user-select.component */ 25635);
/* harmony import */ var _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/modules/cms/cms.module */ 68709);
/* harmony import */ var _admin_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../admin.module */ 33083);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);

















class UserModule {
  static #_ = this.ɵfac = function UserModule_Factory(t) {
    return new (t || UserModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: UserModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule, _user_route__WEBPACK_IMPORTED_MODULE_2__.UserRoute, _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_9__.CmsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_0__.UtilityModule, _admin_module__WEBPACK_IMPORTED_MODULE_10__.AdminModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](UserModule, {
    declarations: [_pages_users_users_component__WEBPACK_IMPORTED_MODULE_5__.UsersComponent, _pages_activity_log_activity_log_component__WEBPACK_IMPORTED_MODULE_1__.ActivityLogComponent, _pages_request_credentials_request_credentials_component__WEBPACK_IMPORTED_MODULE_3__.RequestCredentialsComponent, _users_user_component__WEBPACK_IMPORTED_MODULE_4__.UserComponent, _users_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__.UserListComponent, _users_components_user_upsert_user_upsert_component__WEBPACK_IMPORTED_MODULE_7__.UserUpsertComponent, _users_components_user_select_user_select_component__WEBPACK_IMPORTED_MODULE_8__.UserSelectComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule, _user_route__WEBPACK_IMPORTED_MODULE_2__.UserRoute, _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_9__.CmsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_0__.UtilityModule, _admin_module__WEBPACK_IMPORTED_MODULE_10__.AdminModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectModule],
    exports: [_users_components_user_select_user_select_component__WEBPACK_IMPORTED_MODULE_8__.UserSelectComponent]
  });
})();

/***/ }),

/***/ 21039:
/*!***********************************************************!*\
  !*** ./src/app/modules/admin/domains/users/user.route.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRoute: () => (/* binding */ UserRoute)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _pages_activity_log_activity_log_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/activity-log/activity-log.component */ 98594);
/* harmony import */ var _pages_request_credentials_request_credentials_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/request-credentials/request-credentials.component */ 70187);
/* harmony import */ var _acvalidationtokens_acvalidationtoken_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acvalidationtokens/acvalidationtoken.component */ 81981);
/* harmony import */ var _users_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/user.component */ 38996);
/* harmony import */ var _users_components_user_upsert_user_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/components/user-upsert/user-upsert.component */ 32668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);








const routes = [{
  path: '',
  component: _users_user_component__WEBPACK_IMPORTED_MODULE_3__.UserComponent
}, {
  path: 'create',
  component: _users_components_user_upsert_user_upsert_component__WEBPACK_IMPORTED_MODULE_4__.UserUpsertComponent
}, {
  path: ':id/update',
  component: _users_components_user_upsert_user_upsert_component__WEBPACK_IMPORTED_MODULE_4__.UserUpsertComponent
}, {
  path: 'activity-logs',
  component: _pages_activity_log_activity_log_component__WEBPACK_IMPORTED_MODULE_0__.ActivityLogComponent
}, {
  path: 'request-credentials/lockouts',
  component: _pages_request_credentials_request_credentials_component__WEBPACK_IMPORTED_MODULE_1__.RequestCredentialsComponent
}, {
  path: 'validation-tokens',
  component: _acvalidationtokens_acvalidationtoken_component__WEBPACK_IMPORTED_MODULE_2__.AcValidationTokenComponent
}];
class UserRoute {
  static #_ = this.ɵfac = function UserRoute_Factory(t) {
    return new (t || UserRoute)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: UserRoute
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UserRoute, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 28084:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/users/users/components/user-list/user-list.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserListComponent: () => (/* binding */ UserListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v2.component */ 92159);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 1310);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _user_upsert_user_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-upsert/user-upsert.component */ 32668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/user.service */ 5732);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../components/breadcrumb/breadcrumb.component */ 43383);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);





















function UserListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("bar", true);
  }
}
function UserListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Cooking your data, please wait..");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function UserListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "No items");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function UserListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, UserListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, UserListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 18)(10, "div", 19)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](12, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function UserListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function UserListComponent_div_9_div_1_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function UserListComponent_div_9_div_1_tr_33_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r10.created_by);
  }
}
function UserListComponent_div_9_div_1_tr_33_img_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "img", 39);
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("src", item_r10.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
  }
}
function UserListComponent_div_9_div_1_tr_33_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r10.name.substring(0, 1).toUpperCase(), " ");
  }
}
function UserListComponent_div_9_div_1_tr_33_td_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 35)(1, "app-delete", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("deleteItemEvent", function UserListComponent_div_9_div_1_tr_33_td_30_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r18.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("requestUrl", ctx_r14.config.delEndpoint + "/" + item_r10.id);
  }
}
function UserListComponent_div_9_div_1_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, UserListComponent_div_9_div_1_tr_33_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "td")(7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, UserListComponent_div_9_div_1_tr_33_img_8_Template, 1, 1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, UserListComponent_div_9_div_1_tr_33_span_9_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "td")(11, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UserListComponent_div_9_div_1_tr_33_Template_a_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r22);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r21.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "td")(20, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](22, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "td")(24, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](26, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "td", 35)(28, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UserListComponent_div_9_div_1_tr_33_Template_a_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r22);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r23.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](29, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](30, UserListComponent_div_9_div_1_tr_33_td_30_Template, 2, 1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r9.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r10.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r10.avatar != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r10.avatar == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r10.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r10.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r10.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](22, 12, item_r10.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](26, 14, item_r10.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r9.config.showDeleteButton);
  }
}
function UserListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Users that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 28)(7, "table", 29)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, UserListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](26, "Created At");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](28, "Last Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](30, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](31, UserListComponent_div_9_div_1_th_31_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](33, UserListComponent_div_9_div_1_tr_33_Template, 31, 16, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r5.users.content);
  }
}
function UserListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("src", item_r25.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
  }
}
function UserListComponent_div_9_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 62)(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r25.name.substring(0, 1).toUpperCase(), " ");
  }
}
function UserListComponent_div_9_div_2_div_1_h6_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h6", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("By ", item_r25.created_by, "");
  }
}
function UserListComponent_div_9_div_2_div_1_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small", 64)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 1, item_r25.updated_at), " ");
  }
}
function UserListComponent_div_9_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function UserListComponent_div_9_div_2_div_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("Phone: ", item_r25.phone, "");
  }
}
function UserListComponent_div_9_div_2_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("Email: ", item_r25.phone, "");
  }
}
function UserListComponent_div_9_div_2_div_1_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 58)(1, "app-delete", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("deleteItemEvent", function UserListComponent_div_9_div_2_div_1_div_34_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r40.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("requestUrl", ctx_r33.config.delEndpoint + "/" + item_r25.id)("look", "bx");
  }
}
function UserListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, UserListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, UserListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "h5", 47)(6, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UserListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r44);
      const item_r25 = restoredCtx.$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r43.onUpsertClick(item_r25.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, UserListComponent_div_9_div_2_div_1_h6_8_Template, 2, 1, "h6", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 0)(10, "div", 50)(11, "p", 51)(12, "small")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](17, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "div", 50)(19, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](20, UserListComponent_div_9_div_2_div_1_small_20_Template, 6, 3, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, UserListComponent_div_9_div_2_div_1_small_21_Template, 6, 0, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](23, UserListComponent_div_9_div_2_div_1_span_23_Template, 3, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](24, UserListComponent_div_9_div_2_div_1_span_24_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div")(26, "a", 54)(27, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](28, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "div", 56)(30, "div", 57)(31, "div", 58)(32, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UserListComponent_div_9_div_2_div_1_Template_a_click_32_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r44);
      const item_r25 = restoredCtx.$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r45.onUpsertClick(item_r25.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](33, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](34, UserListComponent_div_9_div_2_div_1_div_34_Template, 2, 2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r25.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r25.avatar == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r25.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r24.config.showUserFilter && item_r25.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](17, 10, item_r25.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r25.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !item_r25.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r25.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r25.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r24.config.showDeleteButton);
  }
}
function UserListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, UserListComponent_div_9_div_2_div_1_Template, 35, 12, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r6.users.content);
  }
}
function UserListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, UserListComponent_div_9_div_1_Template, 34, 5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, UserListComponent_div_9_div_2_Template, 2, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.GRID);
  }
}
class UserListComponent extends _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV2 {
  componentName() {
    return "UserListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, userService, notifier) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.userService = userService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultUserConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.defaultFilterData;
    this.users = _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__.defaultPage;
    if (authService.isAdmin()) {
      this.config.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.parseFilterData)(params);
      this.fetchUsers({
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
      text: "Users",
      link: null,
      active: true
    }];
  }
  fetchUsers(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.USERS.SEARCH(params));
    this.userService.search(key, this.config.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.users = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "User is deleted");
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
    return _user_upsert_user_upsert_component__WEBPACK_IMPORTED_MODULE_5__.UserUpsertComponent;
  }
  static #_ = this.ɵfac = function UserListComponent_Factory(t) {
    return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__.NotifierService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: UserListComponent,
    selectors: [["app-user-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "/assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], [1, "text-uppercase"], ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "bg-success", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [1, "font-size-10"], [3, "requestUrl", "look", "deleteItemEvent"]],
    template: function UserListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("layoutSelected", function UserListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("addButtonClick", function UserListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, UserListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, UserListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, UserListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("title", "Users")("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.users.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.users.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("page", ctx.users);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_12__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_14__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_15__.DeleteComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_16__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_17__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 25635:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/users/users/components/user-select/user-select.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSelectComponent: () => (/* binding */ UserSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _user_upsert_user_upsert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-upsert/user-upsert.component */ 32668);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 1310);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user.service */ 5732);
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
      selectedItem: "selectedItem"
    },
    outputs: {
      selected: "selected"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 8,
    consts: [["for", "user-select", 1, "visually-hidden"], [3, "bar", 4, "ngIf"], ["id", "user-select", "bindLabel", "label", "placeholder", "Search User", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "keyup", "ngModelChange", "change"], [3, "bar"]],
    template: function UserSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "User");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx.items)("hideSelected", true)("multiple", false)("addTag", ctx.enableAdd)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](7, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__.ProgressComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 32668:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/admin/domains/users/users/components/user-upsert/user-upsert.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserUpsertComponent: () => (/* binding */ UserUpsertComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v2.component */ 19870);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 1310);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ 5732);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/cms/files/components/filepicker/filepicker.component */ 7247);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);















function UserUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "util-progress", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("bar", true);
  }
}
class UserUpsertComponent extends _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV2 {
  constructor(eventBus, router, subContainer, route, userService, notifier, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.userService = userService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultUserConfig;
    this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(3)]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(20)]),
      image: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null)
    });
    if (dialogData.title != null) {
      this.userForm.controls.title.setValue(dialogData.title);
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
      link: "/admin/users",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.USERS.GET(exId));
    this.userService.fetchSingle(key, exId);
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
    return _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.list;
  }
  upsert(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.USERS.UPSERT(exId));
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
    return new (t || UserUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: UserUpsertComponent,
    selectors: [["app-user-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
    decls: 28,
    vars: 10,
    consts: [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "mb-3"], ["for", "title-input", 1, "form-label"], [1, "error"], ["type", "text", "id", "title-input", "placeholder", "Enter Title", "name", "title", "formControlName", "title", 1, "form-control"], [1, "text-danger"], ["for", "description", 1, "form-label"], ["id", "description", "placeholder", "Enter Description", "rows", "5", "name", "description", "formControlName", "description", 1, "form-control"], [3, "title", "multiSelect", "existingImages", "required", "onUploaded"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], [3, "bar"]],
    template: function UserUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, UserUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Create/Update User");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "form", 6)(8, "div", 7)(9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "em", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 7)(17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "app-file-picker", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onUploaded", function UserUpsertComponent_Template_app_file_picker_onUploaded_22_listener($event) {
          return ctx.onImgUploaded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 15)(24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UserUpsertComponent_Template_button_click_24_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function UserUpsertComponent_Template_button_click_26_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.userForm, "title", "minLength", "Title should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.userForm, "description", "minLength", "Description should be at least 20 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", ctx.translations["Image"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("multiSelect", false)("existingImages", ctx.getExImages())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.userForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_7__.FilePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__.ProgressComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1310:
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/domains/users/users/models/config.model.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultUserConfig: () => (/* binding */ defaultUserConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/breadcrumb/breadcrumb.model */ 46405);
/* harmony import */ var _user_endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user.endpoint */ 27597);


let defaultUserConfig = {
  defaultLayout: _components_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.GRID,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  searchEndpoint: _user_endpoint__WEBPACK_IMPORTED_MODULE_1__.UserEndpoints.USERS.USER_ENDPOINT,
  delEndpoint: _user_endpoint__WEBPACK_IMPORTED_MODULE_1__.UserEndpoints.USERS.USER_ENDPOINT
};
let selfEndpoints = {
  endpoint: _user_endpoint__WEBPACK_IMPORTED_MODULE_1__.UserEndpoints.USERS.USER_ENDPOINT,
  adminEndpoint: _user_endpoint__WEBPACK_IMPORTED_MODULE_1__.UserEndpoints.USERS.USER_ENDPOINT_ADMIN
};
let selfRoutes = {
  list: "/admin/users",
  create: "/admin/users/create",
  update(id) {
    return id == null ? this.create : "/admin/users/" + id + '/update';
  }
};

/***/ }),

/***/ 5732:
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/domains/users/users/services/user.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _user_endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user.endpoint */ 27597);
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
  fetchSingle(key, id) {
    this.http.get(_user_endpoint__WEBPACK_IMPORTED_MODULE_1__.UserEndpoints.USERS.GET(id)).subscribe(user => {
      this.eventBusService.publish(key, user);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, id);
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
  static #_ = this.ɵfac = function UserService_Factory(t) {
    return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 38996:
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin/domains/users/users/user.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserComponent: () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/user-list/user-list.component */ 28084);


class UserComponent {
  static #_ = this.ɵfac = function UserComponent_Factory(t) {
    return new (t || UserComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UserComponent,
    selectors: [["app-user"]],
    decls: 1,
    vars: 0,
    template: function UserComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-user-list");
      }
    },
    dependencies: [_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__.UserListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_admin_domains_users_user_module_ts.js.map