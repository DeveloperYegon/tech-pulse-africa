from celery import shared_task
import requests

@shared_task
def publish_articles():
    articles = requests.get("http://localhost:8000/api/articles/pending").json()
    for article in articles:
        requests.post("http://localhost:8000/api/articles/", json=article)