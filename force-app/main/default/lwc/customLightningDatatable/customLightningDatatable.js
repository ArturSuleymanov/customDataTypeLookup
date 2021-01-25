import LightningDatatable from 'lightning/datatable';
import customLookupComponent from './customLookupComponent';

export default class CustomLightningDatatable extends LightningDatatable {
    static customTypes = {
        lookup: {
            template: customLookupComponent,
            typeAttributes: ['recordId', 'sobjectApiName']
        },
    }
}