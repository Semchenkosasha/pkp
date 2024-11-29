google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(draw);
google.charts.setOnLoadCallback(drawQuantity);
google.charts.setOnLoadCallback(drawTotalPrice);
google.charts.setOnLoadCallback(drawPrice);

function draw() {
    let res = [['Название', 'Количество']];

    for (let i = 0; i < categoryString.length; i++) {
        res.push([categoryString[i], categoryFloat[i]]);
    }

    var data = google.visualization.arrayToDataTable(res);

    let options = {
        title: 'Прибыльные категории',
        hAxis: {title: 'Название'},
        vAxis: {title: 'Количество'},
        bar: {groupWidth: "80%"},
        legend: {position: "none"}
    };

    let chart = new google.visualization.ColumnChart(document.getElementById('draw'));
    chart.draw(data, options);

}

function drawQuantity() {
    let res = [['Название', 'Количество']];

    for (let i = 0; i < stringQuantity.length; i++) {
        res.push([stringQuantity[i], intQuantity[i]]);
    }

    var data = google.visualization.arrayToDataTable(res);

    let options = {
        title: '5 продаваемых',
        hAxis: {title: 'Название'},
        vAxis: {title: 'Количество'},
        bar: {groupWidth: "80%"},
        legend: {position: "none"}
    };

    let chart = new google.visualization.ColumnChart(document.getElementById('drawQuantity'));
    chart.draw(data, options);
}

function drawTotalPrice() {
    let res = [['Название', 'Прибыль', {role: 'style'}]];

    for (let i = 0; i < stringTotalPrice.length; i++) {
        res.push([stringTotalPrice[i], floatTotalPrice[i], "green"]);
    }

    var data = google.visualization.arrayToDataTable(res);

    let options = {
        title: '5 прибыльных',
        hAxis: {title: 'Название'},
        vAxis: {title: 'Прибыль'},
        bar: {groupWidth: "80%"},
        legend: {position: "none"}
    };

    let chart = new google.visualization.ColumnChart(document.getElementById('drawTotalPrice'));
    chart.draw(data, options);
}

function drawPrice() {
    let res = [['Название', 'Цена', {role: 'style'}]];

    for (let i = 0; i < stringPrice.length; i++) {
        res.push([stringPrice[i], floatPrice[i], "red"]);
    }

    var data = google.visualization.arrayToDataTable(res);

    let options = {
        title: 'Распределение стоимости',
        hAxis: {title: 'Название'},
        vAxis: {title: 'Цена'},
        bar: {groupWidth: "80%"},
        legend: {position: "none"}
    };

    let chart = new google.visualization.ColumnChart(document.getElementById('drawPrice'));
    chart.draw(data, options);
}