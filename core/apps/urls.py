
from django.urls import path
from apps.views import RegisterView
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(schema=None), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(schema=None), name='token_refresh'),
]
