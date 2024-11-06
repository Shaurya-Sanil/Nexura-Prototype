// JavaScript to handle filtering and searching
const searchBar = document.getElementById('searchBar');
const engagementFilter = document.getElementById('engagementFilter');
const ageFilter = document.getElementById('ageFilter');
const creatorContainer = document.getElementById('creatorContainer');
const creatorCards = document.querySelectorAll('.creator-card');

// Search by name
searchBar.addEventListener('input', () => {
    const searchText = searchBar.value.toLowerCase();
    creatorCards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        card.style.display = name.includes(searchText) ? '' : 'none';
    });
});

// Filter by engagement and age
function filterCreators() {
    const engagementOrder = engagementFilter.value;
    const ageRange = ageFilter.value;

    creatorCards.forEach(card => {
        const engagement = parseInt(card.getAttribute('data-engagement'));
        const age = card.getAttribute('data-age');
        let isMatch = true;

        if (ageRange && age !== ageRange) {
            isMatch = false;
        }

        card.style.display = isMatch ? '' : 'none';
    });

    if (engagementOrder) {
        const sortedCards = Array.from(creatorCards).sort((a, b) => {
            const aEngagement = parseInt(a.getAttribute('data-engagement'));
            const bEngagement = parseInt(b.getAttribute('data-engagement'));
            return engagementOrder === 'high' ? bEngagement - aEngagement : aEngagement - bEngagement;
        });

        sortedCards.forEach(card => creatorContainer.appendChild(card));
    }
}

engagementFilter.addEventListener('change', filterCreators);
ageFilter.addEventListener('change', filterCreators);
