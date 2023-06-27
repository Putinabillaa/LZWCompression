''' lzw algorithm '''
def compress(text, opt):
    ''' lzw compress '''
    dict = {chr(i): i for i in range(256)}
    next_code = 256
    res = []

    curr = ''
    for char in text:
        seq = curr + char
        if seq in dict:
            curr = seq
        else:
            if(opt == '1'):
                res.append(bin(dict[curr]).replace("0b", ""))
            else: res.append(dict[curr])
            dict[seq] = next_code
            next_code += 1
            curr = char

    if curr:
        if(opt == '1'):
            res.append(bin(dict[curr]).replace("0b", ""))
        else: res.append(dict[curr])

    return ' '.join(map(str, res))

def decompress(text, opt):
    ''' lzw decompress '''
    if(opt == '1'):
        splitted_text = text.split(' ')
        for i in range (0, len(splitted_text)):
            splitted_text[i] = int(splitted_text[i], 2)
    else: splitted_text = list(map(int, text.split(' ')))
    dict = {i: chr(i) for i in range(256)}
    next_code = 256
    res = []

    curr = chr(splitted_text[0])
    res.append(curr)

    for code in splitted_text[1:]:
        if code in dict:
            entry = dict[code]
        elif code == next_code:
            entry = curr + curr[0]
        else:
            raise ValueError('Invalid compressed data')

        res.append(entry)
        dict[next_code] = curr + entry[0]
        next_code += 1
        curr = entry

    return ''.join(res)
