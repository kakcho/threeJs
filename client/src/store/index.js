import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    ifFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './fulldeca.jpg',
})

export default state;