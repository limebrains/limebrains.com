---
layout: blog-post
title: "Create i18n backend using google sheets with google translate."
subtitle: "Create i18n backend using google sheets with google translate."
tags: "i18n, translate, node, reactjs, python"
date: 2021-03-02 13:30
category: webdev
image: https://i.imgur.com/xRnFwmd.png
seo:
  title: "Create i18n backend using google sheets with google translate."
  description: "Create i18n backend using google sheets with google translate."
  noindex: false
--- 

# Problem 😱

You want to share your translation files to translation team.

Possible solutions:


1. locize
```
+ easy to use
+ integration with google translate

- monthly subscription + usage price 
```

2. zanata
```
+ easy to use
+ has cli

- bad ui
- no longer supports new projects, need to be selfhosted
```

3. send them xlsx / pot files

```
+ easy to integrate
+ free

- hard to maitain
- merge conflicts
- non versioned
```

---

# Solution 🤓

## 🎉 🎉 🎉 use google sheets 🎉 🎉 🎉

```
+ easy to use
+ versioned
+ free
+ has google translate feature

- google might lower limits on free API calls
```


Result:

![Result](https://i.imgur.com/xRnFwmd.png)


Flow:

1. use your i18n scanner to extract keys into json `{key: ""}` name of file

i18next-parser.config.js
```
module.exports = {
  createOldCatalogs: false, // save previous translation catalogs to the \_old folder

  lexers: {
    js: ['JsxLexer'],
    jsx: ['JsxLexer'],

    default: ['JsxLexer'],
  },

  locales: ['en'],
  // An array of the locales in your applications

  namespaceSeparator: false,
  keySeparator: false,
  // Namespace separator used in your translation keys
  // If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.

  // output: 'i18n/$LOCALE/$NAMESPACE.json',
  output: 'public/locales/$LOCALE.json',
  // Supports $LOCALE and $NAMESPACE injection
  // Supports JSON (.json) and YAML (.yml) file formats
  // Where to write the locale files relative to process.cwd()

  input: [
    'src/**/**/*.js',
    'src/**/**/*.jsx',
  ],
  // An array of globs that describe where to look for source files
  // relative to the location of the configuration file
  // Globs syntax: https://github.com/isaacs/node-glob#glob-primer
}

```

2. sync files with google sheets

```
pip install gspread==3.6.0
python i18n_google_sheets.py
```

i18n_google_sheets.py
```
import os
import json
from collections import defaultdict
from pathlib import Path

import gspread

curr_dir = Path(__file__).parent
root_dir = curr_dir
service_account_path = root_dir / 'your_app_google_credentials.json'
sheet_id = os.environ.get('SHEET_ID') or 'sheet_id'


def get_worksheet():
    gc = gspread.service_account(
        filename=service_account_path.absolute().as_posix(),
    )

    sheet = gc.open_by_key(sheet_id)
    worksheet = sheet.get_worksheet(0)
    return worksheet


def add_missing_keys(worksheet, expected_keys):
    records = worksheet.get_all_records()
    print(f"from google {records}")
    missing_keys = set(expected_keys)

    last_idx = 0
    for row_idx, row in enumerate(records):
        key = row.pop('key')
        try:
            missing_keys.remove(key)
        except KeyError:
            print(f"consider removing key in gsheets which was not expected, key={key}")
        last_idx = row_idx + 1

    worksheet.insert_rows(
        [[key] for key in missing_keys],
        row=last_idx + 2,
    )


def get_expected_keys():
    en_file_path = root_dir / 'public' / 'locales' / 'en.json'
    with open(en_file_path, 'r') as en_file:
        keys = json.load(en_file).keys()
    return list(keys)


def pull(worksheet):
    records = worksheet.get_all_records()
    languages = defaultdict(dict)

    for row in records:
        key = row.pop('key')
        for lang, value in row.items():
            languages[lang][key] = value

    return languages


def save(languages: dict):
    for lng, translations in languages.items():
        file_path = root_dir / 'public' / 'locales' / f'{lng}.json'
        with open(file_path, 'w') as file:
            json.dump(translations, file)


def sync() -> dict:
    keys = get_expected_keys()

    worksheet = get_worksheet()
    add_missing_keys(worksheet=worksheet, expected_keys=keys)
    languages = pull(worksheet=worksheet)
    save(languages=languages)
    return languages


if __name__ == '__main__':
    languages = sync()

    for lng, values in languages.items():
        print(f"\nlanguage: {lng}")
        print(f"\n\n{values}")

```







