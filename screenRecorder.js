let recordedBlob;
let mediaRecorder;

const startRecording = () =>{
    if(!stream){
        alert("No Media Stream")
        return
    }

    console.log("Start recording...")
    recordedBlob = [];
    mediaRecorder = new MediaRecorder(stream)
    mediaRecorder.ondataavailable = e=>{
        console.log("Data is available..")
        recordedBlob.push(e.data)
    }
    mediaRecorder.start();
    changeButtons([
        'green', 'green', 'blue', 'blue','green','blue','grey', 'blue'
    ])

}

const stopRecording =()=>{
    if(!mediaRecorder){
        alert("Please record before stopping")
        return
    }
    console.log("Stop recording....")
    mediaRecorder.stop();
    changeButtons([
        'green', 'green', 'blue', 'blue','green','green','blue', 'blue'
    ])

}

const playRecording =()=>{
    if(!recordedBlob){
        alert("No recorded blob")
        return
    }
    console.log("Play recording....")
    const superBuffer = new Blob(recordedBlob)
    const recordedVideoEl = document.querySelector('#other-video')
    recordedVideoEl.src =  window.URL.createObjectURL(superBuffer)
    recordedVideoEl.controls = true;
    recordedVideoEl.play();
    changeButtons([
        'green', 'green', 'blue', 'blue','green','green','green', 'blue'
    ])


}
