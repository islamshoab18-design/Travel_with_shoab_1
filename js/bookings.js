// bookings.js - Local booking logic for basic HTML/CSS project

// Save booking to localStorage
function saveBooking(booking) {
    let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

// Get all bookings from localStorage
function getBookings() {
    return JSON.parse(localStorage.getItem('bookings') || '[]');
}

// Attach booking handlers to all book buttons
function setupBookingButtons() {
    var buttons = document.querySelectorAll('.book-btn');
    buttons.forEach(function(btn) {
        btn.onclick = function() {
            var card = btn.closest('.destination-card');
            var hotel = card.querySelector('p:nth-child(2)').textContent.replace('Hotel: ', '');
            var destination = card.querySelector('h3').textContent;
            var details = card.querySelector('p:nth-child(4)').textContent.replace('Details: ', '');
            var checkin = prompt('Enter check-in date (YYYY-MM-DD):');
            var checkout = prompt('Enter check-out date (YYYY-MM-DD):');
            if (checkin && checkout) {
                saveBooking({ hotel, destination, checkin, checkout, details });
                alert('Booking saved! You can view it in My Bookings.');
            }
        };
    });
}

// For destinations.html only
if (window.location.pathname.includes('destinations.html')) {
    document.addEventListener('DOMContentLoaded', setupBookingButtons);
}

// For dashboard.html only
if (window.location.pathname.includes('dashboard.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        var tbody = document.querySelector('.dashboard-table tbody');
        if (!tbody) return;
        tbody.innerHTML = '';
        var bookings = getBookings();
        if (bookings.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4">No bookings yet.</td></tr>';
        } else {
            bookings.forEach(function(b) {
                var tr = document.createElement('tr');
                tr.innerHTML = `<td>${b.hotel}</td><td>${b.destination}</td><td>${b.checkin}</td><td>${b.checkout}</td>`;
                tbody.appendChild(tr);
            });
        }
    });
}
