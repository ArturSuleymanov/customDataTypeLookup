public with sharing class DataTypeController {
    @AuraEnabled
    public static SObject getRecord(String Id, String sobjectApiName) {
        return Database.query('SELECT Name FROM ' + sobjectApiname + ' WHERE Id = :Id LIMIT 1');
    }
}
