import {playMode} from 'assets/js/config'
// import {loadSearch, loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  singer: {}, // 歌手页面列表，某个歌手的相关数据对象使用头像与名称
  playing: false, // 是播放状态
  fullScreen: false, // 播放页面的展开收起
  playlist: [], // 当前播放列表
  sequenceList: [], // 顺序的列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1, // 当前播放索引
  vkey: ""
  // disc: {},
  // topList: {},
  // searchHistory: loadSearch(),
  // playHistory: loadPlay(),
  // favoriteList: loadFavorite()
}

export default state