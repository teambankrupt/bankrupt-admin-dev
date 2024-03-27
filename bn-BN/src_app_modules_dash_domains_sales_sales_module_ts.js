"use strict";
(self["webpackChunkbankrupt_frontend"] = self["webpackChunkbankrupt_frontend"] || []).push([["src_app_modules_dash_domains_sales_sales_module_ts"],{

/***/ 31247:
/*!**********************************************************!*\
  !*** ./src/app/base/components/base-select.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseSelectComponent: () => (/* binding */ BaseSelectComponent)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.component */ 58637);
/* harmony import */ var _services_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/storage/localstorage.service */ 33108);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/subscription-container.service */ 86945);
/* harmony import */ var _modules_dash_domains_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/dash/domains/organizations/services/organization.service */ 2490);








class BaseSelectComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(eventBus, router, subContainer, orgService) {
    super(eventBus, router, subContainer);
    this.orgService = orgService;
    this.orgId = null;
  }
  onOrgLoaded(block) {
    this.initOrg();
    if (this.orgId != null) {
      block(this.orgId);
    } else {
      this.fetchOrgId(block);
    }
  }
  initOrg() {
    let orgStr = _services_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService.retrieve('selectedOrg');
    let org = orgStr != undefined ? JSON.parse(orgStr) : null;
    if (org != null) {
      this.orgId = org.id;
    }
  }
  fetchOrgId(block) {
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.ORGANIZATIONS.GET_MY_ORG());
    this.orgService.fetchMyOrgs(key);
    this.subscribe(key, null, (value, meta) => {
      let orgs = meta.data;
      if (orgs.length > 0) {
        block(orgs[0].id);
      }
    });
  }
  static #_ = this.ɵfac = function BaseSelectComponent_Factory(t) {
    return new (t || BaseSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_modules_dash_domains_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_5__.OrganizationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: BaseSelectComponent,
    selectors: [["ng-component"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 0,
    vars: 0,
    template: function BaseSelectComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}

/***/ }),

/***/ 55449:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/acquisitioncampaigns/acquisitioncampaign.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcquisitionCampaignComponent: () => (/* binding */ AcquisitionCampaignComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_acquisitioncampaign_list_acquisitioncampaign_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/acquisitioncampaign-list/acquisitioncampaign-list.component */ 40457);


class AcquisitionCampaignComponent {
  static #_ = this.ɵfac = function AcquisitionCampaignComponent_Factory(t) {
    return new (t || AcquisitionCampaignComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AcquisitionCampaignComponent,
    selectors: [["app-acquisitioncampaign"]],
    decls: 1,
    vars: 0,
    template: function AcquisitionCampaignComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-acquisitioncampaign-list");
      }
    },
    dependencies: [_components_acquisitioncampaign_list_acquisitioncampaign_list_component__WEBPACK_IMPORTED_MODULE_0__.AcquisitionCampaignListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 40457:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/acquisitioncampaigns/components/acquisitioncampaign-list/acquisitioncampaign-list.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcquisitionCampaignListComponent: () => (/* binding */ AcquisitionCampaignListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_list_v4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v4.component */ 45095);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 75492);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _acquisitioncampaign_upsert_acquisitioncampaign_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../acquisitioncampaign-upsert/acquisitioncampaign-upsert.component */ 99753);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_acquisitioncampaign_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/acquisitioncampaign.service */ 56923);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);






















function AcquisitionCampaignListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("bar", true);
  }
}
function AcquisitionCampaignListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AcquisitionCampaignListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AcquisitionCampaignListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, AcquisitionCampaignListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, AcquisitionCampaignListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
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
function AcquisitionCampaignListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AcquisitionCampaignListComponent_div_9_div_1_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AcquisitionCampaignListComponent_div_9_div_1_tr_27_td_3_Template(rf, ctx) {
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
function AcquisitionCampaignListComponent_div_9_div_1_tr_27_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "img", 55);
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("src", item_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
  }
}
function AcquisitionCampaignListComponent_div_9_div_1_tr_27_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r10.title.substring(0, 1).toUpperCase(), " ");
  }
}
function AcquisitionCampaignListComponent_div_9_div_1_tr_27_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AcquisitionCampaignListComponent_div_9_div_1_tr_27_small_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AcquisitionCampaignListComponent_div_9_div_1_tr_27_small_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AcquisitionCampaignListComponent_div_9_div_1_tr_27_small_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](2, 1, item_r10.updated_at, "medium"));
  }
}
function AcquisitionCampaignListComponent_div_9_div_1_tr_27_td_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 51)(1, "app-delete", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("deleteItemEvent", function AcquisitionCampaignListComponent_div_9_div_1_tr_27_td_36_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r23.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("requestUrl", ctx_r18.config.delEndpoint + "/" + item_r10.id);
  }
}
function AcquisitionCampaignListComponent_div_9_div_1_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, AcquisitionCampaignListComponent_div_9_div_1_tr_27_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "td")(5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, AcquisitionCampaignListComponent_div_9_div_1_tr_27_img_6_Template, 1, 1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, AcquisitionCampaignListComponent_div_9_div_1_tr_27_span_7_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "td")(9, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AcquisitionCampaignListComponent_div_9_div_1_tr_27_Template_a_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r26.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, AcquisitionCampaignListComponent_div_9_div_1_tr_27_small_12_Template, 2, 0, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, AcquisitionCampaignListComponent_div_9_div_1_tr_27_small_13_Template, 2, 0, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AcquisitionCampaignListComponent_div_9_div_1_tr_27_Template_a_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r28.onCopyClick(item_r10.code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](19, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "td")(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](24, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](30, AcquisitionCampaignListComponent_div_9_div_1_tr_27_small_30_Template, 2, 0, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](32, AcquisitionCampaignListComponent_div_9_div_1_tr_27_small_32_Template, 3, 4, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](33, "td", 51)(34, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AcquisitionCampaignListComponent_div_9_div_1_tr_27_Template_a_click_34_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r27);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r29.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](35, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](36, AcquisitionCampaignListComponent_div_9_div_1_tr_27_td_36_Template, 2, 1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r9.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r10.image != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r10.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r10.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r10.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !item_r10.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r10.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r9.StringUtil.takeOnly(item_r10.description, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](28, 13, item_r10.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r10.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r10.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r9.config.showDeleteButton);
  }
}
function AcquisitionCampaignListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "AcquisitionCampaigns that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 30)(7, "table", 31)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](11, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, AcquisitionCampaignListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](14, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](16, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](18, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](20, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](22, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](24, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](25, AcquisitionCampaignListComponent_div_9_div_1_th_25_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](27, AcquisitionCampaignListComponent_div_9_div_1_tr_27_Template, 37, 16, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r5.acquisitionCampaigns.content);
  }
}
function AcquisitionCampaignListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("src", item_r31.image, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
  }
}
function AcquisitionCampaignListComponent_div_9_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 87)(1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r31.title.substring(0, 1).toUpperCase(), " ");
  }
}
function AcquisitionCampaignListComponent_div_9_div_2_div_1_h6_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h6", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" By ", item_r31.created_by, "");
  }
}
function AcquisitionCampaignListComponent_div_9_div_2_div_1_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small", 89)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](2, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](5, 1, item_r31.updated_at, "medium"), " ");
  }
}
function AcquisitionCampaignListComponent_div_9_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](3, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AcquisitionCampaignListComponent_div_9_div_2_div_1_label_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AcquisitionCampaignListComponent_div_9_div_2_div_1_label_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Inactive");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function AcquisitionCampaignListComponent_div_9_div_2_div_1_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 83)(1, "app-delete", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("deleteItemEvent", function AcquisitionCampaignListComponent_div_9_div_2_div_1_div_39_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r44.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("requestUrl", ctx_r39.config.delEndpoint + "/" + item_r31.id)("look", "bx");
  }
}
function AcquisitionCampaignListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 62)(1, "div", 63)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, AcquisitionCampaignListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, AcquisitionCampaignListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "h5", 66)(6, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AcquisitionCampaignListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r48);
      const item_r31 = restoredCtx.$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r47.onUpsertClick(item_r31.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, AcquisitionCampaignListComponent_div_9_div_2_div_1_h6_8_Template, 2, 1, "h6", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 0)(10, "div", 69)(11, "p", 70)(12, "small")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](14, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "div", 69)(19, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](20, AcquisitionCampaignListComponent_div_9_div_2_div_1_small_20_Template, 6, 4, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, AcquisitionCampaignListComponent_div_9_div_2_div_1_small_21_Template, 6, 0, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "div", 74)(25, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](27, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AcquisitionCampaignListComponent_div_9_div_2_div_1_Template_a_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r48);
      const item_r31 = restoredCtx.$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r49.onCopyClick(item_r31.code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](29, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "div")(31, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](32, AcquisitionCampaignListComponent_div_9_div_2_div_1_label_32_Template, 2, 0, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](33, AcquisitionCampaignListComponent_div_9_div_2_div_1_label_33_Template, 2, 0, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "div", 81)(35, "div", 82)(36, "div", 83)(37, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AcquisitionCampaignListComponent_div_9_div_2_div_1_Template_a_click_37_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r48);
      const item_r31 = restoredCtx.$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r50.onUpsertClick(item_r31.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](38, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](39, AcquisitionCampaignListComponent_div_9_div_2_div_1_div_39_Template, 2, 2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r31.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r31.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r31.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r30.config.showUserFilter && item_r31.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](17, 12, item_r31.created_at, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r31.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !item_r31.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r30.StringUtil.takeOnly(item_r31.description, 50, true), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r31.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r31.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !item_r31.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r30.config.showDeleteButton);
  }
}
function AcquisitionCampaignListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AcquisitionCampaignListComponent_div_9_div_2_div_1_Template, 40, 15, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r6.acquisitionCampaigns.content);
  }
}
function AcquisitionCampaignListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AcquisitionCampaignListComponent_div_9_div_1_Template, 28, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AcquisitionCampaignListComponent_div_9_div_2_Template, 2, 3, "div", 25);
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
class AcquisitionCampaignListComponent extends _base_components_base_list_v4_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV4 {
  componentName() {
    return AcquisitionCampaignListComponent.name;
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, acquisitionCampaignService, notifier, locale) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.acquisitionCampaignService = acquisitionCampaignService;
    this.notifier = notifier;
    this.locale = locale;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultAcquisitionCampaignConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.defaultFilterData;
    this.acquisitionCampaigns = _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__.defaultPage;
    if (authService.isAdmin()) {
      this.config.showUserFilter = true;
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.parseFilterData)(params);
      this.fetchAcquisitionCampaigns({
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
      text: "AcquisitionCampaigns",
      link: null,
      active: true
    }];
  }
  fetchAcquisitionCampaigns(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.ACQUISITIONCAMPAIGNS.SEARCH(params));
    this.acquisitionCampaignService.search(key, this.config.endpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.acquisitionCampaigns = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "AcquisitionCampaign is deleted");
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
    return _acquisitioncampaign_upsert_acquisitioncampaign_upsert_component__WEBPACK_IMPORTED_MODULE_5__.AcquisitionCampaignUpsertComponent;
  }
  onCopyClick(code) {
    _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_6__.TextUtility.copyToClipboard(window.location.hostname + "/" + this.locale + "/#/aq-campaigns/" + code + "/acquire");
    this.notifier.info("Success", "Code Copied");
  }
  static #_ = this.ɵfac = function AcquisitionCampaignListComponent_Factory(t) {
    return new (t || AcquisitionCampaignListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_acquisitioncampaign_service__WEBPACK_IMPORTED_MODULE_11__.AcquisitionCampaignService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.LOCALE_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: AcquisitionCampaignListComponent,
    selectors: [["app-acquisitioncampaign-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___5 = goog.getMsg("Id");
        i18n_4 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "Id";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___7 = goog.getMsg("Image");
        i18n_6 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "\u099B\u09AC\u09BF";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___9 = goog.getMsg("Title");
        i18n_8 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Code$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___11 = goog.getMsg("Code");
        i18n_10 = MSG_EXTERNAL_label_Code$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u0995\u09CB\u09A1";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___13 = goog.getMsg("Description");
        i18n_12 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___15 = goog.getMsg("Date");
        i18n_14 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___17 = goog.getMsg("Update");
        i18n_16 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS____19 = goog.getMsg("Created By");
        i18n_18 = MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS____19;
      } else {
        i18n_18 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS____21 = goog.getMsg("Delete");
        i18n_20 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS____21;
      } else {
        i18n_20 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Copy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS____23 = goog.getMsg("Copy");
        i18n_22 = MSG_EXTERNAL_label_Copy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS____23;
      } else {
        i18n_22 = "\u0995\u09AA\u09BF";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS____25 = goog.getMsg("Created");
        i18n_24 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS____25;
      } else {
        i18n_24 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS_____27 = goog.getMsg("Updated");
        i18n_26 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS_____27;
      } else {
        i18n_26 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS____29 = goog.getMsg("Created");
        i18n_28 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS____29;
      } else {
        i18n_28 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Copy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS____31 = goog.getMsg("Copy");
        i18n_30 = MSG_EXTERNAL_label_Copy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS____31;
      } else {
        i18n_30 = "\u0995\u09AA\u09BF";
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS_____33 = goog.getMsg("Updated");
        i18n_32 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS_____33;
      } else {
        i18n_32 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS_____35 = goog.getMsg("Updated");
        i18n_34 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_LIST_ACQUISITIONCAMPAIGN_LIST_COMPONENT_TS_____35;
      } else {
        i18n_34 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_4, i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, [4, "ngFor", "ngForOf"], i18n_18, i18n_20, [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], ["class", "badge bg-success", 4, "ngIf"], ["class", "badge bg-warning", 4, "ngIf"], ["href", "javascript: void(0);", 1, "font-size-10", 3, "click"], i18n_22, i18n_24, [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "badge", "bg-success"], [1, "badge", "bg-warning"], i18n_26, [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], i18n_28, [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], [1, "mb-2"], [1, "badge", "bg-info-subtle", "text-primary", "font-size-14"], ["href", "javascript:void(0);", 1, "badge", "bg-secondary-subtle", "text-secondary-emphasis", 3, "click"], i18n_30, ["href", "javascript: void(0);"], ["class", "badge bg-success font-size-11 m-1", 4, "ngIf"], ["class", "badge bg-warning font-size-11 m-1", 4, "ngIf"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [1, "font-size-10"], i18n_32, i18n_34, [1, "badge", "bg-success", "font-size-11", "m-1"], [1, "badge", "bg-warning", "font-size-11", "m-1"], [3, "requestUrl", "look", "deleteItemEvent"]];
    },
    template: function AcquisitionCampaignListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("layoutSelected", function AcquisitionCampaignListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("addButtonClick", function AcquisitionCampaignListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, AcquisitionCampaignListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, AcquisitionCampaignListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, AcquisitionCampaignListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("title", "AcquisitionCampaigns")("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.acquisitionCampaigns.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.acquisitionCampaigns.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("page", ctx.acquisitionCampaigns);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 24818:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/acquisitioncampaigns/components/acquisitioncampaign-select/acquisitioncampaign-select.component.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcquisitionCampaignSelectComponent: () => (/* binding */ AcquisitionCampaignSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _acquisitioncampaign_upsert_acquisitioncampaign_upsert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../acquisitioncampaign-upsert/acquisitioncampaign-upsert.component */ 99753);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/config.model */ 75492);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_acquisitioncampaign_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/acquisitioncampaign.service */ 56923);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);

















function AcquisitionCampaignSelectComponent_util_progress_2_Template(rf, ctx) {
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
class AcquisitionCampaignSelectComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  componentName() {
    return "AcquisitionCampaignSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, acquisitionCampaignService, popupService) {
    super(eventBus, router, subContainer);
    this.acquisitionCampaignService = acquisitionCampaignService;
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
    } else if (this.items.find(c => c.title == event.title)) {
      this.selected.emit(this.selectedItem);
    } else {
      let popup = this.popupService.open(_acquisitioncampaign_upsert_acquisitioncampaign_upsert_component__WEBPACK_IMPORTED_MODULE_2__.AcquisitionCampaignUpsertComponent, {
        id: null,
        dialogUpsert: true,
        title: event.title
      });
      popup.componentInstance.onCompleted.subscribe(acquisitioncampaign => {
        this.selected.emit(acquisitioncampaign);
      });
      popup.componentInstance.onCanceled.subscribe(() => {
        popup.close();
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.ACQUISITIONCAMPAIGNS.SEARCH(params));
    this.acquisitionCampaignService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function AcquisitionCampaignSelectComponent_Factory(t) {
    return new (t || AcquisitionCampaignSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_acquisitioncampaign_service__WEBPACK_IMPORTED_MODULE_8__.AcquisitionCampaignService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: AcquisitionCampaignSelectComponent,
    selectors: [["app-acquisitioncampaign-select"]],
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
    consts: [["for", "acquisitioncampaign-select", 1, "visually-hidden"], [3, "bar", 4, "ngIf"], ["id", "acquisitioncampaign-select", "bindLabel", "title", "placeholder", "Search AcquisitionCampaign", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "keyup", "ngModelChange", "change"], [3, "bar"]],
    template: function AcquisitionCampaignSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "AcquisitionCampaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, AcquisitionCampaignSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ng-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function AcquisitionCampaignSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function AcquisitionCampaignSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function AcquisitionCampaignSelectComponent_Template_ng_select_change_3_listener($event) {
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

/***/ 99753:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/acquisitioncampaigns/components/acquisitioncampaign-upsert/acquisitioncampaign-upsert.component.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcquisitionCampaignUpsertComponent: () => (/* binding */ AcquisitionCampaignUpsertComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v3.component */ 59890);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 75492);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_acquisitioncampaign_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/acquisitioncampaign.service */ 56923);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
















function AcquisitionCampaignUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "util-progress", 24);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("bar", true);
  }
}
class AcquisitionCampaignUpsertComponent extends _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV3 {
  constructor(eventBus, router, subContainer, route, acquisitionCampaignService, notifier, authService, orgService, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.acquisitionCampaignService = acquisitionCampaignService;
    this.notifier = notifier;
    this.orgService = orgService;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultAcquisitionCampaignConfig;
    this.acquisitionCampaignForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(3)]),
      code: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, []),
      active: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(true, []),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(10)]),
      org_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required])
      // image: new FormControl<string | null>(null)
    });

    if (authService.isAdmin()) {
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
    if (dialogData.title != null) {
      this.acquisitionCampaignForm.controls.title.setValue(dialogData.title);
    }
  }
  componentName() {
    return AcquisitionCampaignUpsertComponent.name;
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "AcquisitionCampaigns",
      link: "/dash/acquisitioncampaigns",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  ngOnInit() {
    super.ngOnInit();
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.ORGANIZATIONS.GET_MY_ORG());
    this.orgService.fetchMyOrgs(key);
    this.subscribe(key, null, (value, meta) => {
      let orgs = meta.data;
      if (orgs.length > 0) {
        this.acquisitionCampaignForm.controls.org_id.setValue(orgs[0].id);
      }
    });
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.ACQUISITIONCAMPAIGNS.GET(exId));
    this.acquisitionCampaignService.fetchSingle(key, this.config.endpoint, exId);
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
    if (!this.acquisitionCampaignForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  // onImgUploaded(images: IImageSlice[]) {
  //   if (images.length > 0) {
  //     /*
  //     Think about the thumbnail, this will only upload the image, not thumbnail
  //      */
  //     this.acquisitionCampaignForm.controls.image.setValue(images[0].image_url)
  //   }
  // }
  //
  // getExImages(): IImageSlice[] {
  //   let image = this.acquisitionCampaignForm.controls.image.value
  //   if (image == null) {
  //     return []
  //   }
  //   return [{image_url: image, thumb_url: image}]
  // }
  getConfig() {
    return this.config;
  }
  getListPageRoute() {
    return _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfRoutes.list;
  }
  upsert(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.ACQUISITIONCAMPAIGNS.UPSERT(exId));
    let req = this.acquisitionCampaignForm.value;
    this.acquisitionCampaignService.upsert(key, this.config.endpoint, req, exId);
    this.subscribe(key, null, (value, meta) => {
      this.notifier.success("Success", "Campaign has been " + (exId ? "updated" : "created"));
      this.acquisitionCampaignForm.reset();
      this.onSuccess(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    this.acquisitionCampaignForm.controls.title.setValue(n.title);
    this.acquisitionCampaignForm.controls.code.setValue(n.code);
    this.acquisitionCampaignForm.controls.active.setValue(n.active);
    this.acquisitionCampaignForm.controls.description.setValue(n.description);
    // this.acquisitionCampaignForm.controls.image.setValue(n.image == null ? null : n.image)
  }
  static #_ = this.ɵfac = function AcquisitionCampaignUpsertComponent_Factory(t) {
    return new (t || AcquisitionCampaignUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_acquisitioncampaign_service__WEBPACK_IMPORTED_MODULE_5__.AcquisitionCampaignService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_8__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: AcquisitionCampaignUpsertComponent,
    selectors: [["app-acquisitioncampaign-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
    decls: 36,
    vars: 6,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_UPSERT_ACQUISITIONCAMPAIGN_UPSERT_COMPONENT_TS_1 = goog.getMsg("Title");
        i18n_0 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_UPSERT_ACQUISITIONCAMPAIGN_UPSERT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Active$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_UPSERT_ACQUISITIONCAMPAIGN_UPSERT_COMPONENT_TS_3 = goog.getMsg("Active");
        i18n_2 = MSG_EXTERNAL_label_Active$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_UPSERT_ACQUISITIONCAMPAIGN_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u0985\u09CD\u09AF\u09BE\u0995\u099F\u09BF\u09AD";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_UPSERT_ACQUISITIONCAMPAIGN_UPSERT_COMPONENT_TS_5 = goog.getMsg("Description");
        i18n_4 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ACQUISITIONCAMPAIGNS_COMPONENTS_ACQUISITIONCAMPAIGN_UPSERT_ACQUISITIONCAMPAIGN_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "mb-3"], ["for", "title-input", 1, "form-label"], i18n_0, [1, "error"], ["type", "text", "id", "title-input", "placeholder", "Enter Title", "name", "title", "formControlName", "title", 1, "form-control"], [1, "text-danger"], [1, "mt-3"], [1, "form-check", "form-switch", "mb-3"], ["type", "checkbox", "id", "light-mode-switch", "formControlName", "active", 1, "form-check-input", "theme-choice"], ["for", "light-mode-switch", 1, "form-check-label"], i18n_2, ["for", "description", 1, "form-label"], i18n_4, ["id", "description", "placeholder", "Enter Description", "rows", "5", "name", "description", "formControlName", "description", 1, "form-control"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], [3, "bar"]];
    },
    template: function AcquisitionCampaignUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, AcquisitionCampaignUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Create/Update Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "form", 6)(8, "div", 7)(9, "label", 8)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 13)(18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](21, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 7)(23, "label", 18)(24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](25, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "div", 21)(32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AcquisitionCampaignUpsertComponent_Template_button_click_32_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function AcquisitionCampaignUpsertComponent_Template_button_click_34_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.acquisitionCampaignForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.acquisitionCampaignForm, "title", "minLength", "Title should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.acquisitionCampaignForm, "description", "minLength", "Description should be at least 20 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.acquisitionCampaignForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_9__.ProgressComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 75492:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/acquisitioncampaigns/models/config.model.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAcquisitionCampaignConfig: () => (/* binding */ defaultAcquisitionCampaignConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/modules/generic/breadcrumb/breadcrumb.model */ 97989);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 77986);


let selfEndpoints = {
  endpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ACQUISITIONCAMPAIGNS.ACQUISITIONCAMPAIGN_ENDPOINT,
  adminEndpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ACQUISITIONCAMPAIGNS.ACQUISITIONCAMPAIGN_ENDPOINT_ADMIN
};
let defaultAcquisitionCampaignConfig = {
  defaultLayout: _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.GRID,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  endpoint: selfEndpoints.endpoint,
  delEndpoint: selfEndpoints.endpoint
};
let selfRoutes = {
  list: "/dash/sales/acquisition-campaigns",
  create: "/dash/sales/acquisition-campaigns/create",
  update(id) {
    return id == null ? this.create : "/dash/acquisition-campaigns/" + id + '/update';
  }
};

/***/ }),

/***/ 56923:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/acquisitioncampaigns/services/acquisitioncampaign.service.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcquisitionCampaignService: () => (/* binding */ AcquisitionCampaignService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 77986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class AcquisitionCampaignService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ACQUISITIONCAMPAIGNS.SEARCH(endpoint, params);
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
    this.http.get(_sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ACQUISITIONCAMPAIGNS.GET(endpoint, id)).subscribe(data => {
      this.eventBusService.publish(key, data.body);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, endpoint, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, endpoint, acquisitionCampaignReq, exId) {
    let url = exId == null ? _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ACQUISITIONCAMPAIGNS.CREATE(endpoint) : _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ACQUISITIONCAMPAIGNS.UPDATE(endpoint, exId);
    let observable = exId == null ? this.http.post(url, acquisitionCampaignReq) : this.http.patch(url, acquisitionCampaignReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res.body);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, endpoint, acquisitionCampaignReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function AcquisitionCampaignService_Factory(t) {
    return new (t || AcquisitionCampaignService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: AcquisitionCampaignService,
    factory: AcquisitionCampaignService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 73767:
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/customers/components/customer-list/customer-list.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerListComponent: () => (/* binding */ CustomerListComponent)
/* harmony export */ });
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 17588);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer-upsert/customer-upsert.component */ 66869);
/* harmony import */ var _organizations_components_org_base_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../organizations/components/org-base-list.component */ 75801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/customer.service */ 63408);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);





















function CustomerListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("bar", true);
  }
}
function CustomerListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function CustomerListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function CustomerListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, CustomerListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, CustomerListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
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
function CustomerListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function CustomerListComponent_div_9_div_1_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function CustomerListComponent_div_9_div_1_tr_25_td_3_Template(rf, ctx) {
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
function CustomerListComponent_div_9_div_1_tr_25_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r10.name.substring(0, 1).toUpperCase(), " ");
  }
}
function CustomerListComponent_div_9_div_1_tr_25_td_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 45)(1, "app-delete", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("deleteItemEvent", function CustomerListComponent_div_9_div_1_tr_25_td_17_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r16.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("requestUrl", ctx_r13.config.delEndpoint + "/" + item_r10.id);
  }
}
function CustomerListComponent_div_9_div_1_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, CustomerListComponent_div_9_div_1_tr_25_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "td")(5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, CustomerListComponent_div_9_div_1_tr_25_span_6_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "td")(8, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CustomerListComponent_div_9_div_1_tr_25_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r20);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r19.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "td", 45)(15, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CustomerListComponent_div_9_div_1_tr_25_Template_a_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r20);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r21.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](16, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](17, CustomerListComponent_div_9_div_1_tr_25_td_17_Template, 2, 1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r9.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r10.name != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r10.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r10.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r9.config.showDeleteButton);
  }
}
function CustomerListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](5, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 31)(7, "table", 32)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](11, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, CustomerListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](14, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](16, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](18, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](20, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](22, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](23, CustomerListComponent_div_9_div_1_th_23_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](25, CustomerListComponent_div_9_div_1_tr_25_Template, 18, 7, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r5.customers.content);
  }
}
function CustomerListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 65)(1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r23.name.substring(0, 1).toUpperCase(), " ");
  }
}
function CustomerListComponent_div_9_div_2_div_1_h6_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h6", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("By ", item_r23.created_by, "");
  }
}
function CustomerListComponent_div_9_div_2_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 62)(1, "app-delete", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("deleteItemEvent", function CustomerListComponent_div_9_div_2_div_1_div_19_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r29.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("requestUrl", ctx_r26.config.delEndpoint + "/" + item_r23.id)("look", "bx");
  }
}
function CustomerListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 52)(1, "div", 53)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, CustomerListComponent_div_9_div_2_div_1_div_3_Template, 3, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "h5", 55)(5, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CustomerListComponent_div_9_div_2_div_1_Template_a_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r33);
      const item_r23 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r32.onUpsertClick(item_r23.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, CustomerListComponent_div_9_div_2_div_1_h6_7_Template, 2, 1, "h6", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div")(11, "a", 58)(12, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 60)(15, "div", 61)(16, "div", 62)(17, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function CustomerListComponent_div_9_div_2_div_1_Template_a_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r33);
      const item_r23 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r34.onUpsertClick(item_r23.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](18, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, CustomerListComponent_div_9_div_2_div_1_div_19_Template, 2, 2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r23.name != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r23.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r22.config.showUserFilter && item_r23.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", item_r23.phone, " | ", item_r23.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r22.config.showDeleteButton);
  }
}
function CustomerListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, CustomerListComponent_div_9_div_2_div_1_Template, 20, 6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r6.customers.content);
  }
}
function CustomerListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, CustomerListComponent_div_9_div_1_Template, 26, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, CustomerListComponent_div_9_div_2_Template, 2, 3, "div", 25);
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
class CustomerListComponent extends _organizations_components_org_base_list_component__WEBPACK_IMPORTED_MODULE_5__.BaseListComponentForOrg {
  componentName() {
    return "CustomerListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, customerService, notifier, orgService) {
    super(eventBus, router, subContainer, dialog, orgService);
    this.activatedRoute = activatedRoute;
    this.customerService = customerService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.defaultCustomerConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.defaultFilterData;
    this.customers = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    if (authService.isAdmin()) {
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfEndpoints.adminEndpoint;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.parseFilterData)(params);
      this.onOrgLoaded(orgId => {
        this.fetchCustomers({
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
      text: this.translations["Customers"],
      link: null,
      active: true
    }];
  }
  fetchCustomers(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.CUSTOMERS.SEARCH(params));
    this.customerService.search(key, this.config.endpoint, params);
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
      create: _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfRoutes.create,
      update: id => _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfRoutes.update(id),
      params: (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.toParams)(this.filterData)
    };
  }
  getUpsertComponent() {
    return _customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_4__.CustomerUpsertComponent;
  }
  static #_ = this.ɵfac = function CustomerListComponent_Factory(t) {
    return new (t || CustomerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_10__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_12__.OrganizationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: CustomerListComponent,
    selectors: [["app-customer-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Customers$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___5 = goog.getMsg("Customers that I've created");
        i18n_4 = MSG_EXTERNAL_msg_Customers$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u0986\u09AE\u09BE\u09B0 \u09A4\u09C8\u09B0\u09BF\u0995\u09C3\u09A4 \u0995\u09CD\u09B0\u09C7\u09A4\u09BE\u0997\u09A3";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___7 = goog.getMsg("Id");
        i18n_6 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "Id";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___9 = goog.getMsg("Image");
        i18n_8 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u099B\u09AC\u09BF";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___11 = goog.getMsg("Name");
        i18n_10 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u09A8\u09BE\u09AE";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___13 = goog.getMsg("Phone");
        i18n_12 = MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09AB\u09CB\u09A8";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___15 = goog.getMsg("Email");
        i18n_14 = MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u0987\u09AE\u09C7\u0987\u09B2";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___17 = goog.getMsg("Update");
        i18n_16 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS____19 = goog.getMsg("Created By");
        i18n_18 = MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS____19;
      } else {
        i18n_18 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS____21 = goog.getMsg("Delete");
        i18n_20 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_LIST_CUSTOMER_LIST_COMPONENT_TS____21;
      } else {
        i18n_20 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], i18n_4, [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, [4, "ngFor", "ngForOf"], i18n_18, i18n_20, [1, "avatar-sm", "mx-auto"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "bg-success", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [3, "requestUrl", "look", "deleteItemEvent"]];
    },
    template: function CustomerListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("layoutSelected", function CustomerListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("addButtonClick", function CustomerListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, CustomerListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, CustomerListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, CustomerListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("title", ctx.translations["My Customers"])("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.customers.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.customers.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("page", ctx.customers);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 46830:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/customers/components/customer-select/customer-select.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerSelectComponent: () => (/* binding */ CustomerSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customer-upsert/customer-upsert.component */ 66869);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 17588);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _organizations_components_org_base_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../organizations/components/org-base-select.component */ 37339);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/customer.service */ 63408);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);


















function CustomerSelectComponent_util_progress_2_Template(rf, ctx) {
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
class CustomerSelectComponent extends _organizations_components_org_base_select_component__WEBPACK_IMPORTED_MODULE_4__.BaseComponentForOrg {
  componentName() {
    return CustomerSelectComponent.name;
  }
  constructor(eventBus, router, subContainer, authService, customerService, popupService, orgService) {
    super(eventBus, router, subContainer, orgService);
    this.customerService = customerService;
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
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.CUSTOMERS.SEARCH(params));
    this.customerService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.body.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function CustomerSelectComponent_Factory(t) {
    return new (t || CustomerSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_customer_service__WEBPACK_IMPORTED_MODULE_8__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_10__.OrganizationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 9,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Customer$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_SELECT_CUSTOMER_SELECT_COMPONENT_TS_1 = goog.getMsg("Customer");
        i18n_0 = MSG_EXTERNAL_label_Customer$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_SELECT_CUSTOMER_SELECT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u0995\u09CD\u09B0\u09C7\u09A4\u09BE";
      }
      return [["for", "customer-select", 1, "visually-hidden"], i18n_0, [3, "bar", 4, "ngIf"], ["id", "customer-select", "bindLabel", "label", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "placeholder", "keyup", "ngModelChange", "change"], [3, "bar"]];
    },
    template: function CustomerSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, CustomerSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ng-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function CustomerSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function CustomerSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function CustomerSelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Search Customer.."]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.items)("hideSelected", true)("multiple", false)("addTag", ctx.enableAdd)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](8, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__.ProgressComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 66869:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/customers/components/customer-upsert/customer-upsert.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerUpsertComponent: () => (/* binding */ CustomerUpsertComponent)
/* harmony export */ });
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 17588);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v3.component */ 59890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/customer.service */ 63408);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _inventory_vendors_components_vendor_select_vendor_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../inventory/vendors/components/vendor-select/vendor-select.component */ 14096);















function CustomerUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "util-progress", 28);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("bar", true);
  }
}
class CustomerUpsertComponent extends _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_2__.BaseUpsertComponentV3 {
  constructor(eventBus, router, subContainer, route, customerService, notifier, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.customerService = customerService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.defaultCustomerConfig;
    this.customerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null),
      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("^[0-9]*$")]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.email]),
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
      link: "/dash/customers",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.CUSTOMERS.GET(exId));
    this.customerService.fetchSingle(key, this.config.endpoint, exId);
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
    return _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfRoutes.list;
  }
  upsert(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.CUSTOMERS.UPSERT(exId));
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
    decls: 42,
    vars: 11,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpsertCustomer$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_1 = goog.getMsg("Create/Update Customer");
        i18n_0 = MSG_EXTERNAL_label_UpsertCustomer$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u0995\u09CD\u09B0\u09C7\u09A4\u09BE \u09A4\u09C8\u09B0\u09BF/\u0986\u09AA\u09A1\u09C7\u099F \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_3 = goog.getMsg("Name");
        i18n_2 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09A8\u09BE\u09AE";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_5 = goog.getMsg("Phone");
        i18n_4 = MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u09AB\u09CB\u09A8";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_7 = goog.getMsg("Email");
        i18n_6 = MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u0987\u09AE\u09C7\u0987\u09B2";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Store$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_9 = goog.getMsg("Store");
        i18n_8 = MSG_EXTERNAL_label_Store$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_9;
      } else {
        i18n_8 = "\u09B8\u09CD\u099F\u09CB\u09B0";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_11 = goog.getMsg("Cancel");
        i18n_10 = MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_11;
      } else {
        i18n_10 = "\u09AC\u09BE\u09A4\u09BF\u09B2";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Submit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_13 = goog.getMsg("Submit");
        i18n_12 = MSG_EXTERNAL_label_Submit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_CUSTOMERS_COMPONENTS_CUSTOMER_UPSERT_CUSTOMER_UPSERT_COMPONENT_TS_13;
      } else {
        i18n_12 = "\u099C\u09AE\u09BE \u09A6\u09BF\u09A8";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], i18n_0, [3, "formGroup"], [1, "mb-3"], ["for", "name-input", 1, "form-label"], i18n_2, ["type", "text", "id", "name-input", "name", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["for", "phone-input", 1, "form-label"], i18n_4, [1, "error"], ["type", "text", "id", "phone-input", "name", "phone", "formControlName", "phone", 1, "form-control", 3, "placeholder"], [1, "text-danger"], ["for", "email-input", 1, "form-label"], i18n_6, ["type", "email", "id", "email-input", "name", "email", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["for", "shop-input", 1, "form-label"], i18n_8, ["id", "shop-input", 3, "selectedItem", "selected"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], i18n_10, ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], i18n_12, [3, "bar"]];
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "em", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 8)(29, "label", 20)(30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](31, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "em", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "app-vendor-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selected", function CustomerUpsertComponent_Template_app_vendor_select_selected_34_listener($event) {
          return ctx.onVendorSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 23)(36, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CustomerUpsertComponent_Template_button_click_36_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](38, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CustomerUpsertComponent_Template_button_click_39_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](41, 27);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Enter Email"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.customerForm, "email", "email", "Email is invalid!"), " ");
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

/***/ 3433:
/*!****************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/customers/customer.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerComponent: () => (/* binding */ CustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/customer-list/customer-list.component */ 73767);


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

/***/ 17588:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/customers/models/config.model.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultCustomerConfig: () => (/* binding */ defaultCustomerConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/modules/generic/breadcrumb/breadcrumb.model */ 97989);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 77986);


let defaultCustomerConfig = {
  defaultLayout: _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.COLUMN,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  endpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.CUSTOMERS.CUSTOMER_ENDPOINT,
  delEndpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.CUSTOMERS.CUSTOMER_ENDPOINT
};
let selfEndpoints = {
  endpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.CUSTOMERS.CUSTOMER_ENDPOINT,
  adminEndpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.CUSTOMERS.CUSTOMER_ENDPOINT_ADMIN
};
let selfRoutes = {
  list: "/dash/sales/customers",
  create: "/dash/sales/customers/create",
  update(id) {
    return id == null ? this.create : "/dash/sales/customers/" + id + '/update';
  }
};

/***/ }),

/***/ 63408:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/customers/services/customer.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerService: () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 77986);
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

/***/ 24820:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leadpropagations/components/leadpropagation-list/leadpropagation-list.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadPropagationListComponent: () => (/* binding */ LeadPropagationListComponent)
/* harmony export */ });
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 45510);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _leadpropagation_upsert_leadpropagation_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../leadpropagation-upsert/leadpropagation-upsert.component */ 80397);
/* harmony import */ var _organizations_components_org_base_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../organizations/components/org-base-list.component */ 75801);
/* harmony import */ var _layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../layout/left-nav/menu.model */ 2258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_leadpropagation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/leadpropagation.service */ 47934);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);





















const _c0 = function () {
  return ["/dash/sales/leads"];
};
const _c1 = function (a0) {
  return {
    assignee_id: a0
  };
};
function LeadPropagationListComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "div", 14)(5, "a", 15)(6, "h6", 16)(7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "h3", 18)(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 19)(13, "div", 20)(14, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](15, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](4, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](5, _c1, a_r5.employee_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", a_r5.employee_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](a_r5.count);
  }
}
function LeadPropagationListComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, LeadPropagationListComponent_div_3_div_1_Template, 16, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r0.activities);
  }
}
function LeadPropagationListComponent_util_progress_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "util-progress", 23);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("bar", true);
  }
}
function LeadPropagationListComponent_div_9_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function LeadPropagationListComponent_div_9_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function LeadPropagationListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "div", 0)(3, "div", 26)(4, "div", 27)(5, "h1", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, LeadPropagationListComponent_div_9_h4_7_Template, 2, 0, "h4", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, LeadPropagationListComponent_div_9_h4_8_Template, 2, 0, "h4", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 32)(10, "div", 33)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](12, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
  }
}
function LeadPropagationListComponent_div_10_div_1_tr_20_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "img", 56);
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("src", item_r11.image, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
  }
}
function LeadPropagationListComponent_div_10_div_1_tr_20_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r11.lead_title.substring(0, 1).toUpperCase(), " ");
  }
}
function LeadPropagationListComponent_div_10_div_1_tr_20_small_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small")(1, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", item_r11.follow_up_date > ctx_r14.currentDate ? "bg-primary" : "bg-info");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](3, 2, item_r11.follow_up_date, "medium"), " ");
  }
}
function LeadPropagationListComponent_div_10_div_1_tr_20_small_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function LeadPropagationListComponent_div_10_div_1_tr_20_div_33_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "span", 61);
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("innerHTML", item_r11.comment.content, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeHtml"]);
  }
}
function LeadPropagationListComponent_div_10_div_1_tr_20_div_33_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 62)(1, "div", 63)(2, "h2", 64)(3, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, " Click to see Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 66)(6, "div", 67)(7, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("data-bs-target", "#collapse" + item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("id", "collapse", item_r11.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("innerHTML", item_r11.comment.content, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeHtml"]);
  }
}
function LeadPropagationListComponent_div_10_div_1_tr_20_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, LeadPropagationListComponent_div_10_div_1_tr_20_div_33_span_1_Template, 1, 1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, LeadPropagationListComponent_div_10_div_1_tr_20_div_33_div_2_Template, 9, 3, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r11.comment.content.length <= 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r11.comment.content.length > 100);
  }
}
const _c16 = function (a1) {
  return ["/dash/sales/leads", a1, "update"];
};
function LeadPropagationListComponent_div_10_div_1_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "td")(4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, LeadPropagationListComponent_div_10_div_1_tr_20_img_5_Template, 1, 1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, LeadPropagationListComponent_div_10_div_1_tr_20_span_6_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, LeadPropagationListComponent_div_10_div_1_tr_20_small_8_Template, 4, 5, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, LeadPropagationListComponent_div_10_div_1_tr_20_small_9_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "td")(11, "small")(12, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "span")(17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19, " moved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "a", 54)(21, "span")(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "small", 55)(26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](28, " to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "small", 55)(30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](33, LeadPropagationListComponent_div_10_div_1_tr_20_div_33_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r11.image != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r11.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r11.follow_up_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !item_r11.follow_up_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](14, 18, item_r11.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r11.action_taken_by == null ? item_r11.org_name : item_r11.action_taken_by.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](21, _c16, item_r11.lead_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r11.lead_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵstyleMapInterpolate1"]("background-color: ", item_r11.stage_from_color, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r11.stage_from_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵstyleMapInterpolate1"]("background-color: ", item_r11.stage_to_color, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r11.stage_to_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r11.comment);
  }
}
function LeadPropagationListComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 40)(2, "div", 41)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 43)(6, "table", 44)(7, "thead")(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](10, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](12, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](14, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](16, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](18, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](20, LeadPropagationListComponent_div_10_div_1_tr_20_Template, 34, 23, "tr", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@dataLoaded", ctx_r8.loading ? "loading" : "loaded")("@onColumn", ctx_r8.layout == ctx_r8.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r8.leadPropagations.content);
  }
}
function LeadPropagationListComponent_div_10_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("src", item_r26.image, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
  }
}
function LeadPropagationListComponent_div_10_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 85)(1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r26.lead_title.substring(0, 1).toUpperCase(), " ");
  }
}
function LeadPropagationListComponent_div_10_div_2_div_1_h6_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h6", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" By ", item_r26.created_by, "");
  }
}
function LeadPropagationListComponent_div_10_div_2_div_1_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small", 87)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](2, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](5, 1, item_r26.updated_at, "medium"), " ");
  }
}
function LeadPropagationListComponent_div_10_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](3, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function LeadPropagationListComponent_div_10_div_2_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div")(1, "div", 90)(2, "div", 63)(3, "h2", 91)(4, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, " Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 92)(7, "div", 67)(8, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div")(11, "a", 93)(12, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "a", 93)(15, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("data-bs-target", "#collapse" + item_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("id", "collapse", item_r26.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("innerHTML", item_r26.comment.content, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵstyleMapInterpolate1"]("background-color: ", item_r26.stage_from_color, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("From: ", item_r26.stage_from_title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵstyleMapInterpolate1"]("background-color: ", item_r26.stage_to_color, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("To: ", item_r26.stage_to_title, "");
  }
}
function LeadPropagationListComponent_div_10_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 70)(1, "div", 71)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, LeadPropagationListComponent_div_10_div_2_div_1_div_3_Template, 2, 1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, LeadPropagationListComponent_div_10_div_2_div_1_div_4_Template, 3, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "h5", 74)(6, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function LeadPropagationListComponent_div_10_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r39);
      const item_r26 = restoredCtx.$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r38.onUpsertClick(item_r26.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, LeadPropagationListComponent_div_10_div_2_div_1_h6_8_Template, 2, 1, "h6", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 0)(10, "div", 77)(11, "p", 78)(12, "small")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](14, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "div", 77)(19, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](20, LeadPropagationListComponent_div_10_div_2_div_1_small_20_Template, 6, 4, "small", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, LeadPropagationListComponent_div_10_div_2_div_1_small_21_Template, 6, 0, "small", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](22, LeadPropagationListComponent_div_10_div_2_div_1_div_22_Template, 17, 11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](24, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r26.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r26.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r26.lead_title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r25.config.showUserFilter && item_r26.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](17, 8, item_r26.created_at, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r26.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !item_r26.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r26.comment);
  }
}
function LeadPropagationListComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, LeadPropagationListComponent_div_10_div_2_div_1_Template, 25, 11, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@dataLoaded", ctx_r9.loading ? "loading" : "loaded")("@onGrid", ctx_r9.layout == ctx_r9.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r9.leadPropagations.content);
  }
}
function LeadPropagationListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, LeadPropagationListComponent_div_10_div_1_Template, 21, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, LeadPropagationListComponent_div_10_div_2_Template, 2, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "app-pagination", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r3.layout === ctx_r3.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r3.layout === ctx_r3.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("page", ctx_r3.leadPropagations);
  }
}
class LeadPropagationListComponent extends _organizations_components_org_base_list_component__WEBPACK_IMPORTED_MODULE_5__.BaseListComponentForOrg {
  componentName() {
    return LeadPropagationListComponent.name;
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, leadPropagationService, notifier, orgService) {
    super(eventBus, router, subContainer, dialog, orgService);
    this.activatedRoute = activatedRoute;
    this.leadPropagationService = leadPropagationService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.defaultLeadPropagationConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.defaultFilterData;
    this.leadPropagations = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    this.activities = [];
    this.currentDate = new Date();
    if (authService.isAdmin()) {
      this.config.showUserFilter = true;
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfEndpoints.adminEndpoint;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.onOrgLoaded(orgId => {
        this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.parseFilterData)(params);
        this.fetchLeadPropagations({
          q: this.filterData.query,
          username: this.filterData.username,
          from_date: this.filterData.fromDate,
          to_date: this.filterData.toDate,
          page: this.filterData.page,
          size: this.filterData.size,
          lead_id: this.filterData.extra["lead_id"],
          org_id: orgId
        }, () => {
          this.fetchEmployeeActivities({
            org_id: orgId,
            from_date: this.filterData.fromDate,
            to_date: this.filterData.toDate
          });
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
      text: _layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_6__.translations["Activities"],
      link: null,
      active: true
    }];
  }
  fetchLeadPropagations(params, block) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.LEADPROPAGATIONS.SEARCH(params));
    this.leadPropagationService.search(key, this.config.endpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.leadPropagations = meta.data;
      this.loading = false;
      block();
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  fetchEmployeeActivities(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.LEADPROPAGATIONS.EMPLOYEE_ACTIVITIES(params));
    this.leadPropagationService.fetchEmployeeActivities(key, params);
    this.subscribe(key, null, (value, meta) => {
      this.activities = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "LeadPropagation is deleted");
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
    return _leadpropagation_upsert_leadpropagation_upsert_component__WEBPACK_IMPORTED_MODULE_4__.LeadPropagationUpsertComponent;
  }
  static #_ = this.ɵfac = function LeadPropagationListComponent_Factory(t) {
    return new (t || LeadPropagationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_leadpropagation_service__WEBPACK_IMPORTED_MODULE_11__.LeadPropagationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_13__.OrganizationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: LeadPropagationListComponent,
    selectors: [["app-leadpropagation-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: function () {
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS___3 = goog.getMsg("Cooking your data, please wait..");
        i18n_2 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS___5 = goog.getMsg("No items");
        i18n_4 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS___7 = goog.getMsg("Id");
        i18n_6 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "Id";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS___9 = goog.getMsg("Image");
        i18n_8 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u099B\u09AC\u09BF";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_FollowUp$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS___11 = goog.getMsg("Follow Up");
        i18n_10 = MSG_EXTERNAL_label_FollowUp$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u09AB\u09B2\u09CB\u0986\u09AA";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS___13 = goog.getMsg("Description");
        i18n_12 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Comment$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS___15 = goog.getMsg("Comment");
        i18n_14 = MSG_EXTERNAL_label_Comment$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09AE\u09A8\u09CD\u09A4\u09AC\u09CD\u09AF";
      }
      let i18n_17;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS____18 = goog.getMsg("Created");
        i18n_17 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS____18;
      } else {
        i18n_17 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_19;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS_____20 = goog.getMsg("Updated");
        i18n_19 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS_____20;
      } else {
        i18n_19 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_21;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS_____22 = goog.getMsg("Updated");
        i18n_21 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_LIST_LEADPROPAGATION_LIST_COMPONENT_TS_____22;
      } else {
        i18n_21 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], ["class", "row", 4, "ngIf"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], ["class", "col-sm-3", 4, "ngFor", "ngForOf"], [1, "col-sm-3"], [1, "card", "blog-stats-wid"], [1, "card-body"], [1, "d-flex", "flex-wrap"], [1, "me-3"], ["href", "javascript: void(0)"], [1, "mb-3"], ["href", "javascript:void(0);", 3, "routerLink", "queryParams"], [1, "mb-0", "mt-2", "text-primary"], [1, "avatar-sm", "ms-auto"], [1, "avatar-title", "bg-light", "rounded-circle", "text-primary", "font-size-20"], ["href", "javascript:void(0);", 1, "text-primary"], [1, "bx", "bx-info-circle"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_2, [1, "text-uppercase"], i18n_4, [3, "page"], [1, "col-12"], [1, "card"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, [4, "ngFor", "ngForOf"], [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["href", "javascript: void(0);", 3, "routerLink"], [1, "badge", "font-size-10"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "badge", 3, "ngClass"], [3, "innerHTML", 4, "ngIf"], ["class", "accordion", 4, "ngIf"], [3, "innerHTML"], [1, "accordion"], [1, "accordion-item"], ["id", "headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button", "fw-medium", "collapsed"], ["aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body"], [1, "text-muted"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], i18n_17, [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [1, "font-size-10"], i18n_19, i18n_21, [1, "accordion", "mb-2"], ["id", "headingOne", 1, "accordion-header"], ["aria-labelledby", "headingOne", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", 3, "id"], ["href", "javascript: void(0);"], [1, "badge", "font-size-11", "m-1"]];
    },
    template: function LeadPropagationListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("layoutSelected", function LeadPropagationListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, LeadPropagationListComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 0)(5, "div", 1)(6, "div", 4)(7, "app-basic-filter", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("addButtonClick", function LeadPropagationListComponent_Template_app_basic_filter_addButtonClick_7_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, LeadPropagationListComponent_util_progress_8_Template, 1, 1, "util-progress", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, LeadPropagationListComponent_div_9_Template, 13, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, LeadPropagationListComponent_div_10_Template, 4, 3, "div", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("title", ctx.translations["Activities"])("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.activities.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.leadPropagations.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.leadPropagations.empty);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_14__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_16__.BasicFilterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLink, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78065:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leadpropagations/components/leadpropagation-select/leadpropagation-select.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadPropagationSelectComponent: () => (/* binding */ LeadPropagationSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _leadpropagation_upsert_leadpropagation_upsert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../leadpropagation-upsert/leadpropagation-upsert.component */ 80397);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/config.model */ 45510);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_leadpropagation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/leadpropagation.service */ 47934);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);

















function LeadPropagationSelectComponent_util_progress_2_Template(rf, ctx) {
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
class LeadPropagationSelectComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  componentName() {
    return "LeadPropagationSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, leadPropagationService, popupService) {
    super(eventBus, router, subContainer);
    this.leadPropagationService = leadPropagationService;
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
    } else if (this.items.find(c => c.lead_title == event.lead_title)) {
      this.selected.emit(this.selectedItem);
    } else {
      let popup = this.popupService.open(_leadpropagation_upsert_leadpropagation_upsert_component__WEBPACK_IMPORTED_MODULE_2__.LeadPropagationUpsertComponent, {
        id: null,
        dialogUpsert: true,
        lead_id: event.lead_id
      });
      popup.componentInstance.onCompleted.subscribe(leadpropagation => {
        this.selected.emit(leadpropagation);
      });
      popup.componentInstance.onCanceled.subscribe(() => {
        popup.close();
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.LEADPROPAGATIONS.SEARCH(params));
    this.leadPropagationService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function LeadPropagationSelectComponent_Factory(t) {
    return new (t || LeadPropagationSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_leadpropagation_service__WEBPACK_IMPORTED_MODULE_8__.LeadPropagationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: LeadPropagationSelectComponent,
    selectors: [["app-leadpropagation-select"]],
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
    consts: [["for", "leadpropagation-select", 1, "visually-hidden"], [3, "bar", 4, "ngIf"], ["id", "leadpropagation-select", "bindLabel", "lead_title", "placeholder", "Search LeadPropagation", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "keyup", "ngModelChange", "change"], [3, "bar"]],
    template: function LeadPropagationSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "LeadPropagation");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, LeadPropagationSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ng-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function LeadPropagationSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function LeadPropagationSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function LeadPropagationSelectComponent_Template_ng_select_change_3_listener($event) {
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

/***/ 80397:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leadpropagations/components/leadpropagation-upsert/leadpropagation-upsert.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadPropagationUpsertComponent: () => (/* binding */ LeadPropagationUpsertComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v3.component */ 59890);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 45510);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/time.utility */ 62739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_leadpropagation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/leadpropagation.service */ 47934);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/editor/editor.component */ 16265);
/* harmony import */ var _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../common/modules/cms/files/components/filepicker/filepicker.component */ 7247);
/* harmony import */ var _leads_components_lead_select_lead_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../leads/components/lead-select/lead-select.component */ 65475);
/* harmony import */ var _leadstages_components_leadstage_select_leadstage_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../leadstages/components/leadstage-select/leadstage-select.component */ 86367);





















function LeadPropagationUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "util-progress", 29);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("bar", true);
  }
}
class LeadPropagationUpsertComponent extends _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV3 {
  constructor(eventBus, router, subContainer, route, leadPropagationService, notifier, authService, orgService, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.leadPropagationService = leadPropagationService;
    this.notifier = notifier;
    this.orgService = orgService;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultLeadPropagationConfig;
    this.readonly = false;
    this.selectedStage = null;
    this.selectedLead = null;
    this.currentDate = new Date();
    this.leadPropagationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({
      stage_to: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
      image: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
      lead_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
      org_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
      follow_up_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
      comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({
        content: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(10)]),
        type: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('INTERNAL')
      })
    });
    if (authService.isAdmin()) {
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
    if (dialogData.lead_id != null) {
      this.leadPropagationForm.controls.lead_id.setValue(dialogData.lead_id);
    }
    if (dialogData.lead != null) {
      this.selectedLead = dialogData.lead;
      this.selectedStage = this.selectedLead == null ? null : this.selectedLead.stage;
      this.leadPropagationForm.controls.lead_id.setValue(this.selectedLead == null ? null : this.selectedLead.id);
      this.leadPropagationForm.controls.stage_to.setValue(this.selectedStage == null ? null : this.selectedStage.id);
      this.readonly = true;
    }
  }
  ngOnInit() {
    super.ngOnInit();
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.ORGANIZATIONS.GET_MY_ORG());
    this.orgService.fetchMyOrgs(key);
    this.subscribe(key, null, (value, meta) => {
      let orgs = meta.data;
      if (orgs.length > 0) {
        this.leadPropagationForm.controls.org_id.setValue(orgs[0].id);
      }
    });
  }
  componentName() {
    return LeadPropagationUpsertComponent.name;
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Activities",
      link: "/dash/lead-propagations",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.LEADPROPAGATIONS.GET(exId));
    this.leadPropagationService.fetchSingle(key, this.config.endpoint, exId);
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
    if (!this.leadPropagationForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  onImgUploaded(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.leadPropagationForm.controls.image.setValue(images[0].image_url);
    }
  }
  getExImages() {
    let image = this.leadPropagationForm.controls.image.value;
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
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.LEADPROPAGATIONS.UPSERT(exId));
    let req = this.leadPropagationForm.value;
    req.follow_up_date = req.follow_up_date == null ? null : _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_3__.TimeUtility.toISO(req.follow_up_date);
    this.leadPropagationService.upsert(key, this.config.endpoint, req, exId);
    this.subscribe(key, null, (value, meta) => {
      this.notifier.success("Success", "LeadPropagation has been " + (exId ? "updated" : "created"));
      this.leadPropagationForm.reset();
      this.onSuccess(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    // this.leadPropagationForm.controls.title.setValue(n.title)
    // this.leadPropagationForm.controls.description.setValue(n.description)
    // this.leadPropagationForm.controls.image.setValue(n.image == null ? null : n.image)
  }
  onStageSelected($event) {
    this.selectedStage = $event;
    this.leadPropagationForm.controls.stage_to.setValue($event.id);
  }
  onLeadSelected($event) {
    this.selectedLead = $event;
    this.leadPropagationForm.controls.lead_id.setValue($event == null ? null : $event.id);
  }
  static #_ = this.ɵfac = function LeadPropagationUpsertComponent_Factory(t) {
    return new (t || LeadPropagationUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_5__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_leadpropagation_service__WEBPACK_IMPORTED_MODULE_6__.LeadPropagationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_7__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_9__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
    type: LeadPropagationUpsertComponent,
    selectors: [["app-leadpropagation-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]],
    decls: 46,
    vars: 16,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Lead$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_UPSERT_LEADPROPAGATION_UPSERT_COMPONENT_TS_1 = goog.getMsg("Lead");
        i18n_0 = MSG_EXTERNAL_label_Lead$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_UPSERT_LEADPROPAGATION_UPSERT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09B2\u09BF\u09A1";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Stage$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_UPSERT_LEADPROPAGATION_UPSERT_COMPONENT_TS_3 = goog.getMsg("Stage");
        i18n_2 = MSG_EXTERNAL_label_Stage$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_UPSERT_LEADPROPAGATION_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09AA\u09B0\u09CD\u09AF\u09BE\u09DF";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_FollowUp$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_UPSERT_LEADPROPAGATION_UPSERT_COMPONENT_TS_5 = goog.getMsg("Follow Up");
        i18n_4 = MSG_EXTERNAL_label_FollowUp$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_UPSERT_LEADPROPAGATION_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u09AB\u09B2\u09CB\u0986\u09AA";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_UPSERT_LEADPROPAGATION_UPSERT_COMPONENT_TS_7 = goog.getMsg("Description");
        i18n_6 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADPROPAGATIONS_COMPONENTS_LEADPROPAGATION_UPSERT_LEADPROPAGATION_UPSERT_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "col-md-6", "mb-3"], ["for", "lead-input", 1, "form-label"], i18n_0, [1, "error"], ["id", "lead-input", 3, "readonly", "selectedItem", "selected"], [1, "text-danger"], [1, "col-md-3", "mb-3"], ["for", "stage-input", 1, "form-label"], i18n_2, ["id", "stage-input", 3, "selectedItem", "selected"], ["for", "payment-date-input", 1, "form-label"], i18n_4, ["id", "payment-date-input", 1, "input-group"], ["type", "datetime-local", "id", "PaymentDate", "formControlName", "follow_up_date", 1, "form-control", 3, "min"], [1, "mb-3", 3, "formGroup"], ["for", "description", 1, "form-label"], i18n_6, ["id", "description", "formControlName", "content"], [3, "title", "multiSelect", "existingImages", "required", "onUploaded"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], [3, "bar"]];
    },
    template: function LeadPropagationUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, LeadPropagationUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Create/Update Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "form", 6)(8, "div", 1)(9, "div", 7)(10, "label", 8)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "app-lead-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("selected", function LeadPropagationUpsertComponent_Template_app_lead_select_selected_15_listener($event) {
          return ctx.onLeadSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 13)(19, "label", 14)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "app-leadstage-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("selected", function LeadPropagationUpsertComponent_Template_app_leadstage_select_selected_24_listener($event) {
          return ctx.onStageSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "div", 13)(28, "label", 17)(29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](30, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "div", 21)(34, "label", 22)(35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵi18n"](36, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](37, "app-editor", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "app-file-picker", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onUploaded", function LeadPropagationUpsertComponent_Template_app_file_picker_onUploaded_40_listener($event) {
          return ctx.onImgUploaded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "div", 26)(42, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LeadPropagationUpsertComponent_Template_button_click_42_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function LeadPropagationUpsertComponent_Template_button_click_44_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.leadPropagationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("readonly", ctx.readonly)("selectedItem", ctx.selectedLead);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.leadPropagationForm, "lead_id", "required", "Lead is needed!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("selectedItem", ctx.selectedStage);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.leadPropagationForm, "stage_to", "required", "You must choose a stage!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("min", ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.leadPropagationForm.controls.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.leadPropagationForm.controls.comment, "content", "minLength", "Comment should be at least 10 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("title", ctx.translations["Image"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("multiSelect", false)("existingImages", ctx.getExImages())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", ctx.leadPropagationForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__.ProgressComponent, _common_modules_utility_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_11__.EditorComponent, _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_12__.FilePickerComponent, _leads_components_lead_select_lead_select_component__WEBPACK_IMPORTED_MODULE_13__.LeadSelectComponent, _leadstages_components_leadstage_select_leadstage_select_component__WEBPACK_IMPORTED_MODULE_14__.LeadStageSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 26105:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leadpropagations/leadpropagation.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadPropagationComponent: () => (/* binding */ LeadPropagationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_leadpropagation_list_leadpropagation_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/leadpropagation-list/leadpropagation-list.component */ 24820);


class LeadPropagationComponent {
  static #_ = this.ɵfac = function LeadPropagationComponent_Factory(t) {
    return new (t || LeadPropagationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LeadPropagationComponent,
    selectors: [["app-leadpropagation"]],
    decls: 1,
    vars: 0,
    template: function LeadPropagationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-leadpropagation-list");
      }
    },
    dependencies: [_components_leadpropagation_list_leadpropagation_list_component__WEBPACK_IMPORTED_MODULE_0__.LeadPropagationListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 45510:
/*!************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leadpropagations/models/config.model.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultLeadPropagationConfig: () => (/* binding */ defaultLeadPropagationConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/modules/generic/breadcrumb/breadcrumb.model */ 97989);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 77986);


let selfEndpoints = {
  endpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.LEADPROPAGATIONS.LEADPROPAGATION_ENDPOINT,
  adminEndpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.LEADPROPAGATIONS.LEADPROPAGATION_ENDPOINT_ADMIN
};
let defaultLeadPropagationConfig = {
  defaultLayout: _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.COLUMN,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  endpoint: selfEndpoints.endpoint,
  delEndpoint: selfEndpoints.endpoint
};
let selfRoutes = {
  list: "/dash/lead-propagations",
  create: "/dash/lead-propagations/create",
  update(id) {
    return id == null ? this.create : "/dash/lead-propagations/" + id + '/update';
  }
};

/***/ }),

/***/ 47934:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leadpropagations/services/leadpropagation.service.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadPropagationService: () => (/* binding */ LeadPropagationService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 77986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class LeadPropagationService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.LEADPROPAGATIONS.SEARCH(endpoint, params);
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
    this.http.get(_sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.LEADPROPAGATIONS.GET(endpoint, id)).subscribe(data => {
      this.eventBusService.publish(key, data.body);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, endpoint, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, endpoint, leadPropagationReq, exId) {
    let url = exId == null ? _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.LEADPROPAGATIONS.CREATE(endpoint) : _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.LEADPROPAGATIONS.UPDATE(endpoint, exId);
    let observable = exId == null ? this.http.post(url, leadPropagationReq) : this.http.patch(url, leadPropagationReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res.body);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, endpoint, leadPropagationReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchEmployeeActivities(key, params) {
    let url = _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.LEADPROPAGATIONS.EMPLOYEE_ACTIVITIES(params);
    this.http.get(url).subscribe(data => {
      this.eventBusService.publish(key, data.body);
    }, error => {
      this.handleError(error, auth => {
        this.fetchEmployeeActivities(key, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function LeadPropagationService_Factory(t) {
    return new (t || LeadPropagationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: LeadPropagationService,
    factory: LeadPropagationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 30364:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leads/components/lead-filter/lead-filter.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadFilterComponent: () => (/* binding */ LeadFilterComponent)
/* harmony export */ });
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_user_filter_user_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/user-filter/user-filter.component */ 32498);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 11633);
/* harmony import */ var _hr_employees_components_employee_select_employee_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hr/employees/components/employee-select/employee-select.component */ 29413);
/* harmony import */ var _leadstages_components_leadstage_select_leadstage_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../leadstages/components/leadstage-select/leadstage-select.component */ 86367);












function LeadFilterComponent_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.addBtnText);
  }
}
function LeadFilterComponent_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](1, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function LeadFilterComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4)(1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LeadFilterComponent_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.onAddButtonClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, LeadFilterComponent_div_1_span_3_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, LeadFilterComponent_div_1_span_4_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.addBtnText != "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.addBtnText == "Add");
  }
}
const _c20 = function () {
  return {
    standalone: true
  };
};
function LeadFilterComponent_div_2_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LeadFilterComponent_div_2_input_3_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ff_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.filterData.extra[ff_r8.name] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ff_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", ff_r8.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r9.filterData.extra[ff_r8.name])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](3, _c20));
  }
}
function LeadFilterComponent_div_2_select_4_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const op_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", op_r17.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", op_r17.label, " ");
  }
}
function LeadFilterComponent_div_2_select_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LeadFilterComponent_div_2_select_4_Template_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);
      const ff_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.filterData.extra[ff_r8.name] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, LeadFilterComponent_div_2_select_4_option_3_Template, 2, 2, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ff_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("name", ff_r8.name)("ngModel", ctx_r10.filterData.extra[ff_r8.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ff_r8.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ff_r8.options);
  }
}
const _c21 = function () {
  return {
    dateInputFormat: "DD-MM-YYYY"
  };
};
function LeadFilterComponent_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6)(1, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LeadFilterComponent_div_2_div_5_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const ff_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r22.filterData.extra[ff_r8.name] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ff_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("id", ff_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c21))("name", ff_r8.name)("ngModel", ctx_r11.filterData.extra[ff_r8.name])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c20));
  }
}
function LeadFilterComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4)(1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, LeadFilterComponent_div_2_input_3_Template, 1, 4, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, LeadFilterComponent_div_2_select_4_Template, 4, 5, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, LeadFilterComponent_div_2_div_5_Template, 2, 7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ff_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ff_r8.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ff_r8.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ff_r8.type === "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ff_r8.type === "date");
  }
}
function LeadFilterComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10)(1, "app-user-filter", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function LeadFilterComponent_div_3_Template_app_user_filter_selected_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.filterData.username = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("username", ctx_r2.filterData.username);
  }
}
function LeadFilterComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10)(1, "app-user-filter", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function LeadFilterComponent_div_14_Template_app_user_filter_selected_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r28.filterData.username = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("username", ctx_r3.filterData.username);
  }
}
class LeadFilterComponent extends _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_0__.BasicFilterComponent {
  constructor(eventBus, router, subContainer, route, authService) {
    super(eventBus, router, subContainer, route, authService);
    this.selectedAssignee = null;
    this.selectedStage = null;
  }
  componentName() {
    return LeadFilterComponent.name;
  }
  onFilterClick() {
    if (!this.useParamNavigation) {
      this.filterClick.emit(this.filterData);
    } else {
      this.router.navigate(['.'], {
        relativeTo: this.activatedRoute,
        queryParams: {
          username: this.filterData.username,
          query: this.filterData.query,
          from_date: this.filterData.fromDate.toISOString(),
          to_date: this.filterData.toDate.toISOString(),
          assignee_id: this.selectedAssignee?.id,
          stage_id: this.selectedStage?.id,
          page: this.filterData.page,
          size: this.filterData.size
        },
        queryParamsHandling: 'merge'
      }).then(r => {});
    }
  }
  clearFilter() {
    this.selectedStage = null;
    this.selectedAssignee = null;
    super.clearFilter();
  }
  onAssigneeSelected(event) {
    this.selectedAssignee = event;
  }
  onStageSelected(event) {
    this.selectedStage = event;
  }
  static #_ = this.ɵfac = function LeadFilterComponent_Factory(t) {
    return new (t || LeadFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_1__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_2__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: LeadFilterComponent,
    selectors: [["app-lead-filter"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 46,
    vars: 18,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Filter$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_1 = goog.getMsg("Filter");
        i18n_0 = MSG_EXTERNAL_label_Filter$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09AB\u09BF\u09B2\u09CD\u099F\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Today$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_3 = goog.getMsg("Today");
        i18n_2 = MSG_EXTERNAL_label_Today$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u0986\u099C";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Yesterday$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_5 = goog.getMsg("Yesterday");
        i18n_4 = MSG_EXTERNAL_label_Yesterday$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u0997\u09A4\u0995\u09BE\u09B2";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Last7Day$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_7 = goog.getMsg("Last 7 days");
        i18n_6 = MSG_EXTERNAL_label_Last7Day$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u0997\u09A4 \u09ED \u09A6\u09BF\u09A8";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_ThisMonth$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_9 = goog.getMsg("This Month");
        i18n_8 = MSG_EXTERNAL_label_ThisMonth$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_9;
      } else {
        i18n_8 = "\u098F\u0987 \u09AE\u09BE\u09B8";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_LastMonth$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_11 = goog.getMsg("Last Month");
        i18n_10 = MSG_EXTERNAL_label_LastMonth$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_11;
      } else {
        i18n_10 = "\u0997\u09A4 \u09AE\u09BE\u09B8";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_ThisYear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_13 = goog.getMsg("This Year");
        i18n_12 = MSG_EXTERNAL_label_ThisYear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_13;
      } else {
        i18n_12 = "\u098F\u0987 \u09AC\u099B\u09B0";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_LastYear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_15 = goog.getMsg("Last Year");
        i18n_14 = MSG_EXTERNAL_label_LastYear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_15;
      } else {
        i18n_14 = "\u0997\u09A4 \u09AC\u099B\u09B0";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Clear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_17 = goog.getMsg("Clear");
        i18n_16 = MSG_EXTERNAL_label_Clear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS_17;
      } else {
        i18n_16 = "\u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Add$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS___19 = goog.getMsg("Add");
        i18n_18 = MSG_EXTERNAL_label_Add$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_FILTER_LEAD_FILTER_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8";
      }
      return [[1, "row", "gy-2", "gx-3", "align-items-center"], ["class", "col-sm-auto", 4, "ngIf"], ["class", "col-sm-auto", 4, "ngFor", "ngForOf"], ["class", "col-sm-2", 4, "ngIf"], [1, "col-sm-auto"], ["for", "fromDate", 1, "visually-hidden"], [1, "input-group"], ["bsDatepicker", "", "id", "fromDate", 1, "form-control", 3, "bsConfig", "ngModel", "ngModelOptions", "maxDate", "ngModelChange"], ["for", "toDate", 1, "visually-hidden"], ["bsDatepicker", "", "id", "toDate", 1, "form-control", 3, "bsConfig", "ngModel", "ngModelOptions", "minDate", "ngModelChange"], [1, "col-sm-2"], ["id", "stage-input", 3, "selectedItem", "selected"], ["id", "assignee-input", 3, "selectedItem", "selected"], [1, "col-sm-auto", "btn-group"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ms-2", "me-2"], i18n_0, ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", "dropdown-toggle-split"], [1, "mdi", "mdi-chevron-down"], [1, "dropdown-menu"], ["href", "javascript: void(0);", 1, "dropdown-item", 3, "click"], i18n_2, i18n_4, i18n_6, [1, "dropdown-divider"], i18n_8, i18n_10, i18n_12, i18n_14, ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], i18n_16, ["type", "button", 1, "btn", "btn-success", "w-md", 3, "click"], [1, "mdi", "mdi-plus-circle", "me-2"], [4, "ngIf"], i18n_18, ["type", "text", "class", "form-control", "id", "title-input", 3, "placeholder", "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["id", "formrow-inputState", "class", "form-select", 3, "name", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "input-group", 4, "ngIf"], ["type", "text", "id", "title-input", 1, "form-control", 3, "placeholder", "ngModel", "ngModelOptions", "ngModelChange"], ["id", "formrow-inputState", 1, "form-select", 3, "name", "ngModel", "ngModelChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["bsDatepicker", "", 1, "form-control", 3, "id", "bsConfig", "name", "ngModel", "ngModelOptions", "ngModelChange"], [3, "username", "selected"]];
    },
    template: function LeadFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, LeadFilterComponent_div_1_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, LeadFilterComponent_div_2_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, LeadFilterComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6)(8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LeadFilterComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.filterData.fromDate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 4)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 6)(13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function LeadFilterComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.filterData.toDate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, LeadFilterComponent_div_14_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 10)(16, "app-leadstage-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function LeadFilterComponent_Template_app_leadstage_select_selected_16_listener($event) {
          return ctx.onStageSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 10)(18, "app-employee-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selected", function LeadFilterComponent_Template_app_employee_select_selected_18_listener($event) {
          return ctx.onAssigneeSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 13)(20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LeadFilterComponent_Template_button_click_20_listener() {
          return ctx.onFilterClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](22, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 19)(26, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LeadFilterComponent_Template_a_click_26_listener() {
          return ctx.filterForToday();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](27, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LeadFilterComponent_Template_a_click_28_listener() {
          return ctx.filterForYesterday();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](29, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LeadFilterComponent_Template_a_click_30_listener() {
          return ctx.filterForLast7Days();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](31, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LeadFilterComponent_Template_a_click_33_listener() {
          return ctx.filterForThisMonth();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](34, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LeadFilterComponent_Template_a_click_35_listener() {
          return ctx.filterForLastMonth();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](36, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LeadFilterComponent_Template_a_click_38_listener() {
          return ctx.filterForThisYear();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](39, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LeadFilterComponent_Template_a_click_40_listener() {
          return ctx.filterForLastYear();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](41, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 4)(43, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LeadFilterComponent_Template_button_click_43_listener() {
          return ctx.clearFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵi18n"](45, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showAddBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.extraFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](14, _c21))("ngModel", ctx.filterData.fromDate)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c20))("maxDate", ctx.filterData.toDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](16, _c21))("ngModel", ctx.filterData.toDate)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](17, _c20))("minDate", ctx.filterData.fromDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selectedItem", ctx.selectedStage);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selectedItem", ctx.selectedAssignee);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _common_modules_utility_components_user_filter_user_filter_component__WEBPACK_IMPORTED_MODULE_4__.UserFilterComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__.BsDatepickerInputDirective, _hr_employees_components_employee_select_employee_select_component__WEBPACK_IMPORTED_MODULE_5__.EmployeeSelectComponent, _leadstages_components_leadstage_select_leadstage_select_component__WEBPACK_IMPORTED_MODULE_6__.LeadStageSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 56943:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leads/components/lead-list/lead-list.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadListComponent: () => (/* binding */ LeadListComponent)
/* harmony export */ });
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 62939);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _lead_upsert_lead_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lead-upsert/lead-upsert.component */ 48132);
/* harmony import */ var _leadpropagations_components_leadpropagation_upsert_leadpropagation_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../leadpropagations/components/leadpropagation-upsert/leadpropagation-upsert.component */ 80397);
/* harmony import */ var _organizations_components_org_base_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../organizations/components/org-base-list.component */ 75801);
/* harmony import */ var _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/utility/time.utility */ 62739);
/* harmony import */ var _layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../layout/left-nav/menu.model */ 2258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_lead_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/lead.service */ 12189);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);
/* harmony import */ var _lead_filter_lead_filter_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../lead-filter/lead-filter.component */ 30364);
























const _c2 = function () {
  return ["/dash/sales/lead-propagations"];
};
const _c3 = function (a0) {
  return {
    lead_id: a0
  };
};
function LeadListComponent_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16)(4, "div", 17)(5, "a", 18)(6, "h6", 19)(7, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 22)(13, "div", 23)(14, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function LeadListComponent_div_3_div_3_Template_a_click_14_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r7);
      const lead_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r6.onPropagationBtnClick(lead_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](15, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const lead_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](7, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](8, _c3, lead_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](lead_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](11, 4, lead_r5.next_follow_up_date, "medium"), " ");
  }
}
function LeadListComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0)(1, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](2, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, LeadListComponent_div_3_div_3_Template, 16, 10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r0.followUps.content);
  }
}
function LeadListComponent_util_progress_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "util-progress", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("bar", true);
  }
}
function LeadListComponent_div_9_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](1, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function LeadListComponent_div_9_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function LeadListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "div", 0)(3, "div", 29)(4, "div", 30)(5, "h1", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](6, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, LeadListComponent_div_9_h4_7_Template, 2, 0, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, LeadListComponent_div_9_h4_8_Template, 2, 0, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 35)(10, "div", 36)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](12, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
  }
}
function LeadListComponent_div_10_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](1, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function LeadListComponent_div_10_div_1_th_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](1, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function LeadListComponent_div_10_div_1_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](1, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function LeadListComponent_div_10_div_1_tr_38_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r16.created_by);
  }
}
function LeadListComponent_div_10_div_1_tr_38_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "img", 78);
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("src", item_r16.image, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
  }
}
function LeadListComponent_div_10_div_1_tr_38_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r16.title.substring(0, 1).toUpperCase(), " ");
  }
}
function LeadListComponent_div_10_div_1_tr_38_small_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "small", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r16.campaign.title, " ");
  }
}
function LeadListComponent_div_10_div_1_tr_38_div_13_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span")(1, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2).$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", item_r16.next_follow_up_date >= ctx_r31.currentDate ? "bg-warning" : "bg-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](3, 2, item_r16.next_follow_up_date, "medium"), " ");
  }
}
function LeadListComponent_div_10_div_1_tr_38_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](2, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, LeadListComponent_div_10_div_1_tr_38_div_13_span_4_Template, 4, 5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r16.next_follow_up_date);
  }
}
function LeadListComponent_div_10_div_1_tr_38_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 83)(1, "h2", 84)(2, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 86)(5, "div", 87)(6, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵattribute"]("data-bs-target", "#collapse" + item_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "collapse", item_r16.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", item_r16.description, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
  }
}
function LeadListComponent_div_10_div_1_tr_38_small_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](1, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function LeadListComponent_div_10_div_1_tr_38_small_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](2, 1, item_r16.updated_at, "medium"));
  }
}
function LeadListComponent_div_10_div_1_tr_38_td_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td", 74)(1, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function LeadListComponent_div_10_div_1_tr_38_td_41_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r38);
      const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r36.onUpsertClick(item_r16.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function LeadListComponent_div_10_div_1_tr_38_td_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "td", 74)(1, "app-delete", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("deleteItemEvent", function LeadListComponent_div_10_div_1_tr_38_td_42_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r39.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("requestUrl", ctx_r26.config.delEndpoint + "/" + item_r16.id);
  }
}
function LeadListComponent_div_10_div_1_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, LeadListComponent_div_10_div_1_tr_38_td_3_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "td")(5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](6, LeadListComponent_div_10_div_1_tr_38_img_6_Template, 1, 1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](7, LeadListComponent_div_10_div_1_tr_38_span_7_Template, 2, 1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "td", 67)(9, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, LeadListComponent_div_10_div_1_tr_38_small_11_Template, 2, 1, "small", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, LeadListComponent_div_10_div_1_tr_38_div_13_Template, 5, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, LeadListComponent_div_10_div_1_tr_38_div_15_Template, 8, 3, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "td")(21, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "td")(28, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](29, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](33, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](34, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](35, LeadListComponent_div_10_div_1_tr_38_small_35_Template, 2, 0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](36, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](37, LeadListComponent_div_10_div_1_tr_38_small_37_Template, 3, 4, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "td", 74)(39, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function LeadListComponent_div_10_div_1_tr_38_Template_a_click_39_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r43);
      const item_r16 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r42.onPropagationBtnClick(item_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](40, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](41, LeadListComponent_div_10_div_1_tr_38_td_41_Template, 3, 0, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](42, LeadListComponent_div_10_div_1_tr_38_td_42_Template, 2, 1, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r15.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r16.image != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r16.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](26, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](27, _c3, item_r16.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r16.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r16.campaign);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r16.next_follow_up_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r16.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r16.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r16.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵstyleMapInterpolate1"]("background-color: ", item_r16.stage.color, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r16.stage.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r16.assignee == null ? null : item_r16.assignee.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r16.org_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](33, 23, item_r16.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r16.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r16.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r15.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r15.config.showDeleteButton);
  }
}
function LeadListComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0)(1, "div", 42)(2, "div", 43)(3, "div", 44)(4, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Leads that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 46)(7, "table", 47)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](11, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, LeadListComponent_div_10_div_1_th_12_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](14, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](16, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](18, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](20, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](22, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](24, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](26, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](28, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](30, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](32, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](34, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](35, LeadListComponent_div_10_div_1_th_35_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](36, LeadListComponent_div_10_div_1_th_36_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](38, LeadListComponent_div_10_div_1_tr_38_Template, 43, 29, "tr", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@dataLoaded", ctx_r10.loading ? "loading" : "loaded")("@onColumn", ctx_r10.layout == ctx_r10.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r10.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r10.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r10.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r10.leads.content);
  }
}
function LeadListComponent_div_10_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate"]("src", item_r45.image, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
  }
}
function LeadListComponent_div_10_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 116)(1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r45.title.substring(0, 1).toUpperCase(), " ");
  }
}
function LeadListComponent_div_10_div_2_div_1_h6_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h6", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" Reporter: ", item_r45.created_by, " ");
  }
}
function LeadListComponent_div_10_div_2_div_1_h6_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "h6", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, " Assignee: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](item_r45.assignee.name);
  }
}
function LeadListComponent_div_10_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "small", 117)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](5, 1, item_r45.updated_at, "medium"), " ");
  }
}
function LeadListComponent_div_10_div_2_div_1_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "small", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function LeadListComponent_div_10_div_2_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 83)(1, "h2", 118)(2, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 119)(5, "div", 87)(6, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "p", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵattribute"]("data-bs-target", "#collapse" + item_r45.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpropertyInterpolate1"]("id", "collapse", item_r45.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("innerHTML", item_r45.description, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeHtml"]);
  }
}
function LeadListComponent_div_10_div_2_div_1_small_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "small", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r45.campaign.title, " ");
  }
}
function LeadListComponent_div_10_div_2_div_1_small_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "Next Follow Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "small", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", item_r45.next_follow_up_date >= ctx_r54.currentDate ? "bg-warning" : "bg-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](7, 2, item_r45.next_follow_up_date, "medium"), " ");
  }
}
function LeadListComponent_div_10_div_2_div_1_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 111)(1, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function LeadListComponent_div_10_div_2_div_1_div_41_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r67);
      const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r65.onUpsertClick(item_r45.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](2, "i", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
}
function LeadListComponent_div_10_div_2_div_1_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 111)(1, "app-delete", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("deleteItemEvent", function LeadListComponent_div_10_div_2_div_1_div_42_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r68.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("requestUrl", ctx_r56.config.delEndpoint + "/" + item_r45.id)("look", "bx");
  }
}
function LeadListComponent_div_10_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 95)(1, "div", 96)(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, LeadListComponent_div_10_div_2_div_1_div_3_Template, 2, 1, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](4, LeadListComponent_div_10_div_2_div_1_div_4_Template, 3, 1, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "h5", 99)(6, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, LeadListComponent_div_10_div_2_div_1_h6_8_Template, 2, 1, "h6", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, LeadListComponent_div_10_div_2_div_1_h6_9_Template, 5, 1, "h6", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 0)(11, "div", 101)(12, "p", 102)(13, "small")(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵi18n"](15, 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "div", 101)(20, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](21, LeadListComponent_div_10_div_2_div_1_small_21_Template, 6, 4, "small", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](22, LeadListComponent_div_10_div_2_div_1_small_22_Template, 6, 0, "small", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](29, LeadListComponent_div_10_div_2_div_1_div_29_Template, 8, 3, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "div")(31, "a", 106)(32, "label", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](34, LeadListComponent_div_10_div_2_div_1_small_34_Template, 2, 1, "small", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](35, LeadListComponent_div_10_div_2_div_1_small_35_Template, 8, 5, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "div", 109)(37, "div", 110)(38, "div", 111)(39, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function LeadListComponent_div_10_div_2_div_1_Template_a_click_39_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r72);
      const item_r45 = restoredCtx.$implicit;
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵresetView"](ctx_r71.onPropagationBtnClick(item_r45));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](40, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](41, LeadListComponent_div_10_div_2_div_1_div_41_Template, 3, 0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](42, LeadListComponent_div_10_div_2_div_1_div_42_Template, 2, 2, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r45 = ctx.$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r45.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r45.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](24, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction1"](25, _c3, item_r45.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r45.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r45.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r45.assignee);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind2"](18, 21, item_r45.created_at, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r45.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !item_r45.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" Phone: ", item_r45.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" Email: ", item_r45.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r45.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵstyleMapInterpolate1"]("background-color: ", item_r45.stage.color, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", item_r45.stage.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r45.campaign);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", item_r45.next_follow_up_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r44.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r44.config.showDeleteButton);
  }
}
function LeadListComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, LeadListComponent_div_10_div_2_div_1_Template, 43, 27, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("@dataLoaded", ctx_r11.loading ? "loading" : "loaded")("@onGrid", ctx_r11.layout == ctx_r11.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r11.leads.content);
  }
}
function LeadListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, LeadListComponent_div_10_div_1_Template, 39, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](2, LeadListComponent_div_10_div_2_Template, 2, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r3.layout === ctx_r3.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r3.layout === ctx_r3.Layout.GRID);
  }
}
class LeadListComponent extends _organizations_components_org_base_list_component__WEBPACK_IMPORTED_MODULE_6__.BaseListComponentForOrg {
  componentName() {
    return "LeadListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, leadService, notifier, lpDialog, orgService) {
    super(eventBus, router, subContainer, dialog, orgService);
    this.activatedRoute = activatedRoute;
    this.leadService = leadService;
    this.notifier = notifier;
    this.lpDialog = lpDialog;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.defaultLeadConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.defaultFilterData;
    this.leads = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    this.followUps = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    this.currentDate = new Date();
    if (authService.isAdmin()) {
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfEndpoints.adminEndpoint;
    }
    if (authService.isAdmin() || authService.hasPrivilege('MODIFY_ORG_CONFIGURATION')) {
      this.config.showDeleteButton = true;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.parseFilterData)(params);
      this.onOrgLoaded(orgId => {
        this.fetchLeads({
          q: this.filterData.query,
          username: this.filterData.username,
          from_date: this.filterData.fromDate,
          to_date: this.filterData.toDate,
          page: this.filterData.page,
          size: this.filterData.size,
          assignee_id: this.filterData.extra['assignee_id'],
          stage_id: this.filterData.extra['stage_id'],
          org_id: orgId
        });
        this.fetchFollowUps({
          q: this.filterData.query,
          username: this.filterData.username,
          from_date: _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_7__.TimeUtility.addDays(new Date(), -30),
          to_date: _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_7__.TimeUtility.addDays(new Date(), 30),
          page: this.filterData.page,
          size: this.filterData.size,
          assignee_id: this.filterData.extra['assignee_id'],
          stage_id: this.filterData.extra['stage_id'],
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
      text: _layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_8__.translations["Leads"],
      link: null,
      active: true
    }];
  }
  fetchLeads(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.LEADS.SEARCH(params));
    this.leadService.search(key, this.config.endpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.leads = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  fetchFollowUps(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.LEADS.FOLLOW_UPS(params));
    this.leadService.fetchFollowUps(key, params);
    this.subscribe(key, null, (value, meta) => {
      this.followUps = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "Lead is deleted");
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
    return _lead_upsert_lead_upsert_component__WEBPACK_IMPORTED_MODULE_4__.LeadUpsertComponent;
  }
  onPropagationBtnClick(item) {
    let popup = this.lpDialog.open(_leadpropagations_components_leadpropagation_upsert_leadpropagation_upsert_component__WEBPACK_IMPORTED_MODULE_5__.LeadPropagationUpsertComponent, {
      id: null,
      lead: item,
      dialogUpsert: true
    });
    popup.componentInstance.onCompleted.subscribe(p => {
      this.ngOnInit();
    });
    popup.componentInstance.onCanceled.subscribe(() => {
      popup.close();
    });
  }
  static #_ = this.ɵfac = function LeadListComponent_Factory(t) {
    return new (t || LeadListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_9__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_10__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_11__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_12__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_lead_service__WEBPACK_IMPORTED_MODULE_13__.LeadService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_14__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_12__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_15__.OrganizationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
    type: LeadListComponent,
    selectors: [["app-lead-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵInheritDefinitionFeature"]],
    decls: 12,
    vars: 8,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_FollowUp$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS__1 = goog.getMsg("Follow Up");
        i18n_0 = MSG_EXTERNAL_label_FollowUp$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS__1;
      } else {
        i18n_0 = "\u09AB\u09B2\u09CB\u0986\u09AA";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___5 = goog.getMsg("Cooking your data, please wait..");
        i18n_4 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___7 = goog.getMsg("No items");
        i18n_6 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___9 = goog.getMsg("Id");
        i18n_8 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "Id";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___11 = goog.getMsg("Image");
        i18n_10 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u099B\u09AC\u09BF";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___13 = goog.getMsg("Title");
        i18n_12 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_FollowUp$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___15 = goog.getMsg("Follow-up");
        i18n_14 = MSG_EXTERNAL_label_FollowUp$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09AB\u09B2\u09CB\u0986\u09AA";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___17 = goog.getMsg("Description");
        i18n_16 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___19 = goog.getMsg("Phone");
        i18n_18 = MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u09AB\u09CB\u09A8";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___21 = goog.getMsg("Email");
        i18n_20 = MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___21;
      } else {
        i18n_20 = "\u0987\u09AE\u09C7\u0987\u09B2";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Stage$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___23 = goog.getMsg("Stage");
        i18n_22 = MSG_EXTERNAL_label_Stage$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___23;
      } else {
        i18n_22 = "\u09AA\u09B0\u09CD\u09AF\u09BE\u09DF";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Assignee$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___25 = goog.getMsg("Assignee");
        i18n_24 = MSG_EXTERNAL_label_Assignee$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___25;
      } else {
        i18n_24 = "\u09A6\u09BE\u09DF\u09BF\u09A4\u09CD\u09AC\u09AA\u09CD\u09B0\u09BE\u09AA\u09CD\u09A4";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Organization$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___27 = goog.getMsg("Organization");
        i18n_26 = MSG_EXTERNAL_label_Organization$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___27;
      } else {
        i18n_26 = "\u09AA\u09CD\u09B0\u09A4\u09BF\u09B7\u09CD\u09A0\u09BE\u09A8";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Date$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___29 = goog.getMsg("Date");
        i18n_28 = MSG_EXTERNAL_label_Date$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___29;
      } else {
        i18n_28 = "\u09A4\u09BE\u09B0\u09BF\u0996";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Action$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___31 = goog.getMsg("Action");
        i18n_30 = MSG_EXTERNAL_label_Action$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS___31;
      } else {
        i18n_30 = "\u0985\u09CD\u09AF\u09BE\u0995\u09B6\u09A8";
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS____33 = goog.getMsg("Created By");
        i18n_32 = MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS____33;
      } else {
        i18n_32 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS____35 = goog.getMsg("Update");
        i18n_34 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS____35;
      } else {
        i18n_34 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_36;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS____37 = goog.getMsg("Delete");
        i18n_36 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS____37;
      } else {
        i18n_36 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_38;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS____39 = goog.getMsg("Created");
        i18n_38 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS____39;
      } else {
        i18n_38 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_40;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_FollowUp$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS_____41 = goog.getMsg("Follow Up");
        i18n_40 = MSG_EXTERNAL_label_FollowUp$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS_____41;
      } else {
        i18n_40 = "\u09AB\u09B2\u09CB\u0986\u09AA";
      }
      let i18n_42;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS_____43 = goog.getMsg("Updated");
        i18n_42 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS_____43;
      } else {
        i18n_42 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_44;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS____45 = goog.getMsg("Created");
        i18n_44 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_LIST_LEAD_LIST_COMPONENT_TS____45;
      } else {
        i18n_44 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], ["class", "row", 4, "ngIf"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [1, "mt-3"], i18n_0, ["class", "col-sm-3", 4, "ngFor", "ngForOf"], [1, "col-sm-3"], [1, "card", "blog-stats-wid"], [1, "card-body", "bg-warning-subtle"], [1, "d-flex", "flex-wrap"], [1, "me-3"], ["href", "javascript: void(0)"], [1, "mb-3"], ["href", "javascript:void(0);", 3, "routerLink", "queryParams"], [1, "mb-0", "mt-2", "text-danger"], [1, "avatar-sm", "ms-auto"], [1, "avatar-title", "bg-light", "rounded-circle", "text-primary", "font-size-20"], ["href", "javascript:void(0);", 1, "text-success", 3, "click"], [1, "bx", "bx-check-circle"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_4, [1, "text-uppercase"], i18n_6, [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, i18n_30, [4, "ngFor", "ngForOf"], i18n_32, i18n_34, i18n_36, [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], [1, "text-wrap"], ["href", "javascript: void(0);", 3, "routerLink", "queryParams"], ["class", "badge bg-info-subtle text-info", 4, "ngIf"], [1, "accordion"], ["class", "accordion-item", 4, "ngIf"], [1, "badge", "font-size-12"], i18n_38, [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-primary", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-play-circle"], ["style", "width: 100px", 4, "ngIf"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "badge", "bg-info-subtle", "text-info"], i18n_40, [1, "badge", 3, "ngClass"], [1, "accordion-item"], ["id", "headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "accordion-button", "fw-medium", "collapsed"], ["aria-labelledby", "headingTwo", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", 3, "id"], [1, "accordion-body"], [1, "text-muted"], [3, "innerHTML"], i18n_42, ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["class", "font-size-10", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], i18n_44, [1, "text-muted", "text-start"], [1, "accordion", "mb-2"], ["href", "javascript: void(0);"], [1, "badge", "font-size-11", "m-1"], ["class", "badge bg-info-subtle text-info font-size-11", 4, "ngIf"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], ["href", "javascript: void(0);", 3, "click"], [1, "bx", "bx-play-circle", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10"], ["id", "headingThree", 1, "accordion-header"], ["aria-labelledby", "headingThree", "data-bs-parent", "#accordionExample", 1, "accordion-collapse", "collapse", 3, "id"], [1, "badge", "bg-info-subtle", "text-info", "font-size-11"], [1, "bx", "bx-edit", "text-warning"], [3, "requestUrl", "look", "deleteItemEvent"]];
    },
    template: function LeadListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("layoutSelected", function LeadListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, LeadListComponent_div_3_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 0)(5, "div", 1)(6, "div", 4)(7, "app-lead-filter", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("addButtonClick", function LeadListComponent_Template_app_lead_filter_addButtonClick_7_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, LeadListComponent_util_progress_8_Template, 1, 1, "util-progress", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](9, LeadListComponent_div_9_Template, 13, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](10, LeadListComponent_div_10_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](11, "app-pagination", 9);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("title", ctx.translations["Leads"])("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.followUps.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.leads.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.leads.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("page", ctx.leads);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_16__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__.PaginationComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_18__.DeleteComponent, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterLink, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_19__.BreadcrumbComponent, _lead_filter_lead_filter_component__WEBPACK_IMPORTED_MODULE_20__.LeadFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 65475:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leads/components/lead-select/lead-select.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadSelectComponent: () => (/* binding */ LeadSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _lead_upsert_lead_upsert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lead-upsert/lead-upsert.component */ 48132);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 62939);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _organizations_components_org_base_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../organizations/components/org-base-select.component */ 37339);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_lead_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/lead.service */ 12189);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);


















function LeadSelectComponent_util_progress_2_Template(rf, ctx) {
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
class LeadSelectComponent extends _organizations_components_org_base_select_component__WEBPACK_IMPORTED_MODULE_4__.BaseComponentForOrg {
  componentName() {
    return "LeadSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, leadService, popupService, orgService) {
    super(eventBus, router, subContainer, orgService);
    this.leadService = leadService;
    this.popupService = popupService;
    this.enableAdd = true;
    this.readonly = false;
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
      let popup = this.popupService.open(_lead_upsert_lead_upsert_component__WEBPACK_IMPORTED_MODULE_0__.LeadUpsertComponent, {
        id: null,
        dialogUpsert: true,
        title: event.title
      });
      popup.componentInstance.onCompleted.subscribe(lead => {
        this.selected.emit(lead);
      });
      popup.componentInstance.onCanceled.subscribe(() => {
        popup.close();
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.LEADS.SEARCH(params));
    this.leadService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function LeadSelectComponent_Factory(t) {
    return new (t || LeadSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_lead_service__WEBPACK_IMPORTED_MODULE_8__.LeadService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_10__.OrganizationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: LeadSelectComponent,
    selectors: [["app-lead-select"]],
    inputs: {
      enableAdd: "enableAdd",
      readonly: "readonly",
      searchEndpoint: "searchEndpoint",
      selectedItem: "selectedItem"
    },
    outputs: {
      selected: "selected"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
    decls: 4,
    vars: 9,
    consts: [["for", "lead-select", 1, "visually-hidden"], [3, "bar", 4, "ngIf"], ["id", "lead-select", "bindLabel", "title", "placeholder", "Search Lead", 3, "items", "hideSelected", "readonly", "multiple", "addTag", "ngModel", "ngModelOptions", "keyup", "ngModelChange", "change"], [3, "bar"]],
    template: function LeadSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Lead");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, LeadSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ng-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function LeadSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function LeadSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function LeadSelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.items)("hideSelected", true)("readonly", ctx.readonly)("multiple", false)("addTag", ctx.enableAdd)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](8, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__.ProgressComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 48132:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leads/components/lead-upsert/lead-upsert.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadUpsertComponent: () => (/* binding */ LeadUpsertComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v3.component */ 59890);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 62939);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_lead_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/lead.service */ 12189);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/editor/editor.component */ 16265);
/* harmony import */ var _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/cms/files/components/filepicker/filepicker.component */ 7247);
/* harmony import */ var _hr_employees_components_employee_select_employee_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../hr/employees/components/employee-select/employee-select.component */ 29413);
/* harmony import */ var _leadstages_components_leadstage_select_leadstage_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../leadstages/components/leadstage-select/leadstage-select.component */ 86367);




















function LeadUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "util-progress", 32);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("bar", true);
  }
}
class LeadUpsertComponent extends _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV3 {
  constructor(eventBus, router, subContainer, route, leadService, notifier, orgService, authService, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.leadService = leadService;
    this.notifier = notifier;
    this.orgService = orgService;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultLeadConfig;
    this.selectedStage = null;
    this.selectedAssignee = null;
    this.leadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.minLength(3)]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null),
      image: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null),
      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.email]),
      stage_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
      assignee_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null),
      org_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])
    });
    if (authService.isAdmin()) {
      this.config.showUserFilter = true;
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
    if (dialogData.title != null) {
      this.leadForm.controls.title.setValue(dialogData.title);
    }
  }
  componentName() {
    return LeadUpsertComponent.name;
  }
  ngOnInit() {
    super.ngOnInit();
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.ORGANIZATIONS.GET_MY_ORG());
    this.orgService.fetchMyOrgs(key);
    this.subscribe(key, null, (value, meta) => {
      let orgs = meta.data;
      if (orgs.length > 0) {
        this.leadForm.controls.org_id.setValue(orgs[0].id);
      }
    });
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Leads",
      link: "/dash/leads",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.LEADS.GET(exId));
    this.leadService.fetchSingle(key, this.config.endpoint, exId);
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
    if (!this.leadForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  onImgUploaded(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.leadForm.controls.image.setValue(images[0].image_url);
    }
  }
  getExImages() {
    let image = this.leadForm.controls.image.value;
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
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.LEADS.UPSERT(exId));
    let req = this.leadForm.value;
    this.leadService.upsert(key, this.config.endpoint, req, exId);
    this.subscribe(key, null, (value, meta) => {
      this.notifier.success("Success", "Lead has been " + (exId ? "updated" : "created"));
      this.leadForm.reset();
      this.onSuccess(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    this.selectedAssignee = n.assignee;
    this.selectedStage = n.stage;
    this.leadForm.controls.title.setValue(n.title);
    this.leadForm.controls.description.setValue(n.description);
    this.leadForm.controls.image.setValue(n.image == null ? null : n.image);
    this.leadForm.controls.phone.setValue(n.phone == null ? null : n.phone);
    this.leadForm.controls.email.setValue(n.email == null ? null : n.email);
    this.leadForm.controls.stage_id.setValue(n.stage.id);
    this.leadForm.controls.assignee_id.setValue(n.assignee == null ? null : n.assignee.id);
    this.leadForm.controls.org_id.setValue(n.organization.id);
  }
  onStageSelect($event) {
    this.selectedStage = $event;
    this.leadForm.controls.stage_id.setValue(this.selectedStage == null ? null : this.selectedStage.id);
  }
  onAssigneeSelected($event) {
    this.selectedAssignee = $event;
    this.leadForm.controls.assignee_id.setValue(this.selectedAssignee == null ? null : this.selectedAssignee.id);
  }
  static #_ = this.ɵfac = function LeadUpsertComponent_Factory(t) {
    return new (t || LeadUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_lead_service__WEBPACK_IMPORTED_MODULE_5__.LeadService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_7__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: LeadUpsertComponent,
    selectors: [["app-lead-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]],
    decls: 62,
    vars: 16,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_UPSERT_LEAD_UPSERT_COMPONENT_TS_1 = goog.getMsg("Title");
        i18n_0 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_UPSERT_LEAD_UPSERT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_UPSERT_LEAD_UPSERT_COMPONENT_TS_3 = goog.getMsg("Description");
        i18n_2 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_UPSERT_LEAD_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_UPSERT_LEAD_UPSERT_COMPONENT_TS_5 = goog.getMsg("Phone");
        i18n_4 = MSG_EXTERNAL_label_Phone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_UPSERT_LEAD_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u09AB\u09CB\u09A8";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_UPSERT_LEAD_UPSERT_COMPONENT_TS_7 = goog.getMsg("Email");
        i18n_6 = MSG_EXTERNAL_label_Email$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_UPSERT_LEAD_UPSERT_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u0987\u09AE\u09C7\u0987\u09B2";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Stage$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_UPSERT_LEAD_UPSERT_COMPONENT_TS_9 = goog.getMsg("Stage");
        i18n_8 = MSG_EXTERNAL_label_Stage$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_UPSERT_LEAD_UPSERT_COMPONENT_TS_9;
      } else {
        i18n_8 = "\u09AA\u09B0\u09CD\u09AF\u09BE\u09DF";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Assignee$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_UPSERT_LEAD_UPSERT_COMPONENT_TS_11 = goog.getMsg("Assignee");
        i18n_10 = MSG_EXTERNAL_label_Assignee$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADS_COMPONENTS_LEAD_UPSERT_LEAD_UPSERT_COMPONENT_TS_11;
      } else {
        i18n_10 = "\u09A6\u09BE\u09DF\u09BF\u09A4\u09CD\u09AC\u09AA\u09CD\u09B0\u09BE\u09AA\u09CD\u09A4";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "mb-3"], ["for", "title-input", 1, "form-label"], i18n_0, [1, "error"], ["type", "text", "id", "title-input", "placeholder", "Enter Title", "name", "title", "formControlName", "title", 1, "form-control"], [1, "text-danger"], ["for", "description", 1, "form-label"], i18n_2, ["id", "description", "formControlName", "description"], [3, "title", "multiSelect", "existingImages", "required", "onUploaded"], [1, "col-md-6", "mb-3"], ["for", "phone-input", 1, "form-label"], i18n_4, ["type", "text", "id", "phone-input", "placeholder", "Enter Phone", "name", "phone", "formControlName", "phone", 1, "form-control"], ["for", "email-input", 1, "form-label"], i18n_6, ["type", "text", "id", "email-input", "placeholder", "Enter Email", "name", "email", "formControlName", "email", 1, "form-control"], ["for", "stage-input", 1, "form-label"], i18n_8, ["id", "stage-input", 3, "selectedItem", "selected"], i18n_10, ["id", "assignee-input", 3, "selectedItem", "selected"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], [3, "bar"]];
    },
    template: function LeadUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, LeadUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Create/Update Lead");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "form", 6)(8, "div", 7)(9, "label", 8)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 7)(18, "label", 13)(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](20, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "app-editor", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "app-file-picker", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onUploaded", function LeadUpsertComponent_Template_app_file_picker_onUploaded_24_listener($event) {
          return ctx.onImgUploaded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 1)(26, "div", 17)(27, "label", 18)(28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](29, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "div", 17)(34, "label", 21)(35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](36, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](37, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 1)(41, "div", 17)(42, "label", 24)(43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](44, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](46, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "app-leadstage-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function LeadUpsertComponent_Template_app_leadstage_select_selected_47_listener($event) {
          return ctx.onStageSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "div", 17)(51, "label", 24)(52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵi18n"](53, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "app-employee-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selected", function LeadUpsertComponent_Template_app_employee_select_selected_54_listener($event) {
          return ctx.onAssigneeSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "div", 29)(58, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LeadUpsertComponent_Template_button_click_58_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](59, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LeadUpsertComponent_Template_button_click_60_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.leadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.leadForm, "title", "minLength", "Title should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.leadForm, "description", "minLength", "Description should be at least 20 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", ctx.translations["Image"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("multiSelect", false)("existingImages", ctx.getExImages())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.leadForm, "phone", "minLength", "Phone should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.leadForm, "email", "minLength", "Email should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("selectedItem", ctx.selectedStage);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.leadForm, "phone", "minLength", "Phone should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("selectedItem", ctx.selectedAssignee);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.leadForm, "phone", "minLength", "Phone should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx.leadForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_9__.ProgressComponent, _common_modules_utility_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_10__.EditorComponent, _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_11__.FilePickerComponent, _hr_employees_components_employee_select_employee_select_component__WEBPACK_IMPORTED_MODULE_12__.EmployeeSelectComponent, _leadstages_components_leadstage_select_leadstage_select_component__WEBPACK_IMPORTED_MODULE_13__.LeadStageSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 17226:
/*!********************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leads/lead.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadComponent: () => (/* binding */ LeadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/lead-list/lead-list.component */ 56943);


class LeadComponent {
  static #_ = this.ɵfac = function LeadComponent_Factory(t) {
    return new (t || LeadComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LeadComponent,
    selectors: [["app-lead"]],
    decls: 1,
    vars: 0,
    template: function LeadComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-lead-list");
      }
    },
    dependencies: [_components_lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_0__.LeadListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 62939:
/*!*************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leads/models/config.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultLeadConfig: () => (/* binding */ defaultLeadConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/modules/generic/breadcrumb/breadcrumb.model */ 97989);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 77986);


let selfEndpoints = {
  endpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.LEADS.LEAD_ENDPOINT,
  adminEndpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.LEADS.LEAD_ENDPOINT_ADMIN
};
let defaultLeadConfig = {
  defaultLayout: _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.GRID,
  upsertOnDialog: false,
  showUserFilter: false,
  showDeleteButton: false,
  endpoint: selfEndpoints.endpoint,
  delEndpoint: selfEndpoints.endpoint
};
let selfRoutes = {
  list: "/dash/sales/leads",
  create: "/dash/sales/leads/create",
  update(id) {
    return id == null ? this.create : "/dash/sales/leads/" + id + '/update';
  }
};

/***/ }),

/***/ 12189:
/*!***************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leads/services/lead.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadService: () => (/* binding */ LeadService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 77986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class LeadService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.LEADS.SEARCH(endpoint, params);
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
  fetchFollowUps(key, params) {
    let url = _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.LEADS.FOLLOW_UPS(params);
    this.http.get(url).subscribe(data => {
      this.eventBusService.publish(key, data.body);
    }, error => {
      this.handleError(error, auth => {
        this.fetchFollowUps(key, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, endpoint, id) {
    this.http.get(_sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.LEADS.GET(endpoint, id)).subscribe(data => {
      this.eventBusService.publish(key, data.body);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, endpoint, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, endpoint, leadReq, exId) {
    let url = exId == null ? _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.LEADS.CREATE(endpoint) : _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.LEADS.UPDATE(endpoint, exId);
    let observable = exId == null ? this.http.post(url, leadReq) : this.http.patch(url, leadReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res.body);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, endpoint, leadReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function LeadService_Factory(t) {
    return new (t || LeadService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: LeadService,
    factory: LeadService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 73420:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leadstages/components/leadstage-list/leadstage-list.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadStageListComponent: () => (/* binding */ LeadStageListComponent)
/* harmony export */ });
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 46447);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _leadstage_upsert_leadstage_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../leadstage-upsert/leadstage-upsert.component */ 70625);
/* harmony import */ var _organizations_components_org_base_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../organizations/components/org-base-list.component */ 75801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_leadstage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/leadstage.service */ 87064);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);





















function LeadStageListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("bar", true);
  }
}
function LeadStageListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function LeadStageListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function LeadStageListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, LeadStageListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, LeadStageListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
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
function LeadStageListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function LeadStageListComponent_div_9_div_1_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function LeadStageListComponent_div_9_div_1_tr_27_td_3_Template(rf, ctx) {
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
function LeadStageListComponent_div_9_div_1_tr_27_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "img", 51);
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("src", item_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
  }
}
function LeadStageListComponent_div_9_div_1_tr_27_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r10.title.substring(0, 1).toUpperCase(), " ");
  }
}
function LeadStageListComponent_div_9_div_1_tr_27_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function LeadStageListComponent_div_9_div_1_tr_27_small_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](2, 1, item_r10.updated_at, "medium"));
  }
}
function LeadStageListComponent_div_9_div_1_tr_27_td_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 47)(1, "app-delete", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("deleteItemEvent", function LeadStageListComponent_div_9_div_1_tr_27_td_29_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r21.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("requestUrl", ctx_r16.config.delEndpoint + "/" + item_r10.id);
  }
}
function LeadStageListComponent_div_9_div_1_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, LeadStageListComponent_div_9_div_1_tr_27_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "td")(5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, LeadStageListComponent_div_9_div_1_tr_27_img_6_Template, 1, 1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, LeadStageListComponent_div_9_div_1_tr_27_span_7_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "td")(9, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function LeadStageListComponent_div_9_div_1_tr_27_Template_a_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r25);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r24.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "td")(16, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](17, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](23, LeadStageListComponent_div_9_div_1_tr_27_small_23_Template, 2, 0, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](25, LeadStageListComponent_div_9_div_1_tr_27_small_25_Template, 3, 4, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "td", 47)(27, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function LeadStageListComponent_div_9_div_1_tr_27_Template_a_click_27_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r25);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r26.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](28, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](29, LeadStageListComponent_div_9_div_1_tr_27_td_29_Template, 2, 1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r9.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r10.image != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r10.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r10.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵstyleMapInterpolate1"]("background-color: ", item_r10.color, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r10.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r9.StringUtil.takeOnly(item_r10.description, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](21, 14, item_r10.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r10.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r10.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r9.config.showDeleteButton);
  }
}
function LeadStageListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "LeadStages that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 30)(7, "table", 31)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](11, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, LeadStageListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](14, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](16, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](18, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](20, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](22, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](24, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](25, LeadStageListComponent_div_9_div_1_th_25_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](27, LeadStageListComponent_div_9_div_1_tr_27_Template, 30, 17, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r5.leadStages.content);
  }
}
function LeadStageListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("src", item_r28.image, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
  }
}
function LeadStageListComponent_div_9_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 76)(1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r28.title.substring(0, 1).toUpperCase(), " ");
  }
}
function LeadStageListComponent_div_9_div_2_div_1_h6_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h6", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" By ", item_r28.created_by, "");
  }
}
function LeadStageListComponent_div_9_div_2_div_1_small_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small", 78)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](2, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](5, 1, item_r28.updated_at, "medium"), " ");
  }
}
function LeadStageListComponent_div_9_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](3, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function LeadStageListComponent_div_9_div_2_div_1_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 72)(1, "app-delete", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("deleteItemEvent", function LeadStageListComponent_div_9_div_2_div_1_div_33_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r39.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("requestUrl", ctx_r34.config.delEndpoint + "/" + item_r28.id)("look", "bx");
  }
}
function LeadStageListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, LeadStageListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, LeadStageListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "h5", 60)(6, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function LeadStageListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r43);
      const item_r28 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r42.onUpsertClick(item_r28.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, LeadStageListComponent_div_9_div_2_div_1_h6_8_Template, 2, 1, "h6", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 0)(10, "div", 63)(11, "p", 64)(12, "small")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](14, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "div", 63)(19, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](20, LeadStageListComponent_div_9_div_2_div_1_small_20_Template, 6, 4, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, LeadStageListComponent_div_9_div_2_div_1_small_21_Template, 6, 0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "div")(25, "a", 68)(26, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "div", 70)(29, "div", 71)(30, "div", 72)(31, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function LeadStageListComponent_div_9_div_2_div_1_Template_a_click_31_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r43);
      const item_r28 = restoredCtx.$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r44.onUpsertClick(item_r28.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](32, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](33, LeadStageListComponent_div_9_div_2_div_1_div_33_Template, 2, 2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r28.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r28.image == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r28.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r27.config.showUserFilter && item_r28.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](17, 13, item_r28.created_at, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r28.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !item_r28.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r27.StringUtil.takeOnly(item_r28.description, 50, true), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵstyleMapInterpolate1"]("background-color: ", item_r28.color, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r28.color, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r27.config.showDeleteButton);
  }
}
function LeadStageListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, LeadStageListComponent_div_9_div_2_div_1_Template, 34, 16, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r6.leadStages.content);
  }
}
function LeadStageListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, LeadStageListComponent_div_9_div_1_Template, 28, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, LeadStageListComponent_div_9_div_2_Template, 2, 3, "div", 25);
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
class LeadStageListComponent extends _organizations_components_org_base_list_component__WEBPACK_IMPORTED_MODULE_5__.BaseListComponentForOrg {
  componentName() {
    return LeadStageListComponent.name;
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, leadStageService, notifier, orgService) {
    super(eventBus, router, subContainer, dialog, orgService);
    this.activatedRoute = activatedRoute;
    this.leadStageService = leadStageService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.defaultLeadStageConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.defaultFilterData;
    this.leadStages = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    if (authService.isAdmin()) {
      this.config.showUserFilter = true;
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfEndpoints.adminEndpoint;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.parseFilterData)(params);
      this.onOrgLoaded(orgId => {
        this.fetchLeadStages({
          q: this.filterData.query,
          username: this.filterData.username,
          from_date: this.filterData.fromDate,
          to_date: this.filterData.toDate,
          page: this.filterData.page,
          size: this.filterData.size,
          org_id: this.orgId
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
      text: "LeadStages",
      link: null,
      active: true
    }];
  }
  fetchLeadStages(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.STAGES.SEARCH(params));
    this.leadStageService.search(key, this.config.endpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.leadStages = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "LeadStage is deleted");
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
    return _leadstage_upsert_leadstage_upsert_component__WEBPACK_IMPORTED_MODULE_4__.LeadStageUpsertComponent;
  }
  static #_ = this.ɵfac = function LeadStageListComponent_Factory(t) {
    return new (t || LeadStageListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_leadstage_service__WEBPACK_IMPORTED_MODULE_10__.LeadStageService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_12__.OrganizationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: LeadStageListComponent,
    selectors: [["app-leadstage-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___5 = goog.getMsg("Id");
        i18n_4 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "Id";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___7 = goog.getMsg("Image");
        i18n_6 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "\u099B\u09AC\u09BF";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___9 = goog.getMsg("Title");
        i18n_8 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Color$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___11 = goog.getMsg("Color");
        i18n_10 = MSG_EXTERNAL_label_Color$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u09B0\u0999";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___13 = goog.getMsg("Description");
        i18n_12 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___15 = goog.getMsg("Date");
        i18n_14 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___17 = goog.getMsg("Update");
        i18n_16 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS____19 = goog.getMsg("Created By");
        i18n_18 = MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS____19;
      } else {
        i18n_18 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS____21 = goog.getMsg("Delete");
        i18n_20 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS____21;
      } else {
        i18n_20 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS____23 = goog.getMsg("Created");
        i18n_22 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS____23;
      } else {
        i18n_22 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS_____25 = goog.getMsg("Updated");
        i18n_24 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS_____25;
      } else {
        i18n_24 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS____27 = goog.getMsg("Created");
        i18n_26 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS____27;
      } else {
        i18n_26 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS_____29 = goog.getMsg("Updated");
        i18n_28 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS_____29;
      } else {
        i18n_28 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS_____31 = goog.getMsg("Updated");
        i18n_30 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_LIST_LEADSTAGE_LIST_COMPONENT_TS_____31;
      } else {
        i18n_30 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_4, i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, [4, "ngFor", "ngForOf"], i18n_18, i18n_20, [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], i18n_22, [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], i18n_24, [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], i18n_26, [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [1, "font-size-10"], i18n_28, i18n_30, [3, "requestUrl", "look", "deleteItemEvent"]];
    },
    template: function LeadStageListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("layoutSelected", function LeadStageListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("addButtonClick", function LeadStageListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, LeadStageListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, LeadStageListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, LeadStageListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("title", "Stages")("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.leadStages.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.leadStages.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("page", ctx.leadStages);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 86367:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leadstages/components/leadstage-select/leadstage-select.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadStageSelectComponent: () => (/* binding */ LeadStageSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _leadstage_upsert_leadstage_upsert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../leadstage-upsert/leadstage-upsert.component */ 70625);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/config.model */ 46447);
/* harmony import */ var _base_components_base_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/components/base-select.component */ 31247);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_leadstage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/leadstage.service */ 87064);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);


















function LeadStageSelectComponent_util_progress_2_Template(rf, ctx) {
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
class LeadStageSelectComponent extends _base_components_base_select_component__WEBPACK_IMPORTED_MODULE_4__.BaseSelectComponent {
  componentName() {
    return "LeadStageSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, leadStageService, popupService, orgService) {
    super(eventBus, router, subContainer, orgService);
    this.leadStageService = leadStageService;
    this.popupService = popupService;
    this.enableAdd = true;
    this.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_3__.selfEndpoints.endpoint;
    this.items = [];
    this.selectedItem = null;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    if (authService.isAdmin()) {
      this.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_3__.selfEndpoints.adminEndpoint;
    }
  }
  ngOnInit() {
    this.loading = false;
    this.onOrgLoaded(orgId => {
      this.search({
        page: 0,
        size: 10,
        q: null,
        org_id: orgId
      });
    });
  }
  searchForEvent(event) {
    let query = _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_0__.TextUtility.removeSpecialCharacters(event.target?.value);
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
      let popup = this.popupService.open(_leadstage_upsert_leadstage_upsert_component__WEBPACK_IMPORTED_MODULE_1__.LeadStageUpsertComponent, {
        id: null,
        dialogUpsert: true,
        title: event.title
      });
      popup.componentInstance.onCompleted.subscribe(leadstage => {
        this.selected.emit(leadstage);
      });
      popup.componentInstance.onCanceled.subscribe(() => {
        popup.close();
      });
    }
  }
  search(params) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.STAGES.SEARCH(params));
    this.leadStageService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function LeadStageSelectComponent_Factory(t) {
    return new (t || LeadStageSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_leadstage_service__WEBPACK_IMPORTED_MODULE_8__.LeadStageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_10__.OrganizationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: LeadStageSelectComponent,
    selectors: [["app-leadstage-select"]],
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
    consts: [["for", "leadstage-select", 1, "visually-hidden"], [3, "bar", 4, "ngIf"], ["id", "leadstage-select", "bindLabel", "title", "placeholder", "Search Stages", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "keyup", "ngModelChange", "change"], [3, "bar"]],
    template: function LeadStageSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Stages");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, LeadStageSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ng-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function LeadStageSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function LeadStageSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function LeadStageSelectComponent_Template_ng_select_change_3_listener($event) {
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__.ProgressComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 70625:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leadstages/components/leadstage-upsert/leadstage-upsert.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadStageUpsertComponent: () => (/* binding */ LeadStageUpsertComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v3.component */ 59890);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 46447);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_leadstage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/leadstage.service */ 87064);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/cms/files/components/filepicker/filepicker.component */ 7247);
















function LeadStageUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "util-progress", 29);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("bar", true);
  }
}
class LeadStageUpsertComponent extends _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_0__.BaseUpsertComponentV3 {
  constructor(eventBus, router, subContainer, route, leadStageService, notifier, authService, dialogData) {
    super(eventBus, router, subContainer, route, dialogData);
    this.leadStageService = leadStageService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultLeadStageConfig;
    this.leadStageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
      title: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(3)]),
      color: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('#B8BAFF', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      default: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(false, []),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(255)]),
      image: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      organization_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required])
    });
    if (authService.isAdmin()) {
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
      this.config.delEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
    if (dialogData.title != null) {
      this.leadStageForm.controls.title.setValue(dialogData.title);
    }
  }
  ngOnInit() {
    super.ngOnInit();
    this.leadStageForm.controls.organization_id.setValue(this.selectedOrgId);
  }
  componentName() {
    return LeadStageUpsertComponent.name;
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "LeadStages",
      link: "/dash/sales/stages",
      active: false
    }, {
      text: "Upsert",
      link: null,
      active: true
    }];
  }
  initialize(exId) {
    this.loading = true;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.STAGES.GET(exId));
    this.leadStageService.fetchSingle(key, this.config.endpoint, exId);
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
    if (!this.leadStageForm.valid) {
      return;
    }
    this.upsert(this.exId);
  }
  onImgUploaded(images) {
    if (images.length > 0) {
      /*
      Think about the thumbnail, this will only upload the image, not thumbnail
       */
      this.leadStageForm.controls.image.setValue(images[0].image_url);
    }
  }
  getExImages() {
    let image = this.leadStageForm.controls.image.value;
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
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.STAGES.UPSERT(exId));
    let req = this.leadStageForm.value;
    this.leadStageService.upsert(key, this.config.endpoint, req, exId);
    this.subscribe(key, null, (value, meta) => {
      this.notifier.success("Success", "LeadStage has been " + (exId ? "updated" : "created"));
      this.leadStageForm.reset();
      this.onSuccess(meta.data);
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning('Failed!', error.error.message);
    });
  }
  populateForm(n) {
    this.leadStageForm.controls.title.setValue(n.title);
    this.leadStageForm.controls.color.setValue(n.color);
    this.leadStageForm.controls.description.setValue(n.description);
    this.leadStageForm.controls.default.setValue(n.default);
    this.leadStageForm.controls.image.setValue(n.image == null ? null : n.image);
    this.leadStageForm.controls.organization_id.setValue(n.organization.id);
  }
  static #_ = this.ɵfac = function LeadStageUpsertComponent_Factory(t) {
    return new (t || LeadStageUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_leadstage_service__WEBPACK_IMPORTED_MODULE_5__.LeadStageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: LeadStageUpsertComponent,
    selectors: [["app-leadstage-upsert"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
    decls: 45,
    vars: 11,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_UPSERT_LEADSTAGE_UPSERT_COMPONENT_TS_1 = goog.getMsg("Title");
        i18n_0 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_UPSERT_LEADSTAGE_UPSERT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Color$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_UPSERT_LEADSTAGE_UPSERT_COMPONENT_TS_3 = goog.getMsg("Color");
        i18n_2 = MSG_EXTERNAL_label_Color$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_UPSERT_LEADSTAGE_UPSERT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09B0\u0999";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_UPSERT_LEADSTAGE_UPSERT_COMPONENT_TS_5 = goog.getMsg("Description");
        i18n_4 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_LEADSTAGES_COMPONENTS_LEADSTAGE_UPSERT_LEADSTAGE_UPSERT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [3, "formGroup"], [1, "col-md-6", "mb-3"], ["for", "title-input", 1, "form-label"], i18n_0, [1, "error"], ["type", "text", "id", "title-input", "placeholder", "Enter Title", "name", "title", "formControlName", "title", 1, "form-control"], [1, "text-danger"], [1, "col-md-4", "mb-3"], ["for", "color-input", 1, "form-label"], i18n_2, ["type", "color", "id", "color-input", "placeholder", "Enter Color", "name", "color", "formControlName", "color", 1, "form-control"], [1, "col-md-2", "mt-3"], [1, "form-check", "form-switch", "mb-3"], ["type", "checkbox", "id", "light-mode-switch", "formControlName", "default", 1, "form-check-input", "theme-choice"], ["for", "light-mode-switch", 1, "form-check-label"], [1, "mb-3"], ["for", "description", 1, "form-label"], i18n_4, ["id", "description", "placeholder", "Enter Description", "rows", "5", "name", "description", "formControlName", "description", 1, "form-control"], [3, "title", "multiSelect", "existingImages", "required", "onUploaded"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-secondary", "waves-effect", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "waves-effect", "waves-light", 3, "ngClass", "click"], [3, "bar"]];
    },
    template: function LeadStageUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, LeadStageUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Create/Update LeadStage");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "form", 6)(8, "div", 1)(9, "div", 7)(10, "label", 8)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 13)(19, "label", 14)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 17)(26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 21)(31, "label", 22)(32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵi18n"](33, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "em", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "app-file-picker", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onUploaded", function LeadStageUpsertComponent_Template_app_file_picker_onUploaded_39_listener($event) {
          return ctx.onImgUploaded($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 26)(41, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeadStageUpsertComponent_Template_button_click_41_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LeadStageUpsertComponent_Template_button_click_43_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.leadStageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.leadStageForm, "title", "minLength", "Title should be at least 3 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.leadStageForm, "color", "required", "Color is required!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.errMsg(ctx.leadStageForm, "description", "minLength", "Description should be less than 255 characters!"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("title", ctx.translations["Image"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("multiSelect", false)("existingImages", ctx.getExImages())("required", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.leadStageForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_8__.ProgressComponent, _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_9__.FilePickerComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1265:
/*!******************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leadstages/leadstage.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadStageComponent: () => (/* binding */ LeadStageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_leadstage_list_leadstage_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/leadstage-list/leadstage-list.component */ 73420);


class LeadStageComponent {
  static #_ = this.ɵfac = function LeadStageComponent_Factory(t) {
    return new (t || LeadStageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LeadStageComponent,
    selectors: [["app-leadstage"]],
    decls: 1,
    vars: 0,
    template: function LeadStageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-leadstage-list");
      }
    },
    dependencies: [_components_leadstage_list_leadstage_list_component__WEBPACK_IMPORTED_MODULE_0__.LeadStageListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 46447:
/*!******************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leadstages/models/config.model.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultLeadStageConfig: () => (/* binding */ defaultLeadStageConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/modules/generic/breadcrumb/breadcrumb.model */ 97989);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 77986);


let selfEndpoints = {
  endpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.STAGES.STAGE_ENDPOINT,
  adminEndpoint: _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.STAGES.STAGE_ENDPOINT_ADMIN
};
let defaultLeadStageConfig = {
  defaultLayout: _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.COLUMN,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  endpoint: selfEndpoints.endpoint,
  delEndpoint: selfEndpoints.endpoint
};
let selfRoutes = {
  list: "/dash/sales/stages",
  create: "/dash/sales/stages/create",
  update(id) {
    return id == null ? this.create : "/dash/sales/stages/" + id + '/update';
  }
};

/***/ }),

/***/ 87064:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/leadstages/services/leadstage.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeadStageService: () => (/* binding */ LeadStageService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 77986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class LeadStageService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.STAGES.SEARCH(endpoint, params);
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
    this.http.get(_sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.STAGES.GET(endpoint, id)).subscribe(data => {
      this.eventBusService.publish(key, data.body);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, endpoint, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, endpoint, leadStageReq, exId) {
    let url = exId == null ? _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.STAGES.CREATE(endpoint) : _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.STAGES.UPDATE(endpoint, exId);
    let observable = exId == null ? this.http.post(url, leadStageReq) : this.http.patch(url, leadStageReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res.body);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, endpoint, leadStageReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function LeadStageService_Factory(t) {
    return new (t || LeadStageService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: LeadStageService,
    factory: LeadStageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 28397:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/orders/components/add-payment/add-payment.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddPaymentComponent: () => (/* binding */ AddPaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _common_modules_utility_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common/modules/utility/utility */ 92497);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/order.service */ 24366);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);














function AddPaymentComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "util-progress", 24);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("bar", true);
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
    this.onCanceled = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.onCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    console.log(dialogData);
    if (dialogData.id != null) {
      this.orderId = dialogData.id;
    }
    if (dialogData.dueAmount != null) {
      this.dueAmount = _common_modules_utility_utility__WEBPACK_IMPORTED_MODULE_2__.Utility.toFloat(dialogData.dueAmount, 2);
    }
    if (dialogData.paymentAmount != null) {
      this.paymentAmount = _common_modules_utility_utility__WEBPACK_IMPORTED_MODULE_2__.Utility.toFloat(dialogData.paymentAmount, 2);
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
    return new (t || AddPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_5__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: AddPaymentComponent,
    selectors: [["app-add-payment"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 31,
    vars: 5,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_AddPayment$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ADD_PAYMENT_ADD_PAYMENT_COMPONENT_TS_1 = goog.getMsg("Add Payment");
        i18n_0 = MSG_EXTERNAL_label_AddPayment$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ADD_PAYMENT_ADD_PAYMENT_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Amount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ADD_PAYMENT_ADD_PAYMENT_COMPONENT_TS_3 = goog.getMsg("Amount");
        i18n_2 = MSG_EXTERNAL_label_Amount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ADD_PAYMENT_ADD_PAYMENT_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u09AA\u09B0\u09BF\u09AE\u09BE\u09A3";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrentDueAmount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ADD_PAYMENT_ADD_PAYMENT_COMPONENT_TS_5 = goog.getMsg("Current Due Amount:");
        i18n_4 = MSG_EXTERNAL_label_CurrentDueAmount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ADD_PAYMENT_ADD_PAYMENT_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8\u09C7 \u09AC\u09BE\u0995\u09BF\u09B0 \u09AA\u09B0\u09BF\u09AE\u09BE\u09A3\u0983";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ADD_PAYMENT_ADD_PAYMENT_COMPONENT_TS_7 = goog.getMsg("Cancel");
        i18n_6 = MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ADD_PAYMENT_ADD_PAYMENT_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u09AC\u09BE\u09A4\u09BF\u09B2";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Add$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ADD_PAYMENT_ADD_PAYMENT_COMPONENT_TS_9 = goog.getMsg("Add");
        i18n_8 = MSG_EXTERNAL_label_Add$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ADD_PAYMENT_ADD_PAYMENT_COMPONENT_TS_9;
      } else {
        i18n_8 = "\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "col-sm-6"], [1, "card-title", "mb-4"], i18n_0, [1, "row", "mb-3"], [1, "col-12", "mb-3"], ["for", "date-input", 1, "form-label"], i18n_2, [1, "error"], [1, "text-warning", "my-2"], i18n_4, ["id", "date-input", 1, "input-group"], ["type", "number", 1, "form-control", 3, "min", "max", "ngModel", "ngModelChange"], [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-outline-danger", "waves-effect", 3, "click"], [1, "mdi", "mdi-cancel", "font-size-16"], i18n_6, ["type", "submit", 1, "btn", "btn-success", "waves-effect", "waves-light", 3, "click"], [1, "mdi", "mdi-plus", "font-size-16"], i18n_8, [3, "bar"]];
    },
    template: function AddPaymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, AddPaymentComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](7, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "label", 10)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](12, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "em", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "em", 13)(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](18, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 15)(21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AddPaymentComponent_Template_input_ngModelChange_21_listener($event) {
          return ctx.paymentAmount = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 17)(23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddPaymentComponent_Template_button_click_23_listener() {
          return ctx.onCancelClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](26, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddPaymentComponent_Template_button_click_27_listener() {
          return ctx.onPaymentClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵi18n"](30, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.dueAmount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("min", 0)("max", ctx.maxAmount)("ngModel", ctx.paymentAmount);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MaxValidator, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__.ProgressComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1010:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/orders/components/order-filter/order-filter.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderFilterComponent: () => (/* binding */ OrderFilterComponent)
/* harmony export */ });
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_user_filter_user_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/user-filter/user-filter.component */ 32498);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 11633);
/* harmony import */ var _customers_components_customer_select_customer_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../customers/components/customer-select/customer-select.component */ 46830);











function OrderFilterComponent_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.addBtnText);
  }
}
function OrderFilterComponent_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](1, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function OrderFilterComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4)(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderFilterComponent_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.onAddButtonClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, OrderFilterComponent_div_1_span_3_Template, 2, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, OrderFilterComponent_div_1_span_4_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.addBtnText != "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.addBtnText == "Add");
  }
}
const _c20 = function () {
  return {
    standalone: true
  };
};
function OrderFilterComponent_div_2_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OrderFilterComponent_div_2_input_3_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ff_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.filterData.extra[ff_r7.name] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ff_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", ff_r7.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r8.filterData.extra[ff_r7.name])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c20));
  }
}
function OrderFilterComponent_div_2_select_4_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const op_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", op_r16.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", op_r16.label, " ");
  }
}
function OrderFilterComponent_div_2_select_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OrderFilterComponent_div_2_select_4_Template_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ff_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.filterData.extra[ff_r7.name] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, OrderFilterComponent_div_2_select_4_option_3_Template, 2, 2, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ff_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", ff_r7.name)("ngModel", ctx_r9.filterData.extra[ff_r7.name]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ff_r7.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ff_r7.options);
  }
}
const _c21 = function () {
  return {
    dateInputFormat: "DD-MM-YYYY"
  };
};
function OrderFilterComponent_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6)(1, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OrderFilterComponent_div_2_div_5_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ff_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.filterData.extra[ff_r7.name] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ff_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("id", ff_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c21))("name", ff_r7.name)("ngModel", ctx_r10.filterData.extra[ff_r7.name])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c20));
  }
}
function OrderFilterComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4)(1, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, OrderFilterComponent_div_2_input_3_Template, 1, 4, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, OrderFilterComponent_div_2_select_4_Template, 4, 5, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, OrderFilterComponent_div_2_div_5_Template, 2, 7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ff_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ff_r7.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ff_r7.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ff_r7.type === "dropdown");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ff_r7.type === "date");
  }
}
function OrderFilterComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10)(1, "app-user-filter", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selected", function OrderFilterComponent_div_3_Template_app_user_filter_selected_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r25.filterData.username = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("username", ctx_r2.filterData.username);
  }
}
class OrderFilterComponent extends _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_0__.BasicFilterComponent {
  constructor(eventBus, router, subContainer, route, authService) {
    super(eventBus, router, subContainer, route, authService);
    this.route = route;
    this.selectedCustomer = null;
  }
  componentName() {
    return OrderFilterComponent.name;
  }
  onFilterClick() {
    if (!this.useParamNavigation) {
      this.filterClick.emit(this.filterData);
    } else {
      this.router.navigate(['.'], {
        relativeTo: this.activatedRoute,
        queryParams: {
          username: this.filterData.username,
          query: this.filterData.query,
          from_date: this.filterData.fromDate.toISOString(),
          to_date: this.filterData.toDate.toISOString(),
          local_customer_id: this.selectedCustomer?.id,
          page: this.filterData.page,
          size: this.filterData.size
        },
        queryParamsHandling: 'merge'
      }).then(r => {});
    }
  }
  clearFilter() {
    this.selectedCustomer = null;
    super.clearFilter();
  }
  onCustomerSelected(event) {
    this.selectedCustomer = event;
  }
  static #_ = this.ɵfac = function OrderFilterComponent_Factory(t) {
    return new (t || OrderFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_1__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_2__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: OrderFilterComponent,
    selectors: [["app-order-filter"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 43,
    vars: 16,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Filter$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_1 = goog.getMsg("Filter");
        i18n_0 = MSG_EXTERNAL_label_Filter$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_1;
      } else {
        i18n_0 = "\u09AB\u09BF\u09B2\u09CD\u099F\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Today$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_3 = goog.getMsg("Today");
        i18n_2 = MSG_EXTERNAL_label_Today$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_3;
      } else {
        i18n_2 = "\u0986\u099C";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Yesterday$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_5 = goog.getMsg("Yesterday");
        i18n_4 = MSG_EXTERNAL_label_Yesterday$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_5;
      } else {
        i18n_4 = "\u0997\u09A4\u0995\u09BE\u09B2";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Last7Day$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_7 = goog.getMsg("Last 7 days");
        i18n_6 = MSG_EXTERNAL_label_Last7Day$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_7;
      } else {
        i18n_6 = "\u0997\u09A4 \u09ED \u09A6\u09BF\u09A8";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_ThisMonth$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_9 = goog.getMsg("This Month");
        i18n_8 = MSG_EXTERNAL_label_ThisMonth$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_9;
      } else {
        i18n_8 = "\u098F\u0987 \u09AE\u09BE\u09B8";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_LastMonth$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_11 = goog.getMsg("Last Month");
        i18n_10 = MSG_EXTERNAL_label_LastMonth$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_11;
      } else {
        i18n_10 = "\u0997\u09A4 \u09AE\u09BE\u09B8";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_ThisYear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_13 = goog.getMsg("This Year");
        i18n_12 = MSG_EXTERNAL_label_ThisYear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_13;
      } else {
        i18n_12 = "\u098F\u0987 \u09AC\u099B\u09B0";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_LastYear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_15 = goog.getMsg("Last Year");
        i18n_14 = MSG_EXTERNAL_label_LastYear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_15;
      } else {
        i18n_14 = "\u0997\u09A4 \u09AC\u099B\u09B0";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Clear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_17 = goog.getMsg("Clear");
        i18n_16 = MSG_EXTERNAL_label_Clear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS_17;
      } else {
        i18n_16 = "\u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Add$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS___19 = goog.getMsg("Add");
        i18n_18 = MSG_EXTERNAL_label_Add$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_FILTER_ORDER_FILTER_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8";
      }
      return [[1, "row", "gy-2", "gx-3", "align-items-center"], ["class", "col-sm-auto", 4, "ngIf"], ["class", "col-sm-auto", 4, "ngFor", "ngForOf"], ["class", "col-sm-2", 4, "ngIf"], [1, "col-sm-auto"], ["for", "fromDate", 1, "visually-hidden"], [1, "input-group"], ["bsDatepicker", "", "id", "fromDate", 1, "form-control", 3, "bsConfig", "ngModel", "ngModelOptions", "maxDate", "ngModelChange"], ["for", "toDate", 1, "visually-hidden"], ["bsDatepicker", "", "id", "toDate", 1, "form-control", 3, "bsConfig", "ngModel", "ngModelOptions", "minDate", "ngModelChange"], [1, "col-sm-2"], ["id", "customer-input", 3, "selectedItem", "selected"], [1, "col-sm-auto", "btn-group"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ms-2", "me-2"], i18n_0, ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", "dropdown-toggle-split"], [1, "mdi", "mdi-chevron-down"], [1, "dropdown-menu"], ["href", "javascript: void(0);", 1, "dropdown-item", 3, "click"], i18n_2, i18n_4, i18n_6, [1, "dropdown-divider"], i18n_8, i18n_10, i18n_12, i18n_14, ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], i18n_16, ["type", "button", 1, "btn", "btn-success", "w-md", 3, "click"], [1, "mdi", "mdi-plus-circle", "me-2"], [4, "ngIf"], i18n_18, ["type", "text", "class", "form-control", "id", "title-input", 3, "placeholder", "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["id", "formrow-inputState", "class", "form-select", 3, "name", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "input-group", 4, "ngIf"], ["type", "text", "id", "title-input", 1, "form-control", 3, "placeholder", "ngModel", "ngModelOptions", "ngModelChange"], ["id", "formrow-inputState", 1, "form-select", 3, "name", "ngModel", "ngModelChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["bsDatepicker", "", 1, "form-control", 3, "id", "bsConfig", "name", "ngModel", "ngModelOptions", "ngModelChange"], [3, "username", "selected"]];
    },
    template: function OrderFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, OrderFilterComponent_div_1_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, OrderFilterComponent_div_2_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, OrderFilterComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4)(5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6)(8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OrderFilterComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.filterData.fromDate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 4)(10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 6)(13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function OrderFilterComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.filterData.toDate = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 10)(15, "app-customer-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selected", function OrderFilterComponent_Template_app_customer_select_selected_15_listener($event) {
          return ctx.onCustomerSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 12)(17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderFilterComponent_Template_button_click_17_listener() {
          return ctx.onFilterClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](19, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 18)(23, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderFilterComponent_Template_a_click_23_listener() {
          return ctx.filterForToday();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](24, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderFilterComponent_Template_a_click_25_listener() {
          return ctx.filterForYesterday();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](26, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderFilterComponent_Template_a_click_27_listener() {
          return ctx.filterForLast7Days();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](28, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderFilterComponent_Template_a_click_30_listener() {
          return ctx.filterForThisMonth();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](31, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderFilterComponent_Template_a_click_32_listener() {
          return ctx.filterForLastMonth();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](33, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderFilterComponent_Template_a_click_35_listener() {
          return ctx.filterForThisYear();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](36, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderFilterComponent_Template_a_click_37_listener() {
          return ctx.filterForLastYear();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](38, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 4)(40, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OrderFilterComponent_Template_button_click_40_listener() {
          return ctx.clearFilter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](42, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showAddBtn);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.extraFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c21))("ngModel", ctx.filterData.fromDate)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c20))("maxDate", ctx.filterData.toDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](14, _c21))("ngModel", ctx.filterData.toDate)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](15, _c20))("minDate", ctx.filterData.fromDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selectedItem", ctx.selectedCustomer);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _common_modules_utility_components_user_filter_user_filter_component__WEBPACK_IMPORTED_MODULE_4__.UserFilterComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__.BsDatepickerInputDirective, _customers_components_customer_select_customer_select_component__WEBPACK_IMPORTED_MODULE_5__.CustomerSelectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 59168:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/orders/components/order-list/order-list.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderListComponent: () => (/* binding */ OrderListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 83545);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../order-upsert/order-upsert.component */ 87595);
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/order.model */ 14086);
/* harmony import */ var _add_payment_add_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-payment/add-payment.component */ 28397);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../sales.endpoints */ 77986);
/* harmony import */ var _layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../layout/left-nav/menu.model */ 2258);
/* harmony import */ var _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/time.utility */ 62739);
/* harmony import */ var _organizations_components_org_base_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../organizations/components/org-base-list.component */ 75801);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/order.service */ 24366);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);
/* harmony import */ var _order_filter_order_filter_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../order-filter/order-filter.component */ 1010);


























function OrderListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("bar", true);
  }
}
function OrderListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, OrderListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](8, OrderListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "div", 18)(10, "div", 19)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](12, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function OrderListComponent_div_9_div_1_tr_37_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18nStart"](2, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](6, 1, item_r8.next_payment_date), " ");
  }
}
function OrderListComponent_div_9_div_1_tr_37_div_12_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "i", 74);
  }
}
function OrderListComponent_div_9_div_1_tr_37_div_12_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "i", 75);
  }
}
function OrderListComponent_div_9_div_1_tr_37_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function OrderListComponent_div_9_div_1_tr_37_div_12_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r32);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r30.toggleReminder(item_r8, !item_r8.payment_reminder));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, OrderListComponent_div_9_div_1_tr_37_div_12_i_2_Template, 1, 0, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, OrderListComponent_div_9_div_1_tr_37_div_12_i_3_Template, 1, 0, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r8.payment_reminder);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !item_r8.payment_reminder);
  }
}
function OrderListComponent_div_9_div_1_tr_37_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div", 77)(3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](4, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("innerHTML", ctx_r11.customerInfo(item_r8.local_customer), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r8.created_by);
  }
}
function OrderListComponent_div_9_div_1_tr_37_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r8.customer_details.name);
  }
}
function OrderListComponent_div_9_div_1_tr_37_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function OrderListComponent_div_9_div_1_tr_37_div_17_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r38);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r36.alert(item_r8.note));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](2, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}
function OrderListComponent_div_9_div_1_tr_37_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "small", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](1, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_9_div_1_tr_37_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "small", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](1, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_9_div_1_tr_37_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "small", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](1, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_9_div_1_tr_37_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const oi_r39 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate3"](" ", ctx_r17.resolveProductName(oi_r39, ctx_r17.locale), " ( ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](2, 3, oi_r39.quantity, "1.2-2"), " x ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](3, 6, oi_r39.retail_price - oi_r39.discount / oi_r39.quantity, "1.2-2"), " )");
  }
}
function OrderListComponent_div_9_div_1_tr_37_span_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 86)(1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](2, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](5, 1, item_r8.due_amount, "1.2-2"));
  }
}
function OrderListComponent_div_9_div_1_tr_37_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 88)(1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](2, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](5, 1, item_r8.due_amount, "1.2-2"));
  }
}
function OrderListComponent_div_9_div_1_tr_37_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 61)(1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](2, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](5, 1, item_r8.profit, "1.2-2"));
  }
}
function OrderListComponent_div_9_div_1_tr_37_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 91)(1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](2, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](5, 1, item_r8.profit, "1.2-2"));
  }
}
function OrderListComponent_div_9_div_1_tr_37_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](1, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_9_div_1_tr_37_span_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](1, 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_9_div_1_tr_37_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function OrderListComponent_div_9_div_1_tr_37_div_60_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r46);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r44.onFinishSaleClick(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](3, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "em", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](6, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}
function OrderListComponent_div_9_div_1_tr_37_button_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function OrderListComponent_div_9_div_1_tr_37_button_65_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r49);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r47.onAddPaymentClick(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](2, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}
function OrderListComponent_div_9_div_1_tr_37_button_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function OrderListComponent_div_9_div_1_tr_37_button_67_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r52);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r50.onCancelClick(item_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](2, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
}
function OrderListComponent_div_9_div_1_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "td")(4, "div")(5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18nStart"](6, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](11, OrderListComponent_div_9_div_1_tr_37_div_11_Template, 7, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](12, OrderListComponent_div_9_div_1_tr_37_div_12_Template, 4, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](14, OrderListComponent_div_9_div_1_tr_37_span_14_Template, 8, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](15, OrderListComponent_div_9_div_1_tr_37_span_15_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](17, OrderListComponent_div_9_div_1_tr_37_div_17_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function OrderListComponent_div_9_div_1_tr_37_Template_a_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r54);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r53.onUpsertClick(item_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](21, OrderListComponent_div_9_div_1_tr_37_small_21_Template, 2, 0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](22, OrderListComponent_div_9_div_1_tr_37_small_22_Template, 2, 0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](23, OrderListComponent_div_9_div_1_tr_37_small_23_Template, 2, 0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](25, OrderListComponent_div_9_div_1_tr_37_span_25_Template, 5, 9, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](26, "td")(27, "table", 54)(28, "tbody")(29, "tr")(30, "td")(31, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](32, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "td")(34, "strong", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](36, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](37, "tr")(38, "td")(39, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](40, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](41, "td")(42, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](43, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](44, "tr")(45, "td")(46, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](47, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](48, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](50, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](52, OrderListComponent_div_9_div_1_tr_37_span_52_Template, 6, 4, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](53, OrderListComponent_div_9_div_1_tr_37_span_53_Template, 6, 4, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](54, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](55, OrderListComponent_div_9_div_1_tr_37_span_55_Template, 6, 4, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](56, OrderListComponent_div_9_div_1_tr_37_span_56_Template, 6, 4, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](57, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](58, OrderListComponent_div_9_div_1_tr_37_span_58_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](59, OrderListComponent_div_9_div_1_tr_37_span_59_Template, 2, 0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](60, OrderListComponent_div_9_div_1_tr_37_div_60_Template, 7, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](61, "td")(62, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function OrderListComponent_div_9_div_1_tr_37_Template_a_click_62_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r54);
      const item_r8 = restoredCtx.$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r55.onPrintClick(item_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](63, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](65, OrderListComponent_div_9_div_1_tr_37_button_65_Template, 3, 0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](67, OrderListComponent_div_9_div_1_tr_37_button_67_Template, 3, 0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](10, 23, item_r8.order_date, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r8.next_payment_date && item_r8.due_amount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r8.next_payment_date && item_r8.due_amount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r8.is_local);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !item_r8.is_local);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r8.note != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r8.order_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r8.due_amount === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r8.due_amount > 0 && item_r8.due_amount < item_r8.total_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r8.due_amount === item_r8.total_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", item_r8.order_items);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](36, 26, item_r8.total_price, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](50, 29, item_r8.paid_amount, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r8.due_amount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r8.due_amount == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r8.profit >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r8.profit < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r7.isCanceled(item_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r7.isConfirmed(item_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r7.isCanceled(item_r8) && !ctx_r7.isConfirmed(item_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r7.isCanceled(item_r8) && item_r8.due_amount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r7.isCanceled(item_r8));
  }
}
function OrderListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](7, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](9, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "div", 34)(11, "table", 35)(12, "thead")(13, "tr")(14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](15, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](17, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](19, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](21, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](23, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](25, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](27, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](29, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](31, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](33, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](35, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](36, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](37, OrderListComponent_div_9_div_1_tr_37_Template, 68, 32, "tr", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r5.orders.content);
  }
}
function OrderListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpropertyInterpolate"]("src", item_r57.order_items[0].product_image, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
  }
}
function OrderListComponent_div_9_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 126)(1, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r57.order_number.substring(0, 1).toUpperCase(), " ");
  }
}
function OrderListComponent_div_9_div_2_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r57.local_customer == null ? null : item_r57.local_customer.name, " ");
  }
}
function OrderListComponent_div_9_div_2_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r57.customer_details.name);
  }
}
function OrderListComponent_div_9_div_2_div_1_small_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "small", 128)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](2, 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](5, 1, item_r57.order_date, "medium"), " ");
  }
}
function OrderListComponent_div_9_div_2_div_1_small_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "small", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](3, 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_9_div_2_div_1_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](item_r57.status);
  }
}
function OrderListComponent_div_9_div_2_div_1_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](1, 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function OrderListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 104)(1, "div", 105)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, OrderListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](4, OrderListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "h5", 108)(6, "a", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function OrderListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r73);
      const item_r57 = restoredCtx.$implicit;
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r72.onUpsertClick(item_r57.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "h6", 110)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](10, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](12, OrderListComponent_div_9_div_2_div_1_span_12_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](13, OrderListComponent_div_9_div_2_div_1_span_13_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "div", 0)(15, "div", 112)(16, "p", 113)(17, "small")(18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](19, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](23, "div", 112)(24, "p", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](25, OrderListComponent_div_9_div_2_div_1_small_25_Template, 6, 4, "small", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](26, OrderListComponent_div_9_div_2_div_1_small_26_Template, 6, 0, "small", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "div")(30, "a", 117)(31, "label", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](32, OrderListComponent_div_9_div_2_div_1_span_32_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](33, OrderListComponent_div_9_div_2_div_1_span_33_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](34, "div", 119)(35, "div", 120)(36, "div", 121)(37, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function OrderListComponent_div_9_div_2_div_1_Template_a_click_37_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r73);
      const item_r57 = restoredCtx.$implicit;
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵresetView"](ctx_r74.onCancelClick(item_r57.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](38, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](39, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵi18n"](41, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const item_r57 = ctx.$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r57.order_items.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r57.order_items.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", item_r57.order_number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r57.is_local);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !item_r57.is_local);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind2"](22, 11, item_r57.created_at, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r57.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !item_r57.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r56.buildItemsStr(item_r57), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !item_r57.is_local);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", item_r57.is_local);
  }
}
function OrderListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, OrderListComponent_div_9_div_2_div_1_Template, 42, 14, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", ctx_r6.orders.content);
  }
}
function OrderListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, OrderListComponent_div_9_div_1_Template, 38, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](2, OrderListComponent_div_9_div_2_Template, 2, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.GRID);
  }
}
class OrderListComponent extends _organizations_components_org_base_list_component__WEBPACK_IMPORTED_MODULE_10__.BaseListComponentForOrg {
  componentName() {
    return "OrderListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, orderService, notifier, paymentDialog, locale, orgService) {
    super(eventBus, router, subContainer, dialog, orgService);
    this.authService = authService;
    this.activatedRoute = activatedRoute;
    this.orderService = orderService;
    this.notifier = notifier;
    this.paymentDialog = paymentDialog;
    this.locale = locale;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.defaultOrderConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.defaultFilterData;
    this.orders = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    this.alert = alert;
    this.resolveProductName = _models_order_model__WEBPACK_IMPORTED_MODULE_5__.resolveProductName;
    if (authService.isAdmin()) {
      this.config.endpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.selfEndpoints.adminEndpoint;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.parseFilterData)(params);
      this.onOrgLoaded(orgId => {
        this.fetchOrders(this.authService.isAdmin(), {
          q: this.filterData.query,
          username: this.filterData.username,
          from_date: this.filterData.fromDate,
          to_date: this.filterData.toDate,
          page: this.filterData.page,
          size: this.filterData.size,
          local_customer_id: this.filterData.extra['local_customer_id'],
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
      text: this.translations["Orders"],
      link: null,
      active: true
    }];
  }
  fetchOrders(asAdmin, params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.ORDERS.SEARCH(params));
    let url = asAdmin ? _sales_endpoints__WEBPACK_IMPORTED_MODULE_7__.SalesEndpoints.ORDERS.SEARCH_FOR_ADMIN(this.config.endpoint, params) : _sales_endpoints__WEBPACK_IMPORTED_MODULE_7__.SalesEndpoints.ORDERS.SEARCH_FOR_VENDOR(this.config.endpoint, params);
    this.orderService.search(key, url, params);
    this.subscribe(key, null, (value, meta) => {
      this.orders = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error(_layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_8__.translations['Error'], meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success(_layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_8__.translations["Successful"], _layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_8__.translations["Order is deleted."]);
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
    if (customer == null) return 'N/A';else if (customer.name != null) return customer.name + '<br/>(' + customer.phone + ')';else return customer.phone;
  }
  onCancelClick(orderId) {
    if (!confirm(_layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_8__.translations["Are you sure you want to cancel this order?"])) {
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
      if (status === _models_order_model__WEBPACK_IMPORTED_MODULE_5__.OrderStatus.DELIVERY_FAILED) {
        this.notifier.success(_layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_8__.translations['Successful'], _layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_8__.translations["Order has been canceled."]);
      } else if (status === _models_order_model__WEBPACK_IMPORTED_MODULE_5__.OrderStatus.CONFIRMED) {
        this.notifier.success(_layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_8__.translations['Successful'], _layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_8__.translations["Order has been confirmed."]);
      }
      this.ngOnInit();
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning(_layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_8__.translations['Failed!'], error.error.message);
    });
  }
  isCanceled(item) {
    return item.status === _models_order_model__WEBPACK_IMPORTED_MODULE_5__.OrderStatus.DELIVERY_FAILED;
  }
  isConfirmed(item) {
    return item.status === _models_order_model__WEBPACK_IMPORTED_MODULE_5__.OrderStatus.CONFIRMED;
  }
  onAddPaymentClick(order) {
    let dialogRef = this.paymentDialog.openWithConfig(_add_payment_add_payment_component__WEBPACK_IMPORTED_MODULE_6__.AddPaymentComponent, {
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
  onPrintClick(order) {
    this.initiatePrint(order.id);
  }
  initiatePrint(orderId) {
    let print = confirm(_layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_8__.translations["Do you want to print the receipt?"]);
    if (!print) {
      return;
    }
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.ORDERS.DOWNLOAD_RECEIPT(orderId));
    this.orderService.downloadReceipt(key, orderId, this.locale);
    this.subscribe(key, null, (value, meta) => {
      let receipt = meta.data;
      // Create a hidden iframe
      let printFrame = document.createElement('iframe');
      printFrame.style.display = 'none';
      document.body.appendChild(printFrame);
      // Write the receipt content to the iframe
      printFrame.contentDocument.write(receipt);
      printFrame.contentDocument.close();
      // Wait for content to be fully loaded before printing
      printFrame.onload = function () {
        printFrame.contentWindow.print();
        if (!printFrame.contentWindow.focus) {
          document.body.removeChild(printFrame);
        }
      };
    });
  }
  toggleReminder(order, reminder) {
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.ORDERS.TOGGLE_PAYMENT_REMINDER(order.id, reminder));
    let nextPaymentDate = reminder ? _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_9__.TimeUtility.addDays(new Date(), 1) : null;
    this.orderService.togglePaymentReminder(key, order.id, reminder, nextPaymentDate);
    this.subscribe(key, null, (value, meta) => {
      this.ngOnInit();
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      let error = meta.data;
      this.loading = false;
      this.notifier.warning(_layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_8__.translations['Failed!'], error.error.message);
    });
  }
  static #_ = this.ɵfac = function OrderListComponent_Factory(t) {
    return new (t || OrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_11__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_12__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_13__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_14__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_15__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_16__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_14__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_22__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_17__.OrganizationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({
    type: OrderListComponent,
    selectors: [["app-order-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 8,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Stocks$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___5 = goog.getMsg("Stocks");
        i18n_4 = MSG_EXTERNAL_label_Stocks$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u09B8\u09CD\u099F\u0995";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_MySales$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___7 = goog.getMsg("My orders sold previously");
        i18n_6 = MSG_EXTERNAL_msg_MySales$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "\u09AA\u09C2\u09B0\u09CD\u09AC\u09C7 \u09AC\u09BF\u0995\u09CD\u09B0\u09DF \u0995\u09B0\u09BE \u0985\u09B0\u09CD\u09A1\u09BE\u09B0\u0997\u09C1\u09B2\u09CB";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___9 = goog.getMsg("Id");
        i18n_8 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "Id";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Date$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___11 = goog.getMsg("Date");
        i18n_10 = MSG_EXTERNAL_label_Date$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u09A4\u09BE\u09B0\u09BF\u0996";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Customer$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___13 = goog.getMsg("Customer");
        i18n_12 = MSG_EXTERNAL_label_Customer$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u0995\u09CD\u09B0\u09C7\u09A4\u09BE";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Order$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___15 = goog.getMsg("Order");
        i18n_14 = MSG_EXTERNAL_label_Order$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u0985\u09B0\u09CD\u09A1\u09BE\u09B0";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Items$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___17 = goog.getMsg("Items");
        i18n_16 = MSG_EXTERNAL_label_Items$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u0986\u0987\u099F\u09C7\u09AE";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Total$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___19 = goog.getMsg("Total");
        i18n_18 = MSG_EXTERNAL_label_Total$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u09AE\u09CB\u099F";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Profit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___21 = goog.getMsg("Profit");
        i18n_20 = MSG_EXTERNAL_label_Profit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___21;
      } else {
        i18n_20 = "\u09B2\u09BE\u09AD";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Status$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___23 = goog.getMsg("Status");
        i18n_22 = MSG_EXTERNAL_label_Status$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___23;
      } else {
        i18n_22 = "\u0985\u09AC\u09B8\u09CD\u09A5\u09BE";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Receipt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___25 = goog.getMsg("Receipt");
        i18n_24 = MSG_EXTERNAL_label_Receipt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___25;
      } else {
        i18n_24 = "\u09B0\u09BF\u09B8\u09BF\u09AA\u09CD\u099F";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Payment$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___27 = goog.getMsg("Payment");
        i18n_26 = MSG_EXTERNAL_label_Payment$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___27;
      } else {
        i18n_26 = "\u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___29 = goog.getMsg("Cancel");
        i18n_28 = MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS___29;
      } else {
        i18n_28 = "\u09AC\u09BE\u09A4\u09BF\u09B2";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_OrderDate$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____31 = goog.getMsg("{$startBoldText}Order Date{$closeBoldText}", {
          "startBoldText": "\uFFFD#7\uFFFD",
          "closeBoldText": "\uFFFD/#7\uFFFD"
        }, {
          original_code: {
            "startBoldText": "<b>",
            "closeBoldText": "</b>"
          }
        });
        i18n_30 = MSG_EXTERNAL_label_OrderDate$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____31;
      } else {
        i18n_30 = "\u0985\u09B0\u09CD\u09A1\u09BE\u09B0\u09C7\u09B0 \u09A4\u09BE\u09B0\u09BF\u0996";
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Total$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____33 = goog.getMsg("Total");
        i18n_32 = MSG_EXTERNAL_label_Total$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____33;
      } else {
        i18n_32 = "\u09AE\u09CB\u099F";
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Paid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____35 = goog.getMsg("Paid");
        i18n_34 = MSG_EXTERNAL_label_Paid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____35;
      } else {
        i18n_34 = "\u09AA\u09B0\u09BF\u09B6\u09CB\u09A7\u09BF\u09A4";
      }
      let i18n_36;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Due$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____37 = goog.getMsg("Due");
        i18n_36 = MSG_EXTERNAL_label_Due$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____37;
      } else {
        i18n_36 = "\u09AC\u09BE\u0995\u09BF";
      }
      let i18n_38;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____39 = goog.getMsg("$");
        i18n_38 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____39;
      } else {
        i18n_38 = "\u09F3";
      }
      let i18n_40;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_NextPaymentDate$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____41 = goog.getMsg("{$startBoldText}Next Payment Date{$closeBoldText}", {
          "startBoldText": "\uFFFD#3\uFFFD",
          "closeBoldText": "\uFFFD/#3\uFFFD"
        }, {
          original_code: {
            "startBoldText": "<b>",
            "closeBoldText": "</b>"
          }
        });
        i18n_40 = MSG_EXTERNAL_label_NextPaymentDate$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____41;
      } else {
        i18n_40 = "\u09AA\u09B0\u09AC\u09B0\u09CD\u09A4\u09C0 \u09AA\u09B0\u09BF\u09B6\u09CB\u09A7\u09C7\u09B0 \u09A4\u09BE\u09B0\u09BF\u0996";
      }
      let i18n_42;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Billed_By$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____43 = goog.getMsg("Billed By");
        i18n_42 = MSG_EXTERNAL_label_Billed_By$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____43;
      } else {
        i18n_42 = "\u09AC\u09BF\u09B2 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_44;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Paid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____45 = goog.getMsg("Paid");
        i18n_44 = MSG_EXTERNAL_label_Paid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____45;
      } else {
        i18n_44 = "\u09AA\u09B0\u09BF\u09B6\u09CB\u09A7\u09BF\u09A4";
      }
      let i18n_46;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_PartiallyPaid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____47 = goog.getMsg(" Partially Paid");
        i18n_46 = MSG_EXTERNAL_label_PartiallyPaid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____47;
      } else {
        i18n_46 = "\u0986\u0982\u09B6\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u09AC\u09BE\u0995\u09C0";
      }
      let i18n_48;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Unpaid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____49 = goog.getMsg("Unpaid");
        i18n_48 = MSG_EXTERNAL_label_Unpaid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____49;
      } else {
        i18n_48 = "\u09AC\u09BE\u0995\u09C0";
      }
      let i18n_50;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____51 = goog.getMsg("$");
        i18n_50 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____51;
      } else {
        i18n_50 = "\u09F3";
      }
      let i18n_52;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____53 = goog.getMsg("$");
        i18n_52 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____53;
      } else {
        i18n_52 = "\u09F3";
      }
      let i18n_54;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____55 = goog.getMsg("$");
        i18n_54 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____55;
      } else {
        i18n_54 = "\u09F3";
      }
      let i18n_56;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____57 = goog.getMsg("$");
        i18n_56 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____57;
      } else {
        i18n_56 = "\u09F3";
      }
      let i18n_58;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Canceled$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____59 = goog.getMsg("Canceled");
        i18n_58 = MSG_EXTERNAL_label_Canceled$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____59;
      } else {
        i18n_58 = "\u09AC\u09BE\u09A4\u09BF\u09B2 \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_60;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Sold$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____61 = goog.getMsg("Sold");
        i18n_60 = MSG_EXTERNAL_label_Sold$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____61;
      } else {
        i18n_60 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_62;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_FinishSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____63 = goog.getMsg("Finish Sale");
        i18n_62 = MSG_EXTERNAL_label_FinishSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____63;
      } else {
        i18n_62 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09BF \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_64;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_FinishSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____65 = goog.getMsg("If you don't finish this sale, your stock will remain unchanged, this will result incorrect analysis.");
        i18n_64 = MSG_EXTERNAL_msg_FinishSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____65;
      } else {
        i18n_64 = "\n          \u098F\u0987 \u09AC\u09BF\u0995\u09CD\u09B0\u09DF\u099F\u09BF \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u0995\u09B0\u09A4\u09C7 \u0995\u09CD\u09B2\u09BF\u0995 \u0995\u09B0\u09C1\u09A8\u0964 \u09A8\u09DF\u09A4 \u0986\u09AA\u09A8\u09BE\u09B0 \u09B8\u09CD\u099F\u0995 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09BF\u09A4 \u09B9\u09AC\u09C7 \u09A8\u09BE, \u098F\u099F\u09BF \u09AD\u09C1\u09B2 \u09AB\u09B2\u09BE\u09AB\u09B2 \u09A6\u09C7\u09AC\u09C7\u0964\n        ";
      }
      let i18n_66;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_AddPayment$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____67 = goog.getMsg("Add Payment");
        i18n_66 = MSG_EXTERNAL_label_AddPayment$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____67;
      } else {
        i18n_66 = "\u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F \u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_68;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____69 = goog.getMsg("Cancel");
        i18n_68 = MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____69;
      } else {
        i18n_68 = "\u09AC\u09BE\u09A4\u09BF\u09B2";
      }
      let i18n_70;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_By$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____71 = goog.getMsg("By");
        i18n_70 = MSG_EXTERNAL_label_By$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____71;
      } else {
        i18n_70 = "\u09A6\u09CD\u09AC\u09BE\u09B0\u09BE";
      }
      let i18n_72;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____73 = goog.getMsg("Created At");
        i18n_72 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____73;
      } else {
        i18n_72 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_74;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____75 = goog.getMsg("Cancel");
        i18n_74 = MSG_EXTERNAL_label_Cancel$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS____75;
      } else {
        i18n_74 = "\u09AC\u09BE\u09A4\u09BF\u09B2";
      }
      let i18n_76;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_OrderDate$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____77 = goog.getMsg("Order Date");
        i18n_76 = MSG_EXTERNAL_label_OrderDate$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____77;
      } else {
        i18n_76 = "\u0985\u09B0\u09CD\u09A1\u09BE\u09B0\u09C7\u09B0 \u09A4\u09BE\u09B0\u09BF\u0996";
      }
      let i18n_78;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____79 = goog.getMsg("Updated");
        i18n_78 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____79;
      } else {
        i18n_78 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_80;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Local$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____81 = goog.getMsg("Local");
        i18n_80 = MSG_EXTERNAL_label_Local$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_LIST_ORDER_LIST_COMPONENT_TS_____81;
      } else {
        i18n_80 = "\u09B8\u09CD\u09A5\u09BE\u09A8\u09C0\u09DF";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addBtnText", "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], ["routerLink", "/dash/sales/stocks", 1, "btn", "btn-primary", "float-end", "px-5", "mb-3", "font-size-16"], [1, "fa", "fa-cubes", "me-3"], i18n_4, [1, "card-title-desc"], i18n_6, [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, [4, "ngFor", "ngForOf"], i18n_30, ["href", "javascript: void(0);", 3, "click"], ["class", "badge bg-success", 4, "ngIf"], ["class", "badge bg-warning", 4, "ngIf"], ["class", "badge bg-danger", 4, "ngIf"], [1, "text-wrap", 2, "min-width", "15vw"], [1, "table", "table-condensed"], i18n_32, [1, "float-end"], i18n_34, i18n_36, [1, "me-1"], i18n_38, [1, "text", "text-success"], ["class", "text text-danger float-end", 4, "ngIf"], ["class", "text text-success float-end", 4, "ngIf"], ["class", "text text-success", 4, "ngIf"], ["class", "text text-danger", 4, "ngIf"], [1, "text-wrap"], [1, "mdi", "mdi-printer", "font-size-24"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-danger", 3, "click", 4, "ngIf"], i18n_40, ["href", "javascript:void(0);", 3, "click"], ["class", "mdi mdi-alarm text-success font-size-24", 4, "ngIf"], ["class", "mdi mdi-alarm-off text-muted font-size-24", 4, "ngIf"], [1, "mdi", "mdi-alarm", "text-success", "font-size-24"], [1, "mdi", "mdi-alarm-off", "text-muted", "font-size-24"], [3, "innerHTML"], [1, "row", "mt-3"], i18n_42, [1, "mdi", "mdi-information", "text-info", "font-size-16"], [1, "badge", "bg-success"], i18n_44, [1, "badge", "bg-warning"], i18n_46, [1, "badge", "bg-danger"], i18n_48, [1, "text", "text-danger", "float-end"], i18n_50, [1, "text", "text-success", "float-end"], i18n_52, i18n_54, [1, "text", "text-danger"], i18n_56, i18n_58, i18n_60, [1, "btn", "btn-danger", 3, "click"], i18n_62, [1, "text-danger"], i18n_64, [1, "btn", "btn-outline-primary", 3, "click"], i18n_66, [1, "btn", "btn-outline-danger", 3, "click"], i18n_68, ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], [1, "font-size-10", "text-info"], i18n_70, [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], i18n_72, [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "bg-info", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-16"], [1, "flex-fill"], [1, "mdi", "mdi-cancel", "text-danger"], i18n_74, [1, "mb-4"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "font-size-10"], i18n_76, i18n_78, i18n_80];
    },
    template: function OrderListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("layoutSelected", function OrderListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-order-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("addButtonClick", function OrderListComponent_Template_app_order_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](7, OrderListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](8, OrderListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](9, OrderListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("title", ctx.translations["My Sales"])("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("addBtnText", ctx.translations["Sell"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.orders.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx.orders.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("page", ctx.orders);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_18__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_19__.PaginationComponent, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLink, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_20__.BreadcrumbComponent, _order_filter_order_filter_component__WEBPACK_IMPORTED_MODULE_21__.OrderFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_24__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 45389:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/orders/components/order-select/order-select.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderSelectComponent: () => (/* binding */ OrderSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order-upsert/order-upsert.component */ 87595);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/config.model */ 83545);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/order.service */ 24366);
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

/***/ 87595:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/orders/components/order-upsert/order-upsert.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderUpsertComponent: () => (/* binding */ OrderUpsertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 83545);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _models_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/order.model */ 14086);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _utils_validation_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utils/validation.util */ 63674);
/* harmony import */ var _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v3.component */ 59890);
/* harmony import */ var _inventory_inventory_endpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../inventory/inventory.endpoints */ 62737);
/* harmony import */ var _layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../layout/left-nav/menu.model */ 2258);
/* harmony import */ var _inventory_products_models_product_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../inventory/products/models/product.model */ 41207);
/* harmony import */ var _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/utility/time.utility */ 62739);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/order.service */ 24366);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _inventory_stocks_services_stock_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../inventory/stocks/services/stock.service */ 42632);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 11633);
/* harmony import */ var _inventory_stocks_components_stock_select_stock_select_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../inventory/stocks/components/stock-select/stock-select.component */ 2773);
/* harmony import */ var _customers_components_customer_select_customer_select_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../customers/components/customer-select/customer-select.component */ 46830);

























const _c0 = ["stockSelect"];
const _c1 = ["skuInput"];
const _c2 = ["paymentStatusSelect"];
function OrderUpsertComponent_util_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "util-progress", 58);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("bar", true);
  }
}
function OrderUpsertComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 1)(1, "div", 59)(2, "div", 60)(3, "div", 61)(4, "h1", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "h4", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](7, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
  }
}
function OrderUpsertComponent_div_48_tr_36_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 99)(1, "em", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](2, 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "strong")(5, "em", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "strong")(9, "em", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "em", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](13, 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](item_r12.availableQuantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](item_r12.quantity - item_r12.availableQuantity);
  }
}
function OrderUpsertComponent_div_48_tr_36_small_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "small", 64)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("Retail: ", item_r12.stock.retail_price, "");
  }
}
function OrderUpsertComponent_div_48_tr_36_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 85)(1, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span", 106)(4, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](5, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](8, 1, ctx_r16.calculateDiscount(item_r12), "1.2-2"));
  }
}
function OrderUpsertComponent_div_48_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "td", 82)(4, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "td", 84)(7, "div", 85)(8, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function OrderUpsertComponent_div_48_tr_36_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21);
      const i_r13 = restoredCtx.index;
      const item_r12 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r20.onQtyChange(i_r13, item_r12.quantity - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "div", 85)(11, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function OrderUpsertComponent_div_48_tr_36_Template_input_change_11_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21);
      const i_r13 = restoredCtx.index;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r22.onQtySetEvent(i_r13, $event));
    })("keyup", function OrderUpsertComponent_div_48_tr_36_Template_input_keyup_11_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21);
      const i_r13 = restoredCtx.index;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r23.onQtySetEvent(i_r13, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "div", 85)(13, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function OrderUpsertComponent_div_48_tr_36_Template_a_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21);
      const i_r13 = restoredCtx.index;
      const item_r12 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r24.onQtyChange(i_r13, item_r12.quantity + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](14, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](15, OrderUpsertComponent_div_48_tr_36_div_15_Template, 14, 2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "td")(17, "div", 83)(18, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function OrderUpsertComponent_div_48_tr_36_Template_input_change_18_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21);
      const i_r13 = restoredCtx.index;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r25.onPriceSetEvent(i_r13, $event));
    })("keyup", function OrderUpsertComponent_div_48_tr_36_Template_input_keyup_18_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21);
      const i_r13 = restoredCtx.index;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r26.onPriceSetEvent(i_r13, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, OrderUpsertComponent_div_48_tr_36_small_19_Template, 3, 1, "small", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "td", 84)(21, "div", 85)(22, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function OrderUpsertComponent_div_48_tr_36_Template_a_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21);
      const i_r13 = restoredCtx.index;
      const item_r12 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r27.onDiscountChange(i_r13, item_r12.discount - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](23, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "div", 85)(25, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function OrderUpsertComponent_div_48_tr_36_Template_input_change_25_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21);
      const i_r13 = restoredCtx.index;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r28.onDiscountSetEvent(i_r13, $event));
    })("keyup", function OrderUpsertComponent_div_48_tr_36_Template_input_keyup_25_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21);
      const i_r13 = restoredCtx.index;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r29.onDiscountSetEvent(i_r13, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "div", 85)(27, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function OrderUpsertComponent_div_48_tr_36_Template_a_click_27_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21);
      const i_r13 = restoredCtx.index;
      const item_r12 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r30.onDiscountChange(i_r13, item_r12.discount + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](28, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, OrderUpsertComponent_div_48_tr_36_div_29_Template, 9, 4, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](31, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "td", 94)(33, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](34, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](37, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](38, "td")(39, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function OrderUpsertComponent_div_48_tr_36_Template_button_click_39_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r21);
      const i_r13 = restoredCtx.index;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r31.onDeleteItem(i_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](40, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](i_r13 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r10.resolveProductName(item_r12.stock.product, ctx_r10.locale));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("value", item_r12.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r12.quantity > item_r12.availableQuantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("value", item_r12.selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r12.stock.retail_price !== item_r12.selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("value", item_r12.discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10.calculateDiscount(item_r12) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](37, 9, ctx_r10.calculateSubtotal(item_r12), "1.2-2"));
  }
}
function OrderUpsertComponent_div_48_tr_37_strong_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "strong", 117)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](4, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9, "(Profit)");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](6, 1, ctx_r32.calculateGrandTotal() - ctx_r32.totalUnitPrices(), "1.2-2"), " ");
  }
}
function OrderUpsertComponent_div_48_tr_37_strong_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "strong", 121)(1, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](2, 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7, "(Loss)");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](4, 1, ctx_r33.calculateGrandTotal() - ctx_r33.totalUnitPrices(), "1.2-2"), " ");
  }
}
function OrderUpsertComponent_div_48_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "td", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "td")(3, "strong", 83)(4, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](5, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "td", 110)(9, "strong", 83)(10, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](11, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "td", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "td", 113)(17, "strong", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](18, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](22, OrderUpsertComponent_div_48_tr_37_strong_22_Template, 10, 4, "strong", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](23, OrderUpsertComponent_div_48_tr_37_strong_23_Template, 8, 4, "strong", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r11.calculateTotal());
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r11.calculateTotalDiscount());
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r11.calculateGrandTotal());
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r11.calculateGrandTotal() - ctx_r11.totalUnitPrices() > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r11.calculateGrandTotal() - ctx_r11.totalUnitPrices() <= 0);
  }
}
function OrderUpsertComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 1)(1, "div", 59)(2, "div", 66)(3, "div", 4)(4, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](5, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 69)(7, "table", 70)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](13, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](15, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "th")(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](18, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](21, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "th")(24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](25, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](26, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](27, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](30, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](32, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](34, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](36, OrderUpsertComponent_div_48_tr_36_Template, 41, 12, "tr", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](37, OrderUpsertComponent_div_48_tr_37_Template, 24, 5, "tr", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r4.cart);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r4.cart.length > 0);
  }
}
function OrderUpsertComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 37)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](2, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function OrderUpsertComponent_div_61_Template_input_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r34.onPaymentAmountSet($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("value", ctx_r6.paymentAmount);
  }
}
function OrderUpsertComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 37)(1, "label", 125)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](3, 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "input", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("min", ctx_r7.currentDate);
  }
}
function OrderUpsertComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 129)(1, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](4, 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
}
function OrderUpsertComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 134)(1, "div", 37)(2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](3, 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](4, "input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 37)(6, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](7, 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](8, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 37)(10, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](11, 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "input", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "div", 37)(14, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](15, 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](16, "input", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "div", 143)(18, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](19, 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](20, "textarea", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("value", ctx_r9.calculateTotal());
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("value", ctx_r9.calculateTotalDiscount());
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("value", ctx_r9.calculateTotalTax());
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("value", ctx_r9.calculateGrandTotal());
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", true);
  }
}
const _c85 = function () {
  return ["/dash/sales/stocks"];
};
const _c86 = function () {
  return {
    dateInputFormat: "DD-MM-YYYY h:mm:ss a"
  };
};
class OrderUpsertComponent extends _base_components_base_upsert_v3_component__WEBPACK_IMPORTED_MODULE_4__.BaseUpsertComponentV3 {
  constructor(eventBus, router, subContainer, route, orderService, notifier, stockService, dialogData, locale) {
    super(eventBus, router, subContainer, route, dialogData);
    this.orderService = orderService;
    this.notifier = notifier;
    this.stockService = stockService;
    this.locale = locale;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.defaultOrderConfig;
    this.orderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroup({
      local_customer: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroup({
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null, []),
        phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null, []),
        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null, [])
      }),
      // cart_items: new FormArray([], Validators.required),
      order_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]),
      next_payment_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null, [this.validateDate.bind(this)]),
      remind_everyday: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(true),
      coupon_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null, []),
      note: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null, []),
      // extra
      customer_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null, []),
      delivery_address_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null, []),
      delivery_option_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null, []),
      distance: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null, []),
      is_local: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null, []),
      payment_method: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null, []),
      pickup_schedule_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(null, [])
    });
    this.selectedCustomer = null;
    this.selectedStock = null;
    this.selectedPaymentStatus = "PAID";
    this.paymentAmount = 0;
    this.showPaymentAmount = false;
    this.showPaymentDate = false;
    this.currentDate = new Date();
    this.cart = [];
    this.resolveProductName = _inventory_products_models_product_model__WEBPACK_IMPORTED_MODULE_7__.resolveProductName;
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
      link: "/dash/orders",
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
    // re-format payment date to iso
    req.next_payment_date = req.next_payment_date == null ? null : _common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_8__.TimeUtility.toISO(req.next_payment_date);
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
      this.notifier.warning(_layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_6__.translations["Customer is required"], _layout_left_nav_menu_model__WEBPACK_IMPORTED_MODULE_6__.translations["Unpaid order must have a customer. This will help you track the payment and get paid later on."], () => {}, 10000);
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
      discount: stock.discount_percentage,
      selling_price: stock.retail_price
    };
    let existingIndex = this.cart.findIndex(c => c.stock.id == stock.id);
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
        this.showPaymentDate = false;
        this.orderForm.controls.next_payment_date.setValue(null);
        break;
      case "PARTIALLY_PAID":
        this.paymentAmount = Math.round(this.calculateGrandTotal() / 2);
        this.showPaymentDate = true;
        this.orderForm.controls.next_payment_date.setValue(_common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_8__.TimeUtility.addDays(new Date(), 1));
        break;
      case "UNPAID":
        this.paymentAmount = 0;
        this.showPaymentDate = true;
        this.orderForm.controls.next_payment_date.setValue(_common_modules_utility_time_utility__WEBPACK_IMPORTED_MODULE_8__.TimeUtility.addDays(new Date(), 1));
        break;
    }
    this.showPaymentAmount = this.selectedPaymentStatus === 'PARTIALLY_PAID';
  }
  onPaymentAmountSet(event) {
    let amountStr = event.target.value;
    if (amountStr == "") amountStr = "0";
    let amount = parseInt(amountStr);
    if (amount < 0) amount = 0;
    if (amount > this.calculateGrandTotal()) amount = this.calculateGrandTotal();
    this.paymentAmount = amount;
  }
  resolvePayment(order) {
    if (this.selectedPaymentStatus === 'PAID') {
      this.makePayment(order.id, this.calculateGrandTotal(), 'STORE_PAYMENT', () => {
        this.initiatePrint(order.id);
      });
    } else if (this.selectedPaymentStatus === 'PARTIALLY_PAID') {
      this.makePayment(order.id, this.paymentAmount, 'STORE_PAYMENT', () => {
        this.confirmOrder(order.id);
      });
    } else if (this.selectedPaymentStatus === 'UNPAID') {
      this.confirmOrder(order.id);
    }
  }
  initiatePrint(orderId) {
    let print = confirm("Do you want to print the receipt?");
    if (!print) {
      return;
    }
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.ORDERS.DOWNLOAD_RECEIPT(orderId));
    this.orderService.downloadReceipt(key, orderId, this.locale);
    this.subscribe(key, null, (value, meta) => {
      let receipt = meta.data;
      // Create a hidden iframe
      let printFrame = document.createElement('iframe');
      printFrame.style.display = 'none';
      document.body.appendChild(printFrame);
      // Write the receipt content to the iframe
      printFrame.contentDocument.write(receipt);
      printFrame.contentDocument.close();
      // Wait for content to be fully loaded before printing
      printFrame.onload = function () {
        printFrame.contentWindow.print();
        if (!printFrame.contentWindow.focus) {
          document.body.removeChild(printFrame);
        }
      };
    });
  }
  confirmOrder(orderId) {
    this.loading = true;
    let status = _models_order_model__WEBPACK_IMPORTED_MODULE_2__.OrderStatus.CONFIRMED;
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.ORDERS.CONFIRM_ORDER(orderId));
    this.orderService.changeStatus(key, orderId, status, null);
    this.subscribe(key, null, (value, meta) => {
      this.loading = false;
      this.initiatePrint(orderId);
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
    this.orderForm.controls.order_date.setValue(new Date());
    this.orderForm.controls.next_payment_date.setValue(null);
    this.selectedPaymentStatus = "PAID";
    this.paymentStatusSelect.nativeElement.value = 'PAID';
    this.paymentAmount = 0;
    this.showPaymentAmount = false;
    this.showPaymentDate = false;
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
  onQtyChange(index, qty) {
    let item = this.cart[index];
    item.quantity = qty;
    if (item.quantity < 1) {
      this.cart.splice(index, 1);
    }
  }
  onQtySetEvent(i, event) {
    let qty = event.target.value;
    this.onQtyChange(i, parseFloat(qty));
  }
  onPriceSetEvent(index, event) {
    let qty = event.target.value;
    this.onPriceChange(index, parseFloat(qty));
  }
  onPriceChange(index, price) {
    let item = this.cart[index];
    item.discount = (item.stock.retail_price - price) * 100 / item.stock.retail_price;
    item.selling_price = price;
  }
  validateDate(control) {
    if (control.value == null) return null;
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      return {
        'invalidDate': true
      };
    }
    return null;
  }
  static #_ = this.ɵfac = function OrderUpsertComponent_Factory(t) {
    return new (t || OrderUpsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_9__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_10__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_11__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_inventory_stocks_services_stock_service__WEBPACK_IMPORTED_MODULE_13__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.LOCALE_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
    type: OrderUpsertComponent,
    selectors: [["app-order-upsert"]],
    viewQuery: function OrderUpsertComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.stockSelect = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.skuInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.paymentStatusSelect = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]],
    decls: 78,
    vars: 18,
    consts: function () {
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreateSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_4 = goog.getMsg("Create a Sale");
        i18n_3 = MSG_EXTERNAL_label_CreateSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_4;
      } else {
        i18n_3 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09BF \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_MyStocks$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_6 = goog.getMsg("My Stocks");
        i18n_5 = MSG_EXTERNAL_label_MyStocks$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_6;
      } else {
        i18n_5 = "\u0986\u09AE\u09BE\u09B0 \u09B8\u09CD\u099F\u0995";
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_AllSales$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_8 = goog.getMsg("All Sales");
        i18n_7 = MSG_EXTERNAL_label_AllSales$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_8;
      } else {
        i18n_7 = "\u09B8\u0995\u09B2 \u09AC\u09BF\u0995\u09CD\u09B0\u09BF";
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CustomerPhone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_10 = goog.getMsg("Customer (Phone)");
        i18n_9 = MSG_EXTERNAL_label_CustomerPhone$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_10;
      } else {
        i18n_9 = "\u0995\u09CD\u09B0\u09C7\u09A4\u09BE (\u09AB\u09CB\u09A8 \u09A8\u09AE\u09CD\u09AC\u09B0)";
      }
      let i18n_11;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Date$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_12 = goog.getMsg("Date");
        i18n_11 = MSG_EXTERNAL_label_Date$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_12;
      } else {
        i18n_11 = "\u09A4\u09BE\u09B0\u09BF\u0996";
      }
      let i18n_13;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_searchStock$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_14 = goog.getMsg("Search Stock");
        i18n_13 = MSG_EXTERNAL_label_searchStock$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_14;
      } else {
        i18n_13 = "\u09B8\u09CD\u099F\u0995 \u0996\u09C1\u0981\u099C\u09C1\u09A8";
      }
      let i18n_15;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Sku$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_16 = goog.getMsg("SKU");
        i18n_15 = MSG_EXTERNAL_label_Sku$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_16;
      } else {
        i18n_15 = "SKU";
      }
      let i18n_17;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_PaymentStatus$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_18 = goog.getMsg("Payment Status");
        i18n_17 = MSG_EXTERNAL_PaymentStatus$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_18;
      } else {
        i18n_17 = "\u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F\u09C7\u09B0 \u0985\u09AC\u09B8\u09CD\u09A5\u09BE";
      }
      let i18n_19;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Paid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_20 = goog.getMsg("Paid");
        i18n_19 = MSG_EXTERNAL_label_Paid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_20;
      } else {
        i18n_19 = "\u09AA\u09B0\u09BF\u09B6\u09CB\u09A7\u09BF\u09A4";
      }
      let i18n_21;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_PartiallyPaid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_22 = goog.getMsg("Partially Paid");
        i18n_21 = MSG_EXTERNAL_label_PartiallyPaid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_22;
      } else {
        i18n_21 = "\u0986\u0982\u09B6\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u09AC\u09BE\u0995\u09C0";
      }
      let i18n_23;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Unpaid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_24 = goog.getMsg("Unpaid");
        i18n_23 = MSG_EXTERNAL_label_Unpaid$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_24;
      } else {
        i18n_23 = "\u09AC\u09BE\u0995\u09C0";
      }
      let i18n_25;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Note$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_26 = goog.getMsg("Note");
        i18n_25 = MSG_EXTERNAL_label_Note$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_26;
      } else {
        i18n_25 = "\u09A8\u09CB\u099F";
      }
      let i18n_27;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Clear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_28 = goog.getMsg("Clear");
        i18n_27 = MSG_EXTERNAL_label_Clear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_28;
      } else {
        i18n_27 = "\u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0";
      }
      let i18n_29;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CompleteSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_30 = goog.getMsg("Complete Sale");
        i18n_29 = MSG_EXTERNAL_label_CompleteSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS_30;
      } else {
        i18n_29 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09BF \u09B8\u09AE\u09CD\u09AA\u09A8\u09CD\u09A8 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_31;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_AddItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__32 = goog.getMsg(" Add items to sell ");
        i18n_31 = MSG_EXTERNAL_msg_AddItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__32;
      } else {
        i18n_31 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09BF\u09B0 \u099C\u09A8\u09CD\u09AF \u0986\u0987\u099F\u09C7\u09AE \u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C1\u09A8";
      }
      let i18n_33;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_CartItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__34 = goog.getMsg("Cart Items");
        i18n_33 = MSG_EXTERNAL_CartItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__34;
      } else {
        i18n_33 = "\u0995\u09BE\u09B0\u09CD\u099F\u09C7\u09B0 \u0986\u0987\u099F\u09C7\u09AE";
      }
      let i18n_35;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_ProductName$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__36 = goog.getMsg("Product Name");
        i18n_35 = MSG_EXTERNAL_label_ProductName$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__36;
      } else {
        i18n_35 = "\u09AA\u09A3\u09CD\u09AF\u09C7\u09B0 \u09A8\u09BE\u09AE";
      }
      let i18n_37;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Quantity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__38 = goog.getMsg("Quantity");
        i18n_37 = MSG_EXTERNAL_label_Quantity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__38;
      } else {
        i18n_37 = "\u09AA\u09B0\u09BF\u09AE\u09BE\u09A3";
      }
      let i18n_39;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_SellingPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__40 = goog.getMsg("Selling Price");
        i18n_39 = MSG_EXTERNAL_label_SellingPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__40;
      } else {
        i18n_39 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09DF\u09AE\u09C2\u09B2\u09CD\u09AF";
      }
      let i18n_41;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__42 = goog.getMsg("$");
        i18n_41 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__42;
      } else {
        i18n_41 = "\u09F3";
      }
      let i18n_43;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Discount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__44 = goog.getMsg("Discount");
        i18n_43 = MSG_EXTERNAL_label_Discount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__44;
      } else {
        i18n_43 = "\u09A1\u09BF\u09B8\u0995\u09BE\u0989\u09A8\u09CD\u099F";
      }
      let i18n_45;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Tax$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__46 = goog.getMsg("Tax");
        i18n_45 = MSG_EXTERNAL_label_Tax$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__46;
      } else {
        i18n_45 = "\u099F\u09CD\u09AF\u09BE\u0995\u09CD\u09B8";
      }
      let i18n_47;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Subtotal$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__48 = goog.getMsg("Subtotal");
        i18n_47 = MSG_EXTERNAL_label_Subtotal$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__48;
      } else {
        i18n_47 = "\u09B8\u09BE\u09AC\u099F\u09CB\u099F\u09BE\u09B2";
      }
      let i18n_49;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__50 = goog.getMsg("Delete");
        i18n_49 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__50;
      } else {
        i18n_49 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_51;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___52 = goog.getMsg("$");
        i18n_51 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___52;
      } else {
        i18n_51 = "\u09F3";
      }
      let i18n_53;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_AvailableQuantity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____54 = goog.getMsg("Available Quantity:");
        i18n_53 = MSG_EXTERNAL_msg_AvailableQuantity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____54;
      } else {
        i18n_53 = "\u09B8\u09CD\u099F\u0995\u09C7 \u09A5\u09BE\u0995\u09BE \u09AA\u09A3\u09CD\u09AF\u09C7\u09B0 \u09B8\u0982\u0996\u09CD\u09AF\u09BE\u0983";
      }
      let i18n_55;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_QtyUnavailableWarningMsg$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____56 = goog.getMsg(" items will be added to stock automatically. ");
        i18n_55 = MSG_EXTERNAL_msg_QtyUnavailableWarningMsg$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____56;
      } else {
        i18n_55 = "\u099F\u09BF \u09AA\u09A3\u09CD\u09AF \u0985\u099F\u09CB\u09AE\u09C7\u099F\u09BF\u0995\u09B2\u09BF \u09B8\u09CD\u099F\u0995\u09C7 \u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09BE \u09B9\u09AC\u09C7\u0964";
      }
      let i18n_57;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____58 = goog.getMsg("$");
        i18n_57 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____58;
      } else {
        i18n_57 = "\u09F3";
      }
      let i18n_59;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___60 = goog.getMsg("$");
        i18n_59 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___60;
      } else {
        i18n_59 = "\u09F3";
      }
      let i18n_61;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___62 = goog.getMsg("$");
        i18n_61 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___62;
      } else {
        i18n_61 = "\u09F3";
      }
      let i18n_63;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___64 = goog.getMsg("$");
        i18n_63 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS___64;
      } else {
        i18n_63 = "\u09F3";
      }
      let i18n_65;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____66 = goog.getMsg("$");
        i18n_65 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____66;
      } else {
        i18n_65 = "\u09F3";
      }
      let i18n_67;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____68 = goog.getMsg("$");
        i18n_67 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS____68;
      } else {
        i18n_67 = "\u09F3";
      }
      let i18n_69;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_PaymentAmount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__70 = goog.getMsg("Payment Amount");
        i18n_69 = MSG_EXTERNAL_label_PaymentAmount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__70;
      } else {
        i18n_69 = "\u09AA\u09C7\u09AE\u09C7\u09A8\u09CD\u099F\u09C7\u09B0 \u09AA\u09B0\u09BF\u09AE\u09BE\u09A3";
      }
      let i18n_71;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_PaymentDate$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__72 = goog.getMsg("Payment Date");
        i18n_71 = MSG_EXTERNAL_label_PaymentDate$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__72;
      } else {
        i18n_71 = "\u09AA\u09B0\u09BF\u09B6\u09CB\u09A7\u09C7\u09B0 \u09A4\u09BE\u09B0\u09BF\u0996";
      }
      let i18n_73;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_RemindEveryday$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__74 = goog.getMsg(" Remind Everyday (30 days) ");
        i18n_73 = MSG_EXTERNAL_label_RemindEveryday$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__74;
      } else {
        i18n_73 = "\u09AA\u09CD\u09B0\u09A4\u09BF\u09A6\u09BF\u09A8 \u09AE\u09A8\u09C7 \u0995\u09B0\u09BF\u09DF\u09C7 \u09A6\u09BF\u09A8 (\u09E9\u09E6 \u09A6\u09BF\u09A8 \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4)";
      }
      let i18n_75;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_TotalPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__76 = goog.getMsg("Total Price");
        i18n_75 = MSG_EXTERNAL_label_TotalPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__76;
      } else {
        i18n_75 = "\u09AE\u09CB\u099F \u09AE\u09C2\u09B2\u09CD\u09AF";
      }
      let i18n_77;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_TotalDiscount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__78 = goog.getMsg("Total Discount");
        i18n_77 = MSG_EXTERNAL_label_TotalDiscount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__78;
      } else {
        i18n_77 = "\u09AE\u09CB\u099F \u09A1\u09BF\u09B8\u0995\u09BE\u0989\u09A8\u09CD\u099F";
      }
      let i18n_79;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Tax$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__80 = goog.getMsg("Tax");
        i18n_79 = MSG_EXTERNAL_label_Tax$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__80;
      } else {
        i18n_79 = "\u099F\u09CD\u09AF\u09BE\u0995\u09CD\u09B8";
      }
      let i18n_81;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_GrandTotal$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__82 = goog.getMsg("Grand Total");
        i18n_81 = MSG_EXTERNAL_label_GrandTotal$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__82;
      } else {
        i18n_81 = "\u09B8\u09B0\u09CD\u09AC\u09AE\u09CB\u099F";
      }
      let i18n_83;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Note$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__84 = goog.getMsg("Note");
        i18n_83 = MSG_EXTERNAL_label_Note$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_SALES_ORDERS_COMPONENTS_ORDER_UPSERT_ORDER_UPSERT_COMPONENT_TS__84;
      } else {
        i18n_83 = "\u09A8\u09CB\u099F";
      }
      return [[3, "bar", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-3"], [1, "col-sm-6"], [1, "card-title", "mb-4"], i18n_3, [1, "d-flex", "flex-wrap", "gap-3", "float-end"], [1, "btn", "btn-outline-info", "waves-effect", 3, "routerLink"], [1, "mdi", "mdi-barcode", "font-size-16", "me-2"], i18n_5, [1, "btn", "btn-outline-primary", "waves-effect", 3, "click"], [1, "mdi", "mdi-truck-delivery", "font-size-16", "me-2"], i18n_7, [3, "formGroup"], [1, "col-sm-6", "mb-3"], ["for", "customer-input", 1, "form-label"], i18n_9, ["id", "customer-input", 3, "selectedItem", "selected"], ["for", "date-input", 1, "form-label"], i18n_11, [1, "error"], ["id", "date-input", 1, "input-group"], ["bsDatepicker", "", "id", "toDate", "formControlName", "order_date", 1, "form-control", 3, "bsConfig"], [1, "col-sm-8", "mb-3"], ["for", "stock-select", 1, "form-label"], i18n_13, ["id", "stock-select", 3, "selectedItem", "selected"], ["stockSelect", ""], [1, "col-sm-4", "mb-3"], i18n_15, ["id", "sku-input", 1, "input-group"], ["type", "text", "autofocus", "", 1, "form-control", 3, "placeholder", "change"], ["skuInput", ""], ["class", "row", 4, "ngIf"], [1, "col-6", "col-sm-3", "col-md-2", "mb-3"], i18n_17, [1, "form-select", "font-size-16", 3, "change"], ["paymentStatusSelect", ""], ["value", "PAID"], i18n_19, ["value", "PARTIALLY_PAID"], i18n_21, ["value", "UNPAID"], i18n_23, ["class", "col-6 col-sm-3 col-md-2 mb-3", 4, "ngIf"], ["class", "col-6 col-sm-3 col-md-3 mb-3 visually-hidden", 4, "ngIf"], i18n_25, ["type", "text", "max", "255", "formControlName", "note", 1, "form-control", "form-control-lg", 3, "placeholder"], ["class", "row visually-hidden", 4, "ngIf"], ["type", "button", 1, "btn", "btn-lg", "btn-outline-danger", "waves-effect", 3, "click"], [1, "mdi", "mdi-cancel", "d-block", "font-size-16"], i18n_27, ["type", "button", 1, "btn", "btn-lg", "btn-success", "waves-effect", "waves-light", 3, "ngClass", "click"], [1, "mdi", "mdi-sale", "d-block", "font-size-16"], i18n_29, [3, "bar"], [1, "col-12"], [1, "col-lg-12", "py-5", "my-3", "background-image-container"], [1, "text-center"], [1, "display-2", "fw-medium"], [1, "bx", "bx-cart-alt", "text-primary", "display-3"], [1, "text-primary"], i18n_31, [1, "card", "shadow-sm"], [1, "card-title-desc"], i18n_33, [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-bordered", "table-condensed"], i18n_35, i18n_37, i18n_39, i18n_41, i18n_43, [1, "mdi", "mdi-percent", "text-warning-emphasis"], i18n_45, i18n_47, i18n_49, [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "text-wrap"], [1, "font-size-16"], [1, "row", "align-items-center", "min-width-column"], [1, "col-sm-auto"], ["href", "javascript: void(0);", 1, "text-muted", "font-size-24", 3, "click"], [1, "mdi", "mdi-minus-circle", "text-danger"], ["min", "1", "max", "100000", "type", "number", 1, "form-control", "num-input", "font-size-16", 3, "value", "change", "keyup"], [1, "mdi", "mdi-plus-circle", "text-success"], ["class", "mt-2", 4, "ngIf"], ["class", "text-primary", 4, "ngIf"], ["min", "0", "max", "100", "type", "number", 1, "form-control", "num-input", "font-size-16", 3, "value", "change", "keyup"], ["class", "col-sm-auto", 4, "ngIf"], [1, "font-size-16", "text-success"], [1, "me-1"], i18n_51, ["type", "button", 1, "btn", "btn-danger", "btn-sm", "waves-effect", "waves-light", 3, "click"], [1, "mdi", "mdi-trash-can"], [1, "mt-2"], [1, "text", "text-danger"], i18n_53, [1, "text", "text-danger", "text-wrap"], i18n_55, ["href", "javascript: void(0);", 1, "text-muted", "font-size-16"], [1, "mdi", "mdi-equal"], [1, "font-size-16", "ms-2"], i18n_57, ["colspan", "3", 1, "text-end"], i18n_59, [1, "text-secondary", "text-decoration-line-through"], i18n_61, [1, "text-end"], [1, "font-size-16", "text-bg-success"], i18n_63, ["class", "text-success", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-success"], [1, "mdi", "mdi-plus", "font-size-16"], [1, "mx-1"], i18n_65, [1, "text-danger"], i18n_67, i18n_69, ["type", "number", 1, "form-control", "form-control-lg", 3, "value", "change"], ["for", "payment-date-input", 1, "form-label"], i18n_71, ["id", "payment-date-input", 1, "input-group"], ["type", "datetime-local", "id", "PaymentDate", "formControlName", "next_payment_date", 1, "form-control", 3, "min"], [1, "col-6", "col-sm-3", "col-md-3", "mb-3", "visually-hidden"], [1, "form-check", "mt-4"], ["type", "checkbox", "id", "gridCheck", "name", "remind_everyday", "formControlName", "remind_everyday", 1, "form-check-input"], ["for", "gridCheck", 1, "form-check-label"], i18n_73, [1, "row", "visually-hidden"], i18n_75, ["type", "text", 1, "form-control", "text-bg-info", "font-size-16", 3, "disabled", "value"], i18n_77, ["type", "text", 1, "form-control", "text-bg-warning", "font-size-16", 3, "disabled", "value"], i18n_79, ["type", "text", 1, "form-control", "text-bg-secondary", "font-size-16", 3, "disabled", "value"], i18n_81, ["type", "text", 1, "form-control", "text-bg-success", "font-size-16", 3, "disabled", "value"], [1, "col-sm-3", "col-md-4", "mb-3"], i18n_83, ["rows", "3", "formControlName", "note", 1, "form-control"]];
    },
    template: function OrderUpsertComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, OrderUpsertComponent_util_progress_0_Template, 1, 1, "util-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](8, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 6)(10, "div", 9)(11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](14, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function OrderUpsertComponent_Template_button_click_15_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](16, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](18, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "form", 16)(20, "div", 1)(21, "div", 17)(22, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](23, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "app-customer-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selected", function OrderUpsertComponent_Template_app_customer_select_selected_24_listener($event) {
          return ctx.onCustomerSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "div", 17)(26, "label", 21)(27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](28, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "em", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](32, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](33, "div", 1)(34, "div", 26)(35, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](36, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](37, "app-stock-select", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selected", function OrderUpsertComponent_Template_app_stock_select_selected_37_listener($event) {
          return ctx.onStockSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](39, "div", 31)(40, "label", 21)(41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](42, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](43, "div", 33)(44, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function OrderUpsertComponent_Template_input_change_44_listener($event) {
          return ctx.onSkuEntered($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](47, OrderUpsertComponent_div_47_Template, 8, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](48, OrderUpsertComponent_div_48_Template, 38, 2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](49, "div", 1)(50, "div", 37)(51, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](52, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](53, "select", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function OrderUpsertComponent_Template_select_change_53_listener($event) {
          return ctx.onPaymentStatusSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](55, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](56, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](57, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](58, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](60, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](61, OrderUpsertComponent_div_61_Template, 4, 1, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](62, OrderUpsertComponent_div_62_Template, 6, 1, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](63, OrderUpsertComponent_div_63_Template, 5, 0, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](64, "div", 37)(65, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](66, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](67, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](68, OrderUpsertComponent_div_68_Template, 21, 8, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](69, "div", 9)(70, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function OrderUpsertComponent_Template_button_click_70_listener() {
          return ctx.onClear();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](71, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](73, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](74, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function OrderUpsertComponent_Template_button_click_74_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](75, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵi18n"](77, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@loaded", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](16, _c85));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx.orderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("selectedItem", ctx.selectedCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](17, _c86));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("selectedItem", ctx.selectedStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Enter SKU"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.cart.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.cart.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showPaymentAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showPaymentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showPaymentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Note"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.cart.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", ctx.cart.length > 0 && ctx.orderForm.valid ? "" : "disabled");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_14__.ProgressComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__.BsDatepickerInputDirective, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLink, _inventory_stocks_components_stock_select_stock_select_component__WEBPACK_IMPORTED_MODULE_15__.StockSelectComponent, _customers_components_customer_select_customer_select_component__WEBPACK_IMPORTED_MODULE_16__.CustomerSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.DecimalPipe],
    styles: [".background-image-container[_ngcontent-%COMP%] {\n  \n\n  background-image: url(\"/assets/img/background.svg\");\n  background-size: cover; \n\n  background-position: center center; \n\n  \n\n}\n\n.num-input[_ngcontent-%COMP%] {\n  min-width: 50px;\n  font-weight: bold;\n  max-width: 150px;\n}\n\n.min-width-column[_ngcontent-%COMP%] {\n  min-width: 250px;\n  max-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kYXNoL2RvbWFpbnMvc2FsZXMvb3JkZXJzL2NvbXBvbmVudHMvb3JkZXItdXBzZXJ0L29yZGVyLXVwc2VydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlEQUFBO0VBQ0EsbURBQUE7RUFDQSxzQkFBQSxFQUFBLHlDQUFBO0VBQ0Esa0NBQUEsRUFBQSxpRUFBQTtFQUNBLG9EQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtaW1hZ2UtY29udGFpbmVyIHtcbiAgLyogU3BlY2lmeSB0aGUgaW1hZ2UgVVJMIGFuZCBvdGhlciBwcm9wZXJ0aWVzIGFzIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmQuc3ZnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIEFkanVzdCB0aGUgYmFja2dyb3VuZCBzaXplIGFzIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyAvKiBDZW50ZXIgdGhlIGJhY2tncm91bmQgaW1hZ2UgYm90aCBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHkgKi9cbiAgLyogQWRkIGFueSBvdGhlciBzdHlsZXMgeW91IHdhbnQgZm9yIHRoZSBjb250YWluZXIgKi9cbn1cblxuLm51bS1pbnB1dHtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLm1pbi13aWR0aC1jb2x1bW4ge1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 83545:
/*!**************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/orders/models/config.model.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOrderConfig: () => (/* binding */ defaultOrderConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/modules/generic/breadcrumb/breadcrumb.model */ 97989);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 77986);


let defaultOrderConfig = {
  defaultLayout: _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.COLUMN,
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
  list: "/dash/sales/orders",
  create: "/dash/sales/orders/create",
  update(id) {
    return id == null ? this.create : "/dash/sales/orders/" + id + '/update';
  }
};

/***/ }),

/***/ 14086:
/*!*************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/orders/models/order.model.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderStatus: () => (/* binding */ OrderStatus),
/* harmony export */   PaymentStatus: () => (/* binding */ PaymentStatus),
/* harmony export */   resolveProductName: () => (/* binding */ resolveProductName)
/* harmony export */ });
/* harmony import */ var _models_global_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/global.config */ 4699);

function resolveProductName(oi, locale) {
  if (locale === _models_global_config__WEBPACK_IMPORTED_MODULE_0__.Locales.BN_BN) {
    return oi.product_name_bn == null ? oi.product_name : oi.product_name_bn;
  } else {
    return oi.product_name;
  }
}
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

/***/ 61832:
/*!**********************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/orders/order.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderComponent: () => (/* binding */ OrderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/order-list/order-list.component */ 59168);


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

/***/ 24366:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/orders/services/order.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderService: () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales.endpoints */ 77986);
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
  togglePaymentReminder(key, orderId, reminder, nextPaymentDate) {
    let endpoint = _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ORDERS.TOGGLE_PAYMENT_REMINDER(orderId, {
      order_id: orderId,
      reminder: reminder,
      next_payment_date: nextPaymentDate
    });
    this.http.patch(endpoint, {}).subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.togglePaymentReminder(key, orderId, reminder, nextPaymentDate);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  downloadReceipt(key, orderId, locale) {
    let url = _sales_endpoints__WEBPACK_IMPORTED_MODULE_1__.SalesEndpoints.ORDERS.DOWNLOAD_RECEIPT(orderId, {
      locale: locale
    });
    this.http.get(url, {
      responseType: 'text'
    }).subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.downloadReceipt(key, orderId, locale);
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

/***/ 57432:
/*!************************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/sales.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesModule: () => (/* binding */ SalesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/modules/utility/utility.module */ 7151);
/* harmony import */ var _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/modules/cms/cms.module */ 68709);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);
/* harmony import */ var _users_user_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/user.module */ 27459);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 11633);
/* harmony import */ var _orders_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders/order.component */ 61832);
/* harmony import */ var _orders_components_order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders/components/order-upsert/order-upsert.component */ 87595);
/* harmony import */ var _orders_components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders/components/order-list/order-list.component */ 59168);
/* harmony import */ var _sales_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sales.route */ 76133);
/* harmony import */ var _dash_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dash.module */ 42298);
/* harmony import */ var _orders_components_order_select_order_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orders/components/order-select/order-select.component */ 45389);
/* harmony import */ var _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../inventory/inventory.module */ 45475);
/* harmony import */ var _customers_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customers/customer.component */ 3433);
/* harmony import */ var _customers_components_customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customers/components/customer-upsert/customer-upsert.component */ 66869);
/* harmony import */ var _customers_components_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customers/components/customer-list/customer-list.component */ 73767);
/* harmony import */ var _customers_components_customer_select_customer_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customers/components/customer-select/customer-select.component */ 46830);
/* harmony import */ var _orders_components_add_payment_add_payment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./orders/components/add-payment/add-payment.component */ 28397);
/* harmony import */ var _orders_components_order_filter_order_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./orders/components/order-filter/order-filter.component */ 1010);
/* harmony import */ var _common_modules_generic_generic_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/modules/generic/generic.module */ 44044);
/* harmony import */ var _leads_lead_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./leads/lead.component */ 17226);
/* harmony import */ var _leads_components_lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./leads/components/lead-list/lead-list.component */ 56943);
/* harmony import */ var _leads_components_lead_upsert_lead_upsert_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./leads/components/lead-upsert/lead-upsert.component */ 48132);
/* harmony import */ var _leads_components_lead_select_lead_select_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./leads/components/lead-select/lead-select.component */ 65475);
/* harmony import */ var _hr_hr_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../hr/hr.module */ 24848);
/* harmony import */ var _leadpropagations_leadpropagation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./leadpropagations/leadpropagation.component */ 26105);
/* harmony import */ var _leadpropagations_components_leadpropagation_list_leadpropagation_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./leadpropagations/components/leadpropagation-list/leadpropagation-list.component */ 24820);
/* harmony import */ var _leadpropagations_components_leadpropagation_upsert_leadpropagation_upsert_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./leadpropagations/components/leadpropagation-upsert/leadpropagation-upsert.component */ 80397);
/* harmony import */ var _leadpropagations_components_leadpropagation_select_leadpropagation_select_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./leadpropagations/components/leadpropagation-select/leadpropagation-select.component */ 78065);
/* harmony import */ var _leads_components_lead_filter_lead_filter_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./leads/components/lead-filter/lead-filter.component */ 30364);
/* harmony import */ var _leadstages_leadstage_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./leadstages/leadstage.component */ 1265);
/* harmony import */ var _leadstages_components_leadstage_upsert_leadstage_upsert_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./leadstages/components/leadstage-upsert/leadstage-upsert.component */ 70625);
/* harmony import */ var _leadstages_components_leadstage_list_leadstage_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./leadstages/components/leadstage-list/leadstage-list.component */ 73420);
/* harmony import */ var _leadstages_components_leadstage_select_leadstage_select_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./leadstages/components/leadstage-select/leadstage-select.component */ 86367);
/* harmony import */ var _acquisitioncampaigns_acquisitioncampaign_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./acquisitioncampaigns/acquisitioncampaign.component */ 55449);
/* harmony import */ var _acquisitioncampaigns_components_acquisitioncampaign_list_acquisitioncampaign_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./acquisitioncampaigns/components/acquisitioncampaign-list/acquisitioncampaign-list.component */ 40457);
/* harmony import */ var _acquisitioncampaigns_components_acquisitioncampaign_upsert_acquisitioncampaign_upsert_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./acquisitioncampaigns/components/acquisitioncampaign-upsert/acquisitioncampaign-upsert.component */ 99753);
/* harmony import */ var _acquisitioncampaigns_components_acquisitioncampaign_select_acquisitioncampaign_select_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./acquisitioncampaigns/components/acquisitioncampaign-select/acquisitioncampaign-select.component */ 24818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/core */ 61699);








































class SalesModule {
  static #_ = this.ɵfac = function SalesModule_Factory(t) {
    return new (t || SalesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineNgModule"]({
    type: SalesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule, _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_0__.UtilityModule, _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_1__.CmsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_38__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule, _users_user_module__WEBPACK_IMPORTED_MODULE_2__.UserModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_39__.BsDatepickerModule, _sales_route__WEBPACK_IMPORTED_MODULE_6__.SalesRoute, _dash_module__WEBPACK_IMPORTED_MODULE_7__.DashModule, _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_9__.InventoryModule, _common_modules_generic_generic_module__WEBPACK_IMPORTED_MODULE_16__.GenericModule, _hr_hr_module__WEBPACK_IMPORTED_MODULE_21__.HrModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵsetNgModuleScope"](SalesModule, {
    declarations: [_orders_order_component__WEBPACK_IMPORTED_MODULE_3__.OrderComponent, _orders_components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_5__.OrderListComponent, _orders_components_order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_4__.OrderUpsertComponent, _orders_components_order_select_order_select_component__WEBPACK_IMPORTED_MODULE_8__.OrderSelectComponent, _customers_customer_component__WEBPACK_IMPORTED_MODULE_10__.CustomerComponent, _customers_components_customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_11__.CustomerUpsertComponent, _customers_components_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_12__.CustomerListComponent, _customers_components_customer_select_customer_select_component__WEBPACK_IMPORTED_MODULE_13__.CustomerSelectComponent, _orders_components_add_payment_add_payment_component__WEBPACK_IMPORTED_MODULE_14__.AddPaymentComponent, _orders_components_order_filter_order_filter_component__WEBPACK_IMPORTED_MODULE_15__.OrderFilterComponent, _leads_lead_component__WEBPACK_IMPORTED_MODULE_17__.LeadComponent, _leads_components_lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_18__.LeadListComponent, _leads_components_lead_upsert_lead_upsert_component__WEBPACK_IMPORTED_MODULE_19__.LeadUpsertComponent, _leads_components_lead_select_lead_select_component__WEBPACK_IMPORTED_MODULE_20__.LeadSelectComponent, _leads_components_lead_filter_lead_filter_component__WEBPACK_IMPORTED_MODULE_26__.LeadFilterComponent, _leadpropagations_leadpropagation_component__WEBPACK_IMPORTED_MODULE_22__.LeadPropagationComponent, _leadpropagations_components_leadpropagation_list_leadpropagation_list_component__WEBPACK_IMPORTED_MODULE_23__.LeadPropagationListComponent, _leadpropagations_components_leadpropagation_upsert_leadpropagation_upsert_component__WEBPACK_IMPORTED_MODULE_24__.LeadPropagationUpsertComponent, _leadpropagations_components_leadpropagation_select_leadpropagation_select_component__WEBPACK_IMPORTED_MODULE_25__.LeadPropagationSelectComponent, _leadstages_leadstage_component__WEBPACK_IMPORTED_MODULE_27__.LeadStageComponent, _leadstages_components_leadstage_upsert_leadstage_upsert_component__WEBPACK_IMPORTED_MODULE_28__.LeadStageUpsertComponent, _leadstages_components_leadstage_list_leadstage_list_component__WEBPACK_IMPORTED_MODULE_29__.LeadStageListComponent, _leadstages_components_leadstage_select_leadstage_select_component__WEBPACK_IMPORTED_MODULE_30__.LeadStageSelectComponent, _acquisitioncampaigns_acquisitioncampaign_component__WEBPACK_IMPORTED_MODULE_31__.AcquisitionCampaignComponent, _acquisitioncampaigns_components_acquisitioncampaign_list_acquisitioncampaign_list_component__WEBPACK_IMPORTED_MODULE_32__.AcquisitionCampaignListComponent, _acquisitioncampaigns_components_acquisitioncampaign_upsert_acquisitioncampaign_upsert_component__WEBPACK_IMPORTED_MODULE_33__.AcquisitionCampaignUpsertComponent, _acquisitioncampaigns_components_acquisitioncampaign_select_acquisitioncampaign_select_component__WEBPACK_IMPORTED_MODULE_34__.AcquisitionCampaignSelectComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule, _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_0__.UtilityModule, _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_1__.CmsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_38__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule, _users_user_module__WEBPACK_IMPORTED_MODULE_2__.UserModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_39__.BsDatepickerModule, _sales_route__WEBPACK_IMPORTED_MODULE_6__.SalesRoute, _dash_module__WEBPACK_IMPORTED_MODULE_7__.DashModule, _inventory_inventory_module__WEBPACK_IMPORTED_MODULE_9__.InventoryModule, _common_modules_generic_generic_module__WEBPACK_IMPORTED_MODULE_16__.GenericModule, _hr_hr_module__WEBPACK_IMPORTED_MODULE_21__.HrModule]
  });
})();

/***/ }),

/***/ 76133:
/*!***********************************************************!*\
  !*** ./src/app/modules/dash/domains/sales/sales.route.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesRoute: () => (/* binding */ SalesRoute)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _orders_order_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders/order.component */ 61832);
/* harmony import */ var _orders_components_order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders/components/order-upsert/order-upsert.component */ 87595);
/* harmony import */ var _customers_customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers/customer.component */ 3433);
/* harmony import */ var _customers_components_customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers/components/customer-upsert/customer-upsert.component */ 66869);
/* harmony import */ var _leads_lead_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leads/lead.component */ 17226);
/* harmony import */ var _leads_components_lead_upsert_lead_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leads/components/lead-upsert/lead-upsert.component */ 48132);
/* harmony import */ var _leadpropagations_leadpropagation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leadpropagations/leadpropagation.component */ 26105);
/* harmony import */ var _leadpropagations_components_leadpropagation_upsert_leadpropagation_upsert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leadpropagations/components/leadpropagation-upsert/leadpropagation-upsert.component */ 80397);
/* harmony import */ var _leadstages_leadstage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leadstages/leadstage.component */ 1265);
/* harmony import */ var _leadstages_components_leadstage_upsert_leadstage_upsert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leadstages/components/leadstage-upsert/leadstage-upsert.component */ 70625);
/* harmony import */ var _acquisitioncampaigns_acquisitioncampaign_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./acquisitioncampaigns/acquisitioncampaign.component */ 55449);
/* harmony import */ var _acquisitioncampaigns_components_acquisitioncampaign_upsert_acquisitioncampaign_upsert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./acquisitioncampaigns/components/acquisitioncampaign-upsert/acquisitioncampaign-upsert.component */ 99753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);















const routes = [{
  path: "orders",
  component: _orders_order_component__WEBPACK_IMPORTED_MODULE_0__.OrderComponent
}, {
  path: "orders/create",
  component: _orders_components_order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_1__.OrderUpsertComponent
}, {
  path: "orders/:id/update",
  component: _orders_components_order_upsert_order_upsert_component__WEBPACK_IMPORTED_MODULE_1__.OrderUpsertComponent
}, {
  path: "customers",
  component: _customers_customer_component__WEBPACK_IMPORTED_MODULE_2__.CustomerComponent
}, {
  path: "customers/create",
  component: _customers_components_customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_3__.CustomerUpsertComponent
}, {
  path: "customers/:id/update",
  component: _customers_components_customer_upsert_customer_upsert_component__WEBPACK_IMPORTED_MODULE_3__.CustomerUpsertComponent
}, {
  path: "stages",
  component: _leadstages_leadstage_component__WEBPACK_IMPORTED_MODULE_8__.LeadStageComponent
}, {
  path: "stages/create",
  component: _leadstages_components_leadstage_upsert_leadstage_upsert_component__WEBPACK_IMPORTED_MODULE_9__.LeadStageUpsertComponent
}, {
  path: "stages/:id/update",
  component: _leadstages_components_leadstage_upsert_leadstage_upsert_component__WEBPACK_IMPORTED_MODULE_9__.LeadStageUpsertComponent
}, {
  path: "leads",
  component: _leads_lead_component__WEBPACK_IMPORTED_MODULE_4__.LeadComponent
}, {
  path: "leads/create",
  component: _leads_components_lead_upsert_lead_upsert_component__WEBPACK_IMPORTED_MODULE_5__.LeadUpsertComponent
}, {
  path: "leads/:id/update",
  component: _leads_components_lead_upsert_lead_upsert_component__WEBPACK_IMPORTED_MODULE_5__.LeadUpsertComponent
}, {
  path: "lead-propagations",
  component: _leadpropagations_leadpropagation_component__WEBPACK_IMPORTED_MODULE_6__.LeadPropagationComponent
}, {
  path: "lead-propagations/create",
  component: _leadpropagations_components_leadpropagation_upsert_leadpropagation_upsert_component__WEBPACK_IMPORTED_MODULE_7__.LeadPropagationUpsertComponent
}, {
  path: "lead-propagations/:id/update",
  component: _leadpropagations_components_leadpropagation_upsert_leadpropagation_upsert_component__WEBPACK_IMPORTED_MODULE_7__.LeadPropagationUpsertComponent
}, {
  path: "acquisition-campaigns",
  component: _acquisitioncampaigns_acquisitioncampaign_component__WEBPACK_IMPORTED_MODULE_10__.AcquisitionCampaignComponent
}, {
  path: "acquisition-campaigns/create",
  component: _acquisitioncampaigns_components_acquisitioncampaign_upsert_acquisitioncampaign_upsert_component__WEBPACK_IMPORTED_MODULE_11__.AcquisitionCampaignUpsertComponent
}, {
  path: "acquisition-campaigns/:id/update",
  component: _acquisitioncampaigns_components_acquisitioncampaign_upsert_acquisitioncampaign_upsert_component__WEBPACK_IMPORTED_MODULE_11__.AcquisitionCampaignUpsertComponent
}];
class SalesRoute {
  static #_ = this.ɵfac = function SalesRoute_Factory(t) {
    return new (t || SalesRoute)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: SalesRoute
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SalesRoute, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_dash_domains_sales_sales_module_ts.js.map