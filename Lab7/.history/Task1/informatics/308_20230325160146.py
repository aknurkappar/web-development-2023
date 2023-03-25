def Xor(a, b):
    return int((a or b) and not (b))

a = int(input())
b = int(input())

print(Xor(a, b))

