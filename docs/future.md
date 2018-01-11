# Future Work

## 1. User Accounts
Users may store personal information or associate their ideas with an external identity.

## 2. Creating Ideas
Users may create a collection of ideas about a single topic. Ideas within the collection may have newer time stamps than the collection. This may also also ideas create by separate people to be associated together.

## 3. Reading Ideas
The idea should be encrypted so that only the authenticated user (and those in possession of a private key) can see the plain text idea.

Ideas may be shared by url. The Private key may be included in the url, automatically decrypting it for fast and easy sharing.

## 4. Updating Ideas
*empty*

## 5. Deleting Ideas
Users may provide a "shadow idea" which describes the idea in less specific terms.
Eg:
An original idea might be: "A Dapp to prove a person had an idea at a certain time."
The shadow idea might be: "A Dapp."

## 6. Disputing Ideas
There is no guarantee that two similar or identical ideas will not be created. As the same concept may be described in multiple ways, it is impossible to detect if a similar idea exists. By default, it should be left to users to figure out which ideas, described in which ways are the same.

However, a dispute resolution feature that allows two (or more) similar ideas to be associated and decided may be possible. In this case, a special collection should be created with pointers to each idea. Inclusion in the collection should be voted upon, with the oldest idea at any one time becoming the primary idea.
