# DailyDigest

Vocabulary is an application that provides you word of the day along with it's definition

## Project Overview

- Voacabulary is made using React Native Expo,it uses expo router for navigating between Pages
- Word generator and definition api to get random words
- React Native reanimated for smooth animations
- Async Storage for storing words with date locally

## Screenshots

<img src="/assets/screenshots/home.jpeg" width="200" /> <img src="/assets/screenshots/home_with_saved.jpeg" width="200" />

<img src="/assets/screenshots/history.jpeg" width="200" />

## Installation

### Make sure you have react native installed on your system

```
git clone https://github.com/RitikJha93/Daily-Digest.git
```
```
cd daily-digest
```

## Setting environment variables
```
EXPO_PUBLIC_WORDAPI = https://api.dictionaryapi.dev/api/v2/entries/en
EXPO_PUBLIC_RANDOM_WORD_API = https://random-word-api.vercel.app/api
```

## Running server
```
npx expo start
```