import axios from "axios"
import search from "yt-search"

const Api = {
  async ytmp3(query) {
    try {
      let kntl = axios.get(`https://api.siputzx.my.id/api/d/ytmp3?url=${query}`).then(d => d.data.data.dl)
      return kntl
    } catch (e) {
      return {
        status: false,
        message: "males",
      }
    }
  },
  
  /* async mp4(query) {
    try {
      let kntll = axios.get(`https://api.siputzx.my.id/api/d/ytmp3?url=${query}`).then(d => d.data.data.dl)
      return kntll
    } catch (e) {
      return {
        status: false,
        message: "males",
      }
    }
  }, */
  
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
