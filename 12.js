console.log('start');
let tri = 0
let prime = []
nextPrime()
let divider = 0
for (let n = 1; true; n++) {
    tri += n
    divider = numDivider(tri)
    if (divider >= 500) {
        console.log(tri, 'divider:' + divider);
        break
    }
}
function numDivider(num) {
    let factors = []
    for (let i = 0; num > 1; false) {
        let p = prime[i] || nextPrime()

        if (num % p == 0) {
            factors.push(p)
            num = num / p
        } else {
            i++
        }
    }
    let pangkat = [0]
    let index = 0
    factors.map((f, i) => {
        if (i == 0 || factors[i] == factors[i - 1]) {
            pangkat[index]++
        } else {
            index++
            pangkat[index] = 1
        }
    })
    let divider = 1
    pangkat.map(p => {
        divider *= (p + 1)
    })
    return divider
}
function nextPrime() {
    for (let n = (prime[prime.length - 1] + 1) || 2; true; n++) {
        let f = 0;
        for (d = 1; d <= n; d++) {
            if (n % d == 0) {
                f++;
            }
        }
        if (f == 2) {
            prime.push(n)
            return n
        }
    }
}
console.log('finish');
