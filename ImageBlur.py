from PIL import Image, ImageFilter
from io import BytesIO
import requests


class ImageBlur():

    def __init__(self,image_url):
        response = requests.get(image_url)
        self.image = Image.open(BytesIO(response.content))

    def blur_image(self):
        blurry_image = self.image.filter(ImageFilter.GaussianBlur(radius=30))
        return blurry_image

    def show_blur_image(self):
        image = self.blur_image()
        image.show()
        
    def unblur_image(self):
        return self.image

    def show_unblurred_image(self):
        image = self.unblur_image()
        image.show()