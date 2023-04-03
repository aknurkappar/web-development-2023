from django.contrib import admin
from api.models import Product
from api.models import Category

# Register your models here.

admin.site.register((Product, Category))
