// ==UserScript==
// @name         CSGOFloat Utilities
// @version      1.0
// @description  Adds a series of styling and utility improvements to csfloat.com
// @author       michigan224
// @match        https://csfloat.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csfloat.com
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    GM_addStyle(`
        div.cdk-overlay-pane.mat-autocomplete-panel-above {
            width: fit-content !important;
        }
    `);
})();