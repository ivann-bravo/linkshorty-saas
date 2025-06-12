from django.contrib import admin
from .models import Link, Click

class ClickInline(admin.TabularInline):
    model = Click
    extra = 0  # No mostrar formularios vacíos adicionales
    readonly_fields = ('clicked_at', 'ip_address', 'user_agent')
    can_delete = False  # No permitir borrar clicks desde el admin

@admin.register(Link)
class LinkAdmin(admin.ModelAdmin):
    list_display = ('short_code', 'original_url', 'owner', 'created_at')
    search_fields = ('short_code', 'original_url', 'owner__username')
    list_filter = ('created_at',)
    inlines = [ClickInline]

# No es necesario registrar Click por separado si lo mostramos embebido
