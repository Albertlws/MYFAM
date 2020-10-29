export default class District {
    id: string;
    deteEffective: Date;
    dateApprove: Date;
    dateAppointment: Date;
    dateCoverageFrom: Date;
    dateCoverageTo: Date;
    insurancepolicycol: string;
    productID: string
    userID: string;
    signBy: string;
    channelBy: string;
    insAmt: string;
    intPremium: string;
    status: string;
    constructor() {
        this.id="";
        this.deteEffective=new Date();
        this.dateApprove=new Date();
        this.dateAppointment=new Date();
        this.dateCoverageFrom=new Date();
        this.dateCoverageTo=new Date();
        this.insurancepolicycol="";
        this.productID="";
        this.userID="";
        this.signBy="";
        this.channelBy="";
        this.insAmt="";
        this.intPremium="";
        this.status="";
    }
  }