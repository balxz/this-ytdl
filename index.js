import axios from "axios"
import search from "yt-search"

const Api = {
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
