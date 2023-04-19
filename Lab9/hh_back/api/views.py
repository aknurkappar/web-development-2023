from django.http import JsonResponse
from api.models import Company, Vacancy


# Create your views here.

def company_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status=400)
    return JsonResponse(company.to_json())


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as error:
        return JsonResponse({'message': str(error)}, status=400)
    return JsonResponse(vacancy.to_json())


def company_vacancies(request, company_id):
    try:
        vacancies = Company.objects.get(id=company_id).vacancy_set.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=404)


def vacancies_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancies_salary_more_than_200000(request):
    vacancies = Vacancy.objects.filter(salary__gte=200000)
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)