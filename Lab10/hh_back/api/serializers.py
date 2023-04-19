from rest_framework import serializers
from api.models import Company, Vacancy



class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'description', 'city', 'address')


class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = CompanySerializer()

    def create(self, validated_data):
        company_data = validated_data.pop("company")
        company = Company.objects.create(**company_data)
        return Vacancy.objects.create(company=company, **validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get("description", instance.description)
        instance.salary = validated_data.get("salary", instance.salary)
        company_data = validated_data.get("company", {})
        serializer = CompanySerializer(instance=instance.company, data=company_data)
        if serializer.is_valid():
            serializer.save()
        instance.save()
        return instance

