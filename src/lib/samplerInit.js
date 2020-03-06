import pianoConfig from '../config/pianoConfig'

const SampleLibrary = {
  samples: [],
  files: {},
  baseUrl: '/piano/',
  init: function () {
    this.getPianoAllSamples()
    this.samplesToFile()
    console.log(this.files)
    return this
  },
  getPianoAllSamples: function () {
    pianoConfig.forEach((e) => {
      this.samples.push(e.value)
      if (e.subValue) {
        this.samples.push(e.subValue)
      }
    })
  },
  samplesToFile: function () {
    this.samples.forEach((e) => {
      const ee = e.replace('s', '#')
      Object.assign(this.files, { [ee]: e + '.mp3' })
    })
  }
}

export default SampleLibrary
