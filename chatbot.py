from twilio.rest import Client 
 
account_sid = 'AC42e3ddba5fe869c4fc8dde9be483679d' 
auth_token = 'e9e55ef213344f860e13a3081ef0237b' 
client = Client(account_sid, auth_token) 
 
message = client.messages.create( 
                              from_='whatsapp:+14155238886',  
                              body='hello putul ghaplo..how re you?',      
                              to='whatsapp:+916201625417' 
                          ) 
 
print(message.sid)