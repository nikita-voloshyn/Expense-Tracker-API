# 💸 Expense Tracker API

API-сервис для отслеживания пользовательских расходов. Поддерживает регистрацию и авторизацию через JWT, управление расходами, фильтрацию по датам и просмотр статистики.

---

## 🚀 Возможности

- Регистрация и вход пользователя
- Аутентификация через JWT (access / refresh токены)
- CRUD-операции для расходов
- Категории расходов:
  - Groceries
  - Leisure
  - Electronics
  - Utilities
  - Clothing
  - Health
  - Others
- Фильтрация по периодам:
  - past_week
  - past_month
  - last_3_months
  - custom (по `start_date` и `end_date`)
- Сортировка по дате создания, сумме и другим полям
- Swagger документация

```bash

python3 -m venv venv

source venv/bin/activate

pip install -r requirements.txt

python3.11 core/manage.py makemigration  
python3.11 core/manage.py migrate

python3.11 core/manage.py createsuperuser
```
---
## 🔐 Аутентификация
Используется JWT через djangorestframework-simplejwt.

# 🔸 Регистрация
- POST /api/auth/register/

json:
{
  "username": "testuser",
  "email": "test@test.com",
  "password": "secret"
}

# 🔸 Вход
- POST /api/auth/login/

json:

{
  "username": "testuser",
  "password": "secret"
}
 # Также 
- использовать Authorization: Bearer <access_token>

----
https://roadmap.sh/projects/expense-tracker-api