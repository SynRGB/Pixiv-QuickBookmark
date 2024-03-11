// ==UserScript==
// @name                Pixiv-QuickBookmark
// @name:zh-CN          Pixiv-快捷收藏
// @name:ja             Pixiv-クイックブックマーク
// @namespace           https://github.com/Mehver
// @version             2.8
// @description         When press the main area of the image, it will add the bookmark instead of jump to the image page. And add a button to jump to the image page.
// @description:zh-CN   点击图片主区域，会直接收藏图片，而不是跳转到图片页面。并额外添加一个按钮用于跳转到图片页面。
// @description:ja      画像のメインエリアを押すと、ブックマークが追加され、画像ページにジャンプしなくなります。 さらに、画像ページにジャンプするためのボタンを追加します。
// @author              https://github.com/Mehver
// @icon                data:image/png;base64,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
// @match               http*://pixiv.net
// @match               http*://pixiv.net/*
// @match               http*://www.pixiv.net
// @match               http*://www.pixiv.net/*
// @license             MPL-2.0
// @license^            Mozilla Public License 2.0
// @grant               unsafeWindow
// @homepageURL         https://github.com/SynRGB/Pixiv-QuickBookmark
// @contributionURL     https://github.com/SynRGB/Pixiv-QuickBookmark
// @updateURL           https://github.com/SynRGB/Pixiv-QuickBookmark/releases/new
// @copyright           Copyright © 2022-PRESENT, Mehver (https://github.com/Mehver)
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
    // if (false) {
    if (window.location.href.match(/https:\/\/www\.pixiv\.net\/users\/\d+/)) {
        let xpath = '//*[@id="root"]/div[2]/div/div[3]/div/div/div[2]/div[3]/section';
        let section = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        let li = section.querySelectorAll('li');
        for (let i = 0; i < li.length; i++) {
            let top_div = li[i].querySelector('div:nth-child(2) > div:nth-child(1) > div:nth-child(1)');
            // use for filter real img div
            let button = top_div.querySelector('button');
            let add_div_check = top_div.parentNode.querySelector('div[class="Pixiv-QuickBookmark"]');
            // filter real img div
            if (button !== null && add_div_check === null) {
                // get the parent div of the button
                let buttonInnerDiv = button.parentNode;
                let buttonOuterDiv = button.parentNode.parentNode;
                // move button to left side
                let divWidth = top_div.clientWidth;
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
                    let a = top_div.querySelector('a');
                    a.click();
                });
                top_div.parentNode.appendChild(add_div);
                // modify the jump page area to bookmark button
                top_div.querySelector('a').childNodes[0].addEventListener('click', function (e) {
                    e.preventDefault();
                    button.click();
                });
            }
        }
    }
    last_run_time = new Date().getTime();
}

// if DOM changed, re-run the script
let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
let observer = new MutationObserver(function (mutations) {
    mutations.forEach(function () {
        // 通过增加时间间隔来避免无限回调
        if (new Date().getTime() - last_run_time > 50) {
            main();
        }
    });
});
observer.observe(document.body, {
    childList: true,
    subtree: true
});

console.log("JS script Pixiv-QuickBookmark (Pixiv-快捷收藏) loaded. See more details at https://github.com/SynRGB/Pixiv-QuickBookmark");