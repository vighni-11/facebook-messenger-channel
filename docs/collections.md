# Databases and collections

Each tenant would be modelled to have a database with the following collections.

1. users
2. messages
3. saved assets
4. webhook-events
5. configuration

## 1. Users

Users are the list of facebook members who have currently enlisted to receive messages from the tenant's facebook page.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/contact.schema.json",
  "title": "Contact",
  "description": "Details of a facebook user subscribed to the facebook page",
  "type": "object",
  "properties": {
    "psid": {
      "description": "token used by the facebook page to message a facebook's user on messenger platform",
      "type": "string"
    },
    "referrer": {
      "description": "discovery method used by the facebook user",
      "type": "string",
    },
    "name": {
      "description": "The user's first and last name",
      "type": "string",
    },
    "first_name": {
      "description": "The user's first name",
      "type": "string",
    },
    "last_name": {
      "description": "The user's last name",
      "type": "string",
    },
    "profile_pic": {
      "description": "URL to the Profile picture",
      "type": "string",
    },
  }
}
```


## 2. Messages

Messages collection would track all the messages send by a tenant using our facebook channel.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/messages.schema.json",
  "title": "Messages",
  "description": "List of messages sent to facebook users via our facebook page",
  "type": "object",
  "properties": {
    "psid": {
      "description": "token used to message a facebook's user on messenger platform",
      "type": "string"
    },
    "message": {
      "description": "message sent to the facebook user. JSON",
      "type": "string",
    },
    "messageId": {
      "description": "ID provided by the facebook messenger platform for the message",
      "type": "string",
    }
  }
}
```

## 3. Saved Assets

Facebook messenger platform allows to save assets like images, videos, etc. These assets can be linked while sending a message on the platform. This collection lists the details of all the saved assets the tenant has saved with the messenger platform.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/savedassets.schema.json",
  "title": "Saved Assets",
  "description": "List of assets saved with the facebook application",
  "type": "object",
  "properties": {
    "attachmentId": {
      "description": "ID provided by the facebook messenger platform for the message",
      "type": "string",
    },
    "type": {
      "description": "asset types. can be image, video, audio or file",
      "type": "string",
    },
    "url": {
      "description": "url for the asset. in case of uploaded assets it will be link to the file in local file system",
      "type": "string",
    }
  }
}
```

## 4. Webhook Events

Events received by the webhook registered with the Facebook platform

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/webhookevents.schema.json",
  "title": "Webhook Events",
  "description": "List of events received by our facebook application",
  "type": "object",
  "properties": {
    "psid": {
      "description": "token associated with a facebook's user responsible for the event",
      "type": "string"
    },
    "event": {
      "description": "event object (JSON)",
      "type": "string"
    }
  }
}
```

## 5. Configuration

Configuration for the facebook integration for the tenant. This will include details like
* Page access token
* App secret
* Admin email
* Admin name
* Admin phone number

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/configuration.schema.json",
  "title": "Configuration",
  "description": "Configuration for the facebook integration",
  "type": "object",
  "properties": {
    "key": {
      "description": "configuration key",
      "type": "string"
    },
    "value": {
      "description": "configuration value",
      "type": "string"
    }
  }
}
```