<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

$('#ratingForm').on('submit', function(event) {
  event.preventDefault(); // отмена стандартного поведения формы при отправке
  var rating = $('input[name=rating]:checked').val(); // Получаем выбранную оценку
  alert('Вы поставили оценку ' + rating); // Выводим сообщение с выбранной оценкой
});

// Функция, которая будет вызываться при отправке формы
function handleFormSubmit(event) {
  event.preventDefault(); // Отменяем стандартное поведение формы

  var rating = $('input[name=rating]:checked').val(); // Получаем выбранную оценку
  alert('Вы поставили оценку ' + rating); // Выводим сообщение с выбранной оценкой

  $('#ratingForm').append('<p>Оценка отправлена!</p>'); // Добавляем сообщение на страницу
}

// Назначаем функцию handleFormSubmit на событие отправки формы
$('#ratingForm').submit(handleFormSubmit);