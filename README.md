# Ramium
A modern hugo theme for awesome blogs

![thumbnail](https://github.com/rafed/ramium/blob/master/images/tn.png?raw=true)

## Features

#### Site features

- Google search bar
- Google Analytics
- Social sharing bar (facebook, twitter, reddit)
- Comments with Disqus
- Customizable navbar
- Admin panel (Not a real admin panel though. It simply shows the summary of the total number of posts, tags and sections)
- Mobile responsive- works great across desktops, tablets and mobiles
- SEO friendly (Opengraph, Twitter cards)

#### Blogging features

- Attractive landing page with article/tag links everywhere
- Add featured images to posts
- Making sections for related articles (for example tutorials on a topic)
- Add code snippets
- Add math equations
- Add tags to articles and list articles by tags
- Add chord to lyrics (CSS style for [ChordSheetJs](https://github.com/martijnversluis/ChordSheetJS))

#### Future plans
- Google adsense
- Suggestions for reading more articles at the end of an article
- Support for facebook comments

## Installation & Update

```sh
$ # install
$ mkdir themes
$ cd themes
$ git submodule add https://github.com/rafed/ramium.git ramium

$ # update
$ git submodule update --remote --merge
```

If you want to know more information, see [Hugo doc](https://gohugo.io/themes/installing/).

## Usage

1. Make sure you follow the template structure of the examplesite (including the config.toml)
2. When you manually create files by following [quick start (step4)](https://gohugo.io/getting-started/quick-start/#step-4-add-some-content), you should command `hugo new posts/<filename>.md` instead of `hugo new post/<filename>.md`.
3. For the admin panel, sections list and author page to work the 'addons' directory must not be deleted.
4. Detailed instructions are coming soon [here](https://themes.gohugo.io/theme/ramium/getting-started-with-ramium/).

#### `config.toml` example

```toml
baseURL = "https://rafed.github.io/ramium/"
#CanonifyURLs=true

languageCode = "en-us"
theme = "ramium"

title = "Ramium"
disqusShortname = "disqus-code"
googleAnalytics = "analytics-code"
pluralizeListTitles = false
enableemoji = false

[params]
    description = "A description for the meta tag of the site"
    googleSearch = "google-search-code"
    showDate = true # make false if dont want to show date for evergeen articles
    math = false # best to enable this in the front matter of a page
    githubLink = "rafed/ramium/"

    tagsInHome = 40     # set zero to not show in home page
    sectionsInHome = 5  # set zero to not show in home page
    paginatePostsPerPage = 5
    paginateTagsPerPage = 6

[taxonomies]
    tag = "tags"

[markup.goldmark.renderer]
    unsafe = true

[menu]
    [[menu.main]]
        name = "Home"
        url = "/"
        weight = 1

    [[menu.main]]
        identifier = "blog"
        name = "This Blog"
        weight = 2
            [[menu.main]]
                parent = "blog"
                name = "All Tags"
                url = "/tags/"
                weight = 1
            [[menu.main]]
                parent = "blog"
                name = "All Sections"
                url = "/sections/"
                weight = 2
            [[menu.main]]
                parent = "blog"
                name = "All Posts"
                url = "/posts/"
                weight = 3
    
    [[menu.main]]
        name = "Author"
        url = "/authorr/"
        weight = 3
```

## Frontmatter example

```md
---
title: {{ replace .Name "-" " " | title }}
date: {{ now.Format "2006-01-2" }}
tags: [tag1, tag2]
image: "/image/blog-pic.jpg"
description: "A smalll description"
showDate: true/false    # to enable/disable showing dates
math: true              # to enable showing equations (katex)
chordsheet: true        # to add chordsheet styelsheet
---
```

## Contributing

If you find problems with the theme raise an issue. Also, contributions/pull requests are welcome.

## LICENSE

[MIT](./LICENSE).
