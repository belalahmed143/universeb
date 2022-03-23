if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("XCustomerChatInjectionDialogControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/customer_chat/dialog/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("XPagesManagerSettingsControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/{page_token}/settings/", Object.freeze({
        shimmed_in_item: !1,
        show_cc_dialog: !1,
        chat_plugin_step: 0,
        show_sync_dialog: !1
    }), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("ChatPluginSetupFlowE2ETestUtils", ["XBizSuiteControllerRouteBuilder", "XCometPageVanityInboxControllerRouteBuilder", "XCustomerChatInjectionDialogControllerRouteBuilder", "XPagesManagerSettingsControllerRouteBuilder", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = 8959;
    d = 9233;
    e = 9339;
    var h = "chat-plugin-setup-flow-container",
        i = "create-code-button";
    f = "setup-modal";
    var aa = "setup-3p-menu-modal",
        ba = "setup-3p-menu-manual-button",
        ca = "setup-choice-modal",
        j = "locale-selector",
        da = "setup-method-button-",
        k = "setup-modal-next-button",
        l = "setup-modal-add-domain-button",
        m = "setup-modal-new-domain-input",
        n = "setup-modal-copy-code-button",
        o = "setup-modal-email-instructions-link",
        p = "setup-modal-email-instructions-modal",
        q = "setup-modal-email-recipients-input",
        r = "setup-modal-send-email-next-button",
        ea = "no-domains-main-panel-error",
        fa = "domains-list-text",
        ga = "edit-domains-modal",
        s = "edit-domains-button",
        t = "edit-domains-save-button",
        ha = "setup-google-tag-manager-locale",
        u = "automation-section",
        v = "automation-section-container",
        w = "automation-welcome-message-toggle",
        x = "automation-welcome-message-input",
        y = "automation-welcome-message-edit-button",
        z = "automation-welcome-message-collapse-button",
        A = "automation-faq-toggle",
        B = "automation-faq-entry-question-input-",
        C = "automation-faq-entry-response-input-",
        D = "automation-faq-entry-edit-button-",
        E = "automation-faq-entry-collapse-button-",
        F = "automation-faq-entry-delete-button-",
        G = "automation-faq-add-button",
        H = "customization-section",
        I = "customization-section-container",
        J = "customization-greeting-edit-button",
        K = "customization-greeting-collapse-button",
        L = "customization-greeting-input",
        ia = "customization-guest-mode-toggle",
        ja = "customization-theme-color-toggle",
        ka = "customization-entry-point-icon-only-test-id",
        la = "customization-entry-point-icon-with-label-test-id",
        ma = "customization-entry-point-label-only-test-id",
        na = "customization-entry-point-round-icon-test-id",
        M = "customization-entry-point-icon-section-test-id",
        N = "customization-entry-point-label-section-test-id",
        oa = "customization-entry-point-label-selector-test-id",
        pa = "customization-entry-point-label-help-test-id",
        qa = "customization-theme-color-list-item",
        O = "customization-theme-color-input",
        ra = "customization-theme-color-warning-notice",
        sa = "customization-alignment-selector",
        P = "customization-desktop-bottom-spacing-input",
        Q = "customization-mobile-bottom-spacing-input",
        R = "customization-desktop-side-spacing-input",
        S = "customization-mobile-side-spacing-input",
        ta = "customization-auto-expand-toggle",
        ua = "customization-prominence-selector",
        va = "customization-prominence-icon",
        wa = "customization-prominence-welcome-message",
        xa = "customization-prominence-window",
        ya = "desktop_welcome_message_preview",
        za = "customization-mobile-optin",
        Aa = "customization-chat-button-size-desktop-tab",
        Ba = "customization-chat-button-size-mobile-tab",
        T = "customization-compact-chat-button-size-option",
        U = "customization-standard-chat-button-size-option",
        Ca = "customization-compact-chat-window-size-option",
        Da = "customization-standard-chat-window-size-option",
        V = "publish-button",
        Ea = "publish-toast",
        Fa = "preview-tab-desktop-button",
        Ga = "preview-tab-mobile-button",
        Ha = "preview-desktop-frame",
        Ia = "preview-mobile-frame",
        Ja = "preview-messenger-icon-button",
        Ka = "preview-desktop-thread-page-container",
        La = "preview-thread-page-close-button",
        Ma = "preview-mobile-thread-page-container",
        Na = "preview-mobile-welcome-message-page-container",
        Oa = "preview-mobile-welcome-message-test-id",
        Pa = "preview-desktop-welcome-page-modal-container",
        Qa = "preview-desktop-welcome-page-modal-close-button",
        Ra = "preview-mobile-welcome-page-modal-container",
        Sa = "preview-mobile-welcome-page-modal-close-button",
        W = "nux-welcome-modal-container",
        X = "nux-step-setup-container",
        Y = "nux-step-automation-container",
        Z = "nux-step-customization-container",
        $ = "nux-step-publish-container",
        Ta = "wordpress-setup-page-selector",
        Ua = "wordpress-setup-continue-button",
        Va = function(a) {
            return "wordpress-setup-page-selector-option-" + a
        },
        Wa = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu felis eget nulla scelerisque sodales. Sed orci dolor, laoreet dictum neque vel, scelerisque ullamcorper nibh. Curabitur interdum mauris sit amet mauris tempor fringilla. Vestibulum semper lorem vitae libero sagittis pulvinar. Donec at arcu at sem euismod convallis. Aenean vitae dui vitae eros laoreet interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed porttitor dignissim nibh vitae condimentum.",
        Xa = function(a) {
            return b("regeneratorRuntime").async(function(c) {
                while (1) switch (c.prev = c.next) {
                    case 0:
                        c.next = 2;
                        return b("regeneratorRuntime").awrap($a(a));
                    case 2:
                    case "end":
                        return c.stop()
                }
            }, null, this)
        },
        Ya = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu felis eget nulla scelerisque sodales. Sed orci dolor, laoreet dictum neque vel, scelerisque ullamcorper nibh. Curabitur interdum mauris sit amet mauris tempor fringilla. Vestibulum semper lorem vitae libero sagittis pulvinar. Donec at arcu at sem euismod convallis. Aenean vitae dui vitae eros laoreet interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed porttitor dignissim nibh vit",
        Za = "Lorem ipsum dolor sit amet, consectetur adipi",
        $a = function(a) {
            return b("regeneratorRuntime").async(function(d) {
                while (1) switch (d.prev = d.next) {
                    case 0:
                        d.next = 2;
                        return b("regeneratorRuntime").awrap(e2e.navigate(c("XBizSuiteControllerRouteBuilder").buildUri({
                            asset_id: a,
                            rest: "inbox/chat_plugin"
                        }), {
                            subdomain: "business"
                        }));
                    case 2:
                    case "end":
                        return d.stop()
                }
            }, null, this)
        },
        ab = function(a) {
            return b("regeneratorRuntime").async(function(d) {
                while (1) switch (d.prev = d.next) {
                    case 0:
                        d.next = 2;
                        return b("regeneratorRuntime").awrap(e2e.navigate(c("XCometPageVanityInboxControllerRouteBuilder").buildUri({
                            vanity: a,
                            section: "chat_plugin"
                        })));
                    case 2:
                        d.next = 4;
                        return b("regeneratorRuntime").awrap(e2e.switchContext({
                            selector: "iframe",
                            target: "iframe"
                        }));
                    case 4:
                    case "end":
                        return d.stop()
                }
            }, null, this)
        },
        bb = function(a) {
            return b("regeneratorRuntime").async(function(d) {
                while (1) switch (d.prev = d.next) {
                    case 0:
                        d.next = 2;
                        return b("regeneratorRuntime").awrap(e2e.navigate(c("XPagesManagerSettingsControllerRouteBuilder").buildUri({
                            page_token: a,
                            show_cc_dialog: !0,
                            section: "messages",
                            tab: "messaging"
                        })));
                    case 2:
                        d.next = 4;
                        return b("regeneratorRuntime").awrap(e2e.switchContext({
                            selector: "iframe",
                            target: "iframe"
                        }));
                    case 4:
                    case "end":
                        return d.stop()
                }
            }, null, this)
        },
        cb = function(a) {
            return b("regeneratorRuntime").async(function(d) {
                while (1) switch (d.prev = d.next) {
                    case 0:
                        d.next = 2;
                        return b("regeneratorRuntime").awrap(e2e.navigate(c("XCustomerChatInjectionDialogControllerRouteBuilder").buildUri({
                            domain: "https://facebook.com"
                        })));
                    case 2:
                        d.next = 4;
                        return b("regeneratorRuntime").awrap(e2e.click(Ta));
                    case 4:
                        d.next = 6;
                        return b("regeneratorRuntime").awrap(e2e.click(Va(a)));
                    case 6:
                        d.next = 8;
                        return b("regeneratorRuntime").awrap(e2e.click(Ua));
                    case 8:
                    case "end":
                        return d.stop()
                }
            }, null, this)
        },
        db = function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        a.next = 2;
                        return b("regeneratorRuntime").awrap(e2e.click(H));
                    case 2:
                        a.next = 4;
                        return b("regeneratorRuntime").awrap(expect(I).not.toBePresent());
                    case 4:
                        a.next = 6;
                        return b("regeneratorRuntime").awrap(expect(v).toBePresent());
                    case 6:
                        a.next = 8;
                        return b("regeneratorRuntime").awrap(e2e.click(u));
                    case 8:
                        a.next = 10;
                        return b("regeneratorRuntime").awrap(expect(I).not.toBePresent());
                    case 10:
                        a.next = 12;
                        return b("regeneratorRuntime").awrap(expect(v).toBePresent());
                    case 12:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        },
        eb = function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        a.next = 2;
                        return b("regeneratorRuntime").awrap(e2e.click(H));
                    case 2:
                        a.next = 4;
                        return b("regeneratorRuntime").awrap(expect(I).toBePresent());
                    case 4:
                        a.next = 6;
                        return b("regeneratorRuntime").awrap(expect(v).not.toBePresent());
                    case 6:
                        a.next = 8;
                        return b("regeneratorRuntime").awrap(e2e.click(u));
                    case 8:
                        a.next = 10;
                        return b("regeneratorRuntime").awrap(expect(I).toBePresent());
                    case 10:
                        a.next = 12;
                        return b("regeneratorRuntime").awrap(expect(v).not.toBePresent());
                    case 12:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        },
        fb = function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        a.next = 2;
                        return b("regeneratorRuntime").awrap(e2e.click(H));
                    case 2:
                        a.next = 4;
                        return b("regeneratorRuntime").awrap(expect(I).toBePresent());
                    case 4:
                        a.next = 6;
                        return b("regeneratorRuntime").awrap(expect(v).not.toBePresent());
                    case 6:
                        a.next = 8;
                        return b("regeneratorRuntime").awrap(e2e.click(u));
                    case 8:
                        a.next = 10;
                        return b("regeneratorRuntime").awrap(expect(I).not.toBePresent());
                    case 10:
                        a.next = 12;
                        return b("regeneratorRuntime").awrap(expect(v).toBePresent());
                    case 12:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        },
        gb = function() {
            var a;
            return b("regeneratorRuntime").async(function(c) {
                while (1) switch (c.prev = c.next) {
                    case 0:
                        c.next = 2;
                        return b("regeneratorRuntime").awrap(expect(h).toBePresent());
                    case 2:
                        c.next = 4;
                        return b("regeneratorRuntime").awrap(e2e.click(i));
                    case 4:
                        c.next = 6;
                        return b("regeneratorRuntime").awrap(e2e.click(j));
                    case 6:
                        c.next = 8;
                        return b("regeneratorRuntime").awrap(e2e.click('div:text("Afrikaans")'));
                    case 8:
                        c.next = 10;
                        return b("regeneratorRuntime").awrap(e2e.click(k));
                    case 10:
                        c.next = 12;
                        return b("regeneratorRuntime").awrap(e2e.type(m, "https://facebook.com"));
                    case 12:
                        c.next = 14;
                        return b("regeneratorRuntime").awrap(e2e.keyboard.press("Enter", m));
                    case 14:
                        c.next = 16;
                        return b("regeneratorRuntime").awrap(e2e.click(l));
                    case 16:
                        c.next = 18;
                        return b("regeneratorRuntime").awrap(e2e.type(m, "https://messenger.com"));
                    case 18:
                        c.next = 20;
                        return b("regeneratorRuntime").awrap(e2e.keyboard.press("Enter", m));
                    case 20:
                        c.next = 22;
                        return b("regeneratorRuntime").awrap(e2e.click(k));
                    case 22:
                        c.next = 24;
                        return b("regeneratorRuntime").awrap(e2e.click(o));
                    case 24:
                        c.next = 26;
                        return b("regeneratorRuntime").awrap(expect(p).toBeVisible());
                    case 26:
                        a = '[data-testid="' + q + '"] input[role="combobox"]';
                        c.next = 29;
                        return b("regeneratorRuntime").awrap(e2e.click(a));
                    case 29:
                        c.next = 31;
                        return b("regeneratorRuntime").awrap(e2e.type(a, "doesntexist@facebook.com"));
                    case 31:
                        c.next = 33;
                        return b("regeneratorRuntime").awrap(e2e.keyboard.press("Enter", a));
                    case 33:
                        c.next = 35;
                        return b("regeneratorRuntime").awrap(e2e.click(r));
                    case 35:
                        c.next = 37;
                        return b("regeneratorRuntime").awrap(e2e.click(r));
                    case 37:
                        c.next = 39;
                        return b("regeneratorRuntime").awrap(e2e.click(n));
                    case 39:
                        c.next = 41;
                        return b("regeneratorRuntime").awrap(e2e.click(k));
                    case 41:
                        c.next = 43;
                        return b("regeneratorRuntime").awrap(e2e.click(k));
                    case 43:
                        c.next = 45;
                        return b("regeneratorRuntime").awrap(e2e.click(k));
                    case 45:
                        c.next = 47;
                        return b("regeneratorRuntime").awrap(e2e.click(s));
                    case 47:
                        c.next = 49;
                        return b("regeneratorRuntime").awrap(e2e.click(l));
                    case 49:
                        c.next = 51;
                        return b("regeneratorRuntime").awrap(e2e.type(m, "https://instagram.com"));
                    case 51:
                        c.next = 53;
                        return b("regeneratorRuntime").awrap(e2e.keyboard.press("Enter", m));
                    case 53:
                        c.next = 55;
                        return b("regeneratorRuntime").awrap(e2e.click(t));
                    case 55:
                    case "end":
                        return c.stop()
                }
            }, null, this)
        },
        hb = function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        a.next = 2;
                        return b("regeneratorRuntime").awrap(expect(h).toBePresent());
                    case 2:
                        a.next = 4;
                        return b("regeneratorRuntime").awrap(e2e.click(w));
                    case 4:
                        a.next = 6;
                        return b("regeneratorRuntime").awrap(e2e.click(w));
                    case 6:
                        a.next = 8;
                        return b("regeneratorRuntime").awrap(e2e.type(x, "test"));
                    case 8:
                        a.next = 10;
                        return b("regeneratorRuntime").awrap(e2e.click(z));
                    case 10:
                        a.next = 12;
                        return b("regeneratorRuntime").awrap(e2e.click(y));
                    case 12:
                        a.next = 14;
                        return b("regeneratorRuntime").awrap(e2e.click(G));
                    case 14:
                        a.next = 16;
                        return b("regeneratorRuntime").awrap(e2e.type(B + "0", "Question 0"));
                    case 16:
                        a.next = 18;
                        return b("regeneratorRuntime").awrap(e2e.type(C + "0", "Response 0"));
                    case 18:
                        a.next = 20;
                        return b("regeneratorRuntime").awrap(e2e.click(E + "0"));
                    case 20:
                        a.next = 22;
                        return b("regeneratorRuntime").awrap(e2e.click(D + "0"));
                    case 22:
                        a.next = 24;
                        return b("regeneratorRuntime").awrap(e2e.click(F + "0"));
                    case 24:
                        a.next = 26;
                        return b("regeneratorRuntime").awrap(e2e.click(G));
                    case 26:
                        a.next = 28;
                        return b("regeneratorRuntime").awrap(e2e.type(B + "0", "Question 0"));
                    case 28:
                        a.next = 30;
                        return b("regeneratorRuntime").awrap(e2e.type(C + "0", "Response 0"));
                    case 30:
                        a.next = 32;
                        return b("regeneratorRuntime").awrap(e2e.click(G));
                    case 32:
                        a.next = 34;
                        return b("regeneratorRuntime").awrap(e2e.type(B + "1", "Question 1"));
                    case 34:
                        a.next = 36;
                        return b("regeneratorRuntime").awrap(e2e.type(C + "1", "Response 1"));
                    case 36:
                        a.next = 38;
                        return b("regeneratorRuntime").awrap(e2e.click(A));
                    case 38:
                        a.next = 40;
                        return b("regeneratorRuntime").awrap(e2e.click(A));
                    case 40:
                        a.next = 42;
                        return b("regeneratorRuntime").awrap(e2e.click(V));
                    case 42:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        },
        ib = function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        a.next = 2;
                        return b("regeneratorRuntime").awrap(expect(h).toBePresent());
                    case 2:
                        a.next = 4;
                        return b("regeneratorRuntime").awrap(e2e.click(H));
                    case 4:
                        a.next = 6;
                        return b("regeneratorRuntime").awrap(e2e.click(J));
                    case 6:
                        a.next = 8;
                        return b("regeneratorRuntime").awrap(e2e.type(L, "test"));
                    case 8:
                        a.next = 10;
                        return b("regeneratorRuntime").awrap(e2e.click(K));
                    case 10:
                        a.next = 12;
                        return b("regeneratorRuntime").awrap(e2e.click(ia));
                    case 12:
                        a.next = 14;
                        return b("regeneratorRuntime").awrap(e2e.click(ja));
                    case 14:
                        a.next = 16;
                        return b("regeneratorRuntime").awrap(e2e.click(qa));
                    case 16:
                        a.next = 18;
                        return b("regeneratorRuntime").awrap(e2e.clear(O));
                    case 18:
                        a.next = 20;
                        return b("regeneratorRuntime").awrap(e2e.type(O, "#000000"));
                    case 20:
                        a.next = 22;
                        return b("regeneratorRuntime").awrap(e2e.click(ka));
                    case 22:
                        a.next = 24;
                        return b("regeneratorRuntime").awrap(expect(M).toBePresent());
                    case 24:
                        a.next = 26;
                        return b("regeneratorRuntime").awrap(expect(N).not.toBePresent());
                    case 26:
                        a.next = 28;
                        return b("regeneratorRuntime").awrap(e2e.click(la));
                    case 28:
                        a.next = 30;
                        return b("regeneratorRuntime").awrap(expect(M).toBePresent());
                    case 30:
                        a.next = 32;
                        return b("regeneratorRuntime").awrap(expect(N).toBePresent());
                    case 32:
                        a.next = 34;
                        return b("regeneratorRuntime").awrap(e2e.click(na));
                    case 34:
                        a.next = 36;
                        return b("regeneratorRuntime").awrap(e2e.click(oa));
                    case 36:
                        a.next = 38;
                        return b("regeneratorRuntime").awrap(e2e.click(pa));
                    case 38:
                        a.next = 40;
                        return b("regeneratorRuntime").awrap(e2e.click(ma));
                    case 40:
                        a.next = 42;
                        return b("regeneratorRuntime").awrap(expect(M).not.toBePresent());
                    case 42:
                        a.next = 44;
                        return b("regeneratorRuntime").awrap(expect(N).toBePresent());
                    case 44:
                        a.next = 46;
                        return b("regeneratorRuntime").awrap(e2e.click(sa));
                    case 46:
                        a.next = 48;
                        return b("regeneratorRuntime").awrap(e2e.click('div:text("Left")'));
                    case 48:
                        a.next = 50;
                        return b("regeneratorRuntime").awrap(e2e.clear(P));
                    case 50:
                        a.next = 52;
                        return b("regeneratorRuntime").awrap(e2e.type(P, "0"));
                    case 52:
                        a.next = 54;
                        return b("regeneratorRuntime").awrap(e2e.clear(Q));
                    case 54:
                        a.next = 56;
                        return b("regeneratorRuntime").awrap(e2e.type(Q, "0"));
                    case 56:
                        a.next = 58;
                        return b("regeneratorRuntime").awrap(e2e.clear(R));
                    case 58:
                        a.next = 60;
                        return b("regeneratorRuntime").awrap(e2e.type(R, "0"));
                    case 60:
                        a.next = 62;
                        return b("regeneratorRuntime").awrap(e2e.clear(S));
                    case 62:
                        a.next = 64;
                        return b("regeneratorRuntime").awrap(e2e.type(S, "0"));
                    case 64:
                        a.next = 66;
                        return b("regeneratorRuntime").awrap(e2e.click(za));
                    case 66:
                        a.next = 68;
                        return b("regeneratorRuntime").awrap(e2e.click('div:text("Use Chat Plugin")'));
                    case 68:
                        a.next = 70;
                        return b("regeneratorRuntime").awrap(e2e.click(Aa));
                    case 70:
                        a.next = 72;
                        return b("regeneratorRuntime").awrap(e2e.click(T));
                    case 72:
                        a.next = 74;
                        return b("regeneratorRuntime").awrap(e2e.click(U));
                    case 74:
                        a.next = 76;
                        return b("regeneratorRuntime").awrap(e2e.click(Ba));
                    case 76:
                        a.next = 78;
                        return b("regeneratorRuntime").awrap(e2e.click(T));
                    case 78:
                        a.next = 80;
                        return b("regeneratorRuntime").awrap(e2e.click(U));
                    case 80:
                        a.next = 82;
                        return b("regeneratorRuntime").awrap(e2e.click(Ca));
                    case 82:
                        a.next = 84;
                        return b("regeneratorRuntime").awrap(e2e.click(Da));
                    case 84:
                        a.next = 86;
                        return b("regeneratorRuntime").awrap(e2e.click(ua));
                    case 86:
                        a.next = 88;
                        return b("regeneratorRuntime").awrap(e2e.click(wa));
                    case 88:
                        a.next = 90;
                        return b("regeneratorRuntime").awrap(e2e.click(V));
                    case 90:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        },
        jb = function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        a.next = 2;
                        return b("regeneratorRuntime").awrap(expect(W).toBePresent());
                    case 2:
                        a.next = 4;
                        return b("regeneratorRuntime").awrap(e2e.click('em:text("Next")'));
                    case 4:
                        a.next = 6;
                        return b("regeneratorRuntime").awrap(expect(X).toBePresent());
                    case 6:
                        a.next = 8;
                        return b("regeneratorRuntime").awrap(e2e.click(X + ' div:text("Next")'));
                    case 8:
                        a.next = 10;
                        return b("regeneratorRuntime").awrap(expect(Y).toBePresent());
                    case 10:
                        a.next = 12;
                        return b("regeneratorRuntime").awrap(e2e.click(Y + ' div:text("Next")'));
                    case 12:
                        a.next = 14;
                        return b("regeneratorRuntime").awrap(expect(Z).toBePresent());
                    case 14:
                        a.next = 16;
                        return b("regeneratorRuntime").awrap(e2e.click(Z + ' div:text("Next")'));
                    case 16:
                        a.next = 18;
                        return b("regeneratorRuntime").awrap(expect($).toBePresent());
                    case 18:
                        a.next = 20;
                        return b("regeneratorRuntime").awrap(e2e.click($ + ' div:text("Done")'));
                    case 20:
                        a.next = 22;
                        return b("regeneratorRuntime").awrap(expect(W).not.toBePresent());
                    case 22:
                        a.next = 24;
                        return b("regeneratorRuntime").awrap(expect(X).not.toBePresent());
                    case 24:
                        a.next = 26;
                        return b("regeneratorRuntime").awrap(expect(Y).not.toBePresent());
                    case 26:
                        a.next = 28;
                        return b("regeneratorRuntime").awrap(expect(Z).not.toBePresent());
                    case 28:
                        a.next = 30;
                        return b("regeneratorRuntime").awrap(expect($).not.toBePresent());
                    case 30:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        };
    g.FBNUX_ID_PAGE_INBOX = a;
    g.FBNUX_ID_WORDPRESS = d;
    g.FBNUX_ID_FBE_FBS_MV = e;
    g.SETUP_FLOW_CONTAINER_TEST_ID = h;
    g.CREATE_CODE_BUTTON_TEST_ID = i;
    g.SETUP_MODAL_TEST_ID = f;
    g.SETUP_3P_MENU_MODAL_TEST_ID = aa;
    g.SETUP_3P_MENU_MANUAL_BUTTON_TEST_ID = ba;
    g.SETUP_CHOICE_MODAL_TEST_ID = ca;
    g.LOCALE_SELECTOR_TEST_ID = j;
    g.SETUP_METHOD_BUTTON_TEST_ID_PREFIX = da;
    g.SETUP_MODAL_NEXT_BUTTON_TEST_ID = k;
    g.SETUP_MODAL_ADD_DOMAIN_BUTTON_TEST_ID = l;
    g.SETUP_MODAL_NEW_DOMAIN_INPUT_TEST_ID = m;
    g.SETUP_MODAL_COPY_CODE_BUTTON_TEST_ID = n;
    g.SETUP_MODAL_EMAIL_INSTRUCTIONS_LINK_TEST_ID = o;
    g.SETUP_MODAL_EMAIL_INSTRUCTIONS_MODAL_TEST_ID = p;
    g.SETUP_MODAL_EMAIL_RECIPIENTS_INPUT_TEST_ID = q;
    g.SETUP_MODAL_SEND_EMAIL_NEXT_BUTTON_TEST_ID = r;
    g.NO_DOMAINS_MAIN_PANEL_ERROR_TEST_ID = ea;
    g.DOMAINS_LIST_TEXT_TEST_ID = fa;
    g.EDIT_DOMAINS_MODAL_TEST_ID = ga;
    g.EDIT_DOMAINS_BUTTON_TEST_ID = s;
    g.EDIT_DOMAINS_SAVE_BUTTON_TEST_ID = t;
    g.SETUP_GTM_LOCALE_TEST_ID = ha;
    g.AUTOMATION_SECTION_TEST_ID = u;
    g.AUTOMATION_SECTION_CONTAINER_TEST_ID = v;
    g.AUTOMATION_WELCOME_MESSAGE_TOGGLE_TEST_ID = w;
    g.AUTOMATION_WELCOME_MESSAGE_INPUT_TEST_ID = x;
    g.AUTOMATION_WELCOME_MESSAGE_EDIT_BUTTON_TEST_ID = y;
    g.AUTOMATION_WELCOME_MESSAGE_COLLAPSE_BUTTON_TEST_ID = z;
    g.AUTOMATION_FAQ_TOGGLE_TEST_ID = A;
    g.AUTOMATION_FAQ_ENTRY_QUESTION_INPUT_TEST_ID_PREFIX = B;
    g.AUTOMATION_FAQ_ENTRY_RESPONSE_INPUT_TEST_ID_PREFIX = C;
    g.AUTOMATION_FAQ_ENTRY_EDIT_BUTTON_TEST_ID_PREFIX = D;
    g.AUTOMATION_FAQ_ENTRY_COLLAPSE_BUTTON_TEST_ID_PREFIX = E;
    g.AUTOMATION_FAQ_ENTRY_DELETE_BUTTON_TEST_ID_PREFIX = F;
    g.AUTOMATION_FAQ_ADD_BUTTON_TEST_ID = G;
    g.CUSTOMIZATION_SECTION_TEST_ID = H;
    g.CUSTOMIZATION_SECTION_CONTAINER_TEST_ID = I;
    g.CUSTOMIZATION_GREETING_EDIT_BUTTON_TEST_ID = J;
    g.CUSTOMIZATION_GREETING_COLLAPSE_BUTTON_TEST_ID = K;
    g.CUSTOMIZATION_GREETING_INPUT_TEST_ID = L;
    g.CUSTOMIZATION_GUEST_MODE_TOGGLE_TEST_ID = ia;
    g.CUSTOMIZATION_THEME_COLOR_TOGGLE_TEST_ID = ja;
    g.CUSTOMIZATION_ENTRY_POINT_ICON_ONLY_TEST_ID = ka;
    g.CUSTOMIZATION_ENTRY_POINT_ICON_WITH_LABEL_TEST_ID = la;
    g.CUSTOMIZATION_ENTRY_POINT_LABEL_ONLY_TEST_ID = ma;
    g.CUSTOMIZATION_ENTRY_POINT_ROUND_ICON_TEST_ID = na;
    g.CUSTOMIZATION_ENTRY_POINT_ICON_SECTION_TEST_ID = M;
    g.CUSTOMIZATION_ENTRY_POINT_LABEL_SECTION_TEST_ID = N;
    g.CUSTOMIZATION_ENTRY_POINT_LABEL_SELECTOR_TEST_ID = oa;
    g.CUSTOMIZATION_ENTRY_POINT_LABEL_HELP_TEST_ID = pa;
    g.CUSTOMIZATION_THEME_COLOR_LIST_ITEM_TEST_ID = qa;
    g.CUSTOMIZATION_THEME_COLOR_INPUT_TEST_ID = O;
    g.CUSTOMIZATION_THEME_COLOR_WARNING_NOTICE_TEST_ID = ra;
    g.CUSTOMIZATION_ALIGNMENT_SELECTOR_TEST_ID = sa;
    g.CUSTOMIZATION_DESKTOP_BOTTOM_SPACING_INPUT_TEST_ID = P;
    g.CUSTOMIZATION_MOBILE_BOTTOM_SPACING_INPUT_TEST_ID = Q;
    g.CUSTOMIZATION_DESKTOP_SIDE_SPACING_INPUT_TEST_ID = R;
    g.CUSTOMIZATION_MOBILE_SIDE_SPACING_INPUT_TEST_ID = S;
    g.CUSTOMIZATION_AUTO_EXPAND_TOGGLE_TEST_ID = ta;
    g.CUSTOMIZATION_PROMINENCE_SELECTOR = ua;
    g.CUSTOMIZATION_PROMINENCE_ICON = va;
    g.CUSTOMIZATION_PROMINENCE_WELCOME_MESSAGE = wa;
    g.CUSTOMIZATION_PROMINENCE_WINDOW = xa;
    g.DESKTOP_WELCOME_MESSAGE_PREVIEW = ya;
    g.CUSTOMIZATION_MOBILE_OPTIN_TEST_ID = za;
    g.CUSTOMIZATION_CHAT_BUTTON_SIZE_DESKTOP_TAB = Aa;
    g.CUSTOMIZATION_CHAT_BUTTON_SIZE_MOBILE_TAB = Ba;
    g.CUSTOMIZATION_COMPACT_CHAT_BUTTON_SIZE_OPTION = T;
    g.CUSTOMIZATION_STANDARD_CHAT_BUTTON_SIZE_OPTION = U;
    g.CUSTOMIZATION_COMPACT_CHAT_WINDOW_SIZE_OPTION = Ca;
    g.CUSTOMIZATION_STANDARD_CHAT_WINDOW_SIZE_OPTION = Da;
    g.PUBLISH_BUTTON_TEST_ID = V;
    g.PUBLISH_TOAST_TEST_ID = Ea;
    g.PREVIEW_TAB_DESKTOP_BUTTON_TEST_ID = Fa;
    g.PREVIEW_TAB_MOBILE_BUTTON_TEST_ID = Ga;
    g.PREVIEW_DESKTOP_FRAME_TEST_ID = Ha;
    g.PREVIEW_MOBILE_FRAME_TEST_ID = Ia;
    g.PREVIEW_MESSENGER_ICON_BUTTON_TEST_ID = Ja;
    g.PREVIEW_DESKTOP_THREAD_PAGE_CONTAINER_TEST_ID = Ka;
    g.PREVIEW_THREAD_PAGE_CLOSE_BUTTON_TEST_ID = La;
    g.PREVIEW_MOBILE_THREAD_PAGE_CONTAINER_TEST_ID = Ma;
    g.PREVIEW_MOBILE_WELCOME_MESSAGE_PAGE_CONTAINER_TEST_ID = Na;
    g.PREVIEW_MOBILE_WELCOME_MESSAGE_TEST_ID = Oa;
    g.PREVIEW_DESKTOP_WELCOME_PAGE_MODAL_CONTAINER_TEST_ID = Pa;
    g.PREVIEW_DESKTOP_WELCOME_PAGE_MODAL_CLOSE_BUTTON_TEST_ID = Qa;
    g.PREVIEW_MOBILE_WELCOME_PAGE_MODAL_CONTAINER_TEST_ID = Ra;
    g.PREVIEW_MOBILE_WELCOME_PAGE_MODAL_CLOSE_BUTTON_TEST_ID = Sa;
    g.NUX_WELCOME_MODAL_CONTAINER_TEST_ID = W;
    g.NUX_STEP_SETUP_CONTAINER_TEST_ID = X;
    g.NUX_STEP_AUTOMATION_CONTAINER_TEST_ID = Y;
    g.NUX_STEP_CUSTOMIZATION_CONTAINER_TEST_ID = Z;
    g.NUX_STEP_PUBLISH_CONTAINER_TEST_ID = $;
    g.WORDPRESS_SETUP_PAGE_SELECTOR_TEST_ID = Ta;
    g.WORDPRESS_SETUP_CONTINUE_BUTTON_TEST_ID = Ua;
    g.getWordpressSetupPageSelectorOptionTestID = Va;
    g.LONG_TEXT = Wa;
    g.navigateToTestSite = Xa;
    g.LONG_TEXT_500_CHAR = Ya;
    g.LONG_TEXT_45_CHAR = Za;
    g.navigateToChatPluginSetupBusinessInbox = $a;
    g.navigateToChatPluginSetupPageInbox = ab;
    g.navigateToChatPluginSetupPageSettings = bb;
    g.navigateToChatPluginSetupWordpress = cb;
    g.verifyAutomationSectionToggleIsDisabled = db;
    g.verifyCustomizationSectionToggleIsDisabled = eb;
    g.verifySectionsCanBeToggled = fb;
    g.performDomainSetupFlow = gb;
    g.performAutomationSetupFlow = hb;
    g.performCustomizationSetupFlow = ib;
    g.performNUXFlow = jb
}), 98);
__d("MPNBlockedPageComposer.react", ["cx", "fbt", "MessagingPluginContext", "MessagingPluginThreadActions", "ShimButton.react", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = d("react").useContext;

    function a() {
        var a = k(c("MessagingPluginContext"));
        return j.jsx("div", {
            className: "_94wl",
            children: j.jsxs("div", {
                className: "_94wm",
                children: [j.jsx("div", {
                    children: i._( /*FBT_CALL*/ "You've turned off messages for {pageName}" /*FBT_CALL*/ , [i._param("pageName", a.state.pageName)])
                }), i._( /*FBT_CALL*/ "You can't message them, and you won't receive any of their messages." /*FBT_CALL*/ ), j.jsx(c("ShimButton.react"), {
                    className: "_94wo",
                    onClick: function() {
                        d("MessagingPluginThreadActions").blockOrUnblockPage(a)
                    },
                    children: j.jsx("div", {
                        className: "_94wp",
                        children: i._( /*FBT_CALL*/ "Turn on messages" /*FBT_CALL*/ )
                    })
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("MPNDesktopBotMenuDialog.react", ["cx", "ChatPluginTestId", "LiveChatPluginLoggerUtil", "MPNDropdownMenu", "MPNDropdownMenuAlignment", "MPNDropdownMenuItem", "MPNIdentity", "MercuryIDs", "MessagingPluginContext", "URI", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            b = a.call(this, b, c) || this;
            b.state = {
                navigationPath: []
            };
            b.$1 = d("LiveChatPluginLoggerUtil").getAttributionTags();
            b.$2 = d("MercuryIDs").getThreadIDFromUserID(b.context.state.pageID);
            b.$3 = d("MPNIdentity").MPNIdentity.currentUserState() === d("MPNIdentity").MPNIdentityState.FB;
            return b
        }
        var e = b.prototype;
        e.render = function() {
            var a = this,
                b = [],
                d = this.props.menuItems;
            for (var e = 0; e < this.state.navigationPath.length; e++) {
                var f = this.state.navigationPath[e];
                d != null && (d = d[f].nested_ctas)
            }
            d && d.map(function(d, c) {
                switch (d.action_type) {
                    case 4:
                        a.$4(d, b);
                        break;
                    case 2:
                        a.$5(d, b);
                        break;
                    case 11:
                        a.$6(d, c, b);
                        break;
                    default:
                        b.push({
                            primaryText: d.title || ""
                        });
                        break
                }
            });
            return i.jsx(c("MPNDropdownMenu"), {
                alignment: c("MPNDropdownMenuAlignment").TOP,
                className: "_a2-d",
                children: b.map(function(b, a) {
                    return i.createElement(c("MPNDropdownMenuItem"), babelHelpers["extends"]({}, b, {
                        key: a,
                        "data-testid": void 0
                    }))
                })
            })
        };
        e.$5 = function(a, b) {
            var e = this.context.state.pageID,
                f = function(b) {
                    c("URI").goURIOnNewWindow(a.action_link || "");
                    b = d("MPNIdentity").MPNIdentity.currentUserID();
                    d("LiveChatPluginLoggerUtil").logActionUsingFalco(b, e, d("MPNIdentity").MPNIdentity.currentUserState() === d("MPNIdentity").MPNIdentityState.FB ? "logged_in_chat_tab" : "guest_chat_tab", "customer_chat_bot_menu_url_redirect_clicked")
                };
            b.push({
                onClick: f,
                primaryText: a.title || ""
            })
        };
        e.$6 = function(a, b, c) {
            var d = this,
                e = function(a) {
                    d.setState(function(a) {
                        return {
                            navigationPath: a.navigationPath.concat(b)
                        }
                    })
                };
            c.push({
                onClick: e,
                primaryText: a.title || ""
            })
        };
        e.$4 = function(a, b) {
            var c = this,
                e = this.context.state,
                f = e.pageID,
                g = e.refererUri;
            e = function(b) {
                b = d("MPNIdentity").MPNIdentity.currentUserState();
                var e = d("MPNIdentity").MPNIdentity.currentUserID();
                if (b !== d("MPNIdentity").MPNIdentityState.GUEST && b !== d("MPNIdentity").MPNIdentityState.FB) return;
                else {
                    b = c.context.state.messageStore;
                    b = b.sendQueue;
                    if (!b) return;
                    b.enqueueAndSend(a.title || "", c.$3, g, b.makePlatformTokenForPostbackCTA(a.id || ""))
                }
                d("LiveChatPluginLoggerUtil").logActionUsingFalco(e, f, d("MPNIdentity").MPNIdentity.currentUserState() === d("MPNIdentity").MPNIdentityState.FB ? "logged_in_chat_tab" : "guest_chat_tab", "customer_chat_bot_menu_postback_clicked")
            };
            b.push({
                onClick: e,
                primaryText: a.title || ""
            })
        };
        return b
    }(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MPNDesktopBotMenuButton.react", ["cx", "fbt", "AsyncRequest", "BasePopoverTrigger.react", "CometPressable.react", "LiveChatPluginConstants", "LiveChatPluginGuestPersistentMenuQuery", "LiveChatPluginLoggerUtil", "LiveChatPluginSendButtonSVG.react", "MPNBotMenuButtonSVG.react", "MPNDesktopBotMenuDialog.react", "MPNIdentity", "MPNLocalState", "MPNStorage", "MessagingPluginContext", "XMessengerBotsMenuController", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
                menuItems: null
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.UNSAFE_componentWillMount = function() {
            this.state.menuItems == null && this.$2()
        };
        e.componentDidUpdate = function() {
            this.state.menuItems == null && this.context.state.accessToken && this.$2()
        };
        e.componentWillUnmount = function() {
            this.$1 && (this.$1.abort(), this.$1 = null), this.setState(this.$3(!1))
        };
        e.render = function() {
            var a = this,
                b = this.context.state,
                e = b.hasActiveAutomation,
                f = b.hasPersistentMenu,
                g = b.threadCSSColor;
            return e || !f || !this.state.menuItems || this.state.menuItems.length === 0 ? j.jsx("div", {
                className: " _95jk _95ms",
                children: j.jsx(c("LiveChatPluginSendButtonSVG.react"), {
                    threadColor: d("LiveChatPluginConstants").GUEST_SEND_BUTTON_COLOR_EMPTY_INPUT
                })
            }) : j.jsx(c("BasePopoverTrigger.react"), {
                position: "above",
                disableAutoFlip: !0,
                popover: c("MPNDesktopBotMenuDialog.react"),
                popoverProps: {
                    menuItems: this.state.menuItems
                },
                children: function(b, d) {
                    return j.jsx("div", {
                        ref: b,
                        children: j.jsx("div", {
                            className: "_94vq _9r2w _9jru",
                            children: j.jsx(c("CometPressable.react"), {
                                overlayRadius: 50,
                                "aria-label": i._( /*FBT_CALL*/ "Persistent menu" /*FBT_CALL*/ ),
                                onPress: function() {
                                    a.$4(), d()
                                },
                                children: j.jsx(c("MPNBotMenuButtonSVG.react"), {
                                    threadColor: g
                                })
                            })
                        })
                    })
                }
            })
        };
        e.$2 = function() {
            var a = this,
                b = this.context,
                e = b.state,
                f = b.dispatchAction;
            b = e.pageID;
            e = c("MPNStorage").getFBStorageState();
            if (!e || e.chatState === d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED) return;
            e = d("MPNIdentity").MPNIdentity.currentUserState();
            switch (e) {
                case d("MPNIdentity").MPNIdentityState.GUEST:
                    e = (e = d("MPNIdentity").MPNIdentity.currentUser()) == null ? void 0 : e.accessToken;
                    if (e == null) return;
                    d("LiveChatPluginGuestPersistentMenuQuery").fetch(b, e, function(b) {
                        b != null && b.length > 0 ? (a.setState({
                            menuItems: b
                        }), f({
                            type: "TOGGLE_HAS_PERSISTENT_MENU",
                            hasPersistentMenu: !0
                        })) : (a.setState({
                            menuItems: []
                        }), f({
                            type: "TOGGLE_HAS_PERSISTENT_MENU",
                            hasPersistentMenu: !1
                        }))
                    });
                    break;
                case d("MPNIdentity").MPNIdentityState.FB:
                    e = c("XMessengerBotsMenuController").getURIBuilder().setString("page_id", b).setBool("should_flatten", !0).getURI();
                    this.$1 = new(c("AsyncRequest"))().setURI(e).setHandler(function(b) {
                        a.setState({
                            menuItems: b.payload.menu
                        })
                    }).setErrorHandler(function(b) {
                        a.setState({
                            menuItems: []
                        })
                    });
                    this.$1.send();
                    break;
                default:
                    return
            }
        };
        e.$4 = function() {
            this.setState(this.$3(!0)), this.props.onClick()
        };
        e.$3 = function(a) {
            var b = this.context.state.pageID,
                c = d("MPNIdentity").MPNIdentity.currentUserID();
            d("LiveChatPluginLoggerUtil").logActionUsingFalco(c, b, d("MPNIdentity").MPNIdentity.currentUserState() === d("MPNIdentity").MPNIdentityState.FB ? "logged_in_chat_tab" : "guest_chat_tab", a ? "customer_chat_bot_menu_opened" : "customer_chat_bot_menu_closed")
        };
        return b
    }(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MessagingPluginDesktopProfilePicture.react", ["cx", "Image.react", "MPNConstants", "MessagingPluginContext", "PrivacyTransparentOverlay.react", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var e = b.prototype;
        e.render = function() {
            var a = this.context.state,
                b = a.pageProfilePictureUri;
            a = a.isBusinessActive;
            var e = this.props,
                f = e.className;
            e = e.greenDotSize;
            e = e === d("MPNConstants").MPNGreenDotSize.LARGE ? "_a2gl _a2gm" : "_a2gl _a2gn";
            return i.jsxs(c("PrivacyTransparentOverlay.react"), {
                children: [i.jsx(c("Image.react"), {
                    className: (f = f) != null ? f : "_a3jw",
                    src: b
                }), a ? i.jsx("div", {
                    className: e
                }) : null]
            })
        };
        return b
    }(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MessagingPluginDesktopThreadMenu.react", ["cx", "fbt", "CometSeparatorMenuItem.react", "LiveChatPluginLoggerUtil", "MPNDropdownMenu", "MPNDropdownMenuItem", "MPNIdentity", "MessagingPluginContext", "MessagingPluginThreadActions", "ODS", "URI", "gkx", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = d("react").useContext;

    function a(a) {
        var b, e = k(c("MessagingPluginContext")),
            f = d("MPNIdentity").MPNIdentity.currentUserID(),
            g = e.state,
            h = g.pageID,
            m = g.isPageBlocked,
            n = g.locale,
            o = g.showUpgradeUpsellPrompt,
            p = g.isPageInEU;
        g = g.isLightswitchEnabledForGuest;
        var q = d("MPNIdentity").MPNIdentity.currentUserState() === d("MPNIdentity").MPNIdentityState.GUEST,
            r = !0;
        b = (b = e.state.threadExists) != null ? b : !1;
        !q ? r = c("gkx")("1830721") : r = g !== !0;
        r = r && !p && b;
        r || (q && g === !0 && d("ODS").bumpEntityKey(4205, "chat_plugin", "chat_plugin.epd.guest_frx_entry_point_blocked_eu_guest"), !q && !c("gkx")("1830721") && d("ODS").bumpEntityKey(4205, "chat_plugin", "chat_plugin.epd.guest_frx_entry_point_blocked_eu_fb_user"), p && d("ODS").bumpEntityKey(4205, "chat_plugin", "chat_plugin.epd.guest_frx_entry_point_blocked_eu_page"));
        return j.jsxs(c("MPNDropdownMenu"), {
            className: "_a2zx",
            children: [q && o ? j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc: "/images/web_messenger/app-messenger_32-4x.png",
                onClick: function() {
                    return a.onUpgrade()
                },
                primaryText: i._( /*FBT_CALL*/ "Continue in Messenger" /*FBT_CALL*/ )
            }) : null, j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc: "/images/web_messenger/cross-circle_32-4x.png",
                onClick: function() {
                    l(f, h, q, "end_chat_menu_item"), e.dispatchAction({
                        type: "TOGGLE_END_CHAT",
                        showEndChat: !0
                    })
                },
                primaryText: i._( /*FBT_CALL*/ "End chat" /*FBT_CALL*/ )
            }), !q && m != null ? j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc: "/images/web_messenger/message-cross_32-4x.png",
                onClick: function() {
                    d("MessagingPluginThreadActions").blockOrUnblockPage(e)
                },
                primaryText: m ? i._( /*FBT_CALL*/ "Turn on messages" /*FBT_CALL*/ ) : i._( /*FBT_CALL*/ "Turn off messages" /*FBT_CALL*/ )
            }) : null, q ? null : j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc: a.isMuted ? "/images/web_messenger/bell-cross_32-4x.png" : "/images/web_messenger/bell_32-4x.png",
                onClick: a.onClickMuteOrUnmute,
                primaryText: a.isMuted ? i._( /*FBT_CALL*/ "Unmute conversation" /*FBT_CALL*/ ) : i._( /*FBT_CALL*/ "Mute conversation" /*FBT_CALL*/ )
            }), r ? j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc: "/images/web_messenger/caution-triangle_32-4x.png",
                onClick: function() {
                    l(f, h, q, "frx_entry_point"), d("MessagingPluginThreadActions").openFRXPrompt(h, n)
                },
                primaryText: i._( /*FBT_CALL*/ "Something's wrong" /*FBT_CALL*/ )
            }) : null, j.jsx(c("CometSeparatorMenuItem.react"), {}), j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                onClick: function() {
                    l(f, h, q, "visit_facebook_page_menu_item"), c("URI").goURIOnNewWindow("https://www.facebook.com/" + h)
                },
                primaryText: i._( /*FBT_CALL*/ "Visit Facebook Page" /*FBT_CALL*/ )
            }), j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                onClick: function() {
                    l(f, h, q, "add_messenger_to_your_website_menu_item"), c("URI").goURIOnNewWindow("https://www.facebook.com/business/m/add-messenger-to-your-website")
                },
                primaryText: i._( /*FBT_CALL*/ "Add Messenger to your website" /*FBT_CALL*/ )
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function l(a, b, c, e) {
        d("LiveChatPluginLoggerUtil").logActionFromNewUI("in_thread_action", a, b, c ? "guest_chat_tab" : "logged_in_chat_tab", {
            button_name: e
        })
    }
    g["default"] = a
}), 98);
__d("MPNDesktopDialogHeader.react", ["cx", "fbt", "Arbiter", "BasePopoverTrigger.react", "FlexLayout.react", "LineClamp.react", "LiveChatPluginLoggerUtil", "MPNConstants", "MPNHeaderActionButton.react", "MPNIdentity", "MPNMinusButtonSVG.react", "MPNMoreInfoButtonSVG.react", "MPNVerifiedBadge.react", "MessagingPluginContext", "MessagingPluginDesktopProfilePicture.react", "MessagingPluginDesktopThreadMenu.react", "MessagingPluginThreadActions", "QE2Logger", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (b = c = a.call.apply(a, [this].concat(f)) || this, c.$1 = null, c.state = {
                isMuted: c.context.state.isMuted
            }, c.$3 = function() {
                var a = c.context.state,
                    b = a.guestID;
                a = a.pageID;
                c.$1 = d("MessagingPluginThreadActions").launchUpgradeFlowDesktop(c.context, c.props.history, d("MPNConstants").MPNUpgradePrompt.CONTINUE_IN_MESSENGER);
                d("LiveChatPluginLoggerUtil").logActionUsingFalco(b, a, "guest_chat_tab", d("MPNConstants").MPNUpgradePrompt.CONTINUE_IN_MESSENGER)
            }, c.$2 = function() {
                var a = c.state.isMuted;
                d("MessagingPluginThreadActions").muteOrUnmutePage(c.context.state.pageID, a);
                c.setState({
                    isMuted: !a
                })
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.componentWillUnmount = function() {
            this.$1 && c("Arbiter").unsubscribe(this.$1)
        };
        e.componentDidMount = function() {
            var a = this.context.state,
                b = a.pageID;
            a = a.pageResponsiveness;
            a != null && d("QE2Logger").logExposureForPage("chat_plugin_thread_header_responsiveness_text", b.toString())
        };
        e.render = function() {
            var a = this,
                b = this.context.state,
                e = b.pageName,
                f = b.pageVerifiedStatus,
                g = b.showGuestUpgradePopover,
                h = b.pageID;
            b = this.props.menuEnabled !== !1;
            var k = this.context.state.optimisticStorageState.showUpgradePrompt != null && this.context.state.optimisticStorageState.showUpgradePrompt !== d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN,
                l = d("MPNIdentity").MPNIdentity.currentUserID(),
                m = d("MPNIdentity").MPNIdentity.currentUserState() === d("MPNIdentity").MPNIdentityState.GUEST;
            return j.jsxs("div", {
                className: "_9dxj" + (!k && !g ? " _9gop" : ""),
                children: [j.jsx("div", {
                    className: "_a2m0",
                    children: j.jsx(c("MessagingPluginDesktopProfilePicture.react"), {})
                }), j.jsxs("div", {
                    className: "_9dxi",
                    children: [j.jsxs(c("FlexLayout.react"), {
                        align: "center",
                        children: [j.jsx(c("LineClamp.react"), {
                            className: "_a2m1",
                            lines: 1,
                            children: j.jsx("strong", {
                                children: e
                            })
                        }), f && f !== "not_verified" ? j.jsx("span", {
                            className: "_a2m4",
                            children: j.jsx(c("MPNVerifiedBadge.react"), {
                                verificationStatus: f,
                                size: 14
                            })
                        }) : null]
                    }), j.jsx(c("LineClamp.react"), {
                        className: "_a2m2",
                        lines: 1,
                        children: i._( /*FBT_CALL*/ "Powered by Messenger" /*FBT_CALL*/ )
                    })]
                }), j.jsx("div", {
                    className: "_9dxh"
                }), j.jsxs("div", {
                    className: "_9dzn",
                    children: [b && j.jsx("div", {
                        "data-testid": void 0,
                        children: j.jsx(c("BasePopoverTrigger.react"), {
                            popover: c("MessagingPluginDesktopThreadMenu.react"),
                            popoverProps: {
                                history: this.props.history,
                                isMuted: this.state.isMuted,
                                onClickMuteOrUnmute: this.$2,
                                onUpgrade: this.$3
                            },
                            children: function(a, b) {
                                return j.jsx("div", {
                                    className: "_9r2w",
                                    ref: a,
                                    children: j.jsx(c("MPNHeaderActionButton.react"), {
                                        label: i._( /*FBT_CALL*/ "More" /*FBT_CALL*/ ),
                                        onPress: function() {
                                            b(), d("LiveChatPluginLoggerUtil").logActionFromNewUI("in_thread_action", l, h, m ? "guest_chat_tab" : "logged_in_chat_tab", {
                                                button_name: "more_menu"
                                            })
                                        },
                                        children: j.jsx(c("MPNMoreInfoButtonSVG.react"), {})
                                    })
                                })
                            }
                        })
                    }), j.jsx(c("MPNHeaderActionButton.react"), {
                        label: i._( /*FBT_CALL*/ "close" /*FBT_CALL*/ ),
                        onPress: function() {
                            var b;
                            (b = a.props.ActionDelegate) == null ? void 0 : b.minimize();
                            a.$4()
                        },
                        children: j.jsx(c("MPNMinusButtonSVG.react"), {})
                    })]
                })]
            })
        };
        e.$4 = function() {
            var a = this.context.state.pageID,
                b = d("MPNIdentity").MPNIdentity.currentUserID();
            if (b == null) return;
            var c = d("MPNIdentity").MPNIdentity.currentUserState();
            c === d("MPNIdentity").MPNIdentityState.GUEST ? d("LiveChatPluginLoggerUtil").logActionFromNewUI("chat_plugin_minimize", b, a, "guest_chat_tab") : d("LiveChatPluginLoggerUtil").logActionFromNewUI("chat_plugin_minimize", b, a, "logged_in_chat_tab")
        };
        return b
    }(j.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MPNDesktopGuestAttachmentButton.react", ["cx", "fbt", "MPNConstants", "MPNPaperclipIconSVG.react", "MPNStorage", "MessagingPluginContext", "ShimButton.react", "Tooltip.react", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var e = b.prototype;
        e.render = function() {
            var a = this.context.dispatchAction;
            return j.jsx(c("Tooltip.react"), {
                tooltip: i._( /*FBT_CALL*/ "Attach Files" /*FBT_CALL*/ ),
                children: j.jsx(c("ShimButton.react"), {
                    "data-testid": void 0,
                    className: "_95jj _9jru",
                    onClick: function() {
                        c("MPNStorage").setShowUpgradePrompt(d("MPNConstants").MPNUpgradePrompt.ATTACHMENT_UPSELL), a({
                            type: "UPDATE_UPGRADE_UPSELL_PROMPT",
                            upgradeUpsellPrompt: d("MPNConstants").MPNUpgradePrompt.ATTACHMENT_UPSELL
                        })
                    },
                    children: j.jsx(c("MPNPaperclipIconSVG.react"), {
                        color: this.context.state.threadCSSColor
                    })
                })
            })
        };
        return b
    }(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MPNDesktopGuestUpgradeUpsellPrompt.react", ["Arbiter", "LiveChatPluginLoggerUtil", "MPNSharedGuestUpgradePromptV2.react", "MessagingPluginContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$1 = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.componentWillUnmount = function() {
            this.$1 && c("Arbiter").unsubscribe(this.$1)
        };
        e.componentDidMount = function() {
            var a = this.context.state,
                b = a.pageID;
            a = a.guestID;
            d("LiveChatPluginLoggerUtil").logImpressionUsingFalco_UnsafeFor3PD(b, "upgrade_prompt", null, null, null, null, a, null, this.props.prompt)
        };
        e.render = function() {
            return h.jsx(c("MPNSharedGuestUpgradePromptV2.react"), {
                color: this.props.color,
                prompt: this.props.prompt,
                history: this.props.history
            })
        };
        return b
    }(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("EllipsisText.react", ["cx", "joinClasses", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        return i.jsx("span", {
            id: a.id,
            className: c("joinClasses")(a.className, "_6i6a"),
            children: a.children
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("XChatPluginProfilePlusVoiceSwitchPopupController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/plugins/chat/voice_switch/", {})
}), null);
__d("MPNDesktopWelcomePageBottomButtons.react", ["cx", "fbt", "EllipsisText.react", "LineClamp.react", "LiveChatPluginConstants", "LiveChatPluginFbts", "LiveChatPluginLoggerUtil", "MPNConstants", "MPNIdentity", "MPNLocalState", "MPNMessengerIconSVG.react", "MPNNavigation", "MPNStorage", "MPNXDMessageManager", "MessagingPluginContext", "MessagingPluginThreadActions", "PopupWindow", "ShimButton.react", "XChatPluginIncognitoLoginPopupController", "XChatPluginProfilePlusVoiceSwitchPopupController", "cr:878", "gkx", "performanceAbsoluteNow", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(e, a);

        function e() {
            var e, f;
            for (var g = arguments.length, h = new Array(g), i = 0; i < g; i++) h[i] = arguments[i];
            return (e = f = a.call.apply(a, [this].concat(h)) || this, f.$3 = function() {
                var a = f.context,
                    b = a.state,
                    e = a.dispatchAction;
                a = b.pageID;
                var g = b.hasGuestMode,
                    h = b.pagePassesSentryTest,
                    i = b.hasMessagingPermission,
                    j = b.isSanitizedEpd3pdRequest;
                b = d("MPNIdentity").MPNIdentity.currentUserState();
                var k = d("MPNIdentity").MPNIdentity.currentUserID();
                e({
                    type: "UPDATE_CONTINUE_CLICK_TIME",
                    continueClickTime: c("performanceAbsoluteNow")()
                });
                if (b == d("MPNIdentity").MPNIdentityState.FB && k != null) {
                    if (!h && !i) {
                        (b = f.props.ActionDelegate) == null ? void 0 : b.openThreadWithInterstitial(function() {
                            var a;
                            (a = f.props.ActionDelegate) == null ? void 0 : a.openThreadWithCurrentFBUser();
                            d("MPNNavigation").navigateToRoute(f.props.history, d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW);
                            e({
                                type: "UPDATE_BLOCK_STATUS",
                                isPageBlocked: !1
                            })
                        });
                        d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, a, g ? "welcome_page_with_guest_option" : "welcome_page", {
                            button_name: "continue_as"
                        });
                        return
                    }
                    d("MPNNavigation").navigateToRoute(f.props.history, d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW);
                    (k = f.props.ActionDelegate) == null ? void 0 : k.openThreadWithCurrentFBUser();
                    d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, a, g ? "welcome_page_with_guest_option" : "welcome_page", {
                        button_name: "continue_as"
                    });
                    return
                }
                d("MPNIdentity").MPNIdentity.performUIAction(function() {
                    if (d("MPNIdentity").MPNIdentity.cookieUserUncached() != "0") {
                        if (j) {
                            c("MPNXDMessageManager").reloadPlugin(!0);
                            return
                        }
                        return
                    }
                    d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(function(a, b) {
                        a = c("MPNStorage").getFBStorageState();
                        if (a != null) {
                            c("MPNStorage").setFBStorageState(babelHelpers["extends"]({}, a, {
                                chatState: d("MPNLocalState").MPNChatState.LOGGED_IN_CHAT_STARTED,
                                rdr: d("MPNConstants").MPNRedirect.FB_LOG_IN
                            }));
                            b = {
                                path: d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW,
                                chatState: d("MPNLocalState").MPNChatState.LOGGED_IN_CHAT_STARTED,
                                visibility: d("MPNConstants").MPNVisibility.NOT_HIDDEN
                            };
                            c("MPNStorage").setThirdPartyStorageState(b)
                        }
                    }, d("LiveChatPluginConstants").LOGIN_CHECK_INTERVAL);
                    if (d("MPNIdentity").MPNIdentity.isProfilePlusUserUncached()) {
                        d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(function(a, b) {
                            d("MPNIdentity").MPNIdentity.currentUserState() != d("MPNIdentity").MPNIdentityState.GUEST && (c("MPNStorage").clearFBStorageState(), c("MPNStorage").clearThirdPartyStorageState()), c("MPNXDMessageManager").reloadPlugin()
                        });
                        var a = c("XChatPluginProfilePlusVoiceSwitchPopupController").getURIBuilder().getURI();
                        d("PopupWindow").open(a.toString(), 420, 450)
                    } else d("MessagingPluginThreadActions").presentPluginOptIn(f.context)
                }, function() {
                    if (d("MPNIdentity").MPNIdentity.cookieUserUncached() != "0") {
                        c("MPNXDMessageManager").reloadPlugin(!0);
                        return
                    }
                    d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(function(a, b) {
                        a = c("MPNStorage").getFBStorageState();
                        a != null && c("MPNStorage").setFBStorageState(babelHelpers["extends"]({}, a, {
                            chatState: d("MPNLocalState").MPNChatState.LOGGED_IN_CHAT_STARTED,
                            rdr: d("MPNConstants").MPNRedirect.FB_LOG_IN
                        }))
                    }, d("LiveChatPluginConstants").LOGIN_CHECK_INTERVAL);
                    if (d("MPNIdentity").MPNIdentity.isProfilePlusUserUncached()) {
                        d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(function(a, b) {
                            d("MPNIdentity").MPNIdentity.currentUserState() != d("MPNIdentity").MPNIdentityState.GUEST && (c("MPNStorage").clearFBStorageState(), c("MPNStorage").clearThirdPartyStorageState()), c("MPNXDMessageManager").reloadPlugin()
                        });
                        var a = c("XChatPluginProfilePlusVoiceSwitchPopupController").getURIBuilder().getURI();
                        d("PopupWindow").open(a.toString(), 420, 450)
                    } else d("MessagingPluginThreadActions").presentPluginOptIn(f.context)
                }, function() {
                    var a = c("XChatPluginIncognitoLoginPopupController").getURIBuilder().getURI();
                    d("PopupWindow").open(a.toString(), 420, 450)
                });
                d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, a, g ? "welcome_page_with_guest_option" : "welcome_page", {
                    button_name: "log_in_messenger"
                })
            }, f.$1 = function() {
                var a = f.context,
                    e = a.state;
                a = a.dispatchAction;
                e = e.pageID;
                a({
                    type: "UPDATE_CONTINUE_CLICK_TIME",
                    continueClickTime: c("performanceAbsoluteNow")()
                });
                b("cr:878") == null ? void 0 : b("cr:878").logChatPluginThreadLoadModuleStart();
                d("MPNIdentity").MPNIdentity.performUIAction(f.$5, function() {
                    var a = c("MPNStorage").getFBStorageState();
                    a == null ? a = {
                        requestID: c("MPNStorage").requestID,
                        currentPath: d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW,
                        userID: "0",
                        chatState: d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED,
                        visibility: d("MPNConstants").MPNVisibility.NOT_HIDDEN,
                        showUpgradePrompt: d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN,
                        accessToken: null,
                        expirationTimestamp: null,
                        rdr: d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION
                    } : a = babelHelpers["extends"]({}, a, {
                        chatState: d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED,
                        rdr: d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION
                    });
                    c("MPNStorage").setFBStorageState(a);
                    c("MPNXDMessageManager").reloadPlugin()
                }, function() {
                    var a = f.context.dispatchAction;
                    a({
                        type: "UPDATE_COOKIE_ACCESS_DENIED",
                        cookieAccessDenied: !0
                    });
                    f.$5()
                });
                d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, e, "welcome_page_with_guest_option", {
                    button_name: "continue_as_guest"
                })
            }, f.$5 = function() {
                var a = f.context.state.isSanitizedEpd3pdRequest;
                if (a) {
                    a = c("MPNStorage").getFBStorageState();
                    a != null && c("MPNStorage").setFBStorageState(babelHelpers["extends"]({}, a, {
                        rdr: d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION
                    }));
                    c("MPNXDMessageManager").reloadPlugin(!0)
                } else d("MPNNavigation").navigateToRoute(f.props.history, d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW), f.props.ActionDelegate && f.props.ActionDelegate.onContinueAsGuest(function() {})
            }, f.$2 = function() {
                var a = f.context,
                    b = a.state;
                a = a.dispatchAction;
                var e = b.pageID,
                    g = b.isSanitizedEpd3pdRequest;
                a({
                    type: "UPDATE_CONTINUE_CLICK_TIME",
                    continueClickTime: c("performanceAbsoluteNow")()
                });
                d("MPNIdentity").MPNIdentity.performUIAction(function() {
                    if (g) {
                        c("MPNXDMessageManager").reloadPlugin(!0);
                        return
                    }
                    d("MPNNavigation").navigateToRoute(f.props.history, d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW)
                }, function() {
                    d("MPNIdentity").MPNIdentity.clearUserChangesSubscription(), c("MPNStorage").setPath(d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW), c("MPNXDMessageManager").reloadPlugin()
                }, function() {
                    c("MPNStorage").clearThirdPartyStorageState(), c("MPNXDMessageManager").reloadPlugin()
                });
                d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, e, "itp_page", {
                    button_name: "continue"
                })
            }, e) || babelHelpers.assertThisInitialized(f)
        }
        var f = e.prototype;
        f.render = function() {
            var a, b = this.context.state,
                e = b.hasGuestMode,
                f = b.shouldShowEntryPointCustomization,
                g = b.threadCSSColor;
            b = b.shouldShowNewWelcomeView;
            a = (a = this.props.shouldShowEntryPointCustomizationFromSetupFlow) != null ? a : f;
            f = d("MPNIdentity").MPNIdentity.currentUserState() == d("MPNIdentity").MPNIdentityState.FB;
            f = c("gkx")("1189683");
            f = !e && !f;
            e = e ? j.jsx(c("ShimButton.react"), {
                "data-testid": void 0,
                onClick: this.$1,
                className: "_a2zk",
                children: j.jsx(c("LineClamp.react"), {
                    lines: 1,
                    children: i._( /*FBT_CALL*/ "Continue as guest" /*FBT_CALL*/ )
                })
            }) : null;
            return this.props.useITPContinueButton ? j.jsx("div", {
                className: "_a2zl",
                children: j.jsx(c("ShimButton.react"), {
                    onClick: this.$2,
                    className: "_a2zm",
                    style: {
                        backgroundColor: g
                    },
                    children: j.jsx(c("LineClamp.react"), {
                        className: "continueText",
                        lines: 1,
                        children: i._( /*FBT_CALL*/ "Continue" /*FBT_CALL*/ )
                    })
                })
            }) : j.jsxs("div", {
                className: (f ? "" : "_a2zl") + (f ? " _a2zn" : ""),
                children: [j.jsxs(c("ShimButton.react"), {
                    "data-testid": void 0,
                    onClick: this.$3,
                    className: "_a2zm",
                    style: {
                        backgroundColor: g
                    },
                    children: [a && !b ? null : j.jsx("div", {
                        className: "loggedInIconContainer",
                        children: j.jsx(c("MPNMessengerIconSVG.react"), {})
                    }), j.jsx(c("EllipsisText.react"), {
                        className: "continueText _4mr9",
                        children: this.$4()
                    })]
                }), e]
            })
        };
        f.$4 = function() {
            var a, b = d("MPNIdentity").MPNIdentity.currentUserState() == d("MPNIdentity").MPNIdentityState.FB;
            a = (a = d("MPNIdentity").MPNIdentity.currentUser()) == null ? void 0 : a.shortName;
            var c = this.context.state.shouldShowNewWelcomeView;
            if (!b) return c ? d("LiveChatPluginFbts").LOGIN_PAGE_USE_MESSENGER_BUTTON_TEXT : i._( /*FBT_CALL*/ "Log into Messenger" /*FBT_CALL*/ );
            return a !== null ? i._( /*FBT_CALL*/ "Continue as {first name}" /*FBT_CALL*/ , [i._param("first name", a)]) : i._( /*FBT_CALL*/ "Continue" /*FBT_CALL*/ )
        };
        return e
    }(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MessagingPluginDesktopInformationDropDownMenu.react", ["cx", "fbt", "MPNDropdownMenu", "MPNDropdownMenuItem", "MessagingPluginContext", "URI", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = d("react").useContext;

    function a(a) {
        a = k(c("MessagingPluginContext"));
        var b = a.state.pageID;
        return j.jsxs(c("MPNDropdownMenu"), {
            "data-testid": void 0,
            className: "_9r8t",
            children: [j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                onClick: function() {
                    c("URI").goURIOnNewWindow("https://www.facebook.com/" + b)
                },
                primaryText: i._( /*FBT_CALL*/ "Visit Facebook Page" /*FBT_CALL*/ )
            }), j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                onClick: function() {
                    c("URI").goURIOnNewWindow("https://www.facebook.com/business/m/add-messenger-to-your-website")
                },
                primaryText: i._( /*FBT_CALL*/ "Add Messenger to your website" /*FBT_CALL*/ )
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("MPNDesktopWelcomePageModalView.react", ["cx", "fbt", "BasePopoverTrigger.react", "ChatPluginMessengerAttribution.react", "ChatPluginSetupFlowE2ETestUtils", "FlexLayout.react", "LineClamp.react", "LiveChatPluginConstants", "LiveChatPluginFbts", "LiveChatPluginLoggerUtil", "MPNConstants", "MPNDesktopLoginModal.react", "MPNDesktopWelcomePageBottomButtons.react", "MPNHeaderActionButton.react", "MPNIdentity", "MPNMinusButtonSVG.react", "MPNMoreInfoButtonSVG.react", "MPNNewWelcomePageButtom.react", "MPNPrivacyText.react", "MPNSwitchAccountActionButton.react", "MPNSwitchAccountDropDownMenu.react", "MPNVerifiedBadge.react", "MPNXDMessageManager", "MessagingPluginContext", "MessagingPluginDesktopInformationDropDownMenu.react", "MessagingPluginDesktopProfilePicture.react", "react", "useResizeObserver"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    b = d("react");
    var k = b.useContext,
        l = b.useState,
        m = 18,
        n = 16;

    function a(a) {
        var b, e = k(c("MessagingPluginContext"));
        e = e.state;
        var f = e.pageVerifiedStatus,
            g = e.alignment,
            h = e.hasGuestMode,
            o = e.pageName,
            p = e.pageResponsiveness,
            q = e.loggedInGreeting,
            r = e.loggedOutGreeting,
            s = e.shouldShowEntryPointCustomization,
            t = e.shouldShowNewWelcomeView,
            u = e.pageID;
        e = e.windowSize;
        var v = l(!1),
            w = v[0],
            x = v[1];
        v = (v = a.shouldShowEntryPointCustomizationFromSetupFlow) != null ? v : s;
        var y = d("MPNIdentity").MPNIdentity.currentUserState() == d("MPNIdentity").MPNIdentityState.FB;
        o = i._( /*FBT_CALL*/ "Chat with {pageName}" /*FBT_CALL*/ , [i._param("pageName", o)]);
        b = (b = a.previewWindowSize) != null ? b : e;
        var z = b === "compact",
            A = function(a, b) {
                var e = z ? d("LiveChatPluginConstants").WELCOME_PAGE_GUEST_FALLBACK_HEIGHT_WITH_COMPACT : d("LiveChatPluginConstants").WELCOME_PAGE_GUEST_FALLBACK_HEIGHT,
                    f = z ? d("LiveChatPluginConstants").WELCOME_PAGE_NO_GUEST_FALLBACK_HEIGHT_WITH_COMPACT : d("LiveChatPluginConstants").WELCOME_PAGE_NO_GUEST_FALLBACK_HEIGHT,
                    g = z ? d("LiveChatPluginConstants").WELCOME_PAGE_PADDING_HEIGHT_WITH_COMPACT : d("LiveChatPluginConstants").WELCOME_PAGE_PADDING_HEIGHT,
                    h = z ? d("LiveChatPluginConstants").WELCOME_PAGE_ATTRIBUTION_OFFSET_HEIGHT_WITH_COMPACT : d("LiveChatPluginConstants").WELCOME_PAGE_ATTRIBUTION_OFFEST_HEIGHT;
                h = s ? h : 0;
                a = a ? e : f;
                b instanceof HTMLElement && (a = b.offsetHeight);
                e = a + g + h;
                c("MPNXDMessageManager").resizeIframe(e)
            };
        e = c("useResizeObserver")(function(a, b) {
            A(h, b)
        });
        b = z ? n : m;
        var B = z ? d("MPNConstants").MPNGreenDotSize.MEDIUM : d("MPNConstants").MPNGreenDotSize.LARGE,
            C = z ? "_a3jw" : "_a3jx",
            D = function() {
                var a = d("MPNIdentity").MPNIdentity.currentUserID();
                if (a == null) return;
                d("LiveChatPluginLoggerUtil").logActionFromNewUI("chat_plugin_minimize", a, u, "welcome_page")
            },
            E = t ? j.jsx(c("BasePopoverTrigger.react"), {
                popover: c("MPNDesktopLoginModal.react"),
                onVisibilityChange: x,
                popoverProps: babelHelpers["extends"]({}, a),
                position: "below",
                disableAutoFlip: !0,
                disableAutoAlign: !0,
                align: "stretch",
                children: function(a, b) {
                    return j.jsx("div", {
                        ref: a,
                        children: j.jsx(c("MPNNewWelcomePageButtom.react"), {
                            onClick: function() {
                                b(), x(!0)
                            }
                        })
                    })
                }
            }) : j.jsxs("div", {
                children: [j.jsx(c("MPNDesktopWelcomePageBottomButtons.react"), babelHelpers["extends"]({}, a)), j.jsx(c("MPNPrivacyText.react"), {
                    useITPContinueButton: a.useITPContinueButton
                })]
            });
        return j.jsx("div", {
            "data-testid": void 0,
            ref: e,
            className: "_94vf" + (g === "left" ? " _9pmu" : "") + (g === "right" ? " _9pmv" : ""),
            onClick: function(a) {
                a.stopPropagation()
            },
            role: "none",
            children: j.jsx("div", {
                className: t && w ? "_a6s5" : "",
                children: j.jsxs("div", {
                    className: "welcomePageModalSheetContent",
                    children: [j.jsxs("div", {
                        className: "_a2zp",
                        children: [j.jsx(c("MessagingPluginDesktopProfilePicture.react"), {
                            className: C,
                            greenDotSize: B
                        }), j.jsx("div", {
                            className: "_9dxh"
                        }), j.jsxs("div", {
                            className: "_9dzn",
                            children: [y && !t ? j.jsx(c("BasePopoverTrigger.react"), {
                                align: "middle",
                                popover: c("MPNSwitchAccountDropDownMenu.react"),
                                popoverProps: {},
                                children: function(a, b) {
                                    return j.jsx("div", {
                                        ref: a,
                                        children: j.jsx(c("MPNSwitchAccountActionButton.react"), {
                                            onPress: b,
                                            testid: void 0
                                        })
                                    })
                                }
                            }) : null, j.jsx(c("BasePopoverTrigger.react"), {
                                popover: c("MessagingPluginDesktopInformationDropDownMenu.react"),
                                popoverProps: {},
                                children: function(a, b) {
                                    return j.jsx("div", {
                                        ref: a,
                                        children: j.jsx(c("MPNHeaderActionButton.react"), {
                                            testid: void 0,
                                            label: i._( /*FBT_CALL*/ "More" /*FBT_CALL*/ ),
                                            onPress: b,
                                            children: j.jsx(c("MPNMoreInfoButtonSVG.react"), {})
                                        })
                                    })
                                }
                            }), j.jsx("div", {
                                "data-testid": void 0,
                                className: "_9q4i",
                                children: j.jsx(c("MPNHeaderActionButton.react"), {
                                    label: i._( /*FBT_CALL*/ "close" /*FBT_CALL*/ ),
                                    onPress: function() {
                                        var b;
                                        (b = a.ActionDelegate) == null ? void 0 : b.minimize();
                                        D()
                                    },
                                    children: j.jsx(c("MPNMinusButtonSVG.react"), {})
                                })
                            })]
                        })]
                    }), j.jsxs(c("FlexLayout.react"), {
                        align: "center",
                        className_DO_NOT_USE: "_a2zr",
                        children: [j.jsx(c("LineClamp.react"), {
                            lines: 1,
                            children: j.jsx("strong", {
                                children: o
                            })
                        }), f && f !== "not_verified" ? j.jsx("span", {
                            className: "_a2m5",
                            children: j.jsx(c("MPNVerifiedBadge.react"), {
                                verificationStatus: f,
                                size: b
                            })
                        }) : null]
                    }), j.jsx(c("LineClamp.react"), {
                        lines: 1,
                        className: "_a2zs",
                        children: p
                    }), j.jsx(c("LineClamp.react"), {
                        lines: 3,
                        className: "_a2zt" + (t ? " _a6s6" : ""),
                        children: y ? q : (e = r) != null ? e : d("LiveChatPluginFbts").DEFAULT_LOGGED_IN_GREETING_TEXT.toString()
                    }), E, j.jsx(c("ChatPluginMessengerAttribution.react"), {
                        shouldShowEntryPointCustomization: v
                    })]
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("MPNDesktopWelcomePageModal.react", ["cx", "BootloaderResource", "JSResource", "MPNDesktopWelcomePageModalView.react", "MessagingPluginContext", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var e = b.prototype;
        e.render = function() {
            var a = this.context.state.isSanitizedEpd3pdRequest;
            return i.jsx("div", {
                children: i.jsx("div", {
                    role: "none",
                    onMouseEnter: function() {
                        a || d("BootloaderResource").preload(c("JSResource")("MessagingPluginDialogBody.react").__setRef("MPNDesktopWelcomePageModal.react"))
                    },
                    className: "_94ve",
                    children: i.jsx(c("MPNDesktopWelcomePageModalView.react"), babelHelpers["extends"]({}, this.props))
                })
            })
        };
        return b
    }(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MPNDesktopITPContinuePage.react", ["LiveChatPluginLoggerUtil", "MPNConstants", "MPNDesktopWelcomePageModal.react", "MPNXDMessageManager", "MessagingPluginContext", "MessagingPluginPathUtils", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var e = b.prototype;
        e.componentDidMount = function() {
            var a = this.context.state,
                b = a.alignment,
                e = a.bottomSpacing,
                f = a.sideSpacing,
                g = a.pageID,
                h = a.pluginMountTime,
                i = a.entryPointLabel,
                j = a.entryPointSize,
                k = a.optimisticStorageState;
            a = a.windowSize;
            k = k.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN;
            c("MPNXDMessageManager").setupDesktopIframe(b, e, f, d("MessagingPluginPathUtils").MPN_PATH.ITPCONTINUE, k, !0, i, j, a);
            d("LiveChatPluginLoggerUtil").logImpressionUsingXController_SafeFor3PD(g, "itp_page", h, ["continue"])
        };
        e.render = function() {
            try {
                return h.jsx(c("MPNDesktopWelcomePageModal.react"), {
                    ActionDelegate: this.props.ActionDelegate,
                    history: this.props.history,
                    useITPContinueButton: !0
                })
            } catch (a) {
                d("LiveChatPluginLoggerUtil").logImpressionExceptionsUsingXController_SafeFor3PD("tab_load_failure", this.context.state.pageID, "itp_page", a.name, a.message, a.stack)
            }
        };
        return b
    }(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MPNDesktopIcon.react", ["ChatPluginEntryPoint.react", "ClickableArea.react", "LiveChatPluginLoggerUtil", "LiveChatPluginMessengerIconSVGWithColor.react", "MPNXDMessageManager", "cr:352", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(e, a);

        function e() {
            var b, e;
            for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++) g[h] = arguments[h];
            return (b = e = a.call.apply(a, [this].concat(g)) || this, e.state = {
                visibility: e.props.initialVisibility,
                disabled: !1
            }, e.$1 = function() {
                if (e.state.disabled == !0) return;
                else c("MPNXDMessageManager").markInteraction(), e.props.actionDelegate.togglePluginVisibility(), e.setState({
                    disabled: !0
                }), window.setTimeout(function() {
                    e.setState({
                        disabled: !1
                    })
                }, 350), e.props.shouldShowEntryPointCustomization && d("LiveChatPluginLoggerUtil").logEntryPointClick(e.props.entryPointIconEnum, e.props.entryPointLabel, e.props.pageID)
            }, b) || babelHelpers.assertThisInitialized(e)
        }
        var f = e.prototype;
        f.componentDidMount = function() {
            var a = null,
                b = null,
                c = this.props,
                e = c.shouldShowEntryPointCustomization,
                f = c.pageID,
                g = c.pluginRequestTime,
                h = c.clientRequestTime,
                i = c.logId;
            c = c.serverRequestTime;
            e && (a = this.props.entryPointIconEnum, b = this.props.entryPointLabel);
            d("LiveChatPluginLoggerUtil").logImpressionUsingXController_SafeFor3PD(f, "plugin_icon", g, null, null, null, null, h, null, a, b, e, i, c)
        };
        f.render = function() {
            var a = this.props,
                e = a.alignment,
                f = a.entryPointIconSVG,
                g = a.entryPointLabel,
                i = a.entryPointSize,
                j = a.shouldShowEntryPointCustomization;
            a = a.threadColor;
            try {
                b("cr:352") == null ? void 0 : b("cr:352").logChatPluginLandingLoadModuleEndSuccess();
                return h.jsx(c("ClickableArea.react"), {
                    "data-testid": void 0,
                    onClick: this.$1,
                    children: h.jsx("div", {
                        style: {
                            cursor: "pointer"
                        },
                        children: j ? h.jsx(c("ChatPluginEntryPoint.react"), {
                            alignment: e,
                            entryPointIcon: f,
                            entryPointLabel: g,
                            entryPointSize: i,
                            threadColor: a
                        }) : h.jsx(c("LiveChatPluginMessengerIconSVGWithColor.react"), {
                            threadColor: a,
                            entryPointSize: i
                        })
                    })
                })
            } catch (a) {
                b("cr:352") == null ? void 0 : b("cr:352").logChatPluginLandingLoadModuleEndFail(), d("LiveChatPluginLoggerUtil").logImpressionExceptionsUsingXController_SafeFor3PD("tab_load_failure", this.props.pageID, "plugin_icon", a.name, a.message, a.stack)
            }
        };
        return e
    }(h.Component);
    g["default"] = a
}), 98);
__d("MPNDesktopMessageComposer.react", ["cx", "fbt", "AbstractTextInput.react", "JSResource", "Keys", "LiveChatPluginAttachmentUploadError", "LiveChatPluginLoggerUtil", "LiveChatPluginMessageComposerAttachmentShelf.react", "LiveChatPluginSendButtonSVG.react", "MPNDesktopBotMenuButton.react", "MPNDesktopGuestAttachmentButton.react", "MPNIdentity", "MPNLocalState", "MPNPaperclipIconSVG.react", "MercuryIDs", "MercuryMessageActions", "MercuryMessageObject", "MessagingPluginContext", "ShimButton.react", "Tooltip.react", "lazyLoadComponent", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = c("lazyLoadComponent")(c("JSResource")("MPNAttachmentInput.react").__setRef("MPNDesktopMessageComposer.react"));
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, e) {
            var f;
            f = a.call(this, b, e) || this;
            f.state = {
                attachmentsDataMap: new Map(),
                error: c("LiveChatPluginAttachmentUploadError").NO_ERROR,
                inputValue: "",
                uploadingAttachments: new Set()
            };
            f.$18 = function(a) {
                f.props.onChange(), f.setState({
                    error: c("LiveChatPluginAttachmentUploadError").NO_ERROR,
                    inputValue: a.target.value
                })
            };
            f.$19 = function(a) {
                a.keyCode === c("Keys").RETURN && (a.preventDefault(), f.$17())
            };
            f.$17 = function() {
                var a, b = d("MPNIdentity").MPNIdentity.currentUserState(),
                    c = f.context.state;
                a = (a = c.messageStore) == null ? void 0 : a.sendQueue;
                var e = a == null ? void 0 : a.prepareAttachmentsForMessage(f.$1, f.$3, f.$4, f.$10),
                    g = f.state.inputValue.trim();
                if (!(a == null ? void 0 : a.canQueueMessage(g, f.state.uploadingAttachments.size !== 0, e))) return;
                a.enqueueAndSend(g, b === d("MPNIdentity").MPNIdentityState.FB, c.refererUri, null, e);
                f.$20();
                f.setState({
                    inputValue: ""
                });
                a = b === d("MPNIdentity").MPNIdentityState.FB ? d("MPNIdentity").MPNIdentity.currentUserID() : c.guestID;
                d("LiveChatPluginLoggerUtil").logActionUsingFalco((g = a) != null ? g : "", c.pageID, b === d("MPNIdentity").MPNIdentityState.FB ? "logged_in_chat_tab" : "guest_chat_tab", "message_send");
                c.hasActiveAutomation && d("LiveChatPluginLoggerUtil").logActionFromNewUI("automation_freeform_message_sent", d("MPNIdentity").MPNIdentity.currentUserID(), c.pageID, b === d("MPNIdentity").MPNIdentityState.FB ? "logged_in_chat_tab" : "guest_chat_tab")
            };
            f.$11 = function(a) {
                f.$2 && f.$2.removeAttachment(a)
            };
            f.$15 = function(a) {
                f.setState({
                    error: a
                })
            };
            f.$16 = function(a, b, d, e, g, h) {
                d && (f.$1 = d), e && (f.$3 = e), g && (f.$4 = g), h && (f.$10 = h), f.setState({
                    attachmentsDataMap: new Map(a),
                    error: c("LiveChatPluginAttachmentUploadError").NO_ERROR,
                    uploadingAttachments: new Set(b)
                }), f.focus()
            };
            b = f.context.state.pageID;
            e = d("MPNIdentity").MPNIdentity.currentUserID();
            if (e == null) return babelHelpers.assertThisInitialized(f);
            f.$6 = c("MercuryMessageActions").getForFBID(e);
            f.$7 = c("MercuryMessageObject").getForFBID(e);
            f.$8 = d("MercuryIDs").getThreadIDFromUserID(b);
            f.$9 = d("LiveChatPluginLoggerUtil").getAttributionTags();
            f.$1 = [];
            f.$3 = [];
            f.$4 = [];
            f.$10 = [];
            return f
        }
        var e = b.prototype;
        e.componentDidMount = function() {
            this.focus()
        };
        e.render = function() {
            return j.jsxs("div", {
                className: (this.context.state.isComposerDisabled ? "_664i" : "") + " _94vs",
                children: [j.jsx(c("LiveChatPluginMessageComposerAttachmentShelf.react"), {
                    attachments: this.state.attachmentsDataMap,
                    error: this.state.error,
                    removeAttachment: this.$11,
                    threadColor: this.context.state.threadColor,
                    uploadingAttachments: this.state.uploadingAttachments
                }), j.jsxs("div", {
                    className: "_94vt",
                    children: [this.$12(), this.$13(), this.$14()]
                })]
            })
        };
        e.$12 = function() {
            var a = this,
                b = this.context.state,
                e = b.isComposerDisabled,
                f = b.optimisticStorageState;
            b = b.showUpgradeUpsellPrompt;
            if (e || f.chatState === d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED) return null;
            if (d("MPNIdentity").MPNIdentity.currentUserState() === d("MPNIdentity").MPNIdentityState.GUEST)
                if (b === !0) return j.jsx(c("MPNDesktopGuestAttachmentButton.react"), {
                    threadColor: this.context.state.threadCSSColor
                });
                else return null;
            e = d("MPNIdentity").MPNIdentity.currentUserID();
            return e == null ? null : j.jsx(j.Suspense, {
                fallback: j.jsx("div", {
                    className: "_95jj",
                    children: j.jsx(c("MPNPaperclipIconSVG.react"), {
                        color: this.context.state.threadCSSColor
                    })
                }),
                children: j.jsx(k, {
                    pageID: this.context.state.pageID,
                    ref: function(b) {
                        a.$2 = b
                    },
                    setComposerAttachmentError: this.$15,
                    updateComposerAttachmentsAndIDs: this.$16,
                    viewerID: e,
                    isMobile: !1
                })
            })
        };
        e.$14 = function() {
            var a = this.context.state,
                b = a.isComposerDisabled;
            a = a.threadCSSColor;
            var d = this.state.inputValue.trim();
            d = d.length === 0 && this.state.attachmentsDataMap.size === 0;
            return d || b ? j.jsx(c("MPNDesktopBotMenuButton.react"), {
                onClick: this.props.onClick
            }) : j.jsx(c("Tooltip.react"), {
                tooltip: i._( /*FBT_CALL*/ "Send" /*FBT_CALL*/ ),
                children: j.jsx(c("ShimButton.react"), {
                    "aria-label": i._( /*FBT_CALL*/ "Send" /*FBT_CALL*/ ),
                    className: "_4bqf _95jk _9jru",
                    "data-testid": void 0,
                    onClick: this.$17,
                    children: j.jsx(c("LiveChatPluginSendButtonSVG.react"), {
                        threadColor: a
                    })
                })
            })
        };
        e.$13 = function() {
            var a = this,
                b = this.context.state.isComposerDisabled,
                d = i._( /*FBT_CALL*/ "Typing is disabled for this conversation." /*FBT_CALL*/ );
            return b ? j.jsx("div", {
                className: "_664k",
                children: d
            }) : j.jsx("div", {
                className: "_94vv",
                children: j.jsx(c("AbstractTextInput.react"), {
                    "data-testid": void 0,
                    onBlur: this.props.onBlur,
                    onChange: this.$18,
                    onClick: this.props.onClick,
                    onFocus: this.props.onFocus,
                    onKeyDown: this.$19,
                    ref: function(b) {
                        a.$5 = b
                    },
                    placeholder: i._( /*FBT_CALL*/ "Ask a question\u2026" /*FBT_CALL*/ ).toString(),
                    value: this.state.inputValue
                })
            })
        };
        e.$20 = function() {
            this.$2 && this.$2.removeAllAttachments()
        };
        e.focus = function() {
            this.$5 && this.$5.focusInput()
        };
        return b
    }(j.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MPNDesktopThreadPage.react", ["cx", "JSResource", "LiveChatPluginConstants", "LiveChatPluginLoggerUtil", "MPNBlockedPageComposer.react", "MPNConstants", "MPNDesktopDialogHeader.react", "MPNDesktopGuestUpgradeUpsellPrompt.react", "MPNDesktopMessageComposer.react", "MPNEndChatPrompt.react", "MPNIdentity", "MPNLocalState", "MPNUpgradePopover.react", "MPNXDMessageManager", "MessagingPluginContext", "MessengerSpinner.react", "MessengerState.bs", "lazyLoadComponent", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = c("lazyLoadComponent")(c("JSResource")("MessagingPluginDialogBody.react").__setRef("MPNDesktopThreadPage.react"));
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
                dialogBodyHeight: -1
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.componentDidMount = function() {
            var a = this.$2();
            c("MPNXDMessageManager").resizeIframe(a)
        };
        e.$2 = function() {
            var a = this.context.state.windowSize;
            a = a === "compact";
            var b = a ? d("LiveChatPluginConstants").THREAD_PAGE_HEIGHT_COMPACT : d("LiveChatPluginConstants").THREAD_PAGE_HEIGHT;
            a = a ? d("LiveChatPluginConstants").THREAD_PAGE_PADDING_HEIGHT_COMPACT : d("LiveChatPluginConstants").THREAD_PAGE_PADDING_HEIGHT;
            return b + a
        };
        e.render = function() {
            var a = this,
                b = this.context.state,
                e = b.optimisticStorageState,
                f = b.pageID,
                g = b.isPageBlocked;
            b = b.showUpgradeUpsellPrompt;
            var h = d("MPNIdentity").MPNIdentity.currentUserID(),
                k = d("MPNIdentity").MPNIdentity.currentUserState() === d("MPNIdentity").MPNIdentityState.GUEST;
            try {
                return i.jsx("div", {
                    role: "none",
                    className: "_94vg",
                    children: i.jsxs("div", {
                        className: "_94vh",
                        children: [i.jsx(c("MPNDesktopDialogHeader.react"), {
                            ActionDelegate: this.props.ActionDelegate,
                            history: this.props.history
                        }), i.jsxs("div", {
                            className: "_424s",
                            children: [e.chatState === d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED && i.jsx("div", {
                                className: "spinner",
                                children: i.jsx(c("MessengerSpinner.react"), {
                                    color: "blue",
                                    size: c("MessengerSpinner.react").large_size
                                })
                            }), i.jsx(i.Suspense, {
                                fallback: i.jsx("div", {
                                    className: "spinner",
                                    children: i.jsx(c("MessengerSpinner.react"), {
                                        color: "blue",
                                        size: c("MessengerSpinner.react").large_size
                                    })
                                }),
                                children: e.chatState !== d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED && i.jsx(d("MessengerState.bs").jsComponent, {
                                    fbid: h,
                                    children: function(b) {
                                        return i.jsx(j, {
                                            deliveryReceipt: d("MessengerState.bs").deliveryReceipts(b),
                                            dialogBodyHeight: a.state.dialogBodyHeight,
                                            messengerState: b,
                                            readReceipt: null,
                                            sendRef: function() {}
                                        })
                                    }
                                })
                            })]
                        }), i.jsx(c("MPNUpgradePopover.react"), {}), e.showUpgradePrompt == null || e.showUpgradePrompt === d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN || !b ? null : i.jsx(c("MPNDesktopGuestUpgradeUpsellPrompt.react"), {
                            color: this.context.state.threadCSSColor,
                            prompt: this.context.state.optimisticStorageState.showUpgradePrompt,
                            history: this.props.history
                        }), i.jsx(c("MPNEndChatPrompt.react"), {
                            isGuest: k,
                            history: this.props.history,
                            shouldMinimize: !1
                        }), i.jsx("div", {
                            className: e.chatState === d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED ? "_91hz" : "",
                            children: g && e.chatState === d("MPNLocalState").MPNChatState.LOGGED_IN_CHAT_STARTED ? i.jsx(c("MPNBlockedPageComposer.react"), {}) : i.jsx(c("MPNDesktopMessageComposer.react"), {
                                onBlur: function() {},
                                onChange: function() {},
                                onClick: function() {},
                                onFocus: function() {},
                                ref: function(b) {
                                    return a.$1 = b
                                }
                            })
                        })]
                    }, "dialog_container")
                })
            } catch (a) {
                d("LiveChatPluginLoggerUtil").logImpressionExceptionsFromNewUI_UnsafeFor3PD("tab_load_failure", f, d("MPNIdentity").MPNIdentity.currentUserState() === d("MPNIdentity").MPNIdentityState.FB ? "logged_in_chat_tab" : "guest_chat_tab", a.name, a.message, a.stack)
            }
        };
        return b
    }(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MPNDesktopWelcomePage.react", ["LiveChatPluginLoggerUtil", "MPNDesktopWelcomePageModal.react", "MPNIdentity", "MessagingPluginContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var e = b.prototype;
        e.componentDidMount = function() {
            var a = this.context.state,
                b = a.pageID,
                c = a.pluginMountTime;
            a = a.hasGuestMode;
            var e = d("MPNIdentity").MPNIdentity.currentUserState() == d("MPNIdentity").MPNIdentityState.FB;
            d("LiveChatPluginLoggerUtil").logImpressionUsingXController_SafeFor3PD(b, a ? "welcome_page_with_guest_option" : "welcome_page", c, a ? [e ? "continue_as" : "chat_in_messenger", "continue_as_guest"] : ["chat_in_messenger"])
        };
        e.render = function() {
            try {
                return h.jsx(c("MPNDesktopWelcomePageModal.react"), {
                    ActionDelegate: this.props.ActionDelegate,
                    history: this.props.history,
                    useITPContinueButton: !1
                })
            } catch (c) {
                var a = this.context.state,
                    b = a.pageID;
                a = a.hasGuestMode;
                d("LiveChatPluginLoggerUtil").logImpressionExceptionsUsingXController_SafeFor3PD("tab_load_failure", b, a ? "welcome_page_with_guest_option" : "welcome_page", c.name, c.message, c.stack)
            }
        };
        return b
    }(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MessagingPluginDesktopWelcomeMessagePage.react", ["cx", "Arbiter", "LiveChatPluginConstants", "LiveChatPluginFbts", "LiveChatPluginLoggerUtil", "MPNConstants", "MPNLocalState", "MPNNavigation", "MPNWelcomeMessageMinusButtonSVG.react", "MPNXDMessageManager", "MessagingPluginContext", "MessagingPluginPathUtils", "ShimButton.react", "react", "useResizeObserver"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useContext,
        k = b.useEffect,
        l = b.useRef,
        m = b.useState;

    function a(a) {
        var b = j(c("MessagingPluginContext")),
            e = b.state,
            f = e.alignment,
            g = e.bottomSpacing,
            h = e.sideSpacing,
            n = e.loggedInGreeting,
            o = e.pageID,
            p = e.serverTime,
            q = e.clientRequestTime,
            r = e.entryPointLabel,
            s = e.entryPointSize,
            t = e.windowSize;
        e = m(!1);
        var u = e[0],
            v = e[1];
        e = l(null);
        var w = c("useResizeObserver")(function(a, b) {
            a = b.clientHeight + 12;
            c("MPNXDMessageManager").resizeIframe(a)
        });
        k(function() {
            var a = c("Arbiter").subscribe(d("LiveChatPluginConstants").NAVIGATE_TO_WELCOME_PAGE, function(a) {
                v(!0), y()
            });
            return function() {
                a && a.unsubscribe()
            }
        });
        k(function() {
            d("LiveChatPluginLoggerUtil").logImpressionUsingXController_SafeFor3PD(o, "bubble", p, null, null, null, null, q)
        }, [o, q, p]);
        var x = function() {
                a.ActionDelegate && a.ActionDelegate.minimize(), window.setTimeout(function() {
                    var e;
                    d("MPNNavigation").navigateToRoute(a.history, d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE);
                    c("MPNXDMessageManager").setupDesktopIframe((e = f) != null ? e : "right", (e = g) != null ? e : 0, (e = h) != null ? e : 0, d("MessagingPluginPathUtils").MPN_PATH.WELCOME, !1, null, r, s, (e = t) != null ? e : "standard");
                    e = {
                        path: d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE,
                        chatState: d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED,
                        visibility: d("MPNConstants").MPNVisibility.HIDDEN
                    };
                    b.dispatchAction({
                        type: "START_CHAT",
                        optimisticStorageState: e
                    })
                }, 100)
            },
            y = function() {
                window.setTimeout(function() {
                    var e;
                    d("MPNNavigation").navigateToRoute(a.history, d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE);
                    c("MPNXDMessageManager").setupDesktopIframe((e = f) != null ? e : "right", (e = g) != null ? e : 0, (e = h) != null ? e : 0, d("MessagingPluginPathUtils").MPN_PATH.WELCOME, !0, null, r, s, (e = t) != null ? e : "standard");
                    e = {
                        path: d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE,
                        chatState: d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED,
                        visibility: d("MPNConstants").MPNVisibility.NOT_HIDDEN
                    };
                    b.dispatchAction({
                        type: "START_CHAT",
                        optimisticStorageState: e
                    })
                }, 100)
            },
            z = f === "left" ? "_9ptl" : "_9ptk",
            A = f === "left" ? "_9pn_" : "_9ptm",
            B = f === "left" ? "_9ptp" : "_9pto";
        u = u ? "_9po3" : "_9po2";
        return i.jsxs("div", {
            className: u,
            ref: e,
            children: [i.jsx(c("ShimButton.react"), {
                onClick: function() {
                    c("MPNXDMessageManager").markInteraction(), y(), d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, b.state.pageID, "plugin_icon", {
                        opened_tab: "bubble"
                    })
                },
                children: i.jsx("div", {
                    "data-testid": void 0,
                    className: z,
                    ref: w,
                    children: i.jsx("div", {
                        className: A,
                        children: n != null ? n : d("LiveChatPluginFbts").DEFAULT_LOGGED_IN_GREETING_TEXT.toString()
                    })
                })
            }), i.jsx("div", {
                className: B,
                children: i.jsx(c("ShimButton.react"), {
                    "data-testid": void 0,
                    onClick: x,
                    className: "_9pti",
                    children: i.jsx(c("MPNWelcomeMessageMinusButtonSVG.react"), {})
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("MPNDesktopRoute.react", ["MPNDesktopITPContinuePage.react", "MPNDesktopThreadPage.react", "MPNDesktopWelcomePage.react", "MessagingPluginDesktopWelcomeMessagePage.react", "MessagingPluginPathUtils", "ReactRouterDOM", "react"], (function(a, b, c, d, e, f, g) {
    var h = d("react");

    function a(a) {
        var b = a.path,
            e = a.ActionDelegate;
        return h.jsx(d("ReactRouterDOM").BrowserRouter, {
            children: h.jsxs(d("ReactRouterDOM").Switch, {
                children: [h.jsx(d("ReactRouterDOM").Route, {
                    render: function(a) {
                        return h.jsx(c("MPNDesktopWelcomePage.react"), babelHelpers["extends"]({}, a, {
                            ActionDelegate: e
                        }))
                    },
                    exact: !0,
                    path: d("MessagingPluginPathUtils").MPN_PATH.WELCOME
                }), h.jsx(d("ReactRouterDOM").Route, {
                    render: function(a) {
                        return h.jsx(c("MPNDesktopITPContinuePage.react"), babelHelpers["extends"]({}, a, {
                            ActionDelegate: e
                        }))
                    },
                    exact: !0,
                    path: d("MessagingPluginPathUtils").MPN_PATH.ITPCONTINUE
                }), h.jsx(d("ReactRouterDOM").Route, {
                    render: function(a) {
                        return h.jsx(c("MPNDesktopThreadPage.react"), babelHelpers["extends"]({}, a, {
                            ActionDelegate: e
                        }))
                    },
                    exact: !0,
                    path: d("MessagingPluginPathUtils").MPN_PATH.THREAD
                }), h.jsx(d("ReactRouterDOM").Route, {
                    render: function(a) {
                        return h.jsx(c("MessagingPluginDesktopWelcomeMessagePage.react"), babelHelpers["extends"]({}, a, {
                            ActionDelegate: e
                        }))
                    },
                    exact: !0,
                    path: d("MessagingPluginPathUtils").MPN_PATH.BUBBLE
                }), h.jsx(d("ReactRouterDOM").Redirect, {
                    to: b
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("MPNDesktopWrapper.react", ["Arbiter", "Bootloader", "ChatPluginEntryPoint.react", "CreateCustomerChatPluginGuestUserMutation", "LiveChatMqttClient", "LiveChatPluginLoggerUtil", "LiveChatPluginMessengerIconSVGWithColor.react", "MPNConstants", "MPNDesktopIcon.react", "MPNDesktopRoute.react", "MPNIdentity", "MPNLocalState", "MPNNavigation", "MPNStorage", "MPNUnreadCountBadge.react", "MPNXDMessageManager", "MessagingPluginContext", "MessagingPluginGuestUpgradeActions", "MessagingPluginPathUtils", "MessagingPluginSDKActionUtil", "MessagingPluginThreadActions", "ReactDOM", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            NONE: 0,
            CREATE_GUEST_SESSION: 1,
            START_NEW_THREAD: 2,
            GUEST_UPGRADE: 3,
            GUEST_UPGRADE_SWITCH_ACCOUNT: 4
        };
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var e;
            e = a.call(this, b) || this;
            e.actionOnInit = i.NONE;
            e.iconIframeLoaded = !1;
            e.unreadCountIframeLoaded = !1;
            e.$2 = null;
            e.$5 = function(a) {
                var b = e.context.state,
                    f = b.pageID;
                b = b.locale;
                d("CreateCustomerChatPluginGuestUserMutation").commit({
                    input: {
                        page_id: f,
                        locale: b
                    }
                }, {
                    onSuccess: function(b) {
                        b = b.create_customer_chat_plugin_guest_user;
                        var c = b == null ? void 0 : b.session_key,
                            f = b == null ? void 0 : b.fbid,
                            g = b == null ? void 0 : b.access_token;
                        b = b == null ? void 0 : b.is_lightswitch_enabled;
                        c != null && f != null && g != null && b != null && (d("MessagingPluginThreadActions").startChatAsGuest(e.context, g, f, b), a(f, g))
                    },
                    onFailure: function(a) {
                        c("MPNStorage").clearFBStorageState(), c("MPNStorage").clearThirdPartyStorageState(), c("MPNXDMessageManager").reloadPlugin(), d("LiveChatPluginLoggerUtil").logActionFromNewUI("guest_session_create_failure", null, f, "guest_chat_tab")
                    }
                })
            };
            e.$6 = function() {
                var a = e.context.state.optimisticStorageState;
                if (a.path == d("MPNLocalState").MPNLocalStatePath.BUBBLE) {
                    d("MPNNavigation").maximizePlugin(e.context, !1);
                    return
                }
                a.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN ? (d("MPNNavigation").minimizePlugin(e.context, !1), e.$11()) : a.visibility === d("MPNConstants").MPNVisibility.HIDDEN && d("MPNNavigation").maximizePlugin(e.context, !1)
            };
            e.initialPath = e.$4();
            if (e.props.redirectCommand != null) switch (e.props.redirectCommand) {
                case d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION:
                    e.actionOnInit = i.CREATE_GUEST_SESSION;
                    break;
                case d("MPNConstants").MPNRedirect.FB_LOG_IN:
                    e.actionOnInit = i.START_NEW_THREAD;
                    break;
                case d("MPNConstants").MPNRedirect.GUEST_UPGRADE:
                    e.actionOnInit = i.GUEST_UPGRADE;
                    break;
                case d("MPNConstants").MPNRedirect.GUEST_UPGRADE_SWITCH_ACCOUNT:
                    e.actionOnInit = i.GUEST_UPGRADE_SWITCH_ACCOUNT;
                    break;
                default:
                    break
            }
            e.ActionDelegate = {
                onContinueAsGuest: e.$5,
                openThreadWithCurrentFBUser: function() {
                    d("MessagingPluginThreadActions").openThreadWithCurrentFBUser(e.context)
                },
                openThreadWithInterstitial: function(a) {
                    d("MessagingPluginThreadActions").openThreadWithInterstitial(e.context, a)
                },
                onChatInMessenger: function() {},
                minimize: function() {
                    d("MPNNavigation").minimizePlugin(e.context, !1)
                },
                maximize: function() {
                    d("MPNNavigation").maximizePlugin(e.context, !1)
                },
                togglePluginVisibility: e.$6
            };
            e.$1 = window.name;
            return e
        }
        var e = b.prototype;
        e.$4 = function() {
            var a = this.props.redirectCommand;
            return a === d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION || a === d("MPNConstants").MPNRedirect.FB_LOG_IN ? d("MessagingPluginPathUtils").MPN_PATH.THREAD : this.props.path
        };
        e.componentDidMount = function() {
            var a = this.context.state,
                b = a.alignment,
                e = a.bottomSpacing,
                f = a.sideSpacing,
                g = a.optimisticStorageState,
                h = a.entryPointLabel,
                i = a.entryPointSize;
            a = a.windowSize;
            g = this.initialPath === d("MessagingPluginPathUtils").MPN_PATH.BUBBLE || g.visibility == d("MPNConstants").MPNVisibility.NOT_HIDDEN;
            this.$7();
            c("MPNXDMessageManager").setupDesktopIframe(b, e, f, this.initialPath, g, !0, h, i, a);
            this.initialPath === d("MessagingPluginPathUtils").MPN_PATH.BUBBLE && (c("MPNStorage").setVisibility(d("MPNConstants").MPNVisibility.NOT_HIDDEN), this.context.dispatchAction({
                type: "UPDATE_DIALOG_VISIBILITY",
                dialogVisibility: d("MPNConstants").MPNVisibility.NOT_HIDDEN
            }));
            this.$8();
            this.$9()
        };
        e.componentWillUnmount = function() {
            this.$3 && window.clearTimeout(this.$3)
        };
        e.componentDidUpdate = function() {
            this.$9()
        };
        e.$9 = function() {
            var a = this,
                b = this.context.state,
                e = b.optimisticStorageState,
                f = b.pageID,
                g = b.pageName,
                h = b.accessToken;
            b = b.loggedInAccessToken;
            var i = d("MPNIdentity").MPNIdentity.currentUserID();
            if (this.$2 == i || e.chatState === d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED || i == null) return;
            e = d("MPNIdentity").MPNIdentity.currentUserState();
            e === d("MPNIdentity").MPNIdentityState.FB && (c("LiveChatMqttClient").setUp(f, i, null, function() {
                return a.$2 = i
            }, b), c("Bootloader").loadModules(["LiveChatPluginAlerts", "MercurySyncDeltaHandler"], function(a, b) {
                a.init(i, f, g, new Map(), !1, 0), b.getForFBID(i), c("Arbiter").inform("MercurySyncDeltaHandler/initSeqID", {
                    fbid: i,
                    seqID: 0
                })
            }, "MPNDesktopWrapper.react"));
            e === d("MPNIdentity").MPNIdentityState.GUEST && (h != null && (c("LiveChatMqttClient").setUp(f, i, null, null, h), this.$2 = i))
        };
        e.$7 = function() {
            var a = this,
                b = this.context.state,
                e = b.alignment,
                f = b.bottomSpacing,
                g = b.sideSpacing,
                i = b.isLoadedByFacade,
                j = b.shouldShowEntryPointCustomization,
                k = b.entryPointSize,
                l = this.context.state;
            b = j ? h.jsx(c("ChatPluginEntryPoint.react"), {
                entryPointIcon: l.entryPointIconSVG,
                entryPointLabel: l.entryPointLabel,
                entryPointSize: k,
                threadColor: l.threadCSSColor,
                alignment: l.alignment
            }) : h.jsx(c("LiveChatPluginMessengerIconSVGWithColor.react"), {
                threadColor: l.threadCSSColor,
                entryPointSize: k
            });
            c("MPNXDMessageManager").setupIconIframe(this.$1, e, f, g, b, i, this.$10(), l.entryPointLabel, k);
            c("MPNXDMessageManager").subscribeEvent("plugin_wrapper", "message", "bubbleFrameLoaded", function(b) {
                try {
                    if (b.data.frameName != null && !a.iconIframeLoaded) {
                        var e = h.jsx(c("MPNDesktopIcon.react"), {
                                alignment: l.alignment,
                                threadColor: l.threadCSSColor,
                                entryPointIconSVG: l.entryPointIconSVG,
                                entryPointIconEnum: l.entryPointIconEnum,
                                entryPointLabel: l.entryPointLabel,
                                entryPointSize: k,
                                actionDelegate: a.ActionDelegate,
                                pageID: l.pageID,
                                pluginRequestTime: b.data.request_time,
                                initialVisibility: l.optimisticStorageState.visibility,
                                clientRequestTime: l.clientRequestTime,
                                shouldShowEntryPointCustomization: l.shouldShowEntryPointCustomization,
                                logId: b.data.log_id,
                                serverRequestTime: l.serverTime
                            }),
                            f = parent.frames[b.data.frameName].document.body;
                        d("ReactDOM").render(e, f);
                        a.iconIframeLoaded = !0
                    }
                    if (b.data.unreadCountFrameName != null) {
                        e = h.jsx(c("MPNUnreadCountBadge.react"), {});
                        f = parent.frames[b.data.unreadCountFrameName].document.body;
                        d("ReactDOM").render(e, f);
                        a.unreadCountIframeLoaded = !0
                    }
                } catch (b) {
                    d("LiveChatPluginLoggerUtil").logImpressionExceptionsUsingXController_SafeFor3PD("tab_load_failure", a.context.state.pageID, "plugin_icon", b.name, b.message, b.stack)
                }
            })
        };
        e.$10 = function() {
            var a = this.context.state.optimisticStorageState;
            return a.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN ? a.path === d("MPNLocalState").MPNLocalStatePath.BUBBLE : !0
        };
        e.$8 = function() {
            var a = this;
            c("MPNXDMessageManager").subscribeEvent("plugin_wrapper", "message", "CustomerChat.SDK.Called", function(b) {
                d("MessagingPluginSDKActionUtil").logSDKCalls(a.context, b)
            });
            c("MPNXDMessageManager").subscribeEvent("plugin_wrapper", "message", "updateCustomerChat", function(b) {
                d("MessagingPluginSDKActionUtil").updateGreetingTextAndRefParam(a.context, b)
            });
            c("MPNXDMessageManager").subscribeEvent("plugin_wrapper", "message", "CustomerChat.isDialogHidden", function(b) {
                d("MessagingPluginSDKActionUtil").updateDialogVisibility(a.context, b)
            })
        };
        e.render = function() {
            switch (this.actionOnInit) {
                case i.CREATE_GUEST_SESSION:
                    this.actionOnInit = i.NONE;
                    this.$5(function() {
                        c("MPNStorage").clearRedirectCommand()
                    });
                    break;
                case i.START_NEW_THREAD:
                    this.actionOnInit = i.NONE;
                    c("MPNStorage").clearRedirectCommand();
                    d("MessagingPluginThreadActions").openThreadWithCurrentFBUser(this.context);
                    break;
                case i.GUEST_UPGRADE:
                    this.actionOnInit = i.NONE;
                    c("MPNStorage").clearRedirectCommand();
                    d("MessagingPluginGuestUpgradeActions").clearGuestStorage(this.context);
                    d("MessagingPluginGuestUpgradeActions").setPluginStateToUpgradedThread(this.context);
                    break;
                case i.GUEST_UPGRADE_SWITCH_ACCOUNT:
                    this.actionOnInit = i.NONE;
                    c("MPNStorage").clearRedirectCommand();
                    d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(function(a, b) {
                        a = c("MPNStorage").getFBStorageState();
                        a != null && c("MPNStorage").setFBStorageState(babelHelpers["extends"]({}, a, {
                            rdr: d("MPNConstants").MPNRedirect.GUEST_UPGRADE
                        }));
                        c("MPNXDMessageManager").reloadPlugin()
                    }, 250);
                    break;
                default:
                    break
            }
            return this.context.state.optimisticStorageState.visibility == d("MPNConstants").MPNVisibility.NOT_HIDDEN || this.iconIframeLoaded ? h.jsx(c("MPNDesktopRoute.react"), {
                path: this.initialPath,
                ActionDelegate: this.ActionDelegate
            }) : null
        };
        e.$11 = function() {
            var a = this.context.state.pageID,
                b = d("MPNIdentity").MPNIdentity.currentUserID();
            if (b == null) return;
            d("LiveChatPluginLoggerUtil").logActionFromNewUI("chat_plugin_minimize", b, a, "plugin_icon")
        };
        return b
    }(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MessagingPluginDesktopRoot", ["cx", "CometBlueBridgeKeyCommandListener.react", "LiveChatPluginErrorBoundary.react", "MPNCacheVersioning", "MPNConstants", "MPNDesktopWrapper.react", "MPNIdentity", "MPNLocalState", "MPNStorage", "MPNXDMessageManager", "MessagingPluginPathUtils", "MessagingPluginStateProvider", "ReactDOM", "URI", "performanceAbsoluteNow", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function() {
        function a(a) {
            var b = a.alignment,
                c = a.pageID,
                d = a.container,
                e = a.serverTime,
                f = a.clientRequestTime,
                g = a.pagePassesSentryTest,
                h = a.hasMessagingPermission,
                i = a.isMuted,
                j = a.isPageBlocked,
                k = a.isBusinessActive,
                l = a.requestID,
                m = a.refererUri,
                n = a.originDomain,
                o = a.soundURLs,
                p = a.hasGuestMode,
                q = a.showUpgradeUpsellPrompt,
                r = a.hasAutomation,
                s = a.appSwitchUri,
                t = a.upgradeAppSwitchUri,
                u = a.storedStates,
                v = a.isComposerDisabled,
                w = a.hasPersistentMenu,
                x = a.pageName,
                y = a.pageProfilePictureUri,
                z = a.viewerProfilePicureUri,
                A = a.pageResponsiveness,
                B = a.isInstantlyResponsive,
                C = a.refParam,
                D = a.pageVerifiedStatus,
                E = a.greetingDialogDisplay,
                F = a.loggedInGreeting,
                G = a.loggedOutGreeting,
                H = a.threadCSSColor,
                I = a.entryPointIconSVG,
                J = a.entryPointIconEnum,
                K = a.entryPointLabel,
                L = a.locale,
                M = a.icebreakers,
                N = a.icebreakerCtas,
                O = a.bottomSpacing,
                P = a.sideSpacing,
                aa = a.isPageInEU,
                ba = a.threadExists,
                Q = a.isLoadedByFacade,
                ca = a.shouldShowEntryPointCustomization,
                da = a.loggedInAccessToken,
                R = a.isSanitizedEpd3pdRequest,
                ea = a.shouldShowSizingCustomization,
                S = a.shouldShowNewWelcomeView,
                fa = a.shouldShowPresence,
                ga = a.entryPointSize,
                ha = a.windowSize,
                ia = a.awayHoursEnabled,
                T = a.awayGreeting,
                ja = a.isPageAway;
            a = a.nextAvailableTimestamp;
            try {
                this.$1(b, c, d, e, f, g, h, i, j, k, l, m, n, o, s, t, p, q, r, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, aa, ba, Q, ca, da, R, ea, S, fa, ga, ha, ia, T, ja, a)
            } catch (a) {}
        }
        var b = a.prototype;
        b.$1 = function(a, b, e, f, g, h, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, aa, ba, Q, ca, da, R, ea, S, fa, ga, ha, ia, T, ja, ka, la, ma) {
            var na = !1;
            c("MPNStorage").initialize(p, b, n);
            d("MPNIdentity").MPNIdentity.hasStorageAccess(function(U) {
                d("MPNIdentity").MPNIdentity.init(U, S);
                var V = n,
                    W = w;
                W && (d("MPNCacheVersioning").isLatestVersion(W.v) || (c("MPNStorage").clearThirdPartyStorageState(), W = null));
                W || (W = c("MPNStorage").getDefaultOptimisticStorageState(!1, G), c("MPNStorage").setThirdPartyStorageState(W));
                var X = !1,
                    oa, pa, Y = W.visibility;
                if (U) {
                    var Z, $ = c("MPNStorage").getFBStorageState();
                    Z = (Z = $) == null ? void 0 : Z.rdr;
                    Z == null && !d("MPNCacheVersioning").isLatestVersion((Z = $) == null ? void 0 : Z.v) && (c("MPNStorage").clearFBStorageState(), $ = c("MPNStorage").getFBStorageState());
                    c("MPNStorage").isAccessTokenExpired() && (c("MPNStorage").clearFBStorageState(), W = c("MPNStorage").getDefaultOptimisticStorageState(!1, G), c("MPNStorage").setThirdPartyStorageState(W));
                    if ($ != null && $.requestID != null && $.requestID != "") {
                        Z = $.requestID;
                        ($.rdr === d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION || $.rdr === d("MPNConstants").MPNRedirect.ITP_CONTINUE_SESSION) && (V = Z, c("MPNStorage").initialize(p, b, Z))
                    }
                    na = c("MPNStorage").setInitialStateIfNecessary(!1, Y, G);
                    $ = c("MPNStorage").getFBStorageState();
                    if ($ != null) {
                        X = $.chatState != d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED;
                        oa = $.accessToken;
                        pa = $.userID;
                        Y = $.visibility;
                        W = babelHelpers["extends"]({}, W, {
                            path: $.currentPath,
                            chatState: $.chatState,
                            visibility: $.visibility,
                            showUpgradePrompt: (Z = $.showUpgradePrompt) != null ? Z : d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN
                        });
                        c("MPNStorage").setThirdPartyStorageState(W)
                    }
                }
                d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(function(a, b) {
                    d("MPNIdentity").MPNIdentity.currentUserState() != d("MPNIdentity").MPNIdentityState.GUEST && (c("MPNStorage").clearFBStorageState(), c("MPNStorage").clearThirdPartyStorageState()), c("MPNXDMessageManager").reloadPlugin()
                });
                $ = {
                    alignment: a,
                    pageID: b,
                    pageName: z,
                    pagePassesSentryTest: h,
                    hasMessagingPermission: j,
                    isMuted: k,
                    isPageBlocked: l,
                    pageProfilePictureUri: A,
                    viewerProfilePicureUri: B,
                    threadCSSColor: J,
                    entryPointIconSVG: K,
                    entryPointIconEnum: L,
                    entryPointLabel: M,
                    pageResponsiveness: C,
                    isInstantlyResponsive: D,
                    isComposerDisabled: x,
                    hasActiveAutomation: !1,
                    hasPersistentMenu: y,
                    greetingDialogDisplay: G,
                    loggedInGreeting: H,
                    loggedOutGreeting: I,
                    refParam: E,
                    refererUri: o,
                    originDomain: p,
                    appSwitchUri: r,
                    upgradeAppSwitchUri: s,
                    locale: N,
                    isBusinessActive: m,
                    icebreakers: O,
                    icebreakerCtas: P,
                    pageVerifiedStatus: F,
                    initialRequestUri: c("URI").getRequestURI(),
                    requestID: V,
                    bottomSpacing: aa,
                    sideSpacing: ba,
                    chatStarted: X,
                    accessToken: oa,
                    guestID: pa,
                    optimisticStorageState: W,
                    soundURLs: q,
                    isInitialLoad: na,
                    hasGuestMode: t,
                    showUpgradeUpsellPrompt: u,
                    pluginMountTime: c("performanceAbsoluteNow")(),
                    serverTime: f,
                    clientRequestTime: g,
                    upgradeUpsellPrompt: d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN,
                    messageCount: null,
                    cookieAccessDenied: !1,
                    hasAutomation: v && !Q,
                    isPageInEU: Q,
                    threadExists: ca,
                    isLoadedByFacade: da,
                    isLightswitchEnabledForGuest: !1,
                    loggedInAccessToken: ea,
                    isSanitizedEpd3pdRequest: S,
                    shouldShowEntryPointCustomization: R,
                    shouldShowSizingCustomization: fa,
                    shouldShowNewWelcomeView: ga,
                    shouldShowPresence: ha,
                    entryPointSize: ia,
                    windowSize: T,
                    awayHoursEnabled: ja,
                    awayGreeting: ka,
                    isPageAway: la,
                    nextAvailableTimestamp: ma
                };
                c("MPNXDMessageManager").setShouldShowEntryPointCustomization(R);
                Z = d("MessagingPluginPathUtils").getDesktopDisplayPathFromStoredState(U, W, S, c("MPNStorage").getFBStorageState());
                if (Z === d("MessagingPluginPathUtils").MPN_PATH.THREAD && W.chatState === d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED) {
                    V = c("MPNStorage").getDefaultPath(!1, Y, G);
                    Z = d("MessagingPluginPathUtils").MessagingPluginPathUtils.toMobilePath(V);
                    c("MPNXDMessageManager").storeThirdPartyState(V)
                }(X = document.body) == null ? void 0 : (U = X.classList) == null ? void 0 : U.add("_a2w-");
                (W = document.body) == null ? void 0 : (Y = W.classList) == null ? void 0 : Y.add("_95ry");
                V = T === "compact";
                c("MPNStorage").setWindowSizeMode(V);
                V && ((X = document.body) == null ? void 0 : (U = X.classList) == null ? void 0 : U.add("_a3u7"));
                d("ReactDOM").render(i.jsx(c("LiveChatPluginErrorBoundary.react"), {
                    pageID: b,
                    children: i.jsx(c("CometBlueBridgeKeyCommandListener.react"), {
                        children: i.jsx(c("MessagingPluginStateProvider"), {
                            initialState: $,
                            children: i.jsx(c("MPNDesktopWrapper.react"), {
                                path: Z,
                                redirectCommand: c("MPNStorage").getRedirectCommand()
                            })
                        })
                    })
                }), e)
            })
        };
        return a
    }();
    g["default"] = a
}), 98);