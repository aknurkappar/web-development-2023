def array_front9(nums):
  back = len(nums)
  if back > 4:
    back = 4
  for i in range(back):
    if nums[i] == 9:
      return True
  return False