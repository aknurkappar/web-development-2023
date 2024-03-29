# Generated by Django 4.1.7 on 2023-04-02 21:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_rename_categoty_category"),
    ]

    operations = [
        migrations.AddField(
            model_name="product", name="count", field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name="product",
            name="description",
            field=models.TextField(default=""),
        ),
        migrations.AddField(
            model_name="product",
            name="is_active",
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name="product", name="price", field=models.FloatField(default=0),
        ),
    ]
