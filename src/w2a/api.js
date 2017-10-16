module.exports = {
  request: {
    mapping: 'httpRequest',
    params: {
      header: 'headers'
    }
  },
  uploadFile: {
    params: {
      name: 'fileName'
    }
  },
  connectSocket: {
    params: {
      header: 'headers',
      protocols: '',
      method: ''
    }
  },
  closeSocket: {
    params: {
      code: '',
      reason: ''
    }
  },
  onSocketClose: null,
  chooseImage: {
    params: {
      sizeType: ''
    }
  },
  getImageInfo: null,
  saveImageToPhotosAlbum: {
    mapping: 'saveImage',
    params: {
      filePath: 'url'
    }
  },
  startRecord: null,
  stopRecord: null,
  getRecorderManager: null,
  getBackgroundAudioPlayerState: null,
  playBackgroundAudio: null,
  pauseBackgroundAudio: null,
  seekBackgroundAudio: null,
  stopBackgroundAudio: null,
  onBackgroundAudioPlay: null,
  onBackgroundAudioPause: null,
  onBackgroundAudioStop: null,
  getBackgroundAudioManager: null,
  createAudioContext: null,
  createInnerAudioContext: null,
  chooseVideo: null,
  saveVideoToPhotosAlbum: null,
  createVideoContext: null,
  createCameraContext: null,
  saveFile: null,
  getSavedFileList: null,
  getSavedFileInfo: null,
  removeSavedFile: null,
  openDocument: null,
  chooseLocation: null,
}