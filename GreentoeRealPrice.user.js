// ==UserScript==
// @name         Greentoe Real Price
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Expose the real price on greentoe
// @license MIT
// @author       You
// @match        https://www.greentoe.com/product/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    let recommendedPrice = document.querySelector('.gauge-container').getAttribute('data-recommended-price');
    let alertPrice = document.querySelector('.gauge-container').getAttribute('data-offer-alert-price');
    let l = $('.lowest-price-online');
    if (l.length > 0) {
    	let currentPrice = parseFloat($('.money').first().html().substring(1));	
	    let saving = currentPrice - parseFloat(alertPrice);
	    let savingLabel = $('<div class="lowest-price-online">Possible max saving: <span class="money" style="color:red">$'+saving.toFixed(2) +'</span></div>').insertAfter(l);	    
	    let aPriceLabel = $('<div class="lowest-price-online">Alert Price: <span class="money">$'+alertPrice+'</span></div>').insertAfter(l);
	    let rPriceLabel = $('<div class="lowest-price-online">Recommended Price: <span class="money">$'+recommendedPrice+'</span></div>').insertAfter(l);
    } else {
    	let savingRecommendation = $('.saving-recommendation');
    	let aPriceLabel = $('<div class="lowest-price-online">Alert Price: <span class="money">$'+alertPrice+'</span></div>').insertBefore(savingRecommendation);
	    let rPriceLabel = $('<div class="lowest-price-online">Recommended Price: <span class="money">$'+recommendedPrice+'</span></div>').insertBefore(savingRecommendation);
    }
    // Your code here...
})();