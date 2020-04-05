public with sharing class dataTableLWC {

@AuraEnabled(cacheable = true)
    //select fields order by Id
    public static List<Product2> fetchQuotes(){
        return [SELECT Id,Name,Quote_Name__c,Price__c,Amount__c,Total_Price__c FROM Product2 ORDER BY Id DESC];
    }
}
