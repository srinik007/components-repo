import { api, LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToRecordDetailPage extends NavigationMixin(LightningElement) {
    @api recordId;
    @api objectApiName;
    
    navToRecordView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0015i000009UZMGAA4', //this.recordId,
                objectApiName: this.objectApiName,
                actionName: 'view'
            }
        });
    }
}