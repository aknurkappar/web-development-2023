binary = int(input())

dec = 0
i = 0

while(binary != 0):
    decTemp = binary%10
    dec = decTemp + dec * pow(2, i)
    binary = binary//10
    i + =1
print()