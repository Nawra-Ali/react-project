export interface IOperatorShipment {
    lineNumber: number;
    lineID: number;
    shipmentNumber: string;
    orderNumber: number;
    loadedQuantity: number;
    meterNo: string;
    loadedDrum?: number;
    exTankNo: string;
    timeIn: Date;
    timeOut: Date;
}