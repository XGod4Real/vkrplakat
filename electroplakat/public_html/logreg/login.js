// Допустим, у вас есть объект с данными входа пользователя
const loginData = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
};

// Отправляем данные на бэкенд для аутентификации
fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
})
.then(response => response.json())
.then(data => {
    // Обработка ответа от бэкенда
    if (data.error) {
        console.error('Ошибка при входе:', data.error);
        // Вывод сообщения об ошибке пользователю
    } else {
        console.log('Вход успешен:', data.token);
        // Вывод сообщения об успешном входе пользователю
        // Токен может быть сохранен и использован для последующих запросов
    }
})
.catch(error => {
    console.error('Ошибка при отправке запроса:', error);
    // Вывод сообщения об ошибке пользователю
});
