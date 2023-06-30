export function toggleDropdown() {
  var dropdownButton = document.getElementById('dropdown-button');
  var searchInput = document.getElementById('search-input');
  var dropdownOptions = document.getElementById('dropdown-options');
  var closeOptions = document.getElementById('close-options');

  dropdownButton.addEventListener("click", () => {
    if (dropdownButton.style.display === 'none') {
      dropdownButton.style.display = 'inline-block';
      searchInput.style.display = 'none';
      dropdownOptions.style.display = 'none';
    } else {
      dropdownButton.style.display = 'none';
      searchInput.style.display = 'inline-block';
      dropdownOptions.style.display = 'block';
    }
  });

  closeOptions.addEventListener("click", () => {
    if (dropdownButton.style.display === 'none') {
      dropdownButton.style.display = 'inline-block';
      searchInput.style.display = 'none';
      dropdownOptions.style.display = 'none';
    } else {
      dropdownButton.style.display = 'none';
      searchInput.style.display = 'inline-block';
      dropdownOptions.style.display = 'block';
    }
  });

}

export function toggleDropdownAppareil() {
  var dropdownButtonAppareil = document.getElementById('dropdown-button-appareil');
  var searchInputAppareil = document.getElementById('search-input-appareil');
  var dropdownOptionsAppareil = document.getElementById('dropdown-options-appareil');
  var closeOptionsAppareil = document.getElementById('close-options-appareil');

  dropdownButtonAppareil.addEventListener("click", () => {
    if (dropdownButtonAppareil.style.display === 'none') {
      dropdownButtonAppareil.style.display = 'inline-block';
      searchInputAppareil.style.display = 'none';
      dropdownOptions.style.display = 'none';
    } else {
      dropdownButtonAppareil.style.display = 'none';
      searchInputAppareil.style.display = 'inline-block';
      dropdownOptionsAppareil.style.display = 'block';
    }
  });

  closeOptionsAppareil.addEventListener("click", () => {
    if (dropdownButtonAppareil.style.display === 'none') {
      dropdownButtonAppareil.style.display = 'inline-block';
      searchInputAppareil.style.display = 'none';
      dropdownOptionsAppareil.style.display = 'none';
    } else {
      dropdownButtonAppareil.style.display = 'none';
      searchInputAppareil.style.display = 'inline-block';
      dropdownOptionsAppareil.style.display = 'block';
    }
  });

}

export function toggleDropdownUstensil() {
  var dropdownButtonUstensil = document.getElementById('dropdown-button-ustensil');
  var searchInputUstensil = document.getElementById('search-input-ustensil');
  var dropdownOptionsUstensil = document.getElementById('dropdown-options-ustensil');
  var closeOptionsUstensil = document.getElementById('close-options-ustensil');

  dropdownButtonUstensil.addEventListener("click", () => {
    if (dropdownButtonUstensil.style.display === 'none') {
      dropdownButtonUstensil.style.display = 'inline-block';
      searchInputUstensil.style.display = 'none';
      dropdownOptionsUstensil.style.display = 'none';
    } else {
      dropdownButtonUstensil.style.display = 'none';
      searchInputUstensil.style.display = 'inline-block';
      dropdownOptionsUstensil.style.display = 'block';
    }
  });

  closeOptionsUstensil.addEventListener("click", () => {
    if (dropdownButtonUstensil.style.display === 'none') {
      dropdownButtonUstensil.style.display = 'inline-block';
      searchInputUstensil.style.display = 'none';
      dropdownOptionsUstensil.style.display = 'none';
    } else {
      dropdownButtonUstensil.style.display = 'none';
      searchInputUstensil.style.display = 'inline-block';
      dropdownOptionsUstensil.style.display = 'block';
    }
  });

}