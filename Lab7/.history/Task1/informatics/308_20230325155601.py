def Xor(a, b):
    return (a and not b) or (not b and b)

a = int(input())
b = int(input())

print(Xor(a, b))