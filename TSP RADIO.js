class Player{
    constructor(){
        var HeightMain = document.getElementById("player");
        HeightMain.style.height = screen.height+"px";
        if(screen.width<500){
            HeightMain.style.width = screen.width+"px";
        }else{

        }
        var heightDiv = document.getElementById("content");
        heightDiv.style.height = screen.height-300+"px";
    }
}
onload = ()=>{
    new Player();
};

//class buttons
class Audio_Player{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.audio_file.volume = 50/100;
        this.title_radio = document.getElementById("title_audio");
        this.saveBtn = document.getElementById("save");
        this.bred = document.getElementById("bred");
        this.bgreen = document.getElementById("bgreen");
        this.bpink = document.getElementById("bpink");
        this.bblue = document.getElementById("bblue");
        this.play_pauseb = document.getElementById("play_pause");
        if(localStorage.getItem("COLOR")!=null){
            this.select_color(localStorage.getItem("COLOR"));
        }
        this.saveBtn.addEventListener("click",()=>{
            this.save();
        });
        this.bred.addEventListener("click",()=>{
            this.select_color("color1");
        });
        this.bgreen.addEventListener("click",()=>{
            this.select_color("color2");
        });
        this.bpink.addEventListener("click",()=>{
            this.select_color("color3");
        });
        this.bblue.addEventListener("click",()=>{
            this.select_color("color4");
        });
        this.play_pauseb.addEventListener("click",()=>{
            this.play_pause();
        });
        this.volume_range = document.getElementById("volume_range");
        this.volume_range.addEventListener("change",()=>{
            this.audio_file.volume = this.volume_range.value/100;
        });
        this.names_radio=[];
        this.names_radio[0] = "FUSE FM";
        this.names_radio[1] = "RADIO AMWAJ FM";
        this.names_radio[2] = "RADIO DIMSHQ FM";
        this.names_radio[3] = "RADIO SHABAB FM";
        this.names_radio[4] = "RAYAN FM";
        this.names_radio[5] = "RADIO 1 FM";
        this.names_radio[6] = "RADIO 2 FM";
        this.names_radio[7] = "RADIO 3 FM";
        this.names_radio[8] = "RADIO ZENOBIA FM";
        this.names_radio[9] = "RADIO 4 FM";
        this.names_radio[10] = "RADIO KARMA FM";
        this.names_radio[11] = "RADIO 6 FM";
        this.names_radio[12] = "RADIO TEBESSA FM";
        this.names_radio[13] = "ADRAR FM";
        this.names_radio[14] = "CHLEF FM";
        this.names_radio[15] = "LAGHOUAT FM";
        this.names_radio[16] = "OUM BOUAGHI FM";
        this.names_radio[17] = "BATNA FM";
        this.names_radio[18] = "BEJAIA FM";
        this.names_radio[19] = "BISKRA FM";
        this.names_radio[20] = "BECHAR FM";
        this.names_radio[21] = "BLIDA FM";
        this.names_radio[22] = "BOUIRA FM";
        this.names_radio[23] = "TAMENRASSET FM";
        this.names_radio[24] = "TLEMCEN FM";
        this.names_radio[25] = "TIARET FM";
        this.names_radio[26] = "TIZI OUZOU FM";
        this.names_radio[27] = "ELBAHDJA FM";
        this.names_radio[28] = "DJELFA FM";
        this.names_radio[29] = "SETIF FM";
        this.names_radio[30] = "SKIKDA FM";
        this.names_radio[31] = "ANNABA FM";
        this.names_radio[32] = "OUARGLA FM";
        this.names_radio[33] = "ORAN FM";
        this.names_radio[34] = "BAYADH FM";
        this.names_radio[35] = "ILLIZI FM";
        this.names_radio[36] = "BORDJ BOU ARRERIDJ FM";
        this.names_radio[37] = "BOUMERDES FM";
        this.names_radio[38] = "EL TARF FM";
        this.names_radio[39] = "TISSEMSILT FM";
        this.names_radio[40] = "EL OUED FM";
        this.names_radio[41] = "KHENCHLA FM";
        this.names_radio[42] = "TIPAZA FM";
        this.names_radio[43] = "MILA FM";
        this.names_radio[44] = "AIN DEFLA FM";
        this.names_radio[45] = "NAAMA FM";
        this.names_radio[46] = "AIN TIMOUCHENT FM";
        this.names_radio[47] = "GHARDAIA FM";
        this.names_radio[48] = "RELIZANE FM";
        this.names_radio[49] = "FECR RADYO FM";
        this.names_radio[50] = "RADIO MAURITANIE FM";
        this.names_radio[51] = "RADIO ORIENT FM";
        this.names_radio[52] = "RADYO HABER FM";
        this.names_radio[53] = "RADYO KILIM FM";
        this.source_audio = [];
        this.source_audio[0] = "http://192.99.17.12:4986/;stream";
        this.source_audio[1] = "http://radioliveb.rtv.gov.sy:8002/RadioAmwaj";
        this.source_audio[2] = "http://radioliveb.rtv.gov.sy:8002/RadioDimshq";
        this.source_audio[3] = "http://radioliveb.rtv.gov.sy:8002/RadioShabab";
        this.source_audio[4] = "http://ninarfm.grtvstream.com:8896/;";
        this.source_audio[5] = "http://78.129.150.144/live.mp3?typeportmount=s1_28227_stream";
        this.source_audio[6] = "http://192.99.17.12:4978/;stream";
        this.source_audio[7] = "https://radioshamfm.grtvstream.com:8400/;";
        this.source_audio[8] = "http://radioliveb.rtv.gov.sy:8002/RadioZenobia";
        this.source_audio[9] = "http://148.251.92.51:9342/stream?type=http&nocache=10";
        this.source_audio[10] = "http://radioliveb.rtv.gov.sy:8002/RadioKarma";
        this.source_audio[11] = "http://radioshamfm.grtvstream.com:8400/;stream.nsv";
        this.source_audio[12] = "https://radiotebessa.ice.infomaniak.ch/12.aac";
        this.source_audio[13] = "https://adrar.ice.infomaniak.ch/01.aac";
        this.source_audio[14] = "https://chlef.ice.infomaniak.ch/02.aac";
        this.source_audio[15] = "https://laghouat.ice.infomaniak.ch/03.aac";
        this.source_audio[16] = "https://oeb.ice.infomaniak.ch/04.aac";
        this.source_audio[17] = "https://batna.ice.infomaniak.ch/05.aac";
        this.source_audio[18] = "https://bejaia.ice.infomaniak.ch/06.aac";
        this.source_audio[19] = "https://biskra.ice.infomaniak.ch/07.aac";
        this.source_audio[20] = "https://bechar.ice.infomaniak.ch/08.aac";
        this.source_audio[21] = "https://blida.ice.infomaniak.ch/09.aac";
        this.source_audio[22] = "https://bouira.ice.infomaniak.ch/10.aac";
        this.source_audio[23] = "https://tamanrasset.ice.infomaniak.ch/11.aac";
        this.source_audio[24] = "https://tlemcen.ice.infomaniak.ch/13.aac";
        this.source_audio[25] = "https://tiaret.ice.infomaniak.ch/14.aac";
        this.source_audio[26] = "https://tiziouzou.ice.infomaniak.ch/15.aac";
        this.source_audio[27] = "https://elbahdja.ice.infomaniak.ch/elbahdja-32.aac";
        this.source_audio[28] = "https://djelfa.ice.infomaniak.ch/17.aac";
        this.source_audio[29] = "https://setif.ice.infomaniak.ch/19.aac";
        this.source_audio[30] = "https://skikda.ice.infomaniak.ch/21.aac";
        this.source_audio[31] = "https://annaba.ice.infomaniak.ch/23.aac";
        this.source_audio[32] = "https://ouargla.ice.infomaniak.ch/30.aac";
        this.source_audio[33] = "https://oran.ice.infomaniak.ch/31.aac";
        this.source_audio[34] = "https://bayadh.ice.infomaniak.ch/32.aac";
        this.source_audio[35] = "https://illizi.ice.infomaniak.ch/33.aac";
        this.source_audio[36] = "https://bba.ice.infomaniak.ch/34.aac";
        this.source_audio[37] = "https://boumerdes.ice.infomaniak.ch/35.aac";
        this.source_audio[38] = "https://eltarf.ice.infomaniak.ch/36.aac";
        this.source_audio[39] = "https://tissemsilt.ice.infomaniak.ch/38.aac";
        this.source_audio[40] = "https://eloued.ice.infomaniak.ch/39.aac";
        this.source_audio[41] = "https://khenchla.ice.infomaniak.ch/40.aac";
        this.source_audio[42] = "https://tipaza.ice.infomaniak.ch/42.aac";
        this.source_audio[43] = "https://mila.ice.infomaniak.ch/43.aac";
        this.source_audio[44] = "https://aindefla.ice.infomaniak.ch/44.aac";
        this.source_audio[45] = "https://naama.ice.infomaniak.ch/45.aac";
        this.source_audio[46] = "https://aintemouchent.ice.infomaniak.ch/46.aac";
        this.source_audio[47] = "https://ghardaia.ice.infomaniak.ch/47.aac";
        this.source_audio[48] = "https://relizane.ice.infomaniak.ch/48.aac";
        this.source_audio[49] = "https://yayin2.canliyayin.org:10966/;stream.mp3";
        this.source_audio[50] = "https://radiomauritaniechaine1.ice.infomaniak.ch/radiomauritaniechaine1.aac";
        this.source_audio[51] = "http://stream3.broadcast-associes.com:8405/Radio-Orient";
        this.source_audio[52] = "http://yayin2.yayindakiler.com:4118/;";
        this.source_audio[53] = "http://yayin.netyayin.net:2727/1";
        this.server = 0;
        if(localStorage.getItem("SAVE_POSITION")!=null){
            this.server = localStorage.getItem("SAVE_POSITION");
        }
        this.setResource();
        document.getElementById("next").addEventListener("click",()=>{
            if(this.server>=this.source_audio.length-1){
                this.server = 0;
                this.setResource();
                this.play_pause();
                this.play_pause();
            }else{
                this.server++;
                this.setResource();
                this.play_pause();
                this.play_pause();
            }
        });
        document.getElementById("back").addEventListener("click",()=>{
            if(this.server<=0){
                this.server = this.source_audio.length-1;
                this.setResource();
                this.play_pause();
                this.play_pause();
            }else{
                this.server--;
                this.setResource();
                this.play_pause();
                this.play_pause();
            }
        });
    }
    setResource(){
        this.audio_file.src = this.source_audio[this.server];
        this.title_radio.innerText = this.names_radio[this.server];
    }
    play_pause(){
        if(this.play_pauseb.classList.contains("playing")){
            this.audio_file.pause();
            this.play_pauseb.classList.remove("playing");
            this.play_pauseb.src = "play.png";
        }else{
            this.audio_file.play();
            this.play_pauseb.classList.add("playing");
            this.play_pauseb.src = "pause.png";
        }
    }
    save(){
        localStorage.setItem("SAVE_POSITION",this.server);
    }
    select_color(color){
        if(color == "color1"){
            document.body.style.background = "rgb(39, 39, 37)";
        }else if(color == "color2"){
            document.body.style.background = "rgb(224, 69, 12)";
        }else if(color == "color3"){
            document.body.style.background = "rgb(0, 102, 255)";
        }else if(color == "color4"){
            document.body.style.background = "rgb(32, 133, 32)";
        }
        localStorage.setItem("COLOR",color);
    }
}
onload = ()=>{
    new Audio_Player();
};