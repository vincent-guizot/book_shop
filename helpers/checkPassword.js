const bcrypt = require('bcryptjs');

function checkPassword(password, hash) {
    return bcrypt.compare(password, hash);
}

function checkPasswordSync(password, hash) {
    return bcrypt.compareSync(password, hash);
}

module.exports = { checkPassword, checkPasswordSync };