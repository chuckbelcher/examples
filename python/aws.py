from xml.dom.xmlbuilder import DOMEntityResolver
import boto3

curr_profile = input('What profile do you want to use? ')
curr_region = input('What region are you interested in? ')
session = boto3.Session(profile_name=curr_profile, region_name=curr_region)

# Pull S3 bukcets
try:
    s3 = session.client('s3')
    s3_response = s3.list_buckets()
except:
    print(f'Unable to create session with profile {curr_profile}')

print('\nS3 Bucket Name')
print('--------------------------')

try:
    for bucket in s3_response['Buckets']:
        print(f'{bucket["Name"]}')
except:
    print('You have an error in retrieving the buckets')


# Pull RDS instances
try:
    rds = session.client('rds')
    db_response = rds.describe_db_instances()
except:
    print("no connecting for rds")

print('\n\nDatabase Name \t\tDatabase Engine')
print('-------------------------------------------')

try:
    for db in db_response['DBInstances']:
        db_name = db['DBInstanceIdentifier']
        db_engine = db['Engine']
        print(f'{db_name}\t{db_engine}')
except:
    print('Error retrieving databases')
