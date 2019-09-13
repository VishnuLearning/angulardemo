from django.urls import path
from . import views

urlpatterns = [
    path('toppings/', views.ToppingList.as_view(), name='list_toppings'),
]