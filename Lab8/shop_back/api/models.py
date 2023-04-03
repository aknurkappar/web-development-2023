from django.db import models


# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=0)
    description = models.TextField(default="")
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    category = models.CharField(max_length=255, default="")

    def to_json(self):
        return {
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
            'category': self.category
        }


class Category(models.Model):
    name = models.CharField(max_length=255)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }
