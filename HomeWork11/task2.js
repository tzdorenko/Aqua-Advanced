function fetchTodo(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json())
        .catch((error) => {
            console.error(`Помилка при отриманні todo ${id}:`, error);
        });
}
function fetchUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .catch((error) => {
            console.error(`Помилка при отриманні user ${id}:`, error);
        });
}
const promises = [
    fetchTodo(1),
    fetchTodo(2),
    fetchTodo(3),
    fetchTodo(4),
    fetchTodo(5),
    fetchTodo(6),
    fetchTodo(7),
    fetchTodo(8),
    fetchTodo(9),
    fetchTodo(10),
    fetchTodo(11),
    fetchUser(1),
    fetchUser(2),
    fetchUser(3),
    fetchUser(4),
    fetchUser(5),
    fetchUser(6),
    fetchUser(7),
];
Promise.all(promises)
    .then((results) => {
        console.log('Результати Promise.all:');
        results.forEach((result, index) => {
            console.log(`Результат ${index + 1}:`, result);
        });
    })
    .catch((error) => {
        console.error('Помилка в Promise.all:', error);
    });
Promise.race(promises)
    .then((result) => {
        console.log('Перший завершений результат (Promise.race):', result);
    })
    .catch((error) => {
        console.error('Помилка в Promise.race:', error);
    });
