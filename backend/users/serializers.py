from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    """
    Serializer para el modelo de Usuario.
    Se usa para crear nuevos usuarios (registro).
    """
    class Meta:
        model = User
        # Campos que vamos a exponer en nuestra API
        fields = ('id', 'username', 'email', 'password')
        # Configuraciones extra para los campos
        extra_kwargs = {
            'password': {'write_only': True, 'min_length': 8},
            'email': {'required': True}
        }

    def create(self, validated_data):
        """
        Este método se llama cuando creamos una nueva instancia de User.
        Nos aseguramos de hashear la contraseña en lugar de guardarla en texto plano.
        """
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user