export default class District {
    productID: string;
    relatedID: string;
    relatedVersion: string;
    relatedType: string;
    location: string;
    name: string;
    dateBorn: Date;
    dateVisaExpire: Date;
    dateModify: Date;
    dateAppointment: Date;
    numID: string;
    numVisa: string;
    addr: string;
    insAmt: string;
    insPremium: string;
    status: string;
    modifyBy: string;
    approveBy: string;
    constructor() {
        this.productID="";
        this.relatedID="";
        this.relatedVersion="";
        this.relatedType="";
        this.location="";
        this.name="";
        this.dateBorn=new Date();
        this.dateVisaExpire=new Date();
        this.dateAppointment=new Date();
        this.numID="";
        this.numVisa="";
        this.addr="";
        this.insAmt="";
        this.insPremium="";
        this.status="";
        this.modifyBy="";
        this.approveBy="";
    }
}