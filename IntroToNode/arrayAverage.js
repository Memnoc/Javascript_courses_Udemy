var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));
console.log(averageTwo(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));
console.log(averageTwo(scores2));


function average(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    var avg = sum / arr.length;

    return Math.round(avg);
}

function averageTwo(arr) {
    let sum = 0;
    arr.forEach(function (counter) {
        sum += counter;
    });

    var avg2 = sum / arr.length;

    return Math.round(avg2);
}
