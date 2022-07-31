# Generated by Django 4.0.6 on 2022-07-31 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homeshare', '0002_followerscount_likepost_property_listing_profile_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='profilePic',
            field=models.ImageField(default='Henry_cavil.jpg', upload_to='profile_images'),
        ),
        migrations.AddField(
            model_name='profile',
            name='username',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='property_listing',
            name='image_url',
            field=models.ImageField(default='pic1.jpg', upload_to='profile_images'),
        ),
    ]
