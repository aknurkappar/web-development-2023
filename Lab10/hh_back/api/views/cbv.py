from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Vacancy, Company
from api.serializers import VacancySerializer, CompanySerializer


class VacanciesTopTenAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': "New data is added!"}, status=status.HTTP_200_OK)
        return Response({'message': "Such a company already exists or server side error"}, status=status.HTTP_400_BAD_REQUEST)


class VacancyDetailsAPIView(APIView):
    def get(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist:
            return Response({'message': "Vacancy is not found"}, status=status.HTTP_400_BAD_REQUEST)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    def put(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist:
            return Response({'message': "Vacancy is not found"}, status=status.HTTP_400_BAD_REQUEST)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': "Updated"})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist:
            return Response({'message': "Vacancy is not found"}, status=status.HTTP_400_BAD_REQUEST)
        vacancy.delete()
        return Response({'message': "Deleted"}, status=status.HTTP_200_OK)

