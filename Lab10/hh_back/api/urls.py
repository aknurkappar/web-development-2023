from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_details),
    path('vacancies/', views.VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', views.VacancyDetailsAPIView.as_view()),
    path('companies/<int:company_id>/vacancies/', views.company_vacancies),
    path('vacancies/top_ten/', views.VacanciesTopTenAPIView.as_view()),
]