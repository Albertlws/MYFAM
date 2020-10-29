export default class District {
    id: string;
    reqInsAmt: string;
    reqInsPremium: string;
    userId: string;
    gender: string;
    age: string;
    dateModify: Date;
    status: string;
    remark: string;
    productID: string;
    isWaiveApplicant: Date;
    dateAdd: Date;
    addBy: string;
    modifyBy: string;
    handledBy: string;
    constructor() {
        this.id="";
        this.reqInsAmt="";
        this.reqInsPremium="";
        this.userId="";
        this.gender="";
        this.age="";
        this.dateModify=new Date();
        this.status="";
        this.remark="";
        this.productID="";
        this.isWaiveApplicant=new Date();
        this.dateAdd=new Date();
        this.addBy="";
        this.modifyBy="";
        this.handledBy="";
        
    }
}