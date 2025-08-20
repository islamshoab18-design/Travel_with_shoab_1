// Bangladesh Hotels & Resorts Data
const bangladeshHotels = [
    // Cox's Bazar Hotels
    {
        id: 1,
        name: "Sea Pearl Beach Resort & Spa",
        location: "Cox's Bazar",
        price: 12000,
        image: "🏖️ Luxury Beach Resort",
        features: ["Beach Access", "Spa", "Pool", "Restaurant", "WiFi"],
        rating: 4.8,
        description: "Premium beachfront resort with world-class amenities"
    },
    {
        id: 2,
        name: "Royal Tulip Sea Pearl Beach Resort",
        location: "Cox's Bazar",
        price: 15000,
        image: "🌊 Royal Beach Resort",
        features: ["Private Beach", "Multiple Restaurants", "Spa", "Kids Club"],
        rating: 4.9,
        description: "Luxury resort with stunning ocean views"
    },
    {
        id: 3,
        name: "Hotel Sayeman Beach Resort",
        location: "Cox's Bazar",
        price: 8000,
        image: "🏨 Beach Hotel",
        features: ["Beach View", "Restaurant", "Pool", "WiFi"],
        rating: 4.5,
        description: "Comfortable beachside accommodation"
    },
    {
        id: 4,
        name: "Cox's Bazar Hotel Motel",
        location: "Cox's Bazar",
        price: 3500,
        image: "🏠 Budget Hotel",
        features: ["AC", "Restaurant", "WiFi", "Room Service"],
        rating: 4.2,
        description: "Affordable stay near the beach"
    },

    // Dhaka Hotels
    {
        id: 5,
        name: "The Westin Dhaka",
        location: "Dhaka",
        price: 18000,
        image: "🏢 Luxury Hotel",
        features: ["Business Center", "Spa", "Multiple Restaurants", "Pool"],
        rating: 4.9,
        description: "Premium business hotel in Gulshan"
    },
    {
        id: 6,
        name: "Pan Pacific Sonargaon Dhaka",
        location: "Dhaka",
        price: 16000,
        image: "🌟 Five Star Hotel",
        features: ["Convention Center", "Spa", "Pool", "Multiple Dining"],
        rating: 4.8,
        description: "Iconic five-star hotel in the heart of Dhaka"
    },
    {
        id: 7,
        name: "Regency Hotel & Resort",
        location: "Dhaka",
        price: 8500,
        image: "🏨 City Hotel",
        features: ["Restaurant", "Business Center", "WiFi", "Gym"],
        rating: 4.4,
        description: "Modern hotel in Dhanmondi area"
    },
    {
        id: 8,
        name: "Hotel Ruposhi Bangla",
        location: "Dhaka",
        price: 12000,
        image: "🏛️ Heritage Hotel",
        features: ["Traditional Decor", "Restaurant", "Event Halls", "WiFi"],
        rating: 4.6,
        description: "Classic hotel with Bangladeshi hospitality"
    },

    // Sylhet Hotels
    {
        id: 9,
        name: "Grand Sylhet Hotel & Resort",
        location: "Sylhet",
        price: 7500,
        image: "🌿 Hill Resort",
        features: ["Garden View", "Restaurant", "Conference Hall", "WiFi"],
        rating: 4.5,
        description: "Peaceful resort in the tea capital"
    },
    {
        id: 10,
        name: "Hotel Supreme",
        location: "Sylhet",
        price: 4500,
        image: "🏨 Business Hotel",
        features: ["AC", "Restaurant", "WiFi", "Airport Pickup"],
        rating: 4.3,
        description: "Convenient business hotel in city center"
    },

    // Chittagong Hotels
    {
        id: 11,
        name: "Hotel Agrabad",
        location: "Chittagong",
        price: 6500,
        image: "🏢 Business Hotel",
        features: ["Business Center", "Restaurant", "WiFi", "Conference Room"],
        rating: 4.4,
        description: "Premier business hotel in Agrabad"
    },
    {
        id: 12,
        name: "Peninsula Chittagong",
        location: "Chittagong",
        price: 9500,
        image: "🌊 Port City Hotel",
        features: ["Harbor View", "Multiple Restaurants", "Spa", "Pool"],
        rating: 4.6,
        description: "Luxury hotel overlooking the port"
    },

    // Hill Districts
    {
        id: 13,
        name: "Hotel Hill View",
        location: "Rangamati",
        price: 4000,
        image: "🏔️ Lake Resort",
        features: ["Lake View", "Boat Service", "Restaurant", "WiFi"],
        rating: 4.3,
        description: "Scenic resort by Kaptai Lake"
    },
    {
        id: 14,
        name: "Nilgiri Resort",
        location: "Bandarban",
        price: 5500,
        image: "⛰️ Mountain Resort",
        features: ["Mountain View", "Trekking Guide", "Restaurant", "Bonfire"],
        rating: 4.7,
        description: "Adventure resort in the mountains"
    },
    {
        id: 15,
        name: "Hill Queen Resort",
        location: "Khagrachhari",
        price: 3800,
        image: "🌲 Hill Resort",
        features: ["Nature View", "Tribal Culture Tour", "Restaurant", "WiFi"],
        rating: 4.4,
        description: "Cultural resort in hill tracts"
    },

    // Saint Martin Island
    {
        id: 16,
        name: "Coral Blue Resort",
        location: "Saint Martin",
        price: 8500,
        image: "🐚 Island Resort",
        features: ["Beach Front", "Coral View", "Seafood", "Snorkeling"],
        rating: 4.6,
        description: "Exclusive island resort experience"
    },
    {
        id: 17,
        name: "Saint Martin Resort",
        location: "Saint Martin",
        price: 6000,
        image: "🏝️ Beach Resort",
        features: ["Beach Access", "Restaurant", "Boat Tour", "WiFi"],
        rating: 4.4,
        description: "Comfortable stay on coral island"
    },

    // Kuakata
    {
        id: 18,
        name: "Kuakata Sea Beach Resort",
        location: "Kuakata",
        price: 4500,
        image: "🌅 Sea Beach Resort",
        features: ["Sunrise View", "Beach Access", "Restaurant", "WiFi"],
        rating: 4.3,
        description: "Watch sunrise and sunset from same beach"
    },

    // Sundarbans
    {
        id: 19,
        name: "Sundarban Tiger Camp",
        location: "Sundarbans",
        price: 7000,
        image: "🐅 Eco Resort",
        features: ["Wildlife Tour", "Boat Safari", "Nature Guide", "Meals"],
        rating: 4.5,
        description: "Adventure eco-tourism in mangrove forest"
    },

    // Srimangal
    {
        id: 20,
        name: "Tea Resort",
        location: "Srimangal",
        price: 5000,
        image: "🫖 Tea Garden Resort",
        features: ["Tea Garden View", "Tea Tasting", "Nature Walk", "Restaurant"],
        rating: 4.6,
        description: "Peaceful retreat in tea gardens"
    },
    {
        id: 21,
        name: "Grand Sultan Tea Resort",
        location: "Srimangal",
        price: 6500,
        image: "🌱 Eco Resort",
        features: ["Organic Garden", "Bird Watching", "Spa", "Tea Tours"],
        rating: 4.7,
        description: "Luxury eco-resort in tea capital"
    },

    // Rajshahi
    {
        id: 22,
        name: "Hotel Nice International",
        location: "Rajshahi",
        price: 4000,
        image: "🏨 City Hotel",
        features: ["AC", "Restaurant", "WiFi", "Business Center"],
        rating: 4.2,
        description: "Comfortable stay in silk city"
    },

    // Khulna
    {
        id: 23,
        name: "Hotel Castle Salam",
        location: "Khulna",
        price: 3500,
        image: "🏰 Heritage Hotel",
        features: ["Traditional Architecture", "Restaurant", "WiFi", "Garden"],
        rating: 4.3,
        description: "Gateway to Sundarbans"
    },

    // Bogra
    {
        id: 24,
        name: "Hotel Naz Garden",
        location: "Bogra",
        price: 3200,
        image: "🌸 Garden Hotel",
        features: ["Garden View", "Restaurant", "WiFi", "Conference Hall"],
        rating: 4.1,
        description: "Peaceful hotel with beautiful gardens"
    },

    // Paharpur
    {
        id: 25,
        name: "Paharpur Heritage Resort",
        location: "Paharpur",
        price: 4500,
        image: "🏛️ Archaeological Resort",
        features: ["Historical Tours", "Museum Visit", "Restaurant", "Cultural Shows"],
        rating: 4.4,
        description: "Experience ancient Buddhist heritage"
    }
];

// Bangladesh Destinations Data
const bangladeshDestinations = [
    {
        name: "Cox's Bazar",
        description: "World's longest natural sea beach",
        image: "🏖️",
        attractions: ["120km Beach", "Himchari Waterfall", "Inani Beach", "Teknaf"]
    },
    {
        name: "Sundarbans",
        description: "World's largest mangrove forest",
        image: "🐅",
        attractions: ["Royal Bengal Tiger", "Mangrove Forest", "Boat Safari", "Wildlife"]
    },
    {
        name: "Sylhet",
        description: "Land of tea gardens and natural beauty",
        image: "🫖",
        attractions: ["Tea Gardens", "Jaflong", "Ratargul Swamp", "Lalakhal"]
    },
    {
        name: "Rangamati",
        description: "Lake district with tribal culture",
        image: "🏔️",
        attractions: ["Kaptai Lake", "Hanging Bridge", "Tribal Villages", "Boat Rides"]
    },
    {
        name: "Bandarban",
        description: "Highest peaks and adventure tourism",
        image: "⛰️",
        attractions: ["Nilgiri Hills", "Boga Lake", "Golden Temple", "Trekking"]
    },
    {
        name: "Saint Martin",
        description: "Only coral island of Bangladesh",
        image: "🐚",
        attractions: ["Coral Beach", "Clear Waters", "Coconut Trees", "Fresh Seafood"]
    }
];

// User data
let currentUser = null;
let userBookings = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadHotels();
    loadDestinations();
    setMinDates();
    checkAuthState();
});

// Set minimum dates for date inputs
function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkin').min = today;
    document.getElementById('checkout').min = today;
    document.getElementById('bookingCheckin').min = today;
    document.getElementById('bookingCheckout').min = today;
}

// Load and display hotels
function loadHotels(filteredHotels = bangladeshHotels) {
    const grid = document.getElementById('hotelsGrid');
    grid.innerHTML = '';

    filteredHotels.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotel-card';
        hotelCard.innerHTML = `
            <div class="hotel-image">${hotel.image}</div>
            <div class="hotel-info">
                <div class="hotel-name">${hotel.name}</div>
                <div class="hotel-location">📍 ${hotel.location}</div>
                <div class="hotel-features">
                    ${hotel.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
                <div class="hotel-rating">⭐ ${hotel.rating}/5</div>
                <div class="hotel-price">৳${hotel.price.toLocaleString()}/night</div>
                <button class="book-btn" onclick="openBookingModal(${hotel.id})">Book Now</button>
            </div>
        `;
        grid.appendChild(hotelCard);
    });
}

// Load destinations
function loadDestinations() {
    const grid = document.getElementById('destinationsGrid');
    grid.innerHTML = '';

    bangladeshDestinations.forEach(destination => {
        const destCard = document.createElement('div');
        destCard.className = 'destination-card';
        destCard.innerHTML = `
            <div class="dest-image">${destination.image}</div>
            <div class="dest-info">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="attractions">
                    ${destination.attractions.map(attraction => `<span class="attraction-tag">${attraction}</span>`).join('')}
                </div>
                <button onclick="searchByDestination('${destination.name}')">View Hotels</button>
            </div>
        `;
        grid.appendChild(destCard);
    });
}

// Search hotels by destination
function searchByDestination(destination) {
    document.getElementById('destination').value = destination;
    showHome();
    const filteredHotels = bangladeshHotels.filter(hotel => 
        hotel.location.includes(destination)
    );
    loadHotels(filteredHotels);
    
    // Scroll to hotels section
    document.querySelector('.hotels-section').scrollIntoView({ behavior: 'smooth' });
}

// Search hotels
function searchHotels(event) {
    event.preventDefault();
    const destination = document.getElementById('destination').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    if (new Date(checkout) <= new Date(checkin)) {
        alert('Check-out date must be after check-in date');
        return;
    }

    const filteredHotels = destination ? 
        bangladeshHotels.filter(hotel => hotel.location.includes(destination)) :
        bangladeshHotels;

    loadHotels(filteredHotels);
    
    if (filteredHotels.length === 0) {
        document.getElementById('hotelsGrid').innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #666;">No hotels found for your search criteria.</p>';
    }
}

// Navigation functions
function showHome() {
    document.getElementById('homeSection').style.display = 'block';
    document.getElementById('destinationsSection').style.display = 'none';
    document.getElementById('dashboardSection').style.display = 'none';
}

function showDestinations() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('destinationsSection').style.display = 'block';
    document.getElementById('dashboardSection').style.display = 'none';
}

function showDashboard() {
    if (!currentUser) {
        alert('Please login to view your bookings');
        showLogin();
        return;
    }

    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('destinationsSection').style.display = 'none';
    document.getElementById('dashboardSection').style.display = 'block';
    loadBookings();
}
