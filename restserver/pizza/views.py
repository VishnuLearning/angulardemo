from django.shortcuts import render
from rest_framework import generics
from .models import Topping
from .serializers import ToppingSerializer

class ToppingList(generics.ListCreateAPIView):
    queryset = Topping.objects.all()
    serializer_class = ToppingSerializer