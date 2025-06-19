# Expense-Tracker-API


Метод	URL	Назначение
GET	/api/expenses/	Получить список всех расходов текущего пользователя
GET	/api/expenses/?period=past_week	За последнюю неделю
GET	/api/expenses/?period=past_month	За последний месяц
GET	/api/expenses/?period=last_3_months	За последние 3 месяца
GET	/api/expenses/?start_date=YYYY-MM-DD&end_date=YYYY-MM-DD	Фильтр по диапазону дат
POST	/api/expenses/	Создать новый расход
GET	/api/expenses/<id>/	Получить один конкретный расход
PATCH	/api/expenses/<id>/	Частично обновить расход
PUT	/api/expenses/<id>/	Полностью заменить расход
DELETE	/api/expenses/<id>/	Удалить расход

Bearer TOken