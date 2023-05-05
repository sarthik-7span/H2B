$(document).ready(function () {

    // Menu Open-close Jquery start

    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        $('.header__nav').toggle()
    });

    // Menu Open-close Jquery end

    // data-table jquery start
    $('#myTable').dataTable({
        language: {
            searchPlaceholder: "Search",
            search: ""
        },
        // responsive: true,
        "bLengthChange": false,
        "bFilter": true,
        "bInfo": false,
        "bAutoWidth": false,
        pagingType: 'full_numbers',
        "iDisplayLength": 6,
        // scrollX: true
    });
    $('.dataTables_filter input').addClass('table-search');
    $('#myTable_paginate span').addClass('pagination-btn');
});



// <<<<< --autocomplete - start >>>>


function setupAutocomplete(inputId, resultsId, data) {
    const searchInput = document.getElementById(inputId);
    const autocompleteResults = document.getElementById(resultsId);

    // Function to display autocomplete results
    function displayResults(results) {
        const html = results.map(result => `<a href="#">${result}</a>`).join('');
        autocompleteResults.innerHTML = html;
        autocompleteResults.style.display = 'block';
    }

    // Function to filter data based on search query
    function filterData(query) {
        return data.filter(item => item.toLowerCase().startsWith(query.toLowerCase()));
    }

    // Event listener for input changes
    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        if (query.length >= 1) {
            const results = filterData(query);
            displayResults(results);
        } else {
            autocompleteResults.style.display = 'none';
        }
    });

    // Event listener to hide autocomplete results when user clicks outside of input
    document.addEventListener('click', event => {
        if (!event.target.closest(`#${resultsId}`) && event.target !== searchInput) {
            autocompleteResults.style.display = 'none';
        }
    });
}

// Data for input 1
const dataName = [
    'Apple',
    'Amaa',
    'Apple',
    'Amaa',
    'Apple',
    'Amaa',
    'Apple',
    'Amaa',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grapefruit',
    'Honeydew',
    'Iced Tea',
    'Jackfruit'
];

// Data for input 2
const dataJob = [
    'Lemon',
    'Mango',
    'Lemon',
    'Mango',
    'Lemon',
    'Mango',
    'Nectarine',
    'Orange',
    'Papaya',
    'Quince',
    'Raspberry',
    'Strawberry',
    'Tangerine',
    'Ugli Fruit'
];

// Data for input 3
const dataCity = [
    'Watermelon',
    'Xigua',
    'Yellow Watermelon',
    'Zucchini',
    'Watermelon',
    'Xigua',
    'Yellow Watermelon',
    'Zucchini',
    'Watermelon',
    'Xigua',
    'Yellow Watermelon',
    'Zucchini'
];

setupAutocomplete('form-name', 'autocomplete-results-name', dataName);
setupAutocomplete('form-job', 'autocomplete-results-job', dataJob);
setupAutocomplete('form-city', 'autocomplete-results-city', dataCity);


// <<<<< --autocomplete - End >>>>
