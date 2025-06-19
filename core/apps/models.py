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

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='expenses')
    title = models.CharField(max_length=255)
    amount = models.IntegerField()
    category = models.CharField(max_length=20, choices=CategoryChoices)
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - {self.anount}"