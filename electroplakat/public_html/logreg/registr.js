function registerUser() {
  const registrationData = {
    name: document.getElementById('name').value,
    surname: document.getElementById('surname').value,
    patronymic: document.getElementById('patronymic').value,
    country: document.getElementById('country').value,
    city: document.getElementById('city').value,
    phone: document.getElementById('phone').value,
    university: document.getElementById('university').value,
    date: document.getElementById('date').value,
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  };

  fetch('http://localhost:8080/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registrationData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Обработка успешного ответа от сервера
    console.log('Успешно зарегистрирован:', data);
    alert('Регистрация прошла успешно!');
  })
  .catch(error => {
    // Обработка ошибок при регистрации
    console.error('Произошла ошибка при регистрации:', error);
    alert('Произошла ошибка при регистрации. Пожалуйста, попробуйте еще раз.');
  });
}

function loginUser() {
  const loginData = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
  };

  fetch('http://localhost:8080/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Обработка успешного ответа от сервера
    console.log('Вход выполнен успешно:', data);
    alert('Вход выполнен успешно!');
    // В data должен быть токен JWT, который можно сохранить и использовать для последующих запросов
  })
  .catch(error => {
    // Обработка ошибок при входе
    console.error('Неправильный логин или пароль:', error);
    alert('Неправильный логин или пароль. Пожалуйста, проверьте введенные данные.');
  });
}
  