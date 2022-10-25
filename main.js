// ==UserScript==
// @name                Pixiv-QuickBookmark
// @name:zh-CN          Pixiv-快捷收藏
// @name:ja             Pixiv-クイックブックマーク
// @namespace           https://github.com/TitanRGB
// @version             2.5
// @description         When press the main area of the image, it will add the bookmark instead of jump to the image page. And add a button to jump to the image page.
// @description:zh-CN   点击图片主区域，会直接收藏图片，而不是跳转到图片页面。并额外添加一个按钮用于跳转到图片页面。
// @description:ja      画像のメインエリアを押すと、ブックマークが追加され、画像ページにジャンプしなくなります。 さらに、画像ページにジャンプするためのボタンを追加します。
// @author              https://github.com/TitanRGB
// @icon                data:image/png;base64,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
// @include             http*://www.pixiv.net*
// @match               http://www.pixiv.net/
// @connect             i.pximg.net
// @connect             i-f.pximg.net
// @connect             i-cf.pximg.net
// @license             MPL-2.0
// @license^            Mozilla Public License 2.0
// @grant               unsafeWindow
// @homepageURL         https://github.com/SynRGB/Pixiv-QuickBookmark
// @contributionURL     https://github.com/SynRGB/Pixiv-QuickBookmark
// @updateURL           https://github.com/SynRGB/Pixiv-QuickBookmark/releases/new
// @copyright           Copyright © 2022-PRESENT, TitanRGB (https://github.com/TitanRGB)
// @charset		        UTF-8
// @run-at              document-end
// ==/UserScript==

let last_run_time = new Date().getTime();

let main = function () {
    // console.log('Pixiv-QuickBookmark: main.js');
    let div = document.querySelectorAll('div[type="illust"]');
    for (let i = 0; i < div.length; i++) {
        // use for filter real img div
        let button = div[i].querySelector('button');
        let add_div_check = div[i].querySelector('div[class="Pixiv-QuickBookmark"]');
        // filter real img div
        if (button !== null && add_div_check === null) {
            // get the parent div of the button
            let buttonInnerDiv = button.parentNode;
            let buttonOuterDiv = button.parentNode.parentNode;
            // move button to left side
            let divWidth = div[i].clientWidth;
            buttonOuterDiv.setAttribute('style', `
                position: absolute;
                width: ${divWidth}px;
                bottom: 0;
            `);
            buttonInnerDiv.setAttribute('style', `
                position: relative;
                left: -${divWidth - 32}px;
            `);
            // add the jump page button to right bottom edge
            let add_div = document.createElement('div');
            add_div.setAttribute('class', 'Pixiv-QuickBookmark');
            add_div.setAttribute('style', `
                content: '';
                position: absolute;
                right: 0;
                bottom: 0;
                border: 17px solid #0096FA;
                border-top-color: transparent;
                border-left-color: transparent;
            `);
            add_div.addEventListener('click', function () {
                let a = div[i].querySelector('a');
                a.click();
            });
            div[i].appendChild(add_div);
            // modify the jump page area to bookmark button
            div[i].querySelector('a').childNodes[0].addEventListener('click', function (e) {
                e.preventDefault();
                button.click();
            });
        }
    }
    last_run_time = new Date().getTime();
}

// if DOM changed, re-run the script
let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
let observer = new MutationObserver(function (mutations) {
    mutations.forEach(function () {
        // 通过增加时间间隔来避免无限回调
        if (new Date().getTime() - last_run_time > 100) {
            setTimeout(main, 500);
        }
    });
});
observer.observe(document.body, {
    childList: true,
    subtree: true
});

console.log("JS script Pixiv-QuickBookmark (Pixiv-快捷收藏) loaded. See more details at https://github.com/SynRGB/Pixiv-QuickBookmark");