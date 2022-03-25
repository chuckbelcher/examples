# Get password from dbuser.yaml file for desired environment

import yaml

env = []
users = []
userlist = 'dbuser.yaml'

try:
    with open(userlist, 'r') as fh:
        user_dict = yaml.safe_load(fh)
    #print(user_dict)
except:
    print(f'Unable to load {userlist}')

#Get List of environments
for e in user_dict['environment']:
    #print(e[environment])
    env.append(e)

while True:
    counter = 0
    for environment in env:
        print(f'{counter}: {env[counter]}')
        counter = counter + 1
    try:
        selected_environment = int(input('Which environment would you like to connect to? '))
        break;
    except:
        print('Please select a menu item from the list')


#Get users
for u in user_dict['environment']['dev']['user']:
    users.append(u)

while True:
    counter = 0
    for u in users:
        print(f'{counter}: {users[counter]}')
        counter = counter + 1
    try:
        selected_user = int(input('Which user would you like to connect with? '))
        break;
    except:
        print('Please select a menu item from the list')

#Print password
print(user_dict['environment'][env[selected_environment]]['user'][users[selected_user]]['password'])