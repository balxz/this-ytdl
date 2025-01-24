import axios from "axios"
import search from "yt-search"

const Api = {
  async ytmp3(urls) {
    try {
      const response = await axios.get("https://y2ts.us.kg/token")
      const token = response.data.token
      const url = `https://y2ts.us.kg/youtube?url=${urls}`
      const headers = {
        "Authorization-Token": token,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Content-Type": "application/json",
      }
      const u = await axios.get(url, { headers })
      const a = u.data.result
      return {
        status: true,
        message: "Success",
        owner: "balxzzy — SH",
        data: {
          id: a.id,
          title: a.title,
          desc: a.description,
          imej: a.image,
          thumb: a.thumbnail,
          uploadTime: a.ago,
          views: a.views,
          name: a.name,
          download: a.mp3,
        },
      }
    } catch (e) {
      return {
        status: false,
        message: "males",
      }
    }
  },

  async ytmp4(urls) {
    try {
      const response = await axios.get("https://y2ts.us.kg/token")
      const token = response.data.token
      const url = `https://y2ts.us.kg/youtube?url=${urls}`
      const headers = {
        "Authorization-Token": token,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Content-Type": "application/json",
      }
      const u = await axios.get(url, { headers })
      const a = u.data.result
      return {
        status: true,
        message: "Success",
        owner: "balxzzy — SH",
        data: {
          id: a.id,
          title: a.title,
          desc: a.description,
          imej: a.image,
          thumb: a.thumbnail,
          uploadTime: a.ago,
          views: a.views,
          name: a.name,
          download: a.mp4,
        },
      }
    } catch (e) {
      return {
        status: false,
        message: "males",
      }
    }
  },

  async yts(query) {
    try {
      let res = await search(query)
      let vi = res.videos
      if (vi.length > 0) {
        let ri = Math.floor(Math.random() * vi.length)
        let rv = vi[ri]
        return {
          status: true,
          message: "Success",
          owner: "bálxzzy — SH",
          data: {
            id: rv.videoId,
            title: rv.title,
            desc: rv.description,
            imej: rv.image,
            thumb: rv.thumbnail,
            uploadTime: rv.ago,
            views: rv.views,
            author: rv.author.name,
            url: rv.url,
          },
        }
      }
    } catch (e) {
      return {
        status: false,
        message: "males",
      }
    }
  },
}

export default Api
