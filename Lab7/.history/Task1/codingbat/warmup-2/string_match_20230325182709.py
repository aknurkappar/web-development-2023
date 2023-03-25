def string_match(a, b):
  short_string = min(len(a), len(b))
  counter = 0
  for i in range(short_string-1):
    a_sub = a[i:i+2]
    b_sub = b[i:i+2]
    if a_sub == b_sub:
      counter += 1
      
  return counter
    