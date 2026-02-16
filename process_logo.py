
from rembg import remove
from PIL import Image
import io
import os

input_path = 'public/logo.jpeg'
output_path = 'public/logo.png'

# Read input image
with open(input_path, 'rb') as i:
    input_image = i.read()

# Remove background
output_image = remove(input_image)

# Convert to PIL Image for cropping
img = Image.open(io.BytesIO(output_image))

# Get bounding box of non-transparent pixels
bbox = img.getbbox()

if bbox:
    # Crop the image to the content
    img_cropped = img.crop(bbox)
    # Save the cropped image
    img_cropped.save(output_path)
    print(f"Successfully processed logo. Saved to {output_path}")
else:
    print("Could not detect content to crop.")
    # Save uncrossed if bbox fails (fallback)
    with open(output_path, 'wb') as o:
        o.write(output_image)
