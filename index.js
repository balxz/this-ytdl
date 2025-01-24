import axios from "axios"

export const ytmp3 = async (urls) => {
  try {
    const response = await axios.get("https://y2ts.us.kg/token")
    const token = response.data.token
    const url = `https://y2ts.us.kg/youtube?url=${urls}`
    const headers = {
      "Authorization-Token": token,
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
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
        nams: a.name,
        download: a.mp3,
      },
    }
  } catch (e) {
    return {
      status: false,
      message: "males"
    }
  }
}

//return ytmp3("https://youtu.be/9MYRSg2VPsk?si=IuuO5LK3XG3l-Qb-")
