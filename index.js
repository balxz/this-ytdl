import axios from "axios"

export const ytmp3 = async (urls) => {
try {
    const response = await axios.get("https://y2ts.us.kg/token")
    const token = response.data.token
    const url = `https://y2ts.us.kg/youtube?url=${urls}`
    const headers = {
        "Authorization-Token": token,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0 Win64 x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
        "Content-Type": "application/json",
    }

    const videoResponse = await axios.get(url, { headers })
    return videoResponse.data.result
  } catch(e) {
    throw "males"
   }
}
