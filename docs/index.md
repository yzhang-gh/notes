---
home: true
heroText: Speak the Language
tagline: 「讲内行话」
---

<!-- <link rel="stylesheet" href="/notes/_home.css"> -->
<style>
    .home .hero h1#main-title {
        margin-bottom: 0;
    }

    .home .hero h1+p.description {
        margin-top: 0;
    }

    main.home {
        max-width: 800px;
    }

    main.home strong {
        color: #888;
        font-weight: bold;
    }

    #homepage #joshua-tree {
        float: right;
        width: 200px;
        margin: 0.8em 0.2em 0.4em 1em;
    }

    @media (max-width: 719px) {
        #homepage #joshua-tree {
            float: none;
            width: 100%;
            margin: 0.5em 0 0;
        }
    }

    #homepage hr {
        height: 1px;
        width: 100%;
        background: linear-gradient(to right, #dadcdf, transparent 60%);
        margin: 1em 0;
        border: none;
    }

    /* SLOT MACHINE */

    #homepage #outer {
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }

    #homepage #outer>div:not(#slot-machine) {
        line-height: 2;
        margin-top: 32px;
    }

    #homepage #slot-machine {
        position: relative;
        height: 96px;
        overflow: hidden;
        text-align: center;
        user-select: none;
        padding: 0 1em;
        margin-left: 0.6em;
        margin-right: 0.6em;
    }

    #homepage #slot-machine::before {
        position: absolute;
        top: 32px;
        left: 0;
        height: 32px;
        width: 100%;
        content: "";
        border: 1px solid #dfe1e5;
        border-radius: 9px;
        box-sizing: border-box;
    }

    #homepage #slot-machine::after {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        content: "";
        /* background: linear-gradient(to bottom, white, transparent, white); */
        /* For Safari compatibility */
        background: linear-gradient(to bottom, white, rgba(255, 255, 255, 0), white);
    }

    /* @media (prefers-color-scheme: dark) {
        #slot-machine::after {
            background: linear-gradient(to bottom, #333333, transparent, #333333);
        }

        body {
            background: #333333;
        }
    } */

    #homepage #tiles {
        position: relative;
    }

    #homepage #btn-group {
        margin: 0 auto;
        width: -moz-fit-content;
        width: fit-content;
    }

    #homepage #btn-feelingLucky {
        background-color: #f8f9fa;
        border: 1px solid #f8f9fa;
        border-radius: 4px;
        margin: 11px 4px;
        padding: 0 16px;
        line-height: 2;
        font-size: 14px;
        transition: border-color 0.5s ease-in;
        transition: box-shadow 0.5s ease-in;
    }

    #homepage #btn-feelingLucky:hover {
        box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
        border: 1px solid #dadce0;
    }

    #homepage #btn-feelingLucky:focus {
        border: 1px solid #529cda;
        outline: none;
    }

    #homepage #target {
        transition: opacity 0.5s ease-in;
        opacity: 0;
        text-align: center;
        font-size: 14px;
        color: #a8a9aa;
        user-select: none;
        margin: 0 auto 1em;
    }

    #homepage #target>a {
        color: #81B0D8;
    }
</style>

<div id="homepage">

> <img src="/notes/imgs/joshua-tree.jpg" id="joshua-tree" alt="joshua-tree">
>
> 很多年前的一个圣诞节，我收到一份圣诞礼物，是一本关于如何认识各种树的书。当时我住在父母家，所有礼物都打开后，我决定出去走走，认一认邻居家的树。出去之前我读了书的一部分。其中提到的第一种树是<strong>约书亚树</strong> (Joshua tree)，只需要两个线索就能认出它。由于约书亚树相当怪异，所以看到书中它的照片时，我对自己说：「哦，北加利福尼亚绝对没有这种树。这种树太怪异了。如果我见过，肯定应该有印象，可我以前从来没有见过。」
>
> 之后我拿着这本书走出家门。我的父母住在一个小巷子里，这里共有 6 家住户。其中 4 家的前院里都赫然立着约书亚树。我住在那里已经有 13 年了，此前居然从未注意过约书亚树。我在这个街区转了转，发现似乎每一家布置新居时都会到苗圃买约书亚树，至少 80% 的住家前院都种有约书亚树。而我在此之前居然从来没有注意过！在我知道了这种树之后，我是说在我能够说出它的名字后，它就无处不在了。这正是我要强调的：<strong>一旦能够说出什么东西的名字，就会很容易注意到它。你就会掌握它，拥有它，让它受你所控。</strong>
>
> <div style="display: flex; flex-direction: row-reverse"><p style="margin: 0 0 .5em;"><span class="cn-font" lang="zh-CN">——</span>《写给大家看的设计书》引言</p></div>

<!-- Slot Machine -->

<div id="outer">
    <div>讲点</div>
    <div id="slot-machine">
        <div id="tiles"></div>
    </div>
    <div>语言</div>
</div>
<div id="btn-group">
    <button id="btn-feelingLucky">手气不错</button>
    <!-- <input type="checkbox" id="ckbox-autojump" style="vertical-align: text-bottom; margin-right: 0;" checked>
    <label for="ckbox-autojump" style="font-size: 14px;">自动跳转</label> -->
</div>
<p id="target">&nbsp;</p>

<script>
export default {
    mounted() {
        // STATE
        let idle = true;
        let idleLoop;

        // IDLE
        const idleScrollSpeed = 15; // pixels per second
        const idleResetTime = 60; // seconds

        // SLOTS
        const tileHeight = 32; // pixels
        const tiles = [
            {
                text: '自然',
                links: [
                    { name: '日本語の文法', url: 'langs/jp/grammar.html' },
                    { name: '在英国学英语', url: 'langs/en/learned-in-uk.html' },
                    { name: '英式 vs. 美式', url: 'langs/en/be-vs-ae.html' }
                ]
            },
            {
                text: '数学',
                links: [
                    { name: '线性代数', url: 'math/linear-algebra.html' },
                    { name: '在数学的海洋中飘荡（转载）', url: 'math/math-sea.html' }
                ]
            },
            {
                text: '编程',
                links: [
                    { name: 'AutoHotKey', url: 'software/windows/autohotkey.html' },
                    { name: 'Matplotlib', url: 'programming/python/matplotlib.html' },
                    { name: 'LaTeX', url: 'programming/latex.html' },
                ]
            },
            {
                text: '机器学习',
                links: [
                    { name: '神经网络可解释性综述', url: 'ml/nn-interpretability.html' },
                ]
            },
            {
                text: '生活',
                links: [
                    { name: '2018 in the UK', url: 'others/2018-uk.html' },
                ]
            },
            {
                text: '复杂度',
                links: [
                    { name: 'P、NP 与 NP 完全问题', url: 'others/p-np.html' }
                ]
            },
            {
                text: '音乐',
                links: [
                    { name: 'Interesting Stuff > 音乐', url: 'others/interesting-stuff.html#音乐' }
                ]
            },
            {
                text: 'Markdown',
                links: [
                    { name: 'Markdown All in One', url: 'https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one' }
                ]
            },
            {
                text: '鸡汤',
                links: [
                    { name: '你不知道找的是什么，就永远也找不到（转载）', url: 'reading/what-you-want.html' },
                    { name: '收益值与半衰期', url: 'reading/reward-and-half-life.html' },
                ]
            },
            {
                text: '#$%&～…',
                links: [
                    { name: '无题', url: 'others/misc.html' }
                ]
            },
        ];
        const numDuplicates = 6;

        // TRANSITION
        const idleTransition = `top ${idleResetTime}s linear`;
        const scrollTransition = 'top 1.5s cubic-bezier(.42, 0, 0, .92)';

        // UTILS
        /**
         * [min, max)
         */
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }

        function debounce(fn, wait) {
            wait = wait || 0;
            let timerId;

            function debounced() {
                if (timerId) {
                    clearTimeout(timerId);
                    timerId = null;
                }
                timerId = setTimeout(function () {
                    fn();
                }, wait);
            }
            return debounced;
        }

        function calcShiftedTop(elTiles) {
            const numItemsAbove = Math.floor(-elTiles.offsetTop / tileHeight);
            const numTileSetsToShift = Math.floor(numItemsAbove / tiles.length);
            const shiftedTop = elTiles.offsetTop + numTileSetsToShift * tiles.length * tileHeight;
            return shiftedTop;
        }

        const setIdle = debounce(() => {
            idle = true;
            startIdleScroll();
        }, 10000);

        // record the slot machine history
        const choiceHistory = [];

        function feelingLucky() {
            idle = false;
            setIdle();
            // clearInterval(idleLoop);

            const elTarget = document.getElementById('target');
            elTarget.style.opacity = 0;

            // shift `tiles` down (reset `style.top`) so that there are enough items to scroll
            const elTiles = document.getElementById('tiles');
            const shiftedTop = calcShiftedTop(elTiles);
            elTiles.style.transition = 'none';
            elTiles.style.top = `${shiftedTop}px`;

            let choice = getRandomInt(0, tiles.length);
            while (choiceHistory.includes(choice)) {
                choice = getRandomInt(0, tiles.length);
            }
            choiceHistory.push(choice);
            if (choiceHistory.length > tiles.length / 2) {
                choiceHistory.shift();
            }

            // start scroll with a slight delay
            setTimeout(() => {
                elTiles.style.transition = scrollTransition;
                elTiles.style.top = `-${(choice + tiles.length * numDuplicates - 1 + 0.25) * tileHeight}px`;
                // bounce
                setTimeout(() => {
                    elTiles.style.transition = 'top 0.4s cubic-bezier(.4,0,1,1)';
                    elTiles.style.top = `-${(choice + tiles.length * numDuplicates - 1) * tileHeight}px`;
                }, 1500);
            }, 10);

            // fadein destination
            setTimeout(() => {
                const options = tiles[choice].links;
                const item = options[getRandomInt(0, options.length)];
                const fullUrl = item.url.startsWith('http') ? item.url : window.location.protocol + '//' + window.location.host + window.location.pathname + item.url;
                elTarget.innerHTML = `前往「<a href="${fullUrl}" target="_blank" rel="noopener noreferrer" class="outbound smaller">${item.name}</a>」`;
                elTarget.style.opacity = 1;
            }, 2 * 1000);
        }

        function addSetsOfTiles(el, num) {
            [...Array(num).keys()].forEach(_ => {
                tiles.forEach(t => {
                    const elTile = document.createElement('div');
                    elTile.textContent = t.text;
                    elTile.style.height = `${tileHeight}px`;
                    elTile.style.lineHeight = 2;
                    el.append(elTile);
                });
            });
        }

        function startIdleScroll() {
            if (window.location.pathname !== '/notes/') {
                return;
            }

            if (idle) {
                const elTiles = document.getElementById('tiles');
                if (elTiles.offsetTop === 0) {
                    // window.onload event
                    elTiles.style.transition = idleTransition;
                    elTiles.style.top = `${-idleScrollSpeed * idleResetTime}px`;
                } else {
                    // reset scroll
                    const shiftedTop = calcShiftedTop(elTiles);
                    elTiles.style.transition = 'none';
                    elTiles.style.top = `${shiftedTop}px`;
                    setTimeout(() => {
                        elTiles.style.transition = idleTransition;
                        elTiles.style.top = `${-idleScrollSpeed * idleResetTime}px`;
                    }, 10);
                }
            }
        }

        // INIT

        function init() {
            // rolling tiles
            const elTiles = document.getElementById('tiles');
            addSetsOfTiles(elTiles, numDuplicates + 2);

            // initial position
            elTiles.style.top = 0;

            window.onload = startIdleScroll;
            idleLoop = setInterval(startIdleScroll, idleResetTime * 1000);
            document.querySelector('.navbar a.home-link').onclick = startIdleScroll;

            document.getElementById('btn-feelingLucky').onclick = feelingLucky;
        }

        init()
    }
}
</script>

---

<div style="color: #aaacaf; font-family: 'PT Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Noto Sans CJK SC', 'Source Han Sans SC', 'Source Han Sans CN', 'Microsoft Yahei', sans-serif">
    <p>
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18" style="vertical-align: text-bottom;">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        with 拖延症，经常挖坑不填
        <br>Yu Zhang © 2021
    </p>
</div>

</div>

<!-- <p>
<a href="https://github.com/yzhang-gh" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/dynamic/json?style=flat-square&logo=github&label=GitHub&labelColor=424755&color=272a32&suffix=+Followers&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dgithub%26queryKey%3Dyzhang-gh&longCache=true" alt="GitHub">
</a>
<a href="https://steamcommunity.com/profiles/76561198278233415/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/dynamic/json?style=flat-square&logo=steam&label=Steam&labelColor=154c85&color=0e355d&suffix=+Games&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3DsteamGames%26queryKey%3D76561198278233415&longCache=true" alt="Steam">
</a>
<a href="https://www.zhihu.com/people/yzhang-zhihu" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/dynamic/json?style=flat-square&label=%E7%9F%A5%E4%B9%8E&labelColor=0084ff&color=0069cc&suffix=+%E5%85%B3%E6%B3%A8&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dzhihu%26queryKey%3Dyzhang-zhihu&longCache=true" alt="Zhihu">
</a>
</p> -->
