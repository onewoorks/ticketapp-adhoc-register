<template>
  <div>
    <v-container style="margin-bottom:30px;">
        <div id="content">
      <v-card v-for="(ticket, index) in tickets" :key="index"
      class='text-center qrcode_card'
      >
  
      <center>
        <v-img src='/images/events/4/teraju-logo.jpg' alt="" width="300px"/>
        <div style="font-weight:bold; font-size: 1.3em">{{ event_detail.event_info.event_name.toUpperCase() }}</div>
        
        <v-img src='/images/events/4/logo-jana.png' alt="" width="130px" />
      </center>
        
        <qrcode :value="ticket.event_code+'-'+ticket.id+'-'+ticket.register_code" :options="{ width: 200 }"></qrcode>
        <v-card-text style="position:relative; color:#000000">
          <div class="qrcode_code">{{ ticket.qr_code.toUpperCase() }}</div>
          <div class="qrcode_name">{{ ticket.fullname.toUpperCase() }}</div>
          <div>{{ ticket.email }}</div>
          <div>{{ ticket.phone_no}}</div>
          <div>{{ ticket.identification_no}}</div>
          <div>{{ ticket.register_mode }} | RM {{ ticket.charges.toFixed(2)}}</div>
        </v-card-text>
       
          <v-img src='/images/events/4/teh-tarik-2.png' width="300px" style="opacity:0.5" />
          <v-img src='/images/events/4/logo-baru.png' width="100px" style="position:absolute; bottom:10px; right:10px"/>
    
      </v-card>
      
       </div>
    </v-container>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import VueQrcode from "@chenfengyuan/vue-qrcode";
export default {
  data: function() {
    return {
      tickets: [],
      event_detail: null
    };
  },
  components: {
    qrcode: VueQrcode
  },
  methods: {
    add_to_local_storage: function(tickets, events) {
      let qrcode_info = {
        events: events,
        tickets: tickets
      };
      localStorage.setItem("confirmed_qrcode", JSON.stringify(qrcode_info));
    },
    downloadQrCodes: function() {
      const doc = new jsPDF('p', 'mm',[550,720]);
    // const doc = new jsPDF('p', 'mm');
      var canvasElement = document.createElement("canvas");
    //   canvasElement.width = 1400
    //   canvasElement.height = 720
      html2canvas(document.getElementById('content'), { canvas: canvasElement }).then(function(
        canvas
      ) {
        const img = canvas.toDataURL("image/jpeg");
        doc.addImage(img, "JPEG", 0, 0, 100, 600);
        // while (heightLeft >= 0){
            // position = heightLeft - imgHeight
            // doc.addPage()
            // doc.addImage(img, "JPEG", 0, position, imgWidth, imgHeight+15);
            // heightLeft -= pageHeight
    //   }
        
        doc.save("sample.pdf");
      });
    }
  },
  mounted: function() {
    this.tickets = this.$route.params.persons;
    console.log(this.tickets)
    this.event_detail = this.$route.params.events;
  }
};
</script>

<style lang="scss" scoped>
.qrcode_code {
  font-weight: bold;
  font-size: 1.5em;
}
.qrcode_name {
  font-size: 1.3em;
  padding-top: 10px;
}
.qrdownload {
    position: fixed;
    bottom:0;
    left:0;
    border-radius: 0
}
.qrcode_card {
        margin-bottom: 20px;
    }
</style>