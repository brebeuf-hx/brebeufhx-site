#!/usr/local/bin/python3
import os
from PIL import Image

INPUT_DIR = "./src/assets/sponsors"
OUTPUT_DIR = "./src/assets/sponsors/resized"
SIZES = [
    ["nord.png", "96x79"],
    ["wolfram.webp", "96x75"],
    ["incogni black.png", "96x32"],
    ["pouletrouge.png", "101x160"],
    ["dominos.png", "144x145"],
    ["nordsec.png", "96x96"],
    ["nordpass.png", "96x87"]
]

os.makedirs(OUTPUT_DIR, exist_ok=True)

def resize_and_convert(filename, size_str):
    width, height = map(int, size_str.lower().split("x"))
    image_path = os.path.join(INPUT_DIR, filename)
    image_name = os.path.splitext(filename)[0].replace(" ", "_")

    try:
        with Image.open(image_path) as img:
            # 1x resize
            one_x = img.resize((width, height), Image.LANCZOS)
            one_x.save(os.path.join(OUTPUT_DIR, f"{image_name}-1x.webp"), format="WEBP", quality=75)

            # 2x resize
            two_x = img.resize((width * 2, height * 2), Image.LANCZOS)
            two_x.save(os.path.join(OUTPUT_DIR, f"{image_name}-2x.webp"), format="WEBP", quality=75)

    except Exception as e:
        print(f"failed to process {filename}: {e}")


if __name__ == "__main__":
  for (imagename, size) in SIZES:
      resize_and_convert(imagename, size)
  print("all images processed successfully")
