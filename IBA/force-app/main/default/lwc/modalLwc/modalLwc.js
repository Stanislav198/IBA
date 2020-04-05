//import module elements
import { LightningElement, wire, track } from "lwc";

//import method from the Apex Class
import fetchQuotes from "@salesforce/apex/datatableLwc.fetchQuotes";

//columns in the datatable
const columns = [
  {
    label: "Quote Name",
    fieldName: "Quote_Name__c",
    type: "text"
  },
  {
    label: "Product Name",
    fieldName: "Name"
  },

  {
    label: "Price",
    fieldName: "Price__c",
    initialWidth: 80,
    type: "currency"
  },
  {
    label: "Amount",
    fieldName: "Amount__c",
    initialWidth: 85,
    type: "number"
  },
  {
    label: "Total Price",
    fieldName: "Total_Price__c",
    type: "currency"
  },
  {
    type: "button-icon", //for detail view
    initialWidth: 10, //size
    typeAttributes: {
      iconName: "action:preview" //style
    }
  }
];

export default class modalLwc extends LightningElement {
  @track ShowQuote = false;
  @track columns = columns;
  @track record = {};
  @track rowOffset = 0;
  @track data = {};
  @track bShowModal = false;
  @wire(fetchQuotes) parameters;

  //hadle, to show the details
  handleRowAction(event) {
    const row = event.detail.row;
    this.record = row;
    this.bShowModal = true; //display modal window
  }

  //to close modal window in datatable
  closeModal() {
    this.bShowModal = false;
  }

  //to open modal window
  openQuote() {
    this.ShowQuote = true;
  }

  //to close modal window
  closeQuote() {
    this.ShowQuote = false;
  }
}
