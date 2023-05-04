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


