if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("ChatPluginMobileCufee.react", ["cx", "fbt", "ClickableArea.react", "JSResource", "LiveChatPluginFbts", "MPNConstants", "MessagingPluginContext", "MessengerSpinner.react", "TetraText.react", "lazyLoadComponent", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = d("react").useContext,
        l = c("lazyLoadComponent")(c("JSResource")("ChatPluginCufeeModal.react").__setRef("ChatPluginMobileCufee.react"));

    function a(a) {
        var b = a.pageName,
            e = a.feedbackQuestion,
            g = a.businessPrivacy,
            h = a.formState;
        a = a.formID;
        var n = k(c("MessagingPluginContext")),
            o = n.dispatchAction;
        n = n.state;
        n = n.optimisticStorageState.showCufeeModal === d("MPNConstants").MPNVisibility.NOT_HIDDEN;
        return j.jsxs("div", {
            children: [j.jsx("div", {
                role: "none",
                className: n ? "_92bp" : "_9wh-",
                onClick: p
            }), j.jsx("div", {
                className: n ? "_908c" : "_9jhn",
                role: "none",
                children: j.jsxs("div", {
                    className: "_9wjx",
                    children: [j.jsx("div", {
                        className: "_9xpf"
                    }), j.jsx(q, {}), h === "DEFAULT" ? j.jsx(j.Suspense, {
                        fallback: j.jsx("div", {
                            style: {
                                margin: "auto"
                            },
                            children: j.jsx(c("MessengerSpinner.react"), {
                                color: "blue",
                                size: c("MessengerSpinner.react").large_size
                            })
                        }),
                        children: j.jsx(l, {
                            pageName: b,
                            feedbackQuestion: e,
                            businessPrivacy: g,
                            formID: a,
                            onCloseModalClick: p
                        })
                    }) : j.jsx(m, {}), j.jsx("div", {
                        className: "_9xpg"
                    })]
                })
            })]
        });

        function p() {
            o({
                type: "SHOW_CUFEE_MODAL",
                showCufeeModal: d("MPNConstants").MPNVisibility.HIDDEN
            })
        }

        function q() {
            return j.jsx(c("ClickableArea.react"), {
                onClick: p,
                children: j.jsx("div", {
                    style: {
                        marginBottom: 11,
                        marginTop: 11
                    },
                    children: j.jsx(c("TetraText.react"), {
                        type: "body2",
                        children: i._( /*FBT_CALL*/ "Cancel" /*FBT_CALL*/ )
                    })
                })
            })
        }
        q.displayName = q.name + " [from " + f.id + "]"
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function m() {
        return j.jsx("div", {
            className: "_9who _9wjy",
            children: d("LiveChatPluginFbts").CUFEE_EXPIRED_FORM
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("MPNMobileBadgeableMessengerIcon.react", ["ChatPluginEntryPoint.react", "LiveChatPluginMessengerIconSVGWithColor.react", "MessagingPluginContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d.render = function() {
            return h.jsx("div", {
                children: this.props.shouldShowEntryPointCustomization ? h.jsx(c("ChatPluginEntryPoint.react"), {
                    entryPointIcon: this.props.entryPointIcon,
                    entryPointLabel: this.props.entryPointLabel,
                    entryPointSize: this.props.entryPointSize,
                    threadColor: this.props.threadColor,
                    alignment: this.props.alignment
                }) : h.jsx(c("LiveChatPluginMessengerIconSVGWithColor.react"), {
                    threadColor: this.props.threadColor,
                    entryPointSize: this.props.entryPointSize
                })
            })
        };
        return b
    }(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MPNMobileBotMenuDialog.react", ["cx", "ChatPluginTestId", "LiveChatPluginLoggerUtil", "MPNDropdownMenu", "MPNDropdownMenuAlignment", "MPNDropdownMenuItem", "MPNIdentity", "MercuryIDs", "MessagingPluginContext", "URI", "react"], (function(a, b, c, d, e, f, g, h) {
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
                className: "_a2z_",
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
                    d("LiveChatPluginLoggerUtil").logActionFromNewUI("in_thread_action", b, e, d("MPNIdentity").MPNIdentity.currentUserState() === d("MPNIdentity").MPNIdentityState.FB ? "logged_in_chat_tab" : "guest_chat_tab", {
                        action_type: "customer_chat_bot_menu_url_redirect_clicked"
                    })
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
                    var h = c.context.state.messageStore;
                    h = h.sendQueue;
                    if (!h) return;
                    h.enqueueAndSend(a.title || "", !1, g, h.makePlatformTokenForPostbackCTA(a.id || ""))
                }
                d("LiveChatPluginLoggerUtil").logActionFromNewUI("in_thread_action", e, f, b === d("MPNIdentity").MPNIdentityState.FB ? "logged_in_chat_tab" : "guest_chat_tab", {
                    action_type: "customer_chat_bot_menu_postback_clicked"
                })
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
__d("MPNMobileBotMenuButton.react", ["cx", "fbt", "AsyncRequest", "BasePopoverTrigger.react", "CometPressable.react", "LiveChatPluginConstants", "LiveChatPluginGuestPersistentMenuQuery", "LiveChatPluginLoggerUtil", "LiveChatPluginSendButtonSVG.react", "MPNBotMenuButtonSVG.react", "MPNIdentity", "MPNLocalState", "MPNMobileBotMenuDialog.react", "MPNStorage", "MessagingPluginContext", "XMessengerBotsMenuController", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
                menuItems: null,
                isMenuOpen: !1
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
                e = b.isComposerDisabled,
                f = b.hasActiveAutomation,
                g = b.hasPersistentMenu,
                h = b.threadCSSColor;
            return !e && (f || !g || !this.state.menuItems || this.state.menuItems.length === 0) ? j.jsx("div", {
                className: " _64mk _64ml _8pz4",
                children: j.jsx(c("LiveChatPluginSendButtonSVG.react"), {
                    threadColor: d("LiveChatPluginConstants").GUEST_SEND_BUTTON_COLOR_EMPTY_INPUT
                })
            }) : j.jsx(c("BasePopoverTrigger.react"), {
                position: "above",
                disableAutoFlip: !0,
                popover: c("MPNMobileBotMenuDialog.react"),
                popoverProps: {
                    menuItems: this.state.menuItems
                },
                children: function(b, d) {
                    return j.jsx("div", {
                        ref: b,
                        children: j.jsx("div", {
                            className: "_95e-",
                            children: j.jsx(c("CometPressable.react"), {
                                overlayRadius: 50,
                                "aria-label": i._( /*FBT_CALL*/ "Persistent menu button" /*FBT_CALL*/ ),
                                onPress: function() {
                                    a.$4(), d()
                                },
                                children: j.jsx(c("MPNBotMenuButtonSVG.react"), {
                                    threadColor: h
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
            this.$3(this.state.isMenuOpen), this.props.onClick(), this.setState(function(a) {
                return {
                    isMenuOpen: !a.isMenuOpen
                }
            })
        };
        e.$3 = function(a) {
            a = a ? "customer_chat_bot_menu_closed" : "customer_chat_bot_menu_opened";
            var b = this.context.state.pageID,
                c = d("MPNIdentity").MPNIdentity.currentUserID();
            d("LiveChatPluginLoggerUtil").logActionFromNewUI("in_thread_action", c, b, d("MPNIdentity").MPNIdentity.currentUserState() === d("MPNIdentity").MPNIdentityState.FB ? "logged_in_chat_tab" : "guest_chat_tab", {
                action_type: a
            })
        };
        return b
    }(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MPNMobileGuestAttachmentButton.react", ["cx", "MPNPaperclipIconSVG.react", "MessagingPluginContext", "ShimButton.react", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d.render = function() {
            return i.jsx(c("ShimButton.react"), {
                "data-testid": void 0,
                className: "_99jy",
                onClick: this.props.onClick,
                children: i.jsx(c("MPNPaperclipIconSVG.react"), {
                    color: this.props.color
                })
            })
        };
        return b
    }(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MPNMobileGuestUpgradeUpsellPrompt.react", ["Arbiter", "LiveChatPluginLoggerUtil", "MPNSharedGuestUpgradePromptV2.react", "MessagingPluginContext", "react"], (function(a, b, c, d, e, f, g) {
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
                history: this.props.history,
                isMobile: !0
            })
        };
        return b
    }(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MPNMobileMessageComposer.react", ["cx", "fbt", "AbstractTextInput.react", "JSResource", "Keys", "LiveChatPluginAttachmentUploadError", "LiveChatPluginLoggerUtil", "LiveChatPluginMessageComposerAttachmentShelf.react", "LiveChatPluginSendButtonSVG.react", "MPNConstants", "MPNIdentity", "MPNMobileBotMenuButton.react", "MPNMobileGuestAttachmentButton.react", "MPNPaperclipIconSVG.react", "MPNStorage", "MercuryIDs", "MercuryMessageActions", "MercuryMessageObject", "MessagingPluginContext", "ShimButton.react", "lazyLoadComponent", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = c("lazyLoadComponent")(c("JSResource")("MPNAttachmentInput.react").__setRef("MPNMobileMessageComposer.react"));
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
            f.$19 = function(a) {
                f.props.onChange(), f.setState({
                    error: c("LiveChatPluginAttachmentUploadError").NO_ERROR,
                    inputValue: a.target.value
                })
            };
            f.$20 = function(a) {
                a.keyCode === c("Keys").RETURN && (a.preventDefault(), f.$18())
            };
            f.$18 = function() {
                var a, b = d("MPNIdentity").MPNIdentity.currentUserState(),
                    c = f.context.state;
                a = (a = c.messageStore) == null ? void 0 : a.sendQueue;
                var e = a == null ? void 0 : a.prepareAttachmentsForMessage(f.$1, f.$3, f.$4, f.$10),
                    g = f.state.inputValue.trim();
                if (!(a == null ? void 0 : a.canQueueMessage(g, f.state.uploadingAttachments.size !== 0, e))) return;
                a.enqueueAndSend(g, b === d("MPNIdentity").MPNIdentityState.FB, c.refererUri, null, e);
                f.$21();
                f.setState({
                    inputValue: ""
                });
                a = b === d("MPNIdentity").MPNIdentityState.FB ? d("MPNIdentity").MPNIdentity.currentUserID() : c.guestID;
                d("LiveChatPluginLoggerUtil").logActionUsingFalco((g = a) != null ? g : "", c.pageID, b === d("MPNIdentity").MPNIdentityState.FB ? "logged_in_chat_tab" : "guest_chat_tab", "message_send");
                f.context.state.hasActiveAutomation && d("LiveChatPluginLoggerUtil").logActionFromNewUI("automation_freeform_message_sent", d("MPNIdentity").MPNIdentity.currentUserID(), f.context.state.pageID, b === d("MPNIdentity").MPNIdentityState.FB ? "logged_in_chat_tab" : "guest_chat_tab")
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
        e.render = function() {
            return j.jsxs("div", {
                className: this.context.state.isComposerDisabled ? "_664i" : "",
                children: [j.jsx(c("LiveChatPluginMessageComposerAttachmentShelf.react"), {
                    attachments: this.state.attachmentsDataMap,
                    error: this.state.error,
                    removeAttachment: this.$11,
                    threadColor: this.context.state.threadColor,
                    uploadingAttachments: this.state.uploadingAttachments
                }), j.jsxs("div", {
                    className: "_99ks",
                    children: [this.$12(), this.$13(), this.$14()]
                })]
            })
        };
        e.$12 = function() {
            var a = this,
                b = this.context,
                e = b.dispatchAction;
            b = b.state;
            var f = d("MPNIdentity").MPNIdentity.currentUserID();
            return f == null ? null : !b.shouldShowMobileInWebChat || d("MPNIdentity").MPNIdentity.currentUserState() === d("MPNIdentity").MPNIdentityState.GUEST ? this.context.state.showUpgradeUpsellPrompt && j.jsx(c("MPNMobileGuestAttachmentButton.react"), {
                color: this.context.state.threadCSSColor,
                onClick: function() {
                    c("MPNStorage").setShowUpgradePrompt(d("MPNConstants").MPNUpgradePrompt.ATTACHMENT_UPSELL), e({
                        type: "UPDATE_UPGRADE_UPSELL_PROMPT",
                        upgradeUpsellPrompt: d("MPNConstants").MPNUpgradePrompt.ATTACHMENT_UPSELL
                    })
                }
            }) : j.jsx(j.Suspense, {
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
                    viewerID: f,
                    isMobile: !0
                })
            })
        };
        e.$14 = function() {
            var a = this.context.state,
                b = a.isComposerDisabled;
            a = a.threadCSSColor;
            var d = this.state.inputValue.trim();
            d = d.length === 0 && this.state.attachmentsDataMap.size === 0;
            return d || b ? this.$17() : j.jsx(c("ShimButton.react"), {
                "aria-label": i._( /*FBT_CALL*/ "Send button" /*FBT_CALL*/ ),
                className: "_4bqf _64mk _64ml",
                "data-testid": void 0,
                onClick: this.$18,
                children: j.jsx(c("LiveChatPluginSendButtonSVG.react"), {
                    threadColor: a
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
                className: "_92dv",
                children: j.jsx(c("AbstractTextInput.react"), {
                    "data-testid": void 0,
                    onBlur: this.props.onBlur,
                    onChange: this.$19,
                    onClick: this.props.onClick,
                    onKeyDown: this.$20,
                    ref: function(b) {
                        a.$5 = b
                    },
                    placeholder: i._( /*FBT_CALL*/ "Send a message\u2026" /*FBT_CALL*/ ).toString(),
                    value: this.state.inputValue
                })
            })
        };
        e.$17 = function() {
            return j.jsx(c("MPNMobileBotMenuButton.react"), {
                onClick: this.props.onClick
            })
        };
        e.$21 = function() {
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
__d("LiveChatPluginCloseButtonSVG.react", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            return h.jsx("svg", {
                width: "10px",
                height: "10px",
                viewBox: "0 0 14 14",
                children: h.jsx("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: h.jsx("g", {
                        transform: "translate(-419.000000, -413.000000)",
                        children: h.jsx("g", {
                            transform: "translate(164.000000, 396.000000)",
                            children: h.jsx("g", {
                                children: h.jsx("g", {
                                    transform: "translate(250.000000, 12.000000)",
                                    children: h.jsx("g", {
                                        children: h.jsxs("g", {
                                            children: [h.jsx("rect", {
                                                opacity: "0.200000003",
                                                x: "0",
                                                y: "0",
                                                width: "24",
                                                height: "24"
                                            }), h.jsxs("g", {
                                                transform: "translate(4.000000, 4.000000)",
                                                fill: "#000000",
                                                children: [h.jsx("rect", {
                                                    transform: "translate(8.000000, 8.000000) rotate(45.000000) translate(-8.000000, -8.000000) ",
                                                    x: "7",
                                                    y: "-1",
                                                    width: "2",
                                                    height: "18",
                                                    rx: "1"
                                                }), h.jsx("rect", {
                                                    transform: "translate(8.000000, 8.000000) rotate(135.000000) translate(-8.000000, -8.000000) ",
                                                    x: "7",
                                                    y: "-1",
                                                    width: "2",
                                                    height: "18",
                                                    rx: "1"
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        };
        return b
    }(h.PureComponent);
    g["default"] = a
}), 98);
__d("MessagingPluginMobileInformationMenu.react", ["cx", "fbt", "LiveChatPluginLoggerUtil", "MPNDropdownMenu", "MPNDropdownMenuItem", "MessagingPluginContext", "URI", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = d("react").useContext;

    function a(a) {
        a = k(c("MessagingPluginContext"));
        a = a.state;
        var b = a.pageID,
            e = a.hasGuestMode;
        return j.jsxs(c("MPNDropdownMenu"), {
            className: "_a2-e",
            children: [j.jsx("div", {
                "data-testid": void 0,
                children: j.jsx(c("MPNDropdownMenuItem"), {
                    onClick: function() {
                        d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, b, e ? "welcome_page_with_guest_option" : "welcome_page", {
                            button_name: "visit_facebook_page_menu_item"
                        }), c("URI").goURIOnNewWindow("https://www.facebook.com/" + b)
                    },
                    primaryText: i._( /*FBT_CALL*/ "Visit Facebook Page" /*FBT_CALL*/ )
                })
            }), j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                onClick: function() {
                    d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, b, e ? "welcome_page_with_guest_option" : "welcome_page", {
                        button_name: "add_messenger_to_your_website_menu_item"
                    }), c("URI").goURIOnNewWindow("https://www.facebook.com/business/m/add-messenger-to-your-website")
                },
                primaryText: i._( /*FBT_CALL*/ "Add Messenger to your website" /*FBT_CALL*/ )
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("MessagingPluginMobileProfilePicture.react", ["cx", "Image.react", "MPNConstants", "MessagingPluginContext", "PrivacyTransparentOverlay.react", "react"], (function(a, b, c, d, e, f, g, h) {
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
                f = e.className,
                g = e.greenDotSize;
            e = e.disableStatusIndicator;
            return i.jsxs(c("PrivacyTransparentOverlay.react"), {
                children: [i.jsx(c("Image.react"), {
                    className: (f = f) != null ? f : "_a3jw",
                    src: (f = this.props.personaProfilePictureUri) != null ? f : b
                }), a && e !== !0 ? i.jsx("div", {
                    className: "_a2gl" + (g === d("MPNConstants").MPNGreenDotSize.LARGE ? " _a2gm" : "") + (g !== d("MPNConstants").MPNGreenDotSize.LARGE ? " _a2gn" : "")
                }) : null]
            })
        };
        return b
    }(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MPNMobileWelcomePageModal.react", ["cx", "fbt", "BasePopoverTrigger.react", "BootloaderResource", "ChatPluginMessengerAttribution.react", "FlexLayout.react", "JSResource", "LineClamp.react", "LiveChatPluginCloseButtonSVG.react", "LiveChatPluginFbts", "LiveChatPluginLoggerUtil", "MPNConstants", "MPNHeaderActionButton.react", "MPNIdentity", "MPNMobileLoginModal.react", "MPNMobileWelcomePageBottomButtons.react", "MPNMoreInfoButtonSVG.react", "MPNNewWelcomePageButtom.react", "MPNPrivacyText.react", "MPNSwitchAccountActionButton.react", "MPNSwitchAccountDropDownMenu.react", "MPNVerifiedBadge.react", "MessagingPluginContext", "MessagingPluginMobileInformationMenu.react", "MessagingPluginMobileProfilePicture.react", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (b = c = a.call.apply(a, [this].concat(f)) || this, c.state = {
                settingBackground: !1,
                shouldShowBackground: c.context.state.optimisticStorageState.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN,
                isCloseButtonActive: !0,
                isLoginPageBackgroundEnabled: !1
            }, c.$2 = function() {
                c.setState({
                    settingBackground: !0,
                    shouldShowBackground: !1
                });
                var a = c.props.ActionDelegate,
                    b = babelHelpers.assertThisInitialized(c);
                window.setTimeout(function() {
                    a && a.minimize(), b.setState({
                        settingBackground: !1
                    })
                }, 100);
                c.setState({
                    isCloseButtonActive: !1
                });
                window.setTimeout(function() {
                    c.setState({
                        isCloseButtonActive: !0
                    })
                }, 350)
            }, c.$4 = function(a) {
                a.stopPropagation()
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.componentDidMount = function() {
            var a = this.context.state.isSanitizedEpd3pdRequest;
            a || d("BootloaderResource").preload(c("JSResource")("MessagingPluginDialogBody.react").__setRef("MPNMobileWelcomePageModal.react"))
        };
        e.componentDidUpdate = function() {
            this.$1()
        };
        e.render = function() {
            return j.jsxs("div", {
                children: [j.jsx("div", {
                    role: "none",
                    className: this.state.shouldShowBackground ? "_92bp" : "_92bq",
                    onClick: this.$2
                }), this.$3()]
            })
        };
        e.$3 = function() {
            var a = this,
                b = this.context.state,
                e = b.hasGuestMode,
                f = b.pageID,
                g = b.pageVerifiedStatus,
                h = b.shouldShowMobileInWebChat;
            b = b.shouldShowNewWelcomeView;
            var k = d("MPNIdentity").MPNIdentity.currentUserState() == d("MPNIdentity").MPNIdentityState.FB,
                l = this.context.state,
                m = i._( /*FBT_CALL*/ "Chat with {pageName}" /*FBT_CALL*/ , [i._param("pageName", l.pageName)]),
                n = b ? j.jsx(c("BasePopoverTrigger.react"), {
                    popover: c("MPNMobileLoginModal.react"),
                    onVisibilityChange: function() {
                        a.setState({
                            isLoginPageBackgroundEnabled: !1
                        })
                    },
                    popoverProps: babelHelpers["extends"]({}, this.props),
                    position: "below",
                    disableAutoFlip: !0,
                    disableAutoAlign: !0,
                    align: "stretch",
                    children: function(b, d) {
                        return j.jsx("div", {
                            ref: b,
                            children: j.jsx(c("MPNNewWelcomePageButtom.react"), {
                                onClick: function() {
                                    d(), a.setState({
                                        isLoginPageBackgroundEnabled: !0
                                    })
                                }
                            })
                        })
                    }
                }) : j.jsxs("div", {
                    children: [j.jsx(c("MPNMobileWelcomePageBottomButtons.react"), babelHelpers["extends"]({}, this.props)), j.jsx(c("MPNPrivacyText.react"), {
                        useITPContinueButton: this.props.useITPContinueButton
                    })]
                });
            return j.jsx("div", {
                className: this.state.shouldShowBackground ? "_908c" : "_9jhn",
                onClick: this.$4,
                role: "none",
                children: j.jsx("div", {
                    className: b && this.state.isLoginPageBackgroundEnabled ? "_a6s5" : "",
                    children: j.jsxs("div", {
                        className: "welcomePageModalSheetContent",
                        children: [j.jsxs("div", {
                            className: "_a2zp",
                            children: [j.jsx(c("MessagingPluginMobileProfilePicture.react"), {
                                className: "_a3jx",
                                greenDotSize: d("MPNConstants").MPNGreenDotSize.LARGE
                            }), j.jsx("div", {
                                className: "_9dxh"
                            }), j.jsxs("div", {
                                className: "_9dzn",
                                children: [k && h && this.context.state.mobileOptin === "chat_tab" && !b ? j.jsx(c("BasePopoverTrigger.react"), {
                                    align: "middle",
                                    popover: c("MPNSwitchAccountDropDownMenu.react"),
                                    popoverProps: {},
                                    children: function(a, b) {
                                        return j.jsx("div", {
                                            ref: a,
                                            children: j.jsx(c("MPNSwitchAccountActionButton.react"), {
                                                onPress: b
                                            })
                                        })
                                    }
                                }) : null, j.jsx("div", {
                                    "data-testid": void 0,
                                    children: j.jsx(c("BasePopoverTrigger.react"), {
                                        popover: c("MessagingPluginMobileInformationMenu.react"),
                                        popoverProps: {},
                                        children: function(a, b) {
                                            return j.jsx("div", {
                                                ref: a,
                                                children: j.jsx(c("MPNHeaderActionButton.react"), {
                                                    label: i._( /*FBT_CALL*/ "More" /*FBT_CALL*/ ),
                                                    onPress: function() {
                                                        b(), d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, f, e ? "welcome_page_with_guest_option" : "welcome_page", {
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
                                    onPress: this.$2,
                                    testid: void 0,
                                    children: j.jsx(c("LiveChatPluginCloseButtonSVG.react"), {})
                                })]
                            })]
                        }), j.jsxs(c("FlexLayout.react"), {
                            align: "center",
                            className_DO_NOT_USE: "_a2zr",
                            children: [j.jsx(c("LineClamp.react"), {
                                lines: 1,
                                children: j.jsx("strong", {
                                    children: m
                                })
                            }), g && g !== "not_verified" ? j.jsx("span", {
                                className: "_a2m5",
                                children: j.jsx(c("MPNVerifiedBadge.react"), {
                                    verificationStatus: g,
                                    size: 18
                                })
                            }) : null]
                        }), j.jsx(c("LineClamp.react"), {
                            className: "_a2zs",
                            lines: 1,
                            children: l.pageResponsiveness
                        }), j.jsx(c("LineClamp.react"), {
                            className: "_a2zt" + (b ? " _a6zn" : ""),
                            lines: 3,
                            children: l.loggedInGreeting != null ? l.loggedInGreeting : d("LiveChatPluginFbts").DEFAULT_LOGGED_IN_GREETING_TEXT.toString()
                        }), n, j.jsx(c("ChatPluginMessengerAttribution.react"), {
                            shouldShowEntryPointCustomization: this.context.state.shouldShowEntryPointCustomization
                        })]
                    })
                })
            })
        };
        e.$1 = function() {
            this.context.state.optimisticStorageState.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN && !this.state.shouldShowBackground && !this.state.settingBackground && this.setState({
                shouldShowBackground: !0
            })
        };
        return b
    }(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MessagingPluginMobileThreadMenu.react", ["cx", "fbt", "CometSeparatorMenuItem.react", "LiveChatPluginLoggerUtil", "MPNDropdownMenu", "MPNDropdownMenuItem", "MPNIdentity", "MessagingPluginContext", "MessagingPluginThreadActions", "ODS", "URI", "react"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react"),
        k = d("react").useContext;

    function a(a) {
        var b = k(c("MessagingPluginContext")),
            e = b.state,
            f = e.pageID,
            g = e.locale,
            h = e.guestID,
            l = e.isPageBlocked,
            m = e.showUpgradeUpsellPrompt,
            n = e.isPageInEU;
        e = e.isLightswitchEnabledForGuest;
        var o = d("MPNIdentity").MPNIdentity.currentUserState() === d("MPNIdentity").MPNIdentityState.GUEST,
            p = e !== !0 && !n;
        p || (e === !0 && d("ODS").bumpEntityKey(4205, "chat_plugin", "chat_plugin.epd.guest_frx_entry_point_blocked_eu_guest"), n && d("ODS").bumpEntityKey(4205, "chat_plugin", "chat_plugin.epd.guest_frx_entry_point_blocked_eu_page"));
        return j.jsxs(c("MPNDropdownMenu"), {
            "data-testid": void 0,
            className: "_a2z-",
            children: [o && m ? j.jsx(c("MPNDropdownMenuItem"), {
                iconSrc: "/images/web_messenger/app-messenger_filled_20-4x.png",
                onClick: function() {
                    return a.onUpgrade()
                },
                primaryText: i._( /*FBT_CALL*/ "Continue in Messenger" /*FBT_CALL*/ )
            }) : null, j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc: "/images/web_messenger/cross-circle_filled_20-4x.png",
                onClick: function() {
                    d("LiveChatPluginLoggerUtil").logActionFromNewUI("in_thread_action", h, f, o ? "guest_chat_tab" : "logged_in_chat_tab", {
                        button_name: "end_chat_menu_item"
                    }), b.dispatchAction({
                        type: "TOGGLE_END_CHAT",
                        showEndChat: !0
                    })
                },
                primaryText: i._( /*FBT_CALL*/ "End chat" /*FBT_CALL*/ )
            }), !o && l != null ? j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc: "/images/web_messenger/message-cross_32-4x.png",
                onClick: function() {
                    d("MessagingPluginThreadActions").blockOrUnblockPage(b)
                },
                primaryText: l ? i._( /*FBT_CALL*/ "Turn on messages" /*FBT_CALL*/ ) : i._( /*FBT_CALL*/ "Turn off messages" /*FBT_CALL*/ )
            }) : null, o ? null : j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc: a.isMuted ? "/images/web_messenger/bell-cross_32-4x.png" : "/images/web_messenger/bell_32-4x.png",
                onClick: a.onClickMuteOrUnmute,
                primaryText: a.isMuted ? i._( /*FBT_CALL*/ "Unmute conversation" /*FBT_CALL*/ ) : i._( /*FBT_CALL*/ "Mute conversation" /*FBT_CALL*/ )
            }), p ? j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                iconSrc: "images/web_messenger/caution-triangle_filled_20-4x.png",
                onClick: function() {
                    d("MessagingPluginThreadActions").openFRXPrompt(f, g)
                },
                primaryText: i._( /*FBT_CALL*/ "Something's wrong" /*FBT_CALL*/ )
            }) : null, j.jsx(c("CometSeparatorMenuItem.react"), {}), j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                onClick: function() {
                    d("LiveChatPluginLoggerUtil").logActionFromNewUI("in_thread_action", h, f, "guest_chat_tab", {
                        button_name: "visit_facebook_page_menu_item"
                    }), c("URI").goURIOnNewWindow("https://www.facebook.com/" + f)
                },
                primaryText: i._( /*FBT_CALL*/ "Visit Facebook Page" /*FBT_CALL*/ )
            }), j.jsx(c("MPNDropdownMenuItem"), {
                "data-testid": void 0,
                onClick: function() {
                    d("LiveChatPluginLoggerUtil").logActionFromNewUI("in_thread_action", h, f, "guest_chat_tab", {
                        button_name: "add_messenger_to_your_website_menu_item"
                    }), c("URI").goURIOnNewWindow("https://www.facebook.com/business/m/add-messenger-to-your-website")
                },
                primaryText: i._( /*FBT_CALL*/ "Add Messenger to your website" /*FBT_CALL*/ )
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("MessagingPluginMobileDialogHeader.react", ["cx", "fbt", "Arbiter", "BasePopoverTrigger.react", "FlexLayout.react", "LineClamp.react", "LiveChatPluginLoggerUtil", "MPNConstants", "MPNHeaderActionButton.react", "MPNIdentity", "MPNMinusButtonSVG.react", "MPNMoreInfoButtonSVG.react", "MPNVerifiedBadge.react", "MessagingPluginContext", "MessagingPluginMobileProfilePicture.react", "MessagingPluginMobileThreadMenu.react", "MessagingPluginThreadActions", "QE2Logger", "react"], (function(a, b, c, d, e, f, g, h, i) {
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
                c.$1 = d("MessagingPluginThreadActions").launchUpgradeFlowMobile(c.context, c.props.history, d("MPNConstants").MPNUpgradePrompt.CONTINUE_IN_MESSENGER);
                d("LiveChatPluginLoggerUtil").logActionFromNewUI("in_thread_action", b, a, "guest_chat_tab", {
                    action_type: d("MPNConstants").MPNUpgradePrompt.CONTINUE_IN_MESSENGER
                })
            }, c.$4 = function() {
                c.props.ActionDelegate && c.props.ActionDelegate.minimize()
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
            var a = this.context.state,
                b = a.pageName,
                e = a.pageID,
                f = a.pageVerifiedStatus,
                g = a.guestID;
            a = a.showGuestUpgradePopover;
            var h = this.context.state.optimisticStorageState.showUpgradePrompt != d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN;
            return j.jsxs("div", {
                className: "_9dxj" + (!h && !a ? " _9gop" : ""),
                children: [j.jsx("div", {
                    className: "_a2m0",
                    children: j.jsx(c("MessagingPluginMobileProfilePicture.react"), {})
                }), j.jsxs("div", {
                    className: "_9dxi",
                    children: [j.jsxs(c("FlexLayout.react"), {
                        align: "center",
                        children: [j.jsx(c("LineClamp.react"), {
                            className: "_a2m1",
                            lines: 1,
                            children: j.jsx("strong", {
                                children: b
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
                    children: [j.jsx(c("BasePopoverTrigger.react"), {
                        popover: c("MessagingPluginMobileThreadMenu.react"),
                        popoverProps: {
                            history: this.props.history,
                            isMuted: this.state.isMuted,
                            onClickMuteOrUnmute: this.$2,
                            onUpgrade: this.$3
                        },
                        children: function(a, b) {
                            return j.jsx("div", {
                                ref: a,
                                children: j.jsx(c("MPNHeaderActionButton.react"), {
                                    testid: void 0,
                                    label: i._( /*FBT_CALL*/ "More" /*FBT_CALL*/ ),
                                    onPress: function() {
                                        b(), d("LiveChatPluginLoggerUtil").logActionFromNewUI("in_thread_action", g, e, d("MPNIdentity").MPNIdentity.currentUserState() === d("MPNIdentity").MPNIdentityState.FB ? "logged_in_chat_tab" : "guest_chat_tab", {
                                            button_name: "more_menu"
                                        })
                                    },
                                    children: j.jsx(c("MPNMoreInfoButtonSVG.react"), {})
                                })
                            })
                        }
                    }), j.jsx(c("MPNHeaderActionButton.react"), {
                        label: i._( /*FBT_CALL*/ "close" /*FBT_CALL*/ ),
                        onPress: this.$4,
                        children: j.jsx(c("MPNMinusButtonSVG.react"), {})
                    })]
                })]
            })
        };
        return b
    }(j.PureComponent);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MessagingPluginMobileITPContinuePage.react", ["LiveChatPluginLoggerUtil", "MPNConstants", "MPNMobileWelcomePageModal.react", "MPNXDMessageManager", "MessagingPluginContext", "MessagingPluginPathUtils", "react"], (function(a, b, c, d, e, f, g) {
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
                e = a.pluginMountTime,
                f = a.optimisticStorageState;
            a = a.entryPointSize;
            c("MPNXDMessageManager").setupMobileIframeForPath(d("MessagingPluginPathUtils").MPN_PATH.ITPCONTINUE, f.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN, a);
            d("LiveChatPluginLoggerUtil").logImpressionUsingXController_SafeFor3PD(b, "itp_page", e, ["continue"])
        };
        e.render = function() {
            try {
                return h.jsx(c("MPNMobileWelcomePageModal.react"), {
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
__d("MessagingPluginMobileIcon.react", ["fbt", "LiveChatPluginLoggerUtil", "MPNConstants", "MPNMobileBadgeableMessengerIcon.react", "MPNStorage", "MPNXDMessageManager", "MessagingPluginContext", "ShimButton.react", "cr:352", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(e, a);

        function e() {
            var b, e, f;
            for (var g = arguments.length, h = new Array(g), i = 0; i < g; i++) h[i] = arguments[i];
            return (e = f = a.call.apply(a, [this].concat(h)) || this, f.state = {
                dialogVisibility: (b = c("MPNStorage").getFBStorageState()) == null ? void 0 : b.visibility,
                isButtonActive: !0
            }, f.$1 = function() {
                c("MPNXDMessageManager").markInteraction(), f.props.actionDelegate.maximize(), f.setState({
                    isButtonActive: !1
                }), window.setTimeout(function() {
                    f.setState({
                        isButtonActive: !0
                    })
                }, 350), f.props.shouldShowEntryPointCustomization && d("LiveChatPluginLoggerUtil").logEntryPointClick(f.props.entryPointIconEnum, f.props.entryPointLabel, f.props.pageID)
            }, e) || babelHelpers.assertThisInitialized(f)
        }
        var f = e.prototype;
        f.componentDidMount = function() {
            var a = this;
            c("MPNXDMessageManager").subscribeEvent("plugin_wrapper", "message", "CustomerChat.isDialogHidden", function(b) {
                b = ((b = b.data.params) == null ? void 0 : b.is_dialog_hidden) == !0 ? d("MPNConstants").MPNVisibility.HIDDEN : d("MPNConstants").MPNVisibility.NOT_HIDDEN;
                a.setState({
                    dialogVisibility: b
                })
            });
            var b = null,
                e = null,
                f = this.props,
                g = f.shouldShowEntryPointCustomization,
                h = f.pageID,
                i = f.pluginRequestTime,
                j = f.clientRequestTime;
            f = f.serverRequestTime;
            g && (b = this.props.entryPointIconEnum, e = this.props.entryPointLabel);
            d("LiveChatPluginLoggerUtil").logImpressionUsingXController_SafeFor3PD(h, "plugin_icon", i, null, null, null, null, j, null, b, e, g, this.props.logId, f)
        };
        f.render = function() {
            try {
                b("cr:352") == null ? void 0 : b("cr:352").logChatPluginLandingLoadModuleEndSuccess();
                var a = this.props.entryPointLabel !== "none" ? "44px" : "60px";
                return i.jsx(c("ShimButton.react"), {
                    style: {
                        borderRadius: "50%",
                        height: a
                    },
                    "data-testid": void 0,
                    onClick: this.$1,
                    children: i.jsx("div", {
                        "data-testid": void 0,
                        "aria-label": this.state.dialogVisibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN ? "" : h._( /*FBT_CALL*/ "Chat with {page name} button" /*FBT_CALL*/ , [h._param("page name", this.props.pageName)]),
                        children: i.jsx(c("MPNMobileBadgeableMessengerIcon.react"), {
                            entryPointIcon: this.props.entryPointIconSVG,
                            entryPointLabel: this.props.entryPointLabel,
                            entryPointSize: this.props.entryPointSize,
                            threadColor: this.props.threadColor,
                            alignment: this.props.alignment,
                            shouldShowEntryPointCustomization: this.props.shouldShowEntryPointCustomization
                        })
                    })
                })
            } catch (a) {
                b("cr:352") == null ? void 0 : b("cr:352").logChatPluginLandingLoadModuleEndFail(), d("LiveChatPluginLoggerUtil").logImpressionExceptionsUsingXController_SafeFor3PD("tab_load_failure", this.props.pageID, "plugin_icon", a.name, a.message, a.stack)
            }
        };
        return e
    }(i.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MessagingPluginMobileMessengerIconSVGwithColor.react", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.render = function() {
            return h.jsx("svg", {
                width: this.props.size,
                height: this.props.size,
                viewBox: "0 0 41 41",
                children: h.jsx("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    children: h.jsx("g", {
                        transform: "translate(-5.000000, -5.000000)",
                        fill: this.props.threadColor,
                        children: h.jsx("g", {
                            children: h.jsx("g", {
                                transform: "translate(5.000000, 5.000000)",
                                children: h.jsx("path", {
                                    d: "M20,0 C31.2666,0 40,8.2528 40,19.4 C40,30.5472 31.2666,38.8 20,38.8 C17.9763,38.8 16.0348,38.5327 14.2106,38.0311 C13.856,37.9335 13.4789,37.9612 13.1424,38.1098 L9.1727,39.8621 C8.1343,40.3205 6.9621,39.5819 6.9273,38.4474 L6.8184,34.8894 C6.805,34.4513 6.6078,34.0414 6.2811,33.7492 C2.3896,30.2691 0,25.2307 0,19.4 C0,8.2528 8.7334,0 20,0 Z M7.99009,25.07344 C7.42629,25.96794 8.52579,26.97594 9.36809,26.33674 L15.67879,21.54734 C16.10569,21.22334 16.69559,21.22164 17.12429,21.54314 L21.79709,25.04774 C23.19919,26.09944 25.20039,25.73014 26.13499,24.24744 L32.00999,14.92654 C32.57369,14.03204 31.47419,13.02404 30.63189,13.66324 L24.32119,18.45264 C23.89429,18.77664 23.30439,18.77834 22.87569,18.45674 L18.20299,14.95224 C16.80079,13.90064 14.79959,14.26984 13.86509,15.75264 L7.99009,25.07344 Z"
                                })
                            })
                        })
                    })
                })
            })
        };
        return b
    }(h.Component);
    g["default"] = a
}), 98);
__d("MessagingPluginMobileLandingPage.react", ["cx", "fbt", "FlexLayout.react", "LineClamp.react", "LiveChatPluginFbts", "LiveChatPluginLoggerUtil", "MPNConstants", "MPNLocalState", "MPNNavigation", "MPNVerifiedBadge.react", "MPNXDMessageManager", "MessagingPluginContext", "MessagingPluginMobileMessengerIconSVGwithColor.react", "MessagingPluginMobileProfilePicture.react", "MessagingPluginPathUtils", "ShimButton.react", "react", "stylex"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    var j = d("react");
    c("stylex").inject(".hpj0pwwo{font-size:1.0625rem}", 1);
    c("stylex").inject(".igjjae4c{font-weight:bold}", 1);
    c("stylex").inject(".frx9we7d{word-break:break-all}", 1);
    c("stylex").inject(".mov749r8{color:var(--fds-black-alpha-50)}", 1);
    c("stylex").inject(".nfkogyam{font-size:0.8125rem}", 1);
    c("stylex").inject(".lcfup58g{padding-left:4px}", 1, ".lcfup58g{padding-right:4px}");
    c("stylex").inject(".om3e55n1{position:relative}", 1);
    c("stylex").inject(".iy1nols1{top:-1px}", 1);
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (b = c = a.call.apply(a, [this].concat(f)) || this, c.$1 = function(a) {
                var b = c.context.state,
                    e = b.pageID;
                b = b.hasGuestMode;
                a.stopPropagation();
                d("MPNNavigation").navigateToRoute(c.props.history, d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE);
                d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, e, "landing_page", {
                    opened_tab: b ? "welcome_page_with_guest_option" : "welcome_page"
                })
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.componentDidMount = function() {
            var a = this.context.state,
                b = a.pageID,
                e = a.pluginMountTime,
                f = a.loggedInGreeting;
            a = a.entryPointSize;
            c("MPNXDMessageManager").setupMobileIframeForPath(d("MessagingPluginPathUtils").MPN_PATH.LANDING, this.context.state.optimisticStorageState.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN, a);
            d("LiveChatPluginLoggerUtil").logImpressionUsingXController_SafeFor3PD(b, "landing_page", e, null, f != null ? f : d("LiveChatPluginFbts").DEFAULT_LOGGED_IN_GREETING_TEXT.toString())
        };
        e.render = function() {
            var a = this.context.state,
                b = a.pageID,
                e = a.pageName,
                f = a.pageVerifiedStatus,
                g = a.loggedInGreeting,
                h = a.threadCSSColor;
            a = a.optimisticStorageState;
            a = a.visibility === d("MPNConstants").MPNVisibility.HIDDEN;
            e = i._( /*FBT_CALL*/ "Chat with {pageName}" /*FBT_CALL*/ , [i._param("pageName", e)]);
            try {
                return j.jsx("div", {
                    className: "_90st",
                    children: j.jsxs(c("ShimButton.react"), {
                        "data-testid": void 0,
                        className: "_8_x9",
                        onClick: this.$1,
                        children: [j.jsx("div", {
                            className: "_90s_",
                            children: j.jsx(c("MessagingPluginMobileMessengerIconSVGwithColor.react"), {
                                threadColor: h,
                                size: "24px"
                            })
                        }), j.jsx("div", {
                            className: "_9dxh"
                        }), j.jsxs("div", {
                            className: (a ? "_94mw" : "") + (a ? "" : " _9dxi") + (a ? "" : " _90sz"),
                            children: [j.jsxs(c("FlexLayout.react"), {
                                align: "center",
                                children: [j.jsx(c("LineClamp.react"), {
                                    className: "frx9we7d igjjae4c hpj0pwwo",
                                    lines: 1,
                                    children: j.jsx("strong", {
                                        children: e
                                    })
                                }), f && f !== "not_verified" ? j.jsx("span", {
                                    className: "iy1nols1 om3e55n1 lcfup58g",
                                    children: j.jsx(c("MPNVerifiedBadge.react"), {
                                        verificationStatus: f,
                                        size: 14
                                    })
                                }) : null]
                            }), j.jsx(c("LineClamp.react"), {
                                className: "nfkogyam mov749r8",
                                lines: 1,
                                children: g != null ? g : d("LiveChatPluginFbts").DEFAULT_LOGGED_IN_GREETING_TEXT.toString()
                            })]
                        }), j.jsx("div", {
                            className: (a ? "_94mw" : "") + (a ? "" : " _91k-"),
                            children: j.jsx(c("MessagingPluginMobileProfilePicture.react"), {})
                        })]
                    })
                })
            } catch (a) {
                d("LiveChatPluginLoggerUtil").logImpressionExceptionsUsingXController_SafeFor3PD("tab_load_failure", b, "landing_page", a.name, a.message, a.stack)
            }
        };
        return b
    }(j.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MessagingPluginMobileThreadPage.react", ["cx", "Arbiter", "Bootloader", "ChatPluginMobileCufee.react", "JSResource", "LiveChatMqttClient", "LiveChatPluginLoggerUtil", "MPNConstants", "MPNEndChatPrompt.react", "MPNIdentity", "MPNLocalState", "MPNMobileGuestUpgradeUpsellPrompt.react", "MPNMobileMessageComposer.react", "MPNUpgradePopover.react", "MPNXDMessageManager", "MessagingPluginContext", "MessagingPluginMobileDialogHeader.react", "MessagingPluginPathUtils", "MessengerSpinner.react", "MessengerState.bs", "emptyFunction", "gkx", "lazyLoadComponent", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = c("lazyLoadComponent")(c("JSResource")("MessagingPluginDialogBody.react").__setRef("MessagingPluginMobileThreadPage.react"));
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$2 = null, c.$3 = !1, c.state = {
                dialogBodyHeight: -1,
                informationViewOpen: !1,
                feedback: {
                    first_screen: null,
                    privacy_policy: null,
                    form_state: "",
                    form_id: ""
                }
            }, c.setFeedback = function(a) {
                c.setState(function(b) {
                    return babelHelpers["extends"]({}, b, {
                        feedback: a
                    })
                })
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.componentDidMount = function() {
            var a = this.context.state.entryPointSize;
            c("MPNXDMessageManager").setupMobileIframeForPath(d("MessagingPluginPathUtils").MPN_PATH.THREAD, this.context.state.optimisticStorageState.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN, a);
            this.$4()
        };
        e.componentDidUpdate = function() {
            this.$4()
        };
        e.$4 = function() {
            var a = this;
            if (this.$3) return;
            var b = this.context.state,
                e = b.optimisticStorageState,
                f = b.pageID,
                g = b.pageName,
                h = b.accessToken,
                i = b.guestID,
                j = b.loggedInAccessToken;
            b = b.shouldShowMobileInWebChat;
            if (b) {
                var k = d("MPNIdentity").MPNIdentity.currentUserID();
                if (this.$2 == k || e.chatState === d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED || k == null) return;
                b = d("MPNIdentity").MPNIdentity.currentUserState();
                b === d("MPNIdentity").MPNIdentityState.FB && (c("LiveChatMqttClient").setUp(f, k, null, function() {
                    return a.$2 = k
                }, j), c("Bootloader").loadModules(["LiveChatPluginAlerts", "MercurySyncDeltaHandler"], function(a, b) {
                    a.init(k, f, g, new Map(), !1, 0), b.getForFBID(k), c("Arbiter").inform("MercurySyncDeltaHandler/initSeqID", {
                        fbid: k,
                        seqID: 0
                    })
                }, "MessagingPluginMobileThreadPage.react"))
            }
            f && h && i && (c("LiveChatMqttClient").setUp(f, i, null, null, h), this.$3 = !0)
        };
        e.render = function() {
            var a = this,
                b = this.context.state,
                e = b.optimisticStorageState,
                f = b.pageID;
            b = b.showUpgradeUpsellPrompt;
            var g = d("MPNIdentity").MPNIdentity.currentUserState() === d("MPNIdentity").MPNIdentityState.GUEST;
            try {
                return i.jsx("div", {
                    role: "none",
                    className: "_926d",
                    children: i.jsxs("div", {
                        className: e.chatState === d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED ? "_91hz" : "",
                        children: [i.jsxs("div", {
                            className: "_6atj _90x4",
                            children: [i.jsx(c("MessagingPluginMobileDialogHeader.react"), {
                                ActionDelegate: this.props.ActionDelegate,
                                history: this.props.history
                            }), i.jsx(c("MPNUpgradePopover.react"), {
                                isMobile: !0
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
                                        fbid: this.context.state.guestID,
                                        children: function(b) {
                                            return i.jsx(j, {
                                                deliveryReceipt: c("MessengerState.bs").deliveryReceipts(b),
                                                dialogBodyHeight: a.state.dialogBodyHeight,
                                                informationViewOpen: a.state.informationViewOpen,
                                                messengerState: b,
                                                sendRef: function() {},
                                                setFeedback: a.setFeedback
                                            })
                                        }
                                    })
                                })]
                            }), e.showUpgradePrompt == null || e.showUpgradePrompt === d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN || !b ? null : i.jsx(c("MPNMobileGuestUpgradeUpsellPrompt.react"), {
                                color: this.context.state.threadCSSColor,
                                prompt: this.context.state.optimisticStorageState.showUpgradePrompt,
                                history: this.props.history
                            }), i.jsx(c("MPNEndChatPrompt.react"), {
                                isGuest: g,
                                history: this.props.history,
                                shouldMinimize: !0
                            }), i.jsx(c("MPNMobileMessageComposer.react"), {
                                onBlur: c("emptyFunction"),
                                onChange: function() {},
                                onClick: function() {},
                                ref: function(b) {
                                    return a.$1 = b
                                }
                            })]
                        }, "dialog_container"), c("gkx")("2784") ? i.jsx(c("ChatPluginMobileCufee.react"), {
                            pageName: this.context.state.pageName,
                            feedbackQuestion: this.state.feedback.first_screen,
                            businessPrivacy: this.state.feedback.privacy_policy,
                            formState: (e = this.state.feedback.form_state) != null ? e : "",
                            formID: (b = this.state.feedback.form_id) != null ? b : ""
                        }) : null]
                    })
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
__d("MessagingPluginMobileWelcomeMessagePage.react", ["cx", "Arbiter", "LiveChatPluginConstants", "LiveChatPluginFbts", "LiveChatPluginLoggerUtil", "MPNConstants", "MPNLocalState", "MPNNavigation", "MPNWelcomeMessageMinusButtonSVG.react", "MPNXDMessageManager", "MessagingPluginContext", "MessagingPluginPathUtils", "ShimButton.react", "react", "useResizeObserver"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");
    b = d("react");
    var j = b.useContext,
        k = b.useEffect,
        l = b.useState,
        m = 4e3,
        n = 6e3;

    function a(a) {
        var b = l(!1),
            e = b[0],
            f = b[1],
            g = j(c("MessagingPluginContext"));
        b = g.state;
        var h = b.alignment,
            o = b.bottomSpacing,
            p = b.clientRequestTime,
            q = b.entryPointLabel,
            r = b.loggedInGreeting,
            s = b.optimisticStorageState,
            t = b.pageID,
            u = b.serverTime,
            v = b.shouldShowEntryPointCustomization,
            w = b.entryPointSize;
        b = c("useResizeObserver")(function(a, b) {
            c("MPNXDMessageManager").setupMobileIframeForPath(d("MessagingPluginPathUtils").MPN_PATH.BUBBLE, s.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN, w, b.clientHeight + 12, h, !0, o, q)
        });
        k(function() {
            var b = null,
                g = null;
            e || (b = window.setTimeout(function() {
                f(!0)
            }, n));
            e && (g = window.setTimeout(function() {
                x()
            }, m));
            var h = c("Arbiter").subscribe(d("LiveChatPluginConstants").NAVIGATE_TO_WELCOME_PAGE, function(b) {
                d("MPNNavigation").navigateToRoute(a.history, d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE)
            });
            return function() {
                h && h.unsubscribe(), b && window.clearTimeout(b), g && window.clearTimeout(g)
            }
        });
        k(function() {
            d("LiveChatPluginLoggerUtil").logImpressionUsingXController_SafeFor3PD(t, "bubble", u, null, null, null, null, p)
        }, [t, u, p]);
        var x = function() {
                window.setTimeout(function() {
                    d("MPNNavigation").navigateToRoute(a.history, d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE)
                }, 100), a.ActionDelegate && a.ActionDelegate.minimize()
            },
            y = function() {
                c("MPNXDMessageManager").markInteraction(), window.setTimeout(function() {
                    d("MPNNavigation").navigateToRoute(a.history, d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE)
                }, 100), d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, g.state.pageID, "plugin_icon", {
                    opened_tab: "bubble"
                })
            },
            z = h === "right" ? "_9pnz" : "_9pny",
            A = h === "right" ? "_9pn_" : "_9pn-",
            B = h === "right" ? "_9po1" : "_9po0";
        v && (q !== "none" && (B = h === "left" ? "_9po1" : "_9po0"));
        return i.jsxs("div", {
            children: [i.jsx(c("ShimButton.react"), {
                onClick: y,
                children: i.jsx("div", {
                    "data-testid": void 0,
                    className: z,
                    ref: b,
                    children: i.jsx("div", {
                        className: A,
                        children: r != null ? r : d("LiveChatPluginFbts").DEFAULT_LOGGED_IN_GREETING_TEXT.toString()
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
__d("MessagingPluginMobileWelcomePage.react", ["LiveChatPluginFbts", "LiveChatPluginLoggerUtil", "MPNConstants", "MPNMobileWelcomePageModal.react", "MPNXDMessageManager", "MessagingPluginContext", "MessagingPluginPathUtils", "react"], (function(a, b, c, d, e, f, g) {
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
                e = a.pluginMountTime,
                f = a.hasGuestMode,
                g = a.loggedInGreeting,
                h = a.optimisticStorageState;
            a = a.entryPointSize;
            c("MPNXDMessageManager").setupMobileIframeForPath(d("MessagingPluginPathUtils").MPN_PATH.WELCOME, h.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN, a);
            d("LiveChatPluginLoggerUtil").logImpressionUsingXController_SafeFor3PD(b, f ? "welcome_page_with_guest_option" : "welcome_page", e, f ? ["chat_in_messenger", "continue_as_guest"] : ["chat_in_messenger"], g != null ? g : d("LiveChatPluginFbts").DEFAULT_LOGGED_IN_GREETING_TEXT.toString())
        };
        e.render = function() {
            var a = this.context.state;
            try {
                return h.jsx(c("MPNMobileWelcomePageModal.react"), {
                    ActionDelegate: this.props.ActionDelegate,
                    history: this.props.history,
                    useITPContinueButton: !1
                })
            } catch (b) {
                d("LiveChatPluginLoggerUtil").logImpressionExceptionsUsingXController_SafeFor3PD("tab_load_failure", a.pageID, a.hasGuestMode ? "welcome_page_with_guest_option" : "welcome_page", b.name, b.message, b.stack)
            }
        };
        return b
    }(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MessagingPluginMobileRoute.react", ["MessagingPluginMobileITPContinuePage.react", "MessagingPluginMobileLandingPage.react", "MessagingPluginMobileThreadPage.react", "MessagingPluginMobileWelcomeMessagePage.react", "MessagingPluginMobileWelcomePage.react", "MessagingPluginPathUtils", "ReactRouterDOM", "react"], (function(a, b, c, d, e, f, g) {
    var h = d("react");

    function a(a) {
        var b = a.path,
            e = a.ActionDelegate;
        return h.jsx(d("ReactRouterDOM").BrowserRouter, {
            children: h.jsxs(d("ReactRouterDOM").Switch, {
                children: [h.jsx(d("ReactRouterDOM").Route, {
                    component: c("MessagingPluginMobileLandingPage.react"),
                    exact: !0,
                    path: d("MessagingPluginPathUtils").MPN_PATH.LANDING
                }), h.jsx(d("ReactRouterDOM").Route, {
                    render: function(a) {
                        return h.jsx(c("MessagingPluginMobileWelcomePage.react"), babelHelpers["extends"]({}, a, {
                            ActionDelegate: e
                        }))
                    },
                    exact: !0,
                    path: d("MessagingPluginPathUtils").MPN_PATH.WELCOME
                }), h.jsx(d("ReactRouterDOM").Route, {
                    render: function(a) {
                        return h.jsx(c("MessagingPluginMobileITPContinuePage.react"), babelHelpers["extends"]({}, a, {
                            ActionDelegate: e
                        }))
                    },
                    exact: !0,
                    path: d("MessagingPluginPathUtils").MPN_PATH.ITPCONTINUE
                }), h.jsx(d("ReactRouterDOM").Route, {
                    render: function(a) {
                        return h.jsx(c("MessagingPluginMobileThreadPage.react"), babelHelpers["extends"]({}, a, {
                            ActionDelegate: e
                        }))
                    },
                    exact: !0,
                    path: d("MessagingPluginPathUtils").MPN_PATH.THREAD
                }), h.jsx(d("ReactRouterDOM").Route, {
                    render: function(a) {
                        return h.jsx(c("MessagingPluginMobileWelcomeMessagePage.react"), babelHelpers["extends"]({}, a, {
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
__d("MessagingPluginMobileWrapper.react", ["Arbiter", "ChatPluginEntryPoint.react", "CreateCustomerChatPluginGuestUserMutation", "CurrentUser", "LiveChatPluginConstants", "LiveChatPluginLoggerUtil", "LiveChatPluginMessengerIconSVGWithColor.react", "MPNConstants", "MPNNavigation", "MPNStorage", "MPNUnreadCountBadge.react", "MPNXDMessageManager", "MessagingPluginContext", "MessagingPluginGuestUpgradeActions", "MessagingPluginMobileIcon.react", "MessagingPluginMobileRoute.react", "MessagingPluginPathUtils", "MessagingPluginSDKActionUtil", "MessagingPluginThreadActions", "ReactDOM", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var c;
            c = a.call(this, b) || this;
            c.shouldCreateGuestSession = !1;
            c.shouldPerformGuestUpgradeActions = !1;
            c.shouldStartNewThread = !1;
            c.iconIframeLoaded = !1;
            c.$3 = null;
            b = c.props.redirectCommand;
            c.initialPath = b === d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION || b === d("MPNConstants").MPNRedirect.FB_LOG_IN ? d("MessagingPluginPathUtils").MPN_PATH.THREAD : c.props.path;
            b === d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION ? c.shouldCreateGuestSession = !0 : b === d("MPNConstants").MPNRedirect.GUEST_UPGRADE_SWITCH_ACCOUNT ? c.shouldPerformGuestUpgradeActions = !0 : b === d("MPNConstants").MPNRedirect.FB_LOG_IN && (c.shouldStartNewThread = !0);
            c.ActionDelegate = {
                onContinueAsGuest: c.onContinueAsGuest.bind(babelHelpers.assertThisInitialized(c)),
                onAppSwitchToMessenger: c.onAppSwitchToMessenger.bind(babelHelpers.assertThisInitialized(c)),
                openThreadWithCurrentFBUser: function() {
                    d("MessagingPluginThreadActions").openThreadWithCurrentFBUser(c.context)
                },
                openThreadWithInterstitial: function(a) {
                    d("MessagingPluginThreadActions").openThreadWithInterstitial(c.context, a)
                },
                minimize: function() {
                    d("MPNNavigation").minimizePlugin(c.context, !0)
                },
                maximize: function() {
                    d("MPNNavigation").maximizePlugin(c.context, !0)
                }
            };
            c.$1 = window.name;
            return c
        }
        var e = b.prototype;
        e.componentDidMount = function() {
            this.$4();
            this.$5();
            var a = this.context.state.entryPointSize;
            c("MPNXDMessageManager").setupMobileIframeForPath(this.initialPath, this.context.state.optimisticStorageState.visibility === d("MPNConstants").MPNVisibility.NOT_HIDDEN, a)
        };
        e.componentWillUnmount = function() {
            this.$2 && window.clearTimeout(this.$2), this.$3 && c("Arbiter").unsubscribe(this.$3)
        };
        e.$4 = function() {
            var a = this,
                b = this.context.state,
                e = b.alignment,
                f = b.bottomSpacing,
                g = b.clientRequestTime,
                i = b.entryPointIconEnum,
                j = b.entryPointIconSVG,
                k = b.entryPointLabel,
                l = b.entryPointSize,
                m = b.pageID,
                n = b.pageName,
                o = b.shouldShowEntryPointCustomization,
                p = b.sideSpacing,
                q = b.threadCSSColor,
                r = b.isLoadedByFacade,
                s = b.serverTime;
            b = o ? h.jsx(c("ChatPluginEntryPoint.react"), {
                entryPointIcon: j,
                entryPointLabel: k,
                entryPointSize: l,
                threadColor: q,
                alignment: e
            }) : h.jsx(c("LiveChatPluginMessengerIconSVGWithColor.react"), {
                threadColor: q,
                entryPointSize: l
            });
            c("MPNXDMessageManager").setupIconIframe(this.$1, e, f, p, b, r, null, k, l);
            c("MPNXDMessageManager").subscribeEvent("plugin_wrapper", "message", "bubbleFrameLoaded", function(b) {
                if (b.data.frameName != null) {
                    var f = h.jsx(c("MessagingPluginMobileIcon.react"), {
                            alignment: e,
                            threadColor: q,
                            entryPointIconSVG: j,
                            entryPointIconEnum: i,
                            entryPointLabel: k,
                            entryPointSize: l,
                            actionDelegate: a.ActionDelegate,
                            pageID: m,
                            pageName: n,
                            pluginRequestTime: b.data.request_time,
                            clientRequestTime: g,
                            shouldShowEntryPointCustomization: o,
                            logId: b.data.log_id,
                            serverRequestTime: s
                        }),
                        p = parent.frames[b.data.frameName].document.body;
                    d("ReactDOM").render(f, p);
                    a.iconIframeLoaded = !0
                }
                if (b.data.unreadCountFrameName != null) {
                    f = h.jsx(c("MPNUnreadCountBadge.react"), {});
                    p = parent.frames[b.data.unreadCountFrameName].document.body;
                    d("ReactDOM").render(f, p)
                }
            })
        };
        e.$5 = function() {
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
            var a = this;
            this.shouldCreateGuestSession && (this.shouldCreateGuestSession = !1, this.onContinueAsGuest(function() {
                c("MPNStorage").clearRedirectCommand()
            }));
            this.shouldPerformGuestUpgradeActions && (this.shouldPerformGuestUpgradeActions = !1, c("MPNStorage").clearRedirectCommand(), this.$3 = c("Arbiter").subscribeOnce(d("LiveChatPluginConstants").GUEST_UPGRADE_SUCCESS, function() {
                d("MessagingPluginGuestUpgradeActions").clearGuestStorage(a.context), d("MPNNavigation").minimizePlugin(a.context, !0, !1), a.initialPath = d("MessagingPluginPathUtils").MPN_PATH.WELCOME, c("MPNXDMessageManager").reloadPlugin()
            }));
            this.shouldStartNewThread && (this.shouldStartNewThread = !1, c("MPNStorage").clearRedirectCommand(), d("MessagingPluginThreadActions").openThreadWithCurrentFBUser(this.context));
            return this.context.state.optimisticStorageState.visibility == d("MPNConstants").MPNVisibility.NOT_HIDDEN || this.iconIframeLoaded ? h.jsx(c("MessagingPluginMobileRoute.react"), {
                path: this.initialPath,
                ActionDelegate: this.ActionDelegate
            }) : null
        };
        e.onAppSwitchToMessenger = function() {
            var a = this.context.state,
                b = a.appSwitchUri,
                c = a.pageID;
            a = a.hasGuestMode;
            d("MessagingPluginThreadActions").appSwitch(b);
            d("LiveChatPluginLoggerUtil").logActionFromNewUI("tab_click", null, c, a ? "welcome_page_with_guest_option" : "welcome_page", {
                button_name: "chat_in_messenger"
            })
        };
        e.onContinueAsGuest = function(a) {
            var b = this,
                e = this.context,
                f = e.state,
                g = e.dispatchAction,
                h = f.pageID;
            e = f.locale;
            d("CreateCustomerChatPluginGuestUserMutation").commit({
                input: {
                    page_id: h,
                    locale: e
                }
            }, {
                onSuccess: function(c) {
                    c = c.create_customer_chat_plugin_guest_user;
                    var e = c == null ? void 0 : c.session_key,
                        f = c == null ? void 0 : c.fbid,
                        g = c == null ? void 0 : c.access_token;
                    c = c == null ? void 0 : c.is_lightswitch_enabled;
                    e != null && f != null && g != null && c != null && (d("MessagingPluginThreadActions").startChatAsGuest(b.context, g, f, c), a(f, g))
                },
                onFailure: function(a) {
                    g({
                        type: "CLEAR_GUEST_SESSION",
                        isLoggedIn: c("CurrentUser").isLoggedIn(),
                        viewerID: c("CurrentUser").getID()
                    }), g({
                        type: "SET_ERROR",
                        error: a
                    }), d("LiveChatPluginLoggerUtil").logActionFromNewUI("guest_session_create_failure", null, h, "guest_chat_tab")
                }
            })
        };
        return b
    }(h.Component);
    a.contextType = c("MessagingPluginContext");
    g["default"] = a
}), 98);
__d("MessagingPluginMobileRoot", ["cx", "CometBlueBridgeKeyCommandListener.react", "LiveChatPluginErrorBoundary.react", "MPNCacheVersioning", "MPNConstants", "MPNIdentity", "MPNLocalState", "MPNStorage", "MPNXDMessageManager", "MessagingPluginMobileWrapper.react", "MessagingPluginPathUtils", "MessagingPluginStateProvider", "ReactDOM", "URI", "performanceAbsoluteNow", "react"], (function(a, b, c, d, e, f, g, h) {
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
                k = a.requestID,
                l = a.refererUri,
                m = a.originDomain,
                n = a.soundURLs,
                o = a.hasGuestMode,
                p = a.showUpgradeUpsellPrompt,
                q = a.hasAutomation,
                r = a.appSwitchUri,
                s = a.upgradeAppSwitchUri,
                t = a.isBusinessActive,
                u = a.storedStates,
                v = a.isComposerDisabled,
                w = a.hasPersistentMenu,
                x = a.pageName,
                y = a.pageProfilePictureUri,
                z = a.viewerProfilePicureUri,
                A = a.pageResponsiveness,
                B = a.refParam,
                C = a.pageVerifiedStatus,
                D = a.greetingDialogDisplay,
                E = a.loggedInGreeting,
                F = a.loggedOutGreeting,
                G = a.threadCSSColor,
                H = a.entryPointIconSVG,
                I = a.entryPointIconEnum,
                J = a.entryPointLabel,
                K = a.locale,
                L = a.icebreakers,
                M = a.icebreakerCtas,
                N = a.bottomSpacing,
                O = a.sideSpacing,
                aa = a.mobileOptin,
                ba = a.isPageInEU,
                P = a.isLoadedByFacade,
                Q = a.isSanitizedEpd3pdRequest,
                ca = a.shouldShowEntryPointCustomization,
                R = a.shouldShowMobileInWebChat,
                S = a.shouldShowSizingCustomization,
                T = a.shouldShowNewWelcomeView,
                da = a.shouldShowPresence,
                ea = a.entryPointSize,
                fa = a.awayHoursEnabled,
                ga = a.awayGreeting,
                ha = a.isPageAway;
            a = a.nextAvailableTimestamp;
            try {
                this.$1(b, c, d, e, f, g, h, i, j, k, l, m, n, r, s, t, o, p, q, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, aa, ba, P, Q, ca, R, S, T, da, ea, fa, ga, ha, a)
            } catch (a) {}
        }
        var b = a.prototype;
        b.$1 = function(a, b, e, f, g, h, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, aa, ba, P, Q, ca, R, S, T, da, ea, fa, ga, ha, ia, ja, ka) {
            var la = !1;
            c("MPNStorage").initialize(o, b, m);
            d("MPNIdentity").MPNIdentity.hasStorageAccess(function(U) {
                d("MPNIdentity").MPNIdentity.init(U, R);
                var V = m,
                    W = w;
                W && (d("MPNCacheVersioning").isLatestVersion(W.v) || (c("MPNStorage").clearThirdPartyStorageState(), W = null));
                (!W || !W.path || !W.chatState) && (W = c("MPNStorage").getDefaultOptimisticStorageState(!0, F), c("MPNStorage").setThirdPartyStorageState(W));
                var X = !1,
                    ma, na, Y = W.visibility;
                if (U) {
                    var Z, $ = c("MPNStorage").getFBStorageState();
                    Z = (Z = $) == null ? void 0 : Z.rdr;
                    Z == null && !d("MPNCacheVersioning").isLatestVersion((Z = $) == null ? void 0 : Z.v) && (c("MPNStorage").clearFBStorageState(), $ = c("MPNStorage").getFBStorageState());
                    c("MPNStorage").isAccessTokenExpired() && (c("MPNStorage").clearFBStorageState(), W = c("MPNStorage").getDefaultOptimisticStorageState(!0, F), c("MPNStorage").setThirdPartyStorageState(W));
                    if ($ != null && $.requestID != null && $.requestID != "") {
                        Z = $.requestID;
                        ($.rdr === d("MPNConstants").MPNRedirect.NEW_GUEST_SESSION || $.rdr === d("MPNConstants").MPNRedirect.ITP_CONTINUE_SESSION) && (V = Z, c("MPNStorage").initialize(o, b, Z))
                    }
                    la = c("MPNStorage").setInitialStateIfNecessary(!0, Y, F);
                    $ = c("MPNStorage").getFBStorageState();
                    if ($ != null) {
                        X = $.chatState != d("MPNLocalState").MPNChatState.CHAT_NOT_STARTED;
                        ma = $.accessToken;
                        na = $.userID;
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
                Y = d("MessagingPluginPathUtils").getMobileDisplayPathFromStoredState(U, W, R, c("MPNStorage").getFBStorageState());
                T && P === "chat_tab" && d("MPNIdentity").MPNIdentity.subscribeLoggedInUserChanges(function(a, b) {
                    d("MPNIdentity").MPNIdentity.currentUserState() != d("MPNIdentity").MPNIdentityState.GUEST && (c("MPNStorage").clearFBStorageState(), c("MPNStorage").clearThirdPartyStorageState()), c("MPNXDMessageManager").reloadPlugin()
                });
                $ = {
                    pageID: b,
                    pageName: z,
                    pagePassesSentryTest: h,
                    hasMessagingPermission: j,
                    isMuted: k,
                    isPageBlocked: l,
                    pageProfilePictureUri: A,
                    viewerProfilePicureUri: B,
                    threadCSSColor: I,
                    entryPointIconSVG: J,
                    entryPointIconEnum: K,
                    entryPointLabel: L,
                    pageResponsiveness: C,
                    isComposerDisabled: x,
                    hasActiveAutomation: !1,
                    hasPersistentMenu: y,
                    greetingDialogDisplay: F,
                    loggedInGreeting: G,
                    loggedOutGreeting: H,
                    alignment: a,
                    refParam: D,
                    refererUri: n,
                    originDomain: o,
                    appSwitchUri: q,
                    upgradeAppSwitchUri: r,
                    isBusinessActive: s,
                    requestID: V,
                    locale: M,
                    icebreakers: N,
                    icebreakerCtas: O,
                    pageVerifiedStatus: E,
                    initialRequestUri: c("URI").getRequestURI(),
                    bottomSpacing: aa,
                    sideSpacing: ba,
                    mobileOptin: P,
                    chatStarted: X,
                    accessToken: ma,
                    guestID: na,
                    optimisticStorageState: W,
                    soundURLs: p,
                    isInitialLoad: la,
                    hasGuestMode: t,
                    showUpgradeUpsellPrompt: u,
                    pluginMountTime: c("performanceAbsoluteNow")(),
                    serverTime: f,
                    clientRequestTime: g,
                    upgradeUpsellPrompt: d("MPNConstants").MPNUpgradePrompt.NOT_SHOWN,
                    cookieAccessDenied: !1,
                    hasAutomation: v && !Q,
                    isPageInEU: Q,
                    isLoadedByFacade: ca,
                    isLightswitchEnabledForGuest: !1,
                    isSanitizedEpd3pdRequest: R,
                    shouldShowEntryPointCustomization: S,
                    shouldShowMobileInWebChat: T,
                    shouldShowSizingCustomization: da,
                    shouldShowNewWelcomeView: ea,
                    shouldShowPresence: fa,
                    entryPointSize: ga,
                    awayHoursEnabled: ha,
                    awayGreeting: ia,
                    isPageAway: ja,
                    nextAvailableTimestamp: ka
                };
                c("MPNXDMessageManager").setShouldShowEntryPointCustomization(S);
                (Z = document.body) == null ? void 0 : (U = Z.classList) == null ? void 0 : U.add("_a2w-");
                (V = document.body) == null ? void 0 : (X = V.classList) == null ? void 0 : X.add("_95rw");
                d("ReactDOM").render(i.jsx(c("LiveChatPluginErrorBoundary.react"), {
                    pageID: b,
                    children: i.jsx(c("CometBlueBridgeKeyCommandListener.react"), {
                        children: i.jsx(c("MessagingPluginStateProvider"), {
                            initialState: $,
                            children: i.jsx(c("MessagingPluginMobileWrapper.react"), {
                                path: Y,
                                redirectCommand: c("MPNStorage").getRedirectCommand()
                            })
                        })
                    })
                }), e)
            }, T && P === "chat_tab")
        };
        return a
    }();
    g["default"] = a
}), 98);