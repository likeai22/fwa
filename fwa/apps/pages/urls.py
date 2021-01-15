from rest_framework.routers import SimpleRouter
from .views import MenuView

router = SimpleRouter()
router.register('menu', MenuView, basename='menu')

urlpatterns = router.urls

