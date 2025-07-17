async function fetchTodo() {
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!responce.ok) {
            throw new Error('Todo failed');
        }
        const todo = await responce.json();
        return todo;
    } catch (error) {
        console.error('Сталася помилка: ', error);
        throw error;
    }
}
async function fetchUser() {
    try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!responce.ok) {
            throw new Error('User failed');
        }
        const user = await responce.json();
        return user;
    } catch (error) {
        console.error('Сталася помилка: ', error);
        throw error;
    }
}

async function fetchAll() {
    try {
        const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
        console.log('Результата Promise.All: ', { todo, user });
    } catch (error) {
        console.error('Помилка in FetchAll: ', error);
    }
}

async function fetchRace() {
    try {
        const result = await Promise.race([fetchTodo(), fetchUser()]);
        console.log('Результата Promise.race: ', result);
    } catch (error) {
        console.error('Помилка in FetcRace: ', error);
    }
}
fetchAll();
fetchRace();
