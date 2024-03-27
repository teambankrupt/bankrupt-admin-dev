"use strict";
(self["webpackChunkbankrupt_frontend"] = self["webpackChunkbankrupt_frontend"] || []).push([["default-src_app_modules_dash_domains_inventory_inventory_module_ts"],{

/***/ 96386:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/attributes/attribute.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributeComponent: () => (/* binding */ AttributeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_attribute_list_attribute_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/attribute-list/attribute-list.component */ 96394);


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

/***/ 96394:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/attributes/components/attribute-list/attribute-list.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributeListComponent: () => (/* binding */ AttributeListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v2.component */ 92159);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 54102);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _attribute_upsert_attribute_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../attribute-upsert/attribute-upsert.component */ 37227);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inventory.endpoints */ 62737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_attribute_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/attribute.service */ 74179);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function AttributeListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 23);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 34)(1, "app-delete", 38);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "td")(5, "a", 33);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "td", 34)(20, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AttributeListComponent_div_9_div_1_tr_27_Template_a_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r18);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r19.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, AttributeListComponent_div_9_div_1_tr_27_td_22_Template, 2, 1, "td", 37);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Attributes that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 30)(7, "table", 31)(8, "thead")(9, "tr")(10, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](27, AttributeListComponent_div_9_div_1_tr_27_Template, 23, 12, "tr", 32);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h6", 58);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 59)(1, "b");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 59);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 55)(1, "app-delete", 60);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "div", 28)(3, "div", 42)(4, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "h5", 44)(7, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AttributeListComponent_div_9_div_2_div_1_Template_a_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r31.onUpsertClick(item_r21.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, AttributeListComponent_div_9_div_2_div_1_h6_9_Template, 2, 1, "h6", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 0)(11, "div", 47)(12, "p", 48)(13, "small")(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div", 47)(20, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, AttributeListComponent_div_9_div_2_div_1_small_21_Template, 6, 3, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, AttributeListComponent_div_9_div_2_div_1_small_22_Template, 6, 0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "div")(26, "a", 51)(27, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "div", 53)(30, "div", 54)(31, "div", 55)(32, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AttributeListComponent_div_9_div_2_div_1_Template_a_click_32_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r33.onUpsertClick(item_r21.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](34, AttributeListComponent_div_9_div_2_div_1_div_34_Template, 2, 2, "div", 57);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, AttributeListComponent_div_9_div_2_div_1_Template, 35, 11, "div", 39);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, AttributeListComponent_div_9_div_1_Template, 28, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, AttributeListComponent_div_9_div_2_Template, 2, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "app-pagination", 25);
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
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_ATTRIBUTES_COMPONENTS_ATTRIBUTE_LIST_ATTRIBUTE_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_ATTRIBUTES_COMPONENTS_ATTRIBUTE_LIST_ATTRIBUTE_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_ATTRIBUTES_COMPONENTS_ATTRIBUTE_LIST_ATTRIBUTE_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_ATTRIBUTES_COMPONENTS_ATTRIBUTE_LIST_ATTRIBUTE_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [3, "page"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], [4, "ngFor", "ngForOf"], ["href", "javascript: void(0);", 3, "click"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "bg-success", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "font-size-10", "text-info"], [1, "font-size-10"], [3, "requestUrl", "look", "deleteItemEvent"]];
    },
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 37227:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/attributes/components/attribute-upsert/attribute-upsert.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributeUpsertComponent: () => (/* binding */ AttributeUpsertComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v2.component */ 19870);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 54102);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_attribute_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/attribute.service */ 74179);
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
      link: "/dash/attributes",
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

/***/ 54102:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/attributes/models/config.model.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAttributeConfig: () => (/* binding */ defaultAttributeConfig),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/modules/generic/breadcrumb/breadcrumb.model */ 97989);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 62737);


let defaultAttributeConfig = {
  defaultLayout: _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.COLUMN,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  searchEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.ATTRIBUTES.ATTRIBUTE_ENDPOINT,
  delEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.ATTRIBUTES.ATTRIBUTE_ENDPOINT
};
let selfRoutes = {
  list: "/dash/attributes",
  create: "/dash/attributes/create",
  update(id) {
    return id == null ? this.create : "/dash/attributes/" + id + '/update';
  }
};

/***/ }),

/***/ 74179:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/attributes/services/attribute.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttributeService: () => (/* binding */ AttributeService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 62737);
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

/***/ 16764:
/*!**************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/brands/brand.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandComponent: () => (/* binding */ BrandComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/brand-list/brand-list.component */ 91042);


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

/***/ 91042:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/brands/components/brand-list/brand-list.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandListComponent: () => (/* binding */ BrandListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v2.component */ 92159);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 49835);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _brand_upsert_brand_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../brand-upsert/brand-upsert.component */ 29672);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inventory.endpoints */ 62737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/brand.service */ 12021);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);
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
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Brands$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___5 = goog.getMsg("Available Brands");
        i18n_4 = MSG_EXTERNAL_msg_Brands$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u09AC\u09CD\u09B0\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1 \u09B8\u09AE\u09C2\u09B9";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___7 = goog.getMsg("Id");
        i18n_6 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "Id";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___9 = goog.getMsg("Image");
        i18n_8 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u099B\u09AC\u09BF";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___11 = goog.getMsg("Title");
        i18n_10 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___13 = goog.getMsg("Description");
        i18n_12 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___15 = goog.getMsg("Created At");
        i18n_14 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___17 = goog.getMsg("Last Updated");
        i18n_16 = MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u09B8\u09B0\u09CD\u09AC\u09B6\u09C7\u09B7 \u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___19 = goog.getMsg("Update");
        i18n_18 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS____21 = goog.getMsg("Created By");
        i18n_20 = MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS____21;
      } else {
        i18n_20 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS____23 = goog.getMsg("Delete");
        i18n_22 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS____23;
      } else {
        i18n_22 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS____25 = goog.getMsg("Created At");
        i18n_24 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS____25;
      } else {
        i18n_24 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_updatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS_____27 = goog.getMsg("Updated");
        i18n_26 = MSG_EXTERNAL_label_updatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_BRANDS_COMPONENTS_BRAND_LIST_BRAND_LIST_COMPONENT_TS_____27;
      } else {
        i18n_26 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], i18n_4, [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, [4, "ngFor", "ngForOf"], i18n_20, i18n_22, [1, "avatar-sm", "mx-auto"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], i18n_24, [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [1, "font-size-10"], i18n_26, [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], [3, "requestUrl", "look", "deleteItemEvent"]];
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7554:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/categories/category.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryComponent: () => (/* binding */ CategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/category-list/category-list.component */ 70136);


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

/***/ 70136:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/categories/components/category-list/category-list.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryListComponent: () => (/* binding */ CategoryListComponent)
/* harmony export */ });
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 63521);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category-upsert/category-upsert.component */ 19149);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../inventory.endpoints */ 62737);
/* harmony import */ var _base_components_base_list_v4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v4.component */ 45095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/category.service */ 82726);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);
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
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_MyCategories$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___5 = goog.getMsg("Categories that I've created");
        i18n_4 = MSG_EXTERNAL_msg_MyCategories$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u0986\u09AE\u09BE\u09B0 \u09A4\u09C8\u09B0\u09BF\u0995\u09C3\u09A4 \u0995\u09CD\u09AF\u09BE\u099F\u09C7\u0997\u09B0\u09BF\u0997\u09C1\u09B2\u09CB";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___7 = goog.getMsg("Id");
        i18n_6 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "Id";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___9 = goog.getMsg("Image");
        i18n_8 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u099B\u09AC\u09BF";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___11 = goog.getMsg("Name");
        i18n_10 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u09A8\u09BE\u09AE";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___13 = goog.getMsg("Description");
        i18n_12 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Parent$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___15 = goog.getMsg("Parent");
        i18n_14 = MSG_EXTERNAL_label_Parent$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09AA\u09CD\u09AF\u09BE\u09B0\u09C7\u09A8\u09CD\u099F";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___17 = goog.getMsg("Created At");
        i18n_16 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___19 = goog.getMsg("Last Updated");
        i18n_18 = MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u09B8\u09B0\u09CD\u09AC\u09B6\u09C7\u09B7 \u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____21 = goog.getMsg("Created By");
        i18n_20 = MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____21;
      } else {
        i18n_20 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____23 = goog.getMsg("Update");
        i18n_22 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____23;
      } else {
        i18n_22 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____25 = goog.getMsg("Delete");
        i18n_24 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____25;
      } else {
        i18n_24 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____27 = goog.getMsg("Created At");
        i18n_26 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS____27;
      } else {
        i18n_26 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS_____29 = goog.getMsg("Updated");
        i18n_28 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS_____29;
      } else {
        i18n_28 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS_____31 = goog.getMsg("Updated");
        i18n_30 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_CATEGORIES_COMPONENTS_CATEGORY_LIST_CATEGORY_LIST_COMPONENT_TS_____31;
      } else {
        i18n_30 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], i18n_4, [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, [4, "ngFor", "ngForOf"], i18n_20, i18n_22, i18n_24, ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], ["href", "javascript: void(0);", 3, "click"], ["style", "width: 100px", 4, "ngIf"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center", 3, "click"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], ["class", "font-size-10 text-primary", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], i18n_26, [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "font-size-10", "text-info"], [1, "font-size-10", "text-primary"], [1, "font-size-10"], i18n_28, i18n_30, [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], [3, "requestUrl", "look", "deleteItemEvent"]];
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 10781:
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/filterableattributes/components/filterableattribute-list/filterableattribute-list.component.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterableAttributeListComponent: () => (/* binding */ FilterableAttributeListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v2.component */ 92159);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 59770);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _filterableattribute_upsert_filterableattribute_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filterableattribute-upsert/filterableattribute-upsert.component */ 47218);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inventory.endpoints */ 62737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_filterableattribute_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/filterableattribute.service */ 55285);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);
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
    consts: [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], [1, "text-uppercase"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], [4, "ngFor", "ngForOf"], ["href", "javascript: void(0);", 3, "click"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "bg-success", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "font-size-10", "text-info"], [1, "font-size-10"], [3, "requestUrl", "look", "deleteItemEvent"]],
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 57953:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/filterableattributes/filterableattribute.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterableAttributeComponent: () => (/* binding */ FilterableAttributeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_filterableattribute_list_filterableattribute_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/filterableattribute-list/filterableattribute-list.component */ 10781);


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

/***/ 45475:
/*!********************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/inventory.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryModule: () => (/* binding */ InventoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _inventory_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory.route */ 97755);
/* harmony import */ var _categories_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories/category.component */ 7554);
/* harmony import */ var _categories_components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories/components/category-list/category-list.component */ 70136);
/* harmony import */ var _categories_components_category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/components/category-upsert/category-upsert.component */ 19149);
/* harmony import */ var _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/modules/utility/utility.module */ 7151);
/* harmony import */ var _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/modules/cms/cms.module */ 68709);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _categories_components_category_select_category_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories/components/category-select/category-select.component */ 58717);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);
/* harmony import */ var _attributes_components_attribute_list_attribute_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./attributes/components/attribute-list/attribute-list.component */ 96394);
/* harmony import */ var _attributes_components_attribute_upsert_attribute_upsert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attributes/components/attribute-upsert/attribute-upsert.component */ 37227);
/* harmony import */ var _attributes_attribute_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attributes/attribute.component */ 96386);
/* harmony import */ var _filterableattributes_components_filterableattribute_list_filterableattribute_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filterableattributes/components/filterableattribute-list/filterableattribute-list.component */ 10781);
/* harmony import */ var _filterableattributes_components_filterableattribute_upsert_filterableattribute_upsert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filterableattributes/components/filterableattribute-upsert/filterableattribute-upsert.component */ 47218);
/* harmony import */ var _filterableattributes_filterableattribute_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filterableattributes/filterableattribute.component */ 57953);
/* harmony import */ var _brands_brand_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./brands/brand.component */ 16764);
/* harmony import */ var _brands_components_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./brands/components/brand-list/brand-list.component */ 91042);
/* harmony import */ var _brands_components_brand_upsert_brand_upsert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./brands/components/brand-upsert/brand-upsert.component */ 29672);
/* harmony import */ var _variations_variation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./variations/variation.component */ 56172);
/* harmony import */ var _variations_components_variation_list_variation_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./variations/components/variation-list/variation-list.component */ 5196);
/* harmony import */ var _variations_components_variation_upsert_variation_upsert_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./variations/components/variation-upsert/variation-upsert.component */ 4664);
/* harmony import */ var _products_product_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./products/product.component */ 11605);
/* harmony import */ var _products_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./products/components/product-list/product-list.component */ 16608);
/* harmony import */ var _products_components_product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./products/components/product-upsert/product-upsert.component */ 93199);
/* harmony import */ var _brands_components_brand_select_brand_select_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./brands/components/brand-select/brand-select.component */ 88265);
/* harmony import */ var _variations_components_variation_select_variation_select_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./variations/components/variation-select/variation-select.component */ 45249);
/* harmony import */ var _filterableattributes_components_filterableattribute_select_f_attribute_select_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./filterableattributes/components/filterableattribute-select/f-attribute-select.component */ 8750);
/* harmony import */ var _productspecifications_productspecification_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./productspecifications/productspecification.component */ 30051);
/* harmony import */ var _productspecifications_components_productspecification_list_productspecification_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./productspecifications/components/productspecification-list/productspecification-list.component */ 53342);
/* harmony import */ var _productspecifications_components_productspecification_upsert_productspecification_upsert_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./productspecifications/components/productspecification-upsert/productspecification-upsert.component */ 28541);
/* harmony import */ var _products_components_product_filter_item_product_select_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./products/components/product-filter-item/product-select.component */ 34819);
/* harmony import */ var _stocks_stock_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./stocks/stock.component */ 3411);
/* harmony import */ var _stocks_components_stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./stocks/components/stock-list/stock-list.component */ 99013);
/* harmony import */ var _stocks_components_stock_upsert_stock_upsert_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./stocks/components/stock-upsert/stock-upsert.component */ 40581);
/* harmony import */ var _stocks_components_stock_select_stock_select_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./stocks/components/stock-select/stock-select.component */ 2773);
/* harmony import */ var _vendors_vendor_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./vendors/vendor.component */ 50798);
/* harmony import */ var _vendors_components_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./vendors/components/vendor-list/vendor-list.component */ 95940);
/* harmony import */ var _vendors_components_vendor_upsert_vendor_upsert_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./vendors/components/vendor-upsert/vendor-upsert.component */ 58117);
/* harmony import */ var _vendors_components_vendor_select_vendor_select_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./vendors/components/vendor-select/vendor-select.component */ 14096);
/* harmony import */ var _dash_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../dash.module */ 42298);
/* harmony import */ var _users_user_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../users/user.module */ 27459);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 11633);
/* harmony import */ var _stocks_components_stock_select_stock_label_pipe__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./stocks/components/stock-select/stock-label.pipe */ 57682);
/* harmony import */ var _stocks_components_print_barcode_print_barcode_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./stocks/components/print-barcode/print-barcode.component */ 18294);
/* harmony import */ var _stockhistories_components_stockhistory_list_stockhistory_list_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./stockhistories/components/stockhistory-list/stockhistory-list.component */ 17480);
/* harmony import */ var _stockhistories_stockhistory_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./stockhistories/stockhistory.component */ 74913);
/* harmony import */ var _units_unit_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./units/unit.component */ 94269);
/* harmony import */ var _units_components_unit_list_unit_list_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./units/components/unit-list/unit-list.component */ 52898);
/* harmony import */ var _units_components_unit_upsert_unit_upsert_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./units/components/unit-upsert/unit-upsert.component */ 22100);
/* harmony import */ var _units_components_unit_select_unit_select_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./units/components/unit-select/unit-select.component */ 28260);
/* harmony import */ var _common_modules_generic_generic_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../common/modules/generic/generic.module */ 44044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../common/modules/cms/files/components/filepicker/filepicker.component */ 7247);

























































class InventoryModule {
  static #_ = this.ɵfac = function InventoryModule_Factory(t) {
    return new (t || InventoryModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵdefineNgModule"]({
    type: InventoryModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_51__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.ReactiveFormsModule, _inventory_route__WEBPACK_IMPORTED_MODULE_0__.InventoryRoute, _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_4__.UtilityModule, _dash_module__WEBPACK_IMPORTED_MODULE_37__.DashModule, _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_5__.CmsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_53__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.FormsModule, _users_user_module__WEBPACK_IMPORTED_MODULE_38__.UserModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_54__.BsDatepickerModule, _common_modules_generic_generic_module__WEBPACK_IMPORTED_MODULE_47__.GenericModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵsetNgModuleScope"](InventoryModule, {
    declarations: [_categories_category_component__WEBPACK_IMPORTED_MODULE_1__.CategoryComponent, _categories_components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_2__.CategoryListComponent, _categories_components_category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_3__.CategoryUpsertComponent, _categories_components_category_select_category_select_component__WEBPACK_IMPORTED_MODULE_6__.CategorySelectComponent, _attributes_components_attribute_list_attribute_list_component__WEBPACK_IMPORTED_MODULE_7__.AttributeListComponent, _attributes_components_attribute_upsert_attribute_upsert_component__WEBPACK_IMPORTED_MODULE_8__.AttributeUpsertComponent, _attributes_attribute_component__WEBPACK_IMPORTED_MODULE_9__.AttributeComponent, _filterableattributes_components_filterableattribute_list_filterableattribute_list_component__WEBPACK_IMPORTED_MODULE_10__.FilterableAttributeListComponent, _filterableattributes_components_filterableattribute_upsert_filterableattribute_upsert_component__WEBPACK_IMPORTED_MODULE_11__.FilterableAttributeUpsertComponent, _filterableattributes_filterableattribute_component__WEBPACK_IMPORTED_MODULE_12__.FilterableAttributeComponent, _brands_brand_component__WEBPACK_IMPORTED_MODULE_13__.BrandComponent, _brands_components_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_14__.BrandListComponent, _brands_components_brand_upsert_brand_upsert_component__WEBPACK_IMPORTED_MODULE_15__.BrandUpsertComponent, _variations_variation_component__WEBPACK_IMPORTED_MODULE_16__.VariationComponent, _variations_components_variation_list_variation_list_component__WEBPACK_IMPORTED_MODULE_17__.VariationListComponent, _variations_components_variation_upsert_variation_upsert_component__WEBPACK_IMPORTED_MODULE_18__.VariationUpsertComponent, _products_product_component__WEBPACK_IMPORTED_MODULE_19__.ProductComponent, _products_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_20__.ProductListComponent, _products_components_product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_21__.ProductUpsertComponent, _products_components_product_filter_item_product_select_component__WEBPACK_IMPORTED_MODULE_28__.ProductSelectComponent, _brands_components_brand_select_brand_select_component__WEBPACK_IMPORTED_MODULE_22__.BrandSelectComponent, _variations_components_variation_select_variation_select_component__WEBPACK_IMPORTED_MODULE_23__.VariationSelectComponent, _filterableattributes_components_filterableattribute_select_f_attribute_select_component__WEBPACK_IMPORTED_MODULE_24__.FAttributeSelectComponent, _productspecifications_productspecification_component__WEBPACK_IMPORTED_MODULE_25__.ProductSpecificationComponent, _productspecifications_components_productspecification_list_productspecification_list_component__WEBPACK_IMPORTED_MODULE_26__.ProductSpecificationListComponent, _productspecifications_components_productspecification_upsert_productspecification_upsert_component__WEBPACK_IMPORTED_MODULE_27__.ProductSpecificationUpsertComponent, _stocks_stock_component__WEBPACK_IMPORTED_MODULE_29__.StockComponent, _stocks_components_stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_30__.StockListComponent, _stocks_components_stock_upsert_stock_upsert_component__WEBPACK_IMPORTED_MODULE_31__.StockUpsertComponent, _stocks_components_stock_select_stock_select_component__WEBPACK_IMPORTED_MODULE_32__.StockSelectComponent, _vendors_vendor_component__WEBPACK_IMPORTED_MODULE_33__.VendorComponent, _vendors_components_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_34__.VendorListComponent, _vendors_components_vendor_upsert_vendor_upsert_component__WEBPACK_IMPORTED_MODULE_35__.VendorUpsertComponent, _vendors_components_vendor_select_vendor_select_component__WEBPACK_IMPORTED_MODULE_36__.VendorSelectComponent, _stocks_components_stock_select_stock_label_pipe__WEBPACK_IMPORTED_MODULE_39__.StockLabelPipe, _stocks_components_print_barcode_print_barcode_component__WEBPACK_IMPORTED_MODULE_40__.PrintBarcodeComponent, _stockhistories_stockhistory_component__WEBPACK_IMPORTED_MODULE_42__.StockHistoryComponent, _stockhistories_components_stockhistory_list_stockhistory_list_component__WEBPACK_IMPORTED_MODULE_41__.StockHistoryListComponent, _units_unit_component__WEBPACK_IMPORTED_MODULE_43__.UnitComponent, _units_components_unit_list_unit_list_component__WEBPACK_IMPORTED_MODULE_44__.UnitListComponent, _units_components_unit_upsert_unit_upsert_component__WEBPACK_IMPORTED_MODULE_45__.UnitUpsertComponent, _units_components_unit_select_unit_select_component__WEBPACK_IMPORTED_MODULE_46__.UnitSelectComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_51__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.ReactiveFormsModule, _inventory_route__WEBPACK_IMPORTED_MODULE_0__.InventoryRoute, _common_modules_utility_utility_module__WEBPACK_IMPORTED_MODULE_4__.UtilityModule, _dash_module__WEBPACK_IMPORTED_MODULE_37__.DashModule, _common_modules_cms_cms_module__WEBPACK_IMPORTED_MODULE_5__.CmsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_53__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.FormsModule, _users_user_module__WEBPACK_IMPORTED_MODULE_38__.UserModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_54__.BsDatepickerModule, _common_modules_generic_generic_module__WEBPACK_IMPORTED_MODULE_47__.GenericModule],
    exports: [_stocks_components_stock_select_stock_select_component__WEBPACK_IMPORTED_MODULE_32__.StockSelectComponent, _vendors_components_vendor_select_vendor_select_component__WEBPACK_IMPORTED_MODULE_36__.VendorSelectComponent]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵsetComponentScope"](_categories_components_category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_3__.CategoryUpsertComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_51__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_51__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_52__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_52__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_52__.FormControlName, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_48__.ProgressComponent, _common_modules_cms_files_components_filepicker_filepicker_component__WEBPACK_IMPORTED_MODULE_49__.FilePickerComponent, _categories_components_category_select_category_select_component__WEBPACK_IMPORTED_MODULE_6__.CategorySelectComponent], []);

/***/ }),

/***/ 97755:
/*!*******************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/inventory.route.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryRoute: () => (/* binding */ InventoryRoute)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _categories_components_category_upsert_category_upsert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories/components/category-upsert/category-upsert.component */ 19149);
/* harmony import */ var _categories_components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories/components/category-list/category-list.component */ 70136);
/* harmony import */ var _common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/modules/auth/services/auth-guard.service */ 99538);
/* harmony import */ var _attributes_attribute_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes/attribute.component */ 96386);
/* harmony import */ var _attributes_components_attribute_upsert_attribute_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes/components/attribute-upsert/attribute-upsert.component */ 37227);
/* harmony import */ var _filterableattributes_filterableattribute_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filterableattributes/filterableattribute.component */ 57953);
/* harmony import */ var _filterableattributes_components_filterableattribute_upsert_filterableattribute_upsert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filterableattributes/components/filterableattribute-upsert/filterableattribute-upsert.component */ 47218);
/* harmony import */ var _brands_brand_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./brands/brand.component */ 16764);
/* harmony import */ var _brands_components_brand_upsert_brand_upsert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./brands/components/brand-upsert/brand-upsert.component */ 29672);
/* harmony import */ var _variations_variation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./variations/variation.component */ 56172);
/* harmony import */ var _variations_components_variation_upsert_variation_upsert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./variations/components/variation-upsert/variation-upsert.component */ 4664);
/* harmony import */ var _products_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/product.component */ 11605);
/* harmony import */ var _products_components_product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products/components/product-upsert/product-upsert.component */ 93199);
/* harmony import */ var _productspecifications_productspecification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./productspecifications/productspecification.component */ 30051);
/* harmony import */ var _productspecifications_components_productspecification_list_productspecification_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./productspecifications/components/productspecification-list/productspecification-list.component */ 53342);
/* harmony import */ var _productspecifications_components_productspecification_upsert_productspecification_upsert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./productspecifications/components/productspecification-upsert/productspecification-upsert.component */ 28541);
/* harmony import */ var _stocks_stock_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./stocks/stock.component */ 3411);
/* harmony import */ var _stocks_components_stock_upsert_stock_upsert_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stocks/components/stock-upsert/stock-upsert.component */ 40581);
/* harmony import */ var _vendors_vendor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vendors/vendor.component */ 50798);
/* harmony import */ var _vendors_components_vendor_upsert_vendor_upsert_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vendors/components/vendor-upsert/vendor-upsert.component */ 58117);
/* harmony import */ var _stocks_components_print_barcode_print_barcode_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./stocks/components/print-barcode/print-barcode.component */ 18294);
/* harmony import */ var _stockhistories_stockhistory_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./stockhistories/stockhistory.component */ 74913);
/* harmony import */ var _units_unit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./units/unit.component */ 94269);
/* harmony import */ var _units_components_unit_upsert_unit_upsert_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./units/components/unit-upsert/unit-upsert.component */ 22100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 61699);



























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
  path: 'barcodes/print-barcode',
  component: _stocks_components_print_barcode_print_barcode_component__WEBPACK_IMPORTED_MODULE_20__.PrintBarcodeComponent,
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
}, {
  path: 'stock-histories',
  component: _stockhistories_stockhistory_component__WEBPACK_IMPORTED_MODULE_21__.StockHistoryComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'units',
  component: _units_unit_component__WEBPACK_IMPORTED_MODULE_22__.UnitComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'units/create',
  component: _units_components_unit_upsert_unit_upsert_component__WEBPACK_IMPORTED_MODULE_23__.UnitUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}, {
  path: 'units/:id/update',
  component: _units_components_unit_upsert_unit_upsert_component__WEBPACK_IMPORTED_MODULE_23__.UnitUpsertComponent,
  canActivate: [_common_modules_auth_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuardService]
}];
class InventoryRoute {
  static #_ = this.ɵfac = function InventoryRoute_Factory(t) {
    return new (t || InventoryRoute)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
    type: InventoryRoute
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](InventoryRoute, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule]
  });
})();

/***/ }),

/***/ 16608:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/products/components/product-list/product-list.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListComponent: () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v2.component */ 92159);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 97336);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _product_upsert_product_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-upsert/product-upsert.component */ 93199);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inventory.endpoints */ 62737);
/* harmony import */ var _models_product_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/product.model */ 41207);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/product.service */ 54940);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);
























function ProductListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("bar", true);
  }
}
function ProductListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, ProductListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, ProductListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
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
function ProductListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](1, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_9_div_1_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](1, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_9_div_1_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](1, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_9_div_1_tr_34_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r11.created_by, " ");
  }
}
function ProductListComponent_div_9_div_1_tr_34_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "img", 57);
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate"]("src", item_r11.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
  }
}
function ProductListComponent_div_9_div_1_tr_34_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r11.name.substring(0, 1).toUpperCase(), " ");
  }
}
function ProductListComponent_div_9_div_1_tr_34_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "i", 59);
  }
}
function ProductListComponent_div_9_div_1_tr_34_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"]("", item_r11.unit.title, "(", item_r11.unit.short_code, ")");
  }
}
function ProductListComponent_div_9_div_1_tr_34_td_28_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProductListComponent_div_9_div_1_tr_34_td_28_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r27);
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r25.onApproveClick(item_r11.id, !item_r11.approved));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_9_div_1_tr_34_td_28_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProductListComponent_div_9_div_1_tr_34_td_28_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r30);
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2).$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r28.onApproveClick(item_r11.id, !item_r11.approved));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_9_div_1_tr_34_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, ProductListComponent_div_9_div_1_tr_34_td_28_a_1_Template, 2, 0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, ProductListComponent_div_9_div_1_tr_34_td_28_a_2_Template, 2, 0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r11.approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !item_r11.approved);
  }
}
function ProductListComponent_div_9_div_1_tr_34_td_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "td", 54)(1, "app-delete", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("deleteItemEvent", function ProductListComponent_div_9_div_1_tr_34_td_32_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r32.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("requestUrl", ctx_r18.config.delEndpoint + "/" + item_r11.id);
  }
}
function ProductListComponent_div_9_div_1_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, ProductListComponent_div_9_div_1_tr_34_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "td")(5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](6, ProductListComponent_div_9_div_1_tr_34_img_6_Template, 1, 1, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, ProductListComponent_div_9_div_1_tr_34_span_7_Template, 2, 1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](8, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](11, ProductListComponent_div_9_div_1_tr_34_i_11_Template, 1, 0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](12, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProductListComponent_div_9_div_1_tr_34_Template_a_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r36);
      const item_r11 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r35.onUpsertClick(item_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](17, ProductListComponent_div_9_div_1_tr_34_span_17_Template, 2, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](20, "td")(21, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](23, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](24, "td")(25, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](27, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](28, ProductListComponent_div_9_div_1_tr_34_td_28_Template, 3, 2, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](29, "td", 54)(30, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProductListComponent_div_9_div_1_tr_34_Template_a_click_30_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r36);
      const item_r11 = restoredCtx.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r37.onUpsertClick(item_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](31, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](32, ProductListComponent_div_9_div_1_tr_34_td_32_Template, 2, 1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r10.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r11.images.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r11.images.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](ctx_r10.getCategoryNames(item_r11.categories));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r11.approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx_r10.resolveProductName(item_r11, ctx_r10.locale), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r11.brand.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r11.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r11.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](23, 15, item_r11.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](27, 17, item_r11.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r10.config.showApproveButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngClass", item_r11.approved ? "btn-outline-warning disabled" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r10.config.showDeleteButton && !item_r11.approved);
  }
}
function ProductListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](5, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 31)(7, "table", 32)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](11, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](12, ProductListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](14, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](16, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](18, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](20, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](22, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](24, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](26, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](28, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](29, ProductListComponent_div_9_div_1_th_29_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](31, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](32, ProductListComponent_div_9_div_1_th_32_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](33, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](34, ProductListComponent_div_9_div_1_tr_34_Template, 33, 19, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r5.config.showApproveButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r5.products.content);
  }
}
function ProductListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpropertyInterpolate"]("src", item_r39.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsanitizeUrl"]);
  }
}
function ProductListComponent_div_9_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 88)(1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", item_r39.name.substring(0, 1).toUpperCase(), " ");
  }
}
function ProductListComponent_div_9_div_2_div_1_h6_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "h6", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" By ", item_r39.created_by, "");
  }
}
function ProductListComponent_div_9_div_2_div_1_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "small", 90)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](2, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](5, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](5, 1, item_r39.updated_at), " ");
  }
}
function ProductListComponent_div_9_div_2_div_1_small_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "small", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](3, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
}
function ProductListComponent_div_9_div_2_div_1_label_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", c_r51.name, " ");
  }
}
function ProductListComponent_div_9_div_2_div_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 84)(1, "app-delete", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("deleteItemEvent", function ProductListComponent_div_9_div_2_div_1_div_32_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r52.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]().$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("requestUrl", ctx_r46.config.delEndpoint + "/" + item_r39.id)("look", "bx");
  }
}
function ProductListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 67)(1, "div", 68)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](3, ProductListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](4, ProductListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](5, "h5", 71)(6, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProductListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r56);
      const item_r39 = restoredCtx.$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r55.onUpsertClick(item_r39.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, ProductListComponent_div_9_div_2_div_1_h6_8_Template, 2, 1, "h6", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](9, "h6", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](11, "div", 0)(12, "div", 75)(13, "p", 76)(14, "small")(15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵi18n"](16, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](19, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](20, "div", 75)(21, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](22, ProductListComponent_div_9_div_2_div_1_small_22_Template, 6, 3, "small", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](23, ProductListComponent_div_9_div_2_div_1_small_23_Template, 6, 0, "small", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](24, "div")(25, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](26, ProductListComponent_div_9_div_2_div_1_label_26_Template, 2, 1, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](27, "div", 82)(28, "div", 83)(29, "div", 84)(30, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function ProductListComponent_div_9_div_2_div_1_Template_a_click_30_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r56);
      const item_r39 = restoredCtx.$implicit;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵresetView"](ctx_r57.onUpsertClick(item_r39.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](31, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](32, ProductListComponent_div_9_div_2_div_1_div_32_Template, 2, 2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r39 = ctx.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r39.images.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r39.images.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", ctx_r38.resolveProductName(item_r39, ctx_r38.locale), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r38.config.showUserFilter && item_r39.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](item_r39.brand.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](19, 10, item_r39.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", item_r39.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !item_r39.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", item_r39.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx_r38.config.showDeleteButton);
  }
}
function ProductListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, ProductListComponent_div_9_div_2_div_1_Template, 33, 12, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngForOf", ctx_r6.products.content);
  }
}
function ProductListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, ProductListComponent_div_9_div_1_Template, 35, 6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, ProductListComponent_div_9_div_2_Template, 2, 3, "div", 25);
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
class ProductListComponent extends _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV2 {
  componentName() {
    return "ProductListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, productService, notifier, locale) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.productService = productService;
    this.notifier = notifier;
    this.locale = locale;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultProductConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__.defaultFilterData;
    this.products = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    this.resolveProductName = _models_product_model__WEBPACK_IMPORTED_MODULE_7__.resolveProductName;
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
    return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_8__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_9__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_11__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_12__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_13__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.LOCALE_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({
    type: ProductListComponent,
    selectors: [["app-product-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_MyProducts$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___5 = goog.getMsg("Products that I've created");
        i18n_4 = MSG_EXTERNAL_msg_MyProducts$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u0986\u09AE\u09BE\u09B0 \u09A4\u09C8\u09B0\u09BF\u0995\u09C3\u09A4 \u09AA\u09A3\u09CD\u09AF\u0997\u09C1\u09B2\u09CB";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___7 = goog.getMsg("Id");
        i18n_6 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "Id";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___9 = goog.getMsg("Image");
        i18n_8 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u099B\u09AC\u09BF";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Category$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___11 = goog.getMsg("Category");
        i18n_10 = MSG_EXTERNAL_label_Category$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u0995\u09CD\u09AF\u09BE\u099F\u09BE\u0997\u09B0\u09BF";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___13 = goog.getMsg("Title");
        i18n_12 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Brand$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___15 = goog.getMsg("Brand");
        i18n_14 = MSG_EXTERNAL_label_Brand$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09AC\u09CD\u09B0\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Unit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___17 = goog.getMsg("Unit");
        i18n_16 = MSG_EXTERNAL_label_Unit$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u098F\u0995\u0995";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Weight$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___19 = goog.getMsg("Weight");
        i18n_18 = MSG_EXTERNAL_label_Weight$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u0993\u099C\u09A8";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___21 = goog.getMsg("Created At");
        i18n_20 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___21;
      } else {
        i18n_20 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___23 = goog.getMsg("Last Updated");
        i18n_22 = MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___23;
      } else {
        i18n_22 = "\u09B8\u09B0\u09CD\u09AC\u09B6\u09C7\u09B7 \u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___25 = goog.getMsg("Update");
        i18n_24 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS___25;
      } else {
        i18n_24 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____27 = goog.getMsg("Created By");
        i18n_26 = MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____27;
      } else {
        i18n_26 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Approve$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____29 = goog.getMsg("Approve");
        i18n_28 = MSG_EXTERNAL_label_Approve$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____29;
      } else {
        i18n_28 = "\u0985\u09A8\u09C1\u09AE\u09CB\u09A6\u09A8";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____31 = goog.getMsg("Delete");
        i18n_30 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____31;
      } else {
        i18n_30 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_createdAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____33 = goog.getMsg("Created At");
        i18n_32 = MSG_EXTERNAL_label_createdAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS____33;
      } else {
        i18n_32 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_updatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS_____35 = goog.getMsg("Updated");
        i18n_34 = MSG_EXTERNAL_label_updatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS_____35;
      } else {
        i18n_34 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_36;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS_____37 = goog.getMsg("Updated");
        i18n_36 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTS_COMPONENTS_PRODUCT_LIST_PRODUCT_LIST_COMPONENT_TS_____37;
      } else {
        i18n_36 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], i18n_4, [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, [4, "ngFor", "ngForOf"], i18n_26, i18n_28, i18n_30, [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], [1, "text-wrap"], ["class", "bx bx-check-circle text-success", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], ["style", "width: 100px", 4, "ngIf"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-warning", "btn-sm", "edit", 3, "ngClass", "click"], [1, "fas", "fa-pencil-alt"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "bx", "bx-check-circle", "text-success"], ["class", "btn btn-outline-warning btn-sm edit", "title", "Edit", 3, "click", 4, "ngIf"], ["class", "btn btn-outline-success btn-sm edit", "title", "Edit", 3, "click", 4, "ngIf"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-check-circle"], ["title", "Edit", 1, "btn", "btn-outline-success", "btn-sm", "edit", 3, "click"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "font-size-10", "text-primary"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], i18n_32, [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], ["class", "badge bg-primary font-size-11 m-1", 4, "ngFor", "ngForOf"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [1, "font-size-10"], i18n_34, i18n_36, [1, "badge", "bg-primary", "font-size-11", "m-1"], [3, "requestUrl", "look", "deleteItemEvent"]];
    },
    template: function ProductListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("layoutSelected", function ProductListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("addButtonClick", function ProductListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](7, ProductListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](8, ProductListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](9, ProductListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("title", ctx.translations["All Products"])("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", ctx.products.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", !ctx.products.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("page", ctx.products);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_14__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_15__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_16__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_17__.DeleteComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_19__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 11605:
/*!******************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/products/product.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductComponent: () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/product-list/product-list.component */ 16608);


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

/***/ 53342:
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/productspecifications/components/productspecification-list/productspecification-list.component.ts ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSpecificationListComponent: () => (/* binding */ ProductSpecificationListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v2.component */ 92159);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 19873);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _productspecification_upsert_productspecification_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../productspecification-upsert/productspecification-upsert.component */ 28541);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inventory.endpoints */ 62737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_productspecification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/productspecification.service */ 86830);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function ProductSpecificationListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 24);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 36)(1, "app-delete", 40);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "td")(5, "div", 33)(6, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "td")(9, "a", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "td", 36)(28, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ProductSpecificationListComponent_div_9_div_1_tr_33_Template_a_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r18);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r19.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](30, ProductSpecificationListComponent_div_9_div_1_tr_33_td_30_Template, 2, 1, "td", 39);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "ProductSpecifications that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 30)(7, "table", 31)(8, "thead")(9, "tr")(10, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](33, ProductSpecificationListComponent_div_9_div_1_tr_33_Template, 31, 15, "tr", 32);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h6", 61);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 62)(1, "b");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 62);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 56)(1, "app-delete", 63);
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
const _c4 = function (a1) {
  return ["/dash/inventory/products", a1, "update"];
};
function ProductSpecificationListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "div", 28)(3, "div", 44)(4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "h5", 45)(7, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ProductSpecificationListComponent_div_9_div_2_div_1_Template_a_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r31.onUpsertClick(item_r21.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, ProductSpecificationListComponent_div_9_div_2_div_1_h6_9_Template, 2, 1, "h6", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 0)(11, "div", 48)(12, "p", 49)(13, "small")(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div", 48)(20, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, ProductSpecificationListComponent_div_9_div_2_div_1_small_21_Template, 6, 3, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, ProductSpecificationListComponent_div_9_div_2_div_1_small_22_Template, 6, 0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "div")(26, "a", 52)(27, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](29, "div", 54)(30, "div", 55)(31, "div", 56)(32, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](34, "div", 56)(35, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ProductSpecificationListComponent_div_9_div_2_div_1_Template_a_click_35_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r32);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r33.onUpsertClick(item_r21.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](36, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](37, ProductSpecificationListComponent_div_9_div_2_div_1_div_37_Template, 2, 2, "div", 60);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](12, _c4, item_r21.product_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r20.config.showDeleteButton);
  }
}
function ProductSpecificationListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ProductSpecificationListComponent_div_9_div_2_div_1_Template, 38, 14, "div", 41);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ProductSpecificationListComponent_div_9_div_1_Template, 34, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, ProductSpecificationListComponent_div_9_div_2_Template, 2, 3, "div", 25);
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
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTSPECIFICATIONS_COMPONENTS_PRODUCTSPECIFICATION_LIST_PRODUCTSPECIFICATION_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTSPECIFICATIONS_COMPONENTS_PRODUCTSPECIFICATION_LIST_PRODUCTSPECIFICATION_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTSPECIFICATIONS_COMPONENTS_PRODUCTSPECIFICATION_LIST_PRODUCTSPECIFICATION_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_PRODUCTSPECIFICATIONS_COMPONENTS_PRODUCTSPECIFICATION_LIST_PRODUCTSPECIFICATION_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "avatar-sm", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], ["href", "javascript: void(0);", 3, "click"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "bg-primary", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], ["href", "javascript: void(0);", 3, "routerLink"], [1, "bx", "bxl-product-hunt", "text-primary"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "font-size-10", "text-info"], [1, "font-size-10"], [3, "requestUrl", "look", "deleteItemEvent"]];
    },
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterLink, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 28541:
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/productspecifications/components/productspecification-upsert/productspecification-upsert.component.ts ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSpecificationUpsertComponent: () => (/* binding */ ProductSpecificationUpsertComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_upsert_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-upsert-v2.component */ 19870);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 19873);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _services_productspecification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/productspecification.service */ 86830);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _products_components_product_filter_item_product_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../products/components/product-filter-item/product-select.component */ 34819);
/* harmony import */ var _filterableattributes_components_filterableattribute_select_f_attribute_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../filterableattributes/components/filterableattribute-select/f-attribute-select.component */ 8750);
















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
      link: "/dash/productspecifications",
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

/***/ 19873:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/productspecifications/models/config.model.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultProductSpecificationConfig: () => (/* binding */ defaultProductSpecificationConfig),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/modules/generic/breadcrumb/breadcrumb.model */ 97989);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 62737);


let defaultProductSpecificationConfig = {
  defaultLayout: _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.GRID,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  searchEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTSPECIFICATIONS.PRODUCTSPECIFICATION_ENDPOINT,
  delEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.PRODUCTSPECIFICATIONS.PRODUCTSPECIFICATION_ENDPOINT
};
let selfRoutes = {
  list: "/dash/product-specifications",
  create: "/dash/product-specifications/create",
  update(id) {
    return id == null ? this.create : "/dash/product-specifications/" + id + '/update';
  }
};

/***/ }),

/***/ 30051:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/productspecifications/productspecification.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSpecificationComponent: () => (/* binding */ ProductSpecificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_productspecification_list_productspecification_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/productspecification-list/productspecification-list.component */ 53342);


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

/***/ 86830:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/productspecifications/services/productspecification.service.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSpecificationService: () => (/* binding */ ProductSpecificationService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 62737);
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

/***/ 17480:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/stockhistories/components/stockhistory-list/stockhistory-list.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockHistoryListComponent: () => (/* binding */ StockHistoryListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _models_stockhistory_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/stockhistory.model */ 95709);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 44227);
/* harmony import */ var _base_components_base_list_v3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v3.component */ 96562);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_stockhistory_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/stockhistory.service */ 89371);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);





















function StockHistoryListComponent_util_progress_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "util-progress", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("bar", true);
  }
}
function StockHistoryListComponent_div_7_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18n"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function StockHistoryListComponent_div_7_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18n"](1, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function StockHistoryListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "div", 16)(5, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, StockHistoryListComponent_div_7_h4_7_Template, 2, 0, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, StockHistoryListComponent_div_7_h4_8_Template, 2, 0, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 21)(10, "div", 22)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](12, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function StockHistoryListComponent_div_8_div_1_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function StockHistoryListComponent_div_8_div_1_tr_26_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r11.created_by);
  }
}
function StockHistoryListComponent_div_8_div_1_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, StockHistoryListComponent_div_8_div_1_tr_26_td_1_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "td")(3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "td")(15, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](17, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "td")(21, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](23, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r10.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 9, item_r11.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r11.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r11.unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r11.retail_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", item_r11.discount_percentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](17, 11, item_r11.discount_valid_until));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r11.cashback_percentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](23, 13, item_r11.cashback_valid_until));
  }
}
function StockHistoryListComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 14)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "div", 32)(5, "table", 33)(6, "thead")(7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, StockHistoryListComponent_div_8_div_1_th_8_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18n"](10, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18n"](12, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18n"](14, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18n"](16, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18n"](18, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18n"](20, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18n"](22, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18n"](24, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](26, StockHistoryListComponent_div_8_div_1_tr_26_Template, 24, 15, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@dataLoaded", ctx_r7.loading ? "loading" : "loaded")("@onColumn", ctx_r7.layout == ctx_r7.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r7.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r7.stockHistories.content);
  }
}
function StockHistoryListComponent_div_8_div_2_div_1_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "h6", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" By ", item_r15.created_by, "");
  }
}
function StockHistoryListComponent_div_8_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "div", 31)(3, "h5", 46)(4, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function StockHistoryListComponent_div_8_div_2_div_1_Template_a_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r19);
      const item_r15 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r18.onUpsertClick(item_r15.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, StockHistoryListComponent_div_8_div_2_div_1_h6_6_Template, 2, 1, "h6", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, " Qty: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, " Unit Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, " Retail Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, " Discount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24, " Discount Validity: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](27, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29, " Cashback: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33, " Cashback Validity: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](36, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "div")(38, "a", 49)(39, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](41, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r14.resolveProductName(item_r15, ctx_r14.locale), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r14.config.showUserFilter && item_r15.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r15.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r15.unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r15.retail_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", item_r15.discount_percentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](27, 10, item_r15.discount_valid_until));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", item_r15.cashback_percentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](36, 12, item_r15.cashback_valid_until));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](41, 14, item_r15.created_at));
  }
}
function StockHistoryListComponent_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, StockHistoryListComponent_div_8_div_2_div_1_Template, 42, 16, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@dataLoaded", ctx_r8.loading ? "loading" : "loaded")("@onGrid", ctx_r8.layout == ctx_r8.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r8.stockHistories.content);
  }
}
function StockHistoryListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, StockHistoryListComponent_div_8_div_1_Template, 27, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, StockHistoryListComponent_div_8_div_2_Template, 2, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.GRID);
  }
}
function StockHistoryListComponent_app_pagination_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "app-pagination", 52);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("page", ctx_r3.stockHistories);
  }
}
function StockHistoryListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 53)(1, "div", 54)(2, "nav", 55)(3, "ul", 56)(4, "li", 57)(5, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function StockHistoryListComponent_div_10_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r20.onPreviousClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18n"](6, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "li", 57)(8, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function StockHistoryListComponent_div_10_Template_a_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r22.onNextClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18n"](9, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMapInterpolate1"]("page-link ", ctx_r4.stockHistories.first ? "disabled" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMapInterpolate1"]("page-link ", ctx_r4.stockHistories.last ? "disabled" : "", "");
  }
}
class StockHistoryListComponent extends _base_components_base_list_v3_component__WEBPACK_IMPORTED_MODULE_2__.BaseListComponentV3 {
  componentName() {
    return StockHistoryListComponent.name;
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, stockHistoryService, notifier, locale, dialogData) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.stockHistoryService = stockHistoryService;
    this.notifier = notifier;
    this.locale = locale;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultStockHistoryConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__.defaultFilterData;
    this.stockHistories = _base_models_IPage__WEBPACK_IMPORTED_MODULE_4__.defaultPage;
    this.onCanceled = new _angular_core__WEBPACK_IMPORTED_MODULE_16__.EventEmitter();
    this.onCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_16__.EventEmitter();
    this.stockId = null;
    this.isWithinDialog = false;
    this.resolveProductName = _models_stockhistory_model__WEBPACK_IMPORTED_MODULE_0__.resolveProductName;
    if (authService.isAdmin()) {
      this.config.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
    if (dialogData != null) {
      this.stockId = dialogData.stockId;
      this.isWithinDialog = dialogData.isWithinDialog;
    }
  }
  initialize() {
    if (this.isWithinDialog) {
      this.fetchStockHistories({
        stock_id: this.stockId,
        page: 0
      });
    } else {
      this.activatedRoute.queryParams.subscribe(params => {
        this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__.parseFilterData)(params);
        this.fetchStockHistories({
          q: this.filterData.query,
          username: this.filterData.username,
          from_date: this.filterData.fromDate,
          to_date: this.filterData.toDate,
          page: this.filterData.page,
          size: this.filterData.size,
          stock_id: this.stockId
        });
      });
    }
  }
  getBreadcrumbItems() {
    return [{
      text: this.translations["Dashboard"],
      link: null,
      active: false
    }, {
      text: "Stock Histories",
      link: null,
      active: true
    }];
  }
  fetchStockHistories(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_5__.EventKey.STOCK_HISTORIES.SEARCH(params));
    this.stockHistoryService.search(key, this.config.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.stockHistories = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "StockHistory is deleted");
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
    return null;
  }
  onCloseClick() {
    this.onCanceled.emit();
  }
  onPreviousClick() {
    this.filterData.page = this.filterData.page - 1;
    this.fetchStockHistories({
      stock_id: this.stockId,
      page: this.filterData.page
    });
  }
  onNextClick() {
    this.filterData.page = this.filterData.page + 1;
    this.fetchStockHistories({
      stock_id: this.stockId,
      page: this.filterData.page
    });
  }
  static #_ = this.ɵfac = function StockHistoryListComponent_Factory(t) {
    return new (t || StockHistoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_stockhistory_service__WEBPACK_IMPORTED_MODULE_10__.StockHistoryService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: StockHistoryListComponent,
    selectors: [["app-stockhistory-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 8,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Date$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___5 = goog.getMsg("Date");
        i18n_4 = MSG_EXTERNAL_label_Date$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u09A4\u09BE\u09B0\u09BF\u0996";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Quantity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___7 = goog.getMsg("Qty");
        i18n_6 = MSG_EXTERNAL_label_Quantity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "\u09AA\u09B0\u09BF\u09AE\u09BE\u09A3";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UnitPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___9 = goog.getMsg("Unit Price");
        i18n_8 = MSG_EXTERNAL_label_UnitPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u0995\u09CD\u09B0\u09DF \u09AE\u09C2\u09B2\u09CD\u09AF";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_RetailPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___11 = goog.getMsg("Retail Price");
        i18n_10 = MSG_EXTERNAL_label_RetailPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09DF \u09AE\u09C2\u09B2\u09CD\u09AF";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Discount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___13 = goog.getMsg("Discount");
        i18n_12 = MSG_EXTERNAL_label_Discount$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09A1\u09BF\u09B8\u0995\u09BE\u0989\u09A8\u09CD\u099F";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_DiscountValidity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___15 = goog.getMsg("Discount Valid Until");
        i18n_14 = MSG_EXTERNAL_label_DiscountValidity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09A1\u09BF\u09B8\u0995\u09BE\u0989\u09A8\u09CD\u099F\u09C7\u09B0 \u09AC\u09C8\u09A7\u09A4\u09BE";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CashbackPercentage$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___17 = goog.getMsg("Cashback");
        i18n_16 = MSG_EXTERNAL_label_CashbackPercentage$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u0995\u09CD\u09AF\u09BE\u09B6\u09AC\u09CD\u09AF\u09BE\u0995 (%)";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CashbackValidity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___19 = goog.getMsg("Cashback Valid Until");
        i18n_18 = MSG_EXTERNAL_label_CashbackValidity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u0995\u09CD\u09AF\u09BE\u09B6\u09AC\u09CD\u09AF\u09BE\u0995\u09C7\u09B0 \u09AC\u09C8\u09A7\u09A4\u09BE";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Previous$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS__21 = goog.getMsg("Previous");
        i18n_20 = MSG_EXTERNAL_label_Previous$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS__21;
      } else {
        i18n_20 = "\u09AA\u09C2\u09B0\u09CD\u09AC\u09AC\u09B0\u09CD\u09A4\u09C0";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Next$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS__23 = goog.getMsg("Next");
        i18n_22 = MSG_EXTERNAL_label_Next$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKHISTORIES_COMPONENTS_STOCKHISTORY_LIST_STOCKHISTORY_LIST_COMPONENT_TS__23;
      } else {
        i18n_22 = "\u09AA\u09B0\u09AC\u09B0\u09CD\u09A4\u09C0";
      }
      return [[1, "row", "mt-3", "mx-3"], ["href", "javascript:void(0);", 3, "click"], [1, "mdi", "mdi-close-circle", "text-danger", "font-size-16", "float-end"], [1, "row", "mt-3", "mx-2"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page", 4, "ngIf"], ["class", "row ms-2 me-2", 4, "ngIf"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_4, i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, [4, "ngFor", "ngForOf"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "bg-success", "font-size-11", "m-1"], [1, "font-size-10", "text-info"], [3, "page"], [1, "row", "ms-2", "me-2"], [1, "float-end"], ["aria-label", "Page navigation example"], [1, "pagination"], [1, "page-item"], ["href", "javascript: void(0);", 3, "click"], i18n_20, i18n_22];
    },
    template: function StockHistoryListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function StockHistoryListComponent_Template_a_click_1_listener() {
          return ctx.onCloseClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "app-breadcrumb", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("layoutSelected", function StockHistoryListComponent_Template_app_breadcrumb_layoutSelected_5_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, StockHistoryListComponent_util_progress_6_Template, 1, 1, "util-progress", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, StockHistoryListComponent_div_7_Template, 13, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, StockHistoryListComponent_div_8_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, StockHistoryListComponent_app_pagination_9_Template, 1, 1, "app-pagination", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, StockHistoryListComponent_div_10_Template, 10, 6, "div", 10);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("title", ctx.translations["History"])("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.stockHistories.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.stockHistories.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isWithinDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isWithinDialog);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_12__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__.PaginationComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_14__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_15__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 44227:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/stockhistories/models/config.model.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultStockHistoryConfig: () => (/* binding */ defaultStockHistoryConfig),
/* harmony export */   selfEndpoints: () => (/* binding */ selfEndpoints),
/* harmony export */   selfRoutes: () => (/* binding */ selfRoutes)
/* harmony export */ });
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../common/modules/generic/breadcrumb/breadcrumb.model */ 97989);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 62737);


let defaultStockHistoryConfig = {
  defaultLayout: _common_modules_generic_breadcrumb_breadcrumb_model__WEBPACK_IMPORTED_MODULE_0__.Layout.COLUMN,
  upsertOnDialog: true,
  showUserFilter: false,
  showDeleteButton: true,
  searchEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.STOCK_HISTORIES.STOCKHISTORY_ENDPOINT,
  delEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.STOCK_HISTORIES.STOCKHISTORY_ENDPOINT
};
let selfEndpoints = {
  endpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.STOCK_HISTORIES.STOCKHISTORY_ENDPOINT,
  adminEndpoint: _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.STOCK_HISTORIES.STOCKHISTORY_ENDPOINT_ADMIN
};
let selfRoutes = {
  list: "/dash/stock-histories",
  create: "/dash/stock-histories/create",
  update(id) {
    return id == null ? this.create : "/dash/stock-histories/" + id + '/update';
  }
};

/***/ }),

/***/ 95709:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/stockhistories/models/stockhistory.model.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveProductName: () => (/* binding */ resolveProductName)
/* harmony export */ });
/* harmony import */ var _models_global_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/global.config */ 4699);

function resolveProductName(p, locale) {
  if (locale === _models_global_config__WEBPACK_IMPORTED_MODULE_0__.Locales.BN_BN) {
    return p.product_name_bn == null ? p.product_name : p.product_name_bn;
  } else {
    return p.product_name;
  }
}

/***/ }),

/***/ 89371:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/stockhistories/services/stockhistory.service.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockHistoryService: () => (/* binding */ StockHistoryService)
/* harmony export */ });
/* harmony import */ var _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../base/services/base.service */ 91547);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inventory.endpoints */ 62737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../services/eventbus/event-bus.service */ 50030);







class StockHistoryService extends _base_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(authService, notifier, http, eventBusService) {
    super(authService, notifier);
    this.http = http;
    this.eventBusService = eventBusService;
  }
  search(key, endpoint, params) {
    let url = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.STOCK_HISTORIES.SEARCH(endpoint, params);
    this.http.get(url).subscribe(stockHistory => {
      this.eventBusService.publish(key, stockHistory.body);
    }, error => {
      this.handleError(error, auth => {
        this.search(key, endpoint, params);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  fetchSingle(key, id) {
    this.http.get(_inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.STOCK_HISTORIES.GET(id)).subscribe(stockHistory => {
      this.eventBusService.publish(key, stockHistory);
    }, error => {
      this.handleError(error, auth => {
        this.fetchSingle(key, id);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  upsert(key, stockHistoryReq, exId) {
    let endpoint = exId == null ? _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.STOCK_HISTORIES.CREATE() : _inventory_endpoints__WEBPACK_IMPORTED_MODULE_1__.InventoryEndpoints.STOCK_HISTORIES.UPDATE(exId);
    let observable = exId == null ? this.http.post(endpoint, stockHistoryReq) : this.http.patch(endpoint, stockHistoryReq);
    observable.subscribe(res => {
      this.eventBusService.publish(key, res);
    }, err => {
      this.handleError(err, auth => {
        this.upsert(key, stockHistoryReq, exId);
      }, err => {
        this.eventBusService.publish(this.getErrorKey(key), err);
      });
    });
  }
  static #_ = this.ɵfac = function StockHistoryService_Factory(t) {
    return new (t || StockHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_3__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: StockHistoryService,
    factory: StockHistoryService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 74913:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/stockhistories/stockhistory.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockHistoryComponent: () => (/* binding */ StockHistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_stockhistory_list_stockhistory_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/stockhistory-list/stockhistory-list.component */ 17480);


class StockHistoryComponent {
  static #_ = this.ɵfac = function StockHistoryComponent_Factory(t) {
    return new (t || StockHistoryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: StockHistoryComponent,
    selectors: [["app-stockhistory"]],
    decls: 1,
    vars: 0,
    template: function StockHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-stockhistory-list");
      }
    },
    dependencies: [_components_stockhistory_list_stockhistory_list_component__WEBPACK_IMPORTED_MODULE_0__.StockHistoryListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 18294:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/stocks/components/print-barcode/print-barcode.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrintBarcodeComponent: () => (/* binding */ PrintBarcodeComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../environments/environment */ 20553);
/* harmony import */ var _base_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../base/components/base.component */ 58637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _stock_select_stock_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stock-select/stock-select.component */ 2773);









const _c0 = ["stockSelect"];
const _c1 = ["printableContent"];
function PrintBarcodeComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PrintBarcodeComponent_div_12_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);
      const i_r6 = restoredCtx.index;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.removeItem(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br")(4, "img", 15)(5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](s_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", s_r5.barcode, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](s_r5.sku);
  }
}
function PrintBarcodeComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 0)(3, "div", 18)(4, "div", 19)(5, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Search and add stock to print barcode.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 21)(8, "div", 22)(9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
}
function PrintBarcodeComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PrintBarcodeComponent_div_14_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.onClear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](2, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PrintBarcodeComponent_div_14_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.onPrintClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](4, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
class PrintBarcodeComponent extends _base_components_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
  constructor(eventBus, router, subContainer, authService) {
    super(eventBus, router, subContainer);
    this.authService = authService;
    this.selectedStock = null;
    this.stocks = [];
  }
  componentName() {
    return PrintBarcodeComponent.name;
  }
  ngOnInit() {}
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
    this.stocks.push({
      sku: stock.sku,
      name: stock.product.name,
      barcode: this.getBarcodeUrl(stock.id)
    });
    this.stockSelect.clear();
  }
  getBarcodeUrl(stockId) {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.base_url + "/api/v1/stocks/" + stockId + "/generate-barcode-sku?height=30&width=50&access_token=" + this.authService.getAccessToken();
  }
  removeItem(index) {
    this.stocks.splice(index, 1);
  }
  onPrintClick() {
    // const printContents = this.printableContent.nativeElement.innerHTML;
    // const originalContents = document.body.innerHTML;
    //
    // document.body.innerHTML = printContents;
    window.print();
    // document.body.innerHTML = originalContents;
  }

  onClear() {
    let c = confirm("Are you sure?");
    if (!c) return;
    this.stocks = [];
  }
  static #_ = this.ɵfac = function PrintBarcodeComponent_Factory(t) {
    return new (t || PrintBarcodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_2__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_3__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: PrintBarcodeComponent,
    selectors: [["app-print-barcode"]],
    viewQuery: function PrintBarcodeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.stockSelect = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.printableContent = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
    decls: 16,
    vars: 4,
    consts: function () {
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Clear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_PRINT_BARCODE_PRINT_BARCODE_COMPONENT_TS__3 = goog.getMsg("Clear");
        i18n_2 = MSG_EXTERNAL_label_Clear$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_PRINT_BARCODE_PRINT_BARCODE_COMPONENT_TS__3;
      } else {
        i18n_2 = "\u09AA\u09B0\u09BF\u09B7\u09CD\u0995\u09BE\u09B0";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Print$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_PRINT_BARCODE_PRINT_BARCODE_COMPONENT_TS__5 = goog.getMsg("Print");
        i18n_4 = MSG_EXTERNAL_label_Print$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_PRINT_BARCODE_PRINT_BARCODE_COMPONENT_TS__5;
      } else {
        i18n_4 = "\u09AA\u09CD\u09B0\u09BF\u09A8\u09CD\u099F";
      }
      return [[1, "row"], [1, "col-sm-3"], [1, "col-sm-6"], [1, "card"], [1, "card-body"], [1, "card-title", "doNotPrint"], [1, "card-title-desc", "doNotPrint"], ["id", "stock-select", 3, "selectedItem", "selected"], ["stockSelect", ""], [1, "grid-container", "printable"], ["printableContent", ""], ["class", "grid-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "account-pages my-2 doNotPrint", 4, "ngIf"], ["class", "card-footer mt-3 float-end doNotPrint", 4, "ngIf"], [1, "grid-item", 3, "click"], [3, "src"], [1, "account-pages", "my-2", "doNotPrint"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "text-primary"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "card-footer", "mt-3", "float-end", "doNotPrint"], [1, "btn", "btn-danger", "me-2", 3, "click"], i18n_2, [1, "btn", "btn-primary", 3, "click"], i18n_4];
    },
    template: function PrintBarcodeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Print Barcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6)(8, "app-stock-select", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selected", function PrintBarcodeComponent_Template_app_stock_select_selected_8_listener($event) {
          return ctx.onStockSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, PrintBarcodeComponent_div_12_Template, 8, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, PrintBarcodeComponent_div_13_Template, 11, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, PrintBarcodeComponent_div_14_Template, 5, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selectedItem", ctx.selectedStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.stocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.stocks.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.stocks.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _stock_select_stock_select_component__WEBPACK_IMPORTED_MODULE_5__.StockSelectComponent],
    styles: [".grid-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; \n\n  align-items: center; \n\n}\n\n.grid-item[_ngcontent-%COMP%] {\n  width: 50%;\n  box-sizing: border-box;\n  padding: 10px;\n  text-align: center; \n\n}\n\n@media print {\n  .doNotPrint[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9kYXNoL2RvbWFpbnMvaW52ZW50b3J5L3N0b2Nrcy9jb21wb25lbnRzL3ByaW50LWJhcmNvZGUvcHJpbnQtYmFyY29kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUEsRUFBQSxpQ0FBQTtFQUNBLG1CQUFBLEVBQUEsK0JBQUE7QUFBRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQSxFQUFBLG9DQUFBO0FBQUY7O0FBSUE7RUFDRTtJQUFZLHdCQUFBO0VBQVo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBncmlkIGhvcml6b250YWxseSAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGdyaWQgdmVydGljYWxseSAqL1xufVxuXG4uZ3JpZC1pdGVtIHtcbiAgd2lkdGg6IDUwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGNvbnRlbnQgaG9yaXpvbnRhbGx5ICovXG59XG5cblxuQG1lZGlhIHByaW50e1xuICAuZG9Ob3RQcmludHtkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 99013:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/stocks/components/stock-list/stock-list.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockListComponent: () => (/* binding */ StockListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/config.model */ 44505);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _stock_upsert_stock_upsert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stock-upsert/stock-upsert.component */ 40581);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../inventory.endpoints */ 62737);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../environments/environment */ 20553);
/* harmony import */ var _products_models_product_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../products/models/product.model */ 41207);
/* harmony import */ var _stockhistories_components_stockhistory_list_stockhistory_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../stockhistories/components/stockhistory-list/stockhistory-list.component */ 17480);
/* harmony import */ var _organizations_components_org_base_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../organizations/components/org-base-list.component */ 75801);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/stock.service */ 42632);
/* harmony import */ var _vendors_services_vendor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../vendors/services/vendor.service */ 68196);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);





























function StockListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("bar", true);
  }
}
function StockListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
}
function StockListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
}
function StockListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](7, StockListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](8, StockListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](9, "div", 18)(10, "div", 19)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](12, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx_r1.loading);
  }
}
function StockListComponent_div_9_div_1_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](1, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
}
function StockListComponent_div_9_div_1_tr_40_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "img", 73);
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpropertyInterpolate"]("src", item_r9.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsanitizeUrl"]);
  }
}
function StockListComponent_div_9_div_1_tr_40_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", item_r9.product.name.substring(0, 1).toUpperCase(), " ");
  }
}
function StockListComponent_div_9_div_1_tr_40_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](item_r9.variation.name);
  }
}
function StockListComponent_div_9_div_1_tr_40_small_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"]("\u00A0", item_r9.unit.short_code, "");
  }
}
function StockListComponent_div_9_div_1_tr_40_div_50_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "small", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](4, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"]("Until: ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](4, 1, item_r9.discount_valid_until), "");
  }
}
function StockListComponent_div_9_div_1_tr_40_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div")(1, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "strong", 75)(5, "strong", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](6, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](9, "sub", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](12, StockListComponent_div_9_div_1_tr_40_div_50_small_12_Template, 5, 3, "small", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"]("- ", item_r9.discount_percentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind2"](8, 5, ctx_r14.getDiscountedRetailPrice(item_r9), "1.2-2"), "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate2"]("", ctx_r14.translations["$"], " ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind2"](11, 8, item_r9.retail_price, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", item_r9.discount_valid_until);
  }
}
function StockListComponent_div_9_div_1_tr_40_span_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 66)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate2"]("", ctx_r15.translations["$"], " ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind2"](3, 2, item_r9.retail_price, "1.2-2"), "");
  }
}
function StockListComponent_div_9_div_1_tr_40_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 80)(1, "strong", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](2, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind2"](5, 1, ctx_r16.getDiscountedRetailPrice(item_r9) - item_r9.avg_unit_price, "1.2-2"));
  }
}
function StockListComponent_div_9_div_1_tr_40_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 82)(1, "strong", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](2, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind2"](5, 1, ctx_r17.getDiscountedRetailPrice(item_r9) - item_r9.avg_unit_price, "1.2-2"));
  }
}
function StockListComponent_div_9_div_1_tr_40_td_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "td", 84)(1, "app-delete", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("deleteItemEvent", function StockListComponent_div_9_div_1_tr_40_td_59_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r29.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("requestUrl", ctx_r18.config.delEndpoint + "/" + item_r9.id);
  }
}
function StockListComponent_div_9_div_1_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "td")(4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](5, StockListComponent_div_9_div_1_tr_40_img_5_Template, 1, 1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](6, StockListComponent_div_9_div_1_tr_40_span_6_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "td")(8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](10, "br")(11, "img", 53)(12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](13, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function StockListComponent_div_9_div_1_tr_40_Template_a_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r33);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r32.onCopyClick(item_r9.sku));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](15, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](16, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](17, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function StockListComponent_div_9_div_1_tr_40_Template_a_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r33);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r34.onPrintClick(item_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](19, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](20, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](22, StockListComponent_div_9_div_1_tr_40_span_22_Template, 4, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](24, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](27, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](29, "td", 60)(30, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function StockListComponent_div_9_div_1_tr_40_Template_button_click_30_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r33);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r35.onUpsertClick(item_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](31, "span", 62)(32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](35, StockListComponent_div_9_div_1_tr_40_small_35_Template, 2, 1, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](36, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](37, "br")(38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](39, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function StockListComponent_div_9_div_1_tr_40_Template_a_click_39_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r33);
      const item_r9 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r36.onHistoryClick(item_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](40, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](41, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](42, "td")(43, "span", 66)(44, "strong", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](45, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](46, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](48, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](50, StockListComponent_div_9_div_1_tr_40_div_50_Template, 13, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](51, StockListComponent_div_9_div_1_tr_40_span_51_Template, 4, 5, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](52, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](53, StockListComponent_div_9_div_1_tr_40_span_53_Template, 6, 4, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](54, StockListComponent_div_9_div_1_tr_40_span_54_Template, 6, 4, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](55, "td")(56, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](58, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](59, StockListComponent_div_9_div_1_tr_40_td_59_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](item_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", item_r9.product.images.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", item_r9.product.images.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](item_r9.sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpropertyInterpolate"]("src", ctx_r8.getBarcodeUrl(item_r9.id), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", ctx_r8.resolveProductName(item_r9.product, ctx_r8.locale), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", item_r9.variation);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](item_r9.brand.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", ctx_r8.categoriesToString(item_r9.product.categories), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngClass", item_r9.quantity > 0 ? "text-success" : "text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind2"](34, 19, item_r9.quantity, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", item_r9.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind2"](48, 22, item_r9.avg_unit_price, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r8.getDiscount(item_r9) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r8.getDiscount(item_r9) <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", item_r9.retail_price < item_r9.avg_unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", item_r9.retail_price >= item_r9.avg_unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](58, 25, item_r9.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r8.config.showDeleteButton);
  }
}
const _c42 = function () {
  return ["/dash/sales/orders"];
};
const _c43 = function () {
  return ["/dash/sales/orders/create"];
};
function StockListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "div", 29)(5, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](6, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](8, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](9, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](10, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](12, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](13, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](14, "Stocks that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](15, "div", 37)(16, "table", 38)(17, "thead")(18, "tr")(19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](20, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](22, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](24, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](26, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](27, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](28, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](29, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](30, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](32, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](33, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18nStart"](34, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](35, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](37, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](38, StockListComponent_div_9_div_1_th_38_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](39, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](40, StockListComponent_div_9_div_1_tr_40_Template, 60, 27, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction0"](6, _c42));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction0"](7, _c43));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", ctx_r5.stocks.content);
  }
}
function StockListComponent_div_9_div_2_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](1, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpropertyInterpolate"]("src", item_r38.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsanitizeUrl"]);
  }
}
function StockListComponent_div_9_div_2_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 113)(1, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", item_r38.product.name.substring(0, 1).toUpperCase(), " ");
  }
}
function StockListComponent_div_9_div_2_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](item_r38.variation.name);
  }
}
function StockListComponent_div_9_div_2_div_1_div_28_small_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "small", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](4, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"]("Until: ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind1"](4, 1, item_r38.discount_valid_until), "");
  }
}
function StockListComponent_div_9_div_2_div_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div")(1, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "strong", 75)(5, "strong", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](6, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](10, "sub", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](13, StockListComponent_div_9_div_2_div_1_div_28_small_13_Template, 5, 3, "small", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"]("- ", item_r38.discount_percentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind2"](8, 5, ctx_r42.getDiscountedRetailPrice(item_r38), "1.2-2"), "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate2"](" ", ctx_r42.translations["$"], " ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind2"](12, 8, item_r38.retail_price, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", item_r38.discount_valid_until);
  }
}
function StockListComponent_div_9_div_2_div_1_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 66)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate2"]("", ctx_r43.translations["$"], " ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind2"](3, 2, item_r38.retail_price, "1.2-2"), "");
  }
}
function StockListComponent_div_9_div_2_div_1_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 115)(1, "small", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18nStart"](2, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](5, "strong", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](6, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind2"](9, 1, ctx_r44.getDiscountedRetailPrice(item_r38) - item_r38.avg_unit_price, "1.2-2"));
  }
}
function StockListComponent_div_9_div_2_div_1_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 119)(1, "small", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18nStart"](2, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](5, "strong", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](6, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind2"](9, 1, ctx_r45.getDiscountedRetailPrice(item_r38) - item_r38.avg_unit_price, "1.2-2"));
  }
}
function StockListComponent_div_9_div_2_div_1_small_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"]("\u00A0", item_r38.unit.short_code, "");
  }
}
function StockListComponent_div_9_div_2_div_1_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 104)(1, "app-delete", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("deleteItemEvent", function StockListComponent_div_9_div_2_div_1_div_48_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r58.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("requestUrl", ctx_r47.config.delEndpoint + "/" + item_r38.id)("look", "bx");
  }
}
function StockListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 87)(1, "div", 88)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](3, StockListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](4, StockListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](5, "h5", 91)(6, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function StockListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r62);
      const item_r38 = restoredCtx.$implicit;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r61.onUpsertClick(item_r38.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](8, StockListComponent_div_9_div_2_div_1_span_8_Template, 4, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](9, "h6", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](13, "div", 94)(14, "small", 95)(15, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](16, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](18, "span")(19, "strong", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](20, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](24, "small", 98)(25, "small", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](26, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](28, StockListComponent_div_9_div_2_div_1_div_28_Template, 14, 11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](29, StockListComponent_div_9_div_2_div_1_span_29_Template, 4, 5, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](30, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](31, StockListComponent_div_9_div_2_div_1_span_31_Template, 10, 4, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](32, StockListComponent_div_9_div_2_div_1_span_32_Template, 10, 4, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](33, "div", 104)(34, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function StockListComponent_div_9_div_2_div_1_Template_a_click_34_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r62);
      const item_r38 = restoredCtx.$implicit;
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r63.onHistoryClick(item_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](35, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](36, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵi18n"](37, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](38, "div", 109)(39, "div", 110)(40, "div", 104)(41, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function StockListComponent_div_9_div_2_div_1_Template_button_click_41_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r62);
      const item_r38 = restoredCtx.$implicit;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r64.onUpsertClick(item_r38.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](42, "span", 62)(43, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](45, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](46, StockListComponent_div_9_div_2_div_1_small_46_Template, 2, 1, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](47, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](48, StockListComponent_div_9_div_2_div_1_div_48_Template, 2, 2, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r38 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", item_r38.product.images.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", item_r38.product.images.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", item_r38.product.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", item_r38.variation);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", item_r38.brand.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", ctx_r37.categoriesToString(item_r38.product.categories), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind2"](23, 15, item_r38.avg_unit_price, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r37.getDiscount(item_r38) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r37.getDiscount(item_r38) <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", item_r38.retail_price < item_r38.avg_unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", item_r38.retail_price >= item_r38.avg_unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngClass", item_r38.quantity > 0 ? "text-success" : "text-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind2"](45, 18, item_r38.quantity, "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", item_r38.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r37.config.showDeleteButton);
  }
}
function StockListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](1, StockListComponent_div_9_div_2_div_1_Template, 49, 21, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", ctx_r6.stocks.content);
  }
}
function StockListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](1, StockListComponent_div_9_div_1_Template, 41, 8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](2, StockListComponent_div_9_div_2_Template, 2, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r2.layout === ctx_r2.Layout.GRID);
  }
}
class StockListComponent extends _organizations_components_org_base_list_component__WEBPACK_IMPORTED_MODULE_10__.BaseListComponentForOrg {
  componentName() {
    return "StockListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, stockService, vendorService, notifier, locale, historyDialog, orgService) {
    super(eventBus, router, subContainer, dialog, orgService);
    this.authService = authService;
    this.activatedRoute = activatedRoute;
    this.stockService = stockService;
    this.vendorService = vendorService;
    this.notifier = notifier;
    this.locale = locale;
    this.historyDialog = historyDialog;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_0__.defaultStockConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.defaultFilterData;
    this.stocks = _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__.defaultPage;
    this.extraFields = [{
      name: 'vendor_id',
      type: 'dropdown',
      placeholder: 'Select Store',
      label: 'Store',
      value: null,
      options: []
    }];
    this.resolveProductName = _products_models_product_model__WEBPACK_IMPORTED_MODULE_8__.resolveProductName;
    if (authService.isAdmin()) {
      this.config.endpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_5__.InventoryEndpoints.STOCKS.STOCK_ENDPOINT_ADMIN_V2;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_1__.parseFilterData)(params);
      let vendorId = this.filterData.extra['vendor_id'];
      this.onOrgLoaded(orgId => {
        this.fetchMyVendors({
          org_id: orgId
        }, vendors => {
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
        this.fetchStocks({
          vendor_id: vendorId,
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
      text: this.translations["Stocks"],
      link: null,
      active: true
    }];
  }
  fetchStocks(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.STOCKS.SEARCH(params));
    this.stockService.search(key, this.config.endpoint, params);
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
      block(vendors);
    });
  }
  fetchBarcode(stockId, params = {}) {
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_3__.EventKey.STOCKS.GET_BARCODE(stockId));
    this.stockService.fetchBarcode(key, stockId, params);
    this.subscribe(key, null, (value, meta) => {
      let url = meta.data;
      console.log("BARCODE SAFE URL ", url);
    });
  }
  getBarcodeUrl(stockId) {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.base_url + "/api/v1/stocks/" + stockId + "/generate-barcode-sku?height=30&width=50&access_token=" + this.authService.getAccessToken();
  }
  onPrintClick(item) {
    let printFrame = document.createElement('iframe');
    printFrame.style.display = 'none';
    document.body.appendChild(printFrame);
    // Create container element for text and image
    let printContent = document.createElement('div');
    printContent.style.display = 'flex';
    printContent.style.flexDirection = 'column';
    printContent.style.alignItems = 'center';
    printContent.style.justifyContent = 'center';
    // Create top text element
    let topText = document.createElement('p');
    topText.textContent = (0,_products_models_product_model__WEBPACK_IMPORTED_MODULE_8__.resolveProductName)(item.product, this.locale); // Replace with your logic
    topText.style.margin = '0'; // Remove default margin
    topText.style.fontSize = '14px'; // Adjust font size
    // Create image element
    let image = document.createElement('img');
    image.src = this.getBarcodeUrl(item.id);
    // Create bottom text element
    let bottomText = document.createElement('p');
    bottomText.textContent = item.sku; // Replace with your logic
    bottomText.style.margin = '0'; // Remove default margin
    bottomText.style.fontSize = '12px'; // Adjust font size
    // Append all elements to content container
    printContent.appendChild(topText);
    printContent.appendChild(image);
    printContent.appendChild(bottomText);
    // Write the content to the iframe
    printFrame.contentDocument.write(printContent.outerHTML);
    printFrame.contentDocument.close();
    // Wait for content to be fully loaded before printing
    printFrame.onload = function () {
      printFrame.contentWindow.print();
      if (!printFrame.contentWindow.focus) {
        document.body.removeChild(printFrame);
      }
    };
  }
  onHistoryClick(item) {
    const dialogRef = this.historyDialog.open(_stockhistories_components_stockhistory_list_stockhistory_list_component__WEBPACK_IMPORTED_MODULE_9__.StockHistoryListComponent, {
      id: item.id,
      stockId: item.id,
      isWithinDialog: true
    }, false);
    let component = dialogRef.componentInstance;
    component.onCanceled.subscribe(() => {
      dialogRef.close();
    });
    component.onCompleted.subscribe(() => {
      this.ngOnInit();
      console.log("onSuccess. closing dialog");
      dialogRef.close();
    });
  }
  static #_ = this.ɵfac = function StockListComponent_Factory(t) {
    return new (t || StockListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_11__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_12__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_13__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_14__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_15__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_vendors_services_vendor_service__WEBPACK_IMPORTED_MODULE_16__.VendorService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_17__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_25__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_14__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_18__.OrganizationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({
    type: StockListComponent,
    selectors: [["app-stock-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 9,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Orders$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___5 = goog.getMsg("Orders");
        i18n_4 = MSG_EXTERNAL_label_Orders$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u0985\u09B0\u09CD\u09A1\u09BE\u09B0\u0997\u09C1\u09B2\u09CB";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Sell$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___7 = goog.getMsg("Sell");
        i18n_6 = MSG_EXTERNAL_label_Sell$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09BF";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___9 = goog.getMsg("Id");
        i18n_8 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "Id";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___11 = goog.getMsg("Image");
        i18n_10 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u099B\u09AC\u09BF";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Sku$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___13 = goog.getMsg("SKU");
        i18n_12 = MSG_EXTERNAL_label_Sku$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "SKU";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_ProductName$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___15 = goog.getMsg("Product Name");
        i18n_14 = MSG_EXTERNAL_label_ProductName$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09AA\u09A3\u09CD\u09AF\u09C7\u09B0 \u09A8\u09BE\u09AE";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Quantity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___17 = goog.getMsg("Quantity");
        i18n_16 = MSG_EXTERNAL_label_Quantity$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u09AA\u09B0\u09BF\u09AE\u09BE\u09A3";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_AvgUnitPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___19 = goog.getMsg("Avg Unit Price");
        i18n_18 = MSG_EXTERNAL_label_AvgUnitPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___19;
      } else {
        i18n_18 = "\u0997\u09DC \u0995\u09CD\u09B0\u09DF \u09AE\u09C2\u09B2\u09CD\u09AF";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_RetailPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___21 = goog.getMsg("Retail Price");
        i18n_20 = MSG_EXTERNAL_label_RetailPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___21;
      } else {
        i18n_20 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09DF \u09AE\u09C2\u09B2\u09CD\u09AF";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_ProfitPerSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___23 = goog.getMsg("Profit Per Sale / {$lineBreak}Loss per sale", {
          "lineBreak": "\uFFFD#35\uFFFD\uFFFD/#35\uFFFD"
        }, {
          original_code: {
            "lineBreak": "<br/>"
          }
        });
        i18n_22 = MSG_EXTERNAL_label_ProfitPerSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___23;
      } else {
        i18n_22 = "\u09AA\u09CD\u09B0\u09A4\u09BF \u09AC\u09BF\u0995\u09CD\u09B0\u09DF\u09C7\u09B0 \u09B2\u09BE\u09AD / \u0995\u09CD\u09B7\u09A4\u09BF";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___25 = goog.getMsg("Last Updated");
        i18n_24 = MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS___25;
      } else {
        i18n_24 = "\u09B8\u09B0\u09CD\u09AC\u09B6\u09C7\u09B7 \u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____27 = goog.getMsg("Delete");
        i18n_26 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____27;
      } else {
        i18n_26 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Copy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____29 = goog.getMsg("Copy");
        i18n_28 = MSG_EXTERNAL_label_Copy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____29;
      } else {
        i18n_28 = "\u0995\u09AA\u09BF";
      }
      let i18n_30;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Print$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____31 = goog.getMsg("Print");
        i18n_30 = MSG_EXTERNAL_label_Print$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____31;
      } else {
        i18n_30 = "\u09AA\u09CD\u09B0\u09BF\u09A8\u09CD\u099F";
      }
      let i18n_32;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_History$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____33 = goog.getMsg("History");
        i18n_32 = MSG_EXTERNAL_label_History$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____33;
      } else {
        i18n_32 = "\u0987\u09A4\u09BF\u09B9\u09BE\u09B8";
      }
      let i18n_34;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____35 = goog.getMsg("$");
        i18n_34 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____35;
      } else {
        i18n_34 = "\u09F3";
      }
      let i18n_36;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____37 = goog.getMsg("$");
        i18n_36 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____37;
      } else {
        i18n_36 = "\u09F3";
      }
      let i18n_38;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____39 = goog.getMsg("$");
        i18n_38 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____39;
      } else {
        i18n_38 = "\u09F3";
      }
      let i18n_40;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____41 = goog.getMsg("$");
        i18n_40 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____41;
      } else {
        i18n_40 = "\u09F3";
      }
      let i18n_44;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_AvgUnitPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____45 = goog.getMsg("Avg Unit Price:");
        i18n_44 = MSG_EXTERNAL_label_AvgUnitPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____45;
      } else {
        i18n_44 = "\u0997\u09DC \u0995\u09CD\u09B0\u09DF \u09AE\u09C2\u09B2\u09CD\u09AF";
      }
      let i18n_46;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____47 = goog.getMsg("$");
        i18n_46 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____47;
      } else {
        i18n_46 = "\u09F3";
      }
      let i18n_48;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_RetailPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____49 = goog.getMsg("Avg Retail Price: ");
        i18n_48 = MSG_EXTERNAL_label_RetailPrice$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____49;
      } else {
        i18n_48 = "\u09AC\u09BF\u0995\u09CD\u09B0\u09DF \u09AE\u09C2\u09B2\u09CD\u09AF";
      }
      let i18n_50;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_History$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____51 = goog.getMsg("History");
        i18n_50 = MSG_EXTERNAL_label_History$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS____51;
      } else {
        i18n_50 = "\u0987\u09A4\u09BF\u09B9\u09BE\u09B8";
      }
      let i18n_52;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____53 = goog.getMsg("$");
        i18n_52 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____53;
      } else {
        i18n_52 = "\u09F3";
      }
      let i18n_54;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_ProfitPerSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____55 = goog.getMsg(" Profit Per Sale / {$lineBreak}Loss per sale ", {
          "lineBreak": "\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"
        }, {
          original_code: {
            "lineBreak": "<br/>"
          }
        });
        i18n_54 = MSG_EXTERNAL_label_ProfitPerSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____55;
      } else {
        i18n_54 = "\u09AA\u09CD\u09B0\u09A4\u09BF \u09AC\u09BF\u0995\u09CD\u09B0\u09DF\u09C7\u09B0 \u09B2\u09BE\u09AD / \u0995\u09CD\u09B7\u09A4\u09BF";
      }
      let i18n_56;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____57 = goog.getMsg("$");
        i18n_56 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____57;
      } else {
        i18n_56 = "\u09F3";
      }
      let i18n_58;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_ProfitPerSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____59 = goog.getMsg(" Profit Per Sale / {$lineBreak}Loss per sale ", {
          "lineBreak": "\uFFFD#3\uFFFD\uFFFD/#3\uFFFD"
        }, {
          original_code: {
            "lineBreak": "<br/>"
          }
        });
        i18n_58 = MSG_EXTERNAL_label_ProfitPerSale$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____59;
      } else {
        i18n_58 = "\u09AA\u09CD\u09B0\u09A4\u09BF \u09AC\u09BF\u0995\u09CD\u09B0\u09DF\u09C7\u09B0 \u09B2\u09BE\u09AD / \u0995\u09CD\u09B7\u09A4\u09BF";
      }
      let i18n_60;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____61 = goog.getMsg("$");
        i18n_60 = MSG_EXTERNAL_label_CurrencySymbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_LIST_STOCK_LIST_COMPONENT_TS_____61;
      } else {
        i18n_60 = "\u09F3";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addBtnText", "extraFields", "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "d-flex", "flex-wrap", "gap-3", "mb-3", "float-end"], [1, "btn", "btn-outline-primary", "waves-effect", 3, "routerLink"], [1, "mdi", "mdi-truck-delivery", "me-2"], i18n_4, ["type", "submit", 1, "btn", "btn-primary", "px-5", "waves-effect", "waves-light", 3, "routerLink"], [1, "mdi", "mdi-sale", "me-2"], i18n_6, [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, [4, "ngFor", "ngForOf"], i18n_26, [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], [3, "src"], ["href", "javascript: void(0);", 1, "font-size-10", 3, "click"], i18n_28, i18n_30, [1, "text-wrap"], [1, "badge", "bg-info", "font-size-10", "m-1"], [1, "badge", "text-info", "font-size-10", "m-1"], [1, "align-content-center"], [1, "btn", "btn-outline-success", 3, "click"], [1, "badge", "font-size-16", 3, "ngClass"], [1, "mdi", "mdi-plus-circle", "font-size-16"], ["href", "javascript:void(0);", 3, "click"], i18n_32, [1, "badge", "text-info", "font-size-16"], [1, "me-1"], i18n_34, ["class", "badge text-info font-size-16", 4, "ngIf"], ["class", "badge text-danger font-size-16", 4, "ngIf"], ["class", "badge text-success font-size-16", 4, "ngIf"], ["style", "width: 100px", 4, "ngIf"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "text-warning", "font-size-16"], i18n_36, [1, "text-primary", "text-decoration-line-through"], ["class", "font-size-10 mt-3", 4, "ngIf"], [1, "font-size-10", "mt-3"], [1, "badge", "text-danger", "font-size-16"], i18n_38, [1, "badge", "text-success", "font-size-16"], i18n_40, [2, "width", "100px"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], [1, "badge", "badge-soft-primary", "font-size-10", "text-info"], [1, "row", "bg-info-subtle"], [1, "col-6", "mb-2", "badge", "text-info", "font-size-14", "py-2", "mb-2"], i18n_44, i18n_46, [1, "col-6", "badge", "text-info", "font-size-14", "py-2", "mb-2"], [1, "mb-2"], i18n_48, [1, "badge", "text-info", "font-size-14", "mb-2"], ["class", "badge bg-danger-subtle py-2 text-danger font-size-16", 4, "ngIf"], ["class", "badge bg-success-subtle py-2 text-success font-size-16", 4, "ngIf"], [1, "flex-fill"], ["href", "javascript: void(0);", 3, "click"], [1, "bx", "bx-time", "text-primary"], [1, "ms-2"], i18n_50, [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], i18n_52, [1, "badge", "bg-danger-subtle", "py-2", "text-danger", "font-size-16"], [1, "font-size-8"], i18n_54, i18n_56, [1, "badge", "bg-success-subtle", "py-2", "text-success", "font-size-16"], i18n_58, i18n_60, [3, "requestUrl", "look", "deleteItemEvent"]];
    },
    template: function StockListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("layoutSelected", function StockListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("addButtonClick", function StockListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](7, StockListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](8, StockListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](9, StockListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("title", ctx.translations["Products in Stock"])("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("addBtnText", ctx.translations["Add Stock"])("extraFields", ctx.extraFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.stocks.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx.stocks.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("page", ctx.stocks);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterLink, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_19__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_21__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_22__.DeleteComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_23__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.DecimalPipe, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_24__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 57682:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/stocks/components/stock-select/stock-label.pipe.ts ***!
  \***************************************************************************************************/
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

/***/ 2773:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/stocks/components/stock-select/stock-select.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockSelectComponent: () => (/* binding */ StockSelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _common_modules_utility_text_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../common/modules/utility/text.utility */ 78174);
/* harmony import */ var _stock_upsert_stock_upsert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stock-upsert/stock-upsert.component */ 40581);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../inventory.endpoints */ 62737);
/* harmony import */ var _organizations_components_org_base_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../organizations/components/org-base-select.component */ 37339);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/stock.service */ 42632);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../organizations/services/organization.service */ 2490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 21788);


















const _c0 = ["stockSelect"];
function StockSelectComponent_util_progress_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "util-progress", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("bar", true);
  }
}
function StockSelectComponent_ng_template_5_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r4.label);
  }
}
function StockSelectComponent_ng_template_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r4.label_bn);
  }
}
function StockSelectComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, StockSelectComponent_ng_template_5_span_0_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, StockSelectComponent_ng_template_5_span_1_Template, 2, 1, "span", 8);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.locale === "en-US");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.locale === "bn-BN");
  }
}
function StockSelectComponent_ng_template_6_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r9.label);
  }
}
function StockSelectComponent_ng_template_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r9.label_bn);
  }
}
function StockSelectComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, StockSelectComponent_ng_template_6_span_0_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, StockSelectComponent_ng_template_6_span_1_Template, 2, 1, "span", 8);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.locale === "en-US");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r3.locale === "bn-BN");
  }
}
const _c3 = function () {
  return {
    standalone: true
  };
};
class StockSelectComponent extends _organizations_components_org_base_select_component__WEBPACK_IMPORTED_MODULE_4__.BaseComponentForOrg {
  componentName() {
    return "StockSelectComponent";
  }
  constructor(eventBus, router, subContainer, authService, stockService, popupService, locale, orgService) {
    super(eventBus, router, subContainer, orgService);
    this.stockService = stockService;
    this.popupService = popupService;
    this.locale = locale;
    this.stockSelect = null;
    this.enableAdd = true;
    this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_3__.InventoryEndpoints.STOCKS.STOCK_ENDPOINT_V2;
    this.items = [];
    this.selectedItem = null;
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    if (authService.isAdmin()) {
      this.searchEndpoint = _inventory_endpoints__WEBPACK_IMPORTED_MODULE_3__.InventoryEndpoints.STOCKS.STOCK_ENDPOINT_ADMIN_V2;
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
  clear() {
    this.stockSelect?.clearModel();
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
    if (this.items.find(c => c.label == event.label)) {
      this.selected.emit(this.selectedItem);
    } else {
      let popup = this.popupService.open(_stock_upsert_stock_upsert_component__WEBPACK_IMPORTED_MODULE_1__.StockUpsertComponent, {
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
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_2__.EventKey.STOCKS.SEARCH(params));
    this.stockService.search(key, this.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.items = meta.data.content;
      this.loading = false;
    });
  }
  static #_ = this.ɵfac = function StockSelectComponent_Factory(t) {
    return new (t || StockSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_5__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_6__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_8__.StockService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.LOCALE_ID), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_organizations_services_organization_service__WEBPACK_IMPORTED_MODULE_10__.OrganizationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: StockSelectComponent,
    selectors: [["app-stock-select"]],
    viewQuery: function StockSelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.stockSelect = _t.first);
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
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
    decls: 7,
    vars: 9,
    consts: function () {
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Stock$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_SELECT_STOCK_SELECT_COMPONENT_TS_2 = goog.getMsg("Stock");
        i18n_1 = MSG_EXTERNAL_label_Stock$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_STOCKS_COMPONENTS_STOCK_SELECT_STOCK_SELECT_COMPONENT_TS_2;
      } else {
        i18n_1 = "\u09B8\u09CD\u099F\u0995";
      }
      return [["for", "stock-select", 1, "visually-hidden"], i18n_1, [3, "bar", 4, "ngIf"], ["id", "stock-select", 3, "items", "hideSelected", "multiple", "addTag", "ngModel", "ngModelOptions", "placeholder", "keyup", "ngModelChange", "change"], ["stockSelect", ""], ["ng-label-tmp", ""], ["ng-option-tmp", ""], [3, "bar"], [4, "ngIf"]];
    },
    template: function StockSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵi18n"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, StockSelectComponent_util_progress_2_Template, 1, 1, "util-progress", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ng-select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function StockSelectComponent_Template_ng_select_keyup_3_listener($event) {
          return ctx.searchForEvent($event);
        })("ngModelChange", function StockSelectComponent_Template_ng_select_ngModelChange_3_listener($event) {
          return ctx.selectedItem = $event;
        })("change", function StockSelectComponent_Template_ng_select_change_3_listener($event) {
          return ctx.onSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, StockSelectComponent_ng_template_5_Template, 2, 2, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, StockSelectComponent_ng_template_6_Template, 2, 2, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", ctx.translations["Search Stock.."]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("items", ctx.items)("hideSelected", false)("multiple", false)("addTag", ctx.enableAdd)("ngModel", ctx.selectedItem)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](8, _c3));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__.ProgressComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgOptionTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgLabelTemplateDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3411:
/*!**************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/stocks/stock.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockComponent: () => (/* binding */ StockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/stock-list/stock-list.component */ 99013);


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

/***/ 52898:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/units/components/unit-list/unit-list.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnitListComponent: () => (/* binding */ UnitListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v3.component */ 96562);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 84241);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _unit_upsert_unit_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../unit-upsert/unit-upsert.component */ 22100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_unit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/unit.service */ 59712);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);
/* harmony import */ var _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/utility/pipes/readable-date.pipe */ 92770);





















function UnitListComponent_util_progress_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "util-progress", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("bar", true);
  }
}
function UnitListComponent_div_8_h4_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function UnitListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function UnitListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 0)(3, "div", 12)(4, "div", 13)(5, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, UnitListComponent_div_8_h4_7_Template, 2, 0, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, UnitListComponent_div_8_h4_8_Template, 2, 0, "h4", 17);
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
function UnitListComponent_div_9_div_1_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function UnitListComponent_div_9_div_1_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](1, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function UnitListComponent_div_9_div_1_tr_29_td_3_Template(rf, ctx) {
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
function UnitListComponent_div_9_div_1_tr_29_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 42)(1, "app-delete", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("deleteItemEvent", function UnitListComponent_div_9_div_1_tr_29_td_24_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r14.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("requestUrl", ctx_r12.config.delEndpoint + "/" + item_r10.id);
  }
}
function UnitListComponent_div_9_div_1_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, UnitListComponent_div_9_div_1_tr_29_td_3_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "td")(5, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UnitListComponent_div_9_div_1_tr_29_Template_a_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r18);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r17.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "td")(14, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "td")(18, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](20, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "td", 42)(22, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UnitListComponent_div_9_div_1_tr_29_Template_a_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r18);
      const item_r10 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r19.onUpsertClick(item_r10.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](23, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](24, UnitListComponent_div_9_div_1_tr_29_td_24_Template, 2, 1, "td", 45);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r10.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r10.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r10.short_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r9.StringUtil.takeOnly(item_r10.description, 50));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 9, item_r10.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](20, 11, item_r10.updated_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r9.config.showDeleteButton);
  }
}
function UnitListComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Units that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 30)(7, "table", 31)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, UnitListComponent_div_9_div_1_th_12_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](14, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](16, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](18, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](20, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](22, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](24, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵi18n"](26, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](27, UnitListComponent_div_9_div_1_th_27_Template, 2, 0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](29, UnitListComponent_div_9_div_1_tr_29_Template, 25, 13, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@dataLoaded", ctx_r5.loading ? "loading" : "loaded")("@onColumn", ctx_r5.layout == ctx_r5.Layout.COLUMN);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r5.config.showUserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r5.config.showDeleteButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r5.units.content);
  }
}
function UnitListComponent_div_9_div_2_div_1_h6_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "h6", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" By ", item_r21.created_by, "");
  }
}
function UnitListComponent_div_9_div_2_div_1_small_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small", 67)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 1, item_r21.updated_at), " ");
  }
}
function UnitListComponent_div_9_div_2_div_1_small_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
function UnitListComponent_div_9_div_2_div_1_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 63)(1, "app-delete", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("deleteItemEvent", function UnitListComponent_div_9_div_2_div_1_div_34_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r28.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("requestUrl", ctx_r25.config.delEndpoint + "/" + item_r21.id)("look", "bx");
  }
}
function UnitListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 48)(1, "div", 49)(2, "div", 28)(3, "div", 50)(4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "h5", 52)(7, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UnitListComponent_div_9_div_2_div_1_Template_a_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r32);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r31.onUpsertClick(item_r21.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, UnitListComponent_div_9_div_2_div_1_h6_9_Template, 2, 1, "h6", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div", 0)(11, "div", 55)(12, "p", 56)(13, "small")(14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](18, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "div", 55)(20, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, UnitListComponent_div_9_div_2_div_1_small_21_Template, 6, 3, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](22, UnitListComponent_div_9_div_2_div_1_small_22_Template, 6, 0, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div")(26, "a", 59)(27, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "div", 61)(30, "div", 62)(31, "div", 63)(32, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UnitListComponent_div_9_div_2_div_1_Template_a_click_32_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r32);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r33.onUpsertClick(item_r21.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](33, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](34, UnitListComponent_div_9_div_2_div_1_div_34_Template, 2, 2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r21.symbol == null ? null : (tmp_0_0 = item_r21.symbol.substring(0, 1)) == null ? null : tmp_0_0.toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r21.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r20.config.showUserFilter && item_r21.created_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](18, 9, item_r21.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r21.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !item_r21.updated_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r20.StringUtil.takeOnly(item_r21.description, 50, true), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r21.short_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r20.config.showDeleteButton);
  }
}
function UnitListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, UnitListComponent_div_9_div_2_div_1_Template, 35, 11, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("@dataLoaded", ctx_r6.loading ? "loading" : "loaded")("@onGrid", ctx_r6.layout == ctx_r6.Layout.GRID);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r6.units.content);
  }
}
function UnitListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, UnitListComponent_div_9_div_1_Template, 30, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, UnitListComponent_div_9_div_2_Template, 2, 3, "div", 25);
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
class UnitListComponent extends _base_components_base_list_v3_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV3 {
  componentName() {
    return "UnitListComponent";
  }
  constructor(eventBus, router, subContainer, authService, dialog, activatedRoute, unitService, notifier) {
    super(eventBus, router, subContainer, dialog);
    this.activatedRoute = activatedRoute;
    this.unitService = unitService;
    this.notifier = notifier;
    this.config = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.defaultUnitConfig;
    this.filterData = _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.defaultFilterData;
    this.units = _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__.defaultPage;
    if (authService.isAdmin()) {
      this.config.searchEndpoint = _models_config_model__WEBPACK_IMPORTED_MODULE_1__.selfEndpoints.adminEndpoint;
    }
  }
  initialize() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.filterData = (0,_common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__.parseFilterData)(params);
      this.fetchUnits({
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
      text: "Units",
      link: null,
      active: true
    }];
  }
  fetchUnits(params) {
    this.loading = true;
    const key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__.EventKey.UNITS.SEARCH(params));
    this.unitService.search(key, this.config.searchEndpoint, params);
    this.subscribe(key, null, (value, meta) => {
      this.units = meta.data;
      this.loading = false;
    });
    this.subscribe(this.getErrorKey(key), null, (value, meta) => {
      this.notifier.error('Error', meta.data.error.message);
    });
  }
  onDeleted(deleted) {
    if (deleted) {
      this.notifier.success("Success", "Unit is deleted");
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
    return _unit_upsert_unit_upsert_component__WEBPACK_IMPORTED_MODULE_5__.UnitUpsertComponent;
  }
  static #_ = this.ɵfac = function UnitListComponent_Factory(t) {
    return new (t || UnitListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_6__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_7__.SubscriptionContainerService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_9__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_unit_service__WEBPACK_IMPORTED_MODULE_10__.UnitService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_11__.NotifierService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
    type: UnitListComponent,
    selectors: [["app-unit-list"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]],
    decls: 11,
    vars: 7,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___5 = goog.getMsg("Title");
        i18n_4 = MSG_EXTERNAL_label_Title$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u09B6\u09BF\u09B0\u09CB\u09A8\u09BE\u09AE";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Symbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___7 = goog.getMsg("Symbol");
        i18n_6 = MSG_EXTERNAL_label_Symbol$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "\u099A\u09BF\u09B9\u09CD\u09A8";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_ShortCode$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___9 = goog.getMsg("Short Code");
        i18n_8 = MSG_EXTERNAL_label_ShortCode$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u09B8\u0982\u0995\u09CD\u09B7\u09BF\u09AA\u09CD\u09A4";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___11 = goog.getMsg("Description");
        i18n_10 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___13 = goog.getMsg("Created At");
        i18n_12 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___15 = goog.getMsg("Last Updated");
        i18n_14 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___17 = goog.getMsg("Update");
        i18n_16 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS____19 = goog.getMsg("Delete");
        i18n_18 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_UNITS_COMPONENTS_UNIT_LIST_UNIT_LIST_COMPONENT_TS____19;
      } else {
        i18n_18 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_4, i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, [4, "ngFor", "ngForOf"], i18n_18, ["href", "javascript: void(0);", 3, "click"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], [1, "badge", "bg-success", "font-size-11", "m-1"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "font-size-10", "text-info"], [1, "font-size-10"], [3, "requestUrl", "look", "deleteItemEvent"]];
    },
    template: function UnitListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("layoutSelected", function UnitListComponent_Template_app_breadcrumb_layoutSelected_2_listener($event) {
          return ctx.onLayoutSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div", 3)(6, "app-basic-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("addButtonClick", function UnitListComponent_Template_app_basic_filter_addButtonClick_6_listener() {
          return ctx.onUpsertClick(null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, UnitListComponent_util_progress_7_Template, 1, 1, "util-progress", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, UnitListComponent_div_8_Template, 13, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, UnitListComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "app-pagination", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("title", "Units")("layout", ctx.layout)("breadcrumbItems", ctx.breadcrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.units.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.units.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("page", ctx.units);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_12__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_14__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_15__.DeleteComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_16__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_17__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 94269:
/*!************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/units/unit.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnitComponent: () => (/* binding */ UnitComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_unit_list_unit_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/unit-list/unit-list.component */ 52898);


class UnitComponent {
  static #_ = this.ɵfac = function UnitComponent_Factory(t) {
    return new (t || UnitComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: UnitComponent,
    selectors: [["app-unit"]],
    decls: 1,
    vars: 0,
    template: function UnitComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-unit-list");
      }
    },
    dependencies: [_components_unit_list_unit_list_component__WEBPACK_IMPORTED_MODULE_0__.UnitListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5196:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/variations/components/variation-list/variation-list.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariationListComponent: () => (/* binding */ VariationListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v2.component */ 92159);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 31230);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _variation_upsert_variation_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../variation-upsert/variation-upsert.component */ 4664);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inventory.endpoints */ 62737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_variation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/variation.service */ 12708);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 69);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 70)(1, "span", 49);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h6", 71);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 72)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](2, 73);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](3, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Nil");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VariationListComponent_div_9_div_2_div_1_div_25_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 76)(1, "app-delete", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("deleteItemEvent", function VariationListComponent_div_9_div_2_div_1_div_25_div_4_Template_app_delete_deleteItemEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r41.onDeleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("requestUrl", ctx_r40.config.delEndpoint + "/" + item_r29.id)("look", "bx");
  }
}
function VariationListComponent_div_9_div_2_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 75)(1, "div", 76)(2, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VariationListComponent_div_9_div_2_div_1_div_25_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r46);
      const item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r44.onUpsertClick(item_r29.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, VariationListComponent_div_9_div_2_div_1_div_25_div_4_Template, 2, 2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r35.config.showDeleteButton);
  }
}
function VariationListComponent_div_9_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, VariationListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, VariationListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "h5", 59)(6, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VariationListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r48);
      const item_r29 = restoredCtx.$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r47.onUpsertClick(item_r29.id));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](25, VariationListComponent_div_9_div_2_div_1_div_25_Template, 5, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r28.config.showUpdateButton);
  }
}
function VariationListComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, VariationListComponent_div_9_div_2_div_1_Template, 26, 11, "div", 54);
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
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_AvailableVariations$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___5 = goog.getMsg("Variations that I've created");
        i18n_4 = MSG_EXTERNAL_msg_AvailableVariations$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___5;
      } else {
        i18n_4 = "\u09AD\u09BF\u09A8\u09CD\u09A8\u09A4\u09BE \u09AF\u09BE \u0986\u09AE\u09BF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C7\u099B\u09BF";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___7 = goog.getMsg("Id");
        i18n_6 = MSG_EXTERNAL_label_Id$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___7;
      } else {
        i18n_6 = "Id";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___9 = goog.getMsg("Image");
        i18n_8 = MSG_EXTERNAL_label_Image$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___9;
      } else {
        i18n_8 = "\u099B\u09AC\u09BF";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___11 = goog.getMsg("Name");
        i18n_10 = MSG_EXTERNAL_label_Name$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___11;
      } else {
        i18n_10 = "\u09A8\u09BE\u09AE";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___13 = goog.getMsg("Description");
        i18n_12 = MSG_EXTERNAL_label_Description$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___13;
      } else {
        i18n_12 = "\u09AC\u09BF\u09AC\u09B0\u09A3";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___15 = goog.getMsg("Created At");
        i18n_14 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___15;
      } else {
        i18n_14 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___17 = goog.getMsg("Last Updated");
        i18n_16 = MSG_EXTERNAL_label_LastUpdated$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS___17;
      } else {
        i18n_16 = "\u09B8\u09B0\u09CD\u09AC\u09B6\u09C7\u09B7 \u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____19 = goog.getMsg("Created By");
        i18n_18 = MSG_EXTERNAL_label_CreatedBy$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____19;
      } else {
        i18n_18 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u0995\u09B0\u09C7\u099B\u09C7\u09A8";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____21 = goog.getMsg("Update");
        i18n_20 = MSG_EXTERNAL_label_Update$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____21;
      } else {
        i18n_20 = "\u0986\u09AA\u09A1\u09C7\u099F";
      }
      let i18n_22;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____23 = goog.getMsg("Delete");
        i18n_22 = MSG_EXTERNAL_label_Delete$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____23;
      } else {
        i18n_22 = "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8";
      }
      let i18n_24;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____25 = goog.getMsg("Created At");
        i18n_24 = MSG_EXTERNAL_label_CreatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS____25;
      } else {
        i18n_24 = "\u09AF\u09C1\u0995\u09CD\u09A4 \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_26;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS_____27 = goog.getMsg("Updated");
        i18n_26 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS_____27;
      } else {
        i18n_26 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      let i18n_28;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS_____29 = goog.getMsg("Updated");
        i18n_28 = MSG_EXTERNAL_label_UpdatedAt$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VARIATIONS_COMPONENTS_VARIATION_LIST_VARIATION_LIST_COMPONENT_TS_____29;
      } else {
        i18n_28 = "\u0986\u09AA\u09A1\u09C7\u099F \u09B9\u09DF\u09C7\u099B\u09C7";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], i18n_4, [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, [4, "ngFor", "ngForOf"], i18n_18, i18n_20, i18n_22, [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], ["style", "width: 100px", 4, "ngIf"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], i18n_24, [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], [1, "card-footer", "bg-transparent", "border-top"], ["class", "contact-links d-flex font-size-20", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [1, "font-size-10"], i18n_26, i18n_28, [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [3, "requestUrl", "look", "deleteItemEvent"]];
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 56172:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/variations/variation.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariationComponent: () => (/* binding */ VariationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_variation_list_variation_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/variation-list/variation-list.component */ 5196);


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

/***/ 95940:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/vendors/components/vendor-list/vendor-list.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VendorListComponent: () => (/* binding */ VendorListComponent)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../base/components/base-list-v2.component */ 92159);
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/config.model */ 96826);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.model */ 11855);
/* harmony import */ var _base_models_IPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../base/models/IPage */ 76542);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _vendor_upsert_vendor_upsert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vendor-upsert/vendor-upsert.component */ 58117);
/* harmony import */ var _inventory_endpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../inventory.endpoints */ 62737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_eventbus_event_bus_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../services/eventbus/event-bus.service */ 50030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _base_services_subscription_container_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../base/services/subscription-container.service */ 86945);
/* harmony import */ var _common_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../common/modules/auth/services/auth.service */ 2311);
/* harmony import */ var _common_modules_utility_components_popup_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/popup/dialog.service */ 48675);
/* harmony import */ var _services_vendor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/vendor.service */ 68196);
/* harmony import */ var _services_notifier_notifier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../services/notifier/notifier.service */ 45462);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/progress/progress.component */ 26973);
/* harmony import */ var _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/pagination/pagination.component */ 61836);
/* harmony import */ var _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/basic-filter/basic-filter.component */ 43651);
/* harmony import */ var _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../common/modules/utility/components/delete/components/delete/delete.component */ 88694);
/* harmony import */ var _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../common/modules/generic/breadcrumb/breadcrumb.component */ 77485);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_div_8_h4_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵi18n"](1, 24);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "img", 42);
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("src", item_r11.logo, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeUrl"]);
  }
}
function VendorListComponent_div_9_div_1_tr_26_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 43);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_div_9_div_1_tr_26_td_19_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_div_9_div_1_tr_26_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VendorListComponent_div_9_div_1_tr_26_td_19_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r24);
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r22.toggleApproval(item_r11.id, !item_r11.approved));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, VendorListComponent_div_9_div_1_tr_26_td_19_a_1_Template, 2, 0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, VendorListComponent_div_9_div_1_tr_26_td_19_a_2_Template, 2, 0, "a", 46);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 38)(1, "app-delete", 51);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "td")(5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, VendorListComponent_div_9_div_1_tr_26_img_6_Template, 1, 1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, VendorListComponent_div_9_div_1_tr_26_span_7_Template, 2, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "td")(9, "a", 36);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](19, VendorListComponent_div_9_div_1_tr_26_td_19_Template, 3, 2, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "td", 38)(21, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VendorListComponent_div_9_div_1_tr_26_Template_a_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r30);
      const item_r11 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r31.onUpsertClick(item_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](23, VendorListComponent_div_9_div_1_tr_26_td_23_Template, 2, 1, "td", 41);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5, "Vendors that I've created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 30)(7, "table", 31)(8, "thead")(9, "tr")(10, "th");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](26, VendorListComponent_div_9_div_1_tr_26_Template, 24, 13, "tr", 32);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "img", 42);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 73)(1, "span", 43);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "h6", 74);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 75)(1, "b");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "small", 75);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_div_9_div_2_div_1_label_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "Not Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}
function VendorListComponent_div_9_div_2_div_1_div_31_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "i", 80);
  }
}
function VendorListComponent_div_9_div_2_div_1_div_31_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "i", 81);
  }
}
function VendorListComponent_div_9_div_2_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 69)(1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VendorListComponent_div_9_div_2_div_1_div_31_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r51);
      const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r49.toggleApproval(item_r33.id, !item_r33.approved));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, VendorListComponent_div_9_div_2_div_1_div_31_i_2_Template, 1, 0, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, VendorListComponent_div_9_div_2_div_1_div_31_i_3_Template, 1, 0, "i", 79);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 69)(1, "app-delete", 82);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 53)(1, "div", 54)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, VendorListComponent_div_9_div_2_div_1_div_3_Template, 2, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, VendorListComponent_div_9_div_2_div_1_div_4_Template, 3, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "h5", 57)(6, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VendorListComponent_div_9_div_2_div_1_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r57);
      const item_r33 = restoredCtx.$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r56.onUpsertClick(item_r33.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, VendorListComponent_div_9_div_2_div_1_h6_8_Template, 2, 1, "h6", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 0)(10, "div", 60)(11, "p", 61)(12, "small")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](17, "readableDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "div", 60)(19, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, VendorListComponent_div_9_div_2_div_1_small_20_Template, 6, 3, "small", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](21, VendorListComponent_div_9_div_2_div_1_small_21_Template, 6, 0, "small", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "div")(23, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](24, VendorListComponent_div_9_div_2_div_1_label_24_Template, 2, 0, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](25, VendorListComponent_div_9_div_2_div_1_label_25_Template, 2, 0, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "div", 67)(27, "div", 68)(28, "div", 69)(29, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function VendorListComponent_div_9_div_2_div_1_Template_a_click_29_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r57);
      const item_r33 = restoredCtx.$implicit;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r58.onUpsertClick(item_r33.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](30, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](31, VendorListComponent_div_9_div_2_div_1_div_31_Template, 4, 2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](32, VendorListComponent_div_9_div_2_div_1_div_32_Template, 2, 2, "div", 71);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, VendorListComponent_div_9_div_2_div_1_Template, 33, 13, "div", 52);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, VendorListComponent_div_9_div_1_Template, 27, 6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, VendorListComponent_div_9_div_2_Template, 2, 3, "div", 25);
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
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VENDORS_COMPONENTS_VENDOR_LIST_VENDOR_LIST_COMPONENT_TS___1 = goog.getMsg("Cooking your data, please wait..");
        i18n_0 = MSG_EXTERNAL_msg_Loading$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VENDORS_COMPONENTS_VENDOR_LIST_VENDOR_LIST_COMPONENT_TS___1;
      } else {
        i18n_0 = "\u0986\u09AA\u09A8\u09BE\u09B0 \u09A4\u09A5\u09CD\u09AF \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BE \u09B9\u099A\u09CD\u099B\u09C7, \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09BE \u0995\u09B0\u09C1\u09A8..";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VENDORS_COMPONENTS_VENDOR_LIST_VENDOR_LIST_COMPONENT_TS___3 = goog.getMsg("No items");
        i18n_2 = MSG_EXTERNAL_msg_NoItems$$_______________USERS_SAYEM_DEVELOPER_BANKRUPT_BANKRUPT_FRONTEND_SRC_APP_MODULES_DASH_DOMAINS_INVENTORY_VENDORS_COMPONENTS_VENDOR_LIST_VENDOR_LIST_COMPONENT_TS___3;
      } else {
        i18n_2 = "\u0995\u09CB\u09A8 \u0986\u0987\u099F\u09C7\u09AE \u09A8\u09C7\u0987";
      }
      return [[1, "row"], [1, "col-sm-12"], [3, "title", "layout", "breadcrumbItems", "layoutSelected"], [1, "card", "card-body"], [3, "addButtonClick"], [3, "bar", 4, "ngIf"], ["class", "account-pages my-2", 4, "ngIf"], [4, "ngIf"], [3, "page"], [3, "bar"], [1, "account-pages", "my-2"], [1, "container"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], ["class", "text-primary", 4, "ngIf"], ["class", "text-uppercase", 4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/apanel/images/error-img.png", "alt", "", 1, "img-fluid"], [1, "text-primary"], i18n_0, [1, "text-uppercase"], i18n_2, ["class", "row", 4, "ngIf"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "card-title-desc"], [1, "table", "table-responsive"], [1, "table", "table-editable", "table-nowrap", "align-middle", "table-edits", "table-hover", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "avatar-sm", "mx-auto"], ["class", "rounded-circle avatar-sm object-fit-cover", "alt", "", 3, "src", 4, "ngIf"], ["class", "avatar-title rounded-circle bg-primary-subtle text-primary font-size-16", 4, "ngIf"], ["href", "javascript: void(0);", 3, "click"], ["style", "width: 100px", 3, "click", 4, "ngIf"], [2, "width", "100px"], ["title", "Edit", 1, "btn", "btn-outline-warning", "btn-sm", "edit", 3, "click"], [1, "fas", "fa-pencil-alt"], ["style", "width: 100px", 4, "ngIf"], ["alt", "", 1, "rounded-circle", "avatar-sm", "object-fit-cover", 3, "src"], [1, "avatar-title", "rounded-circle", "bg-primary-subtle", "text-primary", "font-size-16"], [2, "width", "100px", 3, "click"], ["class", "btn btn-outline-success btn-sm edit", "title", "Edit", 4, "ngIf"], ["class", "btn btn-outline-danger btn-sm edit", "title", "Edit", 4, "ngIf"], ["title", "Edit", 1, "btn", "btn-outline-success", "btn-sm", "edit"], [1, "fas", "fa-check"], ["title", "Edit", 1, "btn", "btn-outline-danger", "btn-sm", "edit"], [1, "fas", "fa-heart-broken"], [3, "requestUrl", "deleteItemEvent"], ["class", "col-xxl-2 col-xl-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-xxl-2", "col-xl-3", "col-sm-4"], [1, "card", "text-center"], ["class", "mb-4", 4, "ngIf"], ["class", "avatar-sm mx-auto mb-4", 4, "ngIf"], [1, "font-size-15", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark", 3, "click"], ["class", "font-size-10 text-info", 4, "ngIf"], [1, "col-6", "col-sm-6"], [1, "text-muted", "text-end"], [1, "text-muted", "text-start"], ["class", "font-size-10", 4, "ngIf"], ["href", "javascript: void(0);"], ["class", "badge bg-success font-size-11 m-1", 4, "ngIf"], ["class", "badge bg-warning font-size-11 m-1", 4, "ngIf"], [1, "card-footer", "bg-transparent", "border-top"], [1, "contact-links", "d-flex", "font-size-20"], [1, "flex-fill"], [1, "bx", "bx-edit", "text-primary"], ["class", "flex-fill", 4, "ngIf"], [1, "mb-4"], [1, "avatar-sm", "mx-auto", "mb-4"], [1, "font-size-10", "text-info"], [1, "font-size-10"], [1, "badge", "bg-success", "font-size-11", "m-1"], [1, "badge", "bg-warning", "font-size-11", "m-1"], ["title", "Approve", "class", "bx bx-check-circle text-success", 4, "ngIf"], ["title", "Unapprove", "class", "bx bx-x-circle text-warning", 4, "ngIf"], ["title", "Approve", 1, "bx", "bx-check-circle", "text-success"], ["title", "Unapprove", 1, "bx", "bx-x-circle", "text-warning"], [3, "requestUrl", "look", "deleteItemEvent"]];
    },
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _common_modules_utility_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_13__.ProgressComponent, _common_modules_utility_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__.PaginationComponent, _common_modules_utility_components_basic_filter_basic_filter_component__WEBPACK_IMPORTED_MODULE_15__.BasicFilterComponent, _common_modules_utility_components_delete_components_delete_delete_component__WEBPACK_IMPORTED_MODULE_16__.DeleteComponent, _common_modules_generic_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_17__.BreadcrumbComponent, _common_modules_utility_pipes_readable_date_pipe__WEBPACK_IMPORTED_MODULE_18__.ReadableDatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50798:
/*!****************************************************************************!*\
  !*** ./src/app/modules/dash/domains/inventory/vendors/vendor.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VendorComponent: () => (/* binding */ VendorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _components_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/vendor-list/vendor-list.component */ 95940);


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

/***/ }),

/***/ 75801:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/dash/domains/organizations/components/org-base-list.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseListComponentForOrg: () => (/* binding */ BaseListComponentForOrg)
/* harmony export */ });
/* harmony import */ var _base_components_base_list_v4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../base/components/base-list-v4.component */ 45095);
/* harmony import */ var _services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/eventbus/event.key */ 27259);
/* harmony import */ var _services_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/storage/localstorage.service */ 33108);



class BaseListComponentForOrg extends _base_components_base_list_v4_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponentV4 {
  constructor(eventBus, router, subContainer, dialog, orgService) {
    super(eventBus, router, subContainer, dialog);
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
  fetchOrgId(block) {
    let key = this.componentKey(_services_eventbus_event_key__WEBPACK_IMPORTED_MODULE_1__.EventKey.ORGANIZATIONS.GET_MY_ORG());
    this.orgService.fetchMyOrgs(key);
    this.subscribe(key, null, (value, meta) => {
      let orgs = meta.data;
      if (orgs.length > 0) {
        block(orgs[0].id);
      }
    });
  }
  initOrg() {
    let orgStr = _services_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService.retrieve('selectedOrg');
    let org = orgStr != undefined ? JSON.parse(orgStr) : null;
    if (org != null) {
      this.orgId = org.id;
    }
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_dash_domains_inventory_inventory_module_ts.js.map