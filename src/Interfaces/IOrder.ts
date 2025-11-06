export interface IOrder {
    OrderID: number,
    OrderDate: Date,
    OrderStatus: string,
    OrderType: string,
    SoldTo: string, //represents customer name
    ShipTo: string,  //represents location
    BillTo: string,
    CustomerAccountNumber: string,
    CurrencyCode: string,
    Company: string, DeliveryMethod: string, DeliveryCharges: number,
    DrumInsurance: number,
    OrderTotal: number,
    CardNumber?: string,
    ShipmentNumber?: string,
    BookAppointmentDate?: Date, BillToOrganizationID?: number, ShipToOrganizationID?: number,
    AgentName?: string,
    VesselName?: string,
    LoadingPort?: string,
    IMO?: number,
    CaptinName?: string, ContactNo?: number,
    AppointmentTime?: string,
    DriverID?: number,
    SplitID?: number,
    TankNo?: string
    FlowStatusCode?: string,
    DeliveryReportStatus?: string,
    TripID: number,
    RelatedRole: string
    RMOrderNumber?: string
}

