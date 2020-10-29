export default class District {
    constructor() {
        this.id = "";
        this.name = "";
        this.nameNoSensitive = "";
        this.nameAddr = "";
        this.dateModify = new Date();
        this.dateAdd = new Date();
        this.dateSellFrom = new Date();
        this.dateSellTo = new Date();
        this.dayPostSale = "";
        this.dayPostSaleUnit = "";
        this.dayWait = "";
        this.dayWaitUnit = "";
        this.modifyBy = "";
        this.addBy = "";
        this.insuranceType = "";
        this.productType = "";
        this.feeAnnual = "";
        this.feePeriod = "";
        this.isYearlyPay = undefined;
        this.isSeaonPay = undefined;
        this.isMonthlyPay = undefined;
        this.isHalfYearlPay = undefined;
        this.ageFrom = "";
        this.ageFromUnit = "";
        this.ageTo = "";
        this.ageToUnit = "";
        this.status = "";
        this.configExtract = undefined;
        this.configBirthdayWait = "";
        this.configPrepaid = undefined;
    }
}
//# sourceMappingURL=product.js.map