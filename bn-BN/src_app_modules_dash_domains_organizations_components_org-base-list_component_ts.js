"use strict";
(self["webpackChunkbankrupt_frontend"] = self["webpackChunkbankrupt_frontend"] || []).push([["src_app_modules_dash_domains_organizations_components_org-base-list_component_ts"],{

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
//# sourceMappingURL=src_app_modules_dash_domains_organizations_components_org-base-list_component_ts.js.map