from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_detail),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:id>/', views.vacancy_detail),
    path('companies/<int:company_id>/vacancies/', views.company_vacancies),
    path('vacancies/top_ten/', views.vacancies_top_ten),
    path('vacancies/salary_more_than_200000', views.vacancies_salary_more_than_200000)

]