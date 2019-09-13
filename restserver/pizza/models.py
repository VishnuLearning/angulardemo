from django.db import models

# Create your models here.

class Topping(models.Model):
    name = models.CharField(max_length=30)
    image = models.ImageField(upload_to='toppings/')
    cost = models.IntegerField()
