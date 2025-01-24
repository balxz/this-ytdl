<p align="center">
<img src="https://files.catbox.moe/mbeerk.jpg"
</p>
<p align="center">
<a href="#"><img title="balxzzy" src="https://img.shields.io/badge/Youtube-Downloder-green?colorA=%23ff0000&colorB=C13584&style=for-the-badge"></a>
</p>


## Installation

You can install the package using github:

```bash
npm i balxz/this-ytdl
```

## Usage

```Javascript
const { yts, ytmp3, ytmp4 } = require("@balxz/this-ytdl")
```

## Download With Audio (MP3)

```Javascript
const { yts, ytmp3, ytmp4 } = require("@balxz/this-ytdl")
let a = ytmp3("https://youtube.com/watch?v=07qofDUkU3s").then(v => v.data)
console.log(a)
```
## Result Data
```JSON
{
  status: true,
  message: 'Success',
  owner: 'balxzzy — SH',
  data: {
    id: 'EKexKBA2lRg',
    title: 'anti ∞ hero - (best part) mighfar suganda [edit audio]',
    desc: "Give credit if you use my edit audio For eg: [edit audio by @Cidkageno Editz Subscribe For more audio edit's   ...",
    imej: 'https://i.ytimg.com/vi_webp/EKexKBA2lRg/hqdefault.webp',
    thumb: 'https://i.ytimg.com/vi_webp/EKexKBA2lRg/mqdefault.webp',
    uploadTime: '3 weeks ago',
    views: '1233',
    nams: 'CID影野',
    download: 'https://cdn.y2ts.us.kg/yt/dl?url=https://www.youtube.com/watch?v=EKexKBA2lRg&type=audio'
  }
}
```

## Download With Video (MP4) 

```Javascript
const { yts, ytmp3, ytmp4 } = require("@balxz/this-ytdl")
let a = ytmp4("https://youtube.com/watch?v=07qofDUkU3s").then(v => v.data)
console.log(a)
```
## Result Data
```JSON
{
  status: true,
  message: 'Success',
  owner: 'balxzzy — SH',
  data: {
    id: 'EKexKBA2lRg',
    title: 'anti ∞ hero - (best part) mighfar suganda [edit audio]',
    desc: "Give credit if you use my edit audio For eg: [edit audio by @Cidkageno Editz Subscribe For more audio edit's   ...",
    imej: 'https://i.ytimg.com/vi_webp/EKexKBA2lRg/hqdefault.webp',
    thumb: 'https://i.ytimg.com/vi_webp/EKexKBA2lRg/mqdefault.webp',
    uploadTime: '3 weeks ago',
    views: '1233',
    nams: 'CID影野',
    download: 'https://cdn.y2ts.us.kg/yt/dl?url=https://www.youtube.com/watch?v=EKexKBA2lRg&type=video'
  }
}
```

## Search Video With This Package

```Javascript
const { yts, ytmp3, ytmp4 } = require("@balxz/this-ytdl")

let a = yts("Anti ∞ Hero").then(v => v.data)
console.log(a)
```
## Result Data
```JSON
{
  status: true,
  message: 'Success',
  owner: 'bálxzzy — SH',
  data: {
    id: 'EKexKBA2lRg',
    title: 'anti ∞ hero - (best part) mighfar suganda [edit audio]',
    desc: "Give credit if you use my edit audio For eg: [edit audio by @Cidkageno Editz Subscribe For more audio edit's   ...",
    imej: 'https://i.ytimg.com/vi/EKexKBA2lRg/hq720.jpg',
    thumb: 'https://i.ytimg.com/vi/EKexKBA2lRg/hq720.jpg',
    uploadTime: '3 weeks ago',
    views: 1233,
    author: 'CID影野',
    url: 'https://youtube.com/watch?v=EKexKBA2lRg'
  }
}
```



Sekian. Yth bálzz.
