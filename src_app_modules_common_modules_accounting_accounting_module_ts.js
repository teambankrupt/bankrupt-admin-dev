"use strict";
(self["webpackChunkbankrupt_frontend"] = self["webpackChunkbankrupt_frontend"] || []).push([["src_app_modules_common_modules_accounting_accounting_module_ts"],{

/***/ 6930:
/*!************************************************************************!*\
  !*** ./src/app/modules/common/modules/accounting/accounting.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountingModule: () => (/* binding */ AccountingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _accounting_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accounting.route */ 67554);
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ 69475);
/* harmony import */ var _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/utility.module */ 7151);
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet/wallet.component */ 86558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);






class AccountingModule {
  static #_ = this.ɵfac = function AccountingModule_Factory(t) {
    return new (t || AccountingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AccountingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _accounting_route__WEBPACK_IMPORTED_MODULE_0__.AccountingRoute, _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__.UtilityModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AccountingModule, {
    declarations: [_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_1__.LeaderboardComponent, _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_3__.WalletComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _accounting_route__WEBPACK_IMPORTED_MODULE_0__.AccountingRoute, _utility_utility_module__WEBPACK_IMPORTED_MODULE_2__.UtilityModule]
  });
})();

/***/ }),

/***/ 67554:
/*!***********************************************************************!*\
  !*** ./src/app/modules/common/modules/accounting/accounting.route.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountingRoute: () => (/* binding */ AccountingRoute)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet/wallet.component */ 86558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: 'wallet',
  component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_0__.WalletComponent
}];
class AccountingRoute {
  static #_ = this.ɵfac = function AccountingRoute_Factory(t) {
    return new (t || AccountingRoute)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AccountingRoute
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccountingRoute, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 84637:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/common/modules/accounting/wallet/models/transaction.model.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionType: () => (/* binding */ TransactionType)
/* harmony export */ });
var TransactionType;
(function (TransactionType) {
  TransactionType["DEBIT"] = "DEBIT";
  TransactionType["CREDIT"] = "CREDIT";
})(TransactionType || (TransactionType = {}));

/***/ }),

/***/ 86558:
/*!******************************************************************************!*\
  !*** ./src/app/modules/common/modules/accounting/wallet/wallet.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WalletComponent: () => (/* binding */ WalletComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../base/components/base.component */ 58637);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _utility_text_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility/text.utility */ 78174);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 74520);
/* harmony import */ var _models_transaction_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/transaction.model */ 84637);
/* harmony import */ var _utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _services_wallet_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/wallet.service */ 41822);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utility/components/progress/progress.component */ 26973);
/* harmony import */ var _utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utility/pipes/readable-date.pipe */ 92770);


















function WalletComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "util-progress", 16);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("bar", true);
  }
}
function WalletComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 6)(3, "div", 19)(4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 22)(7, "p", 23)(8, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function WalletComponent_div_4_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6);
      const account_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r5.filterTnx(account_r4.id, null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const account_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](account_r4.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", account_r4.balance, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", account_r4.currency_symbol, "");
  }
}
function WalletComponent_util_progress_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "util-progress", 16);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("bar", true);
  }
}
function WalletComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "td")(7, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function WalletComponent_tr_44_Template_a_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);
      const t_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r8.filterTnx(t_r7.account_id, null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "td")(10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function WalletComponent_tr_44_Template_a_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);
      const t_r7 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r10.copyToClipboard(t_r7.trnx_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 8, t_r7.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r7.currency_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r7.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", t_r7.currency_symbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", t_r7.type == "DEBIT" ? "text-danger" : "text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](t_r7.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", t_r7.trnx_id, " \u00A0");
  }
}
class WalletComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(eventBus, router, subContainer, authService, notifier, walletService, route) {
    super(eventBus, router, subContainer);
    this.authService = authService;
    this.notifier = notifier;
    this.walletService = walletService;
    this.route = route;
    this.wallet = null;
    // filter
    this.tnxType = null;
    this.onCanceled = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
    this.onCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
    this.filter = rxjs__WEBPACK_IMPORTED_MODULE_14__.filter;
    this.TransactionType = _models_transaction_model__WEBPACK_IMPORTED_MODULE_3__.TransactionType;
  }
  componentName() {
    return "WalletComponent";
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let filterData = (0,_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_4__.parseFilterData)(params);
      let accountId = params['account_id'];
      this.tnxType = params['type'];
      if (this.authService.isAdmin()) {
        this.fetchWallet({
          q: filterData.query,
          from_date: filterData.fromDate,
          to_date: filterData.toDate,
          page: filterData.page,
          account_id: accountId,
          type: this.tnxType
        }, filterData.username);
      } else {
        this.fetchWallet({
          q: filterData.query,
          from_date: filterData.fromDate,
          to_date: filterData.toDate,
          page: filterData.page,
          account_id: accountId,
          type: this.tnxType
        });
      }
    });
  }
  fetchWallet(params, username = null) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.WALLET.FETCH_MY_WALLET());
    this.walletService.fetchWallet(key, params, username);
    this.subscribe(key, null, (value, meta) => {
      this.wallet = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.notifier.warning('Error', error.error.message);
    });
  }
  copyToClipboard(trnx_id) {
    _utility_text_utility__WEBPACK_IMPORTED_MODULE_2__.TextUtility.copyToClipboard(trnx_id);
    this.notifier.info('Copied', 'Copied to clipboard');
  }
  onCloseClick() {
    this.onCanceled.emit();
  }
  filterTnx(accountId, tnxType) {
    let params = {};
    if (accountId != null) {
      params = {
        ...params,
        account_id: accountId
      };
    }
    if (tnxType != null) {
      params = {
        ...params,
        type: tnxType
      };
    }
    if (accountId == null && tnxType == null) {
      params = {
        ...params,
        account_id: null,
        type: null
      };
    }
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge'
    }).then(r => {});
  }
  clearFilter() {
    this.navigateByUrl("/admin/accounts/wallet", then => {});
  }
  static #_ = this.ɵfac = function WalletComponent_Factory(t) {
    return new (t || WalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_8__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_wallet_service__WEBPACK_IMPORTED_MODULE_9__.WalletService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: WalletComponent,
    selectors: [["app-wallet"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]],
    decls: 45,
    vars: 11,
    consts: [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-8"], ["class", "col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [3, "showAddBtn", "addBtnText", "addButtonClick"], [1, "card-title", "mb-4"], [1, "nav", "nav-tabs", "nav-tabs-custom"], [1, "nav-item"], ["href", "javascript: void(0);", 1, "nav-link", 3, "ngClass", "click"], [1, "mt-4"], [1, "table-responsive"], ["id", "datatable", 1, "table", "table-hover", "dt-responsive", "nowrap", 2, "border-collapse", "collapse", "border-spacing", "0", "width", "100%"], [4, "ngFor", "ngForOf"], [3, "bar"], [1, "col-sm-4"], [1, "card", "mini-stats-wid"], [1, "d-flex"], [1, "flex-shrink-0", "me-3", "align-self-center"], [1, "mdi", "mdi-bitcoin", "h2", "text-warning", "mb-0"], [1, "flex-grow-1"], [1, "text-muted", "mb-2"], ["href", "javascript: void(0);", 3, "click"], [1, "mb-0"], [1, "font-size-14", "text-muted"], [3, "ngClass"], ["href", "javascript:void(0);", 1, "card-link", 3, "click"]],
    template: function WalletComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, WalletComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, WalletComponent_div_4_Template, 14, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "app-basic-filter", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("addButtonClick", function WalletComponent_Template_app_basic_filter_addButtonClick_8_listener() {
          return ctx.clearFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, WalletComponent_util_progress_9_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 1)(11, "div", 4)(12, "div", 5)(13, "div", 6)(14, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "ul", 9)(17, "li", 10)(18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function WalletComponent_Template_a_click_18_listener() {
          return ctx.filterTnx(null, null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "li", 10)(21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function WalletComponent_Template_a_click_21_listener() {
          return ctx.filterTnx(null, ctx.TransactionType.DEBIT);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "Debit");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "li", 10)(24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function WalletComponent_Template_a_click_24_listener() {
          return ctx.filterTnx(null, ctx.TransactionType.CREDIT);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 12)(27, "div", 13)(28, "table", 14)(29, "thead")(30, "tr")(31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "Desc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](36, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42, "Tnx");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](44, WalletComponent_tr_44_Template, 20, 10, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@dataLoaded", ctx.loading ? "loading" : "loaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.wallet == null ? null : ctx.wallet.accounts);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("showAddBtn", true)("addBtnText", "Show All");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@dataLoaded", ctx.loading ? "loading" : "loaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx.tnxType == null ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx.tnxType == ctx.TransactionType.DEBIT ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx.tnxType == ctx.TransactionType.CREDIT ? "active" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.wallet == null ? null : ctx.wallet.recent_transactions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__.ProgressComponent, _utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_11__.BasicFilterComponent, _utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_12__.ReadableDatePipe],
    styles: [".leaderboard[_ngcontent-%COMP%] {\n  background: #211e1e;\n}\n.leaderboard[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .leaderboard[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n\nmat-dialog-content[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n\nmat-grid-tile[_ngcontent-%COMP%] {\n  border: 1px dashed whitesmoke;\n}\n\nmat-grid-tile[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #44d62c;\n}\n\n.btn-redeem[_ngcontent-%COMP%] {\n  color: #44d62c;\n}\n\n.info[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 0.7em;\n}\n\n.username[_ngcontent-%COMP%] {\n  color: #44d62c;\n}\n\n.header-avatar[_ngcontent-%COMP%] {\n  max-height: 50px;\n  max-width: 50px;\n}\n\n.tnx-section[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: whitesmoke;\n  max-width: 60% !important;\n}\n\n.tnx-section[_ngcontent-%COMP%]   .tnx-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.tnx-section[_ngcontent-%COMP%]   .tnx-header-action[_ngcontent-%COMP%] {\n  color: #44d62c;\n}\n\n.tnx-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: whitesmoke;\n}\n\n.tnx-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: whitesmoke;\n}\n\n.tnx-section[_ngcontent-%COMP%]   .btn-copy[_ngcontent-%COMP%] {\n  color: #44d62c;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21tb24vbW9kdWxlcy9hY2NvdW50aW5nL3dhbGxldC93YWxsZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGO0FBQUU7RUFDRSxpQkFBQTtBQUVKOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFGRiIsInNvdXJjZXNDb250ZW50IjpbIi5sZWFkZXJib2FyZHtcbiAgYmFja2dyb3VuZDogIzIxMWUxZTtcbiAgaDUsIGl7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gIH1cbn1cblxubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbm1hdC1ncmlkLXRpbGUge1xuICBib3JkZXI6IDFweCBkYXNoZWQgd2hpdGVzbW9rZTtcbiAgLy9jb2xvcjogIzQ0ZDYyYztcbn1cblxubWF0LWdyaWQtdGlsZSBoMyB7XG4gIGNvbG9yOiAjNDRkNjJjO1xufVxuXG4uYnRuLXJlZGVlbSB7XG4gIGNvbG9yOiAjNDRkNjJjO1xuICAvL2JvcmRlcjogMXB4IHNvbGlkICM0NGQ2MmM7XG4gIC8vcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG59XG5cbi5pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAuN2VtO1xufVxuXG4udXNlcm5hbWUge1xuICBjb2xvcjogIzQ0ZDYyYztcbn1cblxuLmhlYWRlci1hdmF0YXIge1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xuICBtYXgtd2lkdGg6IDUwcHg7XG59XG5cbi50bngtc2VjdGlvbiB7XG4gIGZvbnQtc2l6ZTogLjhlbTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIG1heC13aWR0aDogNjAlICFpbXBvcnRhbnQ7XG59XG5cbi50bngtc2VjdGlvbiAudG54LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRueC1zZWN0aW9uIC50bngtaGVhZGVyLWFjdGlvbiB7XG4gIGNvbG9yOiAjNDRkNjJjO1xufVxuXG4udG54LXRhYmxlIHRoIHtcbiAgZm9udC1zaXplOiAuOWVtO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnRueC10YWJsZSB0ZCB7XG4gIGZvbnQtc2l6ZTogLjllbTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi50bngtc2VjdGlvbiAuYnRuLWNvcHkge1xuICBjb2xvcjogIzQ0ZDYyYztcbiAgZm9udC1zaXplOiAuOGVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_common_modules_accounting_accounting_module_ts.js.map