from django.shortcuts import render
from api.models import Product, Category
from django.http.response import JsonResponse

# Create your views here.

def product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status=400)
    return JsonResponse(product.to_json())

def category_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)

def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
    except Product.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status=400)
    return JsonResponse(category.to_json())

def category_products(request, id):
    try:
        category = Category.objects.get(id=id)
        products = Product.objects.all()
    except Product.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status=400)
    category_products_json = [product.to_json() for product in products if product.category == category.name]
    return JsonResponse(category_products_json, safe=False)