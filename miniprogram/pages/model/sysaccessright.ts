export default class District {
    menuID: string;
    userGroupID: string;
    alwRead: Boolean;
    alwWrite: Boolean;
    alwImport: Boolean;
    alwExport: Boolean;
    alwDelete: Boolean;
    alwPrint: Boolean;
    constructor() {
        this.menuID="";
        this.userGroupID="";
        this.alwRead=new Boolean();
        this.alwWrite=new Boolean();
        this.alwImport=new Boolean();
        this.alwExport=new Boolean();
        this.alwDelete=new Boolean();
        this.alwPrint=new Boolean();
    }
}