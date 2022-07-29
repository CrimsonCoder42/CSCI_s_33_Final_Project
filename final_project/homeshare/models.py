from django.contrib.auth.models import AbstractUser
from django.db import models


# following a property should pretty much be what watch list was for eCom project
class User(AbstractUser):
    property_follow = models.ManyToManyField("Property_listing", related_name="follow_property")

# Every person who signs up gets a profile but should be able to add and edit profile.
class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    user_id = models.IntegerField()
    profilePic = models.ImageField(upload_to='profile_images', default='blank-profile-picture.png')
    bio = models.TextField(blank=True)


    def __str__(self):
        return self.user.username

# Each listing has an address and ammenities associated with it. ALong with dates on when the property is avail.
class Property_listing(models.Model):
    owner = models.ForeignKey("User", on_delete=models.CASCADE, related_name="owner_listings")
    address_1 = models.CharField(max_length=128)
    address_2 = models.CharField(max_length=128, blank=True)
    city = models.CharField(max_length=64)
    state = models.CharField(max_length=144)
    title = models.CharField(max_length=144)
    active = models.BooleanField(default=True)
    creation_time = models.DateTimeField(auto_now_add=True)
    description = models.TextField(blank=True)
    # image_url = models.ImageField(upload_to='profile_images', default='blank-property-pic')
    starting_bid = models.DecimalField(max_digits=19, decimal_places=2)
    pool = models.BooleanField(default=True)
    wifi = models.BooleanField(default=True)
    kitchen = models.BooleanField(default=True)
    free_parking = models.BooleanField(default=True)
    jacuzzi = models.BooleanField(default=True)
    washer = models.BooleanField(default=True)
    air_conditioning = models.BooleanField(default=True)
    self_check_in = models.BooleanField(default=True)
    workspace = models.BooleanField(default=True)
    pets_allowed = models.BooleanField(default=True)
    smoke_alarm = models.BooleanField(default=True)
    carbon_monoxide_alarm = models.BooleanField(default=True)
    fire_extinguisher = models.BooleanField(default=True)
    first_aid_kit = models.BooleanField(default=True)
    crib_and_high_chair = models.BooleanField(default=True)
    bathtub = models.BooleanField(default=True)
    wine_glasses = models.BooleanField(default=True)
    coffee_maker = models.BooleanField(default=True)


class LikePost(models.Model):
    post_id = models.CharField(max_length=500)
    username = models.CharField(max_length=100)

    def __str__(self):
        return self.username

class FollowersCount(models.Model):
    follower = models.CharField(max_length=100)
    user = models.CharField(max_length=100)

    def __str__(self):
        return self.user