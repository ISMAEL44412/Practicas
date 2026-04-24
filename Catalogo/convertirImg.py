from PIL import Image
import os

lista = os.listdir('./img/')
ruta = './img/'
ruta_nueva = './webp/'
for archivo in lista:
    if(archivo.lower().endswith('.jpg') or archivo.lower().endswith('.png')):

        img = os.path.join(ruta, archivo)

        archivo_abierto = Image.open(img)
        # print(archivoAbierto.format, archivoAbierto.size, archivoAbierto.mode)
        archivo_nuevo = os.path.splitext(archivo)[0] + '.webp'

        ruta_salida = os.path.join(ruta_nueva, archivo_nuevo)

        archivo_abierto.save(ruta_salida, 'webp')