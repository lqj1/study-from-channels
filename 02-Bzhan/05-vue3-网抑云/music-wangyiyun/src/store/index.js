// import { createStore } from 'vuex';
// import api from '@/api/index';
// import axios from 'axios';
// // import mutations from './mutations';
// // import actions from './actions';
// // import getters from './getters';
// const state = {};
// export default createStore({
//   state: {
//     playlist: [
//       {
//         al: {
//           id: 34678113,
//           name: 'Lake Arrowhead EP',
//           pic: 109951163302931200,
//           picUrl: 'http://p3.music.126.net/UQjT1X6Zn5OWW7pYsElIwg==/109951163302931194.jpg',
//           pic_str: '109951163302931194',
//           tns: [],
//         },
//       },
//     ],
//     playCurrentIndex: 0,
//     lyric: [], //因为歌词需要全局使用，所以放在store中
//   },
//   mutations: {
//     setPlaylist: function(state, value) {
//       // console.log(value);
//       state.playlist = value;
//     },
//     // 修改播放第几首
//     setPlayIndex(state, val) {
//       state.playCurrentIndex = val;
//     },
//     setLyric(state, value) {
//       state.lyric = value;
//     },
//   },
//   actions: {
//     // 异步获取歌词，导入方法有问题，就整个写
//     async reqLyric(context, payload) {
//       let baseUrl = 'http://localhost:3000';
//       let res = await api.getLyric(payload.id);
//       // let res = await axios.get(`${baseUrl}/lyric?id=${payload.id}`)
//       console.log('res', res);
//     },
//   },
//   // getters,
// });
