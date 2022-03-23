if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("BaseListCell.react", ["BaseRow.react", "BaseRowItem.react", "BaseView.react", "Locale", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            bottomAddOn: {
                display: "j83agx80",
                flexDirection: "cbu4d94t"
            },
            bottomAddOnResponsive: {
                flexGrow: "buofh1pr"
            },
            item: {
                display: "j83agx80"
            },
            root: {
                alignItems: "gs1a9yip",
                display: "j83agx80",
                flexBasis: "rj1gh0hx",
                flexDirection: "cbu4d94t",
                flexGrow: "buofh1pr",
                flexShrink: "g5gj957u",
                justifyContent: "taijpn5t",
                minWidth: "hpfvmrgz"
            },
            textContent: {
                flexGrow: "buofh1pr"
            },
            textContentContainer: {
                flexBasis: "mg4g778l"
            },
            textWithResponsiveAddOnBottom: {
                flexBasis: "hkbzh7o3",
                maxWidth: "d2edcug0",
                minWidth: "ptc67a42"
            }
        };

    function a(a, b) {
        var d = a.addOnBottom,
            e = a.addOnBottomResponsive;
        e = e === void 0 ? !1 : e;
        var f = a.addOnEnd,
            g = a.addOnEndVerticalAlign,
            j = a.addOnFooter,
            k = a.addOnStart,
            l = a.addOnStartVerticalAlign,
            m = a.addOnStartXStyle,
            n = a["aria-hidden"];
        n = n === void 0 ? !1 : n;
        var o = a.content,
            p = a.contentId,
            q = a.nestedSpacing,
            r = a.testid;
        r = a.verticalAlign;
        r = r === void 0 ? "center" : r;
        a = a.xstyle;
        var s = c("Locale").isRTL();
        s = q != null ? s ? {
            marginRight: q
        } : {
            marginLeft: q
        } : void 0;
        return h.jsxs(c("BaseView.react"), {
            "aria-hidden": n ? !0 : void 0,
            ref: b,
            testid: void 0,
            xstyle: [i.root, a],
            children: [h.jsxs(c("BaseRow.react"), {
                verticalAlign: r,
                children: [s != null && h.jsx(c("BaseRowItem.react"), {
                    children: h.jsx("div", {
                        style: s
                    })
                }), k != null && h.jsx(c("BaseRowItem.react"), {
                    verticalAlign: l,
                    xstyle: [i.item, m],
                    children: k
                }), h.jsxs(c("BaseRow.react"), {
                    expanding: !0,
                    verticalAlign: "center",
                    wrap: "forward",
                    xstyle: i.textContentContainer,
                    children: [h.jsx(c("BaseRowItem.react"), {
                        xstyle: [i.textContent, e && i.textWithResponsiveAddOnBottom],
                        children: p != null ? h.jsx("div", {
                            "aria-hidden": !0,
                            id: p,
                            children: o
                        }) : o
                    }), d != null && h.jsx(c("BaseRowItem.react"), {
                        xstyle: [i.bottomAddOn, e && i.bottomAddOnResponsive],
                        children: d
                    })]
                }), f != null && h.jsx(c("BaseRowItem.react"), {
                    verticalAlign: g,
                    xstyle: i.item,
                    children: f
                })]
            }), j != null && j]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("CometControlledUserBlockingDialog.react", ["BaseModal.react", "CometCardedDialog.react", "CometCardedDialogLoadingState.react", "CometPlaceholder.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.children,
            d = a.disableClosingWithMask,
            e = a.labelledBy,
            f = a.onDismiss;
        f = f === void 0 ? function() {} : f;
        var g = a.title,
            i = a.withCloseButton;
        a = a.size;
        a = a === void 0 ? "small" : a;
        return h.jsx(c("BaseModal.react"), {
            blockKeyCommands: !0,
            stackingBehavior: "above-everything",
            children: h.jsx(c("CometPlaceholder.react"), {
                fallback: h.jsx(c("CometCardedDialogLoadingState.react"), {
                    onClose: f
                }),
                children: h.jsx(c("CometCardedDialog.react"), {
                    disableClosingWithMask: d,
                    labelledBy: e,
                    onClose: f,
                    size: a,
                    title: g,
                    withCloseButton: i,
                    children: b
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("MPNMobileWelcomePageBottomButtons.react", ["cx", "fbt", "LineClamp.react", "LiveChatPluginConstants", "LiveChatPluginFbts", "LiveChatPluginLoggerUtil", "MPNConstants", "MPNIdentity", "MPNLocalState", "MPNMessengerIconSVG.react", "MPNNavigation", "MPNStorage", "MPNXDMessageManager", "MessagingPluginContext", "MessagingPluginThreadActions", "PopupWindow", "ShimButton.react", "XChatPluginIncognitoLoginPopupController", "cr:878", "gkx", "performanceAbsoluteNow", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(e, a);

        function e() {
            var e, f;
            for (var g = arguments.length, h = new Array(g), i = 0; i < g; i++) h[i] = arguments[i];
            return (e = f = a.call.apply(a, [this].concat(h)) || this, f.$3 = function() {
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
            }, f.$5 = function() {
                var a = f.context.state,
                    b = a.shouldShowMobileInWebChat;
                a = a.mobileOptin;
                if (!b || a === "app_switch") {
                    (b = f.props.ActionDelegate) == null ? void 0 : b.onAppSwitchToMessenger()
                } else f.$7()
            }, f.$4 = function() {
                var a = f.context,
                    e = a.state;
                a = a.dispatchAction;
                e = e.pageID;
                a({
                    type: "UPDATE_CONTINUE_CLICK_TIME",
                    continueClickTime: c("performanceAbsoluteNow")()
                });
                b("cr:878") == null ? void 0 : b("cr:878").logChatPluginThreadLoadModuleStart();
                d("MPNIdentity").MPNIdentity.performUIAction(f.$8, function() {
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
                    f.$8()
                });
                d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, e, "welcome_page_with_guest_option", {
                    button_name: "continue_as_guest"
                })
            }, f.$8 = function() {
                var a = f.context.state.isSanitizedEpd3pdRequest;
                if (a) {
                    a = c("MPNStorage").getFBStorageState();
                    a != null && c("MPNStorage").setFBStorageState(babelHelpers["extends"]({}, a, {
                        rdr: d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION
                    }));
                    c("MPNXDMessageManager").reloadPlugin(!0)
                } else d("MPNNavigation").navigateToRoute(f.props.history, d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW), f.props.ActionDelegate && f.props.ActionDelegate.onContinueAsGuest(function() {})
            }, e) || babelHelpers.assertThisInitialized(f)
        }
        var f = e.prototype;
        f.render = function() {
            var a = this.context.state.hasGuestMode;
            return this.props.useITPContinueButton ? this.$1() : this.$2(a)
        };
        f.$1 = function() {
            var a = this.context.state.threadCSSColor;
            return j.jsx("div", {
                className: "_a2zl",
                children: j.jsx(c("ShimButton.react"), {
                    onClick: this.$3,
                    className: "_a2zm",
                    style: {
                        backgroundColor: a
                    },
                    children: j.jsx(c("LineClamp.react"), {
                        className: "continueText",
                        lines: 1,
                        children: i._( /*FBT_CALL*/ "Continue" /*FBT_CALL*/ )
                    })
                })
            })
        };
        f.$2 = function(a) {
            var b = this.context.state,
                d = b.threadCSSColor,
                e = b.shouldShowNewWelcomeView;
            b = b.shouldShowEntryPointCustomization;
            var f = c("gkx")("1189683");
            f = !a && !f;
            a = a ? j.jsx(c("ShimButton.react"), {
                "data-testid": void 0,
                onClick: this.$4,
                className: "_a2zk",
                children: j.jsx(c("LineClamp.react"), {
                    lines: 1,
                    children: i._( /*FBT_CALL*/ "Continue as guest" /*FBT_CALL*/ )
                })
            }) : null;
            return j.jsxs("div", {
                className: (f ? "" : "_a2zl") + (f ? " _a2zn" : ""),
                children: [j.jsxs(c("ShimButton.react"), {
                    onClick: this.$5,
                    className: "_a2zm",
                    style: {
                        backgroundColor: d
                    },
                    children: [b && !e ? null : j.jsx("div", {
                        className: "loggedInIconContainer",
                        children: j.jsx(c("MPNMessengerIconSVG.react"), {})
                    }), j.jsx(c("LineClamp.react"), {
                        className: "continueText",
                        lines: 1,
                        children: this.$6()
                    })]
                }), a]
            })
        };
        f.$6 = function() {
            var a, b = d("MPNIdentity").MPNIdentity.currentUserState() == d("MPNIdentity").MPNIdentityState.FB;
            a = (a = d("MPNIdentity").MPNIdentity.currentUser()) == null ? void 0 : a.shortName;
            var c = this.context.state,
                e = c.shouldShowMobileInWebChat,
                f = c.mobileOptin;
            c = c.shouldShowNewWelcomeView;
            if (!e || f === "app_switch") return i._( /*FBT_CALL*/ "Chat in Messenger" /*FBT_CALL*/ );
            if (!b) return c ? d("LiveChatPluginFbts").LOGIN_PAGE_USE_MESSENGER_BUTTON_TEXT : i._( /*FBT_CALL*/ "Log into Messenger" /*FBT_CALL*/ );
            return a !== null ? i._( /*FBT_CALL*/ "Continue as {first name}" /*FBT_CALL*/ , [i._param("first name", a)]) : i._( /*FBT_CALL*/ "Continue" /*FBT_CALL*/ )
        };
        f.$7 = function() {
            var a = this,
                b = this.context,
                e = b.state;
            b = b.dispatchAction;
            var f = e.pageID,
                g = e.hasGuestMode,
                h = e.pagePassesSentryTest,
                i = e.hasMessagingPermission,
                j = e.isSanitizedEpd3pdRequest,
                k = e.shouldShowMobileInWebChat;
            e = e.mobileOptin;
            var l = d("MPNIdentity").MPNIdentity.currentUserState(),
                m = d("MPNIdentity").MPNIdentity.currentUserID();
            b({
                type: "UPDATE_CONTINUE_CLICK_TIME",
                continueClickTime: c("performanceAbsoluteNow")()
            });
            if (l == d("MPNIdentity").MPNIdentityState.FB && m != null) {
                if (!h && !i) {
                    (b = this.props.ActionDelegate) == null ? void 0 : b.openThreadWithInterstitial(function() {
                        var b;
                        (b = a.props.ActionDelegate) == null ? void 0 : b.openThreadWithCurrentFBUser();
                        d("MPNNavigation").navigateToRoute(a.props.history, d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW)
                    });
                    d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, f, g ? "welcome_page_with_guest_option" : "welcome_page", {
                        button_name: "continue_as"
                    });
                    return
                }
                d("MPNNavigation").navigateToRoute(this.props.history, d("MPNLocalState").MPNLocalStatePath.THREAD_VIEW);
                d("MessagingPluginThreadActions").openThreadWithCurrentFBUser(this.context);
                d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, f, g ? "welcome_page_with_guest_option" : "welcome_page", {
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
                d("MessagingPluginThreadActions").presentPluginOptIn(a.context)
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
                d("MessagingPluginThreadActions").presentPluginOptIn(a.context)
            }, function() {
                var a = c("XChatPluginIncognitoLoginPopupController").getURIBuilder().getURI();
                d("PopupWindow").open(a.toString(), 420, 450)
            }, k && e === "chat_tab");
            d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, f, g ? "welcome_page_with_guest_option" : "welcome_page", {
                button_name: "log_in_messenger"
            })
        };
        return e
    }(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MPNMobileLoginModal.react", ["cx", "BasePopoverTrigger.react", "LineClamp.react", "LiveChatPluginFbts", "MPNIdentity", "MPNMobileWelcomePageBottomButtons.react", "MPNPrivacyText.react", "MPNSwitchAccountActionButton.react", "MPNSwitchAccountDropDownMenu.react", "MessagingPluginContext", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useContext;

    function a(a) {
        var b = a.useITPContinueButton,
            e = j(c("MessagingPluginContext"));
        e = e.state;
        var f = e.shouldShowMobileInWebChat;
        e = e.mobileOptin;
        var g = d("MPNIdentity").MPNIdentity.currentUserState() == d("MPNIdentity").MPNIdentityState.FB;
        return i.jsxs("div", {
            className: "_a6w9",
            children: [i.jsxs("div", {
                className: "_a6zi",
                children: [i.jsx("div", {
                    className: "_a6zj"
                }), i.jsx("div", {
                    className: "_a6zl",
                    children: i.jsx(c("LineClamp.react"), {
                        lines: 1,
                        children: d("LiveChatPluginFbts").LOGIN_PAGE_TITLE
                    })
                }), i.jsx("div", {
                    className: "_9dzn _a6zm",
                    children: g && f === !0 && e === "chat_tab" ? i.jsx(c("BasePopoverTrigger.react"), {
                        align: "middle",
                        popover: c("MPNSwitchAccountDropDownMenu.react"),
                        popoverProps: {},
                        children: function(a, b) {
                            return i.jsx("div", {
                                ref: a,
                                children: i.jsx(c("MPNSwitchAccountActionButton.react"), {
                                    onPress: b
                                })
                            })
                        }
                    }) : null
                })]
            }), i.jsx(c("MPNMobileWelcomePageBottomButtons.react"), babelHelpers["extends"]({}, a)), i.jsx(c("MPNPrivacyText.react"), {
                useITPContinueButton: b
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("RequestSeenFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744262");
    c = b("FalcoLoggerInternal").create("request_seen", a);
    e.exports = c
}), null);
__d("QuestionPollTypeJSEnum", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NON_POLL: 0,
        CHOOSE_ONE: 1,
        CHOOSE_MULTIPLE: 2,
        RANKED: 3,
        GIF_CHOOSE_ONE: 4,
        IMAGE_CHOOSE_ONE: 5,
        VISUAL_TEXT_CHOOSE_ONE: 6,
        IMAGE_CHOOSE_MULTIPLE: 7,
        PAGE_CHOOSE_MULTIPLE: 8,
        MOST_LIKELY_TO: 9,
        MEDIA_CHOOSE_ONE: 10
    });
    f["default"] = a
}), 66);
__d("GroupFeedType.facebook", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    a = b("$InternalEnum").Mirrored(["BUY_AND_SELL", "BUY_AND_SELL_DISCUSSION", "BUY_AND_SELL_MANAGE_LISTINGS", "DISCUSSION", "QUESTIONS", "SUBGROUP", "WORK_GARDEN"]);
    c = a;
    f["default"] = c
}), 66);
__d("ServiceWorkerLoginAndLogout", ["ClientServiceWorkerMessage"], (function(a, b, c, d, e, f) {
    function g(a) {
        new(b("ClientServiceWorkerMessage"))(a, null).sendViaController()
    }
    a = {
        login: function() {
            g("login")
        },
        logout: function() {
            g("logout")
        }
    };
    c = a;
    f["default"] = c
}), 66);
__d("setByPath", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, c) {
        a = a;
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            if (d === b.length - 1) {
                a[e] = c;
                return
            }!Object.prototype.hasOwnProperty.call(a, e) ? a[e] = {} : a[e] == null ? a[e] = {} : Array.isArray(a[e]) || Object.prototype.toString.call(a[e]) === "[object Object]" || g(0, 1041, a[e]);
            a = a[e]
        }
    }
    f["default"] = a
}), 66);
__d("XEventsPermalinkController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/events/{?location_slug}/{?name_slug}/{event_id}/{?child_event_id}/", {
        privacy_mutation_token: {
            type: "String"
        },
        event_id: {
            type: "FBID",
            required: !0
        },
        location_slug: {
            type: "String"
        },
        name_slug: {
            type: "String"
        },
        event_time_id: {
            type: "FBID"
        },
        acontext: {
            type: "String"
        },
        active_tab: {
            type: "Enum",
            defaultValue: "about",
            enumType: 1
        },
        end_cursor: {
            type: "String"
        },
        filter: {
            type: "String"
        },
        multi_permalinks: {
            type: "String"
        },
        post_id: {
            type: "Int"
        },
        view: {
            type: "Enum",
            enumType: 1
        },
        ticket_order_id: {
            type: "FBID"
        },
        ref_page_id: {
            type: "FBID"
        },
        ti: {
            type: "String"
        },
        after_load_action: {
            type: "Enum",
            enumType: 0
        },
        child_event_id: {
            type: "FBID"
        }
    })
}), null);