from django.db import models
from django.contrib.auth.models import User


class Expense(models.Model):
    CategoryChoices = [
        ('groceries', 'Groceries'),
        ('leisure', 'Leisure'),
        ('electronics', 'Electronics'),
        ('utilities', 'Utilities'),
        ('clothing', 'Clothing'),
        ('health', 'Health'),
        ('others', 'Others'),
    ]