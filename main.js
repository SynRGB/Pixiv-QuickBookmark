// ==UserScript==
// @name            Pixiv-QuickBookmark
// @name:zh-CN      Pixiv-快捷收藏
// @name:jpn        Pixiv-クイックブックマーク
// @namespace       https://github.com/TitanRGB
// @version         1.2
// @description         When press the main area of the image, it will add the bookmark instead of jump to the image page. And add a button to jump to the image page.
// @description:zh-CN   点击图片主区域，会直接收藏图片，而不是跳转到图片页面。并额外添加一个按钮用于跳转到图片页面。
// @description:jpn     画像のメインエリアを押すと、ブックマークが追加され、画像ページにジャンプしなくなります。 さらに、画像ページにジャンプするためのボタンを追加します。
// @author          https://github.com/TitanRGB
// @icon            data:image/png;base64,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
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
// @copyright         Copyright © 2022-PRESENT, TitanRGB (https://github.com/TitanRGB)
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
                unsafeWindow.location.href = a.getAttribute('href');
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

/*
********** 注 **********
* 因为 Pixiv 的前端是纯动态加载的, 且经常网络不佳
* 所以用了一些比较暴力的方法来确保必要元素都被加载
*/

unsafeWindow.onload = function () {
    // 递归检测用以应对网速较慢的环境
    // 可以确保必要元素都被加载
    let start = function () {
        if (document.querySelectorAll('div[type="illust"]').length > 0) {
            main();
        } else {
            setTimeout(start, 1000);
        }
    }
    start();
}
// 用于绑定滞后加载的横向浏览框
let wheelCount = 0;
// 绑定鼠标滚轮滚动
document.body.addEventListener('wheel', function () {
    main();
    // 等待滚轮滚动以确保加载完毕
    if (wheelCount === 3) {
        // 绑定在页面中下段的横向浏览框
        let button_left = document.querySelectorAll('button[style*="left"]');
        for (let i = 0; i < button_left.length; i++) {
            if (button_left[i].style.left === '-72px') {
                button_left[i].addEventListener('click', function () {
                    // 迟滞用于等待新组建加载
                    setTimeout(function () {
                        main();
                    }, 300);
                });
            }
        }
        let button_right = document.querySelectorAll('button[style*="right"]');
        for (let i = 0; i < button_right.length; i++) {
            if (button_right[i].style.right === '-72px') {
                button_right[i].addEventListener('click', function () {
                    // 迟滞用于等待新组建加载
                    setTimeout(function () {
                        main();
                    }, 300);
                });
            }
        }
        // 绑定作品页中的作者作品横向浏览框
        let authorWorkButton1_xPath = "//*[@id=\"root\"]/div[2]/div/div[2]/div/div[1]/main/section/div[2]/div[1]/div/div[2]/nav/div[2]/button[1]";
        let authorWorkButton1 = document.evaluate(authorWorkButton1_xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        authorWorkButton1.addEventListener('click', function () {
            // 迟滞用于等待新组建加载
            setTimeout(function () {
                main();
            }, 300);
        }, false);
        let authorWorkButton2_xPath = "//*[@id=\"root\"]/div[2]/div/div[2]/div/div[1]/main/section/div[2]/div[1]/div/div[2]/nav/div[2]/button[2]";
        let authorWorkButton2 = document.evaluate(authorWorkButton2_xPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        authorWorkButton2.addEventListener('click', function () {
            // 迟滞用于等待新组建加载
            setTimeout(function () {
                main();
            }, 300);
        }, false);
        // 不再执行
        wheelCount++;
    } else {
        wheelCount++;
    }
}, false);
// 绑定页面竖向滚动条的拖动
unsafeWindow.addEventListener('scroll', function () {
    main();
}, false);