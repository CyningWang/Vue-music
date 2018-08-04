export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.url = url
  }
}

// 工厂方法
export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval
    // url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?guid=3638542697&vkey=${vkey}&uin=0&fromtag=38`
  })
}

// 对多个演唱者进行姓名拼接，比如：薛之谦/伊一
function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((item) => {
    ret.push(item.name)
  })
  return ret.join('/')
}