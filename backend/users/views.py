from rest_framework import generics
from .serializers import UserSerializer

class UserCreateView(generics.CreateAPIView):
    """
    Vista para crear un nuevo usuario.
    Solo permite peticiones POST.
    """
    serializer_class = UserSerializer