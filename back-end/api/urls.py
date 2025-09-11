from rest_framework import routers
from .views import ExampleViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r"examples", ExampleViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
