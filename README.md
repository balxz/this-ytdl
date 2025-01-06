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
const { search, ytmp3, ytmp4 } = require("@balxz/this-ytdl")
```

## Quality Available

```Javascript
["144", "360", "480", "720", "1080"]
["92", "128", "256", "320"]
```
## Download With Audio (MP3)

```Javascript
const { search, ytmp3, ytmp4 } = require("@balxz/this-ytdl")
let a = ytmp3("https://youtube.com/watch?v=07qofDUkU3s").then(v => v.data)
console.log(a)
```
## Result Data
```JSON
{
  "status": true,
  "creator": "Shiina-Api — bálxzzy",
  "metadata": {
    "type": "video",
    "videoId": "07qofDUkU3s",
    "url": "https://youtube.com/watch?v=07qofDUkU3s",
    "title": "Mighfar Suganda - Anti ∞ Hero (Official Lyric Video)",
    "description": "https://www.youtube.com/watch?v=5fG6cj81dRI Instagram : https://www.instagram.com/mighfarsuganda/ TikTok ...",
    "image": "https://i.ytimg.com/vi/07qofDUkU3s/hq720.jpg",
    "thumbnail": "https://i.ytimg.com/vi/07qofDUkU3s/hq720.jpg",
    "seconds": 217,
    "timestamp": "3:37",
    "duration": {
      "seconds": 217,
      "timestamp": "3:37"
    },
    "ago": "2 months ago",
    "views": 2844842,
    "author": {
      "name": "Mighfar Suganda",
      "url": "https://youtube.com/channel/UCOUrKm7mFN3QVxusB3QYH1g"
    }
  },
  "download": {
    "status": true,
    "quality": "128kbps",
    "availableQuality": [
      "92",
      "128",
      "256",
      "320"
    ],
    "url": "https://cdn54.savetube.su/media/07qofDUkU3s/mighfar-suganda-anti-hero-official-lyric-video-128-ytshorts.savetube.me.mp3",
    "filename": "Mighfar Suganda - Anti ∞ Hero (Official Lyric Video) (128kbps).mp3"
}
```

## Download With Video (MP4) 

```Javascript
const { search, ytmp3, ytmp4 } = require("@balxz/this-ytdl")
let a = ytmp4("https://youtube.com/watch?v=07qofDUkU3s").then(v => v.data)
console.log(a)
```
## Result Data
```JSON
{
  status: true,
  creator: 'Shiina-Api — bálxzzy',
  metadata: {
    type: 'video',
    videoId: '07qofDUkU3s',
    url: 'https://youtube.com/watch?v=07qofDUkU3s',
    title: 'Mighfar Suganda - Anti ∞ Hero (Official Lyric Video)',
    description: 'https://www.youtube.com/watch?v=5fG6cj81dRI Instagram : https://www.instagram.com/mighfarsuganda/ TikTok ...',
    image: 'https://i.ytimg.com/vi/07qofDUkU3s/hq720.jpg',
    thumbnail: 'https://i.ytimg.com/vi/07qofDUkU3s/hq720.jpg',
    seconds: 217,
    timestamp: '3:37',
    duration: { toString: [Function: toString], seconds: 217, timestamp: '3:37' },
    ago: '2 months ago',
    views: 2844842,
    author: {
      name: 'Mighfar Suganda',
      url: 'https://youtube.com/channel/UCOUrKm7mFN3QVxusB3QYH1g'
    }
  },
  download: {
    status: true,
    quality: '360p',
    availableQuality: [ '144', '360', '480', '720', '1080' ],
    url: 'https://cdn54.savetube.su/media/07qofDUkU3s/mighfar-suganda-anti-hero-official-lyric-video-360-ytshorts.savetube.me.mp4',
    filename: 'Mighfar Suganda - Anti ∞ Hero (Official Lyric Video) (360p).mp4'
  }
}
```

## Search Video With This Package

```Javascript
const { search, ytmp3, ytmp4 } = require("@balxz/this-ytdl")

let a = search("Anti ∞ Hero").then(v => v.data)
console.log(a)
```
## Result Data
```JSON
{
  "status": true,
  "creator": "Shiina-Api — bálxzzy",
  "results": [
    {
      "type": "video",
      "videoId": "07qofDUkU3s",
      "url": "https://youtube.com/watch?v=07qofDUkU3s",
      "title": "Mighfar Suganda - Anti ∞ Hero (Official Lyric Video)",
      "description": "https://www.youtube.com/watch?v=5fG6cj81dRI Instagram : https://www.instagram.com/mighfarsuganda/ TikTok ...",
      "image": "https://i.ytimg.com/vi/07qofDUkU3s/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/07qofDUkU3s/hq720.jpg",
      "seconds": 217,
      "timestamp": "3:37",
      "duration": {
        "seconds": 217,
        "timestamp": "3:37"
      },
      "ago": "2 months ago",
      "views": 2845621,
      "author": {
        "name": "Mighfar Suganda",
        "url": "https://youtube.com/channel/UCOUrKm7mFN3QVxusB3QYH1g"
      }
    },
    {
      "type": "video",
      "videoId": "b1kbLwvqugk",
      "url": "https://youtube.com/watch?v=b1kbLwvqugk",
      "title": "Taylor Swift - Anti-Hero (Official Music Video)",
      "description": "Official music video for “Anti-Hero” by Taylor Swift from the album 'Midnights'. Buy/Download/Stream 'Midnights': ...",
      "image": "https://i.ytimg.com/vi/b1kbLwvqugk/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/b1kbLwvqugk/hq720.jpg",
      "seconds": 310,
      "timestamp": "5:10",
      "duration": {
        "seconds": 310,
        "timestamp": "5:10"
      },
      "ago": "2 years ago",
      "views": 215584011,
      "author": {
        "name": "Taylor Swift",
        "url": "https://youtube.com/channel/UCqECaJ8Gagnn7YCbPEzWH6g"
      }
    },
    {
      "type": "video",
      "videoId": "RMqSOvpfwTo",
      "url": "https://youtube.com/watch?v=RMqSOvpfwTo",
      "title": "Anti ∞ Hero by mighfar suganda",
      "description": "Song \" Anti ∞ hero by mighfar suganda https://youtube.com/@MighfarSuganda?si=ToHm_Bcrwb0RHRqk ↪️ Follow Mighfar ...",
      "image": "https://i.ytimg.com/vi/RMqSOvpfwTo/hqdefault.jpg",
      "thumbnail": "https://i.ytimg.com/vi/RMqSOvpfwTo/hqdefault.jpg",
      "seconds": 217,
      "timestamp": "3:37",
      "duration": {
        "seconds": 217,
        "timestamp": "3:37"
      },
      "ago": "1 month ago",
      "views": 17717,
      "author": {
        "name": "NF",
        "url": "https://youtube.com/@TRX-z6l"
      }
    },
    {
      "type": "video",
      "videoId": "sB3LsW-LeVk",
      "url": "https://youtube.com/watch?v=sB3LsW-LeVk",
      "title": "Mighfar Suganda - Anti ∞ Hero (  Versi 1 Jam Full Lirik & Terjemahan )",
      "description": "antihero#music#trending#youtube#mighfarsuganda#willhecombacktosaveyou#beranda.",
      "image": "https://i.ytimg.com/vi/sB3LsW-LeVk/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/sB3LsW-LeVk/hq720.jpg",
      "seconds": 3956,
      "timestamp": "1:05:56",
      "duration": {
        "seconds": 3956,
        "timestamp": "1:05:56"
      },
      "ago": "2 weeks ago",
      "views": 7442,
      "author": {
        "name": "LIRIK LAGU",
        "url": "https://youtube.com/@liriklagu2821"
      }
    },
    {
      "type": "video",
      "videoId": "MFn8-gFbVUc",
      "url": "https://youtube.com/watch?v=MFn8-gFbVUc",
      "title": "Anti ∞ Hero - Mighfar Suganda (Lyrics video)",
      "description": "Lyrics video Anti ∞ Hero - Mighfar Suganda ------------------------------ NOT A REUPLODER Original music ...",
      "image": "https://i.ytimg.com/vi/MFn8-gFbVUc/hqdefault.jpg",
      "thumbnail": "https://i.ytimg.com/vi/MFn8-gFbVUc/hqdefault.jpg",
      "seconds": 210,
      "timestamp": "3:30",
      "duration": {
        "seconds": 210,
        "timestamp": "3:30"
      },
      "ago": "10 days ago",
      "views": 13001,
      "author": {
        "name": "Jokodok",
        "url": "https://youtube.com/@jokodoks"
      }
    },
    {
      "type": "video",
      "videoId": "XqN2qFvY64U",
      "url": "https://youtube.com/watch?v=XqN2qFvY64U",
      "title": "Taylor Swift - Anti-Hero (Official Lyric Video)",
      "description": "Listen to “Anti-Hero” by Taylor Swift from the album 'Midnights'. Buy/Download/Stream 'Midnights': ...",
      "image": "https://i.ytimg.com/vi/XqN2qFvY64U/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/XqN2qFvY64U/hq720.jpg",
      "seconds": 204,
      "timestamp": "3:24",
      "duration": {
        "seconds": 204,
        "timestamp": "3:24"
      },
      "ago": "2 years ago",
      "views": 35502639,
      "author": {
        "name": "Taylor Swift",
        "url": "https://youtube.com/channel/UCqECaJ8Gagnn7YCbPEzWH6g"
      }
    },
    {
      "type": "video",
      "videoId": "qdKzuPXq9nY",
      "url": "https://youtube.com/watch?v=qdKzuPXq9nY",
      "title": "Mighfar Suganda - anti ∞ hero || lyrics+terjemahan",
      "description": "Subscribe my channel! thx #fyp #storywa #songsad #music #spotify #viralvideo #sadsong #lyricvideo #song.",
      "image": "https://i.ytimg.com/vi/qdKzuPXq9nY/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/qdKzuPXq9nY/hq720.jpg",
      "seconds": 210,
      "timestamp": "3:30",
      "duration": {
        "seconds": 210,
        "timestamp": "3:30"
      },
      "ago": "4 days ago",
      "views": 333,
      "author": {
        "name": "ifansyhhxwz",
        "url": "https://youtube.com/@ifansyhhxwz"
      }
    },
    {
      "type": "video",
      "videoId": "skIRFa5R5_g",
      "url": "https://youtube.com/watch?v=skIRFa5R5_g",
      "title": "Anti ∞ Hero - Mighfar Suganda (tiktok reverb)",
      "description": "original : https://youtu.be/07qofDUkU3s?si=waSwL7mK2q5Dg0oW.",
      "image": "https://i.ytimg.com/vi/skIRFa5R5_g/hqdefault.jpg",
      "thumbnail": "https://i.ytimg.com/vi/skIRFa5R5_g/hqdefault.jpg",
      "seconds": 210,
      "timestamp": "3:30",
      "duration": {
        "seconds": 210,
        "timestamp": "3:30"
      },
      "ago": "3 weeks ago",
      "views": 1659,
      "author": {
        "name": "zhu playlist",
        "url": "https://youtube.com/@r.zhuplaylist"
      }
    },
    {
      "type": "video",
      "videoId": "4IzjLXnIRhc",
      "url": "https://youtube.com/watch?v=4IzjLXnIRhc",
      "title": "Mighfar Suganda - Anti ∞ Hero ( 1 HOUR )",
      "description": "music ( 1 HOUR ) Link original music ...",
      "image": "https://i.ytimg.com/vi/4IzjLXnIRhc/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/4IzjLXnIRhc/hq720.jpg",
      "seconds": 3681,
      "timestamp": "1:01:21",
      "duration": {
        "seconds": 3681,
        "timestamp": "1:01:21"
      },
      "ago": "4 days ago",
      "views": 488,
      "author": {
        "name": "TONSS",
        "url": "https://youtube.com/@tonss1531"
      }
    },
    {
      "type": "video",
      "videoId": "jPt4A_S27Cs",
      "url": "https://youtube.com/watch?v=jPt4A_S27Cs",
      "title": "Taylor Swift - Anti-Hero (Lyrics)",
      "description": "Lyrics: [Verse 1] I have this thing where I get older, but just never wiser Midnights become my afternoons When my depression ...",
      "image": "https://i.ytimg.com/vi/jPt4A_S27Cs/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/jPt4A_S27Cs/hq720.jpg",
      "seconds": 202,
      "timestamp": "3:22",
      "duration": {
        "seconds": 202,
        "timestamp": "3:22"
      },
      "ago": "2 years ago",
      "views": 14576442,
      "author": {
        "name": "Creative Chaos",
        "url": "https://youtube.com/@creativchaos"
      }
    },
    {
      "type": "video",
      "videoId": "LXf6SCFRdSA",
      "url": "https://youtube.com/watch?v=LXf6SCFRdSA",
      "title": "Lirik | Anti ∞ Hero - Mighfar Suganda(Lirik/Lyrics) [Tik-Tok] 🇮🇩🌃‼️‼️",
      "description": "Mighfar Suganda - Anti ∞ Hero Official vidio‼️ YouTube :https://youtu.be/07qofDUkU3s?si=XfgcsiFoKLoihWdI Instagram ...",
      "image": "https://i.ytimg.com/vi/LXf6SCFRdSA/hqdefault.jpg",
      "thumbnail": "https://i.ytimg.com/vi/LXf6SCFRdSA/hqdefault.jpg",
      "seconds": 216,
      "timestamp": "3:36",
      "duration": {
        "seconds": 216,
        "timestamp": "3:36"
      },
      "ago": "1 day ago",
      "views": 6,
      "author": {
        "name": "CryVibes",
        "url": "https://youtube.com/@CryVibes"
      }
    },
    {
      "type": "video",
      "videoId": "hgVoHOq62KU",
      "url": "https://youtube.com/watch?v=hgVoHOq62KU",
      "title": "Mighfar Suganda - Anti ∞ Hero (Live Session)",
      "description": "2025 siap konser seluruh kota di Indonesia written, produced, performed, mixed, and mastered by mighfar suganda roadman ...",
      "image": "https://i.ytimg.com/vi/hgVoHOq62KU/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/hgVoHOq62KU/hq720.jpg",
      "seconds": 212,
      "timestamp": "3:32",
      "duration": {
        "seconds": 212,
        "timestamp": "3:32"
      },
      "ago": "2 days ago",
      "views": 9803,
      "author": {
        "name": "Mighfar Suganda",
        "url": "https://youtube.com/channel/UCOUrKm7mFN3QVxusB3QYH1g"
      }
    },
    {
      "type": "video",
      "videoId": "7IbB-wkxEP8",
      "url": "https://youtube.com/watch?v=7IbB-wkxEP8",
      "title": "Mighfar Suganda - Anti ∞ Hero [Lyrics]",
      "description": "Indonesian translation of the lyrics is in the description! Anti ∞ Hero - Mighfar Suganda Turn on the subscribe bell to get the ...",
      "image": "https://i.ytimg.com/vi/7IbB-wkxEP8/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/7IbB-wkxEP8/hq720.jpg",
      "seconds": 217,
      "timestamp": "3:37",
      "duration": {
        "seconds": 217,
        "timestamp": "3:37"
      },
      "ago": "8 days ago",
      "views": 619,
      "author": {
        "name": "Music Kita",
        "url": "https://youtube.com/@Musickita_p"
      }
    },
    {
      "type": "video",
      "videoId": "KaVnveQzYTk",
      "url": "https://youtube.com/watch?v=KaVnveQzYTk",
      "title": "lagu : @MighfarSuganda - anti ∞ hero | makan untuk terakhir kalinya",
      "description": "",
      "image": "https://i.ytimg.com/vi/KaVnveQzYTk/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/KaVnveQzYTk/hq720.jpg",
      "seconds": 15,
      "timestamp": "0:15",
      "duration": {
        "seconds": 15,
        "timestamp": "0:15"
      },
      "ago": "11 days ago",
      "views": 5852901,
      "author": {
        "name": "maybewecantalk",
        "url": "https://youtube.com/@maybewecant4lk"
      }
    },
    {
      "type": "video",
      "videoId": "0WXPVN8w5DQ",
      "url": "https://youtube.com/watch?v=0WXPVN8w5DQ",
      "title": "Taylor Swift - Anti-Hero (Lyrics)",
      "description": "......... Lyrics: Taylor Swift - Anti-Hero [Verse 1] I have this thing where I get older, but just never wiser Midnights become my ...",
      "image": "https://i.ytimg.com/vi/0WXPVN8w5DQ/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/0WXPVN8w5DQ/hq720.jpg",
      "seconds": 202,
      "timestamp": "3:22",
      "duration": {
        "seconds": 202,
        "timestamp": "3:22"
      },
      "ago": "2 years ago",
      "views": 5576832,
      "author": {
        "name": "7clouds",
        "url": "https://youtube.com/@7clouds"
      }
    },
    {
      "type": "video",
      "videoId": "jydNXmhOcnE",
      "url": "https://youtube.com/watch?v=jydNXmhOcnE",
      "title": "MIGHFAR SUGANDA - ANTI ∞ HERO - LIRIK - TERJEMAHAN",
      "description": "BY : @MighfarSuganda Original music : https://youtu.be/07qofDUkU3s?si=pEZfnFB6JGMO8OFs.",
      "image": "https://i.ytimg.com/vi/jydNXmhOcnE/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/jydNXmhOcnE/hq720.jpg",
      "seconds": 217,
      "timestamp": "3:37",
      "duration": {
        "seconds": 217,
        "timestamp": "3:37"
      },
      "ago": "9 days ago",
      "views": 2687,
      "author": {
        "name": "gangga musik",
        "url": "https://youtube.com/@ganggaMusikk"
      }
    },
    {
      "type": "video",
      "videoId": "gwspUO5s1wM",
      "url": "https://youtube.com/watch?v=gwspUO5s1wM",
      "title": "Mighfar Suganda - Anti ∞ Hero (Lirik dan Terjemahan Indonesia)♪♪♪",
      "description": "antihero #mighfarsuganda #laguviraltiktok #viral #sadsong #lagugalau #lirik #terjemahan_indonesia #masukberanda #fyp ...",
      "image": "https://i.ytimg.com/vi/gwspUO5s1wM/hqdefault.jpg",
      "thumbnail": "https://i.ytimg.com/vi/gwspUO5s1wM/hqdefault.jpg",
      "seconds": 191,
      "timestamp": "3:11",
      "duration": {
        "seconds": 191,
        "timestamp": "3:11"
      },
      "ago": "13 days ago",
      "views": 5362,
      "author": {
        "name": "The Music",
        "url": "https://youtube.com/@TheMusic-01"
      }
    },
    {
      "type": "video",
      "videoId": "A7gK_KTyghM",
      "url": "https://youtube.com/watch?v=A7gK_KTyghM",
      "title": "Mighfar Suganda - Anti ∞ Hero (Lirik lagu)",
      "description": "Terima kasih sudah menonton   Jangan lupa subscribe, like, and comment Lirik : I'll come for you Stay in here Give your best ...",
      "image": "https://i.ytimg.com/vi/A7gK_KTyghM/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/A7gK_KTyghM/hq720.jpg",
      "seconds": 217,
      "timestamp": "3:37",
      "duration": {
        "seconds": 217,
        "timestamp": "3:37"
      },
      "ago": "5 days ago",
      "views": 230,
      "author": {
        "name": "FATHAS RMX",
        "url": "https://youtube.com/@FATHASRMX"
      }
    },
    {
      "type": "video",
      "videoId": "ZpEuKhBJ0UI",
      "url": "https://youtube.com/watch?v=ZpEuKhBJ0UI",
      "title": "anti hero - mighfar suganda (slowed + reverb) tiktok version",
      "description": "I dont own any pics & music used in this video © ALL CREDITS GO TO THE RIGHTFULL OWNERS. Support me here ...",
      "image": "https://i.ytimg.com/vi/ZpEuKhBJ0UI/hq720.jpg",
      "thumbnail": "https://i.ytimg.com/vi/ZpEuKhBJ0UI/hq720.jpg",
      "seconds": 223,
      "timestamp": "3:43",
      "duration": {
        "seconds": 223,
        "timestamp": "3:43"
      },
      "ago": "2 weeks ago",
      "views": 5668,
      "author": {
        "name": "Elstrax.",
        "url": "https://youtube.com/@notelstrax"
      }
    }
  ]
}
```



Sekian. Yth bálzz.
