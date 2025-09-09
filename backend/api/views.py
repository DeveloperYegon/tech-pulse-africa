from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Article
from .serializers import ArticleSerializer

class ArticleListCreate(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAdminUser]  # POST for admins only

class ArticleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [permissions.IsAdminUser]  # PUT/DELETE for admins