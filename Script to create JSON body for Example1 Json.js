var restMessage = new sn_ws.RESTMessageV2('Order Request', 'Post');
restMessage.setAuthentication("basic", "My Auth");
restMessage.setRequestHeader("Accept","application/json");
restMessage.setRequestHeader("Content-Type","application/json")

var requestBody = {}
var addressBilling = {};
var addressShipping = {};
var itemsRequested = [];

addressBilling.Description = "A";
addressBilling.CompanyName = "B";
addressBilling.Name_First = "C";
addressBilling.Name_Last = "D";
addressBilling.StreetAddress_Line1 = "E";
addressBilling.StreetAddress_Line2 = "F";
addressBilling.City = "G";
addressBilling.StateOrProvince = "FL";
addressBilling.PostalCode = "20173";
addressBilling.Country = "US";
addressBilling.Email = "abc@abc.com";
addressBilling.Telephone = "1234567890";

addressShipping.Description = "A";
addressShipping.CompanyName = "B";
addressShipping.Name_First = "C";
addressShipping.Name_Last = "D";
addressShipping.StreetAddress_Line1 = "E";
addressShipping.StreetAddress_Line2 = "F";
addressShipping.City = "G";
addressShipping.StateOrProvince = "FL";
addressShipping.PostalCode = "20173";
addressShipping.Country = "US";
addressShipping.Email = "abc@abc.com";
addressShipping.Telephone = "1234567890";


var itemRequested = {};
itemRequested.ProductID = "844152"
itemRequested.Quantity = "1";
itemRequested.AllowBackOrder="false";
itemsRequested.push(itemRequested);


requestBody.Address_Billing = addressBilling;
requestBody.Address_Shipping = addressShipping;
requestBody.ItemsRequested = itemsRequested;
requestBody.Comments = "Comments";
requestBody.PONumber = "PO Number";
requestBody.PromotionCode = "";

//Encode as JSON
requestBody = new global.JSON().encode(requestBody);
restMessage.setRequestBody(requestBody);

var response = restMessage.execute();
var responseBody = response.getBody();
var httpStatus = response.getStatusCode();
gs.log(" responsebody "+responseBody);
gs.log(" httpStatus "+httpStatus);
