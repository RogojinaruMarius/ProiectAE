var onClickRowTimer;

$(document).ready(function () {

    let tableRowSelector = jid("table") + " tbody tr";

    $(tableRowSelector).click(function () {
        if (onClickRowTimer) clearTimeout(onClickRowTimer);
        let me = this;

        onClickRowTimer = setTimeout(function () {
            let selected = $(me).hasClass("tableSelectedRow");
            $(tableRowSelector).removeClass("tableSelectedRow");
            if (!selected)
                $(me).addClass("tableSelectedRow");
        }, 250);
    });

    // Disable scroll when focused on a number input.
    $('body').on('focus', 'input[type=number]', function (e) {
        $(this).on('wheel', function (e) {
            e.preventDefault();
        });
    });

    // Restore scroll on number inputs.
    $('body').on('blur', 'input[type=number]', function (e) {
        $(this).off('wheel');
    });

    // Disable up and down keys.
    $('body').on('keydown', 'input[type=number]', function (e) {
        if (e.which == 38 || e.which == 40)
            e.preventDefault();
    });
});

function jid(id) {
    return "#" + id.replace(/(:|\.|\[|\])/g, "\\$1");
}

function getSelectedRow() {
    return $(jid("table") + " tbody tr.tableSelectedRow");
}

function getSelectedId() {
    let selected = getSelectedRow();

    if (!selected || selected.length !== 1) {
        alert("You must select a row");
        return null;
    }

    return selected[0].id;
}

function stringFormat() {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i += 1) {
        var reg = new RegExp('\\{' + i + '\\}', 'gm');
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
};

function test_alert() {
    alert("Merge!");
};

function sortTable_Name() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("table");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            // Check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
};