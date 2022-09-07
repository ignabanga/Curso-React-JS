import ImgBuzo from '../img/buzo.png'
import ImgBuzoAdidas from '../img/buzoAdidas.png'
import ImgBuzoStich from '../img/buzoStich.png'
import ImgJean from '../img/jean.png'
import ImgJogger from '../img/pantalonJogger.png'
import ImgPantalonVestir from '../img/pantalonVestirNegro.png'
import ImgCamisa from '../img/camisa.png'
import ImgCamisaIndia from '../img/camisaIndia.png'
import ImgCamisaLeñador from '../img/camisaLeñador.png'
import ImgRemera from '../img/remera.png'
import ImgRemeraNike from '../img/remeraNike.png'
import ImgRemeraNikeBlanca from '../img/remeraNikeBlanca.png'



const dataItem = [
    {nombre: "Camisa", marca: "Marca1", imagen: [ImgCamisa], precio: 5000, stock:15, id: '1', categoria:"Camisa", info:'Esta es una descripcion del producto 1', envio:'Disponible envío rapido'},
    {nombre: "Remera", marca: "Marca2", imagen: [ImgRemera], precio: 2500, stock:10, id: '2', categoria:"Remera", info:'Esta es una descripcion del producto 2', envio:'Llega en 3 días'},
    {nombre: "Jean", marca: "Marca3", imagen: [ImgJean], precio: 7000, stock:12, id: '3', categoria:"Pantalon", info:'Esta es una descripcion del producto 3', envio:'Llega en 3 días'},
    {nombre: "Buzo", marca: "Marca4", imagen: [ImgBuzo], precio: 4000, stock:18, id: '4', categoria:"Buzo", info:'Esta es una descripcion del producto 4', envio:'Disponible envío rapido'},
    {nombre: "Buzo Adidas", marca: "Adidas", imagen: [ImgBuzoAdidas], precio: 6500, stock:8, id: '5', categoria:"Buzo", info:'Esta es una descripcion del producto 1', envio:'Disponible envío rapido'},
    {nombre: "Buzo Stich", marca: "Stich", imagen: [ImgBuzoStich], precio: 6250, stock:11, id: '6', categoria:"Buzo", info:'Esta es una descripcion del producto 1', envio:'Disponible envío rapido'},
    {nombre: "Pantalon Jogger", marca: "Marca3", imagen: [ImgJogger], precio: 4500, stock:5, id: '7', categoria:"Pantalon", info:'Esta es una descripcion del producto 1', envio:'Disponible envío rapido'},
    {nombre: "Pantalon de vestir", marca: "Marca3", imagen: [ImgPantalonVestir], precio: 4000, stock:12, id: '8', categoria:"Pantalon", info:'Esta es una descripcion del producto 1', envio:'Disponible envío rapido'},
    {nombre: "Camisa India", marca: "Marca1", imagen: [ImgCamisaIndia], precio: 6500, stock:20, id: '9', categoria:"Camisa", info:'Esta es una descripcion del producto 1', envio:'Disponible envío rapido'},
    {nombre: "Camisa Leñador", marca: "Marca1", imagen: [ImgCamisaLeñador], precio: 5000, stock:10, id: '10', categoria:"Camisa", info:'Esta es una descripcion del producto 1', envio:'Disponible envío rapido'},
    {nombre: "Remera Nike SB", marca: "Marca1", imagen: [ImgRemeraNike], precio: 2200, stock:19, id: '11', categoria:"Remera", info:'Esta es una descripcion del producto 1', envio:'Disponible envío rapido'},
    {nombre: "Remera Nike Blanca", marca: "Marca1", imagen: [ImgRemeraNikeBlanca], precio: 3100, stock:15, id: '12', categoria:"Remera", info:'Esta es una descripcion del producto 1', envio:'Disponible envío rapido'},

]


const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(dataItem)
        reject(err => console.log(err))
    }, 2000)
})

export default getFetch;