# DATA COLLECTION


## PATIENT

{
  "_id": "",
  "name": "",
  "email": "",
  "passwordHash": "",
  "age": 0,
  "phone": "",
  "authorizedGuardians": [],

  "faceVerified": false,
  "voiceVerified": false,

  "createdAt": ""
}

## GUARDIAN

{
  "_id": "",
  "name": "",
  "email": "",
  "passwordHash": "",
  "phone": "",

  "relation": "",
  "patientId": "",
  "verifiedByPatient": false,

  "createdAt": ""
}

## FAMILY MEMBERS

{
  "_id": "",
  "patientId": "",
  "name": "",
  "relation": "",

  "photoUrl": [],
  "trustScore": 0,
  "verificationStatus": "",

  "addedBy": "",
  "createdAt": ""
}

## MEMORY RETRIEVAL

{
  "_id": "",
  "patientId": "",

  "title": "",
  "description": "",
  "date": "",
  "peopleInvolved": [],
  "photos": [],
  "videos": [],
  "voiceNotes": [],

  "createdBy": "",
  "createdAt": ""
}

## REMINDERS

{
  "_id": "",
  "patientId": "",
  "message": "",
  "time": "",
  "createdBy": "",
  "active": true
}

## VERIFICATION REQUESTS

{
  "_id": "",
  "patientId": "",
  "familyMemberId": "",
  "requestedBy": "",

  "status": "",
  "patientVoiceApproval": false,
  "patientFaceApproval": false,
  "createdAt": ""
}

## BRAIN GYM RECORDS

{
  "_id":"",
  "patientId":"",

  "activityType":"",
  "score":0,
  "maxScore":0,
  "completionTime":0,
  "difficulty":"",
  "remarks":"",
  "date":""
}

## SOS CONTACT

{
  "patientId":"patient123",
  "name":"Ananya",
  "relation":"Daughter",
  "phone":"9876543210",
  "priority":1
}


# User Roles

## Patient
- Primary owner of account
- Can approve guardians
- Can approve relatives
- Can approve emergency contacts
- Can view memories, reminders, brain gym results

## Guardian
- Authorized by patient
- Can add reminders
- Can upload memories
- Can manage schedules
- Can monitor patient location (if enabled)
- Cannot add themselves without patient verification

## Admin
- Platform management
- Handles abuse reports
- Monitors system health
- Cannot edit patient memories