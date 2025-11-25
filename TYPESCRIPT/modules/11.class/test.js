var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BanckAccount = /** @class */ (function () {
    function BanckAccount(balance, firstDeposit, firstDraw, secondDeposit, secondDraw) {
        if (balance === void 0) { balance = 0; }
        if (firstDeposit === void 0) { firstDeposit = 0; }
        if (firstDraw === void 0) { firstDraw = 0; }
        if (secondDeposit === void 0) { secondDeposit = 0; }
        if (secondDraw === void 0) { secondDraw = 0; }
        this.balance = balance, this.firstDeposit = firstDeposit, this.firstDraw = firstDraw;
        this.secondDeposit = secondDeposit, this.secondDraw = secondDraw;
    }
    BanckAccount.prototype.getFirstDepostit = function () {
        return this.balance + this.firstDeposit;
    };
    BanckAccount.prototype.getFirstDraw = function () {
        return this.getFirstDepostit() - this.firstDraw;
    };
    BanckAccount.prototype.getSecondDeposit = function () {
        return this.getFirstDepostit() + this.secondDeposit;
    };
    BanckAccount.prototype.getTotalAccount = function () {
        return this.getSecondDeposit() - this.secondDraw;
    };
    return BanckAccount;
}());
var conto = new BanckAccount(100, 150, 100, 250, 50);
console.log("Il totale del conto è:" + conto.getTotalAccount());
var OtherAccount = /** @class */ (function (_super) {
    __extends(OtherAccount, _super);
    function OtherAccount(balance, firstDeposit, firstDraw, secondDeposit, secondDraw, canoneAnnuo) {
        if (balance === void 0) { balance = 0; }
        if (firstDeposit === void 0) { firstDeposit = 0; }
        if (firstDraw === void 0) { firstDraw = 0; }
        if (secondDeposit === void 0) { secondDeposit = 0; }
        if (secondDraw === void 0) { secondDraw = 0; }
        if (canoneAnnuo === void 0) { canoneAnnuo = 0; }
        var _this = _super.call(this, balance, firstDeposit, firstDraw, secondDeposit, secondDraw) || this;
        _this.canoneAnnuo = canoneAnnuo;
        return _this;
    }
    OtherAccount.prototype.getOtherFirstDepostit = function () {
        return this.getFirstDepostit();
    };
    OtherAccount.prototype.getOtherFirstDraw = function () {
        return this.getFirstDraw();
    };
    OtherAccount.prototype.getOtherSecondDeposit = function () {
        return this.getSecondDeposit();
    };
    OtherAccount.prototype.getOtherSecondDraw = function () {
        return this.getTotalAccount();
    };
    OtherAccount.prototype.getCanoneAnnuo = function () {
        return this.getOtherSecondDraw() * this.canoneAnnuo / 100;
    };
    OtherAccount.prototype.getOtherTotalAccount = function () {
        return this.getOtherSecondDraw() - this.getCanoneAnnuo();
    };
    return OtherAccount;
}(BanckAccount));
var contoSon = new OtherAccount(0, 100, 50, 200, 100, 15);
console.log("totale Account Son: " + contoSon.getOtherTotalAccount());
