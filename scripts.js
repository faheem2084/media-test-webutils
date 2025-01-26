let stream = null // initialise stream
let mediaStream = null;

const videoEl = document.querySelector('#my-video')
const contraints =  {
    audio: true,
    video: true,
}

const getMicAndCamera = async(e)=> {
    try{
        stream  = await navigator.mediaDevices.getUserMedia(contraints);
        console.log(stream);
        changeButtons([
            'green', 'blue', 'blue', 'grey','grey','grey','grey', 'grey'
        ])


    }catch(err){
        // user denied device access
        console.log("User denied device access..");
    }
};

const showMyFeed = e=> {
    if(!stream){
        alert("Stream still loading....")
        return;
    }
    videoEl.srcObject = stream;
    console.log("My feed is working...")
    const tracks = stream.getTracks();
    console.log(tracks);
    changeButtons([
        'green', 'green', 'blue', 'blue','blue','grey','grey', 'blue'
    ])

}

const stopMyFeed =e=>{
    const tracks = stream.getTracks();
    tracks.forEach(track=>{
        track.stop();
    })
    changeButtons([
        'blue', 'grey', 'grey', 'grey','grey','grey','grey', 'grey'
    ])


}

document.querySelector('#share').addEventListener('click', e=>getMicAndCamera(e))
document.querySelector('#show-video').addEventListener('click', e=> showMyFeed(e))
document.querySelector('#stop-video').addEventListener('click', e=> stopMyFeed(e))
document.querySelector('#change-size').addEventListener('click', e=> changeVideoSize(e))
document.querySelector('#start-record').addEventListener('click', e=> startRecording(e))
document.querySelector('#stop-record').addEventListener('click', e=> stopRecording(e))
document.querySelector('#play-record').addEventListener('click', e=> playRecording(e))
document.querySelector('#share-screen').addEventListener('click', e=> shareScreen(e))
