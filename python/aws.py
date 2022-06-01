import boto3

try:
    curr_profile = input('What profile do you want to use? ')
    session = boto3.Session(profile_name=curr_profile)
    s3 = session.client('s3')
    response = s3.list_buckets()
except:
    print(f'Unable to create session with profile {curr_profile}')

print('\nS3 Bucket Name')
print('--------------------------')

try:
    for bucket in response['Buckets']:
        print(f'{bucket["Name"]}')
except:
    print('You have an error in retrieving the buckets')
