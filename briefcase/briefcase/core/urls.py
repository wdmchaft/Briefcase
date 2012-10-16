#core urls
from django.conf.urls import patterns, include, url



urlpatterns = patterns('',
    url(r'^', include('briefcase.core.accounts.urls')),
    url(r'^spreadsheet/', include('briefcase.core.spreadsheet.urls')),
    url(r'^delete/', 'views.delete'),
    url(r'^rename/','views.rename'),

    )
