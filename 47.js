let prime = []
function primeFactor(num) {
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
    return factors.filter((x, i) => factors.indexOf(x) == i)

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
const target = 4
for (n = 1; true; n++) {
    let pf = []
    for (x = 0; x < target; x++) {
        pf.push(primeFactor(n + x))
    }
    if (pf.filter(x => x.length == target).length == target) {
        console.log(n, pf);
        break
    }
}
