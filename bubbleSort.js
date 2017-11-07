function bubbleSort() {
    let tileStrip = document.querySelectorAll('tile-strip')

    for (let i = 0; i < tileStrip.length; i++) {
        console.log('check this out', tileStrip[i])
    }
}

function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubbleSort();