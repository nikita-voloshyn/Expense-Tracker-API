from datetime import date, timedelta

from django.shortcuts import render
from django.utils.dateparse import parse_date
from rest_framework import generics, permissions, viewsets
from.serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from .models import Expense
from .serializers import ExpenseSerializer
from datetime import date, timedelta
from django.utils.dateparse import parse_date

from .serializers import RegisterSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = RegisterSerializer


class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset = Expense.objects.filter(user=user)

        period = self.request.query_params.get('period')
        start_date = self.request.query_params.get('start_date')
        end_date = self.request.query_params.get('end_date')

        today = date.today()

        if period == 'past_week':
            start = today - timedelta(days=7)
            queryset = queryset.filter(date_created__range=(start, today))
        elif period == 'past_month':
            start = today - timedelta(days=30)
            queryset = queryset.filter(date_created__range=(start, today))
        elif period == 'last_3_months':
            start = today - timedelta(days=90)
            queryset = queryset.filter(date_created__range=(start, today))
        elif start_date and end_date:
            queryset = queryset.filter(date_created__range=(start_date, end_date))

        return queryset.order_by('-date_created')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

