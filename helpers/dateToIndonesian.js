function dateToIndonesian(date) {
    const monthDictionary = ['Januari', 'Feburari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    return `${date.getDate()} ${monthDictionary[date.getMonth()]} ${date.getFullYear()}`
}

module.exports = dateToIndonesian;