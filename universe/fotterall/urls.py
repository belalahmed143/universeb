from django.urls import path
from . import views
urlpatterns = [
    path('board_of_directors/',views.board_of_directors,name='board_of_directors'),

    path('mission_vission/',views.mission_vission,name='mission_vission'),
    path('history_milestones/',views.history_milestones,name='history_milestones'),
    path('corporate_speech/',views.corporate_speech,name='corporate_speech'),
    path('board_meetings_agm/',views.board_meetings_agm,name='board_meetings_agm'),
    path('corporate_governance/',views.corporate_governance,name='corporate_governance'),
    path('report_statements/',views.report_statements,name='report_statements'),
    path('notice/',views.notice,name='notice'),
    path('news_events/',views.news_events,name='news_events'),
    path('advertisements/',views.advertisements,name='advertisements'),
    path('corporate_soical/',views.corporate_soical,name='corporate_soical'),
    

   
   
]

