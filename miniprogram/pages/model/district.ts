export default class District {
  id: string;
  nameEng: string;
  nameChi: string;
  parentID: string;
  postalCode: string;
  phoneCode: string;
  modifyBy: string;
  dateModify: Date;
  constructor() {
      this.id="";
      this.nameEng="";
      this.nameChi="";
      this.parentID="";
      this.postalCode="";
      this.phoneCode="";
      this.modifyBy="";
      this.dateModify=new Date();
  }
}
