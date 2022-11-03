import { api, LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToRecordDetailPage extends NavigationMixin(LightningElement) {
    @api recordId;
    @api objectApiName;
    
    navToRecordView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: this.objectApiName,
                actionName: 'view'
            }
        });
    }
    get disableLink(){
        if(this.recordId === undefined){
            return 'disablelink';
        }
    }
}