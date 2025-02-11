document.addEventListener("DOMContentLoaded", function () {
    const regions = {
        "Dar es Salaam": ["Ilala", "Kinondoni", "Temeke", "Kigamboni", "Ubungo"],
        "Arusha": ["Arusha City", "Arumeru", "Karatu", "Monduli", "Ngorongoro"],
        "Dodoma": ["Bahi", "Chamwino", "Chemba", "Dodoma City", "Kondoa"],
        "Mwanza": ["Ilemela", "Nyamagana", "Sengerema", "Misungwi", "Kwimba"]
    };

    const regionSelect = document.getElementById("region");
    const districtSelect = document.getElementById("district");

    // Load regions into the dropdown
    for (const region in regions) {
        const option = document.createElement("option");
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    }

    // Update districts based on selected region
    regionSelect.addEventListener("change", function () {
        const selectedRegion = regionSelect.value;
        districtSelect.innerHTML = '<option value="">Select District</option>'; // Reset districts

        if (selectedRegion && regions[selectedRegion]) {
            regions[selectedRegion].forEach(district => {
                const option = document.createElement("option");
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
        }
    });
});