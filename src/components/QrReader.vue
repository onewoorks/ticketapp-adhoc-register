<template>
  <div
    :class="{ 'fullscreen': fullscreen }"
    :key="componentKey"
    ref="wrapper"
    @fullscreenchange="onFullscreenChange"
  >
    <qrcode-stream @decode="onDecode" @init="onInit" />
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";

export default {
  name: "QrReader",
  components: {
    QrcodeStream
  },
  data: function() {
    return {
      customer: {},
      fullscreen: true,
      componentKey: 0,
      reader_counter: null
    };
  },
  methods: {
    reset_reader_counter() {
      localStorage.removeItem("counter_no");
      this.reader_counter = null
    },
    onFullscreenChange(event) {
      this.fullscreen = document.fullscreenElement !== null;
    },

    requestFullscreen() {
      const elem = this.$refs.wrapper;

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
      }
    },

    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
      }
    },

    logErrors(promise) {
      promise.catch(console.error);
    },
    onDecode(result) {
        // let found = result.split('https://192.168.0.198:8080/')
        window.location.href = result
    },
    onClose() {
      this.forceRerender();
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    }
  },
  mounted: function() {
    let origin_url = process.env
    console.log(origin_url)
  }
};
</script>


<style scoped>
.btn {
  border-radius: 0;
}
.modal-dialog-centered {
  align-items: flex-end;
}

.fullscreen {
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.fullscreen-button {
  background-color: white;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
}
.fullscreen-button img {
  width: 2rem;
}
.qrreader {
  position: absolute;
  z-index: 1001;
  background-color: #fff;
  width: 100%;
}
.qrreader > img {
  float: left;
}
.qrreader > .detail {
  line-height: 80px;
}
</style>