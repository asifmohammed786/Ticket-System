document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const ticketId = document.getElementById("ticketId").value;

    // Add booked ticket to the booking list
    const bookingList = document.getElementById("bookingList");
    const listItem = document.createElement("li");
    listItem.textContent = `Ticket ID ${ticketId} booked by ${name}`;
    bookingList.appendChild(listItem);

    // Disable the booked ticket
    const ticketRow = document.querySelector(`td:contains('${ticketId}')`).parentElement;
    ticketRow.querySelector(".available").classList.add("booked");
    ticketRow.querySelector(".available").classList.remove("available");

    // Reset the form fields
    document.getElementById("name").value = "";
    document.getElementById("ticketId").value = "";
});
