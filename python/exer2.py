name = input('What is your name? ')
hours = int(input('How many hours did you work? '))
rate = 12.5

def calcPay(hours, rate):
    pay = 0
    if hours > 40:
        pay = ((hours * rate) + ((hours - 40) * (rate * .05)))
    else:
        pay = hours * rate
    return pay


gross_pay = calcPay(hours, rate)

print(f'Congrats {name} you made {gross_pay} dollars')