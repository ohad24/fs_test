# http://zetcode.com/python/bcrypt/

import bcrypt

passwd = b'2345'

salt = bcrypt.gensalt()
hashed = bcrypt.hashpw(passwd, salt)

# print(salt)
print(hashed)
quit()
passwd1 = '12345'
salt = bcrypt.gensalt()
if bcrypt.checkpw(bytes(passwd1, encoding='utf8'), hashed):
    print("match")
else:
    print("does not match")