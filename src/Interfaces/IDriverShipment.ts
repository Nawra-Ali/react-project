export interface IDriverShipment {
    orderNumber: number;
    lineNumber: number;
    lineID: number;
    shipmentNumber: string;
    recievedQuantity: number;
    returnedDrums?: number;
}