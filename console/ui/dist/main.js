"use strict";
(self["webpackChunkui"] = self["webpackChunkui"] || []).push([["main"],{

/***/ 6885:
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent),
/* harmony export */   "AccountResolver": () => (/* binding */ AccountResolver)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ 1188);
/* harmony import */ var _shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/delete-confirm.service */ 8406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);









function AccountComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountComponent_button_11_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.exportAccount($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AccountComponent_button_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Unban");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AccountComponent_button_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AccountComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountComponent_button_12_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.banUnbanAccount($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AccountComponent_button_12_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AccountComponent_button_12_span_3_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.account.disable_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.account.disable_time);
  }
}
function AccountComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountComponent_button_13_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.deleteAccount($event, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AccountComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccountComponent_button_14_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.deleteAccount($event, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Recorded delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AccountComponent_ngb_alert_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-alert", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("An error occurred: ", ctx_r4.error, "");
  }
}
const _c0 = function (a1, a2) {
  return ["/accounts", a1, a2];
};
function AccountComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r17 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", v_r17.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r6.account.user.id, v_r17.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](v_r17.label);
  }
}
const _c1 = function () {
  return ["/accounts"];
};
const _c2 = function () {
  return ["/storage"];
};
const _c3 = function (a0) {
  return {
    "user_id": a0
  };
};
class AccountComponent {
  route;
  router;
  consoleService;
  authService;
  deleteConfirmService;
  account;
  error = '';
  views = [{
    label: 'Profile',
    path: 'profile'
  }, {
    label: 'Authentication',
    path: 'authentication'
  }, {
    label: 'Friends',
    path: 'friends'
  }, {
    label: 'Groups',
    path: 'groups'
  }, {
    label: 'Wallet',
    path: 'wallet'
  }, {
    label: 'Purchases',
    path: 'purchases'
  }, {
    label: 'Subscriptions',
    path: 'subscriptions'
  }];
  constructor(route, router, consoleService, authService, deleteConfirmService) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.authService = authService;
    this.deleteConfirmService = deleteConfirmService;
  }
  ngOnInit() {
    this.route.data.subscribe(d => {
      this.account = d[0].account;
    }, err => {
      this.error = err;
    });
  }
  deleteAccount(event, recorded) {
    this.deleteConfirmService.openDeleteConfirmModal(() => {
      event.target.disabled = true;
      this.error = '';
      this.consoleService.deleteAccount('', this.account.user.id, recorded).subscribe(() => {
        this.error = '';
        this.router.navigate(['/accounts']);
      }, err => {
        this.error = err;
      });
    });
  }
  banUnbanAccount(event) {
    event.target.disabled = true;
    this.error = '';
    if (this.account.disable_time) {
      this.consoleService.unbanAccount('', this.account.user.id).subscribe(() => {
        this.error = '';
        this.account.disable_time = null;
        event.target.disabled = false;
      }, err => {
        this.error = err;
        event.target.disabled = false;
      });
    } else {
      this.consoleService.banAccount('', this.account.user.id).subscribe(() => {
        this.error = '';
        this.account.disable_time = Date.now().toString();
        event.target.disabled = false;
      }, err => {
        this.error = err;
        event.target.disabled = false;
      });
    }
  }
  exportAccount(event) {
    event.target.disabled = true;
    this.error = '';
    this.consoleService.exportAccount('', this.account.user.id).subscribe(accountExport => {
      this.error = '';
      const fileName = this.account.user.id + '-export.json';
      const json = JSON.stringify(accountExport, null, 2);
      const bytes = new TextEncoder().encode(json);
      const blob = new Blob([bytes], {
        type: 'application/json;charset=utf-8'
      });
      (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, fileName);
      event.target.disabled = false;
    }, err => {
      event.target.disabled = false;
      this.error = err;
    });
  }
  updateAllowed() {
    // only admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_MAINTAINER;
  }
  exportAllowed() {
    // only admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_MAINTAINER;
  }
  banAllowed() {
    // only admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_MAINTAINER;
  }
  deleteAllowed() {
    // only admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_MAINTAINER;
  }
  static ɵfac = function AccountComponent_Factory(t) {
    return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_5__.DeleteConfirmService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AccountComponent,
    selectors: [["ng-component"]],
    decls: 24,
    vars: 14,
    consts: [[1, "pb-1"], [1, "account-top-nav", "d-flex", "justify-content-between", "align-items-baseline", "mb-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], ["type", "button", "class", "btn  btn-outline-secondary mr-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger btn-danger-icon mr-2", 3, "click", 4, "ngIf"], ["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], ["ngbNav", "", 1, "navbar-expand-sm", "p-0", "mb-3"], ["accountNav", "ngbNav"], [4, "ngFor", "ngForOf"], ["ngbNavItem", "storage"], ["ngbNavLink", "", 3, "routerLink", "queryParams"], ["type", "button", 1, "btn", "btn-outline-secondary", "mr-2", 3, "click"], ["src", "/static/svg/export.svg", "alt", "", "width", "13", "height", "13", 1, "mr-2"], ["src", "/static/svg/ban.svg", "alt", "", "width", "13", "height", "13", 1, "mr-2"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "btn-danger-icon", "mr-2", 3, "click"], ["src", "/static/svg/bin-red.svg", "alt", "", "width", "14", "height", "", 1, "mr-2"], ["src", "/static/svg/bin-recorded.svg", "alt", "", "width", "15", "height", "", 1, "mr-2"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], [3, "ngbNavItem"], ["ngbNavLink", "", "routerLinkActive", "account-link-active", 3, "routerLink"]],
    template: function AccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "User Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "nav", 2)(4, "ol", 3)(5, "li", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AccountComponent_button_11_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AccountComponent_button_12_Template, 4, 2, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AccountComponent_button_13_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AccountComponent_button_14_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AccountComponent_ngb_alert_15_Template, 4, 2, "ngb-alert", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "nav", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AccountComponent_div_18_Template, 4, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](20, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Storage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "router-outlet");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.account.user.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.exportAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.banAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deleteAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deleteAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.views);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c3, ctx.account.user.id));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlert, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavLinkBase],
    styles: [".nav-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: black;\n  opacity: 0.5;\n  padding: 0;\n  padding-bottom: 1.6em;\n  margin-right: 3em;\n  margin-bottom: -2px;\n  font-weight: 600;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.nav-link.account-link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  border-bottom: solid 2px #7668ED;\n}\n\n.navbar-expand-sm[_ngcontent-%COMP%] {\n  border-bottom: solid 1px #dadae9;\n}\n\n.account-top-nav[_ngcontent-%COMP%] {\n  border-bottom: solid 1px #dadae9;\n  padding-bottom: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQUE7QUFhQTtFQUNFLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVhGOztBQWNBO0VBQ0UsVUFBQTtBQVhGOztBQWNBO0VBQ0UsVUFBQTtFQUNBLGdDQUFBO0FBWEY7O0FBY0E7RUFDRSxnQ0FBQTtBQVhGOztBQWNBO0VBQ0UsZ0NBQUE7RUFDQSxxQkFBQTtBQVhGIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29sb3JzICovXHJcbiRicmFuZC1wdXJwbGU6ICM3NjY4RUQ7XHJcbiRicmFuZC1saWdodC1wdXJwbGU6ICNBNjlCRkY7XHJcbiRicmFuZC1ncmV5OiAjRkFGQUZDO1xyXG4kYnJhbmQtZGFyay1ibHVlOiAjMzMzNTY0O1xyXG5cclxuLy8uYnJlYWRjcnVtYiB7XHJcbi8vICBmb250LXNpemU6IDMwcHg7XHJcbi8vICBwYWRkaW5nOiAwO1xyXG4vLyAgbWFyZ2luLWJvdHRvbTogMDtcclxuLy8gIGJhY2tncm91bmQ6IG5vbmU7XHJcbi8vfVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNmVtO1xyXG4gIG1hcmdpbi1yaWdodDogM2VtO1xyXG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm5hdi1saW5rOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubmF2LWxpbmsuYWNjb3VudC1saW5rLWFjdGl2ZSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggJGJyYW5kLXB1cnBsZTtcclxufVxyXG5cclxuLm5hdmJhci1leHBhbmQtc20ge1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBkYXJrZW4oJGJyYW5kLWdyZXksIDEwJSk7XHJcbn1cclxuXHJcbi5hY2NvdW50LXRvcC1uYXYge1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGFkYWU5O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
class AccountResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const userId = route.paramMap.get('id');
    return this.consoleService.getAccount('', userId);
  }
  static ɵfac = function AccountResolver_Factory(t) {
    return new (t || AccountResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AccountResolver,
    factory: AccountResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2090:
/*!********************************************************************!*\
  !*** ./src/app/account/authentication/authentication.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationComponent": () => (/* binding */ AuthenticationComponent)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../console.service */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication.service */ 1188);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);








function AuthenticationComponent_ngb_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("An error occurred: ", ctx_r0.error, "");
  }
}
function AuthenticationComponent_ngb_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Account was modified successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
  }
}
function AuthenticationComponent_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", i_r5 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r4.id);
  }
}
function AuthenticationComponent_button_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.updating);
  }
}
class AuthenticationComponent {
  route;
  router;
  consoleService;
  authService;
  formBuilder;
  error = '';
  account;
  accountForm;
  updating = false;
  updated = false;
  constructor(route, router, consoleService, authService, formBuilder) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.authService = authService;
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      email: [''],
      password: [''],
      selected_device_id_index: ['']
    });
    this.route.parent.data.subscribe(d => {
      this.account = d[0].account;
      this.f.email.setValue(this.account.email);
      this.f.password.setValue('');
      this.f.selected_device_id_index.setValue(0);
      if (this.account.devices.length === 0) {
        this.f.selected_device_id_index.disable();
      }
      if (!this.updateAllowed()) {
        this.accountForm.disable();
      }
    }, err => {
      this.error = err;
    });
  }
  updateAccount() {
    this.error = '';
    this.updated = false;
    this.updating = true;
    let body = {
      email: this.f.email.value
    };
    if (this.f.password.dirty) {
      body.password = this.f.password.value;
    }
    this.consoleService.updateAccount('', this.account.user.id, body).subscribe(d => {
      this.updated = true;
      this.updating = false;
      this.f.password.reset();
    }, err => {
      this.error = err;
      this.updating = false;
    });
  }
  unlinkDeviceId(event) {
    event.target.disabled = true;
    this.error = '';
    const body = {
      device_id: this.account.devices[this.f.selected_device_id_index.value].id
    };
    this.consoleService.unlinkDevice('', this.account.user.id, body).subscribe(() => {
      this.error = '';
      this.account.devices.splice(this.f.selected_device_id_index.value, 1);
      this.f.selected_device_id_index.setValue(0);
    }, err => {
      this.error = err;
    });
  }
  unlinkCustomID(event) {
    event.target.disabled = true;
    this.error = '';
    this.consoleService.unlinkCustom('', this.account.user.id).subscribe(() => {
      this.error = '';
      this.account.custom_id = null;
    }, err => {
      this.error = err;
    });
  }
  unlinkFacebook(event) {
    event.target.disabled = true;
    this.error = '';
    this.consoleService.unlinkFacebook('', this.account.user.id).subscribe(() => {
      this.error = '';
      this.account.user.facebook_id = null;
    }, err => {
      this.error = err;
    });
  }
  unlinkFacebookInstantGames(event) {
    event.target.disabled = true;
    this.error = '';
    this.consoleService.unlinkFacebookInstantGame('', this.account.user.id).subscribe(() => {
      this.error = '';
      this.account.user.facebook_instant_game_id = null;
    }, err => {
      this.error = err;
    });
  }
  unlinkApple(event) {
    event.target.disabled = true;
    this.error = '';
    this.consoleService.unlinkApple('', this.account.user.id).subscribe(() => {
      this.error = '';
      this.account.user.apple_id = null;
    }, err => {
      this.error = err;
    });
  }
  unlinkGameCenter(event) {
    event.target.disabled = true;
    this.error = '';
    this.consoleService.unlinkGameCenter('', this.account.user.id).subscribe(() => {
      this.error = '';
      this.account.user.gamecenter_id = null;
    }, err => {
      this.error = err;
    });
  }
  unlinkGoogle(event) {
    event.target.disabled = true;
    this.error = '';
    this.consoleService.unlinkGoogle('', this.account.user.id).subscribe(() => {
      this.error = '';
      this.account.user.google_id = null;
    }, err => {
      this.error = err;
    });
  }
  unlinkSteam(event) {
    event.target.disabled = true;
    this.error = '';
    this.consoleService.unlinkSteam('', this.account.user.id).subscribe(() => {
      this.error = '';
      this.account.user.steam_id = null;
    }, err => {
      this.error = err;
    });
  }
  updateAllowed() {
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_MAINTAINER;
  }
  copyDeviceIdToClipboard(val) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.account.devices[val].id;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  get f() {
    return this.accountForm.controls;
  }
  static ɵfac = function AuthenticationComponent_Factory(t) {
    return new (t || AuthenticationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AuthenticationComponent,
    selectors: [["ng-component"]],
    decls: 102,
    vars: 21,
    consts: [["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], ["type", "success", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "add-border", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6", "d-flex", "justify-content-start", "align-items-baseline"], [1, "col-3", "pl-0"], ["for", "selected_device_id_index", 1, "d-inline"], [1, "input-group"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["src", "/static/svg/copy.svg", "alt", "", "width", "16", "height", "", 1, ""], ["id", "selected_device_id_index", "formControlName", "selected_device_id_index", 1, "form-control", "custom-select", "custom-select-sm"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "disabled", "click"], ["for", "custom_id", 1, "d-inline"], ["type", "text", "id", "custom_id", "disabled", "", 1, "form-control", "form-control-sm", 3, "value"], ["for", "facebook_id", 1, "d-inline"], ["type", "text", "id", "facebook_id", "disabled", "", 1, "form-control", "form-control-sm", 3, "value"], [1, "col-md-6", "d-flex", "justify-content-start", "align-items-baseline", "align-self-center"], ["for", "facebook_instant_game_id", 1, "d-inline"], ["type", "text", "id", "facebook_instant_game_id", "disabled", "", 1, "form-control", "form-control-sm", 3, "value"], ["for", "apple_id", 1, "d-inline"], ["type", "text", "id", "apple_id", "disabled", "", 1, "form-control", "form-control-sm", 3, "value"], ["for", "gamecenter_id", 1, "d-inline"], ["type", "text", "id", "gamecenter_id", "disabled", "", 1, "form-control", "form-control-sm", 3, "value"], ["for", "google_id", 1, "d-inline"], ["type", "text", "id", "google_id", "disabled", "", 1, "form-control", "form-control-sm", 3, "value"], ["for", "steam_id", 1, "d-inline"], ["type", "text", "id", "steam_id", "disabled", "", 1, "form-control", "form-control-sm", 3, "value"], ["for", "email", 1, "d-inline"], ["type", "text", "id", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control", "form-control-sm"], ["for", "password", 1, "d-inline"], ["type", "text", "id", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", "form-control-sm"], [1, "row", "remove-sides"], [1, "small"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", 4, "ngIf"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], ["type", "success", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/green-tick.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [3, "value", "selected"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
    template: function AuthenticationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AuthenticationComponent_ngb_alert_0_Template, 4, 2, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthenticationComponent_ngb_alert_1_Template, 4, 1, "ngb-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthenticationComponent_Template_form_ngSubmit_2_listener() {
          return ctx.updateAccount();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Device IDs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_Template_button_click_9_listener() {
          return ctx.copyDeviceIdToClipboard(ctx.f.selected_device_id_index.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Copy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AuthenticationComponent_option_13_Template, 2, 3, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_Template_button_click_15_listener($event) {
          return ctx.unlinkDeviceId($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Unlink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4)(18, "div", 5)(19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Custom ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12)(24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_Template_button_click_24_listener($event) {
          return ctx.unlinkCustomID($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Unlink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3)(27, "div", 4)(28, "div", 5)(29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Facebook ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12)(34, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_Template_button_click_34_listener($event) {
          return ctx.unlinkFacebook($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Unlink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18)(37, "div", 5)(38, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "FB Instant Game ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12)(43, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_Template_button_click_43_listener($event) {
          return ctx.unlinkFacebookInstantGames($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Unlink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3)(46, "div", 4)(47, "div", 5)(48, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Apple ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12)(53, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_Template_button_click_53_listener($event) {
          return ctx.unlinkApple($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Unlink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18)(56, "div", 5)(57, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "GameCenter ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12)(62, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_Template_button_click_62_listener($event) {
          return ctx.unlinkGameCenter($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Unlink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 3)(65, "div", 4)(66, "div", 5)(67, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Google ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 12)(72, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_Template_button_click_72_listener($event) {
          return ctx.unlinkGoogle($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Unlink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 4)(75, "div", 5)(76, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Steam ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 12)(81, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticationComponent_Template_button_click_81_listener($event) {
          return ctx.unlinkSteam($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Unlink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3)(84, "div", 4)(85, "div", 5)(86, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 4)(91, "div", 5)(92, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 33)(96, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, AuthenticationComponent_button_101_Template, 2, 1, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accountForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.account.devices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.updateAllowed() || ctx.account.devices.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.account.custom_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.updateAllowed() || !ctx.account.custom_id || ctx.account.custom_id === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.account.user.facebook_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.updateAllowed() || !ctx.account.user.facebook_id || ctx.account.user.facebook_id === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.account.user.facebook_instant_game_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.updateAllowed() || !ctx.account.user.facebook_instant_game_id || ctx.account.user.facebook_instant_game_id === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.account.user.apple_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.updateAllowed() || !ctx.account.user.apple_id || ctx.account.user.apple_id === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.account.user.gamecenter_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.updateAllowed() || !ctx.account.user.gamecenter_id || ctx.account.user.gamecenter_id === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.account.user.google_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.updateAllowed() || !ctx.account.user.google_id || ctx.account.user.google_id === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.account.user.steam_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.updateAllowed() || !ctx.account.user.steam_id || ctx.account.user.steam_id === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Verification Status: ", ctx.account.verify_time === null ? "Not Verified" : "Verified", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateAllowed());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAlert, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: [".custom-select[_ngcontent-%COMP%] {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7QUFERiIsInNvdXJjZXNDb250ZW50IjpbIiRicmFuZC1ncmV5OiAjRkFGQUZDO1xyXG5cclxuLmN1c3RvbS1zZWxlY3Qge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6819:
/*!******************************************************!*\
  !*** ./src/app/account/friends/friends.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendsComponent": () => (/* binding */ FriendsComponent),
/* harmony export */   "FriendsResolver": () => (/* binding */ FriendsResolver)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../console.service */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication.service */ 1188);
/* harmony import */ var _shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/delete-confirm.service */ 8406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);








function FriendsComponent_ngb_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("An error occurred: ", ctx_r0.error, "");
  }
}
function FriendsComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FriendsComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No friends found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function FriendsComponent_tr_16_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Friend (0)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FriendsComponent_tr_16_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invite Sent (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FriendsComponent_tr_16_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invite Received (2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FriendsComponent_tr_16_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Blocked (3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FriendsComponent_tr_16_td_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsComponent_tr_16_td_12_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const i_r5 = ctx_r12.index;
      const f_r4 = ctx_r12.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.deleteFriend($event, i_r5, f_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function FriendsComponent_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsComponent_tr_16_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const f_r4 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.viewAccount(f_r4.user));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsComponent_tr_16_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const f_r4 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.viewAccount(f_r4.user));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FriendsComponent_tr_16_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const f_r4 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.viewAccount(f_r4.user));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FriendsComponent_tr_16_span_6_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FriendsComponent_tr_16_span_7_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FriendsComponent_tr_16_span_8_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FriendsComponent_tr_16_span_9_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FriendsComponent_tr_16_td_12_Template, 3, 0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r4.user.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r4.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r4.state === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r4.state === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r4.state === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r4.state === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r4.update_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.deleteAllowed());
  }
}
class FriendsComponent {
  route;
  router;
  consoleService;
  authService;
  deleteConfirmService;
  error = '';
  account;
  friends = [];
  constructor(route, router, consoleService, authService, deleteConfirmService) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.authService = authService;
    this.deleteConfirmService = deleteConfirmService;
  }
  ngOnInit() {
    this.route.data.subscribe(d => {
      this.friends.length = 0;
      this.friends.push(...d[0].friends);
    }, err => {
      this.error = err;
    });
    this.route.parent.data.subscribe(d => {
      this.account = d[0].account;
    }, err => {
      this.error = err;
    });
  }
  deleteAllowed() {
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_MAINTAINER;
  }
  deleteFriend(event, i, f) {
    this.deleteConfirmService.openDeleteConfirmModal(() => {
      event.target.disabled = true;
      event.preventDefault();
      this.error = '';
      this.consoleService.deleteFriend('', this.account.user.id, f.user.id).subscribe(() => {
        this.error = '';
        this.friends.splice(i, 1);
      }, err => {
        this.error = err;
      });
    });
  }
  viewAccount(u) {
    this.router.navigate(['/accounts', u.id], {
      relativeTo: this.route
    });
  }
  static ɵfac = function FriendsComponent_Factory(t) {
    return new (t || FriendsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_4__.DeleteConfirmService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FriendsComponent,
    selectors: [["ng-component"]],
    decls: 17,
    vars: 4,
    consts: [["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "row", "no-gutters"], [1, "table", "table-sm", "table-hover", "table-bordered"], [1, "thead-light"], [2, "width", "320px"], [2, "width", "300px"], [2, "width", "180px"], ["style", "width: 90px", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], [2, "width", "90px"], ["colSpan", "5", 1, "text-muted"], [3, "click"], ["class", "text-center", 4, "ngIf"], [1, "text-center"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"]],
    template: function FriendsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FriendsComponent_ngb_alert_0_Template, 4, 2, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "table", 2)(3, "thead", 3)(4, "tr")(5, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Update Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FriendsComponent_th_13_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FriendsComponent_tr_15_Template, 3, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FriendsComponent_tr_16_Template, 13, 8, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.friends.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.friends);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAlert],
    styles: [".table-hover[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9mcmllbmRzL2ZyaWVuZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtaG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
class FriendsResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const userId = route.parent.paramMap.get('id');
    return this.consoleService.getFriends('', userId);
  }
  static ɵfac = function FriendsResolver_Factory(t) {
    return new (t || FriendsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: FriendsResolver,
    factory: FriendsResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3399:
/*!****************************************************!*\
  !*** ./src/app/account/groups/groups.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupsComponent": () => (/* binding */ GroupsComponent),
/* harmony export */   "GroupsResolver": () => (/* binding */ GroupsResolver)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../console.service */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication.service */ 1188);
/* harmony import */ var _shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/delete-confirm.service */ 8406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);








function GroupsComponent_ngb_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("An error occurred: ", ctx_r0.error, "");
  }
}
function GroupsComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupsComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No group membership found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function GroupsComponent_tr_16_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Superadmin (0)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupsComponent_tr_16_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupsComponent_tr_16_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Member (2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupsComponent_tr_16_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Join Request (3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupsComponent_tr_16_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Banned (4)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupsComponent_tr_16_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td")(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupsComponent_tr_16_td_13_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const i_r5 = ctx_r13.index;
      const g_r4 = ctx_r13.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.deleteGroupUser($event, i_r5, g_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function GroupsComponent_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupsComponent_tr_16_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const g_r4 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.viewAccount(g_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupsComponent_tr_16_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const g_r4 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.viewAccount(g_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupsComponent_tr_16_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const g_r4 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.viewAccount(g_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GroupsComponent_tr_16_span_6_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GroupsComponent_tr_16_span_7_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GroupsComponent_tr_16_span_8_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GroupsComponent_tr_16_span_9_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GroupsComponent_tr_16_span_10_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupsComponent_tr_16_Template_td_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const g_r4 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.viewAccount(g_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GroupsComponent_tr_16_td_13_Template, 3, 0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const g_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r4.group.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r4.group.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", g_r4.state === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", g_r4.state === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", g_r4.state === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", g_r4.state === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", g_r4.state === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r4.group.update_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.deleteAllowed());
  }
}
class GroupsComponent {
  route;
  router;
  consoleService;
  authService;
  deleteConfirmService;
  error = '';
  account;
  groups = [];
  constructor(route, router, consoleService, authService, deleteConfirmService) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.authService = authService;
    this.deleteConfirmService = deleteConfirmService;
  }
  ngOnInit() {
    this.route.data.subscribe(d => {
      this.groups.length = 0;
      this.groups.push(...d[0].user_groups);
    }, err => {
      this.error = err;
    });
    this.route.parent.data.subscribe(d => {
      this.account = d[0].account;
    }, err => {
      this.error = err;
    });
  }
  deleteAllowed() {
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_MAINTAINER;
  }
  deleteGroupUser(event, i, f) {
    this.deleteConfirmService.openDeleteConfirmModal(() => {
      event.target.disabled = true;
      event.preventDefault();
      this.error = '';
      this.consoleService.deleteGroupUser('', this.account.user.id, f.group.id).subscribe(() => {
        this.error = '';
        this.groups.splice(i, 1);
      }, err => {
        this.error = err;
      });
    });
  }
  viewAccount(g) {
    this.router.navigate(['/groups', g.group.id], {
      relativeTo: this.route
    });
  }
  static ɵfac = function GroupsComponent_Factory(t) {
    return new (t || GroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_4__.DeleteConfirmService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GroupsComponent,
    selectors: [["ng-component"]],
    decls: 17,
    vars: 4,
    consts: [["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "row", "no-gutters"], [1, "table", "table-sm", "table-hover", "table-bordered"], [1, "thead-light"], [2, "width", "320px"], [2, "width", "300px"], [2, "width", "180px"], ["style", "width: 90px", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], [2, "width", "90px"], ["colSpan", "5", 1, "text-muted"], [3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"]],
    template: function GroupsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GroupsComponent_ngb_alert_0_Template, 4, 2, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "table", 2)(3, "thead", 3)(4, "tr")(5, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Group ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Update Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GroupsComponent_th_13_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GroupsComponent_tr_15_Template, 3, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GroupsComponent_tr_16_Template, 14, 9, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groups.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAlert],
    styles: [".table-hover[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
class GroupsResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const userId = route.parent.paramMap.get('id');
    return this.consoleService.getGroups('', userId);
  }
  static ɵfac = function GroupsResolver_Factory(t) {
    return new (t || GroupsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: GroupsResolver,
    factory: GroupsResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1102:
/*!******************************************************!*\
  !*** ./src/app/account/profile/profile.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../console.service */ 3713);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vanilla-jsoneditor */ 4221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../authentication.service */ 1188);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);










const _c0 = ["editor"];
function ProfileComponent_ngb_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("An error occurred: ", ctx_r0.error, "");
  }
}
function ProfileComponent_ngb_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Account was modified successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
  }
}
function ProfileComponent_button_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.updating);
  }
}
const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class ProfileComponent {
  route;
  router;
  consoleService;
  authService;
  formBuilder;
  editor;
  jsonEditor;
  error = '';
  account;
  accountForm;
  updating = false;
  updated = false;
  constructor(route, router, consoleService, authService, formBuilder) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.authService = authService;
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      display_name: [''],
      avatar_url: [''],
      location: [''],
      timezone: ['']
    });
    this.route.parent.data.subscribe(d => {
      this.account = d[0].account;
      this.f.username.setValue(this.account.user.username);
      this.f.display_name.setValue(this.account.user.display_name);
      this.f.avatar_url.setValue(this.account.user.avatar_url);
      this.f.location.setValue(this.account.user.location);
      this.f.timezone.setValue(this.account.user.timezone);
      if (!this.updateAllowed()) {
        this.accountForm.disable();
      }
    }, err => {
      this.error = err;
    });
  }
  ngAfterViewInit() {
    this.jsonEditor = new vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.JSONEditor({
      target: this.editor.nativeElement,
      props: {
        mode: vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.Mode.text,
        readOnly: !this.updateAllowed(),
        content: {
          text: this.account.user.metadata
        }
      }
    });
  }
  updateAccount() {
    this.error = '';
    this.updated = false;
    this.updating = true;
    let metadata = '';
    try {
      metadata = (0,vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.toTextContent)(this.jsonEditor.get()).text;
    } catch (e) {
      this.error = e;
      this.updating = false;
      return;
    }
    const body = {
      username: this.f.username.value,
      display_name: this.f.display_name.value,
      avatar_url: this.f.avatar_url.value,
      location: this.f.location.value,
      timezone: this.f.timezone.value,
      metadata: metadata
    };
    this.consoleService.updateAccount('', this.account.user.id, body).subscribe(d => {
      this.updated = true;
      this.updating = false;
    }, err => {
      this.error = err;
      this.updating = false;
    });
  }
  updateAllowed() {
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_3__.UserRole.USER_ROLE_MAINTAINER;
  }
  get f() {
    return this.accountForm.controls;
  }
  static ɵfac = function ProfileComponent_Factory(t) {
    return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_3__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProfileComponent,
    selectors: [["ng-component"]],
    viewQuery: function ProfileComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
      }
    },
    decls: 53,
    vars: 11,
    consts: [["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], ["type", "success", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "add-border", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6", "d-flex", "justify-content-start", "align-items-baseline"], [1, "col-3", "pl-0"], ["for", "user_id", 1, "d-inline"], ["type", "text", "id", "user_id", "placeholder", "User ID", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "username", 1, "d-inline"], ["type", "text", "id", "username", "placeholder", "Username", "required", "", "formControlName", "username", 1, "form-control", "form-control-sm", "my-2", 3, "ngClass"], [1, "invalid-tooltip", 3, "hidden"], ["for", "display_name", 1, "d-inline"], ["type", "text", "id", "display_name", "placeholder", "Display Name", "formControlName", "display_name", 1, "form-control", "form-control-sm", "my-2"], [1, "col-md-6", "d-flex", "justify-content-start", "align-items-baseline", "align-self-center"], ["for", "avatar_url", 1, "d-inline"], ["type", "text", "id", "avatar_url", "placeholder", "Avatar URL", "formControlName", "avatar_url", 1, "form-control", "form-control-sm", "my-2"], ["for", "location", 1, "d-inline"], ["type", "text", "id", "location", "placeholder", "Location", "formControlName", "location", 1, "form-control", "form-control-sm", "my-2"], ["for", "timezone", 1, "d-inline"], ["type", "text", "id", "timezone", "placeholder", "Timezone", "formControlName", "timezone", 1, "form-control", "form-control-sm", "my-2"], [1, "row", "mb-3", "add-border-single-row-bottom"], ["for", "create_time", 1, "d-inline"], ["type", "text", "id", "create_time", "placeholder", "Create Time", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "update_time", 1, "d-inline"], ["type", "text", "id", "update_time", "placeholder", "Update Time", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], [1, "card", "p-2", "mb-3", "jsoneditor", 2, "height", "400px"], [2, "height", "400px"], ["editor", ""], ["type", "submit", "class", "btn btn-primary", 3, "disabled", 4, "ngIf"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], ["type", "success", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/green-tick.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
    template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_ngb_alert_0_Template, 4, 2, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_ngb_alert_1_Template, 4, 1, "ngb-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_2_listener() {
          return ctx.updateAccount();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Username is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3)(17, "div", 4)(18, "div", 5)(19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Display Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13)(23, "div", 5)(24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Avatar URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3)(28, "div", 4)(29, "div", 5)(30, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13)(34, "div", 5)(35, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Timezone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20)(39, "div", 4)(40, "div", 5)(41, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Create Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4)(45, "div", 5)(46, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Update Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ProfileComponent_button_52_Template, 2, 1, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accountForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.account.user.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.f.username.dirty && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.f.username.disabled || ctx.f.username.valid || ctx.f.username.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.account.user.create_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.account.user.update_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateAllowed());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlert, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4102:
/*!**********************************************************!*\
  !*** ./src/app/account/purchases/purchases.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasesComponent": () => (/* binding */ PurchasesComponent),
/* harmony export */   "PurchasesResolver": () => (/* binding */ PurchasesResolver)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../console.service */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);






function PurchasesComponent_ngb_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error while processing request: ", ctx_r0.error, "");
  }
}
function PurchasesComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PurchasesComponent_ng_template_30_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
  }
}
function PurchasesComponent_ng_template_30_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 24);
  }
}
function PurchasesComponent_ng_template_30_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.user_id);
  }
}
function PurchasesComponent_ng_template_30_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 25)(1, "td", 26)(2, "div", 27)(3, "div")(4, "small")(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Provider Response");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "pre", 28)(9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.provider_response);
  }
}
function PurchasesComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchasesComponent_ng_template_30_Template_div_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const i_r4 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.purchasesRowsOpen[i_r4] = !ctx_r12.purchasesRowsOpen[i_r4]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PurchasesComponent_ng_template_30_div_3_Template, 1, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PurchasesComponent_ng_template_30_div_4_Template, 1, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PurchasesComponent_ng_template_30_td_6_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PurchasesComponent_ng_template_30_tr_17_Template, 11, 1, "tr", 22);
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const p_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.purchasesRowsOpen[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.purchasesRowsOpen[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r5.transaction_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.product_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getStoreText(p_r5.store));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.purchase_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.create_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getRefundText(p_r5.refund_time));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.purchasesRowsOpen[i_r4]);
  }
}
function PurchasesComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No purchases were found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class PurchasesComponent {
  route;
  consoleService;
  purchases = [];
  purchasesRowsOpen = [];
  error = '';
  nextCursor = '';
  prevCursor = '';
  userId;
  limit = 100;
  transactionId;
  constructor(route, consoleService) {
    this.route = route;
    this.consoleService = consoleService;
  }
  ngOnInit() {
    const paramUserId = this.route?.parent?.snapshot?.paramMap?.get('id') ?? '';
    if (paramUserId) {
      this.userId = paramUserId;
    }
    this.route.data.subscribe(data => {
      this.purchases = data[0].validated_purchases;
      this.nextCursor = data[0].cursor;
      this.prevCursor = data[0].prev_cursor;
    });
  }
  ngOnChanges(changes) {
    if (!changes.transactionId.firstChange) {
      if (this.transactionId) {
        this.transactionId = this.transactionId.trim();
        this.consoleService.getPurchase('', this.transactionId).subscribe(res => {
          this.purchases = [res];
        }, error => {
          this.error = error;
        });
      } else if (this.transactionId === '') {
        this.loadData('');
      }
    }
  }
  loadData(cursor) {
    this.error = '';
    this.consoleService.listPurchases('', this.userId, this.limit, cursor).subscribe(res => {
      this.purchases = res.validated_purchases;
      this.purchasesRowsOpen = [];
      this.nextCursor = res.cursor;
      this.prevCursor = res.prev_cursor;
    }, error => {
      this.error = error;
    });
  }
  getStoreText(store) {
    return this.formatStoreText(_console_service__WEBPACK_IMPORTED_MODULE_1__.ApiStoreProvider[store]);
  }
  getRefundText(time) {
    if (time === '1970-01-01T00:00:00Z') {
      return '';
    }
    return time;
  }
  formatStoreText(label) {
    return label.split('_').map(s => s[0] + s.slice(1).toLowerCase()).join(' ');
  }
  static ɵfac = function PurchasesComponent_Factory(t) {
    return new (t || PurchasesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PurchasesComponent,
    selectors: [["app-purchases"]],
    inputs: {
      transactionId: ["transaction_id", "transactionId"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 32,
    vars: 7,
    consts: [["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "row", "no-gutters", "mb-4"], [1, "col", "d-flex", "justify-content-between", "no-gutters", "align-items-center"], [1, "col-md-9"], [1, "col-md-3", "justify-content-end", "text-right"], ["role", "group", 1, "btn-group", "page-btns"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "disabled", "click"], ["src", "/static/svg/page-first.svg", "alt", "", "width", "20", "height", ""], ["src", "/static/svg/page-prev.svg", "alt", "", "width", "20", "height", ""], ["src", "/static/svg/page-next.svg", "alt", "", "width", "20", "height", ""], [1, "row", "no-gutters"], [1, "table", "table-sm", "table-bordered", "table-hover"], [1, "thead-light"], [4, "ngIf"], [2, "width", "180px"], ["ngFor", "", 3, "ngForOf"], ["type", "danger", 3, "dismissible"], ["src", "/src/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], [1, "arrow", 3, "click"], ["class", "arrow-right", 4, "ngIf"], ["class", "arrow-down", 4, "ngIf"], ["class", "open-row", 4, "ngIf"], [1, "arrow-right"], [1, "arrow-down"], [1, "open-row"], ["colspan", "6"], [1, "p-2"], [1, "pre-wrap", "m-0", "p-0"], ["colspan", "6", 1, "text-muted"]],
    template: function PurchasesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PurchasesComponent_ngb_alert_0_Template, 4, 2, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchasesComponent_Template_button_click_6_listener() {
          return ctx.loadData("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchasesComponent_Template_button_click_8_listener() {
          return ctx.loadData(ctx.prevCursor);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchasesComponent_Template_button_click_10_listener() {
          return ctx.loadData(ctx.nextCursor);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "table", 11)(14, "thead", 12)(15, "tr")(16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Transaction ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PurchasesComponent_th_18_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Product ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Purchase Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Create Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Refund Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PurchasesComponent_ng_template_30_Template, 18, 10, "ng-template", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PurchasesComponent_tr_31_Template, 3, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.purchases.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.prevCursor === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nextCursor === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.purchases);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.purchases.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbAlert],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
class PurchasesResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const userId = route.parent?.paramMap?.get('id') ?? '';
    return this.consoleService.listPurchases('', userId, 100, '');
  }
  static ɵfac = function PurchasesResolver_Factory(t) {
    return new (t || PurchasesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PurchasesResolver,
    factory: PurchasesResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7305:
/*!******************************************************************!*\
  !*** ./src/app/account/subscriptions/subscriptions.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionsComponent": () => (/* binding */ SubscriptionsComponent),
/* harmony export */   "SubscriptionsResolver": () => (/* binding */ SubscriptionsResolver)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../console.service */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);






function SubscriptionsComponent_ngb_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error while processing request: ", ctx_r0.error, "");
  }
}
function SubscriptionsComponent_ng_template_31_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
  }
}
function SubscriptionsComponent_ng_template_31_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 24);
  }
}
function SubscriptionsComponent_ng_template_31_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 25)(1, "td", 26)(2, "div", 27)(3, "div")(4, "small")(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Provider Response");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div")(8, "pre", 28)(9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 29)(12, "small")(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Provider Notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div")(16, "pre", 28)(17, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const p_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r4.provider_response);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r4.provider_notification);
  }
}
function SubscriptionsComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubscriptionsComponent_ng_template_31_Template_div_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const i_r3 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.subscriptionsRowOpen[i_r3] = !ctx_r9.subscriptionsRowOpen[i_r3]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubscriptionsComponent_ng_template_31_div_3_Template, 1, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubscriptionsComponent_ng_template_31_div_4_Template, 1, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SubscriptionsComponent_ng_template_31_tr_18_Template, 19, 2, "tr", 22);
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const p_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.subscriptionsRowOpen[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.subscriptionsRowOpen[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r4.product_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r4.original_transaction_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getStoreText(p_r4.store));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r4.purchase_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r4.expiry_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r4.create_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getRefundText(p_r4.refund_time));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.subscriptionsRowOpen[i_r3]);
  }
}
function SubscriptionsComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No subscriptions were found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class SubscriptionsComponent {
  route;
  consoleService;
  subscriptions = [];
  subscriptionsRowOpen = [];
  error = '';
  nextCursor = '';
  prevCursor = '';
  userId;
  limit = 100;
  originalTransactionId;
  constructor(route, consoleService) {
    this.route = route;
    this.consoleService = consoleService;
  }
  ngOnInit() {
    const paramUserId = this.route?.parent?.snapshot?.paramMap?.get('id') ?? '';
    if (paramUserId) {
      this.userId = paramUserId;
    }
    this.userId = this.route.parent.snapshot.paramMap.get('id');
    this.route.data.subscribe(data => {
      this.subscriptions = data[0].validated_subscriptions;
      this.nextCursor = data[0].cursor;
      this.prevCursor = data[0].prev_cursor;
    });
  }
  ngOnChanges(changes) {
    if (!changes.originalTransactionId.firstChange) {
      if (this.originalTransactionId) {
        this.originalTransactionId = this.originalTransactionId.trim();
        this.consoleService.getSubscription('', this.originalTransactionId).subscribe(res => {
          this.subscriptions = [res];
        }, error => {
          this.error = error;
        });
      } else if (this.originalTransactionId === '') {
        this.loadData('');
      }
    }
  }
  loadData(cursor) {
    this.error = '';
    this.consoleService.listSubscriptions('', this.userId, this.limit, cursor).subscribe(res => {
      this.subscriptions = res.validated_subscriptions;
      this.subscriptionsRowOpen = [];
      this.nextCursor = res.cursor;
      this.prevCursor = res.prev_cursor;
    }, error => {
      this.error = error;
    });
  }
  getStoreText(store) {
    return this.formatStoreText(_console_service__WEBPACK_IMPORTED_MODULE_1__.ApiStoreProvider[store]);
  }
  getRefundText(time) {
    if (time === '1970-01-01T00:00:00Z') {
      return '';
    }
    return time;
  }
  formatStoreText(label) {
    return label.split('_').map(s => s[0] + s.slice(1).toLowerCase()).join(' ');
  }
  static ɵfac = function SubscriptionsComponent_Factory(t) {
    return new (t || SubscriptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SubscriptionsComponent,
    selectors: [["app-subscriptions"]],
    inputs: {
      originalTransactionId: ["original_transaction_id", "originalTransactionId"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 33,
    vars: 6,
    consts: [["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "row", "no-gutters", "mb-3"], [1, "col", "d-flex", "justify-content-between", "no-gutters"], [1, "col-md-9"], [1, "col-md-3", "justify-content-end", "text-right"], ["role", "group", 1, "btn-group", "page-btns"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "disabled", "click"], ["src", "/static/svg/page-first.svg", "alt", "", "width", "20", "height", ""], ["src", "/static/svg/page-prev.svg", "alt", "", "width", "20", "height", ""], ["src", "/static/svg/page-next.svg", "alt", "", "width", "20", "height", ""], [1, "row", "no-gutters"], [1, "table", "table-sm", "table-bordered", "table-hover"], [1, "thead-light"], [2, "width", "180px"], ["ngFor", "", 3, "ngForOf"], [4, "ngIf"], ["type", "danger", 3, "dismissible"], ["src", "/src/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], [1, "arrow", 3, "click"], ["class", "arrow-right", 4, "ngIf"], ["class", "arrow-down", 4, "ngIf"], ["class", "open-row", 4, "ngIf"], [1, "arrow-right"], [1, "arrow-down"], [1, "open-row"], ["colspan", "7"], [1, "p-2"], [1, "pre-wrap", "m-0", "p-0"], [1, "pt-2"], ["colspan", "7", 1, "text-muted"]],
    template: function SubscriptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SubscriptionsComponent_ngb_alert_0_Template, 4, 2, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubscriptionsComponent_Template_button_click_6_listener() {
          return ctx.loadData("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubscriptionsComponent_Template_button_click_8_listener() {
          return ctx.loadData(ctx.prevCursor);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubscriptionsComponent_Template_button_click_10_listener() {
          return ctx.loadData(ctx.nextCursor);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "table", 11)(14, "thead", 12)(15, "tr")(16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Product ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Original Transaction ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Purchase Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Expiry Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Create Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Refund Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SubscriptionsComponent_ng_template_31_Template, 19, 10, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SubscriptionsComponent_tr_32_Template, 3, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.subscriptions.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.prevCursor === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nextCursor === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subscriptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subscriptions.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbAlert],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
class SubscriptionsResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const userId = route.parent?.paramMap?.get('id') ?? '';
    return this.consoleService.listSubscriptions('', userId, 100, '');
  }
  static ɵfac = function SubscriptionsResolver_Factory(t) {
    return new (t || SubscriptionsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SubscriptionsResolver,
    factory: SubscriptionsResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7472:
/*!****************************************************!*\
  !*** ./src/app/account/wallet/wallet.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletComponent": () => (/* binding */ WalletComponent),
/* harmony export */   "WalletLedgerResolver": () => (/* binding */ WalletLedgerResolver)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../console.service */ 3713);
/* harmony import */ var vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-jsoneditor */ 4221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../authentication.service */ 1188);
/* harmony import */ var _shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/delete-confirm.service */ 8406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);









const _c0 = ["editor"];
function WalletComponent_ngb_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("An error occurred: ", ctx_r0.error, "");
  }
}
function WalletComponent_ngb_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Account was modified successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
  }
}
function WalletComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.updateWallet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.updating);
  }
}
function WalletComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function WalletComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No wallet ledger items found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function WalletComponent_ng_template_31_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 37);
  }
}
function WalletComponent_ng_template_31_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 38);
  }
}
function WalletComponent_ng_template_31_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td")(1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_ng_template_31_td_11_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const i_r9 = ctx_r16.index;
      const w_r10 = ctx_r16.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.deleteLedgerItem($event, i_r9, w_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function WalletComponent_ng_template_31_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 40)(2, "pre", 41)(3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const w_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r10.metadata);
  }
}
function WalletComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_ng_template_31_Template_div_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const i_r9 = restoredCtx.index;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.walletLedgerMetadataOpen[i_r9] = !ctx_r19.walletLedgerMetadataOpen[i_r9]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WalletComponent_ng_template_31_div_3_Template, 1, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WalletComponent_ng_template_31_div_4_Template, 1, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 35)(7, "pre", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WalletComponent_ng_template_31_td_11_Template, 3, 0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WalletComponent_ng_template_31_tr_12_Template, 5, 1, "tr", 22);
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const w_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.walletLedgerMetadataOpen[i_r9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.walletLedgerMetadataOpen[i_r9]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", w_r10.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r10.changeset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](w_r10.update_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.deleteAllowed());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.walletLedgerMetadataOpen[i_r9]);
  }
}
class WalletComponent {
  route;
  router;
  consoleService;
  authService;
  deleteConfirmService;
  editor;
  jsonEditor;
  error = '';
  account;
  walletLedger = [];
  walletLedgerMetadataOpen = [];
  updating = false;
  updated = false;
  nextCursor = '';
  prevCursor = '';
  limit = 100;
  userID;
  constructor(route, router, consoleService, authService, deleteConfirmService) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.authService = authService;
    this.deleteConfirmService = deleteConfirmService;
  }
  ngOnInit() {
    this.userID = this.route.parent.snapshot.paramMap.get('id');
    this.route.data.subscribe(d => {
      this.walletLedger.length = 0;
      this.walletLedger.push(...d[0].items);
      this.walletLedgerMetadataOpen.length = this.walletLedger.length;
      this.nextCursor = d[0].next_cursor;
      this.prevCursor = d[0].prev_cursor;
    }, err => {
      this.error = err;
    });
    this.route.parent.data.subscribe(d => {
      this.account = d[0].account;
    }, err => {
      this.error = err;
    });
  }
  loadData(cursor) {
    this.consoleService.getWalletLedger('', this.userID, this.limit, cursor).subscribe(res => {
      this.walletLedger = res.items;
      this.walletLedgerMetadataOpen = [];
      this.nextCursor = res.next_cursor;
      this.prevCursor = res.prev_cursor;
    }, error => {
      this.error = error;
    });
  }
  ngAfterViewInit() {
    this.jsonEditor = new vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_1__.JSONEditor({
      target: this.editor.nativeElement,
      props: {
        mode: vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_1__.Mode.text,
        readOnly: !this.updateAllowed(),
        content: {
          text: this.account.wallet
        }
      }
    });
  }
  updateWallet() {
    this.error = '';
    this.updated = false;
    this.updating = true;
    let wallet = '';
    try {
      wallet = (0,vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_1__.toTextContent)(this.jsonEditor.get()).text;
    } catch (e) {
      this.error = e;
      this.updating = false;
      return;
    }
    const body = {
      wallet
    };
    this.consoleService.updateAccount('', this.account.user.id, body).subscribe(d => {
      this.updated = true;
      this.updating = false;
    }, err => {
      this.error = err;
      this.updating = false;
    });
  }
  updateAllowed() {
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_MAINTAINER;
  }
  deleteAllowed() {
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_MAINTAINER;
  }
  deleteLedgerItem(event, i, w) {
    this.deleteConfirmService.openDeleteConfirmModal(() => {
      event.target.disabled = true;
      event.preventDefault();
      this.error = '';
      this.consoleService.deleteWalletLedger('', this.account.user.id, w.id).subscribe(() => {
        this.error = '';
        this.walletLedger.splice(i, 1);
        this.walletLedgerMetadataOpen.splice(i, 1);
      }, err => {
        this.error = err;
      });
    });
  }
  static ɵfac = function WalletComponent_Factory(t) {
    return new (t || WalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_5__.DeleteConfirmService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WalletComponent,
    selectors: [["ng-component"]],
    viewQuery: function WalletComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
      }
    },
    decls: 32,
    vars: 9,
    consts: [["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], ["type", "success", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "card", "p-2", "mb-3", "jsoneditor", 2, "height", "400px"], [2, "height", "400px"], ["editor", ""], ["type", "button", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "my-4"], [1, "row", "no-gutters", "mb-3"], [1, "col", "d-flex", "justify-content-between", "no-gutters"], [1, "col-md-9"], [1, "col-md-3", "justify-content-end", "text-right"], ["role", "group", 1, "btn-group", "page-btns"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "disabled", "click"], ["src", "/static/svg/page-first.svg", "alt", "", "width", "20", "height", ""], ["src", "/static/svg/page-prev.svg", "alt", "", "width", "20", "height", ""], ["src", "/static/svg/page-next.svg", "alt", "", "width", "20", "height", ""], [1, "row", "no-gutters"], [1, "table", "table-sm", "table-bordered"], [1, "thead-light"], [2, "width", "315px"], [2, "width", "180px"], ["style", "width: 90px", 4, "ngIf"], [4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], ["type", "success", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/green-tick.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [2, "width", "90px"], ["colSpan", "5", 1, "text-muted"], [1, "arrow", 3, "click"], ["class", "arrow-right", 4, "ngIf"], ["class", "arrow-down", 4, "ngIf"], [1, "align-middle"], [1, "m-0", "p-0"], [1, "arrow-right"], [1, "arrow-down"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], ["colspan", "5", 1, "align-middle"], [1, "pre-wrap", "m-0", "p-0"]],
    template: function WalletComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WalletComponent_ngb_alert_0_Template, 4, 2, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WalletComponent_ngb_alert_1_Template, 4, 1, "ngb-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WalletComponent_button_5_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10)(11, "div", 11)(12, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_12_listener() {
          return ctx.loadData("");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_14_listener() {
          return ctx.loadData(ctx.prevCursor);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalletComponent_Template_button_click_16_listener() {
          return ctx.loadData(ctx.nextCursor);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16)(19, "table", 17)(20, "thead", 18)(21, "tr")(22, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Changeset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Update Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, WalletComponent_th_28_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, WalletComponent_tr_30_Template, 3, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, WalletComponent_ng_template_31_Template, 13, 7, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.walletLedger.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.prevCursor === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nextCursor === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.walletLedger.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.walletLedger);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlert],
    styles: [".pre-wrap[_ngcontent-%COMP%] {\n  word-wrap: anywhere;\n  word-break: break-all;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudC93YWxsZXQvd2FsbGV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucHJlLXdyYXAge1xyXG4gIHdvcmQtd3JhcDogYW55d2hlcmU7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
class WalletLedgerResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const userId = route.parent.paramMap.get('id');
    return this.consoleService.getWalletLedger('', userId, 100, '');
  }
  static ɵfac = function WalletLedgerResolver_Factory(t) {
    return new (t || WalletLedgerResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: WalletLedgerResolver,
    factory: WalletLedgerResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5246:
/*!************************************************!*\
  !*** ./src/app/accounts/accounts.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountListComponent": () => (/* binding */ AccountListComponent),
/* harmony export */   "AccountSearchResolver": () => (/* binding */ AccountSearchResolver)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication.service */ 1188);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/delete-confirm.service */ 8406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);











function AccountListComponent_ngb_alert_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error when querying accounts: ", ctx_r0.error, "");
  }
}
function AccountListComponent_ngb_alert_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Query ongoing...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountListComponent_ngb_alert_29_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.cancelQuery());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
  }
}
function AccountListComponent_th_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function AccountListComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No users found - change the filter criteria or add new user accounts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function AccountListComponent_tr_45_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
  }
}
function AccountListComponent_tr_45_td_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39)(1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountListComponent_tr_45_td_10_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const i_r8 = ctx_r12.index;
      const u_r7 = ctx_r12.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.deleteAccount($event, i_r8, u_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function AccountListComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountListComponent_tr_45_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const u_r7 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.viewAccount(u_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountListComponent_tr_45_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const u_r7 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.viewAccount(u_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountListComponent_tr_45_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const u_r7 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.viewAccount(u_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountListComponent_tr_45_Template_td_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const u_r7 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.viewAccount(u_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AccountListComponent_tr_45_td_9_Template, 1, 0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AccountListComponent_tr_45_td_10_Template, 3, 0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r7.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r7.display_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r7.update_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.deleteAllowed() && u_r7.id === ctx_r4.systemUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.deleteAllowed() && u_r7.id !== ctx_r4.systemUserId);
  }
}
class AccountListComponent {
  route;
  router;
  consoleService;
  authService;
  formBuilder;
  deleteConfirmService;
  systemUserId = '00000000-0000-0000-0000-000000000000';
  error = '';
  accountsCount = 0;
  accounts = [];
  nextCursor = '';
  prevCursor = '';
  searchForm;
  querySubject;
  ongoingQuery = false;
  constructor(route, router, consoleService, authService, formBuilder, deleteConfirmService) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.deleteConfirmService = deleteConfirmService;
  }
  ngOnInit() {
    this.querySubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.searchForm = this.formBuilder.group({
      filter: [''],
      filter_type: [0] // 0 for all, 1 for tombstones
    });

    const qp = this.route.snapshot.queryParamMap;
    this.f.filter.setValue(qp.get('filter'));
    this.f.filter_type.setValue(+qp.get('filter_type'));
    this.nextCursor = qp.get('cursor');
    if (this.nextCursor && this.nextCursor !== '') {
      this.search(1);
    } else if (this.f.filter.value || this.f.filter_type.value) {
      this.search(0);
    }
    this.route.data.subscribe(d => {
      this.accounts.length = 0;
      if (d) {
        this.accounts.push(...d[0].users);
        this.accountsCount = d[0].total_count;
        this.nextCursor = d[0].next_cursor;
        this.prevCursor = d[0].prev_cursor;
      }
    }, err => {
      this.error = err;
    });
  }
  ngOnDestroy() {
    this.querySubject.next();
    this.querySubject.complete();
  }
  search(state) {
    if (this.ongoingQuery) {
      this.querySubject.next();
    }
    this.ongoingQuery = true;
    let cursor = '';
    switch (state) {
      case -1:
        cursor = this.prevCursor;
        break;
      case 0:
        cursor = '';
        break;
      case 1:
        cursor = this.nextCursor;
        break;
    }
    const tombstones = this.f.filter_type.value && this.f.filter_type.value === 1;
    this.consoleService.listAccounts('', this.f.filter.value, tombstones, cursor).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.querySubject)).subscribe(d => {
      this.error = '';
      this.accounts.length = 0;
      this.accounts.push(...d.users);
      this.accountsCount = d.total_count;
      this.nextCursor = d.next_cursor;
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          filter: this.f.filter.value,
          filter_type: this.f.filter_type.value,
          cursor
        },
        queryParamsHandling: 'merge'
      });
      this.ongoingQuery = false;
    }, err => {
      this.error = err;
      this.ongoingQuery = false;
    });
  }
  cancelQuery() {
    this.querySubject.next();
    this.ongoingQuery = false;
  }
  deleteAccount(event, i, o) {
    this.deleteConfirmService.openDeleteConfirmModal(() => {
      event.target.disabled = true;
      event.preventDefault();
      this.error = '';
      this.consoleService.deleteAccount('', o.id, false).subscribe(() => {
        this.error = '';
        this.accounts.splice(i, 1);
        this.accountsCount--;
      }, err => {
        this.error = err;
      });
    });
  }
  deleteAllowed() {
    // only admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_3__.UserRole.USER_ROLE_DEVELOPER;
  }
  viewAccount(u) {
    this.router.navigate(['/accounts', u.id], {
      relativeTo: this.route
    });
  }
  get f() {
    return this.searchForm.controls;
  }
  static ɵfac = function AccountListComponent_Factory(t) {
    return new (t || AccountListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_3__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_7__.DeleteConfirmService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AccountListComponent,
    selectors: [["ng-component"]],
    decls: 46,
    vars: 10,
    consts: [[1, "pb-1"], [1, "pb-3"], [1, "row", "no-gutters", "mb-4"], [1, "col", "d-flex", "justify-content-between", "no-gutters", "align-items-center"], [1, "col-md-9"], [3, "formGroup", "ngSubmit"], [1, "input-group"], ["type", "text", "formControlName", "filter", "placeholder", "Filter by user ID, social provider ID, device ID, or username (use '%' for prefix or suffix wildcard search)", 1, "form-control", "border-right-0"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], ["src", "/static/svg/purple-cog-1.svg", "alt", "", "width", "20", "height", "", 1, "mr-1"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", "dropdown-radius", 3, "click"], ["ngbDropdown", "", "role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle-split", 3, "disabled"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["type", "button", "ngbDropdownItem", "", 3, "click"], [1, "col-md-3", "justify-content-end", "text-right"], ["role", "group", "aria-label", "Search", 1, "btn-group", "page-btns"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "disabled", "click"], ["src", "/static/svg/page-first.svg", "alt", "", "width", "20", "height", ""], ["src", "/static/svg/page-next.svg", "alt", "", "width", "20", "height", ""], ["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "row", "no-gutters"], [1, "table", "table-sm", "table-hover", "table-bordered"], [1, "thead-light"], [2, "width", "320px"], [2, "width", "180px"], ["style", "width: 90px", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [2, "width", "90px"], ["colSpan", "5", 1, "text-muted"], [3, "click"], ["class", "text-center", 4, "ngIf"], [1, "text-center"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"]],
    template: function AccountListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AccountListComponent_Template_form_ngSubmit_7_listener() {
          return ctx.search(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountListComponent_Template_span_click_11_listener() {
          return ctx.f.filter.setValue(ctx.systemUserId);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "div", 11)(15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountListComponent_Template_button_click_15_listener() {
          ctx.f.filter_type.setValue(0);
          return ctx.search(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15)(20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountListComponent_Template_button_click_20_listener() {
          ctx.f.filter_type.setValue(1);
          return ctx.search(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Tombstones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17)(23, "div", 18)(24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountListComponent_Template_button_click_24_listener() {
          return ctx.search(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountListComponent_Template_button_click_26_listener() {
          return ctx.search(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AccountListComponent_ngb_alert_28_Template, 4, 2, "ngb-alert", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AccountListComponent_ngb_alert_29_Template, 6, 1, "ngb-alert", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23)(31, "table", 24)(32, "thead", 25)(33, "tr")(34, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Display Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Last Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AccountListComponent_th_42_Template, 2, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AccountListComponent_tr_44_Template, 3, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AccountListComponent_tr_45_Template, 11, 6, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.accountsCount, " accounts found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.f.filter.value || ctx.f.filter.value === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.accounts.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nextCursor === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ongoingQuery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accounts.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.accounts);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbAlert, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownItem, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName],
    styles: [".dropdown-radius[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.table-hover[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjb3VudHMvYWNjb3VudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1yYWRpdXMge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhYmxlLWhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
class AccountSearchResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const filter = route.queryParamMap.get('filter');
    const tombstones = route.queryParamMap.get('tombstones');
    return this.consoleService.listAccounts('', filter, tombstones === 'true', null);
  }
  static ɵfac = function AccountSearchResolver_Factory(t) {
    return new (t || AccountSearchResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_3__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AccountSearchResolver,
    factory: AccountSearchResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8288:
/*!******************************************************!*\
  !*** ./src/app/apiexplorer/apiexplorer.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiExplorerComponent": () => (/* binding */ ApiExplorerComponent),
/* harmony export */   "ApiExplorerEndpointsResolver": () => (/* binding */ ApiExplorerEndpointsResolver)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vanilla-jsoneditor */ 4221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);








const _c0 = ["editorReq"];
const _c1 = ["editorVars"];
const _c2 = ["editorRes"];
function ApiExplorerComponent_ngb_alert_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error invoking RPC call: ", ctx_r0.error, "");
  }
}
function ApiExplorerComponent_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const e_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", e_r7.method);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](e_r7.method);
  }
}
function ApiExplorerComponent_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const e_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", e_r9.method);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](e_r9.method);
  }
}
function ApiExplorerComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApiExplorerComponent_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.addSessionVars());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Session Variables");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class ApiExplorerComponent {
  route;
  router;
  consoleService;
  formBuilder;
  editorReq;
  editorVars;
  editorRes;
  jsonEditorReq;
  jsonEditorVars;
  jsonEditorRes;
  error = '';
  rpcEndpoints = [];
  endpoints = [];
  endpointCallForm;
  addVars = false;
  constructor(route, router, consoleService, formBuilder) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.endpointCallForm = this.formBuilder.group({
      method: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      user_id: ['']
    });
    this.f.method.valueChanges.subscribe(newMethod => {
      const endpoint = this.endpoints.concat(this.rpcEndpoints).find(e => {
        return e.method === newMethod ? e : null;
      });
      this.updateQueryParam(endpoint.method);
      this.setupRequestBody(endpoint.body_template);
    });
    this.route.data.subscribe(data => {
      const endpoints = data[0];
      this.endpoints.length = 0;
      this.endpoints.push(...endpoints.endpoints);
      this.rpcEndpoints.length = 0;
      this.rpcEndpoints.push(...endpoints.rpc_endpoints);
    }, err => {
      this.error = err;
    });
    const qpEndpoint = this.endpoints.concat(this.rpcEndpoints).find(e => {
      return e.method === this.route.snapshot.queryParamMap.get('endpoint') ? e : null;
    });
    if (qpEndpoint != null) {
      this.f.method.setValue(qpEndpoint.method);
    }
  }
  ngAfterViewInit() {
    this.jsonEditorReq = new vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.JSONEditor({
      target: this.editorReq.nativeElement,
      props: {
        mode: vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.Mode.text,
        readOnly: true
      }
    });
    this.jsonEditorVars = new vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.JSONEditor({
      target: this.editorVars.nativeElement,
      props: {
        mode: vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.Mode.text
      }
    });
    this.jsonEditorRes = new vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.JSONEditor({
      target: this.editorRes.nativeElement,
      props: {
        mode: vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.Mode.text,
        readOnly: true
      }
    });
  }
  sendRequest() {
    this.error = '';
    let value = '';
    try {
      value = (0,vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.toTextContent)(this.jsonEditorReq.get()).text;
    } catch (e) {
      this.error = e;
      return;
    }
    let vars = {};
    try {
      const textVars = (0,vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.toTextContent)(this.jsonEditorVars.get()).text;
      if (textVars !== '') {
        const varsObj = JSON.parse(textVars);
        Object.keys(varsObj).forEach(k => {
          if (typeof k !== 'string') {
            throw new Error(`Invalid session variables: ${k} must be a string`);
          }
          if (typeof varsObj[k] !== 'string') {
            throw new Error(`Invalid session variables: ${varsObj[k]} must be a string`);
          }
        });
        vars = varsObj;
      }
    } catch (e) {
      this.error = e;
      return;
    }
    const req = {
      user_id: this.f.user_id.value,
      body: value,
      session_vars: vars
    };
    let endpointCall = null;
    if (this.isRpcEndpoint(this.f.method.value)) {
      endpointCall = this.consoleService.callRpcEndpoint('', this.f.method.value, req);
    } else {
      endpointCall = this.consoleService.callApiEndpoint('', this.f.method.value, req);
    }
    endpointCall.subscribe(resp => {
      if (resp.error_message && resp.error_message !== '') {
        this.jsonEditorRes.set({
          json: resp.error_message
        });
      } else {
        value = '';
        try {
          if (resp.body === '') {
            value = resp.body;
          } else {
            value = JSON.stringify(JSON.parse(resp.body), null, 2);
          }
        } catch (e) {
          this.error = e;
          return;
        }
        this.jsonEditorRes.set({
          text: value
        });
      }
    }, error => {
      this.jsonEditorRes.set({
        text: ''
      });
      this.error = error;
    });
  }
  isRpcEndpoint(method) {
    return this.rpcEndpoints.find(e => {
      return e.method === method ? e : null;
    }) != null;
  }
  setupRequestBody(body) {
    if (this.jsonEditorReq == null) {
      // not initialised yet
      return;
    }
    if (!body || body === '') {
      this.jsonEditorReq.set({
        text: ''
      });
      this.jsonEditorReq.updateProps({
        readOnly: !this.isRpcEndpoint(this.f.method.value)
      });
      return;
    }
    try {
      const value = JSON.stringify(JSON.parse(body), null, 2);
      this.jsonEditorReq.set({
        text: value
      });
      this.jsonEditorReq.updateProps({
        readOnly: false
      });
    } catch (e) {
      this.error = e;
      return;
    }
  }
  updateQueryParam(endpoint) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        endpoint
      },
      queryParamsHandling: 'merge'
    });
  }
  addSessionVars() {
    this.addVars = true;
    this.jsonEditorVars.set({
      json: {
        '<key1>': '<value1>',
        '<key2>': '<value2>'
      }
    });
  }
  get f() {
    return this.endpointCallForm.controls;
  }
  static ɵfac = function ApiExplorerComponent_Factory(t) {
    return new (t || ApiExplorerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_4__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ApiExplorerComponent,
    selectors: [["ng-component"]],
    viewQuery: function ApiExplorerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editorReq = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editorVars = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editorRes = _t.first);
      }
    },
    decls: 43,
    vars: 8,
    consts: [[1, "pb-4"], ["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "row", "no-gutters", "mb-3"], [1, "col", "d-flex", "justify-content-between", "no-gutters"], [1, "col-md-9"], [3, "formGroup", "ngSubmit"], [1, "input-group"], [1, "input-group-prepend"], ["id", "method", "formControlName", "method", 1, "form-control", "custom-select", "dropdown-radius"], ["disabled", "", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["disabled", "", 1, "text-muted"], ["type", "text", "formControlName", "user_id", "placeholder", "set user ID as request context", 1, "form-control", "border-right-0"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "btn btn-primary", "type", "button", 3, "click", 4, "ngIf"], [1, "row", "mb-3", 3, "hidden"], [1, "col-md-6", "py-3"], [1, "text-muted", "pt-2"], [1, "card", "p-2", "mb-3", "jsoneditor"], [2, "height", "200px"], ["editorVars", ""], [1, "row", "mb-3"], [1, "col-lg-6", "py-3"], [2, "height", "500px"], ["editorReq", ""], ["editorRes", ""], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], [3, "value"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
    template: function ApiExplorerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "API Explorer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApiExplorerComponent_ngb_alert_2_Template, 4, 2, "ngb-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ApiExplorerComponent_Template_form_ngSubmit_6_listener() {
          return ctx.sendRequest();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "select", 8)(10, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select Endpoint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ApiExplorerComponent_option_12_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "----");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ApiExplorerComponent_option_15_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13)(18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Send Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ApiExplorerComponent_button_20_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16)(22, "div", 17)(23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Session Vars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Add variables as object of string to string key-value pairs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22)(31, "div", 23)(32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Request Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23)(38, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Response");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 24, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.endpointCallForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rpcEndpoints);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.endpoints);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.f.method.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.addVars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.addVars);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAlert, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: [".dropdown-radius[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBpZXhwbG9yZXIvYXBpZXhwbG9yZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLGVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1yYWRpdXMge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
class ApiExplorerEndpointsResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    return this.consoleService.listApiEndpoints('');
  }
  static ɵfac = function ApiExplorerEndpointsResolver_Factory(t) {
    return new (t || ApiExplorerEndpointsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_4__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ApiExplorerEndpointsResolver,
    factory: ApiExplorerEndpointsResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _authentication_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.guard */ 1225);
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/base.component */ 6441);
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status/status.component */ 4278);
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/config.component */ 1497);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users.component */ 1846);
/* harmony import */ var _runtime_runtime_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./runtime/runtime.component */ 1815);
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage/storage.component */ 6963);
/* harmony import */ var _storage_object_storage_object_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./storage-object/storage-object.component */ 4329);
/* harmony import */ var _leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leaderboards/leaderboards.component */ 1314);
/* harmony import */ var _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./accounts/accounts.component */ 5246);
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./account/account.component */ 6885);
/* harmony import */ var _account_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./account/profile/profile.component */ 1102);
/* harmony import */ var _account_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./account/authentication/authentication.component */ 2090);
/* harmony import */ var _account_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./account/wallet/wallet.component */ 7472);
/* harmony import */ var _account_friends_friends_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./account/friends/friends.component */ 6819);
/* harmony import */ var _account_groups_groups_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./account/groups/groups.component */ 3399);
/* harmony import */ var _group_details_groupDetailsComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./group/details/groupDetailsComponent */ 6557);
/* harmony import */ var _group_members_groupMembers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./group/members/groupMembers.component */ 6162);
/* harmony import */ var _matches_matches_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./matches/matches.component */ 115);
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./groups/groups.component */ 3479);
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./group/group.component */ 9303);
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ 7354);
/* harmony import */ var _leaderboard_details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leaderboard/details/details.component */ 9680);
/* harmony import */ var _leaderboard_records_records_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./leaderboard/records/records.component */ 3104);
/* harmony import */ var _apiexplorer_apiexplorer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./apiexplorer/apiexplorer.component */ 8288);
/* harmony import */ var _account_purchases_purchases_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./account/purchases/purchases.component */ 4102);
/* harmony import */ var _channels_chat_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./channels/chat-list.component */ 6118);
/* harmony import */ var _account_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./account/subscriptions/subscriptions.component */ 7305);
/* harmony import */ var _purchases_purchases_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./purchases/purchases-list.component */ 7992);
/* harmony import */ var _subscriptions_subscriptions_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./subscriptions/subscriptions-list.component */ 1649);
/* harmony import */ var _mfa_setup_mfa_setup_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mfa-setup/mfa-setup.component */ 7229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ 2560);



































const routes = [{
  path: '',
  component: _base_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent,
  canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_1__.AuthenticationGuard],
  canActivateChild: [_base_base_component__WEBPACK_IMPORTED_MODULE_0__.PageviewGuard],
  children: [{
    path: '',
    redirectTo: 'status',
    pathMatch: 'full'
  }, {
    path: 'status',
    component: _status_status_component__WEBPACK_IMPORTED_MODULE_2__.StatusComponent,
    resolve: [_status_status_component__WEBPACK_IMPORTED_MODULE_2__.GraphInitNodesResolver]
  }, {
    path: 'config',
    component: _config_config_component__WEBPACK_IMPORTED_MODULE_3__.ConfigComponent,
    resolve: [_config_config_component__WEBPACK_IMPORTED_MODULE_3__.ConfigResolver]
  }, {
    path: 'users',
    component: _users_users_component__WEBPACK_IMPORTED_MODULE_4__.UsersComponent,
    resolve: [_users_users_component__WEBPACK_IMPORTED_MODULE_4__.UsersResolver]
  }, {
    path: 'modules',
    component: _runtime_runtime_component__WEBPACK_IMPORTED_MODULE_5__.RuntimeComponent,
    resolve: [_runtime_runtime_component__WEBPACK_IMPORTED_MODULE_5__.RuntimeResolver]
  }, {
    path: 'storage',
    component: _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__.StorageListComponent,
    resolve: [_storage_storage_component__WEBPACK_IMPORTED_MODULE_6__.StorageCollectionResolver, _storage_storage_component__WEBPACK_IMPORTED_MODULE_6__.StorageSearchResolver],
    pathMatch: 'full'
  }, {
    path: 'storage/:collection/:key/:user_id',
    component: _storage_object_storage_object_component__WEBPACK_IMPORTED_MODULE_7__.StorageObjectComponent,
    resolve: [_storage_object_storage_object_component__WEBPACK_IMPORTED_MODULE_7__.StorageObjectResolver],
    pathMatch: 'full'
  }, {
    path: 'leaderboards',
    component: _leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_8__.LeaderboardsComponent,
    resolve: [_leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_8__.LeaderboardListResolver]
  }, {
    path: 'leaderboards/:id',
    component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__.LeaderboardComponent,
    resolve: [_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_9__.LeaderboardResolver],
    children: [{
      path: '',
      redirectTo: 'details',
      pathMatch: 'full'
    }, {
      path: 'details',
      component: _leaderboard_details_details_component__WEBPACK_IMPORTED_MODULE_10__.LeaderboardDetailsComponent,
      resolve: []
    }, {
      path: 'records',
      component: _leaderboard_records_records_component__WEBPACK_IMPORTED_MODULE_11__.LeaderboardRecordsComponent,
      resolve: [_leaderboard_records_records_component__WEBPACK_IMPORTED_MODULE_11__.LeaderboardRecordsResolver]
    }]
  }, {
    path: 'matches',
    component: _matches_matches_component__WEBPACK_IMPORTED_MODULE_12__.MatchesComponent,
    resolve: [_matches_matches_component__WEBPACK_IMPORTED_MODULE_12__.MatchesResolver, _matches_matches_component__WEBPACK_IMPORTED_MODULE_12__.NodesResolver]
  }, {
    path: 'groups',
    component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_13__.GroupListComponent,
    resolve: [_groups_groups_component__WEBPACK_IMPORTED_MODULE_13__.GroupSearchResolver]
  }, {
    path: 'groups/:id',
    component: _group_group_component__WEBPACK_IMPORTED_MODULE_14__.GroupComponent,
    resolve: [_group_group_component__WEBPACK_IMPORTED_MODULE_14__.GroupResolver],
    children: [{
      path: '',
      redirectTo: 'details',
      pathMatch: 'full'
    }, {
      path: 'details',
      component: _group_details_groupDetailsComponent__WEBPACK_IMPORTED_MODULE_15__.GroupDetailsComponent,
      resolve: []
    }, {
      path: 'members',
      component: _group_members_groupMembers_component__WEBPACK_IMPORTED_MODULE_16__.GroupMembersComponent,
      resolve: [_group_members_groupMembers_component__WEBPACK_IMPORTED_MODULE_16__.GroupMembersResolver],
      runGuardsAndResolvers: 'always'
    }]
  }, {
    path: 'accounts',
    component: _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_17__.AccountListComponent,
    resolve: [_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_17__.AccountSearchResolver]
  }, {
    path: 'accounts/:id',
    component: _account_account_component__WEBPACK_IMPORTED_MODULE_18__.AccountComponent,
    resolve: [_account_account_component__WEBPACK_IMPORTED_MODULE_18__.AccountResolver],
    children: [{
      path: '',
      redirectTo: 'profile',
      pathMatch: 'full'
    }, {
      path: 'profile',
      component: _account_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__.ProfileComponent,
      resolve: []
    }, {
      path: 'authentication',
      component: _account_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_20__.AuthenticationComponent,
      resolve: []
    }, {
      path: 'wallet',
      component: _account_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_21__.WalletComponent,
      resolve: [_account_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_21__.WalletLedgerResolver]
    }, {
      path: 'friends',
      component: _account_friends_friends_component__WEBPACK_IMPORTED_MODULE_22__.FriendsComponent,
      resolve: [_account_friends_friends_component__WEBPACK_IMPORTED_MODULE_22__.FriendsResolver]
    }, {
      path: 'groups',
      component: _account_groups_groups_component__WEBPACK_IMPORTED_MODULE_23__.GroupsComponent,
      resolve: [_account_groups_groups_component__WEBPACK_IMPORTED_MODULE_23__.GroupsResolver]
    }, {
      path: 'purchases',
      component: _account_purchases_purchases_component__WEBPACK_IMPORTED_MODULE_24__.PurchasesComponent,
      resolve: [_account_purchases_purchases_component__WEBPACK_IMPORTED_MODULE_24__.PurchasesResolver]
    }, {
      path: 'subscriptions',
      component: _account_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_25__.SubscriptionsComponent,
      resolve: [_account_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_25__.SubscriptionsResolver]
    }]
  }, {
    path: 'apiexplorer',
    component: _apiexplorer_apiexplorer_component__WEBPACK_IMPORTED_MODULE_26__.ApiExplorerComponent,
    resolve: [_apiexplorer_apiexplorer_component__WEBPACK_IMPORTED_MODULE_26__.ApiExplorerEndpointsResolver]
  }, {
    path: 'chat',
    component: _channels_chat_list_component__WEBPACK_IMPORTED_MODULE_27__.ChatListComponent,
    resolve: [_channels_chat_list_component__WEBPACK_IMPORTED_MODULE_27__.ChatSearchResolver]
  }, {
    path: 'purchases',
    component: _purchases_purchases_list_component__WEBPACK_IMPORTED_MODULE_28__.PurchasesListComponent,
    resolve: [_account_purchases_purchases_component__WEBPACK_IMPORTED_MODULE_24__.PurchasesResolver]
  }, {
    path: 'subscriptions',
    component: _subscriptions_subscriptions_list_component__WEBPACK_IMPORTED_MODULE_29__.SubscriptionsListComponent,
    resolve: [_account_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_25__.SubscriptionsResolver]
  }, {
    path: 'settings/mfa',
    component: _mfa_setup_mfa_setup_component__WEBPACK_IMPORTED_MODULE_30__.MfaSetupComponent,
    resolve: []
  }]
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_31__.LoginComponent,
  canActivate: [_login_login_component__WEBPACK_IMPORTED_MODULE_31__.LoginGuard],
  children: [{
    path: 'mfa',
    component: _mfa_setup_mfa_setup_component__WEBPACK_IMPORTED_MODULE_30__.MfaSetupComponent,
    resolve: []
  }]
},
// Fallback redirect.
{
  path: '**',
  redirectTo: ''
}];
class AppRoutingModule {
  static ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_33__.RouterModule.forRoot(routes, {
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_33__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_33__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_33__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  static ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _window_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./window.provider */ 1866);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swimlane/ngx-charts */ 9575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globals */ 7503);
/* harmony import */ var ngx_segment_analytics__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-segment-analytics */ 7667);
/* harmony import */ var _session_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./session.interceptor */ 1463);
/* harmony import */ var _authentication_error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication-error.interceptor */ 9440);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./base/base.component */ 6441);
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./status/status.component */ 4278);
/* harmony import */ var _config_config_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./config/config.component */ 1497);
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./console.service */ 3713);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./users/users.component */ 1846);
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-file-drop */ 157);
/* harmony import */ var _runtime_runtime_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./runtime/runtime.component */ 1815);
/* harmony import */ var _storage_storage_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./storage/storage.component */ 6963);
/* harmony import */ var _storage_object_storage_object_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./storage-object/storage-object.component */ 4329);
/* harmony import */ var _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./accounts/accounts.component */ 5246);
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./account/account.component */ 6885);
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./groups/groups.component */ 3479);
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./group/group.component */ 9303);
/* harmony import */ var _account_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./account/profile/profile.component */ 1102);
/* harmony import */ var _group_details_groupDetailsComponent__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./group/details/groupDetailsComponent */ 6557);
/* harmony import */ var _account_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./account/authentication/authentication.component */ 2090);
/* harmony import */ var _account_friends_friends_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./account/friends/friends.component */ 6819);
/* harmony import */ var _account_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./account/wallet/wallet.component */ 7472);
/* harmony import */ var _account_groups_groups_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./account/groups/groups.component */ 3399);
/* harmony import */ var _group_members_groupMembers_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./group/members/groupMembers.component */ 6162);
/* harmony import */ var _channels_chat_list_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./channels/chat-list.component */ 6118);
/* harmony import */ var _purchases_purchases_list_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./purchases/purchases-list.component */ 7992);
/* harmony import */ var _matches_matches_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./matches/matches.component */ 115);
/* harmony import */ var _leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./leaderboards/leaderboards.component */ 1314);
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ 7354);
/* harmony import */ var _leaderboard_details_details_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./leaderboard/details/details.component */ 9680);
/* harmony import */ var _leaderboard_records_records_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./leaderboard/records/records.component */ 3104);
/* harmony import */ var _apiexplorer_apiexplorer_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./apiexplorer/apiexplorer.component */ 8288);
/* harmony import */ var _account_purchases_purchases_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./account/purchases/purchases.component */ 4102);
/* harmony import */ var _account_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./account/subscriptions/subscriptions.component */ 7305);
/* harmony import */ var _shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./shared/delete-confirm-dialog/delete-confirm-dialog.component */ 3110);
/* harmony import */ var _subscriptions_subscriptions_list_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./subscriptions/subscriptions-list.component */ 1649);
/* harmony import */ var _mfa_setup_mfa_setup_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./mfa-setup/mfa-setup.component */ 7229);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularx-qrcode */ 9180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
// Copyright 2020 The Nakama Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.





















































class AppModule {
  static ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [_window_provider__WEBPACK_IMPORTED_MODULE_3__.WINDOW_PROVIDERS, _globals__WEBPACK_IMPORTED_MODULE_4__.Globals, {
      provide: _console_service__WEBPACK_IMPORTED_MODULE_5__.ConfigParams,
      useValue: {
        host: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? document.location.origin : _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl,
        timeout: 15000
      }
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
      useClass: _session_interceptor__WEBPACK_IMPORTED_MODULE_7__.SessionInterceptor,
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
      useClass: _authentication_error_interceptor__WEBPACK_IMPORTED_MODULE_8__.AuthenticationErrorInterceptor,
      multi: true
    }],
    imports: [ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__.NgxFileDropModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_10__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__.NgxChartsModule, ngx_segment_analytics__WEBPACK_IMPORTED_MODULE_15__.SegmentModule.forRoot({
      apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.segment_write_key,
      debug: !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production,
      loadOnInitialization: !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nt
    }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.NoopAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule, angularx_qrcode__WEBPACK_IMPORTED_MODULE_18__.QRCodeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _status_status_component__WEBPACK_IMPORTED_MODULE_19__.SortNumbersPipe, _base_base_component__WEBPACK_IMPORTED_MODULE_20__.BaseComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_21__.LoginComponent, _status_status_component__WEBPACK_IMPORTED_MODULE_19__.StatusComponent, _config_config_component__WEBPACK_IMPORTED_MODULE_22__.ConfigComponent, _users_users_component__WEBPACK_IMPORTED_MODULE_23__.UsersComponent, _runtime_runtime_component__WEBPACK_IMPORTED_MODULE_24__.RuntimeComponent, _storage_storage_component__WEBPACK_IMPORTED_MODULE_25__.StorageListComponent, _storage_object_storage_object_component__WEBPACK_IMPORTED_MODULE_26__.StorageObjectComponent, _accounts_accounts_component__WEBPACK_IMPORTED_MODULE_27__.AccountListComponent, _account_account_component__WEBPACK_IMPORTED_MODULE_28__.AccountComponent, _account_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__.ProfileComponent, _account_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_30__.AuthenticationComponent, _account_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_31__.WalletComponent, _account_friends_friends_component__WEBPACK_IMPORTED_MODULE_32__.FriendsComponent, _account_groups_groups_component__WEBPACK_IMPORTED_MODULE_33__.GroupsComponent, _group_group_component__WEBPACK_IMPORTED_MODULE_34__.GroupComponent, _group_details_groupDetailsComponent__WEBPACK_IMPORTED_MODULE_35__.GroupDetailsComponent, _group_members_groupMembers_component__WEBPACK_IMPORTED_MODULE_36__.GroupMembersComponent, _matches_matches_component__WEBPACK_IMPORTED_MODULE_37__.MatchesComponent, _leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_38__.LeaderboardsComponent, _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_39__.LeaderboardComponent, _leaderboard_details_details_component__WEBPACK_IMPORTED_MODULE_40__.LeaderboardDetailsComponent, _leaderboard_records_records_component__WEBPACK_IMPORTED_MODULE_41__.LeaderboardRecordsComponent, _apiexplorer_apiexplorer_component__WEBPACK_IMPORTED_MODULE_42__.ApiExplorerComponent, _account_purchases_purchases_component__WEBPACK_IMPORTED_MODULE_43__.PurchasesComponent, _account_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_44__.SubscriptionsComponent, _groups_groups_component__WEBPACK_IMPORTED_MODULE_45__.GroupListComponent, _channels_chat_list_component__WEBPACK_IMPORTED_MODULE_46__.ChatListComponent, _shared_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_47__.DeleteConfirmDialogComponent, _purchases_purchases_list_component__WEBPACK_IMPORTED_MODULE_48__.PurchasesListComponent, _subscriptions_subscriptions_list_component__WEBPACK_IMPORTED_MODULE_49__.SubscriptionsListComponent, _mfa_setup_mfa_setup_component__WEBPACK_IMPORTED_MODULE_50__.MfaSetupComponent],
    imports: [ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__.NgxFileDropModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_10__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__.NgxChartsModule, ngx_segment_analytics__WEBPACK_IMPORTED_MODULE_15__.SegmentModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.NoopAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectModule, angularx_qrcode__WEBPACK_IMPORTED_MODULE_18__.QRCodeModule]
  });
})();

/***/ }),

/***/ 9440:
/*!*****************************************************!*\
  !*** ./src/app/authentication-error.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationErrorInterceptor": () => (/* binding */ AuthenticationErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ 1188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





class AuthenticationErrorInterceptor {
  authenticationService;
  router;
  constructor(authenticationService, router) {
    this.authenticationService = authenticationService;
    this.router = router;
  }
  intercept(req, next) {
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(err => {
      if (err.status === 401) {
        this.authenticationService.logout().subscribe({
          next: () => {
            const stateUrl = this.router.routerState.snapshot.url;
            const _ = this.router.navigate(['/login'], {
              queryParams: {
                next: stateUrl
              }
            });
          }
        });
      } else if (err.status === 403) {
        // Required for mfa login.
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(err);
      } else if (err.status >= 500) {
        console.log(`${err.status}: + ${err.error.message || err.statusText}`);
      }
      const error = err.error.message || err.statusText;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error);
    }));
  }
  static ɵfac = function AuthenticationErrorInterceptor_Factory(t) {
    return new (t || AuthenticationErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuthenticationErrorInterceptor,
    factory: AuthenticationErrorInterceptor.ɵfac
  });
}

/***/ }),

/***/ 1225:
/*!*****************************************!*\
  !*** ./src/app/authentication.guard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationGuard": () => (/* binding */ AuthenticationGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ 1188);



class AuthenticationGuard {
  router;
  authService;
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  canActivate(next, state) {
    const session = this.authService.session;
    if (!session) {
      const _ = this.router.navigate(['/login'], {
        queryParams: {
          next: state.url
        }
      });
      return false;
    }
    if (session && this.authService.mfaRequired) {
      // If mfa claim is true the user is mandated to set it up before proceeding.
      const _ = this.router.navigate(['/login/mfa'], {
        queryParams: {
          next: state.url
        }
      });
      return false;
    }
    return true;
  }
  canActivateChild(route, state) {
    return this.canActivate(route, state);
  }
  static ɵfac = function AuthenticationGuard_Factory(t) {
    return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AuthenticationGuard,
    factory: AuthenticationGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1188:
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console.service */ 3713);
/* harmony import */ var _window_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./window.provider */ 1866);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_segment_analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-segment-analytics */ 7667);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);









const SESSION_LOCALSTORAGE_KEY = 'currentSession';
class AuthenticationService {
  window;
  segment;
  http;
  consoleService;
  config;
  currentSessionSubject;
  currentSession;
  constructor(window, segment, http, consoleService, config) {
    this.window = window;
    this.segment = segment;
    this.http = http;
    this.consoleService = consoleService;
    this.config = config;
    const restoredSession = JSON.parse(localStorage.getItem(SESSION_LOCALSTORAGE_KEY));
    if (restoredSession && !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nt) {
      this.segmentIdentify(restoredSession);
    }
    this.currentSessionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(restoredSession);
    this.currentSession = this.currentSessionSubject.asObservable();
  }
  get session() {
    return this.currentSessionSubject.getValue();
  }
  get username() {
    const claims = this.claims;
    return claims.usn;
  }
  get sessionRole() {
    const claims = this.claims;
    const role = claims.rol;
    switch (role) {
      case 1:
        return _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_ADMIN;
      case 2:
        return _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_DEVELOPER;
      case 3:
        return _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_MAINTAINER;
      case 4:
        return _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_READONLY;
      default:
        return _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_UNKNOWN;
    }
  }
  get claims() {
    const token = this.currentSessionSubject.getValue().token;
    return this.decodeJWT(token);
  }
  get mfa() {
    const mfaToken = this.currentSessionSubject.getValue().mfa_code;
    if (!mfaToken) {
      return null;
    }
    return this.decodeJWT(mfaToken);
  }
  get mfaRequired() {
    return this?.mfa?.mfa_required || false;
  }
  // Use custom login function implementation instead of ConsoleService to allow exposing the http response.
  login(username, password, code) {
    const req = {
      username,
      password,
      mfa: code
    };
    // tslint:disable-next-line:max-line-length
    return this.http.post(this.config.host + '/v2/console/authenticate', req, {
      observe: 'response'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {
      localStorage.setItem(SESSION_LOCALSTORAGE_KEY, JSON.stringify(response.body));
      this.currentSessionSubject.next(response.body);
      if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nt) {
        this.segmentIdentify(response.body);
      }
    }));
  }
  logout() {
    if (!this.currentSessionSubject.getValue()) {
      return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
    }
    return this.consoleService.authenticateLogout('', {
      token: this.currentSessionSubject.getValue()?.token
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      localStorage.removeItem(SESSION_LOCALSTORAGE_KEY);
      this.currentSessionSubject.next(null);
    }));
  }
  decodeJWT(token) {
    const {
      1: base64Raw
    } = token.split('.');
    const base64 = base64Raw.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(c => {
      return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
    }).join(''));
    return JSON.parse(jsonPayload);
  }
  mfaSet(code) {
    const payload = {
      mfa: this.session.mfa_code,
      code
    };
    return this.consoleService.authenticateMFASetup('', payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      // MFA is set so no need to require it anymore.
      this.session.mfa_code = null;
      localStorage.setItem(SESSION_LOCALSTORAGE_KEY, JSON.stringify(this.session));
      this.currentSessionSubject.next(this.session);
    }));
  }
  segmentIdentify(session) {
    const token = session.token;
    const claims = this.decodeJWT(token);
    // null user ID to ensure we use Anonymous IDs
    const _ = this.segment.identify(null, {
      username: claims.usn,
      email: claims.ema,
      cookie: claims.cki
    });
  }
  static ɵfac = function AuthenticationService_Factory(t) {
    return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_window_provider__WEBPACK_IMPORTED_MODULE_6__.WINDOW), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](ngx_segment_analytics__WEBPACK_IMPORTED_MODULE_7__.SegmentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_2__.ConfigParams));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: AuthenticationService,
    factory: AuthenticationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6441:
/*!****************************************!*\
  !*** ./src/app/base/base.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent),
/* harmony export */   "PageviewGuard": () => (/* binding */ PageviewGuard)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 896);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_segment_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-segment-analytics */ 7667);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../authentication.service */ 1188);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../globals */ 7503);











function BaseComponent_ng_template_10_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const r_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", r_r6.navItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", r_r6.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "/static/svg/", r_r6.icon, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r6.label);
  }
}
function BaseComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BaseComponent_ng_template_10_ng_container_0_Template, 5, 4, "ng-container", 16);
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.getSessionRole() <= r_r6.minRole);
  }
}
const _c0 = function () {
  return ["/settings/mfa"];
};
function BaseComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "MFA Setup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", "mfasetup");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
  }
}
function BaseComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26)(1, "h2", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "An error has occurred!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Please refresh the page to try again.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.error);
  }
}
function BaseComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function BaseComponent_router_outlet_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
  }
}
const _c1 = function () {
  return ["/"];
};
const _c2 = function () {
  return ["/login"];
};
class BaseComponent {
  route;
  router;
  segment;
  authService;
  UserRole = _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole;
  routerSub;
  segmentRouterSub;
  loading = true;
  error = '';
  routes = [{
    navItem: 'status',
    routerLink: ['/status'],
    label: 'Status',
    minRole: _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_READONLY,
    icon: 'status'
  }, {
    navItem: 'users',
    routerLink: ['/users'],
    label: 'User Management',
    minRole: _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_ADMIN,
    icon: 'user-management'
  }, {
    navItem: 'config',
    routerLink: ['/config'],
    label: 'Configuration',
    minRole: _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_DEVELOPER,
    icon: 'configuration'
  }, {
    navItem: 'modules',
    routerLink: ['/modules'],
    label: 'Runtime Modules',
    minRole: _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_DEVELOPER,
    separator: true,
    icon: 'runtime-modules'
  }, {
    navItem: 'accounts',
    routerLink: ['/accounts'],
    label: 'Accounts',
    minRole: _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_READONLY,
    icon: 'accounts'
  }, {
    navItem: 'groups',
    routerLink: ['/groups'],
    label: 'Groups',
    minRole: _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_READONLY,
    icon: 'groups'
  }, {
    navItem: 'storage',
    routerLink: ['/storage'],
    label: 'Storage',
    minRole: _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_READONLY,
    icon: 'storage'
  }, {
    navItem: 'leaderboards',
    routerLink: ['/leaderboards'],
    label: 'Leaderboards',
    minRole: _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_READONLY,
    icon: 'leaderboard'
  }, {
    navItem: 'chat',
    routerLink: ['/chat'],
    label: 'Chat Messages',
    minRole: _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_READONLY,
    icon: 'chat'
  }, {
    navItem: 'purchases',
    routerLink: ['/purchases'],
    label: 'Purchases',
    minRole: _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_READONLY,
    icon: 'purchases'
  }, {
    navItem: 'subscriptions',
    routerLink: ['/subscriptions'],
    label: 'Subscriptions',
    minRole: _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_READONLY,
    icon: 'subscriptions'
  }, {
    navItem: 'matches',
    routerLink: ['/matches'],
    label: 'Matches',
    minRole: _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_READONLY,
    icon: 'running-matches'
  }, {
    navItem: 'apiexplorer',
    routerLink: ['/apiexplorer'],
    label: 'API Explorer',
    minRole: _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_DEVELOPER,
    icon: 'api-explorer'
  }];
  constructor(route, router, segment, authService) {
    this.route = route;
    this.router = router;
    this.segment = segment;
    this.authService = authService;
    this.loading = false;
    // Buffer router events every 2 seconds, to reduce loading screen jitter
    this.routerSub = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.bufferTime)(2000)).subscribe(events => {
      if (events.length === 0) {
        return;
      }
      const event = events[events.length - 1];
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationStart) {
        this.loading = true;
      }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
        this.loading = false;
      }
      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationCancel) {
        this.loading = false;
      }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationError) {
        this.loading = false;
        this.error = event.error;
      }
    });
    this.segmentRouterSub = router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)((previous, current) => {
      if (current instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
        return previous.url === current.url;
      }
      return true;
    })).subscribe(nav => {
      if (nav && !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nt) {
        segment.page(nav.url);
      }
    });
  }
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.error = data.error ? data.error : '';
    });
  }
  getSessionRole() {
    return this.authService.sessionRole;
  }
  getUsername() {
    return this.authService.username;
  }
  isMfaEnabled() {
    return !this.authService.session?.mfa_code;
  }
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
  ngOnDestroy() {
    this.segmentRouterSub.unsubscribe();
    this.routerSub.unsubscribe();
  }
  onSidebarNavChange(changeEvent) {}
  static ɵfac = function BaseComponent_Factory(t) {
    return new (t || BaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_segment_analytics__WEBPACK_IMPORTED_MODULE_6__.SegmentService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BaseComponent,
    selectors: [["ng-component"]],
    decls: 33,
    vars: 12,
    consts: [[1, "container-fluid"], [1, "row"], ["ngbNav", "", 1, "col-md-2", "d-none", "d-md-block", "sidebar", "position-fixed", "px-0", 3, "navChange"], ["sidenav", "ngbNav"], [1, "flex-column", "text-uppercase"], [3, "ngbNavItem"], [3, "routerLink"], ["src", "/static/svg/logo.svg", "alt", "", "width", "175", "height", "", 1, "logo-full", "mx-3", "mt-3", "mb-1"], ["src", "/static/svg/logo-icon.svg", "alt", "", "width", "32", "height", "", 1, "logo-icon", "mx-3", "mt-3", "mb-1"], ["ngFor", "", 3, "ngForOf"], ["href", "https://heroiclabs.com/docs/nakama/getting-started/?utm_source=NOSS%20Secure&utm_medium=Banner&utm_campaign=NOSS%20Documentation%20Secure", "target", "_blank", 1, "nav-link"], ["src", "/static/svg/docs.svg", "alt", "", "width", "24", "height", "", 1, "link-icon", "mr-1"], [1, "link-text"], ["href", "https://forum.heroiclabs.com", "target", "_blank", 1, "nav-link"], ["src", "/static/svg/forum.svg", "alt", "", "width", "24", "height", "", 1, "link-icon", "mr-1"], [1, "logged-in-as", "nav-link", "disabled"], [3, "ngbNavItem", 4, "ngIf"], ["ngbNavLink", "", "routerLinkActive", "active", 3, "routerLink", "click"], ["src", "/static/svg/log-out.svg", "alt", "", "width", "24", "height", "", 1, "mr-1"], ["role", "main", 1, "ml-sm-auto", "col-md-10", "col-lg-10", "main-extended", "px-4", "py-4"], ["class", "mx-auto", 4, "ngIf"], ["class", "loading mx-auto", 4, "ngIf"], [4, "ngIf"], ["ngbNavLink", "", "routerLinkActive", "active", 3, "routerLink"], ["alt", "", "width", "24", "height", "", 1, "link-icon", "mr-1", 3, "src"], ["src", "/static/svg/configuration.svg", "alt", "", "width", "24", "height", "", 1, "mr-1"], [1, "mx-auto"], [1, "pb-2"], ["src", "/static/svg/red-triangle.svg", 1, "mr-2", 2, "width", "1em", "height", "1em"], [1, "mr-2", "d-inline", "font-weight-bold"], [1, "loading", "mx-auto"], ["src", "/static/spinner.svg", 1, "p-1", "loading"]],
    template: function BaseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nav", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("navChange", function BaseComponent_Template_nav_navChange_2_listener($event) {
          return ctx.onSidebarNavChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7)(8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, BaseComponent_ng_template_10_Template, 1, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Forum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, BaseComponent_ng_container_23_Template, 5, 3, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](24, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BaseComponent_Template_a_click_25_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "main", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, BaseComponent_div_30_Template, 8, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, BaseComponent_div_31_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, BaseComponent_router_outlet_32_Template, 1, 0, "router-outlet", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", "logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.routes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Logged in as: ", ctx.getUsername(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMfaEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.error && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.error && !ctx.loading);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavLinkBase],
    styles: [".nav-link.no-active[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n\n.nav-item[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-top-color: slategrey;\n}\n\n\n.sidebar[_ngcontent-%COMP%] {\n  background-color: #333564;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100; \n  font-family: \"Montserrat\", sans-serif;\n  overflow-y: auto; \n}\n.sidebar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  \n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 12px;\n  letter-spacing: 0.1em;\n  opacity: 0.6;\n  font-weight: 500 !important;\n}\n.sidebar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background-color: rgba(225, 225, 225, 0.1);\n}\n.sidebar[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-color: #fff;\n  opacity: 0.2;\n}\n\n.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: #A69BFF;\n}\n\n.navbar-collapse[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  text-transform: capitalize;\n}\n\n.logo-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.link-text[_ngcontent-%COMP%] {\n  padding-left: 4px;\n}\n\n@media screen and (max-width: 1200px) {\n  .main-extended[_ngcontent-%COMP%] {\n    width: 94.333333% !important;\n    max-width: 94.333333% !important;\n    flex: 0 0 94.333333% !important;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    min-width: 65px !important;\n    width: 5.66% !important;\n    max-width: 5.66% !important;\n  }\n  .sidebar[_ngcontent-%COMP%]   .logo-full[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sidebar[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .sidebar[_ngcontent-%COMP%]   .link-icon[_ngcontent-%COMP%] {\n    width: 30px;\n    color: #fff;\n  }\n  .sidebar[_ngcontent-%COMP%]   .link-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sidebar[_ngcontent-%COMP%]   .logged-in-as[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmFzZS9iYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQUE7QUFNQTtFQUNFLHdDQUFBO0FBSkY7O0FBT0E7RUFDRSwyQkFBQTtBQUpGOztBQU9BLGdCQUFBO0FBQ0E7RUFDRSx5QkFaZ0I7RUFhaEIsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUEsRUFBQSwwQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUEsRUFBQSw2REFBQTtBQUpGO0FBTUU7RUFDRSx5QkFBQTtBQUpKO0FBT0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBTEo7QUFPSTtFQUNFLFVBQUE7RUFDQSwwQ0FBQTtBQUxOO0FBU0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFQSjs7QUFXQTtFQUNFLFVBQUE7QUFSRjs7QUFXQTtFQUNFLFVBQUE7RUFDQSxjQXBEbUI7QUE0Q3JCOztBQVdBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtBQVJGOztBQVdBO0VBQ0UsaUJBQUE7QUFSRjs7QUFXQTtFQUNFO0lBQ0UsNEJBQUE7SUFDQSxnQ0FBQTtJQUNBLCtCQUFBO0VBUkY7RUFVQTtJQUNFLDBCQUFBO0lBQ0EsdUJBQUE7SUFDQSwyQkFBQTtFQVJGO0VBVUk7SUFDRSxhQUFBO0VBUk47RUFXSTtJQUNFLGNBQUE7RUFUTjtFQVlJO0lBQ0UsV0FBQTtJQUNBLFdBQUE7RUFWTjtFQWFJO0lBQ0UsYUFBQTtFQVhOO0VBY0k7SUFDRSxhQUFBO0VBWk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbG9ycyAqL1xyXG4kYnJhbmQtcHVycGxlOiAjNzY2OEVEO1xyXG4kYnJhbmQtbGlnaHQtcHVycGxlOiAjQTY5QkZGO1xyXG4kYnJhbmQtZ3JleTogI0ZBRkFGQztcclxuJGJyYW5kLWRhcmstYmx1ZTogIzMzMzU2NDtcclxuXHJcbi5uYXYtbGluay5uby1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtaXRlbSBociB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogc2xhdGVncmV5O1xyXG59XHJcblxyXG4vKiBOYXYgc2lkZWJhciAqL1xyXG4uc2lkZWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJyYW5kLWRhcmstYmx1ZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDsgLyogQmVoaW5kIHRoZSBuYXYgaGVhZGVyICovXHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xyXG5cclxuICAubmF2LWl0ZW0ge1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Ki9cclxuICB9XHJcblxyXG4gIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsMjI1LDIyNSwwLjEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaHIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBjb2xvcjogJGJyYW5kLWxpZ2h0LXB1cnBsZTtcclxufVxyXG5cclxuLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5sb2dvLWljb24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5saW5rLXRleHQge1xyXG4gIHBhZGRpbmctbGVmdDogNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAubWFpbi1leHRlbmRlZCB7XHJcbiAgICB3aWR0aDogOTQuMzMzMzMzJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA5NC4zMzMzMzMlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAwIDAgOTQuMzMzMzMzJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2lkZWJhciB7XHJcbiAgICBtaW4td2lkdGg6IDY1cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA1LjY2JSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA1LjY2JSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgLmxvZ28tZnVsbCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvZ28taWNvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5saW5rLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubGluay10ZXh0IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9nZ2VkLWluLWFzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgLm5hdi1saW5rIHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
class PageviewGuard {
  authService;
  router;
  globals;
  constructor(authService, router, globals) {
    this.authService = authService;
    this.router = router;
    this.globals = globals;
  }
  canActivate(next, state) {
    return true;
  }
  canActivateChild(next, state) {
    const role = this.globals.restrictedPages.get(next.url[0].path);
    if (role !== null && role < this.authService.sessionRole) {
      // if the page has restriction, and role doesn't match it, navigate to home
      const _ = this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  static ɵfac = function PageviewGuard_Factory(t) {
    return new (t || PageviewGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_globals__WEBPACK_IMPORTED_MODULE_10__.Globals));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: PageviewGuard,
    factory: PageviewGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6118:
/*!*************************************************!*\
  !*** ./src/app/channels/chat-list.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatListComponent": () => (/* binding */ ChatListComponent),
/* harmony export */   "ChatSearchResolver": () => (/* binding */ ChatSearchResolver)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ 1188);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/delete-confirm.service */ 8406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);












function ChatListComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Filter by type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ChatListComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.activeFilter);
  }
}
function ChatListComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_button_7_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const f_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.activeFilter = f_r13);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const f_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r13);
  }
}
function ChatListComponent_h6_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Showing results for chat room label: ", ctx_r3.f1.label.value, "");
  }
}
const _c0 = function (a1) {
  return ["/groups", a1];
};
function ChatListComponent_h6_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Showing results for group ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r4.route.snapshot.queryParamMap.get("group_id")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.f2.group_id.value);
  }
}
const _c1 = function (a1) {
  return ["/accounts", a1];
};
function ChatListComponent_h6_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Showing results for user IDs: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r5.route.snapshot.queryParamMap.get("user_id_one")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.f3.user_id_one.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r5.route.snapshot.queryParamMap.get("user_id_two")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.f3.user_id_two.value);
  }
}
function ChatListComponent_ngb_alert_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error when querying messages: ", ctx_r6.error, "");
  }
}
function ChatListComponent_th_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ChatListComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No messages found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r8.deleteAllowed() ? 6 : 5);
  }
}
function ChatListComponent_ng_template_63_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 54);
  }
}
function ChatListComponent_ng_template_63_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 55);
  }
}
function ChatListComponent_ng_template_63_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
  }
}
function ChatListComponent_ng_template_63_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 56)(1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_ng_template_63_td_15_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const i_r17 = ctx_r24.index;
      const item_r16 = ctx_r24.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.deleteMessage($event, i_r17, item_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function ChatListComponent_ng_template_63_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 58)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r22.deleteAllowed() ? 6 : 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r16.content, " ");
  }
}
function ChatListComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_ng_template_63_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const item_r16 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.viewAccount(item_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_ng_template_63_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const item_r16 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.viewAccount(item_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 48)(8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_ng_template_63_Template_div_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const i_r17 = restoredCtx.index;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r30.messageStatesOpen[i_r17] = !ctx_r30.messageStatesOpen[i_r17]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChatListComponent_ng_template_63_div_9_Template, 1, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChatListComponent_ng_template_63_div_10_Template, 1, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChatListComponent_ng_template_63_td_14_Template, 1, 0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChatListComponent_ng_template_63_td_15_Template, 3, 0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChatListComponent_ng_template_63_tr_16_Template, 3, 2, "tr", 53);
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r16.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r16.sender_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r16.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.messageStatesOpen[i_r17]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.messageStatesOpen[i_r17]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r16.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r16.create_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.deleteAllowed() && item_r16.sender_id === ctx_r9.systemUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.deleteAllowed() && item_r16.sender_id !== ctx_r9.systemUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.messageStatesOpen[i_r17]);
  }
}
function ChatListComponent_ngb_alert_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Failed to delete data.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.deleteError);
  }
}
function ChatListComponent_ngb_alert_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ChatListComponent_ngb_alert_65_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r31.deleteSuccess = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r11.totalDeleted, " messages ", ctx_r11.totalDeleted > 0 ? "successfully" : "", " deleted.");
  }
}
function ChatListComponent_button_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_button_67_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r33.deleteData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r12.deleting);
  }
}
class ChatListComponent {
  route;
  router;
  consoleService;
  authService;
  formBuilder;
  modalService;
  deleteConfirmService;
  systemUserId = '00000000-0000-0000-0000-000000000000';
  error = '';
  messages = [];
  nextCursor = '';
  searchForm1;
  searchForm2;
  searchForm3;
  type;
  confirmDeleteForm;
  deleteError = '';
  deleteSuccess = false;
  deleting = false;
  totalDeleted = 0;
  activeFilter = '';
  filters = ['Chat Room', 'Group Chat', 'Direct Chat'];
  messageStatesOpen = [];
  constructor(route, router, consoleService, authService, formBuilder, modalService, deleteConfirmService) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.modalService = modalService;
    this.deleteConfirmService = deleteConfirmService;
    this.searchForm1 = this.formBuilder.group({
      label: ''
    });
    this.searchForm2 = this.formBuilder.group({
      group_id: ''
    });
    this.searchForm3 = this.formBuilder.group({
      user_id_one: '',
      user_id_two: ''
    });
    this.confirmDeleteForm = this.formBuilder.group({
      delete: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('DELETE')])],
      numberValueControl: {
        title: 'Choose how many days to retain:',
        id: 'days'
      },
      days: 30
    });
  }
  ngOnInit() {
    const qp = this.route.snapshot.queryParamMap;
    this.f1.label.setValue(qp.get('label'));
    this.f2.group_id.setValue(qp.get('group_id'));
    this.f3.user_id_one.setValue(qp.get('user_id_one'));
    this.f3.user_id_two.setValue(qp.get('user_id_two'));
    this.nextCursor = qp.get('cursor');
    const qType = qp.get('type');
    this.type = Number(qType);
    this.route.data.subscribe(d => {
      if (d) {
        if (d[0]) {
          this.error = '';
          this.messageStatesOpen = [];
          this.messages.length = 0;
          this.messages.push(...d[0].messages);
          this.nextCursor = d[0].next_cursor;
        }
        if (d.error) {
          this.error = d.error;
        }
      }
    }, err => {
      this.error = err;
    });
    if (qType === null) {
      this.type = 2;
      this.activeFilter = this.filters[0];
    } else {
      if (this.type === 2 || this.type === 3 || this.type === 4) {
        this.activeFilter = this.filters[this.type - 2];
      } else {
        this.error = 'Invalid type.';
      }
    }
  }
  search(state) {
    let cursor = '';
    switch (state) {
      case 0:
        cursor = '';
        break;
      case 1:
        cursor = this.nextCursor;
        break;
    }
    this.updateMessages(this.type, this.f1.label.value, this.f2.group_id.value, this.f3.user_id_one.value, this.f3.user_id_two.value, cursor);
  }
  // tslint:disable-next-line:variable-name
  updateMessages(type, label, group_id, user_id_one, user_id_two, cursor) {
    switch (type) {
      case 2:
        this.consoleService.listChannelMessages('', type.toString(), label, null, null, null, encodeURIComponent(cursor)).subscribe(d => this.postData(d, cursor), err => {
          this.error = err;
        });
        break;
      case 3:
        this.consoleService.listChannelMessages('', type.toString(), null, group_id, null, null, encodeURIComponent(cursor)).subscribe(d => this.postData(d, cursor), err => {
          this.error = err;
        });
        break;
      case 4:
        this.consoleService.listChannelMessages('', type.toString(), null, null, user_id_one, user_id_two, encodeURIComponent(cursor)).subscribe(d => this.postData(d, cursor), err => {
          this.error = err;
        });
        break;
    }
  }
  postData(d, cursor) {
    this.error = '';
    this.messageStatesOpen = [];
    this.messages.length = 0;
    this.messages.push(...d.messages);
    this.nextCursor = d.next_cursor;
    let params;
    switch (this.type) {
      case 2:
        params = {
          type: this.type,
          label: this.f1.label.value,
          cursor
        };
        break;
      case 3:
        params = {
          type: this.type,
          group_id: this.f2.group_id.value,
          cursor
        };
        break;
      case 4:
        params = {
          type: this.type,
          user_id_one: this.f3.user_id_one.value,
          user_id_two: this.f3.user_id_two.value,
          cursor
        };
        break;
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params
    });
  }
  deleteMessage(event, i, o) {
    this.deleteConfirmService.openDeleteConfirmModal(() => {
      event.target.disabled = true;
      event.preventDefault();
      this.error = '';
      this.consoleService.deleteChannelMessages('', null, [o.message_id]).subscribe(() => {
        this.error = '';
        this.messageStatesOpen.splice(i, 1);
        this.messages.splice(i, 1);
      }, err => {
        this.error = err;
      });
    });
  }
  deleteAllowed() {
    // Maintainers, admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_MAINTAINER;
  }
  deleteMessagesAllowed() {
    // Maintainers, admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_MAINTAINER;
  }
  get f1() {
    return this.searchForm1.controls;
  }
  get f2() {
    return this.searchForm2.controls;
  }
  get f3() {
    return this.searchForm3.controls;
  }
  get f() {
    return this.confirmDeleteForm.controls;
  }
  deleteData() {
    this.deleteConfirmService.openDeleteConfirmModal(formValue => {
      this.deleteError = '';
      this.deleting = true;
      const threshold = new Date();
      const retainDays = Number(formValue.days);
      threshold.setDate(threshold.getDate() - retainDays);
      this.consoleService.deleteChannelMessages('', threshold.toISOString(), null).subscribe(total => {
        this.totalDeleted = Number(total.total);
        this.deleting = false;
        this.deleteError = '';
        this.deleteSuccess = true;
        const qp = this.route.snapshot.queryParamMap;
        const type = qp.get('type');
        let label = qp.get('label');
        if (!label) {
          label = '0';
        }
        const groupId = qp.get('group_id');
        const userIdOne = qp.get('user_id_one');
        const userIdTwo = qp.get('user_id_two');
        let cursor = qp.get('cursor');
        if (!cursor) {
          cursor = '';
        }
        if (type) {
          this.updateMessages(Number(type), label, groupId, userIdOne, userIdTwo, cursor);
        }
      }, err => {
        this.deleting = false;
        this.deleteError = err;
      });
    }, this.confirmDeleteForm, 'Delete messages', 'Are you sure you want to delete all messages before retain days?');
  }
  viewAccount(msg) {
    this.router.navigate(['/accounts', msg.sender_id], {
      relativeTo: this.route
    });
  }
  static ɵfac = function ChatListComponent_Factory(t) {
    return new (t || ChatListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_6__.DeleteConfirmService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ChatListComponent,
    selectors: [["ng-component"]],
    decls: 68,
    vars: 21,
    consts: [[1, "pb-1"], ["ngbDropdown", "", 1, "btn-group", "mb-1"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-secondary"], [4, "ngIf"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["type", "button", "ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "row", "no-gutters", "mb-4"], [1, "col", "d-flex", "justify-content-between", "no-gutters", "align-items-center"], [1, "col-md-9"], [3, "hidden", "formGroup"], [1, "input-group"], ["type", "text", "formControlName", "label", "placeholder", "Search by chat room label", 1, "form-control", "border-right-0"], [1, "input-group-append"], [1, "btn-group"], ["type", "submit", 1, "btn", "btn-primary", "dropdown-radius-left", 3, "click"], ["type", "text", "formControlName", "group_id", "placeholder", "Search by group ID", 1, "form-control", "border-right-0"], ["type", "text", "formControlName", "user_id_one", "placeholder", "Search by user ID 1", 1, "form-control", "border-right-0"], [1, "input-group-text", 3, "click"], ["src", "/static/svg/purple-cog-1.svg", "alt", "", "width", "20", "height", "", 1, "mr-1"], ["type", "text", "formControlName", "user_id_two", "placeholder", "Search by user ID 2", 1, "form-control", "border-right-0"], [1, "col-md-3", "justify-content-end", "text-right"], ["role", "group", "aria-label", "Search", 1, "btn-group", "page-btns"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "disabled", "click"], ["src", "/static/svg/page-first.svg", "alt", "", "width", "20", "height", ""], ["src", "/static/svg/page-next.svg", "alt", "", "width", "20", "height", ""], ["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "row", "no-gutters"], [1, "table", "table-sm", "table-hover", "table-bordered", 2, "table-layout", "fixed"], [1, "thead-light"], [2, "width", "60px"], [2, "width", "320px"], [2, "width", "150px"], [2, "width", "180px"], ["style", "width: 90px", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["type", "danger", 3, "dismissible", 4, "ngIf"], ["type", "success", 3, "dismissible", "close", 4, "ngIf"], ["role", "alert", 1, "d-flex", "justify-content-between", "align-items-center"], ["type", "button", "class", "btn btn-danger", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "ngbDropdownItem", "", 3, "click"], [2, "width", "100%", 3, "routerLink"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], [2, "width", "90px"], [1, "text-muted"], [3, "click"], [2, "text-overflow", "ellipsis", "overflow", "hidden", 3, "click"], [2, "white-space", "nowrap", "text-overflow", "ellipsis", "overflow", "hidden"], [1, "arrow", 3, "click"], ["class", "arrow-right", 4, "ngIf"], ["class", "arrow-down", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["class", "open-row", 4, "ngIf"], [1, "arrow-right"], [1, "arrow-down"], [1, "text-center"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "open-row"], ["type", "danger", 3, "dismissible"], [1, "mb-0", "pl-4"], ["type", "success", 3, "dismissible", "close"], ["src", "/static/svg/green-tick.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"]],
    template: function ChatListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Chat Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatListComponent_span_4_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatListComponent_span_5_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatListComponent_button_7_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "form", 9)(12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_Template_button_click_16_listener() {
          ctx.type = 2;
          return ctx.search(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 9)(19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "div", 13)(23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_Template_button_click_23_listener() {
          ctx.type = 3;
          return ctx.search(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 9)(26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12)(29, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_Template_span_click_29_listener() {
          return ctx.f3.user_id_one.setValue(ctx.systemUserId);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12)(33, "div", 13)(34, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_Template_button_click_34_listener() {
          ctx.type = 4;
          return ctx.search(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20)(37, "div", 21)(38, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_Template_button_click_38_listener() {
          return ctx.search(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatListComponent_Template_button_click_40_listener() {
          return ctx.search(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ChatListComponent_h6_42_Template, 2, 1, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ChatListComponent_h6_43_Template, 4, 4, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ChatListComponent_h6_44_Template, 7, 8, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ChatListComponent_ngb_alert_45_Template, 4, 2, "ngb-alert", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26)(47, "table", 27)(48, "thead", 28)(49, "tr")(50, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Sender ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Create Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ChatListComponent_th_60_Template, 2, 0, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ChatListComponent_tr_62_Template, 3, 1, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ChatListComponent_ng_template_63_Template, 17, 10, "ng-template", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ChatListComponent_ngb_alert_64_Template, 6, 2, "ngb-alert", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ChatListComponent_ngb_alert_65_Template, 4, 3, "ngb-alert", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ChatListComponent_button_67_Template, 2, 1, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.activeFilter || ctx.activeFilter === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeFilter && ctx.activeFilter !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.activeFilter !== "Chat Room")("formGroup", ctx.searchForm1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.activeFilter !== "Group Chat")("formGroup", ctx.searchForm2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.activeFilter !== "Direct Chat")("formGroup", ctx.searchForm3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.messages.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nextCursor === "" || ctx.nextCursor === null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messages.length != 0 && ctx.error === "" && ctx.type == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messages.length != 0 && ctx.error === "" && ctx.type == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messages.length != 0 && ctx.error === "" && ctx.type == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messages.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteMessagesAllowed());
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAlert, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownItem, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: [".input-group-text[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.table-hover[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.dropdown-radius-left[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.open-row[_ngcontent-%COMP%] {\n  background: #FAFAFC;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hhbm5lbHMvY2hhdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDQyxtQkFBQTtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhYmxlLWhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1yYWRpdXMtbGVmdCB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4ub3Blbi1yb3cge1xyXG5cdGJhY2tncm91bmQ6ICNGQUZBRkM7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
class ChatSearchResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const type = Number(route.queryParamMap.get('type'));
    switch (type) {
      case 2:
        // tslint:disable-next-line:max-line-length
        return this.consoleService.listChannelMessages('', type.toString(), route.queryParamMap.get('label'), null, null, null, encodeURIComponent(route.queryParamMap.get('cursor'))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
          route.data = {
            ...route.data,
            error
          };
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null);
        }));
      case 3:
        // tslint:disable-next-line:max-line-length
        return this.consoleService.listChannelMessages('', type.toString(), null, route.queryParamMap.get('group_id'), null, null, encodeURIComponent(route.queryParamMap.get('cursor'))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
          route.data = {
            ...route.data,
            error
          };
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null);
        }));
      case 4:
        // tslint:disable-next-line:max-line-length
        return this.consoleService.listChannelMessages('', type.toString(), null, null, route.queryParamMap.get('user_id_one'), route.queryParamMap.get('user_id_two'), encodeURIComponent(route.queryParamMap.get('cursor'))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
          route.data = {
            ...route.data,
            error
          };
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null);
        }));
      default:
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null);
    }
  }
  static ɵfac = function ChatSearchResolver_Factory(t) {
    return new (t || ChatSearchResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ChatSearchResolver,
    factory: ChatSearchResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1497:
/*!********************************************!*\
  !*** ./src/app/config/config.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigComponent": () => (/* binding */ ConfigComponent),
/* harmony export */   "ConfigResolver": () => (/* binding */ ConfigResolver)
/* harmony export */ });
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-yaml */ 5474);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/delete-confirm.service */ 8406);
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-file-drop */ 157);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);













function ConfigComponent_ngb_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Failed to retrieve configuration.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
  }
}
function ConfigComponent_ng_container_11_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", c_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r9.value);
  }
}
function ConfigComponent_ng_container_11_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(empty)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", c_r9.name);
  }
}
function ConfigComponent_ng_container_11_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 26)(4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r14.flatConfig[i_r10 + 1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", ctx_r14.flatConfig[i_r10 + 1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://heroiclabs.com/docs/nakama/getting-started/configuration/#", ctx_r14.flatConfig[i_r10 + 1].name, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function ConfigComponent_ng_container_11_div_1_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r19.flatConfig[i_r10 + 1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r19.flatConfig[i_r10 + 1].value);
  }
}
function ConfigComponent_ng_container_11_div_1_div_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(empty)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r20.flatConfig[i_r10 + 1].name);
  }
}
function ConfigComponent_ng_container_11_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConfigComponent_ng_container_11_div_1_div_11_span_1_Template, 2, 2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ConfigComponent_ng_container_11_div_1_div_11_span_2_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r15.isEmpty(ctx_r15.flatConfig[i_r10 + 1].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.isEmpty(ctx_r15.flatConfig[i_r10 + 1].value));
  }
}
function ConfigComponent_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "div", 7)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 26)(5, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ConfigComponent_ng_container_11_div_1_span_8_Template, 2, 2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ConfigComponent_ng_container_11_div_1_span_9_Template, 2, 1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ConfigComponent_ng_container_11_div_1_div_10_Template, 6, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ConfigComponent_ng_container_11_div_1_div_11_Template, 3, 2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r10 = ctx_r24.index;
    const c_r9 = ctx_r24.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("border-top-0", i_r10 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", c_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://heroiclabs.com/docs/nakama/getting-started/configuration/#", c_r9.name, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r11.isEmpty(c_r9.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.isEmpty(c_r9.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r10 < ctx_r11.flatConfig.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r10 < ctx_r11.flatConfig.length - 1);
  }
}
function ConfigComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConfigComponent_ng_container_11_div_1_Template, 12, 9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r10 % 2 === 0);
  }
}
function ConfigComponent_div_20_pre_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "pre", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r26);
  }
}
function ConfigComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ConfigComponent_div_20_pre_1_Template, 2, 1, "pre", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.jsonConfig.runtime.env);
  }
}
function ConfigComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "(empty)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ConfigComponent_ngb_alert_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Failed to upload import data.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.uploadError);
  }
}
function ConfigComponent_ngb_alert_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close", function ConfigComponent_ngb_alert_27_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.uploadSuccess = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Storage data successfully imported.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", true);
  }
}
function ConfigComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfigComponent_ng_template_29_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);
      const openFileSelector_r29 = restoredCtx.openFileSelector;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](openFileSelector_r29());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Browse Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConfigComponent_ngb_alert_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Failed to delete data.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.deleteError);
  }
}
function ConfigComponent_ngb_alert_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close", function ConfigComponent_ngb_alert_33_Template_ngb_alert_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.deleteSuccess = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "All data successfully deleted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dismissible", true);
  }
}
class ConfigComponent {
  config;
  route;
  httpClient;
  modalService;
  consoleService;
  formBuilder;
  deleteConfirmService;
  configError = '';
  uploadError = '';
  deleteError = '';
  jsonConfig;
  flatConfig;
  nakamaVersion;
  file;
  uploading = false;
  uploadSuccess = false;
  deleteSuccess = false;
  deleting = false;
  confirmDeleteForm;
  apiConfig;
  constructor(config, route, httpClient, modalService, consoleService, formBuilder, deleteConfirmService) {
    this.config = config;
    this.route = route;
    this.httpClient = httpClient;
    this.modalService = modalService;
    this.consoleService = consoleService;
    this.formBuilder = formBuilder;
    this.deleteConfirmService = deleteConfirmService;
    this.apiConfig = config;
  }
  ngOnInit() {
    this.route.data.subscribe(d => {
      this.nakamaVersion = d[0].server_version;
      const json = JSON.parse(d[0].config);
      this.jsonConfig = json;
      this.flatConfig = this.flattenConfig(json);
    }, err => {
      this.configError = err;
    });
    this.confirmDeleteForm = this.formBuilder.group({
      delete: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('DELETE')])]
    });
  }
  flattenConfig(data, currPath = '') {
    let result = [];
    Object.keys(data).forEach(key => {
      const node = data[key];
      const path = currPath ? `${currPath}.${key}` : key;
      if (!key) return;
      if (node && typeof node === 'object' && !Array.isArray(node)) {
        result = result.concat(this.flattenConfig(node, path));
      } else {
        result.push({
          name: path,
          value: node
        });
      }
    });
    return result;
  }
  isEmpty(value) {
    if (value === '') {
      return true;
    } else if (value === 0) {
      return true;
    } else {
      return false;
    }
  }
  exportYaml() {
    const blob = new Blob([(0,js_yaml__WEBPACK_IMPORTED_MODULE_0__.dump)(this.jsonConfig)], {
      type: 'text/yaml;charset=utf-8'
    });
    file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs(blob, 'config.yaml');
  }
  dropped(files) {
    this.uploadError = '';
    this.uploadSuccess = false;
    for (const file of files) {
      if (file.fileEntry.isFile) {
        const tokens = file.fileEntry.name.split('.');
        const validExt = ['json', 'csv'];
        if (tokens.length > 1 && validExt.includes(tokens[tokens.length - 1].toLowerCase())) {
          const fileEntry = file.fileEntry;
          fileEntry.file(f => {
            this.uploadFile(f);
          });
        } else {
          this.uploadError = 'Invalid file: must have extension .json or .csv';
        }
      }
    }
  }
  uploadFile(f) {
    const formData = new FormData();
    formData.append(f.name, f);
    this.uploading = true;
    const headers = {
      Authorization: 'Bearer '
    };
    this.httpClient.post(this.apiConfig.host + '/v2/console/storage/import', formData, {
      headers
    }).subscribe(() => {
      this.uploading = false;
      this.uploadSuccess = true;
    }, err => {
      this.uploading = false;
      this.uploadError = err;
    });
  }
  deleteData() {
    this.deleteConfirmService.openDeleteConfirmModal(() => {
      this.deleteError = '';
      this.deleting = true;
      this.consoleService.deleteAllData('').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(2000)).subscribe(() => {
        this.deleting = false;
        this.deleteError = '';
        this.deleteSuccess = true;
      }, err => {
        this.deleting = false;
        this.deleteError = err;
      });
    }, this.confirmDeleteForm, 'Delete All Data', 'Are you sure you want to delete all the database data?');
  }
  get f() {
    return this.confirmDeleteForm.controls;
  }
  ngOnDestroy() {}
  static ɵfac = function ConfigComponent_Factory(t) {
    return new (t || ConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_5__.ConfigParams), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_5__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_9__.DeleteConfirmService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ConfigComponent,
    selectors: [["ng-component"]],
    decls: 41,
    vars: 11,
    consts: [["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "pb-4"], [1, "d-flex", "justify-content-between", "mb-4", "align-items-baseline"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "config-table"], [4, "ngFor", "ngForOf"], [1, "row", "py-2", "border", "border-top-0", "add-border-larger", "mb-5"], [1, "col-lg-3"], [1, "pl-1"], ["target", "_blank", "href", "https://heroiclabs.com/docs/nakama/getting-started/configuration/#runtime.env", 1, "d-inline"], ["src", "/static/svg/hint.svg", "alt", "", "width", "16", "height", "16"], [1, "col-lg-9"], [4, "ngIf"], [1, "section-divider", "d-flex", "mb-4"], ["type", "success", 3, "dismissible", "close", 4, "ngIf"], ["accept", ".json,.csv", "dropZoneClassName", "drop-zone", "contentClassName", "drop-zone-content", "dropZoneLabel", "Drop CSV or JSON file here", 3, "disabled", "onFileDrop"], ["ngx-file-drop-content-tmp", ""], ["role", "alert", 1, "alert", "alert-danger", "d-flex", "justify-content-between", "align-items-center"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", ""], [1, "pl-2"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], ["type", "danger", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], ["class", "row py-2 border", 3, "border-top-0", 4, "ngIf"], [1, "row", "py-2", "border"], [1, "pl-1", 3, "for"], ["target", "_blank", 1, "d-inline", 3, "href"], ["class", "text-break-all", 3, "id", 4, "ngIf"], ["class", "text-muted", 3, "id", 4, "ngIf"], ["class", "col-md-3 left-line", 4, "ngIf"], ["class", "col-md-3", 4, "ngIf"], [1, "text-break-all", 3, "id"], [1, "text-muted", 3, "id"], [1, "col-md-3", "left-line"], [1, "col-md-3"], ["class", "mb-0 text-break-all", 4, "ngFor", "ngForOf"], [1, "mb-0", "text-break-all"], [1, "mb-0", "text-muted"], [1, "mb-0", "pl-4"], ["type", "success", 3, "dismissible", "close"], ["src", "/static/svg/green-tick.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
    template: function ConfigComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ConfigComponent_ngb_alert_0_Template, 4, 1, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Server Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "h5")(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Server version:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfigComponent_Template_button_click_8_listener() {
          return ctx.exportYaml();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Export Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ConfigComponent_ng_container_11_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "runtime.env");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 8)(17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ConfigComponent_div_20_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ConfigComponent_div_21_Template, 3, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Import storage data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Import storage objects from a CSV or JSON file by dragging and dropping it below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ConfigComponent_ngb_alert_26_Template, 6, 2, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ConfigComponent_ngb_alert_27_Template, 4, 1, "ngb-alert", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ngx-file-drop", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onFileDrop", function ConfigComponent_Template_ngx_file_drop_onFileDrop_28_listener($event) {
          return ctx.dropped($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ConfigComponent_ng_template_29_Template, 2, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Delete all data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ConfigComponent_ngb_alert_32_Template, 6, 2, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ConfigComponent_ngb_alert_33_Template, 4, 1, "ngb-alert", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 17)(35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "small", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Warning - this operation is not reversible!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfigComponent_Template_button_click_39_listener() {
          return ctx.deleteData();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Delete all");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.configError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.nakamaVersion, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.flatConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jsonConfig["runtime"] && ctx.jsonConfig["runtime"]["env"] && ctx.jsonConfig["runtime"]["env"].length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jsonConfig["runtime"] && ctx.jsonConfig["runtime"]["env"] && ctx.jsonConfig["runtime"]["env"].length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.uploading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.deleteError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.deleteSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.deleting);
      }
    },
    dependencies: [ngx_file_drop__WEBPACK_IMPORTED_MODULE_10__.NgxFileDropComponent, ngx_file_drop__WEBPACK_IMPORTED_MODULE_10__.NgxFileDropContentTemplateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAlert],
    styles: ["label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.text-break-all[_ngcontent-%COMP%] {\n  word-break: break-all;\n  word-wrap: anywhere;\n}\n\n.config-table[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #FAFAFC;\n}\n.config-table[_ngcontent-%COMP%]   .left-line[_ngcontent-%COMP%] {\n  border-left: solid 1px #dadae9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29uZmlnL2NvbmZpZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUlFO0VBQ0UseUJBQUE7QUFESjtBQU1DO0VBQ0ssOEJBQUE7QUFKTiIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi50ZXh0LWJyZWFrLWFsbCB7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHdvcmQtd3JhcDogYW55d2hlcmU7XHJcbn1cclxuXHJcbi5jb25maWctdGFibGUge1xyXG5cdC5yb3cge1xyXG5cdFx0JjpudGgtY2hpbGQoZXZlbikge1xyXG5cdFx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZDO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHQubGVmdC1saW5lIHtcclxuXHRcdCAgICBib3JkZXItbGVmdDogc29saWQgMXB4IGRhcmtlbigjRkFGQUZDLCAxMCUpO1xyXG5cclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
class ConfigResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    return this.consoleService.getConfig('');
  }
  static ɵfac = function ConfigResolver_Factory(t) {
    return new (t || ConfigResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_5__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ConfigResolver,
    factory: ConfigResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3713:
/*!************************************!*\
  !*** ./src/app/console.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiStoreEnvironment": () => (/* binding */ ApiStoreEnvironment),
/* harmony export */   "ApiStoreProvider": () => (/* binding */ ApiStoreProvider),
/* harmony export */   "ConfigParams": () => (/* binding */ ConfigParams),
/* harmony export */   "ConsoleService": () => (/* binding */ ConsoleService),
/* harmony export */   "CustomHttpParamEncoder": () => (/* binding */ CustomHttpParamEncoder),
/* harmony export */   "ListChannelMessagesRequestType": () => (/* binding */ ListChannelMessagesRequestType),
/* harmony export */   "StatusHealth": () => (/* binding */ StatusHealth),
/* harmony export */   "UserRole": () => (/* binding */ UserRole)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



var ListChannelMessagesRequestType;
(function (ListChannelMessagesRequestType) {
  ListChannelMessagesRequestType[ListChannelMessagesRequestType["UNKNOWN"] = 0] = "UNKNOWN";
  ListChannelMessagesRequestType[ListChannelMessagesRequestType["ROOM"] = 1] = "ROOM";
  ListChannelMessagesRequestType[ListChannelMessagesRequestType["GROUP"] = 2] = "GROUP";
  ListChannelMessagesRequestType[ListChannelMessagesRequestType["DIRECT"] = 3] = "DIRECT";
})(ListChannelMessagesRequestType || (ListChannelMessagesRequestType = {}));
var StatusHealth;
(function (StatusHealth) {
  StatusHealth[StatusHealth["STATUS_HEALTH_OK"] = 0] = "STATUS_HEALTH_OK";
  StatusHealth[StatusHealth["STATUS_HEALTH_ERROR"] = 1] = "STATUS_HEALTH_ERROR";
  StatusHealth[StatusHealth["STATUS_HEALTH_CONNECTING"] = 2] = "STATUS_HEALTH_CONNECTING";
  StatusHealth[StatusHealth["STATUS_HEALTH_DISCONNECTING"] = 3] = "STATUS_HEALTH_DISCONNECTING";
})(StatusHealth || (StatusHealth = {}));
/** - USER_ROLE_ADMIN: All access
 - USER_ROLE_DEVELOPER: Best for developers, also enables APIs and API explorer
 - USER_ROLE_MAINTAINER: Best for users who regularly update player information.
 - USER_ROLE_READONLY: Read-only role for those only need to view data */
var UserRole;
(function (UserRole) {
  UserRole[UserRole["USER_ROLE_UNKNOWN"] = 0] = "USER_ROLE_UNKNOWN";
  UserRole[UserRole["USER_ROLE_ADMIN"] = 1] = "USER_ROLE_ADMIN";
  UserRole[UserRole["USER_ROLE_DEVELOPER"] = 2] = "USER_ROLE_DEVELOPER";
  UserRole[UserRole["USER_ROLE_MAINTAINER"] = 3] = "USER_ROLE_MAINTAINER";
  UserRole[UserRole["USER_ROLE_READONLY"] = 4] = "USER_ROLE_READONLY";
})(UserRole || (UserRole = {}));
/** Environment where a purchase/subscription took place, */
var ApiStoreEnvironment;
(function (ApiStoreEnvironment) {
  ApiStoreEnvironment[ApiStoreEnvironment["UNKNOWN"] = 0] = "UNKNOWN";
  ApiStoreEnvironment[ApiStoreEnvironment["SANDBOX"] = 1] = "SANDBOX";
  ApiStoreEnvironment[ApiStoreEnvironment["PRODUCTION"] = 2] = "PRODUCTION";
})(ApiStoreEnvironment || (ApiStoreEnvironment = {}));
/** Validation Provider, */
var ApiStoreProvider;
(function (ApiStoreProvider) {
  ApiStoreProvider[ApiStoreProvider["APPLE_APP_STORE"] = 0] = "APPLE_APP_STORE";
  ApiStoreProvider[ApiStoreProvider["GOOGLE_PLAY_STORE"] = 1] = "GOOGLE_PLAY_STORE";
  ApiStoreProvider[ApiStoreProvider["HUAWEI_APP_GALLERY"] = 2] = "HUAWEI_APP_GALLERY";
  ApiStoreProvider[ApiStoreProvider["FACEBOOK_INSTANT_STORE"] = 3] = "FACEBOOK_INSTANT_STORE";
})(ApiStoreProvider || (ApiStoreProvider = {}));
const DEFAULT_HOST = 'http://127.0.0.1:7120';
const DEFAULT_TIMEOUT_MS = 5000;
class ConfigParams {
  host;
  timeoutMs;
}
class ConsoleService {
  httpClient;
  config;
  constructor(httpClient, config) {
    this.httpClient = httpClient;
    const defaultConfig = {
      host: DEFAULT_HOST,
      timeoutMs: DEFAULT_TIMEOUT_MS
    };
    this.config = config || defaultConfig;
  }
  /** Delete (non-recorded) all user accounts. */
  deleteAccounts(auth_token) {
    const urlPath = `/v2/console/account`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.delete(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** List (and optionally filter) accounts. */
  listAccounts(auth_token, filter, tombstones, cursor) {
    const urlPath = `/v2/console/account`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    if (filter) {
      params = params.set('filter', filter);
    }
    if (tombstones || tombstones === false) {
      params = params.set('tombstones', String(tombstones));
    }
    if (cursor) {
      params = params.set('cursor', cursor);
    }
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Get a list of the user's wallet transactions. */
  getWalletLedger(auth_token, account_id, limit, cursor) {
    account_id = encodeURIComponent(String(account_id));
    const urlPath = `/v2/console/account/${account_id}/wallet`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    if (limit) {
      params = params.set('limit', String(limit));
    }
    if (cursor) {
      params = params.set('cursor', cursor);
    }
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Delete all information stored for a user account. */
  deleteAccount(auth_token, id, record_deletion) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    if (record_deletion || record_deletion === false) {
      params = params.set('record_deletion', String(record_deletion));
    }
    return this.httpClient.delete(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Get detailed account information for a single user. */
  getAccount(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Update one or more fields on a user account. */
  updateAccount(auth_token, id, body) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, body, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Ban a user. */
  banAccount(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}/ban`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Export all information stored about a user account. */
  exportAccount(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}/export`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Get a user's list of friend relationships. */
  getFriends(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}/friend`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Delete the friend relationship between two users. */
  deleteFriend(auth_token, id, friend_id) {
    id = encodeURIComponent(String(id));
    friend_id = encodeURIComponent(String(friend_id));
    const urlPath = `/v2/console/account/${id}/friend/${friend_id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.delete(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Get a list of groups the user is a member of. */
  getGroups(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}/group`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Remove a user from a group. */
  deleteGroupUser(auth_token, id, group_id) {
    id = encodeURIComponent(String(id));
    group_id = encodeURIComponent(String(group_id));
    const urlPath = `/v2/console/account/${id}/group/${group_id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.delete(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Unban a user. */
  unbanAccount(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}/unban`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Unlink the Apple ID from a user account. */
  unlinkApple(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}/unlink/apple`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Unlink the custom ID from a user account. */
  unlinkCustom(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}/unlink/custom`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Unlink the device ID from a user account. */
  unlinkDevice(auth_token, id, body) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}/unlink/device`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, body, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Unlink the email from a user account. */
  unlinkEmail(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}/unlink/email`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Unlink the Facebook ID from a user account. */
  unlinkFacebook(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}/unlink/facebook`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Unlink the Facebook Instant Game ID from a user account. */
  unlinkFacebookInstantGame(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}/unlink/facebookinstantgame`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Unlink the Game Center ID from a user account. */
  unlinkGameCenter(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}/unlink/gamecenter`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Unlink the Google ID from a user account. */
  unlinkGoogle(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}/unlink/google`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Unlink the Steam ID from a user account. */
  unlinkSteam(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/account/${id}/unlink/steam`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Delete a wallet ledger item. */
  deleteWalletLedger(auth_token, id, wallet_id) {
    id = encodeURIComponent(String(id));
    wallet_id = encodeURIComponent(String(wallet_id));
    const urlPath = `/v2/console/account/${id}/wallet/${wallet_id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.delete(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Deletes all data */
  deleteAllData(auth_token) {
    const urlPath = `/v2/console/all`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.delete(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** API Explorer - list all endpoints */
  listApiEndpoints(auth_token) {
    const urlPath = `/v2/console/api/endpoints`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** API Explorer - call a custom RPC endpoint */
  callRpcEndpoint(auth_token, method, body) {
    method = encodeURIComponent(String(method));
    const urlPath = `/v2/console/api/endpoints/rpc/${method}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, body, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** API Explorer - call an endpoint */
  callApiEndpoint(auth_token, method, body) {
    method = encodeURIComponent(String(method));
    const urlPath = `/v2/console/api/endpoints/${method}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, body, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Authenticate a console user with username and password. */
  authenticate(body) {
    const urlPath = `/v2/console/authenticate`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, body, {
      params: params
    });
  }
  /** Log out a session and invalidate the session token. */
  authenticateLogout(auth_token, body) {
    const urlPath = `/v2/console/authenticate/logout`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, body, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Change an account's MFA using a code, usually delivered over email. */
  authenticateMFASetup(auth_token, body) {
    const urlPath = `/v2/console/authenticate/mfa`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, body, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** List channel messages with the selected filter */
  listChannelMessages(auth_token, type, label, group_id, user_id_one, user_id_two, cursor) {
    const urlPath = `/v2/console/channel`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    if (type) {
      params = params.set('type', type);
    }
    if (label) {
      params = params.set('label', label);
    }
    if (group_id) {
      params = params.set('group_id', group_id);
    }
    if (user_id_one) {
      params = params.set('user_id_one', user_id_one);
    }
    if (user_id_two) {
      params = params.set('user_id_two', user_id_two);
    }
    if (cursor) {
      params = params.set('cursor', cursor);
    }
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Get server config and configuration warnings. */
  getConfig(auth_token) {
    const urlPath = `/v2/console/config`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** List (and optionally filter) groups. */
  listGroups(auth_token, filter, cursor) {
    const urlPath = `/v2/console/group`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    if (filter) {
      params = params.set('filter', filter);
    }
    if (cursor) {
      params = params.set('cursor', cursor);
    }
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Demote a user from a group. */
  demoteGroupMember(auth_token, group_id, id) {
    group_id = encodeURIComponent(String(group_id));
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/group/${group_id}/account/${id}/demote`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Promote a user from a group. */
  promoteGroupMember(auth_token, group_id, id) {
    group_id = encodeURIComponent(String(group_id));
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/group/${group_id}/account/${id}/promote`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Add/join members to a group. */
  addGroupUsers(auth_token, group_id, body) {
    group_id = encodeURIComponent(String(group_id));
    const urlPath = `/v2/console/group/${group_id}/add`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, body, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Remove a group. */
  deleteGroup(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/group/${id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.delete(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Get detailed group information. */
  getGroup(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/group/${id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Update one or more fields on a group. */
  updateGroup(auth_token, id, body) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/group/${id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, body, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Export all information stored about a group. */
  exportGroup(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/group/${id}/export`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Get a list of members of the group. */
  getMembers(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/group/${id}/member`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Get purchase by transaction_id */
  getPurchase(auth_token, transaction_id) {
    transaction_id = encodeURIComponent(String(transaction_id));
    const urlPath = `/v2/console/iap/purchase/${transaction_id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Get subscription by original_transaction_id */
  getSubscription(auth_token, original_transaction_id) {
    original_transaction_id = encodeURIComponent(String(original_transaction_id));
    const urlPath = `/v2/console/iap/subscription/${original_transaction_id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** List leaderboards */
  listLeaderboards(auth_token, cursor) {
    const urlPath = `/v2/console/leaderboard`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    if (cursor) {
      params = params.set('cursor', cursor);
    }
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Delete leaderboard */
  deleteLeaderboard(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/leaderboard/${id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.delete(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Get leaderboard. */
  getLeaderboard(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/leaderboard/${id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Delete leaderboard record */
  deleteLeaderboardRecord(auth_token, id, owner_id) {
    id = encodeURIComponent(String(id));
    owner_id = encodeURIComponent(String(owner_id));
    const urlPath = `/v2/console/leaderboard/${id}/owner/${owner_id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.delete(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** List leaderboard records. */
  listLeaderboardRecords(auth_token, leaderboard_id, owner_ids, limit, cursor, expiry) {
    leaderboard_id = encodeURIComponent(String(leaderboard_id));
    const urlPath = `/v2/console/leaderboard/${leaderboard_id}/records`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    if (owner_ids) {
      owner_ids.forEach(e => params = params.append('owner_ids', String(e)));
    }
    if (limit) {
      params = params.set('limit', String(limit));
    }
    if (cursor) {
      params = params.set('cursor', cursor);
    }
    if (expiry) {
      params = params.set('expiry', expiry);
    }
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** List ongoing matches */
  listMatches(auth_token, limit, authoritative, label, min_size, max_size, match_id, query, node) {
    const urlPath = `/v2/console/match`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    if (limit) {
      params = params.set('limit', String(limit));
    }
    if (authoritative || authoritative === false) {
      params = params.set('authoritative', String(authoritative));
    }
    if (label) {
      params = params.set('label', label);
    }
    if (min_size) {
      params = params.set('min_size', String(min_size));
    }
    if (max_size) {
      params = params.set('max_size', String(max_size));
    }
    if (match_id) {
      params = params.set('match_id', match_id);
    }
    if (query) {
      params = params.set('query', query);
    }
    if (node) {
      params = params.set('node', node);
    }
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Get current state of a running match */
  getMatchState(auth_token, id) {
    id = encodeURIComponent(String(id));
    const urlPath = `/v2/console/match/${id}/state`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Delete messages. */
  deleteChannelMessages(auth_token, before, ids) {
    const urlPath = `/v2/console/message`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    if (before) {
      params = params.set('before', before);
    }
    if (ids) {
      ids.forEach(e => params = params.append('ids', String(e)));
    }
    return this.httpClient.delete(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** List validated purchases */
  listPurchases(auth_token, user_id, limit, cursor) {
    const urlPath = `/v2/console/purchase`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    if (user_id) {
      params = params.set('user_id', user_id);
    }
    if (limit) {
      params = params.set('limit', String(limit));
    }
    if (cursor) {
      params = params.set('cursor', cursor);
    }
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Get runtime info */
  getRuntime(auth_token) {
    const urlPath = `/v2/console/runtime`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Get current status data for all nodes. */
  getStatus(auth_token) {
    const urlPath = `/v2/console/status`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Delete all storage data. */
  deleteStorage(auth_token) {
    const urlPath = `/v2/console/storage`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.delete(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** List (and optionally filter) storage data. */
  listStorage(auth_token, user_id, key, collection, cursor) {
    const urlPath = `/v2/console/storage`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    if (user_id) {
      params = params.set('user_id', user_id);
    }
    if (key) {
      params = params.set('key', key);
    }
    if (collection) {
      params = params.set('collection', collection);
    }
    if (cursor) {
      params = params.set('cursor', cursor);
    }
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** List storage collections */
  listStorageCollections(auth_token) {
    const urlPath = `/v2/console/storage/collections`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Delete a storage object. */
  deleteStorageObject(auth_token, collection, key, user_id, version) {
    collection = encodeURIComponent(String(collection));
    key = encodeURIComponent(String(key));
    user_id = encodeURIComponent(String(user_id));
    const urlPath = `/v2/console/storage/${collection}/${key}/${user_id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    if (version) {
      params = params.set('version', version);
    }
    return this.httpClient.delete(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Get a storage object. */
  getStorage(auth_token, collection, key, user_id) {
    collection = encodeURIComponent(String(collection));
    key = encodeURIComponent(String(key));
    user_id = encodeURIComponent(String(user_id));
    const urlPath = `/v2/console/storage/${collection}/${key}/${user_id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Write a new storage object or replace an existing one. */
  writeStorageObject(auth_token, collection, key, user_id, body) {
    collection = encodeURIComponent(String(collection));
    key = encodeURIComponent(String(key));
    user_id = encodeURIComponent(String(user_id));
    const urlPath = `/v2/console/storage/${collection}/${key}/${user_id}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.put(this.config.host + urlPath, body, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Delete a storage object. */
  deleteStorageObject2(auth_token, collection, key, user_id, version) {
    collection = encodeURIComponent(String(collection));
    key = encodeURIComponent(String(key));
    user_id = encodeURIComponent(String(user_id));
    version = encodeURIComponent(String(version));
    const urlPath = `/v2/console/storage/${collection}/${key}/${user_id}/${version}`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.delete(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** List validated subscriptions */
  listSubscriptions(auth_token, user_id, limit, cursor) {
    const urlPath = `/v2/console/subscription`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    if (user_id) {
      params = params.set('user_id', user_id);
    }
    if (limit) {
      params = params.set('limit', String(limit));
    }
    if (cursor) {
      params = params.set('cursor', cursor);
    }
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Delete console user. */
  deleteUser(auth_token, username) {
    const urlPath = `/v2/console/user`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    if (username) {
      params = params.set('username', username);
    }
    return this.httpClient.delete(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** List (and optionally filter) users. */
  listUsers(auth_token) {
    const urlPath = `/v2/console/user`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.get(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Add a new console user. */
  addUser(auth_token, body) {
    const urlPath = `/v2/console/user`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, body, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Sets the user's MFA as required or not required. */
  requireUserMfa(auth_token, username, body) {
    username = encodeURIComponent(String(username));
    const urlPath = `/v2/console/user/${username}/mfa/require`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, body, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  /** Reset a user's multi-factor authentication credentials. */
  resetUserMfa(auth_token, username) {
    username = encodeURIComponent(String(username));
    const urlPath = `/v2/console/user/${username}/mfa/reset`;
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams({
      encoder: new CustomHttpParamEncoder()
    });
    return this.httpClient.post(this.config.host + urlPath, {
      params: params,
      headers: this.getTokenAuthHeaders(auth_token)
    });
  }
  getTokenAuthHeaders(token) {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Authorization', 'Bearer ' + token);
  }
  getBasicAuthHeaders(username, password) {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set('Authorization', 'Basic ' + btoa(username + ':' + password));
  }
  static ɵfac = function ConsoleService_Factory(t) {
    return new (t || ConsoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ConfigParams, 8));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ConsoleService,
    factory: ConsoleService.ɵfac,
    providedIn: 'root'
  });
}
class CustomHttpParamEncoder {
  encodeKey(key) {
    return encodeURIComponent(key);
  }
  encodeValue(value) {
    return encodeURIComponent(value);
  }
  decodeKey(key) {
    return decodeURIComponent(key);
  }
  decodeValue(value) {
    return decodeURIComponent(value);
  }
}

/***/ }),

/***/ 7503:
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Globals": () => (/* binding */ Globals)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./console.service */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class Globals {
  restrictedPages = new Map([['users', _console_service__WEBPACK_IMPORTED_MODULE_0__.UserRole.USER_ROLE_ADMIN], ['config', _console_service__WEBPACK_IMPORTED_MODULE_0__.UserRole.USER_ROLE_DEVELOPER], ['modules', _console_service__WEBPACK_IMPORTED_MODULE_0__.UserRole.USER_ROLE_DEVELOPER], ['apiexplorer', _console_service__WEBPACK_IMPORTED_MODULE_0__.UserRole.USER_ROLE_DEVELOPER]]);
  static ɵfac = function Globals_Factory(t) {
    return new (t || Globals)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: Globals,
    factory: Globals.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6557:
/*!********************************************************!*\
  !*** ./src/app/group/details/groupDetailsComponent.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupDetailsComponent": () => (/* binding */ GroupDetailsComponent)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../console.service */ 3713);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vanilla-jsoneditor */ 4221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../authentication.service */ 1188);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);










const _c0 = ["editor"];
function GroupDetailsComponent_ngb_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("An error occurred: ", ctx_r0.error, "");
  }
}
function GroupDetailsComponent_ngb_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Group was modified successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
  }
}
function GroupDetailsComponent_button_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.updating);
  }
}
const _c1 = function (a1) {
  return ["/accounts", a1];
};
const _c2 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class GroupDetailsComponent {
  route;
  router;
  consoleService;
  authService;
  formBuilder;
  editor;
  jsonEditor;
  error = '';
  group;
  groupForm;
  updating = false;
  updated = false;
  constructor(route, router, consoleService, authService, formBuilder) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.authService = authService;
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.groupForm = this.formBuilder.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      description: [''],
      avatar_url: [''],
      lang_tag: [''],
      open: [''],
      max_count: ['']
    });
    this.route.parent.data.subscribe(d => {
      this.group = d[0];
      this.f.name.setValue(this.group.name);
      this.f.description.setValue(this.group.description);
      this.f.avatar_url.setValue(this.group.avatar_url);
      this.f.lang_tag.setValue(this.group.lang_tag);
      this.f.open.setValue(this.group.open);
      this.f.max_count.setValue(this.group.max_count);
      if (!this.updateAllowed()) {
        this.groupForm.disable();
      }
    }, err => {
      this.error = err;
    });
  }
  ngAfterViewInit() {
    this.jsonEditor = new vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.JSONEditor({
      target: this.editor.nativeElement,
      props: {
        mode: vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.Mode.text,
        readOnly: !this.updateAllowed(),
        content: {
          text: this.group.metadata
        }
      }
    });
  }
  updateGroup() {
    this.error = '';
    this.updated = false;
    this.updating = true;
    let metadata = '';
    try {
      metadata = (0,vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.toTextContent)(this.jsonEditor.get()).text;
    } catch (e) {
      this.error = e;
      this.updating = false;
      return;
    }
    if (this.f.max_count.value < this.group.edge_count) {
      this.error = RangeError("Max Count cannot be lower than the number of members").message;
      this.updating = false;
      return;
    }
    const body = {
      name: this.f.name.value,
      description: this.f.description.value,
      avatar_url: this.f.avatar_url.value,
      lang_tag: this.f.lang_tag.value,
      open: this.f.open.value,
      max_count: this.f.max_count.value,
      metadata: metadata
    };
    this.consoleService.updateGroup('', this.group.id, body).subscribe(d => {
      this.updated = true;
      this.updating = false;
    }, err => {
      this.error = err;
      this.updating = false;
    });
  }
  updateAllowed() {
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_3__.UserRole.USER_ROLE_MAINTAINER;
  }
  get f() {
    return this.groupForm.controls;
  }
  static ɵfac = function GroupDetailsComponent_Factory(t) {
    return new (t || GroupDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_3__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GroupDetailsComponent,
    selectors: [["ng-component"]],
    viewQuery: function GroupDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
      }
    },
    decls: 71,
    vars: 16,
    consts: [["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], ["type", "success", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "add-border", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6", "d-flex", "justify-content-start", "align-items-baseline"], [1, "col-3", "pl-0"], ["for", "group_id", 1, "d-inline"], ["type", "text", "id", "group_id", "placeholder", "Group ID", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "creator_id", 1, "d-inline"], [2, "width", "100%", 3, "routerLink"], ["type", "text", "id", "creator_id", "placeholder", "Creator ID", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "name", 1, "d-inline"], ["type", "text", "id", "name", "placeholder", "Name", "required", "", "formControlName", "name", 1, "form-control", "form-control-sm", "my-2", 3, "ngClass"], [1, "invalid-tooltip", 3, "hidden"], ["for", "description", 1, "d-inline"], ["type", "text", "id", "description", "placeholder", "Description", "formControlName", "description", 1, "form-control", "form-control-sm", "my-2"], [1, "col-md-6", "d-flex", "justify-content-start", "align-items-baseline", "align-self-center"], ["for", "avatar_url", 1, "d-inline"], ["type", "text", "id", "avatar_url", "placeholder", "Avatar URL", "formControlName", "avatar_url", 1, "form-control", "form-control-sm", "my-2"], ["for", "lang_tag", 1, "d-inline"], ["type", "text", "id", "lang_tag", "placeholder", "Language", "formControlName", "lang_tag", 1, "form-control", "form-control-sm", "my-2"], ["type", "text", "id", "edge_count", "placeholder", "Members", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "max_count", 1, "d-inline"], ["type", "text", "id", "max_count", "placeholder", "Max Count", "formControlName", "max_count", 1, "form-control", "form-control-sm", "my-2"], ["type", "checkbox", "id", "open", "formControlName", "open", 1, "my-2"], [1, "row", "mb-3", "add-border-single-row-bottom"], ["for", "create_time", 1, "d-inline"], ["type", "text", "id", "create_time", "placeholder", "Create Time", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "update_time", 1, "d-inline"], ["type", "text", "id", "update_time", "placeholder", "Update Time", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], [1, "card", "p-2", "mb-3", "jsoneditor", 2, "height", "400px"], [2, "height", "400px"], ["editor", ""], ["type", "submit", "class", "btn btn-primary", 3, "disabled", 4, "ngIf"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], ["type", "success", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/green-tick.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]],
    template: function GroupDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GroupDetailsComponent_ngb_alert_0_Template, 4, 2, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GroupDetailsComponent_ngb_alert_1_Template, 4, 1, "ngb-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GroupDetailsComponent_Template_form_ngSubmit_2_listener() {
          return ctx.updateGroup();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Group ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Creator ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3)(16, "div", 4)(17, "div", 5)(18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Name is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4)(24, "div", 5)(25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3)(29, "div", 16)(30, "div", 5)(31, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Avatar URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4)(35, "div", 5)(36, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3)(40, "div", 4)(41, "div", 5)(42, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16)(46, "div", 5)(47, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Max Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3)(51, "div", 16)(52, "div", 5)(53, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25)(57, "div", 4)(58, "div", 5)(59, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Create Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 4)(63, "div", 5)(64, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Update Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, GroupDetailsComponent_button_70_Template, 2, 1, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.groupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.group.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.group.creator_id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.group.creator_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx.f.name.dirty && ctx.f.name.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.f.name.disabled || ctx.f.name.valid || ctx.f.name.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.group.edge_count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.group.create_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.group.update_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateAllowed());
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlert, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9303:
/*!******************************************!*\
  !*** ./src/app/group/group.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupComponent": () => (/* binding */ GroupComponent),
/* harmony export */   "GroupResolver": () => (/* binding */ GroupResolver)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ 1188);
/* harmony import */ var _shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/delete-confirm.service */ 8406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);









function GroupComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_button_11_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.exportGroup($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function GroupComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupComponent_button_12_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.deleteGroup($event, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function GroupComponent_ngb_alert_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-alert", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("An error occurred: ", ctx_r2.error, "");
  }
}
const _c0 = function (a1, a2) {
  return ["/groups", a1, a2];
};
function GroupComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r9 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", v_r9.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r4.group.id, v_r9.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](v_r9.label);
  }
}
const _c1 = function () {
  return ["/groups"];
};
class GroupComponent {
  route;
  router;
  consoleService;
  authService;
  deleteConfirmService;
  group;
  error = '';
  views = [{
    label: 'Details',
    path: 'details'
  }, {
    label: 'Members',
    path: 'members'
  }];
  constructor(route, router, consoleService, authService, deleteConfirmService) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.authService = authService;
    this.deleteConfirmService = deleteConfirmService;
  }
  ngOnInit() {
    this.route.data.subscribe(d => {
      this.group = d[0];
    }, err => {
      this.error = err;
    });
  }
  deleteGroup(event, recorded) {
    this.deleteConfirmService.openDeleteConfirmModal(() => {
      event.target.disabled = true;
      this.error = '';
      this.consoleService.deleteGroup('', this.group.id).subscribe(() => {
        this.error = '';
        this.router.navigate(['/groups']);
      }, err => {
        this.error = err;
      });
    });
  }
  exportGroup(event) {
    event.target.disabled = true;
    this.error = '';
    this.consoleService.exportGroup('', this.group.id).subscribe(groupExport => {
      this.error = '';
      const fileName = this.group.id + '-export.json';
      const json = JSON.stringify(groupExport, null, 2);
      const bytes = new TextEncoder().encode(json);
      const blob = new Blob([bytes], {
        type: 'application/json;charset=utf-8'
      });
      (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, fileName);
      event.target.disabled = false;
    }, err => {
      event.target.disabled = false;
      this.error = err;
    });
  }
  updateAllowed() {
    // only admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_MAINTAINER;
  }
  exportAllowed() {
    // only admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_MAINTAINER;
  }
  banAllowed() {
    // only admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_MAINTAINER;
  }
  deleteAllowed() {
    // only admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_2__.UserRole.USER_ROLE_MAINTAINER;
  }
  static ɵfac = function GroupComponent_Factory(t) {
    return new (t || GroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_5__.DeleteConfirmService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GroupComponent,
    selectors: [["ng-component"]],
    decls: 18,
    vars: 7,
    consts: [[1, "pb-1"], [1, "account-top-nav", "d-flex", "justify-content-between", "align-items-baseline", "mb-4"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], ["type", "button", "class", "btn  btn-outline-secondary mr-2", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger btn-danger-icon mr-2", 3, "click", 4, "ngIf"], ["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], ["ngbNav", "", 1, "navbar-expand-sm", "p-0", "mb-3"], ["accountNav", "ngbNav"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-outline-secondary", "mr-2", 3, "click"], ["src", "/static/svg/export.svg", "alt", "", "width", "13", "height", "13", 1, "mr-2"], ["type", "button", 1, "btn", "btn-danger", "btn-danger-icon", "mr-2", 3, "click"], ["src", "/static/svg/bin-red.svg", "alt", "", "width", "14", "height", "", 1, "mr-2"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], [3, "ngbNavItem"], ["ngbNavLink", "", "routerLinkActive", "account-link-active", 3, "routerLink"]],
    template: function GroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "User Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "nav", 2)(4, "ol", 3)(5, "li", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, GroupComponent_button_11_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, GroupComponent_button_12_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, GroupComponent_ngb_alert_13_Template, 4, 2, "ngb-alert", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nav", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, GroupComponent_div_16_Template, 4, 6, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "router-outlet");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.group.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.exportAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deleteAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.views);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlert, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavLinkBase],
    styles: [".nav-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: black;\n  opacity: 0.5;\n  padding: 0;\n  padding-bottom: 1.6em;\n  margin-right: 3em;\n  margin-bottom: -2px;\n  font-weight: 600;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.nav-link.account-link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  border-bottom: solid 2px #7668ED;\n}\n\n.navbar-expand-sm[_ngcontent-%COMP%] {\n  border-bottom: solid 1px #dadae9;\n}\n\n.account-top-nav[_ngcontent-%COMP%] {\n  border-bottom: solid 1px #dadae9;\n  padding-bottom: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ3JvdXAvZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQWFBO0VBQ0UsZUFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBWEY7O0FBY0E7RUFDRSxVQUFBO0FBWEY7O0FBY0E7RUFDRSxVQUFBO0VBQ0EsZ0NBQUE7QUFYRjs7QUFjQTtFQUNFLGdDQUFBO0FBWEY7O0FBY0E7RUFDRSxnQ0FBQTtFQUNBLHFCQUFBO0FBWEYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb2xvcnMgKi9cclxuJGJyYW5kLXB1cnBsZTogIzc2NjhFRDtcclxuJGJyYW5kLWxpZ2h0LXB1cnBsZTogI0E2OUJGRjtcclxuJGJyYW5kLWdyZXk6ICNGQUZBRkM7XHJcbiRicmFuZC1kYXJrLWJsdWU6ICMzMzM1NjQ7XHJcblxyXG4vLy5icmVhZGNydW1iIHtcclxuLy8gIGZvbnQtc2l6ZTogMzBweDtcclxuLy8gIHBhZGRpbmc6IDA7XHJcbi8vICBtYXJnaW4tYm90dG9tOiAwO1xyXG4vLyAgYmFja2dyb3VuZDogbm9uZTtcclxuLy99XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgcGFkZGluZzogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMS42ZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAzZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5uYXYtbGluay5hY2NvdW50LWxpbmstYWN0aXZlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAkYnJhbmQtcHVycGxlO1xyXG59XHJcblxyXG4ubmF2YmFyLWV4cGFuZC1zbSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGRhcmtlbigkYnJhbmQtZ3JleSwgMTAlKTtcclxufVxyXG5cclxuLmFjY291bnQtdG9wLW5hdiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkYWRhZTk7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
class GroupResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const groupId = route.paramMap.get('id');
    return this.consoleService.getGroup('', groupId);
  }
  static ɵfac = function GroupResolver_Factory(t) {
    return new (t || GroupResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: GroupResolver,
    factory: GroupResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6162:
/*!*********************************************************!*\
  !*** ./src/app/group/members/groupMembers.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupMembersComponent": () => (/* binding */ GroupMembersComponent),
/* harmony export */   "GroupMembersResolver": () => (/* binding */ GroupMembersResolver)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../console.service */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../authentication.service */ 1188);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);








function GroupMembersComponent_ngb_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("An error occurred: ", ctx_r0.error, "");
  }
}
function GroupMembersComponent_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add by membership state");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupMembersComponent_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.activeState);
  }
}
function GroupMembersComponent_div_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupMembersComponent_div_1_button_5_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const f_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.activeState = f_r11);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const f_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r11);
  }
}
function GroupMembersComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GroupMembersComponent_div_1_span_2_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GroupMembersComponent_div_1_span_3_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GroupMembersComponent_div_1_button_5_Template, 2, 1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.activeState || ctx_r1.activeState === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.activeState && ctx_r1.activeState !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.states);
  }
}
function GroupMembersComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "form", 24)(4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27)(7, "div", 28)(8, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupMembersComponent_div_2_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.add());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.addForm);
  }
}
function GroupMembersComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Demote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupMembersComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Promote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupMembersComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupMembersComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No group membership found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function GroupMembersComponent_tr_20_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Superadmin (0)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupMembersComponent_tr_20_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin (1)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupMembersComponent_tr_20_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Member (2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupMembersComponent_tr_20_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Join Request (3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupMembersComponent_tr_20_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Banned (4)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupMembersComponent_tr_20_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36)(1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupMembersComponent_tr_20_td_13_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const i_r17 = ctx_r27.index;
      const m_r16 = ctx_r27.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r26.demoteGroupUser($event, i_r17, m_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function GroupMembersComponent_tr_20_td_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36)(1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupMembersComponent_tr_20_td_14_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const i_r17 = ctx_r30.index;
      const m_r16 = ctx_r30.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.promoteGroupUser($event, i_r17, m_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function GroupMembersComponent_tr_20_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42)(1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupMembersComponent_tr_20_td_15_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const i_r17 = ctx_r33.index;
      const m_r16 = ctx_r33.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.deleteGroupUser($event, i_r17, m_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function GroupMembersComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupMembersComponent_tr_20_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const m_r16 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r35.viewAccount(m_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupMembersComponent_tr_20_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const m_r16 = restoredCtx.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r37.viewAccount(m_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupMembersComponent_tr_20_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const m_r16 = restoredCtx.$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r38.viewAccount(m_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GroupMembersComponent_tr_20_span_6_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GroupMembersComponent_tr_20_span_7_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GroupMembersComponent_tr_20_span_8_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GroupMembersComponent_tr_20_span_9_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GroupMembersComponent_tr_20_span_10_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupMembersComponent_tr_20_Template_td_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);
      const m_r16 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r39.viewAccount(m_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GroupMembersComponent_tr_20_td_13_Template, 4, 0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GroupMembersComponent_tr_20_td_14_Template, 4, 0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GroupMembersComponent_tr_20_td_15_Template, 3, 0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r16 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r16.user.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r16.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r16.state === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r16.state === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r16.state === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r16.state === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r16.state === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r16.user.update_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.editionAllowed());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.editionAllowed());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.editionAllowed());
  }
}
class GroupMembersComponent {
  route;
  router;
  consoleService;
  formBuilder;
  authService;
  error = '';
  group;
  members = [];
  activeState = 'Add Member';
  states = ['Add Member', 'Join'];
  addForm;
  constructor(route, router, consoleService, formBuilder, authService) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.addForm = this.formBuilder.group({
      ids: ['']
    });
  }
  ngOnInit() {
    this.route.data.subscribe(d => {
      this.members.length = 0;
      this.members.push(...d[0].group_users);
    }, err => {
      this.error = err;
    });
    this.route.parent.data.subscribe(d => {
      this.group = d[0];
    }, err => {
      this.error = err;
    });
  }
  editionAllowed() {
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_MAINTAINER;
  }
  deleteGroupUser(event, i, f) {
    event.target.disabled = true;
    event.preventDefault();
    this.error = '';
    this.consoleService.deleteGroupUser('', f.user.id, this.group.id).subscribe(() => {
      this.members.splice(i, 1);
    }, err => {
      this.error = err;
    });
  }
  demoteGroupUser(event, i, f) {
    this.error = '';
    this.consoleService.demoteGroupMember('', this.group.id, f.user.id).subscribe(() => {
      this.members[i].state++;
    }, err => {
      this.error = err;
    });
  }
  promoteGroupUser(event, i, f) {
    this.error = '';
    this.consoleService.promoteGroupMember('', this.group.id, f.user.id).subscribe(() => {
      this.members[i].state--;
    }, err => {
      this.error = err;
    });
  }
  viewAccount(g) {
    this.router.navigate(['/accounts', g.user.id], {
      relativeTo: this.route
    });
  }
  add() {
    let body = {
      ids: this.f.ids.value,
      join_request: this.activeState === 'Join'
    };
    this.consoleService.addGroupUsers('', this.group.id, body).subscribe(() => {
      this.error = '';
      // refresh
      this.router.navigate([this.router.url]);
    }, err => {
      this.error = err;
    });
  }
  get f() {
    return this.addForm.controls;
  }
  static ɵfac = function GroupMembersComponent_Factory(t) {
    return new (t || GroupMembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GroupMembersComponent,
    selectors: [["ng-component"]],
    decls: 21,
    vars: 8,
    consts: [["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], ["class", "btn-group mb-1", "ngbDropdown", "", 4, "ngIf"], ["class", "row no-gutters mb-4", 4, "ngIf"], [1, "row", "no-gutters"], [1, "table", "table-sm", "table-hover", "table-bordered"], [1, "thead-light"], [2, "width", "320px"], [2, "width", "300px"], [2, "width", "180px"], ["style", "width: 70px", 4, "ngIf"], ["style", "width: 90px", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], ["ngbDropdown", "", 1, "btn-group", "mb-1"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-secondary"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["type", "button", "ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "ngbDropdownItem", "", 3, "click"], [1, "row", "no-gutters", "mb-4"], [1, "col", "d-flex", "justify-content-between", "no-gutters", "align-items-center"], [1, "col-md-9"], [3, "formGroup"], [1, "input-group"], ["id", "ids", "type", "text", "formControlName", "ids", "placeholder", "Add user IDs as members, comma-separated", 1, "form-control", "border-right-0"], [1, "input-group-append"], [1, "btn-group"], ["type", "submit", 1, "btn", "btn-primary", "dropdown-radius-left", 3, "click"], [2, "width", "70px"], [2, "width", "90px"], ["colSpan", "7", 1, "text-muted"], [3, "click"], ["class", "text-center", 4, "ngIf"], ["class", "text-center align-middle", 4, "ngIf"], [1, "text-center"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-down"], ["fill-rule", "evenodd", "d", "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-up"], ["fill-rule", "evenodd", "d", "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"], [1, "text-center", "align-middle"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"]],
    template: function GroupMembersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GroupMembersComponent_ngb_alert_0_Template, 4, 2, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GroupMembersComponent_div_1_Template, 6, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GroupMembersComponent_div_2_Template, 10, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "table", 4)(5, "thead", 5)(6, "tr")(7, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Update Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GroupMembersComponent_th_15_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GroupMembersComponent_th_16_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GroupMembersComponent_th_17_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GroupMembersComponent_tr_19_Template, 3, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GroupMembersComponent_tr_20_Template, 16, 11, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.group.open && ctx.editionAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editionAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editionAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editionAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editionAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.members.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAlert, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownItem, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
    styles: [".table-hover[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.dropdown-radius-left[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ3JvdXAvbWVtYmVycy9ncm91cE1lbWJlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtaG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duLXJhZGl1cy1sZWZ0IHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
class GroupMembersResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const groupId = route.parent.paramMap.get('id');
    return this.consoleService.getMembers('', groupId);
  }
  static ɵfac = function GroupMembersResolver_Factory(t) {
    return new (t || GroupMembersResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: GroupMembersResolver,
    factory: GroupMembersResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3479:
/*!********************************************!*\
  !*** ./src/app/groups/groups.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupListComponent": () => (/* binding */ GroupListComponent),
/* harmony export */   "GroupSearchResolver": () => (/* binding */ GroupSearchResolver)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ 1188);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/delete-confirm.service */ 8406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);









function GroupListComponent_ngb_alert_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error when querying groups: ", ctx_r0.error, "");
  }
}
function GroupListComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function GroupListComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No groups found - change the filter criteria or add new user groups.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function GroupListComponent_tr_34_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
  }
}
function GroupListComponent_tr_34_td_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32)(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupListComponent_tr_34_td_8_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const i_r5 = ctx_r9.index;
      const g_r4 = ctx_r9.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.deleteGroup($event, i_r5, g_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function GroupListComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupListComponent_tr_34_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const g_r4 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.viewGroup(g_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupListComponent_tr_34_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const g_r4 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.viewGroup(g_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupListComponent_tr_34_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const g_r4 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.viewGroup(g_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GroupListComponent_tr_34_td_7_Template, 1, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GroupListComponent_tr_34_td_8_Template, 3, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const g_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r4.update_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.deleteAllowed() && g_r4.id === ctx_r3.systemUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.deleteAllowed() && g_r4.id !== ctx_r3.systemUserId);
  }
}
class GroupListComponent {
  route;
  router;
  consoleService;
  authService;
  formBuilder;
  deleteConfirmService;
  systemUserId = '00000000-0000-0000-0000-000000000000';
  error = '';
  groupsCount = 0;
  groups = [];
  nextCursor = '';
  prevCursor = '';
  searchForm;
  constructor(route, router, consoleService, authService, formBuilder, deleteConfirmService) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.deleteConfirmService = deleteConfirmService;
  }
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      filter: ['']
    });
    const qp = this.route.snapshot.queryParamMap;
    this.f.filter.setValue(qp.get('filter'));
    this.nextCursor = qp.get('cursor');
    if (this.nextCursor && this.nextCursor !== '') {
      this.search(1);
    } else if (this.f.filter.value) {
      this.search(0);
    }
    this.route.data.subscribe(d => {
      this.groups.length = 0;
      if (d) {
        this.groups.push(...d[0].groups);
        this.groupsCount = d[0].total_count;
        this.nextCursor = d[0].next_cursor;
        this.prevCursor = d[0].prev_cursor;
      }
    }, err => {
      this.error = err;
    });
  }
  search(state) {
    let cursor = '';
    switch (state) {
      case -1:
        cursor = this.prevCursor;
        break;
      case 0:
        cursor = '';
        break;
      case 1:
        cursor = this.nextCursor;
        break;
    }
    this.consoleService.listGroups('', this.f.filter.value, cursor).subscribe(d => {
      this.error = '';
      this.groups.length = 0;
      this.groups.push(...d.groups);
      this.groupsCount = d.total_count;
      this.nextCursor = d.next_cursor;
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          filter: this.f.filter.value,
          cursor
        },
        queryParamsHandling: 'merge'
      });
    }, err => {
      this.error = err;
    });
  }
  deleteGroup(event, i, o) {
    this.deleteConfirmService.openDeleteConfirmModal(() => {
      event.target.disabled = true;
      event.preventDefault();
      this.error = '';
      this.consoleService.deleteGroup('', o.id).subscribe(() => {
        this.error = '';
        this.groups.splice(i, 1);
        this.groupsCount--;
      }, err => {
        this.error = err;
      });
    });
  }
  deleteAllowed() {
    // only admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_DEVELOPER;
  }
  viewGroup(g) {
    this.router.navigate(['/groups', g.id], {
      relativeTo: this.route
    });
  }
  get f() {
    return this.searchForm.controls;
  }
  static ɵfac = function GroupListComponent_Factory(t) {
    return new (t || GroupListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_5__.DeleteConfirmService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GroupListComponent,
    selectors: [["ng-component"]],
    decls: 35,
    vars: 8,
    consts: [[1, "pb-1"], [1, "pb-3"], [1, "row", "no-gutters", "mb-4"], [1, "col", "d-flex", "justify-content-between", "no-gutters", "align-items-center"], [1, "col-md-9"], [3, "formGroup", "ngSubmit"], [1, "input-group"], ["type", "text", "formControlName", "filter", "placeholder", "Filter by group ID or name (use '%' for wildcard search)", 1, "form-control", "border-right-0"], [1, "input-group-append"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", "dropdown-radius", 3, "click"], [1, "col-md-3", "justify-content-end", "text-right"], ["role", "group", "aria-label", "Search", 1, "btn-group", "page-btns"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "disabled", "click"], ["src", "/static/svg/page-first.svg", "alt", "", "width", "20", "height", ""], ["src", "/static/svg/page-next.svg", "alt", "", "width", "20", "height", ""], ["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "row", "no-gutters"], [1, "table", "table-sm", "table-hover", "table-bordered"], [1, "thead-light"], [2, "width", "320px"], [2, "width", "180px"], ["style", "width: 90px", 4, "ngIf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], [2, "width", "90px"], ["colSpan", "5", 1, "text-muted"], [3, "click"], ["class", "text-center", 4, "ngIf"], [1, "text-center"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"]],
    template: function GroupListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GroupListComponent_Template_form_ngSubmit_7_listener() {
          return ctx.search(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupListComponent_Template_button_click_12_listener() {
          return ctx.search(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupListComponent_Template_button_click_16_listener() {
          return ctx.search(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupListComponent_Template_button_click_18_listener() {
          return ctx.search(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GroupListComponent_ngb_alert_20_Template, 4, 2, "ngb-alert", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17)(22, "table", 18)(23, "thead", 19)(24, "tr")(25, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Group ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Last Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, GroupListComponent_th_31_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, GroupListComponent_tr_33_Template, 3, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, GroupListComponent_tr_34_Template, 9, 5, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.groupsCount, " groups found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.groups.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nextCursor === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groups.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlert, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: [".dropdown-radius[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.table-hover[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLXJhZGl1cyB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFibGUtaG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
class GroupSearchResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const filter = route.queryParamMap.get('filter');
    return this.consoleService.listGroups('', filter, null);
  }
  static ɵfac = function GroupSearchResolver_Factory(t) {
    return new (t || GroupSearchResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: GroupSearchResolver,
    factory: GroupSearchResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9680:
/*!**********************************************************!*\
  !*** ./src/app/leaderboard/details/details.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardDetailsComponent": () => (/* binding */ LeaderboardDetailsComponent)
/* harmony export */ });
/* harmony import */ var vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-jsoneditor */ 4221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





const _c0 = ["editor"];
function LeaderboardDetailsComponent_ngb_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("An error occurred: ", ctx_r0.error, "");
  }
}
function LeaderboardDetailsComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tournament");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3)(11, "div", 4)(12, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2)(16, "div", 3)(17, "div", 4)(18, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3)(22, "div", 4)(23, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Max Num Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2)(27, "div", 3)(28, "div", 4)(29, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3)(33, "div", 4)(34, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Max Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2)(38, "div", 3)(39, "div", 4)(40, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3)(44, "div", 4)(45, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Join Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2)(49, "div", 3)(50, "div", 4)(51, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Start Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3)(55, "div", 4)(56, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "End Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 2)(60, "div", 3)(61, "div", 4)(62, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Start Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3)(66, "div", 4)(67, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "End Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.leaderboard.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.leaderboard.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.leaderboard.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.leaderboard.max_num_score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.leaderboard.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.leaderboard.max_size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.leaderboard.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.leaderboard.join_required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.leaderboard.start_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.leaderboard.end_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.leaderboard.start_active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.leaderboard.end_active);
  }
}
class LeaderboardDetailsComponent {
  route;
  editor;
  orderString = {
    0: 'Ascending',
    1: 'Descending'
  };
  operatorString = {
    0: 'Best',
    1: 'Set',
    2: 'Increment',
    3: 'Decrement'
  };
  jsonEditor;
  leaderboard;
  error = '';
  constructor(route) {
    this.route = route;
  }
  ngOnInit() {
    this.route.parent.data.subscribe(d => {
      this.leaderboard = d[0];
    }, err => {
      this.error = err;
    });
  }
  ngAfterViewInit() {
    this.jsonEditor = new vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_1__.JSONEditor({
      target: this.editor.nativeElement,
      props: {
        mode: vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_1__.Mode.text,
        readOnly: true,
        content: {
          text: this.leaderboard.metadata ?? ''
        }
      }
    });
  }
  static ɵfac = function LeaderboardDetailsComponent_Factory(t) {
    return new (t || LeaderboardDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LeaderboardDetailsComponent,
    selectors: [["ng-component"]],
    viewQuery: function LeaderboardDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
      }
    },
    decls: 50,
    vars: 10,
    consts: [["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "add-border", "mb-3"], [1, "row"], [1, "col-md-6", "d-flex", "justify-content-start", "align-items-baseline"], [1, "col-3", "pl-0"], ["for", "id", 1, "d-inline"], ["type", "text", "id", "id", "placeholder", "ID", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "authoritative", 1, "d-inline"], ["type", "text", "id", "authoritative", "placeholder", "Authoritative", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "sortorder", 1, "d-inline"], ["type", "text", "id", "sortorder", "placeholder", "Sort Order", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "operator", 1, "d-inline"], ["type", "text", "id", "operator", "placeholder", "Operator", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "reset", 1, "d-inline"], ["type", "text", "id", "reset", "placeholder", "Not Set", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "create_time", 1, "d-inline"], ["type", "text", "id", "create_time", "placeholder", "Create Time", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], [1, "row", "add-border-single-row-bottom"], ["type", "text", "id", "prev_reset", "placeholder", "Not Set", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["type", "text", "id", "next_reset", "placeholder", "Create Time", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["class", "mt-4", 4, "ngIf"], [1, "card", "p-2", "mb-3", "jsoneditor", 2, "height", "400px"], [2, "height", "400px"], ["editor", ""], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], [1, "mt-4"], [1, "mb-4"], ["for", "title", 1, "d-inline"], ["type", "text", "id", "title", "placeholder", "Title", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "description", 1, "d-inline"], ["type", "text", "id", "description", "placeholder", "Description", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "category", 1, "d-inline"], ["type", "text", "id", "category", "placeholder", "Not Set", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "max_num_score", 1, "d-inline"], ["type", "text", "id", "max_num_score", "placeholder", "Not Set", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "size", 1, "d-inline"], ["type", "text", "id", "size", "placeholder", "Not Set", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "max_size", 1, "d-inline"], ["type", "text", "id", "max_size", "placeholder", "Not Set", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "duration", 1, "d-inline"], ["type", "text", "id", "duration", "placeholder", "Not Set", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "join_required", 1, "d-inline"], ["type", "text", "id", "join_required", "placeholder", "Not Set", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "start_time", 1, "d-inline"], ["type", "text", "id", "start_time", "placeholder", "Not Set", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "end_time", 1, "d-inline"], ["type", "text", "id", "end_time", "placeholder", "Not Set", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "start_active", 1, "d-inline"], ["type", "text", "id", "start_active", "placeholder", "Not Set", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "end_active", 1, "d-inline"], ["type", "text", "id", "end_active", "placeholder", "Not Set", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"]],
    template: function LeaderboardDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LeaderboardDetailsComponent_ngb_alert_0_Template, 4, 2, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "div", 4)(10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Authoritative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2)(14, "div", 3)(15, "div", 4)(16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sort Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3)(20, "div", 4)(21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2)(25, "div", 3)(26, "div", 4)(27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Reset Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3)(31, "div", 4)(32, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Create Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17)(36, "div", 3)(37, "div", 4)(38, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Prev Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3)(42, "div", 4)(43, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Next Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, LeaderboardDetailsComponent_div_46_Template, 70, 12, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.leaderboard.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.leaderboard.authoritative);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.orderString[ctx.leaderboard.sort_order]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.operatorString[ctx.leaderboard.operator]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.leaderboard.reset_schedule);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.leaderboard.create_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.leaderboard.prev_reset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.leaderboard.next_reset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.leaderboard.tournament);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbAlert],
    styles: [".leaderboard-top-nav[_ngcontent-%COMP%] {\n  border-bottom: solid 1px #dadae9;\n  padding-bottom: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGVhZGVyYm9hcmQvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxxQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmxlYWRlcmJvYXJkLXRvcC1uYXYge1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGFkYWU5O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7354:
/*!******************************************************!*\
  !*** ./src/app/leaderboard/leaderboard.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardComponent": () => (/* binding */ LeaderboardComponent),
/* harmony export */   "LeaderboardResolver": () => (/* binding */ LeaderboardResolver)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ 1188);
/* harmony import */ var _shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/delete-confirm.service */ 8406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);








function LeaderboardComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardComponent_button_11_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.deleteLeaderboard($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete Leaderboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LeaderboardComponent_ngb_alert_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("An error occurred: ", ctx_r1.error, "");
  }
}
const _c0 = function (a1, a2) {
  return ["/leaderboards", a1, a2];
};
function LeaderboardComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", v_r6.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r3.leaderboard.id, v_r6.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](v_r6.label);
  }
}
const _c1 = function () {
  return ["/leaderboards"];
};
class LeaderboardComponent {
  route;
  router;
  consoleService;
  authService;
  deleteConfirmService;
  leaderboard;
  error = '';
  views = [{
    label: 'Details',
    path: 'details'
  }, {
    label: 'Records',
    path: 'records'
  }];
  constructor(route, router, consoleService, authService, deleteConfirmService) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.authService = authService;
    this.deleteConfirmService = deleteConfirmService;
  }
  ngOnInit() {
    this.route.data.subscribe(d => {
      this.leaderboard = d[0];
    }, err => {
      this.error = err;
    });
  }
  deleteLeaderboard(event) {
    this.deleteConfirmService.openDeleteConfirmModal(() => {
      event.target.disabled = true;
      this.error = '';
      this.consoleService.deleteLeaderboard('', this.leaderboard.id).subscribe(() => {
        this.error = '';
        this.router.navigate(['/leaderboards']);
      }, err => {
        this.error = err;
      });
    });
  }
  deleteAllowed() {
    // only admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_DEVELOPER;
  }
  static ɵfac = function LeaderboardComponent_Factory(t) {
    return new (t || LeaderboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_4__.DeleteConfirmService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LeaderboardComponent,
    selectors: [["ng-component"]],
    decls: 17,
    vars: 6,
    consts: [[1, "pb-1"], [1, "leaderboard-top-nav", "d-flex", "justify-content-between", "align-items-baseline", "mb-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "breadcrumb-item", "active"], ["type", "button", "class", "btn btn-danger btn-danger-icon", 3, "click", 4, "ngIf"], ["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], ["ngbNav", "", 1, "navbar-expand-sm", "p-0", "mb-3"], ["leaderboardNav", "ngbNav"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-danger", "btn-danger-icon", 3, "click"], ["src", "/static/svg/bin-red.svg", "alt", "", "width", "13", "height", "13", 1, "mr-2"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], [3, "ngbNavItem"], ["ngbNavLink", "", "routerLinkActive", "account-link-active", 3, "routerLink"]],
    template: function LeaderboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Leaderboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "nav", 2)(4, "ol", 3)(5, "li", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Leaderboards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LeaderboardComponent_button_11_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LeaderboardComponent_ngb_alert_12_Template, 4, 2, "ngb-alert", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nav", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LeaderboardComponent_div_15_Template, 4, 6, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.leaderboard.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.views);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAlert, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavLinkBase],
    styles: [".nav-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Montserrat\", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: black;\n  opacity: 0.5;\n  padding: 0;\n  padding-bottom: 1.6em;\n  margin-right: 3em;\n  margin-bottom: -2px;\n  font-weight: 600;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.nav-link.account-link-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  border-bottom: solid 2px #7668ED;\n}\n\n.navbar-expand-sm[_ngcontent-%COMP%] {\n  border-bottom: solid 1px #dadae9;\n}\n\n.leaderboard-top-nav[_ngcontent-%COMP%] {\n  border-bottom: solid 1px #dadae9;\n  padding-bottom: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQWFBO0VBQ0UsZUFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBWEY7O0FBY0E7RUFDRSxVQUFBO0FBWEY7O0FBY0E7RUFDRSxVQUFBO0VBQ0EsZ0NBQUE7QUFYRjs7QUFjQTtFQUNFLGdDQUFBO0FBWEY7O0FBY0E7RUFDRSxnQ0FBQTtFQUNBLHFCQUFBO0FBWEYiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb2xvcnMgKi9cclxuJGJyYW5kLXB1cnBsZTogIzc2NjhFRDtcclxuJGJyYW5kLWxpZ2h0LXB1cnBsZTogI0E2OUJGRjtcclxuJGJyYW5kLWdyZXk6ICNGQUZBRkM7XHJcbiRicmFuZC1kYXJrLWJsdWU6ICMzMzM1NjQ7XHJcblxyXG4vLy5icmVhZGNydW1iIHtcclxuLy8gIGZvbnQtc2l6ZTogMzBweDtcclxuLy8gIHBhZGRpbmc6IDA7XHJcbi8vICBtYXJnaW4tYm90dG9tOiAwO1xyXG4vLyAgYmFja2dyb3VuZDogbm9uZTtcclxuLy99XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgcGFkZGluZzogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMS42ZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAzZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5uYXYtbGluay5hY2NvdW50LWxpbmstYWN0aXZlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAkYnJhbmQtcHVycGxlO1xyXG59XHJcblxyXG4ubmF2YmFyLWV4cGFuZC1zbSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGRhcmtlbigkYnJhbmQtZ3JleSwgMTAlKTtcclxufVxyXG5cclxuLmxlYWRlcmJvYXJkLXRvcC1uYXYge1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGFkYWU5O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
class LeaderboardResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const leaderboardId = route.paramMap.get('id');
    return this.consoleService.getLeaderboard('', leaderboardId);
  }
  static ɵfac = function LeaderboardResolver_Factory(t) {
    return new (t || LeaderboardResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LeaderboardResolver,
    factory: LeaderboardResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3104:
/*!**********************************************************!*\
  !*** ./src/app/leaderboard/records/records.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardRecordsComponent": () => (/* binding */ LeaderboardRecordsComponent),
/* harmony export */   "LeaderboardRecordsResolver": () => (/* binding */ LeaderboardRecordsResolver)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../console.service */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication.service */ 1188);
/* harmony import */ var _shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/delete-confirm.service */ 8406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);








function LeaderboardRecordsComponent_ngb_alert_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("An error occurred: ", ctx_r0.error, "");
  }
}
function LeaderboardRecordsComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LeaderboardRecordsComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No records found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function LeaderboardRecordsComponent_ng_template_33_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 28);
  }
}
function LeaderboardRecordsComponent_ng_template_33_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 29);
  }
}
function LeaderboardRecordsComponent_ng_template_33_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30)(1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardRecordsComponent_ng_template_33_td_18_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const i_r4 = ctx_r11.index;
      const r_r5 = ctx_r11.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.deleteRecord($event, i_r4, r_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function LeaderboardRecordsComponent_ng_template_33_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 32)(2, "pre", 33)(3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r5.metadata);
  }
}
function LeaderboardRecordsComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardRecordsComponent_ng_template_33_Template_div_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const i_r4 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.recordsMetadataOpen[i_r4] = !ctx_r14.recordsMetadataOpen[i_r4]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LeaderboardRecordsComponent_ng_template_33_div_3_Template, 1, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LeaderboardRecordsComponent_ng_template_33_div_4_Template, 1, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LeaderboardRecordsComponent_ng_template_33_td_18_Template, 3, 0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LeaderboardRecordsComponent_ng_template_33_tr_19_Template, 5, 1, "tr", 17);
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const r_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.recordsMetadataOpen[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.recordsMetadataOpen[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", r_r5.owner_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r5.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r5.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r5.subscore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r5.rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r5.num_score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r5.expiry_time ? r_r5.expiry_time : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.deleteAllowed());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.recordsMetadataOpen[i_r4]);
  }
}
class LeaderboardRecordsComponent {
  route;
  consoleService;
  authService;
  deleteConfirmService;
  error = '';
  leaderboard;
  records = [];
  recordsMetadataOpen = [];
  nextCursor = '';
  prevCursor = '';
  constructor(route, consoleService, authService, deleteConfirmService) {
    this.route = route;
    this.consoleService = consoleService;
    this.authService = authService;
    this.deleteConfirmService = deleteConfirmService;
  }
  ngOnInit() {
    this.route.data.subscribe(d => {
      this.records.length = 0;
      this.records.push(...d[0].records);
      this.nextCursor = d[0].next_cursor;
      this.prevCursor = d[0].prev_cursor;
      this.recordsMetadataOpen.length = this.records.length;
    }, err => {
      this.error = err;
    });
    this.route.parent.data.subscribe(d => {
      this.leaderboard = d[0];
    }, err => {
      this.error = err;
    });
  }
  loadRecords(state) {
    let cursor = '';
    switch (state) {
      case -1:
        cursor = this.prevCursor;
        break;
      case 0:
        cursor = '';
        break;
      case 1:
        cursor = this.nextCursor;
        break;
    }
    this.consoleService.listLeaderboardRecords('', this.leaderboard.id, null, 100, cursor, null).subscribe(d => {
      this.error = '';
      this.nextCursor = d.next_cursor;
      this.prevCursor = d.prev_cursor;
      this.records.length = 0;
      this.records.push(...d.records);
      this.recordsMetadataOpen.length = 0; // wipe old records
      this.recordsMetadataOpen.length = this.records.length;
    }, err => {
      this.error = err;
    });
  }
  deleteRecord(event, i, r) {
    this.deleteConfirmService.openDeleteConfirmModal(() => {
      event.target.disabled = true;
      event.preventDefault();
      this.error = '';
      this.consoleService.deleteLeaderboardRecord('', r.leaderboard_id, r.owner_id).subscribe(() => {
        this.error = '';
        this.records.splice(i, 1);
        this.recordsMetadataOpen.splice(i, 1);
      }, err => {
        this.error = err;
      });
    });
  }
  deleteAllowed() {
    // only admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_MAINTAINER;
  }
  static ɵfac = function LeaderboardRecordsComponent_Factory(t) {
    return new (t || LeaderboardRecordsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_4__.DeleteConfirmService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LeaderboardRecordsComponent,
    selectors: [["ng-component"]],
    decls: 34,
    vars: 7,
    consts: [["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "row", "no-gutters", "mb-3"], [1, "col", "d-flex", "justify-content-between", "no-gutters"], [1, "col-md-9"], [1, "col-md-3", "justify-content-end", "text-right"], ["role", "group", 1, "btn-group", "page-btns"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "disabled", "click"], ["src", "/static/svg/page-first.svg", "alt", "", "width", "20", "height", ""], ["src", "/static/svg/page-prev.svg", "alt", "", "width", "20", "height", ""], ["src", "/static/svg/page-next.svg", "alt", "", "width", "20", "height", ""], [1, "row", "no-gutters"], [1, "table", "table-sm", "table-bordered"], [1, "thead-light"], [2, "width", "380px"], [2, "width", "150px"], [2, "width", "180px"], ["style", "width: 90px", 4, "ngIf"], [4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], [2, "width", "90px"], ["colSpan", "8", 1, "text-muted"], [1, "arrow", 3, "click"], ["class", "arrow-right", 4, "ngIf"], ["class", "arrow-down", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [1, "arrow-right"], [1, "arrow-down"], [1, "text-center"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], ["colspan", "7", 1, "align-middle"], [1, "pre-wrap", "m-0", "p-0"]],
    template: function LeaderboardRecordsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LeaderboardRecordsComponent_ngb_alert_0_Template, 4, 2, "ngb-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardRecordsComponent_Template_button_click_6_listener() {
          return ctx.loadRecords(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardRecordsComponent_Template_button_click_8_listener() {
          return ctx.loadRecords(-1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardRecordsComponent_Template_button_click_10_listener() {
          return ctx.loadRecords(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "table", 11)(14, "thead", 12)(15, "tr")(16, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Owner ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Subscore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "No. of scores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Expiry Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, LeaderboardRecordsComponent_th_30_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, LeaderboardRecordsComponent_tr_32_Template, 3, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, LeaderboardRecordsComponent_ng_template_33_Template, 20, 11, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.records.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.prevCursor === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nextCursor === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.records.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.records);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAlert],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
class LeaderboardRecordsResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const leaderboardId = route.parent.paramMap.get('id');
    return this.consoleService.listLeaderboardRecords('', leaderboardId, null, 100, null, null);
  }
  static ɵfac = function LeaderboardRecordsResolver_Factory(t) {
    return new (t || LeaderboardRecordsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LeaderboardRecordsResolver,
    factory: LeaderboardRecordsResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1314:
/*!********************************************************!*\
  !*** ./src/app/leaderboards/leaderboards.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardListResolver": () => (/* binding */ LeaderboardListResolver),
/* harmony export */   "LeaderboardsComponent": () => (/* binding */ LeaderboardsComponent)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ 1188);
/* harmony import */ var _shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/delete-confirm.service */ 8406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);








function LeaderboardsComponent_ngb_alert_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error while processing request: ", ctx_r0.error, "");
  }
}
function LeaderboardsComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LeaderboardsComponent_tr_31_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardsComponent_tr_31_td_9_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const l_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.viewLeaderboardEntries(l_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LeaderboardsComponent_tr_31_td_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardsComponent_tr_31_td_10_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const l_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.viewLeaderboardEntries(l_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LeaderboardsComponent_tr_31_td_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardsComponent_tr_31_td_11_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const l_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.viewLeaderboardEntries(l_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LeaderboardsComponent_tr_31_td_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardsComponent_tr_31_td_12_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const l_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.viewLeaderboardEntries(l_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function LeaderboardsComponent_tr_31_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26)(1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardsComponent_tr_31_td_13_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const i_r5 = ctx_r24.index;
      const l_r4 = ctx_r24.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.deleteLeaderboard($event, i_r5, l_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function LeaderboardsComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardsComponent_tr_31_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const l_r4 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r26.viewLeaderboardEntries(l_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardsComponent_tr_31_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const l_r4 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r28.viewLeaderboardEntries(l_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardsComponent_tr_31_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const l_r4 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.viewLeaderboardEntries(l_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardsComponent_tr_31_Template_td_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);
      const l_r4 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r30.viewLeaderboardEntries(l_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LeaderboardsComponent_tr_31_td_9_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LeaderboardsComponent_tr_31_td_10_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LeaderboardsComponent_tr_31_td_11_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LeaderboardsComponent_tr_31_td_12_Template, 2, 0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LeaderboardsComponent_tr_31_td_13_Template, 3, 0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const l_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.orderString[l_r4.sort_order]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.operatorString[l_r4.operator]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](l_r4.reset_schedule === "" ? "-" : l_r4.reset_schedule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", l_r4.authoritative);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !l_r4.authoritative);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", l_r4.tournament);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !l_r4.tournament);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.deleteAllowed());
  }
}
function LeaderboardsComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No leaderboards were found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class LeaderboardsComponent {
  route;
  router;
  authService;
  consoleService;
  deleteConfirmService;
  error = '';
  leaderboards = [];
  nextCursor = "";
  leaderboardsCount = 0;
  orderString = {
    0: 'Ascending',
    1: 'Descending'
  };
  operatorString = {
    0: 'Best',
    1: 'Set',
    2: 'Increment',
    3: 'Decrement'
  };
  constructor(route, router, authService, consoleService, deleteConfirmService) {
    this.route = route;
    this.router = router;
    this.authService = authService;
    this.consoleService = consoleService;
    this.deleteConfirmService = deleteConfirmService;
  }
  ngOnInit() {
    const qp = this.route.snapshot.queryParamMap;
    this.nextCursor = qp.get('cursor');
    if (this.nextCursor && this.nextCursor !== '') {
      this.search(1);
    } else {
      this.search(0);
    }
  }
  deleteAllowed() {
    // only admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_DEVELOPER;
  }
  deleteLeaderboard(event, i, l) {
    this.deleteConfirmService.openDeleteConfirmModal(() => {
      event.target.disabled = true;
      event.preventDefault();
      this.error = '';
      this.consoleService.deleteLeaderboard('', l.id).subscribe(() => {
        this.error = '';
        this.leaderboards.splice(i, 1);
        this.leaderboardsCount--;
      }, err => {
        this.error = err;
      });
    });
  }
  viewLeaderboardEntries(l) {
    this.router.navigate(['/leaderboards', l.id], {
      relativeTo: this.route
    });
  }
  search(state) {
    let cursor = '';
    switch (state) {
      case 0:
        cursor = '';
        break;
      case 1:
        cursor = this.nextCursor;
        break;
    }
    this.consoleService.listLeaderboards('', cursor).subscribe(d => {
      this.error = '';
      this.leaderboards.length = 0;
      this.leaderboards.push(...d.leaderboards);
      this.leaderboardsCount = d.total;
      this.nextCursor = d.cursor;
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          cursor
        },
        queryParamsHandling: 'merge'
      });
    }, err => {
      this.error = err;
    });
  }
  static ɵfac = function LeaderboardsComponent_Factory(t) {
    return new (t || LeaderboardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_4__.DeleteConfirmService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LeaderboardsComponent,
    selectors: [["ng-component"]],
    decls: 33,
    vars: 7,
    consts: [[1, "row", "no-gutters"], [1, "col", "d-flex", "justify-content-between", "no-gutters", "align-items-center"], [1, "col-md-9"], [1, "pb-1"], [1, "pb-4"], [1, "col-md-3", "justify-content-end", "text-right"], ["role", "group", "aria-label", "Search", 1, "btn-group", "page-btns"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "disabled", "click"], ["src", "/static/svg/page-first.svg", "alt", "", "width", "20", "height", ""], ["src", "/static/svg/page-next.svg", "alt", "", "width", "20", "height", ""], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "table", "table-sm", "table-bordered", "table-hover"], [1, "thead-light"], [2, "width", "130px"], [2, "width", "100px"], ["style", "width: 90px", 4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "danger", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], [2, "width", "90px"], [3, "click"], ["class", "text-center", 3, "click", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [1, "text-center", 3, "click"], [1, "text-center"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], ["colspan", "7", 1, "text-muted"]],
    template: function LeaderboardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Leaderboards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardsComponent_Template_button_click_9_listener() {
          return ctx.search(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardsComponent_Template_button_click_11_listener() {
          return ctx.search(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LeaderboardsComponent_ngb_alert_13_Template, 4, 2, "ngb-alert", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 11)(15, "thead", 12)(16, "tr")(17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Leaderboard ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sort Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Reset Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Authoritative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Tournament");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, LeaderboardsComponent_th_29_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LeaderboardsComponent_tr_31_Template, 14, 9, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, LeaderboardsComponent_tr_32_Template, 3, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.leaderboardsCount, " leaderboards found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.leaderboards.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nextCursor === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.leaderboards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.leaderboards.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAlert],
    styles: [".table-hover[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGVhZGVyYm9hcmRzL2xlYWRlcmJvYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1ob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
class LeaderboardListResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    return this.consoleService.listLeaderboards('');
  }
  static ɵfac = function LeaderboardListResolver_Factory(t) {
    return new (t || LeaderboardListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LeaderboardListResolver,
    factory: LeaderboardListResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent),
/* harmony export */   "LoginGuard": () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_segment_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-segment-analytics */ 7667);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication.service */ 1188);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








function LoginComponent_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.error, " ");
  }
}
const _c0 = function (a0) {
  return {
    "was-validated": a0
  };
};
const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function LoginComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign in to continue to the Nakama Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LoginComponent_div_4_div_3_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_4_Template_form_ngSubmit_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 22)(6, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Please enter a username.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 22)(12, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Password must be at least 8 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 28)(18, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "MFA Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Code must contain 6 digits.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.loginForm)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx_r0.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, ctx_r0.f.username.dirty && ctx_r0.f.username.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.f.username.disabled || ctx_r0.f.username.pristine || ctx_r0.f.username.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c1, ctx_r0.f.password.dirty && ctx_r0.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.f.password.disabled || ctx_r0.f.password.pristine || ctx_r0.f.password.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.mfaEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c1, ctx_r0.f.code.dirty && ctx_r0.f.code.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.f.code.disabled || ctx_r0.f.code.pristine || ctx_r0.f.code.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.loginForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.mfaEnabled ? "Verify" : "Login");
  }
}
function LoginComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
  }
}
class LoginComponent {
  router;
  segment;
  formBuilder;
  route;
  authService;
  error = '';
  loginForm;
  submitted;
  mfaEnabled = false;
  returnUrl;
  constructor(router, segment, formBuilder, route, authService) {
    this.router = router;
    this.segment = segment;
    this.formBuilder = formBuilder;
    this.route = route;
    this.authService = authService;
  }
  ngOnInit() {
    if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.nt) {
      this.segment.page('/login');
    }
    this.loginForm = this.formBuilder.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8)])],
      code: [{
        value: '',
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(8)])]
    });
    this.returnUrl = this.route.snapshot.queryParams.next || '/';
  }
  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.f.username.value, this.f.password.value, this.f.code.value).subscribe(response => {
      this.loginForm.reset();
      this.submitted = false;
      if (response.body.mfa_code && this.authService.mfaRequired) {
        this.router.navigate(['mfa'], {
          relativeTo: this.route
        });
      } else {
        this.router.navigate([this.returnUrl]);
      }
    }, err => {
      if (err.status === 403) {
        // MFA is enabled for this account, require code.
        this.mfaEnabled = true;
        this.f.username.disable();
        this.f.password.disable();
        this.f.code.enable();
      } else {
        this.error = err;
        this.submitted = false;
      }
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  static ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_segment_analytics__WEBPACK_IMPORTED_MODULE_4__.SegmentService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["ng-component"]],
    decls: 37,
    vars: 2,
    consts: [[1, "d-flex", "flex-column", "flex-lg-row", "h-100", "relative"], ["src", "/static/svg/logo-white.svg", "alt", "Nakama Logo", "width", "175", "height", "43", 1, "logo"], [1, "login-panel"], [1, "align-self-center", "login-form"], ["class", "px-4", 4, "ngIf", "ngIfElse"], ["mfa", ""], [1, "heroic-stack"], [1, ""], ["src", "/static/svg/hiro-logo.svg", "alt", "Hiro Logo", "width", "110", "height", "50", 1, "mb-3"], ["href", "https://www.youtube.com/playlist?list=PLOAExZcDNj9sWny_J8J5ARkxDTwAV0i6f&utm_source=NOSS%20Sign-In&utm_medium=Banner&utm_campaign=NOSS%20Reconstructing%20Fun%20Sign-In", "target", "_blank"], ["href", "https://heroiclabs.com/hiro/?utm_source=NOSS%20Sign-In&utm_medium=Banner&utm_campaign=NOSS%20Hiro%20Sign-In", "target", "_blank", 1, "login-link"], ["src", "/static/svg/satori-logo.svg", "alt", "Satori Logo", "width", "134", "height", "50", 1, "mb-3"], ["href", "https://heroiclabs.com/satori/?utm_source=NOSS%20Sign-In&utm_medium=Banner&utm_campaign=NOSS%20Satori%20Sign-In", "target", "_blank", 1, "login-link"], [1, "d-flex", "align-items-center", "mb-3"], ["src", "/static/svg/calendar.svg", "alt", "Calendar"], [1, "font-weight-bold", "ml-2", 2, "font-size", "20px"], ["href", "https://heroiclabs.com/bookademo?utm_source=NOSS%20Sign-In&utm_medium=Banner&utm_campaign=NOSS%20Book%20a%20Demo%20Sign-In", "target", "_blank", 1, "login-link-pink"], ["src", "/static/svg/phone.svg", "alt", "Phone"], [1, "px-4"], [1, "login-title", "mb-4"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], [3, "formGroup", "ngClass", "ngSubmit"], [1, "form-group"], ["for", "username"], ["type", "text", "id", "username", "formControlName", "username", "required", "", "autofocus", "", 1, "form-control", 3, "ngClass"], [1, "invalid-tooltip", 3, "hidden"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "required", "", 1, "form-control", 3, "ngClass"], [1, "form-group", 3, "hidden"], ["for", "code"], ["type", "code", "id", "code", "formControlName", "code", "required", "", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled"], ["role", "alert", 1, "alert", "alert-warning"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 25, 20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LoginComponent_ng_template_5_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "A metagame framework built on Nakama to add virtual store, rewards, event leaderboards and much more rapidly and flexibly to your game. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "RECONSTRUCTING FUN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " on YouTube shows you how.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Explore Hiro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "LiveOps for your live services game. Live events, Experiments, Feature Flags, Audience Segmentation and Analytics built to work independently but beautifully with Nakama.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Explore Satori");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div")(27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Working at a Game Studio?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Ready to take your game development to the next level? Contact us for a free 45 minute demo call.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Schedule a call with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.router.url.endsWith("mfa"))("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: [".logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 15px;\n}\n@media (min-width: 992px) {\n  .logo[_ngcontent-%COMP%] {\n    top: 40px;\n    left: 30px;\n  }\n}\n\n.login-form[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 600px;\n  margin-top: 100px;\n}\n@media (min-width: 992px) {\n  .login-form[_ngcontent-%COMP%] {\n    width: 485px;\n    margin: auto;\n  }\n}\n\n.login-title[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 300;\n}\n\n.login-panel[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  display: flex;\n}\n.login-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 20px;\n}\n\n.heroic-stack[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n  max-width: 600px;\n  margin: auto;\n  margin-top: 70px;\n  margin-bottom: 40px;\n}\n@media (min-width: 992px) {\n  .heroic-stack[_ngcontent-%COMP%] {\n    max-width: 660px;\n    padding: 0 15px;\n    margin: auto;\n  }\n}\n\n.login-link[_ngcontent-%COMP%], .login-link-pink[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 15px;\n  font-size: 15px;\n  border: 1px;\n  border-radius: 5px;\n  border: 1px solid;\n}\n\n.login-link[_ngcontent-%COMP%] {\n  color: #4739C5;\n  border-color: rgba(71, 57, 197, 0.1);\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 2px solid rgba(217, 217, 217, 0.2);\n  margin-top: 20px;\n  margin-bottom: 40px;\n}\n\n.login-link-pink[_ngcontent-%COMP%] {\n  border-color: rgba(180, 33, 180, 0.1);\n  background: #FFF6FF;\n  color: #B421B4;\n}\n.login-link-pink[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFDRTtFQUxGO0lBTUksU0FBQTtJQUNBLFVBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFRjtBQUFFO0VBTEY7SUFNSSxZQUFBO0lBQ0EsWUFBQTtFQUdGO0FBQ0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBR0Y7QUFERTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7QUFBRTtFQVBGO0lBUUksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQUdGO0FBQ0Y7O0FBQUE7RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxvQ0FBQTtBQUdGOztBQUFBO0VBQ0UsMENBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUdGO0FBREU7RUFDRSxrQkFBQTtBQUdKIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMTVweDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIHdpZHRoOiA0ODVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5sb2dpbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5sb2dpbi1wYW5lbCB7XHJcbiAgZmxleDogMSAxIDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmhlcm9pYy1zdGFjayB7XHJcbiAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIG1heC13aWR0aDogNjYwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tbGluaywgLmxvZ2luLWxpbmstcGluayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyOiAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4ubG9naW4tbGluayB7XHJcbiAgY29sb3I6ICM0NzM5QzU7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDcxLCA1NywgMTk3LCAwLjEwKTtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjE3LCAyMTcsIDIxNywgMC4yMCk7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4ubG9naW4tbGluay1waW5rIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMTgwLCAzMywgMTgwLCAwLjEwKTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGNkZGO1xyXG4gIGNvbG9yOiAjQjQyMUI0O1xyXG5cclxuICBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
class LoginGuard {
  authService;
  router;
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(next, state) {
    if (this.authService.session && !this.authService.session.mfa_code && !this.authService.mfaRequired) {
      const _ = this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  static ɵfac = function LoginGuard_Factory(t) {
    return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LoginGuard,
    factory: LoginGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 115:
/*!**********************************************!*\
  !*** ./src/app/matches/matches.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchesComponent": () => (/* binding */ MatchesComponent),
/* harmony export */   "MatchesResolver": () => (/* binding */ MatchesResolver),
/* harmony export */   "NodesResolver": () => (/* binding */ NodesResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);








function MatchesComponent_ngb_alert_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("An error occurred: ", ctx_r0.error, "");
  }
}
function MatchesComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.activeType);
  }
}
function MatchesComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchesComponent_button_11_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const t_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.activeType = t_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r7);
  }
}
function MatchesComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.activeNode);
  }
}
function MatchesComponent_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchesComponent_button_32_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const n_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.activeNode = n_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const n_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r10);
  }
}
function MatchesComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No realtime matches were found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function MatchesComponent_ng_template_52_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 40);
  }
}
function MatchesComponent_ng_template_52_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 41);
  }
}
function MatchesComponent_ng_template_52_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchesComponent_ng_template_52_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const i_r13 = ctx_r23.index;
      const m_r14 = ctx_r23.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r22.getMatchState(i_r13, m_r14);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.matchStatesOpen[i_r13] = !ctx_r22.matchStatesOpen[i_r13]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatchesComponent_ng_template_52_div_2_div_1_Template, 1, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatchesComponent_ng_template_52_div_2_div_2_Template, 1, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r15.matchStatesOpen[i_r13]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.matchStatesOpen[i_r13]);
  }
}
function MatchesComponent_ng_template_52_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 42);
  }
}
function MatchesComponent_ng_template_52_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MatchesComponent_ng_template_52_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MatchesComponent_ng_template_52_tr_16_img_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 51);
  }
}
function MatchesComponent_ng_template_52_tr_16_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "small")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Current Tick");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pre", 47)(5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small")(8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Match State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre", 47)(11, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.matchStates[i_r13].tick);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.matchStates[i_r13].state);
  }
}
function MatchesComponent_ng_template_52_tr_16_img_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 51);
  }
}
function MatchesComponent_ng_template_52_tr_16_pre_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 47)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.getMatchPresencesString(ctx_r29.matchStates[i_r13].presences));
  }
}
function MatchesComponent_ng_template_52_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 43)(1, "td", 44)(2, "div", 45)(3, "div", 46)(4, "small")(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Match Label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pre", 47)(8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MatchesComponent_ng_template_52_tr_16_img_11_Template, 1, 0, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MatchesComponent_ng_template_52_tr_16_div_12_Template, 13, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 48)(14, "small")(15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Match Presences");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MatchesComponent_ng_template_52_tr_16_img_17_Template, 1, 0, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MatchesComponent_ng_template_52_tr_16_pre_18_Template, 3, 1, "pre", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const m_r14 = ctx_r32.$implicit;
    const i_r13 = ctx_r32.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r14.api_match.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.matchStates[i_r13] || ctx_r19.matchStates[i_r13] === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.matchStates[i_r13] !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.matchStates[i_r13] || ctx_r19.matchStates[i_r13] === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.matchStates[i_r13] !== null);
  }
}
function MatchesComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatchesComponent_ng_template_52_div_2_Template, 3, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatchesComponent_ng_template_52_div_3_Template, 1, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MatchesComponent_ng_template_52_span_8_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MatchesComponent_ng_template_52_span_9_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MatchesComponent_ng_template_52_tr_16_Template, 19, 5, "tr", 36);
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const m_r14 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r14.api_match.authoritative);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !m_r14.api_match.authoritative);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r14.api_match.match_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r14.api_match.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r14.api_match.authoritative);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !m_r14.api_match.authoritative);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r14.node);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r14.api_match.handler_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r14.api_match.authoritative ? m_r14.api_match.tick_rate : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.matchStatesOpen[i_r13]);
  }
}
class MatchesComponent {
  route;
  router;
  formBuilder;
  consoleService;
  error = '';
  matches = [];
  matchStates = [];
  matchStatesOpen = [];
  updated = false;
  searchForm1;
  searchForm2;
  searchForm3; // Authoritative
  type;
  activeType = 'All';
  types = ['All', 'Authoritative', 'Relayed'];
  activeNode = 'All Nodes';
  nodes = ['All Nodes'];
  constructor(route, router, formBuilder, consoleService) {
    this.route = route;
    this.router = router;
    this.formBuilder = formBuilder;
    this.consoleService = consoleService;
    this.searchForm1 = this.formBuilder.group({
      match_id: ''
    });
    this.searchForm2 = this.formBuilder.group({
      match_id: ''
    });
    this.searchForm3 = this.formBuilder.group({
      query: ''
    });
  }
  ngOnInit() {
    const qp = this.route.snapshot.queryParamMap;
    this.f1.match_id.setValue(qp.get('match_id'));
    this.f2.match_id.setValue(qp.get('match_id'));
    this.f3.query.setValue(qp.get('query'));
    const qType = qp.get('type');
    this.type = Number(qType);
    const qNode = qp.get('node');
    this.route.data.subscribe(d => {
      if (d) {
        if (d[0]) {
          this.error = '';
          this.matches.length = 0;
          this.matches.push(...d[0].matches);
          this.matchStates.length = this.matches.length;
          this.matchStatesOpen.length = this.matches.length;
        }
        if (d[1]) {
          this.nodes.push(...d[1]);
        }
        if (d.error) {
          this.error = d.error;
        }
      }
    }, err => {
      this.error = err;
    });
    if (qType === null) {
      this.type = 0;
      this.activeType = this.types[0];
    } else {
      if (this.type == 0 || this.type === 1 || this.type === 2) {
        this.activeType = this.types[this.type];
      } else {
        this.error = 'Invalid type';
      }
    }
    if (qNode !== null) {
      let found = false;
      this.nodes.forEach(node => {
        if (qNode === node) {
          this.activeNode = qNode;
          found = true;
        }
      });
      if (!found) {
        this.error = 'Invalid node.';
      }
    }
  }
  search() {
    const type = this.getType();
    this.type = type;
    list(this.consoleService, type, type === 0 ? this.f1.match_id.value : this.f2.match_id.value, this.f3.query.value, this.activeNode === this.nodes[0] ? '' : this.activeNode).subscribe(d => this.postData(d), err => {
      this.error = err;
    });
  }
  postData(d) {
    this.error = '';
    this.matches.length = 0;
    this.matches.push(...d.matches);
    this.matchStates.length = this.matches.length;
    this.matchStatesOpen.length = this.matches.length;
    let params;
    switch (this.type) {
      case 0:
        params = {
          type: this.type,
          match_id: this.f1.match_id.value
        };
        break;
      case 1:
        params = {
          type: this.type,
          query: this.f3.query.value
        };
        if (this.activeNode !== this.nodes[0]) {
          params.node = this.activeNode;
        }
        break;
      case 2:
        params = {
          type: this.type,
          match_id: this.f2.match_id.value
        };
        break;
    }
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params
    });
  }
  getType() {
    let tp = 0;
    this.types.forEach((t, ix) => {
      if (this.activeType === t) {
        tp = ix;
      }
    });
    return tp;
  }
  getMatchState(i, match) {
    if (this.matchStatesOpen[i]) {
      // match state view was open already...
      return;
    }
    this.matchStates[i] = null;
    this.error = '';
    this.consoleService.getMatchState('', match.api_match.match_id).subscribe(d => {
      this.matchStatesOpen[i] = true;
      this.matchStates[i] = d;
    }, err => {
      this.matchStatesOpen[i] = false;
      this.matchStates[i] = null;
      this.error = err;
    });
  }
  getMatchPresencesString(ps) {
    return JSON.stringify(ps);
  }
  get f1() {
    return this.searchForm1.controls;
  }
  get f2() {
    return this.searchForm2.controls;
  }
  get f3() {
    return this.searchForm3.controls;
  }
  static ɵfac = function MatchesComponent_Factory(t) {
    return new (t || MatchesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_3__.ConsoleService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatchesComponent,
    selectors: [["ng-component"]],
    decls: 53,
    vars: 16,
    consts: [[1, "pb-1"], [1, "pb-4"], ["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "input-group", "mb-1"], [1, "input-group-prepend"], ["ngbDropdown", "", 1, "btn-group"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-secondary", "dropdown-radius-right"], [4, "ngIf"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["type", "button", "ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "row", "no-gutters", "mb-4"], [1, "col", "d-flex", "justify-content-between", "no-gutters", "align-items-center"], [1, "col-md-9"], [3, "hidden", "formGroup", "ngSubmit"], [1, "input-group"], ["type", "text", "formControlName", "match_id", "placeholder", "Filter by match ID", 1, "form-control"], ["type", "text", "formControlName", "query", "placeholder", "Filter by query or match ID", 1, "form-control", "border-right-0"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-secondary", "dropdown-radius-left"], [1, "row", "no-gutters"], [1, "table", "table-sm", "table-bordered"], [1, "thead-light"], [2, "width", "140px"], [2, "width", "100px"], [2, "width", "130px"], [2, "width", "90px"], ["ngFor", "", 3, "ngForOf"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], ["type", "button", "ngbDropdownItem", "", 3, "click"], ["colSpan", "8", 1, "text-muted"], ["class", "arrow", 3, "click", 4, "ngIf"], ["class", "d-inline-block mr-3", 4, "ngIf"], [1, "text-center"], ["class", "open-row", 4, "ngIf"], [1, "arrow", 3, "click"], ["class", "arrow-right", 4, "ngIf"], ["class", "arrow-down", 4, "ngIf"], [1, "arrow-right"], [1, "arrow-down"], [1, "d-inline-block", "mr-3"], [1, "open-row"], ["colspan", "6", 1, "align-middle"], [1, "d-flex", "p-0"], [1, "p-3", "w-33", "border"], [1, "pre-wrap", "m-0", "p-0"], [1, "p-3", "w-33", "border", "border-left-0"], ["src", "/static/spinner.svg", "class", "d-block", "width", "16", 4, "ngIf"], ["class", "pre-wrap m-0 p-0", 4, "ngIf"], ["src", "/static/spinner.svg", "width", "16", 1, "d-block"]],
    template: function MatchesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Active Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatchesComponent_ngb_alert_4_Template, 4, 2, "ngb-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MatchesComponent_span_9_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MatchesComponent_button_11_Template, 2, 1, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchesComponent_Template_button_click_13_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MatchesComponent_Template_form_ngSubmit_18_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MatchesComponent_Template_form_ngSubmit_21_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MatchesComponent_Template_form_ngSubmit_24_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10)(28, "div", 5)(29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MatchesComponent_span_30_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MatchesComponent_button_32_Template, 2, 1, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20)(34, "table", 21)(35, "thead", 22)(36, "tr")(37, "th")(38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Match ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Presence Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Authoritative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Node");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Handler Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Tick Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, MatchesComponent_tr_51_Template, 3, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, MatchesComponent_ng_template_52_Template, 17, 10, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.matches.length, " running matches found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeType && ctx.activeType !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.activeType !== "All")("formGroup", ctx.searchForm1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.activeType !== "Relayed")("formGroup", ctx.searchForm2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.activeType !== "Authoritative")("formGroup", ctx.searchForm3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeNode && ctx.activeNode !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.nodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pl-3", ctx.matches.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.matches.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.matches);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAlert, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownItem, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: [".pre-wrap[_ngcontent-%COMP%] {\n  word-wrap: anywhere;\n  word-break: break-all;\n  white-space: pre-wrap;\n}\n\n.open-row[_ngcontent-%COMP%] {\n  background: #FAFAFC;\n}\n\n.w-33[_ngcontent-%COMP%] {\n  width: 33.3333% !important;\n}\n\n.dropdown-radius-right[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.dropdown-radius-left[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWF0Y2hlcy9tYXRjaGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDQyxtQkFBQTtBQUNEOztBQUVBO0VBQU0sMEJBQUE7QUFFTjs7QUFBQTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7QUFHRjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUFHRiIsInNvdXJjZXNDb250ZW50IjpbIi5wcmUtd3JhcCB7XHJcbiAgd29yZC13cmFwOiBhbnl3aGVyZTtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcblxyXG4ub3Blbi1yb3cge1xyXG5cdGJhY2tncm91bmQ6ICNGQUZBRkM7XHJcbn1cclxuXHJcbi53LTMze3dpZHRoOjMzLjMzMzMlIWltcG9ydGFudH1cclxuXHJcbi5kcm9wZG93bi1yYWRpdXMtcmlnaHQge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZHJvcGRvd24tcmFkaXVzLWxlZnQge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
class MatchesResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const type = Number(route.queryParamMap.get('type'));
    return list(this.consoleService, type, route.queryParamMap.get('match_id'), route.queryParamMap.get('query'), route.queryParamMap.get('node')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      route.data = {
        ...route.data,
        error
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    }));
  }
  static ɵfac = function MatchesResolver_Factory(t) {
    return new (t || MatchesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_3__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MatchesResolver,
    factory: MatchesResolver.ɵfac,
    providedIn: 'root'
  });
}
function list(service, type, matchId, query, node) {
  switch (type) {
    case 0:
      return service.listMatches('', null, null, null, null, null, matchId);
    case 1:
      return service.listMatches('', null, true, null, null, null, null, query, node);
    case 2:
      return service.listMatches('', null, false, null, null, null, matchId);
  }
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
}
class NodesResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    return this.consoleService.getStatus('').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(r => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(r.nodes.map(n => n.name)))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      route.data = {
        ...route.data,
        error
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
    }));
  }
  static ɵfac = function NodesResolver_Factory(t) {
    return new (t || NodesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_3__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NodesResolver,
    factory: NodesResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7229:
/*!**************************************************!*\
  !*** ./src/app/mfa-setup/mfa-setup.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MfaSetupComponent": () => (/* binding */ MfaSetupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ 1188);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-qrcode */ 9180);









function MfaSetupComponent_ngb_alert_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 6)(1, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error);
  }
}
const _c0 = function (a0) {
  return {
    "was-validated": a0
  };
};
const _c1 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function MfaSetupComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div")(2, "h5", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MfaSetupComponent_ng_container_5_Template_form_ngSubmit_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol")(6, "div", 10)(7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Install an Authenticator app and use it to scan the QR code. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " e.g. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Google Authenticator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Authy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10)(18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Scan the QR code with your authenticator app. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "qrcode", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10)(22, "li")(23, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Insert 6-digit code from your authenticator app.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.codeForm)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r1.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qrdata", ctx_r1.mfaUrl())("width", 256)("errorCorrectionLevel", "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r1.f.code.dirty && ctx_r1.f.code.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.codeForm.valid || ctx_r1.submitted);
  }
}
function MfaSetupComponent_ng_template_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Multi-factor authentication has been successfully set up. Please download the recovery codes and keep them in a safe place. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function MfaSetupComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MfaSetupComponent_ng_template_6_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfaSetupComponent_ng_template_6_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.downloadRecoveryCodes());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Download Recovery Codes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MfaSetupComponent_ng_template_6_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.router.navigateByUrl("/"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Continue to Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.error && ctx_r3.recoveryCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r3.downloadClicked);
  }
}
class MfaSetupComponent {
  formBuilder;
  consoleService;
  authService;
  router;
  required;
  codeForm;
  mfaCode;
  submitted = false;
  downloadClicked = false;
  recoveryCodes;
  error = '';
  constructor(formBuilder, consoleService, authService, router) {
    this.formBuilder = formBuilder;
    this.consoleService = consoleService;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {
    this.codeForm = this.formBuilder.group({
      code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    });
    this.mfaCode = this.authService.mfa;
  }
  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.codeForm.invalid) {
      return;
    }
    this.authService.mfaSet(this.f.code.value).subscribe(response => {
      this.codeForm.reset();
      this.submitted = false;
      this.recoveryCodes = response.recovery_codes;
    }, err => {
      this.error = err;
      this.submitted = false;
    });
  }
  mfaUrl() {
    return decodeURIComponent(this.mfaCode.mfa_url);
  }
  get f() {
    return this.codeForm.controls;
  }
  downloadRecoveryCodes() {
    const codes = this.recoveryCodes.map((v, i) => i % 2 === 0 ? '\n' + v : v);
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(new Blob([codes.join(' ').trim()], {
      type: 'text/plain'
    }));
    link.download = 'nakama_mfa_recovery_codes.txt';
    link.click();
    window.URL.revokeObjectURL(link.href);
    this.downloadClicked = true;
  }
  static ɵfac = function MfaSetupComponent_Factory(t) {
    return new (t || MfaSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MfaSetupComponent,
    selectors: [["mfa-setup"]],
    inputs: {
      required: "required"
    },
    decls: 8,
    vars: 3,
    consts: [[1, "login-title", "mb-4"], [1, "container"], ["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "row"], [4, "ngIf", "ngIfElse"], ["recoveryCodesBlock", ""], ["type", "danger", 1, "mb-3", 3, "dismissible"], [1, "mr-2", "d-inline", "font-weight-bold"], [2, "font-size", "23px"], [3, "formGroup", "ngClass", "ngSubmit"], [1, "form-group"], ["href", "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2", "target", "blank", "rel", "noopener noreferrer"], ["href", "https://authy.com/download/", "target", "blank", "rel", "noopener noreferrer"], [3, "qrdata", "width", "errorCorrectionLevel"], ["for", "code", 1, "d-inline"], ["type", "code", "id", "code", "formControlName", "code", "required", "", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled"], ["class", "alert alert-success mb-4", "role", "alert", 4, "ngIf"], [1, "btn", "btn-primary", "btn-lg", "btn-block", "mb-4", 3, "click"], ["href", "/", 1, "btn", "btn-outline-primary", "btn-lg", "btn-block", 3, "disabled", "click"], ["role", "alert", 1, "alert", "alert-success", "mb-4"]],
    template: function MfaSetupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Setup Multi-Factor Authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MfaSetupComponent_ngb_alert_3_Template, 3, 2, "ngb-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MfaSetupComponent_ng_container_5_Template, 28, 11, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MfaSetupComponent_ng_template_6_Template, 6, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.recoveryCodes)("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAlert, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__.QRCodeComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7992:
/*!*******************************************************!*\
  !*** ./src/app/purchases/purchases-list.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasesListComponent": () => (/* binding */ PurchasesListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _account_purchases_purchases_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account/purchases/purchases.component */ 4102);



class PurchasesListComponent {
  formBuilder;
  transactionId;
  searchForm;
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      transaction_id: ['']
    });
  }
  search() {
    this.transactionId = this.f.transaction_id.value;
  }
  get f() {
    return this.searchForm.controls;
  }
  static ɵfac = function PurchasesListComponent_Factory(t) {
    return new (t || PurchasesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PurchasesListComponent,
    selectors: [["ng-component"]],
    decls: 12,
    vars: 2,
    consts: [[1, "pb-1"], [1, "row", "no-gutters", "mb-4"], [1, "col", "d-flex", "justify-content-between", "no-gutters", "align-items-center"], [1, "col-md-9"], [3, "formGroup", "ngSubmit"], [1, "input-group"], ["type", "text", "formControlName", "transaction_id", "placeholder", "Search by transaction_id (purchaseToken for Play Store purchases)", 1, "form-control", "border-right-0"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", "dropdown-radius", 3, "click"], [3, "transaction_id"]],
    template: function PurchasesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Purchases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PurchasesListComponent_Template_form_ngSubmit_5_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PurchasesListComponent_Template_button_click_9_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-purchases", 9);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("transaction_id", ctx.transactionId);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _account_purchases_purchases_component__WEBPACK_IMPORTED_MODULE_2__.PurchasesComponent],
    styles: [".dropdown-radius[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.table-hover[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHVyY2hhc2VzL3B1cmNoYXNlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tcmFkaXVzIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YWJsZS1ob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1815:
/*!**********************************************!*\
  !*** ./src/app/runtime/runtime.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuntimeComponent": () => (/* binding */ RuntimeComponent),
/* harmony export */   "RuntimeResolver": () => (/* binding */ RuntimeResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





function RuntimeComponent_ngb_alert_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Failed to retrieve runtime information: ", ctx_r0.error, "");
  }
}
function RuntimeComponent_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r13.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r13.mod_time);
  }
}
function RuntimeComponent_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Go modules were found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function RuntimeComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r14.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r14.mod_time);
  }
}
function RuntimeComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Lua modules were found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function RuntimeComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r15.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r15.mod_time);
  }
}
function RuntimeComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No JavaScript modules were found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/apiexplorer"];
};
const _c1 = function (a0) {
  return {
    "endpoint": a0
  };
};
function RuntimeComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 15)(5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "API Explorer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const m_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, m_r16));
  }
}
function RuntimeComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Go RPC functions were found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function RuntimeComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 15)(5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "API Explorer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const m_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, m_r17));
  }
}
function RuntimeComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Lua RPC functions were found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function RuntimeComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td")(2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 15)(5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "API Explorer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const m_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, m_r18));
  }
}
function RuntimeComponent_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No JavaScript RPC functions were found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class RuntimeComponent {
  route;
  consoleService;
  error = '';
  runtimeInfo;
  constructor(route, consoleService) {
    this.route = route;
    this.consoleService = consoleService;
  }
  ngOnInit() {
    this.route.data.subscribe(d => {
      this.runtimeInfo = d[0];
    }, err => {
      this.error = err;
    });
  }
  ngOnDestroy() {}
  static ɵfac = function RuntimeComponent_Factory(t) {
    return new (t || RuntimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RuntimeComponent,
    selectors: [["ng-component"]],
    decls: 51,
    vars: 13,
    consts: [[1, "pb-4"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "runtime-table", "mb-4", "table", "table-sm", "table-bordered", "mb-5"], [1, "thead-light"], [2, "width", "180px"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["colspan", "2"], [1, "mb-4", "section-divider", "d-flex"], [1, "runtime-table", "table", "table-sm", "table-bordered"], ["type", "danger", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], [2, "width", "200px"], [1, "text-muted"], [2, "width", "180px", "text-align", "center"], [1, "btn", "btn-sm", "btn-secondary", 3, "routerLink", "queryParams"], ["colspan", "2", 1, "text-muted"]],
    template: function RuntimeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Runtime Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RuntimeComponent_ngb_alert_2_Template, 4, 2, "ngb-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2)(4, "thead", 3)(5, "tr")(6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Go Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Last Modified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RuntimeComponent_tr_11_Template, 5, 2, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RuntimeComponent_tr_12_Template, 4, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead", 3)(14, "tr")(15, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lua Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RuntimeComponent_tr_18_Template, 5, 2, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RuntimeComponent_tr_19_Template, 4, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead", 3)(21, "tr")(22, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "JavaScript Modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RuntimeComponent_tr_25_Template, 5, 2, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RuntimeComponent_tr_26_Template, 4, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Registered RPC Functions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 9)(30, "thead", 3)(31, "tr")(32, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Go RPC Functions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RuntimeComponent_tr_35_Template, 7, 6, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RuntimeComponent_tr_36_Template, 3, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "thead", 3)(38, "tr")(39, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Lua RPC Functions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RuntimeComponent_tr_42_Template, 7, 6, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RuntimeComponent_tr_43_Template, 3, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "thead", 3)(45, "tr")(46, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "JavaScript RPC Functions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, RuntimeComponent_tr_49_Template, 7, 6, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, RuntimeComponent_tr_50_Template, 3, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.runtimeInfo.go_modules);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.runtimeInfo.go_modules.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.runtimeInfo.lua_modules);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.runtimeInfo.lua_modules.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.runtimeInfo.js_modules);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.runtimeInfo.js_modules.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.runtimeInfo.go_rpc_functions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.runtimeInfo.go_rpc_functions.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.runtimeInfo.lua_rpc_functions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.runtimeInfo.lua_rpc_functions.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.runtimeInfo.js_rpc_functions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.runtimeInfo.js_rpc_functions.length === 0);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbAlert],
    styles: ["label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.opaque[_ngcontent-%COMP%] {\n  opacity: 40%;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.runtime-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.runtime-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.6em 1em;\n  font-weight: 500;\n}\n.runtime-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 1em;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcnVudGltZS9ydW50aW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBR0M7RUFDQyxzQkFBQTtBQUFGO0FBR0M7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FBREY7QUFJQztFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDRSxzQkFBQTtBQUZKIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5vcGFxdWUge1xyXG4gIG9wYWNpdHk6IDQwJTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4ucnVudGltZS10YWJsZSB7XHJcblx0dHIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG5cdHRoIHtcclxuXHRcdHBhZGRpbmc6IDAuNmVtIDFlbTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0fVxyXG5cclxuXHR0ZCB7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDFlbTtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
class RuntimeResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    return this.consoleService.getRuntime('');
  }
  static ɵfac = function RuntimeResolver_Factory(t) {
    return new (t || RuntimeResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_2__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RuntimeResolver,
    factory: RuntimeResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1463:
/*!****************************************!*\
  !*** ./src/app/session.interceptor.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionInterceptor": () => (/* binding */ SessionInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ 1188);


class SessionInterceptor {
  authenticationService;
  constructor(authenticationService) {
    this.authenticationService = authenticationService;
  }
  intercept(req, next) {
    const session = this.authenticationService.session;
    if (session && session.token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${session.token}`
        }
      });
    }
    return next.handle(req);
  }
  static ɵfac = function SessionInterceptor_Factory(t) {
    return new (t || SessionInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SessionInterceptor,
    factory: SessionInterceptor.ɵfac
  });
}

/***/ }),

/***/ 3110:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteConfirmDialogComponent": () => (/* binding */ DeleteConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);




function DeleteConfirmDialogComponent_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "p")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.confirmDeleteForm.controls.numberValueControl.value.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", ctx_r1.confirmDeleteForm.controls.numberValueControl.value.id);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
function DeleteConfirmDialogComponent_div_8_input_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 15);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.f.delete.touched && ctx_r2.f.delete.invalid));
  }
}
function DeleteConfirmDialogComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DeleteConfirmDialogComponent_div_8_div_2_Template, 5, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DeleteConfirmDialogComponent_div_8_input_3_Template, 1, 3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.confirmDeleteForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.confirmDeleteForm.controls.numberValueControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.confirmDeleteForm.controls.delete);
  }
}
class DeleteConfirmDialogComponent {
  confirmed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  canceled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  title = 'Delete Confirmation';
  message = 'Are you sure you want to delete this item?';
  /*
  This parameter is optional
  we support two type of control
  1. numberValueControl  -> { title: "", id: "", defaultValue: number }. e.g.: Chat Message delete retain setting
  2. delete  -> control input for confirmation
  * */
  confirmDeleteForm;
  closeModal() {
    this.canceled.emit();
  }
  cancel() {
    this.canceled.emit();
  }
  confirm() {
    // if there is no form data pass or the form valid, confirmed can be emitted
    if (!this.confirmDeleteForm || this.confirmDeleteForm.valid) {
      this.confirmed.emit();
    }
  }
  get f() {
    return this.confirmDeleteForm.controls;
  }
  static ɵfac = function DeleteConfirmDialogComponent_Factory(t) {
    return new (t || DeleteConfirmDialogComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DeleteConfirmDialogComponent,
    selectors: [["app-delete-confirm-dialog"]],
    inputs: {
      confirmDeleteForm: "confirmDeleteForm"
    },
    outputs: {
      confirmed: "confirmed",
      canceled: "canceled"
    },
    decls: 14,
    vars: 3,
    consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-describedby", "Close", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "d-flex flex-column justify-content-center", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "d-flex", "flex-column", "justify-content-center"], ["autocomplete", "off", 3, "formGroup"], ["class", "mt-2", 4, "ngIf"], ["type", "text", "class", "form-control", "id", "delete-confirm", "placeholder", "Type 'DELETE' to confirm", "formControlName", "delete", 3, "ngClass", 4, "ngIf"], [1, "mt-2"], ["type", "number", "value", "30", "min", "0", 2, "width", "80px", 3, "formControlName"], ["type", "text", "id", "delete-confirm", "placeholder", "Type 'DELETE' to confirm", "formControlName", "delete", 1, "form-control", 3, "ngClass"]],
    template: function DeleteConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConfirmDialogComponent_Template_button_click_3_listener() {
          return ctx.closeModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DeleteConfirmDialogComponent_div_8_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConfirmDialogComponent_Template_button_click_10_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteConfirmDialogComponent_Template_button_click_12_listener() {
          return ctx.confirm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmDeleteForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8406:
/*!**************************************************!*\
  !*** ./src/app/shared/delete-confirm.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteConfirmService": () => (/* binding */ DeleteConfirmService)
/* harmony export */ });
/* harmony import */ var _delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-confirm-dialog/delete-confirm-dialog.component */ 3110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);



class DeleteConfirmService {
  modalService;
  required = false;
  constructor(modalService) {
    this.modalService = modalService;
  }
  openDeleteConfirmModal(confirmedCallback, formGroup = null, title = '', message = '') {
    const modalOptions = {
      backdrop: false,
      centered: true
    };
    const modalRef = this.modalService.open(_delete_confirm_dialog_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DeleteConfirmDialogComponent, modalOptions);
    if (formGroup) {
      modalRef.componentInstance.confirmDeleteForm = formGroup;
    }
    if (title) {
      modalRef.componentInstance.title = title;
    }
    if (message) {
      modalRef.componentInstance.message = message;
    }
    modalRef.componentInstance.confirmed.subscribe(() => {
      confirmedCallback(formGroup?.value);
      modalRef.close();
    });
    modalRef.componentInstance.canceled.subscribe(() => {
      modalRef.close();
    });
  }
  static ɵfac = function DeleteConfirmService_Factory(t) {
    return new (t || DeleteConfirmService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DeleteConfirmService,
    factory: DeleteConfirmService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4278:
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphInitNodesResolver": () => (/* binding */ GraphInitNodesResolver),
/* harmony export */   "SortNumbersPipe": () => (/* binding */ SortNumbersPipe),
/* harmony export */   "StatusComponent": () => (/* binding */ StatusComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-charts */ 9575);









function StatusComponent_ngb_alert_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("An error occurred: ", ctx_r0.error, "");
  }
}
function StatusComponent_tbody_16_tr_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
  }
}
function StatusComponent_tbody_16_tr_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
  }
}
function StatusComponent_tbody_16_tr_1_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
  }
}
function StatusComponent_tbody_16_tr_1_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 34);
  }
}
function StatusComponent_tbody_16_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 24)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StatusComponent_tbody_16_tr_1_img_3_Template, 1, 0, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StatusComponent_tbody_16_tr_1_img_4_Template, 1, 0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StatusComponent_tbody_16_tr_1_img_5_Template, 1, 0, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StatusComponent_tbody_16_tr_1_img_6_Template, 1, 0, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const nodeData_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", nodeData_r8.health);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](nodeData_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nodeData_r8.session_count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r7.showDelta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r7.getMaxSessionCount() - nodeData_r8.session_count, " delta)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nodeData_r8.presence_count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r7.showDelta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r7.getMaxPresenceCount() - nodeData_r8.presence_count, " delta)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nodeData_r8.match_count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r7.showDelta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r7.getMaxMatchCount() - nodeData_r8.match_count, " delta)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", nodeData_r8.goroutine_count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r7.showDelta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r7.getMaxGoroutineCount() - nodeData_r8.goroutine_count, " delta)");
  }
}
function StatusComponent_tbody_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatusComponent_tbody_16_tr_1_Template, 25, 18, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.statusData.nodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getTotalSessionCount());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getMaxPresenceCount());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getTotalMatchCount());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getTotalGorountineCount());
  }
}
function StatusComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r13 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", key_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.ranges[key_r13]);
  }
}
const _c0 = function (a0) {
  return {
    "background-color": a0
  };
};
function StatusComponent_div_41_ng_template_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br")(2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const g_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, g_r18.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", g_r18.series, ": ", g_r18.value, "");
  }
}
function StatusComponent_div_41_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatusComponent_div_41_ng_template_2_span_2_Template, 5, 5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const model_r16 = ctx.model;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", model_r16[0].name.toLocaleString(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", model_r16);
  }
}
function StatusComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36)(1, "ngx-charts-line-chart", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatusComponent_div_41_ng_template_2_Template, 3, 2, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx_r3.colorScheme)("legend", false)("showXAxisLabel", false)("showYAxisLabel", false)("animations", false)("timeline", false)("autoScale", false)("xAxis", true)("yAxis", true)("yScaleMin", 0)("roundDomains", true)("results", ctx_r3.latencyGraphData);
  }
}
function StatusComponent_div_43_ng_template_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br")(2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const g_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, g_r23.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", g_r23.series, ": ", g_r23.value, "");
  }
}
function StatusComponent_div_43_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatusComponent_div_43_ng_template_2_span_2_Template, 5, 5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const model_r21 = ctx.model;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", model_r21[0].name.toLocaleString(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", model_r21);
  }
}
function StatusComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36)(1, "ngx-charts-line-chart", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatusComponent_div_43_ng_template_2_Template, 3, 2, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx_r4.colorScheme)("legend", false)("showXAxisLabel", false)("showYAxisLabel", false)("animations", false)("timeline", false)("autoScale", false)("xAxis", true)("yAxis", true)("yScaleMin", 0)("roundDomains", true)("results", ctx_r4.rateGraphData);
  }
}
function StatusComponent_div_59_ng_template_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br")(2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const g_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, g_r28.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", g_r28.series, ": ", g_r28.value, "");
  }
}
function StatusComponent_div_59_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatusComponent_div_59_ng_template_2_span_2_Template, 5, 5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const model_r26 = ctx.model;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", model_r26[0].name.toLocaleString(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", model_r26);
  }
}
function StatusComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36)(1, "ngx-charts-line-chart", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatusComponent_div_59_ng_template_2_Template, 3, 2, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx_r5.colorScheme)("legend", false)("showXAxisLabel", false)("showYAxisLabel", false)("animations", false)("timeline", false)("autoScale", false)("xAxis", true)("yAxis", true)("yScaleMin", 0)("roundDomains", true)("results", ctx_r5.inputGraphData);
  }
}
function StatusComponent_div_61_ng_template_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br")(2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const g_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, g_r33.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", g_r33.series, ": ", g_r33.value, "");
  }
}
function StatusComponent_div_61_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatusComponent_div_61_ng_template_2_span_2_Template, 5, 5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const model_r31 = ctx.model;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", model_r31[0].name.toLocaleString(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", model_r31);
  }
}
function StatusComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36)(1, "ngx-charts-line-chart", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatusComponent_div_61_ng_template_2_Template, 3, 2, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx_r6.colorScheme)("legend", false)("showXAxisLabel", false)("showYAxisLabel", false)("animations", false)("timeline", false)("autoScale", false)("xAxis", true)("yAxis", true)("yScaleMin", 0)("roundDomains", true)("results", ctx_r6.outputGraphData);
  }
}
class StatusComponent {
  route;
  consoleService;
  formBuilder;
  error = '';
  showDelta = false;
  statusData;
  rateGraphData = [];
  latencyGraphData = [];
  inputGraphData = [];
  outputGraphData = [];
  rangeForm;
  ranges = {
    1: 'last 1 minute',
    10: 'last 10 minutes',
    30: 'last 30 minutes',
    60: 'last 1 hour',
    1440: 'last 24 hours'
  };
  rangesKeys = Object.keys(this.ranges).map(n => +n);
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#1e59cf', '#7aa3e5', '#a8385d', '#d0bd00']
  };
  samples = 60; // Number of samples in the series
  refreshTimer;
  $refreshTimer;
  constructor(route, consoleService, formBuilder) {
    this.route = route;
    this.consoleService = consoleService;
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.rangeForm = this.formBuilder.group({
      rangeMinutes: [10] // Default range to 10 min window
    });

    this.route.data.subscribe(data => {
      const nodeNames = data[0];
      this.initData(nodeNames);
      this.refresh();
      this.refreshTimer = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(0, this.getPeriod() * 1000);
      this.$refreshTimer = this.refreshTimer.subscribe(_ => this.refresh());
    }, err => {
      this.error = err;
    });
  }
  refresh() {
    this.consoleService.getStatus('').subscribe(data => {
      this.statusData = data;
      this.rateGraphData = this.updateData(this.rateGraphData, 'avg_rate_sec', data);
      this.latencyGraphData = this.updateData(this.latencyGraphData, 'avg_latency_ms', data);
      this.inputGraphData = this.updateData(this.inputGraphData, 'avg_input_kbs', data);
      this.outputGraphData = this.updateData(this.outputGraphData, 'avg_output_kbs', data);
      // TODO: handle error
    });
  }

  generateSeries() {
    let pointTs = new Date();
    pointTs.setMilliseconds(0);
    const timestamps = [];
    for (let i = 0; i < this.samples; i++) {
      pointTs = new Date(pointTs.getTime() - this.getPeriod() * 1000);
      timestamps.push(pointTs);
    }
    return timestamps.reverse().map(p => {
      return {
        name: p,
        value: 0
      };
    });
  }
  initData(names) {
    const series = this.generateSeries();
    this.latencyGraphData = names.map(n => ({
      name: n,
      series
    }));
    this.rateGraphData = names.map(n => ({
      name: n,
      series
    }));
    this.inputGraphData = names.map(n => ({
      name: n,
      series
    }));
    this.outputGraphData = names.map(n => ({
      name: n,
      series
    }));
  }
  updateData(currentData, key, data) {
    const statusList = data.nodes;
    const updatedData = [];
    const ts = data.timestamp;
    // If a node is not present in the results anymore, append a new point with 0 value.
    const currentNodes = currentData.map(d => d.name);
    const dataNodes = statusList.map(d => d.name);
    const missingNodes = this.diff(currentNodes, dataNodes);
    for (const node of currentData) {
      if (missingNodes.includes(node.name)) {
        updatedData.push({
          name: node.name,
          series: this.shiftData(node.series, 0, ts)
        });
      }
    }
    // Update new and already existing nodes
    for (const node of statusList) {
      let newSeries = [];
      let newData = {};
      const currentSeries = currentData.find(d => d.name === node.name)?.series;
      if (currentSeries) {
        // A series for this node already exists, append new data point
        newSeries = this.shiftData(currentSeries, node[key], ts);
      } else {
        // A series for this node does not exists yet, generate it and append data point
        newSeries = this.shiftData(this.generateSeries(), node[key], ts);
      }
      newData = {
        name: node.name,
        series: newSeries
      };
      updatedData.push(newData);
    }
    return updatedData;
  }
  shiftData(data, value, ts) {
    const newData = data.slice(1);
    newData.push({
      name: new Date(ts),
      value
    });
    return newData;
  }
  getPeriod() {
    return Math.floor(this.f.rangeMinutes.value * 60 / this.samples);
  }
  setRange(event) {
    this.rangeForm.reset({
      rangeMinutes: +event.target.value
    });
    this.reset();
  }
  reset() {
    this.consoleService.getStatus('').subscribe(data => {
      this.initData(data.nodes.map(n => n.name));
      this.$refreshTimer?.unsubscribe();
      this.refreshTimer = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(0, this.getPeriod() * 1000);
      this.$refreshTimer = this.refreshTimer.subscribe(_ => this.refresh());
    }, err => {
      this.error = err;
    });
  }
  // Returns the diff between setA and setB
  diff(setA, setB) {
    const difference = new Set(setA);
    for (const elem of setB) {
      difference.delete(elem);
    }
    return Array.from(difference);
  }
  get f() {
    return this.rangeForm.controls;
  }
  ngOnDestroy() {
    this.$refreshTimer.unsubscribe();
  }
  getTotalSessionCount() {
    return this.statusData.nodes.reduce((acc, v) => acc + v.session_count, 0);
  }
  getMaxSessionCount() {
    return Math.max(...this.statusData.nodes.map(e => e.session_count));
  }
  getMaxPresenceCount() {
    return Math.max(...this.statusData.nodes.map(e => e.presence_count));
  }
  getMaxMatchCount() {
    return Math.max(...this.statusData.nodes.map(e => e.match_count));
  }
  getTotalMatchCount() {
    return this.statusData.nodes.reduce((acc, v) => acc + v.match_count, 0);
  }
  getMaxGoroutineCount() {
    return Math.max(...this.statusData.nodes.map(e => e.goroutine_count));
  }
  getTotalGorountineCount() {
    return this.statusData.nodes.reduce((acc, v) => acc + v.goroutine_count, 0);
  }
  static ɵfac = function StatusComponent_Factory(t) {
    return new (t || StatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_3__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StatusComponent,
    selectors: [["app-status"]],
    decls: 62,
    vars: 10,
    consts: [[1, "pb-4"], ["type", "danger", 3, "dismissible", 4, "ngIf"], [1, "status-table", "table", "table-sm", "table-striped", "mb-4", 3, "mouseover", "mouseout"], [1, "thead-light"], ["scope", "col"], [4, "ngIf"], [3, "formGroup"], [1, "row", "no-gutters", "justify-content-end"], [1, "col-12", "text-right"], ["ngbDropdown", "", "role", "group", 1, "btn-group"], ["formControlName", "rangeMinutes", 1, "custom-select", "custom-select-sm", "ml-3", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-6", "d-inline-flex", "justify-content-between", "align-items-center"], [1, "graph-title"], [1, "d-inline"], [1, "col-6"], ["class", "graph", 4, "ngIf"], [1, "row", "mt-4"], ["type", "danger", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], ["class", "clickable", 4, "ngFor", "ngForOf"], [1, "border-0"], [1, "clickable"], [3, "ngSwitch"], ["class", "mr-2", "src", "/static/svg/green-tick.svg", "alt", "", "width", "15", "height", "", "ngbTooltip", "OK", 4, "ngSwitchCase"], ["class", "mr-2", "src", "/static/svg/red-triangle.svg", "alt", "", "width", "15", "height", "", "ngbTooltip", "Error", 4, "ngSwitchCase"], ["class", "mr-2", "src", "/static/blue-spinner.svg", "alt", "", "width", "15", "height", "", "ngbTooltip", "Connecting", 4, "ngSwitchCase"], ["class", "mr-2", "src", "/static/red-spinner.svg", "alt", "", "width", "15", "height", "", "ngbTooltip", "Disconnecting", 4, "ngSwitchCase"], [1, "text-muted", "small", 3, "hidden"], ["src", "/static/svg/green-tick.svg", "alt", "", "width", "15", "height", "", "ngbTooltip", "OK", 1, "mr-2"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "15", "height", "", "ngbTooltip", "Error", 1, "mr-2"], ["src", "/static/blue-spinner.svg", "alt", "", "width", "15", "height", "", "ngbTooltip", "Connecting", 1, "mr-2"], ["src", "/static/red-spinner.svg", "alt", "", "width", "15", "height", "", "ngbTooltip", "Disconnecting", 1, "mr-2"], [3, "value"], [1, "graph"], ["xAxisLabel", "Time", "yAxisLabel", "Latency (ms)", 3, "scheme", "legend", "showXAxisLabel", "showYAxisLabel", "animations", "timeline", "autoScale", "xAxis", "yAxis", "yScaleMin", "roundDomains", "results"], ["seriesTooltipTemplate", ""], [1, "chart-legend"], [4, "ngFor", "ngForOf"], [1, "legend-label-color", 3, "ngStyle"], [1, "legend-label-text"], ["xAxisLabel", "Time", "yAxisLabel", "Request Count", 3, "scheme", "legend", "showXAxisLabel", "showYAxisLabel", "animations", "timeline", "autoScale", "xAxis", "yAxis", "yScaleMin", "roundDomains", "results"], ["xAxisLabel", "Time", "yAxisLabel", "Input (kb/s)", 3, "scheme", "legend", "showXAxisLabel", "showYAxisLabel", "animations", "timeline", "autoScale", "xAxis", "yAxis", "yScaleMin", "roundDomains", "results"], ["xAxisLabel", "Time", "yAxisLabel", "Output (kb/s)", 3, "scheme", "legend", "showXAxisLabel", "showYAxisLabel", "animations", "timeline", "autoScale", "xAxis", "yAxis", "yScaleMin", "roundDomains", "results"]],
    template: function StatusComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatusComponent_ngb_alert_2_Template, 4, 2, "ngb-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function StatusComponent_Template_table_mouseover_3_listener() {
          return ctx.showDelta = true;
        })("mouseout", function StatusComponent_Template_table_mouseout_3_listener() {
          return ctx.showDelta = false;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 3)(5, "tr")(6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Node name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Presences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Authoritative Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Goroutines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, StatusComponent_tbody_16_Template, 12, 5, "tbody", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 6)(18, "div", 7)(19, "div", 8)(20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "View:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9)(23, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StatusComponent_Template_select_change_23_listener($event) {
          return ctx.setRange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, StatusComponent_option_24_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "sortNumbers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12)(27, "div", 13)(28, "div", 14)(29, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Processing Latency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " (ms)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13)(34, "div", 14)(35, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " (rpc/s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12)(40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, StatusComponent_div_41_Template, 4, 12, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, StatusComponent_div_43_Template, 4, 12, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18)(45, "div", 13)(46, "div", 14)(47, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " (kb/s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13)(52, "div", 14)(53, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Output");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " (kb/s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12)(58, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, StatusComponent_div_59_Template, 4, 12, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, StatusComponent_div_61_Template, 4, 12, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.statusData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rangeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 8, ctx.rangesKeys));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.latencyGraphData.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rateGraphData.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputGraphData.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.outputGraphData.length > 0);
      }
    },
    dependencies: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAlert, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__.LineChartComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, SortNumbersPipe];
    },
    styles: [".graph[_ngcontent-%COMP%] {\n  height: 450px;\n  border-radius: 5px;\n  border: solid 1px #dadae9;\n}\n\n.graph-title[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem 0.5rem 0;\n}\n\n.table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.status-table[_ngcontent-%COMP%] {\n  empty-cells: hide;\n}\n.status-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.status-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: solid 1px #dadae9;\n  padding: 0.6em 1em;\n  font-weight: 500;\n}\n.status-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: solid 1px #dadae9;\n  padding: 0.6em 1em;\n}\n.status-table[_ngcontent-%COMP%]   .total-row[_ngcontent-%COMP%] {\n  border: solid 2px #dadae9;\n  background-color: #f5f5f5;\n}\n.status-table[_ngcontent-%COMP%]   .total-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: solid 2px #dadae9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGO0FBQ0M7RUFDQyxzQkFBQTtBQUNGO0FBRUM7RUFDRyx5QkFBQTtFQUNGLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdDO0VBQ0cseUJBQUE7RUFDRixrQkFBQTtBQURGO0FBSUU7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FBRko7QUFHSTtFQUNFLHlCQUFBO0FBRE4iLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JhcGgge1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNkYWRhZTk7XHJcbn1cclxuXHJcbi5ncmFwaC10aXRsZSB7XHJcbiAgcGFkZGluZzogLjVyZW0gLjVyZW0gLjVyZW0gMDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnN0YXR1cy10YWJsZSB7XHJcbiAgZW1wdHktY2VsbHM6IGhpZGU7XHJcblxyXG5cdHRyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHR0aCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZGFkYWU5O1xyXG5cdFx0cGFkZGluZzogMC42ZW0gMWVtO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHR9XHJcblxyXG5cdHRkIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNkYWRhZTk7XHJcblx0XHRwYWRkaW5nOiAwLjZlbSAxZW07XHJcblx0fVxyXG5cclxuICAudG90YWwtcm93IHtcclxuICAgIGJvcmRlcjogc29saWQgMnB4ICNkYWRhZTk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgdGQge1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDJweCAjZGFkYWU5O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
class GraphInitNodesResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    return this.consoleService.getStatus('').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mergeMap)(r => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(r.nodes.map(n => n.name)))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
      route.data = {
        ...route.data,
        error
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
    }));
  }
  static ɵfac = function GraphInitNodesResolver_Factory(t) {
    return new (t || GraphInitNodesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_3__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: GraphInitNodesResolver,
    factory: GraphInitNodesResolver.ɵfac,
    providedIn: 'root'
  });
}
class SortNumbersPipe {
  transform(items) {
    return items.sort((a, b) => a - b);
  }
  static ɵfac = function SortNumbersPipe_Factory(t) {
    return new (t || SortNumbersPipe)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "sortNumbers",
    type: SortNumbersPipe,
    pure: false
  });
}

/***/ }),

/***/ 4329:
/*!************************************************************!*\
  !*** ./src/app/storage-object/storage-object.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageObjectComponent": () => (/* binding */ StorageObjectComponent),
/* harmony export */   "StorageObjectResolver": () => (/* binding */ StorageObjectResolver)
/* harmony export */ });
/* harmony import */ var vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vanilla-jsoneditor */ 4221);
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication.service */ 1188);
/* harmony import */ var _shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/delete-confirm.service */ 8406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);











const _c0 = ["editor"];
function StorageObjectComponent_ngb_alert_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error while modifying storage object: ", ctx_r0.error, "");
  }
}
function StorageObjectComponent_ngb_alert_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Storage object was modified successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
  }
}
function StorageObjectComponent_button_87_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save as a copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function StorageObjectComponent_button_87_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Save");
  }
}
function StorageObjectComponent_button_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StorageObjectComponent_button_87_span_1_Template, 2, 0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StorageObjectComponent_button_87_ng_template_2_Template, 1, 0, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.object.collection !== ctx_r3.f.collection.value || ctx_r3.object.key !== ctx_r3.f.keyname.value || ctx_r3.object.user_id !== ctx_r3.f.user_id.value)("ngIfElse", _r5);
  }
}
const _c1 = function () {
  return ["/storage"];
};
const _c2 = function (a0) {
  return {
    "collection": a0
  };
};
const _c3 = function (a0, a1) {
  return {
    "collection": a0,
    "key": a1
  };
};
const _c4 = function (a0, a1, a2) {
  return {
    "collection": a0,
    "key": a1,
    "user_id": a2
  };
};
const _c5 = function (a0) {
  return {
    "is-invalid": a0
  };
};
const _c6 = function (a0) {
  return {
    "active": a0
  };
};
class StorageObjectComponent {
  route;
  router;
  consoleService;
  authService;
  formBuilder;
  deleteConfirmService;
  editor;
  jsonEditor;
  error = '';
  object;
  objectForm;
  updating = false;
  updated = false;
  ngOnInit() {
    this.objectForm = this.formBuilder.group({
      collection: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      keyname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      user_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      permission_read: [{
        value: 0,
        disabled: false
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      permission_write: [{
        value: 0,
        disabled: false
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    });
    this.route.data.subscribe(d => {
      this.object = d[0];
      this.f.collection.setValue(this.object.collection);
      this.f.keyname.setValue(this.object.key);
      this.f.user_id.setValue(this.object.user_id);
      this.f.permission_read.setValue(this.object.permission_read);
      this.f.permission_write.setValue(this.object.permission_write);
      if (!this.updateAllowed()) {
        this.objectForm.disable();
      }
    }, err => {
      this.error = err;
    });
  }
  constructor(route, router, consoleService, authService, formBuilder, deleteConfirmService) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.deleteConfirmService = deleteConfirmService;
  }
  ngAfterViewInit() {
    this.jsonEditor = new vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.JSONEditor({
      target: this.editor.nativeElement,
      props: {
        mode: vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.Mode.text,
        readOnly: !this.updateAllowed(),
        content: {
          text: this.object.value
        }
      }
    });
  }
  updateObject() {
    this.error = '';
    this.updated = false;
    this.updating = true;
    let value = '';
    try {
      value = (0,vanilla_jsoneditor__WEBPACK_IMPORTED_MODULE_2__.toTextContent)(this.jsonEditor.get()).text;
    } catch (e) {
      this.error = e;
      this.updating = false;
      return;
    }
    let version = this.object.version;
    if (this.object.collection !== this.f.collection.value || this.object.key !== this.f.keyname.value || this.object.user_id !== this.f.user_id.value) {
      // don't send version through if we are changing collection/key/userid from the original object.
      version = '';
    }
    const body = {
      version,
      value,
      permission_read: this.f.permission_read.value,
      permission_write: this.f.permission_write.value
    };
    this.consoleService.writeStorageObject('', this.f.collection.value, this.f.keyname.value, this.f.user_id.value, body).subscribe(d => {
      this.updated = true;
      this.updating = false;
      this.object.version = d.version;
      if (version === '') {
        // if created copy, then reset the object definitions
        this.object.collection = this.f.collection.value;
        this.object.key = this.f.keyname.value;
        this.object.user_id = this.f.user_id.value;
        this.object.permission_read = this.f.permission_read.value;
        this.object.permission_write = this.f.permission_write.value;
      }
    }, err => {
      this.error = err;
      this.updating = false;
    });
  }
  deleteObject() {
    this.error = '';
    this.updated = false;
    this.updating = false;
    const o = this.object;
    this.consoleService.deleteStorageObject('', o.collection, o.key, o.user_id, o.version).subscribe(() => {
      this.router.navigate(['/storage'], {
        relativeTo: this.route,
        queryParams: {
          collection: this.f.collection.value,
          key: this.f.key.value,
          user_id: this.f.user_id.value
        }
      });
    }, err => {
      this.error = err;
    });
  }
  updateAllowed() {
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_3__.UserRole.USER_ROLE_MAINTAINER;
  }
  deleteAllowed() {
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_3__.UserRole.USER_ROLE_MAINTAINER;
  }
  get f() {
    // console.log(this.objectForm.controls);
    return this.objectForm.controls;
  }
  static ɵfac = function StorageObjectComponent_Factory(t) {
    return new (t || StorageObjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_3__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_6__.DeleteConfirmService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StorageObjectComponent,
    selectors: [["ng-component"]],
    viewQuery: function StorageObjectComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editor = _t.first);
      }
    },
    decls: 88,
    vars: 60,
    consts: [[1, "pb-1"], [1, "storage-top-nav", "d-flex", "justify-content-between", "align-items-baseline", "mb-3"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink", "queryParams"], ["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], ["type", "success", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "add-border", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6", "d-flex", "justify-content-start", "align-items-baseline"], [1, "col-3", "pl-0"], ["for", "collection", 1, "d-inline"], ["type", "text", "id", "collection", "placeholder", "Collection", "required", "", "formControlName", "collection", 1, "form-control", "form-control-sm", "my-2", 3, "ngClass"], [1, "invalid-tooltip", 3, "hidden"], ["for", "key", 1, "d-inline"], ["type", "text", "id", "key", "placeholder", "Key", "required", "", "formControlName", "keyname", 1, "form-control", "form-control-sm", "my-2", 3, "ngClass"], ["for", "user_id", 1, "d-inline"], ["type", "text", "id", "user_id", "placeholder", "User ID", "required", "", "formControlName", "user_id", 1, "form-control", "form-control-sm", "my-2", 3, "ngClass"], [1, "col-md-6", "d-flex", "justify-content-start", "align-items-baseline", "align-self-center"], ["for", "permission_read", 1, "d-inline"], ["id", "permission_read", "name", "permission_read", 1, "btn-group", "btn-group-toggle"], [1, "btn", "btn-outline-secondary", 3, "ngClass"], ["formControlName", "permission_read", "type", "radio", 3, "value"], ["for", "version", 1, "d-inline"], ["type", "text", "id", "version", "placeholder", "Version", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "permission_write", 1, "d-inline"], ["id", "permission_write", "name", "permission_write", 1, "btn-group", "btn-group-toggle"], ["formControlName", "permission_write", "type", "radio", 3, "value"], [1, "row", "add-border-single-row-bottom", "mb-3"], ["for", "create_time", 1, "d-inline"], ["type", "text", "id", "create_time", "placeholder", "Create Time", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], ["for", "update_time", 1, "d-inline"], ["type", "text", "id", "update_time", "placeholder", "Update Time", "disabled", "", "readonly", "", 1, "form-control-plaintext", "form-control-sm", "my-2", 3, "value"], [1, "card", "p-2", "mt-3", "mb-3", "jsoneditor", 2, "height", "518px"], [2, "height", "500px"], ["editor", ""], ["type", "submit", "class", "btn btn-primary", 3, "disabled", 4, "ngIf"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], ["type", "success", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/green-tick.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""]],
    template: function StorageObjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Storage Object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "nav", 2)(4, "ol", 3)(5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4)(8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4)(11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4)(14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, StorageObjectComponent_ngb_alert_16_Template, 4, 2, "ngb-alert", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, StorageObjectComponent_ngb_alert_17_Template, 4, 1, "ngb-alert", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StorageObjectComponent_Template_form_ngSubmit_18_listener() {
          return ctx.updateObject();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9)(20, "div", 10)(21, "div", 11)(22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Collection is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10)(28, "div", 11)(29, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Key is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9)(35, "div", 10)(36, "div", 11)(37, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "User ID is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19)(43, "div", 11)(44, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Read Permission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21)(47, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " No Read ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Owner Read ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Public Read ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9)(57, "div", 10)(58, "div", 11)(59, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 19)(63, "div", 11)(64, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Write Permission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 27)(67, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " No Write ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Owner Write ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29)(74, "div", 10)(75, "div", 11)(76, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Create Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 10)(80, "div", 11)(81, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Update Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, StorageObjectComponent_button_87_Template, 4, 3, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c2, ctx.object.collection));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.object.collection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](36, _c3, ctx.object.collection, ctx.object.key));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.object.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](40, _c4, ctx.object.collection, ctx.object.key, ctx.object.user_id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.object.user_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.objectForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c5, ctx.f.collection.dirty && ctx.f.collection.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.f.collection.disabled || ctx.f.collection.valid || ctx.f.collection.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c5, ctx.f.keyname.dirty && ctx.f.keyname.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.f.keyname.disabled || ctx.f.keyname.valid || ctx.f.keyname.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c5, ctx.f.user_id.dirty && ctx.f.user_id.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.f.user_id.disabled || ctx.f.user_id.valid || ctx.f.user_id.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c6, ctx.f.permission_read.value == 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c6, ctx.f.permission_read.value == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c6, ctx.f.permission_read.value == 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.object.version);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c6, ctx.f.permission_write.value == 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c6, ctx.f.permission_write.value == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.object.create_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.object.update_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateAllowed());
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAlert, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: [".storage-top-nav[_ngcontent-%COMP%] {\n  border-bottom: solid 1px #dadae9;\n  padding-bottom: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RvcmFnZS1vYmplY3Qvc3RvcmFnZS1vYmplY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQ0FBQTtFQUNBLHFCQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnN0b3JhZ2UtdG9wLW5hdiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkYWRhZTk7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
class StorageObjectResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const collection = route.paramMap.get('collection');
    const key = route.paramMap.get('key');
    const userId = route.paramMap.get('user_id');
    return this.consoleService.getStorage('', collection, key, userId);
  }
  static ɵfac = function StorageObjectResolver_Factory(t) {
    return new (t || StorageObjectResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_3__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: StorageObjectResolver,
    factory: StorageObjectResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6963:
/*!**********************************************!*\
  !*** ./src/app/storage/storage.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageCollectionResolver": () => (/* binding */ StorageCollectionResolver),
/* harmony export */   "StorageListComponent": () => (/* binding */ StorageListComponent),
/* harmony export */   "StorageSearchResolver": () => (/* binding */ StorageSearchResolver)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ 1188);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/delete-confirm.service */ 8406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);









function StorageListComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Filter by collection");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function StorageListComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.f.collection.value);
  }
}
function StorageListComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageListComponent_button_18_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const c_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.f.collection.setValue(c_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r7);
  }
}
function StorageListComponent_ngb_alert_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Error when querying storage objects: ", ctx_r3.error, "");
  }
}
function StorageListComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function StorageListComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No storage objects found - change the filter criteria or add new objects.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function StorageListComponent_tr_49_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 42)(1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageListComponent_tr_49_td_9_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const i_r11 = ctx_r14.index;
      const o_r10 = ctx_r14.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.deleteObject($event, i_r11, o_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function StorageListComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageListComponent_tr_49_Template_td_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const o_r10 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.viewObject(o_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageListComponent_tr_49_Template_td_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const o_r10 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.viewObject(o_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageListComponent_tr_49_Template_td_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const o_r10 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.viewObject(o_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageListComponent_tr_49_Template_td_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const o_r10 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.viewObject(o_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StorageListComponent_tr_49_td_9_Template, 3, 0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const o_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r10.collection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r10.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r10.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r10.update_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.deleteAllowed());
  }
}
class StorageListComponent {
  route;
  router;
  consoleService;
  authService;
  formBuilder;
  deleteConfirmService;
  systemUserId = '00000000-0000-0000-0000-000000000000';
  error = '';
  collections = [];
  objects = [];
  objectCount = 0;
  nextCursor = '';
  prevCursor = '';
  searchForm;
  constructor(route, router, consoleService, authService, formBuilder, deleteConfirmService) {
    this.route = route;
    this.router = router;
    this.consoleService = consoleService;
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.deleteConfirmService = deleteConfirmService;
  }
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      collection: [''],
      key: [''],
      user_id: ['']
    });
    const qp = this.route.snapshot.queryParamMap;
    this.f.collection.setValue(qp.get('collection'));
    this.f.key.setValue(qp.get('key'));
    this.f.user_id.setValue(qp.get('user_id'));
    this.nextCursor = qp.get('cursor');
    if (this.nextCursor && this.nextCursor !== '') {
      this.search(1);
    } else if (this.f.collection.value || this.f.user_id.value) {
      this.search(0);
    }
    this.route.data.subscribe(d => {
      this.collections.length = 0;
      this.collections.push(...d[0].collections);
      this.objectCount = d[1].total_count;
      this.nextCursor = d[1].next_cursor;
      this.prevCursor = d[1].prev_cursor;
      this.objects.length = 0;
      this.objects.push(...d[1].objects);
    }, err => {
      this.error = err;
    });
  }
  disableSearch() {
    // if key is not set, don't disable search.
    // if key is set, make sure collection is also set, otherwise disable search.
    if (this.f.key.value && this.f.key.value !== '') {
      return !(this.f.collection.value && this.f.collection.value !== '');
    }
    return false;
  }
  search(state) {
    let cursor = '';
    switch (state) {
      case -1:
        cursor = this.prevCursor;
        break;
      case 0:
        cursor = '';
        break;
      case 1:
        cursor = this.nextCursor;
        break;
    }
    this.consoleService.listStorage('', this.f.user_id.value, this.f.key.value, this.f.collection.value, cursor).subscribe(d => {
      this.error = '';
      this.objectCount = d.total_count;
      this.nextCursor = d.next_cursor;
      this.objects.length = 0;
      this.objects.push(...d.objects);
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          collection: this.f.collection.value,
          key: this.f.key.value,
          user_id: this.f.user_id.value,
          cursor
        },
        queryParamsHandling: 'merge'
      });
    }, err => {
      this.error = err;
    });
  }
  deleteObject(event, i, o) {
    this.deleteConfirmService.openDeleteConfirmModal(() => {
      event.target.disabled = true;
      event.preventDefault();
      this.error = '';
      this.consoleService.deleteStorageObject('', o.collection, o.key, o.user_id, o.version).subscribe(() => {
        this.error = '';
        this.objectCount--;
        this.objects.splice(i, 1);
      }, err => {
        this.error = err;
      });
    });
  }
  deleteAllowed() {
    // only admin and developers are allowed.
    return this.authService.sessionRole <= _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_MAINTAINER;
  }
  viewObject(o) {
    this.router.navigate(['/storage', o.collection, o.key, o.user_id], {
      relativeTo: this.route
    });
  }
  get f() {
    return this.searchForm.controls;
  }
  static ɵfac = function StorageListComponent_Factory(t) {
    return new (t || StorageListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_5__.DeleteConfirmService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StorageListComponent,
    selectors: [["ng-component"]],
    decls: 50,
    vars: 15,
    consts: [[1, "pb-1"], [1, "pb-4"], [1, "row", "no-gutters", "mb-3"], [1, "col", "d-flex", "justify-content-between", "no-gutters"], [1, "col-md-9"], [3, "formGroup", "ngSubmit"], [1, "input-group"], [1, "input-group-prepend"], ["ngbDropdown", "", 1, "btn-group"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-secondary", "dropdown-radius", 3, "disabled"], [4, "ngIf"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["type", "button", "ngbDropdownItem", "", 1, "btn", "btn-secondary", "text-secondary", 3, "hidden", "click"], [1, "dropdown-divider", 3, "hidden"], ["type", "button", "ngbDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "key", "placeholder", "Filter by key", 1, "form-control"], ["type", "text", "formControlName", "user_id", "placeholder", "Filter by user ID", 1, "form-control", "border-right-0"], [1, "input-group-append"], [1, "input-group-text", 3, "click"], ["src", "/static/svg/purple-cog-1.svg", "alt", "", "width", "20", "height", "", 1, "mr-1"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "col-md-3", "justify-content-end", "text-right"], ["role", "group", "aria-label", "Search", 1, "btn-group", "page-btns"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "disabled", "click"], ["src", "/static/svg/page-first.svg", "alt", "", "width", "20", "height", ""], ["src", "/static/svg/page-next.svg", "alt", "", "width", "20", "height", ""], ["type", "danger", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "row", "no-gutters"], [1, "table", "table-sm", "table-hover", "table-bordered"], [1, "thead-light"], [2, "width", "320px"], [2, "width", "180px"], ["style", "width: 90px", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "button", "ngbDropdownItem", "", 3, "click"], ["type", "danger", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], [2, "width", "90px"], ["colSpan", "5", 1, "text-muted"], [3, "click"], ["class", "text-center", 4, "ngIf"], [1, "text-center"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"]],
    template: function StorageListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Storage Objects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function StorageListComponent_Template_form_ngSubmit_7_listener() {
          return ctx.search(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StorageListComponent_span_12_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StorageListComponent_span_13_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageListComponent_Template_button_click_15_listener() {
          return ctx.f.collection.reset();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u2718 Deselect collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, StorageListComponent_button_18_Template, 2, 1, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15)(20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17)(22, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageListComponent_Template_span_click_22_listener() {
          return ctx.f.user_id.setValue(ctx.systemUserId);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17)(25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageListComponent_Template_button_click_25_listener() {
          return ctx.search(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21)(28, "div", 22)(29, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageListComponent_Template_button_click_29_listener() {
          return ctx.search(0);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageListComponent_Template_button_click_31_listener() {
          return ctx.search(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, StorageListComponent_ngb_alert_33_Template, 4, 2, "ngb-alert", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27)(35, "table", 28)(36, "thead", 29)(37, "tr")(38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Collection Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Key Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Last Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, StorageListComponent_th_46_Template, 2, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, StorageListComponent_tr_48_Template, 3, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, StorageListComponent_tr_49_Template, 10, 5, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.objectCount, " objects found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.collections.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.f.collection.value || ctx.f.collection.value === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.collection.value && ctx.f.collection.value !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.f.collection.value || ctx.f.collection.value === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.f.collection.value || ctx.f.collection.value === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collections);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableSearch());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.objects.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.nextCursor === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteAllowed());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objects.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.objects);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlert, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownItem, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: [".dropdown-radius[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.table-hover[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RvcmFnZS9zdG9yYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tcmFkaXVzIHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhYmxlLWhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
class StorageCollectionResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    return this.consoleService.listStorageCollections('');
  }
  static ɵfac = function StorageCollectionResolver_Factory(t) {
    return new (t || StorageCollectionResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: StorageCollectionResolver,
    factory: StorageCollectionResolver.ɵfac,
    providedIn: 'root'
  });
}
class StorageSearchResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    const collection = route.queryParamMap.get('collection');
    const key = route.queryParamMap.get('key');
    const userId = route.queryParamMap.get('user_id');
    return this.consoleService.listStorage('', userId, key, collection, null);
  }
  static ɵfac = function StorageSearchResolver_Factory(t) {
    return new (t || StorageSearchResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: StorageSearchResolver,
    factory: StorageSearchResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1649:
/*!***************************************************************!*\
  !*** ./src/app/subscriptions/subscriptions-list.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionsListComponent": () => (/* binding */ SubscriptionsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _account_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account/subscriptions/subscriptions.component */ 7305);



class SubscriptionsListComponent {
  formBuilder;
  originalTransactionId;
  searchForm;
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      original_transaction_id: ['']
    });
  }
  search() {
    this.originalTransactionId = this.f.original_transaction_id.value;
  }
  get f() {
    return this.searchForm.controls;
  }
  static ɵfac = function SubscriptionsListComponent_Factory(t) {
    return new (t || SubscriptionsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SubscriptionsListComponent,
    selectors: [["ng-component"]],
    decls: 13,
    vars: 2,
    consts: [[1, "pb-1"], [1, "row", "no-gutters", "mb-4"], [1, "col", "d-flex", "justify-content-between", "no-gutters", "align-items-center"], [1, "col-md-9"], [3, "formGroup", "ngSubmit"], [1, "input-group"], ["type", "text", "formControlName", "original_transaction_id", "placeholder", "Search by original_transaction_id (purchaseToken for Play Store purchases)", 1, "form-control", "border-right-0"], [1, "input-group-append"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", "dropdown-radius", 3, "click"], [3, "original_transaction_id"]],
    template: function SubscriptionsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subscriptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SubscriptionsListComponent_Template_form_ngSubmit_5_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubscriptionsListComponent_Template_button_click_10_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-subscriptions", 10);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("original_transaction_id", ctx.originalTransactionId);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _account_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_2__.SubscriptionsComponent],
    styles: [".dropdown-radius[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.table-hover[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3Vic2NyaXB0aW9ucy9zdWJzY3JpcHRpb25zLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1yYWRpdXMge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhYmxlLWhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1846:
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent),
/* harmony export */   "UsersResolver": () => (/* binding */ UsersResolver)
/* harmony export */ });
/* harmony import */ var _console_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../console.service */ 3713);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/delete-confirm.service */ 8406);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);










function UsersComponent_ngb_alert_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("An error occurred: ", ctx_r0.error, "");
  }
}
function UsersComponent_ngb_alert_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.successMessage);
  }
}
function UsersComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No additional users are setup. Create a new user below.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", 5);
  }
}
function UsersComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td")(6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Administrator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Maintainer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "View Only");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 57)(19, "div", 35)(20, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_21_Template_button_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const user_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.requireUserMfa(user_r5.username, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Enforce MFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_21_Template_button_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const user_r5 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.resetUserMfa(user_r5.username));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Reset MFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_tr_21_Template_button_click_24_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const user_r5 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.deleteUser(user_r5.username));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", user_r5.role !== ctx_r3.adminRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", user_r5.role !== ctx_r3.developerRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", user_r5.role !== ctx_r3.maintainerRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", user_r5.role !== ctx_r3.readonlyRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.mfa_required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r5.mfa_enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", user_r5.mfa_required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !user_r5.mfa_enabled);
  }
}
function UsersComponent_ngb_alert_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "An error occurred:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.userCreateError);
  }
}
const _c0 = function (a0) {
  return {
    "is-invalid": a0
  };
};
class UsersComponent {
  route;
  consoleService;
  formBuilder;
  deleteConfirmService;
  error = '';
  userCreateError = '';
  successMessage = '';
  users = [];
  createUserForm;
  adminRole = _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_ADMIN;
  developerRole = _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_DEVELOPER;
  maintainerRole = _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_MAINTAINER;
  readonlyRole = _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_READONLY;
  constructor(route, consoleService, formBuilder, deleteConfirmService) {
    this.route = route;
    this.consoleService = consoleService;
    this.formBuilder = formBuilder;
    this.deleteConfirmService = deleteConfirmService;
  }
  ngOnInit() {
    this.createUserForm = this.formBuilder.group({
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8)])],
      role: [+this.readonlyRole, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      mfa: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      newsletter: [false]
    });
    this.route.data.subscribe(data => {
      const users = data[0];
      this.users.length = 0;
      this.users.push(...users.users);
    }, err => {
      this.error = err;
    });
  }
  requireUserMfa(username, enforce) {
    this.error = '';
    this.consoleService.requireUserMfa('', username, {
      required: enforce
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => {
      return this.consoleService.listUsers('');
    })).subscribe(userList => {
      this.error = '';
      this.users.length = 0;
      this.users.push(...userList.users);
      this.successMessage = `User ${username} Multi-factor authentication is now required`;
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
    }, error => {
      this.error = error;
    });
  }
  resetUserMfa(username) {
    this.error = '';
    this.consoleService.resetUserMfa('', username).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => {
      return this.consoleService.listUsers('');
    })).subscribe(userList => {
      this.error = '';
      this.users.length = 0;
      this.users.push(...userList.users);
      this.successMessage = `User ${username} Multi-factor authentication was reset successfully`;
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
    }, error => {
      this.error = error;
    });
  }
  deleteUser(username) {
    this.error = '';
    this.deleteConfirmService.openDeleteConfirmModal(() => {
      this.consoleService.deleteUser('', username).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => {
        return this.consoleService.listUsers('');
      })).subscribe(userList => {
        this.error = '';
        this.users.length = 0;
        this.users.push(...userList.users);
      }, error => {
        this.error = error;
      });
    });
  }
  addUser() {
    this.userCreateError = '';
    this.createUserForm.disable();
    let role = _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_READONLY;
    switch (this.f.role.value) {
      case 1:
        role = _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_ADMIN;
        break;
      case 2:
        role = _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_DEVELOPER;
        break;
      case 3:
        role = _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_MAINTAINER;
        break;
      case 4:
        role = _console_service__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER_ROLE_READONLY;
        break;
    }
    const req = {
      username: this.f.username.value,
      email: this.f.email.value,
      password: this.f.password.value,
      role,
      newsletter_subscription: this.f.newsletter.value,
      mfa_required: this.f.mfa.value
    };
    this.consoleService.addUser('', req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => {
      return this.consoleService.listUsers('');
    })).subscribe(userList => {
      this.userCreateError = '';
      this.createUserForm.reset({
        role: +role,
        mfa: true
      });
      this.createUserForm.enable();
      this.users.length = 0;
      this.users.push(...userList.users);
    }, error => {
      this.userCreateError = error;
      this.createUserForm.enable();
    });
  }
  get f() {
    return this.createUserForm.controls;
  }
  static ɵfac = function UsersComponent_Factory(t) {
    return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_delete_confirm_service__WEBPACK_IMPORTED_MODULE_5__.DeleteConfirmService));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: UsersComponent,
    selectors: [["app-users"]],
    decls: 135,
    vars: 26,
    consts: [[1, "pb-4"], ["type", "danger", 3, "dismissible", 4, "ngIf"], ["type", "success", "class", "mb-3", 3, "dismissible", 4, "ngIf"], [1, "user-details", "mb-5", "table", "table-bordered", "table-sm", "table-striped"], [1, "thead-light"], [2, "width", "400px"], [2, "width", "300px"], [2, "width", "90px"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "section-divider", "d-flex", "mb-4"], [1, "mb-4", "alert-permissions", 3, "type", "dismissible"], [1, "alert-title", "font-weight-bold"], [1, "d-flex", "flex-wrap", "flex-row"], [1, "col", "col-md-3", "p-4", "flex-fill", "flex-grow-1"], [1, "d-flex", "align-items-center", "mb-3"], ["src", "/static/svg/role-admin.svg", "alt", "", "width", "30", "height", "", 1, "mr-2"], [1, "m-0", "font-weight-bold"], ["src", "/static/svg/role-developer.svg", "alt", "", "width", "30", "height", "", 1, "mr-2"], ["src", "/static/svg/role-maintainer.svg", "alt", "", "width", "30", "height", "", 1, "mr-2"], ["src", "/static/svg/role-viewonly.svg", "alt", "", "width", "30", "height", "", 1, "mr-2"], [1, "add-border", "rounded"], [3, "formGroup", "ngSubmit"], [1, "row", "no-gutters"], [1, "col", "d-flex", "justify-content-between", "align-items-center"], [1, "col-md-3"], ["for", "email", 1, "d-inline"], [1, "col-md-9", "ml-0", "p-0"], ["type", "email", "id", "email", "placeholder", "email@example.com", "required", "", "formControlName", "email", 1, "form-control", 3, "ngClass"], [1, "invalid-tooltip", 3, "hidden"], ["for", "username", 1, "d-inline"], ["type", "text", "id", "username", "placeholder", "Username", "required", "", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["for", "password", 1, "d-inline"], ["type", "password", "id", "password", "placeholder", "Password", "required", "", "formControlName", "password", 1, "form-control", 3, "ngClass"], [1, "d-inline"], [1, "btn-group"], ["disabled", "", 1, "btn", "btn-outline-dark", "disabled"], [3, "hidden"], ["ngbDropdown", "", "role", "group", 1, "btn-group"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle-split"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["type", "button", "ngbDropdownItem", "", 3, "click"], [1, "col", "d-flex", "align-items-center"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "mfa", "formControlName", "mfa", 1, "custom-control-input", "mr-2", "my-2"], ["for", "mfa", 1, "form-check-label", "custom-control-label"], [1, "row", "no-gutters", "add-border-single-row-bottom", "mb-4"], ["type", "checkbox", "id", "newsletter", "formControlName", "newsletter", 1, "custom-control-input", "mr-2", "my-2"], ["for", "newsletter", 1, "form-check-label", "custom-control-label"], [1, ""], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "danger", 3, "dismissible"], ["src", "/static/svg/red-triangle.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "mr-2", "d-inline", "font-weight-bold"], ["type", "success", 1, "mb-3", 3, "dismissible"], ["src", "/static/svg/green-tick.svg", "alt", "", "width", "16", "height", "", 1, "mr-2"], [1, "text-muted", 3, "colSpan"], [2, "width", "310px"], ["type", "button", 1, "btn", "btn-warning", "btn-outline-dark", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-danger", "btn-outline-dark", 3, "click"], [1, "mb-0", "pl-4"]],
    template: function UsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UsersComponent_ngb_alert_2_Template, 4, 2, "ngb-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UsersComponent_ngb_alert_3_Template, 4, 2, "ngb-alert", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3)(5, "thead", 4)(6, "tr")(7, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "MFA Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "MFA Setup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UsersComponent_tr_20_Template, 3, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UsersComponent_tr_21_Template, 26, 10, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Add new user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ngb-alert", 11)(25, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "User roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13)(28, "div", 14)(29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Owners have complete control over the server, its users and resources. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14)(36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Like Administrators, Developers have complete control over the server, resources and data. However they cannot add, change or delete console users. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14)(43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Maintainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Maintainers have access to adding, changing and delete client resources such as accounts, storage and leaderboard records. They don't have access to the API Explorer or the console users. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14)(50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "View Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " View Only users can only view client resources but cannot make any changes to the data whatsoever. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, UsersComponent_ngb_alert_56_Template, 6, 2, "ngb-alert", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21)(58, "form", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UsersComponent_Template_form_ngSubmit_58_listener() {
          return ctx.addUser();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23)(60, "div", 24)(61, "div", 25)(62, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Email is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 23)(69, "div", 24)(70, "div", 25)(71, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Username is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 23)(78, "div", 24)(79, "div", 25)(80, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Password is required, must be 8 chars or longer and consist of at least a capital letter, a small letter and a number.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 23)(87, "div", 24)(88, "div", 25)(89, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 27)(92, "div", 35)(93, "button", 36)(94, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Maintainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "View Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 40)(105, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_105_listener() {
          return ctx.f.role.setValue(+ctx.adminRole);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_107_listener() {
          return ctx.f.role.setValue(+ctx.developerRole);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_109_listener() {
          return ctx.f.role.setValue(+ctx.maintainerRole);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Maintainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_111_listener() {
          return ctx.f.role.setValue(+ctx.readonlyRole);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "View Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Role is required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 23)(116, "div", 42)(117, "div", 25)(118, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Require Multi-factor Authentication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 27)(121, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "input", 44)(123, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 46)(125, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 27)(128, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Subscribe to Heroic Labs' newsletters to receive latest updates to Nakama and other news.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 49)(133, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "secondary")("dismissible", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userCreateError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createUserForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.f.email.dirty && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.f.email.disabled || ctx.f.email.valid || ctx.f.email.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.f.username.dirty && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.f.username.disabled || ctx.f.username.valid || ctx.f.username.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.f.password.dirty && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.f.password.disabled || ctx.f.password.valid || ctx.f.password.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.f.role.value !== +ctx.adminRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.f.role.value !== +ctx.developerRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.f.role.value !== +ctx.maintainerRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.f.role.value !== +ctx.readonlyRole);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.f.role.disabled || ctx.f.role.valid || ctx.f.role.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.createUserForm.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAlert, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownItem, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: [".user-details[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.user-details[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.6em 1em;\n  font-weight: 500;\n}\n.user-details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.6em 1em;\n}\n\n.alert-permissions[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.alert-permissions[_ngcontent-%COMP%]   .alert-title[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.alert-permissions[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%] {\n  border-top: solid 1px #dadae9;\n  margin: 0;\n}\n.alert-permissions[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  border-right: solid 1px #dadae9;\n}\n.alert-permissions[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBQTtBQWNDO0VBQ0Msc0JBQUE7QUFaRjtBQWVDO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBQWJGO0FBZ0JDO0VBQ0Msa0JBQUE7QUFkRjs7QUFrQkE7RUFDRSxVQUFBO0FBZkY7QUFrQkU7RUFDRSxhQUFBO0FBaEJKO0FBbUJFO0VBQ0UsNkJBQUE7RUFDQSxTQUFBO0FBakJKO0FBbUJJO0VBQ0UsK0JBQUE7QUFqQk47QUFtQk07RUFDRSxrQkFBQTtBQWpCUiIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbG9ycyAqL1xyXG4kYnJhbmQtcHVycGxlOiAjNzY2OEVEO1xyXG4kYnJhbmQtbGlnaHQtcHVycGxlOiAjQTY5QkZGO1xyXG4kYnJhbmQtZ3JleTogI0ZBRkFGQztcclxuJGJyYW5kLWRhcmstYmx1ZTogIzMzMzU2NDtcclxuJGJyYW5kLXBpbms6ICNGODUzRjc7XHJcbiRicmFuZC1ibHVlOiAjNjhCOEVBO1xyXG4kYnJhbmQtcmVkOiAjRkU3NTZBO1xyXG4kYnJhbmQteWVsbG93OiAjRUREODNFO1xyXG4kYnJhbmQtZ3JlZW46ICM4MUQ2OTU7XHJcblxyXG4kZm9udC1jb2xvcjogIzMzMzU2NDtcclxuXHJcbi51c2VyLWRldGFpbHMge1xyXG5cdHRyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHR0aCB7XHJcblx0XHRwYWRkaW5nOiAwLjZlbSAxZW07XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdH1cclxuXHJcblx0dGQge1xyXG5cdFx0cGFkZGluZzogMC42ZW0gMWVtO1xyXG5cdH1cclxufVxyXG5cclxuLmFsZXJ0LXBlcm1pc3Npb25zIHtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuXHJcbiAgLmFsZXJ0LXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuZmxleC1yb3cge1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IGRhcmtlbigkYnJhbmQtZ3JleSwgMTAlKTtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAuY29sIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZGFya2VuKCRicmFuZC1ncmV5LCAxMCUpO1xyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
class UsersResolver {
  consoleService;
  constructor(consoleService) {
    this.consoleService = consoleService;
  }
  resolve(route, state) {
    return this.consoleService.listUsers('');
  }
  static ɵfac = function UsersResolver_Factory(t) {
    return new (t || UsersResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_console_service__WEBPACK_IMPORTED_MODULE_1__.ConsoleService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: UsersResolver,
    factory: UsersResolver.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1866:
/*!************************************!*\
  !*** ./src/app/window.provider.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WINDOW": () => (/* binding */ WINDOW),
/* harmony export */   "WINDOW_PROVIDERS": () => (/* binding */ WINDOW_PROVIDERS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
// Copyright 2020 The Nakama Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('window');
const windowProvider = {
  provide: WINDOW,
  useFactory: () => window
};
const WINDOW_PROVIDERS = [windowProvider];

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// Copyright 2020 The Nakama Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
const environment = {
  production: false,
  segment_write_key: 'k23XRwEFKYnaKDk2esbRgEG49sLN6CDV',
  apiBaseUrl: 'http://127.0.0.1:7351',
  nt: false
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 2340);
// Copyright 2020 The Nakama Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.




if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__.AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;
  // Otherwise, log the boot error
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map