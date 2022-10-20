// ==UserScript==
// @name            Pixiv-QuickBookmark
// @name:zh-CN      Pixiv-快捷收藏
// @name:jpn        Pixiv-クイックブックマーク
// @namespace       https://github.com/TitanRGB
// @version         1.0
// @description         When press the main area of the image, it will add the bookmark instead of jump to the image page. And add a button to jump to the image page.
// @description:zh-CN   点击图片主区域，会直接收藏图片，而不是跳转到图片页面。并额外添加一个按钮用于跳转到图片页面。
// @description:jpn     画像のメインエリアを押すと、ブックマークが追加され、画像ページにジャンプしなくなります。 さらに、画像ページにジャンプするためのボタンを追加します。
// @author          https://github.com/TitanRGB
// @include         http*://www.pixiv.net*
// @match           http://www.pixiv.net/
// @connect         i.pximg.net
// @connect         i-f.pximg.net
// @connect         i-cf.pximg.net
// @license         MPL-2.0
// @license^        Mozilla Public License 2.0
// @grant           GM_xmlhttpRequest
// @grant           GM_log
// @grant           unsafeWindow
// @homepageURL       https://github.com/SynRGB/Pixiv-QuickBookmark
// @contributionURL   https://github.com/SynRGB/Pixiv-QuickBookmark
// @updateURL         https://github.com/SynRGB/Pixiv-QuickBookmark/releases/new
// @charset		    UTF-8
// @run-at          document-end
// ==/UserScript==

let main = function () {
    let div = document.querySelectorAll('div[type="illust"]');
    for (let i = 0; i < div.length; i++) {
        // use for filter real img div
        let button = div[i].querySelector('button');
        let a_div_check = div[i].querySelector('div[class="Pixiv-ImgSwopBookmark"]');
        // filter real img div
        if (button !== null && a_div_check === null) {
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
            let a_div = document.createElement('div');
            a_div.setAttribute('class', 'Pixiv-ImgSwopBookmark');
            a_div.setAttribute('style', `
                content: '';
                position: absolute;
                right: 0;
                bottom: 0;
                border: 17px solid #0096FA;
                border-top-color: transparent;
                border-left-color: transparent;
            `);
            a_div.addEventListener('click', function () {
                let a = div[i].querySelector('a');
                let href = a.getAttribute('href');
                unsafeWindow.location.href = href;
            });
            div[i].appendChild(a_div);
            // modify the jump page area to bookmark button
            div[i].querySelector('a').addEventListener('click', function (e) {
                e.preventDefault();
                button.click();
            });
        }
    }
}

window.onload = function () {
    setTimeout(function () {
        main();
    }, 1500);
}
document.body.addEventListener('click', function () {
    main();
}, false);
document.body.addEventListener('wheel', function () {
    main();
}, false);