# Import Various Modules

| Package/Module/Function Names | Import Statement                                    | Use Case                              |
| ----------------------------- | --------------------------------------------------- | ------------------------------------- |
| `get_asgi_application`        | `from django.core.asgi import get_asgi_application` | Asynchronous Server Gateway Interface |
| `get_wsgi_application`        | `from django.core.wsgi import get_wsgi_application` | Web Server Gateway Interface          |
| `Path`                        | `from pathlib import Path`                          | Object-oriented filesystem paths      |
| `admin`                       | `from django.contrib import admin`                  | Admin application                     |
| `path`                        | `from django.urls import path`                      | For url mapping                       |
| `HttpResponse`                | `from django.http import HttpResponse`              | Return HttpResponse for a HttpRequest |
| `include`                     | `from django.urls import include`                   | `include` use for include application level `urls.py` file in django project `urls.py ... List: urlpatterns` file.
## Some Main Packages

| Package Name     | Modules/Functions                                                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `django.contrib` | `admin`, `auth`, `contenttypes`, `flatpages`, `gis`, `humanize`, `messages`, `postgres`, `redirects`, `sessions`, `sites`, `sitemaps`, `syndication` |
|                  |

## Usages

### `admin`

```py
from django.contrib import admin

# register your model
admin.site.register(model_name)
```
