from djongo import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.URLField(blank=True)
    author = models.CharField(max_length=100)
    publish_date = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=50)
    tags = models.ListField(models.CharField(max_length=50), blank=True)

    class Meta:
        abstract = False

class NewsletterSubscriber(models.Model):
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)

class Bookmark(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)