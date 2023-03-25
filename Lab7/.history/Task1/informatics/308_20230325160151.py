def Xor(a, b):
    return int((a or b) and not (a and b))

a = int(input())
b = int(input())

print(Xor(a, b))

