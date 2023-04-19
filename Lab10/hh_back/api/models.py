from django.db import models
from django.db.models import ForeignKey


# Create your models here.


class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default="")
    city = models.CharField(max_length=255)
    address = models.TextField(default="")

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default="")
    salary = models.FloatField(default=0)
    company = ForeignKey(Company, on_delete=models.CASCADE)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company
        }