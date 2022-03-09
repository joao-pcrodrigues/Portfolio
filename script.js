function socialsOver() {
    $("ul #socialIcon").removeClass("bi-caret-down");
    $("ul #socialIcon").addClass("bi-caret-down-fill");
}

function socialsOut() {
    $("ul #socialIcon").removeClass("bi-caret-down-fill");
    $("ul #socialIcon").addClass("bi-caret-down");
}

function navmenuOver() {
    $("ul #navIcon").removeClass("bi-caret-left");
    $("ul #navIcon").addClass("bi-caret-left-fill");
}

function navmenuOut() {
    $("ul #navIcon").removeClass("bi-caret-left-fill");
    $("ul #navIcon").addClass("bi-caret-left");
}