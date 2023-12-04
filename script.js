
function login() {

    var userType = document.getElementById("userType").value;

    if (userType === "tenant") {
        window.location.href = "tenant.html";
    } else if (userType === "manager") {
        window.location.href = "manager.html";
    } else if (userType === "maintenance") {
        window.location.href = "maintenance.html";
    }
}
/*
function submitRequest() {
    // Simulate generating request ID and date/time
    var requestId = generateRequestId();
    var dateTime = new Date().toLocaleString();

    // Get form values
    var area = document.getElementById("area").value;
    var description = document.getElementById("description").value;
    var photo = document.getElementById("photo").files[0];

    // Simulate submitting the request (you may need to send this data to the server)
    var request = {
        requestId: requestId,
        apartmentNumber: getTenantApartmentNumber(), // Implement this function to get tenant's apartment number
        area: area,
        description: description,
        dateTime: dateTime,
        photo: photo ? URL.createObjectURL(photo) : null, // Display photo preview if available
        status: "pending"
    };

    // Display submitted request (you may modify this to update the UI as needed)
    alert("Maintenance Request Submitted!\n\nRequest Details:\n" +
        "Request ID: " + request.requestId +
        "\nApartment Number: " + request.apartmentNumber +
        "\nArea: " + request.area +
        "\nDescription: " + request.description +
        "\nDate/Time: " + request.dateTime +
        "\nStatus: " + request.status);

    // Clear form fields (you may need to enhance this based on your UI)
    document.getElementById("area").value = "";
    document.getElementById("description").value = "";
    document.getElementById("photo").value = "";
}
*/

function generateRequestId() {
    // Implement logic to generate a unique request ID (you may use timestamp or other methods)
    return Math.floor(Math.random() * 1000000);
}

function getTenantApartmentNumber() {
    // Implement logic to get the tenant's apartment number (you may fetch this from server)
    return 123; // Replace with actual logic
}

// Sample maintenance requests data (replace this with actual data from the server)
var maintenanceRequests = [
    { requestId: 1, apartmentNumber: 101, area: "Kitchen", dateTime: "2023-11-24 10:00", status: "completed" },
    { requestId: 2, apartmentNumber: 102, area: "Bathroom", dateTime: "2023-12-03 06:31", status: "pending" },
    { requestId: 3, apartmentNumber: 103, area: "Bedroom", dateTime: "2023-12-03 06:12", status: "pending" },
    // Add more maintenance requests as needed
];

// Populate the request list on page load
window.onload = function() {
    populateRequestList(maintenanceRequests);
};

function populateRequestList(requests) {
    var requestList = document.getElementById("requestList");
    requestList.innerHTML = "";

    requests.forEach(function(request) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
      Request ID: ${request.requestId}<br>
      Apartment Number: ${request.apartmentNumber}<br>
      Area: ${request.area}<br>
      Date/Time: ${request.dateTime}<br>
      Status: ${request.status}<br>
      <button onclick="showUpdateStatusForm(${request.requestId})">Update Status</button>
    `;
        requestList.appendChild(listItem);
    });
}

function filterRequests() {
    var filterType = document.getElementById("filter").value;
    var filterValue = document.getElementById("filterInput").value.toLowerCase();

    var filteredRequests = [];

    switch (filterType) {
        case "apartmentNumber":
            filteredRequests = maintenanceRequests.filter(request => request.apartmentNumber.toString().includes(filterValue));
            break;
        case "area":
            filteredRequests = maintenanceRequests.filter(request => request.area.toLowerCase().includes(filterValue));
            break;
        case "dateRange":
            // Implement date range filtering logic (you may use a date picker library)
            break;
        case "status":
            filteredRequests = maintenanceRequests.filter(request => request.status.toLowerCase().includes(filterValue));
            break;
        default:
            break;
    }

    populateRequestList(filteredRequests);
}

function showUpdateStatusForm(requestId) {
    var updateStatusForm = document.getElementById("updateStatusForm");
    updateStatusForm.style.display = "block";

    // Find the selected request
    var selectedRequest = maintenanceRequests.find(request => request.requestId === requestId);

    // Update the form with the selected request details
    if (selectedRequest) {
        document.getElementById("status").value = selectedRequest.status;
    } else {
        // Clear the form if the request is not found (handle this according to your requirements)
        document.getElementById("status").value = "";
    }
}

function updateStatus() {
    var newStatus = document.getElementById("status").value;

    // Add logic to update the status of the selected request (you may send this data to the server)
    // Simulating an alert for demonstration purposes
    alert("Request status updated to: " + newStatus);

    // Hide the update status form after updating
    document.getElementById("updateStatusForm").style.display = "none";

    // Refresh the request list (you may update the specific request in the list)
    populateRequestList(maintenanceRequests);
}
//var previousRequests = [];
// Function to handle the submission of a maintenance request by a tenant
function submitTenantRequest() {
    // Simulate generating request ID and date/time
    var requestId = generateRequestId();
    var dateTime = new Date().toLocaleString();

    // Get form values
    var area = document.getElementById("area").value;
    var description = document.getElementById("description").value;
    var photo = document.getElementById("photo").files[0];

    // Simulate submitting the request (you may need to send this data to the server)
    var newRequest = {
        requestId: requestId,
        apartmentNumber: getTenantApartmentNumber(),
        area: area,
        description: description,
        dateTime: dateTime,
        photo: photo ? URL.createObjectURL(photo) : null,
        status: "pending"
    };

    // Add the new request to the list of previous requests
    addRequestToPreviousList(newRequest);

    // Clear form fields (you may need to enhance this based on your UI)
    document.getElementById("area").value = "";
    document.getElementById("description").value = "";
    document.getElementById("photo").value = "";
}

// Function to add a request to the list of previous requests
function addRequestToPreviousList(request) {
    var previousRequestList = document.getElementById("previousRequestList");
    var listItem = document.createElement("li");
    listItem.innerHTML = `
        Request ID: ${request.requestId}<br>
        Apartment Number: ${request.apartmentNumber}<br>
        Area: ${request.area}<br>
        Date/Time: ${request.dateTime}<br>
        Status: ${request.status}<br>
        <!--<button onclick="showUpdateStatusForm(${request.requestId})">Update Status</button> -->
        <br>
    `;
    previousRequestList.appendChild(listItem);
}

function generateRequestId() {
    // Implement logic to generate a unique request ID (you may use timestamp or other methods)
    return Math.floor(Math.random() * 1000000);
}

function getTenantApartmentNumber() {
    // Implement logic to get the tenant's apartment number (you may fetch this from server)
    return 123; // Replace with actual logic
}

// ... Your existing functions ...

// Function to update the tenant table
// Sample array of tenants (replace this with actual data from your backend)
var tenants = [
    { tenantId: 1, name: "John Doe", phone: "123-456-7890", email: "john@example.com", checkInDate: "2023-01-01", apartmentNumber: 101 },
    { tenantId: 2, name: "Jane Doe", phone: "987-654-3210", email: "jane@example.com", checkInDate: "2023-02-01", apartmentNumber: 102 },
];

// Function to update the tenant table
function updateTenantTable(tenants) {
    var tenantTableBody = document.getElementById("tenantTableBody");
    tenantTableBody.innerHTML = "";

    tenants.forEach(function (tenant) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${tenant.tenantId}</td>
            <td>${tenant.name}</td>
            <td>${tenant.phone}</td>
            <td>${tenant.email}</td>
            <td>${tenant.checkInDate}</td>
            <td>${tenant.apartmentNumber}</td>
        `;
        tenantTableBody.appendChild(row);
    });
}

// Function to add a new tenant
function addNewTenant() {
    var tenantName = document.getElementById("tenantName").value;
    var tenantPhone = document.getElementById("tenantPhone").value;
    var tenantEmail = document.getElementById("tenantEmail").value;
    var checkInDate = document.getElementById("checkInDate").value;
    var apartmentNumber = document.getElementById("apartmentNumber").value;

    // Simulate adding a new tenant (replace this with actual logic to interact with your backend)
    var newTenant = {
        tenantId: tenants.length + 1,
        name: tenantName,
        phone: tenantPhone,
        email: tenantEmail,
        checkInDate: checkInDate,
        apartmentNumber: parseInt(apartmentNumber),
    };

    tenants.push(newTenant);

    // Update the tenant table
    updateTenantTable(tenants);

    // Clear form fields
    document.getElementById("tenantName").value = "";
    document.getElementById("tenantPhone").value = "";
    document.getElementById("tenantEmail").value = "";
    document.getElementById("checkInDate").value = "";
    document.getElementById("apartmentNumber").value = "";
}

function moveTenant() {
    var moveTenantId = document.getElementById("moveTenantId").value;
    var newApartmentNumber = document.getElementById("newApartmentNumber").value;

    // Simulate moving the tenant (replace this with actual logic to interact with your backend)
    var tenantToMove = tenants.find(tenant => tenant.tenantId == moveTenantId);
    if (tenantToMove) {
        tenantToMove.apartmentNumber = parseInt(newApartmentNumber);
    }

    // Update the tenant table
    updateTenantTable(tenants);
}

/*
// Function to move a tenant to another apartment
function moveTenant() {
    var newApartmentNumber = prompt("Enter the new apartment number:");

    if (newApartmentNumber !== null) {
        newApartmentNumber = parseInt(newApartmentNumber);

        // Simulate moving the tenant (replace this with actual logic to interact with your backend)
        var tenantToMove = tenants.find(tenant => tenant.tenantId === tenantId);
        if (tenantToMove) {
            tenantToMove.apartmentNumber = newApartmentNumber;
        }

        // Update the tenant table
        updateTenantTable(tenants);
    }
}
*/

// Function to delete a tenant
function deleteTenant() {
    var deleteTenantId = document.getElementById("deleteTenantId").value;

    // Simulate deleting the tenant (replace this with actual logic to interact with your backend)
    tenants = tenants.filter(tenant => tenant.tenantId != deleteTenantId);

    // Update the tenant table
    updateTenantTable(tenants);
}

// Function to update a tenant
function updateTenant() {
    var updateTenantId = document.getElementById("updateTenantId").value;
    var updateTenantName = document.getElementById("updateTenantName").value;
    var updateTenantPhone = document.getElementById("updateTenantPhone").value;
    var updateTenantEmail = document.getElementById("updateTenantEmail").value;
    var updateCheckInDate = document.getElementById("updateCheckInDate").value;
    var updateApartmentNumber = document.getElementById("updateApartmentNumber").value;

    // Simulate updating the tenant (replace this with actual logic to interact with your backend)
    var tenantToUpdate = tenants.find(tenant => tenant.tenantId == updateTenantId);
    if (tenantToUpdate) {
        tenantToUpdate.name = updateTenantName;
        tenantToUpdate.phone = updateTenantPhone;
        tenantToUpdate.email = updateTenantEmail;
        tenantToUpdate.checkInDate = updateCheckInDate;
        tenantToUpdate.apartmentNumber = parseInt(updateApartmentNumber);
    }

    // Update the tenant table
    updateTenantTable(tenants);
}

/*
function populateRequestList(requests) {
    var requestList = document.getElementById("previousRequestList");
    requestList.innerHTML = "";

    requests.forEach(function(request) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            Request ID: ${request.requestId}<br>
            Apartment Number: ${request.apartmentNumber}<br>
            Area: ${request.area}<br>
            Date/Time: ${request.dateTime}<br>
            Status: ${request.status}<br>
        `;
        requestList.appendChild(listItem);
    });
}

 */