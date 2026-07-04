const fish = ['nemo']
const largeArr = new Array(10000000).fill('sth')

function findNemo(arr) {
    const t0 = performance.now()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'nemo') {
            console.log('Found NEMO')
        }
    }
    const t1 = performance.now()
    console.log('Call to find Nemo took ' + (t1-t0) + ' milisecond(s)')
}

function findFirstItem(items) {
    return items.length > 1 ? items[0] : null
}

findNemo(largeArr)