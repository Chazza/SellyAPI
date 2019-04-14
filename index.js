var email = '';
var key = '';

const { base64encode } = require('nodejs-base64');
const request = require("request");

/* ------------------------------------------- */

function setEmail(newEmail) {
    email = newEmail;
}

function setKey(newKey) {
    key = newKey;
}

function getToken() {
    return base64encode(email + ":" + key);
}

/* ------------------------------------------- */

function getPages() {
    return getTotalPages();
}

function getOrders(page = 1) {
    return sendRequest('orders?page=' + page);
}

function getOrder(id) {
    return sendRequest('orders/' + id);
}

function getProducts() {
    return sendRequest('products');
}

function getProduct(id) {
    return sendRequest('products/' + id);
}

function getGroups() {
    return sendRequest('product_groups');
}

function getGroup(id) {
    return sendRequest('product_groups/' + id);
}

function deletePayment(id) {
    return sendRequest('pay/' + id);
}

function getCoupons() {
    return sendRequest('coupons');
}

function getCoupon(id) {
    return sendRequest('coupons/' + id);
}

function getQueries() {
    return sendRequest('queries');
}

function getQuery(id) {
    return sendRequest('queries/' + id);
}

function sendRequest(endpoint) {
    return new Promise((resolve, reject) => {
        request({
            url: "https://selly.gg/api/v2/" + endpoint,
            json: true,
            gzip: true,
            headers: {
                'Authorization': 'Basic ' + getToken(),
                'User-Agent': 'username - localhost'
            }
        }, (err, res, body) => {
            if(err) return reject(err);
            return resolve(body);
        })
    })
}

function getTotalPages() {
    return new Promise((resolve, reject) => {
        request({
            url: "https://selly.gg/api/v2/orders",
            json: true,
            gzip: true,
            headers: {
                'Authorization': 'Basic ' + getToken(),
                'User-Agent': 'username - localhost'
            }
        }, (err, res, body) => {
            if(err) return reject(err);
            return resolve(res.headers['x-total-pages']+1);
        })
    })
}

module.exports.setEmail = setEmail;
module.exports.setKey = setKey;
module.exports.getToken = getToken;

module.exports.getOrders = getOrders;
module.exports.getOrder = getOrder;

module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;

module.exports.getGroups = getGroups;
module.exports.getGroup = getGroup;

module.exports.deletePayment = deletePayment;

module.exports.getCoupons = getCoupons;
module.exports.getCoupon = getCoupon;

module.exports.getQueries = getQueries;
module.exports.getQuery = getQuery;

module.exports.getPages = getPages;