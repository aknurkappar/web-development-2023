import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView

from api.models import Company, Vacancy
from django.views import View

from api.serializers import CompanySerializer, VacancySerializer


# Create your views here.

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})


class VacancyList(View):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("New data is added!")
        return JsonResponse("Error")


class VacancyDetails(APIView):
    def get(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist as error:
            return JsonResponse({'message': str(error)}, status=400)
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)

    def put(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist:
            return JsonResponse({'message': "Vacancy is not found"}, status=400)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'message': "Updated"})
        else:
            return JsonResponse(serializer.errors, status=400)


    def delete(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist as error:
            return JsonResponse({'message': str(error)}, status=400)
        vacancy.delete()
        return JsonResponse({'message': "Deleted"}, status=200)


def company_vacancies(request, company_id):
    try:
        vacancies = Company.objects.get(id=company_id).vacancy_set.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=404)


class VacanciesTopTen(View):
    def get(self, request):
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
