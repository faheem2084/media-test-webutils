
const supportedConstrains = navigator.mediaDevices.getSupportedConstraints();
console.log(supportedConstrains);

const changeVideoSize = ()=> {

    const capabilities = track.getCapabilities()
    const height = document.querySelector('#vid-height').value
    const width = document.querySelector('#vid-width').value

    stream.getVideoTracks().forEach(track=>{
        const vConstrains = {
            height: {exact: height < capabilities.height.max ? height: capabilities.height.max },
            width: {exact: width < capabilities.width.max ? width: capabilities.width.max },
            // frameRate: 5,
            // aspectRation: 10,

        }
        track.applyConstraints(vConstrains)
    })

    // stream.getTracks().forEach(track => {
    //     const capabilities = track.getCapabilities();
    //     console.log(capabilities);
    // });
}