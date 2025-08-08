(function() {
    var e = {
        216: function(e, a, t) {
            "use strict";
            e.exports = t.p + "img/豆包网页端1760.475caebc.png"
        },
        722: function(e, a, t) {
            "use strict";
            e.exports = t.p + "img/飞书1760.9192a0fe.png"
        },
        1782: function(e, a, t) {
            "use strict";
            e.exports = t.p + "img/TRAE1760.9d599fcf.png"
        },
        1815: function() {},
        2761: function(e, a, t) {
            "use strict";
            e.exports = t.p + "img/water-mark.e8880c06.png"
        },
        3237: function() {},
        5168: function() {},
        6556: function(e, a, t) {
            "use strict";
            var l = t(5130)
              , n = t(6768)
              , o = t(4232);
            const i = {
                id: "app"
            }
              , s = {
                key: 0,
                class: "ad-banner"
            };
            function d(e, a, t, l, d, r) {
                const u = (0,
                n.g2)("AnnouncementDialog")
                  , c = (0,
                n.g2)("SideNav")
                  , v = (0,
                n.g2)("AdCarousel")
                  , p = (0,
                n.g2)("router-view")
                  , k = (0,
                n.g2)("AppFooter");
                return (0,
                n.uX)(),
                (0,
                n.CE)("div", i, [(0,
                n.bF)(u, {
                    onShowGuide: l.handleShowGuide
                }, null, 8, ["onShowGuide"]), (0,
                n.bF)(c, {
                    activeModule: l.activeModule,
                    onChangeModule: l.changeModule,
                    onNavWidthChange: l.handleNavWidthChange,
                    onCloseMobileNav: l.closeNavigation,
                    onGuideClick: l.handleGuideClick,
                    isForceExpanded: l.isNavExpanded,
                    showSuperDiyGuide: l.showGuide,
                    ref: "sideNavRef"
                }, null, 8, ["activeModule", "onChangeModule", "onNavWidthChange", "onCloseMobileNav", "onGuideClick", "isForceExpanded", "showSuperDiyGuide"]), (0,
                n.Lk)("div", {
                    class: "content-wrapper",
                    style: (0,
                    o.Tr)(l.contentStyle)
                }, [l.isHomePage ? ((0,
                n.uX)(),
                (0,
                n.CE)("div", s, [(0,
                n.bF)(v)])) : (0,
                n.Q3)("", !0), (0,
                n.Lk)("div", {
                    class: "nav-toggle-button",
                    onClick: a[0] || (a[0] = (...e) => l.toggleNavExpansion && l.toggleNavExpansion(...e))
                }, [(0,
                n.Lk)("div", {
                    class: (0,
                    o.C4)(["hamburger-icon", {
                        "is-active": l.isNavExpanded
                    }])
                }, a[2] || (a[2] = [(0,
                n.Lk)("div", {
                    class: "line"
                }, null, -1), (0,
                n.Lk)("div", {
                    class: "line"
                }, null, -1), (0,
                n.Lk)("div", {
                    class: "line"
                }, null, -1)]), 2)]), (0,
                n.bF)(p), (0,
                n.bF)(k)], 4), l.isMobile && l.isNavExpanded ? ((0,
                n.uX)(),
                (0,
                n.CE)("div", {
                    key: 0,
                    class: "mobile-nav-overlay active",
                    onClick: a[1] || (a[1] = (...e) => l.closeNavigation && l.closeNavigation(...e))
                })) : (0,
                n.Q3)("", !0)])
            }
            t(4114);
            var r = t.p + "img/logo.a5f914db.png"
              , u = t(144)
              , c = t(1387);
            const v = {
                class: "nav-links"
            }
              , p = {
                class: "nav-icon-container"
            }
              , k = {
                key: 0,
                class: "guide-tooltip"
            }
              , g = {
                key: 1,
                class: "guide-arrow"
            };
            var m = {
                __name: "SideNav",
                props: {
                    activeModule: {
                        type: String,
                        default: "home"
                    },
                    isForceExpanded: {
                        type: Boolean,
                        default: !1
                    },
                    showSuperDiyGuide: {
                        type: Boolean,
                        default: !1
                    }
                },
                emits: ["change-module", "nav-width-change", "close-mobile-nav", "guide-click"],
                setup(e, {emit: a}) {
                    const t = (0,
                    c.rd)()
                      , l = e
                      , i = a
                      , s = e => {
                        t.push(e),
                        f.value && i("close-mobile-nav"),
                        "/superdiy" === e && l.showSuperDiyGuide && i("guide-click")
                    }
                      , d = e => {
                        i("change-module", e)
                    }
                      , m = () => {
                        d("home"),
                        s("/")
                    }
                      , h = (0,
                    u.KR)(null)
                      , b = (0,
                    u.KR)(80)
                      , f = (0,
                    u.KR)(!1)
                      , w = () => {
                        f.value = window.innerWidth <= 768
                    }
                      , y = () => {
                        f.value ? b.value = l.isForceExpanded ? 200 : 0 : b.value = l.isForceExpanded ? 180 : 80,
                        i("nav-width-change", b.value)
                    }
                    ;
                    (0,
                    n.wB)(( () => l.isForceExpanded), ( () => {
                        y()
                    }
                    )),
                    (0,
                    n.wB)(f, ( () => {
                        y()
                    }
                    )),
                    (0,
                    n.sV)(( () => {
                        w(),
                        window.addEventListener("resize", w),
                        y()
                    }
                    ));
                    return (a, t) => ((0,
                    n.uX)(),
                    (0,
                    n.CE)("div", {
                        class: (0,
                        o.C4)(["side-nav", {
                            expanded: e.isForceExpanded,
                            mobile: f.value,
                            "mobile-expanded": f.value && e.isForceExpanded
                        }]),
                        ref_key: "sideNavRef",
                        ref: h
                    }, [(0,
                    n.Lk)("div", {
                        class: "logo-container",
                        onClick: m
                    }, t[5] || (t[5] = [(0,
                    n.Lk)("img", {
                        src: r,
                        alt: "Logo",
                        class: "logo"
                    }, null, -1)])), (0,
                    n.Lk)("nav", v, [(0,
                    n.Lk)("div", {
                        class: (0,
                        o.C4)(["nav-item", {
                            active: "/" === a.$route.path
                        }]),
                        onClick: t[0] || (t[0] = e => s("/"))
                    }, t[6] || (t[6] = [(0,
                    n.Fv)('<div class="nav-icon-container" data-v-895738c2><svg class="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-895738c2><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-895738c2></path><path d="M9 22V12h6v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-895738c2></path></svg><div class="tooltip" data-v-895738c2>首页</div></div><span class="nav-text" data-v-895738c2>首页</span>', 2)]), 2), (0,
                    n.Lk)("div", {
                        class: (0,
                        o.C4)(["nav-item", {
                            active: "/superdiy" === a.$route.path,
                            "highlight-guide": e.showSuperDiyGuide
                        }]),
                        onClick: t[1] || (t[1] = e => s("/superdiy"))
                    }, [(0,
                    n.Lk)("div", p, [t[7] || (t[7] = (0,
                    n.Lk)("svg", {
                        class: "nav-icon",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, [(0,
                    n.Lk)("path", {
                        d: "M12 2L14.85 8.53L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L9.15 8.53L12 2Z",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    })], -1)), t[8] || (t[8] = (0,
                    n.Lk)("div", {
                        class: "tooltip"
                    }, "超级DIY", -1)), e.showSuperDiyGuide ? ((0,
                    n.uX)(),
                    (0,
                    n.CE)("div", k, "😍[免费]任意位置书写/自定义背景/表格填写点这里")) : (0,
                    n.Q3)("", !0), e.showSuperDiyGuide ? ((0,
                    n.uX)(),
                    (0,
                    n.CE)("div", g)) : (0,
                    n.Q3)("", !0)]), t[9] || (t[9] = (0,
                    n.Lk)("span", {
                        class: "nav-text"
                    }, "超级DIY", -1))], 2), (0,
                    n.Lk)("div", {
                        class: (0,
                        o.C4)(["nav-item", {
                            active: "/guide" === a.$route.path
                        }]),
                        onClick: t[2] || (t[2] = e => s("/guide"))
                    }, t[10] || (t[10] = [(0,
                    n.Fv)('<div class="nav-icon-container" data-v-895738c2><svg class="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-895738c2><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2V3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-895738c2></path><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7V3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-895738c2></path></svg><div class="tooltip" data-v-895738c2>教程</div></div><span class="nav-text" data-v-895738c2>教程</span>', 2)]), 2), (0,
                    n.Lk)("div", {
                        class: (0,
                        o.C4)(["nav-item", {
                            active: "/faq" === a.$route.path
                        }]),
                        onClick: t[3] || (t[3] = e => s("/faq"))
                    }, t[11] || (t[11] = [(0,
                    n.Fv)('<div class="nav-icon-container" data-v-895738c2><svg class="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-895738c2><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-895738c2></path><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-895738c2></path><path d="M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-895738c2></path></svg><div class="tooltip" data-v-895738c2>FAQ</div></div><span class="nav-text" data-v-895738c2>FAQ</span>', 2)]), 2), (0,
                    n.Lk)("div", {
                        class: (0,
                        o.C4)(["nav-item", {
                            active: "/share" === a.$route.path
                        }]),
                        onClick: t[4] || (t[4] = e => s("/share"))
                    }, t[12] || (t[12] = [(0,
                    n.Fv)('<div class="nav-icon-container" data-v-895738c2><svg class="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-895738c2><path d="M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-895738c2></path><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-895738c2></path></svg><div class="tooltip" data-v-895738c2>移动端&amp;分享</div></div><span class="nav-text" data-v-895738c2>移动端&amp;分享</span>', 2)]), 2)])], 2))
                }
            }
              , h = t(1241);
            const b = (0,
            h.A)(m, [["__scopeId", "data-v-895738c2"]]);
            var f = b
              , w = t.p + "img/wxgzh-small.f8c14d3d.png";
            const y = {
                class: "app-footer"
            };
            function L(e, a, t, l, o, i) {
                return (0,
                n.uX)(),
                (0,
                n.CE)("footer", y, a[0] || (a[0] = [(0,
                n.Fv)('<div class="footer-content" data-v-09cbca97><div class="footer-left" data-v-09cbca97><div class="copyright" data-v-09cbca97> © 2025 凹凸工坊. All rights reserved. </div><div class="icp" data-v-09cbca97><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" data-v-09cbca97>豫ICP备2025122871号-1</a></div><div class="friend-links" data-v-09cbca97><span class="friend-links-title" data-v-09cbca97>友情链接：</span><a href="https://www.geeksidebar.com/?ref=aotu" target="_blank" rel="noopener noreferrer" data-v-09cbca97>极客侧边栏</a><a href="https://ai-bot.cn/ " target="_blank" rel="noopener noreferrer" data-v-09cbca97>AI工具集</a><a href="https://juzyw.com" target="_blank" rel="noopener noreferrer" data-v-09cbca97>聚资源网</a><a href="https://gongke.net" target="_blank" rel="noopener noreferrer" data-v-09cbca97>攻壳智能体导航</a><a href="https://www.tools-ai.cn" target="_blank" rel="noopener noreferrer" data-v-09cbca97>AI工具导航</a><a href="https://ai-kit.cn" target="_blank" rel="noopener noreferrer" data-v-09cbca97>AI工具箱</a><a href="https://nav.cocotoolset.cn" target="_blank" rel="noopener noreferrer" data-v-09cbca97>COOL全能导航</a></div></div><div class="footer-right" data-v-09cbca97><img src="' + w + '" alt="微信公众号" class="qrcode" data-v-09cbca97></div></div>', 1)]))
            }
            var _ = {
                name: "AppFooter"
            };
            const x = (0,
            h.A)(_, [["render", L], ["__scopeId", "data-v-09cbca97"]]);
            var C = x;
            const F = {
                key: 0,
                class: "announcement"
            }
              , R = {
                class: "announcement-content"
            };
            function K(e, a, t, l, o, i) {
                return o.showAnnouncement ? ((0,
                n.uX)(),
                (0,
                n.CE)("div", F, [(0,
                n.Lk)("div", R, [a[1] || (a[1] = (0,
                n.Fv)('<h3 data-v-203e1a5a>公告</h3><div class="announcement-text" data-v-203e1a5a><p data-v-203e1a5a><strong data-v-203e1a5a><span style="color:red;" data-v-203e1a5a>[改] 除下载.zip文件外，增加展示无水印图片，可长按图片保存</span></strong></p><p data-v-203e1a5a><strong data-v-203e1a5a><span style="color:red;" data-v-203e1a5a>[新] 除Word文件还支持仅输入文字。支持手机端浏览器跳转支付宝付款</span></strong></p><p data-v-203e1a5a><strong data-v-203e1a5a><span style="color:red;" data-v-203e1a5a>[临] 夸克移动端浏览器下载文件有概率出现下载失败问题，建议提前切换到手机自带浏览器</span></strong></p><p data-v-203e1a5a>0，<strong data-v-203e1a5a><span style="color:red;" data-v-203e1a5a>微信关注&quot;凹凸工坊-手写转换&quot;公众号，回复“免费激活码”，即可获取免费激活码 | 送完为止，先到先得</span></strong></p><p data-v-203e1a5a>1，<strong data-v-203e1a5a><span style="color:red;" data-v-203e1a5a>不想付费？请看：超级DIY功能（侧边栏第二个）支持自定义填写位置 + 字号大小 | 颜色 | 错别字 | 行列数 | 字间距! 点左侧边栏第二个功能(五角星图标)&quot;超级DIY&quot;!</span></strong></p><p data-v-203e1a5a>2，<strong data-v-203e1a5a><span style="color:red;" data-v-203e1a5a>新增字体支持：11款真实-手写体 + 繁体中文、日文、韩文、楷体！</span></strong></p><p data-v-203e1a5a>3，<strong data-v-203e1a5a><span style="color:red;" data-v-203e1a5a>支持格子纸/自定义背景/表格填写！！！点左侧边栏第二个功能(五角星图标)&quot;超级DIY&quot;!</span></strong></p><p data-v-203e1a5a>4，<strong data-v-203e1a5a>微信关注&quot;凹凸工坊-手写转换&quot;公众号 / 抖音关注&quot;凹凸工坊-word转手写体&quot;官号</strong>，欢迎大家私信反馈问题和产品改进建议，后续团队会按照大家期望不断优化~</p></div>', 2)), (0,
                n.Lk)("button", {
                    onClick: a[0] || (a[0] = (...e) => i.markAsRead && i.markAsRead(...e)),
                    class: "read-btn"
                }, "已读")])])) : (0,
                n.Q3)("", !0)
            }
            var A = {
                name: "AnnouncementDialog",
                data() {
                    return {
                        showAnnouncement: !0,
                        showGuide: !1
                    }
                },
                methods: {
                    markAsRead() {
                        this.showAnnouncement = !1,
                        this.showGuide = !0,
                        this.$emit("show-guide", !0),
                        setTimeout(( () => {
                            this.showGuide = !1,
                            this.$emit("show-guide", !1)
                        }
                        ), 5e3)
                    }
                }
            };
            const E = (0,
            h.A)(A, [["render", K], ["__scopeId", "data-v-203e1a5a"]]);
            var S = E;
            const P = {
                class: "ad-carousel"
            }
              , V = ["onClick"]
              , D = ["src", "alt"]
              , T = {
                class: "ad-controls"
            }
              , I = {
                class: "ad-indicators"
            }
              , z = ["onClick"];
            function U(e, a, t, l, i, s) {
                return (0,
                n.uX)(),
                (0,
                n.CE)("div", P, [(0,
                n.Lk)("div", {
                    class: "ad-carousel-container",
                    style: (0,
                    o.Tr)({
                        transform: `translateX(-${100 * l.currentIndex}%)`,
                        transition: l.isTransitioning ? "transform 0.5s ease" : "none"
                    })
                }, [((0,
                n.uX)(!0),
                (0,
                n.CE)(n.FK, null, (0,
                n.pI)(l.displayAds, ( (e, a) => ((0,
                n.uX)(),
                (0,
                n.CE)("div", {
                    key: a,
                    class: (0,
                    o.C4)(["ad-item", {
                        "fade-out": l.isFading && a === l.currentIndex
                    }]),
                    onClick: a => l.handleAdClick(e)
                }, [(0,
                n.Lk)("img", {
                    src: e.image,
                    alt: e.title,
                    class: "ad-image"
                }, null, 8, D)], 10, V)))), 128))], 4), (0,
                n.Lk)("div", T, [(0,
                n.Lk)("button", {
                    class: "control-btn prev-btn",
                    onClick: a[0] || (a[0] = (...e) => l.prevAd && l.prevAd(...e))
                }, a[2] || (a[2] = [(0,
                n.Lk)("svg", {
                    viewBox: "0 0 24 24",
                    width: "32",
                    height: "32"
                }, [(0,
                n.Lk)("path", {
                    d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z",
                    fill: "white",
                    stroke: "white",
                    "stroke-width": "1.5"
                })], -1)])), (0,
                n.Lk)("button", {
                    class: "control-btn next-btn",
                    onClick: a[1] || (a[1] = (...e) => l.nextAd && l.nextAd(...e))
                }, a[3] || (a[3] = [(0,
                n.Lk)("svg", {
                    viewBox: "0 0 24 24",
                    width: "32",
                    height: "32"
                }, [(0,
                n.Lk)("path", {
                    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
                    fill: "white",
                    stroke: "white",
                    "stroke-width": "1.5"
                })], -1)]))]), (0,
                n.Lk)("div", I, [((0,
                n.uX)(!0),
                (0,
                n.CE)(n.FK, null, (0,
                n.pI)(l.ads, ( (e, a) => ((0,
                n.uX)(),
                (0,
                n.CE)("span", {
                    key: a,
                    class: (0,
                    o.C4)(["indicator", {
                        active: l.currentIndex === a
                    }]),
                    onClick: e => l.setCurrentIndex(a)
                }, null, 10, z)))), 128))])])
            }
            var j = {
                name: "AdCarousel",
                setup() {
                    const e = [{
                        image: t(9803),
                        title: "GeekSidebar",
                        link: "https://www.geeksidebar.com/?ref=aotu"
                    }, {
                        image: t(216),
                        title: "豆包网页",
                        link: "https://dis.csqixiang.cn/unpo/dbatgf.html"
                    }, {
                        image: t(9935),
                        title: "扣子COZE",
                        link: "https://dis.csqixiang.cn/unpo/cozeatgf.html"
                    }, {
                        image: t(722),
                        title: "飞书多维表格",
                        link: "https://dis.csqixiang.cn/unpo/fsatgf.html"
                    }, {
                        image: t(1782),
                        title: "TRAE",
                        link: "https://dis.csqixiang.cn/unpo/traeatgf.html"
                    }]
                      , a = (0,
                    u.KR)(0);
                    let l = null
                      , o = null;
                    const i = (0,
                    u.KR)(!1)
                      , s = (0,
                    u.KR)(!1)
                      , d = (0,
                    n.EW)(( () => [...e, e[0]]))
                      , r = () => {
                        l && clearInterval(l),
                        l = setInterval(k, 3e3)
                    }
                      , c = () => {
                        l && (clearInterval(l),
                        l = null)
                    }
                      , v = () => {
                        c(),
                        o && clearTimeout(o),
                        o = setTimeout(( () => {
                            r()
                        }
                        ), 1e4)
                    }
                      , p = () => {
                        a.value >= d.value.length - 1 && (i.value = !0,
                        s.value = !0,
                        setTimeout(( () => {
                            i.value = !1,
                            s.value = !1,
                            a.value = 0
                        }
                        ), 500))
                    }
                      , k = () => {
                        i.value || s.value || (s.value = !0,
                        setTimeout(( () => {
                            a.value++,
                            p(),
                            setTimeout(( () => {
                                s.value = !1
                            }
                            ), 50)
                        }
                        ), 300))
                    }
                      , g = () => {
                        i.value || s.value || (s.value = !0,
                        setTimeout(( () => {
                            0 === a.value ? a.value = e.length - 1 : a.value--,
                            setTimeout(( () => {
                                s.value = !1
                            }
                            ), 50)
                        }
                        ), 300))
                    }
                      , m = e => {
                        i.value || s.value || e === a.value || (s.value = !0,
                        setTimeout(( () => {
                            v(),
                            a.value = e,
                            setTimeout(( () => {
                                s.value = !1
                            }
                            ), 50)
                        }
                        ), 300))
                    }
                      , h = e => {
                        window.open(e.link, "_blank")
                    }
                    ;
                    return (0,
                    n.sV)(( () => {
                        a.value = 0,
                        r()
                    }
                    )),
                    (0,
                    n.hi)(( () => {
                        c(),
                        o && clearTimeout(o)
                    }
                    )),
                    {
                        ads: e,
                        displayAds: d,
                        currentIndex: a,
                        isTransitioning: i,
                        isFading: s,
                        setCurrentIndex: m,
                        handleAdClick: h,
                        nextAd: k,
                        prevAd: g
                    }
                }
            };
            const q = (0,
            h.A)(j, [["render", U], ["__scopeId", "data-v-4e6744e8"]]);
            var W = q
              , O = {
                name: "App",
                components: {
                    SideNav: f,
                    AppFooter: C,
                    AnnouncementDialog: S,
                    AdCarousel: W
                },
                setup() {
                    const e = (0,
                    c.lq)()
                      , a = (0,
                    u.KR)("home")
                      , t = (0,
                    u.KR)(180)
                      , l = (0,
                    u.KR)(!0)
                      , o = (0,
                    u.KR)(!1)
                      , i = (0,
                    u.KR)(!1)
                      , s = (0,
                    n.EW)(( () => "/" === e.path))
                      , d = () => {
                        o.value = window.innerWidth <= 768,
                        l.value = !o.value
                    }
                    ;
                    (0,
                    n.wB)(( () => e.path), (e => {
                        "/" === e ? a.value = "home" : "/guide" === e ? a.value = "tutorial" : "/faq" === e ? a.value = "faq" : "/share" === e ? a.value = "share" : "/superdiy" === e && (a.value = "superdiy")
                    }
                    ), {
                        immediate: !0
                    });
                    const r = e => {
                        a.value = e
                    }
                      , v = e => {
                        t.value = e
                    }
                      , p = () => {
                        l.value = !l.value
                    }
                      , k = (0,
                    n.EW)(( () => ({
                        marginLeft: o.value ? "0" : `${t.value}px`,
                        maxWidth: o.value ? "100%" : `calc(100% - ${t.value}px)`,
                        padding: o.value ? "10px" : "20px",
                        position: "relative",
                        overflow: l.value && o.value ? "hidden" : "visible",
                        minHeight: "100vh"
                    })))
                      , g = () => {
                        o.value && (l.value = !1)
                    }
                      , m = e => {
                        i.value = e
                    }
                      , h = () => {
                        i.value = !1
                    }
                    ;
                    return (0,
                    n.sV)(( () => {
                        d(),
                        window.addEventListener("resize", d)
                    }
                    )),
                    {
                        activeModule: a,
                        changeModule: r,
                        navWidth: t,
                        handleNavWidthChange: v,
                        contentStyle: k,
                        isNavExpanded: l,
                        toggleNavExpansion: p,
                        isMobile: o,
                        closeNavigation: g,
                        isHomePage: s,
                        showGuide: i,
                        handleShowGuide: m,
                        handleGuideClick: h
                    }
                }
            };
            const X = (0,
            h.A)(O, [["render", d]]);
            var M = X
              , Q = t(9790)
              , $ = (t(4188),
            t(8111),
            t(2489),
            t(7588),
            t(1701),
            t.p + "img/dp.4b31dcdf.png")
              , B = t.p + "img/alipay-icon-big.cfc4e904.png"
              , N = t.p + "img/wxpay-icon-big.90a986ee.png"
              , Y = t(4354)
              , H = t(4813)
              , Z = t.n(H)
              , G = t(235)
              , J = t.n(G)
              , ee = t(5186)
              , ae = t.n(ee);
            const te = {
                class: "handwriting-converter"
            }
              , le = {
                key: 0,
                class: "toast-container"
            }
              , ne = {
                class: "toast-content"
            }
              , oe = {
                class: "toast-title"
            }
              , ie = {
                class: "toast-message"
            }
              , se = {
                class: "converter-container"
            }
              , de = {
                class: "control-panel animate-in"
            }
              , re = {
                class: "upload-section"
            }
              , ue = {
                class: "file-upload"
            }
              , ce = {
                class: "file-upload-area"
            }
              , ve = {
                class: "upload-buttons"
            }
              , pe = {
                key: 0,
                class: "file-info"
            }
              , ke = {
                class: "file-name"
            }
              , ge = {
                class: "options-section"
            }
              , me = {
                class: "option-item"
            }
              , he = {
                class: "option-item"
            }
              , be = {
                style: {
                    display: "flex",
                    "align-items": "center",
                    "justify-content": "space-between",
                    "margin-bottom": "8px"
                }
            }
              , fe = {
                class: "option-item"
            }
              , we = {
                for: "mistake-rate"
            }
              , ye = {
                key: 0,
                class: "advanced-settings"
            }
              , Le = {
                class: "option-item"
            }
              , _e = {
                for: "messy-ratio"
            }
              , xe = {
                class: "option-item"
            }
              , Ce = {
                for: "char-random"
            }
              , Fe = {
                class: "action-buttons"
            }
              , Re = ["disabled"]
              , Ke = ["disabled", "title"]
              , Ae = {
                class: "preview-panel animate-in-delayed"
            }
              , Ee = {
                key: 0,
                class: "preview-image fade-in"
            }
              , Se = ["src"]
              , Pe = {
                key: 0,
                class: "pagination-controls"
            }
              , Ve = ["disabled"]
              , De = {
                class: "page-info"
            }
              , Te = ["disabled"]
              , Ie = {
                key: 1,
                class: "preview-content"
            }
              , ze = {
                key: 2,
                class: "preview-loading"
            }
              , Ue = {
                key: 3,
                class: "preview-placeholder"
            }
              , je = {
                key: 1,
                class: "payment-dialog"
            }
              , qe = {
                class: "payment-content animate-scale"
            }
              , We = {
                key: 0,
                class: "package-selection"
            }
              , Oe = {
                key: 1,
                class: "wx-pay-qrcode"
            }
              , Xe = ["src", "alt"]
              , Me = {
                class: "payment-amount"
            }
              , Qe = {
                key: 2,
                class: "payment-methods"
            }
              , $e = {
                key: 0
            }
              , Be = {
                key: 1
            }
              , Ne = {
                key: 3,
                class: "card-code-input"
            }
              , Ye = {
                key: 2,
                class: "confirm-dialog"
            }
              , He = {
                class: "confirm-content animate-scale"
            }
              , Ze = {
                class: "confirm-buttons"
            }
              , Ge = {
                key: 3,
                class: "download-dialog"
            }
              , Je = {
                key: 4,
                class: "download-success-dialog"
            }
              , ea = {
                key: 5,
                class: "activation-input-dialog"
            }
              , aa = {
                class: "activation-input-content animate-scale"
            }
              , ta = {
                class: "activation-input-section"
            }
              , la = {
                class: "input-wrapper"
            }
              , na = {
                key: 6,
                class: "activation-code-dialog"
            }
              , oa = {
                class: "activation-code-content animate-scale"
            }
              , ia = {
                class: "activation-code-display"
            }
              , sa = {
                class: "code-box"
            }
              , da = {
                class: "code-text"
            }
              , ra = {
                key: 0
            }
              , ua = {
                key: 1
            }
              , ca = {
                class: "recovery-tip"
            }
              , va = {
                class: "activation-buttons"
            }
              , pa = {
                key: 7,
                class: "close-confirm-dialog"
            }
              , ka = {
                class: "close-confirm-content animate-scale"
            }
              , ga = {
                class: "reminder-text"
            }
              , ma = {
                class: "confirm-buttons"
            }
              , ha = {
                key: 8,
                class: "payment-success-dialog"
            }
              , ba = {
                class: "payment-success-content animate-scale"
            }
              , fa = {
                class: "success-message"
            }
              , wa = {
                class: "countdown-bar"
            }
              , ya = {
                key: 9,
                class: "payment-close-reminder-dialog"
            }
              , La = {
                key: 10,
                class: "text-input-dialog"
            }
              , _a = {
                class: "text-input-content animate-scale"
            }
              , xa = {
                class: "text-input-section"
            }
              , Ca = {
                class: "textarea-wrapper"
            }
              , Fa = {
                class: "text-input-buttons"
            }
              , Ra = ["disabled"]
              , Ka = {
                key: 11,
                class: "preview-result-dialog"
            }
              , Aa = {
                class: "preview-result-content animate-scale"
            }
              , Ea = {
                class: "preview-result-message"
            }
              , Sa = {
                key: 12,
                class: "payment-error-dialog"
            }
              , Pa = {
                class: "payment-error-content animate-scale"
            }
              , Va = {
                class: "payment-error-message"
            }
              , Da = {
                key: 13,
                class: "order-loading-dialog"
            }
              , Ta = {
                key: 14,
                class: "payment-status-check-dialog"
            }
              , Ia = {
                key: 0,
                class: "no-word-dialog"
            }
              , za = {
                class: "no-word-content animate-scale"
            }
              , Ua = {
                class: "copy-section"
            }
              , ja = {
                class: "copy-area"
            }
              , qa = {
                ref: "promptText",
                readonly: ""
            }
              , Wa = {
                key: 0
            }
              , Oa = {
                key: 1
            };
            var Xa = {
                __name: "HandwritingConverter",
                setup(e) {
                    (0,
                    Y.u)({
                        title: "凹凸工坊-手写转换官网_手写模拟器_一键生成手写文稿_手写字体在线转换_在线字体制作_手写APP下载_模仿手写软件_AI手写字体生成_手写字体生成器_字体下载",
                        meta: [{
                            name: "description",
                            content: "凹凸工坊,手写转换官网入口,凹凸工坊-手写转换,手写模拟器,一键生成手写文稿,模仿手写软件,在线手写字体转换器,手写模拟器APP下载,AI生成专属手写字体,制作自己笔迹的字体,打印出以假乱真的模拟手写文档,让打印出的字看上去像手写的软件,模拟抄写软件,代替抄写,抄写神器软件"
                        }, {
                            name: "keywords",
                            content: "凹凸工坊,凹凸工坊-手写转换,凹凸工坊官网入口,手写模拟器,手写体生成器,模仿手写软件,手写字体在线转换,手写模拟器APP下载,凹凸工坊下载,手写字体制作,模拟抄写软件,手写字体生成器,字体下载,个人笔迹字体制作"
                        }]
                    });
                    const a = (0,
                    u.KR)(0)
                      , i = (0,
                    u.KR)([])
                      , s = (0,
                    u.KR)([])
                      , d = (0,
                    u.KR)(!1)
                      , r = () => {
                        const e = document.createElement("textarea");
                        e.value = It.value,
                        document.body.appendChild(e),
                        e.select(),
                        document.execCommand("copy"),
                        document.body.removeChild(e),
                        d.value = !0,
                        setTimeout(( () => {
                            d.value = !1
                        }
                        ), 2e3)
                    }
                      , c = () => {
                        const e = `激活码：${It.value}\n\n请妥善保管您的激活码，如果遗失请到"教程-激活码找回与剩余次数查询"（https://www.autohanding.com/guide#activation-code-refund）界面找回。\n\n凹凸工坊 - 手写转换工具`
                          , a = new Blob([e],{
                            type: "text/plain;charset=utf-8"
                        })
                          , t = URL.createObjectURL(a)
                          , l = document.createElement("a");
                        l.href = t,
                        l.download = "激活码.txt",
                        document.body.appendChild(l),
                        l.click(),
                        document.body.removeChild(l),
                        URL.revokeObjectURL(t)
                    }
                      , v = () => {
                        Ut.value = !1,
                        zt.value = !1,
                        It.value = "",
                        d.value = !1,
                        q.value = !1,
                        H.value = !1,
                        W.value = !1,
                        yt()
                    }
                      , p = (0,
                    u.KR)(!1)
                      , k = (0,
                    u.KR)(null)
                      , g = (0,
                    u.KR)(!1)
                      , m = (0,
                    n.EW)(( () => 0 === i.value.length ? null : i.value[a.value]))
                      , h = (0,
                    n.EW)(( () => i.value.length))
                      , b = () => {
                        a.value > 0 && a.value--
                    }
                      , f = () => {
                        a.value < h.value - 1 && a.value++
                    }
                      , w = (0,
                    u.KR)(!1)
                      , y = (0,
                    u.KR)([]);
                    let L = 0;
                    const _ = (e, a="info") => {
                        e.includes("Failed to fetch") && (e = "网络异常或是文件字数太多（请拆分为小文件）或在电脑端重试");
                        const t = ++L
                          , l = {
                            id: t,
                            type: a,
                            title: "info" === a ? "提示" : "success" === a ? "成功" : "warning" === a ? "警告" : "错误",
                            message: e
                        };
                        y.value.push(l),
                        w.value = !0,
                        setTimeout(( () => {
                            const e = y.value.findIndex((e => e.id === t));
                            -1 !== e && (y.value.splice(e, 1),
                            0 === y.value.length && (w.value = !1))
                        }
                        ), 3e3)
                    }
                      , x = e => {
                        const t = e.target.files[0];
                        if (!t)
                            return;
                        const l = ["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
                        if (!l.includes(t.type))
                            return _("请上传Word文件（.docx格式）", "error"),
                            void (e.target.value = "");
                        const n = 1048576;
                        if (t.size > n)
                            return _("文件大小超过1.0MB（系统压力大请见谅），请分割成小文件或删去内容图片再上传！", "warning"),
                            void (e.target.value = "");
                        wt(),
                        K.value = "file",
                        A.value = "",
                        k.value = t,
                        g.value = !1,
                        i.value = [],
                        s.value = [],
                        a.value = 0
                    }
                      , C = () => {
                        k.value = null,
                        g.value = !1,
                        i.value = [],
                        s.value = [],
                        a.value = 0;
                        const e = document.getElementById("word-file");
                        e && (e.value = "")
                    }
                      , F = (0,
                    u.KR)(0)
                      , R = (0,
                    u.KR)(0)
                      , K = (0,
                    u.KR)("file")
                      , A = (0,
                    u.KR)("")
                      , E = (0,
                    u.KR)(!1)
                      , S = async e => new Promise(( (a, l) => {
                        const n = document.createElement("canvas")
                          , o = n.getContext("2d")
                          , i = new Image
                          , s = new Image;
                        i.crossOrigin = "anonymous",
                        s.crossOrigin = "anonymous",
                        i.onload = () => {
                            n.width = i.width,
                            n.height = i.height,
                            o.drawImage(i, 0, 0),
                            s.src = t(2761),
                            s.onload = () => {
                                o.globalAlpha = .3,
                                o.save(),
                                // o.translate(n.width / 2, .25 * n.height),
                                // o.rotate(-30 * Math.PI / 180),
                                // o.drawImage(s, -s.width / 2, -s.height / 2),
                                o.restore(),
                                o.save(),
                                // o.translate(n.width / 2, .75 * n.height),
                                // o.rotate(-30 * Math.PI / 180),
                                // o.drawImage(s, -s.width / 2, -s.height / 2),
                                o.restore(),
                                a(n.toDataURL("image/jpeg", .9))
                            }
                            ,
                            s.onerror = l
                        }
                        ,
                        i.onerror = l,
                        i.src = e;
                    }
                    ))
                      , P = async () => {
                        if (p.value)
                            return void console.log("预览生成中，请稍候...");
                        if ("file" === K.value && !k.value)
                            return lt.value = !1,
                            nt.value = "请先上传Word文件，再点击预览按钮生成预览。",
                            tt.value = !0,
                            void _("请先上传Word文件", "warning");
                        if ("text" === K.value && !A.value.trim())
                            return lt.value = !1,
                            nt.value = "请先输入要转换的文本内容，再点击预览按钮生成预览。",
                            tt.value = !0,
                            void _("请先输入文本内容", "warning");
                        if ("text" === K.value && A.value.length > 3500)
                            return lt.value = !1,
                            nt.value = "文本内容超过3500字限制，请减少文本内容后重试。",
                            tt.value = !0,
                            void _("文本内容超过3500字限制", "warning");
                        p.value = !0,
                        g.value = !1;
                        const e = Date.now()
                          , t = 3e3
                          , l = new FormData;
                        let n = "";
                        "file" === K.value ? (l.append("file", k.value),
                        n = "https://www.autohanding.com/api/v1/handwrite-preview/convert") : (l.append("fullText", A.value),
                        n = "https://www.autohanding.com/api/v1/handwrite-preview/convert-text");
                        const o = {
                            fontType: V.value,
                            paperBgType: D.value,
                            mistakeRate: T.value.toString(),
                            messyRatio: I.value.toString(),
                            charRandom: z.value.toString(),
                            clientId: xt.value
                        };
                        Object.keys(o).forEach((e => {
                            l.append(e, o[e])
                        }
                        ));
                        try {
                            const o = await fetch(n, {
                                method: "POST",
                                body: l
                            });
                            if (!o.ok) {
                                const e = await o.text();
                                throw e.includes("繁忙") || e.includes("频") ? new Error("系统限流中（20秒只能一次），您的操作太频繁了，请稍候再试") : new Error("预览生成失败，请检查您的参数信息并稍后再试。（可能是字数太多，请分割成小文件再上传）")
                            }
                            const r = o.headers.get("wordCount")
                              , u = o.headers.get("money");
                            r && (F.value = parseInt(r)),
                            u && (R.value = parseFloat(u));
                            const c = o.headers.get("Content-Type");
                            if (c && !c.includes("application/zip") && !c.includes("application/octet-stream"))
                                throw console.warn("服务器返回了非ZIP格式数据:", c),
                                new Error("系统繁忙中😭😭😭 转换失败。请稍后再试。（可能是字数太多，请分割成小文件再上传）");
                            const v = await o.blob();
                            if (v.size < 20) {
                                await v.text();
                                throw console.warn("服务器返回数据过小，可能不是ZIP文件"),
                                new Error("系统繁忙中😭😭😭 转换失败。请稍后再试。（可能是字数太多，请分割成小文件再上传）")
                            }
                            const p = await v.slice(0, 1e3).text();
                            if (p.includes("<html") || p.includes("<script") || p.includes("<!DOCTYPE"))
                                throw console.error("服务器返回了HTML内容而非ZIP文件:", p),
                                new Error("系统繁忙中😭😭😭 转换失败。请稍后再试。（可能是字数太多，请分割成小文件再上传）");
                            const k = new (Z());
                            let m;
                            try {
                                m = await k.loadAsync(v)
                            } catch (d) {
                                console.error("ZIP解析失败:", d);
                                const e = await new Promise((e => {
                                    const a = new FileReader;
                                    a.onload = () => e(a.result),
                                    a.readAsText(v)
                                }
                                ));
                                throw console.error("服务器响应内容:", e),
                                e.includes("繁忙") || e.includes("频") ? new Error("系统限流中（20秒只能一次），您的操作太频繁了，请稍候再试") : e.includes("<script") || e.includes("<html") || e.includes("<!DOCTYPE") ? new Error("预览生成失败: 服务器可能存在安全限制或需要身份验证。请刷新页面后重试。（可能是字数太多，请分割成小文件再上传）") : (console.warn("预览生成失败: 服务器返回的数据不是有效的ZIP格式"),
                                new Error("系统繁忙中😭😭😭 转换失败。请稍后再试。（可能是字数太多，请分割成小文件再上传）"))
                            }
                            const h = Object.values(m.files).filter((e => e.name.match(/\.(jpg|jpeg|png|gif)$/i)))
                              , b = await Promise.all(h.map((async e => {
                                const a = await e.async("blob")
                                  , t = URL.createObjectURL(a)
                                  , l = await S(t);
                                return URL.revokeObjectURL(t),
                                l
                            }
                            )))
                              , f = await Promise.all(h.map((async e => {
                                const a = await e.async("blob");
                                return URL.createObjectURL(a)
                            }
                            )))
                              , w = Date.now() - e;
                            w < t && await new Promise((e => setTimeout(e, t - w))),
                            i.value = b,
                            s.value = f,
                            g.value = !0,
                            a.value = 0,
                            lt.value = !0,
                            b.length > 0 ? nt.value = `预览生成成功，共 ${b.length} 页。现在您可以查看效果，满意后点击下载按钮下载高清无水印版本。` : nt.value = "预览生成成功，但未找到图片文件，可能是文件格式不兼容或内有特殊字符。",
                            tt.value = !0,
                            b.length > 0 ? _(`预览生成成功，共${b.length}页`, "success") : _("预览生成成功，但未找到图片文件", "warning")
                        } catch (r) {
                            console.error("预览生成失败:", r);
                            const a = Date.now() - e;
                            a < t && await new Promise((e => setTimeout(e, t - a))),
                            lt.value = !1,
                            r.message.includes("繁忙") || r.message.includes("频") ? nt.value = "系统限流中（20秒只能一次），您的操作太频繁了，请稍候再试" : r.message.includes("ZIP") ? nt.value = "预览生成失败，服务器返回了无效的数据格式。请刷新页面后重试，或联系客服。" : nt.value = "预览生成失败，请检查您的文件格式和参数是否正确，或稍后再试。",
                            tt.value = !0,
                            _(r.message, "error")
                        } finally {
                            p.value = !1
                        }
                    }
                      , V = (0,
                    u.KR)("0")
                      , D = (0,
                    u.KR)("20")
                      , T = (0,
                    u.KR)(3)
                      , I = (0,
                    u.KR)(0)
                      , z = (0,
                    u.KR)(0)
                      , U = (0,
                    u.KR)(!0);
                    function j() {
                        U.value = !U.value
                    }
                    const q = (0,
                    u.KR)(!1)
                      , W = (0,
                    u.KR)(!1)
                      , O = (0,
                    u.KR)("")
                      , X = (0,
                    u.KR)(!1)
                      , M = (0,
                    u.KR)("400")
                      , Q = (0,
                    u.KR)("2")
                      , H = (0,
                    u.KR)(!1)
                      , G = (0,
                    u.KR)("")
                      , ee = (0,
                    u.KR)("")
                      , Xa = (0,
                    u.KR)(0)
                      , Ma = (0,
                    u.KR)("wechat");
                    let Qa = null
                      , $a = (0,
                    u.KR)(!1);
                    const Ba = (0,
                    u.KR)(!1)
                      , Na = (0,
                    u.KR)(!1)
                      , Ya = ((0,
                    u.KR)(!1),
                    (0,
                    u.KR)(""))
                      , Ha = (0,
                    u.KR)(!1)
                      , Za = (0,
                    u.KR)(null)
                      , Ga = (0,
                    u.KR)("")
                      , Ja = (0,
                    u.KR)(!1)
                      , et = (0,
                    u.KR)("")
                      , at = (0,
                    u.KR)(100)
                      , tt = (0,
                    u.KR)(!1)
                      , lt = (0,
                    u.KR)(!0)
                      , nt = (0,
                    u.KR)("")
                      , ot = (0,
                    u.KR)(!1)
                      , it = (0,
                    u.KR)("")
                      , st = (0,
                    u.KR)(!1)
                      , dt = (0,
                    u.KR)(!1)
                      , rt = (0,
                    u.KR)(!1)
                      , ut = async e => {
                        if (Xa.value = 0,
                        Qa && (clearTimeout(Qa),
                        Qa = null),
                        $a.value = !1,
                        "wechat" !== e)
                            if ("alipay" !== e) {
                                if ("card" === e)
                                    return O.value && "" !== O.value.trim() ? void await ct(O.value) : void _("请输入有效的卡密", "warning");
                                q.value = !1,
                                W.value = !1,
                                O.value = "",
                                _("支付成功！正在下载文件...", "success")
                            } else {
                                Ma.value = "alipay",
                                st.value = !0;
                                const e = Date.now()
                                  , n = 2e3;
                                try {
                                    let l, o = new FormData;
                                    if (Qt.value)
                                        l = "https://www.autohanding.com/api/alipay/h5-pay-cp",
                                        o.append("clientId", xt.value),
                                        o.append("cpCount", Q.value);
                                    else {
                                        l = "https://www.autohanding.com/api/alipay/native-pay",
                                        "file" === K.value ? o.append("file", k.value) : o.append("fullText", A.value);
                                        const e = {
                                            paperBgType: D.value,
                                            fontType: V.value,
                                            messyRatio: I.value.toString(),
                                            charRandom: z.value.toString(),
                                            clientId: xt.value,
                                            dpi: M.value
                                        };
                                        Object.keys(e).forEach((a => {
                                            o.append(a, e[a])
                                        }
                                        ))
                                    }
                                    const i = await fetch(l, {
                                        method: "POST",
                                        body: o
                                    })
                                      , s = Date.now() - e;
                                    if (s < n && await new Promise((e => setTimeout(e, n - s))),
                                    st.value = !1,
                                    !i.ok) {
                                        let e = "服务器响应异常，请稍后再试";
                                        try {
                                            const a = await i.json();
                                            e = a.msg || e
                                        } catch (a) {
                                            try {
                                                const a = await i.text();
                                                a && (e = a)
                                            } catch (t) {}
                                        }
                                        throw new Error(e)
                                    }
                                    const d = await i.json();
                                    if (1 !== d.code || !d.data)
                                        throw new Error(d.msg || "支付请求失败，请稍后再试");
                                    if (Qt.value) {
                                        const {redirectUrl: e, orderNo: a, money: t} = d.data;
                                        if (!e || !a || !t)
                                            throw new Error("支付信息不完整，请刷新页面重试");
                                        ee.value = a,
                                        Xa.value = t,
                                        At(a),
                                        H.value = !0,
                                        Rt(),
                                        window.location.href = e
                                    } else {
                                        const {QRCodeUrl: e, orderNo: a} = d.data;
                                        if (!e || !a)
                                            throw new Error("支付信息不完整，请刷新页面重试");
                                        G.value = e,
                                        ee.value = a,
                                        H.value = !0,
                                        At(a),
                                        _("请使用支付宝扫码支付", "info")
                                    }
                                } catch (l) {
                                    console.error("支付宝支付请求失败:", l),
                                    st.value = !1,
                                    it.value = l.message || "支付请求失败，请稍后再试",
                                    ot.value = !0,
                                    H.value = !1,
                                    G.value = "",
                                    ee.value = ""
                                }
                            }
                        else {
                            Ma.value = "wechat",
                            st.value = !0;
                            const e = Date.now()
                              , n = 2e3;
                            try {
                                const l = "https://www.autohanding.com/api/wx-pay/native-pay-cp"
                                  , o = new FormData;
                                o.append("clientId", xt.value),
                                o.append("cpCount", Q.value);
                                const i = await fetch(l, {
                                    method: "POST",
                                    body: o
                                })
                                  , s = Date.now() - e;
                                if (s < n && await new Promise((e => setTimeout(e, n - s))),
                                st.value = !1,
                                !i.ok) {
                                    let e = "服务器响应异常，请稍后再试";
                                    try {
                                        const a = await i.json();
                                        e = a.msg || e
                                    } catch (a) {
                                        try {
                                            const a = await i.text();
                                            a && (e = a)
                                        } catch (t) {}
                                    }
                                    throw new Error(e)
                                }
                                const d = await i.json();
                                if (1 !== d.code || !d.data)
                                    throw new Error(d.msg || "支付请求失败，请稍后再试");
                                const {QRCodeUrl: r, orderNo: u, money: c} = d.data;
                                if (!r || !u || !c)
                                    throw new Error("支付信息不完整，请刷新页面重试");
                                G.value = r,
                                ee.value = u,
                                Xa.value = c,
                                H.value = !0,
                                At(u),
                                _("请使用微信扫码支付", "info")
                            } catch (l) {
                                console.error("微信支付请求失败:", l),
                                st.value = !1,
                                it.value = l.message || "支付请求失败，请稍后再试",
                                ot.value = !0,
                                H.value = !1,
                                G.value = "",
                                ee.value = ""
                            }
                        }
                    }
                      , ct = async e => {
                        if (e && "" !== e.trim()) {
                            Na.value = !0,
                            X.value = !0;
                            try {
                                q.value = !1,
                                W.value = !1,
                                O.value = "",
                                await vt(e)
                            } catch (a) {
                                console.error("卡密验证失败:", a),
                                _("卡密无效或已使用，请重新输入", "error"),
                                Na.value = !1,
                                X.value = !1,
                                O.value = ""
                            }
                        } else
                            _("请输入有效的卡密", "warning")
                    }
                      , vt = async e => {
                        if ("file" === K.value) {
                            if (!k.value)
                                return void _("请先上传Word文件", "warning")
                        } else if (!A.value || "" === A.value.trim())
                            return void _("请先输入文本内容", "warning");
                        Na.value = !0,
                        X.value = !0,
                        Ga.value = e;
                        const a = Date.now()
                          , t = 3e3;
                        try {
                            if ("0" === D.value || "20" === D.value || "22" === D.value) {
                                if (0 === i.value.length || 0 === s.value.length)
                                    return void _("请先点击预览按钮生成预览", "warning");
                                if (0 === s.value.length)
                                    return void _("预览图片数据异常，请重新生成预览", "error");
                                const n = new (Z());
                                for (let e = 0; e < s.value.length; e++) {
                                    const a = await fetch(s.value[e])
                                      , t = await a.blob();
                                    n.file(`page_${e + 1}.jpg`, t)
                                }
                                const o = await n.generateAsync({
                                    type: "blob"
                                })
                                  , d = new FormData;
                                d.append("clientId", xt.value),
                                d.append("cp", e),
                                d.append("count", "1");
                                const r = "file" === K.value ? k.value.name.substring(0, 10) : A.value.substring(0, 10);
                                d.append("logBody", r);
                                const u = await fetch("https://www.autohanding.com/api/cp/order/deducted", {
                                    method: "POST",
                                    body: d
                                });
                                if (!u.ok) {
                                    let e = "卡密扣减请求失败";
                                    try {
                                        const a = await u.json();
                                        a.msg && a.msg.includes("频率") && (e = a.msg)
                                    } catch (l) {}
                                    throw new Error(e)
                                }
                                const c = await u.json();
                                if (1 === c.code) {
                                    _(`扣减成功：${c.msg}`, "success");
                                    const e = Date.now() - a;
                                    e < t && await new Promise((a => setTimeout(a, t - e)));
                                    const l = "凹凸工坊手写稿.zip";
                                    if (window.navigator && window.navigator.msSaveOrOpenBlob)
                                        window.navigator.msSaveOrOpenBlob(o, l);
                                    else {
                                        const e = new Blob([o],{
                                            type: "application/zip"
                                        })
                                          , a = URL.createObjectURL(e)
                                          , t = document.createElement("a");
                                        t.href = a,
                                        t.download = l,
                                        t.setAttribute("download", l),
                                        document.body.appendChild(t),
                                        t.click(),
                                        document.body.removeChild(t),
                                        setTimeout(( () => {
                                            URL.revokeObjectURL(a)
                                        }
                                        ), 100)
                                    }
                                    _("文件下载完成", "success"),
                                    Ha.value = !0
                                } else
                                    _(`扣减失败：${c.msg}`, "error")
                            } else {
                                const o = new FormData;
                                let i;
                                "file" === K.value ? (i = "https://www.autohanding.com/api/v1/handwrite-download/convert-cp",
                                o.append("file", k.value)) : (i = "https://www.autohanding.com/api/v1/handwrite-download/convert-cp-text",
                                o.append("fullText", A.value));
                                const s = {
                                    fontType: V.value,
                                    paperBgType: D.value,
                                    mistakeRate: T.value.toString(),
                                    messyRatio: I.value.toString(),
                                    charRandom: z.value.toString(),
                                    orderNo: e,
                                    clientId: xt.value,
                                    dpi: M.value,
                                    cp: e,
                                    count: "1"
                                };
                                Object.keys(s).forEach((e => {
                                    o.append(e, s[e])
                                }
                                ));
                                const d = await fetch(i, {
                                    method: "POST",
                                    body: o
                                });
                                if (!d.ok) {
                                    let e = "";
                                    const a = await d.text();
                                    try {
                                        const t = JSON.parse(a);
                                        e = t.msg || "下载失败-[激活码可用次数不会减少~]"
                                    } catch (l) {
                                        e = a || "下载失败-[激活码可用次数不会减少~]"
                                    }
                                    throw new Error(e)
                                }
                                const r = await d.blob();
                                if (Za.value = r,
                                0 === r.size)
                                    throw new Error("下载的文件为空-[激活码可用次数不会减少~]");
                                if (r.size < 102400)
                                    try {
                                        const e = new (Z());
                                        await e.loadAsync(r)
                                    } catch (n) {
                                        throw new Error("下载的文件损坏，无法解压-[激活码可用次数不会减少~]")
                                    }
                                const u = new FormData;
                                u.append("clientId", xt.value),
                                u.append("cp", e),
                                u.append("count", "1");
                                const c = "file" === K.value ? k.value.name.substring(0, 10) : A.value.substring(0, 10);
                                u.append("logBody", c);
                                const v = await fetch("https://www.autohanding.com/api/cp/order/deducted", {
                                    method: "POST",
                                    body: u
                                });
                                if (!v.ok)
                                    throw new Error("请求失败-[激活码可用次数不会减少~]");
                                const p = await v.json();
                                if (1 === p.code) {
                                    _(`扣减成功：${p.msg}`, "success");
                                    const e = Date.now() - a;
                                    e < t && await new Promise((a => setTimeout(a, t - e)));
                                    const l = "凹凸工坊手写稿.zip";
                                    if (window.navigator && window.navigator.msSaveOrOpenBlob)
                                        window.navigator.msSaveOrOpenBlob(r, l);
                                    else {
                                        const e = new Blob([r],{
                                            type: "application/zip"
                                        })
                                          , a = URL.createObjectURL(e)
                                          , t = document.createElement("a");
                                        t.href = a,
                                        t.download = l,
                                        t.setAttribute("download", l),
                                        document.body.appendChild(t),
                                        t.click(),
                                        document.body.removeChild(t),
                                        setTimeout(( () => {
                                            URL.revokeObjectURL(a)
                                        }
                                        ), 100)
                                    }
                                    _("文件下载完成", "success"),
                                    Ha.value = !0
                                } else
                                    _(`扣减失败：${p.msg}`, "error")
                            }
                        } catch (o) {
                            const e = Date.now() - a;
                            e < t && await new Promise((a => setTimeout(a, t - e))),
                            console.error("卡密下载失败:", o),
                            _(o.message || "下载失败，请稍后重试-[激活码可用次数不会减少~]", "error")
                        } finally {
                            Na.value = !1,
                            X.value = !1
                        }
                    }
                      , pt = () => {
                        H.value ? Ba.value = !0 : gt()
                    }
                      , kt = () => {
                        Ba.value = !1;
                        const e = ee.value;
                        e && Ft.value[e] && Et(e, !1),
                        Dt.value && (clearInterval(Dt.value),
                        Dt.value = null),
                        Tt.value && (clearTimeout(Tt.value),
                        Tt.value = null),
                        Vt.value = !1,
                        $a.value = !0,
                        gt()
                    }
                      , gt = () => {
                        $a.value = !0;
                        const e = ee.value;
                        if (e && Ft.value[e] && Et(e, !1),
                        e) {
                            const a = new FormData;
                            a.append("orderNo", e),
                            a.append("clientId", xt.value),
                            fetch("https://www.autohanding.com/api/cp/order/cancel", {
                                method: "POST",
                                body: a
                            }).catch((e => {
                                console.error("取消订单请求发送失败:", e)
                            }
                            ))
                        }
                        Qa = setTimeout((async () => {
                            try {
                                const a = new FormData;
                                a.append("clientId", xt.value),
                                a.append("orderNo", e);
                                const t = await fetch("https://www.autohanding.com/api/cp/get-cp", {
                                    method: "POST",
                                    body: a
                                })
                                  , l = await t.json();
                                1 === l.code && l.data && l.data.length > 25 && (It.value = l.data,
                                zt.value = !0)
                            } catch (a) {
                                console.error("获取激活码失败:", a)
                            } finally {
                                $a.value = !1,
                                ee.value = "",
                                Qa = null
                            }
                        }
                        ), 6e3),
                        q.value = !1,
                        H.value = !1,
                        W.value = !1,
                        O.value = "",
                        G.value = "",
                        rt.value = !0,
                        _("已取消支付", "info")
                    }
                      , mt = () => {
                        if ("file" === K.value) {
                            if (!k.value)
                                return void _("请先上传文件", "warning")
                        } else if (!A.value || "" === A.value.trim())
                            return void _("请先输入文本内容", "warning");
                        Qa && (clearTimeout(Qa),
                        Qa = null),
                        q.value = !0,
                        H.value = !1,
                        G.value = "",
                        ee.value = "",
                        $a.value = !1,
                        Ba.value = !1
                    }
                      , ht = () => {
                        Ha.value = !1,
                        bt()
                    }
                      , bt = () => {
                        "0" === D.value || "20" === D.value || "22" === D.value ? s.value.length > 0 && (i.value = [...s.value],
                        a.value = 0,
                        _("已切换到无水印版本-您可以长按保存图片", "success")) : ft()
                    }
                      , ft = async () => {
                        try {
                            if (_("正在解压无水印图片...", "info"),
                            !Za.value)
                                throw new Error("未找到已下载的文件数据");
                            const e = Za.value
                              , t = new (Z())
                              , l = await t.loadAsync(e)
                              , n = []
                              , o = Object.keys(l.files).filter((e => e.toLowerCase().endsWith(".jpg") || e.toLowerCase().endsWith(".jpeg") || e.toLowerCase().endsWith(".png"))).sort();
                            for (const a of o) {
                                const e = l.files[a]
                                  , t = await e.async("blob")
                                  , o = URL.createObjectURL(t);
                                n.push(o)
                            }
                            n.length > 0 ? (i.value = n,
                            a.value = 0,
                            _("已切换到无水印版本-您可以长按保存图片", "success")) : _("未找到图片文件", "warning")
                        } catch (e) {
                            console.error("解压文件失败:", e),
                            _("解压文件失败，请重新下载", "error")
                        }
                    }
                      , wt = () => {
                        k.value = null,
                        g.value = !1,
                        i.value = [],
                        s.value = [],
                        a.value = 0,
                        Za.value = null;
                        const e = document.getElementById("word-file");
                        e && (e.value = ""),
                        q.value = !1,
                        W.value = !1,
                        H.value = !1,
                        O.value = "",
                        ee.value = "",
                        Xa.value = 0,
                        G.value = "",
                        X.value = !1,
                        p.value = !1,
                        st.value = !1,
                        dt.value = !1
                    }
                      , yt = () => {
                        q.value = !1,
                        W.value = !1,
                        H.value = !1,
                        O.value = "",
                        ee.value = "",
                        Xa.value = 0,
                        G.value = "",
                        X.value = !1,
                        p.value = !1,
                        st.value = !1,
                        dt.value = !1
                    }
                      , Lt = () => {
                        tt.value = !1
                    }
                      , _t = () => {
                        ot.value = !1
                    }
                      , xt = (0,
                    u.KR)("")
                      , Ct = async () => {
                        const e = (new Date).getTime()
                          , a = Math.floor(1e6 * Math.random())
                          , t = J().getParser(window.navigator.userAgent)
                          , l = t.getBrowser().name || "unknown"
                          , n = t.getOS().name || "unknown"
                          , o = t.getPlatform().type || "unknown"
                          , i = `${l}_${n}_${o}`;
                        let s = "unknown";
                        try {
                            const e = await fetch("https://api.ipify.org?format=json");
                            if (e.ok) {
                                const a = await e.json();
                                s = a.ip || "unknown"
                            }
                        } catch (r) {
                            console.error("获取IP地址失败:", r)
                        }
                        const d = `${s}_${i}_${e}_${a}`;
                        return d
                    }
                    ;
                    (0,
                    n.sV)((async () => {
                        const e = localStorage.getItem("global_client_id");
                        e ? xt.value = e : (xt.value = await Ct(),
                        localStorage.setItem("global_client_id", xt.value))
                    }
                    ));
                    const Ft = (0,
                    u.KR)({})
                      , Rt = () => {
                        const e = {
                            showPayment: q.value,
                            showWxPayQRCode: H.value,
                            wxPayQRCodeUrl: G.value,
                            currentOrderNo: ee.value,
                            currentPaymentAmount: Xa.value,
                            currentPayType: Ma.value,
                            selectedPackage: Q.value,
                            timestamp: Date.now()
                        };
                        sessionStorage.setItem("handwriting_dialog_state", JSON.stringify(e))
                    }
                      , Kt = () => {
                        const e = sessionStorage.getItem("handwriting_dialog_state");
                        if (e)
                            try {
                                const a = JSON.parse(e)
                                  , t = 18e5;
                                Date.now() - a.timestamp < t ? (q.value = a.showPayment || !1,
                                H.value = a.showWxPayQRCode || !1,
                                G.value = a.wxPayQRCodeUrl || "",
                                ee.value = a.currentOrderNo || "",
                                Xa.value = a.currentPaymentAmount || 0,
                                Ma.value = a.currentPayType || "alipay",
                                Q.value = a.selectedPackage || "2",
                                a.showWxPayQRCode && a.currentOrderNo && (q.value = !0,
                                H.value = !0),
                                _("已恢复支付状态，请继续完成支付", "info"),
                                setTimeout(( () => {
                                    sessionStorage.removeItem("handwriting_dialog_state")
                                }
                                ), 1e3)) : sessionStorage.removeItem("handwriting_dialog_state")
                            } catch (a) {
                                console.error("恢复弹窗状态失败:", a),
                                sessionStorage.removeItem("handwriting_dialog_state")
                            }
                    }
                    ;
                    (0,
                    n.sV)((async () => {
                        const e = localStorage.getItem("global_client_id");
                        e ? xt.value = e : (xt.value = await Ct(),
                        localStorage.setItem("global_client_id", xt.value)),
                        Kt(),
                        document.addEventListener("visibilitychange", ( () => {
                            document.hidden || Kt()
                        }
                        ));
                        const a = localStorage.getItem("handwriting_pending_orders");
                        if (a)
                            try {
                                Ft.value = JSON.parse(a);
                                const e = Object.keys(Ft.value);
                                if (e.forEach((e => {
                                    Ft.value[e] && void 0 === Ft.value[e].showStatus && (Ft.value[e].showStatus = !0)
                                }
                                )),
                                localStorage.setItem("handwriting_pending_orders", JSON.stringify(Ft.value)),
                                e.length > 0) {
                                    const a = e[e.length - 1];
                                    "pending" === Ft.value[a].status && !0 === Ft.value[a].showStatus && St(a)
                                }
                            } catch (t) {
                                console.error("解析待下载订单信息失败:", t),
                                localStorage.removeItem("handwriting_pending_orders")
                            }
                    }
                    ));
                    const At = e => {
                        e && (Ft.value[e] = {
                            status: "pending",
                            timestamp: Date.now(),
                            showStatus: !0
                        },
                        localStorage.setItem("handwriting_pending_orders", JSON.stringify(Ft.value)))
                    }
                      , Et = (e, a) => {
                        e && Ft.value[e] && (Ft.value[e].showStatus = a,
                        localStorage.setItem("handwriting_pending_orders", JSON.stringify(Ft.value)))
                    }
                      , St = e => {
                        Ft.value[e] && !1 === Ft.value[e].showStatus || (Ga.value = e,
                        Ya.value = "您有一个支付成功但未完成下载的订单，请点击确定下载补救教程")
                    }
                      , Pt = e => {
                        if (k.value)
                            return e.preventDefault(),
                            e.returnValue = "您有未保存的文件，确定要离开吗？",
                            e.returnValue
                    }
                    ;
                    (0,
                    n.sV)(( () => {
                        window.addEventListener("beforeunload", Pt)
                    }
                    )),
                    (0,
                    n.xo)(( () => {
                        window.removeEventListener("beforeunload", Pt)
                    }
                    ));
                    const Vt = (0,
                    u.KR)(!1)
                      , Dt = (0,
                    u.KR)(null)
                      , Tt = (0,
                    u.KR)(null)
                      , It = (0,
                    u.KR)("")
                      , zt = (0,
                    u.KR)(!1)
                      , Ut = (0,
                    u.KR)(!1)
                      , jt = (0,
                    u.KR)(!1)
                      , qt = (0,
                    u.KR)("")
                      , Wt = () => {
                        if (Vt.value)
                            return;
                        dt.value = !0,
                        Vt.value = !0;
                        let e = 0;
                        const a = 3
                          , t = [4e3, 5e3, 6e3]
                          , l = async () => {
                            const n = "https://www.autohanding.com/api/cp/get-cp";
                            try {
                                const e = new FormData;
                                e.append("clientId", xt.value),
                                e.append("orderNo", ee.value);
                                const a = await fetch(n, {
                                    method: "POST",
                                    body: e
                                })
                                  , t = await a.json();
                                if (1 === t.code && t.data && t.data.length > 25)
                                    return It.value = t.data,
                                    zt.value = !0,
                                    clearTimeout(Tt.value),
                                    Vt.value = !1,
                                    dt.value = !1,
                                    q.value = !1,
                                    H.value = !1,
                                    W.value = !1,
                                    void c()
                            } catch (o) {
                                console.error("获取激活码失败:", o)
                            }
                            if (e++,
                            e >= a)
                                return clearTimeout(Tt.value),
                                Vt.value = !1,
                                dt.value = !1,
                                ot.value = !0,
                                void (it.value = "获取激活码失败，请稍后再试或联系客服");
                            Tt.value = setTimeout(l, t[e])
                        }
                        ;
                        l()
                    }
                    ;
                    (0,
                    n.xo)(( () => {
                        Tt.value && clearTimeout(Tt.value)
                    }
                    ));
                    const Ot = async () => {
                        await P()
                    }
                      , Xt = (0,
                    u.KR)(!1)
                      , Mt = (0,
                    u.KR)(!1)
                      , Qt = (0,
                    n.EW)(( () => {
                        if ("undefined" !== typeof window) {
                            const e = new (ae())(window.navigator.userAgent)
                              , a = null !== e.mobile()
                              , t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                            return a || t
                        }
                        return !1
                    }
                    ))
                      , $t = () => {
                        const e = document.querySelector(".copy-area textarea");
                        e.select(),
                        document.execCommand("copy"),
                        Mt.value = !0,
                        setTimeout(( () => {
                            Mt.value = !1
                        }
                        ), 2e3)
                    }
                      , Bt = () => {
                        Qt.value ? Math.random() > .3 ? window.open("https://turbodesk.xfyun.cn/client-pro?channelid=aitool54", "_blank") : window.open("https://dis.csqixiang.cn/unpo/cozeatgf.html", "_blank") : Math.random() > .01 ? window.open("https://wawawriter.com/app/academic-teaching?utm_source=aiweb32", "_blank") : window.open("https://dis.csqixiang.cn/unpo/dbatgf.html", "_blank")
                    }
                      , Nt = () => {
                        k.value || A.value ? g.value ? (jt.value = !0,
                        qt.value = "") : _("请先点击预览按钮生成预览", "warning") : _("请先上传文件或输入文本", "warning")
                    }
                      , Yt = () => {
                        jt.value = !1,
                        qt.value = ""
                    }
                      , Ht = () => {
                        E.value = !0
                    }
                      , Zt = () => {
                        E.value = !1
                    }
                      , Gt = () => {
                        A.value.trim() ? A.value.length > 3500 ? _("文本内容不能超过3500字", "warning") : (K.value = "text",
                        C(),
                        wt(),
                        E.value = !1,
                        _("文本输入成功，可以开始预览了", "success")) : _("请输入文本内容", "warning")
                    }
                      , Jt = e => {
                        let a = e.target.value;
                        a = a.replace(/[^A-Za-z0-9]/g, ""),
                        a = a.replace(/[^A-Za-z0-9]/g, "");
                        let t = "";
                        for (let l = 0; l < a.length && l < 25; l++)
                            l > 0 && l % 5 === 0 && (t += "-"),
                            t += a[l];
                        qt.value = t
                    }
                      , el = e => {
                        if (29 !== e.length)
                            return !1;
                        const a = /^[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}-[A-Za-z0-9]{5}$/;
                        if (!a.test(e))
                            return !1;
                        const t = /[\u4e00-\u9fa5]/;
                        return !t.test(e)
                    }
                      , al = async () => {
                        qt.value.trim() ? el(qt.value.trim()) ? (jt.value = !1,
                        await vt(qt.value.trim())) : _("激活码格式不正确", "warning") : _("请输入激活码", "warning")
                    }
                      , tl = () => {
                        jt.value = !1,
                        mt()
                    }
                      , ll = () => {
                        rt.value = !1
                    }
                      , nl = () => {
                        rt.value = !1,
                        jt.value = !1,
                        window.location.href = "/guide#activation-code-refund"
                    }
                    ;
                    return (e, t) => {
                        const s = (0,
                        n.g2)("router-link");
                        return (0,
                        n.uX)(),
                        (0,
                        n.CE)(n.FK, null, [(0,
                        n.Lk)("div", te, [t[97] || (t[97] = (0,
                        n.Lk)("h1", {
                            class: "seo-title"
                        }, "首页 | 凹凸工坊_一键生成手写文稿_手写模拟器_手写字体在线转换_在线字体制作_手写APP下载_模仿手写软件_AI手写字体生成_手写字体生成器_字体下载", -1)), t[98] || (t[98] = (0,
                        n.Lk)("div", {
                            class: "title-container"
                        }, null, -1)), w.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", le, [((0,
                        n.uX)(!0),
                        (0,
                        n.CE)(n.FK, null, (0,
                        n.pI)(y.value, (e => ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", {
                            key: e.id,
                            class: (0,
                            o.C4)(["toast", e.type])
                        }, [t[22] || (t[22] = (0,
                        n.Lk)("span", {
                            class: "toast-icon"
                        }, null, -1)), (0,
                        n.Lk)("div", ne, [(0,
                        n.Lk)("div", oe, (0,
                        o.v_)(e.title), 1), (0,
                        n.Lk)("div", ie, (0,
                        o.v_)(e.message), 1)])], 2)))), 128))])) : (0,
                        n.Q3)("", !0), (0,
                        n.Lk)("div", se, [(0,
                        n.Lk)("div", de, [(0,
                        n.Lk)("div", re, [t[28] || (t[28] = (0,
                        n.Lk)("div", {
                            style: {
                                display: "flex",
                                "align-items": "center",
                                "justify-content": "space-between"
                            }
                        }, [(0,
                        n.Lk)("h3", null, "上传文件"), (0,
                        n.Lk)("div", {
                            style: {
                                display: "flex",
                                gap: "10px",
                                "align-items": "center"
                            }
                        }, [(0,
                        n.Lk)("a", {
                            href: "https://acnsugnqu4f9.feishu.cn/wiki/O8w0wcPlLia2fZkbZiYc9kkZnzd",
                            target: "_blank",
                            style: {
                                "font-size": "14px",
                                color: "#007bff",
                                "text-decoration": "none"
                            }
                        }, " 🔗常见问题解决方法在这里👈 ")])], -1)), (0,
                        n.Lk)("div", ue, [(0,
                        n.Lk)("div", ce, [(0,
                        n.Lk)("input", {
                            type: "file",
                            id: "word-file",
                            accept: ".doc,.docx",
                            onChange: x
                        }, null, 32), (0,
                        n.Lk)("div", ve, [(0,
                        n.Lk)("div", {
                            class: "merged-button"
                        }, [t[24] || (t[24] = (0,
                        n.Lk)("label", {
                            for: "word-file",
                            class: "left-button"
                        }, [(0,
                        n.Lk)("svg", {
                            class: "upload-icon",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, [(0,
                        n.Lk)("path", {
                            d: "M12 15V3M12 3L7 8M12 3L17 8",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }), (0,
                        n.Lk)("path", {
                            d: "M20 17V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V17",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        })]), (0,
                        n.Lk)("span", null, "选择Word文件")], -1)), (0,
                        n.Lk)("button", {
                            class: "right-button",
                            onClick: Ht
                        }, t[23] || (t[23] = [(0,
                        n.Lk)("svg", {
                            class: "text-icon",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, [(0,
                        n.Lk)("path", {
                            d: "M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }), (0,
                        n.Lk)("path", {
                            d: "M9 9H15M9 13H15M9 17H13",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        })], -1), (0,
                        n.Lk)("span", null, "仅输入文字", -1)]))]), (0,
                        n.Lk)("button", {
                            class: "no-word-button",
                            onClick: t[0] || (t[0] = e => Xt.value = !0)
                        }, t[25] || (t[25] = [(0,
                        n.Lk)("svg", {
                            class: "help-icon",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, [(0,
                        n.Lk)("path", {
                            d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }), (0,
                        n.Lk)("path", {
                            d: "M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }), (0,
                        n.Lk)("path", {
                            d: "M12 17H12.01",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        })], -1), (0,
                        n.Lk)("span", null, "AI帮写|润色|在线生成文章", -1)]))]), k.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", pe, [(0,
                        n.Lk)("div", ke, [t[26] || (t[26] = (0,
                        n.Lk)("i", {
                            class: "icon-file"
                        }, null, -1)), (0,
                        n.Lk)("span", null, (0,
                        o.v_)(k.value.name), 1)]), (0,
                        n.Lk)("button", {
                            class: "file-clear",
                            onClick: C
                        }, t[27] || (t[27] = [(0,
                        n.Lk)("i", {
                            class: "icon-clear"
                        }, null, -1)]))])) : (0,
                        n.Q3)("", !0)])])]), (0,
                        n.Lk)("div", ge, [t[43] || (t[43] = (0,
                        n.Lk)("div", {
                            style: {
                                display: "flex",
                                "align-items": "center",
                                "justify-content": "space-between"
                            }
                        }, [(0,
                        n.Lk)("h3", null, "转换设置"), (0,
                        n.Lk)("a", {
                            href: "https://acnsugnqu4f9.feishu.cn/wiki/WX2YwUb7aiJ9flkYoHkcvFEGnXf",
                            target: "_blank",
                            style: {
                                "font-size": "14px",
                                color: "#007bff",
                                "text-decoration": "none"
                            }
                        }, " 🔗各字体/纸张背景效果点击查看 ")], -1)), (0,
                        n.Lk)("div", me, [t[30] || (t[30] = (0,
                        n.Lk)("label", {
                            for: "font-select"
                        }, "选择字体", -1)), (0,
                        n.bo)((0,
                        n.Lk)("select", {
                            id: "font-select",
                            "onUpdate:modelValue": t[1] || (t[1] = e => V.value = e),
                            class: "styled-select"
                        }, t[29] || (t[29] = [(0,
                        n.Fv)('<option value="0" data-v-5054bffd>栗壳坚坚体 (点击展开)</option><option value="12" data-v-5054bffd>硬笔楷书</option><option value="4" data-v-5054bffd>新叶念体</option><option value="6" data-v-5054bffd>手写体体1</option><option value="14" data-v-5054bffd>真实-手写体2</option><option value="15" data-v-5054bffd>真实-手写体3</option><option value="16" data-v-5054bffd>真实-手写体4 (向下滑动查看更多字体)</option><option value="7" data-v-5054bffd>平方洒脱体</option><option value="8" data-v-5054bffd>王强手写体</option><option value="1" data-v-5054bffd>喜脉喜欢体</option><option value="2" data-v-5054bffd>ChillZhuo</option><option value="3" data-v-5054bffd>pigtruman手写体</option><option value="17" data-v-5054bffd>真实-手写体5</option><option value="18" data-v-5054bffd>真实-手写体6</option><option value="19" data-v-5054bffd>真实-手写体7</option><option value="20" data-v-5054bffd>真实-手写体8</option><option value="21" data-v-5054bffd>真实-手写体9</option><option value="22" data-v-5054bffd>真实-手写体10</option><option value="23" data-v-5054bffd>真实-手写体11</option><option value="24" data-v-5054bffd>真实-手写体12</option><option value="13" data-v-5054bffd>繁体-辰宇落雁体</option><option value="9" data-v-5054bffd>日文-TekitouPoem</option><option value="10" data-v-5054bffd>韩文-KimjungchulScript</option>', 23)]), 512), [[l.u1, V.value]])]), (0,
                        n.Lk)("div", he, [(0,
                        n.Lk)("div", be, [t[32] || (t[32] = (0,
                        n.Lk)("label", {
                            for: "paper-select"
                        }, "纸张背景 (包含实拍版、供打印版) ", -1)), (0,
                        n.bF)(s, {
                            to: "/superdiy",
                            style: {
                                "font-size": "14px",
                                color: "#4a6bff",
                                "text-decoration": "none",
                                display: "flex",
                                "align-items": "center"
                            }
                        }, {
                            default: (0,
                            n.k6)(( () => t[31] || (t[31] = [(0,
                            n.eW)(" ✨ "), (0,
                            n.Lk)("span", {
                                style: {
                                    "margin-left": "4px"
                                }
                            }, "想自定义纸张背景？点我👈", -1)]))),
                            _: 1
                        })]), (0,
                        n.bo)((0,
                        n.Lk)("select", {
                            id: "paper-select",
                            "onUpdate:modelValue": t[2] || (t[2] = e => D.value = e),
                            class: "styled-select"
                        }, t[33] || (t[33] = [(0,
                        n.Fv)('<option value="0" data-v-5054bffd>格子纸 (在网站的🌟左侧的超级DIY功能里，这里不要选)</option><option value="20" data-v-5054bffd>单红线信稿纸-实拍 (点击展开)</option><option value="22" data-v-5054bffd>单红线信稿纸-供打印</option><option value="0" data-v-5054bffd>草稿纸-高清实拍</option><option value="1" data-v-5054bffd>A4纸-纵向-600dpi高清(4960x7015分辨率)供打印</option><option value="2" data-v-5054bffd>A4纸-横向-600dpi高清(7015x4960分辨率)供打印</option><option value="3" data-v-5054bffd>B5纸-纵向-600dpi高清(4157x5905分辨率)供打印</option><option value="4" data-v-5054bffd>B5纸-横向-600dpi高清(5905x4157分辨率)供打印</option><option value="5" data-v-5054bffd>A3纸-纵向-600dpi高清(7015x9921分辨率)供打印</option><option value="6" data-v-5054bffd>A3纸-横向-600dpi高清(9921x7015分辨率)供打印</option>', 10)]), 512), [[l.u1, D.value]])]), (0,
                        n.Lk)("div", fe, [(0,
                        n.Lk)("label", we, "随机勾画涂改概率 (" + (0,
                        o.v_)(T.value) + "%，可滑动修改)", 1), (0,
                        n.bo)((0,
                        n.Lk)("input", {
                            type: "range",
                            id: "mistake-rate",
                            "onUpdate:modelValue": t[3] || (t[3] = e => T.value = e),
                            min: "0",
                            max: "100",
                            step: "1",
                            class: "styled-range"
                        }, null, 512), [[l.Jo, T.value, void 0, {
                            number: !0
                        }]]), t[34] || (t[34] = (0,
                        n.Lk)("div", {
                            class: "range-labels",
                            style: {
                                display: "flex",
                                "justify-content": "space-between",
                                "font-size": "0.9em"
                            }
                        }, [(0,
                        n.Lk)("span", null, "完美无瑕 0%"), (0,
                        n.Lk)("span", null, "涂改连篇 100%")], -1)), t[35] || (t[35] = (0,
                        n.Lk)("div", {
                            class: "range-tip",
                            style: {
                                "text-align": "left",
                                "font-style": "normal",
                                "font-size": "0.9em"
                            }
                        }, "推荐值: 3% (更接近真实手写)", -1))]), (0,
                        n.Lk)("div", {
                            class: "advanced-toggle",
                            onClick: j
                        }, [t[36] || (t[36] = (0,
                        n.Lk)("span", null, "高级设置", -1)), (0,
                        n.Lk)("div", {
                            class: (0,
                            o.C4)(["arrow-icon", U.value ? "arrow-up" : "arrow-down"])
                        }, null, 2)]), U.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", ye, [(0,
                        n.Lk)("div", Le, [(0,
                        n.Lk)("label", _e, "文字位置凌乱度 (" + (0,
                        o.v_)(I.value) + "%)", 1), (0,
                        n.bo)((0,
                        n.Lk)("input", {
                            type: "range",
                            id: "messy-ratio",
                            "onUpdate:modelValue": t[4] || (t[4] = e => I.value = e),
                            min: "0",
                            max: "100",
                            step: "1",
                            class: "styled-range"
                        }, null, 512), [[l.Jo, I.value, void 0, {
                            number: !0
                        }]]), t[37] || (t[37] = (0,
                        n.Lk)("div", {
                            class: "range-labels",
                            style: {
                                display: "flex",
                                "justify-content": "space-between",
                                "font-size": "0.9em"
                            }
                        }, [(0,
                        n.Lk)("span", null, "整齐排列 0%"), (0,
                        n.Lk)("span", null, "凌乱不堪 100%")], -1)), t[38] || (t[38] = (0,
                        n.Lk)("div", {
                            class: "range-tip",
                            style: {
                                "text-align": "left",
                                "font-style": "normal",
                                "font-size": "0.9em"
                            }
                        }, "推荐值: 10% (模拟自然书写不规则性)", -1))]), (0,
                        n.Lk)("div", xe, [(0,
                        n.Lk)("label", Ce, "字体笔画凌乱度 (" + (0,
                        o.v_)(z.value) + "%)", 1), (0,
                        n.bo)((0,
                        n.Lk)("input", {
                            type: "range",
                            id: "char-random",
                            "onUpdate:modelValue": t[5] || (t[5] = e => z.value = e),
                            min: "0",
                            max: "100",
                            step: "1",
                            class: "styled-range"
                        }, null, 512), [[l.Jo, z.value, void 0, {
                            number: !0
                        }]]), t[39] || (t[39] = (0,
                        n.Lk)("div", {
                            class: "range-labels",
                            style: {
                                display: "flex",
                                "justify-content": "space-between",
                                "font-size": "0.9em"
                            }
                        }, [(0,
                        n.Lk)("span", null, "工整清晰 0%"), (0,
                        n.Lk)("span", null, "歪七扭八 100%")], -1)), t[40] || (t[40] = (0,
                        n.Lk)("div", {
                            class: "range-tip",
                            style: {
                                "text-align": "left",
                                "font-style": "normal",
                                "font-size": "0.9em"
                            }
                        }, "推荐值: 5% (模拟笔画书写不规则性)", -1))])])) : (0,
                        n.Q3)("", !0), (0,
                        n.Lk)("div", Fe, [(0,
                        n.Lk)("button", {
                            class: "preview-button",
                            onClick: Ot,
                            disabled: X.value
                        }, [t[41] || (t[41] = (0,
                        n.Lk)("i", {
                            class: "icon-preview"
                        }, null, -1)), (0,
                        n.eW)(" " + (0,
                        o.v_)(X.value ? "生成中..." : "预览效果"), 1)], 8, Re), (0,
                        n.Lk)("button", {
                            class: "download-button",
                            onClick: Nt,
                            disabled: "file" === K.value && !k.value || "text" === K.value && !A.value.trim() || X.value || !g.value,
                            title: "file" === K.value ? "请先上传文件并点击预览" : "请先输入文本并点击预览"
                        }, t[42] || (t[42] = [(0,
                        n.Lk)("i", {
                            class: "icon-download"
                        }, null, -1), (0,
                        n.eW)(" 下载文件 ")]), 8, Ke)])])]), (0,
                        n.Lk)("div", Ae, [t[48] || (t[48] = (0,
                        n.Lk)("h3", null, '预览效果(预览图已压缩，请勿直接保存 | 点击"下载文件"按钮下载高清无水印版本)', -1)), (0,
                        n.Lk)("div", {
                            class: (0,
                            o.C4)(["preview-container", {
                                "draft-paper": "0" === D.value,
                                "a4-paper": "1" === D.value
                            }])
                        }, [g.value && i.value.length > 0 ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Ee, [(0,
                        n.Lk)("img", {
                            src: m.value,
                            alt: "手写稿预览"
                        }, null, 8, Se), h.value > 1 ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Pe, [(0,
                        n.Lk)("button", {
                            class: "page-btn prev-btn",
                            onClick: b,
                            disabled: 0 === a.value
                        }, t[44] || (t[44] = [(0,
                        n.Lk)("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, [(0,
                        n.Lk)("path", {
                            d: "M15 18L9 12L15 6",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        })], -1)]), 8, Ve), (0,
                        n.Lk)("span", De, (0,
                        o.v_)(a.value + 1) + " / " + (0,
                        o.v_)(h.value), 1), (0,
                        n.Lk)("button", {
                            class: "page-btn next-btn",
                            onClick: f,
                            disabled: a.value === h.value - 1
                        }, t[45] || (t[45] = [(0,
                        n.Lk)("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, [(0,
                        n.Lk)("path", {
                            d: "M9 6L15 12L9 18",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        })], -1)]), 8, Te)])) : (0,
                        n.Q3)("", !0)])) : g.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Ie, [((0,
                        n.uX)(!0),
                        (0,
                        n.CE)(n.FK, null, (0,
                        n.pI)(e.previewContent, ( (e, a) => ((0,
                        n.uX)(),
                        (0,
                        n.CE)("p", {
                            key: a
                        }, (0,
                        o.v_)(e), 1)))), 128))])) : p.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", ze, t[46] || (t[46] = [(0,
                        n.Lk)("p", null, "正在生成预览，请稍候...", -1), (0,
                        n.Lk)("div", {
                            class: "loading-spinner"
                        }, null, -1), (0,
                        n.Lk)("p", {
                            class: "loading-tip"
                        }, "大文件可能需要较长时间，请耐心等待", -1)]))) : ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Ue, t[47] || (t[47] = [(0,
                        n.Lk)("img", {
                            src: $,
                            alt: "默认预览图",
                            class: "default-preview-image"
                        }, null, -1), (0,
                        n.Lk)("p", null, "上传文件并点击预览按钮查看效果", -1)])))], 2)])]), q.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", je, [(0,
                        n.Lk)("div", qe, [t[61] || (t[61] = (0,
                        n.Lk)("h2", null, "选择套餐", -1)), H.value ? (0,
                        n.Q3)("", !0) : ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", We, [(0,
                        n.Lk)("div", {
                            class: (0,
                            o.C4)(["package-option", {
                                selected: "2" === Q.value
                            }]),
                            onClick: t[6] || (t[6] = e => Q.value = "2")
                        }, t[49] || (t[49] = [(0,
                        n.Lk)("h3", null, "体验套餐", -1), (0,
                        n.Lk)("p", {
                            class: "price"
                        }, "¥0.69", -1), (0,
                        n.Lk)("p", {
                            class: "desc"
                        }, "包含2次使用次数 (单价¥0.35)", -1)]), 2), (0,
                        n.Lk)("div", {
                            class: (0,
                            o.C4)(["package-option", {
                                selected: "6" === Q.value
                            }]),
                            onClick: t[7] || (t[7] = e => Q.value = "6")
                        }, t[50] || (t[50] = [(0,
                        n.Lk)("h3", null, "基础套餐", -1), (0,
                        n.Lk)("p", {
                            class: "price"
                        }, "¥1.5", -1), (0,
                        n.Lk)("p", {
                            class: "desc"
                        }, "包含6次使用次数 (单价¥0.25)", -1)]), 2), (0,
                        n.Lk)("div", {
                            class: (0,
                            o.C4)(["package-option", {
                                selected: "10" === Q.value
                            }]),
                            onClick: t[8] || (t[8] = e => Q.value = "10")
                        }, t[51] || (t[51] = [(0,
                        n.Lk)("h3", null, "热门套餐", -1), (0,
                        n.Lk)("p", {
                            class: "price"
                        }, "¥2.29", -1), (0,
                        n.Lk)("p", {
                            class: "desc"
                        }, "包含10次使用次数 (单价¥0.23)", -1)]), 2), (0,
                        n.Lk)("div", {
                            class: (0,
                            o.C4)(["package-option", {
                                selected: "20" === Q.value
                            }]),
                            onClick: t[9] || (t[9] = e => Q.value = "20")
                        }, t[52] || (t[52] = [(0,
                        n.Lk)("h3", null, "超值套餐", -1), (0,
                        n.Lk)("p", {
                            class: "price"
                        }, "¥3.99", -1), (0,
                        n.Lk)("p", {
                            class: "desc"
                        }, "包含20次使用次数 (单价¥0.20)", -1)]), 2), (0,
                        n.Lk)("div", {
                            class: (0,
                            o.C4)(["package-option", {
                                selected: "50" === Q.value
                            }]),
                            onClick: t[10] || (t[10] = e => Q.value = "50")
                        }, t[53] || (t[53] = [(0,
                        n.Lk)("h3", null, "尊享套餐", -1), (0,
                        n.Lk)("p", {
                            class: "price"
                        }, "¥9.0", -1), (0,
                        n.Lk)("p", {
                            class: "desc"
                        }, "包含50次使用次数 (单价¥0.18)", -1)]), 2)])), H.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Oe, [t[54] || (t[54] = (0,
                        n.Lk)("div", {
                            class: "refresh-warning"
                        }, [(0,
                        n.Lk)("svg", {
                            class: "warning-icon",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, [(0,
                        n.Lk)("path", {
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        })]), (0,
                        n.Lk)("span", null, "支付/下载期间请勿刷新界面")], -1)), Qt.value && "alipay" === Ma.value ? (0,
                        n.Q3)("", !0) : ((0,
                        n.uX)(),
                        (0,
                        n.CE)("img", {
                            key: 0,
                            src: G.value,
                            alt: "alipay" === Ma.value ? "支付宝支付二维码" : "微信支付二维码"
                        }, null, 8, Xe)), (0,
                        n.Lk)("p", Me, "需支付：¥" + (0,
                        o.v_)(Xa.value), 1), t[55] || (t[55] = (0,
                        n.Lk)("p", {
                            class: "payment-agreement"
                        }, [(0,
                        n.eW)("支付即视为您已同意本站"), (0,
                        n.Lk)("a", {
                            href: "/guide#payment-notice",
                            target: "_blank"
                        }, "《支付须知》"), (0,
                        n.eW)("内容")], -1)), "wechat" === Ma.value || "alipay" === Ma.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("button", {
                            key: 1,
                            class: "start-download-btn",
                            onClick: Wt
                        }, "我已支付，获取激活码")) : (0,
                        n.Q3)("", !0)])) : ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Qe, [Qt.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", $e, [(0,
                        n.Lk)("button", {
                            class: "alipay-btn",
                            onClick: t[11] || (t[11] = e => ut("alipay"))
                        }, t[56] || (t[56] = [(0,
                        n.Lk)("img", {
                            src: B,
                            alt: "支付宝支付",
                            class: "payment-icon alipay-icon"
                        }, null, -1)])), t[57] || (t[57] = (0,
                        n.Lk)("p", {
                            class: "alipay-pay-tip",
                            style: {
                                color: "red"
                            }
                        }, "👈点击支付宝按钮进行支付", -1))])) : ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Be, [(0,
                        n.Lk)("button", {
                            class: "wechat-btn",
                            onClick: t[12] || (t[12] = e => ut("wechat"))
                        }, t[58] || (t[58] = [(0,
                        n.Lk)("img", {
                            src: N,
                            alt: "微信支付",
                            class: "payment-icon wechat-icon"
                        }, null, -1)])), t[59] || (t[59] = (0,
                        n.Lk)("p", {
                            class: "wechat-pay-tip",
                            style: {
                                color: "red"
                            }
                        }, "👈点击左侧微信支付按钮", -1))]))])), W.value && !H.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Ne, [(0,
                        n.bo)((0,
                        n.Lk)("input", {
                            type: "text",
                            "onUpdate:modelValue": t[13] || (t[13] = e => O.value = e),
                            placeholder: "请输入卡密",
                            class: "card-input"
                        }, null, 512), [[l.Jo, O.value]]), (0,
                        n.Lk)("button", {
                            class: "submit-card-btn",
                            onClick: t[14] || (t[14] = e => ut("card"))
                        }, " 确认支付 "), t[60] || (t[60] = (0,
                        n.Lk)("div", {
                            class: "billing-info"
                        }, [(0,
                        n.Lk)("p", {
                            class: "billing-link"
                        }, [(0,
                        n.Lk)("a", {
                            href: "/guide#payment-notice",
                            target: "_blank"
                        }, "《支付须知》")])], -1))])) : (0,
                        n.Q3)("", !0), (0,
                        n.Lk)("button", {
                            class: (0,
                            o.C4)(["cancel-button", {
                                "cancel-order-button": H.value
                            }]),
                            onClick: pt
                        }, (0,
                        o.v_)(H.value ? "取消订单" : "取消"), 3)])])) : (0,
                        n.Q3)("", !0), Ba.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Ye, [(0,
                        n.Lk)("div", He, [t[62] || (t[62] = (0,
                        n.Lk)("h3", null, "确认取消订单", -1)), t[63] || (t[63] = (0,
                        n.Lk)("p", null, "您确定要取消当前支付订单吗？", -1)), (0,
                        n.Lk)("div", Ze, [(0,
                        n.Lk)("button", {
                            class: "confirm-yes",
                            onClick: kt
                        }, "确认取消"), (0,
                        n.Lk)("button", {
                            class: "confirm-no",
                            onClick: t[15] || (t[15] = e => Ba.value = !1)
                        }, "继续支付")])])])) : (0,
                        n.Q3)("", !0), Na.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Ge, t[64] || (t[64] = [(0,
                        n.Lk)("div", {
                            class: "download-content animate-scale"
                        }, [(0,
                        n.Lk)("h3", null, "正在下载文件"), (0,
                        n.Lk)("div", {
                            class: "loading-spinner"
                        }), (0,
                        n.Lk)("p", {
                            class: "loading-tip"
                        }, "文件较大，请耐心等待，请勿刷新界面~")], -1)]))) : (0,
                        n.Q3)("", !0), Ha.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Je, [(0,
                        n.Lk)("div", {
                            class: "download-success-content animate-scale"
                        }, [t[65] || (t[65] = (0,
                        n.Lk)("div", {
                            class: "success-icon"
                        }, null, -1)), t[66] || (t[66] = (0,
                        n.Lk)("h3", null, "下载完成", -1)), t[67] || (t[67] = (0,
                        n.Lk)("p", {
                            class: "success-message"
                        }, [(0,
                        n.eW)("手写稿文件已成功下载,"), (0,
                        n.Lk)("span", {
                            style: {
                                color: "red"
                            }
                        }, '请在"浏览器下载记录"查看+解压缩'), (0,
                        n.eW)("（如果转换失败请查看FAQ界面联系客服QQ | 夸克移动端有概率下载失败）"), (0,
                        n.Lk)("br"), (0,
                        n.Lk)("span", {
                            style: {
                                color: "#4a6bff"
                            }
                        }, "点击确定后将自动显示无水印图片-长按可保存图片")], -1)), (0,
                        n.Lk)("div", {
                            class: "success-buttons"
                        }, [(0,
                        n.Lk)("button", {
                            class: "success-cancel",
                            onClick: ht
                        }, "取消"), (0,
                        n.Lk)("button", {
                            class: "success-confirm",
                            onClick: ht
                        }, "确定")])])])) : (0,
                        n.Q3)("", !0), jt.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", ea, [(0,
                        n.Lk)("div", aa, [t[75] || (t[75] = (0,
                        n.Lk)("div", {
                            class: "activation-header"
                        }, [(0,
                        n.Lk)("div", {
                            class: "activation-icon"
                        }, "🔑"), (0,
                        n.Lk)("h3", {
                            class: "activation-title"
                        }, "输入激活码"), (0,
                        n.Lk)("p", {
                            class: "activation-subtitle"
                        }, "请输入您购买的激活码来下载文件")], -1)), (0,
                        n.Lk)("div", ta, [(0,
                        n.Lk)("div", la, [(0,
                        n.bo)((0,
                        n.Lk)("input", {
                            "onUpdate:modelValue": t[16] || (t[16] = e => qt.value = e),
                            type: "text",
                            placeholder: "请输入激活码",
                            class: "activation-input",
                            maxlength: "29",
                            onInput: Jt
                        }, null, 544), [[l.Jo, qt.value]]), t[68] || (t[68] = (0,
                        n.Lk)("div", {
                            class: "input-icon"
                        }, "📝", -1))]), (0,
                        n.Lk)("button", {
                            onClick: al,
                            class: "confirm-activation-btn"
                        }, t[69] || (t[69] = [(0,
                        n.Lk)("span", {
                            class: "btn-icon"
                        }, "⬇️", -1), (0,
                        n.eW)(" 立即下载 ")]))]), (0,
                        n.Lk)("div", {
                            class: "activation-recovery-section"
                        }, [(0,
                        n.Lk)("button", {
                            onClick: nl,
                            class: "activation-recovery-btn"
                        }, t[70] || (t[70] = [(0,
                        n.Lk)("span", {
                            class: "btn-icon"
                        }, "🔍", -1), (0,
                        n.eW)(" 激活码找回/剩余次数查询 ")]))]), (0,
                        n.Lk)("div", {
                            class: "purchase-section"
                        }, [(0,
                        n.Lk)("div", {
                            class: "purchase-card"
                        }, [t[72] || (t[72] = (0,
                        n.Lk)("div", {
                            class: "purchase-icon"
                        }, "💳", -1)), t[73] || (t[73] = (0,
                        n.Lk)("p", {
                            class: "purchase-tip"
                        }, "还没有激活码？立即购买享受服务", -1)), (0,
                        n.Lk)("button", {
                            onClick: tl,
                            class: "purchase-activation-btn"
                        }, t[71] || (t[71] = [(0,
                        n.Lk)("span", {
                            class: "btn-icon"
                        }, "🛒", -1), (0,
                        n.eW)(" 购买激活码 ")]))])]), (0,
                        n.Lk)("button", {
                            onClick: Yt,
                            class: "close-btn"
                        }, t[74] || (t[74] = [(0,
                        n.Lk)("span", {
                            class: "close-icon"
                        }, "✕", -1)]))])])) : (0,
                        n.Q3)("", !0), zt.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", na, [(0,
                        n.Lk)("div", oa, [t[78] || (t[78] = (0,
                        n.Lk)("div", {
                            class: "success-icon"
                        }, null, -1)), t[79] || (t[79] = (0,
                        n.Lk)("h3", null, "获取激活码成功", -1)), (0,
                        n.Lk)("div", ia, [t[76] || (t[76] = (0,
                        n.Lk)("p", null, "您的激活码为：", -1)), (0,
                        n.Lk)("div", sa, [(0,
                        n.Lk)("span", da, (0,
                        o.v_)(It.value), 1), (0,
                        n.Lk)("button", {
                            class: "copy-code-btn",
                            onClick: r
                        }, [d.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("span", ua, "已复制 ✓")) : ((0,
                        n.uX)(),
                        (0,
                        n.CE)("span", ra, "复制激活码"))])])]), t[80] || (t[80] = (0,
                        n.Lk)("p", {
                            class: "activation-tip"
                        }, '⚠️ 请妥善保管您的激活码，如果遗失请到"教程-激活码找回与剩余次数查询"界面找回', -1)), (0,
                        n.Lk)("p", ca, "💡 您依然可以通过" + (0,
                        o.v_)("alipay" === Ma.value ? "支付宝" : "微信") + "支付单号找回激活码", 1), (0,
                        n.Lk)("div", va, [(0,
                        n.Lk)("button", {
                            class: "confirm-close-btn",
                            onClick: t[17] || (t[17] = e => Ut.value = !0)
                        }, "关闭")]), (0,
                        n.Lk)("button", {
                            class: "activation-close-x",
                            onClick: t[18] || (t[18] = e => Ut.value = !0)
                        }, t[77] || (t[77] = [(0,
                        n.Lk)("span", {
                            class: "close-icon"
                        }, "✕", -1)]))])])) : (0,
                        n.Q3)("", !0), Ut.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", pa, [(0,
                        n.Lk)("div", ka, [t[81] || (t[81] = (0,
                        n.Lk)("div", {
                            class: "warning-icon"
                        }, "⚠️", -1)), t[82] || (t[82] = (0,
                        n.Lk)("h3", null, "确认关闭", -1)), t[83] || (t[83] = (0,
                        n.Lk)("p", null, "关闭后激活码界面将消失，请确保您已保存激活码。", -1)), (0,
                        n.Lk)("p", ga, "💡 您依然可以通过" + (0,
                        o.v_)("alipay" === Ma.value ? "支付宝" : "微信") + "支付单号找回激活码", 1), (0,
                        n.Lk)("div", ma, [(0,
                        n.Lk)("button", {
                            class: "confirm-close-yes",
                            onClick: v
                        }, "确认关闭"), (0,
                        n.Lk)("button", {
                            class: "confirm-close-no",
                            onClick: t[19] || (t[19] = e => Ut.value = !1)
                        }, "继续查看")])])])) : (0,
                        n.Q3)("", !0), Ja.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", ha, [(0,
                        n.Lk)("div", ba, [t[84] || (t[84] = (0,
                        n.Lk)("div", {
                            class: "success-icon"
                        }, null, -1)), t[85] || (t[85] = (0,
                        n.Lk)("h3", null, "支付成功", -1)), (0,
                        n.Lk)("p", fa, (0,
                        o.v_)(et.value), 1), (0,
                        n.Lk)("div", wa, [(0,
                        n.Lk)("div", {
                            class: "countdown-progress",
                            style: (0,
                            o.Tr)({
                                width: at.value + "%"
                            })
                        }, null, 4)])])])) : (0,
                        n.Q3)("", !0), rt.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", ya, [(0,
                        n.Lk)("div", {
                            class: "payment-close-reminder-content animate-scale"
                        }, [t[86] || (t[86] = (0,
                        n.Lk)("div", {
                            class: "reminder-icon"
                        }, "💡", -1)), t[87] || (t[87] = (0,
                        n.Lk)("h3", null, "支付成功但没显示激活码？", -1)), t[88] || (t[88] = (0,
                        n.Lk)("p", {
                            class: "reminder-message"
                        }, "如果您已经支付成功但没有看到激活码，请点击下方按钮找回您的激活码", -1)), (0,
                        n.Lk)("div", {
                            class: "reminder-buttons"
                        }, [(0,
                        n.Lk)("button", {
                            class: "reminder-cancel",
                            onClick: ll
                        }, "取消"), (0,
                        n.Lk)("button", {
                            class: "reminder-confirm",
                            onClick: nl
                        }, "点击这里找回激活码")])])])) : (0,
                        n.Q3)("", !0), E.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", La, [(0,
                        n.Lk)("div", _a, [t[92] || (t[92] = (0,
                        n.Lk)("div", {
                            class: "text-input-header"
                        }, [(0,
                        n.Lk)("div", {
                            class: "text-input-icon"
                        }, "📝"), (0,
                        n.Lk)("h3", {
                            class: "text-input-title"
                        }, "直接输入文本"), (0,
                        n.Lk)("p", {
                            class: "text-input-subtitle"
                        }, "输入您要转换为手写体的文本内容")], -1)), (0,
                        n.Lk)("div", xa, [(0,
                        n.Lk)("div", Ca, [(0,
                        n.bo)((0,
                        n.Lk)("textarea", {
                            "onUpdate:modelValue": t[20] || (t[20] = e => A.value = e),
                            class: "text-input-field",
                            placeholder: "请输入要转换为手写体的文本内容，最多支持3500字...\\n\\n示例：\\n今天是个好天气，我要认真学习。\\n数学作业：1+1=2\\n英语单词：hello world",
                            maxlength: "3500",
                            rows: "8"
                        }, null, 512), [[l.Jo, A.value]]), t[89] || (t[89] = (0,
                        n.Lk)("div", {
                            class: "textarea-icon"
                        }, "✍️", -1))]), (0,
                        n.Lk)("div", {
                            class: (0,
                            o.C4)(["text-input-counter", {
                                warning: A.value.length > 3e3
                            }])
                        }, (0,
                        o.v_)(A.value.length) + "/3500 ", 3)]), (0,
                        n.Lk)("div", Fa, [(0,
                        n.Lk)("button", {
                            class: "text-input-cancel",
                            onClick: Zt
                        }, "取消"), (0,
                        n.Lk)("button", {
                            class: "text-input-confirm",
                            onClick: Gt,
                            disabled: !A.value.trim() || A.value.length > 3500
                        }, t[90] || (t[90] = [(0,
                        n.Lk)("span", {
                            class: "btn-icon"
                        }, "✓", -1), (0,
                        n.eW)(" 确认输入 ")]), 8, Ra)]), (0,
                        n.Lk)("button", {
                            class: "close-btn",
                            onClick: Zt
                        }, t[91] || (t[91] = [(0,
                        n.Lk)("span", {
                            class: "close-icon"
                        }, "✕", -1)]))])])) : (0,
                        n.Q3)("", !0), tt.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Ka, [(0,
                        n.Lk)("div", Aa, [(0,
                        n.Lk)("div", {
                            class: (0,
                            o.C4)({
                                "success-icon": lt.value,
                                "error-icon": !lt.value
                            })
                        }, null, 2), (0,
                        n.Lk)("h3", null, (0,
                        o.v_)(lt.value ? "预览生成成功" : "预览生成失败"), 1), (0,
                        n.Lk)("p", Ea, (0,
                        o.v_)(nt.value), 1), (0,
                        n.Lk)("button", {
                            class: "preview-result-confirm",
                            onClick: Lt
                        }, "确定")])])) : (0,
                        n.Q3)("", !0), ot.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Sa, [(0,
                        n.Lk)("div", Pa, [t[93] || (t[93] = (0,
                        n.Lk)("div", {
                            class: "error-icon"
                        }, null, -1)), t[94] || (t[94] = (0,
                        n.Lk)("h3", null, "支付请求失败", -1)), (0,
                        n.Lk)("p", Va, (0,
                        o.v_)(it.value), 1), (0,
                        n.Lk)("button", {
                            class: "payment-error-confirm",
                            onClick: _t
                        }, "确定")])])) : (0,
                        n.Q3)("", !0), st.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Da, t[95] || (t[95] = [(0,
                        n.Lk)("div", {
                            class: "order-loading-content animate-scale"
                        }, [(0,
                        n.Lk)("div", {
                            class: "loading-spinner"
                        }), (0,
                        n.Lk)("h3", null, "正在生成订单"), (0,
                        n.Lk)("p", {
                            class: "loading-tip"
                        }, "请稍候，请勿刷新界面~ ")], -1)]))) : (0,
                        n.Q3)("", !0), dt.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Ta, t[96] || (t[96] = [(0,
                        n.Lk)("div", {
                            class: "payment-status-check-content animate-scale"
                        }, [(0,
                        n.Lk)("h3", null, "正在检查支付状态"), (0,
                        n.Lk)("div", {
                            class: "loading-spinner"
                        }), (0,
                        n.Lk)("p", {
                            class: "loading-tip"
                        }, "请耐心等待，请勿刷新界面~")], -1)]))) : (0,
                        n.Q3)("", !0)]), Xt.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Ia, [(0,
                        n.Lk)("div", za, [t[103] || (t[103] = (0,
                        n.Lk)("h3", null, "AI帮写|润色|在线写文章", -1)), (0,
                        n.Lk)("div", Ua, [t[100] || (t[100] = (0,
                        n.Lk)("p", {
                            class: "copy-text"
                        }, "请复制以下提示词到AI助手：", -1)), (0,
                        n.Lk)("div", ja, [(0,
                        n.Lk)("textarea", qa, '请根据以下要求帮我撰写或润色一篇文章，语言流畅、结构清晰、逻辑严谨，适合在线发布。你可以根据输入内容进行扩写、改写、提炼重点，必要时优化语法和表达风格，使文章更具专业性和可读性。请确保内容准确、表达自然，并根据语境使用恰当的词汇和语气。内容要求：1，不特殊设置字体字号。2，避免生僻字的使用。3，使用空格键或tap键实现排版控制。文件内容/主题如下："替换为自己的内容或主题"', 512), (0,
                        n.Lk)("button", {
                            class: "copy-button",
                            onClick: $t
                        }, [Mt.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("span", Oa, "已复制 ✓")) : ((0,
                        n.uX)(),
                        (0,
                        n.CE)("span", Wa, "复制提示词"))])]), t[101] || (t[101] = (0,
                        n.Lk)("p", {
                            class: "redirect-text"
                        }, "点击下方按钮前往AI助手：", -1)), (0,
                        n.Lk)("button", {
                            class: "redirect-button",
                            onClick: Bt
                        }, t[99] || (t[99] = [(0,
                        n.Lk)("span", null, "前往AI助手", -1), (0,
                        n.Lk)("svg", {
                            class: "arrow-icon",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, [(0,
                        n.Lk)("path", {
                            d: "M5 12H19M19 12L12 5M19 12L12 19",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        })], -1)]))]), (0,
                        n.Lk)("button", {
                            class: "dialog-close",
                            onClick: t[21] || (t[21] = e => Xt.value = !1)
                        }, t[102] || (t[102] = [(0,
                        n.Lk)("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, [(0,
                        n.Lk)("path", {
                            d: "M18 6L6 18M6 6L18 18",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        })], -1)]))])])) : (0,
                        n.Q3)("", !0)], 64)
                    }
                }
            };
            const Ma = (0,
            h.A)(Xa, [["__scopeId", "data-v-5054bffd"]]);
            var Qa = Ma
              , $a = t.p + "img/query-tips.b4015385.jpeg"
              , Ba = t.p + "img/query-tips-zfb.89107ad9.jpeg"
              , Na = t(4373);
            const Ya = {
                class: "user-tutorial"
            }
              , Ha = {
                class: "tutorial-container"
            }
              , Za = {
                class: "tutorial-content"
            }
              , Ga = {
                class: "tutorial-section",
                id: "activation-code-refund"
            }
              , Ja = {
                class: "query-form"
            }
              , et = {
                class: "form-group"
            }
              , at = {
                class: "form-group"
            }
              , tt = ["disabled"]
              , lt = {
                key: 0,
                class: "query-result"
            }
              , nt = {
                class: "result-item"
            }
              , ot = {
                class: "result-value"
            }
              , it = {
                class: "result-item"
            }
              , st = {
                class: "result-value"
            }
              , dt = {
                class: "result-item"
            }
              , rt = {
                class: "result-value"
            }
              , ut = {
                key: 1,
                class: "query-error"
            };
            var ct = {
                __name: "UserTutorial",
                setup(e) {
                    (0,
                    Y.u)({
                        title: "常见问题解答 | 凹凸工坊_凹凸工坊-手写转换官网_一键生成手写文稿_手写模拟器_手写字体在线转换_在线字体制作_手写APP下载_模仿手写软件_AI手写字体生成_手写字体生成器_字体下载",
                        meta: [{
                            name: "description",
                            content: "常见问题解答,凹凸工坊,凹凸工坊-手写转换,凹凸工坊官网入口,手写模拟器,一键生成手写文稿,模仿手写软件,在线手写字体转换器,手写模拟器APP下载,AI生成专属手写字体,制作自己笔迹的字体,打印出以假乱真的模拟手写文档,让打印出的字看上去像手写的软件,模拟抄写软件,代替抄写,抄写神器软件"
                        }, {
                            name: "keywords",
                            content: "常见问题解答,凹凸工坊,凹凸工坊-手写转换,凹凸工坊官网入口,凹凸工坊下载,手写模拟器,模仿手写软件,手写字体在线转换,手写模拟器APP下载,手写字体制作,模拟抄写软件,手写字体生成器,字体下载,个人笔迹字体制作"
                        }]
                    });
                    const a = (0,
                    u.KR)({
                        orderNo: "",
                        payNo: ""
                    })
                      , t = (0,
                    u.KR)(!1)
                      , i = (0,
                    u.KR)(null)
                      , s = (0,
                    u.KR)("")
                      , d = (0,
                    u.KR)(0);
                    let r = null;
                    const c = () => {
                        d.value = 20,
                        r && clearInterval(r),
                        r = setInterval(( () => {
                            d.value--,
                            d.value <= 0 && (clearInterval(r),
                            r = null)
                        }
                        ), 1e3)
                    }
                      , v = (0,
                    u.KR)("")
                      , p = async () => {
                        const e = (new Date).getTime()
                          , a = Math.floor(1e6 * Math.random())
                          , t = J().getParser(window.navigator.userAgent)
                          , l = t.getBrowser().name || "unknown"
                          , n = t.getOS().name || "unknown"
                          , o = t.getPlatform().type || "unknown"
                          , i = `${l}_${n}_${o}`;
                        let s = "unknown";
                        try {
                            const e = await fetch("https://api.ipify.org?format=json");
                            if (e.ok) {
                                const a = await e.json();
                                s = a.ip || "unknown"
                            }
                        } catch (r) {
                            console.error("获取IP地址失败:", r)
                        }
                        const d = `${s}_${i}_${e}_${a}`;
                        return d
                    }
                    ;
                    (0,
                    n.sV)((async () => {
                        const e = localStorage.getItem("global_client_id");
                        e ? v.value = e : (v.value = await p(),
                        localStorage.setItem("global_client_id", v.value))
                    }
                    )),
                    (0,
                    n.hi)(( () => {
                        r && (clearInterval(r),
                        r = null)
                    }
                    ));
                    const k = async () => {
                        if (a.value.orderNo && a.value.payNo) {
                            t.value = !0,
                            s.value = "",
                            i.value = null;
                            try {
                                const e = new FormData;
                                e.append("clientId", v.value),
                                e.append("orderNo", a.value.orderNo),
                                e.append("payNo", a.value.payNo);
                                const t = await Na.A.post("https://www.autohanding.com/api/cp/cp/reFind", e, {
                                    headers: {
                                        "Content-Type": "multipart/form-data"
                                    }
                                });
                                t.data && 1 === t.data.code ? i.value = t.data.data : s.value = t.data.message || "查询失败"
                            } catch (e) {
                                e.response && e.response.data ? s.value = e.response.data : s.value = "网络错误，请稍后重试"
                            } finally {
                                t.value = !1,
                                c()
                            }
                        } else
                            s.value = "请输入数字A和数字B"
                    }
                    ;
                    return (e, r) => ((0,
                    n.uX)(),
                    (0,
                    n.CE)("div", Ya, [r[12] || (r[12] = (0,
                    n.Lk)("h1", {
                        class: "seo-title"
                    }, "常见问题解答 | 凹凸工坊_一键生成手写文稿_手写模拟器_手写字体在线转换_在线字体制作_手写APP下载_模仿手写软件_AI手写字体生成_手写字体生成器_字体下载", -1)), (0,
                    n.Lk)("div", Ha, [r[11] || (r[11] = (0,
                    n.Lk)("div", {
                        class: "title-container"
                    }, null, -1)), (0,
                    n.Lk)("div", Za, [r[10] || (r[10] = (0,
                    n.Fv)('<div class="tutorial-section" data-v-b747d660><h2 data-v-b747d660>📚 常用文档链接</h2><ul class="feature-list" data-v-b747d660><li data-v-b747d660><a href="https://www.autohanding.com/superdiy" target="_blank" class="doc-link" data-v-b747d660> 📝 点击进入 | 自定义背景&amp;填表格 </a></li><li data-v-b747d660><a href="https://acnsugnqu4f9.feishu.cn/wiki/O8w0wcPlLia2fZkbZiYc9kkZnzd" target="_blank" class="doc-link" data-v-b747d660> 📄 点击进入 | 常见问题汇总文档 </a></li><li data-v-b747d660><a href="https://www.douyin.com/video/7518638156753685798" target="_blank" class="doc-link" data-v-b747d660> 📝 点击进入 | 超级DIY视频教程 </a></li><li data-v-b747d660><a href="https://acnsugnqu4f9.feishu.cn/wiki/I2vqwEzEWiGZE9kjCLrcy66onTh" target="_blank" class="doc-link" data-v-b747d660> 📝 点击进入 | 超级DIY问题汇总文档 </a></li><li data-v-b747d660><a href="https://acnsugnqu4f9.feishu.cn/wiki/WX2YwUb7aiJ9flkYoHkcvFEGnXf" target="_blank" class="doc-link" data-v-b747d660> 📝 点击进入 | 纸张背景&amp;字体效果图预览 </a></li></ul></div><div class="tutorial-section" data-v-b747d660><h2 data-v-b747d660>凹凸工坊能做什么？</h2><p data-v-b747d660>凹凸工坊是一款专业的在线AI生成模拟手写稿件工具，具有以下核心功能：</p><ul class="feature-list" data-v-b747d660><li data-v-b747d660>⚡️ <strong data-v-b747d660>高效转换：</strong>一寸光阴一寸金，不必将光阴浪费在枯燥抄写任务上。</li><li data-v-b747d660>📝 <strong data-v-b747d660>文档转手写：</strong>一键将上传文档转换为逼真的手写稿图片，支持多种纸张和字体。</li><li data-v-b747d660>🖼️ <strong data-v-b747d660>高清实拍效果：</strong>提供高清实拍纸张背景，让手写稿更加真实自然。</li><li data-v-b747d660>🖨️ <strong data-v-b747d660>专业打印支持：</strong>600dpi超高清图片输出，完美支持线下打印需求。</li><li data-v-b747d660>✍️ <strong data-v-b747d660>多种字体选择：</strong>提供多种手写风格字体，满足不同使用场景需求。</li><li data-v-b747d660>🤖 <strong data-v-b747d660>真实细节AI模拟：</strong>支持设置文字位置凌乱度和随机涂改，增强手写真实感。</li><li data-v-b747d660>🔍 <strong data-v-b747d660>便捷预览功能：</strong>转换前提供完整预览，所见即所得。</li></ul><p data-v-b747d660>无论是学生作业、课堂笔记、教学材料，还是个人手写文档需求，凹凸工坊都能满足您的各种手写转换需求！</p></div><div class="tutorial-section" data-v-b747d660><h2 data-v-b747d660>常见问题</h2><p data-v-b747d660><strong data-v-b747d660>更多常见问题汇总请查看：</strong><a href="https://acnsugnqu4f9.feishu.cn/wiki/O8w0wcPlLia2fZkbZiYc9kkZnzd" target="_blank" style="color:#4a6bff;font-weight:bold;" data-v-b747d660>🔗常见问题汇总</a></p><p data-v-b747d660><strong data-v-b747d660>Q: 联系方式</strong><br data-v-b747d660>A: QQ：3884839496。</p><p data-v-b747d660><strong style="color:red;" data-v-b747d660>Q: 超级DIY的注意事项？</strong><br data-v-b747d660><span style="color:red;" data-v-b747d660>A: 1，框选位置尽可能贴近文字。2，尽可能框住段落而不是整个文章。3，注意不要框选到边界或者表格边界线</span></p><p data-v-b747d660><strong style="color:red;" data-v-b747d660>Q: 下载后找不到文件怎么办？</strong><br data-v-b747d660><span style="color:red;" data-v-b747d660>A: 手机端下载找不到文件的到浏览器-&gt;&quot;我的&quot;-&gt;&quot;下载&quot;找文件记录 | 电脑端在浏览器按Ctrl+J找到文件记录。</span></p><p data-v-b747d660><strong data-v-b747d660>Q: 凹凸工坊如何选择纸张类型？</strong><br data-v-b747d660>A: 如果需要实拍图则选择实拍系列；如果需要打印则选择&quot;可供打印&quot;系列。</p><p data-v-b747d660><strong data-v-b747d660>Q: 我想打印手写稿，怎么办？</strong><br data-v-b747d660>A: 凹凸工坊下载时纸张类型选择&quot;可供打印&quot;系列，下载好电子稿（高清图片），然后去线下打印店打印即可，打印墨水浓则效果佳。</p><p data-v-b747d660><strong data-v-b747d660>Q: 为什么我下载的文件体积这么大，单个图片可能有2-3MB？</strong><br data-v-b747d660>A: 为了确保打印时文字的清晰度，[可供打印系列]下载的文件图片清晰度均为600dpi（例如凹凸工坊的A4纸清晰度为4960*7015像素）。</p><p data-v-b747d660><strong data-v-b747d660>Q: 为什么我的文件无法上传？</strong><br data-v-b747d660>A: 请确保您上传的是.doc（不推荐，有概率报错）或.docx格式（推荐）的Word文档，且文件大小不超过1.0MB,word里请不要包含图片等非文字内容。</p><p data-v-b747d660><strong data-v-b747d660>Q: 凹凸工坊下载时输出图片的数量有上限吗？</strong><br data-v-b747d660>A: 由于凹凸工坊的高清图片体积大，因此凹凸工坊单次下载输出上限为12页。</p><p data-v-b747d660><strong data-v-b747d660>Q: 凹凸工坊下载时输出图片有水印吗？</strong><br data-v-b747d660>A: 凹凸工坊下载输出的图片均为高清无水印的。</p><p data-v-b747d660><strong data-v-b747d660>Q: 为什么文件中部分空格显示不出来？</strong><br data-v-b747d660>A: 有些文件中的空格是不可见的，请您自行调整为tab制表符或空格键。</p><p data-v-b747d660><strong data-v-b747d660>Q: 为什么文件中部分生僻字显示不出来？</strong><br data-v-b747d660>A: 这说明所选字体目前不支持显示该生僻字（为提高体验感，此时该生僻字会被显示成空格而不是默认非手写字体或乱码），请您自行调整字体类型。</p><p data-v-b747d660><strong data-v-b747d660>Q: 凹凸工坊如何保护用户隐私？</strong><br data-v-b747d660>A: 所有上传内容及生成文件/图片，凹凸工坊不做任何形式的备份，不会侵犯到您的隐私。</p></div><div class="tutorial-section" data-v-b747d660><h2 data-v-b747d660>如何上传文件</h2><p data-v-b747d660>1. 点击&quot;选择Word文件&quot;按钮，从您的设备中选择一个.doc或.docx（推荐）格式的Word文档。</p><p data-v-b747d660>2. 上传成功后，文件名将显示在按钮下方。</p><p data-v-b747d660>3. 如需更换文件，可以点击文件名右侧的&quot;×&quot;按钮清除当前文件，然后重新上传。</p></div><div class="tutorial-section" data-v-b747d660><h2 data-v-b747d660>如何设置转换参数</h2><p data-v-b747d660>1. <strong data-v-b747d660>选择字体</strong>：从下拉菜单中选择您喜欢的手写字体样式。</p><p data-v-b747d660>2. <strong data-v-b747d660>纸张背景</strong>：选择手写稿的背景样式，可以是草稿纸-实拍或白底可供打印的类型。</p><p data-v-b747d660>3. <strong data-v-b747d660>随机勾画涂改概率</strong>：拖动滑块调整勾画涂改率，建议保持较低数值(如3%)以获得更真实的效果。</p><p data-v-b747d660>4. <strong data-v-b747d660>文字位置凌乱度</strong>：在高级设置中，可调整文字排列的整齐程度，推荐设置为20%。</p></div><div class="tutorial-section" data-v-b747d660><h2 data-v-b747d660>预览与下载</h2><p data-v-b747d660>1. 设置完参数后，点击&quot;预览效果&quot;按钮查看转换效果（注意，预览图清晰度为100dpi，下载图为600dpi高清）。</p><p data-v-b747d660>4. 下载的文件为ZIP格式，包含所有转换后的无水印高清（600dpi）手写稿图片或高清实拍图。</p></div><div class="tutorial-section" id="payment-notice" data-v-b747d660><h2 data-v-b747d660>支付须知</h2><p data-v-b747d660>1，在您支付及下载本站生成的文档/图片前，本站均会提供该文档/图片所对应的预览。支付后下载的文档/图片将与预览一致。进行支付即代表您已知悉上述信息并已确认预览符合要求，支付后除文件下载相关问题外，本站不承担任何责任（包括但不限于退款、补偿、赔偿等）。</p><p data-v-b747d660>2，本网站提供将用户上传文档转为手写稿图像的服务，仅对技术处理负责，不对内容本身的合法性或准确性负责。</p><p data-v-b747d660>3，用户须确保上传内容不违法、不侵权。如因内容引发纠纷，由用户自行承担责任。</p><p data-v-b747d660>4，本网站生成的文件/图片仅用于用户个人使用，网站不对内容用途承担责任。</p><p data-v-b747d660>5，所有上传内容及生成文件/图片，本网站不做任何形式的备份，请用户自行妥善保存。</p><p data-v-b747d660>6，所有上传内容及生成文件/图片，本网站不做任何形式的备份，不会侵犯到您的隐私。</p><p data-v-b747d660>7，更多支付相关问题请联系客服QQ 3918276357。</p></div>', 7)), (0,
                    n.Lk)("div", Ga, [r[8] || (r[8] = (0,
                    n.Lk)("h2", null, "激活码找回与剩余次数查询", -1)), r[9] || (r[9] = (0,
                    n.Lk)("div", {
                        class: "query-tips"
                    }, [(0,
                    n.Lk)("img", {
                        src: $a,
                        alt: "查询提示图",
                        class: "tips-image"
                    }), (0,
                    n.Lk)("img", {
                        src: Ba,
                        alt: "查询提示图",
                        class: "tips-image"
                    }), (0,
                    n.Lk)("p", {
                        class: "tips-text"
                    }, "先在微信(左图)/支付宝(右图)里面点进去支付记录详情（如图），再根据上图找到对应的数字A和数字B进行查询")], -1)), (0,
                    n.Lk)("div", Ja, [(0,
                    n.Lk)("div", et, [r[2] || (r[2] = (0,
                    n.Lk)("label", {
                        for: "orderNo"
                    }, "数字A(较短的数字)", -1)), (0,
                    n.bo)((0,
                    n.Lk)("input", {
                        type: "text",
                        id: "orderNo",
                        "onUpdate:modelValue": r[0] || (r[0] = e => a.value.orderNo = e),
                        placeholder: "请输入数字A",
                        class: "form-input"
                    }, null, 512), [[l.Jo, a.value.orderNo]])]), (0,
                    n.Lk)("div", at, [r[3] || (r[3] = (0,
                    n.Lk)("label", {
                        for: "payNo"
                    }, "数字B(较长的数字)", -1)), (0,
                    n.bo)((0,
                    n.Lk)("input", {
                        type: "text",
                        id: "payNo",
                        "onUpdate:modelValue": r[1] || (r[1] = e => a.value.payNo = e),
                        placeholder: "请输入数字B",
                        class: "form-input"
                    }, null, 512), [[l.Jo, a.value.payNo]])]), (0,
                    n.Lk)("button", {
                        onClick: k,
                        disabled: t.value || !a.value.orderNo || !a.value.payNo || d.value > 0,
                        class: (0,
                        o.C4)(["query-button", {
                            disabled: d.value > 0
                        }])
                    }, (0,
                    o.v_)(t.value ? "查询中..." : d.value > 0 ? `请等待 ${d.value}s` : "查询激活码"), 11, tt)]), i.value ? ((0,
                    n.uX)(),
                    (0,
                    n.CE)("div", lt, [r[7] || (r[7] = (0,
                    n.Lk)("h3", null, "查询结果", -1)), (0,
                    n.Lk)("div", nt, [r[4] || (r[4] = (0,
                    n.Lk)("span", {
                        class: "result-label"
                    }, "激活码：", -1)), (0,
                    n.Lk)("span", ot, (0,
                    o.v_)(i.value.cp), 1)]), (0,
                    n.Lk)("div", it, [r[5] || (r[5] = (0,
                    n.Lk)("span", {
                        class: "result-label"
                    }, "剩余次数：", -1)), (0,
                    n.Lk)("span", st, (0,
                    o.v_)(i.value.cpCount), 1)]), (0,
                    n.Lk)("div", dt, [r[6] || (r[6] = (0,
                    n.Lk)("span", {
                        class: "result-label"
                    }, "原始次数：", -1)), (0,
                    n.Lk)("span", rt, (0,
                    o.v_)(i.value.originCpCount), 1)])])) : (0,
                    n.Q3)("", !0), s.value ? ((0,
                    n.uX)(),
                    (0,
                    n.CE)("div", ut, [(0,
                    n.Lk)("p", null, (0,
                    o.v_)(s.value), 1)])) : (0,
                    n.Q3)("", !0)])])])]))
                }
            };
            const vt = (0,
            h.A)(ct, [["__scopeId", "data-v-b747d660"]]);
            var pt = vt;
            const kt = {
                class: "faq-container"
            }
              , gt = {
                class: "faq-content"
            }
              , mt = {
                class: "faq-section"
            }
              , ht = {
                class: "faq-item"
            }
              , bt = {
                class: "toggle-icon"
            }
              , ft = {
                class: "faq-item"
            }
              , wt = {
                class: "toggle-icon"
            }
              , yt = {
                class: "faq-section"
            }
              , Lt = {
                class: "faq-item"
            }
              , _t = {
                class: "toggle-icon"
            }
              , xt = {
                class: "faq-item"
            }
              , Ct = {
                class: "toggle-icon"
            }
              , Ft = {
                class: "faq-section"
            }
              , Rt = {
                class: "faq-item"
            }
              , Kt = {
                class: "toggle-icon"
            }
              , At = {
                class: "faq-item"
            }
              , Et = {
                class: "toggle-icon"
            };
            var St = {
                __name: "FrequentlyAskedQuestions",
                setup(e) {
                    (0,
                    Y.u)({
                        title: "FAQ | 常见问题解答_凹凸工坊_凹凸工坊-手写转换官网_一键生成手写文稿_手写模拟器_手写字体在线转换_在线字体制作_手写APP下载_模仿手写软件_AI手写字体生成_手写字体生成器_字体下载",
                        meta: [{
                            name: "description",
                            content: "FAQ | 常见问题解答,凹凸工坊FAQ,凹凸工坊-手写转换,凹凸工坊官网入口,手写模拟器,一键生成手写文稿,模仿手写软件,在线手写字体转换器,手写模拟器APP下载,AI生成专属手写字体,制作自己笔迹的字体,打印出以假乱真的模拟手写文档,让打印出的字看上去像手写的软件,模拟抄写软件,代替抄写,抄写神器软件"
                        }, {
                            name: "keywords",
                            content: "FAQ,常见问题解答,凹凸工坊,凹凸工坊-手写转换,凹凸工坊官网入口,凹凸工坊下载,手写模拟器,模仿手写软件,手写字体在线转换,手写模拟器APP下载,手写字体制作,模拟抄写软件,手写字体生成器,字体下载,个人笔迹字体制作"
                        }]
                    });
                    const a = (0,
                    u.KR)([1])
                      , t = e => {
                        a.value.includes(e) ? a.value = a.value.filter((a => a !== e)) : a.value.push(e)
                    }
                    ;
                    return (e, l) => ((0,
                    n.uX)(),
                    (0,
                    n.CE)("div", kt, [l[22] || (l[22] = (0,
                    n.Lk)("h1", {
                        class: "seo-title"
                    }, "FAQ | 凹凸工坊_一键生成手写文稿_手写模拟器_手写字体在线转换_在线字体制作_手写APP下载_模仿手写软件_AI手写字体生成_手写字体生成器_字体下载", -1)), l[23] || (l[23] = (0,
                    n.Lk)("div", {
                        class: "title-container"
                    }, null, -1)), (0,
                    n.Lk)("div", gt, [(0,
                    n.Lk)("div", mt, [l[10] || (l[10] = (0,
                    n.Lk)("h2", null, "基础问题", -1)), (0,
                    n.Lk)("div", ht, [(0,
                    n.Lk)("div", {
                        class: "faq-question",
                        onClick: l[0] || (l[0] = e => t(1))
                    }, [(0,
                    n.Lk)("span", bt, (0,
                    o.v_)(a.value.includes(1) ? "−" : "+"), 1), l[6] || (l[6] = (0,
                    n.Lk)("h3", null, "凹凸工坊是什么？", -1))]), (0,
                    n.Lk)("div", {
                        class: (0,
                        o.C4)(["faq-answer", {
                            active: a.value.includes(1)
                        }])
                    }, l[7] || (l[7] = [(0,
                    n.Lk)("p", null, "凹凸工坊是一款专业的在线生成模拟手写稿件工具，可以一键将您的文档转换为真实的手写稿图片。支持多种字体风格和纸张背景，让您的文档展现出真实手写的效果。", -1)]), 2)]), (0,
                    n.Lk)("div", ft, [(0,
                    n.Lk)("div", {
                        class: "faq-question",
                        onClick: l[1] || (l[1] = e => t(2))
                    }, [(0,
                    n.Lk)("span", wt, (0,
                    o.v_)(a.value.includes(2) ? "−" : "+"), 1), l[8] || (l[8] = (0,
                    n.Lk)("h3", null, "凹凸工坊能帮我做什么？", -1))]), (0,
                    n.Lk)("div", {
                        class: (0,
                        o.C4)(["faq-answer", {
                            active: a.value.includes(2)
                        }])
                    }, l[9] || (l[9] = [(0,
                    n.Lk)("p", null, "凹凸工坊能够帮助您：", -1), (0,
                    n.Lk)("ul", null, [(0,
                    n.Lk)("li", null, "将Word文档转换为逼真的手写稿"), (0,
                    n.Lk)("li", null, "提供多种手写字体和纸张背景选择"), (0,
                    n.Lk)("li", null, "支持高清打印输出（600dpi）"), (0,
                    n.Lk)("li", null, "调整文字凌乱度和涂改率，模拟真实手写场景"), (0,
                    n.Lk)("li", null, "快速预览转换效果"), (0,
                    n.Lk)("li", null, "下载无水印高清手写稿图片")], -1)]), 2)])]), (0,
                    n.Lk)("div", yt, [l[15] || (l[15] = (0,
                    n.Lk)("h2", null, "使用问题", -1)), (0,
                    n.Lk)("div", Lt, [(0,
                    n.Lk)("div", {
                        class: "faq-question",
                        onClick: l[2] || (l[2] = e => t(3))
                    }, [(0,
                    n.Lk)("span", _t, (0,
                    o.v_)(a.value.includes(3) ? "−" : "+"), 1), l[11] || (l[11] = (0,
                    n.Lk)("h3", null, "如何选择合适的纸张背景？", -1))]), (0,
                    n.Lk)("div", {
                        class: (0,
                        o.C4)(["faq-answer", {
                            active: a.value.includes(3)
                        }])
                    }, l[12] || (l[12] = [(0,
                    n.Lk)("p", null, "根据您的需求选择纸张背景：", -1), (0,
                    n.Lk)("ul", null, [(0,
                    n.Lk)("li", null, '如果需要实拍效果，选择"草稿纸-高清实拍"'), (0,
                    n.Lk)("li", null, '如果需要打印，选择"A4纸"、"B5纸"或"A3纸"系列的"供打印"选项'), (0,
                    n.Lk)("li", null, "纵向适合普通文档，横向适合表格或图表较多的文档")], -1)]), 2)]), (0,
                    n.Lk)("div", xt, [(0,
                    n.Lk)("div", {
                        class: "faq-question",
                        onClick: l[3] || (l[3] = e => t(4))
                    }, [(0,
                    n.Lk)("span", Ct, (0,
                    o.v_)(a.value.includes(4) ? "−" : "+"), 1), l[13] || (l[13] = (0,
                    n.Lk)("h3", null, "如何设置最逼真的手写效果？", -1))]), (0,
                    n.Lk)("div", {
                        class: (0,
                        o.C4)(["faq-answer", {
                            active: a.value.includes(4)
                        }])
                    }, l[14] || (l[14] = [(0,
                    n.Lk)("p", null, "要获得最逼真的手写效果，请尝试以下设置：", -1), (0,
                    n.Lk)("ol", null, [(0,
                    n.Lk)("li", null, '选择适合您文档内容的手写字体（如"王强手写体"或"栗壳坚坚体"）'), (0,
                    n.Lk)("li", null, "随机勾画涂改概率设置在2%-5%之间"), (0,
                    n.Lk)("li", null, "文字位置凌乱度设置在10%-30%之间"), (0,
                    n.Lk)("li", null, "如果是作业类文档，建议选择草稿纸背景")], -1)]), 2)])]), (0,
                    n.Lk)("div", Ft, [l[20] || (l[20] = (0,
                    n.Lk)("h2", null, "技术问题", -1)), (0,
                    n.Lk)("div", Rt, [(0,
                    n.Lk)("div", {
                        class: "faq-question",
                        onClick: l[4] || (l[4] = e => t(7))
                    }, [(0,
                    n.Lk)("span", Kt, (0,
                    o.v_)(a.value.includes(7) ? "−" : "+"), 1), l[16] || (l[16] = (0,
                    n.Lk)("h3", null, "为什么我的文件无法上传？", -1))]), (0,
                    n.Lk)("div", {
                        class: (0,
                        o.C4)(["faq-answer", {
                            active: a.value.includes(7)
                        }])
                    }, l[17] || (l[17] = [(0,
                    n.Lk)("p", null, "文件上传问题可能由以下原因导致：", -1), (0,
                    n.Lk)("ul", null, [(0,
                    n.Lk)("li", null, "文件格式不正确（仅支持.doc(不推荐，有概率转换失败)和.docx格式(推荐)））"), (0,
                    n.Lk)("li", null, "word文件大小超过限制（最大1.0MB,过大请将文件分割）,word里请不要包含图片等非文字内容）"), (0,
                    n.Lk)("li", null, "网络连接不稳定"), (0,
                    n.Lk)("li", null, "浏览器版本过低（建议使用Chrome、Firefox、Edge等现代浏览器）")], -1), (0,
                    n.Lk)("p", null, "如果问题持续，请尝试压缩文件大小或分割为多个小文件后再上传。", -1)]), 2)]), (0,
                    n.Lk)("div", At, [(0,
                    n.Lk)("div", {
                        class: "faq-question",
                        onClick: l[5] || (l[5] = e => t(8))
                    }, [(0,
                    n.Lk)("span", Et, (0,
                    o.v_)(a.value.includes(8) ? "−" : "+"), 1), l[18] || (l[18] = (0,
                    n.Lk)("h3", null, "下载的文件为什么这么大？", -1))]), (0,
                    n.Lk)("div", {
                        class: (0,
                        o.C4)(["faq-answer", {
                            active: a.value.includes(8)
                        }])
                    }, l[19] || (l[19] = [(0,
                    n.Lk)("p", null, "下载文件较大主要是因为图片质量高：", -1), (0,
                    n.Lk)("ul", null, [(0,
                    n.Lk)("li", null, "为了确保打印时的清晰度，我们提供600dpi的高清图片"), (0,
                    n.Lk)("li", null, "例如，凹凸工坊的A4纸图片分辨率达到4960×7015像素"), (0,
                    n.Lk)("li", null, "高分辨率保证了打印出来的文字清晰可辨，不会出现模糊情况")], -1), (0,
                    n.Lk)("p", null, "如果您对文件大小有特殊要求，请联系客服咨询定制服务。", -1)]), 2)])]), l[21] || (l[21] = (0,
                    n.Lk)("div", {
                        class: "contact-section"
                    }, [(0,
                    n.Lk)("h2", null, "还有其他问题？"), (0,
                    n.Lk)("p", null, "如果您有其他问题或需要帮助，请通过以下方式联系我们："), (0,
                    n.Lk)("div", {
                        class: "contact-info"
                    }, [(0,
                    n.Lk)("p", null, "客服QQ：3884839496"), (0,
                    n.Lk)("p", null, "工作时间：周一至周日 9:00-21:00")])], -1))])]))
                }
            };
            const Pt = (0,
            h.A)(St, [["__scopeId", "data-v-f31acb60"]]);
            var Vt = Pt
              , Dt = t.p + "img/share.8be98cfb.png"
              , Tt = t.p + "img/wxgzh.c1f67ede.png";
            const It = {
                class: "share-container"
            };
            var zt = {
                __name: "SharePage",
                setup(e) {
                    return (0,
                    Y.u)({
                        title: "移动端打开 | 分享网站 | 凹凸工坊_凹凸工坊-手写转换官网入口_一键生成手写文稿_手写模拟器_手写字体在线转换_在线字体制作_手写APP下载_模仿手写软件_AI手写字体生成_手写字体生成器_字体下载",
                        meta: [{
                            name: "description",
                            content: "凹凸工坊,凹凸工坊-手写转换,凹凸工坊官网入口,扫描二维码，在手机上使用凹凸工坊，随时随地生成手写稿。手写模拟器,一键生成手写文稿,模仿手写软件,在线手写字体转换器,手写模拟器APP下载,AI生成专属手写字体,制作自己笔迹的字体,打印出以假乱真的模拟手写文档,让打印出的字看上去像手写的软件,模拟抄写软件,代替抄写,抄写神器软件"
                        }, {
                            name: "keywords",
                            content: "凹凸工坊,凹凸工坊-手写转换,凹凸工坊官网入口,手写模拟器,模仿手写软件,手写字体在线转换,手写模拟器APP下载,手写字体制作,模拟抄写软件,手写字体生成器,字体下载,个人笔迹字体制作"
                        }]
                    }),
                    (e, a) => ((0,
                    n.uX)(),
                    (0,
                    n.CE)("div", It, a[0] || (a[0] = [(0,
                    n.Fv)('<h1 class="visually-hidden" data-v-29062821>分享页面 | 凹凸工坊手写转换工具分享</h1><div class="share-content" data-v-29062821><h2 class="share-title" data-v-29062821>移动端打开 | 分享网站</h2><div class="qr-code-container" data-v-29062821><img src="' + Dt + '" alt="移动端访问二维码" class="qr-code" data-v-29062821></div><div class="qr-code-container" data-v-29062821><div class="wxgzh-section" data-v-29062821><h3 class="wxgzh-title" data-v-29062821>关注公众号</h3><img src="' + Tt + '" alt="微信公众号二维码" class="qr-code" data-v-29062821></div></div><p class="mobile-tip" data-v-29062821>移动端请长按图片进行保存</p></div>', 2)])))
                }
            };
            const Ut = (0,
            h.A)(zt, [["__scopeId", "data-v-29062821"]]);
            var jt = Ut
              , qt = (t(3579),
            t(1219))
              , Wt = t(7477)
              , Ot = t(2885)
              , Xt = (t(2125),
            t(5279))
              , Mt = t.p + "img/蛙蛙写作.e99896fd.jpg"
              , Qt = t.p + "img/极简插件广告图440x280.a3d26d66.png"
              , $t = t.p + "img/讯飞绘文.129563b4.jpg"
              , Bt = t.p + "img/TRAE440.5ad61cbc.png"
              , Nt = t.p + "img/扣子440.4afe769c.png";
            const Yt = {
                class: "recommend-sites"
            };
            var Ht = {
                __name: "RecommendSites",
                setup(e) {
                    return (e, a) => ((0,
                    n.uX)(),
                    (0,
                    n.CE)("div", Yt, a[0] || (a[0] = [(0,
                    n.Fv)('<h3 class="recommend-title" data-v-018e9c0a>站长推荐</h3><div class="sites-container" data-v-018e9c0a><a href="https://wawawriter.com/app/academic-teaching?utm_source=aiweb32" target="_blank" class="site-item" data-v-018e9c0a><img src="' + Mt + '" alt="蛙蛙写作" class="site-image" data-v-018e9c0a></a><a href="https://www.geeksidebar.com/?ref=aotu" target="_blank" class="site-item" data-v-018e9c0a><img src="' + Qt + '" alt="极简插件" class="site-image" data-v-018e9c0a></a><a href="https://turbodesk.xfyun.cn/client-pro?channelid=aitool54" target="_blank" class="site-item" data-v-018e9c0a><img src="' + $t + '" alt="讯飞绘文" class="site-image" data-v-018e9c0a></a><a href="https://dis.csqixiang.cn/unpo/traeatgf.html" target="_blank" class="site-item" data-v-018e9c0a><img src="' + Bt + '" alt="TRAE设计" class="site-image" data-v-018e9c0a></a><a href="https://dis.csqixiang.cn/unpo/cozeatgf.html" target="_blank" class="site-item" data-v-018e9c0a><img src="' + Nt + '" alt="扣子COZE" class="site-image" data-v-018e9c0a></a></div>', 2)])))
                }
            };
            const Zt = (0,
            h.A)(Ht, [["__scopeId", "data-v-018e9c0a"]]);
            var Gt = Zt;
            const Jt = {
                class: "super-diy-container"
            }
              , el = {
                key: 0,
                class: "mobile-upload-tip"
            }
              , al = {
                key: 1,
                class: "global-loading-mask"
            }
              , tl = {
                class: "top-info"
            }
              , ll = {
                key: 0,
                class: "mobile-warning"
            }
              , nl = {
                key: 1,
                class: "mobile-warning"
            }
              , ol = {
                class: "diy-layout"
            }
              , il = {
                class: "left-panel"
            }
              , sl = {
                class: "title-row"
            }
              , dl = {
                key: 0,
                class: "module-list"
            }
              , rl = ["onClick"]
              , ul = {
                class: "module-header"
            }
              , cl = {
                class: "module-title"
            }
              , vl = {
                class: "module-actions"
            }
              , pl = {
                class: "module-preview"
            }
              , kl = {
                class: "module-info"
            }
              , gl = {
                class: "module-text"
            }
              , ml = {
                class: "module-settings"
            }
              , hl = {
                key: 1,
                class: "empty-list"
            }
              , bl = {
                class: "right-panel"
            }
              , fl = {
                key: 0,
                class: "upload-area"
            }
              , wl = {
                key: 1,
                class: "pdf-container"
            }
              , yl = {
                class: "toolbar"
            }
              , Ll = {
                class: "toolbar-center"
            }
              , _l = {
                key: 0
            }
              , xl = {
                key: 1,
                class: "cooldown-text"
            }
              , Cl = {
                key: 2,
                class: "cooldown-progress-bar"
            }
              , Fl = {
                key: 0,
                class: "page-controls"
            }
              , Rl = {
                class: "page-info"
            }
              , Kl = {
                key: 1,
                class: "ocr-status"
            }
              , Al = {
                class: "canvas-container"
            }
              , El = {
                class: "selection-modules"
            }
              , Sl = ["onClick"]
              , Pl = {
                class: "module-number"
            }
              , Vl = {
                key: 2,
                class: "custom-dialog"
            }
              , Dl = {
                class: "custom-dialog-content animate-slide-down"
            }
              , Tl = {
                class: "dialog-content-text"
            }
              , Il = {
                class: "dialog-message"
            }
              , zl = {
                key: 3,
                class: "interactive-dialog"
            }
              , Ul = {
                class: "interactive-dialog-content animate-scale"
            }
              , jl = ["innerHTML"]
              , ql = {
                class: "dialog-buttons"
            };
            var Wl = {
                __name: "SuperDIY",
                setup(e) {
                    (0,
                    Y.u)({
                        title: "超级DIY | 自定义背景_凹凸工坊-手写转换官网_PDF手写转换_手写字体在线转换_在线字体制作_手写APP下载_模仿手写软件_AI手写字体生成_手写字体生成器_字体下载",
                        meta: [{
                            name: "description",
                            content: "超级DIY,自定义背景,PDF模块化修改,凹凸工坊,凹凸工坊-手写转换,凹凸工坊官网入口,PDF手写转换,一键生成手写文稿,模仿手写软件,在线手写字体转换器,手写模拟器APP下载,AI生成专属手写字体,制作自己笔迹的字体,打印出以假乱真的模拟手写文档,让打印出的字看上去像手写的软件,模拟抄写软件,代替抄写,抄写神器软件"
                        }, {
                            name: "keywords",
                            content: "超级DIY,自定义背景,PDF模块化修改,凹凸工坊,凹凸工坊-手写转换,凹凸工坊官网入口,PDF手写转换,凹凸工坊,PDF手写转换,模仿手写软件,手写字体在线转换,手写模拟器APP下载,手写字体制作,模拟抄写软件,手写字体生成器,字体下载,个人笔迹字体制作"
                        }]
                    }),
                    Xt.GlobalWorkerOptions.workerSrc = `//s4.zstatic.net/ajax/libs/pdf.js/${Xt.version}/pdf.worker.min.js`;
                    let a = null;
                    const t = (0,
                    u.KR)(!1)
                      , i = async () => {
                        try {
                            t.value = !0,
                            a = await (0,
                            Ot.createWorker)("chi_sim")
                        } catch (e) {
                            console.error("Tesseract 工作器加载失败", e)
                        } finally {
                            t.value = !1
                        }
                    }
                      , s = (0,
                    u.KR)(null)
                      , d = (0,
                    u.KR)([])
                      , r = (0,
                    u.KR)(-1)
                      , c = (0,
                    u.KR)(-1)
                      , v = (0,
                    u.KR)(null)
                      , p = (0,
                    u.KR)(null)
                      , k = (0,
                    u.KR)(null)
                      , g = (0,
                    u.KR)(!1)
                      , m = (0,
                    u.KR)(!1)
                      , h = (0,
                    u.Kh)({
                        x: 0,
                        y: 0
                    })
                      , b = (0,
                    u.Kh)({
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0
                    })
                      , f = (0,
                    u.KR)(null)
                      , w = (0,
                    n.EW)(( () => {
                        const e = f.value;
                        return e ? parseFloat(e.dataset.scale) : 1
                    }
                    ))
                      , y = (0,
                    n.EW)(( () => {
                        const e = f.value;
                        return e ? parseFloat(e.dataset.pdfHeight) : 0
                    }
                    ))
                      , L = (0,
                    u.KR)(1)
                      , _ = (0,
                    u.KR)(0)
                      , x = (0,
                    u.KR)(null)
                      , C = (0,
                    u.KR)("")
                      , F = (0,
                    u.KR)(!1)
                      , R = (0,
                    u.KR)(!1)
                      , K = (0,
                    u.KR)(!1)
                      , A = (0,
                    u.KR)("info")
                      , E = (0,
                    u.KR)("")
                      , S = (0,
                    u.KR)("")
                      , P = (0,
                    u.KR)(null)
                      , V = (0,
                    u.KR)(!1)
                      , D = (0,
                    u.KR)("")
                      , T = (0,
                    u.KR)("")
                      , I = (0,
                    u.KR)("")
                      , z = (0,
                    u.KR)("确定")
                      , U = (0,
                    u.KR)("取消")
                      , j = (0,
                    u.KR)(!0)
                      , q = (0,
                    u.KR)(null)
                      , W = (0,
                    u.KR)(null)
                      , O = () => {
                        const e = navigator.userAgent || navigator.vendor || window.opera;
                        F.value = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e.toLowerCase())
                    }
                      , X = async () => {
                        try {
                            const e = await fetch("https://api.ipify.org?format=json")
                              , a = await e.json()
                              , t = a.ip
                              , l = navigator.userAgent
                              , n = Date.now()
                              , o = Math.random().toString(36).substring(2, 15)
                              , i = `${t}_${l}_${n}_${o}`;
                            return i
                        } catch (e) {
                            console.error("生成客户端ID失败:", e);
                            const a = Date.now()
                              , t = Math.random().toString(36).substring(2, 15);
                            return `local_${a}_${t}`
                        }
                    }
                      , M = async () => {
                        const e = localStorage.getItem("global_client_id");
                        e ? C.value = e : (C.value = await X(),
                        localStorage.setItem("global_client_id", C.value))
                    }
                      , Q = e => {
                        const a = null !== s.value
                          , t = d.value.length > 0
                          , l = a || t;
                        if (de.value || l) {
                            let l = "确定要离开吗？";
                            return de.value ? l = "文件正在处理中，确定要离开吗？" : t ? l = "已选择的模块将会丢失，确定要离开吗？" : a && (l = "已上传的PDF将会丢失，确定要离开吗？"),
                            e.returnValue = l,
                            l
                        }
                    }
                    ;
                    (0,
                    n.sV)(( () => {
                        M(),
                        O(),
                        F.value && (R.value = !0,
                        setTimeout(( () => {
                            R.value = !1
                        }
                        ), 5e3)),
                        window.addEventListener("resize", O),
                        window.addEventListener("beforeunload", Q)
                    }
                    ));
                    const $ = async (e, a=1) => {
                        try {
                            const t = Xt.getDocument(e)
                              , l = await t.promise;
                            _.value = l.numPages;
                            const n = await l.getPage(a)
                              , o = n.getViewport({
                                scale: 1
                            })
                              , i = o.width
                              , s = o.height;
                            let d = 1.3;
                            if (F.value) {
                                const e = window.innerWidth - 30;
                                d = e / i,
                                d = Math.max(.8, Math.min(d, 2))
                            }
                            const r = n.getViewport({
                                scale: d
                            })
                              , u = f.value
                              , c = u.getContext("2d");
                            u.width = r.width,
                            u.height = r.height,
                            u.style.width = `${r.width}px`,
                            u.style.height = `${r.height}px`,
                            u.dataset.pdfWidth = i,
                            u.dataset.pdfHeight = s,
                            u.dataset.scale = d,
                            u.dataset.currentPage = a,
                            c.imageSmoothingEnabled = !0,
                            c.imageSmoothingQuality = "high",
                            await n.render({
                                canvasContext: c,
                                viewport: r
                            }).promise;
                            const p = v.value;
                            p.style.width = `${r.width}px`,
                            p.style.height = `${r.height}px`
                        } catch (t) {
                            console.error("PDF渲染失败:", t),
                            Ke("error", "渲染失败", "PDF渲染失败: " + t.message)
                        }
                    }
                      , B = e => {
                        if (!g.value)
                            return;
                        m.value = !0;
                        const a = f.value
                          , t = a.getBoundingClientRect()
                          , l = e.clientX - t.left
                          , n = e.clientY - t.top;
                        h.x = l,
                        h.y = n,
                        b.left = l,
                        b.top = n,
                        b.width = 0,
                        b.height = 0
                    }
                      , N = e => {
                        if (!m.value)
                            return;
                        const a = f.value
                          , t = a.getBoundingClientRect()
                          , l = e.clientX - t.left
                          , n = e.clientY - t.top;
                        b.left = Math.min(h.x, l),
                        b.top = Math.min(h.y, n),
                        b.width = Math.abs(l - h.x),
                        b.height = Math.abs(n - h.y)
                    }
                      , H = async () => {
                        if (!b.width || !b.height)
                            return null;
                        try {
                            const e = document.querySelector(".pdf-canvas");
                            if (!e)
                                throw new Error("找不到 PDF canvas");
                            parseFloat(e.dataset.scale);
                            const a = parseFloat(e.dataset.containerWidth) || e.clientWidth
                              , t = parseFloat(e.dataset.containerHeight) || e.clientHeight
                              , l = document.createElement("canvas")
                              , n = l.getContext("2d");
                            l.width = b.width,
                            l.height = b.height;
                            const o = b.left / a * e.width
                              , i = b.top / t * e.height
                              , s = b.width / a * e.width
                              , d = b.height / t * e.height;
                            n.drawImage(e, o, i, s, d, 0, 0, b.width, b.height);
                            const r = l.toDataURL("image/png");
                            return r
                        } catch (e) {
                            return console.error("截取区域失败", e),
                            Ke("error", "截取失败", "截取区域失败: " + e.message),
                            null
                        }
                    }
                      , Z = async e => {
                        if (!a)
                            return console.warn("Tesseract 工作器未初始化"),
                            "OCR引擎未加载，请手动输入文本";
                        if (!e)
                            return "无法获取图像数据";
                        try {
                            t.value = !0;
                            const l = await a.recognize(e)
                              , n = l.data?.text || "";
                            if (n.trim()) {
                                const e = n.replace(/ /g, "");
                                return e.trim()
                            }
                            return "未识别到文字，请手动输入"
                        } catch (l) {
                            return console.error("OCR 识别失败", l),
                            "OCR识别失败，请手动输入文本"
                        } finally {
                            t.value = !1
                        }
                    }
                      , G = async () => {
                        if (m.value)
                            if (b.width < 10 || b.height < 10)
                                m.value = !1;
                            else
                                try {
                                    const e = await H();
                                    let a = "请手动输入文本";
                                    e && (a = await Z(e));
                                    const t = f.value
                                      , l = parseFloat(t.dataset.scale)
                                      , n = parseFloat(t.dataset.pdfHeight)
                                      , o = Math.round(b.left / l)
                                      , i = Math.round(n - (b.top + b.height) / l)
                                      , s = Math.round((b.left + b.width) / l)
                                      , u = Math.round(n - b.top / l)
                                      , v = !(d.value.length > 0) || d.value[0].isDiyPaper
                                      , p = {
                                        page: L.value,
                                        x: o,
                                        y: i,
                                        width: s - o,
                                        height: u - i,
                                        text: a,
                                        fontType: 6,
                                        fontSize: 10,
                                        charSpacing: 1,
                                        lineSpacing: 1,
                                        imageData: e,
                                        isDiyPaper: v,
                                        autoFit: !0,
                                        lineCount: 20,
                                        columnCount: 25,
                                        mistakeRate: 0,
                                        messyRate: 0,
                                        needBlank: !1,
                                        hexColorStr: "#000000"
                                    };
                                    d.value.push(p),
                                    r.value = d.value.length - 1,
                                    c.value = d.value.length - 1,
                                    m.value = !1
                                } catch (e) {
                                    console.error("处理选择区域失败", e),
                                    m.value = !1
                                }
                    }
                      , J = () => {
                        m.value = !1
                    }
                      , ee = e => {
                        if (!g.value)
                            return;
                        m.value = !0,
                        e.preventDefault();
                        const a = f.value
                          , t = a.getBoundingClientRect()
                          , l = e.touches[0]
                          , n = l.clientX - t.left
                          , o = l.clientY - t.top;
                        h.x = n,
                        h.y = o,
                        b.left = n,
                        b.top = o,
                        b.width = 0,
                        b.height = 0
                    }
                      , ae = e => {
                        if (!m.value)
                            return;
                        e.preventDefault();
                        const a = f.value
                          , t = a.getBoundingClientRect()
                          , l = e.touches[0]
                          , n = l.clientX - t.left
                          , o = l.clientY - t.top;
                        b.left = Math.min(h.x, n),
                        b.top = Math.min(h.y, o),
                        b.width = Math.abs(n - h.x),
                        b.height = Math.abs(o - h.y)
                    }
                      , te = async e => {
                        await G(e)
                    }
                      , le = e => {
                        r.value = e
                    }
                      , ne = e => {
                        d.value.splice(e, 1),
                        r.value === e ? r.value = d.value.length > 0 ? 0 : -1 : r.value > e && r.value--,
                        c.value === e ? c.value = -1 : c.value > e && c.value--
                    }
                      , oe = (0,
                    u.KR)(!1)
                      , ie = (0,
                    u.KR)(0)
                      , se = ((0,
                    u.KR)(parseInt(localStorage.getItem("lastRedirectTime") || "0")),
                    (0,
                    u.KR)(parseInt(localStorage.getItem("lastAdShowTime") || "0")))
                      , de = (0,
                    u.KR)(!1)
                      , re = (0,
                    u.KR)(!1)
                      , ue = (0,
                    u.KR)(0)
                      , ce = (0,
                    u.KR)(null)
                      , ve = () => {
                        if (Math.random() > .9)
                            return !1;
                        const e = Date.now()
                          , a = 108e5;
                        if (e - se.value < a)
                            return !1;
                        const t = parseInt(C.value.split("_")[2])
                          , l = 864e5;
                        return !(e - t < l)
                    }
                      , pe = () => {
                        const e = Date.now();
                        se.value = e,
                        localStorage.setItem("lastAdShowTime", e.toString()),
                        F.value ? Math.random() > .3 ? window.open("https://turbodesk.xfyun.cn/client-pro?channelid=aitool54", "_blank") : window.open("https://wawawriter.com/app/academic-teaching?utm_source=aiweb32", "_blank") : Math.random() > .2 ? window.open("https://www.geeksidebar.com/?ref=aotu", "_blank") : window.open("https://wawawriter.com/app/academic-teaching?utm_source=aiweb32", "_blank")
                    }
                      , ke = () => {
                        re.value = !0,
                        ue.value = 100;
                        const e = 1e4
                          , a = 100
                          , t = e / a;
                        let l = 0;
                        ce.value = setInterval(( () => {
                            l++,
                            ue.value = Math.max(0, 100 - l / t * 100),
                            l >= t && (clearInterval(ce.value),
                            re.value = !1,
                            ue.value = 0)
                        }
                        ), a)
                    }
                      , ge = async () => {
                        if (console.log("handlePreview 被调用"),
                        !s.value || 0 === d.value.length)
                            return void Ke("warning", "操作提示", "请先上传PDF并添加模块");
                        if (re.value) {
                            const e = Math.ceil(ue.value / 20);
                            return void Ke("warning", "操作提示", `按钮冷却中，请等待 ${e} 秒后再试`)
                        }
                        const e = Date.now()
                          , a = e - ie.value;
                        if (a < 1e4)
                            Ke("warning", "操作提示", `请等待 ${Math.ceil((1e4 - a) / 1e3)} 秒后再试`);
                        else if (ke(),
                        ve())
                            try {
                                await Ee({
                                    type: "info",
                                    title: "温馨提示 ❤️",
                                    message: '\n          <div style="line-height: 1.8; font-size: 15px; padding: 20px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #4a6bff; margin: 10px 0;">\n            <div style="color: #333; margin-bottom: 15px; font-size: 16px;">为维护网站经营，点击确定按钮后将：</div>\n            <div style="color: #333; padding-left: 20px; margin-bottom: 12px; display: flex; align-items: center;">\n              <span style="margin-right: 8px; font-size: 18px;">🎨</span>\n              自动开始生成预览图\n            </div>\n            <div style="color: #333; padding-left: 20px; margin-bottom: 12px; display: flex; align-items: center;">\n              <span style="margin-right: 8px; font-size: 18px;">🚀</span>\n              跳转到广告界面（您可以随时切回当前界面）\n            </div>\n            <div style="color: #333; padding-left: 20px; display: flex; align-items: center;">\n              <span style="margin-right: 8px; font-size: 18px;">⏰</span>\n              3小时内不会再展示跳转广告\n            </div>\n          </div>\n        ',
                                    confirmButtonText: "确定",
                                    showCancelButton: !1
                                }),
                                pe();
                                try {
                                    await me()
                                } catch (t) {
                                    console.error("预览处理失败:", t)
                                }
                            } catch (l) {
                                return
                            }
                        else
                            try {
                                await me()
                            } catch (t) {
                                console.error("预览处理失败:", t)
                            }
                    }
                      , me = async () => {
                        try {
                            (0,
                            qt.nk)({
                                message: "开始处理，请稍候...",
                                type: "info",
                                duration: 2e3
                            }),
                            oe.value = !0,
                            de.value = !0,
                            ie.value = Date.now(),
                            await new Promise((e => setTimeout(e, 2e3)));
                            const e = new FormData
                              , a = await fetch(s.value).then((e => e.blob()));
                            e.append("file", a, "document.pdf");
                            const t = d.value[0].isDiyPaper;
                            let l, n;
                            l = t ? d.value.map(( ({page: e, x: a, y: t, width: l, height: n, text: o, fontType: i, fontSize: s, charSpacing: d, lineSpacing: r, lineCount: u, autoFit: c, columnCount: v, mistakeRate: p, messyRate: k, needBlank: g, hexColorStr: m}) => ({
                                page: e,
                                x: a,
                                y: t,
                                width: l,
                                height: n,
                                text: o,
                                fontType: i,
                                fontSize: s,
                                charSpacing: d,
                                lineSpacing: r,
                                lineCount: u,
                                autoFit: c,
                                columnCount: v,
                                mistakeRate: p,
                                messyRate: k,
                                needBlank: g,
                                hexColorStr: m
                            }))) : d.value.map(( ({isDiyPaper: e, ...a}) => a)),
                            e.append("regions", JSON.stringify(l)),
                            e.append("clientId", C.value),
                            n = t ? "https://www.autohanding.com/api/v1/pdf/diy-paper-gz" : "https://www.autohanding.com/api/v1/pdf/replace-text-preview";
                            const o = await Na.A.post(n, e, {
                                headers: {
                                    "Content-Type": "multipart/form-data"
                                },
                                responseType: "blob"
                            })
                              , i = new Blob([o.data],{
                                type: "application/pdf"
                            });
                            x.value && URL.revokeObjectURL(x.value),
                            x.value = URL.createObjectURL(i),
                            await Ee({
                                type: "success",
                                title: "预览文件生成成功",
                                message: `\n        <div style="\n          line-height: 1.8;\n          font-size: 15px;\n          padding: 20px;\n          background: #f8f9fa;\n          border-radius: 8px;\n          border-left: 4px solid #4a6bff;\n          margin: 10px 0;\n          text-align: center;\n        ">\n          <div style="color: #333; font-weight: 500; margin-bottom: 15px;">🎉 预览文件已生成完成！</div>\n          <div style="color: #666; margin-bottom: 20px;">点击下方按钮查看预览效果</div>\n          ${F.value ? '<div style="color: #ff6b35; font-size: 13px;">移动端提示：如果看不到预览效果请直接点击下载查看</div>' : '<div style="color: #999; font-size: 13px;">(某些浏览器可能会阻止自动打开，请手动点击查看)</div>'}\n        </div>\n      `,
                                confirmButtonText: "查看预览",
                                showCancelButton: !1
                            }),
                            window.open(x.value, "_blank")
                        } catch (e) {
                            console.error("生成预览失败:", e);
                            let t = "服务器响应异常，请稍后再试";
                            try {
                                if (e.response?.data)
                                    if (e.response.data instanceof Blob) {
                                        const l = await e.response.data.text();
                                        try {
                                            const e = JSON.parse(l);
                                            t = e.msg || t
                                        } catch (a) {
                                            t = l || t
                                        }
                                    } else
                                        t = e.response.data.msg || t
                            } catch (a) {
                                t = e.message || t
                            }
                            t.includes("频率") || t.includes("繁忙") ? Ke("warning", "操作提示", "访问频率过快，请20秒后再试") : t.includes("glyph") ? Ke("error", "内容错误", "包含特殊字符（如emoji,制表符）！请检查文本内容") : Ke("error", "生成失败", "生成预览失败: " + t)
                        } finally {
                            oe.value = !1,
                            de.value = !1
                        }
                    }
                      , he = async () => {
                        console.log("handleDownload 被调用"),
                        x.value ? (console.log("开始下载流程"),
                        be()) : Ke("warning", "操作提示", "请先生成预览文件")
                    }
                      , be = async () => {
                        try {
                            await Ee({
                                type: "success",
                                title: "文件处理完成",
                                message: '\n        <div style="\n          line-height: 1.8;\n          font-size: 15px;\n          padding: 20px;\n          background: #f8f9fa;\n          border-radius: 8px;\n          border-left: 4px solid #52c41a;\n          margin: 10px 0;\n          text-align: center;\n        ">\n          <div style="color: #333; font-weight: 500; margin-bottom: 15px;">✅ PDF文件已生成完成！</div>\n          <div style="color: #666; margin-bottom: 20px;">点击下方按钮下载转换后的PDF文件</div>\n          <div style="color: #999; font-size: 13px;">(某些浏览器可能会阻止自动下载，请手动点击下载)</div>\n          <div style="color: #999; font-size: 13px;">下载位置：请查看“浏览器下载记录”</div>\n        </div>\n      ',
                                confirmButtonText: "下载PDF文件",
                                showCancelButton: !1
                            });
                            try {
                                const e = await fetch(x.value)
                                  , a = await e.blob();
                                if (window.navigator.msSaveOrOpenBlob)
                                    window.navigator.msSaveOrOpenBlob(a, "转换后的PDF文件.pdf");
                                else {
                                    const e = URL.createObjectURL(a)
                                      , t = document.createElement("a");
                                    t.href = e,
                                    t.download = "转换后的PDF文件.pdf",
                                    document.body.appendChild(t),
                                    t.click(),
                                    document.body.removeChild(t),
                                    setTimeout(( () => {
                                        URL.revokeObjectURL(e)
                                    }
                                    ), 100)
                                }
                            } catch (e) {
                                console.error("下载失败:", e),
                                Ke("error", "下载失败", "下载文件失败，请稍后重试")
                            }
                        } catch (a) {
                            console.error("处理文件失败:", a),
                            Ke("error", "处理失败", "处理文件失败: " + a.message)
                        }
                    }
                      , fe = e => {
                        c.value === e ? c.value = -1 : c.value = e
                    }
                      , we = () => {
                        g.value = !g.value,
                        g.value || (m.value = !1)
                    }
                      , ye = async e => {
                        if (!(e < 1 || e > _.value))
                            try {
                                L.value = e,
                                await $(s.value, e),
                                Ke("success", "切换成功", `已切换到第 ${e} 页`)
                            } catch (a) {
                                console.error("切换页面失败:", a),
                                Ke("error", "切换失败", "切换页面失败: " + a.message)
                            }
                    }
                      , Le = async e => {
                        if (e && e.raw) {
                            if ("application/pdf" !== e.raw.type)
                                return void Ke("error", "文件错误", "请上传PDF文件!");
                            const a = 1048576;
                            if (e.raw.size > a)
                                return void Ke("warning", "文件过大", "文件大小超过1.0MB（系统压力大请见谅），请分割成小文件再上传！");
                            s.value = URL.createObjectURL(e.raw),
                            L.value = 1,
                            await $(s.value, 1),
                            Ee({
                                type: "info",
                                title: "温馨提示",
                                message: '\n        <div style="\n          line-height: 2; \n          font-size: 15px;\n          padding: 20px;\n          background: #f8f9fa;\n          border-radius: 8px;\n          border-left: 4px solid #4a6bff;\n          margin: 10px 0;\n        ">\n          <div style="\n            display: flex;\n            align-items: center;\n            margin-bottom: 12px;\n            color: #333;\n            font-weight: 500;\n          ">\n            <span style="\n              background: #4a6bff;\n              color: white;\n              width: 24px;\n              height: 24px;\n              border-radius: 50%;\n              display: inline-flex;\n              align-items: center;\n              justify-content: center;\n              margin-right: 10px;\n              font-size: 14px;\n            ">1</span>\n            点击开始框选，框选任何你想要的书写位置\n          </div>\n          <div style="\n            display: flex;\n            align-items: center;\n            margin-bottom: 12px;\n            color: #333;\n            font-weight: 500;\n          ">\n            <span style="\n              background: #4a6bff;\n              color: white;\n              width: 24px;\n              height: 24px;\n              border-radius: 50%;\n              display: inline-flex;\n              align-items: center;\n              justify-content: center;\n              margin-right: 10px;\n              font-size: 14px;\n            ">2</span>\n            检查或填入内容文字，认真数好行列数\n          </div>\n          <div style="\n            display: flex;\n            align-items: center;\n            margin-bottom: 12px;\n            color: #333;\n            font-weight: 500;\n          ">\n            <span style="\n              background: #4a6bff;\n              color: white;\n              width: 24px;\n              height: 24px;\n              border-radius: 50%;\n              display: inline-flex;\n              align-items: center;\n              justify-content: center;\n              margin-right: 10px;\n              font-size: 14px;\n            ">3</span>\n            认真选择每个模块的处理方式！再点击开始转换\n          </div>\n          <div style="\n            display: flex;\n            align-items: center;\n            color: #ff4d4f;\n            font-weight: 500;\n          ">\n            <span style="\n              background: #4a6bff;\n              color: white;\n              width: 24px;\n              height: 24px;\n              border-radius: 50%;\n              display: inline-flex;\n              align-items: center;\n              justify-content: center;\n              margin-right: 10px;\n              font-size: 14px;\n            ">4</span>\n            右上角蓝色文档有常见背景素材/教程/格子纸处理细节\n          </div>\n          <div style="\n            display: flex;\n            align-items: center;\n            color: #ff4d4f;\n            font-weight: 500;\n          ">\n            <span style="\n              background: #4a6bff;\n              color: white;\n              width: 24px;\n              height: 24px;\n              border-radius: 50%;\n              display: inline-flex;\n              align-items: center;\n              justify-content: center;\n              margin-right: 10px;\n              font-size: 14px;\n            ">5</span>\n            注意：如果PDF显示不全请按住Ctrl键滚动鼠标滚轮放大\n          </div>\n        </div>\n      ',
                                confirmButtonText: "我知道了",
                                showCancelButton: !1
                            }),
                            i().then(( () => {}
                            )).catch((e => {
                                console.error("初始化OCR引擎失败", e)
                            }
                            ))
                        }
                    }
                      , _e = () => {
                        s.value && URL.revokeObjectURL(s.value),
                        x.value && (URL.revokeObjectURL(x.value),
                        x.value = null),
                        s.value = null,
                        L.value = 1,
                        _.value = 0,
                        g.value = !1,
                        m.value = !1,
                        d.value = [],
                        r.value = -1,
                        c.value = -1,
                        xe()
                    }
                      , xe = async () => {
                        if (a)
                            try {
                                await a.terminate(),
                                a = null
                            } catch (e) {
                                console.error("终止OCR工作器失败", e)
                            }
                    }
                    ;
                    (0,
                    n.hi)(( () => {
                        s.value && URL.revokeObjectURL(s.value),
                        x.value && URL.revokeObjectURL(x.value),
                        window.removeEventListener("resize", O),
                        window.removeEventListener("beforeunload", Q),
                        xe()
                    }
                    ));
                    const Ce = (0,
                    u.KR)([])
                      , Fe = e => {
                        if (d.value.length > 1) {
                            const a = d.value.filter((a => a !== e))
                              , t = a.some((a => a.isDiyPaper !== e.isDiyPaper));
                            if (t)
                                return e.isDiyPaper = !e.isDiyPaper,
                                void Ke("warning", "操作提示", "当前已选择多个模块，不能混合使用不同的处理方式！请保持所有模块使用相同的处理方式。")
                        }
                    }
                      , Re = () => {
                        const e = F.value ? "https://dis.csqixiang.cn/unpo/cozeatgf.html" : "https://dis.csqixiang.cn/unpo/dbatgf.html";
                        window.open(e, "_blank")
                    }
                      , Ke = (e, a, t, l=null, n=3e3) => {
                        A.value = e,
                        E.value = a,
                        S.value = t,
                        P.value = l,
                        K.value = !0,
                        setTimeout(( () => {
                            Ae()
                        }
                        ), n)
                    }
                      , Ae = () => {
                        K.value = !1,
                        P.value && "function" === typeof P.value && P.value(),
                        P.value = null
                    }
                      , Ee = e => new Promise(( (a, t) => {
                        D.value = e.type || "",
                        T.value = e.title || "",
                        I.value = e.message || "",
                        z.value = e.confirmButtonText || "确定",
                        U.value = e.cancelButtonText || "取消",
                        j.value = !1 !== e.showCancelButton,
                        q.value = a,
                        W.value = t,
                        V.value = !0
                    }
                    ))
                      , Se = () => {
                        V.value = !1,
                        q.value && q.value("confirm"),
                        q.value = null,
                        W.value = null
                    }
                      , Pe = () => {
                        V.value = !1,
                        W.value && W.value("cancel"),
                        q.value = null,
                        W.value = null
                    }
                      , Ve = (0,
                    u.KR)(["advancedSettings"]);
                    return (e, a) => {
                        const i = (0,
                        n.g2)("el-button")
                          , h = (0,
                        n.g2)("el-icon")
                          , C = (0,
                        n.g2)("el-option")
                          , P = (0,
                        n.g2)("el-select")
                          , q = (0,
                        n.g2)("el-form-item")
                          , W = (0,
                        n.g2)("el-radio")
                          , O = (0,
                        n.g2)("el-radio-group")
                          , X = (0,
                        n.g2)("el-switch")
                          , M = (0,
                        n.g2)("el-input-number")
                          , Q = (0,
                        n.g2)("el-collapse-item")
                          , $ = (0,
                        n.g2)("el-collapse")
                          , Y = (0,
                        n.g2)("el-color-picker")
                          , H = (0,
                        n.g2)("el-input")
                          , Z = (0,
                        n.g2)("el-form")
                          , ie = (0,
                        n.g2)("el-upload");
                        return (0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Jt, [a[21] || (a[21] = (0,
                        n.Lk)("h1", {
                            class: "visually-hidden"
                        }, "超级DIY | 凹凸工坊自定义纸张背景工具", -1)), R.value && F.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", el, " 下滑可上传纸张背景文件 ")) : (0,
                        n.Q3)("", !0), de.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", al, a[5] || (a[5] = [(0,
                        n.Lk)("div", {
                            class: "loading-content"
                        }, [(0,
                        n.Lk)("div", {
                            class: "loading-spinner"
                        }), (0,
                        n.Lk)("div", {
                            class: "loading-text"
                        }, "文件处理中，请勿刷新页面..."), (0,
                        n.Lk)("div", {
                            class: "loading-tips"
                        }, [(0,
                        n.eW)("处理时间可能需要数秒至数分钟"), (0,
                        n.Lk)("br"), (0,
                        n.eW)("请耐心等待，完成后会自动提示")])], -1)]))) : (0,
                        n.Q3)("", !0), (0,
                        n.Lk)("div", tl, [F.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", ll, "超级DIY功能已支持移动端使用，但推荐使用电脑获得更好体验")) : ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", nl, '若显示"OCR引擎(用于文字识别)加载失败"，请尝试刷新页面！或不做处理')), a[6] || (a[6] = (0,
                        n.Lk)("div", {
                            class: "tutorial-link"
                        }, [(0,
                        n.Lk)("a", {
                            href: "https://acnsugnqu4f9.feishu.cn/wiki/I2vqwEzEWiGZE9kjCLrcy66onTh",
                            target: "_blank"
                        }, "🔗点击查看超级DIY素材库 | 使用场景 | 使用教程")], -1))]), (0,
                        n.bF)(Gt), (0,
                        n.Lk)("div", ol, [(0,
                        n.Lk)("div", il, [a[14] || (a[14] = (0,
                        n.Lk)("h3", null, null, -1)), (0,
                        n.Lk)("div", sl, [a[8] || (a[8] = (0,
                        n.Lk)("h3", null, "已选模块", -1)), (0,
                        n.bF)(i, {
                            type: "primary",
                            size: "small",
                            onClick: Re,
                            class: "ai-button"
                        }, {
                            default: (0,
                            n.k6)(( () => a[7] || (a[7] = [(0,
                            n.Lk)("span", {
                                class: "ai-icon"
                            }, "🤖", -1), (0,
                            n.eW)(" 有事问AI ")]))),
                            _: 1
                        })]), d.value.length > 0 ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", dl, [((0,
                        n.uX)(!0),
                        (0,
                        n.CE)(n.FK, null, (0,
                        n.pI)(d.value, ( (e, t) => ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", {
                            key: t,
                            class: (0,
                            o.C4)(["module-item", {
                                active: r.value === t
                            }]),
                            onClick: e => le(t)
                        }, [(0,
                        n.Lk)("div", ul, [(0,
                        n.Lk)("span", cl, "模块 " + (0,
                        o.v_)(t + 1), 1), (0,
                        n.Lk)("div", vl, [(0,
                        n.bF)(i, {
                            type: "primary",
                            size: "small",
                            onClick: (0,
                            l.D$)((e => fe(t)), ["stop"]),
                            disabled: de.value
                        }, {
                            default: (0,
                            n.k6)(( () => [(0,
                            n.eW)((0,
                            o.v_)(c.value === t ? "收起" : "展开"), 1)])),
                            _: 2
                        }, 1032, ["onClick", "disabled"]), (0,
                        n.bF)(i, {
                            type: "danger",
                            size: "small",
                            circle: "",
                            onClick: (0,
                            l.D$)((e => ne(t)), ["stop"]),
                            disabled: de.value
                        }, {
                            default: (0,
                            n.k6)(( () => [(0,
                            n.bF)(h, null, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)((0,
                                u.R1)(Wt.epd))])),
                                _: 1
                            })])),
                            _: 2
                        }, 1032, ["onClick", "disabled"])])]), (0,
                        n.Lk)("div", pl, [(0,
                        n.Lk)("div", kl, [(0,
                        n.Lk)("span", null, "页码: " + (0,
                        o.v_)(e.page), 1), a[9] || (a[9] = (0,
                        n.Lk)("span", null, 'tips: 滑动到底部"文字内容"处可修改书写内容', -1))]), (0,
                        n.Lk)("div", gl, (0,
                        o.v_)(e.text), 1)]), (0,
                        n.bo)((0,
                        n.Lk)("div", ml, [(0,
                        n.bF)(Z, {
                            "label-position": "top",
                            size: "small"
                        }, {
                            default: (0,
                            n.k6)(( () => [(0,
                            n.bF)(q, {
                                label: "要转成的字体类型"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)(P, {
                                    modelValue: e.fontType,
                                    "onUpdate:modelValue": a => e.fontType = a,
                                    placeholder: "选择字体",
                                    disabled: de.value
                                }, {
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(C, {
                                        value: 12,
                                        label: "硬笔楷书"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 4,
                                        label: "新叶念体"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 6,
                                        label: "手写体体1 (点击展开)"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 7,
                                        label: "平方洒脱体"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 8,
                                        label: "王强手写体"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 14,
                                        label: "真实-手写体2"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 15,
                                        label: "真实-手写体3"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 16,
                                        label: "真实-手写体4 (下滑查看更多字体)"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 1,
                                        label: "喜脉喜欢体"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 2,
                                        label: "ChillZhuo"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 3,
                                        label: "pigtruman手写体"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 17,
                                        label: "真实-手写体5"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 18,
                                        label: "真实-手写体6"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 19,
                                        label: "真实-手写体7"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 20,
                                        label: "真实-手写体8"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 21,
                                        label: "真实-手写体9"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 22,
                                        label: "真实-手写体10"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 23,
                                        label: "真实-手写体11"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 24,
                                        label: "真实-手写体12"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 9,
                                        label: "日文-TekitouPoem"
                                    }), (0,
                                    n.bF)(C, {
                                        value: 10,
                                        label: "韩文-KimjungchulScript"
                                    })])),
                                    _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "disabled"])])),
                                _: 2
                            }, 1024), (0,
                            n.bF)(q, {
                                label: "处理方式(请认真选择~不懂的点右上角教程)",
                                class: "bold-label red-label"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)(O, {
                                    modelValue: e.isDiyPaper,
                                    "onUpdate:modelValue": a => e.isDiyPaper = a,
                                    disabled: de.value,
                                    onChange: () => Fe(e)
                                }, {
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(W, {
                                        label: !0
                                    }, {
                                        default: (0,
                                        n.k6)(( () => a[10] || (a[10] = [(0,
                                        n.eW)("1.自定义背景(适合字多)")]))),
                                        _: 1
                                    }), (0,
                                    n.bF)(W, {
                                        label: !1
                                    }, {
                                        default: (0,
                                        n.k6)(( () => a[11] || (a[11] = [(0,
                                        n.eW)("2.填表格/替换/插入文字(适合字少)")]))),
                                        _: 1
                                    })])),
                                    _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])])),
                                _: 2
                            }, 1024), e.isDiyPaper ? ((0,
                            n.uX)(),
                            (0,
                            n.CE)(n.FK, {
                                key: 1
                            }, [(0,
                            n.bF)(q, {
                                label: "行数(框了几行写几行)"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)(M, {
                                    modelValue: e.lineCount,
                                    "onUpdate:modelValue": a => e.lineCount = a,
                                    min: 1,
                                    max: 100,
                                    disabled: de.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])),
                                _: 2
                            }, 1024), (0,
                            n.bF)(q, {
                                label: "列数(一行想要多少字 | 非格子纸也适用 | 格子纸框选细节看右上角教程)",
                                class: "bold-label red-label"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)(M, {
                                    modelValue: e.columnCount,
                                    "onUpdate:modelValue": a => e.columnCount = a,
                                    min: 1,
                                    max: 99,
                                    disabled: de.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])),
                                _: 2
                            }, 1024), (0,
                            n.bF)($, {
                                modelValue: Ve.value,
                                "onUpdate:modelValue": a[1] || (a[1] = e => Ve.value = e),
                                class: "advanced-settings"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)(Q, {
                                    title: "高级设置 | 点击展开",
                                    name: "advancedSettings"
                                }, {
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(q, {
                                        label: "错字涂改勾画概率(0~30%)"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(M, {
                                            modelValue: e.mistakeRate,
                                            "onUpdate:modelValue": a => e.mistakeRate = a,
                                            min: 0,
                                            max: 30,
                                            step: 1,
                                            disabled: de.value
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])),
                                        _: 2
                                    }, 1024), (0,
                                    n.bF)(q, {
                                        label: "字体位置凌乱度(0~30%)"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(M, {
                                            modelValue: e.messyRate,
                                            "onUpdate:modelValue": a => e.messyRate = a,
                                            min: 0,
                                            max: 30,
                                            step: 1,
                                            disabled: de.value
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])),
                                        _: 2
                                    }, 1024), (0,
                                    n.bF)(q, {
                                        label: "背景置白只输出文字"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(X, {
                                            modelValue: e.needBlank,
                                            "onUpdate:modelValue": a => e.needBlank = a,
                                            disabled: de.value
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]), a[12] || (a[12] = (0,
                                        n.Lk)("div", {
                                            class: "setting-tip"
                                        }, "想打印到自己现实已有的纸张上", -1))])),
                                        _: 2
                                    }, 1024)])),
                                    _: 2
                                }, 1024)])),
                                _: 2
                            }, 1032, ["modelValue"]), (0,
                            n.bF)(q, {
                                label: "字体颜色(默认黑色,选完记得点OK)"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)(Y, {
                                    modelValue: e.hexColorStr,
                                    "onUpdate:modelValue": a => e.hexColorStr = a,
                                    disabled: de.value,
                                    "show-alpha": ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])),
                                _: 2
                            }, 1024), (0,
                            n.bF)(q, {
                                label: "自动调整字体参数(不建议关闭)"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)(X, {
                                    modelValue: e.autoFit,
                                    "onUpdate:modelValue": a => e.autoFit = a,
                                    disabled: de.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])),
                                _: 2
                            }, 1024), (0,
                            n.bF)($, {
                                modelValue: Ce.value,
                                "onUpdate:modelValue": a[2] || (a[2] = e => Ce.value = e)
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)(Q, {
                                    title: "自定义参数(要先关掉自动调整选项才可用|点击展开)",
                                    name: "customParams"
                                }, {
                                    title: (0,
                                    n.k6)(( () => [(0,
                                    n.Lk)("span", {
                                        class: (0,
                                        o.C4)({
                                            "disabled-text": e.autoFit
                                        })
                                    }, "自定义参数(要先关掉自动调整选项才可用)", 2)])),
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(q, {
                                        label: "字体大小"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(M, {
                                            modelValue: e.fontSize,
                                            "onUpdate:modelValue": a => e.fontSize = a,
                                            min: 8,
                                            max: 72,
                                            disabled: e.autoFit || de.value
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])),
                                        _: 2
                                    }, 1024), (0,
                                    n.bF)(q, {
                                        label: "字间距"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(M, {
                                            modelValue: e.charSpacing,
                                            "onUpdate:modelValue": a => e.charSpacing = a,
                                            min: 0,
                                            max: 10,
                                            step: .1,
                                            disabled: e.autoFit || de.value
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])),
                                        _: 2
                                    }, 1024), (0,
                                    n.bF)(q, {
                                        label: "行间距"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(M, {
                                            modelValue: e.lineSpacing,
                                            "onUpdate:modelValue": a => e.lineSpacing = a,
                                            min: 0,
                                            max: 10,
                                            step: .1,
                                            disabled: e.autoFit || de.value
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])),
                                        _: 2
                                    }, 1024)])),
                                    _: 2
                                }, 1024)])),
                                _: 2
                            }, 1032, ["modelValue"])], 64)) : ((0,
                            n.uX)(),
                            (0,
                            n.CE)(n.FK, {
                                key: 0
                            }, [(0,
                            n.bF)(q, {
                                label: "自动调整字体参数"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)(X, {
                                    modelValue: e.autoFit,
                                    "onUpdate:modelValue": a => e.autoFit = a,
                                    disabled: de.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])),
                                _: 2
                            }, 1024), (0,
                            n.bF)($, {
                                modelValue: Ce.value,
                                "onUpdate:modelValue": a[0] || (a[0] = e => Ce.value = e)
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)(Q, {
                                    title: "自定义参数(要先关掉自动调整选项才可用|点击展开)",
                                    name: "customParams"
                                }, {
                                    title: (0,
                                    n.k6)(( () => [(0,
                                    n.Lk)("span", {
                                        class: (0,
                                        o.C4)({
                                            "disabled-text": e.autoFit
                                        })
                                    }, "自定义参数(要先关掉自动调整选项|点击展开)", 2)])),
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(q, {
                                        label: "字体大小"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(M, {
                                            modelValue: e.fontSize,
                                            "onUpdate:modelValue": a => e.fontSize = a,
                                            min: 8,
                                            max: 72,
                                            disabled: e.autoFit || de.value
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])),
                                        _: 2
                                    }, 1024), (0,
                                    n.bF)(q, {
                                        label: "字间距"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(M, {
                                            modelValue: e.charSpacing,
                                            "onUpdate:modelValue": a => e.charSpacing = a,
                                            min: 0,
                                            max: 10,
                                            step: .1,
                                            disabled: e.autoFit || de.value
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])),
                                        _: 2
                                    }, 1024), (0,
                                    n.bF)(q, {
                                        label: "行间距"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(M, {
                                            modelValue: e.lineSpacing,
                                            "onUpdate:modelValue": a => e.lineSpacing = a,
                                            min: 0,
                                            max: 10,
                                            step: .1,
                                            disabled: e.autoFit || de.value
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])),
                                        _: 2
                                    }, 1024)])),
                                    _: 2
                                }, 1024)])),
                                _: 2
                            }, 1032, ["modelValue"])], 64)), (0,
                            n.bF)(q, {
                                label: "文字内容(可自己修改)"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)(H, {
                                    type: "textarea",
                                    modelValue: e.text,
                                    "onUpdate:modelValue": a => e.text = a,
                                    rows: "3",
                                    placeholder: "请校验文字识别结果",
                                    disabled: de.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])])),
                                _: 2
                            }, 1024)])),
                            _: 2
                        }, 1024)], 512), [[l.aG, c.value === t]])], 10, rl)))), 128))])) : ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", hl, a[13] || (a[13] = [(0,
                        n.Fv)('<div class="empty-tips" data-v-38b20c1e><h4 data-v-38b20c1e>使用说明：</h4><div class="empty-tips-extra" style="font-weight:bold;" data-v-38b20c1e>温馨提示：首次使用或有疑问者请点击右上角蓝色字样的教程文档</div><ol data-v-38b20c1e><li data-v-38b20c1e>右上角蓝色链接有常见背景PDF素材（格子纸等）</li><li data-v-38b20c1e>请先在右侧上传您的PDF文件（支持格子纸、作业纸、表格等；建议先用夸克扫成PDF）</li><li data-v-38b20c1e>注意：如果PDF显示不全则按住Ctrl键滚动鼠标滚轮放大</li><li data-v-38b20c1e>点击&quot;开始框选&quot;按钮，在PDF上框选要填写的区域</li><li data-v-38b20c1e>在左侧编辑每个区域的文字内容和字体样式</li><li data-v-38b20c1e>认真选择每个区域的处理方式（自定义背景/填表格）、行列数</li><li data-v-38b20c1e>在&quot;文字内容&quot;框里面检查/填入自己想要的文字</li><li data-v-38b20c1e>点击&quot;开始转换&quot;按钮生成预览文件</li><li data-v-38b20c1e>确认效果后点击&quot;下载文件&quot;保存结果</li><li data-v-38b20c1e>注意：自动扩页上限为3页，如果需要更多页请分多次操作</li></ol></div>', 1)])))]), (0,
                        n.Lk)("div", bl, [s.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", wl, [(0,
                        n.Lk)("div", yl, [(0,
                        n.bF)(i, {
                            onClick: _e,
                            type: "warning",
                            disabled: de.value
                        }, {
                            default: (0,
                            n.k6)(( () => a[16] || (a[16] = [(0,
                            n.eW)("重新上传")]))),
                            _: 1
                        }, 8, ["disabled"]), (0,
                        n.Lk)("div", Ll, [(0,
                        n.bF)(i, {
                            type: "success",
                            onClick: we,
                            disabled: de.value
                        }, {
                            default: (0,
                            n.k6)(( () => [(0,
                            n.eW)((0,
                            o.v_)(g.value ? "退出框选" : "开始框选"), 1)])),
                            _: 1
                        }, 8, ["disabled"]), (0,
                        n.bF)(i, {
                            type: "success",
                            loading: oe.value,
                            onClick: ge,
                            disabled: de.value || 0 === d.value.length || re.value,
                            class: "convert-button"
                        }, {
                            default: (0,
                            n.k6)(( () => [re.value ? ((0,
                            n.uX)(),
                            (0,
                            n.CE)("span", xl, " 冷却中 " + (0,
                            o.v_)(Math.ceil(ue.value / 20)) + "s ", 1)) : ((0,
                            n.uX)(),
                            (0,
                            n.CE)("span", _l, "开始转换")), re.value ? ((0,
                            n.uX)(),
                            (0,
                            n.CE)("div", Cl, [(0,
                            n.Lk)("div", {
                                class: "cooldown-progress-fill",
                                style: (0,
                                o.Tr)({
                                    width: ue.value + "%"
                                })
                            }, null, 4)])) : (0,
                            n.Q3)("", !0)])),
                            _: 1
                        }, 8, ["loading", "disabled"]), (0,
                        n.bF)(i, {
                            type: "primary",
                            loading: oe.value,
                            onClick: he,
                            disabled: !x.value || de.value
                        }, {
                            default: (0,
                            n.k6)(( () => a[17] || (a[17] = [(0,
                            n.eW)(" 下载文件 ")]))),
                            _: 1
                        }, 8, ["loading", "disabled"])]), _.value > 0 ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Fl, [(0,
                        n.bF)(i, {
                            disabled: L.value <= 1 || de.value,
                            onClick: a[3] || (a[3] = e => ye(L.value - 1)),
                            size: "small",
                            type: "primary"
                        }, {
                            default: (0,
                            n.k6)(( () => [(0,
                            n.bF)(h, null, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)((0,
                                u.R1)(Wt.nkM))])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["disabled"]), (0,
                        n.Lk)("span", Rl, (0,
                        o.v_)(L.value) + " / " + (0,
                        o.v_)(_.value), 1), (0,
                        n.bF)(i, {
                            disabled: L.value >= _.value || de.value,
                            onClick: a[4] || (a[4] = e => ye(L.value + 1)),
                            size: "small",
                            type: "primary"
                        }, {
                            default: (0,
                            n.k6)(( () => [(0,
                            n.bF)(h, null, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)((0,
                                u.R1)(Wt.Qpb))])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["disabled"])])) : (0,
                        n.Q3)("", !0), t.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Kl, a[18] || (a[18] = [(0,
                        n.Lk)("span", null, "OCR识别中...", -1)]))) : (0,
                        n.Q3)("", !0)]), (0,
                        n.Lk)("div", {
                            class: "pdf-viewer",
                            ref_key: "pdfViewer",
                            ref: v
                        }, [(0,
                        n.Lk)("div", Al, [(0,
                        n.Lk)("canvas", {
                            ref_key: "pdfCanvas",
                            ref: f,
                            class: "pdf-canvas"
                        }, null, 512)]), (0,
                        n.bo)((0,
                        n.Lk)("div", {
                            class: "selection-layer",
                            ref_key: "selectionLayer",
                            ref: p,
                            onMousedown: B,
                            onMousemove: N,
                            onMouseup: G,
                            onMouseleave: J,
                            onTouchstart: ee,
                            onTouchmove: ae,
                            onTouchend: te,
                            onTouchcancel: J
                        }, null, 544), [[l.aG, g.value]]), (0,
                        n.Lk)("div", El, [((0,
                        n.uX)(!0),
                        (0,
                        n.CE)(n.FK, null, (0,
                        n.pI)(d.value.filter((e => e.page === L.value)), ( (e, a) => ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", {
                            key: a,
                            class: "module-rect",
                            style: (0,
                            o.Tr)({
                                left: e.x * w.value + "px",
                                top: (y.value - (e.y + e.height)) * w.value + "px",
                                width: e.width * w.value + "px",
                                height: e.height * w.value + "px"
                            }),
                            onClick: a => le(d.value.indexOf(e))
                        }, [(0,
                        n.Lk)("div", Pl, (0,
                        o.v_)(d.value.indexOf(e) + 1), 1)], 12, Sl)))), 128))]), (0,
                        n.Lk)("div", {
                            class: "selection-box",
                            ref_key: "selectionBox",
                            ref: k,
                            style: (0,
                            o.Tr)({
                                display: m.value ? "block" : "none",
                                left: `${b.left}px`,
                                top: `${b.top}px`,
                                width: `${b.width}px`,
                                height: `${b.height}px`
                            })
                        }, null, 4)], 512)])) : ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", fl, [(0,
                        n.bF)(ie, {
                            class: "pdf-uploader",
                            drag: "",
                            action: "#",
                            "auto-upload": !1,
                            "show-file-list": !1,
                            accept: "application/pdf",
                            "on-change": Le
                        }, {
                            default: (0,
                            n.k6)(( () => [(0,
                            n.bF)(h, {
                                class: "el-icon--upload"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)((0,
                                u.R1)(Wt.m8m))])),
                                _: 1
                            }), a[15] || (a[15] = (0,
                            n.Lk)("div", {
                                class: "el-upload__text"
                            }, [(0,
                            n.Lk)("strong", null, "拖拽自定义背景/表格PDF文件到此处"), (0,
                            n.eW)(), (0,
                            n.Lk)("em", null, [(0,
                            n.Lk)("strong", null, " 或点击上传")])], -1))])),
                            _: 1
                        })]))])]), K.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Vl, [(0,
                        n.Lk)("div", Dl, [(0,
                        n.Lk)("div", {
                            class: (0,
                            o.C4)(["dialog-icon", A.value])
                        }, a[19] || (a[19] = [(0,
                        n.Lk)("div", {
                            class: "icon-inner"
                        }, null, -1)]), 2), (0,
                        n.Lk)("div", Tl, [(0,
                        n.Lk)("h3", null, (0,
                        o.v_)(E.value), 1), (0,
                        n.Lk)("p", Il, (0,
                        o.v_)(S.value), 1)])])])) : (0,
                        n.Q3)("", !0), V.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", zl, [(0,
                        n.Lk)("div", Ul, [D.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", {
                            key: 0,
                            class: (0,
                            o.C4)(["dialog-icon", D.value])
                        }, a[20] || (a[20] = [(0,
                        n.Lk)("div", {
                            class: "icon-inner"
                        }, null, -1)]), 2)) : (0,
                        n.Q3)("", !0), (0,
                        n.Lk)("h3", null, (0,
                        o.v_)(T.value), 1), (0,
                        n.Lk)("div", {
                            class: "dialog-message",
                            innerHTML: I.value
                        }, null, 8, jl), (0,
                        n.Lk)("div", ql, [j.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("button", {
                            key: 0,
                            class: "dialog-cancel",
                            onClick: Pe
                        }, (0,
                        o.v_)(U.value), 1)) : (0,
                        n.Q3)("", !0), (0,
                        n.Lk)("button", {
                            class: "dialog-confirm",
                            onClick: Se
                        }, (0,
                        o.v_)(z.value), 1)])])])) : (0,
                        n.Q3)("", !0)])
                    }
                }
            };
            const Ol = (0,
            h.A)(Wl, [["__scopeId", "data-v-38b20c1e"]]);
            var Xl = Ol
              , Ml = t(2933);
            const Ql = {
                class: "admin-panel"
            }
              , $l = {
                class: "admin-container"
            }
              , Bl = {
                key: 0,
                class: "admin-auth"
            }
              , Nl = {
                key: 1,
                class: "admin-functions"
            }
              , Yl = {
                class: "admin-header"
            }
              , Hl = {
                class: "welcome-text"
            }
              , Zl = {
                class: "header-controls"
            }
              , Gl = {
                class: "function-section"
            }
              , Jl = {
                key: 0,
                style: {
                    "margin-top": "15px",
                    color: "#606266",
                    "font-size": "14px"
                }
            }
              , en = {
                class: "function-section"
            }
              , an = {
                class: "refund-section",
                style: {
                    "margin-top": "20px"
                }
            }
              , tn = {
                class: "update-section",
                style: {
                    "margin-top": "20px"
                }
            }
              , ln = {
                class: "function-section"
            }
              , nn = {
                class: "function-section"
            }
              , on = {
                class: "query-section"
            }
              , sn = {
                class: "list-section"
            }
              , dn = {
                key: 0,
                style: {
                    "margin-bottom": "15px",
                    color: "#606266",
                    "font-size": "14px"
                }
            }
              , rn = {
                style: {
                    "text-align": "center",
                    padding: "20px"
                }
            }
              , un = {
                style: {
                    color: "#909399",
                    "font-size": "14px"
                }
            }
              , cn = {
                style: {
                    color: "#909399",
                    "font-size": "14px"
                }
            }
              , vn = {
                class: "dialog-footer"
            }
              , pn = {
                class: "dialog-footer"
            };
            var kn = {
                __name: "AdminPanel",
                setup(e) {
                    const a = (0,
                    u.KR)(!1)
                      , t = (0,
                    u.KR)("")
                      , i = (0,
                    u.KR)(!1)
                      , s = (0,
                    u.KR)(!0)
                      , d = (0,
                    u.KR)("https://www.autohanding.com")
                      , r = (0,
                    u.KR)("usage")
                      , c = (0,
                    u.KR)(!1)
                      , v = (0,
                    u.Kh)({
                        usage: !1,
                        info: !1,
                        list: !1,
                        refund: !1,
                        apikey: !1,
                        create: !1,
                        update: !1
                    })
                      , p = (0,
                    u.Kh)({
                        cp: ""
                    })
                      , k = (0,
                    u.Kh)({
                        cp: ""
                    })
                      , g = (0,
                    u.Kh)({
                        pageNo: 1,
                        pageSize: 10
                    })
                      , m = (0,
                    u.Kh)({
                        ratio: 50
                    })
                      , h = (0,
                    u.Kh)({
                        count: 1,
                        status: 1,
                        attach: ""
                    })
                      , b = (0,
                    u.Kh)({
                        queryKey: "",
                        createAttach: "",
                        editId: null,
                        editApiKey: "",
                        editStatus: 10,
                        editFreq: 100,
                        editAttach: ""
                    })
                      , f = () => {
                        const e = new Date
                          , a = new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59)
                          , t = new Date(a.getTime() - 6048e5)
                          , l = e => {
                            const a = e.getFullYear()
                              , t = String(e.getMonth() + 1).padStart(2, "0")
                              , l = String(e.getDate()).padStart(2, "0")
                              , n = String(e.getHours()).padStart(2, "0")
                              , o = String(e.getMinutes()).padStart(2, "0")
                              , i = String(e.getSeconds()).padStart(2, "0");
                            return `${a}-${t}-${l} ${n}:${o}:${i}`
                        }
                        ;
                        return {
                            startTime: l(t),
                            endTime: l(a)
                        }
                    }
                      , w = f()
                      , y = (0,
                    u.Kh)({
                        apiKey: "",
                        startTime: w.startTime,
                        endTime: w.endTime
                    })
                      , L = (0,
                    u.KR)([])
                      , _ = (0,
                    u.KR)(null)
                      , x = (0,
                    u.KR)([])
                      , C = (0,
                    u.KR)([])
                      , F = (0,
                    u.KR)([])
                      , R = (0,
                    u.Kh)({
                        currentPage: 1,
                        pageSize: 10,
                        total: 0,
                        allData: []
                    })
                      , K = (0,
                    u.Kh)({
                        currentPage: 1,
                        pageSize: 10,
                        total: 0,
                        allData: []
                    })
                      , A = (0,
                    u.KR)(null)
                      , E = (0,
                    u.KR)(null)
                      , S = (0,
                    u.KR)(null)
                      , P = (0,
                    u.KR)(null)
                      , V = (0,
                    u.KR)(!1)
                      , D = (e, a, t, l) => {
                        const n = document.createRange();
                        n.selectNodeContents(t);
                        const o = window.getSelection();
                        o.removeAllRanges(),
                        o.addRange(n)
                    }
                      , T = e => {
                        R.currentPage = e,
                        j()
                    }
                      , I = e => {
                        R.pageSize = e,
                        R.currentPage = 1,
                        j()
                    }
                      , z = e => {
                        K.currentPage = e,
                        q()
                    }
                      , U = e => {
                        K.pageSize = e,
                        K.currentPage = 1,
                        q()
                    }
                      , j = () => {
                        const e = (R.currentPage - 1) * R.pageSize
                          , a = e + R.pageSize;
                        L.value = R.allData.slice(e, a)
                    }
                      , q = () => {
                        const e = (K.currentPage - 1) * K.pageSize
                          , a = e + K.pageSize;
                        F.value = K.allData.slice(e, a)
                    }
                      , W = e => {
                        d.value = e ? "https://www.autohanding.com" : "http://localhost:8084",
                        qt.nk.success(`已切换到${e ? "生产" : "测试"}环境`)
                    }
                      , O = e => {
                        switch (e) {
                        case 0:
                            return "未支付";
                        case 10:
                            return "已支付，正常使用中";
                        case 20:
                            return "正在退款";
                        case 25:
                            return "已退款";
                        case 30:
                            return "错误";
                        case 40:
                            return "无用";
                        default:
                            return "未知状态"
                        }
                    }
                      , X = async () => {
                        if (!t.value)
                            return void qt.nk.error("请输入管理员密码");
                        if (t.value.length <= 256)
                            return qt.nk.error("密码不合法"),
                            void (t.value = "");
                        const e = "http://localhost:8084/api/cp/admin/judge"
                          , l = "https://www.autohanding.com/api/cp/admin/judge"
                          , n = () => {
                            const e = new FormData;
                            return e.append("admin", t.value),
                            e
                        }
                          , o = fetch(e, {
                            method: "POST",
                            body: n()
                        }).then((e => e.json())).catch(( () => ({
                            code: 0,
                            message: "测试环境连接失败"
                        })))
                          , s = fetch(l, {
                            method: "POST",
                            body: n()
                        }).then((e => e.json())).catch(( () => ({
                            code: 0,
                            message: "生产环境连接失败"
                        })));
                        try {
                            const [e,l] = await Promise.all([o, s]);
                            if (1 === e.code || 1 === l.code) {
                                a.value = !0;
                                const t = 1 === e.code ? e : l
                                  , n = 1 === e.code ? "测试环境" : "生产环境";
                                "helper" === t.msg ? (i.value = !0,
                                qt.nk.success(`低权限管理员登录成功 (${n})`)) : (i.value = !1,
                                qt.nk.success(`管理员登录成功 (${n})`))
                            } else
                                qt.nk.error("管理员密码错误或网络连接失败"),
                                t.value = ""
                        } catch (d) {
                            console.error("管理员认证失败:", d),
                            qt.nk.error("认证失败，请检查网络连接"),
                            t.value = ""
                        }
                    }
                      , M = async () => {
                        if (p.cp) {
                            v.usage = !0;
                            try {
                                const e = new FormData;
                                e.append("admin", t.value),
                                e.append("cp", p.cp);
                                const a = await fetch(`${d.value}/api/cp/admin/log/getByCp`, {
                                    method: "POST",
                                    body: e
                                })
                                  , l = await a.json();
                                a.ok && 1 === l.code ? (R.allData = l.data || [],
                                R.total = R.allData.length,
                                R.currentPage = 1,
                                j(),
                                qt.nk.success(`查询成功，共找到 ${R.total} 条记录`)) : (qt.nk.error(l.msg || "查询失败"),
                                R.allData = [],
                                R.total = 0,
                                L.value = [])
                            } catch (e) {
                                console.error("查询卡密使用记录失败:", e),
                                qt.nk.error("查询失败，请检查网络连接", e),
                                R.allData = [],
                                R.total = 0,
                                L.value = []
                            } finally {
                                v.usage = !1
                            }
                        } else
                            qt.nk.error("请输入卡密")
                    }
                      , Q = async () => {
                        if (k.cp) {
                            v.info = !0;
                            try {
                                const e = new FormData;
                                e.append("admin", t.value),
                                e.append("cp", k.cp);
                                const a = await fetch(`${d.value}/api/cp/admin/order/getByCp`, {
                                    method: "POST",
                                    body: e
                                })
                                  , l = await a.json();
                                if (a.ok && 1 === l.code) {
                                    _.value = l.data;
                                    const e = N(l.data);
                                    m.ratio = Math.round(parseFloat(e)),
                                    h.count = l.data.cpCount || 1,
                                    h.status = l.data.status || 1,
                                    h.attach = l.data.attach || "",
                                    qt.nk.success("查询成功")
                                } else
                                    qt.nk.error(l.msg || "查询失败")
                            } catch (e) {
                                console.error("查询卡密信息失败:", e),
                                qt.nk.error("查询失败，请检查网络连接", e)
                            } finally {
                                v.info = !1
                            }
                        } else
                            qt.nk.error("请输入卡密")
                    }
                      , $ = async () => {
                        v.list = !0;
                        try {
                            const e = new FormData;
                            e.append("admin", t.value),
                            e.append("pageNo", g.pageNo.toString()),
                            e.append("pageSize", g.pageSize.toString());
                            const a = await fetch(`${d.value}/api/cp/admin/order/list`, {
                                method: "POST",
                                body: e
                            })
                              , l = await a.json();
                            a.ok && 1 === l.code ? (x.value = l.data || [],
                            qt.nk.success("查询成功")) : qt.nk.error(l.msg || "查询失败")
                        } catch (e) {
                            console.error("查询卡密列表失败:", e),
                            qt.nk.error("查询失败，请检查网络连接", e)
                        } finally {
                            v.list = !1
                        }
                    }
                      , B = e => {
                        switch (e) {
                        case 0:
                            return "初始化";
                        case 10:
                            return "正常使用中";
                        case 20:
                            return "错误";
                        default:
                            return "未知状态"
                        }
                    }
                      , N = e => {
                        if (!e || !e.originCpCount || 0 === e.originCpCount)
                            return "0%";
                        const a = (e.cpCount / e.originCpCount * 100).toFixed(2);
                        return `${a}%`
                    }
                      , Y = () => {
                        _.value ? !m.ratio || m.ratio <= 0 || m.ratio > 100 ? qt.nk.error("请输入有效的退款比例（1-100）") : c.value = !0 : qt.nk.error("请先查询卡密信息")
                    }
                      , H = async () => {
                        v.refund = !0;
                        try {
                            const e = new FormData;
                            e.append("admin", t.value),
                            e.append("payNo", _.value.payNo),
                            e.append("ratio", m.ratio.toString());
                            const a = await fetch(`${d.value}/api/wx-pay/admin/refund`, {
                                method: "POST",
                                body: e
                            })
                              , l = await a.json();
                            a.ok && 1 === l.code ? (qt.nk.success("退款申请提交成功，等待处理"),
                            c.value = !1,
                            await Q()) : qt.nk.error(l.msg || "退款申请失败")
                        } catch (e) {
                            console.error("退款申请失败:", e),
                            qt.nk.error("退款申请失败，请检查网络连接")
                        } finally {
                            v.refund = !1
                        }
                    }
                      , Z = async () => {
                        if (_.value)
                            if (!h.count || h.count <= 0)
                                qt.nk.error("请输入有效的增加次数");
                            else if (h.count > _.value.originCpCount)
                                qt.nk.error("增加次数不能超过初始次数");
                            else {
                                try {
                                    await Ml.s.confirm(`确认要修改卡密信息吗？\n增加次数：${h.count}\n状态：${O(h.status)}\n附加信息：${h.attach || "无"}`, "确认修改", {
                                        confirmButtonText: "确定",
                                        cancelButtonText: "取消",
                                        type: "warning"
                                    })
                                } catch {
                                    return
                                }
                                v.update = !0;
                                try {
                                    const e = new FormData;
                                    e.append("admin", t.value),
                                    e.append("payNo", _.value.payNo),
                                    e.append("count", h.count.toString()),
                                    e.append("status", h.status.toString()),
                                    e.append("attach", h.attach || "");
                                    const a = await fetch(`${d.value}/api/cp/admin/order/update`, {
                                        method: "POST",
                                        body: e
                                    })
                                      , l = await a.json();
                                    a.ok && 1 === l.code ? (qt.nk.success("修改成功"),
                                    await Q()) : qt.nk.error(l.msg || "修改失败")
                                } catch (e) {
                                    console.error("修改卡密失败:", e),
                                    qt.nk.error("修改失败，请检查网络连接")
                                } finally {
                                    v.update = !1
                                }
                            }
                        else
                            qt.nk.error("请先查询卡密信息")
                    }
                      , G = async () => {
                        v.apikey = !0;
                        try {
                            const e = new FormData;
                            e.append("admin", t.value),
                            b.queryKey && e.append("apiKey", b.queryKey);
                            const a = await fetch(`${d.value}/api/api-key/admin/list`, {
                                method: "POST",
                                body: e
                            })
                              , l = await a.json();
                            a.ok && 1 === l.code ? (C.value = l.data || [],
                            qt.nk.success(l.msg || "查询成功")) : qt.nk.error(l.msg || "查询失败")
                        } catch (e) {
                            console.error("查询ApiKey失败:", e),
                            qt.nk.error("查询失败，请检查网络连接")
                        } finally {
                            v.apikey = !1
                        }
                    }
                      , J = async () => {
                        v.create = !0;
                        try {
                            const e = new FormData;
                            e.append("admin", t.value),
                            b.createAttach && e.append("attach", b.createAttach);
                            const a = await fetch(`${d.value}/api/api-key/admin/create`, {
                                method: "POST",
                                body: e
                            })
                              , l = await a.json();
                            a.ok && 1 === l.code ? (qt.nk.success("ApiKey创建成功"),
                            b.createAttach = "",
                            await G()) : qt.nk.error(l.msg || "创建失败")
                        } catch (e) {
                            console.error("创建ApiKey失败:", e),
                            qt.nk.error("创建失败，请检查网络连接")
                        } finally {
                            v.create = !1
                        }
                    }
                      , ee = e => {
                        b.editId = e.id,
                        b.editApiKey = e.apiKey,
                        b.editStatus = e.status,
                        b.editFreq = e.freq,
                        b.editAttach = e.attach || "",
                        V.value = !0
                    }
                      , ae = async () => {
                        v.update = !0;
                        try {
                            const e = new FormData;
                            e.append("admin", t.value),
                            e.append("apiKey", b.editApiKey),
                            e.append("status", b.editStatus.toString()),
                            e.append("freq", b.editFreq.toString()),
                            e.append("attach", b.editAttach);
                            const a = await fetch(`${d.value}/api/api-key/admin/update`, {
                                method: "POST",
                                body: e
                            })
                              , l = await a.json();
                            a.ok && 1 === l.code ? (qt.nk.success("ApiKey更新成功"),
                            V.value = !1,
                            await G()) : qt.nk.error(l.msg || "更新失败")
                        } catch (e) {
                            console.error("更新ApiKey失败:", e),
                            qt.nk.error("更新失败，请检查网络连接")
                        } finally {
                            v.update = !1
                        }
                    }
                      , te = async () => {
                        if (y.apiKey) {
                            v.apilog = !0;
                            try {
                                const e = new FormData;
                                e.append("admin", t.value),
                                e.append("apiKey", y.apiKey),
                                y.startTime && e.append("startTime", y.startTime),
                                y.endTime && e.append("endTime", y.endTime);
                                const a = await fetch(`${d.value}/api/log/admin/log-list`, {
                                    method: "POST",
                                    body: e
                                })
                                  , l = await a.json();
                                a.ok && 1 === l.code ? (K.allData = l.data || [],
                                K.total = K.allData.length,
                                K.currentPage = 1,
                                q(),
                                qt.nk.success(`查询成功，共找到 ${K.total} 条记录`)) : (qt.nk.error(l.msg || "查询失败"),
                                K.allData = [],
                                K.total = 0,
                                F.value = [])
                            } catch (e) {
                                console.error("查询ApiKey日志失败:", e),
                                qt.nk.error("查询失败，请检查网络连接"),
                                K.allData = [],
                                K.total = 0,
                                F.value = []
                            } finally {
                                v.apilog = !1
                            }
                        } else
                            qt.nk.warning("请输入ApiKey")
                    }
                      , le = () => {
                        a.value = !1,
                        i.value = !1,
                        t.value = "",
                        L.value = [],
                        _.value = null,
                        x.value = [],
                        F.value = [],
                        R.allData = [],
                        R.total = 0,
                        R.currentPage = 1,
                        K.allData = [],
                        K.total = 0,
                        K.currentPage = 1,
                        r.value = "usage",
                        qt.nk.success("已退出登录")
                    }
                      , ne = () => {
                        t.value = "",
                        a.value = !1,
                        i.value = !1,
                        R.allData = [],
                        R.total = 0,
                        R.currentPage = 1,
                        K.allData = [],
                        K.total = 0,
                        K.currentPage = 1
                    }
                    ;
                    let oe = null
                      , ie = null
                      , se = null;
                    (0,
                    n.sV)(( () => {
                        window.addEventListener("beforeunload", ne),
                        window.addEventListener("keydown", de),
                        oe = e => (e.preventDefault(),
                        e.stopImmediatePropagation(),
                        !1),
                        window.addEventListener("error", oe, !0),
                        ie = e => (e.preventDefault(),
                        !1),
                        window.addEventListener("unhandledrejection", ie);
                        const e = (0,
                        n.nI)();
                        e && e.appContext.app.config && (se = e.appContext.app.config.errorHandler,
                        e.appContext.app.config.errorHandler = (e, a, t) => !1);
                        console.error;
                        console.error = (...e) => {}
                    }
                    ));
                    const de = e => {
                        if (e.ctrlKey && "c" === e.key) {
                            const e = window.getSelection();
                            e.toString() && navigator.clipboard.writeText(e.toString()).then(( () => {
                                qt.nk.success("已复制到剪贴板")
                            }
                            )).catch(( () => {
                                document.execCommand("copy"),
                                qt.nk.success("已复制到剪贴板")
                            }
                            ))
                        }
                    }
                    ;
                    return (0,
                    n.xo)(( () => {
                        window.removeEventListener("beforeunload", ne),
                        window.removeEventListener("keydown", de),
                        oe && window.removeEventListener("error", oe, !0),
                        ie && window.removeEventListener("unhandledrejection", ie);
                        const e = (0,
                        n.nI)();
                        e && e.appContext.app.config && se && (e.appContext.app.config.errorHandler = se),
                        t.value = "",
                        a.value = !1,
                        i.value = !1,
                        R.allData = [],
                        R.total = 0,
                        R.currentPage = 1,
                        K.allData = [],
                        K.total = 0,
                        K.currentPage = 1
                    }
                    )),
                    (e, d) => {
                        const f = (0,
                        n.g2)("el-input")
                          , w = (0,
                        n.g2)("el-form-item")
                          , j = (0,
                        n.g2)("el-button")
                          , q = (0,
                        n.g2)("el-form")
                          , ne = (0,
                        n.g2)("el-switch")
                          , oe = (0,
                        n.g2)("el-table-column")
                          , ie = (0,
                        n.g2)("el-table")
                          , se = (0,
                        n.g2)("el-pagination")
                          , de = (0,
                        n.g2)("el-tab-pane")
                          , re = (0,
                        n.g2)("el-descriptions-item")
                          , ue = (0,
                        n.g2)("el-descriptions")
                          , ce = (0,
                        n.g2)("el-input-number")
                          , ve = (0,
                        n.g2)("el-divider")
                          , pe = (0,
                        n.g2)("el-option")
                          , ke = (0,
                        n.g2)("el-select")
                          , ge = (0,
                        n.g2)("el-card")
                          , me = (0,
                        n.g2)("el-date-picker")
                          , he = (0,
                        n.g2)("el-tabs")
                          , be = (0,
                        n.g2)("el-icon")
                          , fe = (0,
                        n.g2)("el-dialog")
                          , we = (0,
                        n.gN)("loading");
                        return (0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Ql, [(0,
                        n.Lk)("div", $l, [d[55] || (d[55] = (0,
                        n.Lk)("h1", null, "管理员面板", -1)), a.value ? (0,
                        n.Q3)("", !0) : ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Bl, [(0,
                        n.bF)(q, {
                            onSubmit: (0,
                            l.D$)(X, ["prevent"])
                        }, {
                            default: (0,
                            n.k6)(( () => [(0,
                            n.bF)(w, {
                                label: "管理员密码"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)(f, {
                                    modelValue: t.value,
                                    "onUpdate:modelValue": d[0] || (d[0] = e => t.value = e),
                                    type: "password",
                                    placeholder: "请输入管理员密码",
                                    "show-password": ""
                                }, null, 8, ["modelValue"])])),
                                _: 1
                            }), (0,
                            n.bF)(w, null, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)(j, {
                                    type: "primary",
                                    onClick: X
                                }, {
                                    default: (0,
                                    n.k6)(( () => d[28] || (d[28] = [(0,
                                    n.eW)("登录")]))),
                                    _: 1
                                })])),
                                _: 1
                            })])),
                            _: 1
                        })])), a.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", Nl, [(0,
                        n.Lk)("div", Yl, [(0,
                        n.Lk)("span", Hl, (0,
                        o.v_)((i.value,
                        "欢迎使用管理员面板")), 1), (0,
                        n.Lk)("div", Zl, [(0,
                        n.bF)(ne, {
                            modelValue: s.value,
                            "onUpdate:modelValue": d[1] || (d[1] = e => s.value = e),
                            "active-text": "生产环境",
                            "inactive-text": "测试环境",
                            style: {
                                "margin-right": "20px"
                            },
                            onChange: W
                        }, null, 8, ["modelValue"]), (0,
                        n.bF)(j, {
                            type: "danger",
                            size: "small",
                            onClick: le
                        }, {
                            default: (0,
                            n.k6)(( () => d[29] || (d[29] = [(0,
                            n.eW)("退出登录")]))),
                            _: 1
                        })])]), (0,
                        n.bF)(he, {
                            modelValue: r.value,
                            "onUpdate:modelValue": d[19] || (d[19] = e => r.value = e)
                        }, {
                            default: (0,
                            n.k6)(( () => [(0,
                            n.bF)(de, {
                                label: "卡密使用记录",
                                name: "usage"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.Lk)("div", Gl, [(0,
                                n.bF)(q, {
                                    inline: ""
                                }, {
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(w, {
                                        label: "卡密"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(f, {
                                            modelValue: p.cp,
                                            "onUpdate:modelValue": d[2] || (d[2] = e => p.cp = e),
                                            placeholder: "请输入要查询的卡密/微信支付单号",
                                            style: {
                                                width: "300px"
                                            }
                                        }, null, 8, ["modelValue"])])),
                                        _: 1
                                    }), (0,
                                    n.bF)(w, null, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(j, {
                                            type: "primary",
                                            onClick: M,
                                            loading: v.usage
                                        }, {
                                            default: (0,
                                            n.k6)(( () => d[30] || (d[30] = [(0,
                                            n.eW)(" 查询使用记录 ")]))),
                                            _: 1
                                        }, 8, ["loading"])])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), R.total > 0 ? ((0,
                                n.uX)(),
                                (0,
                                n.CE)("div", Jl, [d[31] || (d[31] = (0,
                                n.eW)(" 共找到 ")), (0,
                                n.Lk)("strong", null, (0,
                                o.v_)(R.total), 1), d[32] || (d[32] = (0,
                                n.eW)(" 条记录 "))])) : (0,
                                n.Q3)("", !0), (0,
                                n.bo)(((0,
                                n.uX)(),
                                (0,
                                n.Wv)(ie, {
                                    data: L.value,
                                    border: "",
                                    style: {
                                        width: "100%",
                                        "margin-top": "20px"
                                    },
                                    onCellClick: D,
                                    ref_key: "usageTable",
                                    ref: A
                                }, {
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(oe, {
                                        prop: "id",
                                        label: "ID",
                                        width: "80"
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "cp",
                                        label: "卡密",
                                        width: "200"
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "body",
                                        label: "操作日志",
                                        width: "300",
                                        "show-overflow-tooltip": ""
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "addTime",
                                        label: "操作时间",
                                        width: "180"
                                    })])),
                                    _: 1
                                }, 8, ["data"])), [[we, v.usage]]), R.total > 0 ? ((0,
                                n.uX)(),
                                (0,
                                n.Wv)(se, {
                                    key: 1,
                                    "current-page": R.currentPage,
                                    "onUpdate:currentPage": d[3] || (d[3] = e => R.currentPage = e),
                                    "page-size": R.pageSize,
                                    "onUpdate:pageSize": d[4] || (d[4] = e => R.pageSize = e),
                                    "page-sizes": [10, 20, 50, 100],
                                    total: R.total,
                                    layout: "total, sizes, prev, pager, next, jumper",
                                    onSizeChange: I,
                                    onCurrentChange: T,
                                    style: {
                                        "margin-top": "20px",
                                        "text-align": "right"
                                    }
                                }, null, 8, ["current-page", "page-size", "total"])) : (0,
                                n.Q3)("", !0)])])),
                                _: 1
                            }), (0,
                            n.bF)(de, {
                                label: "卡密信息",
                                name: "info"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.Lk)("div", en, [(0,
                                n.bF)(q, {
                                    inline: ""
                                }, {
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(w, {
                                        label: "卡密"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(f, {
                                            modelValue: k.cp,
                                            "onUpdate:modelValue": d[5] || (d[5] = e => k.cp = e),
                                            placeholder: "请输入要查询的卡密/微信支付单号",
                                            style: {
                                                width: "300px"
                                            }
                                        }, null, 8, ["modelValue"])])),
                                        _: 1
                                    }), (0,
                                    n.bF)(w, null, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(j, {
                                            type: "primary",
                                            onClick: Q,
                                            loading: v.info
                                        }, {
                                            default: (0,
                                            n.k6)(( () => d[33] || (d[33] = [(0,
                                            n.eW)(" 查询卡密信息 ")]))),
                                            _: 1
                                        }, 8, ["loading"])])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), _.value ? ((0,
                                n.uX)(),
                                (0,
                                n.Wv)(ge, {
                                    key: 0,
                                    style: {
                                        "margin-top": "20px"
                                    }
                                }, {
                                    header: (0,
                                    n.k6)(( () => d[34] || (d[34] = [(0,
                                    n.Lk)("div", {
                                        class: "card-header"
                                    }, [(0,
                                    n.Lk)("span", null, "卡密详细信息")], -1)]))),
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(ue, {
                                        column: 2,
                                        border: ""
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(re, {
                                            label: "ID"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.eW)((0,
                                            o.v_)(_.value.id), 1)])),
                                            _: 1
                                        }), (0,
                                        n.bF)(re, {
                                            label: "订单号"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.eW)((0,
                                            o.v_)(_.value.orderNo), 1)])),
                                            _: 1
                                        }), (0,
                                        n.bF)(re, {
                                            label: "支付单号"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.eW)((0,
                                            o.v_)(_.value.payNo), 1)])),
                                            _: 1
                                        }), (0,
                                        n.bF)(re, {
                                            label: "商品信息"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.eW)((0,
                                            o.v_)(_.value.body), 1)])),
                                            _: 1
                                        }), (0,
                                        n.bF)(re, {
                                            label: "支付渠道"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.eW)((0,
                                            o.v_)(_.value.payChannel), 1)])),
                                            _: 1
                                        }), (0,
                                        n.bF)(re, {
                                            label: "金额"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.eW)((0,
                                            o.v_)(_.value.money), 1)])),
                                            _: 1
                                        }), (0,
                                        n.bF)(re, {
                                            label: "初始次数"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.eW)((0,
                                            o.v_)(_.value.originCpCount), 1)])),
                                            _: 1
                                        }), (0,
                                        n.bF)(re, {
                                            label: "剩余次数"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.eW)((0,
                                            o.v_)(_.value.cpCount), 1)])),
                                            _: 1
                                        }), (0,
                                        n.bF)(re, {
                                            label: "剩余比例"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.eW)((0,
                                            o.v_)(N(_.value)), 1)])),
                                            _: 1
                                        }), (0,
                                        n.bF)(re, {
                                            label: "卡密"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.eW)((0,
                                            o.v_)(_.value.cp), 1)])),
                                            _: 1
                                        }), (0,
                                        n.bF)(re, {
                                            label: "状态"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.eW)((0,
                                            o.v_)(O(_.value.status)), 1)])),
                                            _: 1
                                        }), (0,
                                        n.bF)(re, {
                                            label: "支付时间"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.eW)((0,
                                            o.v_)(_.value.payTime), 1)])),
                                            _: 1
                                        }), (0,
                                        n.bF)(re, {
                                            label: "创建时间"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.eW)((0,
                                            o.v_)(_.value.addTime), 1)])),
                                            _: 1
                                        }), (0,
                                        n.bF)(re, {
                                            label: "附加信息"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.eW)((0,
                                            o.v_)(_.value.attach), 1)])),
                                            _: 1
                                        })])),
                                        _: 1
                                    }), (0,
                                    n.Lk)("div", an, [(0,
                                    n.bF)(q, {
                                        inline: ""
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(w, {
                                            label: "退款比例"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.bF)(ce, {
                                                modelValue: m.ratio,
                                                "onUpdate:modelValue": d[6] || (d[6] = e => m.ratio = e),
                                                min: 1,
                                                max: 100,
                                                placeholder: "1-100",
                                                style: {
                                                    width: "120px"
                                                }
                                            }, null, 8, ["modelValue"]), d[35] || (d[35] = (0,
                                            n.Lk)("span", {
                                                style: {
                                                    "margin-left": "5px"
                                                }
                                            }, "%", -1))])),
                                            _: 1
                                        }), (0,
                                        n.bF)(w, null, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.bF)(j, {
                                                type: "warning",
                                                onClick: Y,
                                                loading: v.refund,
                                                disabled: !_.value
                                            }, {
                                                default: (0,
                                                n.k6)(( () => d[36] || (d[36] = [(0,
                                                n.eW)(" 申请退款 ")]))),
                                                _: 1
                                            }, 8, ["loading", "disabled"])])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })]), (0,
                                    n.Lk)("div", tn, [(0,
                                    n.bF)(ve, {
                                        "content-position": "left"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => d[37] || (d[37] = [(0,
                                        n.eW)("修改卡密信息")]))),
                                        _: 1
                                    }), (0,
                                    n.bF)(q, {
                                        inline: ""
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(w, {
                                            label: "增加次数"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.bF)(ce, {
                                                modelValue: h.count,
                                                "onUpdate:modelValue": d[7] || (d[7] = e => h.count = e),
                                                min: 1,
                                                max: _.value ? _.value.originCpCount : 100,
                                                placeholder: "增加次数",
                                                style: {
                                                    width: "120px"
                                                }
                                            }, null, 8, ["modelValue", "max"])])),
                                            _: 1
                                        }), (0,
                                        n.bF)(w, {
                                            label: "状态"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.bF)(ke, {
                                                modelValue: h.status,
                                                "onUpdate:modelValue": d[8] || (d[8] = e => h.status = e),
                                                placeholder: "请选择状态",
                                                style: {
                                                    width: "120px"
                                                }
                                            }, {
                                                default: (0,
                                                n.k6)(( () => [(0,
                                                n.bF)(pe, {
                                                    label: "未支付",
                                                    value: 0
                                                }), (0,
                                                n.bF)(pe, {
                                                    label: "已支付，正常使用中",
                                                    value: 10
                                                }), (0,
                                                n.bF)(pe, {
                                                    label: "正在退款",
                                                    value: 20
                                                }), (0,
                                                n.bF)(pe, {
                                                    label: "已退款",
                                                    value: 25
                                                }), (0,
                                                n.bF)(pe, {
                                                    label: "错误",
                                                    value: 30
                                                }), (0,
                                                n.bF)(pe, {
                                                    label: "无用",
                                                    value: 40
                                                })])),
                                                _: 1
                                            }, 8, ["modelValue"])])),
                                            _: 1
                                        }), (0,
                                        n.bF)(w, {
                                            label: "附加信息"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.bF)(f, {
                                                modelValue: h.attach,
                                                "onUpdate:modelValue": d[9] || (d[9] = e => h.attach = e),
                                                placeholder: "附加信息（可选）",
                                                style: {
                                                    width: "200px"
                                                }
                                            }, null, 8, ["modelValue"])])),
                                            _: 1
                                        }), (0,
                                        n.bF)(w, null, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.bF)(j, {
                                                type: "primary",
                                                onClick: Z,
                                                loading: v.update,
                                                disabled: !_.value
                                            }, {
                                                default: (0,
                                                n.k6)(( () => d[38] || (d[38] = [(0,
                                                n.eW)(" 修改卡密 ")]))),
                                                _: 1
                                            }, 8, ["loading", "disabled"])])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])])),
                                    _: 1
                                })) : (0,
                                n.Q3)("", !0)])])),
                                _: 1
                            }), i.value ? (0,
                            n.Q3)("", !0) : ((0,
                            n.uX)(),
                            (0,
                            n.Wv)(de, {
                                key: 0,
                                label: "所有卡密",
                                name: "list"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.Lk)("div", ln, [(0,
                                n.bF)(q, {
                                    inline: ""
                                }, {
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(w, {
                                        label: "页码"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(ce, {
                                            modelValue: g.pageNo,
                                            "onUpdate:modelValue": d[10] || (d[10] = e => g.pageNo = e),
                                            min: 1,
                                            style: {
                                                width: "120px"
                                            }
                                        }, null, 8, ["modelValue"])])),
                                        _: 1
                                    }), (0,
                                    n.bF)(w, {
                                        label: "每页数量"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(ce, {
                                            modelValue: g.pageSize,
                                            "onUpdate:modelValue": d[11] || (d[11] = e => g.pageSize = e),
                                            min: 1,
                                            max: 100,
                                            style: {
                                                width: "120px"
                                            }
                                        }, null, 8, ["modelValue"])])),
                                        _: 1
                                    }), (0,
                                    n.bF)(w, null, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(j, {
                                            type: "primary",
                                            onClick: $,
                                            loading: v.list
                                        }, {
                                            default: (0,
                                            n.k6)(( () => d[39] || (d[39] = [(0,
                                            n.eW)(" 查询列表 ")]))),
                                            _: 1
                                        }, 8, ["loading"])])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), (0,
                                n.bo)(((0,
                                n.uX)(),
                                (0,
                                n.Wv)(ie, {
                                    data: x.value,
                                    border: "",
                                    style: {
                                        width: "100%",
                                        "margin-top": "20px"
                                    },
                                    onCellClick: D,
                                    ref_key: "listTable",
                                    ref: E
                                }, {
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(oe, {
                                        prop: "id",
                                        label: "ID",
                                        width: "80"
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "orderNo",
                                        label: "订单号",
                                        width: "150"
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "payNo",
                                        label: "支付单号",
                                        width: "150"
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "body",
                                        label: "商品信息",
                                        width: "200",
                                        "show-overflow-tooltip": ""
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "payChannel",
                                        label: "支付渠道",
                                        width: "100"
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "money",
                                        label: "金额",
                                        width: "80"
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "originCpCount",
                                        label: "初始次数",
                                        width: "100"
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "cpCount",
                                        label: "剩余次数",
                                        width: "100"
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "cp",
                                        label: "卡密",
                                        width: "200",
                                        "show-overflow-tooltip": ""
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "status",
                                        label: "状态",
                                        width: "100"
                                    }, {
                                        default: (0,
                                        n.k6)((e => [(0,
                                        n.eW)((0,
                                        o.v_)(O(e.row.status)), 1)])),
                                        _: 1
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "payTime",
                                        label: "支付时间",
                                        width: "180"
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "addTime",
                                        label: "创建时间",
                                        width: "180"
                                    })])),
                                    _: 1
                                }, 8, ["data"])), [[we, v.list]])])])),
                                _: 1
                            })), i.value ? (0,
                            n.Q3)("", !0) : ((0,
                            n.uX)(),
                            (0,
                            n.Wv)(de, {
                                key: 1,
                                label: "ApiKey管理",
                                name: "apikey"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.Lk)("div", nn, [(0,
                                n.bF)(ge, {
                                    style: {
                                        "margin-bottom": "20px"
                                    }
                                }, {
                                    header: (0,
                                    n.k6)(( () => d[40] || (d[40] = [(0,
                                    n.Lk)("div", {
                                        class: "card-header"
                                    }, [(0,
                                    n.Lk)("span", null, "查询ApiKey")], -1)]))),
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(q, {
                                        inline: ""
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(w, {
                                            label: "ApiKey/附加信息"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.bF)(f, {
                                                modelValue: b.queryKey,
                                                "onUpdate:modelValue": d[12] || (d[12] = e => b.queryKey = e),
                                                placeholder: "请输入ApiKey或附加信息，留空查询全部",
                                                style: {
                                                    width: "300px"
                                                }
                                            }, null, 8, ["modelValue"])])),
                                            _: 1
                                        }), (0,
                                        n.bF)(w, null, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.bF)(j, {
                                                type: "primary",
                                                onClick: G,
                                                loading: v.apikey
                                            }, {
                                                default: (0,
                                                n.k6)(( () => d[41] || (d[41] = [(0,
                                                n.eW)(" 查询ApiKey ")]))),
                                                _: 1
                                            }, 8, ["loading"])])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), (0,
                                n.bF)(ge, {
                                    style: {
                                        "margin-bottom": "20px"
                                    }
                                }, {
                                    header: (0,
                                    n.k6)(( () => d[42] || (d[42] = [(0,
                                    n.Lk)("div", {
                                        class: "card-header"
                                    }, [(0,
                                    n.Lk)("span", null, "创建ApiKey")], -1)]))),
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(q, {
                                        inline: ""
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(w, {
                                            label: "附加信息"
                                        }, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.bF)(f, {
                                                modelValue: b.createAttach,
                                                "onUpdate:modelValue": d[13] || (d[13] = e => b.createAttach = e),
                                                placeholder: "请输入附加信息（可选）",
                                                style: {
                                                    width: "300px"
                                                }
                                            }, null, 8, ["modelValue"])])),
                                            _: 1
                                        }), (0,
                                        n.bF)(w, null, {
                                            default: (0,
                                            n.k6)(( () => [(0,
                                            n.bF)(j, {
                                                type: "success",
                                                onClick: J,
                                                loading: v.create
                                            }, {
                                                default: (0,
                                                n.k6)(( () => d[43] || (d[43] = [(0,
                                                n.eW)(" 创建ApiKey ")]))),
                                                _: 1
                                            }, 8, ["loading"])])),
                                            _: 1
                                        })])),
                                        _: 1
                                    })])),
                                    _: 1
                                }), (0,
                                n.bo)(((0,
                                n.uX)(),
                                (0,
                                n.Wv)(ie, {
                                    data: C.value,
                                    border: "",
                                    style: {
                                        width: "100%"
                                    },
                                    onCellClick: D,
                                    ref_key: "apiKeyTable",
                                    ref: S
                                }, {
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(oe, {
                                        prop: "id",
                                        label: "ID",
                                        width: "80"
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "apiKey",
                                        label: "ApiKey",
                                        width: "300",
                                        "show-overflow-tooltip": ""
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "status",
                                        label: "状态",
                                        width: "100"
                                    }, {
                                        default: (0,
                                        n.k6)((e => [(0,
                                        n.eW)((0,
                                        o.v_)(B(e.row.status)), 1)])),
                                        _: 1
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "freq",
                                        label: "限流频次",
                                        width: "120"
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "attach",
                                        label: "附加信息",
                                        width: "200",
                                        "show-overflow-tooltip": ""
                                    }), (0,
                                    n.bF)(oe, {
                                        label: "操作",
                                        width: "200"
                                    }, {
                                        default: (0,
                                        n.k6)((e => [(0,
                                        n.bF)(j, {
                                            size: "small",
                                            type: "primary",
                                            onClick: a => ee(e.row)
                                        }, {
                                            default: (0,
                                            n.k6)(( () => d[44] || (d[44] = [(0,
                                            n.eW)(" 编辑 ")]))),
                                            _: 2
                                        }, 1032, ["onClick"])])),
                                        _: 1
                                    })])),
                                    _: 1
                                }, 8, ["data"])), [[we, v.apikey]])])])),
                                _: 1
                            })), i.value ? (0,
                            n.Q3)("", !0) : ((0,
                            n.uX)(),
                            (0,
                            n.Wv)(de, {
                                key: 2,
                                label: "ApiKey日志",
                                name: "apilog"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.Lk)("div", on, [d[46] || (d[46] = (0,
                                n.Lk)("h3", null, "查询ApiKey使用日志", -1)), (0,
                                n.bF)(q, {
                                    model: y,
                                    inline: ""
                                }, {
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(w, {
                                        label: "ApiKey"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(f, {
                                            modelValue: y.apiKey,
                                            "onUpdate:modelValue": d[14] || (d[14] = e => y.apiKey = e),
                                            placeholder: "请输入ApiKey",
                                            style: {
                                                width: "200px"
                                            }
                                        }, null, 8, ["modelValue"])])),
                                        _: 1
                                    }), (0,
                                    n.bF)(w, {
                                        label: "开始时间"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(me, {
                                            modelValue: y.startTime,
                                            "onUpdate:modelValue": d[15] || (d[15] = e => y.startTime = e),
                                            type: "datetime",
                                            placeholder: "选择开始时间",
                                            format: "YYYY-MM-DD HH:mm:ss",
                                            "value-format": "YYYY-MM-DD HH:mm:ss",
                                            style: {
                                                width: "200px"
                                            }
                                        }, null, 8, ["modelValue"])])),
                                        _: 1
                                    }), (0,
                                    n.bF)(w, {
                                        label: "结束时间"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(me, {
                                            modelValue: y.endTime,
                                            "onUpdate:modelValue": d[16] || (d[16] = e => y.endTime = e),
                                            type: "datetime",
                                            placeholder: "选择结束时间",
                                            format: "YYYY-MM-DD HH:mm:ss",
                                            "value-format": "YYYY-MM-DD HH:mm:ss",
                                            style: {
                                                width: "200px"
                                            }
                                        }, null, 8, ["modelValue"])])),
                                        _: 1
                                    }), (0,
                                    n.bF)(w, null, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(j, {
                                            type: "primary",
                                            onClick: te,
                                            loading: v.apilog
                                        }, {
                                            default: (0,
                                            n.k6)(( () => d[45] || (d[45] = [(0,
                                            n.eW)(" 查询日志 ")]))),
                                            _: 1
                                        }, 8, ["loading"])])),
                                        _: 1
                                    })])),
                                    _: 1
                                }, 8, ["model"])]), (0,
                                n.Lk)("div", sn, [d[49] || (d[49] = (0,
                                n.Lk)("h3", null, "日志列表", -1)), K.total > 0 ? ((0,
                                n.uX)(),
                                (0,
                                n.CE)("div", dn, [d[47] || (d[47] = (0,
                                n.eW)(" 共找到 ")), (0,
                                n.Lk)("strong", null, (0,
                                o.v_)(K.total), 1), d[48] || (d[48] = (0,
                                n.eW)(" 条记录 "))])) : (0,
                                n.Q3)("", !0), (0,
                                n.bF)(ie, {
                                    ref_key: "apiLogTable",
                                    ref: P,
                                    data: F.value,
                                    style: {
                                        width: "100%"
                                    },
                                    stripe: "",
                                    border: "",
                                    height: "400",
                                    onCellClick: D
                                }, {
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(oe, {
                                        prop: "id",
                                        label: "ID",
                                        width: "180"
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "apiKey",
                                        label: "ApiKey",
                                        width: "200"
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "body",
                                        label: "商品信息",
                                        "min-width": "300",
                                        "show-overflow-tooltip": ""
                                    }), (0,
                                    n.bF)(oe, {
                                        prop: "addTime",
                                        label: "日志时间",
                                        width: "180"
                                    })])),
                                    _: 1
                                }, 8, ["data"]), K.total > 0 ? ((0,
                                n.uX)(),
                                (0,
                                n.Wv)(se, {
                                    key: 1,
                                    "current-page": K.currentPage,
                                    "onUpdate:currentPage": d[17] || (d[17] = e => K.currentPage = e),
                                    "page-size": K.pageSize,
                                    "onUpdate:pageSize": d[18] || (d[18] = e => K.pageSize = e),
                                    "page-sizes": [10, 20, 50, 100],
                                    total: K.total,
                                    layout: "total, sizes, prev, pager, next, jumper",
                                    onSizeChange: U,
                                    onCurrentChange: z,
                                    style: {
                                        "margin-top": "20px",
                                        "text-align": "right"
                                    }
                                }, null, 8, ["current-page", "page-size", "total"])) : (0,
                                n.Q3)("", !0)])])),
                                _: 1
                            }))])),
                            _: 1
                        }, 8, ["modelValue"])])) : (0,
                        n.Q3)("", !0), (0,
                        n.bF)(fe, {
                            modelValue: c.value,
                            "onUpdate:modelValue": d[21] || (d[21] = e => c.value = e),
                            title: "确认退款",
                            width: "400px",
                            "before-close": () => c.value = !1
                        }, {
                            footer: (0,
                            n.k6)(( () => [(0,
                            n.Lk)("span", vn, [(0,
                            n.bF)(j, {
                                onClick: d[20] || (d[20] = e => c.value = !1)
                            }, {
                                default: (0,
                                n.k6)(( () => d[51] || (d[51] = [(0,
                                n.eW)("取消")]))),
                                _: 1
                            }), (0,
                            n.bF)(j, {
                                type: "warning",
                                onClick: H,
                                loading: v.refund
                            }, {
                                default: (0,
                                n.k6)(( () => d[52] || (d[52] = [(0,
                                n.eW)(" 确认退款 ")]))),
                                _: 1
                            }, 8, ["loading"])])])),
                            default: (0,
                            n.k6)(( () => [(0,
                            n.Lk)("div", rn, [(0,
                            n.bF)(be, {
                                style: {
                                    "font-size": "48px",
                                    color: "#E6A23C",
                                    "margin-bottom": "16px"
                                }
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)((0,
                                u.R1)(Wt.BFW))])),
                                _: 1
                            }), d[50] || (d[50] = (0,
                            n.Lk)("p", {
                                style: {
                                    "font-size": "16px",
                                    "margin-bottom": "8px"
                                }
                            }, "确认要申请退款吗？", -1)), (0,
                            n.Lk)("p", un, "退款比例：" + (0,
                            o.v_)(m.ratio) + "%", 1), (0,
                            n.Lk)("p", cn, "支付单号：" + (0,
                            o.v_)(_.value?.payNo), 1)])])),
                            _: 1
                        }, 8, ["modelValue", "before-close"]), (0,
                        n.bF)(fe, {
                            modelValue: V.value,
                            "onUpdate:modelValue": d[27] || (d[27] = e => V.value = e),
                            title: "编辑ApiKey",
                            width: "500px",
                            "before-close": () => V.value = !1
                        }, {
                            footer: (0,
                            n.k6)(( () => [(0,
                            n.Lk)("span", pn, [(0,
                            n.bF)(j, {
                                onClick: d[26] || (d[26] = e => V.value = !1)
                            }, {
                                default: (0,
                                n.k6)(( () => d[53] || (d[53] = [(0,
                                n.eW)("取消")]))),
                                _: 1
                            }), (0,
                            n.bF)(j, {
                                type: "primary",
                                onClick: ae,
                                loading: v.update
                            }, {
                                default: (0,
                                n.k6)(( () => d[54] || (d[54] = [(0,
                                n.eW)(" 确定 ")]))),
                                _: 1
                            }, 8, ["loading"])])])),
                            default: (0,
                            n.k6)(( () => [(0,
                            n.bF)(q, {
                                model: b,
                                "label-width": "80px"
                            }, {
                                default: (0,
                                n.k6)(( () => [(0,
                                n.bF)(w, {
                                    label: "ApiKey"
                                }, {
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(f, {
                                        modelValue: b.editApiKey,
                                        "onUpdate:modelValue": d[22] || (d[22] = e => b.editApiKey = e),
                                        disabled: ""
                                    }, null, 8, ["modelValue"])])),
                                    _: 1
                                }), (0,
                                n.bF)(w, {
                                    label: "状态"
                                }, {
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(ke, {
                                        modelValue: b.editStatus,
                                        "onUpdate:modelValue": d[23] || (d[23] = e => b.editStatus = e),
                                        placeholder: "请选择状态"
                                    }, {
                                        default: (0,
                                        n.k6)(( () => [(0,
                                        n.bF)(pe, {
                                            label: "初始化",
                                            value: 0
                                        }), (0,
                                        n.bF)(pe, {
                                            label: "正常使用中",
                                            value: 10
                                        }), (0,
                                        n.bF)(pe, {
                                            label: "错误",
                                            value: 20
                                        })])),
                                        _: 1
                                    }, 8, ["modelValue"])])),
                                    _: 1
                                }), (0,
                                n.bF)(w, {
                                    label: "限流频次"
                                }, {
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(ce, {
                                        modelValue: b.editFreq,
                                        "onUpdate:modelValue": d[24] || (d[24] = e => b.editFreq = e),
                                        min: 1,
                                        max: 1e4,
                                        placeholder: "请输入限流频次"
                                    }, null, 8, ["modelValue"])])),
                                    _: 1
                                }), (0,
                                n.bF)(w, {
                                    label: "附加信息"
                                }, {
                                    default: (0,
                                    n.k6)(( () => [(0,
                                    n.bF)(f, {
                                        modelValue: b.editAttach,
                                        "onUpdate:modelValue": d[25] || (d[25] = e => b.editAttach = e),
                                        type: "textarea",
                                        rows: 3,
                                        placeholder: "请输入附加信息"
                                    }, null, 8, ["modelValue"])])),
                                    _: 1
                                })])),
                                _: 1
                            }, 8, ["model"])])),
                            _: 1
                        }, 8, ["modelValue", "before-close"])])])
                    }
                }
            };
            const gn = (0,
            h.A)(kn, [["__scopeId", "data-v-b2fa0bb8"]]);
            var mn = gn;
            const hn = {
                class: "not-found"
            }
              , bn = {
                key: 1,
                class: "not-found-container"
            }
              , fn = {
                class: "not-found-content"
            };
            var wn = {
                __name: "NotFound",
                setup(e) {
                    const a = (0,
                    c.rd)()
                      , t = (0,
                    c.lq)()
                      , l = (0,
                    u.KR)(!1)
                      , o = (0,
                    u.KR)(0);
                    let i = null;
                    const s = (0,
                    n.EW)(( () => "/sys-mgmt-portal-x9k2" === t.path))
                      , d = () => {
                        a.push("/")
                    }
                      , r = e => {
                        if (e && (e.preventDefault(),
                        e.stopPropagation()),
                        o.value++,
                        i && clearTimeout(i),
                        o.value >= 5)
                            return l.value = !0,
                            void (o.value = 0);
                        i = setTimeout(( () => {
                            o.value = 0
                        }
                        ), 2e3)
                    }
                    ;
                    return (0,
                    n.xo)(( () => {
                        i && clearTimeout(i)
                    }
                    )),
                    (0,
                    Y.u)({
                        title: "好像页面走丢了 | 凹凸工坊_凹凸工坊-手写转换官网_一键生成手写文稿_手写模拟器_手写字体在线转换_在线字体制作_手写APP下载_模仿手写软件_AI手写字体生成_手写字体生成器_字体下载",
                        meta: [{
                            name: "description",
                            content: "我们似乎找不到您要访问的页面，不过没关系，让我们带您回到首页吧。凹凸工坊支持将Word文档一键转为AI模拟手写稿。"
                        }]
                    }),
                    (e, a) => {
                        const t = (0,
                        n.g2)("el-button");
                        return (0,
                        n.uX)(),
                        (0,
                        n.CE)("div", hn, [a[6] || (a[6] = (0,
                        n.Lk)("h1", {
                            class: "visually-hidden"
                        }, "404 页面未找到 | 凹凸工坊", -1)), l.value ? ((0,
                        n.uX)(),
                        (0,
                        n.Wv)(mn, {
                            key: 0
                        })) : ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", bn, [(0,
                        n.Lk)("div", fn, [a[1] || (a[1] = (0,
                        n.Lk)("h1", null, "哎呀", -1)), a[2] || (a[2] = (0,
                        n.Lk)("h2", null, "好像页面走丢了", -1)), a[3] || (a[3] = (0,
                        n.Lk)("p", null, "似乎找不到您要访问的页面，不过没关系，让我们带您回到首页吧", -1)), a[4] || (a[4] = (0,
                        n.Lk)("p", null, "凹凸工坊期待与您的交流，欢迎您联系我们。TODO 公众号：", -1)), (0,
                        n.bF)(t, {
                            type: "primary",
                            onClick: d
                        }, {
                            default: (0,
                            n.k6)(( () => a[0] || (a[0] = [(0,
                            n.eW)("返回首页")]))),
                            _: 1
                        })]), s.value ? ((0,
                        n.uX)(),
                        (0,
                        n.CE)("div", {
                            key: 0,
                            class: "admin-trigger",
                            onClick: r,
                            onTouchend: r
                        }, a[5] || (a[5] = [(0,
                        n.Lk)("div", {
                            class: "trigger-icon"
                        }, "⚙️", -1)]), 32)) : (0,
                        n.Q3)("", !0)]))])
                    }
                }
            };
            const yn = (0,
            h.A)(wn, [["__scopeId", "data-v-6684faaf"]]);
            var Ln = yn
              , _n = t(3888);
            const xn = [{
                path: "/",
                component: Qa
            }, {
                path: "/guide",
                component: pt
            }, {
                path: "/faq",
                component: Vt
            }, {
                path: "/share",
                component: jt
            }, {
                path: "/superdiy",
                component: Xl
            }, {
                path: "/sys-mgmt-portal-x9k2",
                component: Ln
            }, {
                path: "/:pathMatch(.*)*",
                component: Ln
            }]
              , Cn = (0,
            c.aE)({
                history: (0,
                c.LA)("/"),
                routes: xn
            })
              , Fn = (0,
            _n.Zf)()
              , Rn = (0,
            l.Ef)(M);
            Rn.config.errorHandler = (e, a, t) => {
                console.error("应用错误:", e)
            }
            ,
            window.addEventListener("error", (e => (console.error("运行时错误:", e.error),
            e.preventDefault(),
            !0))),
            window.addEventListener("unhandledrejection", (e => (console.error("未处理的Promise错误:", e.reason),
            e.preventDefault(),
            !0))),
            Rn.use(Q.A),
            Rn.use(Cn),
            Rn.use(Fn),
            Rn.mount("#app")
        },
        6671: function() {},
        7492: function() {},
        7640: function() {},
        9803: function(e, a, t) {
            "use strict";
            e.exports = t.p + "img/geeksider.2ce41b16.png"
        },
        9935: function(e, a, t) {
            "use strict";
            e.exports = t.p + "img/扣子1760.8eab3f59.png"
        }
    }
      , a = {};
    function t(l) {
        var n = a[l];
        if (void 0 !== n)
            return n.exports;
        var o = a[l] = {
            exports: {}
        };
        return e[l].call(o.exports, o, o.exports, t),
        o.exports
    }
    t.m = e,
    function() {
        t.amdD = function() {
            throw new Error("define cannot be used indirect")
        }
    }(),
    function() {
        var e = [];
        t.O = function(a, l, n, o) {
            if (!l) {
                var i = 1 / 0;
                for (u = 0; u < e.length; u++) {
                    l = e[u][0],
                    n = e[u][1],
                    o = e[u][2];
                    for (var s = !0, d = 0; d < l.length; d++)
                        (!1 & o || i >= o) && Object.keys(t.O).every((function(e) {
                            return t.O[e](l[d])
                        }
                        )) ? l.splice(d--, 1) : (s = !1,
                        o < i && (i = o));
                    if (s) {
                        e.splice(u--, 1);
                        var r = n();
                        void 0 !== r && (a = r)
                    }
                }
                return a
            }
            o = o || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > o; u--)
                e[u] = e[u - 1];
            e[u] = [l, n, o]
        }
    }(),
    function() {
        t.n = function(e) {
            var a = e && e.__esModule ? function() {
                return e["default"]
            }
            : function() {
                return e
            }
            ;
            return t.d(a, {
                a: a
            }),
            a
        }
    }(),
    function() {
        t.d = function(e, a) {
            for (var l in a)
                t.o(a, l) && !t.o(e, l) && Object.defineProperty(e, l, {
                    enumerable: !0,
                    get: a[l]
                })
        }
    }(),
    function() {
        t.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }(),
    function() {
        t.o = function(e, a) {
            return Object.prototype.hasOwnProperty.call(e, a)
        }
    }(),
    function() {
        t.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    }(),
    function() {
        t.p = "/"
    }(),
    function() {
        var e = {
            524: 0
        };
        t.O.j = function(a) {
            return 0 === e[a]
        }
        ;
        var a = function(a, l) {
            var n, o, i = l[0], s = l[1], d = l[2], r = 0;
            if (i.some((function(a) {
                return 0 !== e[a]
            }
            ))) {
                for (n in s)
                    t.o(s, n) && (t.m[n] = s[n]);
                if (d)
                    var u = d(t)
            }
            for (a && a(l); r < i.length; r++)
                o = i[r],
                t.o(e, o) && e[o] && e[o][0](),
                e[o] = 0;
            return t.O(u)
        }
          , l = self["webpackChunkfront"] = self["webpackChunkfront"] || [];
        l.forEach(a.bind(null, 0)),
        l.push = a.bind(null, l.push.bind(l))
    }();
    var l = t.O(void 0, [504], (function() {
        return t(6556)
    }
    ));
    l = t.O(l)
}
)();
