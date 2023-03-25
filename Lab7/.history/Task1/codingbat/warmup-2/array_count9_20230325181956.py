def array_count9(nums):
  counter = 0
  for num in nums:
    if num == 9:
      counter += 1
  return counter