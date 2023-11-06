from PIL import Image, ImageFilter
from io import BytesIO
import base64
import requests


class ImageBlur():

    def __init__(self,image_url):
        response = requests.get(image_url)
        self.image = Image.open(BytesIO(response.content))

    def encode_image(self,image):
        buffered = BytesIO()
        image.save(buffered, format="JPEG")
        image_data = base64.b64encode(buffered.getvalue()).decode("utf-8")
        return f"data:image/jpeg;base64,{image_data}"

    def blur_image(self):
        blurry_image = self.image.filter(ImageFilter.GaussianBlur(radius=30))

        return self.encode_image(blurry_image)

    def show_blur_image(self):
        image = self.blur_image()
        image.show()
        
    def unblur_image(self):
        return self.image

    def show_unblurred_image(self):
        image = self.unblur_image()
        image.show()