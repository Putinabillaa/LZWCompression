from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .lzw import compress, decompress
import json

@csrf_exempt
def compress_text(request):
    data = json.loads(request.body)
    text = data.get('text', '')
    opt = data.get('opt', '')
    compressed = compress(text, opt)
    return JsonResponse({'compressed': compressed})

@csrf_exempt
def decompress_text(request):
    data = json.loads(request.body)
    text = data.get('text', '')
    opt = data.get('opt', '')
    try:
        decompressed = decompress(text, opt)
    except ValueError as error:
        decompressed = ""
    return JsonResponse({'decompressed': decompressed})
