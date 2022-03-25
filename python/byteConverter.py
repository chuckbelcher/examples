gb = pow(1024,3)
mb = pow(1024,2)

while True:
    try:
        mybytes = int(input('How many bytes do you have? '))
        break
    except ValueError:
        print('Please enter a whole number ex. 1024')

if mybytes >= gb:
    print(f'{mybytes} is {round(mybytes/gb, 2)} GB')
elif mybytes >= mb:
    print(f'{mybytes} is {round(mybytes/mb, 2)} MB')
else:
    print('you dont have enough bytes, please try again')


