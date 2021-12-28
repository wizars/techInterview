// Mock server responses
const user_info_response = {
    "username": "test_user",
    "firstName": "John",
    "lastName": "Doe",
    "treatment": "Mr."
}

const portfolio_response = [
    {
        "productId": "A1",
        "productName": "Acme",
        "expirationDate": "2022-02-01",
        "countries": [
            "spain",
            "france",
            "germany"
        ]
    },
    {
        "productId": "B7",
        "productName": "Abstergo",
        "expirationDate": "2021-08-01",
        "countries": [

            "germany",
            "italy"
        ]
    },
    {
        "productId": "C4",
        "productName": "Cyberdyne",
        "expirationDate": "2022-01-01",
        "countries": [
            "japan",
            "germany"
        ]
    },
    {
        "productId": "E3",
        "productName": "Oscorp",
        "expirationDate": "2021-07-01",
        "countries": [
            "spain",
            "italy",
            "china"
        ]
    }

]

// Get the elements
const completeName = document.getElementById("completeName");
const userName = document.getElementById("userName");
const portfolio = document.getElementById("portfolio");

// Fill the user info
completeName.innerHTML = `Welcome ${user_info_response.treatment}  ${user_info_response.firstName} ${user_info_response.lastName}`;
userName.innerHTML = user_info_response.username;



for (i = 0; i < portfolio_response.length; i++) {
    // Product block
    producto = document.createElement("div");
    producto.setAttribute("class", "productBlock");
    producto.setAttribute("id", portfolio_response[i].productId);


    // Product Name
    productName = document.createElement("p");
    productName.setAttribute("class", "productName")
    productName.innerHTML = portfolio_response[i].productName
    producto.appendChild(productName);

    // Product ID
    productId = document.createElement("p");
    productId.setAttribute("class", "productId")
    productId.innerHTML = "<p class='bt'>Product ID:</p> " + portfolio_response[i].productId
    producto.appendChild(productId);

    // Expiration date
    productExpDate = document.createElement("p");
    productExpDate.setAttribute("class", "productExpDate");
    productExpDate.innerHTML = "<p class='bt'>Expiration:</p> " + portfolio_response[i].expirationDate
    producto.appendChild(productExpDate);

    // Countries list header
    listHeader = document.createElement("p")
    listHeader.setAttribute("class", "listHeader")
    listHeader.innerHTML = "<p class='bt'>Registered in:</p>"
    producto.appendChild(listHeader)

    // Countries list
    countriesList = document.createElement("ul")
    countriesList.setAttribute("class", "countriesList");
    producto.appendChild(countriesList);
    for (j = 0; j < portfolio_response[i].countries.length; j++) {
        listElement = document.createElement("li")
        listElement.setAttribute("class", "contriesListEntry")
        listElement.innerHTML =capitalize( portfolio_response[i].countries[j]);
        countriesList.appendChild(listElement)
    }


    portfolio.appendChild(producto);


}

function capitalize(str)
{
    return str.toLowerCase().replace(/\b[a-z](?=[a-z]{2})/g, function(letter) {
        return letter.toUpperCase(); } );
}