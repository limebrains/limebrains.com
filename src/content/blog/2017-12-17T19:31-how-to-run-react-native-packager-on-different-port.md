---
layout: blog-post
title: "How to run react-native packager on different port?"
subtitle: "How to run react-native packager on different port?"
tags: "react-native, ios, android, mobile"
date: 2017-12-17 19:31
category: react-native
image: https://i.imgur.com/x4rtGPK.png
seo:
  title: "How to run react-native packager on different port?"
  description: "How to run react-native packager on different port?"
  noindex: false
--- 

# Problem 😱

You have some program running on react-native default port.

---

# Solution 🤓

You will need to run packager with following port:

```bash
yarn start --port 8085
```

## iOS 📱

In your xcode open `project_dir/ios/project.xcodeproj`.
Change following line `Libraries/React.xcode.proj/React/Base RCTBundleURLProvider.m` 
```bash
const NSUInteger kRCTBundleURLProviderDefaultPort = 8085;
```

## Android 🤖

On android emulator press `cmd + m`.
Dev Settings -> Debug server host & port for device -> `localhost:8085`.
