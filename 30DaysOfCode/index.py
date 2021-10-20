#**********DAY 1 ********#
# Read a full line of input from stdin and save it to our dynamically typed variable, input_string.
input_string = input()

# Print a string literal saying "Hello, World." to stdout.
print('Hello, World.')
print(input_string)


#**********DAY 2 ********#
import math
import os
import random
import re
import sys

#
# Complete the 'solve' function below.
#
# The function accepts following parameters:
#  1. DOUBLE meal_cost
#  2. INTEGER tip_percent
#  3. INTEGER tax_percent
#
def solve(meal_cost, tip_percent, tax_percent):
    # Write your code here
    tip = (tip_percent/100)* meal_cost
    tax = (tax_percent/100)* meal_cost
    
    total_cost = meal_cost + tip + tax
    
    actual_cost = round(total_cost)
    print(actual_cost)



#**********DAY 3 ********#
i = 4
d = 4.0
s = 'HackerRank '
# Declare second integer, double, and String variables.
num_int = int(input())
num_double = float(input())
strg = input()
# Read and save an integer, double, and String to your variables.

# Print the sum of both integer variables on a new line.
print(i + num_int)
# Print the sum of the double variables on a new line.
print(d + num_double)
# Concatenate and print the String variables on a new line
# The 's' variable above should be printed first.
print(s + strg)