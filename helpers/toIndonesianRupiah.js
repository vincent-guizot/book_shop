function toIndonesianRupiah(number) {
    return 'Rp' + (
        number
        .toFixed(0)
        .replace('.', ',') // replace decimal point character with ,
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    ) // use . as a separator
}

module.exports = toIndonesianRupiah;