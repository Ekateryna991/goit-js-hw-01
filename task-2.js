const invoice = 100;
const stock = 100;
let message =
  stock <= 100
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров!';

console.log(message);

if (invoice === 150) {
  message = 'На складе недостаточно товаров!';
}
console.log(message);
