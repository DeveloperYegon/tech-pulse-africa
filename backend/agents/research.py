import scrapy
from langchain.llms import OpenAI
from django.core.serializers import serialize

class TechNewsSpider(scrapy.Spider):
    name = "tech_news"
    start_urls = ["https://techcrunch.com", "https://african.tech"]

    def parse(self, response):
        for article in response.css("article"):
            title = article.css("h2::text").get()
            content = article.css("p::text").get()
            llm = OpenAI(api_key="your-key")  # Replace with xAI API if needed
            summary = llm(f"Summarize: {content}")
            yield {
                "title": title,
                "summary": summary,
                "category": "AI",  # Add logic to classify
                "source": response.url,
            }