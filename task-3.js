let userPassword = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
  console.log(message);
}

// userPassword = null;
else if (userPassword === null) {
  message = CANCELED_BY_USER;
  console.log(message);
}

// userPassword = 123;
else if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
} else {
  message = ACCESS_DENIED;
}
console.log(message);
