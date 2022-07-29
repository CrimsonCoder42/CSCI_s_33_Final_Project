import json
from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Count
from django.core.paginator import Paginator

from .models import User


def feed(request):
    return render(request, "homeshare/feed.html")


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("feed"))
        else:
            return render(request, "homeshare/login_register.html", {
                "login_message": "Invalid username and/or password."
            })
    else:
        return render(request, "homeshare/login_register.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("feed"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "homeshare/login_register.html", {
                "register_message": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(request, "homeshare/login_register.html", {
                "register_message": "Username already taken."
            })

        login(request, user)
        return HttpResponseRedirect(reverse("feed"))
    else:
        return render(request, "homeshare/login_register.html")