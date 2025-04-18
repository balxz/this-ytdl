import axios from "axios"
import search from "yt-search"

const Api = {
  async ytmp3(query) {
    try {
      const res = await axios.get(`https://api.siputzx.my.id/api/d/ytmp3?url=${query}`)
      return res.data.data.dl
    } catch (e) {
      return {
        status: false,
        message: "males",
      }
    }
  },
  
  async mp4(query) {
    try {
      const res = await axios.get(`https://api.siputzx.my.id/api/d/ytmp4?url=${query}`)
      return res.data.data.dl
    } catch (e) {
      return {
        status: false,
        message: "males",
      }
    }
  }, 
  
  async yts(query) {
    try {
      const res = await search(query)
      const videos = res.videos
      if (videos.length > 0) {
        const randomIndex = Math.floor(Math.random() * videos.length)
        const video = videos[randomIndex]
        return {
          status: true,
          message: "Success",
          owner: "bálxzzy — SH",
          data: {
            id: video.videoId,
            title: video.title,
            desc: video.description,
            imej: video.image,
            thumb: video.thumbnail,
            uploadTime: video.ago,
            views: video.views,
            author: video.author.name,
            url: video.url,
          },
        }
      } else {
        return {
          status: false,
          message: "No video found",
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
