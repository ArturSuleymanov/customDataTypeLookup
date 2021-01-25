import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getRecord from '@salesforce/apex/DataTypeController.getRecord';

export default class CustomLookupDataTypeComponent extends NavigationMixin(LightningElement) {
    @api recordId;
    @api sobjectApiName;
    @track recordName; 

    @api openRecordPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
                attributes: {
                    recordId: this.recordId,
                    objectApiName: this.sobjectApiName,
                    actionName: 'view'
                }
        });
    }

    connectedCallback() {
        getRecord({ Id: this.recordId, sobjectApiName: this.sobjectApiName})
        .then(result => {
            if (result) {
                this.recordName = result.Name;
            }
        })
    }
}
