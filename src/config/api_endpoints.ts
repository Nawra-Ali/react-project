const BASE_URL = "https://e4xqvu00zl-vpce-050d2dbaeeb201856.execute-api.me-south-1.amazonaws.com/dev/api/";

export const ENDPOINTS = {
  GET_USER: `${BASE_URL}/Users/GetUser`,
  GET_ORDERS_SUMMARY: `${BASE_URL}/orders/GetSalesOrders`,
  GET_LINE_ITEMS: `${BASE_URL}/orders/GetLineItems`,
  GET_CUSTOMERS: `${BASE_URL}/orders/GetCustomers`,
  GET_ACCOUNTS: `${BASE_URL}/Orders/GetAccounts`,
  GET_SHIP_TO: `${BASE_URL}/Orders/getShipTo`,
  GET_STATUS: `${BASE_URL}/Orders/GetStatusValues`,
  GET_ORDER_TYPES: `${BASE_URL}/orders/GetOrderTypes`,
  GET_SHIPMENTS: `${BASE_URL}/shipments/getShipments`,


  GET_UPLOAD_URL: `${BASE_URL}/attachment/GetUploadURL`,
  GET_DOWNLOAD_URL: `${BASE_URL}/attachment/GetDownloadURLs`,

  POST_SHIMPMENT_DRIVER: `${BASE_URL}/shipments/UpdateDriverShipments`,
  POST_BEHAVIOR_OPERATOR: `${BASE_URL}/shipments/UpdateOperatorShipments`,
};

export default ENDPOINTS;